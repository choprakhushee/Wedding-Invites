# Ira & Neel: Secret Garden invite

A floral wedding invitation website by Aamantran Atelier. Everything is in `index.html`:
the art is drawn in SVG, the petals use a canvas, and the music is generated in the browser.
The only thing it loads from outside is Google Fonts.

## Open it locally

```
cd Wedding-Invites
python3 -m http.server 8000
```

Then open http://localhost:8000/invites/ira-weds-neel/ (or add `?guest=Sharma%20Family`).
Opening the file directly also works, but the photo slots only load when served.

## Make it for another couple

Edit the `CONFIG` object at the top of the `<script>` in `index.html`: names, parents, dates,
events, story, colours, links and image paths. Then update the share tags at the top of
`<head>` (between `SHARE PREVIEW` and `END SHARE PREVIEW`), because WhatsApp reads those
without running the page.

## Add real photos or AI illustrations

Put files in `assets/` with these names. A file that is there replaces the drawing; a missing
file falls back to the built-in illustration, so you can add them one at a time.

| File | Where it shows | Suggested size |
| --- | --- | --- |
| `assets/couple.png` | Hero arch, and the small round sign-off wreath | 1000 × 1400 px, transparent PNG, couple standing, feet at the bottom edge |
| `assets/bride.png` | Bride's oval frame | 600 × 800 px (3:4), face in the upper third |
| `assets/groom.png` | Groom's oval frame | 600 × 800 px (3:4), face in the upper third |
| `assets/mehendi.png`, `haldi.png`, `sangeet.png`, `wedding.png`, `reception.png` | Round medallion on each event card | 600 × 600 px, subject centred |

Tips:
- For `couple.png`, use a transparent background so the floral arch and sky show around the
  couple. Remove the background (Canva, Photoshop or remove.bg), leave a little space above
  the heads, and crop close at the feet; the image is aligned to the bottom of the arch.
- Portraits and event images are cropped to an oval or circle, so a normal photo is fine.
  Keep the face away from the edges.
- Export PNG or JPG under about 400 KB each so the page stays fast on mobile data.
  To use a `.jpg`, change the path in `CONFIG` too.
- To turn a slot off, set its path to `""` in `CONFIG`.

When `assets/` is empty, the browser console shows a "404 (File not found)" line for each
missing image. That is the page checking for photos and is harmless.

## Share image

`og-image.png` (1200 × 630) is the WhatsApp/Instagram preview; `og-image.svg` is its source.
