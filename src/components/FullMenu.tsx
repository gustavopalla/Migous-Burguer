"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { menu } from "@/data/content";

export function FullMenu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="cardapio-completo" className="px-6 py-20">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8">
        <SectionHeading
          eyebrow="Cardápio"
          title="Tudo que a gente serve"
          align="center"
        />
        {active === "lanches" && (
          <p className="text-center text-sm font-bold text-brand">
            Todos os lanches saem com maionese cortesia.
          </p>
        )}

        <div
          role="tablist"
          aria-label="Categorias do cardápio"
          className="flex flex-wrap justify-center gap-2"
        >
          {menu.map((c) => (
            <button
              key={c.id}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={c.id === active}
              aria-controls={`panel-${c.id}`}
              onClick={() => setActive(c.id)}
              className={`h-11 rounded-full px-5 text-sm font-bold transition-colors ${
                c.id === active
                  ? "bg-brand text-ink"
                  : "border border-line text-white hover:border-brand hover:text-brand"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <ul
          role="tabpanel"
          id={`panel-${category.id}`}
          aria-labelledby={`tab-${category.id}`}
          className="flex flex-col gap-3"
        >
          {category.items.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-surface p-3 pr-5"
            >
              {item.photo && (
                <Image
                  src={item.photo}
                  alt=""
                  width={96}
                  height={96}
                  className="size-20 flex-none rounded-xl object-cover sm:size-24"
                />
              )}
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="font-display text-sm font-extrabold uppercase tracking-tight sm:text-base">
                  {item.name}
                </h3>
                {item.desc && (
                  <p className="text-[13px] leading-normal text-muted">
                    {item.desc}
                  </p>
                )}
              </div>
              <span className="flex-none text-right text-sm font-extrabold text-brand sm:text-base">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
