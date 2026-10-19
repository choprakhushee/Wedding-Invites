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

  // Depth effects. Phones/tablets: as the card scrolls away, each layer trails
  // behind it by a different amount. Desktop (card is fixed): layers shift with
  // the mouse and the card tilts. Decorations beside the sections scroll slower
  // than the page everywhere.
  function setupParallax() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = document.querySelector(".card");
    const q = (s) => card.querySelector(s);
    // scroll: fraction of the scroll a layer lags behind (0 = moves with the card).
    // mouse: how far it shifts with the pointer (bigger = closer to the viewer).
    // Clamps keep layers that touch an edge of the card from pulling away from it.
    const layers = [
      { el: q(".layer--bg"), scroll: 0.3, mouse: -0.5 },
      { el: q(".layer--arch"), scroll: 0.2, mouse: 0.3 },
      { el: q(".lanterns"), scroll: 0.12, mouse: 0.6, clampY: "up" },
      { el: q(".layer--om"), scroll: 0.15, mouse: 0.45 },
      { el: q(".text"), scroll: 0.15, mouse: 0.45 },
      { el: q(".layer--florals-left"), scroll: 0, mouse: 1, side: -1, clampY: "down" },
      { el: q(".layer--florals-right"), scroll: 0, mouse: 1, side: 1, clampY: "down" },
    ];
    const decos = [...document.querySelectorAll(".deco[data-speed]")];
    const desktop = matchMedia("(min-width: 960px)");
    const MOUSE_PX = 14, TILT_DEG = 3, SPREAD = 0.08;
    let mx = 0, my = 0, tx = 0, ty = 0, queued = false;

    function frame() {
      queued = false;
      if (desktop.matches) {
        mx += (tx - mx) * 0.08;
        my += (ty - my) * 0.08;
        layers.forEach((l) => {
          let x = mx * l.mouse * MOUSE_PX, y = my * l.mouse * MOUSE_PX;
          if (l.side) x = l.side < 0 ? Math.min(0, x) : Math.max(0, x);
          if (l.clampY === "up") y = Math.min(0, y);
          if (l.clampY === "down") y = Math.max(0, y);
          l.el.style.translate = x.toFixed(2) + "px " + y.toFixed(2) + "px";
        });
        card.style.transform = "perspective(1400px) rotateX(" + (-my * TILT_DEG).toFixed(2) +
          "deg) rotateY(" + (mx * TILT_DEG).toFixed(2) + "deg)";
        if (Math.abs(tx - mx) > 0.002 || Math.abs(ty - my) > 0.002) request();
      } else {
        const p = Math.max(0, -card.getBoundingClientRect().top);
        if (p <= card.offsetHeight) {
          layers.forEach((l) => {
            l.el.style.translate = ((l.side || 0) * p * SPREAD).toFixed(1) + "px " + (p * l.scroll).toFixed(1) + "px";
          });
        }
      }
      const vh = window.innerHeight;
      decos.forEach((d) => {
        const r = d.parentElement.getBoundingClientRect();
        d.style.translate = "0 " + ((r.top + r.height / 2 - vh / 2) * parseFloat(d.dataset.speed)).toFixed(1) + "px";
      });
    }

    function request() {
      if (!queued) { queued = true; requestAnimationFrame(frame); }
    }

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", () => {
      // Leaving desktop: drop the tilt. Layer offsets are recalculated either way.
      if (!desktop.matches) card.style.transform = "";
      request();
    });
    window.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
      request();
    }, { passive: true });
    document.documentElement.addEventListener("mouseleave", () => { tx = ty = 0; request(); });
    request();
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
    setupParallax();
  }).catch((err) => console.error("Could not load the invite details.", err));
})();
