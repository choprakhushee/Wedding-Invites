# Decorative elements

Drop a transparent PNG with one of these exact names into this folder and the site
uses it in place of the built-in Palace Parlour drawing. Delete the file to go back
to the built-in one. You don't need to change any code.

| File name | What it is | Size to export from Canva |
|---|---|---|
| `doors.jpg` | Both entrance doors in one picture, side by side (each door shows its half) | 900 × 1600 px |
| `backdrop-couple.jpg` | Painted palace scene behind the couple's names | 900 × 1600 px |
| `room-haldi.jpg`, `room-mehendi.jpg`, `room-sangeet.jpg`, `room-wedding.jpg`, `room-reception.jpg` | Painted scene behind each event's card (the file name for each event is set by `backdrop` in `config.js`) | 900 × 1600 px |
| `door-left.png` | Left door of the entrance gate (use instead of `doors.jpg`) | 480 × 2050 px |
| `door-right.png` | Right door (hinge on the right) | 480 × 2050 px |
| `arch.png` | The whole gate frame around the doors | 1440 × 2560 px, see below |
| `corner-floral.png` | Floral corner, drawn for the **top-left** corner (it's flipped for the other three) | 400 × 400 px |
| `border-top.png` | Running border along the top of sections | 2160 × 200 px |
| `divider.png` | Small ornament between headings and text | 600 × 120 px |
| `petal-1.png`, `petal-2.png`, `petal-3.png` | Falling petals as the doors open | 120 × 120 px each |

**Doors** fill the doorway completely. The top of each door is trimmed to the
arch shape automatically, so design them as plain tall rectangles.

**Arch** must leave the doorway transparent. On the 1440 × 2560 canvas the doorway
is the area from **336 px to 1104 px across** and **744 px to 2384 px down**, with a
scalloped (cusped) top that peaks around 824 px down. The doors are drawn inside
this area, behind your arch.

The painted scenes are JPG (no transparency needed). Keep each under about 250 KB:
they only load as the guest scrolls near them, and the pattern shows until they do.

Tips
- Export the decorative pieces as PNG with a transparent background ("Transparent background" in Canva Pro).
- Keep each file under about 300 KB. A free tool such as squoosh.app can shrink them.
- Want to use a different file name or a .webp file? Change the matching line under
  `elements` in `config.js`.
