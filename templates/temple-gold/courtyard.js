// Temple Gold courtyard: the hanging jasmine and bells, the lamps and plants,
// the life in the sky behind them, and the breeze that moves it all.
//
// The breeze is a field across the screen: a soft ambient sway that varies a
// little from place to place, plus gusts that travel from left to right, so
// things nearer the left catch each gust first. The guest's scrolling adds a
// little extra stir. Every swaying thing is a damped spring: it leans into the
// wind, overshoots a touch and settles, instead of repeating a fixed loop.

window.TempleCourtyard = (function () {
  "use strict";

  const C = window.InviteCore;
  const M = window.TempleMotifs;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = [];
  const gusts = [];
  const wind = { impulse: 0, lastY: 0, last: 0, nextGust: 3, nextPetal: 1, nextFlock: 6 };
  let running = false;

  // How each kind of thing responds to the wind.
  //   damping: how quickly a swing dies away (lower = swings longer)
  //   flutter: small quick tremble on top of the sway
  const KINDS = {
    hang: { damping: 0.14, flutter: 0.5 },
    bell: { damping: 0.1, flutter: 0.1 },
    garland: { damping: 0.35, flutter: 0.25 },
    plant: { damping: 0.28, flutter: 0.6 },
  };

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
        el.dataset.kind = h.bell ? "bell" : "hang";
        el.dataset.lean = h.bell ? "-2.5" : "-5";
        el.dataset.period = (h.bell ? 3.2 : 3.4 + Math.random() * 1.4).toFixed(2);
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
      s.dataset.kind = "hang";
      s.dataset.lean = "-5";
      s.dataset.period = (3.2 + Math.random() * 1.4).toFixed(2);
      s.style.setProperty("--len", len);
      s.innerHTML = '<div class="slot" data-slot="jasmine-string" data-len="' + len + '"></div>';
      el.append(s);
    });
    return el;
  }

  // The thoranam across the top. The pieces only shear (their top edge, the
  // string, stays put), so the garland never breaks apart at the joins.
  function buildGarland(box) {
    const seg = Math.min(440, Math.max(200, innerWidth * 0.34));
    const count = Math.ceil((innerWidth * 1.04) / (seg * 0.8)) + 1;
    for (let i = 0; i < count; i++) {
      const g = document.createElement("div");
      g.className = "wind garland-seg";
      g.dataset.kind = "garland";
      g.dataset.lean = "2.2";
      g.dataset.period = (2.6 + Math.random() * 0.8).toFixed(2);
      g.innerHTML = '<div class="slot" data-slot="thoranam"></div>';
      box.append(g);
    }
  }

  // Each lamp gets five flames, sitting on the wicks of kuthuvilakku.webp
  // (left %, top % of the lamp image, measured at the base of each flame).
  const SPOUTS = [[8, 26.6], [26.4, 26.7], [48.5, 26.9], [73, 26.7], [92.2, 27]];
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
      wind.impulse = Math.min(1.4, wind.impulse + 0.5);
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
    const period = +d.period || 4;
    items.push({
      el, kind: d.kind || "hang",
      lean: d.lean ? +d.lean : -4,
      k: (2 * Math.PI / period) ** 2,           // spring stiffness from the natural period
      angle: 0, vel: 0, x: 0,
      seed: Math.random() * 100,
    });
  }

  function registerAll(root) {
    root.querySelectorAll(".wind").forEach((el) => {
      if (!el.dataset.registered) { el.dataset.registered = "1"; register(el); }
    });
    measure();
  }

  // Where each item sits across the screen, so gusts reach it in turn.
  function measure() {
    items.forEach((it) => {
      const r = it.el.getBoundingClientRect();
      it.x = r.left + r.width / 2;
    });
  }

  function ringBell(el) {
    C.chime(0.6);
    const item = items.find((i) => i.el === el);
    if (item) item.vel += 26;
  }

  // ---- The breeze ------------------------------------------------------------

  function windAt(x, t) {
    let w = 0.25 + 0.15 * Math.sin(0.35 * t + x * 0.003) + 0.08 * Math.sin(0.9 * t + x * 0.009 + 1.3);
    for (const g of gusts) {
      // Behind the gust front the air is moving; it builds quickly as the
      // front arrives and eases off over the gust's length.
      const d = g.speed * (t - g.t0) - 200 - x;
      if (d > 0) w += g.strength * Math.exp(-d / g.len) * (1 - Math.exp(-d / 70));
    }
    return w + wind.impulse;
  }

  function spawnGust(t) {
    const g = { t0: t, speed: 260 + Math.random() * 160, strength: 0.6 + Math.random() * 0.5, len: 280 + Math.random() * 160 };
    gusts.push(g);
    spawnPetals(3 + ((Math.random() * 3) | 0), g.speed);
  }

  // Cheap smooth noise for the flutter: a few incommensurate sines.
  const noise = (s, t) => Math.sin(t * 7.1 + s) * 0.5 + Math.sin(t * 11.3 + s * 1.7) * 0.3 + Math.sin(t * 3.7 + s * 2.3) * 0.2;

  function frame(now) {
    if (!running) return;
    const t = now / 1000;
    const dt = Math.min(0.05, t - (wind.last || t));
    wind.last = t;

    if (t > wind.nextGust) { spawnGust(t); wind.nextGust = t + 7 + Math.random() * 7; }
    while (gusts.length && gusts[0].speed * (t - gusts[0].t0) > innerWidth + 200 + gusts[0].len * 7) gusts.shift();
    if (t > wind.nextPetal) { farPetal(); wind.nextPetal = t + 1.3 + Math.random() * 1.6; }
    if (t > wind.nextFlock) { flock(); wind.nextFlock = t + 16 + Math.random() * 12; }
    wind.impulse *= Math.pow(0.4, dt);

    for (const it of items) {
      const w = windAt(it.x, t);
      if (it.kind === "flame") {
        it.el.style.transform = "skewX(" + (-w * 8 + noise(it.seed, t) * 2.2).toFixed(2) + "deg)";
        continue;
      }
      const K = KINDS[it.kind] || KINDS.hang;
      const target = it.lean * w + K.flutter * w * noise(it.seed, t);
      // Damped spring, two half-steps for stability.
      for (let i = 0; i < 2; i++) {
        const h = dt / 2;
        const acc = it.k * (target - it.angle) - 2 * K.damping * Math.sqrt(it.k) * it.vel;
        it.vel += acc * h;
        it.angle += it.vel * h;
      }
      const a = it.angle;
      let tf;
      if (it.kind === "plant") tf = "rotate(" + (a * 0.3).toFixed(2) + "deg) skewX(" + (-a * 0.7).toFixed(2) + "deg)";
      else if (it.kind === "garland") tf = "skewX(" + (a * 0.35).toFixed(2) + "deg)";
      else tf = "rotate(" + a.toFixed(2) + "deg)";
      it.el.style.transform = tf;
    }
    requestAnimationFrame(frame);
  }

  function onScroll() {
    const y = window.scrollY;
    wind.impulse = Math.min(1.2, wind.impulse + Math.min(60, Math.abs(y - wind.lastY)) * 0.004);
    wind.lastY = y;
    veil();
  }

  // Past the couple, a warm veil settles over the temple view so the event
  // cards read calmly while the courtyard still glows through.
  function veil() {
    const v = document.getElementById("veil");
    if (v) v.style.opacity = Math.min(0.75, Math.max(0, (window.scrollY - innerHeight * 0.35) / innerHeight)).toFixed(3);
  }

  // ---- Life in the courtyard -----------------------------------------------------

  // Petals carried across the front by a gust, travelling at its speed.
  function spawnPetals(count, speed) {
    const box = document.getElementById("petals");
    if (!box || document.hidden) return;
    const w = innerWidth, h = innerHeight;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      const kind = ["jasmine", "jasmine", "marigold", "rose"][(Math.random() * 4) | 0];
      p.className = "petal petal--" + kind;
      if (kind === "jasmine") p.innerHTML = M.jasmineFlower();
      box.append(p);
      const y0 = h * (0.05 + Math.random() * 0.5);
      const dur = ((w + 120) / (speed * 0.8)) * 1000 + Math.random() * 1500;
      const spin = (Math.random() < 0.5 ? -1 : 1) * (300 + Math.random() * 400);
      const anim = p.animate([
        { transform: "translate(-40px," + y0 + "px) rotate(0deg)", opacity: 0 },
        { opacity: 0.95, offset: 0.1 },
        { transform: "translate(" + w * 0.35 + "px," + (y0 + h * 0.06) + "px) rotate(" + spin * 0.35 + "deg)", offset: 0.35 },
        { transform: "translate(" + w * 0.7 + "px," + (y0 + h * 0.2) + "px) rotate(" + spin * 0.7 + "deg)", offset: 0.7 },
        { opacity: 0.9, offset: 0.88 },
        { transform: "translate(" + (w + 40) + "px," + (y0 + h * (0.28 + Math.random() * 0.12)) + "px) rotate(" + spin + "deg)", opacity: 0 },
      ], { duration: dur, delay: i * (350 + Math.random() * 500), easing: "linear", fill: "both" });
      anim.onfinish = () => p.remove();
    }
  }

  // Far away, behind the pillars: a slow, soft fall of petals over the tank.
  function farPetal() {
    const box = document.getElementById("sky");
    if (!box || document.hidden || box.querySelectorAll(".far-petal").length > 14) return;
    const w = innerWidth, h = innerHeight;
    const p = document.createElement("span");
    p.className = "far-petal far-petal--" + ["jasmine", "marigold", "rose"][(Math.random() * 3) | 0];
    box.append(p);
    const x0 = Math.random() * w, drift = 40 + Math.random() * 90, dur = 11000 + Math.random() * 7000;
    const anim = p.animate([
      { transform: "translate(" + x0 + "px,-20px) rotate(0deg)", opacity: 0 },
      { opacity: 0.7, offset: 0.12 },
      { transform: "translate(" + (x0 + drift * 0.4) + "px," + h * 0.33 + "px) rotate(140deg)", offset: 0.33 },
      { transform: "translate(" + (x0 + drift * 0.2) + "px," + h * 0.66 + "px) rotate(260deg)", offset: 0.66 },
      { opacity: 0.6, offset: 0.9 },
      { transform: "translate(" + (x0 + drift) + "px," + (h + 20) + "px) rotate(380deg)", opacity: 0 },
    ], { duration: dur, easing: "linear", fill: "both" });
    anim.onfinish = () => p.remove();
  }

  // A small flock crossing the sky, beating and gliding, gently rising and falling.
  function flock() {
    const box = document.getElementById("sky");
    if (!box || document.hidden) return;
    const w = innerWidth, h = innerHeight;
    const ltr = Math.random() < 0.7;
    const count = 3 + ((Math.random() * 4) | 0);
    const y0 = h * (0.06 + Math.random() * 0.2);
    const dur = 15000 + Math.random() * 7000;
    for (let i = 0; i < count; i++) {
      const b = document.createElement("span");
      b.className = "bird";
      b.innerHTML = '<svg viewBox="0 0 24 10" aria-hidden="true"><path class="bird__wings" d="M0 5C4 0 8 1 12 6C16 1 20 0 24 5C20 3 16 4 12 8C8 4 4 3 0 5Z"/></svg>';
      b.style.setProperty("--flap", (0.7 + Math.random() * 0.35).toFixed(2) + "s");
      b.style.setProperty("--size", (0.75 + Math.random() * 0.5).toFixed(2));
      box.append(b);
      // A loose V: each bird a little behind and to one side of the one before.
      const dx = -i * (22 + Math.random() * 14), dy = (i % 2 ? 1 : -1) * Math.ceil(i / 2) * (9 + Math.random() * 6);
      const from = ltr ? -60 + dx : w + 60 - dx;
      const to = ltr ? w + 80 + dx : -80 - dx;
      const flip = ltr ? "" : " scaleX(-1)";
      const pts = [0, 0.25, 0.5, 0.75, 1].map((k) => {
        const x = from + (to - from) * k;
        const y = y0 + dy + Math.sin(k * Math.PI * 2 + i) * 10 - k * 18;
        return { transform: "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px)" + flip, offset: k };
      });
      const anim = b.animate(pts, { duration: dur, delay: i * 180, easing: "linear", fill: "both" });
      anim.onfinish = () => b.remove();
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
    window.addEventListener("resize", measure);
    if (reduce) {
      gsap.set(".cflame__lit", { scale: 1 });
      window.addEventListener("scroll", veil, { passive: true });
      return veil();
    }
    wind.lastY = window.scrollY;
    veil();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", () => { wind.last = 0; });
    running = true;
    requestAnimationFrame(frame);
    flock();
  }

  // The hero moment after the doors: the kolam unfolds, the lamps light.
  function intro() {
    measure();
    const lines = document.querySelectorAll(".floor__kolam .k-line");
    const kolamImg = document.querySelector(".floor__kolam .has-image > img");
    if (kolamImg && !reduce) {
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
