"""Writes assets/manifest.json: every image slot, its purpose, the exact Canva prompt,
its Canva link (once generated) and whether the coded stand-in is in use.
Edit SLOTS / DONE below, then run:  python3 tools/make-manifest.py"""
import json, os
HERE = os.path.dirname(os.path.abspath(__file__))
END = ("Real photograph, luxury Indian wedding editorial, soft natural light, pastel palette of rose pink, powder blue, mint, "
       "lilac, ivory and antique gold with touches of marigold, real textures (marble, mirror-work, velvet, silk, silver, frescoes), "
       "shallow depth of field, subtle film grain, elegant and believable. No text, letters, signage, watermarks or logos.")
REF = " Match the light, colour and rendering of the reference image. "
CUT = " The object alone, centred, on a plain flat pale ivory studio background with a soft contact shadow. Soft window light from the upper left, 85mm lens."

SLOTS = [
  # file, kind, ratio, purpose, prompt body
  ("palace-sky", "scene", "PORTRAIT_9_16", "Scene 3 background and the style anchor for every other image",
   "palace-sky: a rose-pink Jaipur palace with domes, chhatris and jharokhas above a Mughal charbagh garden with fountains and cypress trees, pigeons in flight, soft pastel sky at golden hour. TOP 40% mostly open sky for the names. Shot from the far end of the charbagh's central water channel on a 35mm lens at eye level, late golden-hour sun from the left raking across pink sandstone, warm rim light on the domes, fine mist from the fountains catching the light, a few white pigeons in soft motion blur crossing the lower sky. "),
  ("thaal-bg", "scene", "PORTRAIT_9_16", "Scene 1: the silver thaal the velvet box sits on",
   "thaal-bg: an engraved silver thaal on a blush raw-silk tablecloth, seen from above at a gentle 60-degree angle, surrounded by small silver katoris of kaju katli, motichoor ladoos, almonds and pistachios, scattered pink rose petals, two lit brass diyas with small warm flames and a tiny cut-glass itar bottle. The centre of the thaal is EMPTY polished silver with soft repoussé lotus engraving around the rim, leaving clear space for an object to be placed later. Soft morning window light from the upper left, gentle reflections in the silver, 50mm lens, shallow depth of field."),
  ("herald-window", "scene", "PORTRAIT_9_16", "Scene 2 (and 6): the jharokha window seat the Herald lands on",
   "herald-window: a sunlit jharokha window seat inside a pastel-painted Jaipur haveli, a carved sandstone arch with a low cushioned seat in blush and mint silk with gota-patti trim, a cup of chai in fine white bone china with a gold rim on a small brass saucer, pink bougainvillea spilling in from outside, a soft view of pastel rooftops beyond. The seat cushion in the lower middle is clear and uncluttered. Morning sunlight streaming in from the right, warm soft shadows on the lime-plaster walls, 35mm lens."),
  ("sheesh-mahal", "scene", "PORTRAIT_9_16", "Scene 4: the mirror hall behind the invitation panel",
   "sheesh-mahal: the interior of a Sheesh Mahal palace hall in Rajasthan, walls and vaulted ceiling covered in intricate convex mirror-work inlay set in white plaster with pastel floral frescoes in rose, mint and powder blue, glowing with the warm light of many small brass diyas and candles along the floor, thousands of tiny reflections. In the centre of the far wall a large plain smooth IVORY plaster panel, about 60 percent of the frame width and half its height, completely blank, framed by a thin gilded border. No chandeliers and no flowers. Symmetrical front view, 28mm lens, evening, warm glow."),
  ("durbar-ball", "scene", "PORTRAIT_9_16", "Scenes 9 and 10: the countdown and the events",
   "durbar-ball: a grand pastel durbar hall in a Rajasthan palace at night, rows of scalloped Mughal arches painted in powder blue and rose with gilded details, several crystal chandeliers glowing warmly overhead, a polished white marble floor reflecting the lights, carved jharokha windows along the upper musicians' gallery, tall arrangements of pale pink roses and jasmine on pedestals along the sides. Completely empty of people. Warm candle and chandelier light, deep soft shadows, 24mm lens from the centre aisle at standing height."),
  ("bride", "scene", "PORTRAIT_9_16", "Scene 5 portrait, Herald oval and biodata stamp. Replace with the real bride's photo",
   "bride: a fictional Indian bride in her late twenties in a powder-blue and blush pastel lehenga with pearl and zardozi work, a sheer blush dupatta draped over her head, a delicate kundan maang tikka and a pearl choker, holding an ivory and gold hand fan, seated by a carved jharokha, three-quarter view, a soft candid half-smile looking slightly away, natural skin texture, soft window light from the side, 85mm lens."),
  ("groom", "scene", "PORTRAIT_9_16", "Scene 5 portrait, Herald oval and biodata stamp. Replace with the real groom's photo",
   "groom: a fictional Indian groom around thirty in an ivory silk bandhgala with a mint-green safa, layered pearl strings and a small kundan brooch, standing in a white marble colonnade, three-quarter view, a candid easy smile, natural skin texture, late afternoon light, 85mm lens."),
  ("terrace-line", "scene", "PORTRAIT_9_16", "Scene 7: the rooftop clothesline for the gossip chits",
   "terrace-line: the flat rooftop terrace of an old Jaipur haveli at golden hour, low pink-washed parapet walls with small chhatris at the corners, a long empty cotton clothesline strung across the upper third of the frame between two weathered wooden posts, pastel rose and ochre havelis and a distant pink palace on a hill beyond, three paper kites high in a soft apricot and lilac sky, warm low sun from the left casting long soft shadows across the terracotta floor. Nothing hanging on the line. 35mm lens at standing height."),
  ("mehendi-hands", "scene", "PORTRAIT_9_16", "Scene 8: the hands the groom's name is hidden in",
   "mehendi-hands: a top-down close-up of a bride's two hands, palms up side by side, covered in intricate traditional dark-brown mehendi of mandalas, paisleys, peacocks and fine lattice reaching to the fingertips, resting on blush raw silk with a few rose petals, natural relaxed fingers with exactly five on each hand, soft diffused daylight, 50mm macro lens."),
  ("dressing-room", "scene", "PORTRAIT_9_16", "Scene 11: hiding spots for joota chupai",
   "dressing-room: the groom's dressing room in a palace suite, a curved velvet sofa in mint with silk cushions, a carved sheesham wooden trunk with brass corners on the floor, heavy rose silk curtains tied back at a tall window on the left, a tall gilt-framed mirror on the right, a small side table with a carved turban box and a vase of pale roses, warm lamplight mixing with soft evening window light, 28mm lens."),
  ("baraat-lane", "scene", "PORTRAIT_9_16", "Scene 12: the lane the groom rides in on",
   "baraat-lane: a decorated palace lane in Jaipur at dusk, pink sandstone walls and arches on both sides, marigold garlands and strings of glowing lanterns and warm fairy lights criss-crossing overhead, rose petals scattered on the cobbled ground, the lower third an EMPTY clear road running across the frame, deep blue dusk sky, 24mm lens at standing height."),
  ("palace-night", "scene", "PORTRAIT_9_16", "Scenes 13 and 14: RSVP and finale",
   "palace-night: the same rose-pink Jaipur palace at night, every jharokha glowing with warm light, the lights reflected in the long fountain channel of the charbagh, cypress silhouettes, a deep blue night sky with a few stars, the top 40 percent open sky, 35mm lens from the end of the water channel."),
  ("og-image", "scene", "LANDSCAPE_16_9", "Link preview (names added by tools/og.html)",
   "og-image: the rose-pink Jaipur palace and charbagh fountains at golden hour, wide view, soft open space in the centre of the frame for names, pigeons in flight, 28mm lens."),
  ("box-closed", "cutout", "SQUARE_1_1", "Scene 1: the closed shagun box",
   "box-closed: a single square shagun gift box covered in soft blush-pink silk velvet, the lid closed, the lid and sides embroidered with fine gold zari and tiny seed pearls in a lotus and paisley pattern, a small antique brass clasp at the front, seen from slightly above at a three-quarter angle, the velvet showing a soft natural sheen."),
  ("box-open", "cutout", "SQUARE_1_1", "Scene 1: the same box, open",
   "box-open: the same blush-pink silk velvet shagun box with gold zari embroidery, the lid hinged fully open at the back, an empty interior lined with ivory silk, seen from slightly above at a three-quarter angle."),
  ("scroll", "cutout", "SQUARE_1_1", "Scene 1: the rolled scroll",
   "scroll: a rolled ivory handmade-paper scroll with deckled edges, carved dark wooden end-knobs, tied in the middle with a red and gold kalava thread, lying horizontally."),
  ("scroll-open", "cutout", "PORTRAIT_1_2", "Scene 1: the unrolled scroll the invitation is written on",
   "scroll-open: the same handmade ivory paper scroll fully unrolled vertically, blank, soft fibres and deckled edges visible, wooden rollers at the top and bottom with carved end-knobs, front view."),
  ("lac-seal", "cutout", "SQUARE_1_1", "Scene 1: the seal that cracks",
   "lac-seal: a round red-maroon lac sealing-wax seal with an embossed lotus impression and slightly irregular edges, seen from directly above."),
  ("chandelier", "cutout", "SQUARE_1_1", "Scene 4: swaying chandeliers",
   "chandelier: a Belgian crystal palace chandelier with gilded arms and candle-shaped lights, front view, the chain rising to the top centre of the frame."),
  ("bougainvillea", "cutout", "LANDSCAPE_2_1", "Scenes 3 and 4: foreground flowers",
   "bougainvillea: a lush cascade of pink and magenta bougainvillea with green leaves hanging down from the top edge of the frame."),
  ("jasmine-strand", "cutout", "PORTRAIT_1_2", "Scene 4: hanging jasmine",
   "jasmine-strand: a long hanging strand of fresh white jasmine buds strung on thread, ending in a single deep red rose."),
  ("jharokha-frame", "cutout", "PORTRAIT_3_4", "Scene 3: the foreground window the palace is seen through",
   "jharokha-frame: a carved pink-sandstone jharokha window frame with a scalloped Mughal arch, front view, the centre of the arch completely EMPTY and open."),
  ("miniature-frame", "cutout", "PORTRAIT_3_4", "Scene 5: the portrait frames",
   "miniature-frame: an ornate antique gold picture frame with a hand-painted floral border in the style of Rajput miniature paintings, front view, the centre EMPTY."),
  ("dupatta-rose", "cutout", "LANDSCAPE_2_1", "Scene 7", "dupatta-rose: a rose-pink chiffon dupatta with a gold gota-patti border draped over a thin line, front view."),
  ("dupatta-blue", "cutout", "LANDSCAPE_2_1", "Scene 7", "dupatta-blue: a powder-blue chiffon dupatta with a gold gota-patti border draped over a thin line, front view."),
  ("dupatta-mint", "cutout", "LANDSCAPE_2_1", "Scene 7", "dupatta-mint: a mint-green chiffon dupatta with a gold gota-patti border draped over a thin line, front view."),
  ("dupatta-lilac", "cutout", "LANDSCAPE_2_1", "Scene 7", "dupatta-lilac: a lilac chiffon dupatta with a gold gota-patti border draped over a thin line, front view."),
  ("pocket-clock", "cutout", "SQUARE_1_1", "Scene 9: the clock the hands are drawn on",
   "pocket-clock: an antique palace table clock in gold with pastel blue and rose enamel, a plain ivory dial with Roman numerals and NO HANDS, front view."),
  ("juttis", "cutout", "SQUARE_1_1", "Scene 11: the hidden shoes", "juttis: a pair of embroidered ivory-and-gold groom's juttis (mojaris) with curled toes, side by side."),
  ("groom-ghodi", "cutout", "LANDSCAPE_3_2", "Scene 12: the groom arriving",
   "groom-ghodi: a fictional groom in an ivory sherwani and mint safa riding a white horse decorated with a silver and marigold harness and a red velvet saddle cloth, side view facing right, the whole horse in frame."),
  ("dhol", "cutout", "SQUARE_1_1", "Scene 12: tap to play", "dhol: a traditional Punjabi dhol drum with a carved wooden shell, rope tensioning and colourful woollen tassels."),
  ("pigeon-up", "cutout", "SQUARE_1_1", "Scenes 3 and 13: flapping pigeon, wings up", "pigeon-up: a white pigeon in flight, side view facing right, wings raised high, a tiny rolled letter tied to its leg with red thread."),
  ("pigeon-down", "cutout", "SQUARE_1_1", "Scenes 3 and 13: flapping pigeon, wings down", "pigeon-down: the same white pigeon in flight, side view facing right, wings swept down, a tiny rolled letter tied to its leg with red thread."),
]
DONE = {  # file -> Canva media id
  "palace-sky": "MAHa6xBx6Fs", "thaal-bg": "MAHa676PS50", "sheesh-mahal": "MAHa6-Zsh-s", "herald-window": "MAHa60F6jpg", "durbar-ball": "MAHa7HJqsM8",
}
extra = os.path.join(HERE, 'media-ids.json')
if os.path.exists(extra): DONE.update(json.load(open(extra)))

out = []
for f, kind, ratio, purpose, body in SLOTS:
    prompt = body + (CUT if kind == 'cutout' else '') + (REF if f != 'palace-sky' else ' ') + END
    mid = DONE.get(f)
    out.append({
        "file": f + ('.webp' if kind == 'cutout' else '.webp + .jpg'),
        "kind": kind, "aspectRatio": ratio, "purpose": purpose, "prompt": prompt.replace('  ', ' '),
        "canva": f"https://www.canva.com/M/{mid}" if mid else None,
        "status": "generated" if mid else "coded stand-in (replace when generated)",
    })
json.dump({"project": "myra-weds-aryaman", "styleAnchor": "https://www.canva.com/M/MAHa6xBx6Fs",
           "exportSheet": "https://www.canva.com/d/UfrNZ9zEKXDilG-", "grade": "tools/grade.js", "assets": out},
          open(os.path.join(HERE, '..', 'assets', 'manifest.json'), 'w'), indent=2, ensure_ascii=False)
print(sum(1 for o in out if o['canva']), 'of', len(out), 'generated')
