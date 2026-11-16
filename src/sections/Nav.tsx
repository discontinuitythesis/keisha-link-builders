import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { SITE } from "../lib/site";
import { Logo } from "../components/Logo";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Quality", href: "#quality" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
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
        scrolled || open
          ? "border-b border-[#dbe3ef] bg-white/90 shadow-[0_8px_30px_-20px_rgba(11,43,94,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="KeiSha Link Builders, back to top">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#4a5672] transition-colors hover:text-[#0a5bc4]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-[#0a5bc4] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0b2b5e] active:scale-95 sm:inline-flex"
          >
            Get pricing
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-[#0b2b5e] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#dbe3ef] bg-white lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#edf1f7] py-3 text-base font-semibold text-[#10213f]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-[#0a5bc4] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Get pricing
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe3ef] px-5 py-2.5 text-sm font-semibold text-[#0b2b5e]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
