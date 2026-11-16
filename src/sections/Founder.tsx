import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { SITE } from "../lib/site";

export function Founder() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <SectionHead eyebrow="Who runs it" title="Agency operations, applied to link building" />

        <Reveal delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-[#4a5672] md:text-lg">
            <p>
              KeiSha Link Builders was co-founded by{" "}
              <a
                href={SITE.founderSite}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 font-semibold text-[#0b2b5e] underline decoration-[#0a5bc4]/50 decoration-2 underline-offset-4 transition-colors hover:text-[#0a5bc4]"
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
              arrive late. KeiSha runs it like an agency delivery team, with a
              team manager, a project manager and in-house link builders on
              every campaign.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="text-outline font-display mt-20 select-none text-center text-[clamp(3rem,12vw,10rem)] font-bold leading-none tracking-tight">
          KEISHA
        </p>
      </Reveal>
    </section>
  );
}
