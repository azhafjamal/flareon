import { products, briquetteShapes, grades, oem } from "../data/site";
import { useMarket } from "../market-context";
import { Section, SectionHead, Button, Eyebrow, Coal } from "../components/ui";
import PageHero from "../components/PageHero";
import { Figure } from "../components/Figure";
import media from "../data/images";

const shapeImage = {
  hexagon: media.shapes.hexagon,
  pillow: media.shapes.pillow,
  cube: media.shapes.cube,
};

// One card per pressed shape, with what actually sets it apart.
function ShapeCard({ shape }) {
  const { c } = useMarket();
  const image = shapeImage[shape.id];
  const copy = c.briquetteShapes[shape.id];
  return (
    <article className="panel panel-hover group flex flex-col overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="aspect-4/3 w-full border-b border-line object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-[21px] font-bold text-ash">{copy.name}</h3>
        <ul className="mt-5 space-y-3">
          {copy.points.map((pt) => (
            <li key={pt} className="flex gap-2.5 text-[15px] leading-snug text-ash-3">
              <Coal className="mt-1.5" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// Grade tiers, folded into the briquette section as cards.
function GradeCard({ g }) {
  const { c } = useMarket();
  const tier = c.grades[g.name];
  return (
    <div
      className={`panel panel-hover relative p-6 ${
        g.highlight ? "border-ember/50" : ""
      }`}
    >
      {g.highlight && (
        <span className="absolute -top-2.5 left-6 rounded-full bg-linear-to-b from-ember to-ember-2 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-white uppercase">
          {c.specs.mostExported}
        </span>
      )}
      <h4 className="font-display text-xl font-extrabold text-ash">{tier.name}</h4>
      <p className="mt-1 text-[14px] text-ash-3">{tier.use}</p>
      <dl className="mt-5 divide-y divide-line border-y border-line">
        {[
          [c.specs.ash, g.ash],
          [c.specs.moisture, g.moisture],
          [c.specs.burn, c.specs.extraLong],
          [c.specs.fixedCarbon, g.fixedCarbon],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between py-2.5">
            <dt className="text-[14px] text-ash-3">{k}</dt>
            <dd className="font-mono text-[14px] font-medium text-ash">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Briquettes() {
  const { c } = useMarket();
  const p = products[0];
  const item = c.productItems[p.id];
  return (
    <Section tone="ink">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
            {item.name}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ash-2">
            {item.blurb}
          </p>
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {(item.pointsFull ?? item.points).map((pt) => (
              <li key={pt} className="flex gap-2.5 text-[17px] text-ash-2">
                <Coal className="mt-2" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <Button to="/export-quote" className="mt-8">
            {item.cta} →
          </Button>
        </div>
        <Figure
          image={media.fire.hexagon}
          ratio="wide"
          glow
          label={c.products.briquettes.figureLabel}
          note={c.products.briquettes.figureNote}
        />
      </div>

      <div className="mt-20">
        <SectionHead
          eyebrow={c.products.briquettes.shapesEyebrow}
          title={c.products.briquettes.shapesTitle}
          sub={c.products.briquettes.shapesSub}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {briquetteShapes.map((s) => (
            <ShapeCard key={s.id} shape={s} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHead
          eyebrow={c.products.briquettes.gradesEyebrow}
          title={c.products.briquettes.gradesTitle}
          sub={c.products.briquettes.gradesSub}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {grades.map((g) => (
            <GradeCard key={g.name} g={g} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ActivatedCarbon() {
  const { c } = useMarket();
  const p = products[1];
  const item = c.productItems[p.id];
  return (
    <Section tone="raised">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:[&>*:first-child]:order-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
              {item.name}
            </h2>
            <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 font-mono text-[11px] tracking-widest text-glow uppercase">
              {c.common.comingSoon}
            </span>
          </div>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ash-2">
            {item.blurb}
          </p>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {[
              c.products.carbon.specGrades,
              c.products.carbon.specIodine,
              c.products.carbon.specMesh,
              c.products.carbon.specPacking,
            ].map((k) => (
              <div key={k} className="flex items-baseline justify-between gap-6 py-3.5">
                <dt className="flex items-center gap-2 text-[15px] text-ash-3">
                  <Coal /> {k}
                </dt>
                <dd className="text-end font-mono text-[14px] text-ash-3">
                  {c.common.comingSoon}
                </dd>
              </div>
            ))}
          </dl>

          <Button
            as="button"
            type="button"
            disabled
            aria-disabled="true"
            title={c.products.carbon.ctaTitle}
            className="mt-8 cursor-not-allowed"
          >
            {c.products.carbon.ctaDisabled}
          </Button>
        </div>
        {/* No product photography until the line is running. */}
        {/* relative + overflow-hidden keep the pulse glow inside the panel —
            without a positioned parent it escaped and stretched the page. */}
        <div className="panel relative grid aspect-16/10 place-items-center overflow-hidden p-8 text-center">
          <div>
            <span className="ember-pulse pointer-events-none absolute inset-0 -z-10" />
            <p className="font-display text-4xl font-black tracking-tight text-ash md:text-5xl">
              {c.products.carbon.comingSoonA}{" "}
              <span className="ember-text">{c.products.carbon.comingSoonB}</span>
            </p>
            <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-ash-3">
              {c.products.carbon.comingSoonNote}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Products() {
  const { c } = useMarket();
  return (
    <>
      <PageHero
        eyebrow={c.products.hero.eyebrow}
        title={
          <>
            {c.products.hero.titleA}{" "}
            <span className="ember-text">{c.products.hero.titleB}</span>
          </>
        }
        sub={c.products.hero.sub}
      />

      <Briquettes />
      <ActivatedCarbon />

      <Section tone="ink" id="oem">
        <SectionHead
          eyebrow={c.products.oem.eyebrow}
          title={c.products.oem.title}
          sub={c.products.oem.sub}
        />
        <div className="mt-12 grid items-start gap-5 lg:grid-cols-[1fr_1.1fr]">
          <Figure
            image={media.logistics.retailBags}
            ratio="wide"
            label={c.products.oem.figureLabel}
            note={c.products.oem.figureNote}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {oem.map((o, i) => (
              <div key={o.title} className="panel panel-hover p-7">
                <h3 className="text-[19px] font-bold text-ash">{c.oem[i].title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-ash-3">
                  {c.oem[i].body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/export-quote">{c.cta.oemTemplate}</Button>
          <Button to="/export-quote#briquette-form" variant="outline">
            {c.cta.openExportDesk}
          </Button>
        </div>
      </Section>
    </>
  );
}
