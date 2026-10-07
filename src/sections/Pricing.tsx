import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";
import { ArrowUpRight } from "lucide-react";

const ROWS = [
  { name: "Guest post (content included)", tiers: ["from $120", "from $220", "from $380"] },
  { name: "Link insertion", tiers: ["from $90", "from $170", "from $300"] },
  { name: "Brand mention (unlinked → linked)", tiers: ["from $60", "from $110", "from $200"] },
];

const EXTRAS = [
  {
    title: "Retainer",
    big: "From $1,500 / month",
    desc: "Example: 10 mixed placements per month, DR 30+, monthly report sheet.",
  },
  {
    title: "White-label",
    big: "Your clients never see us",
    desc: "Agencies get unbranded reports and a dedicated contact.",
  },
  {
    title: "Volume discounts",
    big: "From 20 placements / month",
    desc: "Tiered pricing for larger orders. Ask for the rate card.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-[#23262b] bg-[#0e1013]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]">
            <span className="h-px w-10 bg-[#c8f04b]" /> Indicative pricing
          </p>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Priced by DR.{" "}
            <span className="font-serif-i font-normal text-[#c8f04b]">
              No hidden markups.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-[#9ba0a8] md:text-lg">
            Prices are per placement in USD and include prospecting, outreach,
            content where applicable, and reporting. Request the rate card for
            the full list, niche pricing and volume discounts.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-[#23262b]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="bg-[#c8f04b] text-[#0b0c0e]">
                    <th className="px-6 py-4 font-display text-sm font-semibold">Placement</th>
                    <th className="px-6 py-4 font-display text-sm font-semibold">DR 20–39</th>
                    <th className="px-6 py-4 font-display text-sm font-semibold">DR 40–59</th>
                    <th className="px-6 py-4 font-display text-sm font-semibold">DR 60+</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r, i) => (
                    <tr
                      key={r.name}
                      className={`transition-colors hover:bg-[#15181c] ${
                        i % 2 === 0 ? "bg-[#101215]" : "bg-[#0c0e11]"
                      }`}
                    >
                      <td className="px-6 py-5 text-sm font-medium text-[#f2f1ec]">{r.name}</td>
                      {r.tiers.map((t) => (
                        <td key={t} className="px-6 py-5 font-display text-sm font-semibold text-[#c8f04b]">
                          {t}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {EXTRAS.map((e, i) => (
            <Reveal key={e.title} delay={0.1 + i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-[#23262b] bg-[#101215] p-7 transition-colors hover:border-[#c8f04b]/40">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9ba0a8]">
                  {e.title}
                </p>
                <p className="font-display mt-3 text-xl font-semibold text-[#f2f1ec]">
                  {e.big}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#9ba0a8]">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 rounded-xl border border-[#2c3036] bg-[#101215] px-6 py-4 text-sm text-[#9ba0a8]">
            <span className="font-semibold text-[#f2f1ec]">Note:</span> minimum
            organic traffic thresholds apply to every site we place on. Casino,
            adult, CBD and crypto niches are priced separately.{" "}
            <a href={SITE.mailtoRateCard} className="group inline-flex items-center gap-1 font-semibold text-[#c8f04b]">
              Request the full rate card
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
