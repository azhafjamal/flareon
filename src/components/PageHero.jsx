import { Eyebrow } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
  imageOpacity = 0.3,
  children,
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {image && (
        <>
          <img
            src={image.src}
            alt={image.alt}
            fetchPriority="high"
            decoding="async"
            style={{ opacity: imageOpacity }}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/40" />
        </>
      )}
      {!image && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 90% at 8% 0%, rgba(255,90,31,0.24), transparent 60%), " +
              "radial-gradient(55% 85% at 100% 100%, rgba(138,58,20,0.28), transparent 65%), " +
              "linear-gradient(135deg, rgba(224,62,12,0.10), transparent 55%)",
          }}
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(50%_60%_at_30%_0%,rgba(255,90,31,0.14),transparent_70%)]" />
      <div className="grain absolute inset-0" />
      <div className="shell relative py-16 md:py-20">
        <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        <h1 className="max-w-5xl text-[2.2rem] font-black leading-[1.02] text-ash md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ash-2">
            {sub}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
