import { Button } from "../components/ui";
import { useMarket } from "../market-context";
import media from "../data/images";

// With the host rewriting every unmatched path to index.html, a wrong URL used
// to render the homepage — a soft 404. This says so plainly instead.
export default function NotFound() {
  const { c } = useMarket();
  return (
    <section className="relative overflow-hidden border-b border-line">
      <img
        src={media.fire.coals.src}
        width={media.fire.coals.width}
        height={media.fire.coals.height}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/85 to-ink" />
      <div className="grain absolute inset-0" />

      <div className="shell relative py-24 text-center md:py-32">
        <p className="font-mono text-[13px] tracking-[0.3em] text-ember uppercase">
          {c.notFound.code}
        </p>
        <h1 className="mx-auto mt-6 max-w-2xl text-[2.4rem] font-black leading-[1.02] text-ash md:text-5xl">
          {c.notFound.titleA} <span className="ember-text">{c.notFound.titleB}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ash-2">
          {c.notFound.body}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            {c.notFound.home}
          </Button>
          <Button to="/products" variant="outline" size="lg">
            {c.notFound.products}
          </Button>
          <Button to="/export-quote" variant="outline" size="lg">
            {c.notFound.exportDesk}
          </Button>
        </div>
      </div>
    </section>
  );
}
