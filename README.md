# Wedding Invites

Animated wedding invite websites for Indian weddings. Each design is made in Canva
and split into layers, which the website animates. Each couple's text comes from a
Google Sheet they can edit themselves.

Demo: https://choprakhushee.github.io/wedding-invites/invites/prerna-weds-sumit/

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
