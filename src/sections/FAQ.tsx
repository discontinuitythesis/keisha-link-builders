import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";

const FAQS = [
  {
    q: "How is pricing set?",
    a: "Pricing depends on DR, traffic, niche and language, with bulk discounts and special pricing for larger orders. Detailed pricing is shared directly: message us on WhatsApp or email connect.keisha@gmail.com.",
  },
  {
    q: "Do you work white-label?",
    a: "Yes. Reports and workbooks carry your agency's brand, we have no direct contact with your clients, and non-solicitation, confidentiality and NDA provisions protect the relationship.",
  },
  {
    q: "What happens if a link is removed or changed?",
    a: "We address removed, broken or altered links, anchor or destination changes and publisher removals. Replacement is offered within the agreed window, held to the same qualification bar.",
  },
  {
    q: "Do you guarantee rankings or indexing?",
    a: "No. Nobody can honestly guarantee rankings, indexing or publisher permanence. What we commit to is quality-controlled execution with three checkpoints on every placement.",
  },
  {
    q: "Where does free-to-post fit in?",
    a: "Forums, community discussions and other non-paid placements diversify your link profile and build brand visibility. They are a supporting layer, not a substitute for authoritative paid placements.",
  },
  {
    q: "What do you need from us to start?",
    a: "Company and market information, target URLs and keywords, preferred anchors, competitors, and approval of any additional links.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-y border-[#dbe3ef] bg-white">
      <div className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead eyebrow="FAQ" title="Questions we get asked" />

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="mt-12">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-[#dbe3ef]"
              >
                <AccordionTrigger className="font-display py-6 text-left text-lg font-semibold text-[#10213f] hover:text-[#0a5bc4] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-[#4a5672]">
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
