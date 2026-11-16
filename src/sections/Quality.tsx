import { Reveal } from "../components/Reveal";
import { Card, SectionHead } from "../components/SectionHead";

const CHECKPOINTS = [
  { n: "01", title: "Domain qualification", desc: "DR, traffic, relevance and site quality." },
  { n: "02", title: "Placement + content", desc: "Page relevance, mentions, anchor and editorial fit." },
  { n: "03", title: "Final verification", desc: "Live URL, destination, specs and documentation." },
];

const POLICY = [
  {
    title: "Qualification signals",
    desc: "Domain Rating and range, organic traffic and its 6-month trend, topical relevance, backlink profile and traffic quality.",
  },
  { title: "Traffic tiers", desc: "Opportunities are tiered by DR and traffic so each placement matches the campaign goal." },
  {
    title: "We address",
    desc: "Removed, broken or altered links, anchor or destination changes, and publisher removals.",
  },
  { title: "We define", desc: "Evidence requirements, time limits, exclusions and measurement rules.", tone: "navy" as const },
  {
    title: "We do not guarantee",
    desc: "Indexing, rankings, or publisher permanence beyond the agreed window.",
    tone: "navy" as const,
  },
  {
    title: "Replacement window",
    desc: "Replacement is offered within the defined period, held to the same qualification bar.",
    tone: "navy" as const,
  },
];

export function Quality() {
  return (
    <section id="quality" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead eyebrow="Our quality assurance process" title="Three checkpoints. One consistent standard." />

      <div className="relative mt-12 grid gap-5 md:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-1/2 hidden h-0.5 -translate-y-1/2 bg-[#c5d3e8] md:block" />
        {CHECKPOINTS.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.1} className="relative h-full">
            <div
              className={`flex h-full flex-col items-center justify-center rounded-2xl px-6 py-9 text-center text-white shadow-[0_20px_50px_-28px_rgba(11,43,94,0.9)] ${
                i === 2 ? "bg-[#0b2b5e]" : "bg-[#0a5bc4]"
              }`}
            >
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#c8dcf8]">
                {c.n} &nbsp;{c.title}
              </p>
              <p className="mt-3 font-semibold">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-8 text-center font-semibold text-[#0a5bc4]">
          Optional client-side QA before publisher payment adds another layer of control.
        </p>
      </Reveal>

      <div id="policy" className="mt-24">
        <SectionHead
          eyebrow="Standards and policy"
          title="Qualification standards and replacement policy"
          intro="Every opportunity is assessed before placement, and the policy is clear when something changes."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POLICY.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className="h-full">
              <Card title={p.title} tone={p.tone}>
                {p.desc}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
