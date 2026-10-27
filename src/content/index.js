import en from "./en";

// English ships with the page; every other locale is its own chunk, fetched
// only when a visitor selects that market. A locale that isn't listed here
// simply resolves to English.
const loaders = {
  ru: () => import("./ru"),
  de: () => import("./de"),
  nl: () => import("./nl"),
  es: () => import("./es"),
  zh: () => import("./zh"),
  ja: () => import("./ja"),
  ar: () => import("./ar"),
};

// Deep-merge a locale over English so any string a translator hasn't reached
// yet renders in English rather than disappearing. Arrays merge per index, so a
// partly translated list keeps its untranslated entries.
function merge(base, over) {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return over;
    return base.map((item, i) => merge(item, over[i]));
  }
  if (base && typeof base === "object") {
    if (typeof over !== "object") return over;
    const out = {};
    for (const key of new Set([...Object.keys(base), ...Object.keys(over)])) {
      out[key] = merge(base[key], over[key]);
    }
    return out;
  }
  return over;
}

const cache = new Map([["en", en]]);

// Synchronous: whatever is already loaded, English otherwise.
export function getContent(locale) {
  return cache.get(locale) ?? en;
}

// Resolves with the full merged copy tree for a locale, loading it if needed.
export async function loadContent(locale) {
  if (cache.has(locale)) return cache.get(locale);
  const load = loaders[locale];
  if (!load) return en;
  const mod = await load();
  const built = merge(en, mod.default);
  cache.set(locale, built);
  return built;
}

export { en };
