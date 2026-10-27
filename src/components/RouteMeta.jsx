import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Per-route title, description and breadcrumb. The build writes these into
// each prerendered page (scripts/prerender.mjs); this component keeps them in
// sync as the visitor navigates client-side.
const BRAND = "Flareon Briquettes";

// Canonical origin. Fixed rather than read from window.location so preview
// deployments and the bare domain never register as separate pages.
export const SITE = "https://www.flareonbriquette.com";

export const routeMeta = {
  "/": {
    crumb: "Home",
    title: "Coconut Charcoal Briquette Manufacturer in India | Flareon",
    description:
      "Coconut shell charcoal briquette manufacturer in Palladam, India. Chemical-free, low ash, ISO 9001:2015 certified. FOB/CIF export from one 20ft container.",
  },
  "/company": {
    crumb: "Company",
    title: "About Flareon — Integrated Coconut Charcoal Plant, Palladam",
    description:
      "Fully integrated coconut charcoal plant in Palladam, Tamil Nadu: shell sourcing, activated carbon, briquetting, 55,000 sq ft drying yard and 3.5 MW wind power.",
  },
  "/products": {
    crumb: "Products",
    title: "Coconut Charcoal Briquettes: Hexagon, Pillow, Cube | Flareon",
    description:
      "Coconut shell charcoal briquettes in hexagonal, pillow and cube/shisha shapes. Three export grades, private label and OEM packaging. Request an FOB quote today.",
  },
  "/gallery": {
    crumb: "Gallery",
    title: "Factory Gallery — Coconut Charcoal Briquette Plant | Flareon",
    description:
      "Real photos from our Palladam plant in Tamil Nadu: raw coconut shell charcoal, pressing, UV solar drying, screening, 25 kg bagging and container loading.",
  },
  "/compliance": {
    crumb: "Specs & Certificates",
    title: "Certificates & Lab Reports — ISO 9001, MSDS | Flareon",
    description:
      "Download our TÜV SÜD ISO 9001:2015 certificate, Bureau Veritas combustion study, MSDS and Coconut Development Board RCMC. Sedex SMETA report on request.",
  },
  "/india": {
    crumb: "India Supply",
    title: "Charcoal Briquettes for Hotels & Restaurants India | Flareon",
    description:
      "Coconut shell charcoal briquettes for tandoors, sigris, grills and hookah in India. 25 kg bags, GST invoice, scheduled delivery and a free kitchen trial.",
  },
  "/privacy": {
    crumb: "Privacy Policy",
    title: `Privacy Policy — ${BRAND}`,
    description:
      "How Flareon Briquettes collects, uses, stores and shares the information you submit through the Export Desk, the India desk or direct contact.",
  },
  "/terms-of-sale": {
    crumb: "Terms of Sale",
    title: `Terms of Sale — ${BRAND}`,
    description:
      "Quotations, minimum order, Incoterms, payment terms, lead time, claims and governing law for every briquette and activated carbon order placed with Flareon.",
  },
  "/export-quote": {
    crumb: "Export Desk",
    title: "Request an FOB / CIF Quote — Charcoal Briquettes | Flareon",
    description:
      "Get an FOB or CIF quote for coconut shell charcoal briquettes. MOQ from one 20ft FCL, T/T or L/C from the first container, same-day indicative pricing.",
  },
};

const FALLBACK = {
  title: `Page not found — ${BRAND}`,
  description: routeMeta["/"].description,
};

// Everything a page's <head> needs, as plain data, so the build-time
// prerender and the live component render identical tags.
export function headFor(pathname) {
  const meta = routeMeta[pathname] ?? FALLBACK;
  const url = `${SITE}${pathname}`;
  const breadcrumb =
    routeMeta[pathname] && pathname !== "/"
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: meta.crumb, item: url },
          ],
        }
      : null;
  return {
    title: meta.title,
    description: meta.description,
    url,
    robots: routeMeta[pathname] ? "index,follow" : "noindex,follow",
    breadcrumb,
  };
}

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
    const head = headFor(pathname);
    document.title = head.title;
    setMeta("description", head.description);
    setMeta("robots", head.robots);
    setMeta("og:title", head.title, true);
    setMeta("og:description", head.description, true);
    setMeta("og:url", head.url, true);
    setMeta("twitter:title", head.title);
    setMeta("twitter:description", head.description);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = head.url;

    let ld = document.getElementById("breadcrumb-ld");
    if (head.breadcrumb) {
      if (!ld) {
        ld = document.createElement("script");
        ld.type = "application/ld+json";
        ld.id = "breadcrumb-ld";
        document.head.appendChild(ld);
      }
      ld.textContent = JSON.stringify(head.breadcrumb);
    } else {
      ld?.remove();
    }
  }, [pathname]);

  return null;
}
