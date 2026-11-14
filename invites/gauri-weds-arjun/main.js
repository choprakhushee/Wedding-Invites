/* =====================================================================
   Kalyanam at the Temple Town · a scroll-film wedding invitation
   Aamantran Atelier

   Everything a new client changes lives in CONFIG below. The page is
   generated from it; no other edits are needed for a new couple.
   ===================================================================== */
const CONFIG = {
  meta: {
    title: 'Gauri & Arjun | Wedding Invitation',
    studio: 'Aamantran Atelier',
    slug: 'gauri-arjun'
  },

  couple: {
    bride: { first: 'Gauri', full: 'Gauri Menon', relation: 'Daughter of', parents: 'Smt. Lakshmi & Sri. Hari Menon', place: 'Thrissur' },
    groom: { first: 'Arjun', full: 'Arjun Nair', relation: 'Son of', parents: 'Smt. Sreedevi & Sri. Mohan Nair', place: 'Kochi' }
  },

  blessing: { ml: 'ശ്രീ ഗുരുവായൂരപ്പൻ തുണ', en: 'With the blessings of Sree Guruvayurappan' },

  copy: {
    dear: 'Dear {guest},',
    worth: 'Some moments are worth the wait',
    dial: ['A beautiful', 'beginning awaits'],
    tap: 'Tap to begin',
    married: 'are getting married',
    dateShort: '09 · 05 · 2027',
    scrollHint: 'Scroll',
    cordially: 'we cordially',
    invites: 'Invites',
    invitation: 'With the blessings of the Almighty and our beloved elders, we cordially invite you to grace the auspicious wedding of our children.',
    caption: 'Kalyanam at the Temple Town',
    captionSub: 'Guruvayur · Kerala',
    coupleTitle: 'The Bride & The Groom',
    storyTitle: 'Our Story',
    story: "It began in Thrissur, at a cousin's wedding, over a shared plantain leaf of sadya and an argument about which payasam was best. Two years of long calls between Thrissur and Kochi later, our families met over filter coffee and laughed like they had known each other forever. Now, before Guruvayurappan and all of you, we begin our journey together.",
    countTitle: 'Until the Muhurtham',
    countWhen: 'Sunday, 9 May 2027 · 9:15 AM IST',
    married2: 'Happily Married',
    eventsTitle: 'The Ceremonies',
    eventsKicker: 'Celebrations',
    swipe: 'Swipe to see each ceremony',
    venueKicker: 'The Muhurtham',
    rsvpLabel: 'Your name',
    rsvpPlaceholder: 'e.g. The Nair Family',
    rsvpButton: 'RSVP on WhatsApp',
    rsvpNeedName: 'Please add your name so the family knows who is coming.',
    contactsTitle: 'For any help',
    presence: 'Your presence is our blessing',
    footer: 'Crafted with love by Aamantran Atelier'
  },

  hashtag: '#GauriArjunKalyanam',

  // The countdown target (the Muhurtham), with its time-zone offset.
  muhurtham: '2027-05-09T09:15:00+05:30',

  venue: {
    name: 'Guruvayur Temple Nada',
    lines: ['Sunday, 9 May 2027', '9:15 AM to 9:45 AM', 'Guruvayur, Thrissur, Kerala'],
    maps: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple'
  },

  // start/end are used for "Add to calendar"; date/time are what guests read.
  events: [
    { name: 'Mehendi & Sangeet', date: 'Friday, 7 May 2027', time: '6:00 PM', start: '2027-05-07T18:00:00+05:30', end: '2027-05-07T22:00:00+05:30',
      venue: 'Lotus Courtyard, Thrissur', note: 'Dress: bright silks', icon: 'icon-mehendi', tint: ['#2f6b3c', '#173d22'],
      maps: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple' },
    { name: 'Haldi', date: 'Saturday, 8 May 2027', time: '10:00 AM', start: '2027-05-08T10:00:00+05:30', end: '2027-05-08T13:00:00+05:30',
      venue: 'Family Home, Thrissur', note: 'Dress: yellow', icon: 'icon-haldi', tint: ['#c98f12', '#7e5108'],
      maps: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple' },
    { name: 'Muhurtham', subtitle: 'The Wedding', date: 'Sunday, 9 May 2027', time: '9:15 AM to 9:45 AM', start: '2027-05-09T09:15:00+05:30', end: '2027-05-09T09:45:00+05:30',
      venue: 'Guruvayur Temple Nada', note: 'Dress: kasavu & traditional Kerala attire', icon: 'icon-thali', tint: ['#a3261e', '#5e1410'],
      maps: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple' },
    { name: 'Sadya', subtitle: 'The Wedding Feast', date: 'Sunday, 9 May 2027', time: '11:30 AM', start: '2027-05-09T11:30:00+05:30', end: '2027-05-09T14:00:00+05:30',
      venue: 'Sree Krishna Auditorium, Guruvayur', note: 'Served on plantain leaf', icon: 'icon-sadya', tint: ['#4f7f33', '#26461a'],
      maps: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple' },
    { name: 'Reception', date: 'Sunday, 9 May 2027', time: '7:00 PM', start: '2027-05-09T19:00:00+05:30', end: '2027-05-09T22:30:00+05:30',
      venue: 'The Lakeside Hall, Thrissur', note: 'Dress: festive formal', icon: 'icon-lamp', tint: ['#6e1a22', '#3b0b10'],
      maps: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple' }
  ],

  rsvp: {
    by: 'Kindly respond by 20 April 2027',
    whatsapp: '919999999999',
    message: "Namaskaram! This is {guest}. Happy to confirm I'll be there to bless Gauri & Arjun 🌼"
  },

  contacts: [
    { name: 'Vishnu Menon', role: "Bride's brother", phone: '+91 99999 77777' },
    { name: 'Anjali Nair', role: "Groom's sister", phone: '+91 99999 88888' }
  ],

  colors: {
    red: '#A3261E', terracotta: '#C4532E', gold: '#D4A437', goldHi: '#F3DC8E', goldLo: '#A97C1F',
    ivory: '#FBF5E8', jasmine: '#FFFDF7', leaf: '#3E6B3A', wood: '#4A2A1A', glow: '#F6B35A'
  },

  // Music: put an MP3 in assets/ and set src to its path, e.g. 'assets/music.mp3'.
  // Leave src empty to play the generated tanpura-and-veena loop instead.
  music: { src: '', volume: 0.25, fadeIn: 3 },

  // Images live in assets/. Scenes load a video loop first if one is set,
  // then WebP, then JPG, then a drawn SVG fallback.
  assets: {
    base: 'assets/',
    scenes: {
      'clock-bg':          { video: '', fallback: 'clock' },
      'temple-sky':        { video: '', fallback: 'sky' },
      'temple-doorway-bg': { video: '', fallback: 'doorway' },
      'mandapam':          { video: '', fallback: 'mandapam' },
      'bride':             { video: '', fallback: 'portrait' },
      'groom':             { video: '', fallback: 'portrait' },
      'temple-base':       { video: '', fallback: 'steps' },
      'temple-night':      { video: '', fallback: 'night' }
    },
    // cutouts are transparent WebP files with the same names
    cutouts: ['bell', 'garland-swag', 'garland-strand', 'pillar', 'roof-crest', 'nilavilakku', 'palm-leaves',
      'couple-cutout', 'jasmine-flower', 'rose-petal', 'icon-mehendi', 'icon-haldi', 'icon-sadya', 'icon-thali', 'icon-lamp']
  },

  // Measured points inside the images (fractions of the 1080×1920 scene).
  // Re-measure these if you regenerate clock-bg, temple-doorway-bg or nilavilakku.
  layout: {
    clock: { cx: 0.5291, cy: 0.4953, r: 0.2203 },           // dial pivot and numeral-ring radius (× image width)
    doorwayPanel: { x1: 0.243, x2: 0.752, y1: 0.181, y2: 0.768 },
    lampFlames: { y: 0.236, xs: [0.17, 0.33, 0.5, 0.67, 0.83] }, // on the nilavilakku cutout
    cutoutAspect: { bell: 700 / 303, 'garland-swag': 624 / 1200, 'garland-strand': 1000 / 88, pillar: 1300 / 196,
      'roof-crest': 562 / 1100, nilavilakku: 1000 / 270, 'couple-cutout': 1000 / 700, 'palm-leaves': 640 / 628 }
  },

  // How long each scene holds (in screen heights of scrolling) while its animation plays.
  holds: { temple: 1.3, doorway: 2.2, mandapam: 0.55, couple: 1.2, story: 1.8, count: 0.6, events: 0.45, rsvp: 0.5, end: 0.8 },

  // Desktop side backdrop image for each scene
  backdrops: { temple: 'temple-sky', doorway: 'temple-doorway-bg', mandapam: 'mandapam', couple: 'bride', story: 'temple-base',
    count: 'temple-sky', events: 'mandapam', rsvp: 'temple-night', end: 'temple-night' }
};

/* ===================================================================== */
(() => {
  'use strict';

  const doc = document, root = doc.documentElement;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HAS_GSAP = !!(window.gsap && window.ScrollTrigger);
  const MOTION = !RM && HAS_GSAP;
  if (!MOTION) root.classList.add('rm');
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  const C = CONFIG;
  const params = new URLSearchParams(location.search);
  const guest = (params.get('guest') || '').replace(/\s+/g, ' ').trim().slice(0, 60);

  /* ---------- tiny helpers ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const el = (tag, cls, html) => { const e = doc.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const $ = (s, r = doc) => r.querySelector(s);
  const $$ = (s, r = doc) => Array.from(r.querySelectorAll(s));
  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const isMobile = matchMedia('(pointer: coarse)').matches || innerWidth < 600;
  const asset = (name, ext) => C.assets.base + name + '.' + ext;
  let uid = 0;

  // colours from CONFIG
  const cv = C.colors;
  [['--red', cv.red], ['--terracotta', cv.terracotta], ['--gold', cv.gold], ['--gold-hi', cv.goldHi], ['--gold-lo', cv.goldLo],
    ['--ivory', cv.ivory], ['--jasmine', cv.jasmine], ['--leaf', cv.leaf], ['--wood', cv.wood], ['--glow', cv.glow]]
    .forEach(([k, v]) => v && root.style.setProperty(k, v));
  doc.title = C.meta.title;

  /* =====================================================================
     Drawn SVG fallbacks (used when an image is missing). Palette only.
     ===================================================================== */
  const P = { red: cv.red, terra: cv.terracotta, gold: cv.gold, hi: cv.goldHi, lo: cv.goldLo, ivory: cv.ivory, jas: cv.jasmine, leaf: cv.leaf, wood: cv.wood, glow: cv.glow };
  const svgWrap = (vb, body, par = 'xMidYMid slice') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="${par}">${body}</svg>`;
  const templeShape = (x, y, s, fill, trim) => {
    // tiered Kerala roof silhouette centred at x, base at y
    let g = '';
    const tiers = [[260, 70], [200, 62], [140, 56]];
    let yy = y;
    tiers.forEach(([w, h], i) => {
      const W = w * s, H = h * s;
      g += `<path d="M${x - W / 2} ${yy} L${x - W * 0.28} ${yy - H} L${x + W * 0.28} ${yy - H} L${x + W / 2} ${yy} Z" fill="${fill}"/>`;
      g += `<rect x="${x - W * 0.42}" y="${yy}" width="${W * 0.84}" height="${10 * s}" fill="${trim}"/>`;
      yy -= H + (i < 2 ? 6 * s : 0);
    });
    for (let k = -2; k <= 2; k++) g += `<path d="M${x + k * 16 * s} ${yy} l${-4 * s} 0 l${4 * s} ${-26 * s} l${4 * s} ${26 * s}z" fill="${P.hi}"/>`;
    g += `<rect x="${x - 110 * s}" y="${y + 10 * s}" width="${220 * s}" height="${70 * s}" fill="${trim}" opacity=".9"/>`;
    return g;
  };
  const palm = (x, y, s, c, flip) => {
    let g = `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><path d="M0 0 C 6 -120 -4 -260 10 -380" stroke="${c}" stroke-width="9" fill="none"/>`;
    for (let i = 0; i < 9; i++) {
      const a = -160 + i * 40;
      g += `<path d="M10 -380 q ${Math.cos(a * Math.PI / 180) * 60} ${Math.sin(a * Math.PI / 180) * 60 - 20} ${Math.cos(a * Math.PI / 180) * 130} ${Math.sin(a * Math.PI / 180) * 130 + 30}" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    }
    return g + '</g>';
  };
  const FALLBACK = {
    sky: () => svgWrap('0 0 1080 1920', `
      <defs><linearGradient id="fs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f9dfa0"/><stop offset=".45" stop-color="${P.glow}"/><stop offset=".75" stop-color="${P.terra}"/><stop offset="1" stop-color="#5a1e10"/></linearGradient>
      <radialGradient id="fsun"><stop offset="0" stop-color="#fff6d8"/><stop offset=".4" stop-color="#ffe09a" stop-opacity=".8"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs>
      <rect width="1080" height="1920" fill="url(#fs)"/><circle cx="540" cy="1060" r="420" fill="url(#fsun)"/>
      ${palm(120, 1600, 1.25, '#3b3a17')}${palm(980, 1640, 1.15, '#3b3a17', true)}
      ${templeShape(540, 1420, 1.6, '#6e1d12', '#3d140a')}
      <rect y="1560" width="1080" height="360" fill="#3a1608"/>`),
    clock: () => svgWrap('0 0 1080 1920', `
      <defs><radialGradient id="fw" cx=".5" cy=".5" r=".7"><stop offset="0" stop-color="#6a3a1c"/><stop offset="1" stop-color="#2a140a"/></radialGradient></defs>
      <rect width="1080" height="1920" fill="url(#fw)"/>
      <rect x="150" y="380" width="840" height="1240" rx="80" fill="${P.wood}" stroke="${P.lo}" stroke-width="10"/>
      <circle cx="571" cy="951" r="335" fill="${P.lo}"/><circle cx="571" cy="951" r="315" fill="${P.ivory}"/>
      ${Array.from({ length: 12 }, (_, i) => `<rect x="566" y="666" width="10" height="${i % 3 ? 26 : 46}" fill="${P.wood}" transform="rotate(${i * 30} 571 951)"/>`).join('')}
      ${Array.from({ length: 22 }, (_, i) => { const a = i / 22 * Math.PI * 2; return `<circle cx="${571 + Math.cos(a) * 380}" cy="${951 + Math.sin(a) * 380}" r="16" fill="${P.jas}"/>`; }).join('')}`),
    doorway: () => svgWrap('0 0 1080 1920', `
      <defs><linearGradient id="fd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a2a12"/><stop offset="1" stop-color="#2a1208"/></linearGradient></defs>
      <rect width="1080" height="1920" fill="url(#fd)"/>
      <rect x="180" y="240" width="720" height="1340" fill="${P.wood}" stroke="${P.lo}" stroke-width="8"/>
      <rect x="262" y="348" width="550" height="1127" fill="${P.ivory}"/>
      <rect x="276" y="362" width="522" height="1099" fill="none" stroke="${P.gold}" stroke-width="3"/>
      <rect y="1600" width="1080" height="320" fill="#3b1a0c"/>`),
    mandapam: () => svgWrap('0 0 1080 1920', `
      <defs><linearGradient id="fm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6c873"/><stop offset="1" stop-color="#7a2a14"/></linearGradient></defs>
      <rect width="1080" height="1920" fill="url(#fm)"/>${templeShape(540, 1180, 1.1, '#7a2414', '#4a1a0c')}
      <rect x="120" y="400" width="840" height="120" fill="${P.red}"/><rect x="120" y="500" width="840" height="16" fill="${P.gold}"/>
      <rect x="150" y="510" width="40" height="1000" fill="${P.wood}"/><rect x="890" y="510" width="40" height="1000" fill="${P.wood}"/>
      ${Array.from({ length: 14 }, (_, i) => `<circle cx="${190 + i * 54}" cy="${560 + Math.sin(i / 13 * Math.PI) * 120}" r="20" fill="${P.jas}"/>`).join('')}
      <rect x="160" y="1500" width="760" height="80" fill="${P.red}"/><rect y="1580" width="1080" height="340" fill="#4a1a0c"/>`),
    portrait: () => svgWrap('0 0 1080 1920', `
      <defs><radialGradient id="fp" cx=".5" cy=".38" r=".75"><stop offset="0" stop-color="#ffe3a8"/><stop offset=".55" stop-color="${P.glow}"/><stop offset="1" stop-color="#7a2a14"/></radialGradient></defs>
      <rect width="1080" height="1920" fill="url(#fp)"/>
      <g fill="none" stroke="${P.lo}" stroke-width="10" opacity=".85" transform="translate(540 900)">
        <path d="M0 -260c90 110 90 250 0 360-90-110-90-250 0-360z"/><path d="M0 100c-60-150-190-230-330-230 20 150 140 250 330 230z"/><path d="M0 100c60-150 190-230 330-230-20 150-140 250-330 230z"/></g>`),
    steps: () => svgWrap('0 0 1080 1920', `
      <defs><linearGradient id="ft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbd893"/><stop offset=".5" stop-color="${P.glow}"/><stop offset="1" stop-color="#4a1c0c"/></linearGradient></defs>
      <rect width="1080" height="1920" fill="url(#ft)"/>
      ${Array.from({ length: 10 }, (_, i) => `<rect x="${200 - i * 22}" y="${960 + i * 96}" width="${680 + i * 44}" height="96" fill="${i % 2 ? '#5a2410' : '#4a1c0c'}"/>` +
        Array.from({ length: 6 }, (_, k) => `<circle cx="${230 - i * 22 + k * (620 + i * 44) / 5}" cy="${958 + i * 96}" r="9" fill="#ffd27a"/>`).join('')).join('')}`),
    night: () => svgWrap('0 0 1080 1920', `
      <defs><linearGradient id="fn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1430"/><stop offset=".6" stop-color="#1c2550"/><stop offset="1" stop-color="#2a1208"/></linearGradient></defs>
      <rect width="1080" height="1920" fill="url(#fn)"/>
      ${Array.from({ length: 40 }, () => `<circle cx="${rand(0, 1080) | 0}" cy="${rand(0, 800) | 0}" r="${rand(1, 3).toFixed(1)}" fill="#fff" opacity="${rand(.3, .9).toFixed(2)}"/>`).join('')}
      ${templeShape(540, 1300, 1.5, '#3a1610', '#24100a')}
      ${Array.from({ length: 30 }, (_, i) => `<circle cx="${140 + i * 27}" cy="${1395}" r="7" fill="#ffb54a"/>`).join('')}
      <rect y="1440" width="1080" height="480" fill="#1e0c06"/>`)
  };
  const CUT_FALLBACK = {
    bell: () => svgWrap('0 0 100 231', `<path d="M50 0v70" stroke="${P.lo}" stroke-width="5"/><path d="M20 160c0-50 10-80 30-86 20 6 30 36 30 86h10v10H10v-10z" fill="${P.gold}" stroke="${P.lo}" stroke-width="3"/><circle cx="50" cy="186" r="10" fill="${P.lo}"/>`, 'xMidYMin meet'),
    'garland-swag': () => svgWrap('0 0 1200 624', Array.from({ length: 30 }, (_, i) => { const t = i / 29; const x = 40 + t * 1120, y = 40 + Math.sin(t * Math.PI) * 520; return `<circle cx="${x}" cy="${y}" r="${i % 5 === 2 ? 34 : 26}" fill="${i % 5 === 2 ? P.red : P.jas}"/>`; }).join(''), 'xMidYMin meet'),
    'garland-strand': () => svgWrap('0 0 88 1000', Array.from({ length: 30 }, (_, i) => `<circle cx="44" cy="${18 + i * 31}" r="20" fill="${P.jas}"/>`).join('') + `<circle cx="44" cy="960" r="34" fill="${P.red}"/>`, 'xMidYMin meet'),
    pillar: () => svgWrap('0 0 196 1300', `<rect x="40" y="0" width="116" height="1300" fill="${P.wood}"/>` + Array.from({ length: 9 }, (_, i) => `<rect x="34" y="${80 + i * 140}" width="128" height="16" fill="${P.gold}"/>`).join('') + `<rect x="20" y="0" width="156" height="60" fill="${P.wood}"/><rect x="20" y="1240" width="156" height="60" fill="${P.wood}"/>`, 'xMidYMid meet'),
    'roof-crest': () => svgWrap('0 0 1100 562', `<path d="M0 520 L550 120 L1100 520 Z" fill="${P.terra}"/><path d="M180 520 L550 250 L920 520 Z" fill="${P.wood}"/><rect x="0" y="510" width="1100" height="20" fill="${P.gold}"/><path d="M550 20 l-18 100 h36z" fill="${P.gold}"/>`, 'xMidYMid meet'),
    nilavilakku: () => svgWrap('0 0 270 1000', `<g fill="${P.gold}" stroke="${P.lo}" stroke-width="4"><path d="M135 20 l-14 120 h28z"/><ellipse cx="135" cy="250" rx="125" ry="22"/><rect x="118" y="260" width="34" height="600"/><ellipse cx="135" cy="520" rx="44" ry="18"/><ellipse cx="135" cy="700" rx="52" ry="18"/><path d="M40 990 Q135 860 230 990 Z"/></g>`, 'xMidYMid meet'),
    'palm-leaves': () => svgWrap('0 0 640 640', palm(80, 640, 1.2, P.leaf).replace('translate(80 640)', 'translate(60 700) rotate(35)'), 'xMidYMid meet'),
    'couple-cutout': () => svgWrap('0 0 700 1000', `<g fill="none" stroke="${P.hi}" stroke-width="10"><path d="M350 260c110 130 110 300 0 430-110-130-110-300 0-430z"/><path d="M350 690c-70-180-230-280-330-280 24 180 170 300 330 280z"/><path d="M350 690c70-180 230-280 330-280-24 180-170 300-330 280z"/></g>`, 'xMidYMid meet'),
    'jasmine-flower': () => svgWrap('0 0 128 128', Array.from({ length: 5 }, (_, i) => `<ellipse cx="64" cy="34" rx="16" ry="30" fill="${P.jas}" transform="rotate(${i * 72} 64 64)"/>`).join('') + `<circle cx="64" cy="64" r="7" fill="#f2c94c"/>`, 'xMidYMid meet'),
    'rose-petal': () => svgWrap('0 0 128 128', `<path d="M64 10c40 10 56 50 40 86-12 22-48 28-70 10C10 86 16 30 64 10z" fill="${P.red}"/>`, 'xMidYMid meet'),
    icon: () => svgWrap('0 0 100 100', `<g fill="none" stroke="${P.lo}" stroke-width="3"><path d="M50 18c12 14 12 32 0 46-12-14-12-32 0-46z"/><path d="M50 64c-8-18-24-28-40-28 3 18 18 30 40 28z"/><path d="M50 64c8-18 24-28 40-28-3 18-18 30-40 28z"/><path d="M22 80h56"/></g>`, 'xMidYMid meet')
  };
  const dataURL = svg => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

  /* ---------- media loaders ---------- */
  function sceneMedia(key) {
    const m = el('div', 'media');
    m.dataset.key = key;
    return m;
  }
  function loadMedia(m) {
    if (m.dataset.loaded) return;
    m.dataset.loaded = '1';
    const key = m.dataset.key, a = C.assets.scenes[key] || { fallback: 'sky' };
    const fallback = () => {
      m.classList.add('fallback');
      const img = new Image();
      img.alt = '';
      img.src = dataURL((FALLBACK[a.fallback] || FALLBACK.sky)());
      m.prepend(img);
    };
    const tryImg = list => {
      if (!list.length) return fallback();
      const img = new Image();
      img.alt = '';
      img.decoding = 'async';
      // decode off-screen first, so showing a big image never stalls a scroll frame
      img.onload = () => {
        const show = () => { m.prepend(img); m.classList.add('ok'); };
        img.decode ? img.decode().then(show, show) : show();
      };
      img.onerror = () => tryImg(list.slice(1));
      img.src = list[0];
    };
    const imgs = [asset(key, 'webp'), asset(key, 'jpg')];
    if (a.video && MOTION) {
      const v = doc.createElement('video');
      v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
      v.setAttribute('playsinline', ''); v.setAttribute('muted', '');
      v.poster = asset(key, 'jpg');
      v.addEventListener('loadeddata', () => { m.prepend(v); v.play().catch(() => {}); m.classList.add('ok'); }, { once: true });
      v.addEventListener('error', () => tryImg(imgs), { once: true });
      v.src = a.video;
    } else tryImg(imgs);
  }
  function cut(key, cls = '', alt = '') {
    const img = new Image();
    img.className = 'cut ' + cls;
    img.alt = alt;
    if (!alt) img.setAttribute('aria-hidden', 'true');
    img.decoding = 'async';
    img.draggable = false;
    img.dataset.src = asset(key, 'webp');
    img.dataset.key = key;
    return img;
  }
  function loadCut(img) {
    if (img.dataset.loaded) return;
    img.dataset.loaded = '1';
    img.onerror = () => {
      img.onerror = null;
      img.classList.add('fallback');
      const f = CUT_FALLBACK[img.dataset.key] || CUT_FALLBACK.icon;
      img.src = dataURL(f());
    };
    img.src = img.dataset.src;
  }
  function loadAllIn(node) {
    $$('.media', node).forEach(loadMedia);
    $$('img.cut', node).forEach(loadCut);
  }

  /* ---------- SVG ornaments ---------- */
  function archPath(spring = 0.3, lobes = 6, depth = 0.016) {
    const pts = [];
    for (let k = 0; k <= lobes; k++) {
      const th = (k / lobes) * Math.PI / 2;
      pts.push([0.5 * Math.pow(1 - Math.cos(th), 0.86), spring * (1 - Math.sin(th))]);
    }
    const right = pts.slice().reverse().map(([x, y]) => [1 - x, y]);
    const all = pts.concat(right.slice(1));
    let d = `M0 1 L0 ${spring.toFixed(4)}`;
    for (let i = 1; i < all.length; i++) {
      const [x0, y0] = all[i - 1], [x1, y1] = all[i];
      const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy) || 1;
      const nx = dy / len, ny = -dx / len;
      const cx = (x0 + x1) / 2 + nx * depth * 2, cy = (y0 + y1) / 2 + ny * depth * 2;
      d += ` Q${cx.toFixed(4)} ${cy.toFixed(4)} ${x1.toFixed(4)} ${y1.toFixed(4)}`;
    }
    return d + ' L1 1 Z';
  }
  const ARCH_D = archPath(0.3, 6, 0.016);
  const ARCH_CARD_D = archPath(0.2, 5, 0.014);
  function defsSVG() {
    const s = el('div');
    s.innerHTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <clipPath id="archClip" clipPathUnits="objectBoundingBox"><path d="${ARCH_D}"/></clipPath>
      <clipPath id="archClipCard" clipPathUnits="objectBoundingBox"><path d="${ARCH_CARD_D}"/></clipPath>
    </svg>`;
    return s.firstElementChild;
  }
  function archEdge(d, variant = 'gold') {
    const g = `eg${++uid}`;
    const strokes = variant === 'red'
      ? `<path d="${d}" fill="none" stroke="${P.red}" stroke-width="22" vector-effect="non-scaling-stroke"/>
         <path d="${d}" fill="none" stroke="url(#${g})" stroke-width="3" vector-effect="non-scaling-stroke"/>`
      : `<path d="${d}" fill="none" stroke="${P.lo}" stroke-width="6" vector-effect="non-scaling-stroke"/>
         <path d="${d}" fill="none" stroke="url(#${g})" stroke-width="2.4" vector-effect="non-scaling-stroke"/>`;
    return `<svg class="edge" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${P.hi}"/><stop offset=".5" stop-color="${P.gold}"/><stop offset="1" stop-color="${P.hi}"/></linearGradient></defs>${strokes}</svg>`;
  }
  function arch(cls, inner, variant, d = ARCH_D, clipId = 'archClip') {
    const a = el('div', 'arch ' + cls);
    const clip = el('div', 'clip');
    clip.style.clipPath = `url(#${clipId})`;
    clip.style.webkitClipPath = `url(#${clipId})`;
    if (inner) clip.append(inner);
    a.append(clip);
    a.insertAdjacentHTML('beforeend', archEdge(d, variant));
    return a;
  }
  function monogram(cls = '') {
    const g = `mg${++uid}`;
    const [a, b] = [C.couple.bride.first[0], C.couple.groom.first[0]];
    return `<svg class="${cls}" viewBox="0 0 120 120" role="img" aria-label="${esc(a)} and ${esc(b)} monogram">
      <defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.hi}"/><stop offset=".55" stop-color="${P.gold}"/><stop offset="1" stop-color="${P.lo}"/></linearGradient></defs>
      <circle cx="60" cy="60" r="56" fill="rgba(90,20,10,.35)" stroke="url(#${g})" stroke-width="1.6"/>
      <circle cx="60" cy="60" r="51" fill="none" stroke="url(#${g})" stroke-width=".7" stroke-dasharray="2 3"/>
      <g fill="none" stroke="url(#${g})" stroke-width="2" stroke-linejoin="round">
        <path d="M60 18c8 9 8 22 0 32-8-10-8-23 0-32z"/><path d="M60 50c-5-11-15-18-27-18 2 12 12 20 27 18z"/><path d="M60 50c5-11 15-18 27-18-2 12-12 20-27 18z"/></g>
      <text x="60" y="86" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="24" font-weight="600" letter-spacing="2" fill="url(#${g})">${esc(a)} &amp; ${esc(b)}</text>
    </svg>`;
  }
  const ORNAMENT = `<svg class="ornament" viewBox="0 0 120 14" aria-hidden="true"><g fill="none" stroke="${P.gold}" stroke-width="1"><path d="M0 7h44M76 7h44"/><path d="M60 1l6 6-6 6-6-6z" fill="${P.gold}"/><circle cx="48" cy="7" r="2"/><circle cx="72" cy="7" r="2"/></g></svg>`;
  const ICONS = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"/></svg>'
  };

  /* Script text that draws itself (stroke, then fill), sized to never clip. */
  function scriptSVG(text, cls, { fill = P.jas, stroke = P.hi, size = 120 } = {}) {
    const id = `sm${++uid}`;
    const wrap = el('div');
    wrap.innerHTML = `<svg class="${cls}" viewBox="0 0 800 220" role="img" aria-label="${esc(text)}">
      <defs><linearGradient id="${id}g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="300" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient>
      <mask id="${id}" maskUnits="userSpaceOnUse" x="-30000" y="-3000" width="60000" height="6000"><rect class="sweep" x="-20000" y="-3000" width="20300" height="6000" fill="url(#${id}g)" transform="translate(-400 0)"/></mask></defs>
      <g mask="url(#${id})">
        <text class="st" x="400" y="150" text-anchor="middle" font-family="Great Vibes, cursive" font-size="${size}" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-dasharray="900" stroke-dashoffset="900">${esc(text)}</text>
        <text class="sf" x="400" y="150" text-anchor="middle" font-family="Great Vibes, cursive" font-size="${size}" fill="${fill}" opacity="0">${esc(text)}</text>
      </g></svg>`;
    return wrap.firstElementChild;
  }
  function fitScriptSVG(svg) {
    const t = $('.sf', svg);
    try {
      const b = t.getBBox();
      if (b.width > 0) {
        const px = b.height * 0.18;
        svg.setAttribute('viewBox', `${(b.x - px).toFixed(1)} ${(b.y - px * .6).toFixed(1)} ${(b.width + px * 2).toFixed(1)} ${(b.height + px * 1.2).toFixed(1)}`);
        svg.dataset.bx = b.x; svg.dataset.bw = b.width;
        setScriptProgress(svg, +(svg.dataset.p || 0));
      }
    } catch (e) { /* not rendered yet */ }
  }
  // drawing state 0..1
  function setScriptProgress(svg, p) {
    const st = $('.st', svg), sf = $('.sf', svg), sw = $('.sweep', svg);
    const bx = +svg.dataset.bx || 0, bw = +svg.dataset.bw || 800;
    svg.dataset.p = p;
    sw.setAttribute('transform', `translate(${(bx - 300 + clamp(p * 1.15, 0, 1) * (bw + 330)).toFixed(1)} 0)`);
    st.setAttribute('stroke-dashoffset', String(900 * (1 - clamp(p * 1.2, 0, 1))));
    sf.setAttribute('opacity', String(clamp((p - 0.45) / 0.45, 0, 1)));
    st.setAttribute('opacity', String(1 - clamp((p - 0.8) / 0.2, 0, 0.75)));
  }

  /* cover-fit geometry: where a point of a 1080×1920 image lands inside a box */
  function cover(boxW, boxH, iw = 1080, ih = 1920) {
    const s = Math.max(boxW / iw, boxH / ih);
    const w = iw * s, h = ih * s;
    return { s, w, h, x: (boxW - w) / 2, y: (boxH - h) / 2 };
  }

  /* =====================================================================
     AUDIO: optional MP3, otherwise a generated tanpura drone with
     veena-like plucks in Mohanam, through a soft generated reverb.
     ===================================================================== */
  const Sound = {
    ctx: null, master: null, bus: null, on: false, timer: null, el: null,
    ensure() {
      if (this.ctx) return true;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      const ctx = this.ctx = new AC();
      this.master = ctx.createGain(); this.master.gain.value = 0;
      this.master.connect(ctx.destination);
      // reverb
      const len = ctx.sampleRate * 3.2, ir = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let c = 0; c < 2; c++) {
        const d = ir.getChannelData(c);
        for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
      }
      const verb = ctx.createConvolver(); verb.buffer = ir;
      const wet = ctx.createGain(); wet.gain.value = 0.42;
      const dry = ctx.createGain(); dry.gain.value = 0.75;
      this.bus = ctx.createGain();
      this.bus.connect(dry); dry.connect(this.master);
      this.bus.connect(verb); verb.connect(wet); wet.connect(this.master);
      // rich tanpura-like wave with a buzzing (jivari) upper spectrum
      const n = 24, re = new Float32Array(n), im = new Float32Array(n);
      for (let k = 1; k < n; k++) im[k] = (1 / k) * (k > 6 ? 0.9 + 0.5 * Math.sin(k) : 1);
      this.tanWave = ctx.createPeriodicWave(re, im);
      const re2 = new Float32Array(8), im2 = new Float32Array(8);
      [0, 1, .45, .28, .12, .08, .04, .02].forEach((v, k) => { im2[k] = v; });
      this.veenaWave = ctx.createPeriodicWave(re2, im2);
      return true;
    },
    useFile() { return !!(C.music.src); },
    start() {
      if (!this.ensure()) return;
      const ctx = this.ctx;
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime, vol = C.music.volume ?? 0.25;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setValueAtTime(this.master.gain.value, now);
      this.master.gain.linearRampToValueAtTime(vol, now + (C.music.fadeIn ?? 3));
      this.on = true;
      if (this.useFile()) {
        if (!this.el) {
          this.el = new Audio(C.music.src);
          this.el.loop = true; this.el.crossOrigin = 'anonymous';
          ctx.createMediaElementSource(this.el).connect(this.master);
          this.el.addEventListener('error', () => { C.music.src = ''; this.el = null; this.startGenerated(); }, { once: true });
        }
        this.el.play().catch(() => {});
      } else this.startGenerated();
    },
    startGenerated() {
      if (this.timer) return;
      const ctx = this.ctx;
      this.next = ctx.currentTime + 0.1; this.tanStep = 0; this.melT = ctx.currentTime + 1.6; this.deg = 0;
      const tick = () => {
        const ahead = ctx.currentTime + 0.7;
        while (this.next < ahead) { this.tanpura(this.next); this.next += 1.18; }
        while (this.melT < ahead) { this.melody(); }
      };
      tick();
      this.timer = setInterval(tick, 220);
    },
    stop() {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setValueAtTime(this.master.gain.value, now);
      this.master.gain.linearRampToValueAtTime(0, now + 0.8);
      this.on = false;
      setTimeout(() => {
        if (this.on) return;
        clearInterval(this.timer); this.timer = null;
        if (this.el) this.el.pause();
      }, 900);
    },
    tanpura(t) {
      const SA = 146.83; // D3
      const seq = [SA * 0.75, SA * 2, SA * 2, SA];   // Pa (low), Sa', Sa', Sa
      const f = seq[this.tanStep++ % 4];
      const ctx = this.ctx;
      [-3, 3].forEach(cents => {
        const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
        o.setPeriodicWave(this.tanWave);
        o.frequency.value = f; o.detune.value = cents;
        lp.type = 'lowpass'; lp.frequency.setValueAtTime(2400, t); lp.frequency.exponentialRampToValueAtTime(700, t + 4); lp.Q.value = 1.2;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.06, t + 0.04); g.gain.exponentialRampToValueAtTime(0.0001, t + 4.6);
        o.connect(lp); lp.connect(g); g.connect(this.bus);
        o.start(t); o.stop(t + 4.7);
      });
    },
    melody() {
      const ctx = this.ctx, t = this.melT;
      const SA = 293.66; // D4, Mohanam: S R2 G3 P D2 S'
      const scale = [1, 9 / 8, 5 / 4, 3 / 2, 5 / 3, 2, 9 / 4, 5 / 2];
      this.deg = clamp(this.deg + [-2, -1, -1, 1, 1, 2, 0][(Math.random() * 7) | 0], 0, scale.length - 1);
      if (Math.random() < 0.22) { this.melT += rand(1.4, 2.4); return; }
      const f = SA * scale[this.deg];
      const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
      o.setPeriodicWave(this.veenaWave);
      if (Math.random() < 0.35) { o.frequency.setValueAtTime(f * 0.944, t); o.frequency.exponentialRampToValueAtTime(f, t + 0.12); }
      else o.frequency.setValueAtTime(f, t);
      lp.type = 'lowpass'; lp.frequency.setValueAtTime(3200, t); lp.frequency.exponentialRampToValueAtTime(900, t + 1.2);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.085, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
      o.connect(lp); lp.connect(g); g.connect(this.bus);
      o.start(t); o.stop(t + 2.5);
      this.melT += [0.6, 0.6, 0.9, 1.2, 0.45][(Math.random() * 5) | 0];
    },
    chime() {
      if (!this.on || !this.ctx) return;
      const ctx = this.ctx, t = ctx.currentTime + 0.01, base = rand(1250, 1500);
      [1, 2.76, 5.4, 8.93].forEach((m, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = base * m;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.022 / (i + 1), t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6 / (i + 1));
        o.connect(g); g.connect(this.bus); o.start(t); o.stop(t + 1.7);
      });
    }
  };
  doc.addEventListener('visibilitychange', () => {
    if (!Sound.ctx) return;
    if (doc.hidden) Sound.ctx.suspend(); else if (Sound.on) Sound.ctx.resume();
  });

  /* =====================================================================
     PETALS (canvas): jasmine and rose petals with wind and 3D tumble.
     ===================================================================== */
  const sprites = [];
  function loadSprites() {
    if (sprites.length) return;
    ['jasmine-flower', 'rose-petal', 'jasmine-flower'].forEach(k => {
      const im = new Image();
      im.onerror = () => { im.onerror = null; im.src = dataURL(CUT_FALLBACK[k]()); };
      im.src = asset(k, 'webp');
      sprites.push(im);
    });
  }
  class Petals {
    constructor(canvas, count) {
      this.c = canvas; this.ctx = canvas.getContext('2d'); this.count = count; this.list = []; this.running = false; this.t = 0; this.burst = 0;
      this.resize();
    }
    resize() {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      const r = this.c.getBoundingClientRect();
      this.w = r.width || 400; this.h = r.height || 800;
      this.c.width = Math.round(this.w * dpr); this.c.height = Math.round(this.h * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    spawn(top) {
      const big = Math.random() < 0.3;
      return {
        x: rand(-20, this.w + 20), y: top ? rand(-this.h, -10) : rand(-40, this.h),
        vy: rand(26, 58), vx: rand(-10, 14), s: big ? rand(16, 22) : rand(9, 15),
        r: rand(0, 6.28), vr: rand(-1.2, 1.2), f: rand(0, 6.28), vf: rand(1.2, 2.8), sp: (Math.random() * sprites.length) | 0,
        sw: rand(0.6, 1.6), ph: rand(0, 6.28)
      };
    }
    start() { if (!this.list.length) for (let i = 0; i < this.count; i++) this.list.push(this.spawn(false)); this.running = true; }
    stop() { this.running = false; this.ctx.clearRect(0, 0, this.w, this.h); }
    shower(n) { for (let i = 0; i < n; i++) { const p = this.spawn(true); p.y = rand(-this.h * 0.6, -10); p.vy *= 1.3; this.list.push(p); } this.burst = n; }
    step(dt) {
      if (!this.running) return;
      this.t += dt;
      const ctx = this.ctx, wind = Math.sin(this.t * 0.35) * 18 + Math.sin(this.t * 0.9) * 6;
      ctx.clearRect(0, 0, this.w, this.h);
      for (let i = this.list.length - 1; i >= 0; i--) {
        const p = this.list[i];
        p.y += p.vy * dt; p.x += (p.vx + wind * p.sw + Math.sin(this.t * 1.3 + p.ph) * 12) * dt;
        p.r += p.vr * dt; p.f += p.vf * dt;
        if (p.y > this.h + 30) {
          if (this.list.length > this.count) { this.list.splice(i, 1); continue; }
          Object.assign(p, this.spawn(true), { y: -20 });
        }
        const im = sprites[p.sp];
        if (!im || !im.complete || !im.naturalWidth) continue;
        const flip = Math.cos(p.f);
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.scale(Math.abs(flip) < 0.12 ? 0.12 * Math.sign(flip || 1) : flip, 1);
        ctx.globalAlpha = 0.95;
        ctx.drawImage(im, -p.s / 2, -p.s / 2, p.s, p.s);
        ctx.restore();
      }
    }
  }

  /* =====================================================================
     BUILD THE PAGE FROM CONFIG
     ===================================================================== */
  const stage = $('#stage');
  stage.append(defsSVG());
  const B = C.couple.bride, G = C.couple.groom;
  const scenes = [];

  function scene(id, label, a, bgKey) {
    const s = el('section', `scene s-${id}`);
    s.id = id; s.dataset.a = a;
    s.setAttribute('aria-label', label);
    const frame = el('div', 'frame'), cam = el('div', 'cam'), inner = el('div', 'inner'), dim = el('div', 'dim');
    cam.append(inner);
    frame.append(cam, dim);
    s.append(frame);
    stage.append(s);
    const o = { id, el: s, frame, cam, inner, dim, a, label, backdrop: C.backdrops[id] || bgKey };
    scenes.push(o);
    return o;
  }
  function bgLayer(key, kbCls = '') {
    const bg = el('div', 'bg'), kb = el('div', 'kb ' + kbCls);
    kb.append(sceneMedia(key));
    bg.append(kb);
    return { bg, kb };
  }
  const rays = (n = 5) => {
    const r = el('div', 'rays');
    for (let i = 0; i < n; i++) {
      const ray = el('i');
      ray.style.cssText = `--x:${10 + i * 18 + rand(-4, 4)}%;--w:${rand(8, 16)}%;--r:${rand(-24, -8)}deg;--d:${rand(6, 11).toFixed(1)}s`;
      r.append(ray);
    }
    return r;
  };
  const dust = (n = 14) => {
    const d = el('div', 'dust');
    for (let i = 0; i < n; i++) {
      const m = el('i');
      m.style.cssText = `--x:${rand(0, 100)}%;--y:${rand(10, 90)}%;--s:${rand(2, 5).toFixed(1)}px;--d:${rand(6, 12).toFixed(1)}s;--dl:${-rand(0, 10).toFixed(1)}s;--dx:${rand(-30, 30) | 0}px;--dy:${rand(-40, 10) | 0}px`;
      d.append(m);
    }
    return d;
  };
  const reveal = (node) => { node.classList.add('reveal'); return node; };

  /* ---------- Opener ---------- */
  const opener = el('div', 'opener live');
  opener.setAttribute('role', 'dialog');
  opener.setAttribute('aria-label', 'Invitation cover');
  const push = el('div', 'push'), okb = el('div', 'kb slow');
  okb.style.setProperty('--kbo', `${C.layout.clock.cx * 100}% ${C.layout.clock.cy * 100}%`);
  const clockMedia = sceneMedia('clock-bg');
  const hands = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
  hands.setAttribute('class', 'hands');
  hands.setAttribute('viewBox', '-100 -100 200 200');
  hands.setAttribute('aria-hidden', 'true');
  const handG = `hg${++uid}`;
  hands.innerHTML = `
    <defs><linearGradient id="${handG}" x1="0" x2="1"><stop offset="0" stop-color="#2a170c"/><stop offset=".5" stop-color="#5b3a1e"/><stop offset="1" stop-color="#2a170c"/></linearGradient>
    <filter id="${handG}s" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="1.2" dy="1.8" stdDeviation="1.2" flood-color="#000" flood-opacity=".45"/></filter></defs>
    <g filter="url(#${handG}s)">
      <g class="hour"><path d="M-3.2 10 L-2.6 -22 C-7 -27 -7 -33 0 -38 C 7 -33 7 -27 2.6 -22 L3.2 10 Z" fill="url(#${handG})"/><path d="M0 -36 C-4 -32 -4 -27 0 -24 C4 -27 4 -32 0 -36z" fill="#d4a437" opacity=".9"/></g>
      <g class="minute"><path d="M-2.2 12 L-1.6 -58 C-5 -62 -4.5 -67 0 -72 C 4.5 -67 5 -62 1.6 -58 L2.2 12 Z" fill="url(#${handG})"/><path d="M0 -70 C-3 -66 -3 -62 0 -60 C3 -62 3 -66 0 -70z" fill="#d4a437" opacity=".9"/></g>
      <g class="ghost g1"><path d="M-2.2 12 L-1.6 -58 L0 -72 L1.6 -58 L2.2 12Z" fill="#3a2414"/></g>
      <g class="ghost g2"><path d="M-2.2 12 L-1.6 -58 L0 -72 L1.6 -58 L2.2 12Z" fill="#3a2414"/></g>
      <g class="second"><path d="M-.7 18 L-.45 -80 L.45 -80 L.7 18Z" fill="#a3261e"/><circle cx="0" cy="14" r="3.4" fill="#a3261e"/><circle cx="0" cy="-62" r="2" fill="none" stroke="#a3261e" stroke-width=".9"/></g>
      <circle r="5.2" fill="#b98a26" stroke="#f3dc8e" stroke-width=".8"/><circle r="1.8" fill="#5b3a1e"/>
    </g>`;
  const dialLine = el('div', 'dial-line', C.copy.dial.map(esc).join('<br>'));
  okb.append(clockMedia, hands, dialLine);
  push.append(okb);
  const warm = el('div', 'warm');
  const ocopy = el('div', 'copy');
  if (guest) ocopy.append(el('div', 'dear', esc(C.copy.dear.replace('{guest}', guest))));
  else ocopy.append(el('div', 'dear', ''));
  ocopy.append(el('div', 'worth', esc(C.copy.worth)));
  const tapBtn = el('button', 'tap', esc(C.copy.tap));
  tapBtn.type = 'button';
  opener.append(push, el('div', 'veil-top'), el('div', 'veil-bot'), warm, ocopy, tapBtn);
  $('.veil-top', opener).style.height = '30%';
  $('.veil-bot', opener).style.height = '24%';
  doc.body.append(opener);
  loadMedia(clockMedia);

  /* ---------- HUD ---------- */
  const hud = el('div', 'hud');
  const progress = el('div', 'progress');
  const dotsNav = el('nav', 'dots');
  dotsNav.setAttribute('aria-label', 'Scenes');
  const musicBtn = el('button', 'music', `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v1.6M7 16c0-4.5.6-8.4 5-8.4s5 3.9 5 8.4l1.5 1.5h-13z" fill="#4a2a10" stroke="#4a2a10" stroke-width="1" stroke-linejoin="round"/><circle cx="12" cy="20" r="1.6" fill="#4a2a10"/><path class="wave" d="M19.5 6.5c1 1 1.5 2.2 1.5 3.5M4.5 6.5C3.5 7.5 3 8.7 3 10" fill="none" stroke="#4a2a10" stroke-width="1.4" stroke-linecap="round"/></svg>`);
  musicBtn.type = 'button';
  musicBtn.setAttribute('aria-label', 'Music');
  musicBtn.setAttribute('aria-pressed', 'false');
  hud.append(progress, dotsNav, musicBtn);
  doc.body.append(hud);
  hud.style.visibility = 'hidden';

  /* ---------- Scene 2: temple rises ---------- */
  const sT = scene('temple', 'Gauri and Arjun are getting married', C.holds.temple, 'temple-sky');
  {
    const { bg } = bgLayer('temple-sky');
    const namesLayer = el('div', 'names');
    const nameSvg = scriptSVG(`${B.first} & ${G.first}`, 'name-svg', { fill: P.jas, stroke: P.hi, size: 130 });
    const sub = el('div', 'sub', `${esc(C.copy.married)}<span class="date">${esc(C.copy.dateShort)}</span>`);
    namesLayer.append(nameSvg, sub);
    const palmL = el('div', 'cut-wrap palm-l'); palmL.style.position = 'absolute';
    const pl = el('div', 'palm-sway'); pl.append(cut('palm-leaves', '')); palmL.append(pl);
    $('.cut', pl).style.cssText = 'position:relative;width:100%;height:auto';
    const palmR = el('div', 'cut-wrap palm-r'); palmR.style.position = 'absolute';
    const pr = el('div', 'palm-sway r'); pr.append(cut('palm-leaves', '')); palmR.append(pr);
    $('.cut', pr).style.cssText = 'position:relative;width:100%;height:auto';
    const canvas = el('canvas', 'petals');
    const hint = el('div', 'scroll-hint', `${esc(C.copy.scrollHint)}<i></i>`);
    sT.inner.append(bg, rays(5), el('div', 'veil-top'), namesLayer, dust(16), canvas, palmR, palmL, hint);
    Object.assign(sT, { bg, namesLayer, nameSvg, sub, palmL, palmR, canvas, hint });
  }

  /* ---------- Scene 3: temple doorway (the invitation) ---------- */
  const sD = scene('doorway', 'The invitation', C.holds.doorway, 'temple-doorway-bg');
  {
    const bg = el('div', 'bg'), kb = el('div', 'kb soft slow');
    kb.append(sceneMedia('temple-doorway-bg'));
    const panel = el('div', 'panel');
    const pin = el('div', 'panel-in');
    const invitesSvg = scriptSVG(C.copy.invites, 'invites', { fill: P.red, stroke: P.lo, size: 140 });
    pin.innerHTML = `
      <div class="ln bless"><div class="bless-ml ml" lang="ml">${esc(C.blessing.ml)}</div><div class="bless-en">${esc(C.blessing.en)}</div></div>
      <div class="ln orn">${ORNAMENT}</div>
      <div class="ln cordially">${esc(C.copy.cordially)}</div>`;
    const invWrap = el('div', 'ln inv'); invWrap.append(invitesSvg); pin.append(invWrap);
    pin.insertAdjacentHTML('beforeend', `
      <p class="ln copy">${esc(C.copy.invitation)}</p>
      <div class="ln parents">${esc(B.parents)}<span class="place">${esc(B.place)}</span><span class="amp">&amp;</span>${esc(G.parents)}<span class="place">${esc(G.place)}</span></div>
      <div class="ln names-gold"><div class="gname foil g1">${esc(B.first)}</div><span class="gamp">&amp;</span><div class="gname foil g2">${esc(G.first)}</div></div>`);
    panel.append(pin);
    // the text panel sits beside (not inside) the zooming layer, so the text is never re-drawn per frame
    bg.append(kb, panel);
    const deco = el('div', 'deco'); deco.style.cssText = 'position:absolute;inset:0;pointer-events:none';
    const pL = cut('pillar', 'pillar l'), pR = cut('pillar', 'pillar r');
    const crest = cut('roof-crest', 'crest');
    const swagBack = el('div', 'swag-wrap'), swagFront = el('div', 'swag-wrap');
    swagBack.append(cut('garland-swag', '')); swagFront.append(cut('garland-swag', ''));
    swagBack.style.animationDelay = '-2.5s';
    [swagBack, swagFront].forEach(w => { $('.cut', w).style.cssText = 'position:relative;width:100%;height:auto'; });
    const strands = [0, 1, 2, 3].map(i => {
      const s = el('div', 'sway');
      s.style.setProperty('--d', `${rand(4.2, 6.4).toFixed(1)}s`);
      s.style.setProperty('--dl', `${-rand(0, 5).toFixed(1)}s`);
      s.style.setProperty('--a', `${rand(1.2, 2.4).toFixed(1)}deg`);
      const c = cut('garland-strand', ''); c.style.cssText = 'position:relative;width:100%;height:auto';
      s.append(c);
      return s;
    });
    const bells = [0, 1, 2, 3].map(() => {
      const b = el('div', 'bell'); b.append(cut('bell', '')); return b;
    });
    deco.append(pL, pR, ...strands, crest, swagBack, swagFront, ...bells);
    sD.inner.append(bg, deco);
    Object.assign(sD, { bg, kb, panel, pin, invitesSvg, pL, pR, crest, swagBack, swagFront, strands, bells });
  }

  /* ---------- Scene 4: mandapam ---------- */
  const sM = scene('mandapam', 'The mandapam', C.holds.mandapam, 'mandapam');
  {
    const { bg } = bgLayer('mandapam');
    const cap = el('div', 'caption', `<div class="script">${esc(C.copy.caption)}</div><div class="caps">${esc(C.copy.captionSub)}</div>`);
    sM.inner.append(bg, rays(4), el('div', 'veil-bot'), dust(10), cap);
    Object.assign(sM, { bg, cap });
  }

  /* ---------- Scene 5: the bride & the groom ---------- */
  const sC = scene('couple', 'The bride and the groom', C.holds.couple, 'bride');
  {
    const page = el('div', 'bg page-ivory');
    const head = el('div', 'heading', `<div class="caps">${esc(C.copy.coupleTitle)}</div>${ORNAMENT}`);
    const mk = (who, key, p) => {
      const m = el('div', 'kb soft'); m.append(sceneMedia(key));
      const a = arch(`portrait ${who}`, m, 'gold');
      const strandL = el('div', 'sway'); strandL.style.cssText += 'left:-4%;top:6%;width:8%;--d:5s;--a:1.6deg';
      const strandR = el('div', 'sway'); strandR.style.cssText += 'right:-4%;top:6%;width:8%;--d:5.6s;--dl:-2s;--a:1.6deg';
      [strandL, strandR].forEach(s => { const c = cut('garland-strand', ''); c.style.cssText = 'position:relative;width:100%;height:auto'; s.append(c); });
      a.append(strandL, strandR);
      const info = el('div', `who ${who}`, `<span class="script">${esc(p.full)}</span><div class="rel">${esc(p.relation)}<b>${esc(p.parents)}</b>${esc(p.place)}</div>`);
      return { a, info };
    };
    const bride = mk('bride', 'bride', B), groom = mk('groom', 'groom', G);
    const lamp = el('div', 'lamp');
    const glow = el('div', 'lamp-glow');
    const lampImg = cut('nilavilakku', '', 'Brass nilavilakku lamp');
    const flames = el('div', 'flames');
    C.layout.lampFlames.xs.forEach((x, i) => {
      const f = el('span', 'flame');
      f.style.cssText = `left:${x * 100}%;top:${C.layout.lampFlames.y * 100}%;--d:${rand(1.1, 1.8).toFixed(2)}s;--dl:${-rand(0, 1).toFixed(2)}s`;
      flames.append(f);
    });
    lamp.append(glow, lampImg, flames);
    sC.inner.append(page, el('div', 'band top'), head, bride.a, groom.a, bride.info, groom.info, lamp, el('div', 'band bot'));
    Object.assign(sC, { head, bride, groom, lamp });
  }

  /* ---------- Scene 6: our story ---------- */
  const sS = scene('story', 'Our story', C.holds.story, 'temple-base');
  {
    const page = el('div', 'bg page-ivory');
    const inside = el('div');
    inside.style.cssText = 'position:absolute;inset:0';
    const base = el('div', 'base'); const bkb = el('div', 'kb soft'); bkb.append(sceneMedia('temple-base')); base.append(bkb);
    inside.append(base);
    const big = arch('big-arch', inside, 'red');
    const title = el('div', 'story-title');
    const tSvg = scriptSVG(C.copy.storyTitle, 'story-svg', { fill: P.red, stroke: P.lo, size: 130 });
    title.append(tSvg);
    const text = el('p', 'story-text');
    text.innerHTML = C.copy.story.split(/\s+/).map(w => `<span>${esc(w)}</span>`).join(' ');
    big.append(title, text);
    const swag = el('div', 'swag-wrap'); swag.style.cssText += 'left:16%;right:16%;top:-2.5%';
    const sw = cut('garland-swag', ''); sw.style.cssText = 'position:relative;width:100%;height:auto'; swag.append(sw);
    const strands = el('div', 'strands');
    [[-1.5, 18], [95.5, 18]].forEach(([x, top], i) => {
      const s = el('div', 'sway'); s.style.cssText += `left:${x}%;top:${top}%;width:6%;--d:${5 + i}s;--dl:${-i * 2}s;--a:1.4deg`;
      const c = cut('garland-strand', ''); c.style.cssText = 'position:relative;width:100%;height:auto'; s.append(c); strands.append(s);
    });
    big.append(strands, swag);
    sS.inner.append(page, big);
    Object.assign(sS, { big, tSvg, text, base, words: $$('span', text) });
  }

  /* ---------- Scene 7: countdown ---------- */
  const sK = scene('count', 'Countdown to the Muhurtham', C.holds.count, 'temple-sky');
  {
    const page = el('div', 'bg page-red');
    const swag = el('div', 'swag-wrap'); swag.style.cssText += 'left:-4%;right:-4%;top:-6%';
    const sw = cut('garland-swag', ''); sw.style.cssText = 'position:relative;width:100%;height:auto'; swag.append(sw);
    const wrap = el('div', 'wrap');
    const unit = (lbl, n) => `<div class="tile reveal"><div class="num" data-n="${n}">${Array.from({ length: n }, () => `<span class="odo"><span class="strip">${'0123456789'.split('').map(d => `<span>${d}</span>`).join('')}</span></span>`).join('')}</div><div class="lbl">${lbl}</div></div>`;
    wrap.innerHTML = `
      <div class="reveal"><div class="sub until">${esc(C.copy.countTitle)}</div></div>
      <div class="title script reveal until">${esc(B.first)} &amp; ${esc(G.first)}</div>
      <div class="tiles" role="timer" aria-live="off">${unit('Days', 3)}${unit('Hours', 2)}${unit('Minutes', 2)}${unit('Seconds', 2)}</div>
      <div class="married script">${esc(C.copy.married2)}</div>
      <div class="kasavu reveal"></div>
      <div class="when reveal">${esc(C.copy.countWhen)}</div>`;
    const lampL = cut('nilavilakku', ''), lampR = cut('nilavilakku', '');
    [lampL, lampR].forEach((l, i) => { l.style.cssText = `bottom:3%;${i ? 'right' : 'left'}:4%;height:24%;width:auto;opacity:.95;filter:drop-shadow(0 0 18px rgba(255,190,90,.35))`; });
    sK.inner.append(page, lampL, lampR, swag, wrap);
    Object.assign(sK, { wrap, nums: $$('.num', wrap) });
  }

  /* ---------- Scene 8: ceremonies ---------- */
  const sE = scene('events', 'The ceremonies', C.holds.events, 'mandapam');
  {
    const page = el('div', 'bg page-ivory');
    const head = el('div', 'heading', `<div class="caps">${esc(C.copy.eventsKicker)}</div><span class="script">${esc(C.copy.eventsTitle)}</span>`);
    const track = el('div', 'track');
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', 'Ceremonies, swipe sideways');
    track.tabIndex = 0;
    C.events.forEach((ev, i) => {
      const card = el('article', 'card');
      card.style.setProperty('--tint', `linear-gradient(170deg, ${ev.tint[0]}, ${ev.tint[1]})`);
      card.setAttribute('aria-label', `${ev.name}, ${ev.date}`);
      const body = el('div', 'body');
      const icon = el('div', 'icon'); icon.append(cut(ev.icon, '', ''));
      body.append(icon);
      body.insertAdjacentHTML('beforeend', `
        <h3>${esc(ev.name)}</h3>${ev.subtitle ? `<div class="when" style="color:var(--jasmine);opacity:.85">${esc(ev.subtitle)}</div>` : ''}
        <div class="when">${esc(ev.date)}<br>${esc(ev.time)}</div>
        <div class="where">${esc(ev.venue)}</div>
        <div class="dress">${esc(ev.note)}</div>
        <div class="btns">
          <a class="btn" href="${esc(ev.maps || C.venue.maps)}" target="_blank" rel="noopener">${ICONS.pin}View location</a>
          <button class="btn gold" type="button" data-ics="${i}">${ICONS.cal}Add to calendar</button>
        </div>`);
      const a = arch('', body, 'gold', ARCH_CARD_D, 'archClipCard');
      $('.clip', a).style.background = 'var(--tint)';
      // body sits on top of the clip so buttons stay clickable
      a.append(body);
      card.append(a);
      track.append(card);
    });
    const cd = el('div', 'cdots');
    C.events.forEach((ev, i) => {
      const b = el('button'); b.type = 'button'; b.setAttribute('aria-label', `Show ${ev.name}`); b.dataset.i = i; cd.append(b);
    });
    sE.inner.append(page, el('div', 'band top'), head, track, cd, el('div', 'swipe-hint', esc(C.copy.swipe)));
    Object.assign(sE, { head, track, cdots: cd, cards: $$('.card', track) });
  }

  /* ---------- Scene 9: venue & RSVP ---------- */
  const sR = scene('rsvp', 'Venue and RSVP', C.holds.rsvp, 'temple-night');
  {
    const { bg } = bgLayer('temple-night');
    const body = el('div', 'rbody');
    body.innerHTML = `
      <div class="caps">${esc(C.copy.venueKicker)}</div>
      <div class="venue script">${esc(C.venue.name)}</div>
      ${C.venue.lines.map(l => `<div class="vline">${esc(l)}</div>`).join('')}
      <a class="btn" style="margin-top:12px;width:100%" href="${esc(C.venue.maps)}" target="_blank" rel="noopener">${ICONS.pin}Get directions</a>
      <div class="by">${esc(C.rsvp.by)}</div>
      <div class="field"><label for="guestName">${esc(C.copy.rsvpLabel)}</label><input id="guestName" name="guest" autocomplete="name" placeholder="${esc(C.copy.rsvpPlaceholder)}" maxlength="60"><div class="hint" aria-live="polite"></div></div>
      <button class="btn gold wa" type="button">${ICONS.wa}${esc(C.copy.rsvpButton)}</button>
      <div class="contacts"><div class="caps">${esc(C.copy.contactsTitle)}</div>
        ${C.contacts.map(c => `<a class="contact" href="tel:${esc(c.phone.replace(/\s+/g, ''))}" aria-label="Call ${esc(c.name)}, ${esc(c.role)}"><span><b>${esc(c.name)}</b><small>${esc(c.role)} · ${esc(c.phone)}</small></span><span class="call">${ICONS.phone}</span></a>`).join('')}
      </div>`;
    const card = arch('rcard', null, 'gold');
    card.append(body);
    sR.inner.append(bg, rays(3), card);
    const input = $('#guestName', body);
    input.value = guest;
    Object.assign(sR, { bg, card, body, input });
  }

  /* ---------- Scene 10: sign-off ---------- */
  const sX = scene('end', 'Your presence is our blessing', C.holds.end, 'temple-night');
  {
    const glow = el('div', 'glow-bg');
    const bokeh = el('div', 'bokeh');
    for (let i = 0; i < 16; i++) {
      const b = el('i');
      b.style.cssText = `--x:${rand(0, 95)}%;--y:${rand(30, 95)}%;--s:${rand(10, 34) | 0}px;--d:${rand(5, 10).toFixed(1)}s;--dl:${-rand(0, 8).toFixed(1)}s`;
      bokeh.append(b);
    }
    const couple = el('div', 'couple'); couple.append(cut('couple-cutout', '', `${B.first} and ${G.first}`));
    const text = el('div', 'text', `${monogram('monogram')}<div class="presence script">${esc(C.copy.presence)}</div><div class="tag">${esc(C.hashtag)}</div>`);
    const canvas = el('canvas', 'petals');
    const foot = el('div', 'footer', esc(C.copy.footer));
    sX.inner.append(glow, bokeh, rays(3), couple, text, canvas, foot);
    Object.assign(sX, { couple, text, canvas });
  }

  /* =====================================================================
     LAYOUT
     ===================================================================== */
  // V  = cover height: the largest viewport (phone address bar hidden). Frames are this tall, so the
  //      screen is always filled and nothing jumps when the bar slides away mid-scroll.
  // VS = visible height: the smallest viewport (bar shown). Text and buttons are laid out inside it.
  // S  = type scale, 1 at a 390×844 phone, so laptop and phone keep the same proportions.
  const probe = el('div');
  probe.style.cssText = 'position:fixed;top:0;left:-10px;width:1px;height:100lvh;visibility:hidden;pointer-events:none';
  doc.body.append(probe);
  let V = innerHeight, VS = innerHeight, F = Math.round(V * 0.09), W = stage.clientWidth, S = 1;
  function measure() {
    probe.style.height = '100lvh';
    const lvh = probe.offsetHeight;
    probe.style.height = '100svh';
    const svh = probe.offsetHeight;
    V = Math.round(Math.max(lvh || 0, innerHeight));
    VS = Math.round(Math.min(svh || innerHeight, innerHeight));
    F = Math.round(V * 0.09);
    W = stage.clientWidth;
    S = clamp(Math.min(W / 390, VS / 844), 0.74, 1.15);
    root.style.setProperty('--V', V + 'px');
    root.style.setProperty('--VS', VS + 'px');
    root.style.setProperty('--F', F + 'px');
    root.style.setProperty('--s', S.toFixed(4));
  }
  // Shrink a box's type (via a local --s) until its content fits, in both directions.
  function fitBox(box, minK = 0.7) {
    box.style.removeProperty('--s');
    let k = 1;
    for (let n = 0; n < 4; n++) {
      const needH = box.scrollHeight, haveH = box.clientHeight, needW = box.scrollWidth, haveW = box.clientWidth;
      if (needH <= haveH + 1 && needW <= haveW + 1) break;
      k = clamp(k * Math.min(haveH / needH, haveW / needW) * 0.985, minK, 1);
      box.style.setProperty('--s', (S * k).toFixed(4));
      if (k === minK) break;
    }
  }
  function fitBoxes() {
    [...$$('.card .body', sE.track), $('.rbody', sR.el), sS.text, sC.bride.info, sC.groom.info, $('.wrap', sK.el), sX.text]
      .filter(Boolean).forEach(b => fitBox(b));
  }
  function sizeSections() {
    if (!MOTION) return;
    const n = scenes.length;
    scenes.forEach((s, i) => {
      const a = s.a * V;
      let H;
      if (i === 0) H = a + 2 * V + F;
      else if (i === n - 1) H = V + F + a + 0.12 * V;
      else H = 2 * V + 2 * F + a;
      s.el.style.height = Math.round(H) + 'px';
      s.el.style.marginTop = i === 0 ? '0px' : Math.round(-(V + F)) + 'px';
      s.el.style.zIndex = String(i + 1);
    });
  }
  const sceneStart = i => scenes[i].el.offsetTop + (i === 0 ? 0 : F);

  function layoutClock() {
    const bw = opener.clientWidth, bh = opener.clientHeight;
    const cv2 = cover(bw, bh), L = C.layout.clock;
    const cx = cv2.x + L.cx * cv2.w, cy = cv2.y + L.cy * cv2.h, R = L.r * cv2.w;
    Object.assign(hands.style, { left: (cx - R) + 'px', top: (cy - R) + 'px', width: 2 * R + 'px', height: 2 * R + 'px' });
    Object.assign(dialLine.style, { left: cx + 'px', top: (cy + R * 0.3) + 'px', fontSize: (R * 0.2).toFixed(1) + 'px' });
    push.style.transformOrigin = `${cx}px ${cy}px`;
    opener.style.setProperty('--cx', (cx / bw * 100).toFixed(1) + '%');
    opener.style.setProperty('--cy', (cy / bh * 100).toFixed(1) + '%');
    Object.assign(opener, { _cx: cx, _cy: cy });
  }

  function layoutDoorway() {
    // the background box reaches up into the feathered edge (F px above the inner box)
    const fw = W, fh = sD.inner.clientHeight, off = sD.bg.offsetTop; // off = -F
    const cvd = cover(fw, sD.bg.clientHeight), Pn = C.layout.doorwayPanel;
    // panel: background-box coordinates (it lives inside the background layer)
    const pL = cvd.x + Pn.x1 * cvd.w, pR = cvd.x + Pn.x2 * cvd.w, pT = cvd.y + Pn.y1 * cvd.h, pB = cvd.y + Pn.y2 * cvd.h;
    // decorations: inner-box coordinates
    const L = pL, R = pR, T = pT + off, Bt = pB + off;
    const A = C.layout.cutoutAspect;
    // pillars hug the panel edges
    const ph = V * 1.02, pw = ph / A.pillar;
    Object.assign(sD.pL.style, { height: ph + 'px', width: pw + 'px', left: (L - 10 - pw) + 'px', top: (-V * 0.01) + 'px' });
    Object.assign(sD.pR.style, { height: ph + 'px', width: pw + 'px', left: (R + 10) + 'px', top: (-V * 0.01) + 'px' });
    // roof crest over the top of the panel
    const cw = Math.min(fw * 0.9, 440), ch = cw * A['roof-crest'];
    const eave = T + Math.min(26, fh * 0.03);
    Object.assign(sD.crest.style, { width: cw + 'px', height: ch + 'px', left: ((fw - cw) / 2) + 'px', top: (eave - ch) + 'px' });
    // garlands hang from the eave
    const sw = fw * 0.62, sh = sw * A['garland-swag'];
    const swTop = eave - sh * 0.5;
    Object.assign(sD.swagFront.style, { width: sw + 'px', left: ((fw - sw) / 2) + 'px', top: swTop + 'px' });
    Object.assign(sD.swagBack.style, { width: (sw * 1.12) + 'px', left: ((fw - sw * 1.12) / 2) + 'px', top: (swTop - 6) + 'px' });
    const dip = swTop + sh;
    const sLen = [fh * 0.5, fh * 0.36, fh * 0.36, fh * 0.5], sX2 = [L - 14 - pw * 0.42, L - 6, R + 6, R + 14 + pw * 0.42];
    sD.strands.forEach((s, i) => {
      const w = sLen[i] / A['garland-strand'];
      Object.assign(s.style, { width: w + 'px', left: (sX2[i] - w / 2) + 'px', top: (eave - 8) + 'px' });
    });
    const bw = [Math.min(46, fw * 0.12), Math.min(36, fw * 0.09), Math.min(36, fw * 0.09), Math.min(46, fw * 0.12)];
    const bx = [Math.max(L * 0.42, bw[0] * 0.7), L + 24, R - 24, fw - Math.max((fw - R) * 0.42, bw[3] * 0.7)];
    sD.bells.forEach((b, i) => {
      Object.assign(b.style, { width: bw[i] + 'px', left: (bx[i] - bw[i] / 2) + 'px', top: (eave - 6 - (i === 0 || i === 3 ? 0 : 4)) + 'px' });
    });
    // text panel
    const padTop = Math.max(dip - T + 8, 40);
    Object.assign(sD.panel.style, { left: pL + 'px', top: pT + 'px', width: (pR - pL) + 'px', height: (pB - pT) + 'px', padding: `${padTop}px 12px 14px` });
    fitPanel();
  }
  function fitPanel() {
    const pin = sD.pin, panel = sD.panel;
    const cs = getComputedStyle(panel);
    const avail = panel.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    let f = 1;
    pin.style.setProperty('--fit', f);
    for (let k = 0; k < 4; k++) { // text re-wraps as it shrinks, so converge in a few steps
      const need = pin.scrollHeight;
      if (Math.abs(need - avail) < 3 && need <= avail) break;
      f = clamp(f * (avail - 2) / need, 0.58, 1.12);
      pin.style.setProperty('--fit', f.toFixed(3));
    }
  }
  function layoutAll() {
    measure();
    sizeSections();
    layoutClock();
    [sT.nameSvg, sD.invitesSvg, sS.tSvg].forEach(fitScriptSVG);
    layoutDoorway();
    fitBoxes();
    petalsT && petalsT.resize();
    petalsX && petalsX.resize();
  }

  /* =====================================================================
     INTERACTIONS (work with or without motion)
     ===================================================================== */
  // calendar (.ics)
  const icsDate = iso => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const icsEsc = s => String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
  const fold = line => { const out = []; let s = line; while (s.length > 73) { out.push(s.slice(0, 73)); s = ' ' + s.slice(73); } out.push(s); return out.join('\r\n'); };
  function downloadICS(ev) {
    const title = `${ev.name} · ${B.first} & ${G.first}`;
    const lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', `PRODID:-//${C.meta.studio}//Wedding Invitation//EN`, 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${C.meta.slug}-${ev.start.replace(/\W/g, '')}@aamantran-atelier`,
      `DTSTAMP:${icsDate(new Date().toISOString())}`,
      `DTSTART:${icsDate(ev.start)}`, `DTEND:${icsDate(ev.end)}`,
      `SUMMARY:${icsEsc(title)}`,
      `LOCATION:${icsEsc(ev.venue)}`,
      `DESCRIPTION:${icsEsc(`${ev.date}, ${ev.time}. ${ev.note}. Map: ${ev.maps || C.venue.maps}`)}`,
      `URL:${icsEsc(location.href.split('?')[0])}`,
      'END:VEVENT', 'END:VCALENDAR'
    ].map(fold).join('\r\n') + '\r\n';
    const blob = new Blob([lines], { type: 'text/calendar;charset=utf-8' });
    const a = el('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${C.meta.slug}-${ev.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`;
    doc.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }
  sE.track.addEventListener('click', e => {
    const b = e.target.closest('[data-ics]');
    if (b) downloadICS(C.events[+b.dataset.ics]);
  });

  // WhatsApp RSVP
  $('.wa', sR.body).addEventListener('click', () => {
    const name = sR.input.value.trim();
    const field = $('.field', sR.body), hint = $('.hint', sR.body);
    if (!name) {
      field.classList.remove('err'); void field.offsetWidth; field.classList.add('err');
      hint.textContent = C.copy.rsvpNeedName;
      sR.input.focus({ preventScroll: true });
      return;
    }
    hint.textContent = '';
    const msg = C.rsvp.message.replace('{guest}', name);
    window.open(`https://wa.me/${C.rsvp.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });

  // carousel: tilt, dots, drag
  const track = sE.track;
  let tiltRAF = 0;
  function tilt() {
    tiltRAF = 0;
    const tr = track.getBoundingClientRect(), mid = tr.left + tr.width / 2;
    let best = 0, bd = 1e9;
    sE.cards.forEach((c, i) => {
      const r = c.getBoundingClientRect();
      const off = (r.left + r.width / 2 - mid) / r.width;
      if (Math.abs(off) < bd) { bd = Math.abs(off); best = i; }
      if (MOTION) c.style.transform = `rotateY(${clamp(-off * 16, -28, 28).toFixed(2)}deg) scale(${(1 - Math.min(Math.abs(off), 1.2) * 0.07).toFixed(3)})`;
    });
    $$('button', sE.cdots).forEach((b, i) => b.classList.toggle('on', i === best));
  }
  track.addEventListener('scroll', () => { if (!tiltRAF) tiltRAF = requestAnimationFrame(tilt); }, { passive: true });
  sE.cdots.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const c = sE.cards[+b.dataset.i];
    track.scrollTo({ left: c.offsetLeft - (track.clientWidth - c.offsetWidth) / 2, behavior: MOTION ? 'smooth' : 'auto' });
  });
  {
    let down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.target.closest('a,button')) return;
      down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; track.classList.add('dragging');
    });
    addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = sl - dx;
    });
    addEventListener('pointerup', () => {
      if (!down) return;
      down = false; track.classList.remove('dragging');
      // settle on the nearest card
      const mid = track.scrollLeft + track.clientWidth / 2;
      let best = sE.cards[0], bd = 1e9;
      sE.cards.forEach(c => { const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (d < bd) { bd = d; best = c; } });
      track.scrollTo({ left: best.offsetLeft - (track.clientWidth - best.offsetWidth) / 2, behavior: 'smooth' });
    });
    track.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  }
  track.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    track.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * 276, behavior: 'smooth' });
  });

  // countdown with odometer digits
  const target = new Date(C.muhurtham).getTime();
  function setDigits(numEl, value) {
    const n = +numEl.dataset.n, s = String(value).padStart(n, '0').slice(-n);
    $$('.strip', numEl).forEach((st, i) => { st.style.transform = `translateY(${-(+s[i])}em)`; });
    numEl.setAttribute('aria-label', String(value));
  }
  function updateCount() {
    let d = Math.max(0, target - Date.now());
    if (d <= 0) { sK.el.classList.add('done'); return; }
    const days = Math.floor(d / 864e5); d -= days * 864e5;
    const hrs = Math.floor(d / 36e5); d -= hrs * 36e5;
    const min = Math.floor(d / 6e4); d -= min * 6e4;
    const sec = Math.floor(d / 1e3);
    [days, hrs, min, sec].forEach((v, i) => setDigits(sK.nums[i], v));
  }
  updateCount();
  let countTimer = setInterval(() => { if (sK.el.classList.contains('live') || !MOTION) updateCount(); }, 1000);

  // music toggle
  function setMusic(on) {
    if (on) Sound.start(); else Sound.stop();
    musicBtn.setAttribute('aria-pressed', String(on));
    musicBtn.setAttribute('aria-label', on ? 'Pause music' : 'Play music');
    musicBtn.classList.remove('swing'); void musicBtn.offsetWidth; musicBtn.classList.add('swing');
  }
  musicBtn.addEventListener('click', () => setMusic(!Sound.on));

  /* =====================================================================
     LIVE SCENES: lazy-load media, pause what is off-screen
     ===================================================================== */
  loadSprites();
  const petalsT = MOTION ? new Petals(sT.canvas, isMobile ? 16 : 28) : null;
  const petalsX = MOTION ? new Petals(sX.canvas, isMobile ? 18 : 30) : null;
  // the first scene loads straight away, the rest as they approach
  loadAllIn(sT.el);
  const near = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { loadAllIn(en.target); near.unobserve(en.target); } });
  }, { rootMargin: '150% 0px 150% 0px' });
  scenes.slice(1).forEach(s => near.observe(s.el));
  const liveObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      en.target.classList.toggle('live', en.isIntersecting);
      const s = scenes.find(x => x.el === en.target);
      if (s === sT && petalsT) en.isIntersecting && started ? petalsT.start() : petalsT.stop();
      if (s === sX && petalsX) { if (en.isIntersecting) { petalsX.start(); } else petalsX.stop(); }
    });
  });
  scenes.forEach(s => liveObs.observe(s.el));

  /* =====================================================================
     CLOCK (opener)
     ===================================================================== */
  const hourG = $('.hour', hands), minG = $('.minute', hands), secG = $('.second', hands);
  const ghosts = $$('.ghost', hands);
  const spin = { v: 0 };
  let clockOn = true;
  function clockFrame() {
    if (!clockOn) return;
    const now = new Date();
    const ms = now.getMilliseconds(), s = now.getSeconds() + ms / 1000, m = now.getMinutes() + s / 60, h = (now.getHours() % 12) + m / 60;
    const extra = spin.v * 1440;
    const ma = m * 6 + extra, ha = h * 30 + extra / 12, sa = (MOTION ? s : Math.floor(s)) * 6 + extra * 3;
    minG.setAttribute('transform', `rotate(${ma.toFixed(2)})`);
    hourG.setAttribute('transform', `rotate(${ha.toFixed(2)})`);
    secG.setAttribute('transform', `rotate(${sa.toFixed(2)})`);
    ghosts[0].setAttribute('transform', `rotate(${(ma - 14).toFixed(2)})`);
    ghosts[1].setAttribute('transform', `rotate(${(ma - 28).toFixed(2)})`);
    requestAnimationFrame(clockFrame);
  }
  requestAnimationFrame(clockFrame);

  /* =====================================================================
     START: tap to begin
     ===================================================================== */
  let started = false, lenis = null;
  root.classList.add('locked');
  scrollTo(0, 0);

  function begin() {
    if (started) return;
    started = true;
    opener.style.cursor = 'default';
    setMusic(true);
    hud.style.visibility = 'visible';
    if (!MOTION) {
      opener.style.transition = 'opacity .7s ease';
      opener.style.opacity = '0';
      setTimeout(finishOpen, 720);
      introTempleStatic();
      return;
    }
    const tl = gsap.timeline({ onComplete: finishOpen });
    tl.to([ocopy, tapBtn], { opacity: 0, duration: 0.45, ease: 'sine.out' }, 0)
      .to(dialLine, { opacity: 0, duration: 0.5 }, 0)
      .to(spin, { v: 1, duration: 2.1, ease: 'power2.inOut' }, 0)
      .to(ghosts, { opacity: 0.35, duration: 0.5, ease: 'sine.in' }, 0.25)
      .to(ghosts, { opacity: 0, duration: 0.5, ease: 'sine.out' }, 1.55)
      .to(warm, { opacity: 0.8, duration: 1.7, ease: 'sine.in' }, 0.3)
      .fromTo(push, { scale: 1 }, { scale: 3.6, duration: 2.35, ease: 'power3.in' }, 0.15)
      .to(opener, { opacity: 0, duration: 0.75, ease: 'sine.inOut' }, 1.75)
      .add(introTemple, 1.55);
  }
  // After the opener, quietly load and decode the remaining scenes one by one while the guest is
  // reading, so nothing has to load at the moment a scene rises into view.
  function preloadRest() {
    const idle = window.requestIdleCallback || (fn => setTimeout(fn, 120));
    const queue = scenes.slice(1).map(s => s.el);
    const next = () => { const n = queue.shift(); if (!n) return; loadAllIn(n); idle(next, { timeout: 900 }); };
    setTimeout(() => idle(next, { timeout: 900 }), 600);
  }
  function finishOpen() {
    clockOn = false;
    opener.remove();
    root.classList.remove('locked');
    if (lenis) lenis.start();
    if (petalsT) petalsT.start();
    preloadRest();
    if (MOTION) window.ScrollTrigger.refresh();
    musicBtn.focus({ preventScroll: true });
  }
  opener.addEventListener('click', begin);
  tapBtn.addEventListener('click', e => { e.stopPropagation(); begin(); });
  addEventListener('keydown', e => { if (!started && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); begin(); } });

  function introTemple() {
    const st = { p: 0 };
    gsap.timeline()
      .to(st, { p: 1, duration: 2.6, ease: 'power1.inOut', onUpdate: () => setScriptProgress(sT.nameSvg, st.p) }, 0)
      .fromTo(sT.sub, { opacity: 0, y: 14, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }, 2.2)
      .fromTo(sT.hint, { opacity: 0 }, { opacity: 0.85, duration: 1 }, 3);
  }
  function introTempleStatic() {
    setScriptProgress(sT.nameSvg, 1);
    sT.sub.style.opacity = 1;
  }

  /* =====================================================================
     SCROLL FILM (GSAP + ScrollTrigger + Lenis)
     ===================================================================== */
  const bellState = [];
  let lastScroll = 0;

  function setupMotion() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    if (window.Lenis) {
      lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95 });
      lenis.stop();
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    // each scene: a scrubbed timeline over its hold
    const sceneTriggers = [];
    // refresh() reverts scrubbed animations; put every scene back to the pose for the current scroll
    ScrollTrigger.addEventListener('refresh', () => sceneTriggers.forEach(st => st.animation && st.animation.progress(1).progress(st.progress)));
    // scroll-scrubbed work only runs while a scene is pinned (its frame is not moving under the finger)
    const sceneTL = (i, build) => {
      const tl = gsap.timeline({ defaults: { ease: 'none' } });
      build(tl);
      tl.progress(1).progress(0); // render through and back so every "from" state is applied before the scene starts
      sceneTriggers.push(ScrollTrigger.create({
        animation: tl, scrub: 0.5,
        start: () => sceneStart(i), end: () => sceneStart(i) + scenes[i].a * V,
        invalidateOnRefresh: true
      }));
      return tl;
    };
    // entrances play on time (not tied to scroll) once a rising card is ~60% up, so they stay
    // smooth while the browser scrolls the card natively; they rewind if you scroll back above it
    const arrival = (i, build, at = 0.42) => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });
      build(tl);
      tl.progress(1).progress(0);
      ScrollTrigger.create({
        start: () => scenes[i].el.offsetTop - V * at, end: 'max', invalidateOnRefresh: true,
        onEnter: () => tl.timeScale(1).play(), onLeaveBack: () => tl.timeScale(1.8).reverse()
      });
      return tl;
    };
    // blur-to-sharp on desktop; phones get rise + fade only (a blur repaints every frame)
    const B0 = isMobile ? {} : { filter: 'blur(6px)' }, B1 = isMobile ? {} : { filter: 'blur(0px)' };
    const textIn = (tl, targets, at, dur = 0.12, stagger = 0) =>
      tl.fromTo(targets, Object.assign({ opacity: 0, y: 16 }, B0), Object.assign({ opacity: 1, y: 0, duration: dur, stagger, ease: 'power2.out' }, B1), at);
    const riseIn = (tl, targets, at, dur = 0.9, stagger = 0) =>
      tl.fromTo(targets, Object.assign({ opacity: 0, y: 18 }, B0), Object.assign({ opacity: 1, y: 0, duration: dur, stagger, ease: 'power3.out' }, B1), at);

    // rising transitions: the next card is moved only by the browser's own scrolling; the scene
    // underneath (pinned, not moving) recedes and darkens
    scenes.forEach((s, i) => {
      if (!i) return;
      const prev = scenes[i - 1];
      gsap.timeline({
        scrollTrigger: {
          start: () => s.el.offsetTop - V, end: () => s.el.offsetTop + F, scrub: true, invalidateOnRefresh: true,
          toggleClass: { targets: s.frame, className: 'feather' }, // mask only while rising
          // once fully covered, the scene underneath stops painting and animating until you scroll back
          onLeave: () => setCovered(prev, true), onEnterBack: () => setCovered(prev, false)
        }
      })
        .fromTo(prev.cam, { scale: 1 }, { scale: 0.92, ease: 'sine.in' }, 0)
        .fromTo(prev.dim, { opacity: 0 }, { opacity: 0.6, ease: 'sine.in' }, 0);
    });

    // Scene 2: camera tilts from sky to roof, layers at different speeds
    sceneTL(0, tl => {
      tl.to(sT.bg, { yPercent: -16, duration: 1 }, 0)
        .to(sT.namesLayer, { y: () => -V * 0.07, duration: 1 }, 0)
        .to(sT.namesLayer, { opacity: 0, duration: 0.3 }, 0.62)
        .to(sT.palmL, { y: () => -V * 0.22, scale: 1.12, duration: 1 }, 0)
        .to(sT.palmR, { y: () => -V * 0.12, duration: 1 }, 0)
        .to(sT.hint, { opacity: 0, duration: 0.08 }, 0);
    });

    // Scene 3: the invitation appears line by line on the ivory panel
    {
      const pin = sD.pin;
      const lines = $$('.ln', pin);
      gsap.set(lines, { opacity: 0 });
      const inv = { p: 0 };
      // each line plays on its own timing as the scroll passes its point (and rewinds going back),
      // so nothing is redrawn per scroll frame
      const step = (at, build) => {
        const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
        build(tl);
        tl.progress(1).progress(0);
        ScrollTrigger.create({
          start: () => sceneStart(1) + at * sD.a * V, end: 'max', invalidateOnRefresh: true,
          onEnter: () => tl.timeScale(1).play(), onLeaveBack: () => tl.timeScale(2).reverse()
        });
      };
      step(0, tl => { riseIn(tl, $('.bless', pin), 0, 0.9); riseIn(tl, $('.orn', pin), 0.35, 0.7); });
      step(0.07, tl => { tl.fromTo($('.cordially', pin), { opacity: 0, y: 12, scaleX: 0.9 }, { opacity: 1, y: 0, scaleX: 1, duration: 0.9 }, 0); });
      step(0.15, tl => {
        tl.set($('.inv', pin), { opacity: 1 }, 0)
          .fromTo(inv, { p: 0 }, { p: 1, duration: 1.7, ease: 'power1.inOut', onUpdate: () => setScriptProgress(sD.invitesSvg, inv.p) }, 0);
      });
      step(0.33, tl => { riseIn(tl, $('.copy', pin), 0, 1); });
      step(0.5, tl => { riseIn(tl, $('.parents', pin), 0, 1); });
      step(0.66, tl => {
        tl.set($('.names-gold', pin), { opacity: 1 }, 0)
          .fromTo($$('.names-gold > *', pin), Object.assign({ opacity: 0, y: 14, scaleX: 0.88 }, B0), Object.assign({ opacity: 1, y: 0, scaleX: 1, duration: 1, stagger: 0.18 }, B1), 0);
      });
      sceneTL(1, tl => {
        tl.fromTo(sD.pL, { y: () => V * 0.03 }, { y: () => -V * 0.03, duration: 1 }, 0)
          .fromTo(sD.pR, { y: () => V * 0.03 }, { y: () => -V * 0.03, duration: 1 }, 0)
          .fromTo(sD.crest, { y: 0 }, { y: () => -V * 0.015, duration: 1 }, 0);
      });
      // bells: damped pendulums, nudged on entry and on fast scrolling
      sD.bells.forEach((b, i) => bellState.push({ el: b, th: 0, w: 0, k: [15, 18.5, 17, 14][i], c: [0.55, 0.7, 0.6, 0.5][i] }));
      ScrollTrigger.create({
        start: () => sD.el.offsetTop - V * 0.55, end: () => sD.el.offsetTop + sD.el.offsetHeight,
        onEnter: () => ringBells(1), onEnterBack: () => ringBells(0.7)
      });
    }

    // Scene 4: mandapam
    sceneTL(2, tl => { tl.to(sM.bg, { yPercent: -4, duration: 1 }, 0); });
    arrival(2, tl => { riseIn(tl, sM.cap, 0.3, 1.2); });

    // Scene 5: bride & groom slide in from opposite sides
    arrival(3, tl => {
      tl.fromTo(sC.head, { opacity: 0, y: 12, scaleX: 0.92 }, { opacity: 1, y: 0, scaleX: 1, duration: 0.8 }, 0)
        .fromTo(sC.bride.a, { xPercent: -112, rotate: -2.5, opacity: 0 }, { xPercent: 0, rotate: 0, opacity: 1, duration: 1.25, ease: 'power3.out' }, 0.1)
        .fromTo(sC.groom.a, { xPercent: 112, rotate: 2.5, opacity: 0 }, { xPercent: 0, rotate: 0, opacity: 1, duration: 1.25, ease: 'power3.out' }, 0.28)
        .fromTo(sC.lamp, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 0.75);
      riseIn(tl, [sC.bride.info, sC.groom.info], 0.95, 0.9, 0.15);
    });

    // Scene 6: our story; the frame and title arrive, then the words follow the scroll
    {
      const t = { p: 0 };
      arrival(4, tl => {
        tl.fromTo(sS.big, { y: 26, scale: 0.97, opacity: 0.6 }, { y: 0, scale: 1, opacity: 1, duration: 1 }, 0)
          .fromTo(t, { p: 0 }, { p: 1, duration: 1.8, ease: 'power1.inOut', onUpdate: () => setScriptProgress(sS.tSvg, t.p) }, 0.3);
      });
      sceneTL(4, tl => {
        tl.fromTo(sS.words, { opacity: 0.2 }, { opacity: 1, duration: 0.05, stagger: 0.8 / sS.words.length }, 0.02)
          .fromTo(sS.base, { yPercent: 35 }, { yPercent: 0, duration: 0.95, ease: 'power1.out' }, 0);
      });
    }

    // Scene 7: countdown tiles rise
    arrival(5, tl => { riseIn(tl, $$('.reveal', sK.wrap), 0.1, 0.9, 0.1); });

    // Scene 8: ceremonies glide in
    arrival(6, tl => {
      riseIn(tl, sE.head, 0, 0.8);
      tl.fromTo(sE.track, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out' }, 0.2);
    });

    // Scene 9: the RSVP card rises out of the lamp-lit night
    sceneTL(7, tl => { tl.to(sR.bg, { yPercent: -3, duration: 1 }, 0); });
    arrival(7, tl => {
      tl.fromTo(sR.card, { y: 30, opacity: 0.5 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 0);
      riseIn(tl, Array.from(sR.body.children), 0.2, 0.8, 0.06);
    });

    // Scene 10: sign-off
    arrival(8, tl => {
      tl.fromTo(sX.couple, { yPercent: 10, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.4, ease: 'power3.out' }, 0);
      riseIn(tl, Array.from(sX.text.children), 0.35, 1, 0.18);
    });
    ScrollTrigger.create({
      start: () => sX.el.offsetTop - V * 0.2, end: 'max',
      onEnter: () => petalsX && petalsX.shower(isMobile ? 26 : 44)
    });

    // per-frame work: petals, bells, progress, current scene
    let lastT = performance.now();
    gsap.ticker.add(() => {
      const now = performance.now(), dt = Math.min(0.05, (now - lastT) / 1000);
      lastT = now;
      if (petalsT && petalsT.running && !sT.covered) petalsT.step(dt);
      if (petalsX && petalsX.running) petalsX.step(dt);
      if (sD.el.classList.contains('live') && !sD.covered) stepBells(dt);
    });
    const onScroll = () => {
      const y = lenis ? lenis.scroll : scrollY;
      const max = (lenis ? lenis.limit : (doc.documentElement.scrollHeight - innerHeight)) || 1;
      progress.style.transform = `scaleX(${clamp(y / max, 0, 1).toFixed(4)})`;
      const v = lenis ? lenis.velocity : y - lastScroll;
      lastScroll = y;
      if (Math.abs(v) > 34 && sD.el.classList.contains('live')) ringBells(0.45, true);
      updateCurrent(y);
    };
    if (lenis) lenis.on('scroll', onScroll); else addEventListener('scroll', onScroll, { passive: true });
  }

  function setCovered(s, on) {
    s.covered = on;
    s.el.classList.toggle('covered', on);
    s.frame.style.visibility = on ? 'hidden' : '';
  }

  let lastRing = 0;
  function ringBells(strength, quiet) {
    const now = performance.now();
    if (now - lastRing < 450) return;
    lastRing = now;
    bellState.forEach((b, i) => {
      b.w += strength * (i % 2 ? -1 : 1) * rand(0.7, 1.2);
      if (!quiet || Math.random() < 0.5) setTimeout(() => Sound.chime(), i * rand(60, 160));
    });
  }
  function stepBells(dt) {
    bellState.forEach(b => {
      const acc = -b.k * Math.sin(b.th) - b.c * b.w;
      b.w += acc * dt; b.th += b.w * dt;
      if (Math.abs(b.th) < 0.0004 && Math.abs(b.w) < 0.0004) return;
      b.el.style.transform = `rotate(${b.th.toFixed(4)}rad)`;
    });
  }

  /* current scene: dots, desktop backdrop */
  let current = -1;
  const backImgs = $$('.backdrop img');
  let backFlip = 0;
  const wide = matchMedia('(min-width: 600px)');
  function setBackdrop(key) {
    if (!wide.matches || !key) return;
    const img = backImgs[backFlip ^ 1];
    const src = asset(key, 'webp');
    if (backImgs[backFlip].dataset.src === src) return;
    img.onload = () => { img.classList.add('on'); backImgs[backFlip].classList.remove('on'); backFlip ^= 1; };
    img.dataset.src = src;
    img.src = src;
  }
  scenes.forEach((s, i) => {
    const b = el('button');
    b.type = 'button';
    b.setAttribute('aria-label', s.label);
    b.addEventListener('click', () => {
      const y = MOTION ? sceneStart(i) + (i === 0 ? 0 : Math.min(V * 0.15, s.a * V * 0.2)) : s.el.offsetTop;
      if (lenis) lenis.scrollTo(y, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 3) });
      else scrollTo({ top: y, behavior: MOTION ? 'smooth' : 'auto' });
    });
    dotsNav.append(b);
  });
  const dotBtns = $$('button', dotsNav);
  function updateCurrent(y) {
    let idx = 0;
    scenes.forEach((s, i) => { if (y >= (MOTION ? sceneStart(i) - V * 0.5 : s.el.offsetTop - V * 0.5)) idx = i; });
    if (idx === current) return;
    current = idx;
    dotBtns.forEach((b, i) => { b.classList.toggle('on', i === idx); if (i === idx) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
    setBackdrop(scenes[idx].backdrop);
  }

  /* reduced motion / no-library path: gentle fades, no scrubbing */
  function setupStatic() {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.15 });
    const targets = [sT.sub, ...$$('.ln', sD.pin), sM.cap, sC.head, sC.bride.a, sC.groom.a, sC.bride.info, sC.groom.info, sC.lamp,
      sS.big, ...$$('.reveal', sK.wrap), sE.head, sE.track, sR.card, sX.couple, sX.text];
    targets.forEach(t => { t.classList.add('reveal'); io.observe(t); });
    [sD.invitesSvg, sS.tSvg].forEach(svg => setScriptProgress(svg, 1));
    sS.words.forEach(w => { w.style.opacity = 1; });
    addEventListener('scroll', () => {
      const y = scrollY, max = (doc.documentElement.scrollHeight - innerHeight) || 1;
      progress.style.transform = `scaleX(${clamp(y / max, 0, 1).toFixed(4)})`;
      updateCurrent(y);
    }, { passive: true });
  }

  /* =====================================================================
     BOOT
     ===================================================================== */
  measure();
  sizeSections();
  layoutClock();
  const fontsReady = (doc.fonts && doc.fonts.ready) ? Promise.race([
    Promise.all(['400 40px "Great Vibes"', '600 20px "Cormorant Garamond"', '400 16px "EB Garamond"', '700 16px "Manjari"'].map(f => doc.fonts.load(f, f.includes('Manjari') ? C.blessing.ml : undefined).catch(() => {}))).then(() => doc.fonts.ready),
    new Promise(r => setTimeout(r, 2500))
  ]) : Promise.resolve();
  fontsReady.then(() => {
    layoutAll();
    if (MOTION) setupMotion(); else setupStatic();
    updateCurrent(0);
    tilt();
    if (MOTION) ScrollTrigger.refresh();
    root.classList.add('ready');
    // late font files (e.g. the Malayalam subset) change line lengths: refit when they land
    if (doc.fonts) doc.fonts.addEventListener('loadingdone', () => { [sT.nameSvg, sD.invitesSvg, sS.tSvg].forEach(fitScriptSVG); layoutDoorway(); fitBoxes(); });
    addEventListener('load', () => { layoutDoorway(); if (MOTION) ScrollTrigger.refresh(); });
  });

  // keep geometry right on rotation / resize (ignore mobile URL-bar height changes)
  let lastW = innerWidth, lastH = innerHeight, rz = 0;
  addEventListener('resize', () => {
    clearTimeout(rz);
    rz = setTimeout(() => {
      const wChanged = innerWidth !== lastW, hBig = Math.abs(innerHeight - lastH) > 160;
      if (!wChanged && !hBig) { if (opener.isConnected) layoutClock(); return; }
      lastW = innerWidth; lastH = innerHeight;
      layoutAll();
      if (MOTION) ScrollTrigger.refresh();
    }, 180);
  });
  addEventListener('pagehide', () => clearInterval(countTimer));

  // test hook (used by the automated screenshot checks)
  window.__invite = { begin, scenes, sceneStart: i => sceneStart(i), get V() { return V; }, get lenis() { return lenis; } };
})();
