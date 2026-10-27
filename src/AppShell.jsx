import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmokeCursor from "./components/SmokeCursor";
import RouteMeta from "./components/RouteMeta";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

// The layout and route table, shared by the browser build (lazy pages, see
// App.jsx) and the build-time prerender (plain imports, see App.ssr.jsx).
export default function AppShell({ pages }) {
  const { Home, Company, Products, Gallery, Compliance, ExportQuote, IndiaSupply, LegalPage, NotFound } = pages;
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <RouteMeta />
      <SmokeCursor />
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/export-quote" element={<ExportQuote />} />
          <Route path="/india" element={<IndiaSupply />} />
          <Route path="/privacy" element={<LegalPage doc="privacy" />} />
          <Route path="/terms-of-sale" element={<LegalPage doc="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
