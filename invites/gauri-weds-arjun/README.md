# Gauri & Arjun · Kalyanam at the Temple Town

A scroll-film wedding invitation by **Aamantran Atelier**: a Kerala temple wedding told as one
continuous film. A clock opens it, the names write themselves over Guruvayur's roofs, the
invitation appears on a carved temple doorway with swinging bells, and nine more scenes rise over
each other like layered film cards. This is a portfolio demo; the couple is fictional.

Live (after publishing): `https://choprakhushee.github.io/Wedding-Invites/invites/gauri-weds-arjun/`

## Files

```
index.html        page shell, share-preview meta tags, fonts and pinned libraries
style.css         all styling
main.js           CONFIG (all content) at the top, then the scenes, motion, sound and RSVP logic
favicon.svg       lotus "G & A" monogram
og-image.jpg      1200×630 share preview (Canva background + names rendered in code)
assets/           optimised images used by the page (WebP + JPG fallbacks, transparent cutouts)
assets/raw/       full-size Canva exports, contact sheet and the share-image template
assets/manifest.json   every asset: purpose, exact Canva prompt, Canva link
```

Libraries (no build step): GSAP 3.12.5 + ScrollTrigger from cdnjs, Lenis 1.1.13 from jsDelivr,
Google Fonts (Great Vibes, Cormorant Garamond, EB Garamond, Manjari).

## Open it locally

```bash
cd Wedding-Invites
python3 -m http.server 8000
```

Then open http://localhost:8000/invites/gauri-weds-arjun/ . Opening `index.html` straight from the
file system also works, but a local server is closer to how GitHub Pages serves it.

## Personal guest links

Add `?guest=` to the link. The opener greets the guest by name and the RSVP form is prefilled.

- `…/invites/gauri-weds-arjun/?guest=Nair%20Family`
- `…/invites/gauri-weds-arjun/?guest=Priya%20%26%20Rahul`

(Spaces become `%20`, `&` becomes `%26`.)

## Reusing it for a new client

1. Copy the folder: `invites/gauri-weds-arjun/` → `invites/<bride>-weds-<groom>/`.
2. Edit **CONFIG** at the top of `main.js`:
   - `couple` (names, parents, places), `blessing`, `copy` (every line of text), `hashtag`
   - `muhurtham` (countdown target, with `+05:30`), `venue`, `events` (date/time for guests,
     `start`/`end` for the calendar file, `tint`, `icon`, `maps`)
   - `rsvp` (WhatsApp number in international format without `+`, message with `{guest}`), `contacts`
   - `colors`, `music.src` (leave empty for the generated tanpura and veena loop)
   - `holds` (how long each scene lingers) and `backdrops` (desktop side image per scene)
3. Update the static tags in `index.html` (title, description, `og:` and `twitter:` tags, noscript
   text). Link crawlers like WhatsApp do not run JavaScript, so these cannot come from CONFIG.
4. New artwork: `assets/manifest.json` holds the exact prompt for every image. In Canva, generate the
   style anchor (`temple-sky`) first, then pass it as the image reference for the rest. Keep the file
   names. Cutouts need background removal and a transparent PNG export. Then optimise into `assets/`
   (scenes 1080×1920 WebP + JPG under 350 KB, cutouts WebP under 150 KB, petals 128 px).
5. If you regenerate `clock-bg`, `temple-doorway-bg` or `nilavilakku`, re-measure the points in
   `CONFIG.layout` (clock pivot and numeral radius, ivory panel edges, lamp flame positions).
6. Re-render the share image from `assets/raw/og-template.html` at 1200×630 and save as `og-image.jpg`.

Any missing image falls back to a drawn SVG in the palette, so a half-finished asset set still
looks intentional. Video loops are supported: set `CONFIG.assets.scenes[name].video` to an MP4 path.

## Publish free on GitHub Pages

The repository already publishes from its main branch. Merge this branch into `main`, then wait about
a minute. To publish a fresh copy elsewhere: push the repo to GitHub, open Settings → Pages, choose
"Deploy from a branch", pick `main` and `/ (root)`, and save.
