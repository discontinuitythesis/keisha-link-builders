import { Reveal } from "../components/Reveal";
import { Card, SectionHead } from "../components/SectionHead";

const TOP = [
  {
    title: "Ethical standards",
    desc: "Contextually relevant placements. No hacked or compromised sites, and no fabricated traffic or metrics.",
  },
  {
    title: "Transparency",
    desc: "Paid and non-paid placements are clearly distinguished, in line with client and search guidelines.",
  },
  { title: "No guarantees", desc: "No ranking or risk-free guarantees, only quality-controlled execution." },
];

const BOTTOM = [
  {
    title: "Client provides",
    desc: "Company and market information, target URLs and keywords, anchors and competitors, and approval of additional links.",
  },
  {
    title: "Shared responsibilities",
    desc: "Accurate briefs and approved URLs, timely review and approval, change communication, and publisher indexing.",
  },
];

export function Standards() {
  return (
    <section id="standards" className="border-t border-[#dbe3ef] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead
          eyebrow="Compliance and onboarding"
          title="Responsible practice, clear handoff"
          intro="Ethical standards, a defined client handoff and a commitment to dependable delivery."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TOP.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} className="h-full">
              <Card title={t.title} tone="green">
                {t.desc}
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {BOTTOM.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} className="h-full">
              <Card title={t.title} tone={i === 0 ? "blue" : "navy"}>
                {t.desc}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
