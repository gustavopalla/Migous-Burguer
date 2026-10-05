import Image from "next/image";
import { brand } from "@/data/content";

const links = [
  { label: "Cardápio digital", href: brand.orderUrl },
  { label: "WhatsApp", href: brand.whatsapp },
  { label: "Como chegar", href: brand.mapsUrl },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink px-6 py-10 text-muted">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 text-[13px]">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="" width={44} height={44} className="size-11" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-black uppercase tracking-tight text-white">
              {brand.name}
            </span>
            <span>
              {brand.address} · {brand.district}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </div>
        <span>© 2026 {brand.fullName}</span>
      </div>
    </footer>
  );
}
