const ITEMS = [
  "Niche edits",
  "Guest posts",
  "Listicles",
  "Free-to-post support",
  "White-label delivery",
  "In-house team",
  "Three-point QA",
  "Verified placements",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden bg-[#0b2b5e] py-5" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#c8d6ec]"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-[#5d9cf0]" />
          </span>
        ))}
      </div>
    </div>
  );
}
