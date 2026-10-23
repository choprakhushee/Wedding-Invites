// Shared invite foundation: config loading, language, guest links, element
// slots, music and the bell chime. Each template's own script handles the look
// and animation and calls into this.
//
// The couple's details live in ./wedding.json next to the page.

window.InviteCore = (function () {
  "use strict";

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* private mode */ } },
  };

  const state = { config: null, lang: "en", listeners: [] };

  async function loadConfig(path) {
    const config = await fetch(path || "wedding.json", { cache: "no-cache" }).then((r) => {
      if (!r.ok) throw new Error("wedding.json returned " + r.status);
      return r.json();
    });
    config.show = Object.assign({}, config.show);
    config.text = config.text || {};
    state.config = config;
    const regional = regionalLang();
    const saved = store.get("invite-lang");
    state.lang = saved === regional && regional ? regional : "en";
    return config;
  }

  function regionalLang() {
    const c = state.config;
    if (!c || !c.language || !c.language.regional) return "";
    return c.show.regional_language === false ? "" : c.language.regional;
  }

  // A config value can be plain text or { "en": "...", "ta": "..." }.
  function t(value, lang) {
    if (value == null) return "";
    if (typeof value !== "object") return String(value);
    lang = lang || state.lang;
    return value[lang] || value.en || "";
  }

  // Interface text from config.text, falling back to English.
  function ui(key, vars) {
    const text = state.config.text;
    let s = (text[state.lang] && text[state.lang][key]) || (text.en && text.en[key]) || "";
    if (vars) Object.keys(vars).forEach((k) => { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }

  function setLang(lang) {
    state.lang = lang === regionalLang() ? lang : "en";
    store.set("invite-lang", state.lang);
    document.documentElement.lang = state.lang;
    state.listeners.forEach((fn) => fn(state.lang));
  }

  function onLangChange(fn) { state.listeners.push(fn); }

  // Regional fonts are loaded only for the languages this couple uses.
  const FONTS = {
    ta: "Noto Serif Tamil", te: "Noto Serif Telugu", kn: "Noto Serif Kannada",
    ml: "Noto Serif Malayalam", hi: "Tiro Devanagari Hindi", mr: "Tiro Devanagari Marathi",
    sa: "Tiro Devanagari Sanskrit", bn: "Noto Serif Bengali", gu: "Noto Serif Gujarati",
  };
  function loadFont(lang, weights) {
    const family = FONTS[lang];
    if (!family) return;
    const id = "font-" + lang;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    const w = family.startsWith("Tiro") ? "" : ":wght@" + (weights || "400;600");
    link.href = "https://fonts.googleapis.com/css2?family=" + family.replace(/ /g, "+") + w + "&display=swap";
    document.head.append(link);
    document.documentElement.style.setProperty("--font-" + lang, '"' + family + '"');
  }

  // ?guest=Iyer%20Family → "Iyer Family". Length-limited and shown as text only.
  function guestName() {
    const raw = new URLSearchParams(location.search).get("guest") || "";
    return raw.replace(/\s+/g, " ").trim().slice(0, 60);
  }

  // Element slots: every slot starts with its built-in SVG, then switches to
  // assets/elements/<slot>.webp (or .png) if that file exists, or to the file
  // named in config.elements, e.g. "gopuram": "my-gopuram.jpg".
  function fillSlots(root, base, fallbacks) {
    const overrides = state.config.elements || {};
    root.querySelectorAll("[data-slot]").forEach((el) => {
      const name = el.dataset.slot;
      if (fallbacks[name]) el.innerHTML = fallbacks[name](el);
      // Files named in config.elements are relative to the couple's folder.
      const tries = overrides[name] ? [overrides[name]] : [base + name + ".webp", base + name + ".png"];
      const img = new Image();
      img.decoding = "async";
      img.alt = "";
      img.onload = () => { el.innerHTML = ""; el.append(img); el.classList.add("has-image"); };
      img.onerror = () => { if (tries.length) img.src = tries.shift(); };
      img.src = tries.shift();
    });
  }

  // ---- Sound -------------------------------------------------------------

  const sound = { muted: store.get("invite-muted") === "1", audio: null, ctx: null, buttons: [] };

  function setupMusic(audioEl) {
    const m = state.config.music || {};
    if (!m.src) return false;
    sound.audio = audioEl;
    sound.volume = m.volume == null ? 0.5 : m.volume;
    // Only offer the music button once the file is known to load.
    audioEl.preload = "metadata";
    audioEl.addEventListener("loadedmetadata", () => { sound.ready = true; refreshButtons(); });
    audioEl.addEventListener("error", () => { sound.audio = null; refreshButtons(); });
    audioEl.src = m.src;
    return true;
  }

  // Called from the first tap: browsers only allow sound after a user gesture.
  function startMusic() {
    const a = sound.audio;
    if (!a || sound.muted) return;
    a.volume = 0;
    a.play().then(() => fadeVolume(sound.volume, 3000)).catch(() => {});
    refreshButtons();
  }

  function fadeVolume(to, ms) {
    const a = sound.audio, from = a.volume, start = performance.now();
    (function step(now) {
      const k = Math.min(1, (now - start) / ms);
      try { a.volume = from + (to - from) * k; } catch (_) { /* iOS: volume is read-only */ }
      if (k < 1) requestAnimationFrame(step);
    })(start);
  }

  function setMuted(muted) {
    sound.muted = muted;
    store.set("invite-muted", muted ? "1" : "0");
    if (sound.audio) {
      if (muted) sound.audio.pause();
      else { sound.audio.volume = sound.volume; sound.audio.play().catch(() => {}); }
    }
    refreshButtons();
  }

  function bindMusicButton(btn) {
    sound.buttons.push(btn);
    btn.addEventListener("click", (e) => { e.stopPropagation(); setMuted(!sound.muted); });
    refreshButtons();
  }

  function refreshButtons() {
    sound.buttons.forEach((btn) => {
      btn.hidden = !sound.audio || !sound.ready;
      btn.classList.toggle("is-muted", sound.muted);
      btn.setAttribute("aria-pressed", String(!sound.muted));
      btn.setAttribute("aria-label", ui(sound.muted ? "music_on" : "music_off"));
    });
  }

  // A soft temple-bell chime, synthesised so it needs no download: a few
  // inharmonic partials with long, gentle decays. Only ever called from taps.
  function chime(strength) {
    if (sound.muted) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = sound.ctx || (sound.ctx = new AC());
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime + 0.02;
    const out = ctx.createGain();
    out.gain.value = 0.09 * (strength || 1);
    out.connect(ctx.destination);
    const base = 587;
    [[1, 1, 4.2], [2.02, 0.45, 3.0], [2.74, 0.3, 2.4], [4.1, 0.14, 1.6], [5.43, 0.08, 1.1]].forEach(([ratio, amp, decay]) => {
      [0, 1.6].forEach((detune) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = base * ratio + detune;
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(amp / 2, now + 0.008);
        g.gain.exponentialRampToValueAtTime(0.0001, now + decay);
        osc.connect(g).connect(out);
        osc.start(now);
        osc.stop(now + decay + 0.1);
      });
    });
  }

  // ---- Calendar ------------------------------------------------------------

  // A one-event .ics file. Times in wedding.json are local wall-clock times;
  // "timezone" (e.g. "+05:30") turns them into UTC for the calendar.
  function icsFor(ev, title) {
    const tz = state.config.timezone || "+05:30";
    const stamp = (date, time) => new Date(date + "T" + (time || "00:00") + ":00" + tz)
      .toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const esc = (s) => String(s || "").replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
    const start = stamp(ev.date, ev.start);
    const end = ev.end ? stamp(ev.date, ev.end) : stamp(ev.date, ev.start).replace(/T(\d\d)/, (m, h) => "T" + String(Math.min(23, +h + 2)).padStart(2, "0"));
    const lines = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Invites//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:" + (ev.id || start) + "-" + start + "@wedding-invite",
      "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""),
      "DTSTART:" + start, "DTEND:" + end,
      "SUMMARY:" + esc(title),
      "LOCATION:" + esc(t(ev.venue, "en")),
      "DESCRIPTION:" + esc([t(ev.dress_code, "en"), ev.map].filter(Boolean).join("\n")),
      "END:VEVENT", "END:VCALENDAR",
    ];
    return lines.join("\r\n");
  }

  function downloadIcs(ev, title) {
    const blob = new Blob([icsFor(ev, title)], { type: "text/calendar;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = (ev.id || "event") + ".ics";
    document.body.append(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  return {
    state, loadConfig, icsFor, downloadIcs, t, ui, setLang, onLangChange, regionalLang, loadFont, guestName,
    fillSlots, setupMusic, startMusic, setMuted, bindMusicButton, chime, store,
    get lang() { return state.lang; },
    get config() { return state.config; },
  };
})();
