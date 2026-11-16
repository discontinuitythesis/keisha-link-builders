import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  light?: boolean;
};

export function SectionHead({ eyebrow, title, intro, center, light }: Props) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${
          light ? "text-[#9cc2f5]" : "text-[#0a5bc4]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-tight ${
          light ? "text-white" : "text-[#10213f]"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-5 block h-1 w-14 rounded-full ${light ? "bg-[#5d9cf0]" : "bg-[#0a5bc4]"} ${
          center ? "mx-auto" : ""
        }`}
      />
      {intro && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-[#c8d6ec]" : "text-[#4a5672]"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

type CardProps = { title: string; children: ReactNode; tone?: "blue" | "navy" | "green"; className?: string };

const TONES = { blue: "border-t-[#0a5bc4]", navy: "border-t-[#0b2b5e]", green: "border-t-[#1f8a5b]" };

export function Card({ title, children, tone = "blue", className = "" }: CardProps) {
  return (
    <div
      className={`h-full rounded-xl border border-[#dbe3ef] border-t-4 ${TONES[tone]} bg-white p-6 shadow-[0_1px_2px_rgba(16,33,63,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(10,91,196,0.35)] ${className}`}
    >
      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#10213f]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#4a5672]">{children}</p>
    </div>
  );
}
