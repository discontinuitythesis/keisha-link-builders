import { TrendingUp, Crosshair, ShieldX, ListChecks, ShieldCheck, FileSpreadsheet } from "lucide-react";
import { Reveal } from "../components/Reveal";

const ITEMS = [
  {
    icon: TrendingUp,
    title: "Real organic traffic",
    desc: "We check organic traffic and keyword trends, not just DR. Sites with inflated metrics and no rankings are rejected.",
  },
  {
    icon: Crosshair,
    title: "Niche relevance",
    desc: 'The site, the page and the anchor have to make sense for your topic. No generic "write for us" farms.',
  },
  {
    icon: ShieldX,
    title: "No PBNs, no link farms",
    desc: "Every site has a real audience and real editorial ownership. We do not run or buy from private blog networks.",
  },
  {
    icon: ListChecks,
    title: "Approve before you pay",
    desc: "You see the prospect list with DR and traffic screenshots before we place anything. Swap out any site you do not like.",
  },
  {
    icon: ShieldCheck,
    title: "6-month live-link guarantee",
    desc: "If a link is removed or set to no-follow within six months, we replace it at no charge.",
  },
  {
    icon: FileSpreadsheet,
    title: "One report sheet",
    desc: "A shared Google Sheet with every live URL, anchor, target page, DR, traffic and date. Same format every month.",
  },
];

export function Quality() {
  return (
    <section id="quality" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]">
          <span className="h-px w-10 bg-[#c8f04b]" /> Quality guardrails
        </p>
        <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          What every placement{" "}
          <span className="font-serif-i font-normal text-[#c8f04b]">has to pass</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#23262b] bg-[#23262b] sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.1} className="h-full">
            <div className="group flex h-full flex-col bg-[#0e1013] p-8 transition-colors duration-500 hover:bg-[#12150f]">
              <span className="font-display text-sm font-semibold text-[#3d4148] transition-colors group-hover:text-[#c8f04b]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <item.icon className="mt-5 h-6 w-6 text-[#c8f04b]" />
              <h3 className="font-display mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#9ba0a8]">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
