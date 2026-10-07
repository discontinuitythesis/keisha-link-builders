import { User, Building2, Store } from "lucide-react";
import { Reveal } from "../components/Reveal";

const AUDIENCES = [
  {
    icon: User,
    title: "SEO freelancers & consultants",
    desc: "Reliable placements at a price that leaves you margin. You keep the client relationship.",
  },
  {
    icon: Building2,
    title: "Agencies needing capacity",
    desc: "White-label link building that scales with your client list, without hiring another outreach team.",
  },
  {
    icon: Store,
    title: "In-house SaaS & ecommerce teams",
    desc: "A steady monthly flow of relevant links with a clear report you can show your manager.",
  },
];

export function Audiences() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]">
          <span className="h-px w-10 bg-[#c8f04b]" /> Who it is for
        </p>
        <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Built for people who already know{" "}
          <span className="font-serif-i font-normal text-[#c8f04b]">
            what a good link looks like
          </span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {AUDIENCES.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.12} className="h-full">
            <div className="group h-full rounded-2xl border border-[#23262b] bg-[#101215] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c8f04b]/50">
              <a.icon className="h-7 w-7 text-[#c8f04b]" />
              <h3 className="font-display mt-5 text-xl font-semibold">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9ba0a8]">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
