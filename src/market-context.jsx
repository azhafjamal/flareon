import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { markets, rtlLocales } from "./data/markets";
import { getContent, loadContent } from "./content";

const MarketContext = createContext(null);
const STORAGE_KEY = "flareon.market";

export function MarketProvider({ children }) {
  // No localStorage during the build-time prerender, so pages render in English.
  const [code, setCode] = useState(
    () =>
      (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) ||
      "EN"
  );

  // Only markets flagged `ready` can be selected; an unknown code falls back to
  // the default market rather than rendering an empty locale.
  const market = useMemo(() => {
    const found = markets.find((m) => m.code === code);
    return found?.ready ? found : markets[0];
  }, [code]);

  // The copy tree for the selected market. Non-English locales are separate
  // chunks, so the previous language stays on screen until the new one has
  // arrived; text, direction and <html lang> then switch together.
  const [loaded, setLoaded] = useState(() => ({
    locale: "en",
    c: getContent("en"),
  }));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, market.code);
  }, [market]);

  useEffect(() => {
    let live = true;
    loadContent(market.locale).then((c) => {
      if (live) setLoaded({ locale: market.locale, c });
    });
    return () => {
      live = false;
    };
  }, [market.locale]);

  useEffect(() => {
    document.documentElement.lang = loaded.locale;
    document.documentElement.dir = rtlLocales.includes(loaded.locale)
      ? "rtl"
      : "ltr";
  }, [loaded.locale]);

  const value = useMemo(
    () => ({
      market,
      setMarket: setCode,
      // Every page reads its strings from here; nothing user-visible is
      // hardcoded in the JSX.
      c: loaded.c,
      isRTL: rtlLocales.includes(loaded.locale),
    }),
    [market, loaded]
  );

  return (
    <MarketContext.Provider value={value}>{children}</MarketContext.Provider>
  );
}

export function useMarket() {
  const ctx = useContext(MarketContext);
  if (!ctx) throw new Error("useMarket must be used inside <MarketProvider>");
  return ctx;
}
