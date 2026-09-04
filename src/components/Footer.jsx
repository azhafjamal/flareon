import { Link } from "react-router-dom";
import { company, exportTerms, activeDestinations } from "../data/site";
import { useMarket } from "../market-context";
import media from "../data/images";
import { Coal } from "./ui";

// Inline brand glyphs, full colour — each is its own badge (brand-colour
// fill/gradient behind a white glyph) so they read at a glance in the
// footer instead of blending into the monochrome UI around them.
function SocialIcon({ name }) {
  const common = { width: 27, height: 27, viewBox: "0 0 24 24" };
  switch (name) {
    case "whatsapp":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="#25D366"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.463 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} aria-hidden>
          <rect width="24" height="24" rx="5" fill="#0A66C2" />
          <path
            fill="#fff"
            d="M8.34 9.5H5.7V18h2.64V9.5ZM7.02 8.36a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06ZM18.3 18h-2.63v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38V18H9.83V9.5h2.53v1.16h.04c.35-.66 1.2-1.36 2.48-1.36 2.65 0 3.14 1.75 3.14 4.02V18Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} aria-hidden>
          <defs>
            <radialGradient id="ig-badge" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#FFDC80" />
              <stop offset="18%" stopColor="#FCAF45" />
              <stop offset="40%" stopColor="#F77737" />
              <stop offset="60%" stopColor="#F56040" />
              <stop offset="75%" stopColor="#FD1D1D" />
              <stop offset="88%" stopColor="#C13584" />
              <stop offset="100%" stopColor="#833AB4" />
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#ig-badge)" />
          <rect
            x="4.4"
            y="4.4"
            width="15.2"
            height="15.2"
            rx="4.4"
            fill="none"
            stroke="#fff"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="3.6" fill="none" stroke="#fff" strokeWidth="1.6" />
          <circle cx="16.6" cy="7.4" r="1.15" fill="#fff" />
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
                className="grid size-15 place-items-center rounded-xl transition-transform hover:scale-110"
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
