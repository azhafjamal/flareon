import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMarket } from "../market-context";
import { company } from "../data/site";
import media from "../data/images";
import { Button } from "./ui";
import LanguageMenu from "./LanguageMenu";

const links = [
  { to: "/", key: "home", end: true },
  { to: "/company", key: "company" },
  { to: "/products", key: "products" },
  { to: "/gallery", key: "gallery" },
  { to: "/compliance", key: "compliance" },
  { to: "/india", key: "india" },
  { to: "/export-quote", key: "export" },
];

export default function Header() {
  const { c } = useMarket();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]" : ""
      }`}
    >
      <div className="border-b border-line bg-ink/85">
        <div className="shell flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={media.brand.mark.src}
              alt=""
              aria-hidden
              width={36}
              height={36}
              className="size-9 rounded-md object-cover ring-1 ring-line"
            />
            <span className="leading-none">
              <span className="block font-display text-lg font-black tracking-[0.14em] text-ash">
                {company.brand}
              </span>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-ember">
                {company.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ash"
                      : "text-ash-3 hover:bg-ink-3 hover:text-ash"
                  }`
                }
              >
                {c.nav[l.key]}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageMenu />
            <Button to="/export-quote" size="sm" className="hidden sm:inline-flex">
              {c.cta.quote}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={c.common.toggleMenu}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-md border border-line text-ash-2 lg:hidden"
            >
              <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="shell flex flex-col gap-1 border-t border-line py-3 lg:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-ink-3 text-ash" : "text-ash-2"
                  }`
                }
              >
                {c.nav[l.key]}
              </NavLink>
            ))}
            <Button to="/export-quote" size="sm" className="mt-2 sm:hidden">
              {c.cta.quote}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
