import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { markets, rtlLocales } from "./data/markets";
import { getContent } from "./content";

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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, market.code);
    document.documentElement.lang = market.locale;
    document.documentElement.dir = rtlLocales.includes(market.locale)
      ? "rtl"
      : "ltr";
  }, [market]);

  const value = useMemo(
    () => ({
      market,
      setMarket: setCode,
      // Full translated copy tree for the active locale. Every page reads its
      // strings from here; nothing user-visible is hardcoded in the JSX.
      c: getContent(market.locale),
      isRTL: rtlLocales.includes(market.locale),
    }),
    [market]
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
