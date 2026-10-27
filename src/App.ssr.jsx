import AppShell from "./AppShell";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Compliance from "./pages/Compliance";
import ExportQuote from "./pages/ExportQuote";
import IndiaSupply from "./pages/IndiaSupply";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

// Build-time prerender only: plain imports so every page renders to HTML in
// one pass (React cannot wait for lazy pages in renderToString).
const pages = {
  Home,
  Company,
  Products,
  Gallery,
  Compliance,
  ExportQuote,
  IndiaSupply,
  LegalPage,
  NotFound,
};

export default function AppSSR() {
  return <AppShell pages={pages} />;
}
