import { BadgeCheck, EyeOff, MessagesSquare, ShieldCheck } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";

const ITEMS = [
  { icon: BadgeCheck, title: "Agency-branded", desc: "Reports and client-specific workbooks carry your brand." },
  { icon: EyeOff, title: "Confidential", desc: "No direct contact with your clients." },
  { icon: MessagesSquare, title: "Connected", desc: "Dedicated communication channels for your agency." },
  { icon: ShieldCheck, title: "Protected", desc: "Non-solicitation, confidentiality and NDA provisions." },
];

export function WhiteLabel() {
  return (
    <section id="white-label" className="bg-[#0b2b5e]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead
          light
          eyebrow="White-label delivery and confidentiality"
          title="Your brand stays front and center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 0.08} className="h-full">
              <div className="flex h-full gap-5 rounded-xl border border-white/10 bg-white/[0.06] p-7 transition-colors hover:bg-white/[0.1]">
                <it.icon className="mt-0.5 h-6 w-6 shrink-0 text-[#7fb2f5]" />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">{it.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#c8d6ec]">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
