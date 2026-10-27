import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MarketProvider } from "./market-context";
import App, { preloadRoute } from "./App";
import "./index.css";

// Fetch this route's page chunk first, so the first render already contains
// the page and the prerendered HTML is never replaced by an empty screen.
preloadRoute(window.location.pathname)
  .catch(() => {})
  .finally(() => {
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <BrowserRouter>
          <MarketProvider>
            <App />
          </MarketProvider>
        </BrowserRouter>
      </StrictMode>
    );
  });
