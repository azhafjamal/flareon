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
    glowingBed: img(
      "briquettes-glowing-bed.webp",
      "Close-up of coconut shell briquettes glowing orange through white ash"
    ),
    embersGrill: img(
      "briquettes-embers-grill.webp",
      "Glowing coconut shell briquettes burning down to white-ash embers under a grill grate"
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
    screenCrew: img(
      "plant-screen-crew.webp",
      "Plant crew beside the vibrating screen, with the briquette press behind them"
    ),
    dryingYard: img(
      "plant-drying-yard.webp",
      "Two workers tipping pressed briquettes from crates onto the open drying floor"
    ),
    sackHandling: img(
      "plant-sack-handling.webp",
      "Workers loading carbon into the mixer at the Palladam plant"
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
    yardGate: img(
      "yard-gate-trucks.webp",
      "Flareon delivery truck and forklift inside the Palladam plant yard"
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
    team: img(
      "team-lineup.webp",
      "The Flareon team — plant crew, supervisors and management — lined up in hard hats outside the Palladam facility"
    ),
  },

  // Sustainability + proof imagery
  nature: {
    grove: img(
      "coconut-grove.webp",
      "Coconut plantation — the renewable shell waste stream our briquettes are made from"
    ),
  },
};

// Homepage / company plant strip — ordered as the process actually runs.
export const plantStrip = [
  media.logistics.yardLoading,
  media.plant.conveyorCrates,
  media.plant.screenCrew,
  media.plant.dryingYard,
  media.logistics.yardGate,
  media.plant.sackHandling,
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
  { ...img("gallery-team-lineup.webp", "Flareon plant team lined up in front of the Palladam facility"), ratio: "land", caption: "The Palladam plant team outside the facility" },
  { ...img("gallery-plant-frontage.webp", "Plant office building and gate at the Flareon facility in Palladam"), ratio: "land", caption: "The plant office and gate at Palladam" },
  { ...img("gallery-mixer-loading-a.webp", "Worker handing a sack of carbon up to the mixer while a colleague looks on"), ratio: "land", caption: "Carbon going into the mixer" },
  { ...img("gallery-drying-hall.webp", "Rows of pressed briquettes drying across the covered drying hall floor"), ratio: "land", caption: "Pressed briquettes drying under cover" },
  { ...img("gallery-jumbo-bags.webp", "Worker standing on stacked jumbo bags of shell charcoal as a tractor loader works behind"), ratio: "land", caption: "Jumbo bags of shell charcoal in the yard" },
  { ...img("gallery-press-feed.webp", "Operator watching freshly pressed briquettes travel along the press feed chute"), ratio: "land", caption: "Briquettes coming off the press" },
  { ...img("gallery-bagging-portrait.webp", "Worker filling a sack under the hopper at the Palladam plant"), ratio: "portrait", caption: "Filling sacks at the hopper" },
  { ...img("gallery-sack-filling.webp", "Worker filling a Flareon branded sack in front of stacked charcoal sacks"), ratio: "land", caption: "Filling a Flareon sack in the warehouse" },
  { ...img("gallery-yard-gate.webp", "Flareon delivery truck and forklift seen through the open yard gate at the plant"), ratio: "land", caption: "The yard gate and the Flareon delivery truck" },
  { ...img("gallery-screen-deck-a.webp", "Operator and crew at the screening deck next to the briquette press"), ratio: "land", caption: "The screening deck beside the press" },
  { ...img("gallery-drying-floor.webp", "Two workers tipping crates of pressed briquettes onto the open drying floor"), ratio: "land", caption: "Briquettes laid out on the drying floor" },
  { ...img("gallery-casuarina-avenue.webp", "Sunset through a tree-lined avenue beside the Palladam plant"), ratio: "land", caption: "Casuarina avenue at the edge of the plant" },
  { ...img("gallery-mixer-pan.webp", "Worker at the round mixing pan with the mould box and scale beside it"), ratio: "land", caption: "Mixing pan and mould box" },
  { ...img("gallery-clay-pots-loading.webp", "Two men loading Flareon charcoal from sacks into clay pots at dusk"), ratio: "land", caption: "Flareon charcoal loaded into clay pots" },
  { ...img("gallery-press-line-wide.webp", "Wide view of the press line with drying racks behind the operators"), ratio: "land", caption: "The press line mid-shift" },
  { ...img("gallery-bagging-sack.webp", "Worker holding a sack open under the bagging hopper"), ratio: "portrait", caption: "Bagging at the hopper" },
  { ...img("gallery-mixer-crew.webp", "Mixing crew gathered around the round pan with the scale in the foreground"), ratio: "land", caption: "The mixing crew at work" },
  { ...img("gallery-clay-pots-lit.webp", "Clay pots of charcoal being lit with smoke rising beside a Flareon sack"), ratio: "land", caption: "Charcoal being lit in clay pots" },
  { ...img("gallery-loader-tractor.webp", "Tractor loader lifting a jumbo bag of shell charcoal in the plant yard"), ratio: "land", caption: "Tractor loader lifting a jumbo bag" },
  { ...img("gallery-press-line.webp", "Operator sorting briquettes beside the press with racks behind"), ratio: "land", caption: "Sorting off the press line" },
  { ...img("gallery-office-desk.webp", "Supervisor in a green helmet writing up records at a desk in the plant office"), ratio: "land", caption: "Production records at the plant office" },
  { ...img("gallery-mould-station.webp", "Workers at the mixing pan beside the mould box inside the plant"), ratio: "land", caption: "The moulding station" },
  { ...img("gallery-conveyor-hall.webp", "Incline conveyor running through the processing hall at the plant"), ratio: "land", caption: "Incline conveyor in the processing hall" },
  { ...img("gallery-brooder-chicks.webp", "Chicks gathered around a clay pot on a brooder floor"), ratio: "land", caption: "Chicks around a charcoal pot brooder" },
  { ...img("gallery-mixer-loading-b.webp", "Worker stepping up to tip a sack of carbon into the mixer"), ratio: "land", caption: "Emptying a sack into the mixer" },
  { ...img("gallery-mixer-loading-wide.webp", "Wide view of two workers at the mixer bay with the control panel behind"), ratio: "land", caption: "The mixer bay, wide view" },
  { ...img("gallery-screen-deck-b.webp", "Worker sorting freshly pressed briquettes on the screening deck"), ratio: "land", caption: "Sorting briquettes on the screen" },
  { ...img("gallery-screen-deck-c.webp", "Worker reaching over the screen to check briquettes by hand"), ratio: "land", caption: "Checking the screen by hand" },
  { ...img("gallery-press-floor-wide.webp", "Wide view of the press floor with drying racks, the press and crew at work"), ratio: "land", caption: "The press floor, wide view" },
  { ...img("gallery-fire-safety-board.webp", "Wall-mounted dry powder fire extinguisher with fire-fighting certificate and how-to-use chart"), ratio: "land", caption: "Fire safety point at the plant" },
  { ...img("gallery-drying-hall-wide.webp", "Covered drying hall with its floor covered edge to edge in pressed briquettes"), ratio: "land", caption: "The full drying hall" },
  { ...img("gallery-ember-pile.webp", "Pile of burning briquettes with flames, embers and a white ash coat"), ratio: "land", caption: "Briquettes burning down to white ash" },
  { ...img("gallery-clay-pot-loading.webp", "Worker tipping Flareon charcoal from a wire basket into a row of clay pots beside a Flareon sack"), ratio: "land", caption: "Loading charcoal into clay pots" },
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

// White-label packs we already produce for overseas buyers.
export const brandPacks = [
  img("brand-nakia.webp", "Nakia coco charcoal premium BBQ pack, 8 kg"),
  img("brand-grill-fanatics.webp", "Grill Fanatics coconut restaurant grade briquettes, 10 kg bag"),
  img("brand-kokosnoot.webp", "Restaurant grade Kokosnoot Briketten, 3 kg paper bag"),
  img("brand-pams.webp", "Pams BBQ charcoal briquettes coconut shell, 5 kg woven bag"),
  img("brand-sams-choice.webp", "Sam's Choice coco shell briquettes, 4 kg carton"),
];

export default media;
