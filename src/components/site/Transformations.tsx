import { motion } from "framer-motion";
import ba1 from "@/assets/ba1.asset.json";
import ba2 from "@/assets/ba2.asset.json";
import ba3 from "@/assets/ba3.asset.json";

const items = [
  {
    img: ba1.url,
    name: "Ahmed K.",
    quote: "Dropped 12kg in 5 months and finally feel confident in my own skin.",
  },
  {
    img: ba3.url,
    name: "Hassan R.",
    quote: "Coaches restructured my training and diet. Strongest I've ever been.",
  },
  {
    img: ba2.url,
    name: "Zain M.",
    quote: "Went from skinny to lean & muscular. The plan actually worked.",
  },
];

export function Transformations() {
  return (
    <section id="results" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            Transformations
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Real People. <span className="text-neon">Real Results.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our members are everyday people who committed to the process — and
            built physiques they're proud of.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-neon/40"
            >
              <div className="relative">
                <img
                  src={t.img}
                  alt={`${t.name} transformation`}
                  className="aspect-[4/5] w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-neon backdrop-blur ring-1 ring-neon/30">
                  Real Result · No Crash Diets
                </span>
              </div>
              <figcaption className="p-6">
                <h3 className="font-display text-xl">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">"{t.quote}"</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
