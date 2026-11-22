/* Ambient sound, generated in the browser (no audio files, nothing to license):
   rolling waves from filtered noise, and a slow plucked-guitar arpeggio. */
(function () {
  'use strict';
  var ctx, master, timer, nextAt = 0, step = 0;

  function noiseBuffer(c) {
    var len = c.sampleRate * 4, buf = c.createBuffer(2, len, c.sampleRate);
    for (var ch = 0; ch < 2; ch++) {
      var d = buf.getChannelData(ch), last = 0;
      for (var i = 0; i < len; i++) { var w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    }
    return buf;
  }
  /* Karplus-Strong pluck, rendered once per note */
  var cache = {};
  function pluck(c, freq) {
    if (cache[freq]) return cache[freq];
    var sr = c.sampleRate, len = Math.floor(sr * 2.6), buf = c.createBuffer(1, len, sr), d = buf.getChannelData(0);
    var p = Math.round(sr / freq), ring = new Float32Array(p);
    for (var i = 0; i < p; i++) ring[i] = Math.random() * 2 - 1;
    var idx = 0;
    for (var j = 0; j < len; j++) {
      var nx = (idx + 1) % p, v = (ring[idx] + ring[nx]) * 0.4985;
      d[j] = ring[idx]; ring[idx] = v; idx = nx;
    }
    cache[freq] = buf; return buf;
  }
  var hz = function (m) { return 440 * Math.pow(2, (m - 69) / 12); };
  /* Dmaj7 · Bm7 · Gmaj7 · A6, gently arpeggiated */
  var chords = [[50, 57, 61, 66, 69, 73], [47, 54, 57, 62, 66, 69], [43, 50, 54, 59, 62, 66], [45, 52, 57, 61, 64, 66]];
  var pattern = [0, 2, 3, 4, 5, 4, 3, 2];

  function schedule() {
    while (nextAt < ctx.currentTime + 0.6) {
      var chord = chords[Math.floor(step / 8) % chords.length], n = chord[pattern[step % 8]];
      var src = ctx.createBufferSource(), g = ctx.createGain();
      src.buffer = pluck(ctx, hz(n)); g.gain.value = step % 8 === 0 ? 0.22 : 0.14;
      src.connect(g); g.connect(master.guitar); src.start(nextAt);
      step++; nextAt += step % 8 === 0 ? 0.62 : 0.42;
    }
  }

  function start() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    if (!ctx) {
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
      // waves: noise -> lowpass whose cutoff and level swell every ~9 s
      var src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx); src.loop = true;
      var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 600;
      var swell = ctx.createGain(); swell.gain.value = 0.35;
      var lfo = ctx.createOscillator(); lfo.frequency.value = 0.11;
      var lfoAmt = ctx.createGain(); lfoAmt.gain.value = 0.3; lfo.connect(lfoAmt); lfoAmt.connect(swell.gain);
      var lfoF = ctx.createGain(); lfoF.gain.value = 420; lfo.connect(lfoF); lfoF.connect(lp.frequency);
      src.connect(lp); lp.connect(swell); swell.connect(master); src.start(); lfo.start();
      // guitar bus with a soft echo
      master.guitar = ctx.createGain(); master.guitar.gain.value = 0.55;
      var delay = ctx.createDelay(); delay.delayTime.value = 0.36;
      var fb = ctx.createGain(); fb.gain.value = 0.32;
      var tone = ctx.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 2600;
      master.guitar.connect(tone); tone.connect(master); tone.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(master);
    }
    ctx.resume();
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setTargetAtTime(0.5, ctx.currentTime, 0.8);
    nextAt = ctx.currentTime + 0.3;
    clearInterval(timer); timer = setInterval(schedule, 200); schedule();
    return true;
  }
  function stop() {
    if (!ctx) return;
    clearInterval(timer);
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
    setTimeout(function () { if (ctx && master.gain.value < 0.01) ctx.suspend(); }, 2000);
  }
  window.BeachSound = { start: start, stop: stop };
})();
