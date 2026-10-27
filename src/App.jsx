import { lazy } from "react";
import AppShell from "./AppShell";

// Each page is its own chunk, so a visitor only downloads the code for the
// page they open. The loaders are exported so main.jsx can fetch the current
// route's chunk before the first render (no blank flash over the prerendered
// HTML).
const loaders = {
  Home: () => import("./pages/Home"),
  Company: () => import("./pages/Company"),
  Products: () => import("./pages/Products"),
  Gallery: () => import("./pages/Gallery"),
  Compliance: () => import("./pages/Compliance"),
  ExportQuote: () => import("./pages/ExportQuote"),
  IndiaSupply: () => import("./pages/IndiaSupply"),
  LegalPage: () => import("./pages/LegalPage"),
  NotFound: () => import("./pages/NotFound"),
};

const byPath = {
  "/": "Home",
  "/company": "Company",
  "/products": "Products",
  "/gallery": "Gallery",
  "/compliance": "Compliance",
  "/export-quote": "ExportQuote",
  "/india": "IndiaSupply",
  "/privacy": "LegalPage",
  "/terms-of-sale": "LegalPage",
};

export const preloadRoute = (pathname) => loaders[byPath[pathname] ?? "NotFound"]();

const pages = Object.fromEntries(
  Object.entries(loaders).map(([name, load]) => [name, lazy(load)])
);

export default function App() {
  return <AppShell pages={pages} />;
}
