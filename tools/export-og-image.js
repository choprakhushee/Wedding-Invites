// Exports the WhatsApp / social share image for a floral invite.
// It opens <invite>/index.html?og, which draws the 1200×630 card from the same CONFIG and artwork,
// then saves og-image.png and a standalone og-image.svg next to the invite.
//
//   python3 -m http.server 8765        (from the repository root, in another terminal)
//   node tools/export-og-image.js invites/ira-weds-neel
//
// Needs Playwright with Chromium (npm i playwright && npx playwright install chromium).
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const dir = process.argv[2] || "invites/ira-weds-neel";
const base = process.env.BASE || "http://localhost:8765/";

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })).newPage();
  await page.goto(base + dir.replace(/\/?$/, "/") + "index.html?og", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  await page.locator("#og").screenshot({ path: path.join(dir, "og-image.png") });
  const svg = await page.evaluate(() => {
    const og = document.getElementById("og").cloneNode(true);
    const defs = document.getElementById("defs").cloneNode(true);
    og.insertBefore(defs, og.firstChild);
    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = "@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@0;1&family=Montserrat:wght@400&family=Parisienne&display=swap');";
    og.insertBefore(style, og.firstChild);
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(og);
  });
  fs.writeFileSync(path.join(dir, "og-image.svg"), svg);
  await browser.close();
  console.log("Saved", path.join(dir, "og-image.png"), "and og-image.svg");
})();
