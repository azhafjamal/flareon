import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50";

const sizes = {
  sm: "px-3.5 py-2 text-[13px]",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-[15px]",
};

const variants = {
  ember:
    "bg-linear-to-b from-ember to-ember-2 text-white shadow-[0_8px_24px_-10px_rgba(255,90,31,0.9)] hover:brightness-110 hover:-translate-y-px",
  outline:
    "border border-line bg-ink-3/60 text-ash hover:border-ash-3 hover:bg-ink-4",
  ghost: "text-ash-2 hover:text-ash hover:bg-ink-3",
};

export function Button({
  as = "button",
  to,
  href,
  variant = "ember",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href)
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  const Tag = as;
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, sub, align = "left" }) {
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-extrabold leading-[1.08] text-ash md:text-[2.6rem]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[15px] leading-relaxed text-ash-2">{sub}</p>}
    </div>
  );
}

export function Section({ id, children, className = "", tone = "ink" }) {
  const tones = {
    ink: "bg-ink",
    raised: "bg-ink-2 grain",
    line: "bg-ink border-y border-line",
  };
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function Badge({ children, tone = "ash" }) {
  const tones = {
    ash: "border-line bg-ink-3 text-ash-2",
    ember: "border-ember/40 bg-ember/10 text-glow",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

// Little glowing coal dot used as a bullet / status marker throughout.
export function Coal({ className = "" }) {
  return (
    <span
      className={`inline-block size-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_8px_2px_rgba(255,90,31,0.55)] ${className}`}
    />
  );
}

// Spam trap for the enquiry forms. A real buyer never sees this field, but a
// bot filling every input it finds will complete it — and Web3Forms discards
// any submission where `botcheck` came back non-empty. Hidden from assistive
// tech and keyboard order too, so it costs a genuine visitor nothing.
export function Honeypot({ value, onChange }) {
  return (
    <input
      type="checkbox"
      name="botcheck"
      checked={value}
      onChange={onChange}
      className="absolute size-0 overflow-hidden opacity-0"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
    />
  );
}

// Copy that still carries a value we haven't been given yet is written with the
// gap in [square brackets]. This renders those spans as an amber chip so an
// unfilled value is obvious on the page — replace the bracketed text in
// src/content/en.js and the chip disappears with it.
export function Fills({ children }) {
  if (typeof children !== "string") return children;
  const parts = children.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span
        key={i}
        className="rounded border border-glow/40 bg-glow/10 px-1.5 py-px font-mono text-[0.86em] text-glow"
      >
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );
}
