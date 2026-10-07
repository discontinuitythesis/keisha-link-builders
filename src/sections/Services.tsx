import { ArrowUpRight, PenLine, Link2, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

const SERVICES = [
  {
    icon: PenLine,
    tag: "Paid",
    title: "Guest posts",
    desc: "A new article written for a relevant site in your niche, with your link in the body.",
    points: [
      "Site list sent for approval before outreach",
      "Content written and edited by us, or supplied by you",
      "DR and organic traffic screenshots with every placement",
    ],
    price: "120",
    unit: "per placement",
  },
  {
    icon: Link2,
    tag: "Paid",
    title: "Link insertions",
    desc: "Your link added to an existing, already-ranking article. Faster and usually the better value.",
    points: [
      "Contextual placement in aged content",
      "Anchor text agreed with you",
      "Indexed pages only",
    ],
    price: "90",
    unit: "per link",
  },
  {
    icon: Sparkles,
    tag: "Volume",
    title: "Free-to-post links & brand mentions",
    desc: "Foundational links and citations for new sites, local businesses and brand entity building.",
    points: [
      "Directories, profiles, resource and community pages",
      "Unlinked brand mentions turned into links",
      "Citations that help AI search engines recognise your brand",
    ],
    price: "8",
    unit: "per link, batches of 25+",
  },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]">
          <span className="h-px w-10 bg-[#c8f04b]" /> Services
        </p>
        <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Three ways to <span className="font-serif-i font-normal text-[#c8f04b]">earn links</span>
        </h2>
        <p className="mt-5 max-w-2xl text-[#9ba0a8] md:text-lg">
          Every placement is prospected by hand, checked for organic traffic and
          niche relevance, and reported with a live URL.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.12} className="h-full">
            <div className="group flex h-full flex-col rounded-2xl border border-[#23262b] bg-[#101215] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c8f04b]/50 hover:shadow-[0_20px_60px_-20px_rgba(200,240,75,0.15)]">
              <div className="flex items-center justify-between">
                <div className="rounded-xl border border-[#2c3036] bg-[#0b0c0e] p-3 text-[#c8f04b]">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-[#2c3036] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#9ba0a8]">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display mt-6 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9ba0a8]">{s.desc}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-[#c9ccd2]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8f04b]" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <p className="text-sm text-[#9ba0a8]">
                  From{" "}
                  <span className="font-display text-3xl font-bold text-[#f2f1ec]">
                    ${s.price}
                  </span>{" "}
                  <span className="text-xs">{s.unit}</span>
                </p>
                <a
                  href={SITE.mailtoRateCard}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c8f04b] opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  Get niche pricing <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
