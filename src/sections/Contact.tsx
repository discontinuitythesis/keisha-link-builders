import { Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { LogoMark } from "../components/Logo";
import { SITE } from "../lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0b2b5e] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(93,156,240,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <LogoMark className="mx-auto h-12 w-auto text-[#7fb2f5]" />
            <h2 className="font-display mt-6 text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[1.05] tracking-tight">
              Your link-building team, without the operational overhead
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[#c8d6ec] md:text-lg">
              For pricing, it is best to contact us directly. Message us on
              WhatsApp or send an email with your niche, target range and volume.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b2b5e] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {SITE.whatsappDisplay}
            </a>
            <a
              href={SITE.mailtoPricing}
              className="inline-flex items-center gap-2 rounded-full bg-[#0a5bc4] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2b74d6]"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold transition-colors hover:border-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-[#9fb2cf]">
            <MapPin className="h-4 w-4" />
            Paranaque, Metro Manila (GMT+8)
          </p>
        </Reveal>
      </div>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-[#9fb2cf] md:flex-row md:px-8">
          <p>© 2026 KeiSha Link Builders</p>
          <p>
            Co-founded by{" "}
            <a
              href={SITE.founderSite}
              target="_blank"
              rel="noreferrer"
              className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Shalom Agtagma
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}
