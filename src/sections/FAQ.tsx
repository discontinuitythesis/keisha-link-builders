import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "../components/Reveal";

const FAQS = [
  {
    q: "Are the links do-follow?",
    a: "Yes, by default. If a site can only offer a no-follow link we tell you before placement and you decide.",
  },
  {
    q: "Is content included in guest posts?",
    a: "Yes. Guest post pricing includes a written and edited article of 600 to 1,000 words. You can supply your own content if you prefer.",
  },
  {
    q: "Can I see the sites before I commit?",
    a: "Yes. You approve the prospect list, with DR and traffic screenshots, before any placement is made.",
  },
  {
    q: "Which niches do you cover?",
    a: "Most B2B, SaaS, ecommerce, finance, health, home, travel and local niches. Casino, adult, CBD and crypto are possible but priced separately.",
  },
  {
    q: "What are the payment terms?",
    a: "50% upfront on a first order and the balance on delivery of the live report. Retainers are billed monthly in advance. We accept Wise, PayPal and bank transfer.",
  },
  {
    q: "Do you offer samples?",
    a: "Yes. Ask for recent placement examples in your niche when you request the rate card.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-y border-[#23262b] bg-[#0e1013]">
      <div className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]">
            <span className="h-px w-10 bg-[#c8f04b]" /> FAQ
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Questions{" "}
            <span className="font-serif-i font-normal text-[#c8f04b]">we get asked</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="mt-12">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-[#23262b]"
              >
                <AccordionTrigger className="font-display py-6 text-left text-lg font-medium text-[#f2f1ec] hover:text-[#c8f04b] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-[#9ba0a8]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
