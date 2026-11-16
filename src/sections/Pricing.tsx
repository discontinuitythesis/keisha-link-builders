import { Mail, MessageCircle } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Card, SectionHead } from "../components/SectionHead";
import { SITE } from "../lib/site";

const MODEL = [
  { title: "Service mix", desc: "Paid packages plus free-to-post support." },
  { title: "Pricing drivers", desc: "DR, traffic, niche and language." },
  { title: "Order economics", desc: "Bulk discounts and special pricing considerations." },
  { title: "Change control", desc: "Scope or qualification changes require formal approval." },
  { title: "Payment", desc: "Methods and processing fees agreed in advance." },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        eyebrow="Commercial model and payment terms"
        title="A commercial model built around qualification"
        intro="Every campaign is priced to its brief, so we share pricing directly rather than publishing a rate card."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODEL.map((m, i) => (
          <Reveal key={m.title} delay={(i % 3) * 0.08} className="h-full">
            <Card title={m.title}>{m.desc}</Card>
          </Reveal>
        ))}
        <Reveal delay={0.16} className="h-full">
          <div className="flex h-full flex-col justify-between rounded-xl bg-[#0b2b5e] p-6 text-white">
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-tight">For pricing, contact us</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#c8d6ec]">
                Tell us your niche, target DR and traffic range, language and monthly volume.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0b2b5e] transition-colors hover:bg-[#e8f0fc]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp {SITE.whatsappDisplay}
              </a>
              <a
                href={SITE.mailtoPricing}
                className="inline-flex items-center gap-2 break-all rounded-full border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                <Mail className="h-4 w-4 shrink-0" /> {SITE.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
