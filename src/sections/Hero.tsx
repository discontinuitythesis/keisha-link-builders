import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { SITE } from "../lib/site";

/** Animated backlink constellation: nodes drifting, linking to neighbours. */
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
            const alpha = (1 - d / LINK_DIST) * 0.28;
            ctx.strokeStyle = `rgba(10, 91, 196, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(11, 43, 94, 0.45)";
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
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      aria-hidden
    />
  );
}

const CHIPS = [
  { k: "Co-founder-led", v: "oversight on every campaign" },
  { k: "White-label", v: "your brand stays front and center" },
  { k: "3 checkpoints", v: "before anything is reported live" },
  { k: "Weekly or bi-weekly", v: "reporting workbooks" },
];

const line1 = ["Your", "link-building", "team,"];
const line2 = ["without", "the", "operational", "overhead."];
const ACCENT = new Set(["operational", "overhead."]);

function StaggeredLine({ words, delay }: { words: string[]; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${ACCENT.has(word) ? "text-[#0a5bc4]" : ""}`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden bg-gradient-to-b from-white to-[#f4f7fb]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_80%_15%,rgba(10,91,196,0.10),transparent)]" />
      <LinkGraph />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-32 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a5bc4]"
        >
          <span>Strategic link building</span>
          <span className="text-[#9fb2cf]">|</span>
          <span>Managed execution</span>
          <span className="text-[#9fb2cf]">|</span>
          <span>Quality-controlled delivery</span>
        </motion.p>

        <h1 className="font-display max-w-5xl text-[clamp(2.5rem,7vw,5.6rem)] font-bold leading-[1.02] tracking-tight text-[#10213f]">
          <StaggeredLine words={line1} delay={0.25} />
          <StaggeredLine words={line2} delay={0.45} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-[#4a5672] md:text-lg"
        >
          Niche edits, guest posts and listicles, backed by free-to-post
          support. Run by co-founders and an in-house team with no
          subcontracted layers, delivered white-label for SEO agencies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a5bc4] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(10,91,196,0.7)] transition-all hover:bg-[#0b2b5e] active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <a
            href={SITE.mailtoPricing}
            className="inline-flex items-center gap-2 rounded-full border border-[#c5d3e8] bg-white px-7 py-3.5 text-sm font-semibold text-[#0b2b5e] transition-colors hover:border-[#0a5bc4] hover:text-[#0a5bc4]"
          >
            <Mail className="h-4 w-4" />
            Email us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#dbe3ef] bg-[#dbe3ef] shadow-[0_20px_50px_-30px_rgba(11,43,94,0.4)] md:grid-cols-4"
        >
          {CHIPS.map((c) => (
            <div key={c.k} className="bg-white px-5 py-5 md:px-6">
              <p className="font-display text-lg font-bold text-[#0b2b5e]">{c.k}</p>
              <p className="mt-0.5 text-sm text-[#4a5672]">{c.v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
