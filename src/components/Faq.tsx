import { SectionHeading } from "./SectionHeading";
import { faqs } from "@/data/content";

export function Faq() {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto flex max-w-[800px] flex-col gap-8">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          align="center"
        />
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/5 bg-surface px-6"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="flex size-8 flex-none items-center justify-center rounded-full bg-brand text-xl font-bold text-ink transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-muted text-pretty">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
