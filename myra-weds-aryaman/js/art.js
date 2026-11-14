/* Coded artwork. Every image slot has a hand-drawn SVG stand-in, so the invite
   still looks intentional if an asset is missing. Shared gradients live in one
   <svg> of defs (see ART.defs) so each drawing stays small. */
(function () {
  'use strict';
  const ART = {};
  const svg = (vb, body, extra) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" ${extra || ''} aria-hidden="true">${body}</svg>`;

  ART.defs = svg('0 0 0 0', `<defs>
    <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#A4843F"/><stop offset=".3" stop-color="#F2E2B0"/><stop offset=".55" stop-color="#C2A15B"/><stop offset=".75" stop-color="#F7EBC4"/><stop offset="1" stop-color="#8b6a33"/></linearGradient>
    <linearGradient id="gGoldV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2E2B0"/><stop offset=".5" stop-color="#C2A15B"/><stop offset="1" stop-color="#8b6a33"/></linearGradient>
    <linearGradient id="gVelvet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efb9c0"/><stop offset=".45" stop-color="#d98d9a"/><stop offset="1" stop-color="#a95b6b"/></linearGradient>
    <linearGradient id="gVelvetSide" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9c4c5e"/><stop offset=".5" stop-color="#c97585"/><stop offset="1" stop-color="#8a3f51"/></linearGradient>
    <radialGradient id="gSilk" cx=".5" cy=".3" r=".8"><stop offset="0" stop-color="#fffaf1"/><stop offset="1" stop-color="#e9dcc4"/></radialGradient>
    <linearGradient id="gPaper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbf4e6"/><stop offset=".6" stop-color="#f1e3c9"/><stop offset="1" stop-color="#e3cfaa"/></linearGradient>
    <linearGradient id="gRoll" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6d3b0"/><stop offset=".35" stop-color="#fffaf0"/><stop offset=".7" stop-color="#efe0c3"/><stop offset="1" stop-color="#cdb48a"/></linearGradient>
    <linearGradient id="gWood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5a3518"/><stop offset=".5" stop-color="#9a6436"/><stop offset="1" stop-color="#4a2a12"/></linearGradient>
    <radialGradient id="gLac" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#b8343f"/><stop offset=".6" stop-color="#7d1624"/><stop offset="1" stop-color="#4f0b15"/></radialGradient>
    <radialGradient id="gCrystal" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#f1ecff"/><stop offset="1" stop-color="#c9c0de"/></radialGradient>
    <radialGradient id="gFlame" cx=".5" cy=".7" r=".6"><stop offset="0" stop-color="#fff6d6"/><stop offset=".5" stop-color="#ffc760"/><stop offset="1" stop-color="#ff8a1e" stop-opacity="0"/></radialGradient>
    <radialGradient id="gEnamel" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#d9e7f3"/><stop offset="1" stop-color="#9fbdd8"/></radialGradient>
    <radialGradient id="gDial" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#fffdf6"/><stop offset="1" stop-color="#efe3c8"/></radialGradient>
    <radialGradient id="gBoug" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#ffc1d9"/><stop offset=".7" stop-color="#e2669a"/><stop offset="1" stop-color="#b9457a"/></radialGradient>
    <linearGradient id="gSand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efc4b7"/><stop offset="1" stop-color="#d79e93"/></linearGradient>
    <linearGradient id="gWhite" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d8d6da"/></linearGradient>
    <linearGradient id="gHaldi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd84a"/><stop offset="1" stop-color="#e3a312"/></linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.2"/></filter>
    <pattern id="pZari" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M6 1 L11 6 L6 11 L1 6Z" fill="none" stroke="#f2e2b0" stroke-width=".9" opacity=".85"/><circle cx="6" cy="6" r="1.2" fill="#f2e2b0"/></pattern>
  </defs>`, 'style="position:absolute;width:0;height:0;overflow:hidden" focusable="false"');

  const lotus = (cx, cy, s, fill, stroke) => `<g transform="translate(${cx} ${cy}) scale(${s})" fill="${fill}" stroke="${stroke || 'none'}" stroke-width="1">
    <path d="M0 -22 C8 -12 8 2 0 10 C-8 2 -8 -12 0 -22Z"/><path d="M0 10 C-6 -4 -16 -10 -24 -8 C-22 2 -12 10 0 10Z"/><path d="M0 10 C6 -4 16 -10 24 -8 C22 2 12 10 0 10Z"/>
    <path d="M0 10 C-14 4 -28 4 -34 10 C-24 16 -10 14 0 10Z" opacity=".8"/><path d="M0 10 C14 4 28 4 34 10 C24 16 10 14 0 10Z" opacity=".8"/></g>`;
  ART.lotus = lotus;

  ART.crest = () => svg('0 0 200 200', `
    <circle cx="100" cy="108" r="74" fill="none" stroke="url(#gGold)" stroke-width="2"/>
    <circle cx="100" cy="108" r="68" fill="none" stroke="url(#gGold)" stroke-width=".8" stroke-dasharray="2 4"/>
    <path d="M62 38 L74 54 L86 30 L100 52 L114 30 L126 54 L138 38 L132 66 L68 66Z" fill="url(#gGold)"/>
    <circle cx="86" cy="30" r="3.5" fill="#F2E2B0"/><circle cx="100" cy="24" r="4" fill="#F2E2B0"/><circle cx="114" cy="30" r="3.5" fill="#F2E2B0"/>
    <path d="M100 52 l-4 6 4 6 4-6z" fill="#b3121f"/>
    <text x="100" y="128" text-anchor="middle" font-family="Pinyon Script, cursive" font-size="54" fill="url(#gGold)">M &amp; A</text>
    ${lotus(100, 158, 0.9, 'url(#gGold)')}
    <path d="M40 108 C30 96 30 120 40 108Z M160 108 C170 96 170 120 160 108Z" fill="url(#gGold)"/>`);

  ART.sitar = () => svg('0 0 40 40', `
    <circle cx="14" cy="27" r="9" fill="url(#gGold)" stroke="#5a1f2b" stroke-width=".8"/>
    <circle cx="14" cy="27" r="5" fill="none" stroke="#5a1f2b" stroke-width=".6" stroke-dasharray="1.5 1.5"/>
    <rect x="17.5" y="5" width="3.2" height="22" rx="1.2" transform="rotate(32 19 16)" fill="#E8B4B8" stroke="#5a1f2b" stroke-width=".6"/>
    <circle cx="27" cy="8" r="3" fill="url(#gGold)" stroke="#5a1f2b" stroke-width=".6"/>
    <g class="wave" stroke="#F2E2B0" stroke-width="1.4" stroke-linecap="round"><path d="M33 20 v6"/><path d="M36.5 18 v10"/></g>`);

  ART.orn = () => svg('0 0 150 14', `<path d="M0 7 H58 M92 7 H150" stroke="url(#gGold)" stroke-width="1"/><path d="M75 1 L82 7 L75 13 L68 7Z" fill="url(#gGold)"/><circle cx="62" cy="7" r="2" fill="url(#gGold)"/><circle cx="88" cy="7" r="2" fill="url(#gGold)"/>`, 'class="orn"');

  /* velvet shagun box, closed or open; lid is its own group so it can hinge */
  ART.box = (open) => svg('0 0 300 300', `
    <ellipse cx="150" cy="262" rx="118" ry="16" fill="#3a1418" opacity=".35" filter="url(#soft)"/>
    <path d="M44 150 L256 150 L256 236 Q150 262 44 236Z" fill="url(#gVelvetSide)"/>
    <path d="M44 150 L256 150 L256 236 Q150 262 44 236Z" fill="url(#pZari)" opacity=".5"/>
    <path d="M44 196 Q150 220 256 196" stroke="url(#gGold)" stroke-width="5" fill="none"/>
    <path d="M44 204 Q150 228 256 204" stroke="#F2E2B0" stroke-width="1" fill="none" stroke-dasharray="2 3"/>
    ${open ? `<path d="M52 150 L248 150 L236 128 L64 128Z" fill="url(#gSilk)"/><path d="M64 128 L236 128 L248 150 L52 150Z" fill="none" stroke="#d9c7a3" stroke-width="1"/>
      <g class="lid"><path d="M40 128 L260 128 L246 30 L54 30Z" fill="url(#gVelvet)"/><path d="M40 128 L260 128 L246 30 L54 30Z" fill="url(#pZari)" opacity=".45"/><path d="M60 118 L240 118 L230 42 L70 42Z" fill="url(#gSilk)" opacity=".9"/><path d="M40 128 L260 128" stroke="url(#gGold)" stroke-width="4"/></g>`
      : `<g class="lid"><path d="M36 150 L264 150 L250 112 Q150 96 50 112Z" fill="url(#gVelvet)"/><path d="M36 150 L264 150 L250 112 Q150 96 50 112Z" fill="url(#pZari)" opacity=".45"/>
      <path d="M50 112 Q150 96 250 112" stroke="url(#gGold)" stroke-width="3" fill="none"/><path d="M36 150 L264 150" stroke="url(#gGold)" stroke-width="4"/>
      ${lotus(150, 124, .55, 'url(#gGold)')}</g>`}
    <rect x="138" y="146" width="24" height="22" rx="4" fill="url(#gGold)" stroke="#6b4e1e" stroke-width="1"/><circle cx="150" cy="157" r="3.4" fill="#6b4e1e"/>`);

  ART.scroll = () => svg('0 0 300 140', `
    <ellipse cx="150" cy="122" rx="120" ry="8" fill="#3a1418" opacity=".3" filter="url(#soft)"/>
    <rect x="40" y="44" width="220" height="56" rx="28" fill="url(#gRoll)"/>
    <path d="M60 56 Q150 50 240 56" stroke="#fff" stroke-width="2" opacity=".6" fill="none"/>
    <g fill="url(#gWood)"><rect x="18" y="56" width="26" height="32" rx="6"/><circle cx="14" cy="72" r="9"/><rect x="256" y="56" width="26" height="32" rx="6"/><circle cx="286" cy="72" r="9"/></g>
    <path d="M118 44 C116 66 116 82 118 100 M126 44 C124 66 124 82 126 100" stroke="#b3121f" stroke-width="3" fill="none"/>
    <path d="M122 100 q-6 14 -2 26 M122 100 q8 12 6 24" stroke="#b3121f" stroke-width="2.5" fill="none" stroke-linecap="round"/>`);

  ART.scrollOpen = () => svg('0 0 300 600', `
    <defs><filter id="pd" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#3a1418" flood-opacity=".35"/></filter></defs>
    <path d="M28 34 Q150 26 272 34 L272 566 Q150 574 28 566Z" fill="url(#gPaper)" filter="url(#pd)"/>
    <path d="M28 34 Q150 26 272 34 L272 566 Q150 574 28 566Z" fill="url(#pZari)" opacity=".04"/>
    <rect x="44" y="52" width="212" height="496" fill="none" stroke="#c2a15b" stroke-width="1.2" opacity=".7"/>
    <rect x="50" y="58" width="200" height="484" fill="none" stroke="#c2a15b" stroke-width=".6" opacity=".6" stroke-dasharray="3 3"/>
    ${lotus(150, 82, .6, 'none', '#c2a15b')}${lotus(150, 520, .6, 'none', '#c2a15b')}
    <g fill="url(#gRoll)"><rect x="14" y="8" width="272" height="34" rx="17"/><rect x="14" y="558" width="272" height="34" rx="17"/></g>
    <g fill="url(#gWood)"><rect x="0" y="12" width="18" height="26" rx="5"/><rect x="282" y="12" width="18" height="26" rx="5"/><rect x="0" y="562" width="18" height="26" rx="5"/><rect x="282" y="562" width="18" height="26" rx="5"/></g>`, 'preserveAspectRatio="none"');

  ART.seal = () => svg('0 0 120 120', `
    <path d="M60 6 C76 4 92 12 102 24 C116 38 116 60 112 76 C106 96 88 112 64 114 C40 116 18 104 10 84 C2 64 6 40 18 26 C28 14 44 8 60 6Z" fill="url(#gLac)"/>
    <circle cx="60" cy="60" r="34" fill="none" stroke="#5a0d18" stroke-width="2" opacity=".8"/>
    <circle cx="60" cy="60" r="31" fill="none" stroke="#c45360" stroke-width="1" opacity=".5"/>
    ${lotus(60, 62, .95, '#6e1220', '#b33a48')}
    <path d="M30 34 C40 24 56 20 70 22" stroke="#e07a84" stroke-width="3" fill="none" opacity=".45" stroke-linecap="round"/>`);

  ART.chandelier = () => {
    let drops = '';
    for (let i = 0; i < 9; i++) { const x = 30 + i * 17.5; const y = 150 + Math.sin(i / 8 * Math.PI) * 26; drops += `<line x1="${x}" y1="${y - 26}" x2="${x}" y2="${y}" stroke="#e8e2f5" stroke-width=".8"/><path d="M${x} ${y} l-4 8 4 10 4-10z" fill="url(#gCrystal)" stroke="#bdb3d6" stroke-width=".4"/>`; }
    let drops2 = '';
    for (let i = 0; i < 6; i++) { const x = 55 + i * 18; const y = 110 + Math.sin(i / 5 * Math.PI) * 14; drops2 += `<path d="M${x} ${y} l-3 6 3 8 3-8z" fill="url(#gCrystal)"/>`; }
    let candles = '';
    [40, 70, 100, 130, 160].forEach((x, i) => { const y = i % 4 === 0 ? 118 : 104; candles += `<rect x="${x - 3}" y="${y - 18}" width="6" height="18" fill="#fffaf0"/><path d="M${x} ${y - 30} q5 7 0 12 q-5-5 0-12z" fill="url(#gFlame)"/><circle cx="${x}" cy="${y - 22}" r="10" fill="#ffd28a" opacity=".25"/>`; });
    return svg('0 0 200 250', `<line x1="100" y1="0" x2="100" y2="58" stroke="url(#gGoldV)" stroke-width="3"/>
      <circle cx="100" cy="62" r="7" fill="url(#gGold)"/>
      <path d="M100 66 C70 70 40 100 40 118 M100 66 C130 70 160 100 160 118 M100 66 C88 80 70 96 70 104 M100 66 C112 80 130 96 130 104" stroke="url(#gGold)" stroke-width="3" fill="none"/>
      <path d="M30 120 Q100 150 170 120" stroke="url(#gGold)" stroke-width="4" fill="none"/>
      ${candles}${drops2}${drops}
      <path d="M100 150 l-8 22 8 34 8-34z" fill="url(#gCrystal)" stroke="#bdb3d6" stroke-width=".6"/>
      <circle cx="100" cy="212" r="5" fill="url(#gCrystal)"/>`);
  };

  ART.jasmine = () => {
    let s = '<line x1="50" y1="0" x2="50" y2="160" stroke="#7c9a5c" stroke-width="1.2"/>';
    for (let i = 0; i < 14; i++) {
      const y = 6 + i * 11, x = 50 + (i % 2 ? 3 : -3);
      s += `<g transform="translate(${x} ${y}) rotate(${i * 37})"><ellipse cx="0" cy="-4" rx="3" ry="5" fill="#fffdf6"/><ellipse cx="4" cy="1" rx="3" ry="5" transform="rotate(72)" fill="#fbf7ea"/><ellipse cx="-4" cy="1" rx="3" ry="5" transform="rotate(-72)" fill="#fbf7ea"/><circle r="1.6" fill="#e6d79a"/></g>`;
    }
    s += `<g transform="translate(50 180)"><circle r="16" fill="#b31d2f"/><path d="M-10 -4 C-6 -14 6 -14 10 -4 C6 4 -6 4 -10 -4Z" fill="#d23447"/><path d="M-6 -2 C-2 -8 4 -8 6 -2" stroke="#7d0f1e" fill="none"/><path d="M-14 4 C-8 14 8 14 14 4" stroke="#8a1424" fill="none"/></g>`;
    return svg('0 0 100 200', s);
  };

  ART.bougainvillea = (seed) => {
    let r = seed || 7; const rnd = () => (r = (r * 9301 + 49297) % 233280) / 233280;
    let s = '';
    for (let i = 0; i < 70; i++) {
      const x = rnd() * 400, y = Math.pow(rnd(), 1.8) * 170 + 4, sc = 0.6 + rnd() * 0.9;
      if (rnd() < 0.3) { s += `<ellipse cx="${x}" cy="${y}" rx="${9 * sc}" ry="${5 * sc}" transform="rotate(${rnd() * 180} ${x} ${y})" fill="#5d8a4a" opacity=".85"/>`; continue; }
      s += `<g transform="translate(${x} ${y}) scale(${sc}) rotate(${rnd() * 360})">`;
      for (let k = 0; k < 3; k++) s += `<path d="M0 0 C-9 -4 -10 -14 0 -16 C10 -14 9 -4 0 0Z" transform="rotate(${k * 120})" fill="url(#gBoug)"/>`;
      s += '<circle r="1.6" fill="#fff3d6"/></g>';
    }
    return svg('0 0 400 200', s, 'preserveAspectRatio="xMidYMin slice"');
  };

  ART.jharokha = () => svg('0 0 300 400', `
    <path fill-rule="evenodd" fill="url(#gSand)" d="M0 0 H300 V400 H0Z M54 380 V170 C54 110 100 70 150 52 C200 70 246 110 246 170 V380Z"/>
    <path d="M54 380 V170 C54 110 100 70 150 52 C200 70 246 110 246 170 V380" fill="none" stroke="#b97d72" stroke-width="5"/>
    <path d="M42 390 V168 C42 100 96 56 150 38 C204 56 258 100 258 168 V390" fill="none" stroke="#f6d8cf" stroke-width="3"/>
    <g fill="none" stroke="#c08a7f" stroke-width="2">${Array.from({ length: 9 }, (_, i) => `<path d="M${54 + i * 24} 52 c-6 -10 6 -14 0 -24"/>`).join('')}</g>
    <g fill="#e6b3a8">${Array.from({ length: 10 }, (_, i) => `<circle cx="22" cy="${60 + i * 34}" r="7"/><circle cx="278" cy="${60 + i * 34}" r="7"/>`).join('')}</g>
    ${lotus(150, 22, .7, '#e3a99d')}`);

  ART.miniFrame = () => svg('0 0 300 400', `
    <path fill-rule="evenodd" fill="url(#gGold)" d="M0 0 H300 V400 H0Z M44 44 H256 V356 H44Z"/>
    <path fill-rule="evenodd" fill="#5a1f2b" d="M14 14 H286 V386 H14Z M40 40 H260 V360 H40Z"/>
    <g>${Array.from({ length: 22 }, (_, i) => { const t = i / 22; const p = t < .25 ? [27 + t * 4 * 246, 27] : t < .5 ? [273, 27 + (t - .25) * 4 * 346] : t < .75 ? [273 - (t - .5) * 4 * 246, 373] : [27, 373 - (t - .75) * 4 * 346]; return `<g transform="translate(${p[0]} ${p[1]})"><circle r="6" fill="#E8B4B8"/><circle r="6" fill="none" stroke="#F2E2B0" stroke-width="1"/><circle r="2" fill="#E9962E"/><path d="M-12 0 q6 -6 12 0 q-6 6 -12 0" fill="#7fa36e" opacity=".9"/></g>`; }).join('')}</g>
    <rect x="44" y="44" width="212" height="312" fill="none" stroke="#F2E2B0" stroke-width="2"/>
    <rect x="4" y="4" width="292" height="392" fill="none" stroke="#8b6a33" stroke-width="3"/>`);

  ART.dupatta = (c1, c2) => svg('0 0 200 140', `
    <path d="M6 6 Q100 14 194 6 L188 70 Q182 120 160 134 L150 100 Q100 116 50 100 L40 134 Q18 120 12 70Z" fill="${c1}"/>
    <path d="M6 6 Q100 14 194 6 L188 70 Q182 120 160 134 L150 100 Q100 116 50 100 L40 134 Q18 120 12 70Z" fill="url(#pZari)" opacity=".18"/>
    <path d="M40 30 Q44 80 40 134 M80 18 Q84 70 80 110 M120 18 Q116 70 120 110 M160 30 Q156 80 160 134" stroke="${c2}" stroke-width="5" opacity=".35" fill="none"/>
    <path d="M12 70 Q18 120 40 134 M188 70 Q182 120 160 134" stroke="url(#gGold)" stroke-width="3" fill="none"/>
    <path d="M50 100 Q100 116 150 100" stroke="url(#gGold)" stroke-width="4" fill="none"/>
    <path d="M6 6 Q100 14 194 6" stroke="#fff" stroke-width="2" opacity=".5" fill="none"/>`);

  ART.peg = () => svg('0 0 14 34', `<rect x="1" y="0" width="5.5" height="34" rx="2" fill="url(#gWood)"/><rect x="7.5" y="0" width="5.5" height="34" rx="2" fill="url(#gWood)"/><rect x="0" y="12" width="14" height="4" rx="1" fill="#b9b9b9"/>`);

  ART.clock = () => {
    let ticks = '';
    for (let i = 0; i < 60; i++) { const a = i * 6 * Math.PI / 180, r1 = i % 5 ? 70 : 64, r2 = 74; ticks += `<line x1="${100 + Math.sin(a) * r1}" y1="${110 - Math.cos(a) * r1}" x2="${100 + Math.sin(a) * r2}" y2="${110 - Math.cos(a) * r2}" stroke="#5a1f2b" stroke-width="${i % 5 ? .7 : 2}"/>`; }
    const nums = ['XII', 'I', 'II', 'III', 'IIII', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'].map((n, i) => { const a = i * 30 * Math.PI / 180; return `<text x="${100 + Math.sin(a) * 54}" y="${114 - Math.cos(a) * 54}" text-anchor="middle" font-family="Playfair Display, serif" font-size="11" fill="#5a1f2b">${n}</text>`; }).join('');
    return svg('0 0 200 230', `
      <path d="M100 4 C112 4 116 14 112 22 L88 22 C84 14 88 4 100 4Z" fill="url(#gGold)"/>
      <circle cx="100" cy="110" r="92" fill="url(#gGold)"/>
      <circle cx="100" cy="110" r="86" fill="url(#gEnamel)"/>
      <g>${Array.from({ length: 16 }, (_, i) => { const a = i * 22.5 * Math.PI / 180; return `<circle cx="${100 + Math.sin(a) * 82}" cy="${110 - Math.cos(a) * 82}" r="4" fill="${i % 2 ? '#E8B4B8' : '#BFDCCB'}" stroke="#F2E2B0" stroke-width=".8"/>`; }).join('')}</g>
      <circle cx="100" cy="110" r="78" fill="url(#gGold)"/>
      <circle cx="100" cy="110" r="76" fill="url(#gDial)"/>
      ${ticks}${nums}
      ${lotus(100, 142, .35, '#E8B4B8', '#c2a15b')}
      <path d="M40 196 Q100 230 160 196 L150 214 Q100 236 50 214Z" fill="url(#gGold)"/>`);
  };

  ART.clockHands = () => svg('0 0 200 230', `
    <g class="h-hour"><path d="M100 110 L100 70" stroke="#3b1820" stroke-width="5"/><path d="M100 64 l-5 10 5 4 5-4z" fill="#3b1820"/></g>
    <g class="h-min"><path d="M100 110 L100 46" stroke="#3b1820" stroke-width="3"/><path d="M100 40 l-3.5 9 3.5 3 3.5-3z" fill="#3b1820"/></g>
    <g class="h-sec"><path d="M100 124 L100 40" stroke="#9b2a2a" stroke-width="1.2"/><circle cx="100" cy="122" r="3" fill="#9b2a2a"/></g>
    <circle cx="100" cy="110" r="4.5" fill="url(#gGold)" stroke="#3b1820" stroke-width="1"/>`);

  ART.pigeon = (up) => svg('0 0 120 90', `
    <path d="M18 52 C30 42 52 40 70 44 C84 40 96 42 106 48 C100 50 96 54 98 56 C88 60 76 62 64 62 C48 64 34 62 18 52Z" fill="url(#gWhite)"/>
    <path d="M18 52 L2 46 L6 56 L0 62 L20 58Z" fill="#e7e5ea"/>
    <circle cx="98" cy="48" r="1.6" fill="#222"/><path d="M106 48 l7 2 -7 2z" fill="#d9a26b"/>
    ${up ? '<path d="M54 46 C50 22 62 4 84 0 C78 14 76 28 72 44Z" fill="#f4f3f6"/><path d="M58 46 C56 30 66 16 80 8" stroke="#cfccd6" fill="none"/>'
      : '<path d="M54 54 C46 70 50 84 70 90 C70 76 72 66 72 56Z" fill="#f0eff3"/><path d="M58 58 C56 70 60 80 68 86" stroke="#cfccd6" fill="none"/>'}
    <g transform="translate(70 62)"><rect x="-2" y="2" width="12" height="5" rx="2.5" fill="#fffaf0" stroke="#c2a15b" stroke-width=".6"/><path d="M3 2 v5" stroke="#b3121f" stroke-width="1.4"/><path d="M0 0 L2 3" stroke="#d9a26b" stroke-width="1"/></g>`);

  ART.dhol = () => svg('0 0 200 200', `
    <ellipse cx="100" cy="176" rx="80" ry="10" fill="#000" opacity=".3" filter="url(#soft)"/>
    <path d="M30 60 Q100 40 170 60 L170 140 Q100 160 30 140Z" fill="#b6532a"/>
    <path d="M30 60 Q100 40 170 60 L170 140 Q100 160 30 140Z" fill="url(#pZari)" opacity=".35"/>
    ${Array.from({ length: 9 }, (_, i) => `<path d="M${36 + i * 16} 56 L${44 + i * 16} 144" stroke="#f2e2b0" stroke-width="1.6"/>`).join('')}
    <ellipse cx="30" cy="100" rx="14" ry="42" fill="#f3e6cc" stroke="#7a3a1c" stroke-width="3"/>
    <ellipse cx="170" cy="100" rx="14" ry="42" fill="#efe0c0" stroke="#7a3a1c" stroke-width="3"/>
    ${['#e9962e', '#e8b4b8', '#bfdccb', '#4e79a7', '#b3121f'].map((c, i) => `<path d="M${60 + i * 20} 148 q-2 18 0 32" stroke="${c}" stroke-width="5" stroke-linecap="round"/><circle cx="${60 + i * 20}" cy="182" r="5" fill="${c}"/>`).join('')}
    <path d="M150 34 L188 10" stroke="#6b3a1c" stroke-width="5" stroke-linecap="round"/><path d="M48 32 Q20 18 14 6" stroke="#6b3a1c" stroke-width="4" fill="none" stroke-linecap="round"/>`);

  ART.juttis = () => svg('0 0 200 120', `
    ${[0, 1].map((k) => `<g transform="translate(${k * 70 + 20} ${k * 10 + 20}) rotate(${k ? 6 : -4})">
      <path d="M0 60 C0 40 20 30 50 30 C70 30 86 20 100 6 C104 18 104 30 98 42 C110 50 112 62 100 70 C70 76 30 78 6 72Z" fill="#f6ecd8" stroke="#c2a15b" stroke-width="1.5"/>
      <path d="M40 34 C60 34 80 30 96 14" stroke="url(#gGold)" stroke-width="4" fill="none"/>
      <path d="M20 50 C40 44 60 44 80 48" stroke="url(#gGold)" stroke-width="2" fill="none" stroke-dasharray="3 2"/>
      ${lotus(56, 50, .35, '#E8B4B8', '#c2a15b')}
      <path d="M2 72 C30 80 70 78 100 70" stroke="#8b6a33" stroke-width="3" fill="none"/></g>`).join('')}`);

  ART.ghodi = () => svg('0 0 360 240', `
    <ellipse cx="180" cy="228" rx="140" ry="8" fill="#000" opacity=".35" filter="url(#soft)"/>
    <g fill="#f5f2ec" stroke="#b9b2a6" stroke-width="1.2">
      <path d="M90 120 C100 96 150 88 200 92 C232 94 252 100 262 92 C270 70 282 52 300 44 C312 40 326 46 330 58 C320 62 316 70 316 80 C312 100 300 112 288 120 C286 140 278 150 262 154 L254 222 L242 222 L244 160 C220 166 180 166 150 160 L132 222 L120 222 L124 156 C108 150 96 140 90 120Z"/>
      <path d="M92 124 C76 130 64 150 66 176 C70 170 74 160 84 150" fill="#e9e5de"/></g>
    <path d="M262 92 C270 70 282 52 300 44" stroke="#ece7df" stroke-width="8" fill="none"/>
    <path d="M150 96 C170 92 220 94 240 98 L236 130 C210 136 170 136 150 130Z" fill="#c2394b"/>
    <path d="M150 96 C170 92 220 94 240 98 L236 130 C210 136 170 136 150 130Z" fill="url(#pZari)" opacity=".6"/>
    <path d="M150 130 C170 136 210 136 236 130" stroke="url(#gGold)" stroke-width="4" fill="none"/>
    ${Array.from({ length: 7 }, (_, i) => `<circle cx="${156 + i * 12}" cy="${138 + (i % 2) * 2}" r="4" fill="#e9962e"/>`).join('')}
    <path d="M296 54 L318 84 M300 44 C300 70 296 90 288 110" stroke="url(#gGold)" stroke-width="3" fill="none"/>
    ${Array.from({ length: 6 }, (_, i) => `<circle cx="${290 - i * 5}" cy="${60 + i * 10}" r="3.5" fill="#e9962e"/>`).join('')}
    <g transform="translate(176 26)">
      <path d="M0 64 C-4 40 4 22 20 18 C36 22 42 40 38 64Z" fill="#fbf6ee" stroke="#c2a15b"/>
      <path d="M2 64 L-6 104 L10 104 L18 70 L28 104 L44 104 L36 64Z" fill="#f4ead6" stroke="#c2a15b"/>
      <circle cx="20" cy="8" r="11" fill="#c69c7a"/>
      <path d="M6 4 C6 -14 34 -14 34 4 C30 -2 10 -2 6 4Z" fill="#BFDCCB"/><path d="M34 2 C42 6 46 14 44 24" stroke="#BFDCCB" stroke-width="5" fill="none"/>
      <path d="M8 26 C14 40 26 40 32 26" stroke="#f7f3ea" stroke-width="2" fill="none" stroke-dasharray="1 2"/>
      <path d="M30 30 L70 52" stroke="#c69c7a" stroke-width="6" stroke-linecap="round"/></g>`);

  ART.kite = (c) => svg('0 0 26 32', `<path d="M13 0 L26 13 L13 26 L0 13Z" fill="${c}"/><path d="M13 0 V26 M0 13 H26" stroke="#fff" stroke-width=".6" opacity=".6"/><path d="M13 26 q-3 3 0 6" stroke="${c}" fill="none"/>`);

  ART.lanternRow = (n, y, sag, seed) => {
    let s = `<path d="M-20 ${y} Q200 ${y + sag} 420 ${y}" stroke="#3a2a1c" stroke-width="1" fill="none"/>`;
    for (let i = 0; i < 26; i++) { const t = i / 25, x = -20 + t * 440, yy = y + sag * 4 * t * (1 - t) * 0.5 * 2; s += `<circle cx="${x}" cy="${yy + 3}" r="4.2" fill="${i % 3 ? '#e9962e' : '#f2b640'}"/>`; }
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n, x = -20 + t * 440, yy = y + sag * 4 * t * (1 - t);
      const c = ['#E8B4B8', '#BFD5E8', '#BFDCCB', '#CDBDE0', '#E9962E'][(i + seed) % 5];
      s += `<g class="lan" style="transform-origin:${x}px ${yy}px"><line x1="${x}" y1="${yy}" x2="${x}" y2="${yy + 14}" stroke="#3a2a1c"/><ellipse cx="${x}" cy="${yy + 30}" rx="15" ry="18" fill="${c}"/><ellipse cx="${x}" cy="${yy + 30}" rx="15" ry="18" fill="url(#gFlame)" opacity=".75"/><rect x="${x - 8}" y="${yy + 10}" width="16" height="4" fill="url(#gGold)"/><rect x="${x - 8}" y="${yy + 46}" width="16" height="4" fill="url(#gGold)"/><path d="M${x} ${yy + 50} v10" stroke="#c2a15b"/></g>`;
    }
    return s;
  };

  ART.kundli = (seed) => {
    const petals = Array.from({ length: 24 }, (_, i) => `<path d="M100 8 C106 16 106 22 100 28 C94 22 94 16 100 8Z" transform="rotate(${i * 15} 100 100)" fill="${i % 2 ? '#c2a15b' : '#e8b4b8'}" opacity=".9"/>`).join('');
    const ticks = Array.from({ length: 108 }, (_, i) => `<line x1="100" y1="30" x2="100" y2="${i % 9 ? 33 : 36}" transform="rotate(${i * 360 / 108} 100 100)" stroke="#8b6a33" stroke-width=".6"/>`).join('');
    const dots = Array.from({ length: 12 }, (_, i) => { const a = (i * 30 + 15 + seed * 7) * Math.PI / 180; return `<circle cx="${100 + Math.sin(a) * 44}" cy="${100 - Math.cos(a) * 44}" r="${2 + (i * seed) % 3}" fill="${['#9b2a2a', '#4e79a7', '#e9962e'][(i + seed) % 3]}"/>`; }).join('');
    return svg('0 0 200 200', `${petals}
      <circle cx="100" cy="100" r="74" fill="#f8ecd2" stroke="url(#gGold)" stroke-width="3"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#c2a15b" stroke-width=".8"/>${ticks}
      <g stroke="#8b6a33" stroke-width="1.1" fill="none"><rect x="54" y="54" width="92" height="92"/><path d="M54 54 L146 146 M146 54 L54 146 M100 54 L146 100 L100 146 L54 100Z"/></g>
      ${dots}${lotus(100, 102, .28, '#c2a15b')}`);
  };

  ART.palaceSilhouette = (night) => svg('0 0 400 700', `
    <g fill="${night ? '#2a1d3d' : '#d98f93'}" opacity="${night ? 1 : .85}">
      <path d="M40 470 V380 H70 V350 C70 330 90 318 100 300 C110 318 130 330 130 350 V380 H160 V340 C160 300 190 280 200 250 C210 280 240 300 240 340 V380 H270 V350 C270 330 290 318 300 300 C310 318 330 330 330 350 V380 H360 V470Z"/>
      <circle cx="100" cy="296" r="4"/><circle cx="200" cy="246" r="5"/><circle cx="300" cy="296" r="4"/></g>
    <g fill="${night ? '#ffd58a' : '#fbe7d6'}" opacity="${night ? .9 : .7}">${Array.from({ length: 14 }, (_, i) => `<path d="M${54 + i * 22} 452 v-26 c0 -8 12 -8 12 0 v26z"/>`).join('')}</g>
    <rect x="0" y="470" width="400" height="230" fill="${night ? '#1b1530' : '#c8a39a'}"/>
    <rect x="186" y="470" width="28" height="230" fill="${night ? '#334a7a' : '#a9cbe0'}" opacity=".8"/>
    <g fill="${night ? '#0f1a12' : '#5f7d57'}">${[30, 80, 320, 370].map((x) => `<path d="M${x} 560 C${x - 12} 520 ${x - 8} 470 ${x} 440 C${x + 8} 470 ${x + 12} 520 ${x} 560Z"/>`).join('')}</g>`, 'preserveAspectRatio="xMidYMax slice"');

  ART.fresco = () => svg('0 0 400 800', `
    <g opacity=".55">${Array.from({ length: 3 }, (_, r) => Array.from({ length: 3 }, (_, c) => `<g transform="translate(${70 + c * 130} ${130 + r * 260})"><path d="M0 -60 C30 -30 30 30 0 60 C-30 30 -30 -30 0 -60Z" fill="none" stroke="#c2a15b" stroke-width="1"/>${lotus(0, 4, .7, '#e8b4b8')}<path d="M-40 40 q20 -20 40 0 q20 -20 40 0" stroke="#9fbf9a" fill="none"/></g>`).join('')).join('')}</g>
    <rect x="12" y="12" width="376" height="776" fill="none" stroke="#c2a15b" stroke-width="2" opacity=".6"/>
    <rect x="20" y="20" width="360" height="760" fill="none" stroke="#e8b4b8" stroke-width="6" opacity=".35"/>`, 'preserveAspectRatio="xMidYMid slice"');

  ART.mehendiPattern = () => {
    // a coded mehendi pattern used only when the photo is missing
    let s = '';
    for (let i = 0; i < 40; i++) { const x = (i % 6) * 70 + 30, y = Math.floor(i / 6) * 110 + 50; s += `<g transform="translate(${x} ${y})" stroke="#7a3b16" fill="none" stroke-width="1.4" opacity=".75"><circle r="16"/><circle r="9"/>${Array.from({ length: 8 }, (_, k) => `<path d="M0 -16 q6 -10 0 -18 q-6 8 0 18" transform="rotate(${k * 45})"/>`).join('')}</g>`; }
    return svg('0 0 400 800', `<rect width="400" height="800" fill="#e9b9ad"/>${s}`, 'preserveAspectRatio="xMidYMid slice"');
  };

  /* event icons */
  const I = {};
  I.mehendi = () => svg('0 0 64 64', `<path d="M14 50 L34 12 L40 16 L22 54Z" fill="#7fa36e" stroke="#4f6e42"/><path d="M14 50 l-4 8 8-4z" fill="#6b3a1c"/><path d="M36 40 h18 v6 c0 6 -4 10 -9 10 c-5 0 -9 -4 -9 -10z" fill="#fff" stroke="#c2a15b"/><path d="M54 42 c5 0 5 6 0 6" stroke="#c2a15b" fill="none"/><path d="M42 36 q2 -4 0 -6 M48 36 q2 -4 0 -6" stroke="#b9a" fill="none"/>`);
  I.haldi = () => svg('0 0 64 64', `<ellipse cx="32" cy="30" rx="22" ry="7" fill="url(#gHaldi)"/><path d="M10 30 C12 48 22 54 32 54 C42 54 52 48 54 30" fill="url(#gGold)" stroke="#8b6a33"/><path d="M14 38 h36" stroke="#8b6a33" stroke-dasharray="2 2"/><circle cx="24" cy="28" r="3" fill="#e9962e"/><circle cx="38" cy="27" r="2.4" fill="#fff6c0"/>`);
  I.sangeet = () => svg('0 0 64 64', `<line x1="22" y1="2" x2="22" y2="12" stroke="#8b6a33"/><path d="M8 22 Q22 30 36 22" stroke="url(#gGold)" stroke-width="2.5" fill="none"/><path d="M22 12 C14 14 8 18 8 22 M22 12 C30 14 36 18 36 22" stroke="url(#gGold)" stroke-width="2" fill="none"/><path d="M14 26 l-2 4 2 5 2 -5z M22 28 l-2 5 2 6 2 -6z M30 26 l-2 4 2 5 2 -5z" fill="url(#gCrystal)" stroke="#bdb3d6" stroke-width=".4"/><g transform="translate(30 34)"><path d="M2 8 Q16 4 30 8 L30 24 Q16 28 2 24Z" fill="#b6532a"/><ellipse cx="2" cy="16" rx="3" ry="8" fill="#f3e6cc" stroke="#7a3a1c"/><ellipse cx="30" cy="16" rx="3" ry="8" fill="#efe0c0" stroke="#7a3a1c"/></g>`);
  I.wedding = () => svg('0 0 64 64', `<path d="M8 22 Q32 2 56 22" stroke="url(#gGold)" stroke-width="3" fill="none"/><path d="M12 22 V56 M52 22 V56" stroke="url(#gGold)" stroke-width="3"/><path d="M8 22 H56" stroke="#e9962e" stroke-width="3" stroke-dasharray="3 2"/><path d="M24 54 h16 l-3 -6 h-10z" fill="#8b6a33"/><path d="M32 30 c6 8 6 14 0 18 c-6 -4 -6 -10 0 -18z" fill="url(#gFlame)"/><path d="M32 38 c3 4 3 7 0 10 c-3 -3 -3 -6 0 -10z" fill="#fff6d6"/>`);
  I.reception = () => svg('0 0 64 64', `${lotus(32, 34, .9, '#E8B4B8', '#c2a15b')}${Array.from({ length: 11 }, (_, i) => { const a = Math.PI * (0.15 + i * 0.07); return `<circle cx="${32 + Math.cos(a) * 26}" cy="${30 + Math.sin(a) * 22}" r="2.6" fill="#fbf6ee" stroke="#c9c2b5" stroke-width=".5"/>`; }).join('')}`);
  ART.icon = (k) => (I[k] || I.wedding)();

  ART.tick = () => svg('0 0 24 24', `<circle cx="12" cy="12" r="11" fill="url(#gGold)"/><path d="M6.5 12.5 l3.5 3.5 7.5 -8" stroke="#fffaf0" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`, 'class="tick"');

  window.ART = ART;
})();
