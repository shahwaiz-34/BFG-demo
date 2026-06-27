import { motion } from "framer-motion";
import { ArrowRight, Quote, Sparkles, TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import ba1 from "@/assets/ba1.asset.json";
import ba2 from "@/assets/ba2.asset.json";
import ba3 from "@/assets/ba3.asset.json";

const items = [
  {
    img: ba1.url,
    name: "Ahmed K.",
    age: 28,
    duration: "5 months",
    metric: { icon: TrendingDown, label: "−12 kg" },
    program: "Personal Training",
    quote: "Dropped 12kg in 5 months and finally feel confident in my own skin.",
  },
  {
    img: ba3.url,
    name: "Hassan R.",
    age: 32,
    duration: "8 months",
    metric: { icon: TrendingUp, label: "+9 kg lean" },
    program: "Summer Booster",
    quote: "Coaches restructured my training and diet. Strongest I've ever been.",
  },
  {
    img: ba2.url,
    name: "Zain M.",
    age: 24,
    duration: "6 months",
    metric: { icon: TrendingUp, label: "+7 kg lean" },
    program: "Personal Training",
    quote: "Went from skinny to lean & muscular. The plan actually worked.",
  },
];

function ResultCard({ item, i }: { item: (typeof items)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  const Metric = item.metric.icon;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-500 hover:-translate-y-2 hover:border-neon/50 hover:shadow-neon"
    >
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-neon/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header — moved ABOVE image so the photo isn't covered */}
      <div className="relative flex items-center justify-between gap-3 border-b border-border bg-surface/80 px-5 py-3.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-background/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-neon ring-1 ring-neon/30">
          <Sparkles className="h-3 w-3" /> Verified
        </span>
        <span className="rounded-full bg-neon px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-neon">
          {item.program}
        </span>
      </div>

      {/* Image — fully visible, no overlays */}
      <div className="relative bg-black">
        <img
          src={item.img}
          alt={`${item.name} transformation`}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Stats + quote */}
      <figcaption className="relative border-t border-border bg-surface/80 p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl leading-none">{item.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Age {item.age} · {item.duration}
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-neon/30 bg-neon/10 px-2.5 py-1.5 text-neon">
            <Metric className="h-4 w-4" />
            <span className="font-display text-sm tracking-wide">{item.metric.label}</span>
          </div>
        </div>

        <div className="relative mt-4 border-t border-border pt-4">
          <Quote
            className={`absolute right-0 top-3 h-7 w-7 text-neon/20 transition-transform duration-500 ${
              hover ? "scale-110 rotate-6 text-neon/40" : ""
            }`}
          />
          <p className="pr-9 text-sm leading-relaxed text-muted-foreground">
            "{item.quote}"
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export function Transformations() {
  return (
    <section id="results" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[140px]" />
      <div className="absolute -right-32 bottom-20 h-[360px] w-[360px] rounded-full bg-neon/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
              Transformations
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Real People. <br className="hidden sm:block" />
              <span className="text-neon text-glow">Real Results.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Everyday people who committed to the process — and built physiques
            they're proud of. No filters. No shortcuts.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <ResultCard key={t.name} item={t} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-neon/30 bg-gradient-to-r from-neon/10 via-surface to-surface p-8 sm:flex-row"
        >
          <div>
            <h3 className="font-display text-2xl sm:text-3xl">
              Your transformation is <span className="text-neon">next.</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get a custom plan and a coach who actually shows up.
            </p>
          </div>
          <a
            href="#plans"
            className="group inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-neon transition hover:brightness-110"
          >
            Claim Your Spot
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
