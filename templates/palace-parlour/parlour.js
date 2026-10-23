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
    const keys = ["doors", "doorLeft", "doorRight", "arch", "cornerFloral", "borderTop", "divider"];
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
      if (els.doors && !custom) {
        // One picture of both doors: each leaf shows its own half.
        const img = el("img", "door__half", { alt: "", decoding: "async" });
        img.src = els.doors;
        leaf.appendChild(img);
      } else if (custom) {
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
      if (window.ScrollTrigger) ScrollTrigger.refresh();
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
      timeline = gateTimeline(ui, els, dust, finish, onDone);
    }

    // Tapping anywhere opens; once opening, a second tap (or Skip) hurries it along.
    ui.entry.addEventListener("click", (ev) => {
      if (!opened) return open(ev);
      if (timeline) timeline.timeScale(5);
    });
    ui.open.addEventListener("click", open);
    ui.skip.addEventListener("click", (ev) => { ev.stopPropagation(); if (timeline) timeline.timeScale(8); });
  }

  function gateTimeline(ui, els, dust, finish, reveal) {
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
      .call(reveal, null, "open+=1.6")
      .to([ui.scrim, ui.wall, ui.skip], { autoAlpha: 0, duration: 1.3 }, "<0.2")
      .to(ui.entry, { backgroundColor: "rgba(0,0,0,0)", duration: 1.3 }, "<");

    return tl;
  }

  // ==========================================================================
  // PAGE — every section is a "stage" that holds still while its layers move
  // with the scroll, so the parlour feels alive under the guest's thumb.
  // ==========================================================================

  // Scroll-linked motion needs GSAP + ScrollTrigger and a guest who hasn't asked for less motion.
  const fx = !reduceMotion && !!window.gsap && !!window.ScrollTrigger;
  const motif = (name) => BASE + "motifs/" + name + ".svg";

  function deco(src, className) {
    const i = el("img", className, { alt: "", "aria-hidden": "true", decoding: "async", loading: "lazy" });
    i.src = src;
    return i;
  }

  // A painted scene behind a section. Loaded only as the guest gets near it,
  // and it fades in over the pattern; if the file is missing the pattern stays.
  function photoLayer(src, className) {
    const layer = el("div", "layer photo" + (className ? " " + className : ""), { "aria-hidden": "true" });
    if (!src) return layer;
    const load = () => {
      const img = new Image();
      img.onload = () => {
        layer.style.backgroundImage = 'url("' + src + '")';
        layer.classList.add("is-loaded");
        layer.closest(".scene, .room")?.classList.add("has-photo");
      };
      img.src = src;
    };
    if (!("IntersectionObserver" in window)) { load(); return layer; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); load(); }
    }, { rootMargin: "150% 0px" });
    requestAnimationFrame(() => io.observe(layer));
    return layer;
  }

  // A hanging lamp: the outer box swings when the guest scrolls, the inner one
  // sways on its own, and the glass glows and flickers like a flame.
  function lantern(className) {
    const l = el("div", "lantern " + className, { "aria-hidden": "true" });
    const kick = el("div", "lantern__kick");
    const swing = el("div", "lantern__swing");
    swing.style.animationDelay = (-Math.random() * 3).toFixed(2) + "s";
    const glow = el("div", "lantern__glow");
    glow.style.animationDelay = (-Math.random() * 2).toFixed(2) + "s";
    swing.append(el("div", "lantern__beam"), glow);
    swing.insertAdjacentHTML("beforeend", M.lanternSVG());
    kick.appendChild(swing);
    l.appendChild(kick);
    return l;
  }

  // Swags of tiny lights across the top of a scene, each bulb twinkling on its own beat.
  function fairyLights(className) {
    const swags = 3, perSwag = 9, w = 300, h = 46;
    let wires = "", bulbs = "";
    for (let i = 0; i < swags; i++) {
      const x0 = (i * w) / swags, x1 = ((i + 1) * w) / swags, sag = h - 8;
      wires += `M${x0} 4 Q${(x0 + x1) / 2} ${sag * 2 - 4} ${x1} 4 `;
      for (let k = 1; k < perSwag; k++) {
        const t = k / perSwag, x = x0 + (x1 - x0) * t;
        const y = (1 - t) * (1 - t) * 4 + 2 * (1 - t) * t * (sag * 2 - 4) + t * t * 4;
        const d = (-Math.random() * 3).toFixed(2), dur = (1.6 + Math.random() * 1.6).toFixed(2);
        bulbs += `<circle cx="${x.toFixed(1)}" cy="${(y + 3).toFixed(1)}" r="2.6" style="animation-delay:${d}s;animation-duration:${dur}s"/>`;
      }
    }
    const holder = el("div", "fairy " + (className || ""), { "aria-hidden": "true" });
    holder.innerHTML = `<svg viewBox="0 0 ${w} ${h + 6}" preserveAspectRatio="none"><path d="${wires}" fill="none" stroke="#3B2A1E" stroke-width=".7" vector-effect="non-scaling-stroke"/><g class="fairy__bulbs">${bulbs}</g></svg>`;
    return holder;
  }

  // Gold motes drifting up through the whole page, like dust in lamplight.
  function startSparkles() {
    if (reduceMotion) return;
    const canvas = el("canvas", "sparkles", { "aria-hidden": "true" });
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    function size() {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);
    const motes = Array.from({ length: w < 600 ? 26 : 40 }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: 0.7 + Math.random() * 1.8,
      vy: -(0.15 + Math.random() * 0.35), vx: (Math.random() - 0.5) * 0.2, p: Math.random() * 6.3, s: 0.02 + Math.random() * 0.03,
    }));
    let last = 0;
    (function frame(now) {
      requestAnimationFrame(frame);
      if (document.hidden || now - last < 30) return; // ~30 fps is plenty for drifting dust
      last = now;
      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.x += m.vx; m.y += m.vy; m.p += m.s;
        if (m.y < -8) { m.y = h + 8; m.x = Math.random() * w; }
        const a = 0.25 + 0.55 * Math.max(0, Math.sin(m.p));
        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 3);
        g.addColorStop(0, "rgba(255,236,190," + a + ")");
        g.addColorStop(1, "rgba(227,197,142,0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r * 3, 0, Math.PI * 2); ctx.fill();
      }
    })(0);
  }

  // An arch panel: cusped top + box. frame/face: maroon, green, linen.
  function archCard(frame, face, className, flat) {
    const card = el("div", "arch arch--frame-" + frame + " arch--face-" + face + (flat ? " arch--flat" : "") + (className ? " " + className : ""));
    const head = el("div", "arch__head");
    head.innerHTML = M.archCapSVG(flat);
    const crown = el("div", "arch__crown");
    head.appendChild(crown);
    const body = el("div", "arch__body");
    const inner = el("div", "arch__inner");
    body.appendChild(inner);
    card.append(head, body);
    return { card, crown, inner };
  }

  function text(tag, className, getter) {
    return bind(el(tag, className), getter);
  }

  // ---------- Dates, times and calendars ----------

  function locale() { return lang === "hi" ? "hi-IN" : "en-IN"; }

  function longDate(iso) {
    const p = dateParts(iso);
    if (!p) return "";
    const d = new Date(Date.UTC(+p.y, +p.mo - 1, +p.d, 12));
    return new Intl.DateTimeFormat(locale(), { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }).format(d);
  }

  function clock(iso) {
    const p = dateParts(iso);
    if (!p || p.h == null) return "";
    const d = new Date(Date.UTC(2000, 0, 1, +p.h, +p.mi));
    return new Intl.DateTimeFormat(locale(), { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "UTC" }).format(d).replace(/\b(AM|PM)\b/, (m) => m.toLowerCase());
  }

  function timeRange(ev) {
    const a = clock(ev.start), b = clock(ev.end);
    return a && b ? a + " – " + b : a;
  }

  function utcStamp(value) {
    const d = new Date(value);
    return isNaN(d) ? "" : d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  }

  function eventTitle(ev) {
    const n = names();
    return t(ev.name) + " · " + t(n.first.name) + " & " + t(n.second.name);
  }

  function eventNotes(ev) {
    return [ev.dressCode ? word("dressCode") + ": " + t(ev.dressCode) : "", ev.map ? word("directions") + ": " + ev.map : ""].filter(Boolean).join("\n");
  }

  function eventPlace(ev) {
    return [t(ev.venue), ev.address].filter(Boolean).join(", ");
  }

  function googleCalendarUrl(ev) {
    const q = new URLSearchParams({
      action: "TEMPLATE",
      text: eventTitle(ev),
      dates: utcStamp(ev.start) + "/" + utcStamp(ev.end || ev.start),
      details: eventNotes(ev),
      location: eventPlace(ev),
    });
    return "https://calendar.google.com/calendar/render?" + q.toString();
  }

  function downloadIcs(ev, index) {
    const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1").replace(/\r?\n/g, "\\n");
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Palace Parlour//Wedding Website//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:" + utcStamp(ev.start) + "-" + index + "@palace-parlour",
      "DTSTAMP:" + utcStamp(Date.now()),
      "DTSTART:" + utcStamp(ev.start),
      "DTEND:" + utcStamp(ev.end || ev.start),
      "SUMMARY:" + esc(eventTitle(ev)),
      "LOCATION:" + esc(eventPlace(ev)),
      "DESCRIPTION:" + esc(eventNotes(ev)),
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const file = ((ev.name && ev.name.en) || "event-" + (index + 1)).toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const a = el("a", "", { href: url, download: file + ".ics" });
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1500);
  }

  // ---------- 1. Couple: names written on an arch, drapes, lanterns ----------

  function buildCouple(els) {
    const n = names();
    const scene = el("section", "scene couple", { "aria-labelledby": "couple-names" });
    const stage = el("div", "scene__stage");
    const wall = el("div", "layer couple__wall pattern pattern--buti");
    const photo = photoLayer((W.elements || {}).backdrop, "couple__photo");

    const border = el("div", "couple__border vine-strip", { "aria-hidden": "true" });
    border.style.backgroundImage = 'url("' + (els.borderTop || motif("border-vine")) + '")';

    const drapes = ["l", "r"].map((s) => {
      const d = el("div", "drape drape--" + s, { "aria-hidden": "true" });
      d.innerHTML = M.drapeSVG();
      return d;
    });
    const lanterns = ["l", "r"].map((s) => lantern("lantern--" + s));
    const garland = fairyLights("couple__lights");

    const a = archCard("green", "linen", "couple__arch");
    a.crown.appendChild(deco(motif("bloom-stem"), "arch__bloom"));
    const kicker = text("p", "couple__kicker caps", () => word("entryKicker"));
    const h1 = el("h1", "couple__names script", { id: "couple-names", tabindex: "-1" });
    const first = text("span", "write", () => t(n.first.name));
    const amp = el("span", "write amp");
    amp.textContent = "&";
    const second = text("span", "write", () => t(n.second.name));
    h1.append(first, amp, second);
    const together = text("p", "couple__together", () => word("togetherWith"));
    const date = Object.assign(el("p", "couple__date date-caps"), { textContent: dottedDate(W.weddingDate) });
    const more = el("div", "couple__more");
    more.append(text("p", "couple__invite", () => word("inviteLine")), text("p", "couple__city caps", () => t(W.city)));
    a.inner.append(kicker, h1, together, date, more);

    const sprigs = ["l", "r"].map((s) => deco(els.cornerFloral || motif("vine-sprig"), "couple__sprig couple__sprig--" + s));
    const hint = el("div", "scroll-hint", { "aria-hidden": "true" });
    hint.append(text("span", "", () => word("scrollHint")), el("i"));

    stage.append(wall, photo, border, garland, drapes[0], drapes[1], lanterns[0], lanterns[1], a.card, sprigs[0], sprigs[1], hint);
    scene.appendChild(stage);
    return { scene, wall, photo, border, drapes, lanterns, arch: a.card, kicker, writes: [first, amp, second], together, date, more, sprigs, hint };
  }

  // The hero moment of this section: the names write themselves in.
  function namesTimeline(c) {
    if (!window.gsap || reduceMotion) return null;
    const tl = gsap.timeline({ paused: true, defaults: { ease: EASE } });
    tl.from(c.arch, { autoAlpha: 0, y: 40, duration: 1.4 })
      .from([c.lanterns, c.drapes], { autoAlpha: 0, duration: 1.4 }, 0)
      .from(c.kicker, { autoAlpha: 0, y: 10, duration: 1 }, 0.7);
    c.writes.forEach((w, i) => {
      tl.fromTo(w,
        { clipPath: "inset(-40% 100% -40% -15%)", filter: "blur(2px)" },
        { clipPath: "inset(-40% -15% -40% -15%)", filter: "blur(0px)", duration: i === 1 ? 0.8 : 1.5 },
        i === 0 ? 1.3 : ">-0.25");
    });
    tl.from([c.together, c.date], { autoAlpha: 0, y: 12, duration: 1.1, stagger: 0.35 }, ">-0.1")
      .from(c.hint, { autoAlpha: 0, duration: 1 }, ">");
    return tl;
  }

  // ---------- 2. A letter for the guest, drawn out of its envelope ----------

  function buildLetter(els) {
    const n = names();
    const scene = el("section", "scene letter", { "aria-labelledby": "letter-greeting" });
    const stage = el("div", "scene__stage");
    const wall = el("div", "layer letter__wall pattern pattern--buti-blush");

    const kickerTag = el("div", "letter__kicker tag-strip");
    kickerTag.appendChild(text("p", "caps", () => word("letterKicker")));

    const post = el("div", "post");
    const back = el("div", "post__back", { "aria-hidden": "true" });
    back.appendChild(el("div", "post__flap"));
    const letter = el("div", "post__letter");
    ["tl", "tr", "bl", "br"].forEach((c) => letter.appendChild(corner(els.cornerFloral, "letter__corner letter__corner--" + c)));
    const greet = text("p", "letter__greet script", () => (guestName() ? word("greeting") : word("greetingAll")));
    greet.id = "letter-greeting";
    letter.append(
      greet,
      text("p", "letter__body", () => word("greetingBody")),
      text("p", "letter__sign script", () => t(n.first.name) + " & " + t(n.second.name))
    );
    const front = el("div", "post__front", { "aria-hidden": "true" });
    const seal = el("div", "post__seal");
    bind(seal, () => (Array.from(t(n.first.name))[0] || "") + (Array.from(t(n.second.name))[0] || ""));
    front.appendChild(seal);
    post.append(back, letter, front);

    stage.append(wall, kickerTag, post);
    scene.appendChild(stage);
    return { scene, wall, kicker: kickerTag, post, back, letter, front };
  }

  // ---------- 3. Countdown ----------

  function buildCountdown() {
    const section = el("section", "section countdown", { "aria-labelledby": "countdown-title" });
    const wall = el("div", "layer countdown__wall pattern pattern--vine-green");
    const panel = el("div", "countdown__panel");
    const title = text("h2", "countdown__title caps", () => word("countdownTitle"));
    title.id = "countdown-title";
    const grid = el("div", "countdown__grid", { role: "timer", "aria-live": "off" });
    const units = ["days", "hours", "minutes", "seconds"].map((key) => {
      const tile = el("div", "tile");
      const num = el("span", "tile__num");
      num.textContent = "00";
      tile.append(num, text("span", "tile__label", () => word(key)));
      grid.appendChild(tile);
      return { tile, num, value: null };
    });
    const done = text("p", "countdown__done script", () => word("countdownDone"));
    done.hidden = true;
    const when = el("p", "countdown__when date-caps");
    when.textContent = dottedDate(W.weddingDate);
    panel.append(title, grid, done, when, text("p", "countdown__city", () => t(W.city)));
    section.append(wall, panel);

    const target = new Date(W.weddingDate).getTime();
    function tick() {
      let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      if (s <= 0) { grid.hidden = true; done.hidden = false; return false; }
      const values = [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
      values.forEach((v, i) => {
        const u = units[i];
        if (u.value === v) return;
        u.value = v;
        u.num.textContent = String(v).padStart(2, "0");
        if (window.gsap && !reduceMotion && u.seen) gsap.fromTo(u.num, { yPercent: -35, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.8, ease: EASE });
        u.seen = true;
      });
      return true;
    }
    if (isNaN(target) || !tick()) { /* already begun */ } else setInterval(tick, 1000);

    return { section, wall, panel, tiles: units.map((u) => u.tile) };
  }

  // ---------- 4. The celebrations: one room per event ----------

  // Which frame colour suits each pattern, so gold and text always sit on solid colour.
  const ROOM_FRAME = { harlequin: "maroon", pinstripe: "maroon", lattice: "green", vine: "green", damask: "green", checker: "maroon", buti: "maroon", "vine-green": "maroon", "buti-blush": "green" };
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

  function buildRooms(els) {
    const events = W.events || [];
    const wrap = el("section", "rooms", { "aria-labelledby": "rooms-title", id: "celebrations" });

    const intro = el("div", "rooms__intro");
    const strip = el("div", "rooms__border vine-strip", { "aria-hidden": "true" });
    strip.style.backgroundImage = 'url("' + (els.borderTop || motif("border-vine")) + '")';
    intro.appendChild(strip);
    const tag = el("div", "tag rooms__tag");
    const face = el("div", "tag__face");
    const h2 = text("h2", "rooms__title caps", () => word("eventsTitle"));
    h2.id = "rooms-title";
    face.append(h2, text("p", "rooms__lede", () => word("eventsIntro")));
    tag.appendChild(face);
    const index = el("nav", "rooms__index", { "aria-label": "Celebrations" });
    intro.append(tag, index);
    wrap.appendChild(intro);

    const rooms = events.map((ev, i) => {
      const pattern = ev.pattern || "harlequin";
      const room = el("article", "room", { id: "room-" + (i + 1), "aria-labelledby": "room-title-" + (i + 1) });
      room.style.zIndex = String(i + 1);
      const stage = el("div", "room__stage");
      const wall = el("div", "layer room__wall pattern pattern--" + pattern);
      const photo = photoLayer(ev.backdrop, "room__photo");
      // The room's pattern runs down both sides like painted pilasters.
      const pilasters = ["l", "r"].map((s) => el("div", "room__pilaster room__pilaster--" + s + " pattern pattern--" + pattern, { "aria-hidden": "true" }));
      const shade = el("div", "room__shade");
      const sprigs = [deco(motif("vine-sprig"), "room__sprig room__sprig--a"), deco(motif("bloom-stem"), "room__sprig room__sprig--b")];

      const a = archCard(ev.frame || ROOM_FRAME[pattern] || "maroon", "linen", "room__card", true);
      a.crown.append(Object.assign(el("span", "room__numeral"), { textContent: ROMAN[i] || String(i + 1) }));
      const name = text("h3", "room__name caps", () => t(ev.name));
      name.id = "room-title-" + (i + 1);
      const when = el("div", "room__when");
      when.append(
        Object.assign(el("p", "room__date date-caps"), { textContent: dottedDate(ev.start) }),
        text("p", "room__time", () => longDate(ev.start) + " · " + timeRange(ev))
      );
      const where = el("div", "room__where");
      where.append(text("p", "room__venue", () => t(ev.venue)));
      if (ev.address) where.append(text("p", "room__address", () => t(ev.address)));
      const parts = [name, Object.assign(el("div", "rule", { "aria-hidden": "true" }), { innerHTML: "<i></i>" }), when, where];
      if (ev.dressCode) {
        const dress = el("p", "room__dress");
        dress.append(text("span", "caps", () => word("dressCode")), text("span", "", () => t(ev.dressCode)));
        parts.push(dress);
      }

      const actions = el("div", "room__actions");
      if (ev.map) {
        const go = el("a", "btn btn--solid", { href: ev.map, target: "_blank", rel: "noopener" });
        go.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13Z" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="9" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';
        go.appendChild(text("span", "", () => word("directions")));
        actions.appendChild(go);
      }
      const cal = el("button", "btn btn--ghost", { type: "button", "aria-expanded": "false", "aria-controls": "cal-" + (i + 1) });
      cal.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" stroke="currentColor" stroke-width="1.4"/></svg>';
      cal.appendChild(text("span", "", () => word("addToCalendar")));
      const menu = el("div", "room__cal", { id: "cal-" + (i + 1) });
      menu.hidden = true;
      const google = el("a", "", { target: "_blank", rel: "noopener" });
      bind(google, () => word("calendarGoogle"));
      bindings.push(() => { google.href = googleCalendarUrl(ev); });
      google.href = googleCalendarUrl(ev);
      const apple = el("button", "", { type: "button" });
      bind(apple, () => word("calendarOther"));
      apple.addEventListener("click", () => downloadIcs(ev, i));
      menu.append(google, apple);
      cal.addEventListener("click", () => {
        const open = menu.hidden;
        menu.hidden = !open;
        cal.setAttribute("aria-expanded", String(open));
      });
      actions.appendChild(cal);
      parts.push(actions, menu);
      a.inner.append(...parts);

      const lamps = [lantern("lantern--room lantern--l"), lantern("lantern--room lantern--r")];
      stage.append(wall, photo, fairyLights("room__lights"), pilasters[0], pilasters[1], lamps[0], lamps[1], sprigs[0], sprigs[1], a.card, shade);
      room.appendChild(stage);
      wrap.appendChild(room);

      // Index chip: jump straight to this room.
      const chip = el("a", "rooms__chip", { href: "#room-" + (i + 1) });
      chip.append(text("span", "rooms__chip-name", () => t(ev.name)), Object.assign(el("span", "rooms__chip-date"), { textContent: dottedDate(ev.start).slice(0, 7) }));
      chip.addEventListener("click", (e) => {
        e.preventDefault();
        const y = room.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
      });
      index.appendChild(chip);

      return { room, stage, wall, photo, shade, sprigs, card: a.card };
    });

    return { wrap, intro, rooms };
  }

  // ---------- Footer ----------

  function buildFooter() {
    if (!features.credit || !W.credit || !W.credit.text) return null;
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
    return footer;
  }

  function buildPage(els) {
    const main = document.getElementById("main");
    const parts = {};
    parts.couple = buildCouple(els);
    main.appendChild(parts.couple.scene);
    parts.letter = buildLetter(els);
    main.appendChild(parts.letter.scene);
    if (features.countdown) {
      parts.countdown = buildCountdown();
      main.appendChild(parts.countdown.section);
    }
    if ((W.events || []).length) {
      parts.rooms = buildRooms(els);
      main.appendChild(parts.rooms.wrap);
    }
    const footer = buildFooter();
    if (footer) main.after(footer);
    parts.names = namesTimeline(parts.couple);
    return parts;
  }

  // ---------- Scroll motion ----------

  function setupScroll(parts) {
    if (!fx) {
      document.documentElement.classList.add("fx-static");
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const scrub = 1.2; // the motion trails the thumb slightly, so it glides
    const none = { ease: "none" };

    // Couple: the parlour opens up around the names.
    const c = parts.couple;
    gsap.timeline({ defaults: none, scrollTrigger: { trigger: c.scene, start: "top top", end: "bottom bottom", scrub } })
      .to([c.wall, c.photo], { yPercent: -8 }, 0)
      .to(c.border, { xPercent: -14 }, 0)
      .to(c.drapes[0], { xPercent: -62, rotation: -3 }, 0)
      .to(c.drapes[1], { xPercent: 62, rotation: 3 }, 0)
      .to(c.lanterns[0], { yPercent: -34 }, 0)
      .to(c.lanterns[1], { yPercent: -22 }, 0)
      .to(c.arch, { scale: 0.94, yPercent: -3 }, 0)
      .to(c.sprigs, { yPercent: -70 }, 0)
      .to(c.hint, { autoAlpha: 0, duration: 0.12 }, 0)
      .fromTo(c.more, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: EASE }, 0.12);

    // Letter: it rises out of the envelope, then the envelope sinks away.
    const L = parts.letter;
    const envH = () => L.front.offsetHeight;
    gsap.timeline({ defaults: none, scrollTrigger: { trigger: L.scene, start: "top top", end: "bottom bottom", scrub, invalidateOnRefresh: true } })
      .fromTo(L.wall, { yPercent: 0 }, { yPercent: -10, duration: 1.4 }, 0)
      .fromTo(L.post, { y: () => -envH() * 0.3 }, { y: 0, duration: 0.8 }, 0)
      .fromTo(L.letter, { y: () => envH() * 0.96 }, { y: 0, duration: 0.8, ease: EASE }, 0)
      .to(L.kicker, { autoAlpha: 0, y: -24, duration: 0.3 }, 0.15)
      .to([L.back, L.front], { y: () => envH() * 1.5, autoAlpha: 0, duration: 0.45, ease: EASE }, 0.7)
      .to({}, { duration: 0.25 });
    // Before the guest reaches it, the letter waits tucked inside.
    gsap.set(L.letter, { y: () => envH() * 0.96 });

    // Countdown: tiles are laid on the table one by one.
    if (parts.countdown) {
      const cd = parts.countdown;
      gsap.fromTo(cd.wall, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: cd.section, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.fromTo(cd.panel, { y: 60 }, { y: 0, ease: "none", scrollTrigger: { trigger: cd.section, start: "top bottom", end: "top 30%", scrub } });
      gsap.fromTo(cd.tiles, { yPercent: 50, autoAlpha: 0, rotationX: -50 }, { yPercent: 0, autoAlpha: 1, rotationX: 0, stagger: 0.2, ease: EASE, scrollTrigger: { trigger: cd.panel, start: "top 90%", end: "top 35%", scrub } });
    }

    // Rooms: each opens through an arch-shaped doorway over the last ("Room Change").
    if (parts.rooms) {
      const rooms = parts.rooms.rooms;
      rooms.forEach((r, i) => {
        gsap.fromTo([r.wall, r.photo], { yPercent: -7 }, { yPercent: 7, ease: "none", scrollTrigger: { trigger: r.room, start: "top bottom", end: "bottom top", scrub: true } });
        const arrive = gsap.timeline({ defaults: none, scrollTrigger: { trigger: r.room, start: "top bottom", end: "top top", scrub, invalidateOnRefresh: true } });
        if (i > 0) {
          arrive.fromTo(r.stage, { clipPath: "inset(18% 9% 0% 9% round 50% 50% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0% round 0% 0% 0% 0%)" }, 0);
        }
        arrive
          .fromTo(r.card, { y: () => window.innerHeight * 0.2, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: EASE }, 0)
          .fromTo(r.sprigs[0], { y: () => window.innerHeight * 0.45 }, { y: 0 }, 0)
          .fromTo(r.sprigs[1], { y: () => window.innerHeight * 0.3 }, { y: 0 }, 0);
        const next = rooms[i + 1];
        if (next) {
          gsap.timeline({ defaults: none, scrollTrigger: { trigger: next.room, start: "top bottom", end: "top top", scrub } })
            .to(r.card, { scale: 0.9, yPercent: -5 }, 0)
            .to(r.shade, { opacity: 0.5 }, 0);
        }
      });
    }

    // Lanterns swing with the guest's scroll and settle again.
    const kicks = gsap.utils.toArray(".lantern__kick");
    let settle = null;
    ScrollTrigger.create({
      onUpdate(self) {
        const angle = gsap.utils.clamp(-9, 9, -self.getVelocity() / 260);
        gsap.to(kicks, { rotation: angle, duration: 0.8, ease: EASE, overwrite: true });
        clearTimeout(settle);
        settle = setTimeout(() => gsap.to(kicks, { rotation: 0, duration: 1.4, ease: EASE, overwrite: true }), 140);
      },
    });

    bindings.push(() => ScrollTrigger.refresh());
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener("load", () => ScrollTrigger.refresh());
  }

  let revealed = false;
  function revealPage(parts) {
    if (revealed) return;
    revealed = true;
    if (parts.names) parts.names.play();
    startSparkles();
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
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    applyTheme();
    addDoorwayClip();
    setupLanguageToggle();
    const els = await loadElements();
    const parts = buildPage(els);
    setLanguage(lang);
    setupScroll(parts);

    const reveal = () => revealPage(parts);
    const skipIntro = !features.entry || params.has("skipintro");
    if (skipIntro) {
      document.body.classList.remove("is-locked");
      music.show();
      reveal();
    } else {
      runEntry(els, reveal);
    }
  }

  start();
})();
