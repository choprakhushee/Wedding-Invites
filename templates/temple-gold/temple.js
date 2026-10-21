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

  function applyText() {
    $$("[data-ui]").forEach((el) => (el.textContent = C.ui(el.dataset.ui)));
    $$("[data-ui-label]").forEach((el) => el.setAttribute("aria-label", C.ui(el.dataset.uiLabel)));
    const [a, b] = coupleNames();
    $$("[data-couple]").forEach((el) => (el.textContent = a + " " + C.ui("weds") + " " + b));
    $$("[data-wedding-date]").forEach((el) => {
      el.textContent = formatDate(C.config.wedding_date, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    });
    if (entryState.lit) $("#entry-tap").setAttribute("aria-label", C.ui("tap_to_enter"));

    const lang = $("#lang");
    const L = C.config.language || {};
    lang.textContent = C.lang === "en" ? L.regional_label : L.english_label || "English";
    lang.classList.toggle("to-en", C.lang !== "en");

    fitAll();
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
    $$(".couple__names").forEach(fitToWidth);
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
    const first = $(".couple");
    first.setAttribute("tabindex", "-1");
    first.focus({ preventScroll: true });
    fitAll();
    gsap.from(".couple__panel > *", { autoAlpha: 0, y: 18, duration: reduce ? 0.6 : 1.2, stagger: reduce ? 0 : 0.18 });
  }

  // ---- Start ---------------------------------------------------------------

  document.body.classList.add("is-dark");
  C.loadConfig().then((config) => {
    applyTheme(config.theme);
    setupLanguage();
    if (C.setupMusic($("#audio"))) C.bindMusicButton($("#music"));
    setupEntry();
    applyText();
  }).catch((err) => {
    console.error("Could not load wedding.json.", err);
    finishEntry();
  });
})();
