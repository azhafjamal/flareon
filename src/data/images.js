// Photography registry — every real asset in /public/images, with the alt text
// it should always ship with. Pages import from here, never hard-code a path.

import { imageSizes } from "./imageSizes";

// Every entry carries its true pixel size so pages can set width/height.
const withSize = (src, alt) => {
  const [width, height] = imageSizes[src] ?? [];
  return { src, alt, width, height };
};

const img = (src, alt) => withSize(`/images/${src}`, alt);

export const media = {
  brand: {
    // The flame mark, cropped out of the full lockup, for the nav/footer.
    mark: img("logo-mark.webp", "FLAREON flame mark"),
  },

  // Hot product beauty shots
  fire: {
    hero: img(
      "hero-coal-flame.webp",
      "Flareon coconut charcoal burning down to an even ember bed"
    ),
    hexagon: img(
      "flame-hexagon.webp",
      "Flames rising off hexagonal coconut shell briquettes in a grill"
    ),
    coals: img(
      "coals-glowing.webp",
      "Close-up of glowing Flareon briquettes at full heat"
    ),
    shisha: img(
      "shisha-cubes-grill.webp",
      "Shisha cubes glowing red on a lighting grill"
    ),
    cubesLit: img(
      "lighter-cubes-foil.webp",
      "Four coconut charcoal cubes fully lit on a foiled shisha bowl"
    ),
    cubesBurning: img(
      "briquette-cubes-fire.webp",
      "Coconut shell charcoal cubes glowing red under open flame"
    ),
  },

  // Studio shots of the shapes we press
  shapes: {
    pillow: img("briquette-pillow.webp", "Pillow-shaped coconut charcoal briquettes"),
    hexagon: img("briquette-hexagon.webp", "Hexagonal coconut charcoal briquette logs"),
    cube: img("briquette-cube.webp", "Cube coconut charcoal briquettes stacked"),
  },

  // Raw material & by-product
  material: {
    rawSacks: img(
      "raw-shell-sacks.webp",
      "Open sacks of coconut shell charcoal chips and carbon powder"
    ),
    powder: img("carbon-powder.webp", "Milled coconut shell carbon powder"),
    carbonGranules: img(
      "activated-carbon-granules.webp",
      "Close-up of coconut shell activated carbon granules"
    ),
    carbonTestingPacking: img(
      "carbon-testing-packing.webp",
      "Testing and packing coconut shell activated carbon"
    ),
    shellCharSelection: img(
      "shell-char-selection.webp",
      "Graded coconut shell char selected for activation"
    ),
  },

  // The Palladam plant
  plant: {
    machine: img(
      "briquette-machine.webp",
      "Operator running the hydraulic briquette press at the Palladam plant"
    ),
    machineTeam: img(
      "briquette-machine-team.webp",
      "Plant team working the briquette press line"
    ),
    conveyorCrates: img(
      "conveyor-drying-crates.webp",
      "Carbon conveyor feeding the press beside stacked drying crates"
    ),
    sorting: img(
      "sorting-crates.webp",
      "Workers grading fresh briquettes into drying crates"
    ),
    dryingTray: img(
      "drying-tray-hands.webp",
      "Freshly pressed pillow briquettes laid out on a drying tray"
    ),
    trayLeveling: img(
      "tray-leveling.webp",
      "Operator levelling a tray of green briquettes before drying"
    ),
    screening: img(
      "screening-conveyor.webp",
      "Operator watching briquettes cross the screening conveyor"
    ),
    conveyorDrop: img(
      "conveyor-drop.webp",
      "Dried briquettes dropping from the screen onto the transfer belt"
    ),
    conveyorNight: img(
      "conveyor-night.webp",
      "Screening line running inside the plant"
    ),
    screeningCheck: img(
      "screening-check.webp",
      "Quality check on the screening bed mid-run"
    ),
    bagging: img(
      "bagging-hopper.webp",
      "Operator filling a 25 kg Flareon sack at the weighing hopper"
    ),
  },

  // Warehouse, packing and despatch
  logistics: {
    yardLoading: img(
      "yard-loading.webp",
      "Tractor loader moving jumbo bags of coconut shell charcoal in the plant yard"
    ),
    warehouseFlareon: img(
      "warehouse-flareon-sacks.webp",
      "Branded Flareon 25 kg charcoal sacks stacked in the covered warehouse"
    ),
    warehouseAisle: img(
      "warehouse-aisle.webp",
      "Warehouse aisle between stacked charcoal sacks awaiting despatch"
    ),
    sackWall: img(
      "warehouse-sack-wall.webp",
      "Wall of packed charcoal sacks ready for container loading"
    ),
    retailBags: img(
      "retail-bags.webp",
      "Printed retail Flareon barbecue charcoal bags stacked for export"
    ),
    port: img(
      "port-night.webp",
      "Container vessel loading at berth under gantry cranes at night"
    ),
  },

  people: {
    md: img("md-portrait.webp", "Sathya Prakash, Managing Director, Flareon Briquettes"),
    lead: img("leadership-portrait.webp", "Gowtham M, Managing Partner, Flareon Briquettes"),
  },

  // Sustainability + proof imagery
  nature: {
    grove: img(
      "coconut-grove.webp",
      "Coconut plantation — the renewable shell waste stream our briquettes are made from"
    ),
  },
  proof: {
    certificates: img(
      "certificates-spread.webp",
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
  { ...media.fire.hero, ratio: "cinema", caption: "An even ember bed — extra-long, steady heat" },
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

// One photo per activated-carbon stage.
export const carbonProcessImages = [
  media.material.shellCharSelection,
  media.plant.conveyorCrates,
  media.material.powder,
  media.material.carbonTestingPacking,
];

// Indian hotel, restaurant and catering groups already buying from the plant.
// Logos keep the filenames they were supplied under.
export const clientLogos = [
  withSize("/images/clients/d.webp", "Barbeque Nation logo"),
  withSize("/images/clients/b.webp", "Absolute Barbecues logo"),
  withSize("/images/clients/e.webp", "Oberoi Hotels & Resorts logo"),
  withSize("/images/clients/f.webp", "Radisson Blu logo"),
  withSize("/images/clients/c.webp", "Smoke Hub logo"),
];

export default media;
