import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { highlights } from "@/data/content";

export function Menu() {
  return (
    <section id="destaques" className="bg-surface px-6 py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Destaques" title="Os mais pedidos da casa" />
          <a
            href="#cardapio-completo"
            className="border-b-2 border-brand pb-1 text-sm font-bold transition-colors hover:text-brand"
          >
            Ver cardápio completo
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-5">
          {highlights.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-3 rounded-3xl border border-white/5 bg-ink p-4 transition-transform duration-200 hover:-translate-y-1"
            >
              {item.photo && (
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={640}
                  height={640}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col gap-2 px-1 pb-1">
                <h3 className="font-display text-base font-extrabold uppercase leading-tight tracking-tight">
                  {item.name}
                </h3>
                <p className="line-clamp-3 text-[13px] leading-normal text-muted">
                  {item.desc}
                </p>
                <span className="mt-auto pt-2 text-lg font-extrabold text-brand">
                  {item.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
