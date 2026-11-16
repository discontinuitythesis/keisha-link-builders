import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";

const OTHERS = [
  "Digital marketing agencies",
  "Independent SEO consultants",
  "In-house SEO teams",
  "SaaS and technology",
  "Crypto companies",
];

export function Clients() {
  return (
    <section id="clients" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead eyebrow="Our ideal clients" title="Built for teams that need dependable capacity" />
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1.9fr]">
        <Reveal className="h-full">
          <div className="flex h-full flex-col justify-center rounded-2xl bg-[#0b2b5e] p-8 text-white shadow-[0_24px_60px_-30px_rgba(11,43,94,0.8)] md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9cc2f5]">Primary focus</p>
            <p className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">SEO agencies</p>
            <p className="mt-4 text-[#c8d6ec]">
              Extra link-building capacity under your brand, without hiring and managing another outreach team.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {OTHERS.map((o, i) => (
            <Reveal key={o} delay={i * 0.06} className={i === OTHERS.length - 1 ? "sm:col-span-2" : ""}>
              <div className="flex h-full items-center rounded-xl bg-[#0a5bc4] px-6 py-5 font-semibold text-white transition-colors hover:bg-[#0b2b5e]">
                {o}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
