type Props = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, align = "left" }: Props) {
  return (
    <div
      className={`flex flex-col gap-2 ${align === "center" ? "items-center text-center" : ""}`}
    >
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
        {eyebrow}
      </span>
      <h2 className="font-display text-[clamp(28px,4vw,44px)] font-black uppercase leading-[1.02] tracking-tight">
        {title}
      </h2>
    </div>
  );
}
