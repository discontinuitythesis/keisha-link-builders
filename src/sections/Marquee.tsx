const ITEMS = [
  "Guest posts",
  "Link insertions",
  "Brand mentions",
  "DR 20–80+",
  "White-label",
  "Real organic traffic",
  "No PBNs",
  "6-month guarantee",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-[#23262b] bg-[#0e1013] py-5">
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-medium uppercase tracking-[0.25em] text-[#6d727b]"
          >
            {item}
            <span className="text-[#c8f04b]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
