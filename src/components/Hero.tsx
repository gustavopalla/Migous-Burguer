import Image from "next/image";
import { Button } from "./Button";
import { HeroBurger } from "./HeroBurger";
import { brand, features, menu } from "@/data/content";

const featured = menu[0].items.find((i) => i.name === "Burger Duplo")!;

export function Hero() {
  return (
    <>
      {/* Tall runway: the stage stays pinned while the burger opens with scroll. */}
      <section
        data-hero-runway
        className="relative h-[300vh] motion-reduce:h-auto"
      >
        <div
          data-hero-stage
          className="sticky top-[var(--header-h)] h-[calc(100svh-var(--header-h))] overflow-hidden motion-reduce:h-auto motion-reduce:min-h-[calc(100svh-var(--header-h))]"
        >
          {/* smoke footage, faded out at the edges so it melts into the page */}
          <video
            aria-hidden
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/video/smoke-poster.jpg"
            className="pointer-events-none absolute inset-0 size-full object-cover opacity-70 mix-blend-screen [mask-image:radial-gradient(ellipse_75%_70%_at_50%_45%,#000_30%,transparent_100%)] motion-reduce:hidden"
          >
            <source src="/video/smoke.webm" type="video/webm" />
            <source src="/video/smoke.mp4" type="video/mp4" />
          </video>

          {/* warm glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[38%] size-[min(80vw,820px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
            <div className="absolute -bottom-40 -left-32 size-[480px] rounded-full bg-wine/40 blur-[130px]" />
            <div className="absolute -right-40 top-10 size-[420px] rounded-full bg-white/[0.04] blur-[110px]" />
          </div>

          {/* giant wordmark behind the burger */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[34%] flex -translate-y-1/2 select-none justify-center"
            style={{
              transform:
                "translateY(-50%) scale(calc(1 + var(--hero-p, 0) * 0.07))",
            }}
          >
            <span className="whitespace-nowrap font-display text-[clamp(110px,27vw,400px)] font-black uppercase leading-none tracking-tighter text-white/[0.07]">
              {brand.name}
            </span>
          </div>

          <div className="relative mx-auto flex h-full max-w-[1200px] flex-col px-6 pb-8">
            <div className="relative flex min-h-0 flex-1 items-center justify-center pt-2">
              <HeroBurger />
            </div>

            <div className="relative z-20 flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
              <div className="flex max-w-[460px] flex-col gap-2">
                <h1 className="font-display text-[clamp(30px,4.6vw,54px)] font-black uppercase leading-none tracking-tight">
                  {featured.name}
                </h1>
                <p className="text-[15px] leading-relaxed text-muted text-pretty">
                  2 hambúrgueres artesanais de 90g, cheddar e prato derretidos e
                  molho especial caseiro no pão brioche.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-5">
                  <span className="font-display text-2xl font-black">
                    {featured.price}
                  </span>
                  <Button
                    href={brand.orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="gap-3"
                  >
                    Pedir agora <span aria-hidden>→</span>
                  </Button>
                </div>
              </div>

              <div
                aria-hidden
                className="flex w-full flex-col items-end gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted motion-reduce:hidden sm:w-auto"
              >
                <span
                  style={{ opacity: "calc(1 - var(--hero-p, 0) * 10)" }}
                >
                  Role para abrir
                </span>
                <span className="block h-0.5 w-32 overflow-hidden rounded-full bg-white/15">
                  <span
                    className="block h-full w-full origin-left bg-brand"
                    style={{ transform: "scaleX(var(--hero-p, 0))" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 px-6 pb-16 pt-10">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-3">
            <div className="flex size-11 flex-none items-center justify-center rounded-full bg-brand/15">
              <Image src={f.icon} alt="" width={26} height={26} />
            </div>
            <div>
              <div className="text-[13px] font-extrabold uppercase">
                {f.title}
              </div>
              <div className="text-xs leading-[1.3] text-muted">{f.text}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
