// Lotus Arch invite: loads the couple's details, fills the page, runs the animation.
//
// Details come from ./data.json next to the page. If data.json has a
// "sheet_csv_url" (a Google Sheet published as CSV), the sheet's values
// override data.json, so couples can edit their invite from the sheet.

(function () {
  "use strict";

  const MAX_EVENTS = 9;

  async function loadData() {
    const data = await fetch("data.json", { cache: "no-store" }).then((r) => r.json());
    if (!data.sheet_csv_url) return data;
    try {
      // Cache-bust so edits show up as soon as Google republishes the sheet.
      const sep = data.sheet_csv_url.includes("?") ? "&" : "?";
      const csv = await fetch(data.sheet_csv_url + sep + "t=" + Date.now()).then((r) => {
        if (!r.ok) throw new Error("Sheet returned " + r.status);
        return r.text();
      });
      return Object.assign({}, data, sheetToFields(parseCsv(csv)));
    } catch (err) {
      console.warn("Could not read the Google Sheet, using data.json instead.", err);
      return data;
    }
  }

  // Minimal RFC 4180 parser: handles quotes, escaped quotes and line breaks inside cells.
  function parseCsv(text) {
    const rows = [];
    let row = [], cell = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
        else if (ch === '"') quoted = false;
        else cell += ch;
      } else if (ch === '"') quoted = true;
      else if (ch === ",") { row.push(cell); cell = ""; }
      else if (ch === "\n" || ch === "\r") {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(cell); rows.push(row); row = []; cell = "";
      } else cell += ch;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    return rows;
  }

  // Sheet layout: column A = field name, column B = value. Other columns are notes.
  function sheetToFields(rows) {
    const fields = {};
    rows.forEach((r) => {
      const key = (r[0] || "").trim();
      if (!key || key.toLowerCase() === "field" || key.startsWith("#")) return;
      fields[key] = (r[1] || "").trim();
    });
    return fields;
  }

  function collectEvents(data) {
    const events = [];
    for (let n = 1; n <= MAX_EVENTS; n++) {
      const name = data["event_" + n + "_name"];
      if (!name) continue;
      events.push({
        name,
        date: data["event_" + n + "_date"] || "",
        time: data["event_" + n + "_time"] || "",
        venue: data["event_" + n + "_venue"] || "",
        note: data["event_" + n + "_note"] || "",
        map: data["event_" + n + "_map"] || "",
      });
    }
    return events;
  }

  function fill(data) {
    if (!data.initials && data.bride_name && data.groom_name) {
      data.initials = first(data.bride_name) + " & " + first(data.groom_name);
    }
    document.querySelectorAll("[data-field]").forEach((el) => {
      const value = data[el.dataset.field];
      el.textContent = value || "";
      if (!value && el.classList.contains("t")) el.hidden = true;
    });
    if (data.page_title) document.title = data.page_title;

    renderEvents(collectEvents(data));
    renderRsvp(data);
    startCountdown(data.countdown_to, data.married_message);
    setupMusic(data.music_url);
    setupShare(data);

    // Stagger the card text in reading order.
    document.querySelectorAll(".card .t").forEach((el, i) => el.style.setProperty("--i", i));
    const fitNames = () => document.querySelectorAll(".t--name").forEach(fitToWidth);
    fitNames();
    if (document.fonts) document.fonts.ready.then(fitNames);
    window.addEventListener("resize", fitNames);
  }

  function first(name) {
    return name.trim().split(/\s+/)[0];
  }

  // Long names shrink to stay inside the arch.
  function fitToWidth(el) {
    el.style.fontSize = "";
    let size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollWidth > el.clientWidth && size > 10) {
      size -= 1;
      el.style.fontSize = size + "px";
    }
  }

  function renderEvents(events) {
    const list = document.getElementById("events");
    const section = list.closest("section");
    if (!events.length) { section.hidden = true; return; }
    events.forEach((ev) => {
      const card = document.createElement("article");
      card.className = "event reveal";
      card.append(
        textEl("h3", "event__name", ev.name),
        textEl("p", "event__when", ev.date),
        textEl("p", "event__when", ev.time),
        textEl("p", "event__venue", ev.venue),
        textEl("p", "event__note", ev.note)
      );
      if (ev.map) {
        const a = textEl("a", "btn btn--ghost", "Directions");
        a.href = ev.map;
        a.target = "_blank";
        a.rel = "noopener";
        card.append(a);
      }
      list.append(card);
    });
  }

  function textEl(tag, className, text) {
    const el = document.createElement(tag);
    el.className = className;
    el.textContent = text;
    if (!text) el.hidden = true;
    return el;
  }

  function renderRsvp(data) {
    const form = document.getElementById("rsvp-form");
    const wa = document.getElementById("rsvp-whatsapp");
    if (data.rsvp_form_url) {
      form.href = data.rsvp_form_url;
      form.hidden = false;
    }
    const number = (data.rsvp_whatsapp || "").replace(/[^\d]/g, "");
    if (number) {
      const msg = "Hi! RSVP for " + (data.initials || "the wedding") + ": ";
      wa.href = "https://wa.me/" + number + "?text=" + encodeURIComponent(msg);
      wa.hidden = false;
    }
    if (form.hidden && wa.hidden && !data.rsvp_note) {
      document.querySelector(".rsvp").hidden = true;
    }
  }

  function startCountdown(target, doneMessage) {
    const section = document.querySelector(".countdown");
    const when = target ? new Date(target) : null;
    if (!when || isNaN(when)) { section.hidden = true; return; }
    const units = {};
    section.querySelectorAll("[data-unit]").forEach((el) => (units[el.dataset.unit] = el));
    const tick = () => {
      const ms = when - Date.now();
      if (ms <= 0) {
        section.querySelector(".countdown__grid").hidden = true;
        const done = section.querySelector(".countdown__done");
        done.textContent = doneMessage || "Happily married!";
        done.hidden = false;
        return;
      }
      const s = Math.floor(ms / 1000);
      units.days.textContent = Math.floor(s / 86400);
      units.hours.textContent = Math.floor((s % 86400) / 3600);
      units.minutes.textContent = Math.floor((s % 3600) / 60);
      units.seconds.textContent = s % 60;
      setTimeout(tick, 1000);
    };
    tick();
  }

  let audio, musicBtn;
  function setupMusic(url) {
    if (!url) return;
    audio = document.getElementById("audio");
    musicBtn = document.getElementById("music");
    audio.src = url;
    musicBtn.addEventListener("click", () => (audio.paused ? playMusic() : pauseMusic()));
  }
  function playMusic() {
    if (!audio) return;
    audio.play().then(() => {
      musicBtn.hidden = false;
      musicBtn.classList.add("is-playing");
      musicBtn.setAttribute("aria-label", "Pause music");
    }).catch(() => { musicBtn.hidden = false; });
  }
  function pauseMusic() {
    audio.pause();
    musicBtn.classList.remove("is-playing");
    musicBtn.setAttribute("aria-label", "Play music");
  }

  function setupShare(data) {
    document.getElementById("share").addEventListener("click", async (e) => {
      e.preventDefault();
      const title = data.page_title || document.title;
      const url = location.href.split("#")[0];
      if (navigator.share) {
        try { await navigator.share({ title, url }); } catch (_) { /* cancelled */ }
      } else {
        window.open("https://wa.me/?text=" + encodeURIComponent(title + "\n" + url), "_blank", "noopener");
      }
    });
  }

  function makePetals() {
    const box = document.querySelector(".petals");
    const count = window.innerWidth < 560 ? 14 : 22;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      const size = 0.6 + Math.random() * 0.7;
      p.style.left = Math.random() * 100 + "%";
      p.style.transform = "scale(" + size + ")";
      p.style.setProperty("--drift", (Math.random() * 120 - 60).toFixed(0) + "px");
      p.style.animationDuration = (9 + Math.random() * 9).toFixed(1) + "s";
      p.style.animationDelay = (Math.random() * 12).toFixed(1) + "s";
      box.append(p);
    }
  }

  function revealOnScroll() {
    const els = document.querySelectorAll(".section__title, .countdown__grid, .rsvp__note, .rsvp__actions, .footer > *, .event");
    els.forEach((el) => el.classList.add("reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
  }

  function open() {
    if (document.body.classList.contains("is-open")) return;
    document.body.classList.replace("is-closed", "is-open");
    playMusic();
    setTimeout(() => document.getElementById("doors").remove(), 1800);
  }

  document.getElementById("doors").addEventListener("click", open);
  // Opening a specific section via link (e.g. #events) skips the doors.
  if (location.hash) open();

  loadData().then((data) => {
    fill(data);
    makePetals();
    revealOnScroll();
  }).catch((err) => console.error("Could not load the invite details.", err));
})();
