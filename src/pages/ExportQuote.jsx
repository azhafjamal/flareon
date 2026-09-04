import { useState } from "react";
import {
  company,
  containers,
  destinationPorts,
  activeDestinations,
  grades,
} from "../data/site";
import { useMarket } from "../market-context";
import { Section, SectionHead, Button, Eyebrow, Coal } from "../components/ui";
import PageHero from "../components/PageHero";
import media from "../data/images";
import { submitForm } from "../lib/submitForm";
import { buildWhatsAppUrl } from "../lib/whatsapp";

const field =
  "w-full rounded-md border border-line bg-ink-2 px-4 py-3 text-sm text-ash placeholder:text-ash-3/70 focus:border-ember/60 focus:outline-none focus:ring-1 focus:ring-ember/40";
const label = "mb-2 block text-[13px] font-medium text-ash-2";

const CARTON_SIZES = [1, 3, 5, 10];
const OTHER_PORT = "Other / custom port";

// Every <option value> stays the canonical English string — the form payload
// reads the same whatever locale the buyer filled it in from. Only the visible
// label is translated.
function ContactFields({ form, set, idPrefix }) {
  const { c } = useMarket();
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor={`${idPrefix}-name`}>
          {c.exportDesk.form.fullName}
        </label>
        <input
          id={`${idPrefix}-name`}
          required
          className={field}
          placeholder={c.exportDesk.form.namePlaceholder}
          value={form.name}
          onChange={set("name")}
        />
      </div>
      <div>
        <label className={label} htmlFor={`${idPrefix}-company`}>
          {c.exportDesk.form.companyName}
        </label>
        <input
          id={`${idPrefix}-company`}
          required
          className={field}
          placeholder={c.exportDesk.form.companyPlaceholder}
          value={form.company}
          onChange={set("company")}
        />
      </div>
      <div>
        <label className={label} htmlFor={`${idPrefix}-email`}>
          {c.exportDesk.form.businessEmail}
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          required
          className={field}
          placeholder={c.exportDesk.form.emailPlaceholder}
          value={form.email}
          onChange={set("email")}
        />
      </div>
      <div>
        <label className={label} htmlFor={`${idPrefix}-phone`}>
          {c.exportDesk.form.whatsappPhone}
        </label>
        <input
          id={`${idPrefix}-phone`}
          className={field}
          placeholder="+971 ..."
          value={form.phone}
          onChange={set("phone")}
        />
      </div>
    </div>
  );
}

// Destination port with a free-text fallback when the port isn't listed.
function PortFields({ form, set, idPrefix }) {
  const { c } = useMarket();
  return (
    <>
      <div>
        <label className={label} htmlFor={`${idPrefix}-port`}>
          {c.exportDesk.form.destinationPort}
        </label>
        <select
          id={`${idPrefix}-port`}
          className={field}
          value={form.port}
          onChange={set("port")}
        >
          {destinationPorts.map((d) => (
            <option key={d.port} value={d.port}>
              {c.ports[d.port] ?? d.port}
            </option>
          ))}
        </select>
      </div>
      {form.port === OTHER_PORT && (
        <div>
          <label className={label} htmlFor={`${idPrefix}-customPort`}>
            {c.exportDesk.form.tellUsPort}
          </label>
          <input
            id={`${idPrefix}-customPort`}
            required
            className={field}
            placeholder={c.exportDesk.form.portPlaceholder}
            value={form.customPort}
            onChange={set("customPort")}
          />
        </div>
      )}
    </>
  );
}

function Sent({ onEdit, waUrl }) {
  const { c } = useMarket();
  return (
    <div className="mt-8 rounded-lg border border-ember/40 bg-ember/5 p-7">
      <p className="font-display text-xl font-bold text-ash">
        {c.exportDesk.sent.title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ash-2">
        {c.exportDesk.sent.body}
      </p>

      <div className="mt-6 rounded-md border border-line bg-ink-2 p-5">
        <p className="text-sm font-semibold text-ash">
          {c.exportDesk.sent.whatsappNudge}
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ash-3">
          {c.exportDesk.sent.whatsappNudgeNote}
        </p>
        <Button href={waUrl || company.whatsappHref} size="sm" className="mt-4">
          {c.exportDesk.sent.whatsapp} →
        </Button>
      </div>

      <button
        type="button"
        onClick={onEdit}
        className="mt-4 text-[13px] text-ash-3 underline hover:text-ash-2"
      >
        {c.exportDesk.sent.edit}
      </button>
    </div>
  );
}

function SendError({ onRetry }) {
  const { c } = useMarket();
  return (
    <div className="mt-5 rounded-lg border border-[#e5484d]/40 bg-[#e5484d]/8 p-5">
      <p className="text-sm font-bold text-ash">{c.exportDesk.sendError.title}</p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ash-2">
        {c.exportDesk.sendError.body}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button href={company.whatsappHref} size="sm" variant="outline">
          WhatsApp
        </Button>
        <Button size="sm" onClick={onRetry}>
          {c.exportDesk.sendError.retry}
        </Button>
      </div>
    </div>
  );
}

function BriquetteForm() {
  const { c } = useMarket();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    container: "20ft",
    port: destinationPorts[0].port,
    customPort: "",
    grade: "Premium",
    carton: 10,
    payment: "T/T wire transfer",
    notes: "",
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const subject = `Briquette FOB/CIF enquiry — ${form.company || form.name}`;
    try {
      await submitForm({ subject, data: form });
      const url = buildWhatsAppUrl({
        phone: company.whatsapp,
        subject,
        data: form,
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
    <div className="panel flex h-full flex-col p-7 md:p-9" id="briquette-form">
      <Eyebrow className="mb-2">{c.exportDesk.briquetteForm.eyebrow}</Eyebrow>
      <h2 className="text-2xl font-extrabold text-ash">
        {c.exportDesk.briquetteForm.title}
      </h2>

      {sent ? (
        <Sent onEdit={() => setSent(false)} waUrl={waUrl} />
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <ContactFields form={form} set={set} idPrefix="bq" />

          <div>
            <span className={label}>{c.exportDesk.form.containerLoad}</span>
            <div className="grid gap-3 sm:grid-cols-2">
              {containers.map((ct) => {
                const active = form.container === ct.id;
                const copy = c.containers[ct.id];
                return (
                  <button
                    type="button"
                    key={ct.id}
                    onClick={() => setForm((f) => ({ ...f, container: ct.id }))}
                    className={`rounded-md border px-4 py-3.5 text-start transition-colors ${
                      active
                        ? "border-ember/60 bg-ember/10"
                        : "border-line bg-ink-2 hover:border-ash-3"
                    }`}
                  >
                    <span
                      className={`block text-sm font-semibold ${
                        active ? "text-glow" : "text-ash"
                      }`}
                    >
                      {copy.label}
                    </span>
                    <span className="mt-0.5 block font-mono text-[11px] text-ash-3">
                      {copy.tons} · {copy.pallets}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <PortFields form={form} set={set} idPrefix="bq" />

            <div>
              <label className={label} htmlFor="bq-grade">
                {c.exportDesk.form.grade}
              </label>
              <select
                id="bq-grade"
                className={field}
                value={form.grade}
                onChange={set("grade")}
              >
                {grades.map((g) => (
                  <option key={g.name} value={g.name}>
                    {`${c.grades[g.name].name} — ${c.specs.ash} ${g.ash}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={label} htmlFor="bq-carton">
                {c.exportDesk.form.cartonSize}
              </label>
              <select
                id="bq-carton"
                className={field}
                value={form.carton}
                onChange={set("carton")}
              >
                {CARTON_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {`${size} ${c.exportDesk.form.cartonUnit}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={label} htmlFor="bq-payment">
                {c.exportDesk.form.paymentTerms}
              </label>
              <select
                id="bq-payment"
                className={field}
                value={form.payment}
                onChange={set("payment")}
              >
                <option value="T/T wire transfer">
                  {c.exportDesk.form.paymentTT}
                </option>
                <option value="Irrevocable Letter of Credit (L/C)">
                  {c.exportDesk.form.paymentLC}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className={label} htmlFor="bq-notes">
              {c.exportDesk.form.notes}
            </label>
            <textarea
              id="bq-notes"
              rows={3}
              className={field}
              value={form.notes}
              onChange={set("notes")}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={sending}>
            {sending ? "Sending…" : c.exportDesk.briquetteForm.submit}
          </Button>
          <p className="text-center text-[12px] text-ash-3">
            {c.exportDesk.briquetteForm.footnote}
          </p>
          {error && <SendError onRetry={() => setError(false)} />}
        </form>
      )}
    </div>
  );
}

function CarbonForm() {
  const { c } = useMarket();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    application: "Water treatment",
    grade: "Powdered (PAC)",
    quantity: "",
    port: destinationPorts[0].port,
    customPort: "",
    notes: "",
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const subject = `Activated carbon enquiry — ${form.company || form.name}`;
    try {
      await submitForm({ subject, data: form });
      const url = buildWhatsAppUrl({
        phone: company.whatsapp,
        subject,
        data: form,
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
    <div className="panel flex h-full flex-col p-7 md:p-9" id="carbon-form">
      <div className="flex flex-wrap items-center gap-3">
        <Eyebrow>{c.exportDesk.carbonForm.eyebrow}</Eyebrow>
        <span className="rounded-full border border-ember/40 bg-ember/10 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-glow uppercase">
          {c.common.comingSoon}
        </span>
      </div>
      <h2 className="mt-2 text-2xl font-extrabold text-ash">
        {c.exportDesk.carbonForm.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ash-2">
        {c.exportDesk.carbonForm.intro}
      </p>

      {sent ? (
        <Sent onEdit={() => setSent(false)} waUrl={waUrl} />
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <ContactFields form={form} set={set} idPrefix="ac" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="ac-application">
                {c.exportDesk.carbonForm.application}
              </label>
              <select
                id="ac-application"
                className={field}
                value={form.application}
                onChange={set("application")}
              >
                <option value="Water treatment">
                  {c.exportDesk.carbonForm.appWater}
                </option>
                <option value="Air & gas purification">
                  {c.exportDesk.carbonForm.appAir}
                </option>
                <option value="Food & beverage">
                  {c.exportDesk.carbonForm.appFood}
                </option>
                <option value="Gold recovery">
                  {c.exportDesk.carbonForm.appGold}
                </option>
                <option value="Other industrial use">
                  {c.exportDesk.carbonForm.appOther}
                </option>
              </select>
            </div>

            <div>
              <label className={label} htmlFor="ac-grade">
                {c.exportDesk.carbonForm.gradeInterest}
              </label>
              <select
                id="ac-grade"
                className={field}
                value={form.grade}
                onChange={set("grade")}
              >
                <option value="Powdered (PAC)">
                  {c.exportDesk.carbonForm.gradePac}
                </option>
                <option value="Granular (GAC)">
                  {c.exportDesk.carbonForm.gradeGac}
                </option>
                <option value="Pelletised">
                  {c.exportDesk.carbonForm.gradePellet}
                </option>
                <option value="Not sure yet">
                  {c.exportDesk.carbonForm.gradeUnsure}
                </option>
              </select>
            </div>

            <div>
              <label className={label} htmlFor="ac-quantity">
                {c.exportDesk.carbonForm.quantity}
              </label>
              <input
                id="ac-quantity"
                className={field}
                placeholder={c.exportDesk.carbonForm.quantityPlaceholder}
                value={form.quantity}
                onChange={set("quantity")}
              />
            </div>

            <PortFields form={form} set={set} idPrefix="ac" />
          </div>

          <div>
            <label className={label} htmlFor="ac-notes">
              {c.exportDesk.carbonForm.specNotes}
            </label>
            <textarea
              id="ac-notes"
              rows={3}
              className={field}
              value={form.notes}
              onChange={set("notes")}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={sending}>
            {sending ? "Sending…" : c.exportDesk.carbonForm.submit}
          </Button>
          <p className="text-center text-[12px] text-ash-3">
            {c.exportDesk.carbonForm.footnote}
          </p>
          {error && <SendError onRetry={() => setError(false)} />}
        </form>
      )}
    </div>
  );
}

function SalesDesk() {
  const { c } = useMarket();
  const { managingPartner } = company;
  return (
    <section className="relative overflow-hidden border-y border-line py-20 md:py-28">
      <img
        src={media.fire.hero.src}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/88 to-ink" />

      <div className="shell relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow className="mb-3">{c.exportDesk.desk.eyebrow}</Eyebrow>
          <h2 className="text-4xl font-extrabold leading-tight text-ash md:text-5xl">
            {c.exportDesk.desk.title}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ash-2">
            {company.name} — {company.address}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer noopener"
            className="panel panel-hover p-7"
          >
            <Eyebrow>{c.exportDesk.desk.whatsapp}</Eyebrow>
            <p className="mt-3 text-[20px] font-semibold text-ash">
              {company.whatsapp}
            </p>
            <p className="mt-2 text-[15px] text-ash-3">
              {c.exportDesk.desk.whatsappNote}
            </p>
          </a>

          <a href={`mailto:${company.emails[0]}`} className="panel panel-hover p-7">
            <Eyebrow>{c.exportDesk.desk.enquiries}</Eyebrow>
            <p className="mt-3 break-all text-[20px] font-semibold text-ash">
              {company.emails[0]}
            </p>
            <p className="mt-2 text-[15px] text-ash-3">
              {c.exportDesk.desk.enquiriesNote}
            </p>
          </a>

          <a
            href={`mailto:${managingPartner.email}`}
            className="panel panel-hover p-7 sm:col-span-2"
          >
            <Eyebrow>{c.roles.managingPartner}</Eyebrow>
            <p className="mt-3 break-all text-[20px] font-semibold text-ash">
              {managingPartner.email}
            </p>
            <p className="mt-2 text-[15px] text-ash-3">
              {c.exportDesk.desk.partnerNote.replace("{name}", managingPartner.name)}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ExportQuote() {
  const { c } = useMarket();
  return (
    <>
      <PageHero
        eyebrow={c.exportDesk.hero.eyebrow}
        title={
          <>
            {c.exportDesk.hero.titleA}{" "}
            <span className="ember-text">{c.exportDesk.hero.titleB}</span>
          </>
        }
        sub={c.exportDesk.hero.sub}
        image={media.logistics.port}
        imageOpacity={0.45}
      />

      {/* items-stretch + h-full keeps both cards the same length */}
      <Section tone="ink" id="forms">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <BriquetteForm />
          <CarbonForm />
        </div>
      </Section>

      <SalesDesk />

      <Section tone="ink">
        <SectionHead
          eyebrow={c.exportDesk.reach.eyebrow}
          title={c.exportDesk.reach.title}
          align="center"
        />
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {activeDestinations.map((d) => (
            <span
              key={d.name}
              className="rounded-full border border-line bg-ink-2 px-7 py-4 text-lg text-ash-2"
            >
              <span aria-hidden className="me-2.5 text-xl">
                {d.flag}
              </span>
              {c.destinations[d.name] ?? d.name}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
