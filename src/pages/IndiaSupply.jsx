import { useState } from "react";
import { Link } from "react-router-dom";
import { company } from "../data/site";
import { useMarket } from "../market-context";
import {
  Section,
  SectionHead,
  Button,
  Eyebrow,
  Coal,
  Fills,
} from "../components/ui";
import PageHero from "../components/PageHero";
import media, { clientLogos } from "../data/images";

const field =
  "w-full rounded-md border border-line bg-ink-2 px-4 py-3 text-sm text-ash placeholder:text-ash-3/70 focus:border-ember/60 focus:outline-none focus:ring-1 focus:ring-ember/40";
const label = "mb-2 block text-[13px] font-medium text-ash-2";

// Planning assumption behind the estimator. Replace with the real consumption
// figure once we have it measured across a few kitchens.
const KG_PER_STATION_HOUR = 0.35;

// Cities are operational facts, not copy, so they live here rather than in the
// locale files. Add or move a city between the three tiers as coverage changes.
const coverage = {
  priority: ["Coimbatore", "Tiruppur", "Erode", "[add city]"],
  standard: [
    "Chennai",
    "Bengaluru",
    "Hyderabad",
    "Kochi",
    "Madurai",
    "Mysuru",
    "[add city]",
  ],
  onRequest: ["Mumbai", "Pune", "Delhi NCR", "Goa", "Kolkata"],
};

function KeyValue({ k, v }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-line py-2.5 first:border-t-0">
      <span className="text-[14px] text-ash-3">{k}</span>
      <span className="text-end font-mono text-[14px] text-ash">
        <Fills>{v}</Fills>
      </span>
    </div>
  );
}

function Hero() {
  const { c } = useMarket();
  return (
    <PageHero
      eyebrow={c.india.hero.eyebrow}
      title={
        <>
          {c.india.hero.titleA}{" "}
          <span className="ember-text">{c.india.hero.titleB}</span>.
        </>
      }
      sub={c.india.hero.sub}
      image={media.horeca.grill}
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <div className="flex flex-wrap gap-3">
            <Button href="#india-form">{c.india.hero.ctaPrimary} →</Button>
            <Button variant="outline" href={company.whatsappHref}>
              {c.india.hero.ctaSecondary}
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {c.india.hero.chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/80 px-3.5 py-1.5 text-[12.5px] text-ash-2"
              >
                <Coal />
                <Fills>{chip}</Fills>
              </span>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <h2 className="text-[17px] font-bold text-ash">
            {c.india.glance.title}
          </h2>
          <div className="mt-4">
            {c.india.glance.rows.map((r) => (
              <KeyValue key={r.k} k={r.k} v={r.v} />
            ))}
          </div>
        </div>
      </div>
    </PageHero>
  );
}

// Two copies of the logo row scroll as one track, so the loop is seamless at
// -50%. Hovering pauses it, and reduced-motion users get a static row.
function ClientStrip() {
  const { c } = useMarket();
  const track = [...clientLogos, ...clientLogos];
  return (
    <section className="border-b border-line bg-ink-2 py-9">
      <p className="eyebrow mb-6 text-center">{c.india.clients.eyebrow}</p>
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-[marquee_26s_linear_infinite] items-center gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex h-[78px] shrink-0 items-center justify-center rounded-lg bg-[#f4f1ea] px-5"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className="h-11 w-auto max-w-[210px] object-contain md:h-13"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const { c } = useMarket();
  return (
    <Section tone="ink">
      <SectionHead
        eyebrow={c.india.useCases.eyebrow}
        title={c.india.useCases.title}
        sub={c.india.useCases.sub}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.india.useCases.items.map((u) => (
          <article key={u.title} className="panel panel-hover p-6">
            <h3 className="text-[18px] font-bold text-ash">{u.title}</h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-ash-3">
              {u.body}
            </p>
            <p className="mt-4 font-mono text-[11.5px] tracking-wide text-glow">
              {u.spec}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Comparison() {
  const { c } = useMarket();
  const t = c.india.compare;
  return (
    <Section tone="raised">
      <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <div className="mt-10 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[640px] border-collapse text-start">
          <thead>
            <tr>
              {[t.head.what, t.head.them].map((h) => (
                <th
                  key={h}
                  className="border-b border-line bg-ink-3 px-5 py-4 text-start font-mono text-[11.5px] font-medium tracking-[0.09em] text-ash uppercase"
                >
                  {h}
                </th>
              ))}
              <th className="border-x border-b border-ember/40 border-b-line bg-linear-to-b from-[#3a1f0e] to-[#2b1608] px-5 py-4 text-start font-mono text-[11.5px] font-medium tracking-[0.09em] text-glow uppercase">
                {t.head.us}
              </th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r) => (
              <tr key={r.k} className="group">
                <td className="border-b border-line bg-ink-2 px-5 py-4 text-[14px] text-ash-2 group-last:border-b-0">
                  {r.k}
                </td>
                <td className="border-b border-line bg-ink-2 px-5 py-4 text-[14px] text-ash-3 group-last:border-b-0">
                  {r.them}
                </td>
                <td className="border-x border-b border-ember/25 border-b-line bg-ember/8 px-5 py-4 text-[14px] font-medium text-ash group-last:border-b-0">
                  {r.us}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 font-mono text-[11.5px] text-ash-3 md:hidden">
        {t.swipe}
      </p>
    </Section>
  );
}

function Packs() {
  const { c } = useMarket();
  return (
    <Section tone="ink">
      <SectionHead
        eyebrow={c.india.packs.eyebrow}
        title={c.india.packs.title}
        sub={c.india.packs.sub}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.india.packs.items.map((p) => (
          <div key={p.size} className="panel panel-hover p-6 text-center">
            <div className="font-display text-[1.9rem] font-extrabold text-ash">
              {p.size}
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-ash-3">
              {p.for}
            </p>
            <p className="mt-4 border-t border-line pt-3 font-mono text-[11.5px] text-glow">
              <Fills>{p.moq}</Fills>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Indicative planning tool only — the numbers are a model, not a quote.
function Estimator() {
  const { c } = useMarket();
  const t = c.india.calc;
  const [outlets, setOutlets] = useState(3);
  const [stations, setStations] = useState(2);
  const [hours, setHours] = useState(8);

  const perOutlet = stations * hours * KG_PER_STATION_HOUR * 30;
  const total = perOutlet * outlets;
  const fmt = (n) => Math.round(n).toLocaleString("en-IN");
  const pack = perOutlet < 150 ? "5 kg" : perOutlet < 600 ? "10 kg" : t.bulkPack;
  const cycle =
    total < 300 ? t.monthly : total < 2000 ? t.fortnightly : t.weekly;

  const sliders = [
    { id: "outlets", label: t.outlets, value: outlets, set: setOutlets, min: 1, max: 50 },
    { id: "stations", label: t.stations, value: stations, set: setStations, min: 1, max: 10 },
    { id: "hours", label: t.hours, value: hours, set: setHours, min: 2, max: 18 },
  ];

  return (
    <Section tone="raised">
      <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <div className="panel mt-9 grid gap-8 p-7 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          {sliders.map((s) => (
            <div key={s.id}>
              <label className={label} htmlFor={`calc-${s.id}`}>
                {s.label}: <b className="text-ash">{s.value}</b>
              </label>
              <input
                id={`calc-${s.id}`}
                type="range"
                min={s.min}
                max={s.max}
                value={s.value}
                onChange={(e) => s.set(+e.target.value)}
                className="w-full accent-ember"
              />
            </div>
          ))}
          <p className="font-mono text-[12.5px] text-ash-3">
            {t.assume.replace("{kg}", KG_PER_STATION_HOUR)}
          </p>
        </div>

        <div className="rounded-lg border border-line bg-ink-3 p-6">
          <div className="font-display text-[2.2rem] font-extrabold text-glow">
            {fmt(total)} {t.unitKg}
          </div>
          <p className="mt-1 text-[12.5px] text-ash-3">{t.kgMonth}</p>
          <div className="mt-5">
            <KeyValue k={t.perOutlet} v={`${fmt(perOutlet)} ${t.unitKg}`} />
            <KeyValue k={t.suggestedPack} v={pack} />
            <KeyValue k={t.cycle} v={cycle} />
            <KeyValue k={t.rate} v={t.ratePlaceholder} />
          </div>
        </div>
      </div>
    </Section>
  );
}

function CityPills({ cities, highlight = false }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {cities.map((city) => (
        <span
          key={city}
          className={`rounded-full border px-4 py-2 text-[13px] transition-colors ${
            highlight
              ? "border-ember/45 bg-ember/8 text-glow"
              : "border-line bg-ink-2 text-ash-2 hover:border-ember/40 hover:text-ash"
          }`}
        >
          <Fills>{city}</Fills>
        </span>
      ))}
    </div>
  );
}

function Coverage() {
  const { c } = useMarket();
  const t = c.india.coverage;
  return (
    <Section tone="ink">
      <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow mb-3.5">{t.priority}</p>
          <CityPills cities={coverage.priority} highlight />
          <p className="eyebrow mt-7 mb-3.5">
            <Fills>{t.standard}</Fills>
          </p>
          <CityPills cities={coverage.standard} />
          <p className="eyebrow mt-7 mb-3.5">{t.onRequest}</p>
          <CityPills cities={coverage.onRequest} />
        </div>

        <div className="panel p-7">
          <h3 className="text-[18px] font-bold text-ash">{t.chains.title}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-ash-3">
            {t.chains.body}
          </p>
          <div className="mt-5">
            {t.chains.rows.map((r) => (
              <KeyValue key={r.k} k={r.k} v={r.v} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Steps() {
  const { c } = useMarket();
  return (
    <Section tone="raised">
      <SectionHead
        eyebrow={c.india.steps.eyebrow}
        title={c.india.steps.title}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.india.steps.items.map((s) => (
          <div key={s.n} className="panel panel-hover p-6">
            <span className="font-mono text-[12px] text-ember">{s.n}</span>
            <h3 className="mt-2.5 text-[17px] font-bold text-ash">{s.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ash-3">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  const { c } = useMarket();
  const [open, setOpen] = useState(0);
  return (
    <Section tone="ink">
      <SectionHead
        eyebrow={c.india.faq.eyebrow}
        title={c.india.faq.title}
        align="center"
      />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {c.india.faq.items.map((f, i) => {
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
                  className={`text-[18px] font-semibold ${
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
                <p className="pb-6 pe-10 text-[16px] leading-relaxed text-ash-2">
                  <Fills>{f.a}</Fills>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Group({ n, title, children }) {
  return (
    <fieldset className="mb-5 rounded-xl border border-line bg-linear-to-b from-[#161619] to-[#121214] p-6 last:mb-0">
      <legend className="flex items-center gap-2.5 px-1 font-mono text-[11.5px] font-bold tracking-[0.09em] text-glow uppercase">
        <span className="grid size-5.5 place-items-center rounded-full border border-ember/40 bg-ember/15 text-[11px]">
          {n}
        </span>
        {title}
      </legend>
      <div className="mt-4 space-y-4">{children}</div>
    </fieldset>
  );
}

function Select({ id, label: text, options, value, onChange }) {
  return (
    <div>
      <label className={label} htmlFor={id}>
        {text}
      </label>
      <select id={id} className={field} value={value} onChange={onChange}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Sent({ onEdit }) {
  const { c } = useMarket();
  return (
    <div className="mt-8 rounded-lg border border-ember/40 bg-ember/5 p-7">
      <p className="font-display text-xl font-bold text-ash">
        {c.india.form.sentTitle}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ash-2">
        {c.india.form.sentBody}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={company.whatsappHref} size="sm">
          {c.india.form.sentWhatsapp}
        </Button>
        <Button variant="outline" size="sm" onClick={onEdit}>
          {c.india.form.sentEdit}
        </Button>
      </div>
    </div>
  );
}

function EnquiryForm() {
  const { c } = useMarket();
  const f = c.india.form;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    business: "",
    type: f.businessTypes[0],
    outlets: f.outletBands[0],
    gstin: "",
    station: f.usedWhereOptions[0],
    monthly: f.monthlyOptions[0],
    pack: f.packOptions[0],
    current: f.currentFuelOptions[0],
    city: "",
    pin: "",
    contact: "",
    designation: "",
    phone: "",
    email: "",
    notes: "",
    sample: true,
    consent: false,
  });
  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));
  const check = (k) => (e) =>
    setForm((s) => ({ ...s, [k]: e.target.checked }));

  return (
    <div className="panel p-7 md:p-9" id="india-form">
      <Eyebrow className="mb-2">{f.eyebrow}</Eyebrow>
      <h2 className="text-2xl font-extrabold text-ash">{f.title}</h2>
      <p className="mt-3 text-[14px] text-ash-3">{f.sub}</p>

      {sent ? (
        <Sent onEdit={() => setSent(false)} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-7"
        >
          <Group n="1" title={f.group1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="in-business">
                  {f.businessName}
                </label>
                <input
                  id="in-business"
                  required
                  className={field}
                  placeholder={f.businessNamePlaceholder}
                  value={form.business}
                  onChange={set("business")}
                />
              </div>
              <Select
                id="in-type"
                label={f.businessType}
                options={f.businessTypes}
                value={form.type}
                onChange={set("type")}
              />
              <Select
                id="in-outlets"
                label={f.outlets}
                options={f.outletBands}
                value={form.outlets}
                onChange={set("outlets")}
              />
              <div>
                <label className={label} htmlFor="in-gstin">
                  {f.gstin}{" "}
                  <span className="font-normal text-ash-3">{f.gstinNote}</span>
                </label>
                <input
                  id="in-gstin"
                  className={field}
                  placeholder={f.gstinPlaceholder}
                  value={form.gstin}
                  onChange={set("gstin")}
                />
              </div>
            </div>
          </Group>

          <Group n="2" title={f.group2}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                id="in-station"
                label={f.usedWhere}
                options={f.usedWhereOptions}
                value={form.station}
                onChange={set("station")}
              />
              <Select
                id="in-monthly"
                label={f.monthly}
                options={f.monthlyOptions}
                value={form.monthly}
                onChange={set("monthly")}
              />
              <Select
                id="in-pack"
                label={f.packSize}
                options={f.packOptions}
                value={form.pack}
                onChange={set("pack")}
              />
              <Select
                id="in-current"
                label={f.currentFuel}
                options={f.currentFuelOptions}
                value={form.current}
                onChange={set("current")}
              />
            </div>
          </Group>

          <Group n="3" title={f.group3}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="in-city">
                  {f.city}
                </label>
                <input
                  id="in-city"
                  required
                  className={field}
                  placeholder={f.cityPlaceholder}
                  value={form.city}
                  onChange={set("city")}
                />
              </div>
              <div>
                <label className={label} htmlFor="in-pin">
                  {f.pin}
                </label>
                <input
                  id="in-pin"
                  inputMode="numeric"
                  className={field}
                  placeholder={f.pinPlaceholder}
                  value={form.pin}
                  onChange={set("pin")}
                />
              </div>
              <div>
                <label className={label} htmlFor="in-contact">
                  {f.contact}
                </label>
                <input
                  id="in-contact"
                  required
                  className={field}
                  placeholder={f.contactPlaceholder}
                  value={form.contact}
                  onChange={set("contact")}
                />
              </div>
              <div>
                <label className={label} htmlFor="in-designation">
                  {f.designation}
                </label>
                <input
                  id="in-designation"
                  className={field}
                  placeholder={f.designationPlaceholder}
                  value={form.designation}
                  onChange={set("designation")}
                />
              </div>
              <div>
                <label className={label} htmlFor="in-phone">
                  {f.phone}
                </label>
                <input
                  id="in-phone"
                  required
                  className={field}
                  placeholder="+91 "
                  value={form.phone}
                  onChange={set("phone")}
                />
              </div>
              <div>
                <label className={label} htmlFor="in-email">
                  {f.email}
                </label>
                <input
                  id="in-email"
                  type="email"
                  required
                  className={field}
                  placeholder={f.emailPlaceholder}
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
            </div>
            <div>
              <label className={label} htmlFor="in-notes">
                {f.notes}
              </label>
              <textarea
                id="in-notes"
                rows={3}
                className={field}
                placeholder={f.notesPlaceholder}
                value={form.notes}
                onChange={set("notes")}
              />
            </div>
          </Group>

          <div className="mt-5 space-y-2">
            <label className="flex gap-3 rounded-md p-2.5 text-[13px] leading-relaxed text-ash-2 hover:bg-ink-2">
              <input
                type="checkbox"
                className="mt-1 accent-ember"
                checked={form.sample}
                onChange={check("sample")}
              />
              <span>{f.sampleOptIn}</span>
            </label>
            <label className="flex gap-3 rounded-md p-2.5 text-[13px] leading-relaxed text-ash-2 hover:bg-ink-2">
              <input
                type="checkbox"
                required
                className="mt-1 accent-ember"
                checked={form.consent}
                onChange={check("consent")}
              />
              <span>
                {f.consentA}{" "}
                <Link to="/privacy" className="text-glow underline">
                  {f.consentLink}
                </Link>
                .
              </span>
            </label>
          </div>

          <Button type="submit" size="lg" className="mt-5 w-full">
            {f.submit} →
          </Button>
        </form>
      )}
    </div>
  );
}

function Desk() {
  const { c } = useMarket();
  const d = c.india.desk;
  const rows = [
    { k: d.whatsapp, v: company.whatsapp, href: company.whatsappHref },
    { k: d.email, v: d.emailValue },
    { k: d.plant, v: d.plantValue },
    { k: d.hours, v: d.hoursValue },
  ];
  return (
    <div className="panel p-7">
      <h3 className="text-[18px] font-bold text-ash">{d.title}</h3>
      <p className="mt-2.5 text-[14px] leading-relaxed text-ash-3">{d.body}</p>
      <div className="mt-4">
        {rows.map((r) => (
          <div
            key={r.k}
            className="flex items-center gap-3 border-t border-line py-3.5"
          >
            <Coal />
            <div>
              <div className="text-[11.5px] text-ash-3">{r.k}</div>
              {r.href ? (
                <a
                  href={r.href}
                  className="font-mono text-[13.5px] text-ash hover:text-glow"
                >
                  {r.v}
                </a>
              ) : (
                <div className="font-mono text-[13.5px] text-ash">
                  <Fills>{r.v}</Fills>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-line pt-5">
        <p className="eyebrow mb-2.5">{d.exportEyebrow}</p>
        <p className="text-[13.5px] leading-relaxed text-ash-3">
          {d.exportBody}
        </p>
        <Button to="/export-quote" variant="outline" className="mt-4 w-full">
          {d.exportCta} →
        </Button>
      </div>
    </div>
  );
}

export default function IndiaSupply() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <UseCases />
      <Comparison />
      <Packs />
      <Estimator />
      <Coverage />
      <Steps />
      <Faq />
      <Section tone="raised">
        <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <EnquiryForm />
          <Desk />
        </div>
      </Section>
    </>
  );
}
