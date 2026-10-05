import Image from "next/image";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { brand, hours } from "@/data/content";

export function Location() {
  return (
    <section id="local" className="bg-surface px-6 py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-stretch gap-10">
        <div className="flex flex-col justify-center gap-7">
          <SectionHeading
            eyebrow="Onde estamos"
            title="Delivery quentinho em Campinas"
          />
          <div className="flex flex-col gap-1">
            <span className="text-base font-extrabold">{brand.address}</span>
            <span className="text-sm text-muted">{brand.district}</span>
          </div>
          <dl className="rounded-2xl border border-line bg-ink px-5 py-2">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between gap-4 py-3 text-sm"
              >
                <dt className="font-bold">{h.day}</dt>
                <dd className="text-muted">{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm leading-relaxed text-muted">
            Peça pelo cardápio digital ou chame no WhatsApp{" "}
            <span className="font-bold text-white">{brand.phoneLabel}</span>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              href={brand.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="px-7"
            >
              Pedir pelo cardápio digital
            </Button>
            <Button
              variant="outlineSoft"
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-7"
            >
              WhatsApp
            </Button>
            <Button
              variant="outlineSoft"
              href={brand.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-7"
            >
              Como chegar
            </Button>
          </div>
        </div>
        <Image
          src="/images/fachada.png"
          alt="Fachada do Migou's Burger com mural e letreiro iluminado"
          width={764}
          height={1020}
          className="aspect-[3/4] h-auto w-full max-w-[400px] justify-self-center rounded-3xl object-cover shadow-card"
        />
      </div>
    </section>
  );
}
