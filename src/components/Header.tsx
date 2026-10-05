import Image from "next/image";
import { Button } from "./Button";
import { brand, navLinks } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1200px] items-center justify-between gap-6 px-6">
        <a href="#" className="flex items-center gap-3" aria-label={brand.name}>
          <Image
            src="/images/logo.png"
            alt=""
            width={48}
            height={48}
            className="size-12"
            priority
          />
          <span className="font-display text-xl font-black uppercase tracking-tight">
            {brand.name}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold tracking-[0.02em] lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button size="sm" href={brand.orderUrl} target="_blank" rel="noreferrer">
          Pedir agora
        </Button>
      </div>
    </header>
  );
}
