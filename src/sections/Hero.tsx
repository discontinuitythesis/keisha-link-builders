import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SITE } from "../lib/site";

/** Animated backlink constellation — nodes drifting, linking to neighbours. */
function LinkGraph() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w * h) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const LINK_DIST = 130;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = w;
        if (n.x > w) n.x = 0;
        if (n.y < 0) n.y = h;
        if (n.y > h) n.y = 0;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(200, 240, 75, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(242, 241, 236, 0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden
    />
  );
}

const CHIPS = [
  { k: "Do-follow", v: "by default" },
  { k: "Real traffic", v: "sites only" },
  { k: "White-label", v: "for agencies" },
  { k: "6-month", v: "live-link guarantee" },
];

const line1 = ["Backlinks", "built", "by", "an"];
const line2 = ["operations", "team,"];
const line3 = ["not", "a", "marketplace."];

function StaggeredLine({ words, delay }: { words: string[]; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${
              word === "operations" || word === "team,"
                ? "font-serif-i font-normal text-[#c8f04b]"
                : ""
            }`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(200,240,75,0.07),transparent)]" />
      <LinkGraph />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-32 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9ba0a8]"
        >
          <span className="h-px w-10 bg-[#c8f04b]" />
          Link building for SEOs and agencies
        </motion.p>

        <h1 className="font-display max-w-5xl text-[clamp(2.6rem,7.5vw,6rem)] font-bold leading-[1.02] tracking-tight">
          <StaggeredLine words={line1} delay={0.25} />
          <StaggeredLine words={line2} delay={0.45} />
          <StaggeredLine words={line3} delay={0.62} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-[#9ba0a8] md:text-lg"
        >
          Guest posts, link insertions and brand mentions on vetted sites, with
          DR and traffic checks before you pay. Run from Manila by the former
          operations lead of a 30-person London SEO agency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href={SITE.mailtoRateCard}
            className="group inline-flex items-center gap-2 rounded-full bg-[#c8f04b] px-7 py-3.5 text-sm font-semibold text-[#0b0c0e] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Request the rate card
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#2c3036] px-7 py-3.5 text-sm font-semibold text-[#f2f1ec] transition-colors hover:border-[#c8f04b]/60 hover:text-[#c8f04b]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#23262b] bg-[#23262b] md:grid-cols-4"
        >
          {CHIPS.map((c) => (
            <div key={c.k} className="bg-[#101215] px-6 py-5">
              <p className="font-display text-lg font-semibold text-[#c8f04b]">
                {c.k}
              </p>
              <p className="mt-0.5 text-sm text-[#9ba0a8]">{c.v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
