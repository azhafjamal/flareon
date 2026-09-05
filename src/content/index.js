import en from "./en";
import ru from "./ru";
import de from "./de";
import nl from "./nl";
import es from "./es";
import zh from "./zh";
import ja from "./ja";
import ar from "./ar";

// Every locale the market switcher can select. A locale that isn't listed here
// simply resolves to English via getContent() below.
const locales = { en, ru, de, nl, es, zh, ja, ar };

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

export function getContent(locale) {
  if (cache.has(locale)) return cache.get(locale);
  const built = locales[locale] ? merge(en, locales[locale]) : en;
  cache.set(locale, built);
  return built;
}

export { en };
