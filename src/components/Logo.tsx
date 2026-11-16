type LogoProps = { className?: string; compact?: boolean };

/** Chain-link mark from the KeiSha brand deck, redrawn as SVG. */
export function LogoMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 36" className={className} fill="none" aria-hidden>
      <rect x="3" y="2" width="16" height="19" rx="8" stroke="currentColor" strokeWidth="3.4" />
      <rect x="3" y="15" width="16" height="19" rx="8" stroke="currentColor" strokeWidth="3.4" />
    </svg>
  );
}

export function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-auto text-[#0a5bc4]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight text-[#0b2b5e]">KeiSha</span>
        {!compact && (
          <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#0b2b5e]/80">
            Link Builders
          </span>
        )}
      </span>
    </span>
  );
}
