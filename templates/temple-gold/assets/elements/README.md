# Temple Gold elements

Every picture on the invitation comes from this folder. To swap one, save your
new picture here with **exactly the same file name** (`.webp` or `.png`) and it
is used automatically. No code changes are needed. Delete a file and a simple
built-in drawing is used instead.

Use transparent PNG or WebP, the same shape as the one you replace (or close to
it). Keep each file under about 150 KB so the invitation stays fast on 4G
(squoosh.app makes WebP files small).

The current set is in a soft hand-painted (gouache) style, made with Canva's
image generator and cut out with Canva's background remover.

**Entry (lamp, bell and doors)**

| File | What it is | Notes |
|---|---|---|
| `diya.webp` | Small brass lamp on the threshold | The flame is drawn on the wick at 52% across, 56% down |
| `bell.webp` | Temple bell on its chain | Hangs from the top centre and swings |
| `temple-frame.webp` | Stone doorway, with the door area cut out (see-through) | 2 : 3 shape; the doors fill 16–84% across, 9–91% down |
| `temple-door-left.webp`, `temple-door-right.webp` | The two door leaves | They swing open on their outer edges |
| `thoranam.webp` | Mango-leaf and marigold garland | Also runs along the top of the courtyard |
| `banana-plant-left.webp`, `banana-plant-right.webp` | Whole banana plant, roots at the bottom | Beside the doors and behind the floor lamps; it bends from its base in the wind |

**Courtyard (behind the doors)**

| File | What it is | Notes |
|---|---|---|
| `temple-view.webp` | The temple tank and gopuram behind everything | A normal picture (not see-through), landscape. Birds, clouds, sun rays and falling petals are added over it by the page |
| `pillar-left.webp`, `pillar-right.webp` | Carved stone pillars at the edges | Very tall and thin (capital at the top), cropped from the bottom |
| `jasmine-string.webp` | One hanging jasmine and marigold strand | Hangs from the top centre and sways |
| `kuthuvilakku.webp` | Tall standing brass lamp | Five flames are drawn on its wicks, about 27% down |
| `urli.webp` | Brass bowl of floating flowers | |
| `kalasam.webp` | Brass pot with mango leaves and coconut | |
| `lotus.webp` | Pink lotus on its leaf | |
| `kolam.webp` | Round kolam seen from above | Laid on the floor in perspective; it unfolds from the centre |

To use a different file name or a picture just for one couple, add it to
`"elements"` in that couple's `wedding.json`, e.g.
`"elements": { "temple-view": "photos/our-temple.webp" }` (relative to the
couple's folder).
