import { ArrowUpRight, Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-[#23262b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(200,240,75,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]">
              Contact
            </p>
            <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
              Get the{" "}
              <span className="font-serif-i font-normal text-[#c8f04b]">rate card</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[#9ba0a8] md:text-lg">
              Tell us your niche, target DR range and monthly volume. You will
              have the full price list and sample placements within one working
              day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.mailtoRateCard}
              className="group inline-flex items-center gap-2 rounded-full bg-[#c8f04b] px-8 py-4 text-sm font-semibold text-[#0b0c0e] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#2c3036] px-8 py-4 text-sm font-semibold transition-colors hover:border-[#c8f04b]/60 hover:text-[#c8f04b]"
            >
              <MessageCircle className="h-4 w-4" />
              {SITE.whatsappDisplay}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#2c3036] px-8 py-4 text-sm font-semibold transition-colors hover:border-[#c8f04b]/60 hover:text-[#c8f04b]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-[#6d727b]">
            <MapPin className="h-4 w-4" />
            Paranaque, Metro Manila (GMT+8). Replies during UK and US working hours.
          </p>
        </Reveal>
      </div>

      <footer className="relative border-t border-[#23262b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-[#6d727b] md:flex-row md:px-8">
          <p>© 2026 KeiSha Link Builders</p>
          <p>
            Co-founded by{" "}
            <a
              href={SITE.founderSite}
              target="_blank"
              rel="noreferrer"
              className="text-[#9ba0a8] underline decoration-[#c8f04b]/50 underline-offset-4 hover:text-[#c8f04b]"
            >
              Shalom Agtagma
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}
