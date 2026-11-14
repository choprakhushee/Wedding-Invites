/* ============================================================================
   THE RISHTA OF THE SEASON · a wedding invitation film by Aamantran Atelier
   Everything a new couple needs to change is in CONFIG below. The page is
   generated from it. Images are listed in assets/manifest.json.
   ========================================================================== */
const CONFIG = {
  brand: 'Aamantran Atelier',
  hashtag: '#TheRishtaOfTheSeason',
  guestDefault: 'you',

  couple: {
    bride: { first: 'Myra', full: 'Myra Bhandari', parents: 'Mrs. Sunita & Mr. Deepak Bhandari', city: 'Delhi', title: 'The Belle of Delhi', relation: 'daughter of' },
    groom: { first: 'Aryaman', full: 'Aryaman Rathore', parents: 'Mrs. Gayatri & Mr. Mahendra Singh Rathore', city: 'Jodhpur', title: 'The Gentleman of Jodhpur', relation: 'son of' }
  },
  blessing: '॥ श्री गणेशाय नमः ॥',
  blessingSub: 'With the blessings of Lord Ganesha and our elders',
  invitation: 'With the blessings of our elders, the Bhandari and Rathore families request the pleasure of your company as Myra and Aryaman begin their forever.',
  dateLine: '12 · 02 · 2028',
  city: 'Jaipur',
  pleasure: 'request the pleasure of your company',
  muhurat: '2028-02-12T19:00:00+05:30',
  timezoneOffsetMinutes: 330,

  rsvp: {
    by: '12 January 2028',
    whatsapp: '919999999999',
    message: 'Pyaare Myra & Aryaman, {guest} accepts your gracious invitation with the utmost delight! Attending: {events}. Team: {team}. Sangeet: {sangeet} 🕊️🌸'
  },
  contacts: [
    { name: 'Tara Bhandari', role: "the bride's sister", phone: '+91 99999 21212' },
    { name: 'Yuvraj Rathore', role: "the groom's cousin", phone: '+91 99999 12121' }
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=City+Palace+Jaipur',

  narrator: 'A Certain Well-Informed Bua-ji',
  herald: {
    masthead: 'THE HAVELI HERALD',
    mastheadDeva: 'हवेली हेराल्ड',
    edition: ['Special Shaadi Edition', 'Season of 2028', 'Price: One Ladoo'],
    headline: 'RISHTA OF THE SEASON FIXED!',
    deck: 'Bhandaris of Delhi and Rathores of Jodhpur to unite; aunties across two states demand seating charts',
    lead: 'Pyaare padhne waalon, hold on to your chai. This author can now confirm what every kitty party from Defence Colony to Sardarpura has been whispering for months: Miss Myra Bhandari, the sharpest wit and finest antakshari champion in all of Delhi, is to wed Mr. Aryaman Rathore, the Jodhpur architect with the polo shoulders and the pun problem. The families have exchanged mithai, the pandit-ji has stopped pretending to be surprised, and the Bhandari WhatsApp group has crossed four hundred unread messages before breakfast. The celebrations will unfold in Jaipur this February, among pink palaces, fountains and a great deal of gota-patti. Invitations, this author hears, have been sent to only the most deserving. If you are reading this, beta, congratulations: you are one of them. Dress well. Bua-ji is watching.',
    predictions: [
      'The groom will cry first at the varmala. The bride will deny crying at all.',
      'At least three rishtas will be fixed at the sangeet, one of them before the second song.',
      'A certain chacha will dance to the dhol until the band begs for mercy.'
    ],
    byline: '— A Certain Well-Informed Bua-ji'
  },

  chits: [
    { when: 'Winter 2021 · A Delhi wedding', text: "Pyaare padhne waalon, this author has learned that at the Malhotras' sangeet, a certain Rathore boy from Jodhpur abandoned his dance troupe mid-performance to fetch Miss Bhandari a second plate of gol gappe. Scandalous. Delicious." },
    { when: '2022 – 2024', text: 'Letters! Voice notes! An entire Jodhpur-to-Delhi train route memorised by heart! This author has never seen a long-distance rishta so determined, nor a phone bill so long.' },
    { when: 'Diwali 2026 · Jaipur', text: 'On a palace terrace, under a sky full of lanterns, the gentleman went down on one knee. The lady, this author hears, said yes before he finished, then made him ask again for the video.' },
    { when: 'The Season of 2028', text: 'And so the rishta of the season is fixed, beta. You are summoned to witness it. Bua-ji will be watching, as always.' }
  ],

  biodatas: {
    bride: [['Name', 'Myra Bhandari'], ['Height', '5\'4" (5\'7" in heels)'], ['Education', 'MA, plus a PhD in arguing'], ['Hobbies', 'reading, baking, winning every family antakshari'], ['Looking for', 'someone who laughs at her jokes and shares his dessert']],
    brideVerdict: 'Too good for any boy. Except perhaps this one.',
    groom: [['Name', 'Aryaman Rathore'], ['Height', '6\'0" (5\'11" honestly)'], ['Profession', 'architect'], ['Hobbies', 'polo, terrible puns, making chai at 2 AM'], ['Special skill', 'can survive any Delhi aunty interrogation']],
    groomVerdict: 'A Rathore with manners. Rare. Grab him.'
  },

  kundli: {
    title: 'The Kundli Match',
    score: 36,
    verdict: 'Itna perfect match? Even the pandit-ji is suspicious.',
    note: 'Purely for fun. No stars were consulted, only aunties.'
  },

  mehendi: {
    prompt: 'Somewhere in her mehendi, his name is hidden. Can you find it?',
    found: 'Found! The groom will be relieved.',
    hint: 'Psst… look near her right palm.',
    hintAfterSeconds: 20,
    name: 'Aryaman', initial: 'A',
    // where the name is drawn, as fractions of the screen (x, y), its rotation and size
    position: { x: 0.66, y: 0.6, rotate: -24, scale: 1 }
  },

  joota: {
    teams: {
      ladkiwale: { label: 'Team Ladkiwale', sub: "the bride's side", colour: 'rose' },
      ladkewale: { label: 'Team Ladkewale', sub: "the groom's side", colour: 'mint' }
    },
    tries: 3,
    // hiding spots, as fractions of the screen; the juttis are hidden in a random one
    spots: [
      { id: 'curtain', label: 'Behind the curtain', x: 0.16, y: 0.42, anim: 'sway' },
      { id: 'trunk', label: 'In the trunk', x: 0.3, y: 0.8, anim: 'lid' },
      { id: 'sofa', label: 'Under the cushion', x: 0.62, y: 0.7, anim: 'lift' },
      { id: 'mirror', label: 'Behind the mirror', x: 0.8, y: 0.4, anim: 'tilt' },
      { id: 'turban', label: 'In the turban box', x: 0.55, y: 0.5, anim: 'lid' }
    ],
    winLadkiwale: 'Found! Shagun demand: ₹21,000 and a lifetime of chai.',
    winLadkewale: 'Saved! The groom walks to his mandap in style.',
    miss: ['Nahi mila! Try again, beta.', 'Wrong spot. Bua-ji is smirking.'],
    lose: "Arre! The juttis were {spot}. Bua-ji says you'd never survive a real joota chupai."
  },

  events: [
    { key: 'mehendi', name: 'The Mehendi Garden Party', date: '2028-02-10', time: '16:00', display: '10 Feb 2028 · 4:00 PM', venue: 'The Charbagh Gardens', dress: 'Garden pastels, florals', colour: '#BFDCCB', icon: 'mehendi' },
    { key: 'haldi', name: 'The Haldi Morning', date: '2028-02-11', time: '10:00', display: '11 Feb 2028 · 10:00 AM', venue: 'The Courtyard of Fountains', dress: 'Lemon yellow & marigold', colour: '#F4DDA0', icon: 'haldi' },
    { key: 'sangeet', name: 'The Sangeet Durbar Ball', date: '2028-02-11', time: '20:00', display: '11 Feb 2028 · 8:00 PM', venue: 'The Durbar Hall', dress: 'Royal glamour, pastels & sparkle', colour: '#CDBDE0', icon: 'sangeet', perform: true },
    { key: 'wedding', name: 'The Wedding', date: '2028-02-12', time: '19:00', display: '12 Feb 2028 · 7:00 PM', venue: 'The Palace Lawns', dress: 'Royal Indian finery', colour: '#E8B4B8', icon: 'wedding' },
    { key: 'reception', name: 'The Reception Soirée', date: '2028-02-13', time: '20:30', display: '13 Feb 2028 · 8:30 PM', venue: 'The Sheesh Mahal Terrace', dress: 'Evening couture, jewels encouraged', colour: '#BFD5E8', icon: 'reception' }
  ],
  eventsCity: 'Jaipur, Rajasthan',
  performances: ['Solo dance', 'Group dance', 'Song', 'Just here to cheer'],

  finale: {
    line: 'The rishta of the season awaits your presence',
    signoff: 'Yours, ever watchful,'
  },

  // Image slots. Each scene tries the video loop, then the WebP, then the JPG,
  // and finally draws a coded stand-in. Set a value to null to use the coded art.
  assets: {
    dir: 'assets/',
    music: 'assets/music.mp3',
    scenes: {
      'thaal-bg': 'thaal-bg', 'herald-window': 'herald-window', 'palace-sky': 'palace-sky', 'sheesh-mahal': 'sheesh-mahal',
      'durbar-ball': 'durbar-ball', 'terrace-line': 'terrace-line', 'mehendi-hands': 'mehendi-hands', 'dressing-room': 'dressing-room',
      'baraat-lane': 'baraat-lane', 'palace-night': 'palace-night', bride: 'bride', groom: 'groom'
    },
    videos: { 'palace-sky': 'palace-loop', 'sheesh-mahal': 'sheesh-loop', 'palace-night': 'night-loop' },
    cutouts: ['box-closed', 'box-open', 'scroll', 'scroll-open', 'lac-seal', 'chandelier', 'bougainvillea', 'jasmine-strand', 'jharokha-frame', 'miniature-frame', 'dupatta-rose', 'dupatta-blue', 'dupatta-mint', 'dupatta-lilac', 'pocket-clock', 'hand-fan', 'juttis', 'groom-ghodi', 'dhol', 'pigeon-up', 'pigeon-down'],
    // where things sit on each photo (fractions of the screen)
    thaal: { box: { x: 0.5, y: 0.53 }, diyas: [{ x: 0.13, y: 0.84 }, { x: 0.86, y: 0.84 }], silver: [0.12, 0.36, 0.88, 0.72] },
    palace: { fountain: [0.38, 0.6, 0.62, 0.95] },
    sheesh: { mirrors: [[0, 0, 1, 0.82]], panel: [0.2, 0.3, 0.8, 0.66] },
    clockDial: { cx: 0.5, cy: 0.478, r: 0.38 }
  },

  colours: { rose: '#E8B4B8', blue: '#BFD5E8', mint: '#BFDCCB', lilac: '#CDBDE0', ivory: '#FBF6EE', gold: '#C2A15B', marigold: '#E9962E', jodhpur: '#4E79A7', maroon: '#5A1F2B' },

  // scroll length of each scene, in screen heights, while it plays
  lengths: { opener: 1, herald: 2.2, palace: 2.2, sheesh: 2.6, portraits: 2.2, kundli: 1.3, terrace: 2.6, mehendi: 1.3, muhurat: 1.4, events: 1.6, joota: 1.4, baraat: 2.2, rsvp: 1.4, finale: 1.4 }
};

/* ============================================================================ */
(function () {
  'use strict';
  const C = CONFIG;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const range = (p, a, b) => clamp((p - a) / (b - a), 0, 1);
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = !!window.gsap;
  const store = {
    get(k, d) { try { const v = localStorage.getItem('rishta:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('rishta:' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  const params = new URLSearchParams(location.search);
  const guest = (params.get('guest') || '').trim().slice(0, 60);
  const A = C.assets;
  const sceneSrc = (slot) => A.scenes[slot] ? A.dir + A.scenes[slot] : null;

  if (RM) document.documentElement.classList.add('rm');

  /* ---------- media helpers ---------- */
  function bg(slot, fb, art, cls) {
    const base = sceneSrc(slot), vid = A.videos[slot];
    return `<div class="bg ${cls || ''}" data-slot="${slot}"><div class="fallback ${fb}">${art || ''}</div>` +
      (vid && !RM ? `<video muted playsinline loop preload="none" data-src="${A.dir + vid}.mp4" poster="" aria-hidden="true"></video>` : '') +
      (base ? `<img alt="" data-src="${base}.webp" data-alt="${base}.jpg" decoding="async">` : '') + '</div>';
  }
  function cut(slot, cls, art, alt, style) {
    return `<div class="cut ${cls || ''}" ${style ? `style="${style}"` : ''}>` +
      (A.cutouts.includes(slot) ? `<img alt="${esc(alt || '')}" data-src="${A.dir + slot}.webp" data-art="${slot}" decoding="async">` : art) + '</div>';
  }
  const artFor = {};
  function loadMedia(root) {
    $$('img[data-src]', root).forEach((img) => {
      const src = img.dataset.src; img.removeAttribute('data-src');
      img.addEventListener('error', function onErr() {
        if (img.dataset.alt) { const a = img.dataset.alt; img.removeAttribute('data-alt'); img.src = a; return; }
        img.removeEventListener('error', onErr);
        const key = img.dataset.art;
        if (key && artFor[key]) { const span = document.createElement('div'); span.innerHTML = artFor[key](); img.replaceWith(span.firstElementChild); }
        else img.remove();
        root.dispatchEvent(new CustomEvent('mediafail', { detail: key }));
      });
      img.addEventListener('load', () => { img.classList.add('ok'); root.dispatchEvent(new CustomEvent('medialoaded', { detail: img })); }, { once: true });
      img.src = src;
    });
    $$('video[data-src]', root).forEach((v) => {
      const src = v.dataset.src; v.removeAttribute('data-src');
      v.addEventListener('error', () => v.remove(), true);
      const s = document.createElement('source'); s.src = src; s.type = 'video/mp4';
      s.addEventListener('error', () => v.remove());
      v.appendChild(s); v.load();
      v.play().catch(() => {});
    });
  }
  Object.assign(artFor, {
    'box-closed': () => ART.box(false), 'box-open': () => ART.box(true), scroll: ART.scroll, 'scroll-open': ART.scrollOpen, 'lac-seal': ART.seal,
    chandelier: ART.chandelier, bougainvillea: () => ART.bougainvillea(7), 'jasmine-strand': ART.jasmine, 'jharokha-frame': ART.jharokha,
    'miniature-frame': ART.miniFrame, 'dupatta-rose': () => ART.dupatta('#E8B4B8', '#c98892'), 'dupatta-blue': () => ART.dupatta('#BFD5E8', '#8fb0cc'),
    'dupatta-mint': () => ART.dupatta('#BFDCCB', '#8fbaa0'), 'dupatta-lilac': () => ART.dupatta('#CDBDE0', '#a796c4'), 'pocket-clock': ART.clock,
    'hand-fan': () => '', juttis: ART.juttis, 'groom-ghodi': ART.ghodi, dhol: ART.dhol, 'pigeon-up': () => ART.pigeon(true), 'pigeon-down': () => ART.pigeon(false)
  });
  const lines = (txt) => esc(txt);
  const riseSpan = (txt) => esc(txt).split(' ').map((w) => `<span>${w}</span>`).join(' ');

  /* ============================================================================
     SCENES. Each: id, len, label, html(), init(sec), tick(dt, p), exit(tl)
     ========================================================================== */
  const scenes = [];
  const S = (o) => { scenes.push(Object.assign({ p: 0, active: false }, o)); };

  /* ---------- 1 · the shagun box ---------- */
  S({
    id: 'opener', label: 'The shagun box', ambient: 'thaal-bg', petals: null,
    html() {
      const t = A.thaal;
      const pieces = [[50, 50, 50, 0, 100, 0, 100, 40], [50, 50, 100, 40, 100, 100, 70, 100], [50, 50, 70, 100, 20, 100], [50, 50, 20, 100, 0, 100, 0, 45], [50, 50, 0, 45, 0, 0, 50, 0]]
        .map((p) => { const pts = []; for (let i = 0; i < p.length; i += 2) pts.push(p[i] + '% ' + p[i + 1] + '%'); return `<div class="seal-piece" style="clip-path:polygon(${pts.join(',')})">${cut('lac-seal', '', ART.seal(), '', 'inset:0')}</div>`; }).join('');
      return `${bg('thaal-bg', 'fb-silk', '', 'shade-top')}
        ${t.diyas.map((d) => `<div class="diya-glow" style="left:${d.x * 100}%;top:${d.y * 100}%"></div>`).join('')}
        <canvas class="glints" data-glints="thaal"></canvas>
        <div class="thaal-light plane" data-depth="6"></div>
        <div class="content">
          <div class="op-head rise">
            <div class="op-crest">${ART.crest()}</div>
            <p class="sc" id="arrived">An invitation has arrived for ${esc(guest || C.guestDefault)}</p>
          </div>
          <div class="box-wrap" style="left:${t.box.x * 100}%;top:${t.box.y * 100}%">
            ${cut('box-closed', 'box-closed', ART.box(false), 'A blush velvet shagun box, closed')}
            ${cut('box-open', 'box-open', ART.box(true), 'The velvet box, open')}
            <div class="velvet-sheen"></div>
            <svg class="kalava" viewBox="0 0 300 300" aria-hidden="true"><path class="k1" d="M150 100 C152 140 148 190 150 246"/><path class="k1" d="M42 176 C110 186 190 186 258 176"/><path class="k1" d="M150 160 c-26 -24 -40 -6 -18 6 c-18 10 -6 26 18 2 c22 24 36 8 18 -2 c22 -12 8 -30 -18 -6z"/><path class="k1" d="M146 170 q-8 30 -22 44 M154 170 q8 30 22 42"/><path class="k2" d="M150 100 C152 140 148 190 150 246"/></svg>
          </div>
          <div class="scroll-rise">${cut('scroll', '', ART.scroll(), 'A rolled ivory scroll tied with a red thread', 'inset:0')}<div class="seal">${pieces}</div></div>
          <div class="scroll-sheet">${cut('scroll-open', 'paper', ART.scrollOpen(), '', 'inset:0')}
            <div class="ink"><div class="bless">${esc(C.blessing)}</div><div class="bless-sub">${esc(C.blessingSub)}</div>${ART.orn()}<p class="inv">${esc(C.invitation)}</p><div class="names">${esc(C.couple.bride.first)} &amp; ${esc(C.couple.groom.first)}</div></div>
          </div>
          <button class="btn untie" id="untie" aria-label="Untie the kalava and open your invitation">Untie the kalava</button>
        </div>`;
    },
    init(sec) {
      const self = this;
      self.diyas = $$('.diya-glow', sec);
      self.glints = new FX.Glints($('[data-glints]', sec), { regions: [A.thaal.silver], count: 140, size: 14, sharp: 14, grid: 0.02 });
      // velvet sheen is masked to the box shape when the cutout loads
      sec.addEventListener('medialoaded', (e) => { const img = e.detail; if (img.closest('.box-closed')) { const sh = $('.velvet-sheen', sec); sh.style.webkitMaskImage = sh.style.maskImage = `url(${img.currentSrc || img.src})`; } });
      if (hasGSAP && !RM) gsap.to($('.op-head', sec), { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.6, ease: 'power2.out', delay: 0.4 });
      else $('.op-head', sec).classList.remove('rise');
      $('#untie').addEventListener('click', () => openBox(sec));
    },
    tick(dt) {
      this.t = (this.t || 0) + dt;
      this.diyas.forEach((d, i) => { const n = FX.fbm(this.t * 3.1 + i * 13); d.style.opacity = 0.55 + n * 0.45; d.style.transform = `translate(-50%,-50%) scale(${0.92 + n * 0.16})`; });
      this.glints.draw(dt, 0);
    },
    resize() { this.glints && this.glints.resize(); }
  });

  /* ---------- 2 · the haveli herald ---------- */
  S({
    id: 'herald', label: 'The Haveli Herald', ambient: 'herald-window',
    html() {
      const H = C.herald;
      const head = H.headline.split(' ').map((w) => `<span class="w">${w.split('').map((c) => `<span>${esc(c)}</span>`).join('')}</span>`).join(' ');
      return `${bg('herald-window', 'fb-paper', '', '')}
        <div class="content">
          <div class="paper-shadow"></div>
          <article class="herald" aria-label="${esc(H.masthead)}">
            <div class="mast-deva" lang="hi">${esc(H.mastheadDeva)}</div>
            <div class="mast">${esc(H.masthead)}</div>
            <div class="mast-rule"></div>
            <div class="edition">${H.edition.map((e) => `<span>${esc(e)}</span>`).join('<span>·</span>')}</div>
            <h2 class="headline" aria-label="${esc(H.headline)}">${head}</h2>
            <p class="deck">${esc(H.deck)}</p>
            <div class="h-cols">
              <div class="h-lead">${esc(H.lead)}</div>
              <aside class="h-side">
                <div class="oval">${['bride', 'groom'].map((k, i) => `<div class="half ${i ? 'r' : ''}"><img alt="" data-src="${sceneSrc(k)}.webp" data-alt="${sceneSrc(k)}.jpg"></div>`).join('')}</div>
                <h4>Bua-ji's Predictions</h4>
                <ol>${H.predictions.map((p) => `<li>${esc(p)}</li>`).join('')}</ol>
              </aside>
            </div>
            <div class="byline">${esc(H.byline)}</div>
          </article>
        </div>`;
    },
    init(sec) {
      const paper = $('.herald', sec), shadow = $('.paper-shadow', sec);
      this.letters = $$('.headline .w > span', sec);
      if (!hasGSAP || RM) { this.letters.forEach((l) => (l.style.opacity = 1)); return; }
      gsap.set(paper, { yPercent: -70, rotation: -14, rotationX: 50, opacity: 0, transformPerspective: 900 });
      const tl = gsap.timeline({ paused: true });
      tl.to(paper, { opacity: 1, duration: 0.3 })
        .to(paper, { yPercent: 6, rotation: 4, rotationX: -12, duration: 0.9, ease: 'sine.inOut' }, 0)
        .to(paper, { yPercent: -3, rotation: -2.5, rotationX: 8, duration: 0.6, ease: 'sine.inOut' })
        .to(paper, { yPercent: 0, rotation: -1.2, rotationX: 0, duration: 0.9, ease: 'back.out(1.6)' })
        .fromTo(shadow, { opacity: 0, scale: 0.7, y: 40 }, { opacity: 0.85, scale: 1, y: 0, duration: 2.2, ease: 'power2.out' }, 0);
      ScrollTrigger.create({ trigger: sec, start: 'top 55%', once: true, onEnter: () => { tl.play(); Sound.sfx.rustle(); } });
    },
    tick(dt, p) {
      const n = this.letters.length, k = range(p, 0.02, 0.45) * n;
      this.letters.forEach((l, i) => { const v = clamp(k - i, 0, 1); l.style.opacity = 0.08 + v * 0.92; l.style.transform = `translateY(${(1 - v) * 6}px)`; });
    },
    exit(tl, sec) { tl.to($('.herald', sec), { rotationX: 38, yPercent: -12, rotation: 3, scale: 0.9, transformPerspective: 900, ease: 'power1.in' }, 0); }
  });

  /* ---------- 3 · the pink palace rises ---------- */
  S({
    id: 'palace', label: 'The pink palace', ambient: 'palace-sky', petals: { n: 18, kinds: ['rose', 'jasmine'] },
    html() {
      const b = C.couple.bride.first, g = C.couple.groom.first;
      return `<div class="plane" data-depth="-14" style="inset:-4% 0 -4% 0">${bg('palace-sky', 'fb-palace', ART.palaceSilhouette(false), 'shade-top')}</div>
        <canvas class="glints" data-glints="fountain"></canvas>
        ${[0, 1, 2, 3, 4].map((i) => `<div class="pigeon" data-i="${i}">${cut('pigeon-up', 'f1', ART.pigeon(true), '', 'inset:0')}${cut('pigeon-down', 'f2', ART.pigeon(false), '', 'inset:0')}</div>`).join('')}
        <div class="content">
          <div class="names-sky plane" data-depth="-6">
            <svg class="names-svg" viewBox="0 0 390 150" role="img" aria-label="${esc(b)} and ${esc(g)}">
              <text x="195" y="62" text-anchor="middle" class="n1">${esc(b)}</text>
              <text x="195" y="96" text-anchor="middle" class="amp">&amp;</text>
              <text x="195" y="140" text-anchor="middle" class="n2">${esc(g)}</text>
            </svg>
            <p class="pleasure rise">${esc(C.pleasure)}<b>${esc(C.dateLine)} · ${esc(C.city)}</b></p>
          </div>
        </div>
        <div class="plane bougain-fg" data-depth="22">${cut('bougainvillea', '', ART.bougainvillea(3), '', 'inset:0')}</div>
        <div class="plane jharokha-edge" data-depth="34">${cut('jharokha-frame', '', ART.jharokha(), '', 'inset:0')}</div>`;
    },
    init(sec) {
      this.glints = new FX.Glints($('[data-glints]', sec), { regions: [A.palace.fountain], count: 90, size: 11, sharp: 6 });
      this.pigeons = $$('.pigeon', sec).map((el, i) => ({ el, d: i * 0.06, y0: 0.62 + (i % 3) * 0.05, x0: 0.36 + i * 0.07, y1: 0.06 + (i % 2) * 0.1, x1: 1.25 + i * 0.05, s: 0.75 + (i % 3) * 0.2 }));
      this.texts = $$('.names-svg text', sec);
      this.pleasure = $('.pleasure', sec);
      this.texts.forEach((t) => { t.style.strokeDasharray = 900; t.style.strokeDashoffset = 900; });
      this.flapped = false;
    },
    tick(dt, p) {
      // names write themselves, stroke first, then the ink fills
      const W = [[0.02, 0.22], [0.16, 0.26], [0.22, 0.42]];
      this.texts.forEach((t, i) => { const v = range(p, W[i][0], W[i][1]); t.style.strokeDashoffset = 900 * (1 - v); const f = range(p, W[i][1] - 0.04, W[i][1] + 0.08); t.style.fill = `rgba(255,250,241,${f})`; });
      const pv = range(p, 0.42, 0.55);
      this.pleasure.style.opacity = pv; this.pleasure.style.transform = `translateY(${(1 - pv) * 12}px)`; this.pleasure.style.filter = `blur(${(1 - pv) * 6}px)`;
      const w = this.el.clientWidth, h = this.el.clientHeight;
      let flying = false;
      this.pigeons.forEach((P) => {
        const v = range(p, 0.08 + P.d, 0.75 + P.d);
        const e = v * v * (3 - 2 * v);
        const x = lerp(P.x0, P.x1, e) * w, y = (lerp(P.y0, P.y1, Math.pow(e, 0.7)) + Math.sin(e * 9 + P.d * 30) * 0.015) * h;
        P.el.style.transform = `translate(${x}px,${y}px) scale(${P.s * (0.6 + e * 0.5)}) rotate(${-14 + e * 6}deg)`;
        P.el.style.opacity = v > 0 && v < 1 ? 1 : 0;
        if (v > 0 && v < 1) flying = true;
        P.el.classList.toggle('flap', v > 0 && v < 1);
      });
      if (flying && !this.flapped) { this.flapped = true; Sound.sfx.wings(); }
      if (!flying && p < 0.05) this.flapped = false;
      this.glints.draw(dt, p);
    },
    resize() { this.glints && this.glints.resize(); }
  });

  /* ---------- 4 · the sheesh mahal ---------- */
  S({
    id: 'sheesh', label: 'The invitation', ambient: 'sheesh-mahal', petals: { n: 8, kinds: ['jasmine', 'rose'] },
    html() {
      const b = C.couple.bride, g = C.couple.groom;
      return `<div class="plane" data-depth="-10" style="inset:-3% 0">${bg('sheesh-mahal', 'fb-mirror', '', '')}</div>
        <canvas class="glints" data-glints="mirror"></canvas>
        <div class="plane chandelier ch-l" data-depth="10" data-pend="0">${cut('chandelier', '', ART.chandelier(), '', 'inset:0')}</div>
        <div class="plane chandelier ch-r" data-depth="10" data-pend="1">${cut('chandelier', '', ART.chandelier(), '', 'inset:0')}</div>
        <div class="content">
          <div class="panel" role="group" aria-label="The invitation">
            <div class="l bless" lang="sa">${esc(C.blessing)}</div>
            <div class="l bless-sub">${esc(C.blessingSub)}</div>
            <div class="l">${ART.orn()}</div>
            <p class="l inv">${esc(C.invitation)}</p>
            <div class="l nm">${esc(b.full)}</div>
            <div class="l par">${esc(b.relation)} ${esc(b.parents)}</div>
            <div class="l wed">weds</div>
            <div class="l nm">${esc(g.full)}</div>
            <div class="l par">${esc(g.relation)} ${esc(g.parents)}</div>
            <div class="l date">${esc(C.dateLine)} · ${esc(C.city)}</div>
          </div>
        </div>
        ${[0.04, 0.2, 0.74, 0.88].map((x, i) => `<div class="plane jasmine" data-depth="18" data-pend="${i + 2}" style="left:${x * 100}%;height:${[34, 22, 26, 36][i]}%;width:auto">${cut('jasmine-strand', '', ART.jasmine(), '', 'inset:0')}</div>`).join('')}
        <div class="plane" data-depth="24" style="left:-20%;right:-20%;top:-3%;height:16%">${cut('bougainvillea', '', ART.bougainvillea(11), '', 'inset:0')}</div>`;
    },
    init(sec) {
      const mobile = innerWidth < 600;
      this.glints = new FX.Glints($('[data-glints]', sec), { regions: A.sheesh.mirrors, exclude: [[0.08, 0.15, 0.92, 0.88]], count: mobile ? 1100 : 1600, size: 10, sharp: 9, grid: 0.012, alpha: 0.95 });
      this.glints2 = this.glints; // the panel exclusion keeps text clean
      this.lines = $$('.panel .l', sec);
      this.pend = $$('[data-pend]', sec).map((el, i) => ({ el, P: new FX.Pendulum(i < 2 ? 5 : 9, i < 2 ? 0.7 : 1.4) }));
      this.done = false; this.lastP = 0;
    },
    tick(dt, p) {
      const n = this.lines.length;
      this.lines.forEach((l, i) => { const v = range(p, 0.04 + i * 0.055, 0.12 + i * 0.055); l.style.opacity = v; l.style.transform = `translateY(${(1 - v) * 10}px)`; l.style.filter = v < 1 ? `blur(${(1 - v) * 5}px)` : 'none'; });
      if (!this.done && p > 0.04 + n * 0.055 + 0.08) { this.done = true; Sound.sfx.shimmer(); }
      const vel = (p - this.lastP) / Math.max(dt, 0.001); this.lastP = p;
      this.t = (this.t || 0) + dt;
      this.pend.forEach((o, i) => {
        o.P.kick(clamp(vel, -3, 3) * 0.6 * dt * 60 * 0.02 + (FX.noise(this.t * 0.3 + i * 7) - 0.5) * 0.004 + FX.tilt.x * 0.002);
        const a = o.P.step(dt);
        o.el.style.setProperty('--sw', a * 57.3 + 'deg');
        o.el.style.rotate = (a * 57.3).toFixed(3) + 'deg';
      });
      this.glints.draw(dt, p);
    },
    resize() { this.glints && this.glints.resize(); }
  });

  /* ---------- 5 · portraits & biodatas ---------- */
  S({
    id: 'portraits', label: 'The portraits', ambient: 'bride',
    html() {
      const card = (k, i) => {
        const P = C.couple[k], bio = C.biodatas[k], verdict = C.biodatas[k + 'Verdict'];
        return `<div class="portrait p${i + 1}" data-k="${k}">
          <svg class="hang" viewBox="0 0 100 30" aria-hidden="true"><path d="M8 30 L50 4 L92 30" stroke="#8b6a33" stroke-width="1.4" fill="none"/><circle cx="50" cy="4" r="3.5" fill="url(#gGold)"/></svg>
          <button class="flip" aria-label="${esc(P.full)}: tap to read the shaadi biodata" aria-pressed="false">
            <div class="face front">
              <div class="photo"><div class="ph-fb"><span>${esc(P.first[0])}</span></div><img alt="${esc(P.full)}, ${esc(P.title)}" data-src="${sceneSrc(k)}.webp" data-alt="${sceneSrc(k)}.jpg"></div>
              ${cut('miniature-frame', 'frame', ART.miniFrame(), '', 'inset:0')}
              <span class="tap-hint">Biodata ↻</span>
            </div>
            <div class="face back"><div class="biodata">
              <div class="om">ॐ</div><h3>SHAADI BIODATA</h3>
              <div class="clip"></div><div class="stamp"><img alt="" data-src="${sceneSrc(k)}.webp" data-alt="${sceneSrc(k)}.jpg"></div>
              <dl>${bio.map(([a, b]) => `<dt>${esc(a)}:</dt> <dd>${esc(b)}</dd>`).join('')}</dl>
              <div class="verdict">Bua-ji's verdict: “${esc(verdict)}”</div>
            </div></div>
          </button>
          <div class="cap"><div class="title">${esc(P.title)}</div><div class="who">${esc(P.full)}</div><div class="par">${esc(P.relation)} ${esc(P.parents)}</div></div>
        </div>`;
      };
      return `<div class="bg"><div class="fresco">${ART.fresco()}</div></div><div class="content">${card('bride', 0)}${card('groom', 1)}</div>`;
    },
    init(sec) {
      this.p1 = $('.p1', sec); this.p2 = $('.p2', sec);
      $$('.portrait', sec).forEach((pt) => {
        const b = $('.flip', pt);
        b.addEventListener('click', () => {
          const on = !pt.classList.contains('flipped');
          pt.classList.toggle('flipped', on); b.setAttribute('aria-pressed', on);
          Sound.sfx.rustle();
        });
      });
    },
    tick(dt, p) {
      this.t = (this.t || 0) + dt;
      const a = range(p, 0, 0.3), b = range(p, 0.12, 0.42);
      const ea = 1 - Math.pow(1 - a, 3), eb = 1 - Math.pow(1 - b, 3);
      const sw = Math.sin(this.t * 0.9) * 0.6;
      this.p1.style.transform = `translateX(${(1 - ea) * -130}%) rotate(${(1 - ea) * -8 + sw}deg)`;
      this.p2.style.transform = `translateX(${(1 - eb) * 130}%) rotate(${(1 - eb) * 8 - sw}deg)`;
    }
  });

  /* ---------- 6 · the kundli match ---------- */
  S({
    id: 'kundli', label: 'The kundli match', ambient: 'herald-window',
    html() {
      const K = C.kundli;
      return `${bg('herald-window', 'fb-paper', '', '')}<canvas class="fx-canvas" data-confetti style="z-index:20"></canvas>
        <div class="content"><div class="parchment">
          <span class="sc">Pandit-ji's chamber presents</span>
          <h2>${esc(K.title)}</h2>
          <div class="wheels">
            <div class="wheel" data-w="0">${ART.kundli(1)}</div>
            <div class="wheel" data-w="1">${ART.kundli(3)}</div>
          </div>
          <div style="display:flex;justify-content:space-around;width:100%"><span class="script" style="font-size:24px;color:#5a1f2b">${esc(C.couple.bride.first)}</span><span class="script" style="font-size:24px;color:#5a1f2b">${esc(C.couple.groom.first)}</span></div>
          <div class="guna"><div class="bar"><i></i></div><div class="num" aria-live="polite"><span class="g">0</span><small>/36 gunas</small></div></div>
          <p class="verdict-k">“${esc(K.verdict)}”</p>
          <button class="btn" data-match>Tap to match kundlis</button>
          <p class="sc" style="margin:10px 0 0;font-size:10px">${esc(K.note)}</p>
        </div>
        <button class="btn ghost small skip" data-skip>Skip</button></div>`;
    },
    init(sec) {
      const wheels = $$('.wheel svg', sec), bar = $('.guna .bar i', sec), num = $('.guna .g', sec), verdict = $('.verdict-k', sec), btn = $('[data-match]', sec);
      const total = C.kundli.score;
      const finish = (instant) => {
        num.textContent = total; bar.style.transform = 'scaleX(1)';
        verdict.style.opacity = 1; btn.textContent = 'Match again'; btn.disabled = false;
        if (!instant) { const r = sec.getBoundingClientRect(); FX.confetti($('[data-confetti]', sec), r.width / 2, r.height * 0.55, RM ? 0 : 90); }
        Sound.sfx.fanfare(); store.set('kundli', total);
      };
      const run = () => {
        if (!hasGSAP || RM) return finish(true);
        btn.disabled = true; verdict.style.opacity = 0; num.textContent = '0'; bar.style.transform = 'scaleX(0)';
        let lastTick = 0;
        wheels.forEach((w, i) => gsap.fromTo(w, { rotation: 0 }, {
          rotation: (i ? -1 : 1) * (1080 + 140 + i * 60), duration: 3.2 + i * 0.35, ease: 'power4.out', transformOrigin: '50% 50%',
          onUpdate() { if (i === 0) { const r = Math.floor(gsap.getProperty(w, 'rotation') / 30); if (r !== lastTick) { lastTick = r; Sound.sfx.tick(r % 3); } } }
        }));
        const o = { v: 0 };
        gsap.to(o, { v: total, duration: 3.4, ease: 'power2.inOut', delay: 0.3, onUpdate() { num.textContent = Math.round(o.v); bar.style.transform = `scaleX(${o.v / total})`; }, onComplete: () => finish(false) });
      };
      btn.addEventListener('click', run);
      $('[data-skip]', sec).addEventListener('click', () => { if (hasGSAP) { gsap.killTweensOf(wheels); gsap.set(wheels, { rotation: 0 }); } finish(true); });
    }
  });

  /* ---------- 7 · whispers on the terrace ---------- */
  S({
    id: 'terrace', label: 'Whispers on the terrace', ambient: 'terrace-line', petals: { n: 6, kinds: ['marigold', 'rose'] },
    html() {
      const dup = ['dupatta-rose', 'dupatta-blue', 'dupatta-mint', 'dupatta-lilac'];
      const art = { 'dupatta-rose': artFor['dupatta-rose'], 'dupatta-blue': artFor['dupatta-blue'], 'dupatta-mint': artFor['dupatta-mint'], 'dupatta-lilac': artFor['dupatta-lilac'] };
      const rows = [0.17, 0.5];
      let items = '';
      rows.forEach((ry, r) => {
        items += `<svg class="line-svg" style="top:${ry * 100}svh" viewBox="0 0 390 40" preserveAspectRatio="none" aria-hidden="true"><path d="M-10 4 Q195 34 400 4" stroke="#5b4636" stroke-width="1.2" fill="none"/></svg>`;
        [[-0.1, 0], [0.7, 1]].forEach(([x, k]) => { const d = dup[r * 2 + k]; items += `<div class="dupatta" style="left:${x * 100}%;top:calc(${ry * 100}svh + 4px)"><div class="sway">${cut(d, '', art[d](), '', 'position:relative;width:100%;height:100%')}</div></div>`; });
        [0.07, 0.52].forEach((x, k) => {
          const i = r * 2 + k, c = C.chits[i]; if (!c) return;
          items += `<button class="chit" data-i="${i}" style="left:${x * 100}%;top:calc(${ry * 100}svh + ${9 + k * 4}px)" aria-label="Gossip chit ${i + 1}: ${esc(c.when)}. Tap to read."><div class="sway"><span class="peg">${ART.peg()}</span><span class="slip"><span class="when">${esc(c.when)}</span><span class="txt">${esc(c.text)}</span></span></div></button>`;
        });
      });
      return `${bg('terrace-line', 'fb-terrace', ART.palaceSilhouette(false), 'shade-bottom')}
        ${['#E8B4B8', '#4E79A7', '#E9962E'].map((c, i) => `<div class="kite" style="left:${[18, 70, 46][i]}%;top:${[6, 10, 3][i]}%">${ART.kite(c)}</div>`).join('')}
        <div class="content">${items}
          <div class="terrace-title"><span class="sc ivory-text">Whispers on the terrace</span><h2 class="ivory-text">How the rishta happened</h2><span class="sc ivory-text" style="font-size:11px">tap a chit to read Bua-ji's report</span></div>
        </div>`;
    },
    init(sec) {
      this.chits = $$('.chit', sec); this.dups = $$('.dupatta', sec); this.kites = $$('.kite', sec);
      this.pinned = 0;
      const zoom = document.createElement('div'); zoom.className = 'chit-zoom'; zoom.setAttribute('role', 'dialog'); zoom.setAttribute('aria-modal', 'true');
      zoom.innerHTML = `<button class="slip" aria-label="Pin the chit back"><span class="when"></span><span class="t"></span><span class="sign">— ${esc(C.narrator)}</span></button>`;
      document.body.appendChild(zoom);
      let openChit = null;
      const close = () => {
        if (!openChit) return;
        Sound.sfx.peg(); zoom.classList.remove('open');
        if (hasGSAP && !RM) gsap.to($('.slip', zoom), { scale: 0.5, y: 80, rotation: -8, duration: 0.5, ease: 'power2.in' });
        openChit.focus(); openChit = null;
      };
      this.chits.forEach((ch) => ch.addEventListener('click', () => {
        const c = C.chits[+ch.dataset.i];
        $('.when', zoom).textContent = c.when; $('.t', zoom).textContent = c.text;
        openChit = ch; zoom.classList.add('open'); Sound.sfx.rustle();
        const r = ch.getBoundingClientRect();
        if (hasGSAP && !RM) gsap.fromTo($('.slip', zoom), { x: r.left + r.width / 2 - innerWidth / 2, y: r.top + r.height / 2 - innerHeight / 2, scale: 0.42, rotation: -6 }, { x: 0, y: 0, scale: 1, rotation: -1.5, duration: 0.8, ease: 'power3.out' });
        $('.slip', zoom).focus();
      }));
      zoom.addEventListener('click', close);
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    },
    tick(dt, p) {
      this.t = (this.t || 0) + dt;
      const t = this.t;
      this.dups.forEach((d, i) => {
        const v = range(p, 0.02 + i * 0.06, 0.2 + i * 0.06), e = 1 - Math.pow(1 - v, 3);
        d.style.opacity = v ? 1 : 0;
        d.style.transform = `translateY(${(1 - e) * -140}%) rotate(${(1 - e) * (i % 2 ? 50 : -50)}deg)`;
        d.firstElementChild.style.transform = `rotate(${(FX.fbm(t * 0.7 + i * 5) - 0.5) * 6}deg) skewX(${(FX.noise(t * 1.1 + i) - 0.5) * 4}deg)`;
      });
      let pinned = 0;
      this.chits.forEach((c, i) => {
        const v = range(p, 0.2 + i * 0.13, 0.32 + i * 0.13), e = v < 1 ? 1 - Math.pow(1 - v, 3) : 1;
        if (v >= 1) pinned++;
        c.style.opacity = v ? 1 : 0;
        c.style.transform = `translateY(${(1 - e) * -70}px) rotate(${(1 - e) * 24 + (i % 2 ? 2.5 : -3)}deg) scale(${0.9 + e * 0.1})`;
        c.firstElementChild.style.transform = `rotate(${(FX.fbm(t * 0.9 + i * 9) - 0.5) * 7}deg)`;
      });
      if (pinned > this.pinned) Sound.sfx.peg();
      this.pinned = pinned;
      this.kites.forEach((k, i) => { k.style.transform = `translate(${Math.sin(t * 0.3 + i) * 14}px, ${Math.sin(t * 0.5 + i * 2) * 8}px) rotate(${Math.sin(t * 0.8 + i) * 10}deg)`; });
    }
  });

  /* ---------- 8 · find his name ---------- */
  S({
    id: 'mehendi', label: 'Find his name', ambient: 'mehendi-hands',
    html() {
      const M = C.mehendi, P = M.position;
      // the name, drawn as thin mehendi strokes: an initial inside a paisley, then the name in script
      const name = `<svg class="hidden-name" viewBox="0 0 390 844" preserveAspectRatio="none" aria-hidden="true">
        <g transform="translate(${P.x * 390} ${P.y * 844}) rotate(${P.rotate}) scale(${P.scale})">
          <path class="hn" stroke-width="1" d="M-6 -30 C14 -34 26 -14 18 4 C10 22 -14 24 -20 8 C-26 -8 -18 -26 -6 -30 C-14 -40 -10 -50 0 -54"/>
          <path class="hn" stroke-width=".7" d="M-2 -24 C10 -26 18 -12 13 1 C8 14 -9 16 -14 5 C-18 -6 -12 -21 -2 -24"/>
          <text class="hn" x="-3" y="5" font-family="Pinyon Script, cursive" font-size="22" text-anchor="middle">${esc(M.initial)}</text>
          <text class="hn" x="34" y="34" font-family="Alex Brush, cursive" font-size="17">${esc(M.name)}</text>
          <path class="hn" stroke-width=".6" d="M30 40 C60 44 90 40 108 34"/>
          ${Array.from({ length: 7 }, (_, i) => `<circle class="hn" stroke-width=".6" cx="${36 + i * 11}" cy="${46 + (i % 2) * 2}" r="1.6"/>`).join('')}
        </g></svg>`;
      const art = `<div class="mehendi-art">${bg('mehendi-hands', 'fb-silk', ART.mehendiPattern(), '')}${name}</div>`;
      return `${art}<div class="m-hint"></div>
        <div class="lens-handle"></div>
        <div class="lens" tabindex="0" role="slider" aria-label="Magnifying glass. Drag it over the mehendi, or tap the hands to move it."><div class="zoom">${art.replace('class="mehendi-art"', 'class="mehendi-art z"')}</div></div>
        <div class="content" style="pointer-events:none">
          <div class="m-card" style="pointer-events:auto"><p class="q">${esc(M.prompt)}</p><p class="sub">drag the magnifying glass · or tap the hands</p></div>
          <button class="btn ghost small skip" data-skip style="pointer-events:auto">Show me</button>
        </div>`;
    },
    init(sec) {
      const self = this, M = C.mehendi;
      const lens = $('.lens', sec), zoom = $('.zoom', sec), handle = $('.lens-handle', sec), hint = $('.m-hint', sec), q = $('.m-card .q', sec), sub = $('.m-card .sub', sec);
      const view = sec.querySelector('.view');
      const Z = 2.3, R = 66;
      self.found = store.get('mehendiFound', false) && false;
      const pos = { x: 0, y: 0 };
      function place(x, y) {
        const w = view.clientWidth, h = view.clientHeight;
        pos.x = clamp(x, R * 0.4, w - R * 0.4); pos.y = clamp(y, R * 0.4 + 60, h - R * 0.4);
        lens.style.transform = `translate(${pos.x - R}px, ${pos.y - R}px)`;
        handle.style.transform = `translate(${pos.x + R * 0.62}px, ${pos.y + R * 0.62}px) rotate(-45deg)`;
        const mz = $('.mehendi-art.z', zoom);
        mz.style.width = w + 'px'; mz.style.height = h + 'px';
        zoom.style.transform = `translate(${R - pos.x * Z}px, ${R - pos.y * Z}px) scale(${Z})`;
        check();
      }
      function target() { const w = view.clientWidth, h = view.clientHeight; return { x: M.position.x * w + 20, y: M.position.y * h + 14 }; }
      let near = 0;
      function check() {
        if (self.found) return;
        const t = target(), d = Math.hypot(pos.x - t.x, pos.y - t.y);
        if (d < R * 0.75) { if (!near) near = performance.now(); if (performance.now() - near > 350) found(); }
        else near = 0;
      }
      function found() {
        self.found = true; sec.classList.add('found'); hint.classList.remove('on');
        q.textContent = M.found; sub.textContent = 'Bua-ji approves of your eyesight.';
        Sound.sfx.shehnai(); store.set('mehendiFound', true);
        if (hasGSAP && !RM) gsap.fromTo($('.m-card', sec), { scale: 0.96 }, { scale: 1, duration: 0.8, ease: 'back.out(2)' });
      }
      self.place = place;
      self.reset = () => { const v = view; place(v.clientWidth * 0.3, v.clientHeight * 0.42); };
      self.reset();
      if (window.Draggable && !RM) {
        // drag an invisible proxy and place the lens ourselves, so the zoom stays in sync
        const proxy = document.createElement('div'); proxy.style.cssText = 'position:absolute;width:1px;height:1px;visibility:hidden'; view.appendChild(proxy);
        Draggable.create(proxy, {
          trigger: lens, type: 'x,y', zIndexBoost: false, allowContextMenu: false,
          onPress() { gsap.set(proxy, { x: 0, y: 0 }); this.update(); this.sx = pos.x; this.sy = pos.y; lens.style.cursor = 'grabbing'; },
          onDrag() { place(this.sx + this.x, this.sy + this.y); },
          onRelease() { lens.style.cursor = ''; }
        });
      } else {
        lens.addEventListener('pointerdown', (e) => { lens.setPointerCapture(e.pointerId); const mv = (ev) => { const r = view.getBoundingClientRect(); place(ev.clientX - r.left, ev.clientY - r.top); }; lens.addEventListener('pointermove', mv); lens.addEventListener('pointerup', () => lens.removeEventListener('pointermove', mv), { once: true }); });
      }
      // tap anywhere on the hands to glide the lens there
      $('.mehendi-art', sec).addEventListener('click', (e) => {
        const r = view.getBoundingClientRect(), tx = e.clientX - r.left, ty = e.clientY - r.top;
        if (!hasGSAP || RM) return place(tx, ty);
        const o = { x: pos.x, y: pos.y }; gsap.to(o, { x: tx, y: ty, duration: 0.7, ease: 'power3.out', onUpdate: () => place(o.x, o.y) });
      });
      lens.addEventListener('keydown', (e) => { const st = 14, k = { ArrowLeft: [-st, 0], ArrowRight: [st, 0], ArrowUp: [0, -st], ArrowDown: [0, st] }[e.key]; if (k) { e.preventDefault(); place(pos.x + k[0], pos.y + k[1]); } });
      $('[data-skip]', sec).addEventListener('click', () => { const t = target(); const o = { x: pos.x, y: pos.y }; if (hasGSAP && !RM) gsap.to(o, { x: t.x, y: t.y, duration: 1, ease: 'power3.inOut', onUpdate: () => place(o.x, o.y), onComplete: found }); else { place(t.x, t.y); found(); } });
      self.hint = () => { if (self.found) return; const t = target(); hint.style.left = t.x + 'px'; hint.style.top = t.y + 'px'; hint.classList.add('on'); sub.textContent = M.hint; };
      self.enteredAt = 0;
      sec.addEventListener('medialoaded', () => self.reset());
    },
    tick(dt, p) {
      if (p > 0 && !this.enteredAt) this.enteredAt = performance.now();
      if (this.enteredAt && !this.hinted && performance.now() - this.enteredAt > C.mehendi.hintAfterSeconds * 1000) { this.hinted = true; this.hint(); }
    },
    resize() { this.reset && this.reset(); }
  });

  /* ---------- 9 · the shubh muhurat ---------- */
  S({
    id: 'muhurat', label: 'The shubh muhurat', ambient: 'durbar-ball', petals: { n: 6, kinds: ['jasmine'] },
    html() {
      const d = A.clockDial;
      const W = d.r * 200 / 76, Hh = W * 230 / 200;
      const unit = (n, lbl, k) => `<div class="unit"><div class="digits" data-u="${k}">${Array.from({ length: n }, () => `<div class="dg"><div class="col">${'0123456789'.split('').map((x) => `<b>${x}</b>`).join('')}</div></div>`).join('')}</div><span>${lbl}</span></div>`;
      return `${bg('durbar-ball', 'fb-hall', '', 'shade-bottom')}
        <div class="content">
          <div class="clock plane" data-depth="8">${cut('pocket-clock', '', ART.clock(), 'An antique palace clock in gold and pastel enamel', 'inset:0')}
            <div class="hands" style="left:${(d.cx - W * 0.5) * 100}%;top:${(d.cy - Hh * 110 / 230) * 100}%;width:${W * 100}%;height:${Hh * 100}%;inset:auto">${ART.clockHands()}</div></div>
          <div class="count" role="timer" aria-live="off">
            <h2 class="ivory-text">Until the Shubh Muhurat</h2>
            <div class="units">${unit(3, 'Days', 'd')}${unit(2, 'Hours', 'h')}${unit(2, 'Minutes', 'm')}${unit(2, 'Seconds', 's')}</div>
            <p class="sc ivory-text" style="font-size:12px;margin-top:10px">the pheras · ${esc(C.events.find((e) => e.key === 'wedding').display)}</p>
          </div>
        </div>`;
    },
    init(sec) {
      this.clock = $('.clock', sec); this.hh = $('.h-hour', sec); this.mm = $('.h-min', sec); this.ss = $('.h-sec', sec);
      [this.hh, this.mm, this.ss].forEach((h) => { h.style.transformOrigin = '100px 110px'; h.style.transformBox = 'view-box'; });
      this.units = {}; $$('.digits', sec).forEach((d) => { this.units[d.dataset.u] = $$('.col', d); });
      this.target = new Date(C.muhurat).getTime();
      this.count = $('.count', sec);
      this.last = -1;
      this.update();
    },
    update() {
      const ms = this.target - Date.now();
      if (ms <= 0) { this.count.innerHTML = `<p class="sealed">Rishta sealed. Forever.</p>`; this.sealed = true; return; }
      const s = Math.floor(ms / 1000), v = { d: Math.floor(s / 86400), h: Math.floor(s / 3600) % 24, m: Math.floor(s / 60) % 60, s: s % 60 };
      Object.keys(v).forEach((k) => { const cols = this.units[k]; const str = String(v[k]).padStart(cols.length, '0').slice(-cols.length); cols.forEach((c, i) => { c.style.transform = `translateY(${-+str[i] * 10}%)`; }); });
    },
    tick(dt) {
      this.t = (this.t || 0) + dt;
      this.clock.style.transform = `rotate(${Math.sin(this.t * 0.8) * 1.4 + FX.tilt.x * 1.5}deg)`;
      const now = new Date(Date.now() + (C.timezoneOffsetMinutes + new Date().getTimezoneOffset()) * 60000);
      const sec = now.getSeconds() + now.getMilliseconds() / 1000, min = now.getMinutes() + sec / 60, hr = (now.getHours() % 12) + min / 60;
      this.ss.style.transform = `rotate(${sec * 6}deg)`; this.mm.style.transform = `rotate(${min * 6}deg)`; this.hh.style.transform = `rotate(${hr * 30}deg)`;
      const whole = Math.floor(Date.now() / 1000);
      if (whole !== this.last && !this.sealed) { this.last = whole; this.update(); }
    }
  });

  /* ---------- 10 · the season's engagements ---------- */
  S({
    id: 'events', label: "The season's engagements", ambient: 'durbar-ball',
    html() {
      const saved = store.get('sangeet', '');
      const cards = C.events.map((e) => `<article class="card" style="--c:${e.colour}" aria-label="${esc(e.name)}">
          <div class="ico">${ART.icon(e.icon)}</div>
          <h3>${esc(e.name)}</h3>
          <div class="when">${esc(e.display)}</div>
          <div class="venue">${esc(e.venue)}</div>
          <div class="dress"><b>Dress code</b>${esc(e.dress)}</div>
          ${e.perform ? `<div class="perform"><p>Sign me up to perform</p><div class="chips" role="group" aria-label="Choose a performance">${C.performances.map((x) => `<button class="chip" aria-pressed="${saved === x}" data-perf="${esc(x)}">${esc(x)}</button>`).join('')}</div><div class="listed ${saved ? 'on' : ''}">${ART.tick()}<span>Your name is on Bua-ji's list</span></div></div>` : ''}
          <div class="acts"><a class="btn small" href="${esc(C.mapsUrl)}" target="_blank" rel="noopener">View location</a><button class="btn small" data-ics="${e.key}">Add to calendar</button></div>
        </article>`).join('');
      return `${bg('durbar-ball', 'fb-hall', '', 'shade-both')}
        <div class="content">
          <div class="ev-head"><span class="sc ivory-text">${esc(C.eventsCity)}</span><h2 class="ivory-text">The Season's Engagements</h2></div>
          <div class="fan"><div class="cards" tabindex="0" aria-label="Wedding events, swipe sideways">${cards}</div></div>
          <p class="swipe-hint sc ivory-text">swipe through the season →</p>
        </div>`;
    },
    init(sec) {
      const box = $('.cards', sec), cards = $$('.card', sec);
      this.box = box; this.cards = cards;
      const tilt = () => { const cx = box.scrollLeft + box.clientWidth / 2; cards.forEach((c) => { const d = (c.offsetLeft + c.offsetWidth / 2 - cx) / box.clientWidth; c.style.setProperty('--ry', clamp(-d * 28, -22, 22) + 'deg'); if (!c.dataset.fanning) c.style.transform = `rotateY(${clamp(-d * 28, -22, 22)}deg) scale(${1 - Math.min(Math.abs(d), 1) * 0.06})`; }); };
      box.addEventListener('scroll', tilt, { passive: true }); tilt();
      // drag with a mouse on desktop; touch uses native swipe with snap
      let down = false, sx = 0, sl = 0, moved = false;
      box.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = box.scrollLeft; box.classList.add('dragging'); });
      window.addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; box.scrollLeft = sl - dx; });
      window.addEventListener('pointerup', () => { if (!down) return; down = false; box.classList.remove('dragging'); });
      box.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
      box.addEventListener('wheel', (e) => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.stopPropagation(); }, { passive: true });
      $$('[data-ics]', sec).forEach((b) => b.addEventListener('click', () => downloadICS(C.events.find((e) => e.key === b.dataset.ics))));
      $$('[data-perf]', sec).forEach((b) => b.addEventListener('click', () => {
        $$('[data-perf]', sec).forEach((x) => x.setAttribute('aria-pressed', x === b));
        store.set('sangeet', b.dataset.perf); $('.listed', sec).classList.remove('on'); void $('.listed', sec).offsetWidth; $('.listed', sec).classList.add('on');
        Sound.sfx.chime(); syncRSVP();
      }));
      if (hasGSAP && !RM) {
        // the cards fan open like a hand fan as the scene arrives
        ScrollTrigger.create({ trigger: sec, start: 'top 35%', once: true, onEnter: () => {
          const first = cards[0].offsetLeft;
          cards.forEach((c, i) => { c.dataset.fanning = 1; });
          gsap.fromTo(cards, { x: (i) => first - cards[i].offsetLeft + box.scrollLeft, rotation: (i) => (i - 2) * 11, y: (i) => Math.abs(i - 2) * 10 + 30, opacity: 0 },
            { x: 0, rotation: 0, y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', stagger: { each: 0.06, from: 'end' }, delay: 0.1,
              onComplete() { cards.forEach((c) => delete c.dataset.fanning); gsap.set(cards, { clearProps: 'x,y,rotation' }); tilt(); } });
          Sound.sfx.rustle();
        } });
      }
    }
  });

  /* ---------- 11 · joota chupai ---------- */
  S({
    id: 'joota', label: 'Joota chupai', ambient: 'dressing-room',
    html() {
      const T = C.joota.teams;
      return `${bg('dressing-room', 'fb-hall', '', 'shade-both')}<canvas class="fx-canvas" data-confetti style="z-index:15"></canvas>
        ${C.joota.spots.map((s, i) => `<button class="spot" data-i="${i}" style="left:${s.x * 100}%;top:${s.y * 100}%" aria-label="Look ${esc(s.label.toLowerCase())}"><span>${esc(s.label)}</span></button>`).join('')}
        <div class="peek"><div class="lift"><div class="pz"></div></div><div class="found-j">${cut('juttis', '', ART.juttis(), "The groom's juttis", 'position:relative;width:100%;aspect-ratio:1.6')}</div></div>
        <div class="content" style="pointer-events:none">
          <div class="j-head" style="pointer-events:auto"><p class="j-q">Ladkiwale vs Ladkewale: where are the groom's juttis?</p><span class="tries"></span> · <button class="chip" data-change style="min-height:32px;padding:2px 10px;font-size:13px">change team</button></div>
          <div class="j-result" style="pointer-events:auto"><p></p><button class="btn small" data-again>Play again</button></div>
          <button class="btn ghost small skip" data-skip style="pointer-events:auto">Skip</button>
        </div>
        <div class="team-pick ${store.get('team', '') ? 'gone' : ''}">
          <span class="sc ivory-text">Joota chupai</span><h2 class="ivory-text">Choose your side</h2>
          <p class="ivory-text">Your choice goes on your RSVP. Choose wisely, beta.</p>
          ${Object.keys(T).map((k) => `<button class="team ${T[k].colour}" data-team="${k}">${esc(T[k].label)}<small>${esc(T[k].sub)}</small></button>`).join('')}
        </div>`;
    },
    init(sec) {
      const J = C.joota, self = this;
      const spots = $$('.spot', sec), peek = $('.peek', sec), lift = $('.lift', peek), pz = $('.pz', peek), fj = $('.found-j', peek);
      const res = $('.j-result', sec), resP = $('p', res), tries = $('.tries', sec), pick = $('.team-pick', sec);
      let hidden = 0, left = J.tries, over = false;
      const teamLabel = () => { const t = store.get('team', ''); return t ? J.teams[t].label : ''; };
      function newGame() {
        hidden = Math.floor(Math.random() * J.spots.length); left = J.tries; over = false;
        spots.forEach((s) => { s.classList.remove('done'); s.disabled = false; });
        res.classList.remove('on'); peek.style.transform = 'translate(-50%,-50%) scale(0)';
        tries.textContent = `${teamLabel()} · ${left} tries left`;
      }
      function show(msg) { resP.textContent = msg; res.classList.add('on'); }
      function peekAt(spot, isHit, done) {
        const img = $('.bg img', sec), view = sec.querySelector('.view');
        const w = view.clientWidth, h = view.clientHeight, Z = 1.9, R = 75;
        peek.style.left = spot.x * 100 + '%'; peek.style.top = spot.y * 100 + '%';
        pz.style.width = w + 'px'; pz.style.height = h + 'px';
        pz.style.background = img && img.classList.contains('ok') ? `url(${img.currentSrc || img.src}) center/cover` : 'linear-gradient(#cdbde0,#8d6a7a)';
        pz.style.transform = `translate(${R - spot.x * w * Z}px, ${R - spot.y * h * Z}px) scale(${Z})`;
        if (!hasGSAP || RM) { peek.style.transform = 'translate(-50%,-50%) scale(1)'; fj.style.transform = `translate(-50%,-50%) scale(${isHit ? 1 : 0})`; return done(); }
        const tl = gsap.timeline({ onComplete: done });
        tl.fromTo(peek, { scale: 0, xPercent: -50, yPercent: -50 }, { scale: 1, duration: 0.45, ease: 'power3.out' });
        gsap.set(fj, { scale: 0, xPercent: -50, yPercent: -50 });
        const a = spot.anim;
        if (a === 'sway') { Sound.sfx.swish(); tl.to(lift, { skewX: 14, xPercent: 34, duration: 0.6, ease: 'sine.inOut' }).to(lift, { skewX: -4, duration: 0.4, ease: 'sine.inOut' }); }
        else if (a === 'lid') { Sound.sfx.velvet(); tl.to(lift, { yPercent: -36, rotationX: 40, transformPerspective: 400, transformOrigin: '50% 0%', duration: 0.6, ease: 'power2.out' }); }
        else if (a === 'lift') { Sound.sfx.swish(); tl.to(lift, { yPercent: -28, rotation: -5, duration: 0.6, ease: 'power2.out' }); }
        else { Sound.sfx.swish(); tl.to(lift, { rotationY: 46, transformPerspective: 500, transformOrigin: '0% 50%', duration: 0.6, ease: 'power2.out' }); }
        if (isHit) tl.to(fj, { scale: 1, duration: 0.6, ease: 'back.out(1.8)' }, '-=0.15');
        tl.to({}, { duration: isHit ? 1.1 : 0.5 });
        if (!isHit) tl.to(peek, { scale: 0, duration: 0.35, ease: 'power2.in' }).set(lift, { clearProps: 'all' });
      }
      spots.forEach((b) => b.addEventListener('click', () => {
        if (over) return;
        if (!store.get('team', '')) { pick.classList.remove('gone'); return; }
        const i = +b.dataset.i, spot = J.spots[i], hit = i === hidden;
        b.classList.add('done'); b.disabled = true; left--;
        tries.textContent = `${teamLabel()} · ${Math.max(left, 0)} tries left`;
        if (hasGSAP) gsap.set(lift, { clearProps: 'all' });
        peekAt(spot, hit, () => {
          if (hit) {
            over = true; const t = store.get('team');
            show(t === 'ladkiwale' ? J.winLadkiwale : J.winLadkewale);
            const r = sec.getBoundingClientRect(); FX.confetti($('[data-confetti]', sec), r.width * spot.x, r.height * spot.y, RM ? 0 : 70); Sound.sfx.fanfare();
            store.set('jootaResult', 'found');
          } else if (left <= 0) {
            over = true; show(J.lose.replace('{spot}', J.spots[hidden].label.toLowerCase())); store.set('jootaResult', 'lost');
            const hs = spots[hidden]; hs.classList.remove('done');
          } else { tries.textContent = `${J.miss[left % J.miss.length]} ${left} ${left === 1 ? 'try' : 'tries'} left`; }
        });
      }));
      $$('[data-team]', sec).forEach((b) => b.addEventListener('click', () => { store.set('team', b.dataset.team); pick.classList.add('gone'); Sound.sfx.chime(); newGame(); syncRSVP(); }));
      $('[data-change]', sec).addEventListener('click', () => pick.classList.remove('gone'));
      $('[data-again]', sec).addEventListener('click', newGame);
      $('[data-skip]', sec).addEventListener('click', () => { if (!store.get('team', '')) store.set('team', 'ladkiwale'); pick.classList.add('gone'); over = true; show(`The juttis were ${J.spots[hidden].label.toLowerCase()}. Bua-ji kept the shagun anyway.`); syncRSVP(); });
      newGame();
    }
  });

  /* ---------- 12 · the baraat arrives ---------- */
  S({
    id: 'baraat', label: 'The baraat', ambient: 'baraat-lane', petals: { n: 22, kinds: ['rose', 'marigold'] },
    html() {
      return `${bg('baraat-lane', 'fb-night', ART.palaceSilhouette(true), 'shade-both')}
        <svg class="lanterns plane" data-depth="12" viewBox="0 0 400 300" preserveAspectRatio="xMidYMin slice" aria-hidden="true">${ART.lanternRow(5, 30, 60, 0)}${ART.lanternRow(6, 110, 50, 2)}</svg>
        <div class="content">
          <div class="baraat-copy"><span class="sc ivory-text">${esc(C.events.find((e) => e.key === 'wedding').display)}</span><h2 class="ivory-text">The baraat arrives</h2><span class="sc ivory-text" style="font-size:11px">${esc(C.events.find((e) => e.key === 'wedding').venue)} · ${esc(C.city)}</span></div>
          <div class="plane ghodi" data-depth="0">${cut('groom-ghodi', '', ART.ghodi(), 'The groom arriving on a white horse', 'inset:0')}</div>
          <button class="dhol-btn" aria-label="Play the dhol">${cut('dhol', '', ART.dhol(), 'A decorated dhol', '')}<span class="lbl">tap the dhol</span></button>
          <a class="plaque" href="${esc(C.mapsUrl)}" target="_blank" rel="noopener">Get directions</a>
        </div>`;
    },
    init(sec) {
      this.ghodi = $('.ghodi', sec); this.lans = $$('.lan', sec).map((el, i) => ({ el, P: new FX.Pendulum(6 + (i % 3), 1.2) }));
      const dhol = $('.dhol-btn', sec);
      let playing = false;
      dhol.addEventListener('click', () => {
        if (!Sound.isOn()) toggleMusic(true);
        if (playing) return; playing = true;
        const ms = Sound.dholGroove((k) => {
          this.lans.forEach((o, i) => o.P.kick((k === 'D' ? 0.9 : 0.45) * (i % 2 ? 1 : -1)));
          if (hasGSAP && !RM) gsap.fromTo(dhol, { scale: k === 'D' ? 1.07 : 1.03 }, { scale: 1, duration: 0.25, ease: 'power2.out' });
          if (k === 'D' && atmos && !RM) atmos.shower(3);
        }) || 2400;
        setTimeout(() => (playing = false), ms);
      });
      this.prevP = 0;
    },
    tick(dt, p) {
      this.t = (this.t || 0) + dt;
      const v = range(p, 0.02, 0.6), e = 1 - Math.pow(1 - v, 2.2);
      const moving = Math.abs(p - this.prevP) > 0.0004; this.prevP = p;
      this.bob = lerp(this.bob || 0, moving ? 1 : 0.25, 0.1);
      const bob = Math.abs(Math.sin(this.t * 7)) * 5 * this.bob;
      this.ghodi.style.transform = `translate(${(e - 1) * 110}%, ${-bob}px) rotate(${Math.sin(this.t * 7) * 0.8 * this.bob}deg)`;
      this.lans.forEach((o, i) => { o.P.kick((FX.noise(this.t * 0.6 + i * 3) - 0.5) * 0.02); o.el.style.transform = `rotate(${o.P.step(dt) * 20}deg)`; });
    }
  });

  /* ---------- 13 · send your reply by pigeon ---------- */
  S({
    id: 'rsvp', label: 'Reply by pigeon', ambient: 'palace-night',
    html() {
      const T = C.joota.teams;
      return `${bg('palace-night', 'fb-night', ART.palaceSilhouette(true), 'shade-bottom')}
        <div class="content">
          <form class="rsvp-card" novalidate>
            <span class="by">Kindly reply by ${esc(C.rsvp.by)}</span>
            <h2>Send your reply by pigeon</h2>
            <label class="nm" for="g-name">Your good name</label>
            <input type="text" id="g-name" autocomplete="name" value="${esc(guest)}" placeholder="Sharma Family" required>
            <fieldset><legend>I shall attend</legend>
              ${C.events.map((e) => `<label class="ev-check"><input type="checkbox" value="${esc(e.key)}" checked> ${esc(e.name)}</label>`).join('')}
            </fieldset>
            <div class="rsvp-row">
              <label>Team<select id="g-team"><option value="">Neutral (like Switzerland)</option>${Object.keys(T).map((k) => `<option value="${k}">${esc(T[k].label)}</option>`).join('')}</select></label>
              <label>Sangeet<select id="g-sangeet"><option value="">Not performing</option>${C.performances.map((x) => `<option>${esc(x)}</option>`).join('')}</select></label>
            </div>
            <button type="submit" class="btn send">Send by pigeon</button>
            <p class="by-date">Opens WhatsApp with your message ready.</p>
          </form>
          <div class="mini-scroll"></div>
          <div class="flight-pigeon">${cut('pigeon-up', 'f1', ART.pigeon(true), '', 'position:absolute;inset:0')}${cut('pigeon-down', 'f2', ART.pigeon(false), '', 'position:absolute;inset:0')}</div>
          <div class="sent-note"><h3 class="ivory-text">Sent with love</h3><p class="ivory-text">The pigeon is on its way to the palace.</p><a class="btn small" data-wa target="_blank" rel="noopener">Didn't open? Send on WhatsApp</a><br><button class="btn ghost small" data-edit style="margin-top:8px">Edit my reply</button></div>
          <nav class="contacts" aria-label="Contacts">${C.contacts.map((c) => `<a href="tel:${c.phone.replace(/\s/g, '')}"><small>${esc(c.role)}</small>${esc(c.name)}</a>`).join('')}</nav>
        </div>`;
    },
    init(sec) {
      const form = $('.rsvp-card', sec), name = $('#g-name'), mini = $('.mini-scroll', sec), pg = $('.flight-pigeon', sec), note = $('.sent-note', sec);
      const saved = store.get('rsvp', null);
      if (saved && !guest) name.value = saved.name || '';
      if (saved && saved.events) $$('.ev-check input', sec).forEach((c) => (c.checked = saved.events.includes(c.value)));
      syncRSVP();
      $('#g-team').addEventListener('change', (e) => { store.set('team', e.target.value); });
      $('#g-sangeet').addEventListener('change', (e) => { store.set('sangeet', e.target.value); });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!name.value.trim()) { name.focus(); name.placeholder = 'Your name, beta'; return; }
        const evs = $$('.ev-check input:checked', sec).map((c) => c.value);
        store.set('rsvp', { name: name.value.trim(), events: evs });
        const team = $('#g-team').value, sang = $('#g-sangeet').value;
        const msg = C.rsvp.message.replace('{guest}', name.value.trim())
          .replace('{events}', evs.length ? evs.map((k) => C.events.find((x) => x.key === k).name).join(', ') : 'only in spirit')
          .replace('{team}', team ? C.joota.teams[team].label : 'Neutral').replace('{sangeet}', sang || 'cheering from my seat');
        const url = `https://wa.me/${C.rsvp.whatsapp}?text=${encodeURIComponent(msg)}`;
        $('[data-wa]', sec).href = url;
        const go = () => { note.classList.add('on'); note.style.opacity = 1; location.href = url; };
        if (!hasGSAP || RM) { form.style.opacity = 0; return go(); }
        const view = sec.querySelector('.view'), vw = view.clientWidth, vh = view.clientHeight;
        const fr = form.getBoundingClientRect(), vr = view.getBoundingClientRect();
        const px = vw * 0.5, py = vh * 0.62;
        gsap.set(pg, { x: px - 35, y: py - 26, opacity: 0, scale: 0.8 });
        gsap.set(mini, { x: px - 20 + 8, y: py + 10, opacity: 0 });
        Sound.sfx.unroll();
        const tl = gsap.timeline({ onComplete: go });
        tl.to(form, { scaleY: 0.08, scaleX: 0.6, borderRadius: 40, duration: 0.7, ease: 'power3.in' })
          .to(form, { x: px - (fr.left - vr.left) - fr.width / 2, y: py + 16 - (fr.top - vr.top) - fr.height / 2, scale: 0.1, opacity: 0, duration: 0.6, ease: 'power2.inOut' })
          .to(mini, { opacity: 1, duration: 0.2 }, '-=0.25')
          .to(pg, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }, '-=0.4')
          .add(() => { pg.classList.add('flap'); Sound.sfx.wings(); })
          .to([pg, mini], { x: '+=' + vw * 0.1, y: '-=' + vh * 0.12, duration: 0.7, ease: 'sine.in' })
          .to([pg, mini], { x: '+=' + vw * 0.45, y: '-=' + vh * 0.38, scale: 0.35, duration: 1.6, ease: 'sine.inOut' })
          .to([pg, mini], { y: '+=12', duration: 0.4, ease: 'sine.inOut', yoyo: true, repeat: 1 }, '-=1.5')
          .to([pg, mini], { opacity: 0, duration: 0.5 }, '-=0.4')
          .to(note, { opacity: 1, duration: 0.6 }, '-=0.2');
      });
      $('[data-edit]', sec).addEventListener('click', () => { note.classList.remove('on'); note.style.opacity = 0; if (hasGSAP) gsap.to(form, { clearProps: 'all', opacity: 1, duration: 0.01 }); form.style.opacity = 1; pg.classList.remove('flap'); });
    }
  });

  /* ---------- 14 · the finale ---------- */
  S({
    id: 'finale', label: 'The finale', ambient: 'palace-night', petals: { n: 46, kinds: ['rose', 'rose', 'marigold', 'jasmine'] },
    html() {
      return `${bg('palace-night', 'fb-night', ART.palaceSilhouette(true), 'shade-bottom')}
        <canvas class="fx-canvas" data-fireworks></canvas>
        <div class="content">
          <div class="finale-copy">
            <div class="crest rise">${ART.crest()}</div>
            <h2 class="ivory-text rise">${esc(C.finale.line)}</h2>
            <div class="tag rise">${esc(C.hashtag)}</div>
            <div class="signoff rise"><small>${esc(C.finale.signoff)}</small>${esc(C.narrator)}</div>
            <button class="btn ghost small again rise" data-again>Watch it again</button>
          </div>
          <div class="footer">Crafted with love by <b>${esc(C.brand)}</b></div>
        </div>`;
    },
    init(sec) {
      if (!RM) this.fw = new FX.Fireworks($('[data-fireworks]', sec));
      this.rises = $$('.rise', sec);
      $('[data-again]', sec).addEventListener('click', () => goTo(1));
      if (hasGSAP && !RM) ScrollTrigger.create({ trigger: sec, start: 'top 30%', once: true, onEnter: () => { gsap.to(this.rises, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, stagger: 0.25, ease: 'power2.out' }); atmos && atmos.shower(40); Sound.sfx.chime(); } });
      else this.rises.forEach((r) => r.classList.remove('rise'));
    },
    tick(dt) { this.fw && this.fw.draw(dt); },
    resize() { this.fw && this.fw.resize(); }
  });

  /* ============================================================================
     Calendar and RSVP helpers
     ========================================================================== */
  function downloadICS(e) {
    const [y, m, d] = e.date.split('-').map(Number), [hh, mi] = e.time.split(':').map(Number);
    const start = new Date(Date.UTC(y, m - 1, d, hh, mi) - C.timezoneOffsetMinutes * 60000), end = new Date(start.getTime() + 4 * 3600000);
    const f = (dt) => dt.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const escI = (s) => String(s).replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Aamantran Atelier//Rishta of the Season//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      `UID:${e.key}-${f(start)}@aamantran-atelier`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(start)}`, `DTEND:${f(end)}`,
      `SUMMARY:${escI(e.name + ' · ' + C.couple.bride.first + ' & ' + C.couple.groom.first)}`,
      `LOCATION:${escI(e.venue + ', ' + C.eventsCity)}`, `DESCRIPTION:${escI('Dress code: ' + e.dress + '. Map: ' + C.mapsUrl)}`, `URL:${C.mapsUrl}`,
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:Bua-ji reminds you: do not be late', 'TRIGGER:-PT3H', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${e.key}-${C.couple.bride.first}-${C.couple.groom.first}.ics`.toLowerCase();
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function syncRSVP() {
    const t = $('#g-team'), s = $('#g-sangeet');
    if (t) t.value = store.get('team', '') || '';
    if (s) s.value = store.get('sangeet', '') || '';
  }

  /* ============================================================================
     Build the film
     ========================================================================== */
  const film = document.getElementById('film');
  film.innerHTML = scenes.map((s, i) => `<section class="scene" id="s-${s.id}" style="--len:${RM ? 1 : (C.lengths[s.id] || 1.5)};z-index:${i + 1}" aria-label="${esc(s.label)}"><div class="stage"><div class="view">${s.html()}<div class="dim"></div></div></div></section>`).join('');
  document.body.insertAdjacentHTML('afterbegin', ART.defs);
  scenes.forEach((s) => { s.sec = document.getElementById('s-' + s.id); s.el = s.sec.querySelector('.view'); s.len = RM ? 1 : (C.lengths[s.id] || 1.5); });

  // paper texture + film grain
  document.documentElement.style.setProperty('--paper-noise', `url(${FX.paperNoise()})`);
  const grain = document.getElementById('grain'); grain.style.backgroundImage = `url(${FX.grainTile()})`;

  // first scene loads now; the rest as they approach
  loadMedia(scenes[0].sec);
  const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { loadMedia(en.target); io.unobserve(en.target); } }), { rootMargin: '150% 0px' });
  scenes.slice(1).forEach((s) => io.observe(s.sec));
  // also warm up the herald after the opener settles
  setTimeout(() => loadMedia(scenes[1].sec), 1200);

  scenes.forEach((s) => { try { s.init && s.init(s.sec); } catch (err) { console.error('scene init', s.id, err); } });

  /* ---------- HUD ---------- */
  const dots = document.getElementById('dots');
  dots.innerHTML = scenes.map((s, i) => `<button aria-label="Go to ${esc(s.label)}" data-go="${i}"><i></i></button>`).join('');
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = `<button class="key" data-go="${scenes.findIndex((s) => s.id === 'events')}">Event details</button>` + scenes.slice(1).map((s, i) => `<button data-go="${i + 1}">${esc(s.label)}</button>`).join('') + `<button data-go="${scenes.findIndex((s) => s.id === 'rsvp')}">RSVP</button>`;
  $$('[data-go]').forEach((b) => b.addEventListener('click', () => { closeMenu(); goTo(+b.dataset.go); }));
  const menu = document.getElementById('menu');
  const openMenu = () => { menu.classList.add('open'); menu.setAttribute('aria-hidden', 'false'); $('#menuBtn').setAttribute('aria-expanded', 'true'); };
  const closeMenu = () => { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); $('#menuBtn').setAttribute('aria-expanded', 'false'); };
  $('#menuBtn').addEventListener('click', () => { if (!started) startFilm(true); openMenu(); });
  $('#menuClose').addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  $('#musicBtn').innerHTML = ART.sitar();
  function toggleMusic(force) {
    const on = force != null ? force : !Sound.isOn();
    if (on) Sound.startMusic(C.assets.music); else Sound.stopMusic();
    $('#musicBtn').classList.toggle('off', !on); $('#musicBtn').setAttribute('aria-pressed', on);
    $('#musicBtn').setAttribute('aria-label', on ? 'Mute music' : 'Play music');
    store.set('music', on);
  }
  $('#musicBtn').addEventListener('click', () => toggleMusic());

  /* ---------- ambient desktop backdrop ---------- */
  const ambA = $('#ambient .a'), ambB = $('#ambient .b'); let ambFlip = false, ambKey = '';
  function setAmbient(slot) {
    if (!slot || slot === ambKey || innerWidth < 520) return; ambKey = slot;
    const base = sceneSrc(slot); if (!base) return;
    const next = ambFlip ? ambA : ambB, prev = ambFlip ? ambB : ambA; ambFlip = !ambFlip;
    const im = new Image(); im.onload = () => { next.style.backgroundImage = `url(${im.src})`; next.classList.add('on'); prev.classList.remove('on'); };
    im.onerror = () => { if (!im.src.endsWith('.jpg')) im.src = base + '.jpg'; };
    im.src = base + '.webp';
  }

  /* ---------- atmosphere: drifting petals over everything ---------- */
  const atmosC = document.getElementById('atmos');
  let atmos = null;
  function sizeAtmos() { const w = Math.min(innerWidth, 480), h = innerHeight; atmosC.style.width = w + 'px'; atmosC.style.height = h + 'px'; if (atmos) atmos.resize(); }
  if (!RM) { sizeAtmos(); atmos = new FX.Petals(atmosC); }

  /* ============================================================================
     Scroll engine: Lenis + ScrollTrigger, sticky stages, rising transitions
     ========================================================================== */
  let lenis = null, started = false, current = -1;
  const probe = document.createElement('div'); probe.style.cssText = 'position:absolute;top:0;height:100svh;width:1px;visibility:hidden;pointer-events:none'; document.body.appendChild(probe);
  const SVH = () => probe.offsetHeight || innerHeight;

  function setCurrent(i) {
    if (i === current) return; current = i;
    $$('#dots button').forEach((b, k) => b.classList.toggle('on', k === i));
    const s = scenes[i]; setAmbient(s.ambient);
    if (atmos) { const pc = s.petals; atmos.set(pc ? pc.n : (i === 0 ? 0 : 4), pc ? pc.kinds : ['rose']); }
  }
  function goTo(i) {
    const s = scenes[i]; if (!s) return;
    const y = s.sec.offsetTop + (i === 0 ? 0 : 1);
    if (lenis) lenis.scrollTo(y, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 3) }); else window.scrollTo({ top: y, behavior: RM ? 'auto' : 'smooth' });
  }

  if (hasGSAP && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger); if (window.Draggable) gsap.registerPlugin(Draggable);
    ScrollTrigger.config({ ignoreMobileResize: true });
  }

  if (hasGSAP && !RM) {
    if (window.Lenis) {
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.2 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      lenis.stop();
    }
    scenes.forEach((s, i) => {
      // the scene's own animation plays while its stage is stuck
      ScrollTrigger.create({ trigger: s.sec, start: 'top top', end: () => '+=' + Math.max(1, (s.len - 1) * SVH()), onUpdate: (st) => { s.p = st.progress; }, invalidateOnRefresh: true });
      // which scene is "current" for dots and ambience
      ScrollTrigger.create({ trigger: s.sec, start: 'top center', end: () => '+=' + s.len * SVH(), onToggle: (st) => { if (st.isActive) setCurrent(i); }, invalidateOnRefresh: true });
      // is any of it on screen? (ticks and CSS animations run only then)
      ScrollTrigger.create({ trigger: s.sec, start: 'top bottom', end: () => '+=' + (s.len + 1) * SVH(), onToggle: (st) => { s.active = st.isActive; s.sec.classList.toggle('paused', !st.isActive); }, invalidateOnRefresh: true });
      // the next scene rises over this one; this one sinks back and darkens
      const next = scenes[i + 1];
      if (next) {
        const tl = gsap.timeline({ scrollTrigger: { trigger: next.sec, start: 'top bottom', end: 'top top', scrub: 0.4, invalidateOnRefresh: true } });
        tl.to(s.el, { scale: 0.93, yPercent: -3, ease: 'none' }, 0).to(s.el.querySelector('.dim'), { opacity: 0.6, ease: 'none' }, 0);
        if (s.exit) s.exit(tl, s.sec);
      }
    });
    // parallax planes inside each stage
    scenes.forEach((s) => {
      $$('.plane[data-depth]', s.sec).forEach((pl) => {
        const d = +pl.dataset.depth;
        s.planes = s.planes || []; s.planes.push({ el: pl, d, base: pl.style.transform || '' });
      });
    });
  } else {
    // reduced motion: no pinning, scrubbing, particles or parallax; just gentle fades
    scenes.forEach((s) => { s.p = 1; s.sec.classList.add('fade-in'); });
    const fio = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) en.target.classList.add('seen'); }), { threshold: 0.15 });
    scenes.forEach((s) => fio.observe(s.sec));
    const cio = new IntersectionObserver((ents) => ents.forEach((en) => { const i = scenes.findIndex((s) => s.sec === en.target); if (en.isIntersecting) setCurrent(i); }), { threshold: 0.5 });
    scenes.forEach((s) => cio.observe(s.sec));
    scenes.forEach((s) => { s.active = true; });
  }

  /* ---------- progress line ---------- */
  const bar = $('#progress i');
  function onScroll() { const max = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${max > 0 ? clamp(scrollY / max, 0, 1) : 0})`; }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- the frame loop ---------- */
  let lastT = performance.now(), hidden = false;
  function frame(now) {
    const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
    if (hidden) return;
    FX.updateTilt();
    for (let i = 0; i < scenes.length; i++) {
      const s = scenes[i];
      if (!s.active && !(i === 0 && !started)) continue;
      if (s.tick) s.tick(dt, s.p);
      if (s.planes && !RM) {
        const off = (s.p - 0.5);
        for (const pl of s.planes) pl.el.style.translate = `${(FX.tilt.x * pl.d * 0.35).toFixed(2)}px ${(-off * pl.d * 2.2 + FX.tilt.y * pl.d * 0.25).toFixed(2)}px`;
      }
    }
    if (atmos && started) atmos.draw(dt);
  }
  if (hasGSAP) gsap.ticker.add(() => frame(performance.now()));
  else { const loop = (t) => { frame(t); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }

  document.addEventListener('visibilitychange', () => {
    hidden = document.hidden;
    document.documentElement.classList.toggle('paused', hidden);
    if (hidden) { Sound.suspend(); if (hasGSAP) gsap.globalTimeline.pause(); } else { Sound.resume(); if (hasGSAP) gsap.globalTimeline.resume(); lastT = performance.now(); }
  });
  let rT; window.addEventListener('resize', () => { clearTimeout(rT); rT = setTimeout(() => { sizeAtmos(); scenes.forEach((s) => s.resize && s.resize()); if (window.ScrollTrigger) ScrollTrigger.refresh(); }, 200); });

  /* ============================================================================
     The opener: untie the kalava
     ========================================================================== */
  document.body.classList.add('locked');
  function unlock() {
    document.body.classList.remove('locked'); document.body.classList.add('started'); started = true;
    if (lenis) lenis.start();
  }
  function startFilm(skipAnim) {
    if (started) return;
    unlock(); setCurrent(0);
    if (skipAnim) { const s0 = scenes[0].sec; $('.untie', s0).style.display = 'none'; }
  }
  function openBox(sec) {
    const btn = $('#untie'); if (btn.disabled) return; btn.disabled = true;
    Sound.unlock(); FX.requestTilt();
    if (store.get('music', true)) toggleMusic(true);
    const view = sec.querySelector('.view');
    const q = (s) => $(s, sec);
    if (!hasGSAP || RM) {
      btn.style.display = 'none'; q('.box-wrap').style.opacity = 0.0; q('.scroll-sheet').style.opacity = 1; q('.scroll-sheet').style.transform = 'translate(-50%,-50%)';
      unlock(); setCurrent(0); return;
    }
    const kal = $$('.kalava path', sec);
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.to(btn, { opacity: 0, y: 10, duration: 0.4, onComplete: () => (btn.style.display = 'none') })
      .to(q('.op-head'), { opacity: 0, y: -10, filter: 'blur(4px)', duration: 0.8 }, 0)
      .add(() => Sound.sfx.thread(), 0.05)
      .to(kal, { strokeDasharray: 400, strokeDashoffset: 400, duration: 0.7, ease: 'power2.in' }, 0.05)
      .to(q('.kalava'), { y: 30, opacity: 0, duration: 0.7, ease: 'power2.in' }, 0.25)
      // the lid lifts: a small 3D rock, then the open box with a sheen across the velvet
      .add(() => Sound.sfx.velvet(), 0.6)
      .to(q('.box-closed'), { rotationX: 14, y: -6, transformPerspective: 700, transformOrigin: '50% 80%', duration: 0.35, ease: 'power2.out' }, 0.6)
      .to(q('.box-closed'), { opacity: 0, duration: 0.35 }, 0.85)
      .fromTo(q('.box-open'), { opacity: 0, rotationX: -10, transformPerspective: 700, transformOrigin: '50% 80%' }, { opacity: 1, rotationX: 0, duration: 0.6, ease: 'back.out(1.4)' }, 0.85)
      .fromTo(q('.velvet-sheen'), { backgroundPosition: '120% 0' }, { backgroundPosition: '-60% 0', duration: 1.1, ease: 'sine.inOut' }, 0.7)
      // the scroll rises out of the box
      .fromTo(q('.scroll-rise'), { opacity: 0, yPercent: 10, scale: 0.7 }, { opacity: 1, yPercent: -120, scale: 1, duration: 0.8, ease: 'power3.out' }, 1.2)
      // the lac seal cracks and its pieces fall
      .add(() => {
        Sound.sfx.crack();
        $$('.seal-piece', sec).forEach((pc, i) => {
          const dir = [1, 1.4, 0, -1.4, -1][i];
          gsap.to(pc, { x: dir * (30 + Math.random() * 30), y: 60 + Math.random() * 30, rotation: dir * (30 + Math.random() * 60), duration: 0.35, ease: 'power1.out' });
          gsap.to(pc, { y: innerHeight * 0.8, rotation: '+=' + dir * 180, opacity: 0, duration: 1.1, delay: 0.3, ease: 'power2.in' });
        });
      }, 2.0)
      // the scroll unrolls with weight
      .add(() => Sound.sfx.unroll(), 2.25)
      .to(q('.scroll-rise'), { opacity: 0, scale: 1.1, duration: 0.35 }, 2.3)
      .to(q('.box-wrap'), { yPercent: 25, opacity: 0.0, scale: 0.9, duration: 0.8, ease: 'power2.in' }, 2.3)
      .fromTo(q('.scroll-sheet'), { opacity: 0, scaleY: 0.06, scaleX: 0.9 }, { opacity: 1, scaleY: 1.02, scaleX: 1, duration: 0.85, ease: 'power3.inOut' }, 2.3)
      .to(q('.scroll-sheet'), { scaleY: 1, duration: 0.3, ease: 'sine.out' }, 3.15)
      .fromTo($$('.ink > *', sec), { opacity: 0, y: 8, filter: 'blur(4px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.12 }, 2.75)
      .add(() => { if (atmos) { atmos.set(14, ['rose', 'jasmine']); atmos.shower(14); } started = true; }, 2.6)
      // the camera pushes into the scroll and dissolves into the Herald
      .to(view, { scale: 1.5, filter: 'blur(6px)', opacity: 0, duration: 1.0, ease: 'power2.in' }, 4.4)
      .add(() => {
        unlock(); setCurrent(0);
        const y = scenes[1].sec.offsetTop;
        if (lenis) lenis.scrollTo(y, { immediate: true, force: true }); else window.scrollTo(0, y);
        ScrollTrigger.update();
        gsap.set(view, { clearProps: 'filter' });
        gsap.set(view, { opacity: 1, scale: 1 });
        gsap.fromTo(scenes[1].sec.querySelector('.stage'), { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.3, ease: 'power2.out', clearProps: 'transform' });
      }, 5.4);
  }

  // returning guests can skip the box with the menu; ?skip=1 starts unlocked (handy for testing)
  if (params.get('skip') === '1') { startFilm(true); }

  // fonts can change text metrics: refresh once they're ready
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (window.ScrollTrigger) ScrollTrigger.refresh(); });

  window.__rishta = { scenes, goTo, CONFIG: C };
})();
