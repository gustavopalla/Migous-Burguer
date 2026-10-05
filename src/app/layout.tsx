import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Migou's Burger — Hamburgueria em Campinas",
  description:
    "Hambúrgueres artesanais de 90g no pão brioche, com queijo cheddar e prato derretidos e molho especial caseiro. Delivery em Campinas · SP.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
