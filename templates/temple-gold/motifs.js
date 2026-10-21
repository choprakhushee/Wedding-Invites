// Temple Gold: built-in SVG artwork. Each function is the fallback for one
// element slot in assets/elements/. Colours come from the CSS variables, so the
// artwork recolours with the couple's theme.

window.TempleMotifs = (function () {
  "use strict";

  let uid = 0;
  const id = (name) => "tg-" + name + "-" + ++uid;
  const n = (v) => +v.toFixed(1);

  // Brass: a horizontal sheen from deep gold to a pale highlight and back.
  function brass(gid, vertical) {
    return '<linearGradient id="' + gid + '" x1="0" y1="0" x2="' + (vertical ? 0 : 1) + '" y2="' + (vertical ? 1 : 0) + '">' +
      '<stop offset="0" style="stop-color:var(--gold-deep)"/>' +
      '<stop offset=".38" style="stop-color:var(--gold)"/>' +
      '<stop offset=".52" style="stop-color:var(--gold-light)"/>' +
      '<stop offset=".68" style="stop-color:var(--gold)"/>' +
      '<stop offset="1" style="stop-color:var(--gold-deep)"/></linearGradient>';
  }

  // ---- Gopuram: stepped tiers of niches, a barrel-vaulted crown, kalasams.
  function gopuram() {
    const g = id("gop"), s = id("gops");
    const W = 342, cx = W / 2;
    let body = "", lines = "";
    const tiers = 5, baseW = 300, step = 36, tierH = 30, baseY = 224;
    for (let i = 0; i < tiers; i++) {
      const yb = baseY - i * tierH, yt = yb - tierH;
      const wb = baseW - i * step, wt = wb - step + 6;
      body += '<path d="M' + n(cx - wb / 2) + " " + yb + "L" + n(cx - wt / 2) + " " + (yt + 4) + "H" + n(cx + wt / 2) + "L" + n(cx + wb / 2) + " " + yb + 'Z"/>';
      // Cornice ledge at the top of each tier.
      lines += '<rect class="g-ledge" x="' + n(cx - wt / 2 - 5) + '" y="' + yt + '" width="' + n(wt + 10) + '" height="4.5" rx="1"/>';
      // A row of arched niches.
      const count = Math.max(3, Math.floor(wt / 26)) | 1;
      const gap = wt / count;
      for (let k = 0; k < count; k++) {
        const x = cx - wt / 2 + gap * (k + 0.5);
        const w = Math.min(10, gap * 0.42), top = yt + 9, bot = yb - 3;
        lines += '<path class="g-niche" d="M' + n(x - w / 2) + " " + bot + "V" + n(top + w * 0.6) +
          "Q" + n(x - w / 2) + " " + top + " " + n(x) + " " + n(top - 2) + "Q" + n(x + w / 2) + " " + top + " " + n(x + w / 2) + " " + n(top + w * 0.6) +
          "V" + bot + '"/>';
      }
    }
    // Crown (shala): a barrel vault with horseshoe gable ends.
    const topY = baseY - tiers * tierH, cw = baseW - tiers * step + 14;
    body += '<path d="M' + n(cx - cw / 2) + " " + topY + "V" + (topY - 14) + "Q" + n(cx - cw / 2) + " " + (topY - 34) + " " + n(cx - cw / 2 + 16) + " " + (topY - 34) +
      "H" + n(cx + cw / 2 - 16) + "Q" + n(cx + cw / 2) + " " + (topY - 34) + " " + n(cx + cw / 2) + " " + (topY - 14) + "V" + topY + 'Z"/>';
    lines += '<path class="g-niche" d="M' + n(cx - cw / 2 + 7) + " " + (topY - 2) + "V" + (topY - 14) + "Q" + n(cx - cw / 2 + 7) + " " + (topY - 27) + " " + n(cx - cw / 2 + 18) + " " + (topY - 27) +
      "H" + n(cx + cw / 2 - 18) + "Q" + n(cx + cw / 2 - 7) + " " + (topY - 27) + " " + n(cx + cw / 2 - 7) + " " + (topY - 14) + "V" + (topY - 2) + '"/>';
    lines += '<circle class="g-niche" cx="' + cx + '" cy="' + (topY - 15) + '" r="6"/>';
    // Kalasams along the ridge.
    let kalasams = "";
    const kc = 7, ks = (cw - 34) / (kc - 1);
    for (let k = 0; k < kc; k++) {
      const x = cx - (cw - 34) / 2 + ks * k, y = topY - 34;
      kalasams += '<path d="M' + n(x - 3.2) + " " + y + "Q" + n(x - 5) + " " + (y - 5) + " " + n(x) + " " + (y - 8) +
        "Q" + n(x + 5) + " " + (y - 5) + " " + n(x + 3.2) + " " + y + "Z M" + n(x - 1) + " " + (y - 8) + "L" + n(x) + " " + (y - 16) + "L" + n(x + 1) + " " + (y - 8) + 'Z"/>';
    }
    return '<svg viewBox="0 0 342 224" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--stone-soft)"/><stop offset="1" style="stop-color:var(--sandal-deep)"/></linearGradient>' +
      brass(s) + "</defs>" +
      '<g fill="url(#' + g + ')">' + body + "</g>" +
      '<g class="g-lines">' + lines + "</g>" +
      '<g fill="url(#' + s + ')">' + kalasams + "</g></svg>";
  }

  // ---- Door frame: carved stone pillars, a lintel with a temple-border edge,
  // and the threshold step.
  function doorFrame() {
    const g = id("frm");
    let triangles = "";
    for (let x = 0; x < 333; x += 11.1) triangles += "M" + n(x) + " 50L" + n(x + 5.55) + " 61L" + n(x + 11.1) + " 50Z";
    let bands = "";
    [70, 150, 230, 310, 390].forEach((y) => {
      bands += '<path d="M6 ' + y + "H36M297 " + y + 'H327"/>';
    });
    const medallion = (x, y) => {
      let petals = "";
      for (let a = 0; a < 8; a++) {
        petals += '<ellipse cx="' + x + '" cy="' + (y - 6) + '" rx="2.2" ry="5" transform="rotate(' + a * 45 + " " + x + " " + y + ')"/>';
      }
      return petals + '<circle cx="' + x + '" cy="' + y + '" r="2.4"/>';
    };
    return '<svg viewBox="0 0 333 488" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--sandal)"/><stop offset="1" style="stop-color:var(--sandal-deep)"/></linearGradient></defs>' +
      // Pillars, lintel and threshold.
      '<path fill="url(#' + g + ')" d="M0 0H333V488H0Z M42 62V452H291V62Z" fill-rule="evenodd"/>' +
      '<rect class="f-shadow" x="0" y="452" width="333" height="36"/>' +
      '<rect class="f-step" x="30" y="452" width="273" height="10"/>' +
      '<g class="f-lines">' +
        '<rect x="4" y="4" width="325" height="42"/>' +
        '<path d="M8 62V448M36 62V448M297 62V448M325 62V448"/>' + bands +
        '<path class="f-tri" d="' + triangles + '"/>' +
      "</g>" +
      '<g class="f-gold">' + medallion(21, 110) + medallion(312, 110) + medallion(21, 270) + medallion(312, 270) + "</g>" +
      "</svg>";
  }

  // ---- Temple door: carved panels, brass bosses and a ring handle.
  // The right door is the left door mirrored.
  function door(mirror) {
    const w = id("wood"), b = id("boss");
    const lotus = (cx, cy, r) => {
      let p = "";
      for (let a = 0; a < 8; a++) {
        p += '<path d="M' + cx + " " + cy + "Q" + n(cx - r * 0.42) + " " + n(cy - r * 0.6) + " " + cx + " " + n(cy - r) +
          "Q" + n(cx + r * 0.42) + " " + n(cy - r * 0.6) + " " + cx + " " + cy + 'Z" transform="rotate(' + a * 45 + " " + cx + " " + cy + ')"/>';
      }
      return p + '<circle cx="' + cx + '" cy="' + cy + '" r="' + n(r * 0.22) + '"/>';
    };
    const diamond = (cx, cy, r) =>
      '<path d="M' + cx + " " + (cy - r) + "L" + (cx + r * 0.62) + " " + cy + "L" + cx + " " + (cy + r) + "L" + (cx - r * 0.62) + " " + cy + 'Z"/>' +
      '<path d="M' + cx + " " + (cy - r * 0.55) + "L" + (cx + r * 0.34) + " " + cy + "L" + cx + " " + (cy + r * 0.55) + "L" + (cx - r * 0.34) + " " + cy + 'Z"/>';
    const panels = [[18, 128], [140, 250], [262, 372]];
    let carving = "";
    panels.forEach(([y1, y2], i) => {
      carving += '<rect x="14" y="' + y1 + '" width="97" height="' + (y2 - y1) + '" rx="2"/>';
      carving += '<rect x="20" y="' + (y1 + 6) + '" width="85" height="' + (y2 - y1 - 12) + '" rx="1.5"/>';
      carving += i === 1 ? lotus(62.5, (y1 + y2) / 2 + 8, 26) : diamond(62.5, (y1 + y2) / 2, 30);
    });
    let bosses = "";
    [9, 134, 256, 382].forEach((y) => {
      for (let x = 22; x <= 104; x += 20.5) bosses += '<circle cx="' + n(x) + '" cy="' + y + '" r="3.4"/>';
    });
    return '<svg viewBox="0 0 125 391" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="' + w + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--kumkum-deep)"/><stop offset=".5" style="stop-color:var(--kumkum)"/><stop offset="1" style="stop-color:var(--kumkum-deep)"/></linearGradient>' +
      '<radialGradient id="' + b + '" cx=".35" cy=".35" r=".7"><stop offset="0" style="stop-color:var(--gold-light)"/><stop offset=".6" style="stop-color:var(--gold)"/><stop offset="1" style="stop-color:var(--gold-deep)"/></radialGradient></defs>' +
      "<g" + (mirror ? ' transform="matrix(-1 0 0 1 125 0)"' : "") + ">" +
      '<rect width="125" height="391" fill="url(#' + w + ')"/>' +
      '<g class="d-lines">' + '<rect x="4" y="4" width="117" height="383"/>' + carving + "</g>" +
      '<g fill="url(#' + b + ')">' + bosses + '<circle cx="113" cy="195" r="4"/></g>' +
      '<circle class="d-ring" cx="113" cy="206" r="8.5"/>' +
      '<path class="d-seam" d="M124 0V391"/>' +
      "</g></svg>";
  }

  // ---- Thoranam: mango leaves and marigolds hanging from a sagging string.
  function thoranam() {
    const count = 15, W = 318;
    let leaves = "", flowers = "";
    const sag = (x) => 6 + 8 * Math.sin((x / W) * Math.PI);
    for (let i = 0; i < count; i++) {
      const x = 10 + (i * (W - 20)) / (count - 1), y = sag(x);
      const len = i % 2 ? 40 : 48, wd = 6.5;
      const dur = (3.6 + ((i * 7) % 5) * 0.45).toFixed(2), delay = (-(i * 0.73) % 3).toFixed(2);
      leaves += '<path class="t-leaf' + (i % 3 === 1 ? " t-leaf--light" : "") + '" style="animation-duration:' + dur + "s;animation-delay:" + delay + 's" d="M' +
        n(x) + " " + n(y) + "C" + n(x - wd) + " " + n(y + len * 0.3) + " " + n(x - wd * 0.8) + " " + n(y + len * 0.75) + " " + n(x) + " " + n(y + len) +
        "C" + n(x + wd * 0.8) + " " + n(y + len * 0.75) + " " + n(x + wd) + " " + n(y + len * 0.3) + " " + n(x) + " " + n(y) + 'Z"/>';
      if (i < count - 1) {
        const fx = x + (W - 20) / (count - 1) / 2;
        flowers += '<circle cx="' + n(fx) + '" cy="' + n(sag(fx) + 3) + '" r="4.2"/>';
      }
    }
    let string = "M0 6";
    for (let x = 0; x <= W; x += 6) string += "L" + x + " " + n(sag(x));
    return '<svg viewBox="0 0 318 60" aria-hidden="true" focusable="false">' +
      '<path class="t-string" d="' + string + '"/>' +
      '<g class="t-leaves">' + leaves + "</g>" +
      '<g class="t-flowers">' + flowers + "</g></svg>";
  }

  // ---- Banana leaf: a broad blade with a blunt tip, a pale midrib and fine
  // parallel veins.
  function bananaLeaf(mirror) {
    const g = id("leaf"), clip = id("leafc");
    const blade = "M46 356C22 334 10 270 10 196C10 120 22 56 46 18C52 8 62 4 70 8C80 52 88 116 87 196C86 276 72 334 46 356Z";
    let veins = "";
    for (let y = 30; y < 360; y += 7) {
      const t = (y - 30) / 330, mid = 68 - 22 * t;   // the midrib leans from the tip to the stalk
      veins += "M" + n(mid) + " " + y + "L" + n(mid - 60) + " " + (y - 26) + "M" + n(mid) + " " + y + "L" + n(mid + 60) + " " + (y - 26);
    }
    return '<svg viewBox="0 0 94 400" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="' + g + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--peacock-deep)"/><stop offset=".55" style="stop-color:var(--leaf-light)"/><stop offset="1" style="stop-color:var(--peacock)"/></linearGradient>' +
      '<clipPath id="' + clip + '"><path d="' + blade + '"/></clipPath></defs>' +
      "<g" + (mirror ? ' transform="matrix(-1 0 0 1 94 0)"' : "") + ">" +
      '<path class="l-stalk" d="M44 400C45 380 46 370 46 352"/>' +
      '<path fill="url(#' + g + ')" d="' + blade + '"/>' +
      '<g clip-path="url(#' + clip + ')"><path class="l-veins" d="' + veins + '"/></g>' +
      '<path class="l-rib" d="M46 356C48 260 54 120 69 8"/>' +
      "</g></svg>";
  }

  // ---- Temple bell on a chain. The clapper swings with the bell.
  function bell() {
    const g = id("bell"), v = id("bellv");
    let chain = "";
    for (let y = 2; y < 58; y += 9) chain += '<ellipse cx="40" cy="' + (y + 4) + '" rx="' + (((y / 9) | 0) % 2 ? 1.4 : 3) + '" ry="5"/>';
    return '<svg viewBox="0 0 80 170" aria-hidden="true" focusable="false"><defs>' + brass(g) +
      '<linearGradient id="' + v + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".28"/></linearGradient></defs>' +
      '<g class="b-chain">' + chain + "</g>" +
      '<g fill="url(#' + g + ')">' +
        '<circle cx="40" cy="64" r="5"/>' +
        '<path d="M31 78Q40 66 49 78Z"/>' +
        '<path d="M28 79Q40 72 52 79L56 118Q59 138 70 148H10Q21 138 24 118Z"/>' +
        '<ellipse cx="40" cy="148" rx="31" ry="5.5"/>' +
        '<line x1="40" y1="150" x2="40" y2="159" stroke="url(#' + g + ')" stroke-width="2.4"/>' +
        '<circle cx="40" cy="162" r="5.2"/>' +
      "</g>" +
      '<path fill="url(#' + v + ')" d="M28 79Q40 72 52 79L56 118Q59 138 70 148H10Q21 138 24 118Z"/>' +
      '<path class="b-bands" d="M26 100Q40 96 54 100M20 134Q40 129 60 134"/>' +
      "</svg>";
  }

  // ---- Brass diya (agal vilakku) on a short stand. Wick tip at (100, 70).
  function diya() {
    const g = id("diya"), r = id("rim");
    return '<svg viewBox="0 0 200 160" aria-hidden="true" focusable="false"><defs>' + brass(g) + brass(r) + "</defs>" +
      '<g fill="url(#' + g + ')">' +
        '<ellipse cx="100" cy="152" rx="36" ry="6"/>' +
        '<path d="M76 151L90 126H110L124 151Z"/>' +
        '<ellipse cx="100" cy="124" rx="16" ry="5"/>' +
        '<path d="M28 84Q46 128 100 128Q154 128 172 84Z"/>' +
      "</g>" +
      '<path class="dy-line" d="M44 100Q100 118 156 100"/>' +
      '<ellipse cx="100" cy="84" rx="72" ry="12" fill="url(#' + r + ')"/>' +
      '<ellipse class="dy-oil" cx="100" cy="84" rx="63" ry="8"/>' +
      '<path fill="url(#' + r + ')" d="M86 86Q92 70 100 66Q108 70 114 86Q100 92 86 86Z"/>' +
      '<path class="dy-wick" d="M99 78L100 69L101 78Z"/>' +
      "</svg>";
  }

  function flame() {
    const o = id("fo"), c = id("fc");
    return '<svg viewBox="0 0 40 96" aria-hidden="true" focusable="false"><defs>' +
      '<radialGradient id="' + o + '" cx=".5" cy=".72" r=".62"><stop offset="0" stop-color="#fff6d8"/><stop offset=".38" style="stop-color:var(--turmeric)"/><stop offset=".78" stop-color="#d0541b" stop-opacity=".85"/><stop offset="1" stop-color="#d0541b" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="' + c + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffdf2"/><stop offset=".8" stop-color="#fff3c4"/><stop offset="1" stop-color="#7f9fd6" stop-opacity=".7"/></linearGradient></defs>' +
      '<path fill="url(#' + o + ')" d="M20 0C26 22 38 46 36 66C34 84 26 96 20 96C14 96 6 84 4 66C2 46 14 22 20 0Z"/>' +
      '<path class="flame__core" fill="url(#' + c + ')" d="M20 34C23 48 28 60 27 72C26 84 23 90 20 90C17 90 14 84 13 72C12 60 17 48 20 34Z"/>' +
      "</svg>";
  }

  return {
    gopuram, thoranam, bell, diya, flame,
    "temple-frame": doorFrame,
    "temple-door-left": () => door(false),
    "temple-door-right": () => door(true),
    "banana-leaf-left": () => bananaLeaf(false),
    "banana-leaf-right": () => bananaLeaf(true),
  };
})();
