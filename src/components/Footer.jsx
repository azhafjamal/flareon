import { Link } from "react-router-dom";
import { company, exportTerms, activeDestinations } from "../data/site";
import { useMarket } from "../market-context";
import media from "../data/images";
import { Coal } from "./ui";

// Inline brand glyphs — no icon dependency, and they inherit currentColor.
function SocialIcon({ name }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor" };
  switch (name) {
    case "whatsapp":
      return (
        <svg {...common} aria-hidden>
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.9a8 8 0 1 1-4.07 14.9l-.3-.18-3.08.9.9-3-.2-.3A8 8 0 0 1 12.04 3.9Zm4.6 10.1c-.25-.13-1.46-.72-1.68-.8-.23-.09-.4-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.5 6.5 0 0 1-3.25-2.84c-.25-.42.24-.4.7-1.3.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.83-.2-.48-.4-.41-.56-.42h-.47a.9.9 0 0 0-.65.3c-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.66 4.22 3.73 1.57.68 2.18.73 2.97.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86V21h-4V9Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.73.37-1.05.69-.32.32-.52.62-.69 1.05-.12.32-.27.8-.31 1.7-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.4.9.19 1.38.31 1.7.17.43.37.73.69 1.05.32.32.62.52 1.05.69.32.12.8.27 1.7.31 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.73-.37 1.05-.69.32-.32.52-.62.69-1.05.12-.32.27-.8.31-1.7.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.7a2.8 2.8 0 0 0-.69-1.05 2.8 2.8 0 0 0-1.05-.69c-.32-.12-.8-.27-1.7-.31-1.24-.06-1.6-.07-4.74-.07Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-3.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common} aria-hidden>
          <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.5 3h6.05l4.18 5.53L17.53 3Zm-1.06 16.2h1.67L7.63 4.7H5.84l10.63 14.5Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} aria-hidden>
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.63c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.03 1.46-4.03 4.14V9.9H7.5V13h2.76v8h3.24Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const { c } = useMarket();
  return (
    <footer className="border-t border-line bg-ink-2 grain">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={media.brand.mark.src}
              alt=""
              aria-hidden
              width={44}
              height={44}
              className="size-11 rounded-md object-cover ring-1 ring-line"
            />
            <div>
              <div className="font-display text-2xl font-black tracking-[0.14em] text-ash">
                {company.brand}
              </div>
              <div className="mt-1 font-mono text-[11px] tracking-[0.22em] text-ember">
                {company.tagline}
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ash-3">
            {company.footerAddress}
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a
              href={company.whatsappHref}
              className="inline-flex w-fit items-center gap-2 text-ash-2 hover:text-glow"
            >
              <Coal /> WhatsApp {company.whatsapp}
            </a>
            {company.emails.map((e) => (
              <a
                key={e}
                href={`mailto:${e}`}
                className="inline-flex w-fit items-center gap-2 text-ash-2 hover:text-glow"
              >
                <Coal /> {e}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {company.socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                title={s.label}
                className="grid size-10 place-items-center rounded-md border border-line bg-ink-3 text-ash-2 transition-colors hover:border-ember/50 hover:text-glow"
              >
                <SocialIcon name={s.key} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">{c.footer.exportTerms}</p>
          <ul className="space-y-3 text-sm">
            {exportTerms.map((x, i) => (
              <li key={x.k}>
                <span className="block text-ash-3">{c.exportTerms[i].k}</span>
                <span className="text-ash-2">{c.exportTerms[i].v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">{c.footer.navigate}</p>
          <ul className="space-y-2 text-sm">
            {[
              ["/", c.nav.home],
              ["/company", c.nav.company],
              ["/products", c.nav.products],
              ["/gallery", c.nav.gallery],
              ["/compliance", c.nav.compliance],
              ["/india", c.nav.india],
              ["/export-quote", c.nav.export],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-ash-2 hover:text-glow">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-8 mb-3">{c.footer.shippingTo}</p>
          <div className="flex flex-wrap gap-2">
            {activeDestinations.map((d) => (
              <span
                key={d.name}
                className="rounded-full border border-line px-2.5 py-1 text-[12px] text-ash-3"
              >
                <span aria-hidden>{d.flag}</span> {c.destinations[d.name] ?? d.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-5 text-[12px] text-ash-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. {c.footer.rights}
          </p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-ash-2">
              {c.footer.privacy}
            </Link>
            <Link to="/terms-of-sale" className="hover:text-ash-2">
              {c.footer.terms}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
