/* One colour grade for every photo, then web-ready files.
   Usage (from myra-weds-aryaman/):  node tools/grade.js
   Needs: npm i sharp  (run anywhere; set NODE_PATH if installed elsewhere)

   raw/<scene>.jpg            -> assets/<scene>.webp + .jpg   1080x1920, < 350 KB
   raw/<cutout>.png (alpha)   -> assets/<cutout>.webp          trimmed,   < 150 KB
   raw/og-image.jpg           -> assets/og-image.jpg           1200x630 (names added by tools/og.js)
   Grade: soft warm highlights, gently lifted blacks, pastel-friendly saturation. No grain (added live). */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const RAW = path.join(__dirname, '..', 'assets', 'raw');
const OUT = path.join(__dirname, '..', 'assets');
const SCENES = ['thaal-bg', 'herald-window', 'palace-sky', 'sheesh-mahal', 'durbar-ball', 'bride', 'groom', 'terrace-line',
  'mehendi-hands', 'dressing-room', 'baraat-lane', 'palace-night'];

function grade(img) {
  return img
    .recomb([[1.035, 0.01, 0], [0.005, 1.0, 0.005], [0, 0.01, 0.955]]) // warm highlights, cooler blue channel
    .linear(0.93, 11)                                                   // lift blacks, soften contrast a touch
    .modulate({ saturation: 1.05, brightness: 1.01 });
}

async function under(makeBuf, max, q0) {
  for (let q = q0; q >= 50; q -= 4) { const b = await makeBuf(q); if (b.length <= max) return b; }
  return makeBuf(50);
}

(async () => {
  for (const s of SCENES) {
    const src = ['.jpg', '.png'].map((e) => path.join(RAW, s + e)).find(fs.existsSync);
    if (!src) continue;
    const base = grade(sharp(src).resize(1080, 1920, { fit: 'cover', position: 'attention' }));
    const g = await base.toBuffer();
    const webp = await under((q) => sharp(g).webp({ quality: q, effort: 6 }).toBuffer(), 350000, 80);
    const jpg = await under((q) => sharp(g).jpeg({ quality: q, mozjpeg: true, progressive: true }).toBuffer(), 350000, 78);
    fs.writeFileSync(path.join(OUT, s + '.webp'), webp); fs.writeFileSync(path.join(OUT, s + '.jpg'), jpg);
    console.log(s.padEnd(16), 'webp', (webp.length / 1024).toFixed(0) + 'KB', 'jpg', (jpg.length / 1024).toFixed(0) + 'KB');
  }
  // cutouts: any png in raw that is not a scene
  for (const f of fs.readdirSync(RAW).filter((f) => f.endsWith('.png'))) {
    const s = f.replace('.png', ''); if (SCENES.includes(s)) continue;
    const meta = await sharp(path.join(RAW, f)).metadata(); if (!meta.hasAlpha) { console.log('skip (no alpha)', f); continue; }
    const max = s.startsWith('sprite-') ? 128 : 900;
    const trimmed = await sharp(path.join(RAW, f)).trim({ threshold: 1 }).resize(max, max, { fit: 'inside', withoutEnlargement: true }).toBuffer();
    const g = await grade(sharp(trimmed)).toBuffer();
    const webp = await under((q) => sharp(g).webp({ quality: q, alphaQuality: 90, effort: 6 }).toBuffer(), s.startsWith('sprite-') ? 20000 : 150000, 82);
    fs.writeFileSync(path.join(OUT, s + '.webp'), webp);
    console.log(s.padEnd(16), 'cutout', (webp.length / 1024).toFixed(0) + 'KB');
  }
  const og = path.join(RAW, 'og-image.jpg');
  if (fs.existsSync(og)) { await grade(sharp(og).resize(1200, 630, { fit: 'cover' })).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, 'og-base.jpg')); console.log('og-base ok'); }
})();
