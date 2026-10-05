import Image from "next/image";
import { Button } from "./Button";
import { brand, featuredCombos } from "@/data/content";

export function Combos() {
  return (
    <section id="combos" className="bg-surface px-6 pb-20">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-10 overflow-hidden rounded-3xl bg-wine p-[clamp(28px,5vw,56px)] text-white">
        <div className="absolute -bottom-40 -left-32 size-[380px] rounded-full bg-brand opacity-15" />
        <div className="relative flex max-w-[440px] flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
            Lanche + fritas P + bebida
          </span>
          <h2 className="font-display text-[clamp(32px,4.6vw,52px)] font-black uppercase leading-[1.02] tracking-tight">
            Combos que matam a fome
          </h2>
          <p className="text-[15px] leading-relaxed text-white/80">
            Escolha seu lanche favorito e leve com batata crinkle e bebida. Tem
            combo para todo mundo, até para os pequenos.
          </p>
          <ul className="my-2 flex flex-col gap-2.5">
            {featuredCombos.map((c) => (
              <li
                key={c.name}
                className="flex justify-between gap-4 border-b border-white/15 pb-2.5 last:border-b-0 last:pb-0"
              >
                <span className="font-bold">{c.name}</span>
                <span className="font-extrabold text-brand">{c.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button href="#cardapio-completo">Ver todos os combos</Button>
            <Button
              variant="outline"
              href={brand.orderUrl}
              target="_blank"
              rel="noreferrer"
            >
              Pedir combo
            </Button>
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-3">
          <Image
            src="/images/menu/combo-burger.webp"
            alt="Combo Burger com fritas crinkle e Coca-Cola"
            width={640}
            height={640}
            className="col-span-2 aspect-[2/1] w-full rounded-2xl object-cover"
          />
          <Image
            src="/images/menu/combo-picles.webp"
            alt="Combo Picles"
            width={640}
            height={640}
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <Image
            src="/images/menu/combo-salada.webp"
            alt="Combo Salada"
            width={640}
            height={640}
            className="aspect-square w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
