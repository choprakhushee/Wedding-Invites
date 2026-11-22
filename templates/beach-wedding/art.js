/* Beach Wedding · watercolour illustrations drawn as SVG.
   Every colour is a CSS variable, so switching the colour story recolours the art. */
(function () {
  'use strict';
  var F = function (c, o) { return 'style="fill:var(--' + c + ')' + (o != null ? ';opacity:' + o : '') + '"'; };
  var S = function (c, w, o, extra) {
    return 'style="fill:none;stroke:var(--' + c + ');stroke-width:' + w + (o != null ? ';opacity:' + o : '') +
      ';stroke-linecap:round;stroke-linejoin:round' + (extra || '') + '"';
  };
  var r1 = function (n) { return Math.round(n * 10) / 10; };

  /* deterministic random so the art looks the same on every load */
  function rng(seed) {
    var s = seed % 2147483647; if (s <= 0) s += 2147483646;
    return function () { s = s * 16807 % 2147483647; return (s - 1) / 2147483646; };
  }

  function bez(p0, p1, p2, p3, t) {
    var u = 1 - t;
    return [
      u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
      u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]
    ];
  }
  function quad(p0, p1, p2, t) {
    var u = 1 - t;
    return [u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]];
  }

  /* ---------- small motifs ---------- */
  function marigold(x, y, r) {
    return '<g transform="translate(' + r1(x) + ' ' + r1(y) + ')"><circle r="' + r + '" ' + F('flA') + '/>' +
      '<circle r="' + r + '" ' + S('flAd', r * 0.35, 0.7, ';stroke-dasharray:1.2 1.4') + '/>' +
      '<circle r="' + r1(r * 0.4) + '" ' + F('flAd', 0.55) + '/></g>';
  }
  function orchid(x, y, s, rot) {
    var p = '';
    for (var i = 0; i < 5; i++) {
      p += '<ellipse cx="0" cy="' + (-5 * s) + '" rx="' + 2.6 * s + '" ry="' + 4.6 * s + '" transform="rotate(' + (i * 72) + ')" ' + F('flB', 0.92) + '/>';
    }
    return '<g transform="translate(' + r1(x) + ' ' + r1(y) + ') rotate(' + (rot || 0) + ')">' + p +
      '<ellipse cx="0" cy="1.5" rx="' + 2.4 * s + '" ry="' + 2.8 * s + '" ' + F('flBd') + '/>' +
      '<circle r="' + 1.2 * s + '" ' + F('flA') + '/></g>';
  }
  function frangipani(x, y, s, rot) {
    var p = '';
    for (var i = 0; i < 5; i++) {
      p += '<path d="M0 0 C' + (-6 * s) + ' ' + (-4 * s) + ' ' + (-5 * s) + ' ' + (-12 * s) + ' 0 ' + (-11 * s) + ' C' + (4 * s) + ' ' + (-10 * s) + ' ' + (3 * s) + ' ' + (-3 * s) + ' 0 0Z" transform="rotate(' + (i * 72) + ')" style="fill:#fffaf0;stroke:var(--blush);stroke-width:.6"/>';
    }
    return '<g transform="translate(' + r1(x) + ' ' + r1(y) + ') rotate(' + (rot || 0) + ')">' + p +
      '<circle r="' + 3.2 * s + '" ' + F('flA', 0.85) + '/></g>';
  }
  function shell(x, y, s, rot, fill) {
    var ribs = '';
    for (var i = -3; i <= 3; i++) {
      var a = (-90 + i * 17) * Math.PI / 180;
      ribs += '<line x1="0" y1="0" x2="' + r1(Math.cos(a) * 12 * s) + '" y2="' + r1(Math.sin(a) * 12 * s) + '" ' + S('sand2', 0.7 * s) + '/>';
    }
    return '<g transform="translate(' + r1(x) + ' ' + r1(y) + ') rotate(' + (rot || 0) + ')">' +
      '<path d="M0 1 L' + (-11 * s) + ' ' + (-6 * s) + ' C' + (-11 * s) + ' ' + (-16 * s) + ' ' + (11 * s) + ' ' + (-16 * s) + ' ' + (11 * s) + ' ' + (-6 * s) + 'Z" ' + F(fill || 'blush') + ' />' +
      ribs + '<rect x="' + (-3 * s) + '" y="0" width="' + (6 * s) + '" height="' + (2.5 * s) + '" rx="1" ' + F(fill || 'blush') + '/></g>';
  }
  function starfish(x, y, s, rot) {
    var d = '';
    for (var i = 0; i < 10; i++) {
      var a = (i * 36 - 90) * Math.PI / 180, rr = (i % 2 ? 4 : 11) * s;
      d += (i ? 'L' : 'M') + r1(Math.cos(a) * rr) + ' ' + r1(Math.sin(a) * rr);
    }
    return '<g transform="translate(' + r1(x) + ' ' + r1(y) + ') rotate(' + (rot || 0) + ')"><path d="' + d + 'Z" ' + F('accent', 0.9) +
      ' stroke-linejoin="round"/><circle r="1" ' + F('paper') + '/></g>';
  }
  function lantern(x, y, s, cls) {
    return '<g class="lantern ' + (cls || '') + '" transform="translate(' + r1(x) + ' ' + r1(y) + ') scale(' + s + ')">' +
      '<circle class="glow" cx="0" cy="-12" r="20" ' + F('flA', 0.35) + ' filter="url(#blur6)"/>' +
      '<path d="M-6 -30 L0 -38 L6 -30Z" ' + F('gold') + '/>' +
      '<path d="M-8 -29 Q-11 -13 -7 0 L7 0 Q11 -13 8 -29Z" ' + F('flA', 0.9) + '/>' +
      '<path d="M-8 -29 Q-11 -13 -7 0 L7 0 Q11 -13 8 -29Z M0 -29 V0 M-9.5 -15 H9.5" ' + S('gold', 1.3) + '/>' +
      '<ellipse cx="0" cy="-13" rx="3" ry="5" style="fill:#fff8d8;opacity:.9"/>' +
      '<rect x="-9" y="0" width="18" height="3" rx="1" ' + F('gold') + '/></g>';
  }
  function garlandArc(points, every) {
    var out = '';
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      out += (i % every === every - 1) ? orchid(p[0], p[1], 0.75, i * 37) : marigold(p[0], p[1], 3.6);
    }
    return out;
  }
  function swag(x1, y1, x2, y2, dip, n) {
    var pts = [], c = [(x1 + x2) / 2, Math.max(y1, y2) + dip];
    for (var i = 0; i <= n; i++) pts.push(quad([x1, y1], c, [x2, y2], i / n));
    return pts;
  }

  /* ---------- waves ---------- */
  function wavePath(y, amp, period, bottom, x0, x1) {
    x0 = x0 == null ? -period : x0; x1 = x1 == null ? 400 + period * 2 : x1;
    var d = 'M' + x0 + ' ' + y;
    for (var x = x0; x < x1; x += period) {
      d += ' Q' + r1(x + period / 4) + ' ' + r1(y - amp) + ' ' + r1(x + period / 2) + ' ' + y +
        ' Q' + r1(x + period * 3 / 4) + ' ' + r1(y + amp) + ' ' + r1(x + period) + ' ' + y;
    }
    if (bottom != null) d += ' L' + x1 + ' ' + bottom + ' L' + x0 + ' ' + bottom + 'Z';
    return d;
  }
  /* a lacy foam edge: scallops of different sizes */
  function foamPath(y, w, seed, bottom) {
    var R = rng(seed), d = 'M0 ' + bottom + ' L0 ' + y, x = 0;
    while (x < w) {
      var s = 8 + R() * 18, h = 3 + R() * 7;
      d += ' Q' + r1(x + s / 2) + ' ' + r1(y - h) + ' ' + r1(x + s) + ' ' + r1(y + (R() - 0.5) * 3);
      x += s;
    }
    return d + ' L' + w + ' ' + bottom + 'Z';
  }
  function foamDots(y, w, seed, n) {
    var R = rng(seed), out = '';
    for (var i = 0; i < n; i++) {
      out += '<circle cx="' + r1(R() * w) + '" cy="' + r1(y + R() * 10) + '" r="' + r1(0.8 + R() * 2.2) + '" style="fill:#fff;opacity:' + r1(0.5 + R() * 0.5) + '"/>';
    }
    return out;
  }

  /* ---------- palm ---------- */
  function palm(base, top, ctrl1, ctrl2, opts) {
    opts = opts || {};
    var R = rng(opts.seed || 7), out = '<g class="palm-trunk">';
    for (var t = 0; t <= 1.001; t += (opts.step || 0.014)) {
      var p = bez(base, ctrl1, ctrl2, top, t), q = bez(base, ctrl1, ctrl2, top, Math.min(1, t + 0.01));
      var ang = Math.atan2(q[1] - p[1], q[0] - p[0]) * 180 / Math.PI + 90;
      var w = (opts.w || 9) * (1 - t * 0.45);
      out += '<ellipse cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" rx="' + r1(w) + '" ry="' + r1(w * 0.62) + '" transform="rotate(' + r1(ang) + ' ' + r1(p[0]) + ' ' + r1(p[1]) + ')" ' +
        F(Math.round(t * 30) % 2 ? 'trunk' : 'trunk2') + '/>';
    }
    out += '</g><g class="fronds" style="transform-origin:' + top[0] + 'px ' + top[1] + 'px">';
    var angles = opts.angles || [-170, -140, -105, -70, -35, -5, 25, 160, 200];
    for (var i = 0; i < angles.length; i++) {
      var a = angles[i] * Math.PI / 180, L = (opts.len || 95) * (0.8 + R() * 0.35);
      var end = [top[0] + Math.cos(a) * L, top[1] + Math.sin(a) * L * 0.55 + L * 0.45];
      var mid = [top[0] + Math.cos(a) * L * 0.55, top[1] + Math.sin(a) * L * 0.55 - 18];
      var leaf = '';
      for (var u = 0.08; u <= 1; u += 0.055) {
        var p1 = quad(top, mid, end, u), p2 = quad(top, mid, end, Math.min(1, u + 0.02));
        var tx = p2[0] - p1[0], ty = p2[1] - p1[1], tl = Math.hypot(tx, ty) || 1;
        tx /= tl; ty /= tl;
        var len = (opts.leaf || 17) * Math.sin(Math.PI * Math.min(1, u * 1.1)) + 2;
        for (var sgn = -1; sgn <= 1; sgn += 2) {
          var nx = -ty * sgn, ny = tx * sgn;
          leaf += 'M' + r1(p1[0]) + ' ' + r1(p1[1]) + ' L' + r1(p1[0] + nx * len + tx * len * 0.5 + 0) + ' ' + r1(p1[1] + ny * len + ty * len * 0.5 + len * 0.35);
        }
      }
      out += '<g class="frond" style="--d:' + r1(R() * -4) + 's">' +
        '<path d="' + leaf + '" ' + S(i % 2 ? 'leaf' : 'leaf2', 2.6) + '/>' +
        '<path d="M' + top[0] + ' ' + top[1] + ' Q' + r1(mid[0]) + ' ' + r1(mid[1]) + ' ' + r1(end[0]) + ' ' + r1(end[1]) + '" ' + S('leaf2', 1.6) + '/></g>';
    }
    out += '<circle cx="' + (top[0] - 4) + '" cy="' + (top[1] + 6) + '" r="5" ' + F('trunk2') + '/>' +
      '<circle cx="' + (top[0] + 4) + '" cy="' + (top[1] + 7) + '" r="5" ' + F('trunk') + '/>' +
      '<circle cx="' + (top[0]) + '" cy="' + (top[1] + 11) + '" r="4.6" ' + F('trunk2') + '/></g>';
    return out;
  }

  /* ---------- beach mandap ---------- */
  function mandap(uid, still) {
    var anim = function (a, b, dur) {
      return still ? '' : '<animate attributeName="d" dur="' + dur + 's" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" values="' + a + ';' + b + ';' + a + '"/>';
    };
    var dL1 = 'M200 404 C232 430 240 470 212 520 C232 548 238 578 232 608 L216 608 C214 572 207 546 204 520 C194 470 194 432 200 404Z';
    var dL2 = 'M200 404 C222 432 228 472 210 520 C224 550 228 580 222 608 L208 608 C208 572 204 546 202 520 C192 470 192 432 200 404Z';
    var dR1 = 'M370 404 C338 430 330 470 358 520 C338 548 332 578 338 608 L354 608 C356 572 363 546 366 520 C376 470 376 432 370 404Z';
    var dR2 = 'M370 404 C346 432 340 472 360 520 C346 550 342 580 348 608 L362 608 C362 572 366 546 368 520 C378 470 378 432 370 404Z';
    var dB1 = 'M232 400 C252 420 262 450 246 500 C262 530 260 560 256 590 L246 590 C244 560 238 530 238 500 C232 450 228 420 232 400Z';
    var dB2 = 'M232 400 C246 422 254 452 242 500 C254 530 252 560 250 590 L240 590 C240 560 236 530 236 500 C230 450 228 420 232 400Z';
    var dC1 = 'M338 400 C318 420 308 450 324 500 C308 530 310 560 314 590 L324 590 C326 560 332 530 332 500 C338 450 342 420 338 400Z';
    var dC2 = 'M338 400 C324 422 316 452 328 500 C316 530 318 560 320 590 L330 590 C330 560 334 530 334 500 C340 450 342 420 338 400Z';
    var bamboo = function (x, y1, y2, w, shade) {
      var nodes = '';
      for (var y = y1 + 26; y < y2 - 6; y += 30) nodes += '<line x1="' + (x - w / 2) + '" x2="' + (x + w / 2) + '" y1="' + y + '" y2="' + y + '" ' + S('trunk2', 1.2, 0.8) + '/>';
      return '<rect x="' + (x - w / 2) + '" y="' + y1 + '" width="' + w + '" height="' + (y2 - y1) + '" rx="2" ' + F(shade) + '/>' + nodes;
    };
    var out = '<g class="mandap">';
    // rug + petals
    out += '<path d="M168 616 L398 616 L376 594 L196 594Z" ' + F('blush', 0.9) + '/>' +
      '<path d="M178 612 L388 612 L370 597 L202 597Z" ' + S('gold', 1.2, 0.8, ';stroke-dasharray:3 3') + '/>';
    // back posts + back drapes
    out += bamboo(234, 398, 596, 5, 'bamboo2') + bamboo(336, 398, 596, 5, 'bamboo2');
    out += '<path d="' + dB1 + '" style="fill:#fff;opacity:.7">' + anim(dB1, dB2, 6.4) + '</path>';
    out += '<path d="' + dC1 + '" style="fill:#fff;opacity:.7">' + anim(dC1, dC2, 5.8) + '</path>';
    // havan kund with flame
    out += '<g><rect x="272" y="580" width="26" height="14" rx="2" ' + F('accent2') + '/><rect x="268" y="576" width="34" height="5" rx="1" ' + F('gold') + '/>' +
      '<path class="flame" d="M285 576 C278 566 284 560 285 552 C288 560 294 566 285 576Z" ' + F('flA') + '/>' +
      '<path class="flame f2" d="M285 576 C282 570 285 566 285 562 C287 566 289 570 285 576Z" style="fill:#fff6d0"/></g>';
    // canopy
    out += '<path d="M192 406 Q284 330 378 406 Q284 392 192 406Z" style="fill:#fff;opacity:.95"/>' +
      '<path d="M192 406 Q284 330 378 406" ' + S('blush', 1.2) + '/>' +
      '<path d="M226 398 Q284 350 344 398" ' + S('blush', 0.8, 0.7) + '/>';
    // valance scallops
    var val = 'M196 406';
    for (var x = 196; x < 374; x += 12) val += ' Q' + (x + 6) + ' 420 ' + (x + 12) + ' 406';
    out += '<path d="' + val + 'Z" style="fill:#fff;opacity:.95"/><path d="' + val + '" ' + S('accent', 1, 0.7) + '/>';
    out += '<circle cx="285" cy="352" r="4.5" ' + F('gold') + '/><path d="M285 348 V338" ' + S('gold', 1.6) + '/>';
    // front posts
    out += bamboo(203, 404, 612, 7, 'bamboo') + bamboo(367, 404, 612, 7, 'bamboo');
    // front drapes (ripple in the breeze)
    out += '<path d="' + dL1 + '" style="fill:#fff;opacity:.9;stroke:var(--blush);stroke-width:.8">' + anim(dL1, dL2, 5.2) + '</path>';
    out += '<path d="' + dR1 + '" style="fill:#fff;opacity:.9;stroke:var(--blush);stroke-width:.8">' + anim(dR1, dR2, 4.7) + '</path>';
    out += '<circle cx="209" cy="521" r="3.4" ' + F('gold') + '/><circle cx="361" cy="521" r="3.4" ' + F('gold') + '/>';
    // garlands: swag across the front + hanging strands
    out += garlandArc(swag(206, 414, 364, 414, 26, 22), 5);
    [240, 262, 308, 330].forEach(function (x, i) {
      var len = i % 3 === 0 ? 4 : 6;
      for (var k = 0; k < len; k++) out += marigold(x, 432 + k * 7 + (i % 2) * 6, 3);
      out += orchid(x, 436 + len * 7 + (i % 2) * 6, 0.7, i * 40);
    });
    out += orchid(204, 410, 1, 10) + orchid(214, 418, 0.8, 50) + orchid(366, 410, 1, 30) + orchid(356, 418, 0.8, 70);
    return out + '</g>';
  }

  /* ---------- HERO ---------- */
  function hero() {
    var sea = '<g class="layer" data-depth="0.08">' +
      '<rect x="0" y="428" width="400" height="200" ' + F('sea3') + '/>' +
      '<rect x="0" y="428" width="400" height="5" style="fill:#fff;opacity:.35"/>' +
      '<g class="wave w1"><path d="' + wavePath(446, 3, 80, 640) + '" ' + F('sea3') + '/><path d="' + wavePath(446, 3, 80) + '" ' + S('sea1', 1.1, 0.45) + '/></g>' +
      '<g class="wave w2"><path d="' + wavePath(482, 5, 120, 640) + '" ' + F('sea2') + '/><path d="' + wavePath(482, 5, 120) + '" ' + S('sea1', 1.4, 0.6) + '/></g>' +
      '<g class="wave w3"><path d="' + wavePath(522, 7, 160, 640) + '" ' + F('sea1', 0.95) + '/><path d="' + wavePath(522, 7, 160) + '" style="fill:none;stroke:#fff;stroke-width:2.4;opacity:.85"/></g>' +
      // sail on the horizon
      '<g class="sail" transform="translate(120 432)"><path d="M0 0 L0 -26 L14 0Z" style="fill:#fff;opacity:.9"/><path d="M-2 -3 L-12 0 L18 0 L14 3 L-6 3Z" ' + F('sea3') + '/></g>' +
      '</g>';
    var sand = '<g class="layer" data-depth="0.02">' +
      '<path d="M0 560 C90 548 180 566 270 552 C330 544 370 550 400 548 L400 760 L0 760Z" ' + F('sand2') + '/>' +
      '<path d="M0 572 C100 562 190 580 290 566 C340 560 380 566 400 562 L400 760 L0 760Z" ' + F('sand') + ' filter="url(#wc)"/>' +
      '<g class="shore-foam"><path d="' + foamPath(560, 400, 11, 574) + '" style="fill:#fff;opacity:.85"/>' + foamDots(566, 400, 4, 40) + '</g>' +
      '</g>';
    var props = '<g class="layer" data-depth="-0.04">' +
      mandap('h') +
      lantern(160, 650, 1.05) + lantern(132, 676, 0.85, 'l2') + lantern(380, 668, 0.95, 'l3') + lantern(340, 700, 0.75, 'l2') +
      shell(70, 712, 1.1, -14) + starfish(250, 690, 0.9, 12) + shell(300, 735, 0.9, 20, 'sand2') + shell(205, 726, 0.8, -30) + starfish(30, 745, 0.7, -20) +
      '</g>';
    var palmG = '<g class="layer" data-depth="-0.08"><g class="palm" style="transform-origin:28px 760px">' +
      palm([30, 770], [84, 392], [8, 640], [56, 460], { len: 104, leaf: 18, w: 11, seed: 3 }) + '</g></g>';
    var gulls = '<g class="gulls">' + [[250, 352, 0.9], [292, 376, 0.7], [170, 392, 0.55]].map(function (g, i) {
      return '<g class="gull" style="--gd:' + (i * -7) + 's"><g transform="translate(' + g[0] + ' ' + g[1] + ') scale(' + g[2] + ')"><path class="wing" d="M-10 0 Q-5 -6 0 0 Q5 -6 10 0" ' + S('ink', 1.6, 0.7) + '/></g></g>';
    }).join('') + '</g>';
    return '<svg class="hero-art" viewBox="0 0 400 760" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' + gulls + sea + sand + props + palmG + '</svg>';
  }

  /* foam lace for the hero's lower edge, washing up and back */
  function edgeFoam() {
    return '<svg viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">' +
      '<path class="wash wash-a" d="' + foamPath(24, 400, 21, 60) + '" style="fill:#fff;opacity:.55"/>' +
      '<path class="wash wash-b" d="' + foamPath(32, 400, 5, 60) + '" style="fill:#fff;opacity:.9"/>' +
      '<path d="M0 46 L400 46 L400 60 L0 60Z" ' + F('paper') + '/></svg>';
  }

  /* section edge: a wave of the next section's colour with a line of foam */
  var edgeShapes = [
    { a: 10, p: 100 }, { a: 7, p: 70 }, { a: 14, p: 160 }, { a: 5, p: 50 }
  ];
  function waveEdge(fill, shapeIndex, flip) {
    var s = edgeShapes[shapeIndex % edgeShapes.length];
    return '<svg class="wave-edge' + (flip ? ' flip' : '') + '" viewBox="0 0 400 48" preserveAspectRatio="none" aria-hidden="true">' +
      '<g class="edge-drift" style="--p:' + s.p + 'px">' +
      '<path d="' + wavePath(20, s.a, s.p, 48, -s.p, 400 + s.p * 2) + '" style="fill:#fff;opacity:.55" transform="translate(0 -6)"/>' +
      '<path d="' + wavePath(24, s.a, s.p, 48, -s.p, 400 + s.p * 2) + '" ' + F(fill) + '/>' +
      '<path d="' + wavePath(24, s.a, s.p, null, -s.p, 400 + s.p * 2) + '" style="fill:none;stroke:#fff;stroke-width:3;opacity:.95;stroke-dasharray:14 4 3 4"/>' +
      '</g></svg>';
  }

  /* ---------- event vignettes (240 x 280 frame, arch window 30..210, top 30) ---------- */
  function grad(id, stops) {
    return '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1">' + stops.map(function (s) {
      return '<stop offset="' + s[0] + '" style="stop-color:var(--' + s[1] + ')"/>';
    }).join('') + '</linearGradient>';
  }
  function vigSea(y, deep, light) {
    return '<rect x="0" y="' + y + '" width="240" height="60" ' + F(deep) + '/>' +
      '<path d="' + wavePath(y + 14, 3, 40, y + 60, -40, 300) + '" ' + F(light, 0.8) + '/>' +
      '<path d="' + wavePath(y + 14, 3, 40, null, -40, 300) + '" style="fill:none;stroke:#fff;stroke-width:1.2;opacity:.7"/>';
  }
  var vignettes = {
    cabana: function (u) {
      var stripes = '';
      for (var i = 0; i < 6; i++) stripes += '<path d="M' + (58 + i * 18) + ' 150 L110 112 L' + (67 + i * 18) + ' 150Z" ' + F(i % 2 ? 'accent' : 'paper') + '/>';
      return '<defs>' + grad(u + 'sk', [[0, 'sea1'], [1, 'paper']]) + '</defs>' +
        '<rect width="240" height="280" fill="url(#' + u + 'sk)"/>' +
        '<circle cx="168" cy="72" r="16" style="fill:#fff6d6;opacity:.9"/>' +
        vigSea(140, 'sea2', 'sea1') +
        '<path d="M0 176 C60 168 140 184 240 172 L240 280 L0 280Z" ' + F('sand') + ' filter="url(#wc)"/>' +
        '<path d="M0 176 C60 168 140 184 240 172" style="fill:none;stroke:#fff;stroke-width:3;opacity:.8"/>' +
        '<ellipse cx="112" cy="250" rx="80" ry="10" ' + F('sand2', 0.6) + '/>' +
        '<rect x="62" y="148" width="4" height="98" ' + F('bamboo') + '/><rect x="156" y="148" width="4" height="98" ' + F('bamboo') + '/>' +
        stripes + '<path d="M56 150 L110 110 L164 150" ' + S('accent2', 1.4) + '/>' +
        '<path d="M64 152 C80 176 76 210 70 236 L62 236Z" style="fill:#fff;opacity:.85"/>' +
        '<path d="M158 152 C142 176 146 210 152 236 L160 236Z" style="fill:#fff;opacity:.85"/>' +
        '<rect x="80" y="222" width="62" height="12" rx="5" ' + F('blush') + '/><rect x="84" y="210" width="16" height="14" rx="5" ' + F('sea1') + '/><rect x="120" y="210" width="16" height="14" rx="5" ' + F('flA') + '/>' +
        '<g transform="translate(110 190)"><path d="M-5 26 L0 6 L5 26Z" ' + F('leaf2') + '/><path d="M0 6 L0 -2" ' + S('leaf2', 1) + '/></g>' +
        palm([214, 290], [176, 84], [206, 200], [196, 120], { len: 70, leaf: 12, w: 6, seed: 9, angles: [-160, -120, -80, -40, 0, 30, 150, 190] }) +
        shell(48, 262, 0.8, -10) + starfish(190, 262, 0.7, 15);
    },
    marigolds: function (u) {
      var heap = '', R = rng(31);
      for (var i = 0; i < 46; i++) {
        var a = R() * Math.PI, rr = R();
        heap += marigold(72 + Math.cos(a) * 44 * rr, 246 - Math.sin(a) * 30 * rr, 4 + R() * 2);
      }
      var petals = '';
      for (var k = 0; k < 18; k++) petals += '<circle cx="' + r1(20 + R() * 200) + '" cy="' + r1(200 + R() * 70) + '" r="1.6" ' + F(k % 3 ? 'flA' : 'accent') + '/>';
      return '<defs>' + grad(u + 'sk', [[0, 'sky-am'], [1, 'paper']]) + '</defs>' +
        '<rect width="240" height="280" fill="url(#' + u + 'sk)"/>' +
        '<circle cx="80" cy="96" r="20" ' + F('flA', 0.55) + '/>' +
        vigSea(136, 'sea2', 'sea1') +
        '<path d="M0 182 C80 174 160 188 240 176 L240 280 L0 280Z" ' + F('sand') + ' filter="url(#wc)"/>' +
        '<path d="' + foamPath(182, 240, 8, 190) + '" style="fill:#fff;opacity:.8"/>' +
        '<rect x="38" y="64" width="4" height="120" ' + F('bamboo') + '/><rect x="198" y="64" width="4" height="120" ' + F('bamboo') + '/>' +
        garlandArc(swag(40, 70, 200, 70, 22, 18), 6) + garlandArc(swag(40, 92, 200, 92, 16, 16), 6) +
        heap +
        '<ellipse cx="160" cy="246" rx="34" ry="10" ' + F('gold') + '/><ellipse cx="160" cy="242" rx="30" ry="7" ' + F('flA') + '/>' +
        '<path d="M126 246 Q160 274 194 246" ' + F('gold') + '/>' + marigold(150, 241, 3) + marigold(166, 243, 3) + orchid(176, 240, 0.6, 20) + petals;
    },
    bonfire: function (u) {
      var lights = '', pts = swag(10, 54, 230, 54, 30, 16);
      pts.forEach(function (p, i) { lights += '<circle class="twinkle" style="--t:' + (i * 0.37 % 2).toFixed(2) + 's;fill:var(--flA)" cx="' + r1(p[0]) + '" cy="' + r1(p[1] + 4) + '" r="2.6"/>'; });
      var pts2 = swag(10, 96, 230, 96, 20, 14), l2 = '';
      pts2.forEach(function (p, i) { l2 += '<circle class="twinkle" style="--t:' + (i * 0.53 % 2).toFixed(2) + 's;fill:#fff3c4" cx="' + r1(p[0]) + '" cy="' + r1(p[1] + 4) + '" r="2"/>'; });
      return '<defs>' + grad(u + 'sk', [[0, 'dusk1'], [0.6, 'dusk2'], [1, 'accent']]) + '<radialGradient id="' + u + 'fg"><stop offset="0" style="stop-color:var(--flA);stop-opacity:.75"/><stop offset="1" style="stop-color:var(--flA);stop-opacity:0"/></radialGradient></defs>' +
        '<rect width="240" height="280" fill="url(#' + u + 'sk)"/>' +
        vigSea(146, 'sea3', 'sea2') +
        '<path d="M0 190 C80 182 160 196 240 186 L240 280 L0 280Z" ' + F('sand2') + ' filter="url(#wc)"/>' +
        '<path d="M10 54 Q120 116 230 54 M10 96 Q120 136 230 96" ' + S('ink', 0.8, 0.5) + '/>' + lights + l2 +
        '<circle cx="120" cy="236" r="70" fill="url(#' + u + 'fg)"/>' +
        '<g class="fire"><path d="M96 252 L146 240 M96 240 L146 252" ' + S('trunk2', 7) + '/>' +
        '<path class="flame" d="M120 244 C96 230 108 206 112 186 C118 200 126 196 124 176 C138 196 146 222 120 244Z" ' + F('accent') + '/>' +
        '<path class="flame f2" d="M120 244 C106 232 112 214 118 202 C122 212 130 214 128 200 C136 218 134 236 120 244Z" ' + F('flA') + '/>' +
        '<path class="flame f3" d="M120 244 C114 236 116 226 120 218 C124 226 128 236 120 244Z" style="fill:#fff6d0"/></g>' +
        '<g transform="translate(184 238)"><rect x="-14" y="-12" width="28" height="22" rx="10" ' + F('accent2') + '/><path d="M-12 -6 L12 6 M-12 6 L12 -6" ' + S('gold', 1) + '/></g>' +
        '<circle cx="40" cy="250" r="3" style="fill:#fff3c4;opacity:.8"/>';
    },
    mandap: function (u) {
      return '<defs>' + grad(u + 'sk', [[0, 'dusk2'], [0.55, 'accent'], [1, 'flA']]) + '</defs>' +
        '<rect width="240" height="280" fill="url(#' + u + 'sk)"/>' +
        '<circle cx="120" cy="150" r="30" style="fill:#fff2c9;opacity:.92"/>' +
        '<rect x="0" y="150" width="240" height="60" ' + F('sea3') + '/>' +
        '<path d="M104 160 H136 M98 170 H142 M108 180 H132 M112 190 H128" style="stroke:#fff2c9;stroke-width:2.4;opacity:.75;stroke-linecap:round"/>' +
        '<path d="' + wavePath(176, 2.5, 40, null, -40, 300) + '" style="fill:none;stroke:#fff;stroke-width:1;opacity:.5"/>' +
        '<path d="M0 204 C80 196 160 212 240 200 L240 280 L0 280Z" ' + F('sand') + ' filter="url(#wc)"/>' +
        '<path d="' + foamPath(204, 240, 3, 212) + '" style="fill:#fff;opacity:.75"/>' +
        '<g transform="translate(-62 -116) scale(.64)">' + mandap(u, false) + '</g>' +
        lantern(36, 262, 0.6) + lantern(206, 266, 0.6, 'l2');
    },
    lanterns: function (u) {
      var stars = '', R = rng(77);
      for (var i = 0; i < 26; i++) stars += '<circle class="twinkle" style="--t:' + r1(R() * 3) + 's;fill:#fff" cx="' + r1(R() * 240) + '" cy="' + r1(30 + R() * 100) + '" r="' + r1(0.5 + R()) + '"/>';
      var ls = '';
      [[48, 262, 0.95], [102, 252, 0.8], [150, 268, 1], [196, 250, 0.75], [76, 226, 0.55], [130, 222, 0.5], [176, 226, 0.55], [40, 214, 0.45], [208, 216, 0.45]]
        .forEach(function (l, i) { ls += lantern(l[0], l[1], l[2], i % 2 ? 'l2' : ''); });
      return '<defs>' + grad(u + 'sk', [[0, 'night1'], [1, 'night2']]) + '</defs>' +
        '<rect width="240" height="280" fill="url(#' + u + 'sk)"/>' + stars +
        '<circle cx="170" cy="66" r="15" style="fill:#fdf6df"/><circle cx="176" cy="62" r="13" fill="url(#' + u + 'sk)" opacity=".0"/>' +
        '<rect x="0" y="150" width="240" height="50" ' + F('sea3') + '/>' +
        '<path d="M160 156 H180 M156 166 H184 M162 176 H178" style="stroke:#fdf6df;stroke-width:2;opacity:.6;stroke-linecap:round"/>' +
        '<path d="M0 194 C80 186 160 200 240 190 L240 280 L0 280Z" ' + F('sand2') + '/>' +
        '<path d="M0 194 C80 186 160 200 240 190" style="fill:none;stroke:#fff;stroke-width:2;opacity:.35"/>' + ls;
    }
  };
  var vignetteNames = { cabana: 'Palm-shade cabana', marigolds: 'Marigolds by the shore', bonfire: 'Bonfire & lights', mandap: 'Mandap at sunset', lanterns: 'Lantern-lit beach' };

  var ARCH_IN = 'M30 280 V120 A90 90 0 0 1 210 120 V280Z';
  function shellFrame(u) {
    var out = '<path d="M14 280 V120 A106 106 0 0 1 226 120 V280 H210 V120 A90 90 0 0 0 30 120 V280Z" ' + F('blush') + '/>';
    for (var a = 180; a >= 0; a -= 12) {
      var rad = a * Math.PI / 180;
      var ix = 120 + Math.cos(rad) * 90, iy = 120 - Math.sin(rad) * 90;
      var ox = 120 + Math.cos(rad) * 112, oy = 120 - Math.sin(rad) * 112;
      out += '<circle cx="' + r1(ox) + '" cy="' + r1(oy) + '" r="9" ' + F('blush') + '/>' +
        '<line x1="' + r1(ix) + '" y1="' + r1(iy) + '" x2="' + r1(ox) + '" y2="' + r1(oy) + '" ' + S('sand2', 1.2, 0.8) + '/>';
    }
    out += '<path d="M14 280 V120 M226 120 V280" ' + S('sand2', 1) + '/>';
    out += '<path d="M30 280 V120 A90 90 0 0 1 210 120 V280" ' + S('gold', 1.6) + '/>';
    var pts = [];
    for (var b = 172; b >= 8; b -= 8) { var rr = b * Math.PI / 180; pts.push([120 + Math.cos(rr) * 98, 120 - Math.sin(rr) * 98]); }
    out += garlandArc(pts, 4);
    out += shell(120, 14, 1.3, 0) + frangipani(28, 124, 0.9, 10) + frangipani(212, 124, 0.9, 40) + orchid(22, 140, 1, 0) + orchid(218, 140, 1, 30);
    return out;
  }
  function bambooFrame(u) {
    var out = '';
    var post = function (x) {
      var o = '<rect x="' + (x - 7) + '" y="60" width="14" height="222" rx="3" ' + F('bamboo') + '/>';
      for (var y = 90; y < 280; y += 34) o += '<path d="M' + (x - 7) + ' ' + y + ' H' + (x + 7) + '" ' + S('trunk2', 1.6) + '/>';
      return o;
    };
    out += post(22) + post(218);
    out += '<path d="M14 110 Q120 -2 226 110" ' + S('bamboo', 14) + '/>';
    out += '<path d="M14 110 Q120 -2 226 110" ' + S('bamboo2', 2, 0.8, ';stroke-dasharray:2 30') + '/>';
    out += '<path d="M30 280 V120 A90 90 0 0 1 210 120 V280" ' + S('paper', 3) + '/>';
    out += garlandArc(swag(28, 100, 212, 100, 28, 20), 5);
    [[48, 112], [192, 112]].forEach(function (p) { for (var k = 0; k < 5; k++) out += marigold(p[0], p[1] + k * 8, 3.4); out += orchid(p[0], p[1] + 44, 0.8, 10); });
    out += orchid(22, 104, 1.2, 0) + orchid(218, 104, 1.2, 30) + frangipani(120, 46, 1, 0) + frangipani(104, 52, 0.7, 30) + frangipani(136, 52, 0.7, 60);
    return out;
  }
  function eventArch(art, uid, photo, frame) {
    var inner = photo
      ? '<image href="' + photo + '" x="30" y="30" width="180" height="250" preserveAspectRatio="xMidYMid slice"/>'
      : (vignettes[art] || vignettes.mandap)(uid);
    return '<svg class="arch-art" viewBox="0 0 240 280" aria-hidden="true"><defs><clipPath id="' + uid + 'clip"><path d="' + ARCH_IN + '"/></clipPath></defs>' +
      '<g clip-path="url(#' + uid + 'clip)">' + inner + '</g>' +
      (frame === 'bamboo' ? bambooFrame(uid) : shellFrame(uid)) + '</svg>';
  }

  /* ---------- route: footprints + porthole ---------- */
  function footprints(w, h) {
    var foot = function (x, y, ang, left, i) {
      var m = left ? -1 : 1;
      return '<g class="fp" style="--i:' + i + '" transform="translate(' + r1(x) + ' ' + r1(y) + ') rotate(' + r1(ang) + ') scale(' + m + ' 1)">' +
        '<path d="M0 -7 C4 -7 5 -2 4 3 C3 8 1 10 -1 10 C-4 10 -4 6 -3 2 C-2 -2 -4 -7 0 -7Z" ' + F('sand2') + '/>' +
        '<circle cx="-2.4" cy="-10" r="1.6" ' + F('sand2') + '/><circle cx="0.4" cy="-11" r="1.3" ' + F('sand2') + '/><circle cx="2.8" cy="-10.2" r="1.2" ' + F('sand2') + '/><circle cx="4.4" cy="-8.4" r="1" ' + F('sand2') + '/></g>';
    };
    var out = '', p0 = [-10, h * 0.15], c1 = [w * 0.3, h * 0.05], c2 = [w * 0.35, h * 0.95], p3 = [w * 0.66, h * 0.78];
    var n = 16;
    for (var i = 0; i < n; i++) {
      var t = i / (n - 1), p = bez(p0, c1, c2, p3, t), q = bez(p0, c1, c2, p3, Math.min(1, t + 0.01));
      var ang = Math.atan2(q[1] - p[1], q[0] - p[0]) * 180 / Math.PI + 90;
      var nx = Math.cos((ang) * Math.PI / 180) * 6 * (i % 2 ? 1 : -1), ny = Math.sin(ang * Math.PI / 180) * 6 * (i % 2 ? 1 : -1);
      out += foot(p[0] + nx, p[1] + ny, ang, i % 2 === 0, i);
    }
    return '<svg class="footprints" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' + out + '</svg>';
  }
  function porthole(photo) {
    var bolts = '';
    for (var i = 0; i < 8; i++) {
      var a = i * 45 * Math.PI / 180;
      bolts += '<circle cx="' + r1(110 + Math.cos(a) * 92) + '" cy="' + r1(110 + Math.sin(a) * 92) + '" r="3.4" style="fill:var(--gold-deep)"/><circle cx="' + r1(109 + Math.cos(a) * 92) + '" cy="' + r1(109 + Math.sin(a) * 92) + '" r="1.3" style="fill:#fff6d6;opacity:.8"/>';
    }
    var view = photo
      ? '<image href="' + photo + '" x="26" y="26" width="168" height="168" preserveAspectRatio="xMidYMid slice"/>'
      : '<rect x="20" y="20" width="180" height="180" style="fill:var(--sky-am)"/><circle cx="150" cy="82" r="13" style="fill:#fff6d6"/>' +
        '<rect x="20" y="118" width="180" height="90" style="fill:var(--sea2)"/>' +
        '<path d="' + wavePath(132, 2.5, 30, 210, 0, 240) + '" style="fill:var(--sea1);opacity:.8"/>' +
        '<path d="M0 160 C60 150 140 166 220 154 L220 220 L0 220Z" style="fill:var(--sand)"/>' +
        '<g transform="translate(78 118)"><path d="M0 0 L0 -34 L20 0Z" style="fill:#fff"/><path d="M-2 -2 L-18 0 L22 0 L16 5 L-10 5Z" style="fill:var(--sea3)"/></g>' +
        palm([200, 200], [168, 100], [196, 160], [186, 120], { len: 40, leaf: 8, w: 4, seed: 4, angles: [-170, -130, -90, -50, -10, 160] });
    return '<svg viewBox="0 0 220 220" aria-hidden="true"><defs>' +
      '<clipPath id="phc"><circle cx="110" cy="110" r="84"/></clipPath>' +
      '<linearGradient id="brass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:#fff0c2"/><stop offset=".35" style="stop-color:var(--gold)"/><stop offset=".7" style="stop-color:var(--gold-deep)"/><stop offset="1" style="stop-color:var(--gold)"/></linearGradient></defs>' +
      '<circle cx="110" cy="110" r="104" style="fill:none;stroke:#c9a26a;stroke-width:11"/>' +
      '<circle cx="110" cy="110" r="104" style="fill:none;stroke:#8d6a3a;stroke-width:11;stroke-dasharray:2.5 5;opacity:.8"/>' +
      '<circle cx="110" cy="110" r="104" style="fill:none;stroke:#f3dfb3;stroke-width:2;stroke-dasharray:3 4.5;stroke-dashoffset:3;opacity:.8"/>' +
      '<g clip-path="url(#phc)">' + view + '</g>' +
      '<circle cx="110" cy="110" r="93" style="fill:none;stroke:url(#brass);stroke-width:18"/>' + bolts +
      '<path d="M50 80 A66 66 0 0 1 98 40" style="fill:none;stroke:#fff;stroke-width:7;opacity:.35;stroke-linecap:round"/></svg>';
  }

  /* ---------- couple: oval frame with shells and frangipani ---------- */
  function coupleFrame(photo) {
    var ring = '', n = 30;
    for (var i = 0; i < n; i++) {
      var a = i / n * Math.PI * 2 - Math.PI / 2, x = 150 + Math.cos(a) * 118, y = 180 + Math.sin(a) * 150, rot = a * 180 / Math.PI + 90;
      if (i % 3 === 0) ring += frangipani(x, y, 1.55, rot);
      else if (i % 3 === 1) ring += shell(x, y, 1.35, rot, i % 2 ? 'blush' : 'sand');
      else ring += '<ellipse cx="' + r1(x) + '" cy="' + r1(y) + '" rx="5" ry="12" transform="rotate(' + r1(rot + 50) + ' ' + r1(x) + ' ' + r1(y) + ')" ' + F('leaf') + '/>';
    }
    var view = photo
      ? '<image href="' + photo + '" x="40" y="40" width="220" height="280" preserveAspectRatio="xMidYMid slice"/>'
      : '<rect x="30" y="30" width="240" height="300" style="fill:var(--sky-gold)"/><circle cx="150" cy="150" r="34" style="fill:#fff1cf;opacity:.95"/>' +
        '<rect x="30" y="160" width="240" height="40" style="fill:var(--sea2)"/>' +
        '<path d="M126 170 H174 M134 180 H166 M140 190 H160" style="stroke:#fff1cf;stroke-width:2.4;opacity:.75;stroke-linecap:round"/>' +
        '<path d="M30 200 C100 190 200 210 270 196 L270 330 L30 330Z" style="fill:var(--sand)"/>' +
        '<path d="' + foamPath(200, 300, 12, 208) + '" style="fill:#fff;opacity:.8"/>' +
        '<path d="M150 292 C120 266 112 248 128 240 C140 234 148 244 150 252 C152 244 160 234 172 240 C188 248 180 266 150 292Z" style="fill:none;stroke:var(--sand2);stroke-width:3.2;stroke-linecap:round"/>' +
        '<text x="150" y="232" text-anchor="middle" style="font:400 15px var(--script);fill:var(--sand2)">&amp;</text>';
    return '<svg viewBox="-10 -10 320 380" aria-hidden="true"><defs><clipPath id="cfc"><ellipse cx="150" cy="180" rx="108" ry="140"/></clipPath></defs>' +
      '<ellipse cx="150" cy="180" rx="114" ry="146" style="fill:var(--paper)"/>' +
      '<g clip-path="url(#cfc)">' + view + '</g>' +
      '<ellipse cx="150" cy="180" rx="108" ry="140" ' + S('gold', 2) + '/>' + ring + '</svg>';
  }

  /* ---------- RSVP: message in a bottle ---------- */
  function bottle() {
    return '<svg viewBox="0 0 320 150" aria-hidden="true">' +
      '<path d="M6 150 C18 124 70 108 165 106 C250 106 300 122 314 150Z" ' + F('sand') + ' filter="url(#wc)"/>' +
      '<path d="M14 140 C40 118 90 110 165 108 C240 108 286 120 304 138" style="fill:none;stroke:#fff;stroke-width:2.6;opacity:.75;stroke-dasharray:18 5 4 5"/>' +
      '<ellipse cx="150" cy="122" rx="110" ry="8" ' + F('sand2', 0.6) + '/>' +
      '<g transform="rotate(-8 160 90)">' +
      '<path d="M44 70 Q44 54 62 54 L196 54 Q214 54 226 66 L252 72 L252 98 L226 104 Q214 116 196 116 L62 116 Q44 116 44 100Z" style="fill:var(--sea1);opacity:.55;stroke:var(--sea3);stroke-width:1.6"/>' +
      '<g class="rolled-note"><rect x="80" y="70" width="110" height="30" rx="14" style="fill:#f6ecd6"/><path d="M80 85 H190" style="stroke:#d9c59e;stroke-width:1"/><path d="M134 70 V100" ' + S('accent', 2.4) + '/></g>' +
      '<path d="M60 62 Q120 58 190 62" style="fill:none;stroke:#fff;stroke-width:4;opacity:.6;stroke-linecap:round"/>' +
      '<g class="cork"><rect x="250" y="74" width="24" height="22" rx="3" style="fill:#b5834c"/><path d="M256 76 v18 M264 76 v18" style="stroke:#8d6237;stroke-width:1"/></g>' +
      '</g>' +
      shell(40, 132, 1, -20) + starfish(286, 134, 0.8, 18) + shell(250, 140, 0.7, 30, 'paper') + '</svg>';
  }

  /* ---------- things to know icons (gold line art) ---------- */
  var icons = {
    hashtag: '<path d="M15 8 L12 32 M27 8 L24 32 M8 15 H33 M7 25 H32"/>',
    weather: '<circle cx="20" cy="16" r="6"/><path d="M20 4 V6 M8 16 H10 M30 16 H32 M11.5 7.5 L13 9 M28.5 7.5 L27 9"/><path d="M5 27 Q10 23 15 27 T25 27 T35 27 M5 33 Q10 29 15 33 T25 33 T35 33"/>',
    stay: '<path d="M5 18 L20 6 L35 18"/><path d="M9 16 V33 H31 V16"/><path d="M17 33 V24 H23 V33"/><path d="M3 33 H37"/>',
    travel: '<circle cx="20" cy="20" r="14"/><path d="M20 4 V8 M20 32 V36 M4 20 H8 M32 20 H36"/><path d="M25 15 L18 18 L15 25 L22 22Z"/>',
    dress: '<path d="M14 6 C9 6 8 13 9 20 C10 28 11 34 15 34 C19 34 20 28 20 21 C20 13 19 6 14 6Z"/><path d="M10 17 Q14 12 19 17"/><path d="M27 8 C23 8 22 14 23 21 C24 29 25 34 29 34 C33 34 34 28 34 21 C34 14 31 8 27 8Z"/><path d="M24 18 Q28.5 13 33 18"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 40 40" aria-hidden="true" style="fill:none;stroke:var(--gold);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round">' + (icons[name] || '') + '</svg>';
  }

  /* ---------- night: fairy lights ---------- */
  function fairyLights() {
    var out = '', strands = [[-10, 6, 410, 10, 46, 24], [-10, 30, 410, 22, 34, 20], [-10, 2, 200, 4, 30, 10], [200, 4, 410, 0, 30, 10]];
    strands.forEach(function (s, k) {
      var pts = swag(s[0], s[1], s[2], s[3], s[4], s[5]);
      out += '<path d="M' + pts.map(function (p) { return r1(p[0]) + ' ' + r1(p[1]); }).join(' L') + '" style="fill:none;stroke:#1c2a44;stroke-width:1"/>';
      pts.forEach(function (p, i) {
        if (i === 0 || i === pts.length - 1) return;
        out += '<g class="bulb" style="--t:' + ((i * 0.41 + k * 0.7) % 3).toFixed(2) + 's"><circle cx="' + r1(p[0]) + '" cy="' + r1(p[1] + 5) + '" r="7" style="fill:#ffe7a3;opacity:.35" filter="url(#blur3)"/>' +
          '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1] + 5) + '" r="2.4" style="fill:#fff4cf"/></g>';
      });
    });
    return '<svg viewBox="0 0 400 90" preserveAspectRatio="none" aria-hidden="true">' + out + '</svg>';
  }

  /* ---------- countdown: hourglass + moonlit water ---------- */
  function hourglass() {
    return '<svg viewBox="0 0 120 200" aria-hidden="true"><defs>' +
      '<clipPath id="hgTop"><path d="M26 22 C26 60 56 88 59 98 L61 98 C64 88 94 60 94 22Z"/></clipPath>' +
      '<clipPath id="hgBot"><path d="M59 102 C56 112 26 140 26 178 L94 178 C94 140 64 112 61 102Z"/></clipPath></defs>' +
      '<path d="M26 22 C26 60 56 88 59 100 C56 112 26 140 26 178 L94 178 C94 140 64 112 61 100 C64 88 94 60 94 22Z" style="fill:#fff;opacity:.12;stroke:#e9eefc;stroke-width:1.4;stroke-opacity:.7"/>' +
      '<g clip-path="url(#hgTop)"><rect class="sand-top" x="20" y="42" width="80" height="60" style="fill:var(--sand)">' +
      '<animate attributeName="y" from="42" to="100" dur="90s" repeatCount="indefinite"/></rect></g>' +
      '<line class="stream" x1="60" y1="98" x2="60" y2="176" style="stroke:var(--sand);stroke-width:1.6;stroke-dasharray:2 3"><animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite"/></line>' +
      '<g clip-path="url(#hgBot)"><path d="M20 178 L60 150 L100 178Z" style="fill:var(--sand)"><animateTransform attributeName="transform" type="translate" from="0 26" to="0 0" dur="90s" repeatCount="indefinite"/></path></g>' +
      '<path d="M40 40 C42 58 52 74 56 82" style="fill:none;stroke:#fff;stroke-width:2;opacity:.35;stroke-linecap:round"/>' +
      '<rect x="14" y="10" width="92" height="12" rx="3" style="fill:var(--gold)"/><rect x="14" y="178" width="92" height="12" rx="3" style="fill:var(--gold)"/>' +
      '<rect x="18" y="22" width="5" height="156" style="fill:var(--gold-deep)"/><rect x="97" y="22" width="5" height="156" style="fill:var(--gold-deep)"/>' +
      shell(60, 8, 0.6, 0, 'blush') + '</svg>';
  }
  function moonWater() {
    var R = rng(19), shimmer = '';
    for (var i = 0; i < 14; i++) {
      var y = 26 + i * 8, w = 70 - i * 3.5 + R() * 20;
      shimmer += '<rect class="shimmer" style="--t:' + r1(R() * 3) + 's;fill:#f8f1d8" x="' + r1(200 - w / 2 + (R() - 0.5) * 20) + '" y="' + y + '" width="' + r1(w) + '" height="2" rx="1"/>';
    }
    return '<svg viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">' +
      '<rect x="0" y="16" width="400" height="140" style="fill:#0b2340"/>' +
      '<g class="wave w1"><path d="' + wavePath(24, 3, 70, 160) + '" style="fill:#12345a"/></g>' +
      '<g class="wave w2"><path d="' + wavePath(64, 4, 110, 160) + '" style="fill:#0e2b4c;opacity:.9"/><path d="' + wavePath(64, 4, 110) + '" style="fill:none;stroke:#cfe0ff;stroke-width:1;opacity:.25"/></g>' +
      shimmer +
      '<g class="wave w3"><path d="' + wavePath(116, 6, 150, 160) + '" style="fill:#0a1f38"/><path d="' + wavePath(116, 6, 150) + '" style="fill:none;stroke:#fff;stroke-width:1.6;opacity:.45"/></g></svg>';
  }

  function shellDivider() {
    return '<svg class="divider" viewBox="0 0 200 24" aria-hidden="true"><path d="M10 14 H76 M124 14 H190" ' + S('gold', 1) + '/>' +
      '<circle cx="70" cy="14" r="1.6" ' + F('gold') + '/><circle cx="130" cy="14" r="1.6" ' + F('gold') + '/>' +
      '<g transform="translate(100 18)"><path d="M0 1 L-13 -6 C-13 -20 13 -20 13 -6Z" ' + S('gold', 1.2) + '/>' +
      [-2, -1, 0, 1, 2].map(function (i) { var a = (-90 + i * 22) * Math.PI / 180; return '<path d="M0 0 L' + r1(Math.cos(a) * 14) + ' ' + r1(Math.sin(a) * 14) + '" ' + S('gold', 0.9) + '/>'; }).join('') +
      '<path d="M-4 1 H4 V4 H-4Z" ' + S('gold', 1) + '/></g></svg>';
  }

  function clouds() {
    var c = function (x, y, s, o) {
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" style="opacity:' + o + '" filter="url(#wcSoft)">' +
        '<ellipse cx="0" cy="0" rx="34" ry="12" fill="#fff"/><circle cx="-12" cy="-8" r="13" fill="#fff"/><circle cx="8" cy="-12" r="16" fill="#fff"/><circle cx="26" cy="-4" r="10" fill="#fff"/></g>';
    };
    return '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMin slice" aria-hidden="true">' +
      '<g class="cloud c1">' + c(60, 90, 1.1, 0.9) + '</g><g class="cloud c2">' + c(300, 50, 0.8, 0.8) + '</g>' +
      '<g class="cloud c3">' + c(230, 170, 0.6, 0.65) + '</g><g class="cloud c4">' + c(-40, 240, 0.9, 0.6) + '</g></svg>';
  }
  function stars() {
    var R = rng(101), out = '';
    for (var i = 0; i < 90; i++) {
      var big = R() > 0.88;
      out += '<circle class="' + (R() > 0.6 ? 'twinkle' : '') + '" style="--t:' + r1(R() * 4) + 's" cx="' + r1(R() * 400) + '" cy="' + r1(R() * 800) + '" r="' + (big ? 1.5 : r1(0.4 + R() * 0.7)) + '" fill="#fff"/>';
    }
    return '<svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + out + '</svg>';
  }

  window.BeachArt = {
    hero: hero, edgeFoam: edgeFoam, waveEdge: waveEdge, eventArch: eventArch, vignetteNames: vignetteNames,
    footprints: footprints, porthole: porthole, coupleFrame: coupleFrame, bottle: bottle, icon: icon,
    fairyLights: fairyLights, hourglass: hourglass, moonWater: moonWater, shellDivider: shellDivider,
    clouds: clouds, stars: stars
  };
})();
