# Tara & Aarav · The Royal Season

A self-contained invitation site in a single `index.html`. It needs no build step and no libraries; the only external resource is Google Fonts. Every visual is drawn in SVG, CSS and canvas, and the music is synthesised live with the Web Audio API.

## Editing

All words, dates, colours and links live in the `CONFIG` object at the top of the `<script>` in `index.html`. Change it to reuse the template for another couple. Then update the share-preview `<meta>` tags at the top of the file (WhatsApp cannot run scripts, so those tags are written by hand) and re-export `og-image.png` from `og-image.svg`.

## Personal links

Add `?guest=Name` to the URL, for example `?guest=Sharma%20Family`. The name appears on the letter, on the RSVP card and in the WhatsApp reply.

## Optional media (`assets/`)

| File | Used for | Suggested spec |
|---|---|---|
| `hero-loop.mp4` | Ballroom hero background | 720×1280 portrait, 6–10 s seamless loop, H.264, no audio, under 3 MB |
| `ballroom-loop.mp4` | Behind the dance card | Same as above, under 2.5 MB |
| `carriage-loop.mp4` | Venue scene | 720×800 or 1080×1200, 8–12 s loop, under 3 MB |
| `couple.png` | Chronicle cameo (sepia-toned automatically) | 600×720 transparent PNG, under 300 KB |
| `bride.png`, `groom.png` | Cameo portraits | 600×860 transparent PNG, figure centred, under 300 KB each |

If a file is missing or fails to load, the drawn scene is used instead. To skip the check entirely (and avoid a 404 line in the browser console), set that path to `""` in `CONFIG.media`.

Compress video with:

```bash
ffmpeg -i in.mov -vf "scale=720:-2,fps=30" -c:v libx264 -profile:v main -crf 26 -preset slow -an -movflags +faststart hero-loop.mp4
```
