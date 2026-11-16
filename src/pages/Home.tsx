import { Nav } from "../sections/Nav";
import { Hero } from "../sections/Hero";
import { Marquee } from "../sections/Marquee";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Clients } from "../sections/Clients";
import { WhiteLabel } from "../sections/WhiteLabel";
import { Quality } from "../sections/Quality";
import { Process } from "../sections/Process";
import { Pricing } from "../sections/Pricing";
import { Standards } from "../sections/Standards";
import { FAQ } from "../sections/FAQ";
import { Founder } from "../sections/Founder";
import { Contact } from "../sections/Contact";
import { WhatsAppButton } from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#10213f]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Clients />
        <WhiteLabel />
        <Quality />
        <Process />
        <Pricing />
        <Standards />
        <FAQ />
        <Founder />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
}
