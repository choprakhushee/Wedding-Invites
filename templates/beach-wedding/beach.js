/* Beach Wedding · Aamantran Atelier sample template
   State, rendering, the scroll-driven sky, reveals, the editor, sharing and the countdown. */
(function () {
  'use strict';
  var A = window.BeachArt;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- sample content ---------- */
  var SAMPLE = {
    v: 1, colour: 'coral',
    bride: "Bride's Name", groom: "Groom's Name", tagline: 'are getting married', city: 'Palolem, Goa',
    when: '2027-02-14T17:30',
    blessingOn: true, blessing: 'Shri Ganeshaya Namah',
    brideParents: "Mrs & Mr Bride's Parents", groomParents: "Mrs & Mr Groom's Parents",
    wording: 'request the pleasure of your company as their children begin forever, barefoot on the sand, with the sea as witness.',
    events: [
      { id: 'e1', name: 'Mehendi', art: 'cabana', frame: 'shell', date: '', time: '11:00 AM', venue: 'The palm-shade cabanas', dress: 'Seafoam and mint, flats for the sand', map: '' },
      { id: 'e2', name: 'Haldi', art: 'marigolds', frame: 'bamboo', date: '', time: '9:30 AM', venue: 'The shoreline lawn', dress: 'Sunny yellows you can splash in', map: '' },
      { id: 'e3', name: 'Sangeet', art: 'bonfire', frame: 'shell', date: '', time: '7:30 PM', venue: 'The bonfire deck', dress: 'Sequins and sarongs', map: '' },
      { id: 'e4', name: 'Wedding', art: 'mandap', frame: 'bamboo', date: '', time: '5:30 PM', venue: 'The beach mandap', dress: 'Pastels and ivory, barefoot welcome', map: '' },
      { id: 'e5', name: 'Reception', art: 'lanterns', frame: 'shell', date: '', time: '8:30 PM', venue: 'Lantern beach', dress: 'Evening wear, beach edition', map: '' }
    ],
    venueName: 'Venue Name', venueAddress: 'Beach Road, Town, State', venueMap: '',
    story: 'We met where the waves meet the sand, and somehow we never left. Spend a day by the sea with us, from the first morning light to the last lantern.',
    rsvpBy: '2027-01-10', rsvpForm: '', rsvpWhatsApp: '',
    hashtag: '#BarefootForever', instagram: '',
    know: {
      hashtag: 'Tag your photos with {hashtag} so we can find every one.',
      weather: 'Sunny days near 30°C and breezy evenings. High tide comes in around sunset; the mandap sits well above the waterline.',
      stay: 'Rooms are held for guests at the venue resort. Mention the wedding when you book.',
      travel: 'The airport is about an hour away. Shuttles run between every event, and there is free parking at the resort.',
      dress: 'Beach-friendly footwear: flats, sandals or bare feet. Bring a light shawl for the night breeze.'
    },
    closing: "We can't wait to celebrate with you by the sea."
  };
  var KNOW = [['hashtag', 'Hashtag'], ['weather', 'Weather & tides'], ['stay', 'Stay'], ['travel', 'Getting there & parking'], ['dress', 'Dress code']];
  var STORIES = {
    coral: { name: 'Coral & Seafoam', chips: ['#3FB8C4', '#A8E0D2', '#F27C6A', '#F3E3C3', '#0F4C5C'], theme: '#3FB8C4' },
    goa: { name: 'Goa Sunset', chips: ['#1BA6A6', '#F5A524', '#D6336C', '#C92A2A', '#2F7D4F'], theme: '#1BA6A6' },
    santorini: { name: 'Santorini White', chips: ['#FAF8F3', '#1F4FA3', '#7FB2E5', '#8A9A5B', '#F3D35B'], theme: '#1F4FA3' }
  };
  /* sky stops: morning, afternoon, golden hour, sunset, dusk, night  (top, middle, horizon) */
  var SKIES = {
    coral: [['#9fdbe9', '#d3f0f0', '#fff4e2'], ['#5db8d4', '#a3dbe5', '#f6e6c6'], ['#f2a07c', '#f8c79a', '#fde2bd'],
      ['#4a3f7d', '#e36f72', '#f6b07a'], ['#3d4586', '#8181c2', '#c7b8e0'], ['#050d26', '#0c1c42', '#18305a']],
    goa: [['#7fd3d6', '#c8eee6', '#fff0cf'], ['#29aebd', '#8fd8d2', '#fbe2a8'], ['#f39a3c', '#f8bd5b', '#fde0a0'],
      ['#5a2a6e', '#d6336c', '#f5a524'], ['#3b2f74', '#8d5fa6', '#d59bb8'], ['#090b24', '#151a45', '#26285e']],
    santorini: [['#a9cdf0', '#dceaf7', '#fbf9f3'], ['#6fa6e0', '#b6d3f0', '#f4f1e8'], ['#e9b97a', '#f3d79a', '#faf1d6'],
      ['#2c3f86', '#c97a8c', '#f3c47a'], ['#27407f', '#7086c4', '#b9c3e6'], ['#06102a', '#0e1f4a', '#1b3366']]
  };

  /* ---------- storage (every access guarded) ---------- */
  var KEY = 'bw.state.v1', PKEY = 'bw.photos.v1';
  function load(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function merge(base, extra) {
    var out = clone(base);
    if (!extra || typeof extra !== 'object') return out;
    Object.keys(extra).forEach(function (k) {
      if (k === 'know' && extra.know) Object.keys(extra.know).forEach(function (j) { out.know[j] = extra.know[j]; });
      else if (k in out) out[k] = extra[k];
    });
    if (!Array.isArray(out.events)) out.events = clone(base.events);
    return out;
  }

  var guest = false, state, photos = load(PKEY) || {};
  (function boot() {
    var h = location.hash, fromHash = null;
    var m = /^#([ge])=(.+)$/.exec(h);
    if (m && window.LZString) {
      try { fromHash = JSON.parse(LZString.decompressFromEncodedURIComponent(m[2])); } catch (e) { fromHash = null; }
      if (fromHash) {
        guest = m[1] === 'g';
        if (!guest) { save(KEY, fromHash); try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} }
      }
    }
    state = merge(SAMPLE, fromHash || load(KEY));
  })();
  if (guest) document.body.classList.add('guest');

  function persist() { if (!guest) save(KEY, state); }

  /* ---------- formatting ---------- */
  function parseWhen(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(s || '');
    return m ? new Date(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0)) : null;
  }
  var fmt = {
    dateDots: function () { var d = parseWhen(state.when); return d ? pad(d.getDate()) + ' · ' + pad(d.getMonth() + 1) + ' · ' + d.getFullYear() : 'Event Date'; },
    dateLong: function () {
      var d = parseWhen(state.when); if (!d) return 'Event Date';
      return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) +
        (/T\d/.test(state.when) ? ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : '');
    },
    rsvpBy: function () { var d = parseWhen(state.rsvpBy); return d ? d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'RSVP Date'; }
  };
  function evDate(s) { var d = parseWhen(s); return d ? d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }) : 'Event Date'; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function linkFor(key, val) {
    val = (val || '').trim(); if (!val) return '';
    if (key === 'instagram') return /^https?:\/\//i.test(val) ? val : 'https://instagram.com/' + val.replace(/^@/, '');
    if (/^(https?:|mailto:|tel:)/i.test(val)) return val;
    return 'https://' + val;
  }

  /* ---------- static art ---------- */
  function paintArt() {
    $('#hero-scene').innerHTML = A.hero();
    $('#edge-foam').innerHTML = A.edgeFoam();
    $('#sky-clouds').innerHTML = A.clouds();
    $('#sky-stars').innerHTML = A.stars();
    $('#walk').innerHTML = A.footprints(400, 250);
    $('#bottle').innerHTML = A.bottle();
    $('#fairy').innerHTML = A.fairyLights();
    $('#hourglass').innerHTML = A.hourglass();
    $('#moonwater').innerHTML = A.moonWater();
    $$('.divider-slot').forEach(function (el) { el.innerHTML = A.shellDivider(); });
    $$('[data-edge]').forEach(function (el) {
      var p = el.getAttribute('data-edge').split(':');
      el.innerHTML = A.waveEdge(p[0], +p[1], p[2] === 'flip');
    });
  }

  /* ---------- render ---------- */
  var revealedEvents = {};
  function render() {
    document.documentElement.setAttribute('data-story', STORIES[state.colour] ? state.colour : 'coral');
    var tc = $('meta[name="theme-color"]'); if (tc) tc.setAttribute('content', (STORIES[state.colour] || STORIES.coral).theme);
    document.title = state.bride + ' & ' + state.groom + ' · Beach Wedding';

    $$('[data-b]').forEach(function (el) { el.textContent = state[el.getAttribute('data-b')] || ''; });
    $$('[data-f]').forEach(function (el) { el.textContent = fmt[el.getAttribute('data-f')](); });
    $$('[data-show]').forEach(function (el) { el.hidden = !state[el.getAttribute('data-show')]; });
    $$('[data-link]').forEach(function (el) {
      var k = el.getAttribute('data-link'), href = linkFor(k, state[k]);
      el.setAttribute('href', href || '#'); el.classList.toggle('is-empty', !href);
    });

    // RSVP: form link first, then WhatsApp
    var rb = $('#rsvp-btn'), form = linkFor('rsvpForm', state.rsvpForm), wa = (state.rsvpWhatsApp || '').replace(/[^\d]/g, '');
    if (form) { rb.href = form; rb.textContent = 'Send your RSVP'; }
    else if (wa) {
      rb.href = 'https://wa.me/' + wa + '?text=' + encodeURIComponent('Hello! RSVP for the wedding of ' + state.bride + ' & ' + state.groom + ': ');
      rb.textContent = 'RSVP on WhatsApp';
    } else { rb.href = '#'; rb.textContent = 'Send your RSVP'; }
    rb.classList.toggle('is-empty', !form && !wa);

    renderEvents();
    $('#porthole').innerHTML = A.porthole(photos.venue);
    $('#couple-frame').innerHTML = A.coupleFrame(photos.couple);
    $('#know-list').innerHTML = KNOW.map(function (k) {
      var txt = (state.know[k[0]] || '').split('{hashtag}').join(state.hashtag || '');
      return txt.trim() ? '<li class="know-item">' + A.icon(k[0]) + '<div><h3>' + esc(k[1]) + '</h3><p>' + esc(txt) + '</p></div></li>' : '';
    }).join('');
    if (reduceMotion) pauseSvg();
    tick();
    measureSky();
  }

  function renderEvents() {
    var list = $('#event-list');
    list.innerHTML = state.events.map(function (ev, i) {
      var uid = 'ev' + i + '_';
      var map = linkFor('map', ev.map);
      var row = function (label, val) { return val ? '<div class="ev-row"><span class="small-caps">' + label + '</span><span>' + esc(val) + '</span></div>' : ''; };
      return '<article class="event-card reveal' + (revealedEvents[ev.id] ? ' in' : '') + '" data-id="' + esc(ev.id) + '" style="--bd:' + (i * -1.3) + 's">' +
        '<div class="bob">' + A.eventArch(ev.art, uid, photos['ev-' + ev.id], ev.frame || (i % 2 ? 'bamboo' : 'shell')) +
        '<div class="ev-body"><h3 class="ev-name">' + esc(ev.name || 'Event') + '</h3>' +
        '<p class="ev-when">' + esc(evDate(ev.date)) + (ev.time ? ' · ' + esc(ev.time) : '') + '</p>' +
        '<div class="ev-rows">' + row('Venue', ev.venue) + row('Dress code', ev.dress) + '</div>' +
        '<a class="btn' + (map ? '' : ' is-empty') + '" href="' + esc(map || '#') + '" target="_blank" rel="noopener" data-empty-msg="1">Map</a>' +
        '</div></div></article>';
    }).join('');
    observeReveals();
  }

  function pauseSvg() { $$('svg').forEach(function (s) { if (s.pauseAnimations) s.pauseAnimations(); }); }

  /* ---------- empty links → toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.is-empty');
    if (!a) return;
    e.preventDefault();
    toast(guest ? 'This link will be added soon.' : 'Add this link in ✎ Personalise');
  });

  /* ---------- the sky tells the day ---------- */
  var anchors = [], skyEls = [], ticking = false;
  function hexRgb(h) { var n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function mix(a, b, t) { var x = hexRgb(a), y = hexRgb(b); return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(x[i] + (y[i] - x[i]) * t); }).join(',') + ')'; }
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  function measureSky() {
    anchors = $$('main > section').map(function (s) {
      return { y: s.offsetTop + s.offsetHeight / 2, t: parseFloat(s.getAttribute('data-sky')) || 0 };
    });
    skyEls = [document.documentElement];
    paintSky();
  }
  function skyT(y) {
    if (!anchors.length) return 0;
    if (y <= anchors[0].y) return anchors[0].t;
    for (var i = 1; i < anchors.length; i++) {
      if (y <= anchors[i].y) { var a = anchors[i - 1], b = anchors[i]; return a.t + (b.t - a.t) * (y - a.y) / (b.y - a.y || 1); }
    }
    return anchors[anchors.length - 1].t;
  }
  function paintSky() {
    ticking = false;
    var sy = window.scrollY || window.pageYOffset, vh = window.innerHeight;
    var t = clamp(skyT(sy + vh * 0.5), 0, 5);
    var table = SKIES[state.colour] || SKIES.coral, i = Math.min(4, Math.floor(t)), f = t - i;
    var st = document.documentElement.style;
    st.setProperty('--st', mix(table[i][0], table[i + 1][0], f));
    st.setProperty('--sm', mix(table[i][1], table[i + 1][1], f));
    st.setProperty('--sb', mix(table[i][2], table[i + 1][2], f));
    var ts = Math.min(t, 3.3);
    st.setProperty('--sun-x', (84 - ts * 11) + '%');
    st.setProperty('--sun-y', (8 + ts * 27) + '%');
    st.setProperty('--sun-o', clamp(1 - (t - 3) * 1.6, 0, 1).toFixed(3));
    st.setProperty('--sun-c', t < 2 ? '#ffe7a8' : mix('#ffe7a8', '#ff8f5a', clamp(t - 2, 0, 1)));
    st.setProperty('--cloud-o', clamp(1 - (t - 2.6) / 1.5, 0, 1).toFixed(3));
    st.setProperty('--star-o', clamp((t - 3.4) / 1.3, 0, 1).toFixed(3));
    st.setProperty('--moon-o', clamp((t - 3.9) / 1, 0, 1).toFixed(3));
    // hero parallax
    if (!reduceMotion && sy < vh * 1.3) {
      $$('#hero-scene [data-depth]').forEach(function (g) { g.style.transform = 'translateY(' + (sy * parseFloat(g.getAttribute('data-depth'))).toFixed(1) + 'px)'; });
      var hc = $('.hero-copy'); hc.style.transform = 'translateY(' + (sy * 0.28).toFixed(1) + 'px)'; hc.style.opacity = clamp(1 - sy / (vh * 0.7), 0, 1);
    }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(paintSky); } }, { passive: true });
  window.addEventListener('resize', function () { measureSky(); });

  /* ---------- reveals ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      var id = en.target.getAttribute('data-id'); if (id) revealedEvents[id] = true;
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }) : null;
  function observeReveals() {
    $$('.reveal:not(.in), #route:not(.in), #bottle-wrap:not(.in)').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }

  /* ---------- countdown ---------- */
  function tick() {
    var d = parseWhen(state.when), ms = d ? Math.max(0, d - new Date()) : 0, s = Math.floor(ms / 1000);
    $('#cd-d').textContent = pad(Math.floor(s / 86400));
    $('#cd-h').textContent = pad(Math.floor(s % 86400 / 3600));
    $('#cd-m').textContent = pad(Math.floor(s % 3600 / 60));
    $('#cd-s').textContent = pad(s % 60);
  }
  setInterval(tick, 1000);

  /* ---------- sound ---------- */
  $('#sound-btn').addEventListener('click', function () {
    var on = this.getAttribute('aria-pressed') !== 'true';
    if (on && !(window.BeachSound && BeachSound.start())) { toast('Sound is not available in this browser.'); return; }
    if (!on && window.BeachSound) BeachSound.stop();
    this.setAttribute('aria-pressed', String(on));
    this.setAttribute('aria-label', on ? 'Pause sea sounds' : 'Play sea sounds');
  });

  /* ---------- editor ---------- */
  var GROUPS = [
    { t: 'The couple', f: [['bride', "Bride's name"], ['groom', "Groom's name"], ['tagline', 'Tagline'], ['city', 'Beach or city'], ['when', 'Wedding date & time (drives the countdown)', 'datetime-local']] },
    { t: 'Invitation', f: [['blessingOn', 'Show the blessing line', 'toggle'], ['blessing', 'Blessing'], ['brideParents', "Bride's parents"], ['groomParents', "Groom's parents"], ['wording', 'Invitation wording', 'textarea']] },
    { t: 'Events', events: true },
    { t: 'Venue & route', f: [['venueName', 'Venue name'], ['venueAddress', 'Address', 'textarea'], ['venueMap', 'Map link', 'url']], photo: ['venue', 'Porthole photo'] },
    { t: 'Your story', f: [['story', 'A few lines about you', 'textarea']], photo: ['couple', 'Couple photo'] },
    { t: 'RSVP', f: [['rsvpBy', 'Reply by', 'date'], ['rsvpForm', 'RSVP form link', 'url'], ['rsvpWhatsApp', 'or WhatsApp number (with country code)', 'tel']] },
    { t: 'Hashtag & Instagram', f: [['hashtag', 'Hashtag'], ['instagram', 'Instagram handle or link']] },
    { t: 'Things to know', f: KNOW.map(function (k) { return ['know.' + k[0], k[1], 'textarea']; }), hint: 'Write {hashtag} to insert your hashtag. Leave a box empty to hide it.' },
    { t: 'Closing message', f: [['closing', 'Closing line', 'textarea']] }
  ];
  function getK(k) { var p = k.split('.'); return p.length > 1 ? state[p[0]][p[1]] : state[k]; }
  function setK(k, v) { var p = k.split('.'); if (p.length > 1) state[p[0]][p[1]] = v; else state[k] = v; }

  function fieldHTML(k, label, type) {
    var id = 'f-' + k.replace('.', '-'), v = getK(k);
    if (type === 'toggle') return '<label class="toggle" for="' + id + '"><input id="' + id + '" type="checkbox" data-k="' + k + '"' + (v ? ' checked' : '') + '> ' + esc(label) + '</label>';
    var input = type === 'textarea'
      ? '<textarea id="' + id + '" data-k="' + k + '" rows="3">' + esc(v) + '</textarea>'
      : '<input id="' + id + '" type="' + (type || 'text') + '" data-k="' + k + '" value="' + esc(v) + '"' + (type === 'url' ? ' placeholder="https://"' : '') + '>';
    return '<div class="field"><label for="' + id + '">' + esc(label) + '</label>' + input + '</div>';
  }
  function photoHTML(key, label) {
    var id = 'p-' + key, has = !!photos[key];
    return '<div class="field"><span class="lbl">' + esc(label) + '</span><div class="photo-row">' +
      (has ? '<img src="' + photos[key] + '" alt="">' : '') +
      '<input id="' + id + '" type="file" accept="image/*" data-photo="' + esc(key) + '" aria-label="' + esc(label) + '">' +
      (has ? '<button class="mini" type="button" data-photo-clear="' + esc(key) + '" aria-label="Remove photo">✕</button>' : '') +
      '</div></div>';
  }
  function eventsHTML() {
    var opts = Object.keys(A.vignetteNames);
    return state.events.map(function (ev, i) {
      var f = function (k, label, type) {
        var id = 'ev-' + ev.id + '-' + k;
        return '<div class="field"><label for="' + id + '">' + label + '</label><input id="' + id + '" type="' + (type || 'text') + '" data-ev="' + i + '" data-evk="' + k + '" value="' + esc(ev[k]) + '"' + (type === 'url' ? ' placeholder="https://"' : '') + '></div>';
      };
      return '<div class="ev-edit"><div class="ev-edit-head"><strong>' + esc(ev.name || 'Event') + '</strong>' +
        '<button class="mini" type="button" data-move="' + i + ':-1" aria-label="Move up"' + (i === 0 ? ' disabled' : '') + '>↑</button>' +
        '<button class="mini" type="button" data-move="' + i + ':1" aria-label="Move down"' + (i === state.events.length - 1 ? ' disabled' : '') + '>↓</button>' +
        '<button class="mini" type="button" data-remove="' + i + '" aria-label="Remove ' + esc(ev.name) + '">✕</button></div>' +
        f('name', 'Name') +
        '<div class="field-row"><div class="field"><label for="ev-' + ev.id + '-art">Illustration</label><select id="ev-' + ev.id + '-art" data-ev="' + i + '" data-evk="art">' +
        opts.map(function (o) { return '<option value="' + o + '"' + (ev.art === o ? ' selected' : '') + '>' + A.vignetteNames[o] + '</option>'; }).join('') + '</select></div>' +
        '<div class="field"><label for="ev-' + ev.id + '-frame">Arch</label><select id="ev-' + ev.id + '-frame" data-ev="' + i + '" data-evk="frame">' +
        '<option value="shell"' + (ev.frame !== 'bamboo' ? ' selected' : '') + '>Seashell</option><option value="bamboo"' + (ev.frame === 'bamboo' ? ' selected' : '') + '>Bamboo</option></select></div></div>' +
        '<div class="field-row">' + f('date', 'Date', 'date') + f('time', 'Time') + '</div>' +
        f('venue', 'Venue') + f('dress', 'Dress code') + f('map', 'Map link', 'url') +
        photoHTML('ev-' + ev.id, 'Photo instead of the illustration (optional)') + '</div>';
    }).join('') + '<button class="btn" type="button" id="add-event">+ Add an event</button>';
  }
  function buildEditor() {
    var html = '<div class="field"><span class="lbl">Colour story</span><div class="swatches" role="radiogroup" aria-label="Colour story">' +
      Object.keys(STORIES).map(function (k) {
        var s = STORIES[k];
        return '<button type="button" class="swatch" role="radio" aria-checked="' + (state.colour === k) + '" data-story="' + k + '">' +
          '<span class="chips">' + s.chips.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + '</span>' + s.name + '</button>';
      }).join('') + '</div></div>';
    html += GROUPS.map(function (g, gi) {
      var inner = g.events ? '<div id="ed-events" class="ed-fields" style="padding:0">' + eventsHTML() + '</div>' :
        g.f.map(function (f) { return fieldHTML(f[0], f[1], f[2]); }).join('') + (g.photo ? photoHTML(g.photo[0], g.photo[1]) : '');
      return '<details class="ed-group"' + (gi === 0 ? ' open' : '') + '><summary>' + g.t + '</summary><div class="ed-fields">' +
        (g.hint ? '<p class="hint">' + esc(g.hint) + '</p>' : '') + inner + '</div></details>';
    }).join('');
    html += '<p class="hint">Changes save on this device as you type. Photos stay on this device; guests see the illustrations in their place.</p>';
    $('#editor-body').innerHTML = html;
  }
  function refreshEvents() { var b = $('#ed-events'); if (b) b.innerHTML = eventsHTML(); }

  var renderTimer;
  function changed(now) {
    persist();
    clearTimeout(renderTimer);
    if (now) render(); else renderTimer = setTimeout(render, 120);
  }
  var body = $('#editor-body');
  body.addEventListener('input', function (e) {
    var el = e.target;
    if (el.hasAttribute('data-k')) { setK(el.getAttribute('data-k'), el.type === 'checkbox' ? el.checked : el.value); changed(); }
    else if (el.hasAttribute('data-ev')) {
      var ev = state.events[+el.getAttribute('data-ev')], k = el.getAttribute('data-evk');
      ev[k] = el.value;
      if (k === 'name') { var h = el.closest('.ev-edit').querySelector('strong'); if (h) h.textContent = el.value || 'Event'; }
      changed();
    }
  });
  body.addEventListener('change', function (e) {
    var el = e.target;
    if (el.type === 'checkbox' && el.hasAttribute('data-k')) { setK(el.getAttribute('data-k'), el.checked); changed(true); }
    if (el.hasAttribute('data-photo') && el.files && el.files[0]) addPhoto(el.getAttribute('data-photo'), el.files[0]);
  });
  body.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.hasAttribute('data-story')) {
      state.colour = b.getAttribute('data-story');
      $$('.swatch', body).forEach(function (s) { s.setAttribute('aria-checked', String(s === b)); });
      changed(true); paintSky();
    } else if (b.hasAttribute('data-move')) {
      var p = b.getAttribute('data-move').split(':'), i = +p[0], j = i + +p[1];
      var tmp = state.events[i]; state.events[i] = state.events[j]; state.events[j] = tmp;
      refreshEvents(); changed(true);
    } else if (b.hasAttribute('data-remove')) {
      state.events.splice(+b.getAttribute('data-remove'), 1); refreshEvents(); changed(true);
    } else if (b.id === 'add-event') {
      state.events.push({ id: 'e' + Date.now().toString(36), name: 'New event', art: 'lanterns', frame: state.events.length % 2 ? 'bamboo' : 'shell', date: '', time: '', venue: '', dress: '', map: '' });
      refreshEvents(); changed(true);
      var last = $$('.ev-edit', body).pop(); if (last) last.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else if (b.hasAttribute('data-photo-clear')) {
      delete photos[b.getAttribute('data-photo-clear')]; save(PKEY, photos); buildEditorKeepOpen(); render();
    }
  });
  function buildEditorKeepOpen() {
    var open = $$('.ed-group', body).map(function (d) { return d.open; }), top = body.scrollTop;
    buildEditor();
    $$('.ed-group', body).forEach(function (d, i) { d.open = !!open[i]; });
    body.scrollTop = top;
  }

  /* photos: resized to 900 px on the longest side, stored apart from the text */
  function addPhoto(key, file) {
    var reader = new FileReader();
    reader.onload = function () {
      var img = new Image();
      img.onload = function () {
        var k = Math.min(1, 900 / Math.max(img.width, img.height)), c = document.createElement('canvas');
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        photos[key] = c.toDataURL('image/jpeg', 0.82);
        if (!save(PKEY, photos)) toast('This photo shows now but is too large to keep on this device.');
        else toast('Photo saved on this device');
        buildEditorKeepOpen(); render();
      };
      img.onerror = function () { toast('That file could not be read as a photo.'); };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  /* open / close */
  var editor = $('#editor'), scrim = $('#scrim'), lastFocus;
  function openEditor() {
    lastFocus = document.activeElement;
    buildEditor();
    editor.hidden = false; scrim.hidden = false;
    requestAnimationFrame(function () { editor.classList.add('open'); scrim.classList.add('open'); $('#editor-close').focus(); });
  }
  function closeEditor() {
    editor.classList.remove('open'); scrim.classList.remove('open');
    setTimeout(function () { editor.hidden = true; scrim.hidden = true; }, reduceMotion ? 0 : 420);
    if (lastFocus) lastFocus.focus();
  }
  $('#edit-btn').addEventListener('click', openEditor);
  $('#editor-close').addEventListener('click', closeEditor);
  scrim.addEventListener('click', closeEditor);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !editor.hidden) closeEditor(); });

  /* share links */
  function linkWith(prefix) {
    var payload = LZString.compressToEncodedURIComponent(JSON.stringify(state));
    return location.href.split('#')[0] + '#' + prefix + '=' + payload;
  }
  function offer(url, label, done) {
    var out = $('#share-out'), inp = $('#share-url');
    $('#share-label').textContent = label; inp.value = url; out.hidden = false;
    var fallback = function () { inp.focus(); inp.select(); toast('Link ready. Copy it from the box.'); };
    try {
      navigator.clipboard.writeText(url).then(function () { toast(done); }, fallback);
    } catch (e) { fallback(); }
  }
  $('#share-btn').addEventListener('click', function () { offer(linkWith('g'), 'Guest link', 'Guest link copied. Photos stay on this device.'); });
  $('#copy-edit-btn').addEventListener('click', function () { offer(linkWith('e'), 'Edit link (keep this private)', 'Edit link copied'); });
  var resetArmed = null;
  $('#reset-btn').addEventListener('click', function () {
    var b = this;
    if (!resetArmed) {
      b.textContent = 'Tap again to reset';
      resetArmed = setTimeout(function () { resetArmed = null; b.textContent = 'Reset to sample'; }, 3000);
      return;
    }
    clearTimeout(resetArmed); resetArmed = null; b.textContent = 'Reset to sample';
    state = clone(SAMPLE); photos = {}; save(PKEY, photos); persist();
    buildEditor(); render(); paintSky(); toast('Back to the sample invite');
  });

  /* ---------- go ---------- */
  paintArt();
  render();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureSky);
  window.addEventListener('load', measureSky);
  if (reduceMotion) pauseSvg();
})();
