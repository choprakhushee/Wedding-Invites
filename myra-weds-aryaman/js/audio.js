/* Sound for The Rishta of the Season.
   An original chamber-string waltz in a Raag Yaman flavour (tonic D, with the
   sharp fourth G#), synthesised live with the Web Audio API: bowed violin, viola
   and cello, a shehnai-like reed lead with meend glides, santoor plucks and a
   generated reverb. Plus quiet UI sounds. Nothing here imitates an existing song. */
(function () {
  'use strict';
  const A = {};
  let ctx = null, master = null, musicBus = null, sfxBus = null, verb = null, verbSend = null;
  let musicOn = false, enabled = false, schedTimer = null, nextBar = 0, barIndex = 0, musicEl = null;
  const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);

  function makeImpulse(seconds, decay) {
    const rate = ctx.sampleRate, len = Math.floor(rate * seconds);
    const buf = ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const t = i / len;
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * (i < rate * 0.012 ? i / (rate * 0.012) : 1);
      }
    }
    return buf;
  }
  let noiseBuf = null;
  function noise() {
    if (!noiseBuf) {
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; return s;
  }

  function init() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 1;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.25;
    master.connect(comp); comp.connect(ctx.destination);
    musicBus = ctx.createGain(); musicBus.gain.value = 0; musicBus.connect(master);
    sfxBus = ctx.createGain(); sfxBus.gain.value = 0.55; sfxBus.connect(master);
    verb = ctx.createConvolver(); verb.buffer = makeImpulse(3.2, 2.6);
    const verbOut = ctx.createGain(); verbOut.gain.value = 0.42;
    verb.connect(verbOut); verbOut.connect(master);
    verbSend = ctx.createGain(); verbSend.gain.value = 1; verbSend.connect(verb);
    return ctx;
  }

  function out(node, bus, pan, wet) {
    const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    let last = node;
    if (p) { p.pan.value = pan || 0; node.connect(p); last = p; }
    last.connect(bus);
    const w = ctx.createGain(); w.gain.value = wet == null ? 0.35 : wet;
    last.connect(w); w.connect(verbSend);
  }

  /* bowed string: two detuned saws, delayed vibrato, soft attack, warm low-pass */
  function bowed(m, t, dur, gain, pan, bright) {
    const f = midi(m);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t);
    const att = Math.min(0.32, dur * 0.35);
    g.gain.linearRampToValueAtTime(gain, t + att);
    g.gain.setValueAtTime(gain * 0.92, t + Math.max(att, dur - 0.25));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.35);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(bright * 0.6, t); lp.frequency.linearRampToValueAtTime(bright, t + att); lp.Q.value = 0.7;
    const body = ctx.createBiquadFilter(); body.type = 'peaking'; body.frequency.value = 900; body.gain.value = 3; body.Q.value = 1.2;
    const vib = ctx.createOscillator(); vib.frequency.value = 5.2 + Math.random() * 0.6;
    const vg = ctx.createGain(); vg.gain.setValueAtTime(0, t); vg.gain.linearRampToValueAtTime(f * 0.0045, t + 0.45);
    vib.connect(vg);
    [-6, 5].forEach((cents) => {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = cents;
      vg.connect(o.frequency); o.connect(lp); o.start(t); o.stop(t + dur + 0.4);
    });
    lp.connect(body); body.connect(g); out(g, musicBus, pan, 0.4);
    vib.start(t); vib.stop(t + dur + 0.4);
  }

  /* reed lead (shehnai-like): nasal formants, meend glide from the previous pitch */
  function reed(m, t, dur, gain, fromM) {
    const f = midi(m);
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const o2 = ctx.createOscillator(); o2.type = 'square';
    if (fromM != null && fromM !== m) {
      o.frequency.setValueAtTime(midi(fromM), t); o.frequency.exponentialRampToValueAtTime(f, t + 0.14);
      o2.frequency.setValueAtTime(midi(fromM), t); o2.frequency.exponentialRampToValueAtTime(f, t + 0.14);
    } else { o.frequency.value = f; o2.frequency.value = f; }
    const vib = ctx.createOscillator(); vib.frequency.value = 6.1;
    const vg = ctx.createGain(); vg.gain.setValueAtTime(0, t); vg.gain.linearRampToValueAtTime(f * 0.006, t + dur * 0.6);
    vib.connect(vg); vg.connect(o.frequency); vg.connect(o2.frequency);
    const mix2 = ctx.createGain(); mix2.gain.value = 0.25; o2.connect(mix2);
    const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 1150; f1.Q.value = 2.2;
    const f2 = ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 2600; f2.Q.value = 3;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3800;
    const sum = ctx.createGain(); sum.gain.value = 1;
    o.connect(f1); o.connect(f2); mix2.connect(f1); f1.connect(sum); const f2g = ctx.createGain(); f2g.gain.value = 0.5; f2.connect(f2g); f2g.connect(sum);
    sum.connect(lp);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.07); g.gain.setValueAtTime(gain * 0.9, t + Math.max(0.08, dur - 0.1));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.18);
    lp.connect(g); out(g, musicBus, 0.1, 0.45);
    [o, o2, vib].forEach((x) => { x.start(t); x.stop(t + dur + 0.25); });
  }

  /* santoor: hammered pair of slightly detuned strings, bright decay */
  function santoor(m, t, gain, pan) {
    const f = midi(m);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 180;
    [[1, 0, 1], [1, 7, 0.8], [2, 3, 0.35], [3, -4, 0.12], [4.02, 0, 0.06]].forEach(([mul, cents, a]) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * mul; o.detune.value = cents;
      const og = ctx.createGain(); og.gain.setValueAtTime(a, t); og.gain.exponentialRampToValueAtTime(0.0001, t + 1.6 / mul + 0.1);
      o.connect(og); og.connect(hp); o.start(t); o.stop(t + 1.9);
    });
    hp.connect(g); out(g, musicBus, pan, 0.5);
  }

  /* --- the score: 3/4, about 80 bpm, tonic D, Yaman scale D E F# G# A B C# --- */
  const BEAT = 60 / 80;
  const PHRASE_A = [
    [[61, 1], [64, 1], [66, 1]], [[68, 2], [66, 1]], [[64, 1.5], [66, .5], [64, 1]], [[62, 3]],
    [[71, 1], [73, 1], [74, 1]], [[76, 2], [74, 1]], [[73, 1], [71, 1], [69, 1]], [[68, 2], [69, 1]]
  ];
  const PHRASE_B = [
    [[74, 1.5], [73, .5], [71, 1]], [[69, 2], [68, 1]], [[66, 1], [68, 1], [71, 1]], [[69, 3]],
    [[66, 1], [68, 1], [69, 1]], [[71, 1.5], [69, .5], [68, 1]], [[66, 1], [64, 1], [61, 1]], [[62, 3]]
  ];
  // chord per bar: [cello root, viola/violin voicing]
  const D = [38, [62, 66, 69]], E = [40, [64, 68, 71]], A_ = [45, [61, 64, 69]], Bm = [47, [62, 66, 71]], Fm = [42, [61, 66, 69]];
  const HARM_A = [D, E, A_, D, Bm, E, A_, E];
  const HARM_B = [Bm, E, E, A_, D, E, Fm, D];
  // four phrases cycle: A violin, B shehnai, A shehnai an octave lower with violin echo, B violin
  const PLAN = [
    { mel: PHRASE_A, harm: HARM_A, lead: 'violin', oct: 12 },
    { mel: PHRASE_B, harm: HARM_B, lead: 'reed', oct: 0 },
    { mel: PHRASE_A, harm: HARM_A, lead: 'reed', oct: 0 },
    { mel: PHRASE_B, harm: HARM_B, lead: 'violin', oct: 12 }
  ];
  let lastLead = null;

  function scheduleBar(t, idx) {
    const phrase = PLAN[Math.floor(idx / 8) % PLAN.length];
    const b = idx % 8;
    const [root, voice] = phrase.harm[b];
    const barDur = BEAT * 3;
    // cello: sustained root, with a soft pickup to the fifth on beat three every other bar
    bowed(root, t, barDur * 0.98, 0.07, -0.25, 900);
    if (b % 2 === 1) bowed(root + 7, t + BEAT * 2, BEAT * 0.9, 0.035, -0.25, 900);
    // viola + second violin: the waltz "lift" on beats two and three
    voice.forEach((m, i) => {
      bowed(m - 12 + (i === 2 ? 12 : 0), t + BEAT, BEAT * 0.85, 0.022, 0.25 - i * 0.12, 1700);
      bowed(m - 12 + (i === 2 ? 12 : 0), t + BEAT * 2, BEAT * 0.85, 0.02, 0.25 - i * 0.12, 1700);
    });
    // santoor: gentle rising arpeggio across the bar
    const arp = [voice[0] + 12, voice[1] + 12, voice[2] + 12, voice[1] + 24];
    arp.forEach((m, i) => santoor(m, t + i * BEAT * 0.75 + 0.02, 0.03 - i * 0.004, i % 2 ? 0.4 : -0.35));
    // melody
    let bt = t;
    phrase.mel[b].forEach(([m, beats]) => {
      const mm = m + (phrase.lead === 'violin' ? phrase.oct - 12 : 0);
      const dur = beats * BEAT;
      if (phrase.lead === 'violin') bowed(mm + 12, bt, dur * 0.97, 0.06, 0.05, 2600);
      else { reed(mm + 12, bt, dur * 0.95, 0.05, lastLead); }
      lastLead = mm + 12;
      bt += dur;
    });
  }

  function scheduler() {
    while (nextBar < ctx.currentTime + 0.6) {
      scheduleBar(nextBar, barIndex++);
      nextBar += BEAT * 3;
    }
  }

  A.unlock = function () { init(); if (ctx && ctx.state === 'suspended') ctx.resume(); enabled = true; };

  A.startMusic = function (fileUrl) {
    A.unlock(); if (!ctx || musicOn) return;
    musicOn = true;
    const now = ctx.currentTime;
    musicBus.gain.cancelScheduledValues(now);
    musicBus.gain.setValueAtTime(musicBus.gain.value, now);
    musicBus.gain.linearRampToValueAtTime(0.25 * 3.2, now + 3);
    if (fileUrl && musicEl !== false) {
      if (!musicEl) {
        musicEl = new Audio(fileUrl); musicEl.loop = true; musicEl.preload = 'auto';
        try {
          const src = ctx.createMediaElementSource(musicEl);
          const g = ctx.createGain(); g.gain.value = 0.3; src.connect(g); g.connect(musicBus);
        } catch (e) { /* ignore */ }
        musicEl.addEventListener('error', () => { musicEl = false; startSynth(); }, { once: true });
      }
      if (musicEl) { musicEl.play().catch(() => { musicEl = false; startSynth(); }); return; }
    }
    startSynth();
  };
  function startSynth() {
    if (schedTimer) return;
    nextBar = ctx.currentTime + 0.1;
    scheduler();
    schedTimer = setInterval(scheduler, 120);
  }
  A.stopMusic = function () {
    if (!ctx || !musicOn) return;
    musicOn = false;
    const now = ctx.currentTime;
    musicBus.gain.cancelScheduledValues(now);
    musicBus.gain.setValueAtTime(musicBus.gain.value, now);
    musicBus.gain.linearRampToValueAtTime(0, now + 0.8);
    setTimeout(() => {
      if (musicOn) return;
      if (schedTimer) { clearInterval(schedTimer); schedTimer = null; }
      if (musicEl) musicEl.pause();
    }, 900);
  };
  A.isOn = () => musicOn;
  A.suspend = () => { if (ctx && ctx.state === 'running') ctx.suspend(); if (musicEl) musicEl.pause(); };
  A.resume = () => { if (ctx && musicOn) { ctx.resume(); if (musicEl) musicEl.play().catch(() => {}); } };

  /* ---------- UI sounds (only when the music is on) ---------- */
  function ok() { return ctx && enabled && musicOn; }
  function nburst(t, dur, type, freq, q, gain, sweepTo) {
    const n = noise(); const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + Math.min(0.02, dur / 4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    n.connect(f); f.connect(g); out(g, sfxBus, 0, 0.25); n.start(t, Math.random()); n.stop(t + dur + 0.05);
  }
  function tone(t, f0, f1, dur, gain, type) {
    const o = ctx.createOscillator(); o.type = type || 'sine'; o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); out(g, sfxBus, 0, 0.2); o.start(t); o.stop(t + dur + 0.05);
  }
  const S = A.sfx = {};
  S.velvet = () => { if (!ok()) return; const t = ctx.currentTime; tone(t, 120, 70, 0.25, 0.25); nburst(t, 0.35, 'lowpass', 600, 0.5, 0.18); };
  S.thread = () => { if (!ok()) return; const t = ctx.currentTime; nburst(t, 0.5, 'bandpass', 3000, 2, 0.06, 6000); };
  S.crack = () => { if (!ok()) return; const t = ctx.currentTime; nburst(t, 0.06, 'highpass', 2500, 0.7, 0.5); nburst(t + 0.03, 0.12, 'bandpass', 1200, 1.5, 0.3); tone(t, 900, 300, 0.08, 0.1, 'triangle'); };
  S.unroll = () => { if (!ok()) return; const t = ctx.currentTime; nburst(t, 0.9, 'bandpass', 900, 0.8, 0.12, 3200); nburst(t + 0.75, 0.25, 'lowpass', 400, 0.7, 0.18); };
  S.rustle = () => { if (!ok()) return; const t = ctx.currentTime; for (let i = 0; i < 3; i++) nburst(t + i * 0.07, 0.16, 'bandpass', 2200 + i * 600, 1, 0.07); };
  S.peg = () => { if (!ok()) return; const t = ctx.currentTime; tone(t, 1800, 900, 0.05, 0.12, 'triangle'); nburst(t, 0.04, 'highpass', 3000, 1, 0.1); };
  S.tick = (v) => { if (!ok()) return; const t = ctx.currentTime; tone(t, 2400 + (v || 0) * 200, 1500, 0.035, 0.06, 'square'); };
  S.swish = () => { if (!ok()) return; const t = ctx.currentTime; nburst(t, 0.55, 'bandpass', 600, 0.6, 0.16, 2400); };
  S.wings = () => { if (!ok()) return; const t = ctx.currentTime; for (let i = 0; i < 6; i++) nburst(t + i * 0.11, 0.09, 'lowpass', 900, 0.8, 0.12); };
  S.chime = () => { if (!ok()) return; const t = ctx.currentTime; [74, 78, 81, 85, 86, 90].forEach((m, i) => santoor(m, t + i * 0.07, 0.05, (i % 2 ? 0.3 : -0.3))); };
  S.shimmer = () => { if (!ok()) return; const t = ctx.currentTime; [86, 85, 83, 81, 80, 78, 76, 74, 73, 74].forEach((m, i) => santoor(m, t + i * 0.055, 0.035, Math.sin(i) * 0.5)); };
  S.shehnai = () => { if (!ok()) return; const t = ctx.currentTime; let prev = null; [[69, .35], [71, .25], [73, .3], [74, .9], [73, .25], [71, .25], [69, .8]].reduce((tt, [m, d]) => { reed(m, tt, d, 0.07, prev); prev = m; return tt + d; }, t); };
  S.fanfare = () => { if (!ok()) return; const t = ctx.currentTime; S.dha(t); S.dha(t + 0.18); S.ta(t + 0.34); };

  /* dhol: bass "dha" (pitched skin drop) and treble "ta" (stick slap) */
  S.dha = function (when) {
    if (!ok()) return; const t = when || ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.32);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
    const sat = ctx.createWaveShaper(); const curve = new Float32Array(256); for (let i = 0; i < 256; i++) { const x = i / 128 - 1; curve[i] = Math.tanh(x * 2.2); } sat.curve = curve;
    o.connect(sat); sat.connect(g); out(g, sfxBus, -0.1, 0.18); o.start(t); o.stop(t + 0.65);
    nburst(t, 0.05, 'lowpass', 1500, 0.7, 0.35);
  };
  S.ta = function (when) {
    if (!ok()) return; const t = when || ctx.currentTime;
    nburst(t, 0.09, 'bandpass', 3200, 1.2, 0.55);
    nburst(t, 0.03, 'highpass', 5000, 0.7, 0.3);
    tone(t, 520, 380, 0.12, 0.18, 'triangle');
  };
  // one bar of a lively chaal; onHit(kind, delayMs) lets the scene move in rhythm
  A.dholGroove = function (onHit) {
    A.unlock(); if (!ctx) return;
    const wasOn = musicOn; if (!wasOn) { enabled = true; }
    const t0 = ctx.currentTime + 0.05, st = 60 / 104 / 2;
    const pat = ['D', '', 'T', 'D', '', 'T', 'D', 'T', 'D', '', 'T', 'D', '', 'T', 'D', 'T'];
    pat.forEach((k, i) => {
      if (!k) return;
      const at = t0 + i * st;
      // the dhol always plays when tapped, even with the music muted? No: honour mute.
      if (k === 'D') S.dha(at); else S.ta(at);
      if (onHit) setTimeout(() => onHit(k), (at - ctx.currentTime) * 1000);
    });
    return pat.length * st * 1000;
  };

  window.Sound = A;
})();
