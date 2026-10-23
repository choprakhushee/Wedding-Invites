/* ==========================================================================
   WEDDING DETAILS — the only file you edit for a new couple.

   • Text in quotes "like this" can be changed freely.
   • Anything written as { en: "...", hi: "..." } has an English and a Hindi
     version. If Hindi is switched off you can leave "hi" empty.
   • Dates are written as  "YYYY-MM-DDTHH:MM:00+05:30"  (year-month-day, then
     24-hour time, then India's time zone). Example: 7:30 pm on 13 Feb 2027 is
     "2027-02-13T19:30:00+05:30".
   • Keep every comma and bracket. If the page goes blank after an edit, a
     comma or quote is usually missing on the line you changed.
   ========================================================================== */

window.WEDDING = {

  /* ---------- Switches: true = on, false = off ---------- */
  features: {
    entry: true,       // the "Tap to open" doors
    countdown: true,
    story: true,
    gallery: true,
    rsvp: true,
    hindi: true,       // shows the English / हिं button
    petals: true,      // a few falling petals as the doors open
    credit: true       // "Crafted by Aamantran Atelier" in the footer
  },

  /* Language the site opens in: "en" or "hi" */
  language: "en",

  /* ---------- The couple ---------- */
  couple: {
    bride: {
      name: { en: "Meera", hi: "मीरा" },
      fullName: { en: "Meera Rathore", hi: "मीरा राठौड़" },
      parents: { en: "daughter of Kavita & Vikram Rathore", hi: "सुपुत्री श्रीमती कविता एवं श्री विक्रम राठौड़" }
    },
    groom: {
      name: { en: "Kabir", hi: "कबीर" },
      fullName: { en: "Kabir Malhotra", hi: "कबीर मल्होत्रा" },
      parents: { en: "son of Anjali & Rohan Malhotra", hi: "सुपुत्र श्रीमती अंजलि एवं श्री रोहन मल्होत्रा" }
    },
    // Which name comes first everywhere: "bride" or "groom"
    firstName: "bride"
  },

  families: { en: "The Rathore & Malhotra families", hi: "राठौड़ एवं मल्होत्रा परिवार" },

  /* The main wedding moment. The countdown counts down to this. */
  weddingDate: "2027-02-14T19:00:00+05:30",
  city: { en: "Udaipur, Rajasthan", hi: "उदयपुर, राजस्थान" },

  /* ---------- Events (add, remove or reorder freely) ----------
     pattern: harlequin, pinstripe, lattice, vine, damask, checker, buti, vine-green
     frame (optional): "maroon" or "green", the colour of the arch around the card
     backdrop (optional): a painted scene behind the room, in assets/elements/
     map: a Google Maps link. Easiest: search the venue on Google Maps,
          tap Share, copy the link and paste it here.                       */
  events: [
    {
      name: { en: "Haldi", hi: "हल्दी" },
      pattern: "pinstripe",
      backdrop: "assets/elements/room-haldi.jpg",
      start: "2027-02-12T10:00:00+05:30",
      end:   "2027-02-12T13:00:00+05:30",
      venue: { en: "The Marigold Courtyard, Haveli Rathore", hi: "गेंदा आँगन, हवेली राठौड़" },
      address: "Haveli Rathore, Lal Ghat, Udaipur",
      map: "https://www.google.com/maps/search/?api=1&query=Lal+Ghat+Udaipur",
      dressCode: { en: "Shades of yellow — clothes you don't mind getting turmeric on", hi: "पीले रंग — ऐसे कपड़े जिन पर हल्दी लग सके" }
    },
    {
      name: { en: "Mehendi", hi: "मेहंदी" },
      pattern: "vine",
      backdrop: "assets/elements/room-mehendi.jpg",
      start: "2027-02-12T16:00:00+05:30",
      end:   "2027-02-12T20:00:00+05:30",
      venue: { en: "The Garden Terrace, Haveli Rathore", hi: "बाग़ टैरेस, हवेली राठौड़" },
      address: "Haveli Rathore, Lal Ghat, Udaipur",
      map: "https://www.google.com/maps/search/?api=1&query=Lal+Ghat+Udaipur",
      dressCode: { en: "Greens and florals", hi: "हरे रंग और फूलों के प्रिंट" }
    },
    {
      name: { en: "Sangeet", hi: "संगीत" },
      pattern: "lattice",
      backdrop: "assets/elements/room-sangeet.jpg",
      start: "2027-02-13T19:30:00+05:30",
      end:   "2027-02-13T23:30:00+05:30",
      venue: { en: "The Mirror Hall, Lakeview Palace", hi: "शीश महल, लेकव्यू पैलेस" },
      address: "Lakeview Palace, Lake Pichola, Udaipur",
      map: "https://www.google.com/maps/search/?api=1&query=Lake+Pichola+Udaipur",
      dressCode: { en: "Indo-western glamour — sequins welcome", hi: "इंडो-वेस्टर्न — चमक-दमक का स्वागत है" }
    },
    {
      name: { en: "Wedding · Pheras", hi: "विवाह · फेरे" },
      pattern: "harlequin",
      backdrop: "assets/elements/room-wedding.jpg",
      start: "2027-02-14T19:00:00+05:30",
      end:   "2027-02-14T23:00:00+05:30",
      venue: { en: "The Lake Pavilion, Lakeview Palace", hi: "झील मंडप, लेकव्यू पैलेस" },
      address: "Lakeview Palace, Lake Pichola, Udaipur",
      map: "https://www.google.com/maps/search/?api=1&query=Lake+Pichola+Udaipur",
      dressCode: { en: "Traditional Indian — reds, golds and jewel tones", hi: "पारंपरिक भारतीय — लाल, सुनहरे और गहरे रंग" }
    },
    {
      name: { en: "Reception", hi: "रिसेप्शन" },
      pattern: "damask",
      backdrop: "assets/elements/room-reception.jpg",
      start: "2027-02-15T20:00:00+05:30",
      end:   "2027-02-15T23:59:00+05:30",
      venue: { en: "The Durbar Lawns, Lakeview Palace", hi: "दरबार लॉन, लेकव्यू पैलेस" },
      address: "Lakeview Palace, Lake Pichola, Udaipur",
      map: "https://www.google.com/maps/search/?api=1&query=Lake+Pichola+Udaipur",
      dressCode: { en: "Black tie or festive formal", hi: "ब्लैक टाई या फ़ॉर्मल परिधान" }
    }
  ],

  /* ---------- Our story (only shown if features.story is true) ---------- */
  story: [
    {
      when: { en: "Autumn 2019", hi: "शरद 2019" },
      title: { en: "A borrowed umbrella", hi: "एक उधार की छतरी" },
      text: { en: "A Mumbai monsoon, one umbrella, and a walk that lasted far longer than the rain.", hi: "मुंबई की बारिश, एक छतरी, और एक सैर जो बारिश से कहीं लंबी चली।" },
      photo: "assets/photos/story-1.webp",
      alt: { en: "Meera and Kabir under an umbrella in the rain", hi: "बारिश में छतरी के नीचे मीरा और कबीर" }
    },
    {
      when: { en: "Winter 2022", hi: "शीत 2022" },
      title: { en: "The first trip home", hi: "घर की पहली यात्रा" },
      text: { en: "Kabir met the Rathores over dal baati and was asked to stay for the next three festivals.", hi: "दाल-बाटी पर राठौड़ परिवार से मुलाक़ात, और अगले तीन त्योहारों का न्योता।" },
      photo: "assets/photos/story-2.webp",
      alt: { en: "Meera and Kabir with family at a festive dinner", hi: "परिवार के साथ त्योहार का भोजन" }
    },
    {
      when: { en: "Spring 2026", hi: "वसंत 2026" },
      title: { en: "A question by the lake", hi: "झील किनारे एक सवाल" },
      text: { en: "At sunset on Lake Pichola, he asked. She said yes before he had finished.", hi: "पिछोला झील पर सूर्यास्त के समय उसने पूछा, और जवाब पूरा होने से पहले ही हाँ था।" },
      photo: "assets/photos/story-3.webp",
      alt: { en: "Kabir proposing to Meera at sunset by the lake", hi: "झील किनारे सूर्यास्त पर प्रस्ताव" }
    }
  ],

  /* ---------- Gallery (only shown if features.gallery is true) ---------- */
  gallery: [
    { src: "assets/photos/gallery-1.webp", alt: { en: "Meera and Kabir laughing", hi: "हँसते हुए मीरा और कबीर" } },
    { src: "assets/photos/gallery-2.webp", alt: { en: "Meera and Kabir at the palace", hi: "महल में मीरा और कबीर" } },
    { src: "assets/photos/gallery-3.webp", alt: { en: "Hands with engagement rings", hi: "सगाई की अंगूठियाँ" } },
    { src: "assets/photos/gallery-4.webp", alt: { en: "Meera and Kabir by the lake", hi: "झील किनारे मीरा और कबीर" } }
  ],

  /* ---------- RSVP ----------
     endpoint: paste the Google Apps Script "Web app URL" here (see README).
     Leave it empty while testing: the form will still show the thank-you.  */
  rsvp: {
    endpoint: "",
    deadline: { en: "Kindly reply by 15 January 2027", hi: "कृपया 15 जनवरी 2027 तक उत्तर दें" },
    maxGuests: 6
  },

  /* ---------- Music (starts when the guest taps to open) ----------
     Use only music you have the rights to. MP3, ideally under 2 MB.        */
  music: {
    src: "assets/music/sample-festive.mp3",
    volume: 0.6
  },

  /* ---------- Closing ---------- */
  closing: {
    line: { en: "Two families, one courtyard, and a lifetime of evenings to share.", hi: "दो परिवार, एक आँगन, और साथ बिताने को अनगिनत शामें।" },
    blessing: { en: "With the blessings of Dadi Kamla Rathore & Dadaji Harish Malhotra", hi: "दादी कमला राठौड़ एवं दादाजी हरीश मल्होत्रा के आशीर्वाद सहित" }
  },

  /* ---------- Colours (leave as they are for the Palace Parlour look) ---------- */
  theme: {
    maroon: "#5C1A1B",
    green: "#1F3A2E",
    blush: "#E6CFC6",
    linen: "#F2E9E1",
    gold: "#C9A56B",
    goldDeep: "#7A5C2E",
    cocoa: "#5A4636",
    ink: "#2B1F1A"
  },

  /* ---------- Decorative elements ----------
     Drop a PNG with this exact name into assets/elements/ and the site uses
     it. If the file isn't there, the built-in Palace Parlour drawing is used.
     Sizes are listed in assets/elements/README.md.                          */
  elements: {
    // Painted scenes and doors (JPG, about 900 × 1600 px, under 250 KB each)
    doors: "assets/elements/doors.jpg",
    backdrop: "assets/elements/backdrop-couple.jpg",
    // Or a separate picture for each door (these win over doors.jpg)
    doorLeft: "assets/elements/door-left.png",
    doorRight: "assets/elements/door-right.png",
    arch: "assets/elements/arch.png",
    cornerFloral: "assets/elements/corner-floral.png",
    borderTop: "assets/elements/border-top.png",
    divider: "assets/elements/divider.png",
    petals: ["assets/elements/petal-1.png", "assets/elements/petal-2.png", "assets/elements/petal-3.png"]
  },

  /* ---------- Footer credit ---------- */
  credit: { text: "Crafted by Aamantran Atelier", url: "" },

  /* ---------- Words used around the site ----------
     You can reword anything here. {guest} is replaced by the guest's name
     from a personal link, e.g.  ...?guest=Sharma%20Parivar               */
  text: {
    en: {
      entryKicker: "Shubh Vivaah",
      entryFor: "For {guest}",
      tapToOpen: "Tap to open",
      skip: "Skip",
      togetherWith: "together with their families",
      inviteLine: "request the pleasure of your company",
      scrollHint: "Scroll",
      letterKicker: "A letter for you",
      greeting: "Dear {guest},",
      greetingAll: "Dear family & friends,",
      greetingBody: "our celebrations would be incomplete without you. Please join us as we begin our forever.",
      countdownTitle: "Counting the days",
      days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
      countdownDone: "The celebrations have begun",
      eventsTitle: "The Celebrations",
      eventsIntro: "Five evenings, one palace. Step through each room.",
      dressCode: "Dress code",
      directions: "Get directions",
      addToCalendar: "Add to calendar",
      calendarGoogle: "Google Calendar",
      calendarOther: "Apple / Outlook",
      storyTitle: "Our Story",
      galleryTitle: "Moments",
      rsvpTitle: "Will you join us?",
      rsvpName: "Your name",
      rsvpGuests: "Number of guests",
      rsvpEvents: "Which celebrations will you attend?",
      rsvpMessage: "A note for the couple (optional)",
      rsvpSubmit: "Send RSVP",
      rsvpSending: "Sending…",
      rsvpThanks: "Thank you",
      rsvpThanksBody: "Your reply has reached us. We can't wait to celebrate with you.",
      rsvpError: "Something went wrong. Please try again, or message the family directly.",
      musicOn: "Play music", musicOff: "Pause music",
      language: "हिन्दी"
    },
    hi: {
      entryKicker: "शुभ विवाह",
      entryFor: "{guest} के लिए",
      tapToOpen: "खोलने के लिए छुएँ",
      skip: "आगे बढ़ें",
      togetherWith: "अपने परिवारों के साथ",
      inviteLine: "आपकी गरिमामयी उपस्थिति की कामना करते हैं",
      scrollHint: "नीचे देखें",
      letterKicker: "आपके लिए एक पत्र",
      greeting: "प्रिय {guest},",
      greetingAll: "प्रिय परिवारजन एवं मित्रगण,",
      greetingBody: "आपके बिना हमारा उत्सव अधूरा है। हमारे नए जीवन की शुरुआत में हमारे साथ रहें।",
      countdownTitle: "शुभ घड़ी की प्रतीक्षा",
      days: "दिन", hours: "घंटे", minutes: "मिनट", seconds: "सेकंड",
      countdownDone: "उत्सव आरंभ हो चुका है",
      eventsTitle: "उत्सव",
      eventsIntro: "पाँच उत्सव, एक महल। हर कक्ष में पधारें।",
      dressCode: "परिधान",
      directions: "रास्ता देखें",
      addToCalendar: "कैलेंडर में जोड़ें",
      calendarGoogle: "गूगल कैलेंडर",
      calendarOther: "एप्पल / आउटलुक",
      storyTitle: "हमारी कहानी",
      galleryTitle: "यादें",
      rsvpTitle: "क्या आप पधारेंगे?",
      rsvpName: "आपका नाम",
      rsvpGuests: "अतिथियों की संख्या",
      rsvpEvents: "आप किन समारोहों में आएँगे?",
      rsvpMessage: "दंपति के लिए संदेश (वैकल्पिक)",
      rsvpSubmit: "उत्तर भेजें",
      rsvpSending: "भेजा जा रहा है…",
      rsvpThanks: "धन्यवाद",
      rsvpThanksBody: "आपका उत्तर हमें मिल गया है। आपके साथ उत्सव मनाने की प्रतीक्षा है।",
      rsvpError: "कुछ गड़बड़ हुई। कृपया फिर से प्रयास करें या परिवार से सीधे संपर्क करें।",
      musicOn: "संगीत चलाएँ", musicOff: "संगीत रोकें",
      language: "English"
    }
  }
};
