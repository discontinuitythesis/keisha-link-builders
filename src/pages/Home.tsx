import { Nav } from "../sections/Nav";
import { Hero } from "../sections/Hero";
import { Marquee } from "../sections/Marquee";
import { Services } from "../sections/Services";
import { Pricing } from "../sections/Pricing";
import { Quality } from "../sections/Quality";
import { Process } from "../sections/Process";
import { Audiences } from "../sections/Audiences";
import { FAQ } from "../sections/FAQ";
import { Founder } from "../sections/Founder";
import { Contact } from "../sections/Contact";

export default function Home() {
  return (
    <div className="grain min-h-screen bg-[#0b0c0e] text-[#f2f1ec]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Pricing />
        <Quality />
        <Process />
        <Audiences />
        <FAQ />
        <Founder />
        <Contact />
      </main>
    </div>
  );
}
