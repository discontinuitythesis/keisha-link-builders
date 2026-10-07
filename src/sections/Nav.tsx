import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SITE } from "../lib/site";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Quality", href: "#quality" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#23262b] bg-[#0b0c0e]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-lg font-700 tracking-tight">
          <span className="font-bold">KeiSha</span>
          <span className="text-[#c8f04b]">.</span>
          <span className="ml-2 hidden text-xs font-medium uppercase tracking-[0.2em] text-[#9ba0a8] sm:inline">
            Link Builders
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#9ba0a8] transition-colors hover:text-[#f2f1ec]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.mailtoRateCard}
            className="group hidden items-center gap-1.5 rounded-full bg-[#c8f04b] px-4 py-2 text-sm font-semibold text-[#0b0c0e] transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
          >
            Rate card
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-[#9ba0a8] lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#23262b] bg-[#0b0c0e]/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#1b1e22] py-3 text-sm text-[#c9ccd2]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE.mailtoRateCard}
              className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#c8f04b] px-4 py-2 text-sm font-semibold text-[#0b0c0e]"
            >
              Rate card <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
