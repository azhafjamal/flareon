// LANGUAGE / MARKET SWITCHER
//
// Every market below is selectable. This file only maps a market to its locale
// — the copy itself lives in src/content/<locale>.js and is read through
// useMarket().c, where any missing key falls back to English per string.
export const markets = [
  { code: "EN", name: "English", flag: "🌐", locale: "en", ready: true, note: "Global / default" },
  { code: "RU", name: "Russia", flag: "🇷🇺", locale: "ru", ready: true, note: "Русский" },
  { code: "CN", name: "China", flag: "🇨🇳", locale: "zh", ready: true, note: "中文" },
  { code: "AE", name: "UAE", flag: "🇦🇪", locale: "ar", ready: true, note: "العربية" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", locale: "nl", ready: true, note: "Nederlands" },
  { code: "DE", name: "Germany", flag: "🇩🇪", locale: "de", ready: true, note: "Deutsch" },
  { code: "ES", name: "Spain", flag: "🇪🇸", locale: "es", ready: true, note: "Español" },
  { code: "GT", name: "Guatemala", flag: "🇬🇹", locale: "es", ready: true, note: "Español (GT)" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", locale: "en", ready: true, note: "English (IE)" },
  { code: "MV", name: "Maldives", flag: "🇲🇻", locale: "en", ready: true, note: "English (MV)" },
  { code: "CA", name: "Canada", flag: "🇨🇦", locale: "en", ready: true, note: "English / Français" },
  { code: "JP", name: "Japan", flag: "🇯🇵", locale: "ja", ready: true, note: "日本語" },
];

export const rtlLocales = ["ar"];
