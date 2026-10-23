// Palace Parlour fallback drawings, used whenever an element slot in
// assets/elements/ is empty. Everything is drawn in a 360 × 640 "gate" space
// so the frame, the doorway and the doors always line up.

(function () {
  "use strict";

  const GOLD = "#C9A56B";
  const SVGNS = 'xmlns="http://www.w3.org/2000/svg"';

  // The doorway the doors sit in, in gate units. parlour.css uses the same numbers.
  const DOOR = { x: 84, y: 186, w: 192, h: 410 };
  const SPRING = 310;   // where the arch starts to curve
  const APEX = 206;     // the tip of the arch

  // ---------- Cusped (Mughal) arch ----------

  function cubic(p0, p1, p2, p3, t) {
    const u = 1 - t;
    return [
      u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
      u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
    ];
  }

  // Returns the arch as a list of segments [from, control, to], left spring to right spring.
  // Each lobe bulges away from the opening, leaving small cusps pointing inwards.
  function cuspedArch(left, right, spring, apex, lobesPerSide) {
    const cx = (left + right) / 2;
    const half = (right - left) / 2;
    const leftHalf = [[left, spring], [left, spring - (spring - apex) * 0.62], [cx - half * 0.42, apex + (spring - apex) * 0.2], [cx, apex]];
    const pts = [];
    for (let i = 0; i <= lobesPerSide; i++) pts.push(cubic(...leftHalf, Math.pow(i / lobesPerSide, 0.9)));
    for (let i = lobesPerSide - 1; i >= 0; i--) pts.push([2 * cx - pts[i][0], pts[i][1]]);

    const segs = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const len = Math.hypot(dx, dy);
      const depth = len * 0.3;
      const ctrl = [(a[0] + b[0]) / 2 + (dy / len) * depth, (a[1] + b[1]) / 2 + (-dx / len) * depth];
      segs.push([a, ctrl, b]);
    }
    return segs;
  }

  const r = (n) => Math.round(n * 100) / 100;
  const pt = (p, map) => { const q = map ? map(p) : p; return r(q[0]) + " " + r(q[1]); };

  function segsPath(segs, map) {
    return segs.map((s) => "Q" + pt(s[1], map) + " " + pt(s[2], map)).join(" ");
  }

  function reverseSegs(segs) {
    return segs.slice().reverse().map((s) => [s[2], s[1], s[0]]);
  }

  const ARCH = cuspedArch(DOOR.x, DOOR.x + DOOR.w, SPRING, APEX, 4);

  // The doorway opening as a clip path in 0–1 units of the doorway box (for CSS clip-path).
  function doorwayClipPath() {
    const map = (p) => [(p[0] - DOOR.x) / DOOR.w, (p[1] - DOOR.y) / DOOR.h];
    return "M0 1 L0 " + r((SPRING - DOOR.y) / DOOR.h) + " " + segsPath(ARCH, map) + " L1 1 Z";
  }

  // ---------- The gate (chhatri pavilion) ----------
  // Fills are maroon; every outline is a gold stroke that "engraves" in order.
  // Each <g data-step> is one engraving step.

  function mirrorRect(x, y, w, h) { return [[x, y, w, h], [360 - x - w, y, w, h]]; }
  const rect = (a) => `<rect x="${a[0]}" y="${a[1]}" width="${a[2]}" height="${a[3]}"/>`;

  function rosette(cx, cy, rad) {
    let d = "";
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      const x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
      d += `M${r(cx)} ${r(cy)} Q${r(cx + Math.cos(a + 0.5) * rad * 0.7)} ${r(cy + Math.sin(a + 0.5) * rad * 0.7)} ${r(x)} ${r(y)} `;
    }
    return `<circle cx="${cx}" cy="${cy}" r="${rad}"/><path d="${d}" stroke-width="0.7"/>`;
  }

  function miniChhatri(cx) {
    return {
      fill: `<rect x="${cx - 21}" y="148" width="42" height="8"/><rect x="${cx - 16}" y="130" width="4" height="18"/><rect x="${cx + 12}" y="130" width="4" height="18"/>` +
        `<path d="M${cx - 25} 130 L${cx + 25} 130 L${cx + 19} 122 L${cx - 19} 122 Z"/>` +
        `<path d="M${cx - 17} 122 C${cx - 19} 104 ${cx - 7} 96 ${cx} 86 C${cx + 7} 96 ${cx + 19} 104 ${cx + 17} 122 Z"/>`,
      line: `<rect x="${cx - 21}" y="148" width="42" height="8"/><path d="M${cx - 14} 148 V130 M${cx + 14} 148 V130"/>` +
        `<path d="M${cx - 25} 130 L${cx + 25} 130 L${cx + 19} 122 L${cx - 19} 122 Z"/>` +
        `<path d="M${cx - 17} 122 C${cx - 19} 104 ${cx - 7} 96 ${cx} 86 C${cx + 7} 96 ${cx + 19} 104 ${cx + 17} 122"/>` +
        `<path d="M${cx} 86 V76"/><circle cx="${cx}" cy="73" r="2.6"/>`,
    };
  }

  function gateSVG() {
    const archD = `M${DOOR.x} ${SPRING} ` + segsPath(ARCH);
    const outerArch = `M${DOOR.x} 292 C${DOOR.x} 236 146 214 180 190 C214 214 ${DOOR.x + DOOR.w} 236 ${DOOR.x + DOOR.w} 292`;
    const spandrel = `M${DOOR.x} ${DOOR.y - 2} H${DOOR.x + DOOR.w} V${SPRING} ` + segsPath(reverseSegs(ARCH)) + " Z";
    const shafts = mirrorRect(46, 206, 38, 362);
    const caps = mirrorRect(40, 186, 50, 20);
    const bases = mirrorRect(40, 566, 50, 30);
    const flutes = [56, 65, 74].map((x) => `M${x} 214 V558 M${360 - x} 214 V558`).join(" ");
    const diamonds = [65, 295].map((x) => `M${x} 372 L${x + 9} 387 L${x} 402 L${x - 9} 387 Z`).join(" ");
    const niches = [118, 149, 180, 211, 242].map((x) => `M${x - 9} 154 V142 C${x - 9} 136 ${x} 133 ${x} 131 C${x} 133 ${x + 9} 136 ${x + 9} 142 V154`).join(" ");
    const domeD = "M112 112 C104 62 150 44 180 28 C210 44 256 62 248 112";
    const left = miniChhatri(65), right = miniChhatri(295);

    return `<svg ${SVGNS} class="gate__frame" viewBox="0 0 360 640" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
  <g class="gate__fill">
    <rect x="22" y="612" width="316" height="28"/><rect x="38" y="596" width="284" height="16"/>
    ${shafts.map(rect).join("")}${caps.map(rect).join("")}${bases.map(rect).join("")}
    <path d="${spandrel}"/>
    <path d="M16 164 L344 164 L324 186 L36 186 Z"/><rect x="24" y="156" width="312" height="8"/>
    <rect x="96" y="128" width="168" height="28"/><rect x="110" y="112" width="140" height="16"/>
    ${left.fill}${right.fill}
    <path d="${domeD} Z"/>
  </g>
  <g class="gate__lines" fill="none" stroke="${GOLD}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <g data-step="0"><rect x="22" y="612" width="316" height="28"/><rect x="38" y="596" width="284" height="16"/></g>
    <g data-step="1">${shafts.map(rect).join("")}${bases.map(rect).join("")}${caps.map(rect).join("")}</g>
    <g data-step="2"><path d="${flutes}" stroke-width="0.6"/><path d="${diamonds}" stroke-width="0.9"/></g>
    <g data-step="3"><path d="${archD}" stroke-width="1.7"/><path d="${outerArch}" stroke-width="0.8"/>${rosette(106, 214, 9)}${rosette(254, 214, 9)}</g>
    <g data-step="4"><path d="M16 164 L344 164 L324 186 L36 186 Z"/><rect x="24" y="156" width="312" height="8"/></g>
    <g data-step="5"><rect x="96" y="128" width="168" height="28"/><path d="${niches}" stroke-width="0.8"/>${left.line}${right.line}</g>
    <g data-step="6"><rect x="110" y="112" width="140" height="16"/><path d="${domeD}"/><path d="M146 112 C144 74 162 48 180 28 M180 112 V28 M214 112 C216 74 198 48 180 28" stroke-width="0.7"/></g>
    <g data-step="7"><path d="M166 34 C170 24 190 24 194 34"/><circle cx="180" cy="18" r="6"/><circle cx="180" cy="7" r="3.2"/><path d="M180 3.8 V0"/></g>
  </g>
</svg>`;
  }

  // ---------- Doors ----------
  // One door leaf, 96 × 410 (half the doorway). The right door is the same leaf mirrored.

  function doorSVG() {
    let studs = "";
    for (let y = 70; y <= 396; y += 22) studs += `<circle cx="11" cy="${y}" r="1.5"/><circle cx="85" cy="${y}" r="1.5"/>`;
    const bud = "M48 268 C40 258 40 242 48 230 C56 242 56 258 48 268 Z M48 268 C36 264 30 252 32 240 C40 246 46 256 48 268 Z M48 268 C60 264 66 252 64 240 C56 246 50 256 48 268 Z M48 268 V292";
    return `<svg ${SVGNS} viewBox="0 0 96 410" preserveAspectRatio="none" aria-hidden="true" focusable="false">
  <defs><linearGradient id="doorShade" x1="0" x2="1"><stop offset="0" stop-color="#1F3A2E"/><stop offset="1" stop-color="#18301F"/></linearGradient></defs>
  <rect width="96" height="410" fill="url(#doorShade)"/>
  <g fill="none" stroke="${GOLD}" stroke-linejoin="round">
    <rect x="6" y="6" width="84" height="398" stroke-width="0.9"/>
    <path d="M16 304 V204 C16 174 34 154 48 138 C62 154 80 174 80 204 V304 Z" stroke-width="1.1"/>
    <path d="M22 298 V206 C22 180 37 162 48 148 C59 162 74 180 74 206 V298 Z" stroke-width="0.5"/>
    <path d="${bud}" stroke-width="0.9"/>
    <rect x="16" y="318" width="64" height="76" stroke-width="1.1"/>
    <path d="M48 326 L72 356 L48 386 L24 356 Z" stroke-width="0.8"/>
    <path d="M95 0 V410" stroke-width="1.4"/>
    <circle cx="84" cy="312" r="6.5" stroke-width="1.1"/>
  </g>
  <g fill="${GOLD}">${studs}<circle cx="84" cy="305.5" r="2.2"/></g>
</svg>`;
  }

  // ---------- Petal ----------
  const PETAL_FILLS = ["#7A1F26", "#9E5A5C", "#E6CFC6"];
  function petalSVG(i) {
    const fill = PETAL_FILLS[i % PETAL_FILLS.length];
    const shapes = [
      "M12 1 C20 6 21 17 12 23 C3 17 4 6 12 1 Z",
      "M12 2 C22 4 22 18 12 23 C5 17 2 8 12 2 Z",
      "M12 1 C18 8 20 16 12 23 C4 16 6 8 12 1 Z",
    ];
    return `<svg ${SVGNS} viewBox="0 0 24 24" aria-hidden="true"><path d="${shapes[i % 3]}" fill="${fill}" stroke="${GOLD}" stroke-width="0.8"/></svg>`;
  }

  window.ParlourMotifs = { DOOR, doorwayClipPath, gateSVG, doorSVG, petalSVG };
})();
