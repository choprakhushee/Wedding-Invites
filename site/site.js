// Aamantran Atelier — the gate, the corridor of arches, the live invitation, the enquiry.

(function () {
  "use strict";

  // Paste the Google Apps Script web app URL here to collect enquiries in a Google Sheet.
  // See tools/leads-apps-script.gs for the script and the 5-minute setup.
  const LEAD_ENDPOINT = "";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const body = document.body;
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const NS = "http://www.w3.org/2000/svg";

  /* ---------- Drawings ---------- */

  // The chhatri seal, drawn in gold line. Each stroke has its own start (--d, seconds).
  const ln = (d, delay) => `<path class="ln" pathLength="1" style="--d:${delay}" d="${d}"/>`;
  const pillar = (x, delay) =>
    ln(`M${x} 136H${x + 6}V212H${x}Z`, delay) +
    ln(`M${x - 3} 130H${x + 9}V136H${x - 3}ZM${x - 3} 212H${x + 9}V218H${x - 3}Z`, delay + 0.1);
  const CHHATRI = `
    <svg class="chhatri" viewBox="0 0 200 240" aria-hidden="true">
      ${ln("M100 4V20", 0)}
      <circle class="ln" pathLength="1" style="--d:.05" cx="100" cy="25" r="4.5"/>
      ${ln("M89 41Q100 30 111 41", 0.1)}
      ${ln("M56 100C56 64 78 45 100 40C122 45 144 64 144 100", 0.15)}
      ${ln("M100 40C88 58 84 80 84 100", 0.3)}
      ${ln("M100 40C112 58 116 80 116 100", 0.35)}
      ${ln("M52 100H148V112H52Z", 0.4)}
      ${ln("M42 112H158L176 123H24Z", 0.5)}
      ${ln("M24 123H176V130H24Z", 0.55)}
      ${pillar(38, 0.6)}${pillar(62, 0.65)}${pillar(132, 0.65)}${pillar(156, 0.6)}
      ${ln("M44 218V178Q44 162 53 155Q62 162 62 178V218", 0.8)}
      ${ln("M138 218V178Q138 162 147 155Q156 162 156 178V218", 0.8)}
      <image class="a" href="site/assets/emblem-gold.webp" x="86" y="182" width="28" height="27"/>
      <path class="door door--l" d="M68 218V172Q68 152 84 148Q100 144 100 134V218Z"/>
      <path class="door door--r" d="M132 218V172Q132 152 116 148Q100 144 100 134V218Z"/>
      ${ln("M68 218V172Q68 152 84 148Q100 144 100 134Q100 144 116 148Q132 152 132 172V218", 0.75)}
      ${ln("M30 218H170V226H30Z", 0.9)}
      ${ln("M22 226H178V236H22Z", 0.95)}
    </svg>`;
  $$("[data-chhatri]").forEach((el) => { el.innerHTML = CHHATRI; });

  // A scalloped (multifoil) arch: lobes around a half-ellipse, a cusp at the crown.
  function lobedArch(cx, bottom, spring, hw, rise, lobes, close) {
    const pt = (k) => {
      const phi = Math.PI - (k * Math.PI) / lobes;
      return [cx + hw * Math.cos(phi), spring - rise * Math.sin(phi)];
    };
    let d = `M${cx - hw} ${bottom}L${cx - hw} ${spring}`;
    let prev = pt(0);
    for (let k = 1; k <= lobes; k++) {
      const p = pt(k);
      const r = Math.hypot(p[0] - prev[0], p[1] - prev[1]) * 0.62;
      d += `A${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${p[0].toFixed(2)} ${p[1].toFixed(2)}`;
      prev = p;
    }
    d += `L${cx + hw} ${bottom}`;
    return close ? d + "Z" : d;
  }

  // Colonnade niches
  $$("[data-arch]").forEach((el) => {
    el.innerHTML = `<svg viewBox="0 0 120 150" aria-hidden="true">
      <path class="fill" d="${lobedArch(60, 150, 78, 38, 46, 8, true)}"/>
      <path class="ln" pathLength="1" d="${lobedArch(60, 150, 76, 48, 58, 8)}"/>
      <path class="ln" pathLength="1" d="M60 6V12"/>
      <circle class="ln" pathLength="1" cx="60" cy="3" r="2.2"/>
    </svg>`;
  });

  /* ---------- The gate ---------- */

  const gate = $("#gate");
  const timers = [];
  function enter() {
    timers.forEach(clearTimeout);
    gate.classList.add("is-drawn", "is-parted");
    body.classList.add("is-drawing", "is-entering");
    setTimeout(() => body.classList.remove("is-gate"), 1200);
    setTimeout(() => body.classList.add("is-in"), 2400);
  }
  if (reduceMotion) {
    gate.classList.add("is-drawn", "is-parted");
    body.classList.add("is-drawing", "is-entering", "is-in");
    body.classList.remove("is-gate");
  } else {
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]).then(() => {
      requestAnimationFrame(() => {
        gate.classList.add("is-drawn");
        body.classList.add("is-drawing");
        timers.push(setTimeout(() => gate.classList.add("is-parted"), 2500));
        timers.push(setTimeout(enter, 3700));
      });
    });
    gate.addEventListener("click", enter);
    window.addEventListener("keydown", (e) => { if (body.classList.contains("is-gate") && (e.key === "Enter" || e.key === " " || e.key === "Escape")) enter(); });
  }

  /* ---------- The corridor of arches ---------- */

  const WALLS = [
    { fill: "url(#lat)" },
    { fill: "#1F3A2E" },
    { fill: "url(#har)" },
    { fill: "#5C1A1B" },
    { fill: "url(#pin)" },
  ];
  const PATTERNS = `
    <pattern id="har" width="60" height="90" patternUnits="userSpaceOnUse">
      <rect width="60" height="90" fill="#E6CFC6"/><path d="M30 0 60 45 30 90 0 45Z" fill="#1F3A2E"/>
    </pattern>
    <pattern id="lat" width="96" height="128" patternUnits="userSpaceOnUse">
      <rect width="96" height="128" fill="#5C1A1B"/>
      <g fill="none" stroke="#C9A56B" stroke-width="1.6"><path d="M30 106V62a18 18 0 0 1 36 0v44z"/><path d="M37 106V63a11 11 0 0 1 22 0v43"/></g>
      <g fill="#C9A56B"><circle cx="48" cy="35" r="2.6"/><path d="M0-8 2-2 8 0 2 2 0 8-2 2-8 0-2-2zM96-8l2 6 6 2-6 2-2 6-2-6-6-2 6-2zM0 120l2 6 6 2-6 2-2 6-2-6-6-2 6-2zM96 120l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></g>
    </pattern>
    <pattern id="pin" width="20" height="20" patternUnits="userSpaceOnUse">
      <rect width="20" height="20" fill="#A08C7D"/><rect width="12" height="20" fill="#5A4636"/>
    </pattern>`;
  const K = 2.5; // how much smaller each arch looks than the one in front of it

  const corridor = $("#tour");
  const wallsEl = $("#walls");
  const sanctum = $("#sanctum");
  const captions = $$("#captions .caption");
  const hint = $("#corridorHint");
  let wallEls = [];
  const defs = document.createElementNS(NS, "svg");
  defs.setAttribute("width", "0");
  defs.setAttribute("height", "0");
  defs.style.position = "absolute";
  defs.innerHTML = `<defs>${PATTERNS}</defs>`;
  wallsEl.appendChild(defs);

  function buildWalls() {
    wallEls.forEach((w) => w.remove());
    const vw = wallsEl.clientWidth, vh = wallsEl.clientHeight;
    const narrow = vw < 700;
    const hw = narrow ? Math.min(vw * 0.4, vh * 0.21) : Math.min(vw * 0.2, vh * 0.25);
    const rise = hw * 1.2;
    const spring = vh - hw * (narrow ? 1.7 : 1.5);
    const ox = vw / 2, oy = spring;
    const big = `M${-vw * 3} ${-vh * 3}H${vw * 4}V${vh * 4}H${-vw * 3}Z`;
    const hole = lobedArch(ox, vh + 2, spring, hw, rise, 8, true);
    const frame = lobedArch(ox, vh + 2, spring, hw * 1.13, rise * 1.13, 8);
    wallsEl.style.setProperty("--ox", ox + "px");
    wallsEl.style.setProperty("--oy", oy + "px");
    sanctum.style.setProperty("--ox", ox + "px");
    sanctum.style.setProperty("--oy", oy + "px");

    wallEls = WALLS.map((w, i) => {
      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "wall");
      svg.setAttribute("viewBox", `0 0 ${vw} ${vh}`);
      svg.style.setProperty("--ox", ox + "px");
      svg.style.setProperty("--oy", oy + "px");
      svg.style.zIndex = String(10 - i);
      svg.innerHTML = `
        <path d="${big} ${hole}" fill="${w.fill}" fill-rule="evenodd"/>
        <path d="${frame}" fill="none" stroke="#C9A56B" stroke-width="1.2"/>
        <path d="${hole}" fill="none" stroke="#C9A56B" stroke-width="2.4"/>
        <path class="fog" d="${big} ${hole}" fill="#140c0a" fill-rule="evenodd" opacity="0"/>`;
      wallsEl.appendChild(svg);
      return svg;
    });
    renderCorridor();
  }

  function renderCorridor() {
    if (!wallEls.length) return;
    const r = corridor.getBoundingClientRect();
    const vh = window.innerHeight;
    if (r.bottom < -vh || r.top > vh * 2) return;
    const p = clamp(-r.top / (r.height - vh), 0, 1);
    const n = WALLS.length;
    const cam = clamp(p / 0.9, 0, 1) * n;

    wallEls.forEach((el, i) => {
      const d = i - cam;
      const s = Math.pow(K, -d);
      const o = d > -0.3 ? 1 : clamp(1 - (-0.3 - d) / 0.55, 0, 1);
      el.style.transform = `scale(${s.toFixed(4)})`;
      el.style.opacity = o.toFixed(3);
      el.style.visibility = o === 0 ? "hidden" : "visible";
      el.querySelector(".fog").setAttribute("opacity", clamp(d * 0.3, 0, 0.78).toFixed(3));
    });
    sanctum.style.transform = `scale(${Math.pow(K, -(n - cam)).toFixed(4)})`;

    const active = cam > n - 0.45 ? -1 : clamp(Math.floor(cam + 0.4), 0, n - 1);
    captions.forEach((c, i) => c.classList.toggle("is-on", i === active));
    hint.style.opacity = cam < 0.12 ? "1" : "0";
  }

  /* ---------- Reveal on scroll ---------- */

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.15 });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- The live invitation ---------- */

  const stage = $("#stage");
  const fxFlip = $("#fxFlip");
  const fxEngrave = $("#fxEngrave");
  const fxRooms = $("#fxRooms");
  const fxBloom = $("#fxBloom");
  const rooms = $$(".rm", fxRooms);
  const COLS = 8, ROWS = 6;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement("span");
      cell.className = "cell";
      // Turn from the centre outward, like a deck being fanned open.
      const dist = Math.hypot((c - (COLS - 1) / 2) / COLS, (r - (ROWS - 1) / 2) / ROWS);
      cell.style.setProperty("--i", (dist * 1.5 + Math.random() * 0.08).toFixed(3));
      fxFlip.appendChild(cell);
    }
  }

  let mode = "flip", stageTimers = [], roomTimer = null;
  const later = (fn, ms) => stageTimers.push(setTimeout(fn, ms));

  function resetStage() {
    stageTimers.forEach(clearTimeout); stageTimers = [];
    clearInterval(roomTimer);
    [fxFlip, fxEngrave, fxRooms, fxBloom].forEach((fx) => fx.classList.remove("is-on", "is-go", "is-drawn", "is-parted", "is-open"));
    rooms.forEach((r) => r.classList.remove("is-on", "is-past"));
    stage.classList.remove("is-writing");
    void stage.offsetWidth;
  }

  function play(next) {
    mode = next;
    resetStage();
    $$(".motion").forEach((b) => {
      const on = b.dataset.play === mode;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-selected", String(on));
    });
    if (reduceMotion) {
      if (mode === "rooms") { fxRooms.classList.add("is-on"); rooms[0].classList.add("is-on"); }
      if (mode === "bloom") fxBloom.classList.add("is-on");
      return;
    }
    if (mode === "flip") {
      fxFlip.classList.add("is-on");
      requestAnimationFrame(() => requestAnimationFrame(() => fxFlip.classList.add("is-go")));
      later(() => stage.classList.add("is-writing"), 900);
      later(() => fxFlip.classList.remove("is-on"), 3000);
    } else if (mode === "engrave") {
      fxEngrave.classList.add("is-on");
      requestAnimationFrame(() => requestAnimationFrame(() => fxEngrave.classList.add("is-drawn")));
      later(() => fxEngrave.classList.add("is-parted"), 2600);
      later(() => fxEngrave.classList.add("is-open"), 3600);
      later(() => stage.classList.add("is-writing"), 4100);
      later(() => fxEngrave.classList.remove("is-on"), 5300);
    } else if (mode === "script") {
      stage.classList.add("is-writing");
    } else if (mode === "rooms") {
      fxRooms.classList.add("is-on");
      let i = 0, prev = -1;
      const show = () => {
        rooms.forEach((r, j) => {
          r.classList.toggle("is-on", j === i);
          r.classList.toggle("is-past", j === prev);
        });
        prev = i; i = (i + 1) % rooms.length;
      };
      requestAnimationFrame(show);
      roomTimer = setInterval(show, 3200);
    } else if (mode === "bloom") {
      fxBloom.classList.add("is-on");
    }
  }

  $$(".motion").forEach((b) => b.addEventListener("click", () => play(b.dataset.play)));
  $("#replay").addEventListener("click", () => play(mode));
  new IntersectionObserver(([en], obs) => {
    if (en.isIntersecting) { play("flip"); obs.disconnect(); }
  }, { threshold: 0.45 }).observe(stage);

  /* ---------- Nav, palace plan, atelier line ---------- */

  const nav = $("#nav");
  const plan = $("#plan");
  const planItems = $$("li", plan);
  const toned = $$("[data-tone]");
  const rooms_ = planItems.map((li) => document.getElementById(li.dataset.for));
  const steps = $("#steps");
  planItems.forEach((li, i) => {
    li.style.cursor = "pointer";
    li.addEventListener("click", () => rooms_[i].scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }));
  });

  const toneAt = (y) => {
    const s = toned.find((el) => { const r = el.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
    return s ? s.dataset.tone : "linen";
  };
  const isDark = (t) => t === "dark" || t === "maroon";

  let lastY = window.scrollY, ticking = false;
  function onScroll() {
    const y = window.scrollY, vh = window.innerHeight;
    nav.classList.toggle("is-scrolled", y > 30);
    if (y > vh && y > lastY + 4 && !nav.matches(":focus-within")) nav.classList.add("is-hidden");
    else if (y < lastY - 4 || y <= vh) nav.classList.remove("is-hidden");
    lastY = y;
    nav.classList.toggle("is-dark", isDark(toneAt(nav.offsetHeight / 2)));
    plan.classList.toggle("is-dark", isDark(toneAt(vh / 2)));

    let current = 0;
    rooms_.forEach((el, i) => { if (el && el.getBoundingClientRect().top <= vh * 0.5) current = i; });
    planItems.forEach((li, i) => li.classList.toggle("is-on", i === current));

    const sr = steps.getBoundingClientRect();
    steps.style.setProperty("--p", clamp((vh * 0.85 - sr.top) / (sr.height + vh * 0.2), 0, 1).toFixed(3));

    renderCorridor();
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { buildWalls(); onScroll(); }, 150); });
  buildWalls();
  onScroll();

  /* ---------- The enquiry ---------- */

  const form = $("#leadForm");
  const errorEl = $("#formError");
  const submitBtn = $("#submitBtn");

  function fail(msg, field) {
    errorEl.textContent = msg;
    errorEl.hidden = false;
    if (field) { field.closest(".field").classList.add("is-invalid"); field.focus(); }
  }
  form.addEventListener("input", (e) => {
    const f = e.target.closest(".field");
    if (f) f.classList.remove("is-invalid");
    errorEl.hidden = true;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorEl.hidden = true;
    const data = new FormData(form);
    if (data.get("website")) return; // a bot filled the hidden field

    const name = (data.get("name") || "").trim();
    const phone = (data.get("phone") || "").trim();
    const email = (data.get("email") || "").trim();
    if (!name) return fail("May we have your name?", form.elements.name);
    if (phone.replace(/\D/g, "").length < 8) return fail("Please add a WhatsApp number we can write to.", form.elements.phone);
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("That email doesn’t look quite right.", form.elements.email);

    if (!LEAD_ENDPOINT) {
      console.warn("Enquiry form is not connected: set LEAD_ENDPOINT in site/site.js.");
      return fail("Our writing room opens shortly — please try again soon.");
    }

    const params = new URLSearchParams({
      submitted_at: new Date().toISOString(),
      name,
      partner: (data.get("partner") || "").trim(),
      phone,
      email,
      wedding_month: data.get("wedding_date") || "",
      city: (data.get("city") || "").trim(),
      interest: data.getAll("interest").join(", "),
      functions: data.getAll("functions").join(", "),
      note: (data.get("note") || "").trim(),
      page: location.href,
    });

    submitBtn.disabled = true;
    submitBtn.textContent = "Sealing your letter…";
    try {
      // Apps Script sends no CORS headers, so the response is opaque;
      // a network error is the only failure we can see.
      await fetch(LEAD_ENDPOINT, { method: "POST", mode: "no-cors", body: params });
      $("#sealedName").textContent = ", " + name.split(" ")[0];
      form.hidden = true;
      const sealed = $("#sealed");
      sealed.hidden = false;
      sealed.focus({ preventScroll: true });
      sealed.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    } catch (err) {
      fail("Your letter didn’t send. Please check your connection and try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send to the atelier";
    }
  });
})();
