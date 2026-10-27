import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { MarketProvider } from "./market-context";
import App from "./App.ssr";

// Build-time only: scripts/prerender.mjs calls this once per route to turn the
// app into static HTML that crawlers and link previews can read without JS.
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <MarketProvider>
        <App />
      </MarketProvider>
    </StaticRouter>
  );
}

export { headFor, routeMeta } from "./components/RouteMeta";
