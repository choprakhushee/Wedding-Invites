# Beach Wedding

A sample invitation template by Aamantran Atelier. It's a single phone-width page, and the sky behind it moves through one wedding day as you scroll: morning, afternoon, golden hour, sunset, dusk and a starry night.

Open `index.html` through any static host, such as GitHub Pages. The folder is self-contained: fonts, the share-link library and all the art are local, and nothing loads from a CDN.

## Personalise

Tap **✎ Personalise** to edit everything live:

- **Colour story:** Coral & Seafoam (the default), Goa Sunset or Santorini White
- **Text:** names, date and countdown, invitation wording, events, venue, story, RSVP, hashtag, things to know and the closing line
- **Events:** add, remove or reorder them, and pick an illustration and arch for each
- **Saving:** changes save in this browser's localStorage. Photos are resized to 900 px and stored on their own, so they stay on this device.
- **Share with guests:** copies a `#g=` link that opens without the editor and includes the chosen colour story
- **Copy edit link:** copies a `#e=` link that opens the invite ready to edit on another device. Keep this one private.

## Files

| File | What it holds |
|---|---|
| `index.html` | Page structure |
| `beach.css` | Colour stories (CSS variables), layout, motion and reduced-motion rules |
| `art.js` | Watercolour SVG illustrations, built from the theme variables |
| `beach.js` | Content, scroll-driven sky, reveals, editor, sharing and countdown |
| `sound.js` | Optional ambient sound (waves and plucked guitar), generated in the browser |
| `previews/` | Screenshots of the three colour stories |
