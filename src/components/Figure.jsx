// Real photography, framed to match the panel chrome CoalBed established.
// `Figure` = one image with an optional caption bar. `PhotoGrid` = a tight
// gallery of several. Both keep the ember glow so the dark theme still reads.

const ratios = {
  wide: "aspect-16/10",
  photo: "aspect-4/3",
  square: "aspect-square",
  tall: "aspect-3/4",
  cinema: "aspect-2/1",
};

export function Figure({
  image,
  label,
  note,
  ratio = "photo",
  glow = false,
  priority = false,
  className = "",
}) {
  if (!image) return null;
  return (
    <figure
      className={`relative overflow-hidden rounded-xl border border-line bg-ink-2 ${className}`}
    >
      {glow && (
        <div className="ember-pulse pointer-events-none absolute -bottom-24 left-1/2 z-10 size-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.28),rgba(255,90,31,0)_65%)] blur-2xl" />
      )}
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`w-full object-cover ${ratios[ratio]}`}
      />
      {(label || note) && (
        <figcaption className="relative border-t border-line bg-ink/80 px-5 py-3 backdrop-blur">
          {label && (
            <p className="font-mono text-[11px] tracking-[0.16em] text-ash-3 uppercase">
              {label}
            </p>
          )}
          {note && <p className="mt-1 text-[13px] text-ash-2">{note}</p>}
        </figcaption>
      )}
    </figure>
  );
}

export function PhotoGrid({ images, ratio = "square", cols = "sm:grid-cols-2" }) {
  return (
    <div className={`grid gap-3 ${cols}`}>
      {images.map((im) => (
        <Figure key={im.src} image={im} ratio={ratio} />
      ))}
    </div>
  );
}

// Full-bleed band of photos — used to break up long text sections.
export function PhotoStrip({ images }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
      {images.map((im) => (
        <img
          key={im.src}
          src={im.src}
          width={im.width}
          height={im.height}
          alt={im.alt}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full bg-ink-2 object-cover transition-transform duration-500 hover:scale-105"
        />
      ))}
    </div>
  );
}

export default Figure;
