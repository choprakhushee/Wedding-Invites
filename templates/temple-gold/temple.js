// Temple Gold: fills the page from wedding.json and runs the animations.
// Shared logic (config, language, guest links, slots, sound) is in shared/core.js.

(function () {
  "use strict";

  const C = window.InviteCore;
  const M = window.TempleMotifs;
  const $ = (s, root) => (root || document).querySelector(s);
  const $$ = (s, root) => [...(root || document).querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // cubic-bezier(0.65, 0, 0.35, 1) is GSAP's power2.inOut.
  gsap.defaults({ ease: "power2.inOut", duration: 1.2 });

  const THEME_VARS = {
    kumkum: "--kumkum", gold: "--gold", peacock: "--peacock", turmeric: "--turmeric",
    ivory: "--ivory", sandalwood: "--sandal", stone: "--stone",
  };

  function applyTheme(theme) {
    Object.keys(theme || {}).forEach((key) => {
      const value = String(theme[key]).trim();
      if (THEME_VARS[key] && /^#[0-9a-f]{3,8}$|^rgb|^hsl/i.test(value)) {
        document.documentElement.style.setProperty(THEME_VARS[key], value);
      }
    });
  }

  // ---- Text ---------------------------------------------------------------

  function coupleNames() {
    const c = C.config.couple;
    const pair = c.first === "groom" ? [c.groom, c.bride] : [c.bride, c.groom];
    return pair.map((p) => C.t(p.name));
  }

  function formatDate(iso, opts) {
    const locale = C.lang === "en" ? "en-IN" : C.lang + "-IN";
    return new Intl.DateTimeFormat(locale, Object.assign({ timeZone: "UTC" }, opts)).format(new Date(iso + "T12:00:00Z"));
  }

  function people() {
    const c = C.config.couple;
    return c.first === "groom"
      ? [{ p: c.groom, role: "son_of" }, { p: c.bride, role: "daughter_of" }]
      : [{ p: c.bride, role: "daughter_of" }, { p: c.groom, role: "son_of" }];
  }

  // Text that depends on the language is registered once and refreshed on
  // every language switch.
  const binds = [];
  function bind(el, fn) {
    binds.push([el, fn]);
    el.textContent = fn();
    return el;
  }

  function applyText() {
    $$("[data-ui]").forEach((el) => (el.textContent = C.ui(el.dataset.ui)));
    $$("[data-ui-label]").forEach((el) => el.setAttribute("aria-label", C.ui(el.dataset.uiLabel)));
    const [a, b] = coupleNames();
    $$("[data-couple]").forEach((el) => (el.textContent = a + " " + C.ui("weds") + " " + b));
    $$("[data-wedding-date]").forEach((el) => {
      el.textContent = formatDate(C.config.wedding_date, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    });
    const ps = people();
    $$("[data-person]").forEach((el) => (el.textContent = C.t(ps[+el.dataset.person].p.name)));
    $$("[data-parents]").forEach((el) => {
      const { p, role } = ps[+el.dataset.parents];
      el.textContent = C.ui(role, { parents: C.t(p.parents), place: C.t(p.native_place) }).replace(/\s+/g, " ").trim();
      el.hidden = !C.t(p.parents);
    });
    binds.forEach(([el, fn]) => (el.textContent = fn()));
    if (entryState.lit) $("#entry-tap").setAttribute("aria-label", C.ui("tap_to_enter"));

    const lang = $("#lang");
    const L = C.config.language || {};
    lang.textContent = C.lang === "en" ? L.regional_label : L.english_label || "English";
    lang.classList.toggle("to-en", C.lang !== "en");

    fitAll();
  }

  function timeRange(ev) {
    const locale = C.lang === "en" ? "en-IN" : C.lang + "-IN";
    const fmt = new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit", timeZone: "UTC" });
    const at = (hm) => new Date(ev.date + "T" + hm + ":00Z");
    if (!ev.start) return "";
    if (!ev.end) return fmt.format(at(ev.start));
    return fmt.formatRange ? fmt.formatRange(at(ev.start), at(ev.end)) : fmt.format(at(ev.start)) + " – " + fmt.format(at(ev.end));
  }

  // ---- 3–11. The invitation ------------------------------------------------

  const ICONS = {
    date: '<path d="M4 6h16v14H4zM4 10h16M8 3v5M16 3v5"/>',
    time: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
    venue: '<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    dress: '<path d="M9 3l3 3 3-3 4 3-2 4h-2v11H9V10H7L5 6z"/>',
  };
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  };

  function fact(kind, fn) {
    const row = el("div", "fact");
    row.append(el("span", "fact__icon", '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[kind] + "</svg>"));
    row.append(bind(el("span", "fact__text"), fn));
    return row;
  }

  function renderContent() {
    const cfg = C.config, show = cfg.show;

    // Invocation (optional).
    if (show.invocation !== false && cfg.invocation) {
      const inv = cfg.invocation;
      if (inv.shloka_script) C.loadFont(inv.shloka_script);
      const shloka = $("#shloka");
      shloka.hidden = !inv.shloka;
      $("#blessing").hidden = !inv.blessing;
      shloka.textContent = C.t(inv.shloka);
      shloka.lang = inv.shloka_script || "sa";
      shloka.style.fontFamily = "var(--font-" + (inv.shloka_script || "sa") + "), serif";
      bind($("#blessing"), () => C.t(inv.blessing));
    }

    // Personal greeting from ?guest=...
    const guest = C.guestName();
    if (guest) {
      const g = $("#greeting");
      g.hidden = false;
      g.innerHTML = "<strong></strong><span></span>";
      bind(g.firstChild, () => C.ui("dear", { guest }));
      bind(g.lastChild, () => C.ui("greeting"));
    }

    bind($("#wedding-place"), () => C.t(cfg.wedding_city));

    // Muhurtham highlight.
    const events = (cfg.events || []).filter((ev) => C.t(ev.name));
    const muhurtham = events.find((ev) => ev.muhurtham);
    if (muhurtham) {
      $("#muhurtham").hidden = false;
      bind($("#muhurtham-time"), () => timeRange(muhurtham));
      bind($("#muhurtham-date"), () => formatDate(muhurtham.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" }));
      bind($("#muhurtham-venue"), () => C.t(muhurtham.venue));
      if (show.countdown !== false) startCountdown(new Date(muhurtham.date + "T" + muhurtham.start + ":00" + (cfg.timezone || "+05:30")));
    }

    // Events.
    const list = $("#events-list");
    if (!events.length) $("#events").hidden = true;
    events.forEach((ev, i) => {
      if (i) list.append(window.TempleCourtyard.betweenStrands());
      const card = el("article", "panel zari event reveal " + (ev.muhurtham ? "panel--red event--muhurtham" : "panel--ivory"));
      if (ev.muhurtham) card.append(bind(el("p", "kicker kicker--gold"), () => C.ui("muhurtham_label")));
      card.append(bind(el("h3", "event__name"), () => C.t(ev.name)));
      if (ev.subtitle) card.append(bind(el("p", "event__sub"), () => C.t(ev.subtitle)));
      card.append(el("span", "divider"));
      const facts = el("div", "event__facts");
      facts.append(fact("date", () => formatDate(ev.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" })));
      if (ev.start) facts.append(fact("time", () => timeRange(ev)));
      if (ev.venue) facts.append(fact("venue", () => C.t(ev.venue)));
      if (ev.dress_code) facts.append(fact("dress", () => C.ui("dress_code") + ": " + C.t(ev.dress_code)));
      card.append(facts);
      if (ev.note) card.append(bind(el("p", "event__note"), () => C.t(ev.note)));
      const actions = el("div", "event__actions");
      if (ev.map) {
        const a = bind(el("a", "btn"), () => C.ui("directions"));
        a.href = ev.map;
        a.target = "_blank";
        a.rel = "noopener";
        actions.append(a);
      }
      if (ev.date) {
        const b = bind(el("button", "btn btn--ghost"), () => C.ui("add_calendar"));
        b.type = "button";
        b.addEventListener("click", () => C.downloadIcs(ev, C.t(ev.name, "en") + " — " + coupleNames().join(" & ")));
        actions.append(b);
      }
      card.append(actions);
      list.append(card);
    });

    // Closing.
    if (cfg.closing) {
      bind($("#closing-blessing"), () => C.t(cfg.closing.blessing));
      bind($("#closing-families"), () => C.t(cfg.closing.families));
    }
    if (show.footer_credit !== false && cfg.credit) {
      $("#credit").hidden = false;
      bind($("#credit"), () => C.t(cfg.credit));
    }
  }

  function startCountdown(when) {
    if (isNaN(when)) return;
    const box = $("#countdown"), units = {};
    $$("[data-unit]", box).forEach((u) => (units[u.dataset.unit] = u));
    const tick = () => {
      const ms = when - Date.now();
      if (ms <= 0) {
        box.hidden = true;
        $("#countdown-done").hidden = false;
        return;
      }
      box.hidden = false;
      const s = Math.floor(ms / 1000);
      units.days.textContent = Math.floor(s / 86400);
      units.hours.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
      units.minutes.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      units.seconds.textContent = String(s % 60).padStart(2, "0");
      setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    tick();
  }

  // Panels rise gently into place as they scroll into view.
  function revealOnScroll() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) return gsap.set(els, { autoAlpha: 1 });
    gsap.set(els, { autoAlpha: 0, y: reduce ? 0 : 28 });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        gsap.to(entry.target, { autoAlpha: 1, y: 0, duration: reduce ? 0.6 : 1.3 });
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((e) => io.observe(e));
  }

  // Long names shrink to stay on one line inside their panel.
  function fitToWidth(el) {
    el.style.fontSize = "";
    let size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollWidth > el.clientWidth + 1 && size > 10) {
      size -= 1;
      el.style.fontSize = size + "px";
    }
  }
  function fitAll() {
    $$(".plaque__names").forEach((el) => {
      el.style.fontSize = "";
      const box = el.parentElement;
      let size = parseFloat(getComputedStyle(el).fontSize);
      while (el.offsetWidth > box.clientWidth * 0.9 && size > 10) el.style.fontSize = --size + "px";
    });
    $$(".person__name, .hero__name").forEach(fitToWidth);
  }

  function setupLanguage() {
    const btn = $("#lang");
    if (!C.regionalLang()) return;
    C.loadFont(C.regionalLang());
    document.documentElement.style.setProperty("--font-regional", "var(--font-" + C.regionalLang() + ")");
    btn.hidden = false;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      C.setLang(C.lang === "en" ? C.regionalLang() : "en");
    });
    C.onLangChange(applyText);
    document.documentElement.lang = C.lang;
    if (document.fonts) document.fonts.ready.then(fitAll);
  }

  // ---- 1–2. Entry ----------------------------------------------------------

  const entryState = { lit: false, opening: false, autoOpen: null, bellTl: null };

  function placeLight() {
    const entry = $("#entry");
    if (!entry) return;
    const d = $("#diya").getBoundingClientRect();
    entry.style.setProperty("--fx", (d.left + d.width / 2).toFixed(1) + "px");
    entry.style.setProperty("--fy", (d.top + d.height * 0.3).toFixed(1) + "px");
  }

  // A pendulum that settles: each swing smaller and a little slower.
  function swingBell(strength) {
    if (reduce) return;
    const bell = $("#bell");
    if (entryState.bellTl) entryState.bellTl.kill();
    const tl = gsap.timeline();
    [9, -7, 5, -3.2, 1.6, 0].forEach((deg, i) => {
      tl.to(bell, { rotation: deg * strength, duration: i === 0 ? 0.9 : 1 + i * 0.08, ease: i === 0 ? "sine.out" : "sine.inOut" });
    });
    entryState.bellTl = tl;
  }

  function lightLamp() {
    if (entryState.lit) return;
    entryState.lit = true;
    const entry = $("#entry");
    entry.classList.add("is-lit");
    document.body.classList.remove("is-dark");
    $("#entry-tap").setAttribute("aria-label", C.ui("tap_to_enter"));

    C.startMusic();
    C.chime(1);
    swingBell(1);

    const radius = Math.hypot(innerWidth, innerHeight) * 1.3;
    const k = reduce ? 0.5 : 1;
    gsap.timeline()
      .to(".hint--light", { autoAlpha: 0, duration: 0.6 }, 0)
      .to("#flame", { scale: 1, duration: reduce ? 0.6 : 1.1, ease: "power2.out" }, 0)
      .to(".diya__glow", { opacity: 1, duration: 1.2 * k }, 0.15)
      .to("#diya", { opacity: 1, duration: 1.2 * k }, 0.15)
      .to(".entry__light", { opacity: 1, duration: 1.6 * k }, 0.2)
      .to(".entry__dark", { "--r": radius + "px", duration: reduce ? 1 : 2.8 }, 0.3)
      .to("#bell", { opacity: 1, duration: 1.4 * k }, 0.6)
      .to(".hint--enter", { autoAlpha: 1, duration: 1 }, reduce ? 1 : 2.6)
      .call(() => {
        const secs = +((C.config.entry || {}).auto_open_seconds);
        if (secs > 0) entryState.autoOpen = gsap.delayedCall(secs, openDoors);
      });
  }

  // The chime only ever follows a tap, never the automatic opening.
  function openDoors(fromTap) {
    if (entryState.opening) return;
    entryState.opening = true;
    if (entryState.autoOpen) entryState.autoOpen.kill();
    if (fromTap === true) { C.chime(0.7); swingBell(0.5); }

    if (reduce) {
      gsap.to("#entry", { autoAlpha: 0, duration: 0.8, onComplete: finishEntry });
      return;
    }
    const temples = $$(".temple");
    gsap.set(temples, { transformOrigin: "50% 59%" });
    gsap.timeline({ onComplete: finishEntry })
      .to(".hint--enter", { autoAlpha: 0, duration: 0.6 }, 0)
      .to(".door--left", { rotationY: -104, duration: 1.6 }, 0)
      .to(".door--right", { rotationY: 104, duration: 1.6 }, 0)
      .to(".door__shade", { opacity: 0.6, duration: 1.6 }, 0)
      .to(".doorway__glow", { opacity: 1, duration: 1.4 }, 0.2)
      .to(temples, { scale: 1.6, duration: 1.5 }, 1.1)
      .to([".entry__dark", ".entry__light"], { opacity: 0, duration: 1.2 }, 1.1)
      .to("#entry", { autoAlpha: 0, duration: 1.1 }, 1.5);
  }

  function skipEntry(e) {
    e.stopPropagation();
    if (entryState.opening) return;
    entryState.opening = true;
    if (entryState.autoOpen) entryState.autoOpen.kill();
    gsap.to("#entry", { autoAlpha: 0, duration: 0.8, onComplete: finishEntry });
  }

  function finishEntry() {
    const entry = $("#entry");
    if (!entry) return;
    if (entryState.bellTl) entryState.bellTl.kill();
    entry.remove();
    document.body.classList.remove("is-entry", "is-dark");
    revealSite();
  }

  function setupEntry() {
    const entry = $("#entry");
    $(".flame__body").innerHTML = M.flame();
    C.fillSlots(entry, document.body.dataset.elements, M);
    gsap.set("#flame", { scale: 0.001 });

    $("#entry-tap").addEventListener("click", () => (entryState.lit ? openDoors(true) : lightLamp()));
    $("#bell-tap").addEventListener("click", (e) => {
      e.stopPropagation();
      if (!entryState.lit) return lightLamp();
      C.chime(0.8);
      swingBell(0.6);
    });
    $("#skip").addEventListener("click", skipEntry);

    placeLight();
    window.addEventListener("resize", () => { placeLight(); fitAll(); });
    // A link to a section (e.g. #rsvp) goes straight to the invitation.
    if (location.hash) finishEntry();
  }

  // ---- After the doors ------------------------------------------------------

  function revealSite() {
    // Keyboard and screen-reader users land on the invitation, not the removed doors.
    const first = $("#couple");
    first.setAttribute("tabindex", "-1");
    first.focus({ preventScroll: true });
    fitAll();
    window.TempleCourtyard.intro();
    gsap.from(".hero__panel > :not([hidden])", { autoAlpha: 0, y: reduce ? 0 : 16, duration: reduce ? 0.6 : 1.2, stagger: reduce ? 0 : 0.14, delay: 0.3 });
  }

  // ---- Start ---------------------------------------------------------------

  document.body.classList.add("is-dark");
  C.loadConfig().then((config) => {
    applyTheme(config.theme);
    setupLanguage();
    if (C.setupMusic($("#audio"))) C.bindMusicButton($("#music"));
    window.TempleCourtyard.build();
    C.fillSlots($("#courtyard"), document.body.dataset.elements, M);
    C.fillSlots($("#site"), document.body.dataset.elements, M);
    renderContent();
    setupEntry();
    applyText();
    window.TempleCourtyard.start();
    revealOnScroll();
  }).catch((err) => {
    console.error("Could not load wedding.json.", err);
    finishEntry();
  });
})();
