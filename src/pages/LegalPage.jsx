import { Link } from "react-router-dom";
import { useMarket } from "../market-context";
import { Fills } from "../components/ui";
import PageHero from "../components/PageHero";
import media from "../data/images";

// Both legal pages are the same document shell over a block list from the
// locale file, so Privacy and Terms of Sale stay identical in layout and only
// differ in content. Block kinds: { h }, { sub }, { p }, { list }, { table }.
function slug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function Block({ block }) {
  if (block.h)
    return (
      <h2
        id={slug(block.h)}
        className="mt-12 scroll-mt-24 border-t border-line pt-7 text-[22px] font-bold text-ash first:mt-0 first:border-t-0 first:pt-0"
      >
        {block.h}
      </h2>
    );

  if (block.sub)
    return (
      <h3 className="mt-7 text-[16px] font-bold text-glow">{block.sub}</h3>
    );

  if (block.p)
    return (
      <p className="mt-3.5 text-[15px] leading-[1.75] text-ash-2">
        <Fills>{block.p}</Fills>
      </p>
    );

  if (block.list)
    return (
      <ul className="mt-3.5 space-y-2.5 ps-5">
        {block.list.map((li) => (
          <li
            key={li}
            className="list-disc text-[15px] leading-[1.7] text-ash-2 marker:text-ember"
          >
            <Fills>{li}</Fills>
          </li>
        ))}
      </ul>
    );

  if (block.table)
    return (
      <div className="mt-5 overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[520px] border-collapse">
          <thead>
            <tr>
              {block.table.head.map((h) => (
                <th
                  key={h}
                  className="border-b border-line bg-ink-3 px-4 py-3 text-start font-mono text-[11.5px] tracking-[0.06em] text-ash uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className="border-b border-line px-4 py-3 text-[14px] leading-relaxed text-ash-2 last:border-b-0"
                  >
                    <Fills>{cell}</Fills>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  return null;
}

export default function LegalPage({ doc }) {
  const { c } = useMarket();
  const page = c.legal[doc];
  const other = doc === "privacy" ? "terms" : "privacy";
  const otherTo = other === "privacy" ? "/privacy" : "/terms-of-sale";
  const headings = page.blocks.filter((b) => b.h).map((b) => b.h);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        sub={page.sub}
        image={doc === "terms" ? media.logistics.portDusk : media.nature.grove}
      >
        <p className="font-mono text-[12.5px] text-ash-3">
          <Fills>{c.legal.updated}</Fills>
        </p>
      </PageHero>

      <div className="shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start">
        <article className="max-w-3xl">
          {page.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        <nav className="panel sticky top-24 hidden p-6 lg:block">
          <p className="eyebrow mb-3">{c.legal.contents}</p>
          <ul className="space-y-2">
            {headings.map((h) => (
              <li key={h}>
                <a
                  href={`#${slug(h)}`}
                  className="block text-[13px] leading-snug text-ash-3 hover:text-glow"
                >
                  {h}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to={otherTo}
            className="mt-6 block border-t border-line pt-5 text-[13px] text-ash-2 hover:text-glow"
          >
            {c.legal[other].navLabel} →
          </Link>
        </nav>
      </div>
    </>
  );
}
