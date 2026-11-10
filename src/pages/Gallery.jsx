import { Section, Eyebrow } from "../components/ui";
import { useMarket } from "../market-context";
import PageHero from "../components/PageHero";
import media, { gallery } from "../data/images";

// Each frame keeps the aspect ratio the photo was shot at, so nothing is
// force-cropped into a square. The caption slides up on hover and on keyboard
// focus, so it is reachable without a pointer.
const ratios = {
  wide: "aspect-4/3",
  square: "aspect-square",
  tall: "aspect-3/4",
  cinema: "aspect-16/9",
  // Uncropped camera frames (3:2), used for the plant photo shoot.
  land: "aspect-3/2",
  portrait: "aspect-2/3",
};

function Tile({ item, caption }) {
  return (
    <figure
      tabIndex={0}
      className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-xl border border-line bg-ink-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
    >
      <img
        src={item.src}
        width={item.width}
        height={item.height}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105 ${
          ratios[item.ratio] ?? "aspect-square"
        }`}
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-t from-ink via-ink/90 to-transparent px-4 pt-8 pb-3 text-[12px] leading-snug text-ash-2 transition-transform duration-300 group-hover:translate-y-0 group-focus:translate-y-0">
        {caption}
      </figcaption>
    </figure>
  );
}

function MeetTheTeam() {
  const { c } = useMarket();
  const { team } = media.people;
  return (
    <Section tone="ink">
      <Eyebrow className="mb-3">{c.gallery.team.eyebrow}</Eyebrow>
      <h2 className="text-[clamp(1.25rem,4.4vw,2.6rem)] leading-[1.08] font-extrabold whitespace-nowrap text-ash">
        {c.gallery.team.title}
      </h2>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ash-2">
        {c.gallery.team.sub}
      </p>
      <figure className="relative mt-10 overflow-hidden rounded-xl border border-line bg-ink-2">
        <img
          src={team.src}
          width={team.width}
          height={team.height}
          alt={team.alt}
          loading="lazy"
          decoding="async"
          className="aspect-3/2 w-full object-cover object-[50%_85%] md:aspect-16/9"
        />
      </figure>
    </Section>
  );
}

export default function Gallery() {
  const { c } = useMarket();
  return (
    <>
      <PageHero
        eyebrow={c.gallery.eyebrow}
        title={
          <>
            {c.gallery.titleA}{" "}
            <span className="ember-text">{c.gallery.titleB}</span>
          </>
        }
        sub={c.gallery.sub}
      />

      <Section tone="raised">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {gallery.map((item, i) => (
            <Tile
              key={item.src}
              item={item}
              caption={c.galleryCaptions[i] ?? item.caption}
            />
          ))}
        </div>
      </Section>

      <MeetTheTeam />
    </>
  );
}
