import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";

const STEPS = [
  "Onboard",
  "Learn your brand",
  "Prospect",
  "Internal QA",
  "Client approval",
  "Coordinate",
  "Verify live",
  "Report + maintain",
];

export function Process() {
  return (
    <section id="process" className="border-y border-[#dbe3ef] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead eyebrow="Campaign delivery workflow" title="From brief to verified placement" />
        <ol className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s} delay={(i % 4) * 0.07} className="h-full">
              <li
                className={`flex h-full min-h-[96px] items-center gap-3 rounded-xl px-5 py-6 text-white transition-transform hover:-translate-y-1 ${
                  i < 4 ? "bg-[#0a5bc4]" : "bg-[#0b2b5e]"
                }`}
              >
                <span className="font-display text-3xl font-bold text-white/40">{i + 1}</span>
                <span className="font-semibold leading-snug">{s}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
