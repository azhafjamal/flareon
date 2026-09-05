import { useEffect, useRef, useState } from "react";
import { markets } from "../data/markets";
import { useMarket } from "../market-context";

// Navbar language / market switcher. Every market in src/data/markets.js is
// selectable; a locale missing a string falls back to English.
export default function LanguageMenu() {
  const { market, setMarket, c } = useMarket();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-2 rounded-md border px-2.5 py-2 text-[13px] font-medium transition-colors ${
          open
            ? "border-ember/50 bg-ink-3 text-ash"
            : "border-line text-ash-3 hover:border-ash-3 hover:text-ash"
        }`}
      >
        <span aria-hidden className="text-[14px] leading-none">
          {market.flag}
        </span>
        <span className="hidden sm:inline">{market.name}</span>
        <span className={`text-[9px] transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* On phones the trigger is only a flag wide, so a 256px panel anchored to
          its right edge runs off the left of the screen. Below `sm` the menu
          drops to a full-width sheet under the bar instead; from `sm` up there
          is room for the anchored dropdown. */}
      {open && (
        <div
          role="listbox"
          className="fixed inset-x-4 top-[4.25rem] z-50 overflow-hidden rounded-lg border border-line bg-ink-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.95)] sm:absolute sm:inset-x-auto sm:end-0 sm:top-full sm:mt-2 sm:w-64"
        >
          <p className="eyebrow border-b border-line px-4 py-3">
            {c.common.languageMarket}
          </p>
          <ul className="max-h-80 overflow-y-auto py-1">
            {markets.map((m) => {
              const active = m.code === market.code;
              return (
                <li key={m.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    disabled={!m.ready}
                    onClick={() => {
                      if (!m.ready) return;
                      setMarket(m.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-start transition-colors ${
                      active
                        ? "bg-ember/10 text-glow"
                        : m.ready
                          ? "text-ash-2 hover:bg-ink-3 hover:text-ash"
                          : "cursor-not-allowed text-ash-3/55"
                    }`}
                  >
                    <span aria-hidden className="text-[15px] leading-none">
                      {m.flag}
                    </span>
                    <span className="flex-1 leading-tight">
                      <span className="block text-[13px] font-medium">
                        {m.name}
                      </span>
                      <span className="block text-[11px] opacity-70">
                        {m.note}
                      </span>
                    </span>
                    {active && <span className="font-mono text-[11px]">✓</span>}
                    {!m.ready && (
                      <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase">
                        {c.common.soon}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
