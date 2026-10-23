// Temple Gold: built-in artwork for the courtyard behind the temple doors.
// Same rules as motifs.js: each function is the fallback for an element slot,
// and colours come from CSS variables.

(function (M) {
  "use strict";

  let uid = 0;
  const id = (name) => "tc-" + name + "-" + ++uid;
  const n = (v) => +v.toFixed(1);

  function brass(gid) {
    return '<linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="0">' +
      '<stop offset="0" style="stop-color:var(--gold-deep)"/><stop offset=".35" style="stop-color:var(--gold)"/>' +
      '<stop offset=".5" style="stop-color:var(--gold-light)"/><stop offset=".66" style="stop-color:var(--gold)"/>' +
      '<stop offset="1" style="stop-color:var(--gold-deep)"/></linearGradient>';
  }

  // ---- Carved stone pillar: a corbelled capital, then square carved blocks
  // and ringed necks repeating down a tall shaft (cropped to the screen).
  function pillar(mirror) {
    const g = id("pil"), H = 2600;
    let shapes = "", lines = "";
    // Capital: abacus slab and a pothigai bracket with a lotus-bud drop.
    shapes += '<rect x="0" y="0" width="100" height="34"/>';
    shapes += '<path d="M6 34H94V52Q94 70 74 74Q62 76 58 92Q54 108 50 112Q46 108 42 92Q38 76 26 74Q6 70 6 52Z"/>';
    lines += '<path d="M0 12H100M0 24H100M10 44H90M26 74Q50 80 74 74M50 92V112"/>';
    let y = 112;
    let k = 0;
    while (y < H) {
      // Neck: narrower ringed band.
      shapes += '<rect x="22" y="' + y + '" width="56" height="44"/>';
      lines += '<path d="M22 ' + (y + 10) + "H78M22 " + (y + 22) + "H78M22 " + (y + 34) + 'H78"/>';
      y += 44;
      // Block: full width with a recessed carved panel.
      shapes += '<rect x="12" y="' + y + '" width="76" height="150"/>';
      shapes += '<rect x="8" y="' + y + '" width="84" height="12"/><rect x="8" y="' + (y + 138) + '" width="84" height="12"/>';
      lines += '<rect x="20" y="' + (y + 20) + '" width="60" height="110"/><rect x="25" y="' + (y + 25) + '" width="50" height="100"/>';
      const cx = 50, cy = y + 75;
      if (k % 2 === 0) {
        for (let a = 0; a < 8; a++) {
          lines += '<ellipse cx="' + cx + '" cy="' + (cy - 12) + '" rx="5" ry="12" transform="rotate(' + a * 45 + " " + cx + " " + cy + ')"/>';
        }
        lines += '<circle cx="' + cx + '" cy="' + cy + '" r="5"/>';
      } else {
        lines += '<path d="M' + cx + " " + (cy - 38) + "L" + (cx + 20) + " " + cy + "L" + cx + " " + (cy + 38) + "L" + (cx - 20) + " " + cy + "Z" +
          "M" + cx + " " + (cy - 22) + "L" + (cx + 11) + " " + cy + "L" + cx + " " + (cy + 22) + "L" + (cx - 11) + " " + cy + 'Z"/>';
      }
      y += 150;
      k++;
    }
    return '<svg viewBox="0 0 100 ' + H + '" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="' + g + '" x1="' + (mirror ? 1 : 0) + '" y1="0" x2="' + (mirror ? 0 : 1) + '" y2="0">' +
      '<stop offset="0" style="stop-color:var(--stone-light)"/><stop offset=".45" style="stop-color:var(--sandal)"/><stop offset="1" style="stop-color:var(--sandal-deep)"/></linearGradient></defs>' +
      '<g fill="url(#' + g + ')">' + shapes + "</g>" +
      '<g class="p-lines">' + lines + "</g></svg>";
  }

  // ---- Hanging jasmine strand: paired buds along a thread, a few leaves and
  // pink buds, ending in a small cluster. Hangs from its top centre.
  function jasmineString(len) {
    if (len && len.dataset) len = +len.dataset.len;
    len = len || 300;
    let buds = "", leaves = "", pinks = "";
    let i = 0;
    for (let y = 4; y < len - 14; y += 7, i++) {
      const tilt = i % 2 ? 24 : -24;
      buds += '<ellipse cx="9.5" cy="' + y + '" rx="2.6" ry="4.4" transform="rotate(' + tilt + " 9.5 " + y + ')"/>' +
        '<ellipse cx="14.5" cy="' + (y + 2) + '" rx="2.6" ry="4.4" transform="rotate(' + -tilt + " 14.5 " + (y + 2) + ')"/>';
      if (i % 9 === 4) {
        leaves += '<path d="M12 ' + y + "Q2 " + (y + 4) + " -1 " + (y + 12) + "Q8 " + (y + 10) + " 12 " + y + 'Z"/>' +
          '<path d="M12 ' + (y + 2) + "Q22 " + (y + 6) + " 25 " + (y + 14) + "Q16 " + (y + 12) + " 12 " + (y + 2) + 'Z"/>';
      }
      if (i % 13 === 9) pinks += '<ellipse cx="12" cy="' + (y + 3) + '" rx="3.2" ry="4.6"/>';
    }
    const end = len - 12;
    buds += '<circle cx="12" cy="' + end + '" r="4.5"/><circle cx="8" cy="' + (end + 5) + '" r="3.4"/><circle cx="16" cy="' + (end + 5) + '" r="3.4"/>';
    pinks += '<ellipse cx="12" cy="' + (end + 8) + '" rx="3" ry="4.2"/>';
    return '<svg viewBox="0 0 24 ' + len + '" aria-hidden="true" focusable="false">' +
      '<path class="j-thread" d="M12 0V' + end + '"/>' +
      '<g class="j-leaf">' + leaves + "</g>" +
      '<g class="j-bud">' + buds + "</g>" +
      '<g class="j-pink">' + pinks + "</g></svg>";
  }

  // ---- Top garland: mango leaves and jasmine clusters along the top edge.
  function garland() {
    let leaves = "", buds = "";
    // Two overlapping rows of mango leaves, with jasmine clusters tucked in.
    for (let row = 0; row < 2; row++) {
      for (let i = 0; i < 58; i++) {
        const x = row * 8 + i * 17.5, y = 2 + row * 6 + (i % 3) * 2;
        const len = 26 + ((i * 7) % 4) * 4 + row * 4;
        const rot = (i % 2 ? 1 : -1) * (8 + ((i * 5) % 7) * 5) + (row ? 4 : -4);
        leaves += '<path class="' + ((i + row) % 3 === 1 ? "gl-light" : "") + '" transform="rotate(' + rot + " " + n(x) + " " + y + ')" d="M' + n(x) + " " + y +
          "C" + n(x - 7) + " " + n(y + len * 0.3) + " " + n(x - 5) + " " + n(y + len * 0.75) + " " + n(x) + " " + n(y + len) +
          "C" + n(x + 5) + " " + n(y + len * 0.75) + " " + n(x + 7) + " " + n(y + len * 0.3) + " " + n(x) + " " + y + 'Z"/>';
      }
    }
    for (let x = 6; x < 1000; x += 26) {
      const y = 12 + ((x * 3) % 7);
      buds += '<circle cx="' + x + '" cy="' + y + '" r="4.2"/><circle cx="' + (x + 6) + '" cy="' + (y + 5) + '" r="3.4"/><circle cx="' + (x - 5) + '" cy="' + (y + 6) + '" r="3.2"/><circle cx="' + (x + 1) + '" cy="' + (y + 10) + '" r="2.8"/>';
    }
    return '<svg viewBox="0 0 1000 50" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">' +
      '<rect class="gl-band" x="0" y="0" width="1000" height="6"/>' +
      '<g class="gl-leaves">' + leaves + "</g>" +
      '<g class="j-bud">' + buds + "</g></svg>";
  }

  // ---- Kuthuvilakku: tall standing brass lamp. Three wick spouts at
  // (22, 86), (60, 92) and (98, 86); the flames are drawn by the page.
  function kuthuvilakku() {
    const g = id("kv");
    let knobs = "";
    [130, 170, 215, 262].forEach((y, i) => {
      knobs += '<ellipse cx="60" cy="' + y + '" rx="' + (12 - i) + '" ry="6"/>';
    });
    return '<svg viewBox="0 0 120 400" aria-hidden="true" focusable="false"><defs>' + brass(g) + "</defs>" +
      '<g fill="url(#' + g + ')">' +
        // Finial: a pointed bud on a slim neck.
        '<path d="M60 0Q66 14 64 26Q70 34 64 44H56Q50 34 56 26Q54 14 60 0Z"/>' +
        '<rect x="56" y="44" width="8" height="30"/>' +
        // Top dish with spouts.
        '<path d="M8 82Q60 70 112 82Q104 100 60 102Q16 100 8 82Z"/>' +
        '<path d="M14 84L22 78L30 84Z M52 90L60 84L68 90Z M90 84L98 78L106 84Z"/>' +
        '<ellipse cx="60" cy="108" rx="10" ry="5"/>' +
        // Stem.
        '<path d="M55 108H65L64 330H56Z"/>' + knobs +
        // Base: stepped dome.
        '<path d="M48 318H72Q78 340 96 352Q112 360 112 372H8Q8 360 24 352Q42 340 48 318Z"/>' +
        '<rect x="4" y="372" width="112" height="10" rx="3"/>' +
        '<path d="M10 382H110L104 396H16Z"/>' +
      "</g>" +
      '<path class="kv-lines" d="M16 84Q60 94 104 84M26 360H94M60 112V318"/>' +
      "</svg>";
  }

  // ---- Urli: a wide brass bowl of water with floating flowers.
  function urli() {
    const g = id("ur"), w = id("urw");
    const flower = (x, y, r, cls, rot) => {
      let p = "";
      for (let a = 0; a < 5; a++) {
        p += '<ellipse cx="' + x + '" cy="' + n(y - r * 0.55) + '" rx="' + n(r * 0.38) + '" ry="' + n(r * 0.6) + '" transform="rotate(' + (a * 72 + rot) + " " + x + " " + y + ')"/>';
      }
      return '<g class="u-float ' + cls + '" style="animation-delay:-' + ((x * 7) % 5) + 's">' + p + '<circle class="u-eye" cx="' + x + '" cy="' + y + '" r="' + n(r * 0.18) + '"/></g>';
    };
    return '<svg viewBox="0 0 200 110" aria-hidden="true" focusable="false"><defs>' + brass(g) +
      '<linearGradient id="' + w + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--water-light)"/><stop offset="1" style="stop-color:var(--water)"/></linearGradient></defs>' +
      '<path fill="url(#' + g + ')" d="M14 40Q18 92 100 100Q182 92 186 40Z"/>' +
      '<ellipse cx="100" cy="40" rx="88" ry="14" fill="url(#' + g + ')"/>' +
      '<ellipse cx="100" cy="40" rx="80" ry="10" fill="url(#' + w + ')"/>' +
      '<path class="kv-lines" d="M26 62Q100 80 174 62"/>' +
      '<path fill="url(#' + g + ')" d="M8 40Q2 34 8 30Q14 30 16 38ZM192 40Q198 34 192 30Q186 30 184 38Z"/>' +
      flower(62, 38, 11, "u-white", 0) + flower(98, 34, 13, "u-pink", 20) + flower(132, 40, 11, "u-white", 40) + flower(80, 44, 9, "u-white", 10) + flower(116, 45, 9, "u-pink", 30) +
      "</svg>";
  }

  // ---- Poorna kumbham: brass pot with mango leaves and a coconut.
  // The leaves are a separate group so they can stir in the wind.
  function kalasam() {
    const g = id("kl");
    let leaves = "";
    [-62, -38, -14, 14, 38, 62].forEach((a, i) => {
      leaves += '<path class="' + (i % 2 ? "gl-light" : "") + '" transform="rotate(' + a + ' 60 70)" d="M60 70C52 52 54 30 60 14C66 30 68 52 60 70Z"/>';
    });
    return '<svg viewBox="0 0 120 170" aria-hidden="true" focusable="false"><defs>' + brass(g) + "</defs>" +
      '<g class="k-leaves gl-leaves">' + leaves + "</g>" +
      '<ellipse class="k-coconut" cx="60" cy="56" rx="17" ry="20"/>' +
      '<path class="k-coir" d="M52 40Q60 34 68 40"/>' +
      '<g fill="url(#' + g + ')">' +
        '<rect x="38" y="70" width="44" height="10" rx="3"/>' +
        '<path d="M44 80H76Q78 90 92 100Q108 112 104 134Q98 156 60 158Q22 156 16 134Q12 112 28 100Q42 90 44 80Z"/>' +
        '<path d="M38 156H82L88 168H32Z"/>' +
      "</g>" +
      '<path class="kv-lines" d="M22 118Q60 130 98 118M28 104Q60 112 92 104"/>' +
      '<g class="k-kumkum"><circle cx="60" cy="128" r="4"/><path d="M52 120H68" /></g>' +
      "</svg>";
  }

  // ---- Lotus on its pad.
  function lotus() {
    let back = "", front = "";
    [-60, -30, 0, 30, 60].forEach((a) => {
      back += '<path transform="rotate(' + a + ' 70 62)" d="M70 62C60 44 62 22 70 10C78 22 80 44 70 62Z"/>';
    });
    [-40, -14, 14, 40].forEach((a) => {
      front += '<path transform="rotate(' + a + ' 70 64)" d="M70 64C62 50 63 34 70 24C77 34 78 50 70 64Z"/>';
    });
    return '<svg viewBox="0 0 140 90" aria-hidden="true" focusable="false">' +
      '<ellipse class="lo-pad" cx="70" cy="74" rx="62" ry="13"/>' +
      '<g class="lo-back">' + back + "</g>" +
      '<g class="lo-front">' + front + "</g>" +
      '<path class="lo-lines" d="M70 60V28"/></svg>';
  }

  // ---- The view: a misty temple tank with palms, a mandapam and a gopuram.
  function templeView() {
    const W = 800;
    let palms = "";
    [[40, 200, 1], [92, 214, 0.8], [190, 196, 1.1], [268, 210, 0.85], [690, 204, 0.9], [752, 196, 1.05]].forEach(([x, base, s]) => {
      const top = base - 90 * s;
      palms += '<path class="tv-trunk" d="M' + x + " " + base + "Q" + (x + 8 * s) + " " + n((base + top) / 2) + " " + n(x + 3 * s) + " " + n(top) + '"/>';
      [-150, -115, -70, -30, 10, 45].forEach((a) => {
        const r = (a * Math.PI) / 180, L = 34 * s;
        const ex = x + 3 * s + Math.cos(r) * L, ey = top + Math.sin(r) * L * 0.6 + 10 * s;
        palms += '<path class="tv-frond" d="M' + n(x + 3 * s) + " " + n(top) + "Q" + n((x + ex) / 2) + " " + n(top - 8 * s) + " " + n(ex) + " " + n(ey) + '"/>';
      });
    });
    // Trees: soft clumps along the far bank.
    let trees = "";
    for (let x = 0; x <= W; x += 46) {
      const h = 22 + ((x * 13) % 20);
      trees += '<ellipse cx="' + x + '" cy="' + (214 - h / 2) + '" rx="34" ry="' + h + '"/>';
    }
    // Mandapam: a pillared hall with a small vimana.
    let cols = "";
    for (let x = 372; x <= 520; x += 18.5) cols += '<rect x="' + n(x) + '" y="170" width="5" height="44"/>';
    const gop = M.gopuram().replace("<svg ", '<svg x="500" y="40" width="200" height="176" ');
    const view =
      '<g class="tv-trees">' + trees + "</g>" + palms +
      '<g class="tv-hall"><rect x="360" y="160" width="172" height="12"/>' + cols + '<rect x="356" y="212" width="180" height="6"/>' +
      '<path d="M420 160V140Q446 112 472 140V160Z"/><path d="M440 116Q446 100 452 116Z"/></g>' + gop;
    const mist = id("mist");
    return '<svg viewBox="0 0 800 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="' + mist + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--parchment)" stop-opacity="0"/>' +
      '<stop offset=".55" style="stop-color:var(--parchment)" stop-opacity=".4"/><stop offset="1" style="stop-color:var(--parchment)" stop-opacity=".5"/></linearGradient></defs>' +
      view +
      '<rect class="tv-water" x="0" y="218" width="800" height="82"/>' +
      '<g class="tv-reflect" transform="matrix(1 0 0 -.55 0 338)">' + view + "</g>" +
      '<g class="tv-shimmer"><path d="M120 240H190M300 252H350M560 236H640M450 266H520M660 262H720M60 276H130"/></g>' +
      '<rect class="tv-ghat" x="0" y="214" width="800" height="5"/>' +
      '<rect fill="url(#' + mist + ')" x="0" y="0" width="800" height="300"/></svg>';
  }

  // ---- Floor kolam, drawn in perspective. Every line is its own path so the
  // page can draw it stroke by stroke.
  function kolamFloor() {
    const cx = 200, cy = 200;
    const curve = (fn, steps) => {
      let d = "";
      for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * Math.PI * 2, r = fn(t);
        d += (i ? "L" : "M") + n(cx + r * Math.cos(t)) + " " + n(cy + r * Math.sin(t));
      }
      return d + "Z";
    };
    const paths = [
      { cls: "k-line", d: curve((t) => 150 + 22 * Math.cos(8 * t), 320) },
      { cls: "k-line", d: curve((t) => 112 * Math.abs(Math.cos(4 * t)) + 20, 320) },
      { cls: "k-line k-line--green", d: curve((t) => 80 + 10 * Math.cos(16 * t), 320) },
      { cls: "k-line k-line--red", d: curve((t) => 44 * Math.abs(Math.cos(2.5 * t)) + 10, 240) },
      { cls: "k-line", d: curve(() => 178, 120) },
    ];
    let dots = "";
    for (let a = 0; a < 16; a++) {
      const t = (a / 16) * Math.PI * 2;
      dots += '<circle cx="' + n(cx + 165 * Math.cos(t)) + '" cy="' + n(cy + 165 * Math.sin(t)) + '" r="3.2"/>';
    }
    return '<svg viewBox="0 0 400 140" aria-hidden="true" focusable="false"><g transform="matrix(1 0 0 .34 0 2)">' +
      paths.map((p) => '<path class="' + p.cls + '" pathLength="1" d="' + p.d + '"/>').join("") +
      '<g class="k-dots">' + dots + '</g><circle class="k-centre" cx="200" cy="200" r="12"/></g></svg>';
  }

  // Small five-petal jasmine flower, for the floor and the falling petals.
  function jasmineFlower() {
    let p = "";
    for (let a = 0; a < 5; a++) p += '<ellipse cx="12" cy="6.5" rx="3.4" ry="6" transform="rotate(' + a * 72 + ' 12 12)"/>';
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g class="jf-petals">' + p + '</g><circle class="jf-eye" cx="12" cy="12" r="2"/></svg>';
  }

  Object.assign(M, {
    "pillar-left": () => pillar(false),
    "pillar-right": () => pillar(true),
    "jasmine-string": jasmineString,
    garland, kuthuvilakku, urli, kalasam, lotus, jasmineFlower,
    "temple-view": templeView,
    kolam: kolamFloor,
  });
})(window.TempleMotifs);
