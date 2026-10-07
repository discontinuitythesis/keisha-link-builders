import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

export function Founder() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]">
            <span className="h-px w-10 bg-[#c8f04b]" /> Who runs it
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Agency operations,{" "}
            <span className="font-serif-i font-normal text-[#c8f04b]">
              applied to link building
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-5 text-base leading-relaxed text-[#9ba0a8]">
            <p>
              KeiSha Link Builders was co-founded by{" "}
              <a
                href={SITE.founderSite}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 font-semibold text-[#f2f1ec] underline decoration-[#c8f04b]/60 decoration-2 underline-offset-4 transition-colors hover:text-[#c8f04b]"
              >
                Shalom Agtagma
                <ArrowUpRight className="h-4 w-4" />
              </a>
              , who spent two and a half years as SEO Project Manager and then
              Senior Operations and Program Manager at MADX Digital in London,
              growing the team to around 30 people.
            </p>
            <p>
              That background is the point. Link building fails on process:
              missed follow-ups, sites that were never checked, reports that
              arrive late. We run it like an agency delivery team — prospect
              lists for approval, a single report sheet, and a fixed cadence of
              updates.
            </p>
            <p className="text-[#c9ccd2]">
              The team is based in Paranaque, Metro Manila, and works UK and US
              hours.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="text-outline font-display mt-24 select-none text-center text-[clamp(3rem,10vw,9rem)] font-bold leading-none tracking-tight">
          KEISHA
        </p>
      </Reveal>
    </section>
  );
}
