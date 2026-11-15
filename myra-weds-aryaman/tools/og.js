/* Renders assets/og-image.jpg (1200x630) and the favicons with Playwright.
   Usage, from myra-weds-aryaman/ with a local server running on :8765:
     python3 -m http.server 8765 &   node tools/og.js
   Uses assets/og-base.jpg if present (from the og-image Canva scene), else palace-sky. */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const A = path.join(__dirname, '..', 'assets');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  const bg = fs.existsSync(path.join(A, 'og-base.jpg')) ? '../assets/og-base.jpg' : '../assets/palace-sky.jpg';
  await p.goto('http://localhost:8765/tools/og.html?bg=' + encodeURIComponent(bg), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(A, 'og-image.jpg'), type: 'jpeg', quality: 86 });
  // favicon png for apple-touch
  const svg = fs.readFileSync(path.join(A, 'favicon.svg'), 'utf8');
  const f = await b.newPage({ viewport: { width: 180, height: 180 } });
  await f.setContent(`<body style="margin:0">${svg.replace('<svg', '<svg width="180" height="180"')}</body>`);
  await f.screenshot({ path: path.join(A, 'favicon-180.png'), omitBackground: false });
  await b.close();
  console.log('og-image.jpg and favicon-180.png written');
})();
