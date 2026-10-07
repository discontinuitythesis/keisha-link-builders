import { Reveal } from "../components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Brief",
    desc: "Target pages, anchors, niche, DR range and volume. A 15-minute call or a short form, your choice.",
  },
  {
    n: "02",
    title: "Prospect list",
    desc: "We send candidate sites with metrics for approval. You strike out anything that does not fit.",
  },
  {
    n: "03",
    title: "Outreach & placement",
    desc: "We handle negotiation, content and publishing. You get progress updates in one thread.",
  },
  {
    n: "04",
    title: "Live report",
    desc: "Every live URL in your report sheet, checked for indexing and do-follow status.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-[#23262b] bg-[#0e1013]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]">
            <span className="h-px w-10 bg-[#c8f04b]" /> Process
          </p>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Brief to live links in{" "}
            <span className="font-serif-i font-normal text-[#c8f04b]">2 to 4 weeks</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[#c8f04b]/60 via-[#2c3036] to-[#2c3036] md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c8f04b]/50 bg-[#0b0c0e] font-display text-sm font-bold text-[#c8f04b]">
                  {s.n}
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#9ba0a8]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
