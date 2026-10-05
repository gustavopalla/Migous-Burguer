import { Button } from "./Button";
import { brand } from "@/data/content";

export function FinalCta() {
  return (
    <section className="bg-surface px-6 py-24 text-center">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5">
        <h2 className="font-display text-[clamp(32px,5.6vw,60px)] font-black uppercase leading-[1.02] tracking-tight text-balance">
          Bateu a fome? <span className="text-brand">Pede Migou&apos;s.</span>
        </h2>
        <p className="text-base leading-relaxed text-muted">
          Peça pelo cardápio digital ou chame no WhatsApp e receba em casa.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            href={brand.orderUrl}
            target="_blank"
            rel="noreferrer"
          >
            Fazer meu pedido
          </Button>
          <Button
            size="lg"
            variant="outline"
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
