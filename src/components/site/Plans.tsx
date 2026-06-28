import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { plans } from "@/lib/site";

const goalMap: Record<string, string> = {
  "General Membership": "General Fitness",
  "Personal Training": "Personal Training",
  "Summer Booster": "Summer Booster",
};

function choosePlan(planName: string) {
  const goal = goalMap[planName] ?? planName;
  window.dispatchEvent(new CustomEvent("physiques:select-goal", { detail: goal }));
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Plans() {
  return (
    <section id="plans" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            Membership Plans
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Pick the plan, <span className="text-neon">crush the goal.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple, transparent pricing. Cancel any time. No hidden fees.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                p.featured
                  ? "border-neon/50 bg-surface shadow-neon"
                  : "border-border bg-surface/60"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-neon px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                  <Sparkles className="h-3 w-3" /> {p.tag}
                </span>
              )}
              {!p.featured && (
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {p.tag}
                </span>
              )}
              <h3 className="mt-3 font-display text-2xl">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl text-neon">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => choosePlan(p.name)}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-neon text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:border-neon hover:text-neon"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
