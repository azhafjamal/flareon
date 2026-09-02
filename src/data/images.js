// Photography registry — every real asset in /public/images, with the alt text
// it should always ship with. Pages import from here, never hard-code a path.

const img = (src, alt) => ({ src: `/images/${src}`, alt });

export const media = {
  brand: {
    // Full lockup, and the flame mark cropped out of it for the nav/footer.
    logo: img("logo-flareon.jpg", "FLAREON — get grillin'"),
    mark: img("logo-mark.jpg", "FLAREON flame mark"),
  },

  // Hot product beauty shots
  fire: {
    hero: img(
      "hero-coal-flame.jpg",
      "Flareon coconut charcoal burning down to an even ember bed"
    ),
    hexagon: img(
      "flame-hexagon.jpg",
      "Flames rising off hexagonal coconut shell briquettes in a grill"
    ),
    coals: img(
      "coals-glowing.jpg",
      "Close-up of glowing Flareon briquettes at full heat"
    ),
    shisha: img(
      "shisha-cubes-grill.jpg",
      "Shisha cubes glowing red on a lighting grill"
    ),
    cubesLit: img(
      "lighter-cubes-foil.jpg",
      "Four coconut charcoal cubes fully lit on a foiled shisha bowl"
    ),
  },

  // Studio shots of the shapes we press
  shapes: {
    pillow: img("briquette-pillow.jpg", "Pillow-shaped coconut charcoal briquettes"),
    hexagon: img("briquette-hexagon.jpg", "Hexagonal coconut charcoal briquette logs"),
    cube: img("briquette-cube.jpg", "Cube coconut charcoal briquettes stacked"),
    round: img("briquette-round.jpg", "Round honeycomb coconut charcoal briquettes"),
  },

  // Raw material & by-product
  material: {
    rawSacks: img(
      "raw-shell-sacks.jpg",
      "Open sacks of coconut shell charcoal chips and carbon powder"
    ),
    powder: img("carbon-powder.jpg", "Milled coconut shell carbon powder"),
    carbonSack: img(
      "activated-carbon-sack.jpg",
      "25 kg sack of activated carbon powder, made in India"
    ),
  },

  // The Palladam plant
  plant: {
    machine: img(
      "briquette-machine.jpg",
      "Operator running the hydraulic briquette press at the Palladam plant"
    ),
    machineTeam: img(
      "briquette-machine-team.jpg",
      "Plant team working the briquette press line"
    ),
    conveyorCrates: img(
      "conveyor-drying-crates.jpg",
      "Carbon conveyor feeding the press beside stacked drying crates"
    ),
    sorting: img(
      "sorting-crates.jpg",
      "Workers grading fresh briquettes into drying crates"
    ),
    dryingTray: img(
      "drying-tray-hands.jpg",
      "Freshly pressed pillow briquettes laid out on a drying tray"
    ),
    trayLeveling: img(
      "tray-leveling.jpg",
      "Operator levelling a tray of green briquettes before drying"
    ),
    screening: img(
      "screening-conveyor.jpg",
      "Operator watching briquettes cross the screening conveyor"
    ),
    conveyorDrop: img(
      "conveyor-drop.jpg",
      "Dried briquettes dropping from the screen onto the transfer belt"
    ),
    conveyorNight: img(
      "conveyor-night.jpg",
      "Screening line running inside the plant"
    ),
    screeningCheck: img(
      "screening-check.jpg",
      "Quality check on the screening bed mid-run"
    ),
    bagging: img(
      "bagging-hopper.jpg",
      "Operator filling a 25 kg Flareon sack at the weighing hopper"
    ),
  },

  // Warehouse, packing and despatch
  logistics: {
    yardLoading: img(
      "yard-loading.jpg",
      "Tractor loader moving jumbo bags of coconut shell charcoal in the plant yard"
    ),
    warehouseFlareon: img(
      "warehouse-flareon-sacks.jpg",
      "Branded Flareon 25 kg charcoal sacks stacked in the covered warehouse"
    ),
    warehouseAisle: img(
      "warehouse-aisle.jpg",
      "Warehouse aisle between stacked charcoal sacks awaiting despatch"
    ),
    sackWall: img(
      "warehouse-sack-wall.jpg",
      "Wall of packed charcoal sacks ready for container loading"
    ),
    retailBags: img(
      "retail-bags.jpg",
      "Printed retail Flareon barbecue charcoal bags stacked for export"
    ),
    port: img(
      "port-night.jpg",
      "Container vessel loading at berth under gantry cranes at night"
    ),
    portDusk: img(
      "g.jpg",
      "Container vessel alongside the quay at dusk, gantry cranes working the stacks"
    ),
  },

  // Domestic HORECA supply — Indian kitchens and live-fire service
  horeca: {
    grill: img(
      "a.jpg",
      "Cuts searing over an open charcoal grill during service"
    ),
  },

  people: {
    lead: img("leadership-portrait.jpg", "M Gowtham, Managing Partner, Flareon Briquettes"),
  },

  // Sustainability + proof imagery
  nature: {
    grove: img(
      "coconut-grove.jpg",
      "Coconut plantation — the renewable shell waste stream our briquettes are made from"
    ),
  },
  proof: {
    certificates: img(
      "certificates-spread.jpg",
      "Flareon quality certificates and third-party test reports laid out"
    ),
  },
};

// Homepage / company plant strip — ordered as the process actually runs.
export const plantStrip = [
  media.logistics.yardLoading,
  media.plant.conveyorCrates,
  media.plant.machine,
  media.plant.dryingTray,
  media.plant.screening,
  media.logistics.warehouseFlareon,
];

// Gallery page — the documentary set (plant, material, packing, product in use).
// Studio shape shots and the carbon sack live on the Products page instead.
// `ratio` matches how the photo was actually shot — portrait frames stay
// portrait instead of being cropped square. Order is deliberately interleaved so
// no two shots of the same subject (fire, warehouse, conveyor) sit side by side.
export const gallery = [
  { ...media.logistics.yardLoading, ratio: "wide", caption: "Jumbo bags of shell charcoal moved into the yard" },
  { ...media.fire.hexagon, ratio: "square", caption: "Flames rising off hexagonal briquettes" },
  { ...media.plant.screening, ratio: "tall", caption: "Watching the screening conveyor for undersize" },
  { ...media.logistics.warehouseFlareon, ratio: "wide", caption: "Branded 25 kg sacks stacked in the covered warehouse" },
  { ...media.material.powder, ratio: "wide", caption: "Milled coconut shell carbon, close up" },
  { ...media.plant.machine, ratio: "wide", caption: "The hydraulic briquette press mid-run" },
  { ...media.fire.shisha, ratio: "square", caption: "Cubes glowing on a lighting grill" },
  { ...media.plant.bagging, ratio: "tall", caption: "Filling a 25 kg sack at the weighing hopper" },
  { ...media.logistics.retailBags, ratio: "wide", caption: "Printed retail bags stacked for export" },
  { ...media.plant.dryingTray, ratio: "wide", caption: "Pillow briquettes laid out to dry" },
  { ...media.material.rawSacks, ratio: "wide", caption: "Shell charcoal chips and milled carbon, side by side" },
  { ...media.plant.conveyorDrop, ratio: "tall", caption: "Dried briquettes dropping to the transfer belt" },
  { ...media.fire.hero, ratio: "cinema", caption: "An even ember bed — four hours of steady heat" },
  { ...media.plant.sorting, ratio: "wide", caption: "Fresh briquettes graded into drying crates" },
  { ...media.logistics.warehouseAisle, ratio: "wide", caption: "Warehouse aisle on the despatch side" },
  { ...media.plant.conveyorNight, ratio: "tall", caption: "The screening line running late in the shift" },
  { ...media.plant.machineTeam, ratio: "wide", caption: "Press line crew during a production shift" },
  { ...media.fire.cubesLit, ratio: "square", caption: "Fully lit cubes on a foiled bowl" },
  { ...media.plant.trayLeveling, ratio: "wide", caption: "Levelling a tray before it goes to the yard" },
  { ...media.logistics.sackWall, ratio: "wide", caption: "A wall of packed sacks awaiting a container" },
  { ...media.plant.screeningCheck, ratio: "tall", caption: "Quality check on the screening bed" },
  { ...media.plant.conveyorCrates, ratio: "wide", caption: "Carbon conveyor feeding the press" },
  { ...media.fire.coals, ratio: "square", caption: "Briquettes holding heat at full burn" },
];

// One photo per manufacturing stage on the Company page. `null` means we have
// no representative shot yet — the card shows a "coming soon" plate instead.
// The briquette line is fully photographed.
export const processImages = [
  media.material.rawSacks,
  media.material.powder,
  media.plant.machineTeam,
  media.plant.dryingTray,
];

// One photo per activated-carbon stage. Stages 01 and 04 are the two we have no
// shot of on this line yet, so they render the plate.
export const carbonProcessImages = [
  null,
  media.plant.conveyorCrates,
  media.material.powder,
  null,
];

// Indian hotel, restaurant and catering groups already buying from the plant.
// Logos keep the filenames they were supplied under.
export const clientLogos = [
  { src: "/images/clients/d.jpg", alt: "Barbeque Nation" },
  { src: "/images/clients/b.jpg", alt: "Absolute Barbecues" },
  { src: "/images/clients/e.jpg", alt: "Oberoi Hotels & Resorts" },
  { src: "/images/clients/f.jpg", alt: "Radisson Blu" },
  { src: "/images/clients/c.jpg", alt: "Smoke Hub" },
];

export default media;
