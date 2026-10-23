// Temple Gold courtyard: the hanging jasmine and bells, the lamps, and the
// wind that moves them all.
//
// One soft breeze drives everything: a slow ambient sway, an occasional gust
// (which also carries a few jasmine, marigold and rose petals across), and the
// guest's own scrolling, which stirs the strands a little more.

window.TempleCourtyard = (function () {
  "use strict";

  const C = window.InviteCore;
  const M = window.TempleMotifs;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = [];
  const wind = { gustAt: -1, nextGust: 5, impulse: 0, lastY: 0, last: 0 };
  let running = false;

  // Strands and bells along the top, as a fraction of the screen width from
  // each side. len sets a strand's size (270 = the longest).
  const HANGINGS = [
    { x: 13.5, len: 270 }, { x: 19.5, len: 210 }, { x: 25, len: 165 },
    { x: 9.8, bell: true },
  ];

  function buildHangings(box) {
    ["left", "right"].forEach((side) => {
      HANGINGS.forEach((h) => {
        const el = document.createElement("div");
        el.className = "wind " + (h.bell ? "hang-bell" : "strand");
        el.style.left = (side === "left" ? h.x : 100 - h.x) + "vw";
        el.dataset.lean = h.bell ? "-2" : "-4";
        el.dataset.amp = h.bell ? "1.6" : "3";
        el.dataset.period = (h.bell ? 3.4 : 3.8 + Math.random() * 1.6).toFixed(2);
        const slot = document.createElement("div");
        slot.className = "slot";
        slot.dataset.slot = h.bell ? "bell" : "jasmine-string";
        if (h.len) {
          slot.dataset.len = h.len;
          el.style.setProperty("--len", h.len);
        }
        el.append(slot);
        if (h.bell) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "hang-bell__tap";
          btn.tabIndex = -1;
          btn.addEventListener("click", () => ringBell(el));
          el.append(btn);
        }
        box.append(el);
      });
    });
  }

  // Strands that hang between the event cards.
  function betweenStrands() {
    const el = document.createElement("div");
    el.className = "between";
    el.setAttribute("aria-hidden", "true");
    [190, 270, 190].forEach((len) => {
      const s = document.createElement("div");
      s.className = "wind strand strand--between";
      s.dataset.lean = "-4";
      s.dataset.amp = "3.4";
      s.dataset.period = (3.6 + Math.random() * 1.5).toFixed(2);
      s.style.setProperty("--len", len);
      s.innerHTML = '<div class="slot" data-slot="jasmine-string" data-len="' + len + '"></div>';
      el.append(s);
    });
    return el;
  }

  // The thoranam across the top: enough overlapping lengths to span the screen.
  function buildGarland(box) {
    const seg = Math.min(440, Math.max(200, innerWidth * 0.34));
    const count = Math.ceil((innerWidth * 1.04) / (seg * 0.92)) + 1;
    for (let i = 0; i < count; i++) {
      const g = document.createElement("div");
      g.className = "wind garland-seg";
      g.dataset.lean = "0";
      g.dataset.amp = "0.7";
      g.dataset.period = (5 + Math.random() * 2).toFixed(2);
      g.innerHTML = '<div class="slot" data-slot="thoranam"></div>';
      box.append(g);
    }
  }

  // Each lamp gets five flames, sitting on the wicks of kuthuvilakku.webp
  // (left %, top % of the lamp image, measured at the base of each flame).
  const SPOUTS = [[7.3, 25.6], [25.1, 25.8], [48.6, 26.2], [74.2, 26.1], [93.5, 26.3]];
  function addFlames(lamp) {
    SPOUTS.forEach(([x, y]) => {
      const f = document.createElement("span");
      f.className = "cflame";
      f.dataset.kind = "flame";
      f.style.left = x + "%";
      f.style.top = y + "%";
      f.innerHTML = '<span class="cflame__lit"><span class="flame__body">' + M.flame() + "</span></span>";
      lamp.append(f);
      register(f);
    });
    lamp.addEventListener("click", () => {
      if (reduce) return;
      gsap.timeline()
        .to(lamp.querySelectorAll(".cflame__lit"), { scale: 1.3, duration: 0.7, ease: "power2.out", stagger: 0.08 })
        .to(lamp.querySelectorAll(".cflame__lit"), { scale: 1, duration: 1.2 });
      wind.impulse = Math.min(1.6, wind.impulse + 0.5);
    });
  }

  function scatterFlowers(box) {
    // [left %, bottom %, size, pink]
    [[24, 14, 1, 0], [30, 6, .8, 0], [38, 18, .7, 0], [56, 4, .9, 0], [63, 12, .7, 1], [70, 20, .8, 0], [44, 2, .75, 0], [78, 8, .7, 0], [18, 4, .7, 0]]
      .forEach(([x, y, s, pink]) => {
        const f = document.createElement("span");
        f.className = "floor-flower" + (pink ? " floor-flower--pink" : "");
        f.style.left = x + "%";
        f.style.bottom = y + "%";
        f.style.setProperty("--s", s);
        f.innerHTML = M.jasmineFlower();
        box.append(f);
      });
  }

  function register(el) {
    const d = el.dataset;
    items.push({
      el, kind: d.kind || "sway",
      base: +d.base || 0, amp: d.amp ? +d.amp : 2, period: +d.period || 5, lean: d.lean ? +d.lean : 2,
      phase: Math.random() * Math.PI * 2, kick: 0,
    });
  }

  function registerAll(root) {
    root.querySelectorAll(".wind").forEach((el) => {
      if (!el.dataset.registered) { el.dataset.registered = "1"; register(el); }
    });
  }

  function ringBell(el) {
    C.chime(0.6);
    const item = items.find((i) => i.el === el);
    if (item) item.kick = 1;
  }

  // ---- The breeze ------------------------------------------------------------

  // A gust rises over 1.6s, holds, then dies away over about 3.5s.
  function gustAt(age) {
    if (age < 0) return 0;
    if (age < 1.6) return 0.9 * Math.sin((age / 1.6) * Math.PI / 2);
    if (age < 2.6) return 0.9;
    if (age < 6) return 0.9 * (1 - (age - 2.6) / 3.4) ** 2;
    return 0;
  }

  function frame(now) {
    if (!running) return;
    const t = now / 1000;
    const dt = Math.min(0.1, t - (wind.last || t));
    wind.last = t;
    if (t > wind.nextGust) {
      wind.gustAt = t;
      wind.nextGust = t + 8 + Math.random() * 6;
      spawnPetals(4 + ((Math.random() * 3) | 0));
    }
    wind.impulse *= Math.pow(0.35, dt);
    const ambient = 0.3 + 0.2 * Math.sin(t * 0.37) + 0.12 * Math.sin(t * 0.91 + 2);
    const W = ambient + gustAt(t - wind.gustAt) + wind.impulse;

    for (const it of items) {
      const wave = Math.sin((2 * Math.PI * t) / it.period + it.phase);
      if (it.kind === "flame") {
        it.el.style.transform = "skewX(" + (-W * 7 + Math.sin(t * 2.1 + it.phase) * 1.6).toFixed(2) + "deg)";
        continue;
      }
      it.kick *= Math.pow(0.45, dt);
      const swing = it.amp * (0.6 + W) * wave + it.kick * 14 * Math.sin(t * 3.4);
      it.el.style.transform = "rotate(" + (it.base + it.lean * W + swing).toFixed(2) + "deg)";
    }
    requestAnimationFrame(frame);
  }

  function onScroll() {
    const y = window.scrollY;
    wind.impulse = Math.min(1.4, wind.impulse + Math.min(60, Math.abs(y - wind.lastY)) * 0.006);
    wind.lastY = y;
    veil();
  }

  // Past the couple, a warm veil settles over the temple view so the event
  // cards read calmly while the courtyard still glows through.
  function veil() {
    const v = document.getElementById("veil");
    if (v) v.style.opacity = Math.min(0.8, Math.max(0, (window.scrollY - innerHeight * 0.35) / innerHeight)).toFixed(3);
  }

  function spawnPetals(count) {
    const box = document.getElementById("petals");
    if (!box || document.hidden) return;
    const w = innerWidth, h = innerHeight;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      const kind = ["jasmine", "jasmine", "marigold", "rose"][(Math.random() * 4) | 0];
      p.className = "petal petal--" + kind;
      if (kind === "jasmine") p.innerHTML = M.jasmineFlower();
      box.append(p);
      const y0 = h * (0.05 + Math.random() * 0.5), dur = 7000 + Math.random() * 3500;
      const anim = p.animate([
        { transform: "translate(-40px," + y0 + "px) rotate(0deg)", opacity: 0 },
        { opacity: 0.95, offset: 0.12 },
        { transform: "translate(" + w * 0.5 + "px," + (y0 + h * 0.18) + "px) rotate(" + (200 + Math.random() * 160) + "deg)", offset: 0.5 },
        { opacity: 0.9, offset: 0.85 },
        { transform: "translate(" + (w + 40) + "px," + (y0 + h * (0.28 + Math.random() * 0.15)) + "px) rotate(" + (420 + Math.random() * 300) + "deg)", opacity: 0 },
      ], { duration: dur, delay: i * (500 + Math.random() * 700), easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "both" });
      anim.onfinish = () => p.remove();
    }
  }

  // ---- Setup -------------------------------------------------------------------

  function build() {
    buildHangings(document.getElementById("hangings"));
    buildGarland(document.getElementById("garland"));
    scatterFlowers(document.getElementById("floor-flowers"));
  }

  function start() {
    document.querySelectorAll(".lamp").forEach(addFlames);
    registerAll(document);
    if (reduce) {
      gsap.set(".cflame__lit", { scale: 1 });
      window.addEventListener("scroll", veil, { passive: true });
      return veil();
    }
    wind.lastY = window.scrollY;
    veil();
    window.addEventListener("scroll", onScroll, { passive: true });
    running = true;
    requestAnimationFrame(frame);
  }

  // The hero moment after the doors: the kolam draws itself, the lamps light.
  function intro() {
    const lines = document.querySelectorAll(".floor__kolam .k-line");
    const kolamImg = document.querySelector(".floor__kolam .has-image > img");
    if (kolamImg && !reduce) {
      // A photographed kolam unfolds from its centre outwards.
      gsap.fromTo(kolamImg, { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(72% at 50% 50%)", duration: 2.8, delay: 0.3 });
    }
    if (reduce) {
      if (lines.length) gsap.set(lines, { strokeDashoffset: 0 });
      gsap.set(".cflame__lit", { scale: 1 });
      return;
    }
    const tl = gsap.timeline();
    if (lines.length) {
      tl.fromTo(lines, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2.6, stagger: 0.4 }, 0.2)
        .fromTo(".floor__kolam .k-dots, .floor__kolam .k-centre", { opacity: 0 }, { opacity: 1, duration: 1.2 }, 2);
    }
    tl.fromTo(".cflame__lit", { scale: 0 }, { scale: 1, duration: 1.1, ease: "power2.out", stagger: 0.12 }, 0.4);
  }

  return { build, start, intro, registerAll, betweenStrands };
})();
