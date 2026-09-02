import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A static host serves the same index.html for every route, so the tab title and
// meta description never change on their own. This syncs them per route.
const BRAND = "Flareon Briquettes";

export const routeMeta = {
  "/": {
    title: `${BRAND} — Coconut Shell Charcoal Briquettes | India`,
    description:
      "India's largest integrated coconut shell charcoal briquette manufacturer. Chemical-free, 4-hour burn, low ash. ISO 9001:2015 certified. Direct FOB/CIF container export.",
  },
  "/company": {
    title: `Company & Eco-Infrastructure — ${BRAND}`,
    description:
      "Fully integrated coconut charcoal manufacturing in Palladam, Tamil Nadu — shell collection, activated carbon, briquetting, 55,000 sq. ft UV drying yard and 3.5 MW captive windmills.",
  },
  "/products": {
    title: `Briquettes & Activated Carbon — ${BRAND}`,
    description:
      "Coconut shell charcoal briquettes in hexagonal, pillow, cube and honeycomb shapes, three export grades, plus private label and OEM packaging.",
  },
  "/gallery": {
    title: `Gallery — Inside the Palladam Plant | ${BRAND}`,
    description:
      "Photographs from our own line in Palladam, Tamil Nadu: raw shell charcoal through pressing, UV drying, screening, packing and despatch.",
  },
  "/compliance": {
    title: `Specs, Certificates & Lab Reports — ${BRAND}`,
    description:
      "Download the TÜV SÜD ISO 9001:2015 certificate, Bureau Veritas comparison study, MSDS and Coconut Development Board export registration.",
  },
  "/india": {
    title: `India Bulk Supply for Hotels, Restaurants & Catering — ${BRAND}`,
    description:
      "Coconut shell charcoal briquettes for Indian tandoors, sigris, live grills and hookah counters — scheduled delivery, GST invoice, locked rate contract and a free kitchen trial.",
  },
  "/privacy": {
    title: `Privacy Policy — ${BRAND}`,
    description:
      "How Flareon Briquettes collects, uses, stores and shares the information you submit through the Export Desk, the India desk or direct contact.",
  },
  "/terms-of-sale": {
    title: `Terms of Sale — ${BRAND}`,
    description:
      "Quotations, minimum order, Incoterms, payment terms, lead time, claims and governing law for every briquette and activated carbon order placed with Flareon.",
  },
  "/export-quote": {
    title: `Export Desk — Request an FOB / CIF Quote | ${BRAND}`,
    description:
      "Flexible MOQ from a single 20ft FCL, T/T or irrevocable L/C from the first container, and same-day indicative pricing to any destination port.",
  },
};

const FALLBACK = {
  title: `Page not found — ${BRAND}`,
  description: routeMeta["/"].description,
};

function setMeta(name, content, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] ?? FALLBACK;
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, true);
    setMeta("og:description", meta.description, true);

    // Canonical URL, so the rewrite serving index.html at any path doesn't
    // register as duplicate content.
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${window.location.origin}${pathname}`;

    // Unknown paths are reachable now that the host rewrites everything to the
    // app — tell crawlers not to index them.
    setMeta("robots", routeMeta[pathname] ? "index,follow" : "noindex,follow");
  }, [pathname]);

  return null;
}
