import { Reveal } from "../components/Reveal";
import { Card, SectionHead } from "../components/SectionHead";

const ITEMS = [
  { title: "Broad coverage", desc: "Paid and free-to-post solutions across languages, niches and traffic tiers." },
  { title: "In-house control", desc: "Co-founders and in-house link builders. No subcontracted layers." },
  { title: "Accountable delivery", desc: "Dedicated project management from qualification to verified placement." },
  { title: "Team manager", desc: "Daily execution oversight, task allocation and quality sign-off." },
  { title: "Project manager", desc: "Timeline coordination, client communication and reporting cadence." },
  { title: "Reporting", desc: "Weekly or bi-weekly workbooks: ordered, published and verified links.", tone: "green" as const },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        eyebrow="Who we are"
        title="A managed partner, not another vendor"
        intro="Co-founder-led oversight, dedicated execution and transparent reporting across every campaign."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={(i % 3) * 0.08} className="h-full">
            <Card title={it.title} tone={it.tone}>
              {it.desc}
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
