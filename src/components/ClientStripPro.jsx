import { useMarket } from "../market-context";
import { clientLogos } from "../data/images";

// Drop-in replacement for ClientStrip in IndiaSupply.jsx. Same data, same
// marquee keyframes — restyled: an ember-lit header rule, uniform logo cards
// with a hairline ring, and a hover lift. Spacing is margin, not gap, so the
// -50% loop lands exactly on the seam. Only the first copy is exposed to
// assistive tech; the clone exists to make the loop seamless.
export default function ClientStripPro() {
  const { c } = useMarket();
  const track = [...clientLogos, ...clientLogos];
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-2 py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ember/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(255,90,31,0.10),transparent_75%)]" />

      <div className="shell relative mb-9 flex items-center gap-5">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-line" />
        <p className="eyebrow flex items-center gap-2.5">
          <span className="size-1.5 rounded-full bg-ember shadow-[0_0_10px_2px_rgba(255,90,31,0.7)]" />
          {c.india.clients.eyebrow}
        </p>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-line" />
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((logo, i) => {
            const isClone = i >= clientLogos.length;
            return (
              <div
                key={`${logo.src}-${i}`}
                aria-hidden={isClone || undefined}
                className="me-5 flex h-24 w-52 shrink-0 items-center justify-center rounded-xl bg-[#f4f1ea] px-6 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.8)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-ember/60 hover:shadow-[0_14px_30px_-12px_rgba(255,90,31,0.45)]"
              >
                <img
                  src={logo.src}
                  alt={isClone ? "" : logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 w-auto max-w-full object-contain md:max-h-14"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
