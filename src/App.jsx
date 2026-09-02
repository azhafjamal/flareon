import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmokeCursor from "./components/SmokeCursor";
import RouteMeta from "./components/RouteMeta";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Compliance from "./pages/Compliance";
import ExportQuote from "./pages/ExportQuote";
import IndiaSupply from "./pages/IndiaSupply";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

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

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <RouteMeta />
      <SmokeCursor />
      <Header />
      <main className="flex-1">
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
      </main>
      <Footer />
    </div>
  );
}
