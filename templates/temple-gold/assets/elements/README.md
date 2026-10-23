# Temple Gold elements

Drop a file here with one of these exact names and the invitation uses it
instead of the built-in drawing. Leave a name out and the built-in drawing is
used. No code changes needed.

Export from Canva as a **transparent PNG** at the size shown (or larger, same
shape). Each image is fitted inside its spot without stretching.

| File name                | What it is                                   | Shape (width × height) |
|--------------------------|----------------------------------------------|------------------------|
| `gopuram.png`            | Temple tower above the doors                 | 1026 × 672             |
| `temple-frame.png`       | Stone pillars, lintel and step round the doors (doorway left see-through) | 999 × 1464 |
| `temple-door-left.png`   | Left door, hinge on the left                 | 375 × 1173             |
| `temple-door-right.png`  | Right door, hinge on the right               | 375 × 1173             |
| `thoranam.png`           | Mango-leaf garland over the doorway          | 954 × 180              |
| `banana-leaf-left.png`   | Banana leaf, left of the doors (stalk at bottom centre) | 282 × 1200  |
| `banana-leaf-right.png`  | Banana leaf, right of the doors              | 282 × 1200             |
| `bell.png`               | Temple bell with chain (chain at top centre) | 240 × 510              |
| `diya.png`               | Brass lamp, unlit, wick tip at 50% across and 44% down | 600 × 480    |

**The courtyard** (behind the doors):

| File name                | What it is                                   | Shape (width × height) |
|--------------------------|----------------------------------------------|------------------------|
| `pillar-left.png`        | Carved stone pillar, left edge (capital at the top; it is cropped from the bottom) | 300 × 3000 |
| `pillar-right.png`       | Carved stone pillar, right edge              | 300 × 3000             |
| `garland.png`            | Leaf-and-jasmine garland along the top edge (repeats nicely if wide) | 3000 × 150 |
| `jasmine-string.png`     | One hanging jasmine strand (hangs from top centre; it sways) | 72 × 900 |
| `kuthuvilakku.png`       | Tall standing brass lamp, unlit. Wick tips at 18%, 50% and 82% across, about 22% down | 360 × 1200 |
| `urli.png`               | Brass bowl with floating flowers             | 600 × 330              |
| `kalasam.png`            | Brass pot with mango leaves and coconut      | 360 × 510              |
| `lotus.png`              | Pink lotus on its leaf                       | 420 × 270              |
| `temple-view.png`        | Distant temple tank, palms and gopuram (soft and misty; bottom edge is the water's edge) | 2400 × 900 |
| `kolam.svg`              | Floor kolam seen in perspective (an SVG draws itself line by line only if it is the built-in one) | 1200 × 420 |

The banana leaves and the bell above are reused in the courtyard.

To use a different file name or format (e.g. WebP), add it to `"elements"` in
the couple's `wedding.json`, e.g. `"elements": { "gopuram": "my-gopuram.webp" }`
(that path is relative to the couple's folder).
