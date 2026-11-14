/* ==========================================================================
   THE ROYAL SEASON · an Indian Regency wedding invitation
   Crafted by Aamantran Atelier
   --------------------------------------------------------------------------
   Everything a new client changes lives in CONFIG below. The page is built
   from it, so names, dates, copy, events, colours and asset paths can all be
   swapped without touching the rest of the file.
   ========================================================================== */
const CONFIG = {
  brand: 'Aamantran Atelier',
  pageTitle: 'Tara & Aarav | The Royal Season',
  storageKey: 'tara-aarav-dances',

  couple: {
    namesScript: 'Tara & Aarav',
    monogram: ['T', 'A'],
    bride: {
      formal: 'Miss Tara Rao', first: 'Tara', script: 'Tara Rao',
      parents: 'Daughter of Mrs. Kaveri & Mr. Prakash Rao', city: 'Bengaluru',
      epithet: 'The Diamond of the Season', portrait: 'bride',
      notes: [
        'Has declined three proposals, two sonnets and one exceedingly determined cricketer.',
        'Can quote Austen and the Gita in a single breath, and frequently does, at dinner.',
        'Her lace fan has been retrieved by a gentleman exactly once. Society knows how that ended.'
      ]
    },
    groom: {
      formal: 'Mr. Aarav Singhania', first: 'Aarav', script: 'Aarav Singhania',
      parents: 'Son of Mrs. Nandini & Mr. Rohit Singhania', city: 'Kolkata',
      epithet: 'The Most Eligible Gentleman', portrait: 'groom',
      notes: [
        'Writes letters so ardent the Kolkata post office has requested he use fewer adjectives.',
        'Dances a passable waltz and a magnificent bhangra; this author prefers the latter.',
        'Was observed rehearsing his vows to a looking-glass. Twice. In one afternoon.'
      ]
    }
  },

  blessing: { line: '॥ श्री गणेशाय नमः ॥', sub: 'With the blessings of Lord Ganesha and our esteemed elders' },
  invitation: 'Together with their families, Miss Tara Rao and Mr. Aarav Singhania request the pleasure of your company as they begin their forever.',
  dateShort: '17 · 04 · 2027',
  dateLong: 'Saturday, the seventeenth of April, 2027',
  city: 'Mysuru',
  hashtag: '#TheTaraSeason',
  countdownTarget: '2027-04-17T19:00:00+05:30',

  columnist: { name: 'Lady Chandrika', paper: 'The Chandrika Chronicle', initials: 'LC' },

  copy: {
    opener: {
      arrived: 'A letter has arrived for you',
      arrivedFor: 'A letter has arrived for',
      cta: 'Break the seal',
      hint: 'Sound on, dear reader',
      inside: 'You are cordially summoned',
      insideSub: 'to the most talked-about match of the season',
      insideFrom: 'with affection, Lady Chandrika'
    },
    chronicle: {
      price: 'Price · One Whisper',
      volume: 'Vol. MMXXVII · No. 17',
      edition: 'Special Wedding Edition · Spring, 2027',
      city: 'Bengaluru · Kolkata · Mysuru',
      headline: 'The Diamond of the Season to Wed!',
      byline: 'by Lady Chandrika, who sees everything',
      lead: 'Dearest reader, society in two cities is aflutter. This author has it on the very best authority that Miss Tara Rao of Bengaluru, whose fan has caused more swoons than any monsoon, is to wed Mr. Aarav Singhania of Kolkata, a gentleman of excellent posture and even better letters.',
      lead2: 'The festivities shall unfold at a palace in Mysuru this April. Invitations, this author hears, are more coveted than a dance with the Diamond herself.',
      sideTitle: 'Also Overheard',
      side: [
        'Both mothers are said to be negotiating the dance floor like two admirals at sea.',
        'A marigold shortage is predicted across Karnataka. Florists are advised to rest now.',
        'Guests who RSVP late shall be mentioned in this column. By name.'
      ],
      foot: 'Should you receive an invitation, this author suggests you keep scrolling.'
    },
    palace: { line1: 'request the pleasure of your company', line2: 'Mysuru' },
    ballroom: { title: 'And then, dear reader,', sub: 'they danced, and the chandeliers held their breath.' },
    cameos: { title: 'The Diamond & the Gentleman', eyebrow: 'This season’s principal players', hint: 'Tap a cameo for this author’s notes', notes: 'This author’s notes', close: 'Tap anywhere to return' },
    story: { title: 'Whispers of Society', eyebrow: 'Clippings from the Chronicle', hint: 'Tap a clipping to read it closer' },
    watch: { title: 'The Hour Approaches', eyebrow: 'Until the wedding', units: ['Days', 'Hours', 'Minutes', 'Seconds'], done: 'The match is made.', note: 'This author is counting. So, one suspects, is the groom.' },
    dances: { title: 'The Programme of Dances', eyebrow: 'Five dances · Mysuru · April 2027', intro: 'Reserve each dance you will attend; this author is keeping a list.', cover: 'Dance Card', toastTitle: 'Lady Chandrika', toast: 'A full card! This author is most impressed.', reserve: 'Reserve this dance', reserved: 'Reserved', map: 'View location', cal: 'Add to calendar' },
    venue: { title: 'The Carriage Awaits', eyebrow: 'The venue', copy: 'Every carriage in Mysuru has been spoken for. Yours, dear guest, will be waiting.', button: 'Get directions' },
    rsvp: { title: 'Your Calling Card', eyebrow: 'Répondez s’il vous plaît', by: 'Kindly reply by 15 March 2027', label: 'Your name, as it should appear on the guest list', placeholder: 'Your name', send: 'Send my reply', small: 'Your reply travels by WhatsApp. No footmen were harmed.', sent: 'Your reply is on its way', sentSmall: 'If WhatsApp did not open, ', sentLink: 'tap here', again: 'send another reply', contactsTitle: 'For enquiries, kindly call upon', needName: 'This author must know your name, dear guest.' },
    farewell: { line: 'The season’s most celebrated union awaits your presence', yours: 'Yours, ever watchful,', footer: 'Crafted with love by' }
  },

  story: [
    { when: 'Spring 2021', where: 'Bengaluru', text: 'This author has learned that at a charity recital, a certain Mr. Singhania abandoned all decorum to retrieve Miss Rao’s dropped fan, and then forgot to return it for a full fortnight.' },
    { when: 'Monsoon 2022', where: 'By post', text: 'Letters, dear reader. Dozens of them. Kolkata’s postal service has never worked so hard, nor blushed so deeply.' },
    { when: 'Winter 2025', where: 'Mysuru', text: 'Under the palace lights, the gentleman knelt, fan in one hand and a ring in the other. The lady, this author hears, said yes before he finished the question.' },
    { when: 'The Season of 2027', where: 'Everywhere', text: 'And so the most talked-about match of the season is sealed. You, dear reader, are summoned to witness it.' }
  ],

  events: [
    { id: 'mehendi', name: 'The Mehendi Garden Party', date: '2027-04-15', time: '16:00', hours: 3, venue: 'The Wisteria Courtyard', dress: 'Garden pastels', icon: 'icon-teacup' },
    { id: 'haldi', name: 'The Haldi Morning Promenade', date: '2027-04-16', time: '10:00', hours: 3, venue: 'The Orangery Lawns', dress: 'Lemon & marigold', icon: 'icon-parasol' },
    { id: 'sangeet', name: 'The Sangeet Grand Ball', date: '2027-04-16', time: '20:00', hours: 4, venue: 'The Mirror Ballroom', dress: 'Regency glam meets Indian couture', icon: 'icon-chandelier' },
    { id: 'wedding', name: 'The Wedding', date: '2027-04-17', time: '19:00', hours: 4, venue: 'The Palace Rose Terrace', dress: 'Royal Indian finery', icon: 'icon-mandap' },
    { id: 'reception', name: 'The Reception Soirée', date: '2027-04-18', time: '20:30', hours: 4, venue: 'The Ivory Ballroom', dress: 'Black-tie, jewels encouraged', icon: 'icon-champagne' }
  ],
  eventPlace: 'Mysuru, Karnataka',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lalitha+Mahal+Palace+Mysuru',
  venue: { name: 'Lalitha Mahal Palace', place: 'Mysuru, Karnataka' },

  rsvp: {
    whatsapp: '919999999999',
    message: 'Dearest Tara & Aarav, {guest} accepts your gracious invitation with the utmost delight.',
    dancesLine: 'Dances reserved: {dances}.',
    contacts: [
      { name: 'Ishaan Rao', role: 'The bride’s brother', phone: '+91 99999 55555' },
      { name: 'Mira Singhania', role: 'The groom’s sister', phone: '+91 99999 66666' }
    ]
  },

  colors: { powder: '#BFD4E6', lilac: '#C6B3D9', blush: '#F1D3D3', ivory: '#FBF7F0', sage: '#B5C4A8', marigold: '#E2A23B', gold: '#C2A15B', goldHi: '#EFE0B0', goldLo: '#A88743', ink: '#1F2A44' },

  music: { file: 'assets/music.mp3', volume: 0.25, fadeIn: 3 },

  assets: {
    base: 'assets/',
    // Scene backgrounds: each has NAME.webp + NAME.jpg in /assets
    scenes: { opener: 'letter-tray-bg', chronicle: 'letter-tray-bg', palace: 'palace-sky', doors: 'ballroom-doorway-bg', ballroom: 'ballroom',
      story: 'velvet-board', watch: 'ballroom', dances: 'palace-sky', venue: 'carriage-drive', rsvp: 'palace-night', farewell: 'palace-night' },
    // Optional 9:16 video loops. Set a path (e.g. 'assets/palace-sky-loop.mp4') once a loop exists; null uses the still image.
    videos: { palace: null, ballroom: null },
    cutouts: { seal: 'wax-seal', chandelier: 'chandelier', cascade: 'wisteria-cascade', strand: 'wisteria-strand', garland: 'rose-garland', column: 'column',
      candelabra: 'candelabra', watch: 'pocket-watch', fan: 'hand-fan', carriage: 'carriage', branch: 'rose-branch', couple: 'couple',
      rosePetal: 'rose-petal', wisteriaPetal: 'wisteria-petal' }
  }
};

/* ========================================================================== */
(() => {
  'use strict';

  /* ---------- small helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const rand = (a, b) => a + Math.random() * (b - a);
  const A = (n) => CONFIG.assets.base + n;
  const C = CONFIG.copy;
  const params = new URLSearchParams(location.search);
  const guest = (params.get('guest') || '').replace(/[<>{}]/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = !!(window.gsap && window.ScrollTrigger);
  const STATIC = reduced || !hasGSAP;
  const small = matchMedia('(max-width: 600px)').matches;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  let vh = innerHeight / 100;
  const root = document.documentElement;
  if (STATIC) root.classList.add('static');
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  // palette from CONFIG
  const cc = CONFIG.colors;
  Object.entries({ powder: cc.powder, lilac: cc.lilac, blush: cc.blush, ivory: cc.ivory, sage: cc.sage, marigold: cc.marigold, gold: cc.gold, 'gold-hi': cc.goldHi, 'gold-lo': cc.goldLo, ink: cc.ink })
    .forEach(([k, v]) => root.style.setProperty('--' + k, v));
  document.title = CONFIG.pageTitle;

  function setVH() { vh = innerHeight / 100; root.style.setProperty('--vh', vh + 'px'); }
  setVH();
  let lastW = innerWidth;

  /* ---------- coded ornaments (SVG) ---------- */
  let gid = 0;
  function crest(opts = {}) {
    const id = 'cg' + (++gid);
    const [l, r] = CONFIG.couple.monogram;
    return `<svg class="${opts.cls || 'crest'}" viewBox="0 0 200 160" role="img" aria-label="${esc(l)} and ${esc(r)} crowned monogram">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${cc.goldLo}"/><stop offset=".35" stop-color="${cc.goldHi}"/><stop offset=".55" stop-color="${cc.gold}"/><stop offset=".8" stop-color="${cc.goldHi}"/><stop offset="1" stop-color="${cc.goldLo}"/></linearGradient></defs>
      <g fill="url(#${id})" stroke="none">
        <path d="M72 46 68 20 84 32 100 12 116 32 132 20 128 46Z"/><rect x="70" y="47" width="60" height="7" rx="2"/>
        <circle cx="68" cy="18" r="3.2"/><circle cx="100" cy="9.5" r="3.6"/><circle cx="132" cy="18" r="3.2"/><circle cx="84" cy="30" r="2.2"/><circle cx="116" cy="30" r="2.2"/>
        <circle cx="86" cy="50.5" r="1.6" fill="#fff" opacity=".7"/><circle cx="100" cy="50.5" r="1.9" fill="#fff" opacity=".8"/><circle cx="114" cy="50.5" r="1.6" fill="#fff" opacity=".7"/>
      </g>
      <text x="100" y="104" text-anchor="middle" font-family="Pinyon Script, cursive" font-size="44" fill="url(#${id})">${esc(l)} &amp; ${esc(r)}</text>
      <g fill="none" stroke="url(#${id})" stroke-width="1.6" stroke-linecap="round">
        <path d="M100 150c-8-6-12-14-10-22 6 2 10 10 10 22zM100 150c8-6 12-14 10-22-6 2-10 10-10 22z"/>
        <path d="M100 150c-16-2-26-10-28-18 10-1 20 6 28 18zM100 150c16-2 26-10 28-18-10-1-20 6-28 18z"/>
        <path d="M100 150c0-12 0-20 0-26"/>
        <path d="M58 132c-14 0-24-6-30-16M142 132c14 0 24-6 30-16" opacity=".8"/>
        <path d="M40 112c-6-12-2-24 8-28-2 8 0 16 6 22M160 112c6-12 2-24-8-28 2 8 0 16-6 22" opacity=".7"/>
      </g>
    </svg>`;
  }
  function filigree(cls) {
    return `<svg class="${cls}" viewBox="0 0 170 26" aria-hidden="true"><g fill="none" stroke="${cc.gold}" stroke-width="1.1" stroke-linecap="round">
      <path d="M85 3l6 10-6 10-6-10z" fill="${cc.goldHi}"/><path d="M73 13c-10 0-14-8-22-8s-10 8-4 10 8-4 4-6M97 13c10 0 14-8 22-8s10 8 4 10-8-4-4-6"/>
      <path d="M45 13H6M125 13h39"/><circle cx="4" cy="13" r="1.8" fill="${cc.gold}"/><circle cx="166" cy="13" r="1.8" fill="${cc.gold}"/>
      <path d="M60 17c-6 4-14 4-20 0M110 17c6 4 14 4 20 0" opacity=".7"/></g></svg>`;
  }
  function pearlRing() {
    const id = 'pr' + (++gid);
    return `<svg class="ring" viewBox="0 0 150 196" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${cc.goldLo}"/><stop offset=".4" stop-color="${cc.goldHi}"/><stop offset=".6" stop-color="${cc.gold}"/><stop offset="1" stop-color="${cc.goldLo}"/></linearGradient></defs>
      <ellipse cx="75" cy="98" rx="70" ry="93" fill="none" stroke="url(#${id})" stroke-width="7"/>
      <ellipse cx="75" cy="98" rx="70" ry="93" fill="none" stroke="#fffaf0" stroke-width="3.6" stroke-dasharray="0 7.2" stroke-linecap="round"/>
      <ellipse cx="75" cy="98" rx="66" ry="89" fill="none" stroke="url(#${id})" stroke-width="1.2"/>
      <g fill="url(#${id})"><path d="M75 0l7 9-7 7-7-7zM75 196l7-9-7-7-7 7z"/><circle cx="75" cy="4" r="2" fill="#fffaf0"/></g>
      <g fill="none" stroke="url(#${id})" stroke-width="1.4" stroke-linecap="round"><path d="M62 10c-8-6-18-2-18 6M88 10c8-6 18-2 18 6M62 186c-8 6-18 2-18-6M88 186c8 6 18 2 18-6"/></g></svg>`;
  }
  const lyre = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><defs><linearGradient id="lyg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${cc.goldHi}"/><stop offset="1" stop-color="${cc.gold}"/></linearGradient></defs>
    <g stroke="url(#lyg)"><path d="M6.5 2.8C3.6 5.6 4 11.6 8.2 15M17.5 2.8c2.9 2.8 2.5 8.8-1.7 12.2M5.6 6.4h12.8M8.2 15h7.6l-.9 5.2H9.1z"/><circle cx="6.5" cy="2.6" r=".9" fill="${cc.goldHi}"/><circle cx="17.5" cy="2.6" r=".9" fill="${cc.goldHi}"/></g>
    <g class="strings" stroke="${cc.goldHi}" stroke-width="1"><line x1="10" y1="6.4" x2="10" y2="15"/><line x1="12" y1="6.4" x2="12" y2="15"/><line x1="14" y1="6.4" x2="14" y2="15"/></g></svg>`;

  /* ---------- media: images with webp → jpg → painted fallback; optional video loops ---------- */
  function pic(name, { fb = '', alt = '', eager = false, kb = true, alt2 = false, video = null } = {}) {
    return `<div class="pic ${fb} ${kb ? 'kb' : ''} ${alt2 ? 'alt' : ''}" data-pic="${name}" ${eager ? 'data-eager' : ''} ${video ? `data-video="${video}"` : ''}>
      <img alt="${esc(alt)}" ${alt ? '' : 'aria-hidden="true"'} decoding="async"></div>`;
  }
  function cut(name, cls = '', alt = '') {
    return `<img class="cut ${cls}" data-src="${name}" alt="${esc(alt)}" ${alt ? '' : 'aria-hidden="true"'} decoding="async">`;
  }
  function loadPic(el) {
    if (el.dataset.loaded) return; el.dataset.loaded = '1';
    const img = el.querySelector('img'); const name = el.dataset.pic;
    let tried = false;
    img.onerror = () => { if (!tried) { tried = true; img.src = A(name + '.jpg'); } else el.classList.add('fallback'); };
    img.src = A(name + '.webp');
    const v = el.dataset.video;
    if (v && !STATIC) {
      fetch(v, { method: 'HEAD' }).then((r) => {
        if (!r.ok) return;
        const vid = document.createElement('video');
        Object.assign(vid, { muted: true, loop: true, playsInline: true, autoplay: true, preload: 'auto' });
        vid.setAttribute('muted', ''); vid.setAttribute('playsinline', ''); vid.poster = A(name + '.jpg');
        vid.src = v; vid.addEventListener('loadeddata', () => { img.style.opacity = 0; });
        vid.addEventListener('error', () => vid.remove());
        el.appendChild(vid);
      }).catch(() => {});
    }
  }
  function loadCut(img) {
    if (img.dataset.loaded) return; img.dataset.loaded = '1';
    img.onerror = () => { img.classList.add('fallback'); const h = img.dataset.onfail; if (h && fallbacks[h]) fallbacks[h](img); };
    img.src = A(img.dataset.src + '.webp');
  }
  function loadWithin(scope) { $$('[data-pic]', scope).forEach(loadPic); $$('img[data-src]', scope).forEach(loadCut); }
  const fallbacks = {
    seal: () => $$('.seal').forEach((s) => s.classList.add('fallback')),
    watch: (img) => img.closest('.watch').classList.add('fallback-face')
  };

  /* ---------- scene plan (scroll lengths are in viewport heights) ---------- */
  const SCENES = [
    { id: 'chronicle', len: 330, label: 'The Chronicle' },
    { id: 'palace', len: 360, label: 'The Palace' },
    { id: 'doors', len: 410, label: 'The Invitation' },
    { id: 'ballroom', len: 330, label: 'The Ballroom' },
    { id: 'cameos', len: 330, label: 'The Couple' },
    { id: 'story', len: 430, label: 'Our Story' },
    { id: 'watch', len: 310, label: 'Countdown' },
    { id: 'dances', len: 370, label: 'Celebrations' },
    { id: 'venue', len: 350, label: 'The Venue' },
    { id: 'rsvp', len: 310, label: 'RSVP' },
    { id: 'farewell', len: 175, label: 'Farewell' }
  ];
  const F = 10; // feather, vh
  const holdVH = (i) => SCENES[i].len - (i === SCENES.length - 1 ? 100 + F : 2 * (100 + F));

  /* ======================================================================
     BUILD THE PAGE FROM CONFIG
     ====================================================================== */
  const S = CONFIG.assets.scenes, K = CONFIG.assets.cutouts, cp = CONFIG.couple;

  function sceneShell(sc, i, bgHTML, areaHTML, extra = '') {
    return `<section class="scene s-${sc.id}" id="s-${sc.id}" data-i="${i}" style="--len:${sc.len};z-index:${i + 2}" aria-label="${esc(sc.label)}">
      <div class="frame"><div class="view">
        <div class="bg">${bgHTML}</div>${extra}
        <div class="area">${areaHTML}</div>
        <div class="shade"></div>
      </div></div></section>`;
  }
  const board = (inner, cls = '') => `<div class="tilt"><div class="board ${cls}">${inner}</div></div>`;

  // Scene 1 · opener
  function buildOpener() {
    const o = C.opener;
    const sealPiece = (n) => `<div class="piece p${n}" style="background-image:url('${A(K.seal + '.webp')}')"><span class="mono">${esc(cp.monogram[0])} &amp; ${esc(cp.monogram[1])}</span></div>`;
    $('#opener').innerHTML = `
      <div class="cam">
        <div class="bg">${board(`${pic(S.opener, { fb: 'wood', eager: true })}
          <div class="glow flick" data-base=".75" data-range=".25" style="left:-14%;top:-12%;width:62%"></div>
          <div class="glow flick" data-base=".55" data-range=".3" style="left:6%;top:-6%;width:34%"></div>
          <div class="seal-pulse"></div>
          <button class="seal" type="button" aria-label="${esc(o.cta)}">${sealPiece(1)}${sealPiece(2)}${sealPiece(3)}
            <svg class="crack" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M55 4 48 22 58 41 44 60 6 72M58 41 66 56 96 64" fill="none" stroke="rgba(70,40,90,.85)" stroke-width="1.6"/><path d="M56 4 49 22 59 41 45 61 6 73M59 41 67 57 96 65" fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".8"/></svg>
          </button>`)}</div>
        <div class="vignette"></div><div class="top-shade"></div><div class="bottom-shade"></div>
      </div>
      <div class="arrived on-image">
        <span class="caps">${esc(guest ? o.arrivedFor : o.arrived)}</span>
        <span class="name">${guest ? esc(guest) : ''}</span>
        ${filigree('rule')}
      </div>
      <div class="cta"><button class="btn gold" type="button">${esc(o.cta)}</button><span class="hint">${esc(o.hint)}</span></div>
      <div class="letter" aria-hidden="true"><div class="sheet">
        <div class="panel"><div class="summoned">${esc(o.inside)}</div><div class="from">${esc(o.insideSub)}</div><div class="shine"></div></div>
        <div class="flap bot"><div class="face in"><div class="from">${esc(o.insideFrom)}</div><div class="shine"></div></div><div class="face out"></div></div>
        <div class="flap top"><div class="face in">${crest({ cls: 'inner-crest' })}<div class="shine"></div></div><div class="face out"></div></div>
        <div class="ribbon"></div>
      </div></div>`;
    const sealImg = new Image(); sealImg.onerror = () => fallbacks.seal(); sealImg.src = A(K.seal + '.webp');
    const clips = ['polygon(0 0,55% 0,48% 22%,58% 41%,44% 60%,0 72%)', 'polygon(55% 0,100% 0,100% 64%,66% 56%,58% 41%,48% 22%)', 'polygon(0 72%,44% 60%,58% 41%,66% 56%,100% 64%,100% 100%,0 100%)'];
    $$('#opener .piece').forEach((p, k) => { p.style.clipPath = p.style.webkitClipPath = clips[k]; });
  }

  function buildFilm() {
    const ch = C.chronicle;
    const head = ch.headline.split(' ').map((w) => `<span class="w">${w.split('').map((c) => `<span class="ch">${esc(c)}</span>`).join('')}</span>`).join(' ');
    const html = [];

    // 2 · The Chandrika Chronicle
    html.push(sceneShell(SCENES[0], 0, board(pic(S.chronicle, { fb: 'wood', eager: true, alt2: true })) + '<div class="dim"></div><div class="glow flick" data-base=".5" data-range=".25" style="left:-30%;top:-20%;width:90%;aspect-ratio:1"></div>', `
      <div class="fit news-wrap" data-w="360" data-h="660"><div class="news-shadow"></div>
        <article class="news paper" aria-label="${esc(CONFIG.columnist.paper)}">
          <header class="mast">
            <div class="eyebrow"><span>${esc(ch.volume)}</span><span>${esc(ch.price)}</span></div>
            ${crest({ cls: 'crest-mini' })}
            <h2>${esc(CONFIG.columnist.paper)}</h2>
          </header>
          <div class="edition"><span>${esc(ch.edition)}</span><span>${esc(ch.city)}</span></div>
          <h1 aria-label="${esc(ch.headline)}">${head}</h1>
          <div class="byline">${esc(ch.byline)}</div>
          <div class="cols">
            <div><div class="cameo-mini">${cut(cp.bride.portrait, '', cp.bride.formal)}</div><p class="lead">${esc(ch.lead)}</p></div>
            <div><p>${esc(ch.lead2)}</p><div class="side"><h3>${esc(ch.sideTitle)}</h3>${ch.side.map((s) => `<p>· ${esc(s)}</p>`).join('')}</div></div>
          </div>
          <div class="foot">${esc(ch.foot)}</div>
        </article></div>`));

    // 3 · The palace rises
    html.push(sceneShell(SCENES[1], 1, board(pic(S.palace, { alt: 'A pastel palace and its fountain garden at golden hour', video: CONFIG.assets.videos.palace }), 'tall') +
      '<div class="rays" aria-hidden="true"><i></i><i></i><i></i></div><div class="sky-wash"></div>', `
      <div class="sky-names"><div class="haze"></div>
        <h2 class="names"><span class="wipe"><span>${esc(cp.namesScript)}</span></span></h2>
        <div class="tagline"><span class="caps t1">${esc(C.palace.line1)}</span><span class="date t2">${esc(CONFIG.dateShort)}</span><span class="caps t3" style="margin-top:8px">${esc(C.palace.line2)}</span></div>
      </div>
      ${cut(K.branch, 'branch r')}${cut(K.branch, 'branch l')}`));

    // 4 · The ballroom doors
    const b = cp.bride, g = cp.groom;
    html.push(sceneShell(SCENES[2], 2, board(pic(S.doors, { fb: 'interior' })), `
      <div class="fit invite-card" data-w="300" data-h="560" data-max="1.02" style="top:56%"><div class="card">
        ${filigree('fil t')}
        <div class="blessing ln">${esc(CONFIG.blessing.line)}</div>
        <div class="bless-sub ln">${esc(CONFIG.blessing.sub)}</div>
        <p class="copy ln">${esc(CONFIG.invitation)}</p>
        <div class="who ln"><span class="script">${esc(b.formal)}</span><span class="caps">${esc(b.parents)}</span></div>
        <div class="amp ln">&amp;</div>
        <div class="who ln"><span class="script">${esc(g.formal)}</span><span class="caps">${esc(g.parents)}</span></div>
        <div class="when ln"><span class="caps">${esc(CONFIG.dateLong)}</span><span class="d">${esc(CONFIG.city)}</span></div>
        ${filigree('fil b')}
      </div></div>
      ${cut(K.column, 'deco col-l')}${cut(K.column, 'deco col-r')}
      <div class="chand c2">${cut(K.chandelier)}<i class="glint"></i><i class="glint"></i></div>
      <div class="chand c3">${cut(K.chandelier)}<i class="glint"></i><i class="glint"></i></div>
      <div class="chand c1">${cut(K.chandelier)}<i class="glint"></i><i class="glint"></i><i class="glint"></i></div>
      ${cut(K.garland, 'deco garland sway')}${cut(K.cascade, 'deco cascade sway')}
      ${cut(K.strand, 'deco strand a sway')}${cut(K.strand, 'deco strand b sway')}${cut(K.strand, 'deco strand c sway')}${cut(K.strand, 'deco strand d sway')}
      <div class="doors" aria-hidden="true"><div class="door l"></div><div class="door r"></div></div>`));

    // 5 · The ballroom
    html.push(sceneShell(SCENES[3], 3, board(pic(S.ballroom, { fb: 'interior', alt: 'A mirrored palace ballroom with crystal chandeliers and wisteria', video: CONFIG.assets.videos.ballroom })) +
      `<div class="glow flick" data-base=".55" data-range=".3" style="left:4%;top:4%;width:56%;aspect-ratio:1"></div><div class="glow flick" data-base=".4" data-range=".3" style="right:-16%;top:30%;width:50%;aspect-ratio:1"></div><div class="vignette"></div>`, `
      <div class="caption on-image"><span class="script">${esc(C.ballroom.title)}</span><span class="sub">${esc(C.ballroom.sub)}</span></div>
      <div class="floor-glow"></div>
      <div class="couple-wrap"><div class="waltz sway"><div class="couple">${cut(K.couple, '', `${b.first} and ${g.first} waltzing`)}</div>
        <div class="reflection" aria-hidden="true">${cut(K.couple)}</div></div></div>`));

    // 6 · The cameos
    const cameo = (p, cls) => `<button class="cameo ${cls}" type="button" data-who="${cls}" aria-label="${esc(p.formal)}: ${esc(C.cameos.notes)}">
        <div class="oval"><div class="portrait">${cut(p.portrait, '', p.formal)}</div><div class="shine"></div>${pearlRing()}</div>
        <span class="caps epithet">${esc(p.epithet)}</span><span class="nm">${esc(p.script)}</span><span class="par">${esc(p.parents)}</span></button>`;
    html.push(sceneShell(SCENES[4], 4, '', `
      ${cut(K.cascade, 'cascade sway')}${cut(K.fan, 'fan')}
      <div class="fit cameos" data-w="360" data-h="640">
        <div class="title"><span class="caps">${esc(C.cameos.eyebrow)}</span><h2>${esc(C.cameos.title)}</h2></div>
        ${cameo(b, 'bride')}${cameo(g, 'groom')}
        <div class="hint">${esc(C.cameos.hint)}</div>
      </div>`));

    // 7 · Whispers of society
    html.push(sceneShell(SCENES[5], 5, board(pic(S.story, { fb: 'velvet' })) + '<div class="dim"></div>', `
      <div class="fit story" data-w="360" data-h="700">
        <div class="title on-image"><span class="caps">${esc(C.story.eyebrow)}</span><h2>${esc(C.story.title)}</h2></div>
        ${CONFIG.story.map((s, k) => `<button class="clip paper" type="button" data-k="${k}" aria-label="${esc(s.when)}: read clipping"><span class="pin"></span>
          <span class="hd"><span>${esc(CONFIG.columnist.paper)}</span><span>${esc(s.when)} · ${esc(s.where)}</span></span><p>${esc(s.text)}</p></button>`).join('')}
        <div class="hint">${esc(C.story.hint)}</div>
      </div>`));

    // 8 · The pocket watch
    const units = C.watch.units.map((u, k) => `<div class="unit"><div class="num" data-u="${k}"></div><span class="lbl">${esc(u)}</span></div>`).join('');
    html.push(sceneShell(SCENES[6], 6, board(pic(S.watch, { fb: 'interior', kb: true, alt2: true })) + '<div class="dim"></div>', `
      <div class="candela l">${cut(K.candelabra)}<div class="glow flick" data-base=".7" data-range=".3"></div></div>
      <div class="candela r">${cut(K.candelabra)}<div class="glow flick" data-base=".7" data-range=".3"></div></div>
      <div class="fit watch-zone" data-w="360" data-h="700">
        <div class="title on-image"><span class="caps">${esc(C.watch.eyebrow)}</span><h2>${esc(C.watch.title)}</h2></div>
        <div class="watch-drop"><div class="watch">${cut(K.watch, '', 'A gilded pocket watch').replace('class="cut "', 'class="cut " data-onfail="watch"')}
          <div class="hands" aria-hidden="true"><i class="hand h"></i><i class="hand m"></i><i class="hand s"></i><i class="pivot"></i></div></div></div>
        <div class="countdown" role="timer" aria-live="off">${units}</div>
        <div class="done"><span class="script">${esc(C.watch.done)}</span></div>
        <p class="note">${esc(C.watch.note)}</p>
      </div>`));

    // 9 · The dance card
    const fmtDate = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    const fmtTime = (t) => { const [h, m] = t.split(':').map(Number); return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`; };
    const cards = CONFIG.events.map((e, k) => `<article class="dcard" data-id="${e.id}"><div class="shadow"></div><div class="inner">
        <span class="caps no">Dance No. ${k + 1}</span>
        <img class="icon" data-icon="${e.icon}" alt="" aria-hidden="true">
        <h3>${esc(e.name)}</h3>
        <div class="when">${esc(fmtDate(e.date))}<br>${esc(fmtTime(e.time))}</div>
        <div class="where">${esc(e.venue)}</div>
        <div class="dress"><b>Dress</b>${esc(e.dress)}</div>
        <div class="actions">
          <a class="btn" href="${esc(CONFIG.mapsUrl)}" target="_blank" rel="noopener">${esc(C.dances.map)}</a>
          <button class="btn cal" type="button">${esc(C.dances.cal)}</button>
          <button class="btn reserve" type="button" aria-pressed="false"><svg class="tick" viewBox="0 0 26 26" aria-hidden="true"><path d="M4 14c3 2 5 5 6 7 3-7 8-13 13-17"/></svg><span class="lbl-off">${esc(C.dances.reserve)}</span><span class="lbl-on">${esc(C.dances.reserved)}</span></button>
        </div></div><div class="edge"></div></article>`).join('');
    html.push(sceneShell(SCENES[7], 7, board(pic(S.dances, { kb: true })) + '<div class="veil"></div>', `
      <div class="dances-head"><span class="caps">${esc(C.dances.eyebrow)}</span><h2>${esc(C.dances.title)}</h2><p>${esc(C.dances.intro)}</p></div>
      <div class="track-wrap"><div class="track" tabindex="0" aria-label="${esc(C.dances.title)}">${cards}</div></div>
      <div class="cover" aria-hidden="true"><div class="face">${crest({ cls: 'crest' })}<span class="script">${esc(C.dances.cover)}</span><span class="caps">${esc(cp.namesScript)}</span></div><div class="face back"></div>
        <div class="tassel"><span class="cord"></span><span class="knot"></span><span class="skirt"></span></div></div>`));

    // 10 · The carriage
    html.push(sceneShell(SCENES[8], 8, board(pic(S.venue, { alt: 'A lantern-lit palace drive under rose arches' })) + '<div class="top-shade"></div>', `
      <div class="lantern l sway"><div class="chain"></div><div class="body"></div></div>
      <div class="lantern r sway"><div class="chain" style="height:calc(var(--vh)*8)"></div><div class="body"></div></div>
      <div class="head on-image"><span class="caps">${esc(C.venue.eyebrow)}</span><h2>${esc(C.venue.title)}</h2><p>${esc(C.venue.copy)}</p></div>
      <div class="carriage-lane"><div class="carriage"><div class="dust"><i></i><i></i><i></i><i></i></div><div class="bob">${cut(K.carriage, '', 'A white and gold carriage drawn by two white horses')}</div></div></div>
      <a class="brass" href="${esc(CONFIG.mapsUrl)}" target="_blank" rel="noopener"><b>${esc(C.venue.button)}</b><small>${esc(CONFIG.venue.name)} · ${esc(CONFIG.venue.place)}</small></a>`));

    // 11 · The calling card
    const r = C.rsvp;
    html.push(sceneShell(SCENES[9], 9, board(pic(S.rsvp, { fb: 'night', alt: 'The palace at night, lit by lanterns' })) + '<div class="dim"></div>', `
      <div class="fit rsvp" data-w="360" data-h="700">
        <div class="title on-image"><span class="caps">${esc(r.eyebrow)}</span><h2>${esc(r.title)}</h2></div>
        <div class="tray" aria-hidden="true"></div>
        <div class="env back" aria-hidden="true"></div>
        <div class="env front" aria-hidden="true"><div class="pocket"></div><div class="flap"></div><div class="eseal">${cut(K.seal)}</div></div>
        <form class="calling" novalidate>
          <span class="emb">${esc(cp.namesScript)}</span>
          <span class="caps">${esc(r.by)}</span>
          <label for="guest-name">${esc(r.label)}</label>
          <input id="guest-name" name="guest" type="text" autocomplete="name" maxlength="60" placeholder="${esc(r.placeholder)}" value="${esc(guest)}">
          <button class="btn dark" type="submit">${esc(r.send)}</button>
          <div class="small">${esc(r.small)}</div>
        </form>
        <div class="sent" aria-live="polite"><span class="script">${esc(r.sent)}</span><small>${esc(r.sentSmall)}<a class="wa-link" href="#" target="_blank" rel="noopener" style="color:var(--gold-hi)">${esc(r.sentLink)}</a> · <a href="#" class="again" style="color:var(--gold-hi)">${esc(r.again)}</a></small></div>
        <div class="contacts"><span class="caps">${esc(r.contactsTitle)}</span>
          ${CONFIG.rsvp.contacts.map((c) => `<a class="contact" href="tel:${c.phone.replace(/[^\d+]/g, '')}" aria-label="Call ${esc(c.name)}, ${esc(c.role)}"><span><b>${esc(c.name)}</b><small>${esc(c.role)}</small></span><span class="ph">${esc(c.phone)}</span></a>`).join('')}
        </div>
      </div>`));

    // 12 · The farewell
    html.push(sceneShell(SCENES[10], 10, board(pic(S.farewell, { fb: 'night', alt2: true })) + '<div class="dim"></div><canvas class="fireworks" aria-hidden="true"></canvas>', `
      <div class="farewell on-image">
        ${crest()}
        <p class="line">${esc(C.farewell.line)}</p>
        <span class="tag foil">${esc(CONFIG.hashtag)}</span>
        <div class="yours">${esc(C.farewell.yours)}<span class="sig">${esc(CONFIG.columnist.name)}</span></div>
        <div class="footer">${esc(C.farewell.footer)} <b>${esc(CONFIG.brand)}</b></div>
      </div>`));

    $('#film').innerHTML = html.join('');
    $$('.dcard .icon').forEach((im) => { im.onerror = () => im.classList.add('fallback'); im.dataset.lazyicon = A(im.dataset.icon + '.webp'); });
  }

  /* ---------- fit fixed-size compositions to the viewport ---------- */
  function fitAll() {
    $$('.fit').forEach((el) => {
      const w = +el.dataset.w, h = +el.dataset.h, area = el.parentElement;
      const aw = area.clientWidth, ah = Math.max(area.clientHeight, vh * 100);
      const s = Math.min(aw / w, ah / h, +(el.dataset.max || 1.25));
      el.style.setProperty('--s', s.toFixed(4));
      el.style.width = w + 'px'; el.style.height = h + 'px';
    });
  }

  /* ======================================================================
     SOUND · original generated chamber music + tiny UI sounds
     ====================================================================== */
  const Sound = {
    ctx: null, on: false, mode: 'synth', el: null, master: null, music: null, sfx: null, verb: null, timer: null, nextBar: 0, bar: 0,
    ensure() {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
        const ctx = this.ctx = new AC();
        const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 3; comp.connect(ctx.destination);
        this.master = ctx.createGain(); this.master.gain.value = 1; this.master.connect(comp);
        this.music = ctx.createGain(); this.music.gain.value = 0; this.music.connect(this.master);
        this.sfx = ctx.createGain(); this.sfx.gain.value = 0; this.sfx.connect(this.master);
        // generated hall reverb
        const len = ctx.sampleRate * 3.2, ir = ctx.createBuffer(2, len, ctx.sampleRate);
        for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6) * (i < 80 ? i / 80 : 1); }
        this.verb = ctx.createConvolver(); this.verb.buffer = ir;
        const wet = ctx.createGain(); wet.gain.value = 0.42; this.verb.connect(wet); wet.connect(this.master);
        this.musicBus = ctx.createGain(); this.musicBus.connect(this.music); this.musicBus.connect(this.verb);
        this.sfxBus = ctx.createGain(); this.sfxBus.connect(this.sfx); const sv = ctx.createGain(); sv.gain.value = .5; this.sfxBus.connect(sv); sv.connect(this.verb);
        this.noise = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate); const nd = this.noise.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
      }
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return true;
    },
    mtof: (m) => 440 * Math.pow(2, (m - 69) / 12),
    bowed(t, midi, dur, vel, { pan = 0, bright = 2.6, vib = 0.0045, att = 0.14, hp = 90 } = {}) {
      const ctx = this.ctx, f = this.mtof(midi), end = t + dur;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vel, t + att); g.gain.setTargetAtTime(vel * .78, t + att, .35); g.gain.setTargetAtTime(0.0001, end, .18);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(Math.min(f * bright * .6, 5000), t); lp.frequency.linearRampToValueAtTime(Math.min(f * bright, 5200), t + att * 2); lp.Q.value = .6;
      const body = ctx.createBiquadFilter(); body.type = 'peaking'; body.frequency.value = 900; body.gain.value = 3; body.Q.value = 1.1;
      const hpf = ctx.createBiquadFilter(); hpf.type = 'highpass'; hpf.frequency.value = hp;
      const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 5 + Math.random() * .8; const lg = ctx.createGain(); lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * vib, t + .5); lfo.connect(lg);
      [-8, 0, 7].forEach((cents) => { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = cents + (Math.random() * 4 - 2); lg.connect(o.frequency); o.connect(lp); o.start(t); o.stop(end + 1); });
      lfo.start(t); lfo.stop(end + 1);
      lp.connect(body); body.connect(hpf); hpf.connect(g);
      if (p) { p.pan.value = pan; g.connect(p); p.connect(this.musicBus); } else g.connect(this.musicBus);
    },
    pluck(t, midi, vel, bus, { pan = 0, santoor = false } = {}) {
      const ctx = this.ctx, f = this.mtof(midi);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vel, t + .005); g.gain.exponentialRampToValueAtTime(0.0001, t + (santoor ? 1.4 : 2.2));
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(5200, t); lp.frequency.exponentialRampToValueAtTime(900, t + 1.2);
      const parts = santoor ? [[1, 'triangle', 1], [2, 'sine', .35], [2.76, 'sine', .12], [4.07, 'sine', .05]] : [[1, 'triangle', 1], [2, 'sine', .25], [3, 'sine', .08]];
      parts.forEach(([r, type, a]) => { const o = ctx.createOscillator(); o.type = type; o.frequency.value = f * r; const og = ctx.createGain(); og.gain.value = a; o.connect(og); og.connect(lp); o.start(t); o.stop(t + 2.4); });
      const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      lp.connect(g); if (p) { p.pan.value = pan; g.connect(p); p.connect(bus); } else g.connect(bus);
    },
    // A gentle original waltz in D major, 3/4, ~88 bpm. [chord tones for cello/viola], melody as [midi, beats]
    score: {
      chords: [[50, 62, 66], [47, 62, 66], [43, 62, 67], [45, 61, 64], [50, 62, 66], [42, 61, 66], [43, 62, 67], [45, 61, 67],
               [47, 62, 66], [43, 62, 67], [50, 62, 66], [45, 61, 64], [43, 62, 67], [45, 61, 64], [50, 62, 66], [50, 57, 62]],
      melody: [[[69, 1], [74, 1], [78, 1]], [[78, 2], [76, 1]], [[71, 1], [74, 1], [79, 1]], [[78, 1], [76, 2]],
               [[81, 2], [78, 1]], [[81, 1], [85, 1], [81, 1]], [[83, 1.5], [81, .5], [79, 1]], [[76, 3]],
               [[78, 1], [74, 1], [71, 1]], [[79, 2], [83, 1]], [[81, 1], [78, 1], [74, 1]], [[76, 1], [73, 1], [76, 1]],
               [[74, 1], [79, 1], [83, 1]], [[85, 1.5], [83, .5], [81, 1]], [[86, 3]], [[81, 2], [78, 1]]]
    },
    scheduleBar(t, n) {
      const beat = 60 / 88, sc = this.score, k = n % 16, pass = Math.floor(n / 16) % 2, ch = sc.chords[k];
      // cello: root on the downbeat
      this.bowed(t, ch[0] - (ch[0] > 48 ? 12 : 0), beat * 2.7, .085, { pan: -.25, bright: 3.2, vib: .003, att: .09, hp: 40 });
      // viola: soft double-stops on beats two and three
      [1, 2].forEach((b) => { ch.slice(1).forEach((m) => this.bowed(t + beat * b, m - 12, beat * .78, .028, { pan: .3, bright: 2.4, vib: .003, att: .06, hp: 120 })); });
      // violin: the melody (an octave lower on the second pass for colour)
      let at = 0; sc.melody[k].forEach(([m, d]) => { this.bowed(t + at * beat, m - (pass ? 12 : 0), d * beat * .97, .07, { pan: -.05, bright: 2.8, vib: .005, att: .12, hp: 200 }); at += d; });
      // harp / santoor accents every fourth bar
      if (k % 4 === 3) { const arp = [ch[1], ch[2], ch[1] + 12, ch[2] + 12, ch[1] + 24]; arp.forEach((m, j) => this.pluck(t + beat * 2 + j * .09, m, .07, this.musicBus, { pan: .4 - j * .15, santoor: pass === 1 })); }
      if (k === 15) this.pluck(t, 86, .05, this.musicBus, { santoor: true });
    },
    tick() {
      const ctx = this.ctx, bar = 3 * 60 / 88;
      while (this.nextBar < ctx.currentTime + 0.35) { this.scheduleBar(this.nextBar, this.bar++); this.nextBar += bar; }
    },
    async detectFile() {
      const f = CONFIG.music.file; if (!f) return;
      try { const r = await fetch(f, { method: 'HEAD' }); if (r.ok && /audio|mpeg|octet/.test(r.headers.get('content-type') || 'audio')) this.mode = 'file'; } catch (e) { /* use generated music */ }
    },
    start() {
      if (!this.ensure()) return; this.on = true;
      const ctx = this.ctx, now = ctx.currentTime, vol = CONFIG.music.volume;
      this.music.gain.cancelScheduledValues(now); this.music.gain.setValueAtTime(this.music.gain.value, now); this.music.gain.linearRampToValueAtTime(vol, now + CONFIG.music.fadeIn);
      this.sfx.gain.setTargetAtTime(1, now, .05);
      if (this.mode === 'file') {
        if (!this.el) { this.el = new Audio(CONFIG.music.file); this.el.loop = true; this.el.crossOrigin = 'anonymous'; const src = ctx.createMediaElementSource(this.el); src.connect(this.music); }
        this.el.play().catch(() => {});
      } else if (!this.timer) {
        this.nextBar = Math.max(this.nextBar, now + .1); this.tick(); this.timer = setInterval(() => this.tick(), 60);
      }
      ui.music(true);
    },
    stop() {
      if (!this.ctx) return; this.on = false; const now = this.ctx.currentTime;
      this.music.gain.cancelScheduledValues(now); this.music.gain.setValueAtTime(this.music.gain.value, now); this.music.gain.linearRampToValueAtTime(0, now + .8);
      this.sfx.gain.setTargetAtTime(0, now, .05);
      setTimeout(() => { if (!this.on) { clearInterval(this.timer); this.timer = null; if (this.el) this.el.pause(); } }, 900);
      ui.music(false);
    },
    toggle() { this.on ? this.stop() : this.start(); },
    noiseHit(t, { freq = 1800, q = 1.4, dur = .2, vel = .2, type = 'bandpass' } = {}) {
      const ctx = this.ctx, s = ctx.createBufferSource(); s.buffer = this.noise;
      const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vel, t + .004); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(f); f.connect(g); g.connect(this.sfxBus); s.start(t, Math.random()); s.stop(t + dur + .05);
    },
    play(name) {
      if (!this.ctx || !this.on) return;
      const t = this.ctx.currentTime;
      if (name === 'crack') {
        this.noiseHit(t, { freq: 2400, q: 2, dur: .09, vel: .35 }); this.noiseHit(t + .05, { freq: 1500, q: 1.2, dur: .16, vel: .25 }); this.noiseHit(t + .11, { freq: 3200, q: 3, dur: .05, vel: .15 });
        const o = this.ctx.createOscillator(), g = this.ctx.createGain(); o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(48, t + .18);
        g.gain.setValueAtTime(.25, t); g.gain.exponentialRampToValueAtTime(0.0001, t + .22); o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + .25);
      } else if (name === 'rustle') {
        for (let i = 0; i < 6; i++) this.noiseHit(t + i * .06 + Math.random() * .03, { freq: 2600 + Math.random() * 2400, q: .7, dur: .12 + Math.random() * .1, vel: .05 + Math.random() * .05 });
      } else if (name === 'chime') {
        [88, 93, 98].forEach((m, j) => this.pluck(t + j * .08, m, .045, this.sfxBus, { santoor: true }));
      } else if (name === 'thud') {
        this.noiseHit(t, { freq: 300, q: .8, dur: .18, vel: .3, type: 'lowpass' });
        const o = this.ctx.createOscillator(), g = this.ctx.createGain(); o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(40, t + .2);
        g.gain.setValueAtTime(.3, t); g.gain.exponentialRampToValueAtTime(0.0001, t + .25); o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + .3);
      } else if (name === 'harp') {
        [62, 66, 69, 74, 78, 81, 86, 90].forEach((m, j) => this.pluck(t + j * .075, m, .06, this.sfxBus, { pan: -.6 + j * .17 }));
      }
    }
  };

  /* ======================================================================
     FX CANVAS · drifting petals, golden dust, the seal's petal burst
     ====================================================================== */
  const FX = {
    cv: null, ctx: null, W: 0, H: 0, dpr: 1, parts: [], drift: false, running: false, imgs: [],
    init() {
      this.cv = $('#fx'); this.ctx = this.cv.getContext('2d');
      [K.rosePetal, K.wisteriaPetal].forEach((n) => { const im = new Image(); im.onload = () => { im.ok = true; }; im.src = A(n + '.webp'); this.imgs.push(im); });
      this.resize();
    },
    resize() {
      this.dpr = Math.min(devicePixelRatio || 1, 2); this.W = this.cv.clientWidth; this.H = innerHeight;
      this.cv.width = Math.round(this.W * this.dpr); this.cv.height = Math.round(this.H * this.dpr);
    },
    petal(x, y, kind) {
      const z = rand(.55, 1.2);
      return { kind, x, y, z, vx: rand(-.3, .3), vy: rand(.35, .8) * z, rot: rand(0, 6.28), vr: rand(-.02, .02), tilt: rand(0, 6.28), vt: rand(.02, .05), size: rand(20, 32) * z, img: this.imgs[Math.random() < .55 ? 0 : 1], life: Infinity, a: 0 };
    },
    setDrift(on) {
      if (STATIC || on === this.drift) return; this.drift = on;
      if (on) {
        const n = small ? 14 : 24, d = small ? 10 : 16;
        for (let i = 0; i < n; i++) this.parts.push(this.petal(rand(0, this.W), rand(-this.H, this.H * .8), 'drift'));
        for (let i = 0; i < d; i++) this.parts.push({ kind: 'dust', x: rand(0, this.W), y: rand(0, this.H), vx: rand(-.15, .15), vy: rand(-.12, .05), r: rand(.8, 2), tw: rand(0, 6.28), life: Infinity, a: 0 });
        this.run();
      }
    },
    burst(x, y, n = 42) {
      if (STATIC) return;
      for (let i = 0; i < n; i++) {
        const p = this.petal(x, y, 'burst'), ang = rand(-Math.PI * .95, -Math.PI * .05), sp = rand(3, 9.5);
        p.vx = Math.cos(ang) * sp; p.vy = Math.sin(ang) * sp - 2; p.vr = rand(-.15, .15); p.vt = rand(.08, .2); p.life = rand(120, 190); p.a = 1; this.parts.push(p);
      }
      this.run();
    },
    run() { if (this.running) return; this.running = true; gsap.ticker.add(this.step); },
    step: (time, dt) => {
      const f = FX, ctx = f.ctx, k = Math.min(dt / 16.67, 3), W = f.W, H = f.H, t = time;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, f.cv.width, f.cv.height);
      const wind = Math.sin(t * .35) * .45 + Math.sin(t * 1.1 + 1) * .25 + Math.sin(t * .13) * .3;
      let alive = 0;
      for (let i = f.parts.length - 1; i >= 0; i--) {
        const p = f.parts[i];
        if (p.kind === 'dust') {
          if (!f.drift) { p.a -= .03 * k; if (p.a <= 0) { f.parts.splice(i, 1); continue; } } else p.a = Math.min(1, p.a + .01 * k);
          p.x += (p.vx + wind * .15) * k; p.y += p.vy * k; p.tw += .05 * k;
          if (p.y < -5) p.y = H + 5; if (p.y > H + 5) p.y = -5; if (p.x < -5) p.x = W + 5; if (p.x > W + 5) p.x = -5;
          ctx.globalAlpha = p.a * (.35 + .35 * Math.sin(p.tw)); ctx.fillStyle = '#fff1c8';
          ctx.setTransform(f.dpr, 0, 0, f.dpr, 0, 0); ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill(); alive++; continue;
        }
        if (p.kind === 'burst') { p.vy += .16 * k; p.vx *= Math.pow(.985, k); p.vy *= Math.pow(.99, k); p.life -= k; p.a = clamp(p.life / 60, 0, 1); if (p.life <= 0 || p.y > H + 40) { f.parts.splice(i, 1); continue; } }
        else {
          if (!f.drift) { p.a -= .02 * k; if (p.a <= 0) { f.parts.splice(i, 1); continue; } } else p.a = Math.min(1, p.a + .015 * k);
          p.vx += ((wind * 1.2 * p.z) - p.vx) * .02 * k;
          if (p.y > H + 40) { p.y = -40; p.x = rand(-20, W + 20); }
          if (p.x > W + 50) p.x = -40; if (p.x < -50) p.x = W + 40;
        }
        p.x += p.vx * k; p.y += p.vy * k; p.rot += p.vr * k; p.tilt += p.vt * k;
        const c = Math.cos(p.rot), s = Math.sin(p.rot), sx = Math.cos(p.tilt), sz = p.size;
        ctx.globalAlpha = p.a * (.75 + .25 * Math.abs(sx));
        ctx.setTransform(f.dpr * c * sx, f.dpr * s * sx, -f.dpr * s, f.dpr * c, f.dpr * p.x, f.dpr * p.y);
        if (p.img && p.img.ok) ctx.drawImage(p.img, -sz / 2, -sz / 2, sz, sz);
        else { ctx.fillStyle = p.img === f.imgs[0] ? '#f1c4c8' : '#c6b3d9'; ctx.beginPath(); ctx.ellipse(0, 0, sz * .32, sz * .45, 0, 0, 6.283); ctx.fill(); }
        alive++;
      }
      ctx.globalAlpha = 1;
      if (!alive && !f.drift) { f.running = false; gsap.ticker.remove(f.step); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, f.cv.width, f.cv.height); }
    }
  };

  /* ======================================================================
     FIREWORKS · gold & lilac sparks with gravity and trails
     ====================================================================== */
  const Fireworks = {
    cv: null, ctx: null, W: 0, H: 0, dpr: 1, rockets: [], sparks: [], on: false, next: 0, sprites: {},
    colors: ['#EFE0B0', '#F6D58A', '#C6B3D9', '#E8DAF5', '#F1D3D3', '#FFF6DE'],
    init() {
      this.cv = $('.s-farewell canvas'); this.ctx = this.cv.getContext('2d');
      this.colors.forEach((c) => { const s = document.createElement('canvas'); s.width = s.height = 32; const g = s.getContext('2d'); const r = g.createRadialGradient(16, 16, 0, 16, 16, 16);
        r.addColorStop(0, '#ffffff'); r.addColorStop(.2, c); r.addColorStop(.5, c + '66'); r.addColorStop(1, c + '00'); g.fillStyle = r; g.fillRect(0, 0, 32, 32); this.sprites[c] = s; });
    },
    resize() { this.dpr = Math.min(devicePixelRatio || 1, 2); this.W = this.cv.clientWidth; this.H = this.cv.clientHeight; this.cv.width = Math.round(this.W * this.dpr); this.cv.height = Math.round(this.H * this.dpr); },
    set(on) { if (STATIC || on === this.on) return; this.on = on; if (on) { this.resize(); this.next = 0; gsap.ticker.add(this.step); } },
    launch() {
      const W = this.W, H = this.H;
      this.rockets.push({ x: rand(W * .18, W * .82), y: H * .62, vx: rand(-.6, .6), vy: -rand(H * .0105, H * .0135), color: this.colors[(Math.random() * this.colors.length) | 0], trail: [] });
    },
    explode(r) {
      const n = small ? 54 : 80, alt = this.colors[(Math.random() * this.colors.length) | 0];
      for (let i = 0; i < n; i++) {
        const a = (i / n) * 6.283 + rand(-.05, .05), sp = rand(1.4, 4.2) * (this.H / 800);
        this.sparks.push({ x: r.x, y: r.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: rand(60, 105), max: 105, color: Math.random() < .7 ? r.color : alt, trail: [] });
      }
      const cap = small ? 240 : 420; if (this.sparks.length > cap) this.sparks.splice(0, this.sparks.length - cap);
    },
    step: (time, dt) => {
      const f = Fireworks, ctx = f.ctx, k = Math.min(dt / 16.67, 3);
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, f.cv.width, f.cv.height); ctx.setTransform(f.dpr, 0, 0, f.dpr, 0, 0);
      ctx.globalCompositeOperation = 'lighter';
      if (f.on && time > f.next && f.rockets.length < 3) { f.launch(); f.next = time + rand(.7, 1.5); }
      for (let i = f.rockets.length - 1; i >= 0; i--) {
        const r = f.rockets[i]; r.trail.push([r.x, r.y]); if (r.trail.length > 8) r.trail.shift();
        r.x += r.vx * k; r.y += r.vy * k; r.vy += .12 * k * (f.H / 800);
        r.trail.forEach(([x, y], j) => { ctx.globalAlpha = j / r.trail.length * .7; ctx.drawImage(f.sprites[r.color], x - 4, y - 4, 8, 8); });
        if (r.vy >= -.6) { f.explode(r); f.rockets.splice(i, 1); }
      }
      for (let i = f.sparks.length - 1; i >= 0; i--) {
        const p = f.sparks[i]; p.trail.push([p.x, p.y]); if (p.trail.length > 5) p.trail.shift();
        p.vx *= Math.pow(.982, k); p.vy = p.vy * Math.pow(.982, k) + .045 * k * (f.H / 800); p.x += p.vx * k; p.y += p.vy * k; p.life -= k;
        if (p.life <= 0) { f.sparks.splice(i, 1); continue; }
        const a = clamp(p.life / p.max, 0, 1), sp = f.sprites[p.color];
        for (let j = 0; j < p.trail.length; j++) { ctx.globalAlpha = a * (j + 1) / p.trail.length * .55; const [x, y] = p.trail[j]; ctx.drawImage(sp, x - 4.5, y - 4.5, 9, 9); }
        ctx.globalAlpha = a * (.8 + .2 * Math.sin(time * 30 + i)); ctx.drawImage(sp, p.x - 9, p.y - 9, 18, 18);
      }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
      if (!f.on && !f.rockets.length && !f.sparks.length) { gsap.ticker.remove(f.step); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, f.cv.width, f.cv.height); }
    }
  };

  /* ======================================================================
     LIVING DETAILS · pendulum sway, candle flicker, crystal glints
     ====================================================================== */
  const swayers = [], flickers = [];
  let swayBoost = 0, active = 0;
  function addSway(el, amp, period, boost = 1) { if (el) swayers.push({ el, amp, period, boost, ph: rand(0, 6.28), sec: +el.closest('.scene, #opener')?.dataset?.i || 0 }); }
  function living(time) {
    const v = window.__lenis ? Math.abs(window.__lenis.velocity || 0) : 0;
    swayBoost += (clamp(v / 28, 0, 1) - swayBoost) * (v / 28 > swayBoost ? .12 : .025);
    for (const s of swayers) {
      if (Math.abs(s.sec - active) > 1) continue;
      const w = 6.2832 / s.period, a = s.amp * (1 + swayBoost * 2.4 * s.boost) * Math.sin(time * w + s.ph) + s.amp * .22 * Math.sin(time * w * 1.91 + s.ph * 1.7);
      s.el.style.transform = `rotate(${a.toFixed(3)}deg)`;
    }
    for (const fl of flickers) {
      if (fl.sec >= 0 && Math.abs(fl.sec - active) > 1 && !(fl.sec === -1)) continue;
      const n = .55 * Math.sin(time * 7.3 + fl.s) + .3 * Math.sin(time * 13.9 + fl.s * 2.1) + .15 * Math.sin(time * 29.7 + fl.s * 3.3);
      fl.el.style.opacity = clamp(fl.base + fl.range * n * .5, 0, 1).toFixed(3);
      fl.el.style.transform = `scale(${(1 + n * .025).toFixed(4)})`;
    }
  }
  let nextGlint = 0;
  function glints(time) {
    if (SCENES[active]?.id !== 'doors' || time < nextGlint) return;
    nextGlint = time + rand(.35, 1.4);
    const gl = $$('#s-doors .glint'); const g = gl[(Math.random() * gl.length) | 0]; if (!g) return;
    g.style.left = rand(18, 82) + '%'; g.style.top = rand(30, 88) + '%';
    g.classList.remove('go'); void g.offsetWidth; g.classList.add('go');
  }

  /* ======================================================================
     UI · progress, dots, music button, toast
     ====================================================================== */
  const ui = {
    music(on) { const b = $('#music'); b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.setAttribute('aria-label', on ? 'Pause music' : 'Play music'); },
    toast(msg, title) { const t = $('#toast'); t.innerHTML = `<small>${esc(title || '')}</small>${esc(msg)}`; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 4200); }
  };
  let starts = [];
  function measure() { starts = $$('.scene').map((s) => s.getBoundingClientRect().top + scrollY + F * vh); starts[0] = 0; }
  function setActive(i) {
    if (i === active && document.body.dataset.active) return;
    active = i; document.body.dataset.active = SCENES[i].id;
    $$('#dots button').forEach((b, k) => { b.classList.toggle('on', k === i); b.setAttribute('aria-current', k === i ? 'step' : 'false'); });
    $$('.scene').forEach((s, k) => { s.classList.toggle('asleep', Math.abs(k - i) > 1); s.classList.toggle('rising', k === i + 1 || (k === i && k > 0)); if (k >= i - 1 && k <= i + 2) loadWithin(s); });
    if (i >= 6) { $$('.dcard .icon').forEach((im) => { if (!im.src) im.src = im.dataset.lazyicon; }); }
    FX.setDrift(SCENES[i].id === 'palace');
    Fireworks.set(SCENES[i].id === 'farewell');
    backdrop(SCENES[i].id);
  }
  let bdOn = 0, bdName = '';
  function backdrop(id) {
    const name = S[id] || S.cameos || 'ballroom'; if (name === bdName || innerWidth < 560) return; bdName = name;
    const layers = $$('#backdrop .bd-layer'); bdOn = 1 - bdOn;
    layers[bdOn].style.backgroundImage = `url('${A(name + '.jpg')}')`; layers[bdOn].classList.add('on'); layers[1 - bdOn].classList.remove('on');
  }
  function onScroll() {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    $('#progress span').style.transform = `scaleX(${clamp(y / Math.max(max, 1), 0, 1).toFixed(4)})`;
    let i = 0; for (let k = 0; k < starts.length; k++) if (y + vh * 45 >= starts[k] - F * vh) i = k;
    if (i !== active || !document.body.dataset.active) setActive(i);
  }
  function scrollToScene(i) {
    const y = i === 0 ? 0 : starts[i] + 2;
    if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 3) }); else window.scrollTo({ top: y, behavior: STATIC ? 'auto' : 'smooth' });
  }

  /* ======================================================================
     INTERACTIONS
     ====================================================================== */
  // ---- countdown & watch hands ----
  const target = new Date(CONFIG.countdownTarget).getTime();
  function buildOdometers() {
    $$('.countdown .num').forEach((n, k) => {
      const digits = k === 0 ? 3 : 2;
      n.innerHTML = Array.from({ length: digits }, () => `<span class="odo"><span class="strip">${'0123456789'.split('').map((d) => `<span>${d}</span>`).join('')}</span></span>`).join('');
    });
  }
  function tickCountdown() {
    let d = Math.max(0, target - Date.now());
    const zone = $('.watch-zone'); if (d <= 0) { zone.classList.add('finished'); return; }
    const vals = [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
    $$('.countdown .num').forEach((n, k) => {
      const s = String(vals[k]).padStart(k === 0 ? 3 : 2, '0').slice(-(k === 0 ? 3 : 2));
      $$('.strip', n).forEach((st, j) => { st.style.transform = `translateY(${-(+s[j]) * 10}%)`; });
    });
    $('.countdown').setAttribute('aria-label', `${vals[0]} days, ${vals[1]} hours, ${vals[2]} minutes and ${vals[3]} seconds to go`);
  }
  function hands() {
    if (Math.abs(active - 6) > 1 && !STATIC) return;
    const n = new Date(), s = n.getSeconds() + n.getMilliseconds() / 1000, m = n.getMinutes() + s / 60, h = (n.getHours() % 12) + m / 60;
    const set = (sel, deg) => { const el = $(sel); if (el) el.style.transform = `rotate(${deg}deg)`; };
    set('.watch .hand.h', h * 30); set('.watch .hand.m', m * 6); set('.watch .hand.s', s * 6);
  }

  // ---- dance card: calendar, reservations, swipe tilt & desktop drag ----
  function icsFor(e) {
    const [y, mo, d] = e.date.split('-').map(Number), [hh, mm] = e.time.split(':').map(Number);
    const start = new Date(Date.UTC(y, mo - 1, d, hh, mm) - 330 * 6e4), end = new Date(start.getTime() + e.hours * 36e5);
    const f = (dt) => dt.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const x = (s) => String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
    const fold = (l) => { const out = []; while (l.length > 74) { out.push(l.slice(0, 74)); l = ' ' + l.slice(74); } out.push(l); return out.join('\r\n'); };
    return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//' + x(CONFIG.brand) + '//The Royal Season//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      `UID:${e.id}-${e.date}@${CONFIG.storageKey}`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(start)}`, `DTEND:${f(end)}`,
      `SUMMARY:${x(e.name + ' · ' + CONFIG.couple.namesScript)}`, `LOCATION:${x(e.venue + ', ' + CONFIG.venue.name + ', ' + CONFIG.eventPlace)}`,
      `DESCRIPTION:${x('Dress: ' + e.dress + '\nDirections: ' + CONFIG.mapsUrl)}`, `URL:${location.href.split('?')[0]}`,
      'BEGIN:VALARM', 'TRIGGER:-PT3H', 'ACTION:DISPLAY', `DESCRIPTION:${x(e.name)}`, 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].map(fold).join('\r\n') + '\r\n';
  }
  function downloadICS(e) {
    const blob = new Blob([icsFor(e)], { type: 'text/calendar;charset=utf-8' }), url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = `${e.id}-${CONFIG.couple.namesScript}.ics`.replace(/&/g, 'and').replace(/[^\w.]+/g, '-').toLowerCase(); document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }
  let reserved = new Set(store.get(CONFIG.storageKey, []).filter((id) => CONFIG.events.some((e) => e.id === id)));
  function paintReservations() {
    $$('.dcard').forEach((c) => { const on = reserved.has(c.dataset.id), b = $('.reserve', c); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
  }
  function initDances() {
    paintReservations();
    $$('.dcard').forEach((c) => {
      const e = CONFIG.events.find((v) => v.id === c.dataset.id);
      $('.cal', c).addEventListener('click', () => { downloadICS(e); Sound.play('chime'); });
      $('.reserve', c).addEventListener('click', () => {
        const had = reserved.has(e.id); had ? reserved.delete(e.id) : reserved.add(e.id);
        store.set(CONFIG.storageKey, [...reserved]); paintReservations(); Sound.play(had ? 'rustle' : 'chime');
        if (!had && reserved.size === CONFIG.events.length) setTimeout(() => ui.toast(C.dances.toast, C.dances.toastTitle), 500);
      });
    });
    const track = $('.track'), cards = $$('.dcard', track);
    let raf = 0;
    const tilt = () => {
      raf = 0; const tr = track.getBoundingClientRect(), cx = tr.left + tr.width / 2;
      cards.forEach((c) => { const r = c.getBoundingClientRect(), d = clamp((r.left + r.width / 2 - cx) / r.width, -1.6, 1.6);
        c.style.transform = STATIC ? '' : `rotateY(${(-d * 16).toFixed(2)}deg) translateZ(${(-Math.abs(d) * 36).toFixed(1)}px)`; c.style.opacity = (1 - Math.min(Math.abs(d), 1.6) * .22).toFixed(3); });
    };
    track.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(tilt); }, { passive: true });
    addEventListener('resize', () => requestAnimationFrame(tilt)); tilt();
    // mouse drag on desktop
    let down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener('pointerdown', (ev) => { if (ev.pointerType !== 'mouse') return; down = true; moved = false; sx = ev.clientX; sl = track.scrollLeft; });
    addEventListener('pointermove', (ev) => { if (!down) return; const dx = ev.clientX - sx; if (Math.abs(dx) > 4 && !moved) { moved = true; track.classList.add('dragging'); } if (moved) track.scrollLeft = sl - dx; });
    addEventListener('pointerup', () => {
      if (!down) return; down = false; if (!moved) return;
      const tr = track.getBoundingClientRect(), cx = tr.left + tr.width / 2; let best = cards[0], bd = 1e9;
      cards.forEach((c) => { const r = c.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - cx); if (d < bd) { bd = d; best = c; } });
      const r = best.getBoundingClientRect(); track.scrollTo({ left: track.scrollLeft + (r.left + r.width / 2 - cx), behavior: 'smooth' });
      setTimeout(() => track.classList.remove('dragging'), 450);
    });
    track.addEventListener('click', (ev) => { if (moved) { ev.preventDefault(); ev.stopPropagation(); moved = false; } }, true);
  }

  // ---- lightbox: lift a cameo (flip to notes) or a clipping toward the viewer ----
  let lbClose = null;
  function lightbox(source, content, { flip = false, rot = 0 } = {}) {
    const lb = $('#lightbox');
    lb.innerHTML = `<div class="scrim"></div><div class="holder"></div><div class="close-hint">${esc(C.cameos.close)}</div>`;
    const holder = $('.holder', lb); holder.appendChild(content);
    content.style.position = 'absolute';
    const cw = content.offsetWidth, ch = content.offsetHeight;
    content.style.left = -cw / 2 + 'px'; content.style.top = -ch / 2 + 'px';
    const lr = lb.getBoundingClientRect(), r = source.getBoundingClientRect();
    const fin = Math.min(1.08, (lr.width - 28) / cw, (lr.height * .84) / ch);
    const dx = r.left + r.width / 2 - (lr.left + lr.width / 2), dy = r.top + r.height / 2 - (lr.top + lr.height / 2), s0 = r.width / cw;
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); source.style.visibility = 'hidden';
    const card = flip ? $('.flipcard', content) : null;
    Sound.play('rustle');
    if (STATIC) {
      content.style.transform = `scale(${fin})`; if (card) card.style.transform = 'rotateY(180deg)';
      $('.scrim', lb).style.opacity = 1; $('.close-hint', lb).style.opacity = 1;
    } else {
      gsap.fromTo(content, { x: dx, y: dy, scale: s0, rotation: rot }, { x: 0, y: 0, scale: fin, rotation: 0, duration: .85, ease: 'power3.out' });
      gsap.to($('.scrim', lb), { opacity: 1, duration: .6 });
      gsap.to($('.close-hint', lb), { opacity: 1, duration: .5, delay: .8 });
      if (card) gsap.fromTo(card, { rotationY: 0 }, { rotationY: 180, duration: 1.1, ease: 'power2.inOut', delay: .3 });
      if (window.__lenis) window.__lenis.stop();
    }
    const close = () => {
      lb.removeEventListener('click', close); removeEventListener('keydown', key); lbClose = null;
      const done = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); lb.innerHTML = ''; source.style.visibility = ''; source.focus({ preventScroll: true }); if (window.__lenis) window.__lenis.start(); };
      Sound.play('rustle');
      if (STATIC) return done();
      const r2 = source.getBoundingClientRect();
      if (card) gsap.to(card, { rotationY: 0, duration: .7, ease: 'power2.inOut' });
      gsap.to($('.scrim', lb), { opacity: 0, duration: .6, delay: card ? .3 : 0 });
      gsap.to($('.close-hint', lb), { opacity: 0, duration: .2 });
      gsap.to(content, { x: r2.left + r2.width / 2 - (lr.left + lr.width / 2), y: r2.top + r2.height / 2 - (lr.top + lr.height / 2), scale: r2.width / cw, rotation: rot, duration: .75, ease: 'power3.inOut', delay: card ? .35 : 0, onComplete: done });
    };
    const key = (ev) => { if (ev.key === 'Escape') close(); };
    setTimeout(() => { lb.addEventListener('click', close); addEventListener('keydown', key); }, 50);
    lbClose = close;
    lb.focus?.();
  }
  function initCameos() {
    $$('.cameo').forEach((btn) => btn.addEventListener('click', () => {
      const p = CONFIG.couple[btn.dataset.who];
      const el = document.createElement('div');
      el.innerHTML = `<div class="flipcard"><div class="side front"><div class="oval"><div class="portrait"><img src="${A(p.portrait + '.webp')}" alt="${esc(p.formal)}"></div><div class="shine"></div>${pearlRing()}</div></div>
        <div class="side back"><div class="notes"><span class="caps">${esc(p.epithet)}</span><h4>${esc(C.cameos.notes)}</h4><ol>${p.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ol></div></div></div>`;
      el.style.width = '300px'; el.style.height = '390px';
      lightbox($('.oval', btn), el, { flip: true });
    }));
  }
  function initClips() {
    const tilts = [-3, 2.4, -1.6, 2.8];
    $$('.clip').forEach((btn, k) => btn.addEventListener('click', () => {
      const s = CONFIG.story[k]; const el = document.createElement('div');
      el.innerHTML = `<div class="clip paper big"><span class="pin"></span><span class="hd"><span>${esc(CONFIG.columnist.paper)}</span><span>${esc(s.when)} · ${esc(s.where)}</span></span><p>${esc(s.text)}</p></div>`;
      el.style.width = '330px';
      lightbox(btn, el, { rot: tilts[k] });
    }));
  }

  // ---- RSVP ----
  function waUrl(name) {
    const r = CONFIG.rsvp; let msg = r.message.replace('{guest}', name);
    const names = CONFIG.events.filter((e) => reserved.has(e.id)).map((e) => e.name);
    if (names.length) msg += '\n\n' + r.dancesLine.replace('{dances}', names.join(', '));
    return `https://wa.me/${r.whatsapp}?text=${encodeURIComponent(msg)}`;
  }
  function initRSVP() {
    const form = $('.calling'), input = $('#guest-name'), env = $$('.env'), envF = $('.env.front'), sent = $('.sent');
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = input.value.trim().replace(/\s+/g, ' ');
      if (!name) { ui.toast(C.rsvp.needName, CONFIG.columnist.name); input.focus(); if (!STATIC) gsap.fromTo(form, { x: -8 }, { x: 0, duration: .5, ease: 'elastic.out(1,.3)' }); return; }
      const url = waUrl(name); $('.wa-link').href = url;
      const go = () => { const w = window.open(url, '_blank'); if (w) { try { w.opener = null; } catch (e) { /* ignore */ } } else location.href = url; };
      if (STATIC) { form.style.display = 'none'; env.forEach((e) => { e.style.opacity = 1; }); $('.eseal', envF).style.opacity = 1; $('.flap', envF).style.transform = 'none'; sent.style.opacity = 1; go(); return; }
      Sound.play('rustle');
      const tl = gsap.timeline({ onComplete: go });
      tl.fromTo(env, { opacity: 0, y: 70 }, { opacity: 1, y: 30, duration: .5, ease: 'power2.out' })
        .to(form, { y: 74, scale: .8, duration: .85, ease: 'power3.inOut' }, .3)
        .to(env, { y: 0, duration: .85, ease: 'power3.inOut' }, .3)
        .to(form, { opacity: 0, duration: .2 }, 1.05)
        .to($('.flap', envF), { rotationX: 0, duration: .55, ease: 'power2.inOut' }, 1.05)
        .fromTo($('.eseal', envF), { scale: 2.6, opacity: 0, rotation: -25 }, { scale: 1, opacity: 1, rotation: 0, duration: .4, ease: 'power3.in', onComplete: () => Sound.play('thud') }, 1.5)
        .to(sent, { opacity: 1, duration: .6 }, 1.9);
    });
    $('.again').addEventListener('click', (ev) => {
      ev.preventDefault();
      if (STATIC) { form.style.display = ''; env.forEach((e) => { e.style.opacity = 0; }); sent.style.opacity = 0; return; }
      gsap.to([...env, sent], { opacity: 0, duration: .4 }); gsap.set($('.flap', envF), { rotationX: 180, delay: .4 }); gsap.set($('.eseal', envF), { opacity: 0, delay: .4 });
      gsap.fromTo(form, { y: 40, opacity: 0, scale: 1 }, { y: 0, opacity: 1, duration: .6, delay: .3 });
    });
  }

  /* ======================================================================
     OPENING THE LETTER
     ====================================================================== */
  let opened = false;
  function openLetter() {
    if (opened) return; opened = true;
    Sound.start();
    const op = $('#opener'), seal = $('.seal', op);
    const finish = () => {
      op.classList.add('gone'); op.setAttribute('aria-hidden', 'true'); document.body.classList.remove('locked'); document.body.classList.add('opened');
      if (window.__lenis) window.__lenis.start();
      $('#music').focus({ preventScroll: true }); measure(); onScroll();
    };
    if (STATIC) { op.style.transition = 'opacity .8s'; op.style.opacity = 0; setTimeout(finish, 800); return; }

    const sr = seal.getBoundingClientRect(), orr = op.getBoundingClientRect();
    const px = sr.left + sr.width / 2 - orr.left, py = sr.top + sr.height / 2 - orr.top, W = orr.width, H = orr.height;
    const cam = $('.cam', op), letter = $('.letter', op), pieces = $$('.piece', seal);
    gsap.set(cam, { transformOrigin: `${px}px ${py}px` });
    gsap.set($('.flap.top', letter), { rotationX: -180, z: 2 }); gsap.set($('.flap.bot', letter), { rotationX: 180, z: 1 }); gsap.set($('.ribbon', letter), { z: 3 });
    const tl = gsap.timeline({ onComplete: finish });
    tl.to([$('.cta', op), $('.seal-pulse', op), $('.arrived', op)], { opacity: 0, duration: .35 }, 0)
      .to(seal, { x: '+=2', duration: .04, repeat: 3, yoyo: true }, 0)
      .call(() => Sound.play('crack'), null, .02)
      .to($('.crack', seal), { opacity: 1, duration: .08 }, .06)
      .call(() => FX.burst(px + (orr.left - FX.cv.getBoundingClientRect().left), py, small ? 34 : 50), null, .2);
    const drift = [[-70, -150, -1], [60, 140, 1], [-10, 70, 1]];
    pieces.forEach((p, k) => {
      tl.to(p, { x: drift[k][0] * .35, y: -16 - k * 6, rotation: drift[k][1] * .1, duration: .2, ease: 'power1.out' }, .18)
        .to(p, { x: drift[k][0], y: H * .95, rotation: drift[k][1], scale: .85, duration: 1.05, ease: 'power2.in' }, .38);
    });
    tl.to($('.crack', seal), { opacity: 0, duration: .2 }, .3)
      .to(cam, { scale: 1.9, x: W / 2 - px, y: H / 2 - py, duration: 1.2, ease: 'power2.inOut' }, .45)
      .to(letter, { opacity: 1, duration: .55, ease: 'power1.out' }, 1.05)
      .to(cam, { opacity: .25, duration: .6 }, 1.15)
      .call(() => Sound.play('rustle'), null, 1.45)
      .to($('.ribbon', letter), { xPercent: 120, rotation: 6, opacity: 0, duration: .55, ease: 'power2.in' }, 1.45)
      .to($('.flap.top', letter), { rotationX: 0, duration: .8, ease: 'power2.inOut' }, 1.75)
      .to($('.flap.bot', letter), { rotationX: 0, duration: .8, ease: 'power2.inOut' }, 2.05)
      .to($$('.shine', letter), { opacity: .7, duration: .4, yoyo: true, repeat: 1, stagger: .1 }, 1.9)
      .call(() => Sound.play('chime'), null, 2.6)
      .to($('.sheet', letter), { scale: 2.6, duration: .95, ease: 'power2.in' }, 2.85)
      .to(op, { opacity: 0, duration: .7, ease: 'power1.in' }, 3.05)
      .call(chronicleEnter, null, 3.0);
  }

  /* ======================================================================
     MOTION · Lenis + ScrollTrigger, layered scenes
     ====================================================================== */
  let chronicleEnter = () => {};
  function rise(tl, targets, pos, dur = .12, stagger = 0) {
    return tl.fromTo(targets, { opacity: 0, y: 18, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: dur, stagger, ease: 'power2.out' }, pos);
  }
  function headIn(tl, targets, pos, dur = .14) { return tl.fromTo(targets, { scaleX: .94, opacity: 0, filter: 'blur(5px)' }, { scaleX: 1, opacity: 1, filter: 'blur(0px)', duration: dur, ease: 'power2.out' }, pos); }

  function initMotion() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    let lenis = null;
    if (window.Lenis) {
      lenis = new Lenis({ lerp: .085, smoothWheel: true, wheelMultiplier: .9, touchMultiplier: 1.4 });
      window.__lenis = lenis; lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
      lenis.stop();
    }
    const secs = $$('.scene'), views = secs.map((s) => $('.view', s)), shades = secs.map((s) => $('.shade', s));
    const Fpx = () => F * vh, hold = (i) => holdVH(i) * vh;
    const holdST = (i, tl, extra = {}) => ScrollTrigger.create(Object.assign({ trigger: secs[i], start: () => `top top-=${Fpx()}`, end: () => `+=${hold(i)}`, scrub: .45, animation: tl, invalidateOnRefresh: true }, extra));
    const riseST = (i, tl) => ScrollTrigger.create({ trigger: secs[i], start: 'top bottom', end: () => `top top-=${Fpx()}`, scrub: .45, animation: tl, invalidateOnRefresh: true });
    const TL = () => gsap.timeline({ defaults: { ease: 'none' } }).to({}, { duration: 1 }, 0);

    // the previous scene sinks back and darkens as the next rises over it
    secs.forEach((s, i) => { if (!i) return; riseST(i, gsap.timeline({ defaults: { ease: 'none' } }).to(views[i - 1], { scale: .92, yPercent: -2 }, 0).to(shades[i - 1], { opacity: .62 }, 0)); });

    // ---- 2 · Chronicle ----
    const news = $('.news'), nshadow = $('.news-shadow'), chars = $$('.news h1 .ch');
    gsap.set(news, { yPercent: -135, rotation: -9, rotationX: 38, opacity: 0 }); gsap.set(nshadow, { opacity: 0, scale: 1.25 });
    gsap.set(chars, { opacity: .1, y: 5 });
    chronicleEnter = () => {
      Sound.play('rustle');
      gsap.timeline()
        .to(news, { yPercent: 0, opacity: 1, duration: 1.3, ease: 'power3.out' }, 0)
        .to(news, { rotationX: 0, duration: 1.7, ease: 'elastic.out(1, .55)' }, .05)
        .to(news, { rotation: -1.2, duration: 1.9, ease: 'elastic.out(1, .45)' }, 0)
        .fromTo(news, { rotationY: 9 }, { rotationY: 0, duration: 1.6, ease: 'elastic.out(1, .4)' }, .15)
        .to(nshadow, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }, .25)
        .to(chars.slice(0, 3), { opacity: 1, y: 0, stagger: .05, duration: .3 }, 1);
    };
    const tlC = TL();
    tlC.to(chars, { opacity: 1, y: 0, stagger: .55 / chars.length, duration: .06 }, .02)
      .to('.news .mast h2', { scaleX: 1.02, duration: .3 }, 0)
      .to(news, { rotationX: 22, yPercent: -5, scale: .9, transformOrigin: '50% 0%', duration: .3, ease: 'power1.in' }, .7)
      .to(nshadow, { opacity: .4, yPercent: 6, scale: .92, duration: .3 }, .7);
    holdST(0, tlC);

    // ---- 3 · Palace ----
    const pTilt = $('.s-palace .tilt'), pBoard = $('.s-palace .board');
    const extra = () => Math.max(0, (pBoard.offsetHeight - secs[1].querySelector('.view').offsetHeight) / 2);
    const tlP = TL();
    tlP.fromTo(pTilt, { y: () => -extra() }, { y: () => extra(), duration: 1 }, 0)
      .fromTo('.s-palace .wipe', { xPercent: -100 }, { xPercent: 0, duration: .32, ease: 'power1.inOut' }, .06)
      .fromTo('.s-palace .wipe > span', { xPercent: 100 }, { xPercent: 0, duration: .32, ease: 'power1.inOut' }, .06)
      .fromTo('.s-palace .names', { opacity: .0 }, { opacity: 1, duration: .06 }, .06)
      .fromTo('.s-palace .sky-names', { y: () => vh * 4 }, { y: () => -vh * 5, duration: 1 }, 0)
      .fromTo('.s-palace .branch.l', { y: () => vh * 12, rotation: 5 }, { y: () => -vh * 14, rotation: -3, duration: 1 }, 0)
      .fromTo('.s-palace .branch.r', { y: () => vh * 8 }, { y: () => -vh * 18, duration: 1 }, 0);
    rise(tlP, '.s-palace .t1', .38, .1); headIn(tlP, '.s-palace .t2', .45, .12); rise(tlP, '.s-palace .t3', .52, .1);
    holdST(1, tlP);

    // ---- 4 · Doors ----
    const tlD = TL(); let harped = false;
    tlD.to('.door.l', { rotationY: -108, duration: .2, ease: 'power2.inOut' }, .02)
      .to('.door.r', { rotationY: 108, duration: .2, ease: 'power2.inOut' }, .02)
      .to('.doors', { opacity: 0, duration: .05 }, .2)
      .fromTo('.invite-card .card', { opacity: 0, scale: .94, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: .14, ease: 'power2.out' }, .1);
    const lines = $$('.invite-card .ln');
    lines.forEach((ln, k) => rise(tlD, ln, .24 + k * .075, .1));
    holdST(2, tlD, { onUpdate: (st) => { if (st.progress > .84 && !harped) { harped = true; Sound.play('harp'); } if (st.progress < .5) harped = false; } });

    // ---- 5 · Ballroom ----
    const tlB = TL();
    tlB.fromTo('.s-ballroom .couple', { xPercent: 42, scale: .8, opacity: 0, rotation: 7 }, { xPercent: 0, scale: 1, opacity: 1, rotation: 0, duration: .5, ease: 'power2.out' }, 0)
      .to('.s-ballroom .couple', { xPercent: -7, scale: 1.04, rotation: -2.5, duration: .5, ease: 'sine.inOut' }, .5);
    rise(tlB, '.s-ballroom .caption .script', .06, .14); rise(tlB, '.s-ballroom .caption .sub', .16, .14);
    holdST(3, tlB);

    // ---- 6 · Cameos ----
    const tlK = TL();
    tlK.fromTo('.cameo.bride', { xPercent: -140, rotation: -10 }, { xPercent: 0, rotation: -2, duration: .55, ease: 'power3.out' }, .3)
      .fromTo('.cameo.groom', { xPercent: 140, rotation: 10 }, { xPercent: 0, rotation: 2, duration: .55, ease: 'power3.out' }, .42);
    rise(tlK, '.cameos .title', .25, .3);
    riseST(4, tlK);
    const tlK2 = TL(); rise(tlK2, '.cameos .hint', .05, .2); tlK2.to('.cameo.bride .oval', { y: -8, duration: 1 }, 0).to('.cameo.groom .oval', { y: 6, duration: 1 }, 0);
    holdST(4, tlK2);

    // ---- 7 · Story ----
    const tlS = TL(), clips = $$('.clip'), tilts = [-3, 2.4, -1.6, 2.8];
    rise(tlS, '.story .title', 0, .08);
    clips.forEach((c, k) => {
      gsap.set(c, { rotation: tilts[k] });
      tlS.fromTo(c, { y: () => -vh * 75, opacity: 0, rotation: tilts[k] + (k % 2 ? 16 : -16) }, { y: 0, opacity: 1, rotation: tilts[k], duration: .16, ease: 'back.out(1.25)' }, .05 + k * .2)
        .fromTo($('.pin', c), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: .04, ease: 'back.out(3)' }, .2 + k * .2);
    });
    rise(tlS, '.story .hint', .86, .08);
    holdST(5, tlS);

    // ---- 8 · Watch ----
    const tlW = TL();
    tlW.fromTo('.watch-drop', { y: () => -vh * 40 }, { y: 0, duration: .7, ease: 'back.out(1.2)' }, .3);
    rise(tlW, '.watch-zone .title', .4, .3);
    riseST(6, tlW);
    const tlW2 = TL(); rise(tlW2, '.countdown .unit', 0, .12, .05); rise(tlW2, '.watch-zone .done', 0, .2); rise(tlW2, '.watch-zone .note', .3, .2);
    holdST(6, tlW2);

    // ---- 9 · Dances ----
    const tlDa = TL();
    rise(tlDa, '.dances-head', .45, .4); riseST(7, tlDa);
    const tlDb = TL();
    tlDb.to('.cover', { rotationY: -168, duration: .3, ease: 'power2.inOut' }, .03).to('.cover', { opacity: 0, duration: .06 }, .3)
      .fromTo('.track', { opacity: .0, y: 24 }, { opacity: 1, y: 0, duration: .18 }, .12);
    holdST(7, tlDb);

    // ---- 10 · Venue ----
    const tlV = TL();
    tlV.fromTo('.carriage', { x: () => -secs[8].offsetWidth * 1.15 }, { x: 0, duration: .72, ease: 'power2.out' }, 0)
      .fromTo('.carriage .dust', { opacity: 1 }, { opacity: 0, duration: .12 }, .62)
      .fromTo('.brass', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .1 }, .7);
    holdST(8, tlV, { onUpdate: (st) => $('.carriage').classList.toggle('stopped', st.progress > .72) });
    const tlV0 = TL(); rise(tlV0, '.s-venue .head > *', .4, .3, .1); riseST(8, tlV0);

    // ---- 11 · RSVP ----
    const tlR = TL(); rise(tlR, '.rsvp .title', .35, .3);
    tlR.fromTo('.tray', { opacity: 0, scale: .9 }, { opacity: 1, scale: 1, duration: .4 }, .45).fromTo('.calling', { y: 60, opacity: 0, rotation: -3 }, { y: 0, opacity: 1, rotation: 0, duration: .45, ease: 'back.out(1.3)' }, .5);
    rise(tlR, '.contacts > *', .75, .2, .06); riseST(9, tlR);

    // ---- 12 · Farewell ----
    const tlF = TL(); rise(tlF, '.farewell > *', .35, .3, .08); riseST(10, tlF);

    // living details
    $$('.s-doors .chand').forEach((c, k) => addSway(c, [1.3, 1.6, 1.5][k] || 1.4, [4.6, 5.3, 5.0][k] || 5));
    $$('.s-doors .strand').forEach((c) => addSway(c, rand(1.4, 2.4), rand(3.6, 5.2), 1.4));
    addSway($('.s-doors .cascade'), .45, 6.2, 1.2); addSway($('.s-doors .garland'), .5, 5.4, 1);
    addSway($('.s-cameos .cascade'), .5, 6.5, 1);
    addSway($('.s-ballroom .waltz'), 1.6, 4.1, .4);
    addSway($('.watch'), 2.2, 3.4, .6);
    addSway($('.tassel'), 6, 2.6, 1.5);
    $$('.lantern').forEach((l) => addSway(l, 3, rand(2.8, 3.6), 1.2));
    $$('.glow.flick').forEach((el) => flickers.push({ el, base: +el.dataset.base, range: +el.dataset.range, s: rand(0, 50), sec: el.closest('#opener') ? -1 : +el.closest('.scene').dataset.i }));
    gsap.ticker.add((t) => { living(t); glints(t); hands(); });

    ScrollTrigger.addEventListener('refresh', () => { measure(); onScroll(); });
    addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- reduced motion / no GSAP: static stack with gentle fades ---------- */
  function initStatic() {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.news, .sky-names, .invite-card .card, .caption, .couple-wrap, .cameos .title, .cameo, .clip, .watch-zone .title, .watch, .countdown, .dances-head, .track-wrap, .s-venue .head, .carriage-lane, .calling, .contacts, .farewell').forEach((el) => { el.classList.add('fade'); io.observe(el); });
    const lazy = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { loadWithin(e.target); lazy.unobserve(e.target); } }), { rootMargin: '150% 0px' });
    $$('.scene').forEach((s) => lazy.observe(s));
    $$('.dcard .icon').forEach((im) => { im.src = im.dataset.lazyicon; });
    addEventListener('scroll', onScroll, { passive: true });
    setInterval(hands, 1000); hands();
    $$('.glow.flick').forEach((el) => { el.style.opacity = el.dataset.base; });
  }

  /* ======================================================================
     BOOT
     ====================================================================== */
  buildOpener(); buildFilm(); fitAll();
  $('#music').innerHTML = lyre;
  $('#dots').innerHTML = SCENES.map((s, i) => `<button type="button" aria-label="${esc(s.label)}"></button>`).join('');
  $$('#dots button').forEach((b, i) => b.addEventListener('click', () => scrollToScene(i)));
  $('#music').addEventListener('click', () => Sound.toggle());
  buildOdometers(); tickCountdown(); setInterval(tickCountdown, 1000);
  initDances(); initCameos(); initClips(); initRSVP();
  FX.init(); Fireworks.init();
  Sound.detectFile();
  loadWithin($('#opener')); loadWithin($('#s-chronicle')); loadWithin($('#s-palace'));
  document.body.classList.add('locked'); scrollTo(0, 0);

  if (STATIC) initStatic(); else initMotion();
  measure(); setActive(0);

  const opener = $('#opener');
  $('.seal', opener).addEventListener('click', openLetter);
  $('.cta .btn', opener).addEventListener('click', openLetter);
  setTimeout(() => $('.cta .btn', opener).focus({ preventScroll: true }), 300);

  addEventListener('resize', () => {
    const wChanged = innerWidth !== lastW; lastW = innerWidth;
    if (wChanged || STATIC) setVH();
    fitAll(); FX.resize(); if (Fireworks.on) Fireworks.resize();
    if (!STATIC && wChanged) ScrollTrigger.refresh(); else { measure(); }
  });
  document.addEventListener('visibilitychange', () => {
    if (!Sound.ctx) return;
    if (document.hidden) Sound.ctx.suspend(); else if (Sound.on) Sound.ctx.resume();
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { fitAll(); if (!STATIC) ScrollTrigger.refresh(); });
})();
