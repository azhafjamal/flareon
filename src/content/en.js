// ENGLISH SOURCE OF TRUTH for every user-visible string on the site.
//
// Locale files in this folder mirror this shape. Anything a locale omits falls
// back to the English value here, so a partial translation degrades to English
// per-string instead of rendering blank.
//
// Numbers, spec values, emails and the address deliberately live in
// src/data/site.js and are NOT translated — they read the same in every market.

export default {
  nav: {
    home: "Home",
    company: "Company",
    products: "Products",
    gallery: "Gallery",
    compliance: "Specs & Certs",
    export: "Export Desk",
    india: "India Supply",
  },

  cta: {
    quote: "Get FOB quote",
    sample: "Request free sample pack",
    report: "View Certifications & Reports",
    catalogue: "View full catalogue",
    oem: "OEM & private label",
    allDocs: "All four documents",
    factoryVisit: "Book a factory visit",
    auditDocs: "Audit documents",
    whatsapp: "WhatsApp the export desk",
    openExportDesk: "Open the export desk",
    oemTemplate: "Request OEM packaging template",
  },

  common: {
    comingSoon: "Coming soon",
    photoComingSoon: "Photo coming soon",
    downloadPdf: "Download PDF",
    languageMarket: "Language / market",
    toggleMenu: "Toggle menu",
    soon: "Soon",
    sending: "Sending…",
  },

  roles: {
    managingPartner: "Managing Partner",
  },

  // site.js holds the bare numbers; the unit word is translated here.
  units: {
    hours: "Hours",
    hoursShort: "hrs",
  },

  // Spec row labels — shared by the grade cards on Home and Products.
  specs: {
    ash: "Ash content",
    moisture: "Moisture",
    burn: "Burn time",
    extraLong: "Extra-long",
    fixedCarbon: "Fixed carbon",
    mostExported: "Most exported",
    priceCta: "Get {grade} FOB price",
  },

  home: {
    hero: {
      badge: "ISO 9001:2015 (TÜV SÜD) & Sedex SMETA certified plant",
      h1a: "India's largest integrated",
      h1b: "coconut shell charcoal",
      h1c: "briquette manufacturer",
      sub: "Export-grade, chemical-free BBQ briquettes engineered for high heat, extra-long burn time and ultra-low ash (<12%). Direct factory capacity of 5,000 MT per year.",
    },
    pillars: {
      eyebrow: "Why the coal burns differently",
      title: "Integrated from shell to shipment",
      sub: "Shell collection, activated carbon plant, briquetting and BBQ grill assembly all sit under one roof in Palladam, Tamil Nadu, India — which is why we can promise raw material quality instead of hoping for it.",
    },
    plant: {
      eyebrow: "Inside Palladam",
      title: "The plant, not a stock photo",
      sub: "Shell intake, carbonising, pressing, UV drying and packing — photographed on the line at our own facility in Palladam, Tamil Nadu, India.",
      pressLabel: "Stage 03 — pressing",
      pressNote: "High-density hydraulic pressing into pillow, hexagon and cube.",
      dryLabel: "Stage 04 — UV drying",
      dryNote: "Multi-day slow drying, so the briquette never micro-cracks.",
      despatchLabel: "Despatch",
      despatchNote: "Poly-lined 25 kg sacks staged for container loading.",
    },
    grades: {
      eyebrow: "Spec & price grades",
      title: "Pick a grade, see the numbers",
      sub: "Three tiers, published side by side — ash, moisture, fixed carbon and burn time on the same screen, so you can compare us against any quote already on your desk.",
    },
    products: {
      eyebrow: "What we ship",
      title: "Two lines, one raw material: the coconut shell.",
      sub: "Coconut shell charcoal briquettes for the grill, and activated carbon for filtration. Nothing else — because focus is what makes us the best at both.",
    },
    benchmark: {
      eyebrow: "Bureau Veritas — third-party tested",
      title: "Against leading wood charcoal",
      sub: "Not our marketing numbers. The comparative combustion study, reproduced in full and downloadable as the original PDF.",
    },
    trust: {
      eyebrow: "Documented, not claimed",
      title: "Every certificate is a download, not a photo",
      body: "The TÜV SÜD ISO 9001:2015 certificate, the Bureau Veritas comparison study, our MSDS and the Coconut Development Board export registration — all four are searchable PDFs you can download before you send a single enquiry.",
    },
    faq: {
      eyebrow: "Before you enquire",
      title: "The six questions every buyer asks",
    },
    partner: {
      eyebrow: "Meet the managing partner",
    },
    closing: {
      titleA: "Start with one container.",
      titleB: "Not eighteen tons.",
      sub: "Flexible MOQ from a single 20ft FCL, T/T or irrevocable L/C, and a free sample pack before you commit.",
    },
  },

  company: {
    hero: {
      eyebrow: "Company & eco-infrastructure",
      titleA: "The only fully integrated coconut charcoal",
      titleB: "manufacturer in India",
      sub: "From coconut shell collection to activated carbon, briquette manufacturing and BBQ grill assembly — Flareon Briquettes controls 100% of raw material quality.",
    },
    pillars: {
      eyebrow: "Manufacturing pillars",
      title: "Three things competitors outsource. We own all three.",
    },
    process: {
      eyebrow: "End-to-end process — briquettes",
      title: "Landfill shell to sealed carton",
      sub: "Four controlled stages. Nothing sub-contracted, nothing chemically accelerated.",
      carbonEyebrow: "End-to-end process — activated carbon",
      carbonTitle: "Shell char to filtration-grade carbon",
      carbonSub: "The second line off the same raw material: activation, milling and testing before a sack is sealed.",
    },
    sustainability: {
      eyebrow: "Sustainability impact",
      figureLabel: "Renewable feedstock",
      figureNote: "Shell waste from working coconut plantations — a by-product stream, never a felled tree.",
    },
  },

  products: {
    hero: {
      eyebrow: "Products & OEM",
      titleA: "Built for commercial heat.",
      titleB: "Packed for your label.",
      sub: "Coconut shell charcoal briquettes for the grill, and activated carbon for filtration — supplied loose, retail-packed, or fully private-labelled under your own brand.",
    },
    briquettes: {
      figureLabel: "Extra-long, steady heat",
      figureNote: "Pressed from carbonised coconut shell with a potato starch binder only.",
      shapesEyebrow: "Shapes we press",
      shapesTitle: "Three shapes, each doing a different job",
      shapesSub: "Every shape runs the same chemistry — the geometry is what changes how it lights, stacks and burns.",
      gradesEyebrow: "Grade comparison",
      gradesTitle: "Three grades of the same briquette",
      gradesSub: "Ash, moisture, burn time and fixed carbon, side by side — pick the tier that matches your market.",
    },
    carbon: {
      comingSoonA: "Coming",
      comingSoonB: "Soon",
      comingSoonNote: "Grades, iodine values and mesh sizes are being finalised. Register your requirement and we'll come to you first.",
      specGrades: "Grades",
      specIodine: "Iodine value",
      specMesh: "Mesh sizes",
      specPacking: "Packing",
      ctaDisabled: "Request quote — coming soon",
      ctaTitle: "Activated carbon is not yet open for orders",
    },
    oem: {
      eyebrow: "Export OEM",
      title: "Private label & custom packaging desk",
      sub: "Send us artwork and a target retail size. We return a dieline, a carton mock-up and a container capacity calculation.",
      figureLabel: "Private label, printed and packed",
      figureNote: "Full CMYK cartons and retail bags — your brand, our line.",
    },
  },

  gallery: {
    eyebrow: "Gallery",
    titleA: "The plant, the material,",
    titleB: "the burn.",
    sub: "Photographed on our own line in Palladam, Tamil Nadu, India — raw shell charcoal through pressing, drying, packing and despatch. Hover any frame for context.",
  },

  compliance: {
    hero: {
      eyebrow: "Quality specs & compliance hub",
      titleA: "Third-party numbers.",
      titleB: "Downloadable proof.",
      sub: "Bureau Veritas comparative combustion testing, ISO 9001:2015 by TÜV SÜD South Asia, the MSDS your customs broker will ask for, and our Coconut Development Board export registration.",
    },
    lab: {
      eyebrow: "Lab data",
      title: "Flareon vs leading wood charcoal",
      sub: "Bureau Veritas comparative analysis study. Every row below appears in the downloadable report.",
    },
    downloads: {
      eyebrow: "Downloads",
      title: "Official certificates & audit documents",
      sub: "All PDFs, no gated forms — the original documents exactly as issued.",
    },
    ask: {
      title: "Need a document we haven't listed?",
      body: "Phytosanitary certificates, Certificate of Origin, fumigation records and packing lists are issued per shipment.",
      cta: "Ask the export desk",
    },
  },

  exportDesk: {
    hero: {
      eyebrow: "Export logistics & container desk",
      titleA: "Tell us the port.",
      titleB: "We'll quote FOB or CIF.",
      sub: "Flexible MOQ from a single 20ft FCL, T/T or irrevocable L/C from the first container, and same-day indicative pricing — not a callback request.",
    },
    form: {
      fullName: "Full name",
      companyName: "Company name",
      businessEmail: "Business email",
      whatsappPhone: "WhatsApp phone",
      destinationPort: "Destination port",
      tellUsPort: "Tell us the port",
      portPlaceholder: "Port name, country",
      containerLoad: "Container load",
      grade: "Grade",
      palletization: "Palletization",
      palletizationOptions: {
        Palletized: "Palletized",
        "Non-Palletized / Loose Loading": "Non-Palletized / Loose Loading",
        "Palletized + Stretch Wrapped": "Palletized + Stretch Wrapped",
        "Palletized + Strapped & Wrapped": "Palletized + Strapped & Wrapped",
      },
      paymentTerms: "Payment terms",
      paymentTT: "T/T wire transfer",
      paymentLC: "Irrevocable Letter of Credit (L/C)",
      notes: "Anything else? (private label, factory visit dates, sample request)",
      namePlaceholder: "John Doe",
      companyPlaceholder: "Global Imports LLC",
      emailPlaceholder: "name@company.com",
    },
    briquetteForm: {
      eyebrow: "Briquettes",
      title: "Charcoal briquette FOB / CIF inquiry",
      submit: "Submit briquette quote request →",
      footnote: "Indicative price band returned the same working day.",
    },
    carbonForm: {
      eyebrow: "Activated carbon",
      title: "Activated carbon enquiry",
      intro: "The carbon line is not open for orders yet. Register your requirement and we will come back to you with grades and pricing the moment it is.",
      application: "Application",
      appWater: "Water treatment",
      appAir: "Air & gas purification",
      appFood: "Food & beverage",
      appGold: "Gold recovery",
      appOther: "Other industrial use",
      gradeInterest: "Grade of interest",
      gradePac: "Powdered (PAC)",
      gradeGac: "Granular (GAC)",
      gradePellet: "Pelletised",
      gradeUnsure: "Not sure yet",
      quantity: "Indicative quantity",
      quantityPlaceholder: "e.g. 10 MT per month",
      specNotes: "Specification notes (iodine value, mesh size, packing)",
      submit: "Register carbon requirement →",
      footnote: "We'll contact you as soon as the line opens for orders.",
    },
    sent: {
      title: "Enquiry sent.",
      body: "Your enquiry has reached the export desk by email. We reply the same working day with an indicative rate.",
      whatsappNudge: "For the fastest response, also send it on WhatsApp",
      whatsappNudgeNote: "One tap opens WhatsApp with your enquiry already filled in — just hit send.",
      whatsapp: "Share via WhatsApp",
      edit: "Edit enquiry",
    },
    sendError: {
      title: "Couldn't send that.",
      body: "Something went wrong submitting the form. Please try again, or reach us directly on WhatsApp.",
      retry: "Try again",
    },
    desk: {
      eyebrow: "Direct export sales desk",
      title: "Talk to a person, not a ticket queue",
      whatsapp: "WhatsApp",
      whatsappNote: "Fastest reply",
      enquiries: "Enquiries",
      enquiriesNote: "General export desk",
      partnerNote: "{name} — for partnerships and large contracts",
    },
    reach: {
      eyebrow: "Global reach",
      title: "Containers already moving",
    },
  },

  notFound: {
    code: "Error 404",
    titleA: "That page went up in",
    titleB: "smoke.",
    body: "The link may be out of date, or the page may have moved. Everything we publish is one click away below.",
    home: "Back to home",
    products: "View products",
    exportDesk: "Export desk",
  },

  // ---- India domestic supply (HORECA) ----
  // Anything wrapped in [square brackets] renders as a highlighted placeholder
  // chip via <Fills>. Replace the bracketed text with the real value and the
  // chip disappears on its own.
  india: {
    hero: {
      eyebrow: "India bulk supply · HORECA",
      titleA: "Charcoal your kitchen can",
      titleB: "actually plan around",
      sub: "Consistent-size coconut shell briquettes for tandoors, sigris, live grills and hookah counters — delivered on a fixed monthly schedule, billed on GST invoice, at a locked rate contract. No import paperwork, no container minimums.",
      ctaPrimary: "Request a free trial sample",
      ctaSecondary: "Talk to the India desk",
      chips: [
        "Delivery in [X] days",
        "MOQ [X] kg",
        "GST invoice",
        "Credit terms available",
      ],
    },

    glance: {
      title: "At a glance",
      rows: [
        { k: "Minimum order", v: "[X] kg" },
        { k: "Pack sizes", v: "5 / 10 / 20 kg" },
        { k: "Lead time", v: "[X] days" },
        { k: "Billing", v: "GST invoice, INR" },
        { k: "Credit terms", v: "[Net X days]" },
        { k: "Burn time", v: "Extra-long" },
        { k: "Ash content", v: "< 12%" },
        { k: "Plant", v: "Palladam, TN" },
      ],
    },

    clients: { eyebrow: "Already supplying" },

    useCases: {
      eyebrow: "Built for Indian kitchens",
      title: "One fuel across every live-fire station",
      sub: "Same briquette, same burn profile, whether it is a tandoor running lunch service or a hookah counter at 1 AM. Consistent sizing means your staff stop guessing how much to load.",
      items: [
        {
          title: "Tandoor",
          body: "Long steady heat without flare-ups, so naan and kebabs cook on a predictable cycle. Low ash means fewer mid-service clean-outs.",
          spec: "Extra-long burn · low spark",
        },
        {
          title: "Sigri & live grill",
          body: "Uniform pillow-shaped sizing loads evenly across the grate. No chemical accelerants, so nothing transfers to the food at the table.",
          spec: "0% chemicals · food-safe binder",
        },
        {
          title: "Hookah & shisha",
          body: "Clean white ash and near-zero odour, so the coal does not compete with the flavour. Pillow-shaped briquettes sized for standard shisha bowls.",
          spec: "Super Premium grade · ash < 10%",
        },
        {
          title: "Hotel banquets",
          body: "Volume supply on a fixed schedule so banquet teams are never rationing coal mid-event. Bulk 20 kg packs for back-of-house storage.",
          spec: "Scheduled monthly supply",
        },
        {
          title: "Outdoor catering",
          body: "Sealed moisture-resistant packs travel well and light reliably at open venues. Predictable burn time makes per-event planning simple.",
          spec: "< 5% moisture · sealed packs",
        },
        {
          title: "Cloud kitchens",
          body: "Small-footprint 5 kg packs for kitchens without warehouse space, on a top-up cycle that matches your order volume.",
          spec: "5 kg packs · flexible cycle",
        },
      ],
    },

    compare: {
      eyebrow: "Why kitchens switch",
      title: "Against the wood charcoal you buy today",
      sub: "Most Indian kitchens run on loose wood or lump charcoal bought locally. Here is the operational difference, in the terms that actually show up in your kitchen — not lab numbers.",
      head: {
        what: "What you notice",
        them: "Loose wood / lump charcoal",
        us: "Flareon coconut briquette",
      },
      swipe: "← swipe to compare →",
      rows: [
        { k: "Burn time per load", them: "1–2 hrs, uneven", us: "Extra-long, consistent" },
        { k: "Ash left behind", them: "High, gritty, frequent clean-out", us: "< 12%, fine white ash" },
        { k: "Sparks & smoke", them: "Common — a risk near guests", us: "Minimal, suited to live counters" },
        { k: "Piece sizing", them: "Irregular — staff over-load to be safe", us: "Uniform — same load every time" },
        { k: "Chemical smell on food", them: "Possible with accelerant-treated coal", us: "None — food-grade starch binder only" },
        { k: "Supply consistency", them: "Varies by lot and vendor", us: "Same spec every delivery, one plant" },
        { k: "Billing", them: "Often informal / cash", us: "GST invoice, rate contract" },
        { k: "Effective cost", them: "Lower per kg, higher per hour of service", us: "Higher per kg, lower per hour of service" },
      ],
    },

    packs: {
      eyebrow: "Bag size",
      title: "One bag size, ordered in multiples",
      sub: "We pack a single standard bag so weight and quality stay consistent on every order. Scale up in multiples of 25 kg to match your outlet's stock room, and rate improves with committed monthly volume rather than one-off order size.",
      items: [
        { size: "25 kg", for: "Standard bag — the only size we pack" },
        { size: "MOQ", for: "1 bag (25 kg), then any multiple of 25 kg" },
      ],
    },

    calc: {
      eyebrow: "Plan your requirement",
      title: "Rough monthly estimate",
      sub: "Move the sliders for a ballpark monthly consumption figure.",
      roughNote: "Purely a rough estimate — actual requirement may vary. Your quoted rate is confirmed after a trial.",
      outlets: "Number of outlets",
      stations: "Live-fire stations per outlet",
      hours: "Service hours per day",
      assume: "Assumes ~{kg} kg per station-hour, 30 days.",
      kgMonth: "Estimated kg per month",
      perOutlet: "Per outlet / month",
      bagsPerOutlet: "Bags per outlet / month",
      bag: "bag",
      bags: "bags",
      of25kg: "of 25 kg",
      cycle: "Delivery cycle",
      rateCta: "Get your rate",
      monthly: "Monthly",
      fortnightly: "Fortnightly",
      weekly: "Weekly",
      unitKg: "kg",
    },

    coverage: {
      eyebrow: "Delivery coverage",
      title: "Where we deliver today",
      sub: "Despatched by road from the Palladam plant. Cities outside the list below are served on a project basis — ask the India desk.",
      priority: "Next-day / priority",
      standard: "Standard [X]-day",
      onRequest: "On request",
      more: "+ many more across India — just ask",
    },

    steps: {
      eyebrow: "How to start",
      title: "Four steps, no commitment until step three",
      items: [
        { n: "01", title: "Free trial sample", body: "Tell us your station type and we send a sample pack to one outlet. Free — you cover courier only." },
        { n: "02", title: "Kitchen trial", body: "Run it through a normal service week. We check back on burn time, ash volume and staff feedback." },
        { n: "03", title: "Rate contract", body: "Agree a locked rate against committed monthly volume, with GST invoicing and credit terms." },
        { n: "04", title: "Scheduled supply", body: "Fixed delivery cycle to each outlet. One point of contact for reorders, claims and changes." },
      ],
    },

    faq: {
      eyebrow: "India desk FAQ",
      title: "Common questions from purchase teams",
      items: [
        {
          q: "What is the minimum order for a single restaurant?",
          a: "There's no fixed minimum — we work with kitchens of every size, from a single-outlet trial pack to multi-city chains. Tell us your requirement and we'll fit a plan around it.",
        },
        {
          q: "Do you give credit terms?",
          a: "Credit terms are assessed per account based on volume and order history. Contact the India desk and we'll work out terms that suit your business.",
        },
        {
          q: "Is this the same product you export?",
          a: "Yes — identical grades from the same production line and the same ISO 9001 certified plant in Palladam. Nothing is downgraded for the domestic market.",
        },
        {
          q: "Can we get our own branding on the packs?",
          a: "Yes, we offer private-label and custom-branded packing. Contact us with your requirement and we'll walk you through artwork, packing and MOQ for your brand.",
        },
        {
          q: "What if a delivery arrives damaged or short?",
          a: "Just get in touch with the India desk with photographs — verified claims are replaced on the next despatch or credited, no back-and-forth needed.",
        },
      ],
    },

    form: {
      eyebrow: "India enquiry",
      title: "India enquiry form",
      sub: "We reply the same working day with an indicative rate and a trial sample offer.",
      businessName: "Business name",
      businessNamePlaceholder: "e.g. Spice Route Hospitality Pvt Ltd",
      monthly: "Estimated monthly requirement",
      monthlyOptions: [
        "Under 100 kg",
        "100–500 kg",
        "500 kg – 2 MT",
        "2–10 MT",
        "Over 10 MT",
        "Not sure yet",
      ],
      city: "Delivery city",
      cityPlaceholder: "e.g. Bengaluru",
      contact: "Contact person",
      contactPlaceholder: "Full name",
      phone: "Phone / WhatsApp",
      email: "Email",
      emailPlaceholder: "name@company.com",
      optional: "(optional)",
      notes: "Anything else",
      notesPlaceholder: "Service volumes, timelines, existing supplier issues",
      sampleOptIn: "Send me a free trial sample pack along with the quote.",
      consentA: "I agree to Flareon contacting me about this enquiry and accept the",
      consentLink: "privacy policy",
      submit: "Send enquiry to the India desk",
      sentTitle: "Enquiry sent.",
      sentBody:
        "Your enquiry has reached the India desk by email. We reply the same working day.",
      sentWhatsappNudge: "For the fastest response, also send it on WhatsApp",
      sentWhatsappNudgeNote: "One tap opens WhatsApp with your enquiry already filled in — just hit send.",
      sentWhatsapp: "Share via WhatsApp",
      sentEdit: "Edit the enquiry",
      errorTitle: "Couldn't send that.",
      errorBody:
        "Something went wrong submitting the form. Please try again, or reach us directly on WhatsApp.",
      errorRetry: "Try again",
    },

    desk: {
      title: "India desk",
      body: "Prefer to talk? Reach the domestic sales team directly — fastest during IST business hours.",
      whatsapp: "WhatsApp / call",
      email: "Email",
      emailValue: "[india@flareonbbq.com]",
      plant: "Plant & despatch",
      plantValue: "Palladam, Tamil Nadu",
      hours: "Desk hours",
      hoursValue: "24x7",
      exportEyebrow: "Exporting instead?",
      exportBody: "Container loads, FOB/CIF and port delivery are handled separately.",
      exportCta: "Go to the Export Desk",
    },
  },

  // ---- Legal pages ----
  // Blocks render in order: { h } heading, { sub } sub-heading, { p } paragraph,
  // { list } bullets, { table } two-column table. [Bracketed] text renders as a
  // placeholder chip until a real value replaces it.
  legal: {
    updated: "Last updated: [DATE]",
    contents: "On this page",

    privacy: {
      navLabel: "Privacy Policy",
      eyebrow: "Legal",
      title: "Privacy Policy",
      sub: "How Flareon Briquettes collects, uses and protects the information you share through this website or with our export desk.",
      blocks: [
        { h: "1. Who we are" },
        {
          p: 'This website is operated by Flareon Briquettes ("Flareon", "we", "us", "our"), a coconut shell charcoal briquette manufacturer and exporter based at 3/147 Muthandipalayam, K.Ayyampalayam, Palladam, Tamil Nadu, India 641664.',
        },
        {
          list: [
            "Registered entity name: [LEGAL ENTITY NAME]",
            "Company / GST registration number: [GSTIN]",
            "Import Export Code (IEC): 3209000573",
          ],
        },
        {
          p: "For any privacy-related question or request, contact us at care@flareonbbq.com or by WhatsApp at +91 99441 33441.",
        },
        { sub: "Grievance Officer" },
        {
          p: "As required under Indian data protection rules, we have designated a Grievance Officer to handle privacy complaints and requests:",
        },
        {
          list: [
            "Name: [GRIEVANCE OFFICER NAME]",
            "Email: [GRIEVANCE OFFICER EMAIL]",
            "Response time: we aim to acknowledge requests within [X] business days.",
          ],
        },

        { h: "2. What information we collect" },
        { p: "We collect information in the following ways:" },
        { sub: "Information you give us directly" },
        {
          list: [
            "When you submit an enquiry through the Export Desk or the India desk (briquette quote form, activated carbon form or HORECA enquiry form): full name, company name, business email, WhatsApp/phone number, destination port or delivery city, product and packaging preferences, and any notes you write in the form.",
            "When you email or message us directly: your email address, phone number, and the content of your message.",
          ],
        },
        { sub: "Information collected automatically" },
        {
          list: [
            "Standard technical data such as IP address, browser type, device type, and pages visited, collected through normal website operation and hosting logs.",
            "[If applicable: name of analytics tool, e.g. Google Analytics] — see the Cookie note below.",
          ],
        },
        {
          p: "We do not knowingly collect payment card details on this website; all payment terms (T/T or Letter of Credit) are arranged separately, bank to bank.",
        },

        { h: "3. Why we use your information" },
        {
          table: {
            head: ["Purpose", "What we use"],
            rows: [
              ["Respond to your export or product enquiry", "Contact details, form content"],
              ["Prepare and send an FOB/CIF quotation", "Contact details, destination port, container/grade selection"],
              ["Arrange a sample shipment or factory visit", "Contact details, address (if provided)"],
              ["Maintain business records for accounting and export compliance", "Contact and order details"],
              ["Improve the website", "Technical/analytics data only"],
            ],
          },
        },
        {
          p: "We do not sell your personal information, and we do not use it for unrelated marketing without your separate consent.",
        },

        { h: "4. Legal basis for processing (for visitors in the EU / UK / EEA)" },
        {
          p: "If you are located in the European Union, United Kingdom, or European Economic Area, we process your information on the following bases:",
        },
        {
          list: [
            "Consent — when you submit an enquiry form, you are actively choosing to share your details with us for that purpose.",
            "Legitimate interest — to respond to business enquiries and maintain our commercial relationship with you, in a way that does not override your rights.",
            "Contract performance — once an order is agreed, to fulfil that order.",
          ],
        },

        { h: "5. How long we keep your information" },
        {
          p: "We retain enquiry and order-related information for as long as needed to respond to your enquiry, fulfil any resulting order, and meet our accounting and export record-keeping obligations under Indian law, currently [X years]. You can ask us to delete your information sooner, subject to section 8 below.",
        },

        { h: "6. Who we share your information with" },
        { p: "We do not sell or rent your personal information. We may share it with:" },
        {
          list: [
            "Freight forwarders, customs agents, or shipping lines, only once an order is confirmed and only the details needed to ship your container.",
            "Our bank, for T/T or Letter of Credit processing.",
            "[Web hosting, email or CRM providers in use — e.g. Vercel, Google Workspace], who process data on our behalf under their own security and confidentiality terms.",
            "Government or regulatory authorities, where required by law.",
          ],
        },

        { h: "7. International data transfers" },
        {
          p: "We are based in India. If you are contacting us from the EU, UK, or elsewhere outside India, your information will be transferred to and processed in India. Where required, we rely on [Standard Contractual Clauses / other transfer mechanism] to protect your information during this transfer.",
        },

        { h: "8. Your rights" },
        { p: "Depending on where you are located, you may have the right to:" },
        {
          list: [
            "Ask what personal information we hold about you",
            "Ask us to correct inaccurate information",
            "Ask us to delete your information",
            "Object to how we use your information",
            "Ask for a copy of your information in a portable format",
            "Withdraw consent at any time, where consent is the basis for processing",
          ],
        },
        {
          p: "To exercise any of these rights, contact care@flareonbbq.com. If you are in the EU/EEA, you also have the right to lodge a complaint with your local data protection authority.",
        },

        { h: "9. Security" },
        {
          p: "We take reasonable technical and organisational measures to protect the information you share with us. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
        },

        { h: "10. Children's privacy" },
        {
          p: "This website is intended for business use and is not directed at children. We do not knowingly collect information from anyone under 18.",
        },

        { h: "11. Cookies" },
        {
          p: "This website uses only the technical cookies and local storage necessary for it to function — for example, to remember your selected language and market. We do not use advertising or tracking cookies, and no non-essential data is collected without your consent.",
        },

        { h: "12. Changes to this policy" },
        {
          p: 'We may update this policy from time to time. The "Last updated" date at the top will reflect the most recent revision. Material changes will be reflected here before they take effect.',
        },

        { h: "13. Contact us" },
        {
          p: "Flareon Briquettes · 3/147 Muthandipalayam, K.Ayyampalayam, Palladam, Tamil Nadu, India 641664. Email: care@flareonbbq.com · WhatsApp: +91 99441 33441.",
        },
      ],
    },

    terms: {
      navLabel: "Terms of Sale",
      eyebrow: "Legal",
      title: "Terms of Sale",
      sub: "The commercial terms that apply to every order placed with Flareon Briquettes, whether through the Export Desk, the India desk, email or WhatsApp.",
      blocks: [
        { h: "1. Scope" },
        {
          p: "These Terms of Sale apply to every order placed with Flareon Briquettes, whether submitted through the website Export Desk, the India desk, by email, or by WhatsApp, and take precedence over any terms proposed by the buyer unless we agree to those terms in writing.",
        },

        { h: "2. Quotations" },
        {
          p: "Prices quoted are indicative FOB/CIF prices in [currency, e.g. USD] and are valid for [X days] from the date of quotation unless stated otherwise. Final pricing is confirmed in a written proforma invoice before production begins.",
        },

        { h: "3. Minimum order and acceptance" },
        {
          list: [
            "Minimum export order quantity: one 20ft FCL container (approximately 15 tons).",
            "An order is confirmed only once we issue a proforma invoice and receive either the agreed advance payment or a confirmed, workable Letter of Credit.",
            "We reserve the right to decline any order.",
          ],
        },

        { h: "4. Pricing terms and Incoterms" },
        {
          p: "We quote and ship under FOB (Free On Board) or CIF (Cost, Insurance and Freight) terms, Incoterms [2020], from Tuticorin Port, Chennai Port or Cochin Port, India. The applicable Incoterm will be stated on every proforma invoice.",
        },

        { h: "5. Payment terms" },
        {
          table: {
            head: ["Method", "Terms"],
            rows: [
              ["T/T (Telegraphic Transfer)", "[e.g. 30% advance, 70% against shipping documents]"],
              [
                "Irrevocable Letter of Credit (L/C)",
                "Available from the first container. L/C must be confirmed and workable at a bank acceptable to us, opened at least [X days] before the requested shipment date.",
              ],
            ],
          },
        },
        { p: "Bank charges outside India are borne by the buyer unless otherwise agreed in writing." },

        { h: "6. Delivery and lead time" },
        {
          p: "Estimated production and shipment lead time is [X weeks] from order confirmation. Sailing times shown on the website are indicative and depend on carrier schedules; we are not liable for shipping line delays once the container has been handed over to the carrier.",
        },

        { h: "7. Transfer of title and risk" },
        {
          p: "Title and risk in the goods pass to the buyer in accordance with the agreed Incoterm (FOB or CIF) stated on the proforma invoice — generally once the goods pass the ship's rail at the loading port.",
        },

        { h: "8. Product specification and tolerance" },
        {
          p: "Goods are supplied to the grade specification (ash content, moisture, burn time, fixed carbon) confirmed on the order. Reasonable manufacturing tolerances of [± X%] apply to each specification and do not constitute a defect.",
        },

        { h: "9. Inspection and claims" },
        {
          p: "The buyer should inspect the goods promptly on arrival. Any claim relating to quantity, quality, or specification must be raised in writing, with supporting photographs or an independent inspection report, within [X days] of the container's arrival at the destination port. Claims raised after this period may not be accepted.",
        },

        { h: "10. Rejected goods and remedies" },
        {
          p: "Where a claim is validated, our sole obligation is, at our option, to replace the non-conforming goods on the next available shipment or issue a credit note for the affected quantity. We are not liable for indirect, incidental, or consequential losses, including loss of profit or loss of contract, to the maximum extent permitted by law.",
        },

        { h: "11. Force majeure" },
        {
          p: "Neither party is liable for delay or failure to perform caused by events beyond its reasonable control, including natural disaster, strike, port congestion, government restriction, or shipping line disruption. The affected party will notify the other promptly and resume performance as soon as reasonably possible.",
        },

        { h: "12. Cancellation" },
        {
          p: "Orders may not be cancelled once production has commenced, except by mutual written agreement. Any advance payment received may be forfeited to cover costs already incurred.",
        },

        { h: "13. Private label / OEM and intellectual property" },
        {
          p: "Where the buyer supplies artwork, packaging design, or a brand name for private label production, the buyer confirms it holds the right to use that artwork or brand and indemnifies Flareon against any third-party claim arising from its use. Flareon retains no rights to buyer-supplied branding beyond producing the agreed order.",
        },

        { h: "14. Export compliance" },
        {
          p: "The buyer is responsible for compliance with all import regulations, duties, and permits in the destination country. Flareon will provide standard export documentation (commercial invoice, packing list, certificate of origin, and the certificates listed on our Specs & Certs page) but is not responsible for destination-country customs delays.",
        },

        { h: "15. Domestic (India) orders" },
        {
          list: [
            "Domestic supply is billed on GST invoice in INR against the rate contract in force on the order date.",
            "Credit terms, where granted, are [Net X days] from invoice date; delayed payment may suspend the delivery schedule.",
            "Short or damaged delivery must be reported within [X days] of receipt with photographs.",
          ],
        },

        { h: "16. Governing law and disputes" },
        {
          p: "These Terms of Sale are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts of [Coimbatore, Tamil Nadu], or resolved by arbitration seated in [city] under the [Arbitration and Conciliation Act, 1996], as agreed on the order.",
        },

        { h: "17. Changes to these terms" },
        {
          p: "We may update these Terms of Sale from time to time. The version in effect at the date an order is confirmed applies to that order.",
        },

        { h: "18. Contact" },
        {
          p: "Flareon Briquettes · 3/147 Muthandipalayam, K.Ayyampalayam, Palladam, Tamil Nadu, India 641664. Email: enquiry@flareonbbq.com · WhatsApp: +91 99441 33441.",
        },
      ],
    },
  },

  footer: {
    exportTerms: "Export terms",
    navigate: "Navigate",
    shippingTo: "Shipping now to",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Sale",
  },

  // ---- Content that also carries data values (site.js holds the numbers) ----

  metrics: {
    capacity: "Annual export output",
    burn: "Guaranteed burn duration",
    power: "Captive windmill power",
    chem: "Chemicals — food-grade binder only",
  },

  pillars: [
    {
      tag: "Chemical-free standard",
      title: "100% food-grade binders",
      body: "Pure potato starch binder only. Zero barium nitrate, zero sodium nitrate, zero chemical accelerants — so nothing carcinogenic comes off the coal and into the food.",
      stat: "0 chemical additives",
    },
    {
      tag: "UV solar drying yard",
      title: "55,000 sq. ft UV covered yard",
      body: "Natural solar drying under UV-trapping sheets. Multi-day slow drying prevents internal micro-cracks — which is what gives the briquette its long, steady, non-spitting burn.",
      stat: "55,000 sq. ft",
    },
    {
      tag: "Clean renewable power",
      title: "3.5 MW captive windmills",
      body: "We generate 3.5 MW of wind energy against a combined plant draw of 2.8 MW. Every container that leaves Palladam is manufactured carbon-negative.",
      stat: "3.5 MW vs 2.8 MW draw",
    },
  ],

  processSteps: [
    { title: "Raw shell recovered", body: "Coconut shell waste upcycled straight out of the landfill stream." },
    { title: "Crushing & carbonising", body: "Controlled pyrolysis tuned for high fixed carbon." },
    { title: "Potato starch binding & compacting", body: "High-density hydraulic pressing into pillow, hexagon and cube." },
    { title: "UV solar drying & packing", body: "Multi-day UV drying, then poly-bag sealed against sea humidity." },
  ],

  carbonProcessSteps: [
    { title: "Shell char selection", body: "High fixed-carbon shell charcoal graded and screened before activation." },
    { title: "Steam activation", body: "High-temperature steam activation opens the internal pore structure." },
    { title: "Milling & sieving", body: "Milled to powder or granular mesh grades and sieved to specification." },
    { title: "Testing & packing", body: "Iodine value checked, then sealed into 25 kg moisture-barrier sacks." },
  ],

  productItems: {
    briquettes: {
      name: "Coconut Shell Charcoal Briquettes for BBQ",
      blurb: "Hexagonal, pillow and cube/shisha shapes engineered for commercial barbecue kitchens, shisha lounges and retail supermarket shelves.",
      points: [
        "Extra-long burning time & ready in 20 minutes",
        "Minimal ash residue & uniform, high heat output",
        "Odourless, smokeless & all-natural composition",
        "High density for a longer burn & easy handling",
      ],
      pointsFull: [
        "Extra-long burning time",
        "Minimal ash residue",
        "Odourless & smokeless",
        "Heats up in 20 minutes",
        "All-natural composition",
        "High density for longer burn time",
        "Uniform, high heat output",
        "Easy handling",
        "Lower carbon monoxide emission when compared with wood charcoal",
      ],
      cta: "Request briquette quote",
    },
    "activated-carbon": {
      name: "Activated Carbon",
      blurb: "High-adsorption coconut shell activated carbon for water, air and industrial filtration — milled on the same line that feeds our briquette press.",
      points: ["Coming soon"],
      cta: "Request quote",
    },
  },

  briquetteShapes: {
    hexagon: {
      name: "Hexagonal",
      points: [
        "Hollow core draws air through the centre for a faster, cleaner light",
        "Flat faces stack tight — highest payload per carton",
        "Longest steady burn of the range, built for commercial grills",
      ],
    },
    pillow: {
      name: "Pillow",
      points: [
        "The familiar supermarket BBQ shape buyers already recognise",
        "Ashes over evenly for direct grilling and smoking",
        "Rounded edges resist chipping in retail handling",
      ],
    },
    cube: {
      name: "Cube/Shisha",
      points: [
        "Cut to shisha bowl sizes — 22 mm, 25 mm and 26 mm",
        "Dense, low-ash body sized for a full session",
        "Sharp edges catch quickly on a lighting grill",
      ],
    },
  },

  grades: {
    Standard: { name: "Standard", use: "Volume BBQ retail" },
    Premium: { name: "Premium", use: "HORECA & supermarket private label" },
    "Super Premium": { name: "Super Premium", use: "Shisha lounges & specialty export" },
    price: "Indicative band on enquiry",
  },

  // The BV standard column is numeric and read straight from src/data/site.js;
  // only the parameter name and the two descriptive cells are translated.
  benchmark: {
    columns: ["Parameter tested", "FLAREON coconut shell", "Leading wood charcoal", "BV standard"],
    rows: [
      ["Volatile matter (%)", "19.8% — clean heat", "30.2% — high fumes"],
      ["Ash content (%)", "11.5% — minimal ash", "20.1% — heavy ash"],
      ["Moisture content (%)", "4.8%", "5.9%"],
      ["Burn duration", "Extra-long", "1.5 – 2 hours"],
      ["Time to ash-over", "50+ minutes", "~30 minutes"],
    ],
  },

  certificates: [
    {
      tag: "ISO certificate",
      title: "ISO 9001:2015 (TÜV SÜD South Asia)",
      body: "Quality management system certified for the manufacture and supply of coconut shell charcoal briquettes, and trading of BBQ grills and accessories.",
      cta: "Download ISO 9001 PDF",
    },
    {
      tag: "Lab test report",
      title: "Bureau Veritas Comparative Study",
      body: "Third-party combustion comparison against Kingsford wood charcoal: volatile matter, ash, moisture, ignition, ash-over and time at cooking temperature.",
      cta: "Download Bureau Veritas report",
    },
    {
      tag: "Safety data",
      title: "Material Safety Data Sheet (MSDS)",
      body: "Full 16-section safety data sheet for customs clearance and ocean freight, including handling, transport class and physical properties.",
      cta: "Download MSDS sheet",
    },
    {
      tag: "Export registration",
      title: "Coconut Development Board RCMC",
      body: "Registration cum Membership Certificate issued under the Foreign Trade Policy, covering coconut shell activated carbon and charcoal briquettes.",
      cta: "Download RCMC certificate",
    },
  ],

  oem: [
    { title: "Custom box printing", body: "Full CMYK artwork, barcode compliance and your brand logo on every carton." },
    { title: "Palletization options", body: "Palletized, non-palletized / loose loading, palletized + stretch wrapped, or palletized + strapped & wrapped." },
    { title: "Moisture protection", body: "Inner poly-bag lining rated against sea freight humidity." },
  ],

  exportTerms: [
    { k: "Loading ports", v: "Tuticorin Port / Chennai Port / Cochin Port, India" },
    { k: "Minimum order (MOQ)", v: "Flexible — from 1 × 20ft FCL" },
    { k: "Payment terms", v: "T/T wire transfer & irrevocable L/C" },
    { k: "Custom packaging", v: "Private label packaging to your spec, palletized on request" },
  ],

  containers: {
    "20ft": { label: "20ft FCL", tons: "~15 tons", pallets: "~19 pallets" },
    "40hc": { label: "40ft High Cube", tons: "~26 tons", pallets: "~33 pallets" },
  },

  ports: {
    "Jebel Ali (UAE)": "Jebel Ali (UAE)",
    "Malé (Maldives)": "Malé (Maldives)",
    "Shanghai (China)": "Shanghai (China)",
    "Yokohama (Japan)": "Yokohama (Japan)",
    "Rotterdam (Netherlands)": "Rotterdam (Netherlands)",
    "Hamburg (Germany)": "Hamburg (Germany)",
    "Dublin (Ireland)": "Dublin (Ireland)",
    "Vancouver (Canada)": "Vancouver (Canada)",
    "Other / custom port": "Other / custom port",
  },

  destinations: {
    Russia: "Russia",
    Netherlands: "Netherlands",
    Guatemala: "Guatemala",
    "New Zealand": "New Zealand",
    "Saudi Arabia": "Saudi Arabia",
    UAE: "UAE",
  },

  faqs: [
    {
      q: "What is your minimum order quantity?",
      a: "One 20ft FCL — roughly 15 tons. We do not force 18-ton-plus FCL-only terms, so a first trial container stays affordable. Repeat buyers usually move to 40ft high cube at ~26 tons.",
    },
    {
      q: "Do you show pricing?",
      a: "We publish an indicative FOB band per grade on enquiry, quoted the same day. Final FOB/CIF depends on grade, shape, packaging and destination port — submit the container form and you get a real number, not a callback request.",
    },
    {
      q: "Which payment terms do you accept?",
      a: "T/T telegraphic transfer and irrevocable Letter of Credit. L/C is available from the first container for buyers who need it.",
    },
    {
      q: "Can I get a free sample before ordering?",
      a: "Yes. We ship a free sample pack — briquettes in your chosen shape plus lighter cubes — with courier at cost. Full lab COA travels with the sample.",
    },
    {
      q: "Do you do private label / OEM?",
      a: "Yes. Full CMYK carton printing, barcode compliance, your logo, and packaging sized to your spec, palletized on request. Send artwork or request our dieline template.",
    },
    {
      q: "Can we visit the factory?",
      a: "Buyers are welcome at the Palladam plant, Tirupur — 220 km from Tuticorin Port. Tell us your dates on the enquiry form and we arrange the visit.",
    },
  ],

  partnerNote: [
    "Over the years I've built this business on lasting relationships, global markets, and value created through trust, consistency and innovation — integrity and reliability first, always.",
    "🤝 We work with importers, wholesalers, distributors, retailers and industrial buyers across international and local markets, on terms built for the long run.",
    "🌱 Our range covers premium coconut shell charcoal briquettes in hexagonal, pillow and cube/shisha shapes, made to meet the needs of global industries.",
    "♻️ Sustainability sits at the heart of it: turning renewable shell waste into high-performance products helps our buyers move to cleaner energy.",
    "📩 Whether you need a dependable supplier or want to explore an opportunity, I'd be glad to connect. Let's build sustainable partnerships and create value together.",
  ],

  sustainability: {
    headline: "Carbon-negative by design",
    body: "Every tonne of Flareon coconut shell charcoal briquettes displaces wood charcoal that would otherwise come from felled trees. Production runs on captive windmill power — 3.5 MW generated against a 2.8 MW plant draw — so the surplus alone makes this export line carbon-negative before a single briquette leaves the yard.",
    stats: [
      "Annual export output",
      "Captive windmill power generated",
      "Surplus power banked / exported (3.5 MW − 2.8 MW draw)",
      "Agricultural waste feedstock, zero deforestation",
    ],
  },

  galleryCaptions: [
    "Jumbo bags of shell charcoal moved into the yard",
    "Flames rising off hexagonal briquettes",
    "Watching the screening conveyor for undersize",
    "Branded 25 kg sacks stacked in the covered warehouse",
    "Milled coconut shell carbon, close up",
    "The hydraulic briquette press mid-run",
    "Cubes glowing on a lighting grill",
    "Filling a 25 kg sack at the weighing hopper",
    "Printed retail bags stacked for export",
    "Pillow briquettes laid out to dry",
    "Shell charcoal chips and milled carbon, side by side",
    "Dried briquettes dropping to the transfer belt",
    "An even ember bed — extra-long, steady heat",
    "Fresh briquettes graded into drying crates",
    "Warehouse aisle on the despatch side",
    "The screening line running late in the shift",
    "Press line crew during a production shift",
    "Fully lit cubes on a foiled bowl",
    "Levelling a tray before it goes to the yard",
    "A wall of packed sacks awaiting a container",
    "Quality check on the screening bed",
    "Carbon conveyor feeding the press",
    "Briquettes holding heat at full burn",
  ],
};
