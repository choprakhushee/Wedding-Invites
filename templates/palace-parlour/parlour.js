// Palace Parlour wedding website. Reads window.WEDDING (the couple's config.js),
// builds the page and runs the animation. Nothing couple-specific lives here.

(function () {
  "use strict";

  const W = window.WEDDING;
  if (!W) {
    document.body.textContent = "config.js is missing or has a typing mistake.";
    return;
  }
  const M = window.ParlourMotifs;
  const BASE = new URL(".", (document.currentScript && document.currentScript.src) || location.href).href;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const params = new URLSearchParams(location.search);
  const features = Object.assign({ entry: true, countdown: true, story: true, gallery: true, rsvp: true, hindi: true, petals: true, credit: true }, W.features);

  // The brand easing, cubic-bezier(0.65, 0, 0.35, 1), is GSAP's "power2.inOut".
  const EASE = "power2.inOut";

  // ---------- Language ----------

  let lang = features.hindi && W.language === "hi" ? "hi" : "en";
  const bindings = [];

  // A config value may be a plain string or { en, hi }.
  function t(value) {
    if (value == null) return "";
    if (typeof value !== "object") return String(value);
    return value[lang] || value.en || "";
  }

  function guestName() {
    const g = (params.get("guest") || "").replace(/\s+/g, " ").trim();
    return g.slice(0, 80);
  }

  function word(key) {
    const set = (W.text && W.text[lang]) || {};
    const fallback = (W.text && W.text.en) || {};
    return (set[key] || fallback[key] || "").replace("{guest}", guestName());
  }

  // Sets text now and again whenever the language changes.
  function bind(node, getter) {
    const apply = () => { node.textContent = getter(); };
    apply();
    bindings.push(apply);
    return node;
  }

  function setLanguage(next) {
    lang = next;
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    document.body.classList.toggle("lang-hi", lang === "hi");
    bindings.forEach((apply) => apply());
  }

  // ---------- Small helpers ----------

  function el(tag, className, attrs) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (attrs) Object.keys(attrs).forEach((k) => node.setAttribute(k, attrs[k]));
    return node;
  }

  function names() {
    const c = W.couple;
    const order = c.firstName === "groom" ? [c.groom, c.bride] : [c.bride, c.groom];
    return { first: order[0], second: order[1] };
  }

  // Dates are read straight from the config text, so the venue's local time is
  // shown whatever time zone the guest's phone is in.
  function dateParts(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(iso || "");
    return m ? { y: m[1], mo: m[2], d: m[3], h: m[4], mi: m[5] } : null;
  }

  function dottedDate(iso) {
    const p = dateParts(iso);
    return p ? p.d + " · " + p.mo + " · " + p.y : "";
  }

  // ---------- Element slots ----------
  // Each slot is used only if its file exists; otherwise the drawn fallback is used.

  function probe(url) {
    return new Promise((resolve) => {
      if (!url) return resolve(null);
      const img = new Image();
      const timer = setTimeout(() => resolve(null), 4000);
      img.onload = () => { clearTimeout(timer); resolve(url); };
      img.onerror = () => { clearTimeout(timer); resolve(null); };
      img.src = url;
    });
  }

  async function loadElements() {
    const e = W.elements || {};
    const keys = ["doorLeft", "doorRight", "arch", "cornerFloral", "borderTop", "divider"];
    const found = await Promise.all(keys.map((k) => probe(e[k])));
    const petals = await Promise.all((e.petals || []).map(probe));
    const out = { petals: petals.filter(Boolean) };
    keys.forEach((k, i) => { out[k] = found[i]; });
    return out;
  }

  function corner(src, className) {
    const img = el("img", className, { alt: "", "aria-hidden": "true", decoding: "async" });
    img.src = src || BASE + "motifs/corner-vine.svg";
    return img;
  }

  // ---------- Theme ----------

  function applyTheme() {
    const th = W.theme || {};
    const map = { maroon: "--maroon", green: "--green", blush: "--blush", linen: "--linen", gold: "--gold", goldDeep: "--gold-deep", cocoa: "--cocoa", ink: "--ink" };
    Object.keys(map).forEach((k) => { if (th[k]) document.documentElement.style.setProperty(map[k], th[k]); });
  }

  // The doorway shape, used by CSS as clip-path: url(#parlour-doorway).
  function addDoorwayClip() {
    const holder = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    holder.setAttribute("width", "0");
    holder.setAttribute("height", "0");
    holder.setAttribute("aria-hidden", "true");
    holder.style.position = "absolute";
    holder.innerHTML = `<clipPath id="parlour-doorway" clipPathUnits="objectBoundingBox"><path d="${M.doorwayClipPath()}"/></clipPath>`;
    document.body.appendChild(holder);
  }

  // ==========================================================================
  // MUSIC
  // ==========================================================================

  const music = (function () {
    const src = W.music && W.music.src;
    const target = (W.music && W.music.volume) || 0.6;
    let audio = null, wanted = false, fadeTimer = null;
    const button = document.getElementById("music-toggle");

    function render() {
      const playing = audio && !audio.paused;
      button.classList.toggle("is-playing", !!playing);
      button.setAttribute("aria-pressed", playing ? "true" : "false");
      button.setAttribute("aria-label", word(playing ? "musicOff" : "musicOn"));
    }

    function fadeTo(volume, done) {
      clearInterval(fadeTimer);
      const step = (volume - audio.volume) / 25;
      let n = 0;
      fadeTimer = setInterval(() => {
        n++;
        audio.volume = Math.min(1, Math.max(0, audio.volume + step));
        if (n >= 25) { clearInterval(fadeTimer); audio.volume = volume; if (done) done(); }
      }, 100);
    }

    function play() {
      if (!audio) return;
      wanted = true;
      audio.volume = 0;
      // Must be called straight from a tap: browsers block sound that starts on its own.
      const p = audio.play();
      if (p && p.catch) p.catch(() => { wanted = false; render(); });
      fadeTo(target);
    }

    function pause() {
      if (!audio) return;
      wanted = false;
      fadeTo(0, () => audio.pause());
    }

    if (src) {
      audio = new Audio();
      audio.src = src;
      audio.loop = true;
      audio.preload = "none";
      audio.addEventListener("play", render);
      audio.addEventListener("pause", render);
      button.hidden = false;
      button.addEventListener("click", () => (audio.paused || !wanted ? play() : pause()));
      bindings.push(render);
      // Pause while the guest switches apps; resume when they come back.
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) audio.pause();
        else if (wanted) audio.play().catch(() => {});
      });
      render();
    }

    return {
      play,
      show() { if (audio) button.classList.add("is-shown"); },
    };
  })();

  // ==========================================================================
  // ENTRY — "Tap to open", the engraving, the doors
  // ==========================================================================

  function buildEntry(els) {
    const entry = el("div", "entry", { role: "dialog", "aria-modal": "true", "aria-label": "Invitation" });
    const wall = el("div", "entry__wall pattern pattern--harlequin");
    const scrim = el("div", "entry__scrim");
    const dust = el("canvas", "entry__dust", { "aria-hidden": "true" });

    // Gate: drawn frame, or the couple's arch.png
    const gate = el("div", "gate", { "aria-hidden": "true" });
    const doorway = el("div", "gate__doorway");
    const light = el("div", "gate__light");
    const doors = el("div", "gate__doors");
    const leaves = ["left", "right"].map((side) => {
      const leaf = el("div", "door door--" + side);
      const custom = side === "left" ? els.doorLeft : els.doorRight;
      if (custom) {
        const img = el("img", "", { alt: "", decoding: "async" });
        img.src = custom;
        leaf.appendChild(img);
      } else {
        leaf.innerHTML = M.doorSVG();
      }
      leaf.appendChild(el("div", "door__shade"));
      doors.appendChild(leaf);
      return leaf;
    });
    doorway.append(light, doors);
    gate.appendChild(doorway);
    if (els.arch) {
      const art = el("img", "gate__art", { alt: "", decoding: "async" });
      art.src = els.arch;
      gate.appendChild(art);
    } else {
      gate.insertAdjacentHTML("beforeend", M.gateSVG());
    }

    // The tag
    const card = el("div", "entry__card");
    const tag = el("div", "tag");
    ["tl", "tr", "bl", "br"].forEach((c) => tag.appendChild(corner(els.cornerFloral, "tag__corner tag__corner--" + c)));
    const face = el("div", "tag__face");
    const n = names();
    face.append(
      bind(el("p", "entry__kicker caps"), () => word("entryKicker")),
      monogram(n),
      Object.assign(el("div", "rule", { "aria-hidden": "true" }), { innerHTML: "<i></i>" }),
      Object.assign(el("p", "entry__date date-caps"), { textContent: dottedDate(W.weddingDate) })
    );
    if (guestName()) face.appendChild(bind(el("p", "entry__for"), () => word("entryFor")));
    tag.appendChild(face);

    const open = el("button", "btn entry__open", { type: "button" });
    bind(open, () => word("tapToOpen"));
    card.append(tag, open);

    const skip = el("button", "entry__skip", { type: "button" });
    bind(skip, () => word("skip"));

    entry.append(wall, scrim, dust, gate, card, skip);
    document.body.appendChild(entry);

    return { entry, wall, scrim, dust, gate, doorway, light, leaves, card, open, skip };
  }

  function monogram(n) {
    const p = el("p", "entry__monogram", { "aria-label": "" });
    const a = el("b"), amp = el("span"), b = el("b");
    a.style.fontWeight = b.style.fontWeight = "400";
    amp.textContent = "&";
    const first = (v) => Array.from(t(v))[0] || "";
    bind(a, () => first(n.first.name));
    bind(b, () => first(n.second.name));
    bindings.push(() => p.setAttribute("aria-label", t(n.first.name) + " & " + t(n.second.name)));
    bindings[bindings.length - 1]();
    p.append(a, amp, b);
    return p;
  }

  // A light drift of gold dust behind the tag. Stops itself when the entry closes.
  function startDust(canvas) {
    if (reduceMotion) return () => {};
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, running = true, alpha = 1;
    const motes = [];
    function size() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);
    const count = w < 600 ? 22 : 36;
    for (let i = 0; i < count; i++) {
      motes.push({ x: Math.random() * w, y: Math.random() * h, r: 0.6 + Math.random() * 1.6, vy: -(0.08 + Math.random() * 0.22), vx: (Math.random() - 0.5) * 0.12, p: Math.random() * Math.PI * 2 });
    }
    (function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      motes.forEach((m) => {
        m.x += m.vx; m.y += m.vy; m.p += 0.012;
        if (m.y < -10) { m.y = h + 10; m.x = Math.random() * w; }
        ctx.globalAlpha = alpha * (0.35 + 0.35 * Math.sin(m.p));
        ctx.fillStyle = "#E3C58E";
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2); ctx.fill();
      });
      requestAnimationFrame(frame);
    })();
    return { stop() { running = false; window.removeEventListener("resize", size); }, get alpha() { return alpha; }, set alpha(v) { alpha = v; } };
  }

  // A handful of petals drifting down as the doors part. Never more than 14.
  function petalShower(els) {
    if (reduceMotion || !features.petals || !window.gsap) return;
    const layer = el("div", "petals", { "aria-hidden": "true" });
    document.body.appendChild(layer);
    const total = window.innerWidth < 600 ? 10 : 14;
    let finished = 0;
    for (let i = 0; i < total; i++) {
      const p = el("div", "petal");
      if (els.petals.length) {
        const img = el("img", "", { alt: "" });
        img.src = els.petals[i % els.petals.length];
        p.appendChild(img);
      } else {
        p.innerHTML = M.petalSVG(i);
      }
      const size = 12 + Math.random() * 10;
      p.style.width = p.style.height = size + "px";
      p.style.left = (5 + Math.random() * 90) + "%";
      layer.appendChild(p);
      const sway = (Math.random() - 0.5) * 140;
      gsap.to(p, {
        y: window.innerHeight + 80,
        x: sway,
        rotation: (Math.random() - 0.5) * 540,
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 2.4,
        ease: "sine.inOut",
        onComplete: () => { if (++finished === total) layer.remove(); },
      });
    }
  }

  function runEntry(els, onDone) {
    const ui = buildEntry(els);
    const dust = startDust(ui.dust);
    document.body.classList.add("is-locked");
    ui.open.focus({ preventScroll: true });

    let opened = false;
    let timeline = null;

    function finish() {
      if (dust.stop) dust.stop();
      ui.entry.remove();
      document.body.classList.remove("is-locked");
      music.show();
      onDone();
    }

    function open(ev) {
      if (ev) ev.stopPropagation();
      if (opened) return;
      opened = true;
      music.play();

      if (reduceMotion || !window.gsap) {
        ui.entry.style.transition = "opacity .8s cubic-bezier(0.65, 0, 0.35, 1)";
        ui.entry.style.opacity = "0";
        setTimeout(finish, 820);
        return;
      }

      ui.skip.style.visibility = "visible";
      timeline = gateTimeline(ui, els, dust, finish);
    }

    // Tapping anywhere opens; once opening, a second tap (or Skip) hurries it along.
    ui.entry.addEventListener("click", (ev) => {
      if (!opened) return open(ev);
      if (timeline) timeline.timeScale(5);
    });
    ui.open.addEventListener("click", open);
    ui.skip.addEventListener("click", (ev) => { ev.stopPropagation(); if (timeline) timeline.timeScale(8); });
  }

  function gateTimeline(ui, els, dust, finish) {
    const lines = ui.gate.querySelectorAll(".gate__lines [data-step]");
    const fill = ui.gate.querySelector(".gate__fill");
    const art = ui.gate.querySelector(".gate__art");

    // Prepare every stroke to be drawn from nothing.
    const strokes = ui.gate.querySelectorAll(".gate__lines path, .gate__lines rect, .gate__lines circle");
    strokes.forEach((s) => {
      const len = Math.ceil(s.getTotalLength ? s.getTotalLength() : 600);
      s.style.strokeDasharray = len + " " + len;
      s.style.strokeDashoffset = len;
    });

    const tl = gsap.timeline({ defaults: { ease: EASE }, onComplete: finish });

    // 1. The tag steps back and the room dims.
    tl.to(ui.card, { autoAlpha: 0, y: -16, duration: 1 })
      .to(ui.scrim, { opacity: 1, duration: 1.4 }, 0.2)
      .to(dust, { alpha: 0.5, duration: 1.4 }, 0.2)
      .to(ui.skip, { autoAlpha: 0.75, duration: 1 }, 1.2)
      .set(ui.gate, { visibility: "visible" }, 0.8);

    // 2. The Engraving: gold lines draw the chhatri, step by step.
    if (art) {
      tl.fromTo(art, { clipPath: "inset(100% 0 0 0)", opacity: 0.4 }, { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 2.8 }, 1);
    } else {
      lines.forEach((g, i) => {
        tl.to(g.querySelectorAll("path, rect, circle"), { strokeDashoffset: 0, duration: 1.1 }, 1 + i * 0.32);
      });
      // The stone fills in behind the gold.
      tl.to(fill, { opacity: 1, duration: 1.4 }, ">-0.7");
    }
    tl.to(ui.doorway, { opacity: 1, duration: 1.2 }, "<");

    // 3. The doors swing inward, into the palace.
    tl.addLabel("open", "+=0.35")
      .to(ui.leaves[0], { rotationY: 84, duration: 1.6 }, "open")
      .to(ui.leaves[1], { rotationY: -84, duration: 1.6 }, "open")
      .to(ui.gate.querySelectorAll(".door__shade"), { opacity: 0.55, duration: 1.6 }, "open")
      .call(() => petalShower(els), null, "open+=0.2");

    // 4. We walk through the doorway, and the invitation is waiting.
    tl.to(ui.gate, { scale: 2.6, autoAlpha: 0, transformOrigin: "50% 61%", duration: 1.5 }, "open+=1.15")
      .to([ui.scrim, ui.wall, ui.skip], { autoAlpha: 0, duration: 1.3 }, "<0.2")
      .to(ui.entry, { backgroundColor: "rgba(0,0,0,0)", duration: 1.3 }, "<");

    return tl;
  }

  // ==========================================================================
  // PAGE (stage 1: the couple screen the doors open onto)
  // ==========================================================================

  function buildPage(els) {
    const main = document.getElementById("main");
    const n = names();

    const couple = el("section", "couple", { "aria-labelledby": "couple-names" });
    const panel = el("div", "couple__panel");
    ["tl", "tr", "bl", "br"].forEach((c) => panel.appendChild(corner(els.cornerFloral, "couple__corner couple__corner--" + c)));
    const h1 = el("h1", "couple__names script", { id: "couple-names", tabindex: "-1" });
    const first = el("span"), amp = el("span", "amp"), second = el("span");
    amp.textContent = "&";
    bind(first, () => t(n.first.name));
    bind(second, () => t(n.second.name));
    h1.append(first, amp, second);
    panel.append(
      bind(el("p", "couple__kicker caps"), () => word("entryKicker")),
      h1,
      bind(el("p", "couple__together"), () => word("togetherWith")),
      Object.assign(el("p", "couple__date date-caps"), { textContent: dottedDate(W.weddingDate) })
    );
    couple.appendChild(panel);
    main.appendChild(couple);

    if (features.credit && W.credit && W.credit.text) {
      const footer = el("footer", "footer");
      const p = el("p", "footer__credit");
      if (W.credit.url) {
        const a = el("a", "", { href: W.credit.url, rel: "noopener" });
        a.textContent = W.credit.text;
        p.appendChild(a);
      } else {
        p.textContent = W.credit.text;
      }
      footer.appendChild(p);
      main.after(footer);
    }
  }

  function revealPage() {
    const heading = document.getElementById("couple-names");
    if (heading) heading.focus({ preventScroll: true });
    document.dispatchEvent(new CustomEvent("parlour:opened"));
  }

  // ==========================================================================
  // START
  // ==========================================================================

  function setupLanguageToggle() {
    const button = document.getElementById("lang-toggle");
    if (!features.hindi) { button.hidden = true; return; }
    button.hidden = false;
    bindings.push(() => {
      button.textContent = word("language");
      button.classList.toggle("is-hi", lang === "hi");
      button.setAttribute("aria-label", lang === "hi" ? "Switch to English" : "हिन्दी में देखें");
    });
    button.addEventListener("click", () => setLanguage(lang === "hi" ? "en" : "hi"));
  }

  async function start() {
    applyTheme();
    addDoorwayClip();
    setupLanguageToggle();
    const els = await loadElements();
    buildPage(els);
    setLanguage(lang);

    const skipIntro = !features.entry || params.has("skipintro");
    if (skipIntro) {
      music.show();
      revealPage();
    } else {
      runEntry(els, revealPage);
    }
  }

  start();
})();
