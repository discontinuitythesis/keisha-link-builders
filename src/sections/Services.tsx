import { FileText, ListOrdered, Link2, MessagesSquare, Users, Globe2 } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";

const PAID = [
  { icon: Link2, title: "Niche edits", desc: "Contextual links placed in relevant existing articles." },
  { icon: FileText, title: "Guest posts", desc: "New editorial articles published on relevant third-party sites." },
  { icon: ListOrdered, title: "Listicles", desc: "Brand or product inclusion in curated lists and directories." },
];

const FREE = [
  { icon: MessagesSquare, title: "Forums", desc: "Relevant industry discussions." },
  { icon: Users, title: "Community discussions", desc: "Niche communities and boards." },
  { icon: Globe2, title: "Other non-paid placements", desc: "Supporting placements that diversify the profile." },
];

type Item = (typeof PAID)[number];

function ServiceCard({ item, green }: { item: Item; green?: boolean }) {
  const accent = green ? "text-[#1f8a5b] bg-[#e8f5ee]" : "text-[#0a5bc4] bg-[#e8f0fc]";
  return (
    <div
      className={`group h-full rounded-xl border border-[#dbe3ef] border-t-4 ${
        green ? "border-t-[#1f8a5b]" : "border-t-[#0a5bc4]"
      } bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(10,91,196,0.35)]`}
    >
      <span className={`inline-flex rounded-lg p-2.5 ${accent}`}>
        <item.icon className="h-5 w-5" />
      </span>
      <h3 className="font-display mt-5 text-xl font-bold uppercase tracking-tight text-[#10213f]">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#4a5672]">{item.desc}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="border-y border-[#dbe3ef] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead
          eyebrow="Our services"
          title="Paid and free-to-post link building"
          intro="Paid placements drive authority. Non-paid placements build breadth and brand visibility."
        />

        <Reveal>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-[#0a5bc4]">Paid placements</p>
        </Reveal>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {PAID.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <ServiceCard item={s} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-[#1f8a5b]">Free-to-post support</p>
        </Reveal>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {FREE.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <ServiceCard item={s} green />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-display mx-auto mt-12 max-w-3xl text-center text-xl font-bold text-[#0b2b5e] md:text-2xl">
            A supporting layer, not a substitute for authoritative paid placements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
