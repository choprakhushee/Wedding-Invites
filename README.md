# Wedding Invites

Animated wedding invite websites for Indian weddings. Each design is made in Canva
and split into layers, which the website animates. Each couple's text comes from a
Google Sheet they can edit themselves.

Demo: https://choprakhushee.github.io/Wedding-Invites/invites/prerna-weds-sumit/
Floral demo: https://choprakhushee.github.io/Wedding-Invites/invites/ira-weds-neel/

## How it's organised

```
templates/lotus-arch/      one design, shared by every couple who picks it
  layers/                  the Canva layers (background, arch, lanterns, florals, Om)
  page.html                the page layout
  invite.css / invite.js   styling and animation
  sample-data.json         sample details for a new couple
  sheet-template.csv       import this into Google Sheets for a new couple
invites/<couple>/          one folder per couple: index.html + data.json
tools/new-invite.py        creates a couple's folder
```

## Adding a new couple (about 10 minutes)

1. **Create their page**
   ```
   python3 tools/new-invite.py aisha-weds-rahul
   ```
   This creates `invites/aisha-weds-rahul/` and prints their link.

2. **Make their Google Sheet**
   - In Google Sheets: File → Import → Upload `templates/lotus-arch/sheet-template.csv`.
   - Fill in column B with the couple's details. Leave an event's name blank to hide it.
   - File → Share → **Publish to web** → choose the sheet, **Comma-separated values (.csv)** → Publish.
     Copy the link it gives you.
   - Share the sheet with the couple (Editor access) so they can make changes themselves.

3. **Connect the sheet**: paste that link into `"sheet_csv_url"` in
   `invites/aisha-weds-rahul/data.json`. Also update the names, date and `page_title` in
   `data.json`, then run the script from step 1 again. That updates the title shown when
   the link is shared on WhatsApp (WhatsApp can't read the sheet).

4. **Publish**: commit and push. The link goes live in about a minute.

After that, the couple edits the sheet and the website updates on its own. Google takes up to
about 5 minutes to republish after an edit.

## What the couple gets

- The website link, to share on WhatsApp.
- Their Google Sheet, to edit the website.
- A Canva template link for WhatsApp images and print versions: in Canva, Share → Template link.
- Optional RSVPs: put a Google Form link in `rsvp_form_url`, or a WhatsApp number in `rsvp_whatsapp`.
- Optional music: an MP3 link in `music_url`. It starts when the guest taps to open the invite.
  Use only music you have the rights to.

## Adding a new design from Canva

1. Make the design in Canva with each decorative part as its own element.
2. Make one copy per layer, delete everything except that layer and all text, and export each as a
   transparent PNG at the same page size. Because every layer is full-page size, the layers line
   up exactly when stacked.
3. Copy `templates/lotus-arch/` to a new folder, swap in the layers, and adjust the
   text positions and animations in `page.html` / `invite.css`.

Claude can do steps 2–3 with the Canva connector.

## Secret Garden (floral, self-contained)

`invites/ira-weds-neel/` is a single `index.html` with no image, audio or library files: every flower,
the bride and groom, the hills and the music are drawn or generated in the browser.

- **Edit the words, dates and links** in the `CONFIG` object at the top of the `<script>` in `index.html`.
- **Personalise a link** with `?guest=`: `.../ira-weds-neel/?guest=Sharma%20Family`. The name shows on the
  doors and is written into the WhatsApp RSVP message.
- **Real photos or illustrations (optional)**: drop files into `assets/` with these names and they replace the drawings.
  If a file is missing, the drawing stays.

  | File | Shown in | Best size |
  |---|---|---|
  | `couple.png` | Under the hero arch and in the sign-off wreath | 1000 × 1500, transparent PNG of the couple, full length |
  | `bride.png`, `groom.png` | The two oval portraits | 800 × 1100 portrait, head and shoulders in the upper half |
  | `mehendi.png`, `haldi.png`, `sangeet.png`, `wedding.png`, `reception.png` | Inside each event's arch | 900 × 1000 |

  For a photo (not a cut-out) of the couple, set `images.couple.fit` to `"cover"` in `CONFIG`.
- **Share preview**: the `og:` tags in `<head>` are plain HTML (WhatsApp can't run JavaScript), so update the title,
  description and image URL by hand for a new couple. To redraw the share image from `CONFIG`:
  ```
  python3 -m http.server 8765
  node tools/export-og-image.js invites/ira-weds-neel
  ```
