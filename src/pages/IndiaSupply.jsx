import { useState } from "react";
import { Link } from "react-router-dom";
import { company } from "../data/site";
import { useMarket } from "../market-context";
import {
  Section,
  SectionHead,
  Button,
  Coal,
  Fills,
  Honeypot,
} from "../components/ui";
import PageHero from "../components/PageHero";
import { clientLogos } from "../data/images";
import { submitForm } from "../lib/submitForm";
import { buildWhatsAppUrl } from "../lib/whatsapp";

const field =
  "w-full rounded-md border border-line bg-ink-2 px-4 py-3 text-base text-ash sm:text-sm placeholder:text-ash-3/70 focus:border-ember/60 focus:outline-none focus:ring-1 focus:ring-ember/40";
const label = "mb-2 block text-[13px] font-medium text-ash-2";

// Planning assumption behind the estimator. Replace with the real consumption
// figure once we have it measured across a few kitchens.
const KG_PER_STATION_HOUR = 0.35;

// Cities are operational facts, not copy, so they live here rather than in the
// locale files. Add or move a city between the three tiers as coverage changes.
const coverage = {
  priority: [
    "Coimbatore",
    "Tiruppur",
    "Erode",
    "Palladam",
    "Pollachi",
    "Salem",
    "Karur",
    "Namakkal",
    "Avinashi",
    "Perundurai",
    "Mettupalayam",
    "Udumalpet",
  ],
  standard: [
    "Chennai",
    "Bengaluru",
    "Hyderabad",
    "Kochi",
    "Madurai",
    "Mysuru",
    "Tiruchirapalli",
    "Thiruvananthapuram",
    "Vijayawada",
    "Visakhapatnam",
    "Mangaluru",
    "Puducherry",
  ],
  onRequest: [
    "Mumbai",
    "Pune",
    "Delhi NCR",
    "Kolkata",
    "Ahmedabad",
    "Surat",
    "Jaipur",
    "Lucknow",
    "Chandigarh",
    "Indore",
    "Nagpur",
    "Bhubaneswar",
    "Guwahati",
    "Patna",
    "Goa",
  ],
};

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
    >
      <div className="flex flex-wrap gap-3">
        <Button href="#india-form">{c.india.hero.ctaPrimary} →</Button>
        <Button variant="outline" href={company.whatsappHref}>
          {c.india.hero.ctaSecondary}
        </Button>
      </div>
    </PageHero>
  );
}

// Two copies of the logo row scroll as one track, so the loop is seamless at
// -50%. Hovering pauses it, and reduced-motion users get a static row. Only the
// first copy is exposed to assistive tech — the second exists purely to make
// the loop seamless, and would otherwise read every client name twice.
function ClientStrip() {
  const { c } = useMarket();
  const track = [...clientLogos, ...clientLogos];
  return (
    <section className="border-b border-line bg-ink-2 py-9">
      <p className="eyebrow mb-6 text-center">{c.india.clients.eyebrow}</p>
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-[marquee_26s_linear_infinite] items-center gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((logo, i) => {
            const isClone = i >= clientLogos.length;
            return (
              <div
                key={`${logo.src}-${i}`}
                aria-hidden={isClone || undefined}
                className="flex h-[78px] shrink-0 items-center justify-center rounded-lg bg-[#f4f1ea] px-5"
              >
                <img
                  src={logo.src}
                  alt={isClone ? "" : logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-auto max-w-[210px] object-contain md:h-13"
                />
              </div>
            );
          })}
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
        <table className="w-full min-w-[680px] border-collapse text-start">
          <thead>
            <tr>
              {[t.head.what, t.head.them].map((h) => (
                <th
                  key={h}
                  className="border-b border-line bg-ink-3 px-6 py-5 text-start font-mono text-[12.5px] font-semibold tracking-[0.09em] text-ash uppercase"
                >
                  {h}
                </th>
              ))}
              <th className="border-x border-b border-ember/40 border-b-line bg-linear-to-b from-[#3a1f0e] to-[#2b1608] px-6 py-5 text-start font-mono text-[12.5px] font-semibold tracking-[0.09em] text-glow uppercase">
                {t.head.us}
              </th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r, i) => (
              <tr key={r.k} className={`group ${i % 2 === 1 ? "bg-white/[0.015]" : ""}`}>
                <td className="border-b border-line px-6 py-5 text-[16px] font-semibold text-ash group-last:border-b-0">
                  {r.k}
                </td>
                <td className="border-b border-line px-6 py-5 text-[15px] leading-relaxed text-ash-3 group-last:border-b-0">
                  <span className="me-2 text-ash-3/60">✕</span>
                  {r.them}
                </td>
                <td className="border-x border-b border-ember/25 border-b-line bg-ember/8 px-6 py-5 text-[15px] leading-relaxed font-medium text-ash group-last:border-b-0">
                  <span className="me-2 text-glow">✓</span>
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
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {c.india.packs.items.map((p) => (
          <div key={p.size} className="panel panel-hover p-7 text-center">
            <div className="font-display text-[2.1rem] font-black tracking-tight text-ash">
              {p.size}
            </div>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ash-3">
              {p.for}
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
      <div className="panel mt-9 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-2">
        <div className="space-y-7 bg-ink-2 p-7 md:p-9">
          {sliders.map((s) => (
            <div key={s.id}>
              <label
                className="mb-2.5 flex items-baseline justify-between gap-3 font-mono text-[11.5px] tracking-[0.08em] text-ash-3 uppercase"
                htmlFor={`calc-${s.id}`}
              >
                <span>{s.label}</span>
                <span className="shrink-0 font-mono text-[15px] font-bold text-glow tabular-nums">
                  {String(s.value).padStart(2, "0")}
                </span>
              </label>
              <input
                id={`calc-${s.id}`}
                type="range"
                min={s.min}
                max={s.max}
                value={s.value}
                onChange={(e) => s.set(+e.target.value)}
                style={{ "--fill": `${((s.value - s.min) / (s.max - s.min)) * 100}%` }}
                className="tech-slider w-full"
              />
            </div>
          ))}
          <p className="border-t border-line pt-5 font-mono text-[12px] leading-relaxed text-ash-3">
            <span className="text-glow">// </span>
            {t.assume.replace("{kg}", KG_PER_STATION_HOUR)}
          </p>
        </div>

        <div className="tech-grid relative overflow-hidden bg-ink-3 p-7 md:p-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,90,31,0.16),transparent_70%)]" />
          <div className="relative">
            <p className="font-mono text-[11px] tracking-[0.1em] text-ash-3 uppercase">
              {t.kgMonth}
            </p>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-display text-[2.6rem] leading-none font-black text-glow [text-shadow:0_0_28px_rgba(255,90,31,0.45)]">
                {fmt(total)}
              </span>
              <span className="font-mono text-[15px] text-ash-3">
                {t.unitKg}/mo
              </span>
            </div>

            <div className="mt-6 divide-y divide-line rounded-lg border border-line bg-ink-2/70">
              {[
                [t.perOutlet, `${fmt(perOutlet)} ${t.unitKg}`],
                [t.suggestedPack, pack],
                [t.cycle, cycle],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <span className="font-mono text-[12px] text-ash-3 uppercase tracking-wide">
                    {k}
                  </span>
                  <span className="font-mono text-[14px] font-medium text-ash">
                    <Fills>{v}</Fills>
                  </span>
                </div>
              ))}
            </div>

            <Button href="#india-form" size="sm" className="mt-6 w-full">
              {t.rateCta} →
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CityPills({ cities, highlight = false, trailing }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {cities.map((city) => (
        <span
          key={city}
          className={`rounded-full border px-4 py-2 text-[15px] transition-colors ${
            highlight
              ? "border-ember/45 bg-ember/8 text-glow"
              : "border-line bg-ink-2 text-ash-2 hover:border-ember/40 hover:text-ash"
          }`}
        >
          <Fills>{city}</Fills>
        </span>
      ))}
      {trailing && (
        <span className="rounded-full border border-dashed border-ember/40 px-4 py-2 text-[15px] text-glow">
          {trailing}
        </span>
      )}
    </div>
  );
}

function Coverage() {
  const { c } = useMarket();
  const t = c.india.coverage;
  return (
    <Section tone="ink">
      <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <div className="mt-10">
        <p className="eyebrow mb-4 text-[13px]">{t.priority}</p>
        <CityPills cities={coverage.priority} highlight />
        <p className="eyebrow mt-9 mb-4 text-[13px]">
          <Fills>{t.standard}</Fills>
        </p>
        <CityPills cities={coverage.standard} />
        <p className="eyebrow mt-9 mb-4 text-[13px]">{t.onRequest}</p>
        <CityPills cities={coverage.onRequest} trailing={t.more} />
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

function Sent({ onEdit, waUrl }) {
  const { c } = useMarket();
  return (
    <div className="mt-8 rounded-lg border border-ember/40 bg-ember/5 p-7">
      <p className="font-display text-xl font-bold text-ash">
        {c.india.form.sentTitle}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ash-2">
        {c.india.form.sentBody}
      </p>

      <div className="mt-6 rounded-md border border-line bg-ink-2 p-5">
        <p className="text-sm font-semibold text-ash">
          {c.india.form.sentWhatsappNudge}
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ash-3">
          {c.india.form.sentWhatsappNudgeNote}
        </p>
        <Button href={waUrl || company.whatsappHref} size="sm" className="mt-4">
          {c.india.form.sentWhatsapp} →
        </Button>
      </div>

      <button
        type="button"
        onClick={onEdit}
        className="mt-4 text-[13px] text-ash-3 underline hover:text-ash-2"
      >
        {c.india.form.sentEdit}
      </button>
    </div>
  );
}

function SendError({ onRetry }) {
  const { c } = useMarket();
  return (
    <div className="mt-5 rounded-lg border border-[#e5484d]/40 bg-[#e5484d]/8 p-5">
      <p className="text-sm font-bold text-ash">{c.india.form.errorTitle}</p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ash-2">
        {c.india.form.errorBody}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button href={company.whatsappHref} size="sm" variant="outline">
          WhatsApp
        </Button>
        <Button size="sm" onClick={onRetry}>
          {c.india.form.errorRetry}
        </Button>
      </div>
    </div>
  );
}

function EnquiryForm() {
  const { c } = useMarket();
  const f = c.india.form;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [form, setForm] = useState({
    business: "",
    contact: "",
    phone: "",
    city: "",
    monthly: f.monthlyOptions[0],
    email: "",
    notes: "",
    sample: true,
    consent: false,
    botcheck: false,
  });
  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));
  const check = (k) => (e) =>
    setForm((s) => ({ ...s, [k]: e.target.checked }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const subject = `India HORECA enquiry — ${form.business || form.contact}`;
    try {
      await submitForm({ subject, data: form });
      const url = buildWhatsAppUrl({
        phone: company.whatsapp,
        subject,
        data: form,
        skip: ["consent"],
      });
      setWaUrl(url);
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="panel p-7 md:p-9" id="india-form">
      <h2 className="text-2xl font-extrabold text-ash">{f.title}</h2>
      <p className="mt-3 text-[14px] text-ash-3">{f.sub}</p>

      {sent ? (
        <Sent onEdit={() => setSent(false)} waUrl={waUrl} />
      ) : (
        <form onSubmit={handleSubmit} className="mt-7">
          <Honeypot value={form.botcheck} onChange={check("botcheck")} />
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
            <Select
              id="in-monthly"
              label={f.monthly}
              options={f.monthlyOptions}
              value={form.monthly}
              onChange={set("monthly")}
            />
            <div>
              <label className={label} htmlFor="in-email">
                {f.email}{" "}
                <span className="font-normal text-ash-3">{f.optional}</span>
              </label>
              <input
                id="in-email"
                type="email"
                className={field}
                placeholder={f.emailPlaceholder}
                value={form.email}
                onChange={set("email")}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className={label} htmlFor="in-notes">
              {f.notes}{" "}
              <span className="font-normal text-ash-3">{f.optional}</span>
            </label>
            <textarea
              id="in-notes"
              rows={2}
              className={field}
              placeholder={f.notesPlaceholder}
              value={form.notes}
              onChange={set("notes")}
            />
          </div>

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

          <Button type="submit" size="lg" className="mt-5 w-full" disabled={sending}>
            {sending ? c.common.sending : `${f.submit} →`}
          </Button>
          {error && <SendError onRetry={() => setError(false)} />}
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
      <h3 className="text-[20px] font-bold text-ash">{d.title}</h3>
      <p className="mt-2.5 text-[16px] leading-relaxed text-ash-3">{d.body}</p>
      <div className="mt-4">
        {rows.map((r) => (
          <div
            key={r.k}
            className="flex items-center gap-3 border-t border-line py-4"
          >
            <Coal />
            <div>
              <div className="text-[13px] text-ash-3">{r.k}</div>
              {r.href ? (
                <a
                  href={r.href}
                  className="font-mono text-[15.5px] text-ash hover:text-glow"
                >
                  {r.v}
                </a>
              ) : (
                <div className="font-mono text-[15.5px] text-ash">
                  <Fills>{r.v}</Fills>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-line pt-5">
        <p className="eyebrow mb-2.5">{d.exportEyebrow}</p>
        <p className="text-[15px] leading-relaxed text-ash-3">
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
