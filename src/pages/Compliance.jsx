import { benchmark, certificates, company } from "../data/site";
import { useMarket } from "../market-context";
import { Section, SectionHead, Button, Eyebrow } from "../components/ui";
import PageHero from "../components/PageHero";

export default function Compliance() {
  const { c } = useMarket();
  return (
    <>
      <PageHero
        eyebrow={c.compliance.hero.eyebrow}
        title={
          <>
            {c.compliance.hero.titleA}{" "}
            <span className="ember-text">{c.compliance.hero.titleB}</span>
          </>
        }
        sub={c.compliance.hero.sub}
      />

      <Section tone="raised">
        <SectionHead
          eyebrow={c.compliance.lab.eyebrow}
          title={c.compliance.lab.title}
          sub={c.compliance.lab.sub}
        />
        <div className="mt-10 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-ink-3">
                {c.benchmark.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`px-5 py-4 font-mono text-[11px] tracking-widest uppercase ${
                      i === 1 ? "bg-ember/10 text-glow" : "text-ash-3"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* The BV standard column is numeric, so it comes from site.js. */}
              {c.benchmark.rows.map((r, i) => (
                <tr key={r[0]} className="border-t border-line">
                  <td className="px-5 py-4 text-ash-2">{r[0]}</td>
                  <td className="bg-ember/5 px-5 py-4 font-mono font-semibold text-ash">
                    {r[1]}
                  </td>
                  <td className="px-5 py-4 font-mono text-ash-3">{r[2]}</td>
                  <td className="px-5 py-4 font-mono text-ash-3">
                    {benchmark.rows[i][3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHead
          eyebrow={c.compliance.downloads.eyebrow}
          title={c.compliance.downloads.title}
          sub={c.compliance.downloads.sub}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <article
              key={cert.title}
              className="panel panel-hover flex flex-col p-7"
            >
              <Eyebrow>{c.certificates[i].tag}</Eyebrow>
              <h3 className="mt-3 text-xl font-bold leading-snug text-ash">
                {c.certificates[i].title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ash-3">
                {c.certificates[i].body}
              </p>
              {cert.meta && (
                <p className="mt-4 flex-1 w-fit rounded-md bg-glow/10 px-2.5 py-1.5 font-mono text-[11px] leading-relaxed text-glow">
                  {cert.meta}
                </p>
              )}
              <Button
                href={cert.file}
                download
                variant="outline"
                size="sm"
                className="mt-6 w-fit"
              >
                ⤓ {c.certificates[i].cta}
              </Button>
            </article>
          ))}
        </div>

        {/* Not a download: the audit report is shared on request. */}
        <article className="panel mt-5 flex flex-col items-start justify-between gap-6 p-7 md:flex-row md:items-center">
          <div>
            <Eyebrow>{c.compliance.sedex.tag}</Eyebrow>
            <h3 className="mt-3 text-xl font-bold leading-snug text-ash">
              {c.compliance.sedex.title}
            </h3>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ash-3">
              {c.compliance.sedex.body}
            </p>
          </div>
          <Button
            href={`mailto:${company.emails[0]}?subject=${encodeURIComponent(
              c.compliance.sedex.subject
            )}`}
            size="md"
            className="shrink-0"
          >
            {c.compliance.sedex.cta}
          </Button>
        </article>
      </Section>

      {/* Wider than the standard page shell, so the panel reads as a banner. */}
      <section className="bg-ink-2 grain py-20 md:py-28">
        <div className="mx-auto w-full max-w-[96rem] px-3 md:px-6">
          <div className="panel flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center md:gap-12 md:p-12">
            <div>
              <h2 className="text-3xl font-extrabold text-ash md:text-4xl">
                {c.compliance.ask.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ash-2 md:text-lg">
                {c.compliance.ask.body}
              </p>
            </div>
            <Button to="/export-quote" size="xl" className="shrink-0">
              {c.compliance.ask.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
