// Writes a static HTML file for every route after `vite build`, so search
// engines, WhatsApp/LinkedIn previews and AI crawlers get the full page and
// its own <head> without running JavaScript. The browser then renders the app
// over it as usual.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, headFor, routeMeta } = await import(
  path.join(root, "dist-ssr/entry-server.js")
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Tag not found in template: ${pattern}`);
  return html.replace(pattern, replacement);
}

function page(url, outFile) {
  const head = headFor(url);
  let html = template;
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${escapeText(head.title)}</title>`);
  html = setTag(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeAttr(head.description)}$2`);
  // A noindex page (the 404) should not claim a canonical URL.
  html =
    head.robots === "index,follow"
      ? setTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${head.url}$2`)
      : setTag(html, /\s*<link rel="canonical" href="[^"]*" \/>/, "");
  html = setTag(html, /(<meta name="robots" content=")[^"]*(")/, `$1${head.robots}$2`);
  html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${head.url}$2`);
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(head.title)}$2`);
  html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(head.description)}$2`);
  html = setTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeAttr(head.title)}$2`);
  html = setTag(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${escapeAttr(head.description)}$2`);
  if (head.breadcrumb) {
    const ld = JSON.stringify(head.breadcrumb).replace(/</g, "\\u003c");
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json" id="breadcrumb-ld">${ld}</script>\n  </head>`
    );
  }
  html = setTag(html, /<div id="root"><\/div>/, `<div id="root">${render(url)}</div>`);
  fs.writeFileSync(path.join(dist, outFile), html);
  console.log(`prerendered ${url} -> dist/${outFile}`);
}

for (const url of Object.keys(routeMeta)) {
  page(url, url === "/" ? "index.html" : `${url.slice(1)}.html`);
}
// Served by Vercel with a real 404 status for any unknown path.
page("/404", "404.html");
