import { Combos } from "@/components/Combos";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FullMenu } from "@/components/FullMenu";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Combos />
        <FullMenu />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
