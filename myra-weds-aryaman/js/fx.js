/* Light, particles and physics helpers: value noise, tilt, mirror-work glints,
   drifting petals, fireworks, confetti, film grain and damped pendulums. */
(function () {
  'use strict';
  const FX = {};
  const DPR = () => Math.min(window.devicePixelRatio || 1, 2);

  /* ---------- smooth 1D value noise (for flicker and breeze) ---------- */
  const perm = new Float32Array(512);
  for (let i = 0; i < 512; i++) perm[i] = Math.random();
  FX.noise = function (x) {
    const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
    const a = perm[i & 511], b = perm[(i + 1) & 511];
    return a + (b - a) * u;
  };
  FX.fbm = (x) => FX.noise(x) * 0.6 + FX.noise(x * 2.3 + 17) * 0.3 + FX.noise(x * 5.1 + 41) * 0.1;

  /* ---------- device tilt, smoothed; pointer on desktop ---------- */
  const tilt = FX.tilt = { x: 0, y: 0, tx: 0, ty: 0, active: false };
  let baseB = null, baseG = null;
  function onOrient(e) {
    if (e.beta == null) return;
    if (baseB == null) { baseB = e.beta; baseG = e.gamma; }
    tilt.tx = Math.max(-1, Math.min(1, (e.gamma - baseG) / 25));
    tilt.ty = Math.max(-1, Math.min(1, (e.beta - baseB) / 25));
    tilt.active = true;
  }
  FX.requestTilt = function () {
    try {
      const DOE = window.DeviceOrientationEvent;
      if (!DOE) return;
      if (typeof DOE.requestPermission === 'function') {
        DOE.requestPermission().then((s) => { if (s === 'granted') window.addEventListener('deviceorientation', onOrient); }).catch(() => {});
      } else window.addEventListener('deviceorientation', onOrient);
    } catch (e) { /* tilt is a bonus */ }
  };
  if (matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', (e) => {
      if (tilt.active) return;
      tilt.tx = (e.clientX / innerWidth - 0.5) * 1.2;
      tilt.ty = (e.clientY / innerHeight - 0.5) * 1.2;
    }, { passive: true });
  }
  FX.updateTilt = function () { tilt.x += (tilt.tx - tilt.x) * 0.08; tilt.y += (tilt.ty - tilt.y) * 0.08; };

  /* ---------- sprites ---------- */
  function sprite(size, draw) {
    const c = document.createElement('canvas'); c.width = c.height = size;
    draw(c.getContext('2d'), size); return c;
  }
  const glintSprite = sprite(64, (g, s) => {
    const h = s / 2;
    const r = g.createRadialGradient(h, h, 0, h, h, h);
    r.addColorStop(0, 'rgba(255,255,250,1)'); r.addColorStop(0.12, 'rgba(255,246,220,.85)');
    r.addColorStop(0.35, 'rgba(255,220,170,.18)'); r.addColorStop(1, 'rgba(255,220,170,0)');
    g.fillStyle = r; g.fillRect(0, 0, s, s);
    g.globalCompositeOperation = 'lighter';
    const ray = (w, l, a) => { const lg = g.createLinearGradient(h - l, 0, h + l, 0); lg.addColorStop(0, 'rgba(255,250,235,0)'); lg.addColorStop(.5, `rgba(255,250,235,${a})`); lg.addColorStop(1, 'rgba(255,250,235,0)'); g.fillStyle = lg; g.fillRect(h - l, h - w / 2, l * 2, w); };
    ray(1.4, h, .9); g.translate(h, h); g.rotate(Math.PI / 2); g.translate(-h, -h); ray(1.4, h * .8, .8);
  });
  FX.glintSprite = glintSprite;

  /* ---------- mirror-work glints ----------
     opts.regions: [[x0,y0,x1,y1],...] fractions of the canvas, where mirrors are.
     opts.exclude: rects to keep clear (e.g. the ivory panel).
     Brightness travels across the field as the phone tilts or the page scrolls. */
  FX.Glints = function (canvas, opts) {
    const g = canvas.getContext('2d');
    let pts = [], w = 0, h = 0, t = 0;
    const count = opts.count || 900;
    function inside(x, y, r) { return x > r[0] && x < r[2] && y > r[1] && y < r[3]; }
    function build() {
      const d = DPR(); w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.round(w * d); canvas.height = Math.round(h * d); g.setTransform(d, 0, 0, d, 0, 0);
      pts = [];
      let guard = 0;
      while (pts.length < count && guard++ < count * 20) {
        const x = Math.random(), y = Math.random();
        if (opts.regions && !opts.regions.some((r) => inside(x, y, r))) continue;
        if (opts.exclude && opts.exclude.some((r) => inside(x, y, r))) continue;
        // mirror tesserae sit on a loose grid, like inlay
        const q = opts.grid || 0;
        const gx = q ? Math.round(x / q) * q + (Math.random() - .5) * q * .3 : x;
        const gy = q ? Math.round(y / q) * q + (Math.random() - .5) * q * .3 : y;
        pts.push({ x: gx, y: gy, p: Math.random() * 6.28, s: (opts.size || 9) * (0.35 + Math.random() * Math.random() * 1.4), k: 0.6 + Math.random() * 1.6 });
      }
    }
    build();
    this.resize = build;
    this.draw = function (dt, scroll) {
      t += dt;
      g.clearRect(0, 0, w, h);
      g.globalCompositeOperation = 'lighter';
      const tx = FX.tilt.x * 5, ty = FX.tilt.y * 5, sc = (scroll || 0) * 6;
      const sharp = opts.sharp || 10;
      for (let i = 0; i < pts.length; i++) {
        const P = pts[i];
        // a travelling band of light plus each tessera's own twinkle
        const band = Math.sin(P.x * 9 + P.y * 4 + tx * 1.6 + sc - t * 0.35 + P.p * 0.25) * 0.5 + 0.5;
        const tw = Math.sin(t * P.k + P.p) * 0.5 + 0.5;
        let a = Math.pow(band, sharp) * (0.35 + tw * 0.65) + Math.pow(tw, 24) * 0.25 + Math.pow(Math.sin(P.y * 7 - ty * 1.4 + P.p * .2) * .5 + .5, 18) * 0.3;
        if (a < 0.03) continue;
        a = Math.min(1, a) * (opts.alpha || 1);
        const s = P.s * (0.55 + a * 0.7);
        g.globalAlpha = a;
        g.drawImage(glintSprite, P.x * w - s / 2, P.y * h - s / 2, s, s);
      }
      g.globalAlpha = 1;
    };
  };

  /* ---------- petals: rose, marigold, jasmine, with depth of field ---------- */
  function petalSprite(kind, blur) {
    return sprite(96, (g, s) => {
      g.filter = blur ? `blur(${blur}px)` : 'none';
      g.translate(s / 2, s / 2);
      if (kind === 'jasmine') {
        for (let i = 0; i < 5; i++) {
          g.save(); g.rotate(i * Math.PI * 2 / 5);
          const lg = g.createLinearGradient(0, 0, 0, -30); lg.addColorStop(0, '#f3efe0'); lg.addColorStop(1, '#fffdf7');
          g.fillStyle = lg; g.beginPath(); g.ellipse(0, -15, 7.5, 15, 0, 0, Math.PI * 2); g.fill(); g.restore();
        }
        g.fillStyle = '#e9dca8'; g.beginPath(); g.arc(0, 0, 4, 0, 6.3); g.fill();
        return;
      }
      const cols = kind === 'marigold' ? ['#f2a83b', '#e17e18', '#c9600f'] : ['#f5c6cc', '#e48e9a', '#b9566a'];
      const lg = g.createRadialGradient(-6, -10, 2, 0, 0, 36);
      lg.addColorStop(0, cols[0]); lg.addColorStop(0.6, cols[1]); lg.addColorStop(1, cols[2]);
      g.fillStyle = lg; g.beginPath();
      if (kind === 'marigold') { g.moveTo(0, 30); g.bezierCurveTo(-22, 10, -18, -26, -6, -30); g.lineTo(-2, -24); g.lineTo(2, -31); g.lineTo(6, -24); g.lineTo(9, -29); g.bezierCurveTo(20, -20, 20, 12, 0, 30); }
      else { g.moveTo(0, 32); g.bezierCurveTo(-30, 14, -28, -24, -4, -32); g.bezierCurveTo(4, -26, 10, -34, 14, -30); g.bezierCurveTo(32, -14, 24, 18, 0, 32); }
      g.fill();
      g.globalAlpha = .25; g.strokeStyle = cols[2]; g.lineWidth = 1; g.beginPath(); g.moveTo(0, 28); g.quadraticCurveTo(-2, 0, 2, -26); g.stroke();
      g.globalAlpha = .35; g.fillStyle = '#fff'; g.beginPath(); g.ellipse(-8, -10, 5, 12, -0.4, 0, 6.3); g.fill();
    });
  }
  const PETALS = {};
  ['rose', 'marigold', 'jasmine'].forEach((k) => { PETALS[k] = [petalSprite(k, 0), petalSprite(k, 1.6), petalSprite(k, 4)]; });

  FX.Petals = function (canvas) {
    const g = canvas.getContext('2d');
    let w = 0, h = 0, list = [], want = 0, kinds = ['rose'], wind = 0, t = 0, burst = 0;
    function resize() { const d = DPR(); w = canvas.clientWidth || canvas.width; h = canvas.clientHeight || canvas.height; canvas.width = Math.round(w * d); canvas.height = Math.round(h * d); g.setTransform(d, 0, 0, d, 0, 0); }
    resize(); this.resize = resize;
    function spawn(top) {
      const z = Math.random(); // 0 far .. 1 near
      const layer = z > 0.85 ? 2 : z < 0.25 ? 1 : 0;
      return {
        x: Math.random() * w, y: top ? -40 - Math.random() * h * 0.3 : Math.random() * h,
        z, layer, kind: kinds[Math.floor(Math.random() * kinds.length)],
        size: (layer === 2 ? 34 : layer === 1 ? 12 : 20) * (0.75 + Math.random() * 0.5),
        vy: (layer === 2 ? 60 : layer === 1 ? 18 : 34) * (0.7 + Math.random() * 0.6),
        rot: Math.random() * 6.3, vr: (Math.random() - .5) * 2.2, flip: Math.random() * 6.3, vf: 1.5 + Math.random() * 2.5, sway: Math.random() * 6.3
      };
    }
    this.set = function (n, k) { want = n; if (k) kinds = k; };
    this.shower = function (n) { burst += n; };
    this.draw = function (dt) {
      t += dt; wind = (FX.noise(t * 0.25) - 0.5) * 40 + FX.tilt.x * 30;
      while (list.length < want) list.push(spawn(list.length > want * 0.5));
      while (burst > 0) { list.push(spawn(true)); burst--; }
      g.clearRect(0, 0, w, h);
      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i];
        p.y += p.vy * dt; p.x += (wind * (0.4 + p.z) + Math.sin(t * 1.3 + p.sway) * 14) * dt;
        p.rot += p.vr * dt; p.flip += p.vf * dt;
        if (p.y > h + 50 || p.x < -60 || p.x > w + 60) { if (list.length > want) { list.splice(i, 1); continue; } Object.assign(p, spawn(true)); continue; }
        const sx = Math.cos(p.flip);
        g.save(); g.translate(p.x, p.y); g.rotate(p.rot); g.scale(0.25 + Math.abs(sx) * 0.75, 1);
        g.globalAlpha = p.layer === 1 ? 0.7 : 0.95;
        const spr = PETALS[p.kind][p.layer];
        g.drawImage(spr, -p.size / 2, -p.size / 2, p.size, p.size);
        g.restore();
      }
      return list.length;
    };
    this.count = () => list.length;
  };

  /* ---------- fireworks: gold and pink sparks with gravity and trails ---------- */
  FX.Fireworks = function (canvas) {
    const g = canvas.getContext('2d');
    let w = 0, h = 0, rockets = [], sparks = [], nextAt = 0.4, t = 0;
    const COLS = [[255, 226, 160], [255, 196, 205], [242, 210, 120], [255, 240, 225], [233, 150, 46]];
    function resize() { const d = DPR(); w = canvas.clientWidth; h = canvas.clientHeight; canvas.width = Math.round(w * d); canvas.height = Math.round(h * d); g.setTransform(d, 0, 0, d, 0, 0); }
    resize(); this.resize = resize;
    function launch() {
      rockets.push({ x: w * (0.2 + Math.random() * 0.6), y: h * 0.62, vx: (Math.random() - .5) * 30, vy: -(h * 0.55 + Math.random() * h * 0.2), life: 0.9 + Math.random() * 0.4, c: COLS[Math.floor(Math.random() * COLS.length)] });
    }
    function explode(r) {
      const n = 70 + Math.floor(Math.random() * 40), sp = 80 + Math.random() * 70;
      const ring = Math.random() < 0.35;
      for (let i = 0; i < n; i++) {
        const a = Math.random() * 6.283, v = ring ? sp : sp * Math.sqrt(Math.random());
        sparks.push({ x: r.x, y: r.y, px: r.x, py: r.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1.4 + Math.random() * 0.9, max: 2.2, c: Math.random() < 0.2 ? COLS[3] : r.c, tw: Math.random() < 0.3 });
      }
    }
    this.draw = function (dt) {
      t += dt;
      if (t > nextAt) { launch(); nextAt = t + 0.7 + Math.random() * 1.3; }
      g.globalCompositeOperation = 'destination-out';
      g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(0, 0, w, h);
      g.globalCompositeOperation = 'lighter';
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i]; r.life -= dt; r.vy += 160 * dt; r.x += r.vx * dt; r.y += r.vy * dt;
        g.fillStyle = 'rgba(255,230,190,.9)'; g.fillRect(r.x - 1, r.y - 1, 2, 3);
        if (r.life <= 0 || r.vy > -20) { explode(r); rockets.splice(i, 1); }
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]; s.life -= dt;
        if (s.life <= 0) { sparks.splice(i, 1); continue; }
        s.px = s.x; s.py = s.y; s.vx *= 0.985; s.vy = s.vy * 0.985 + 55 * dt; s.x += s.vx * dt; s.y += s.vy * dt;
        let a = Math.min(1, s.life / 1.1); if (s.tw) a *= 0.5 + 0.5 * Math.sin(t * 30 + i);
        g.strokeStyle = `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${a})`; g.lineWidth = 1.6;
        g.beginPath(); g.moveTo(s.px, s.py); g.lineTo(s.x, s.y); g.stroke();
      }
    };
    this.clear = () => { g.clearRect(0, 0, w, h); rockets = []; sparks = []; };
  };

  /* ---------- marigold confetti burst (one-shot) ---------- */
  FX.confetti = function (canvas, ox, oy, n) {
    const g = canvas.getContext('2d'), d = DPR();
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * d; canvas.height = h * d; g.setTransform(d, 0, 0, d, 0, 0);
    const parts = [];
    for (let i = 0; i < (n || 80); i++) {
      const a = -Math.PI / 2 + (Math.random() - .5) * 2.2, v = 220 + Math.random() * 320;
      parts.push({ x: ox, y: oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v, r: Math.random() * 6, vr: (Math.random() - .5) * 10, f: Math.random() * 6, kind: Math.random() < 0.75 ? 'marigold' : 'rose', s: 14 + Math.random() * 12 });
    }
    let last = performance.now(), alive = true;
    function frame(now) {
      const dt = Math.min(0.033, (now - last) / 1000); last = now;
      g.clearRect(0, 0, w, h); alive = false;
      parts.forEach((p) => {
        p.vy += 520 * dt; p.vx *= 0.985; p.vy *= 0.985; p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt; p.f += 6 * dt;
        if (p.y < h + 30) alive = true;
        g.save(); g.translate(p.x, p.y); g.rotate(p.r); g.scale(Math.abs(Math.cos(p.f)) * .8 + .2, 1);
        g.drawImage(PETALS[p.kind][0], -p.s / 2, -p.s / 2, p.s, p.s); g.restore();
      });
      if (alive) requestAnimationFrame(frame); else g.clearRect(0, 0, w, h);
    }
    requestAnimationFrame(frame);
  };

  /* ---------- damped pendulum (chandeliers, lanterns, clock) ---------- */
  FX.Pendulum = function (k, c) {
    this.a = 0; this.v = 0; this.k = k || 9; this.c = c || 1.1;
    this.kick = (imp) => { this.v += imp; };
    this.step = (dt) => { const acc = -this.k * this.a - this.c * this.v; this.v += acc * dt; this.a += this.v * dt; return this.a; };
  };

  /* ---------- grain tile ---------- */
  FX.grainTile = function () {
    const c = sprite(160, (g, s) => {
      const im = g.createImageData(s, s);
      for (let i = 0; i < im.data.length; i += 4) { const v = Math.random() * 255; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255; }
      g.putImageData(im, 0, 0);
    });
    return c.toDataURL('image/png');
  };
  FX.paperNoise = function () {
    const c = sprite(220, (g, s) => {
      const im = g.createImageData(s, s);
      for (let i = 0; i < im.data.length; i += 4) {
        const x = (i / 4) % s, y = Math.floor(i / 4 / s);
        const fib = Math.sin(x * 0.9 + Math.sin(y * 0.13) * 3) * 0.5 + 0.5;
        const v = 200 + Math.random() * 40 - fib * 18;
        im.data[i] = v; im.data[i + 1] = v * 0.96; im.data[i + 2] = v * 0.9; im.data[i + 3] = 40 + Math.random() * 30;
      }
      g.putImageData(im, 0, 0);
    });
    return c.toDataURL('image/png');
  };

  window.FX = FX;
})();
