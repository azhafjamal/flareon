// Single source of truth for every factual claim on the site.
// Edit here — pages read from this file.

export const company = {
  name: "Flareon Briquettes",
  brand: "FLAREON",
  tagline: "get grillin'",
  address:
    "3/147 Muthandipalayam, K.Ayyampalayam, Palladam, Tamil Nadu, India-641664",
  footerAddress:
    "Flareon Briquettes — 3/147 Muthandipalayam, Palladam, Tirupur, Tamil Nadu, India-641664",
  plant: "Palladam Plant, Palladam, Tamil Nadu, India",
  whatsapp: "+91 99441 33441",
  whatsappHref: "https://wa.me/919944133441",
  emails: ["enquiry@flareonbbq.com", "care@flareonbbq.com"],
  managingPartner: {
    name: "M Gowtham",
    role: "Managing Partner",
    email: "gowtham@flareonbbq.com",
  },
  socials: [
    { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/919944133441" },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/flareon-briquette/",
    },
    {
      key: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/flareonbbq/",
    },
  ],
  ports: "Tuticorin Port (220 km) / Chennai Port (450 km)",
};

// Section 2 of the homepage wireframe.
export const metrics = [
  { key: "capacity", value: "5,000 MT", label: "Annual export output" },
  { key: "burn", value: "4", unit: "hours", label: "Guaranteed burn duration" },
  { key: "power", value: "3.5 MW", label: "Captive windmill power" },
  { key: "chem", value: "0%", label: "Chemicals — food-grade binder only" },
];

// Company page — the three infrastructure pillars.
export const pillars = [
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
];

export const processSteps = [
  {
    n: "01",
    title: "Raw shell recovered",
    body: "Coconut shell waste upcycled straight out of the landfill stream.",
  },
  {
    n: "02",
    title: "Crushing & carbonising",
    body: "Controlled pyrolysis tuned for high fixed carbon.",
  },
  {
    n: "03",
    title: "Potato starch binding & compacting",
    body: "High-density hydraulic pressing into pillow, hexagon and cube.",
  },
  {
    n: "04",
    title: "UV solar drying & packing",
    body: "Multi-day UV drying, then poly-bag sealed against sea humidity.",
  },
];

// The two lines we actually make. Briquettes ship today; activated carbon is
// announced but not yet orderable, so its CTA stays disabled.
export const products = [
  {
    id: "briquettes",
    name: "Coconut Shell Charcoal Briquettes for BBQ",
    blurb:
      "Hexagonal, pillow, cube and honeycomb shapes engineered for commercial barbecue kitchens, shisha lounges and retail supermarket shelves.",
    // Condensed to four lines for the homepage card; the full nine-point list
    // lives on the Products page.
    points: [
      "4+ hours burning time & ready in 20 minutes",
      "Minimal ash residue & uniform, high heat output",
      "Odourless, smokeless & all-natural composition",
      "High density for a longer burn & easy handling",
    ],
    pointsFull: [
      "4+ hours burning time",
      "Minimal ash residue",
      "Odourless & smokeless",
      "Heats up in 20 minutes",
      "All-natural composition",
      "High density for longer burn time",
      "Uniform, high heat output",
      "Easy handling",
      "Lower carbon monoxide production when compared with wood charcoal",
    ],
    cta: "Request briquette quote",
    available: true,
  },
  {
    id: "activated-carbon",
    name: "Activated Carbon",
    blurb:
      "High-adsorption coconut shell activated carbon for water, air and industrial filtration — milled on the same line that feeds our briquette press.",
    points: ["Coming soon"],
    cta: "Request quote",
    available: false,
  },
];

// Four pressed shapes — three distinguishing points each (Products page cards).
export const briquetteShapes = [
  {
    id: "hexagon",
    name: "Hexagonal",
    points: [
      "Hollow core draws air through the centre for a faster, cleaner light",
      "Flat faces stack tight — highest payload per carton",
      "Longest steady burn of the range, built for commercial grills",
    ],
  },
  {
    id: "pillow",
    name: "Pillow",
    points: [
      "The familiar supermarket BBQ shape buyers already recognise",
      "Ashes over evenly for direct grilling and smoking",
      "Rounded edges resist chipping in retail handling",
    ],
  },
  {
    id: "cube",
    name: "Cube",
    points: [
      "Cut to shisha bowl sizes — 22 mm, 25 mm and 26 mm",
      "Dense, low-ash body sized for a full session",
      "Sharp edges catch quickly on a lighting grill",
    ],
  },
  {
    id: "honeycomb",
    name: "Honeycomb",
    points: [
      "Multi-hole face gives the largest burning surface area",
      "Fastest heat ramp when a grill needs to be up in minutes",
      "Sits flat and stable in stoves and bucket grills",
    ],
  },
];

// End-to-end process for the activated carbon line (Company page).
export const carbonProcessSteps = [
  {
    n: "01",
    title: "Shell char selection",
    body: "High fixed-carbon shell charcoal graded and screened before activation.",
  },
  {
    n: "02",
    title: "Steam activation",
    body: "High-temperature steam activation opens the internal pore structure.",
  },
  {
    n: "03",
    title: "Milling & sieving",
    body: "Milled to powder or granular mesh grades and sieved to specification.",
  },
  {
    n: "04",
    title: "Testing & packing",
    body: "Iodine value checked, then sealed into 25 kg moisture-barrier sacks.",
  },
];

// Grade tiers — the "side-by-side spec + price grade" pattern from Briquette House,
// with an indicative price band instead of "Ask for Price" only.
export const grades = [
  {
    name: "Standard",
    use: "Volume BBQ retail",
    ash: "< 14%",
    moisture: "< 6%",
    burn: "3",
    fixedCarbon: "≥ 72%",
    price: "Indicative band on enquiry",
    highlight: false,
  },
  {
    name: "Premium",
    use: "HORECA & supermarket private label",
    ash: "< 12%",
    moisture: "< 5%",
    burn: "4",
    fixedCarbon: "≥ 78%",
    price: "Indicative band on enquiry",
    highlight: true,
  },
  {
    name: "Super Premium",
    use: "Shisha lounges & specialty export",
    ash: "< 10%",
    moisture: "< 4.8%",
    burn: "4+",
    fixedCarbon: "≥ 82%",
    price: "Indicative band on enquiry",
    highlight: false,
  },
];

// Compliance page — Bureau Veritas comparative benchmark.
export const benchmark = {
  columns: ["Parameter tested", "FLAREON coconut shell", "Leading wood charcoal", "BV standard"],
  rows: [
    ["Volatile matter (%)", "19.8% — clean heat", "30.2% — high fumes", "< 22.0%"],
    ["Ash content (%)", "11.5% — minimal ash", "20.1% — heavy ash", "< 14.0%"],
    ["Moisture content (%)", "4.8%", "5.9%", "< 6.0%"],
    ["Burn duration", "4 hours (240 min)", "1.5 – 2 hours", "> 3 hours"],
    ["Time to ash-over", "50+ minutes", "~30 minutes", "40+ minutes"],
  ],
};

// Each entry points at a real file in /public/docs. `meta` is printed under the
// title so a buyer can verify the certificate number before downloading.
export const certificates = [
  {
    tag: "ISO certificate",
    title: "ISO 9001:2015 (TÜV SÜD South Asia)",
    body: "Quality management system certified for the manufacture and supply of coconut shell charcoal briquettes, and trading of BBQ grills and accessories.",
    meta: "Reg. no. 99 100 20813 · valid 2023-03-20 to 2026-03-19",
    file: "/docs/flareon-iso-9001.pdf",
    cta: "Download ISO 9001 PDF",
  },
  {
    tag: "Lab test report",
    title: "Bureau Veritas Comparative Study",
    body: "Third-party combustion comparison against Kingsford wood charcoal: volatile matter, ash, moisture, ignition, ash-over and time at cooking temperature.",
    meta: "Report (5119)212-0073 Rev. 1 · ASTM D1762",
    file: "/docs/flareon-bureau-veritas.pdf",
    cta: "Download Bureau Veritas report",
  },
  {
    tag: "Safety data",
    title: "Material Safety Data Sheet (MSDS)",
    body: "Full 16-section safety data sheet for customs clearance and ocean freight, including handling, transport class and physical properties.",
    meta: "CAS 1333-86-4 · UN 1362, Hazard Class 4.2, Packing group III",
    file: "/docs/flareon-msds.pdf",
    cta: "Download MSDS sheet",
  },
  {
    tag: "Export registration",
    title: "Coconut Development Board RCMC",
    body: "Registration cum Membership Certificate issued under the Foreign Trade Policy, covering coconut shell activated carbon and charcoal briquettes.",
    meta: "Reg. no. 19203797 · IEC 3209000573 · valid to 2029-03-31",
    file: "/docs/flareon-cdb-rcmc.pdf",
    cta: "Download RCMC certificate",
  },
];

export const oem = [
  {
    title: "Custom box printing",
    body: "Full CMYK artwork, barcode compliance and your brand logo on every carton.",
  },
  {
    title: "Master carton sizes",
    body: "1 kg, 3 kg, 5 kg and 10 kg master box options.",
  },
  {
    title: "Moisture protection",
    body: "Inner poly-bag lining rated against sea freight humidity.",
  },
];

export const exportTerms = [
  { k: "Loading ports", v: "Tuticorin Port / Chennai Port, India" },
  { k: "Minimum order (MOQ)", v: "Flexible — from 1 × 20ft FCL" },
  { k: "Payment terms", v: "T/T wire transfer & irrevocable L/C" },
  { k: "Custom packaging", v: "Private label 1 kg / 3 kg / 10 kg master cartons" },
];

export const containers = [
  { id: "20ft", label: "20ft FCL", tons: "~15 tons", pallets: "~19 pallets" },
  { id: "40hc", label: "40ft High Cube", tons: "~26 tons", pallets: "~33 pallets" },
];

// Indicative sailing times from Tuticorin — powers the live container estimate.
export const destinationPorts = [
  { port: "Jebel Ali (UAE)", transit: "7–10 days" },
  { port: "Malé (Maldives)", transit: "5–8 days" },
  { port: "Shanghai (China)", transit: "18–24 days" },
  { port: "Yokohama (Japan)", transit: "20–26 days" },
  { port: "Rotterdam (Netherlands)", transit: "22–28 days" },
  { port: "Hamburg (Germany)", transit: "23–29 days" },
  { port: "Dublin (Ireland)", transit: "24–30 days" },
  { port: "Vancouver (Canada)", transit: "28–34 days" },
  { port: "Other / custom port", transit: "Quoted on enquiry" },
];

export const activeDestinations = [
  { flag: "🇷🇺", name: "Russia" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇬🇹", name: "Guatemala" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇦🇪", name: "UAE" },
];

// Company page — sustainability band. Deliberately limited to sustainability
// metrics; burn duration and binder claims belong on Products/Specs.
export const sustainability = {
  headline: "Carbon-negative by design",
  body: "Every tonne of Flareon coconut shell charcoal briquettes displaces wood charcoal that would otherwise come from felled trees. Production runs on captive windmill power — 3.5 MW generated against a 2.8 MW plant draw — so the surplus alone makes this export line carbon-negative before a single briquette leaves the yard.",
  stats: [
    { value: "5,000 MT", label: "Annual export output" },
    { value: "3.5 MW", label: "Captive windmill power generated" },
    { value: "0.7 MW", label: "Surplus power banked / exported (3.5 MW − 2.8 MW draw)" },
    { value: "100%", label: "Agricultural waste feedstock, zero deforestation" },
  ],
};

// Homepage closing section — condensed from the managing partner's own note.
export const partnerNote = [
  "Over the years I've built this business on lasting relationships, global markets, and value created through trust, consistency and innovation — integrity and reliability first, always.",
  "🤝 We work with importers, wholesalers, distributors, retailers and industrial buyers across international and local markets, on terms built for the long run.",
  "🌱 Our range covers premium coconut shell charcoal briquettes in hexagonal, pillow, honeycomb and cube shapes, made to meet the needs of global industries.",
  "♻️ Sustainability sits at the heart of it: turning renewable shell waste into high-performance products helps our buyers move to cleaner energy.",
  "📩 Whether you need a dependable supplier or want to explore an opportunity, I'd be glad to connect. Let's build sustainable partnerships and create value together.",
];

export const faqs = [
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
    a: "Yes. Full CMYK carton printing, barcode compliance, your logo, and 1/3/5/10 kg master boxes. Send artwork or request our dieline template.",
  },
  {
    q: "Can we visit the factory?",
    a: "Buyers are welcome at the Palladam plant, Tirupur — 220 km from Tuticorin Port. Tell us your dates on the enquiry form and we arrange the visit.",
  },
];
