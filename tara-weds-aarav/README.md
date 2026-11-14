# The Royal Season · Tara & Aarav

A cinematic, scroll-driven wedding invitation by **Aamantran Atelier**: an Indian Regency
romance narrated by an original society columnist, Lady Chandrika.

Live: https://choprakhushee.github.io/Wedding-Invites/tara-weds-aarav/

## Files

```
index.html      page shell, meta / Open Graph tags, pinned CDN scripts
style.css       all styling (palette tokens at the top)
main.js         CONFIG (all content) at the top, then the engine
favicon.svg     crowned T & A monogram
og-image.jpg    1200×630 share image (names rendered over assets/og-bg.jpg)
assets/         optimised WebP + JPG scenes, WebP cutouts, icons, sprites
assets/manifest.json   every asset: file, purpose, exact prompt, Canva link
```

Libraries: GSAP 3.12.5 + ScrollTrigger (cdnjs) and Lenis 1.1.13 (jsDelivr). No build step.

## Run locally

```bash
cd tara-weds-aarav
python3 -m http.server 8000
```

Open http://localhost:8000/ (add `?guest=Sharma%20Family` to personalise).

## Publish on GitHub Pages (free)

1. Push the repository to GitHub.
2. Repository → Settings → Pages → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)`.
3. After about a minute the invite is live at `https://<user>.github.io/<repo>/tara-weds-aarav/`.

## Personalised links

Append `?guest=` with the guest's name (spaces as `%20`):

- `…/tara-weds-aarav/?guest=Sharma%20Family`
- `…/tara-weds-aarav/?guest=Dr.%20Meera%20Iyer`

The opener reads "A letter has arrived for Sharma Family" and the RSVP card is pre-filled.

## Reusing it for a new client

1. **Content**: edit `CONFIG` at the top of `main.js`: `couple` (names, parents, epithets, notes),
   `blessing`, `invitation`, `dateShort`/`dateLong`/`city`, `countdownTarget` (ISO with +05:30),
   `hashtag`, `columnist`, all scene copy under `copy`, the four `story` dispatches, the `events`
   list (id, name, date, time, hours, venue, dress, icon), `mapsUrl`, `venue`, `rsvp` (WhatsApp
   number, message template with `{guest}`, contacts), `colors`, and `storageKey`
   (change it per couple so saved dance reservations don't carry over).
2. **Share tags**: update the title, description and `og:image` URL in `index.html` (crawlers
   can't run JavaScript), and re-render `og-image.jpg` with the new names.
3. **Assets**: regenerate with Canva using `assets/manifest.json`. Reuse each `prompt`, generate
   the style anchor (`palace-sky`) first and pass it as the image reference for the rest. Keep the
   same file names so no code changes. The portraits (`bride`, `groom`, `couple`) and the
   monogram letters are the client-specific ones; scenes and ornaments can usually stay.
4. **Optional**: drop a licensed track at `assets/music.mp3` (otherwise original music is generated
   in the browser), and set `CONFIG.assets.videos.palace` / `.ballroom` to 9:16 MP4 loops if you
   have them.
