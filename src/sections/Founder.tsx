import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { SITE } from "../lib/site";

export function Founder() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-t-full rounded-b-3xl bg-[#0a5bc4]/12" />
            <div className="relative overflow-hidden rounded-t-full rounded-b-3xl border-4 border-white shadow-[0_30px_80px_-30px_rgba(11,43,94,0.55)]">
              <img
                src="shalom-portrait.webp"
                alt="Shalom Agtagma, co-founder of KeiSha Link Builders"
                className="h-full w-full object-cover"
                width={1024}
                height={1536}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0b2b5e] px-5 py-2.5 text-sm font-semibold text-white shadow-lg">
              Shalom Agtagma, Co-founder
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHead eyebrow="Who runs it" title="Agency operations, applied to link building" />
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#4a5672] md:text-lg">
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
      </div>

      <Reveal delay={0.2}>
        <p className="text-outline font-display mt-24 select-none text-center text-[clamp(3rem,12vw,10rem)] font-bold leading-none tracking-tight">
          KEISHA
        </p>
      </Reveal>
    </section>
  );
}
