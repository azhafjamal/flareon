import { useState } from "react";
import {
  company,
  metrics,
  pillars,
  grades,
  benchmark,
  faqs,
  certificates,
  products,
  partnerNote,
} from "../data/site";
import { useMarket } from "../market-context";
import { Button, Section, SectionHead, Badge, Coal, Eyebrow } from "../components/ui";
import { Figure, PhotoStrip } from "../components/Figure";
import media, { plantStrip } from "../data/images";

// Full-bleed hero: the ember bed sits behind the type, which now runs the
// whole width of the shell rather than sharing it with a figure.
function Hero() {
  const { c } = useMarket();
  return (
    <section className="relative overflow-hidden border-b border-line">
      <img
        src={media.fire.hero.src}
        alt={media.fire.hero.alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-ink/15" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/85 via-ink/70 to-ink" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[38rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,90,31,0.16),transparent_70%)]" />
      <div className="grain absolute inset-0" />

      <div className="shell relative py-20 md:py-32">
        <div className="rise">
          <Badge tone="ember">
            <span aria-hidden>🛡</span>
            {c.home.hero.badge}
          </Badge>

          <h1 className="mt-7 text-[2.7rem] font-black leading-[0.98] tracking-tight text-ash sm:text-6xl lg:text-[4.6rem]">
            {c.home.hero.h1a}{" "}
            <span className="ember-text">{c.home.hero.h1b}</span>{" "}
            {c.home.hero.h1c}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-ash-2 sm:text-lg">
            {c.home.hero.sub}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/export-quote" size="lg">
              {c.cta.sample} →
            </Button>
            <Button to="/compliance" variant="outline" size="lg">
              {c.cta.report}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const { c } = useMarket();
  return (
    <div className="border-b border-[#2d6648]/70 bg-[#08150f]">
      <div className="shell grid grid-cols-2 divide-[#2d6648]/70 md:grid-cols-4 md:divide-x">
        {metrics.map((m) => (
          <div
            key={m.key}
            className="border-b border-[#2d6648]/70 px-2 py-8 md:border-b-0 md:px-6"
          >
            <p className="font-display text-3xl font-extrabold text-[#eaf5ee] md:text-4xl">
              {m.value == null ? c.specs.extraLong : m.unit ? `${m.value} ${c.units[m.unit]}` : m.value}
            </p>
            <p className="mt-2 text-[13px] leading-snug text-[#8fc7a3]">
              {c.metrics[m.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pillars() {
  const { c } = useMarket();
  return (
    <section className="relative overflow-hidden border-y border-line py-20 md:py-28">
      <img
        src={media.plant.machineTeam.src}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/88 to-ink" />
      <div className="shell relative">
      <SectionHead
        eyebrow={c.home.pillars.eyebrow}
        title={c.home.pillars.title}
        sub={c.home.pillars.sub}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className="panel panel-hover group relative overflow-hidden p-7"
          >
            <span className="absolute right-5 top-5 font-mono text-[11px] text-line">
              0{i + 1}
            </span>
            <Eyebrow>{c.pillars[i].tag}</Eyebrow>
            <h3 className="mt-3 text-xl font-bold text-ash">{c.pillars[i].title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ash-3">
              {c.pillars[i].body}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] text-glow">
              <Coal /> {c.pillars[i].stat}
            </p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function PlantLook() {
  const { c } = useMarket();
  return (
    <Section tone="raised">
      <SectionHead
        eyebrow={c.home.plant.eyebrow}
        title={c.home.plant.title}
        sub={c.home.plant.sub}
      />
      <div className="mt-12">
        <PhotoStrip images={plantStrip} />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <Figure
          image={media.plant.machine}
          ratio="wide"
          label={c.home.plant.pressLabel}
          note={c.home.plant.pressNote}
        />
        <Figure
          image={media.plant.dryingTray}
          ratio="wide"
          label={c.home.plant.dryLabel}
          note={c.home.plant.dryNote}
        />
        <Figure
          image={media.logistics.warehouseAisle}
          ratio="wide"
          label={c.home.plant.despatchLabel}
          note={c.home.plant.despatchNote}
        />
      </div>
    </Section>
  );
}

function Grades() {
  const { c } = useMarket();
  return (
    <Section tone="raised" id="grades">
      <SectionHead
        eyebrow={c.home.grades.eyebrow}
        title={c.home.grades.title}
        sub={c.home.grades.sub}
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {grades.map((g) => {
          const tier = c.grades[g.name];
          return (
            <div
              key={g.name}
              className={`panel panel-hover relative p-7 ${
                g.highlight
                  ? "border-ember/50 shadow-[0_0_60px_-30px_rgba(255,90,31,0.9)]"
                  : ""
              }`}
            >
              {g.highlight && (
                <span className="absolute -top-2.5 left-7 rounded-full bg-linear-to-b from-ember to-ember-2 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-white uppercase">
                  {c.specs.mostExported}
                </span>
              )}
              <h3 className="font-display text-2xl font-extrabold text-ash">
                {tier.name}
              </h3>
              <p className="mt-1 text-[15px] text-ash-3">{tier.use}</p>
              <dl className="mt-6 space-y-0 divide-y divide-line border-y border-line">
                {[
                  [c.specs.ash, g.ash],
                  [c.specs.moisture, g.moisture],
                  [c.specs.burn, c.specs.extraLong],
                  [c.specs.fixedCarbon, g.fixedCarbon],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between py-3">
                    <dt className="text-[15px] text-ash-3">{k}</dt>
                    <dd className="font-mono text-[15px] font-medium text-ash">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[15px] text-ash-3">{c.grades.price}</p>
              <Button
                to="/export-quote"
                variant={g.highlight ? "ember" : "outline"}
                size="sm"
                className="mt-5 w-full"
              >
                {c.specs.priceCta.replace("{grade}", tier.name)}
              </Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const productCardImage = {
  briquettes: media.fire.cubesBurning,
  "activated-carbon": media.material.carbonGranules,
};

function ProductPeek() {
  const { c } = useMarket();
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <img
        src={media.material.rawSacks.src}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/90 to-ink" />
      <div className="shell relative">
        <SectionHead
          eyebrow={c.home.products.eyebrow}
          title={c.home.products.title}
          sub={c.home.products.sub}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {products.map((p) => {
            const item = c.productItems[p.id];
            return (
              <article
                key={p.id}
                className="panel panel-hover flex flex-col overflow-hidden sm:flex-row"
              >
                {/* Side-by-side on wider screens so the image fills the
                    card's height instead of forcing extra vertical space. */}
                <div className="relative sm:w-2/5 sm:shrink-0">
                  <img
                    src={productCardImage[p.id].src}
                    alt={productCardImage[p.id].alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-16/9 w-full border-b border-line object-cover sm:aspect-auto sm:h-full sm:border-b-0 sm:border-r"
                  />
                  {!p.available && (
                    <span className="absolute right-4 top-4 rounded-full border border-ember/40 bg-ink/85 px-3 py-1 font-mono text-[11px] tracking-widest text-glow uppercase backdrop-blur">
                      {c.common.comingSoon}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-ash">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ash-3">
                    {item.blurb}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-[15px] text-ash-2">
                        <Coal className="mt-2" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/products">{c.cta.catalogue}</Button>
          <Button to="/products#oem" variant="outline">
            {c.cta.oem}
          </Button>
        </div>
      </div>
    </section>
  );
}

// Heading and table share the one centred `shell` column, so this band lines up
// with the sections above and below it. The BV standard column is numeric, so it
// is read from site.js rather than the translated tree.
function Benchmark() {
  const { c } = useMarket();
  return (
    <Section tone="raised">
      <SectionHead
        eyebrow={c.home.benchmark.eyebrow}
        title={c.home.benchmark.title}
        sub={c.home.benchmark.sub}
      />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-base">
          <thead>
            <tr>
              {c.benchmark.columns.map((col, i) => (
                <th
                  key={col}
                  className={`border-b border-line pb-4 pr-6 font-mono text-[13px] tracking-widest uppercase ${
                    i === 1 ? "text-glow" : "text-ash-3"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.benchmark.rows.map((r, i) => (
              <tr key={r[0]} className="border-b border-line/70">
                <td className="py-4 pr-6 text-[15px] text-ash-2">{r[0]}</td>
                <td className="py-4 pr-6 font-mono text-[15px] font-medium text-ash">
                  <span className="rounded bg-ember/10 px-2.5 py-1">{r[1]}</span>
                </td>
                <td className="py-4 pr-6 font-mono text-[15px] text-ash-3">{r[2]}</td>
                <td className="py-4 pr-6 font-mono text-[15px] text-ash-3">
                  {benchmark.rows[i][3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function TrustWall() {
  const { c } = useMarket();
  return (
    // A gradient wash sits behind the whole band; the header row runs across
    // the top so the four cards form one clean rectangle beneath it.
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 90% at 8% 0%, rgba(255,90,31,0.24), transparent 60%), " +
            "radial-gradient(55% 85% at 100% 100%, rgba(138,58,20,0.28), transparent 65%), " +
            "linear-gradient(135deg, rgba(224,62,12,0.10), transparent 55%)",
        }}
      />

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-end">
          <div>
            <Eyebrow className="mb-3">{c.home.trust.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
              {c.home.trust.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ash-2">
              {c.home.trust.body}
            </p>
          </div>
          <Button to="/compliance" variant="outline" size="lg">
            {c.cta.allDocs}
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {certificates.map((cert, i) => (
            <a
              key={cert.title}
              href={cert.file}
              download
              className="panel panel-hover flex flex-col p-7"
            >
              <Eyebrow>{c.certificates[i].tag}</Eyebrow>
              <p className="mt-3 text-[19px] font-semibold leading-snug text-ash">
                {c.certificates[i].title}
              </p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ash-3">
                {c.certificates[i].body}
              </p>
              <p className="mt-6 font-mono text-[13px] text-glow">
                ⤓ {c.common.downloadPdf}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { c } = useMarket();
  const [open, setOpen] = useState(0);
  return (
    <Section tone="raised">
      <SectionHead
        eyebrow={c.home.faq.eyebrow}
        title={c.home.faq.title}
        align="center"
      />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {faqs.map((_, i) => {
          const f = c.faqs[i];
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-start"
              >
                <span
                  className={`text-[19px] font-semibold ${
                    isOpen ? "text-glow" : "text-ash"
                  }`}
                >
                  {f.q}
                </span>
                <span className="font-mono text-xl text-ash-3">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 pr-10 text-[17px] leading-relaxed text-ash-2">
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ManagingPartner() {
  const { c } = useMarket();
  const { managingPartner } = company;
  return (
    <Section tone="ink">
      <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        <div className="mx-auto lg:mx-0">
          <div className="relative">
            <div className="ember-pulse pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.22),transparent_70%)] blur-2xl" />
            <img
              src={media.people.lead.src}
              alt={media.people.lead.alt}
              loading="lazy"
              decoding="async"
              className="relative size-56 rounded-full border border-line object-cover md:size-64"
            />
          </div>
        </div>

        <div>
          <Eyebrow className="mb-3">{c.home.partner.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
            {managingPartner.name}
            <span className="ms-3 align-middle font-mono text-[13px] tracking-widest text-ash-3 uppercase">
              {c.roles.managingPartner}
            </span>
          </h2>
          <div className="mt-6 space-y-4">
            {partnerNote.map((_, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ash-2">
                {c.partnerNote[i]}
              </p>
            ))}
          </div>
          <a
            href={`mailto:${managingPartner.email}`}
            className="mt-7 inline-flex items-center gap-2 font-mono text-[14px] text-glow hover:underline"
          >
            <Coal /> {managingPartner.email}
          </a>
        </div>
      </div>
    </Section>
  );
}

function ClosingCTA() {
  const { c } = useMarket();
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink">
      <img
        src={media.fire.coals.src}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/80 to-ink" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(255,90,31,0.2),transparent_75%)]" />
      <div className="shell relative py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight text-ash md:text-5xl">
          {c.home.closing.titleA}{" "}
          <span className="ember-text">{c.home.closing.titleB}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] text-ash-2">
          {c.home.closing.sub}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/export-quote" size="lg">
            {c.cta.quote} →
          </Button>
          <Button href={company.whatsappHref} variant="outline" size="lg">
            {c.cta.whatsapp}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Pillars />
      <PlantLook />
      <Grades />
      <ProductPeek />
      <Benchmark />
      <TrustWall />
      <Faq />
      <ManagingPartner />
      <ClosingCTA />
    </>
  );
}
