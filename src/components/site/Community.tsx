import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, ShieldCheck, Users } from "lucide-react";
import floor from "@/assets/bfg-machines.asset.json";
import bench from "@/assets/bfg-bench.asset.json";
import treadmills from "@/assets/bfg-treadmills.asset.json";

const perks = [
  { icon: Dumbbell, title: "Premium equipment", desc: "Life Fitness cardio, plate-loaded strength, Olympic benches." },
  { icon: Users, title: "Community first", desc: "Train alongside a 14K+ strong BFG family." },
  { icon: ShieldCheck, title: "Ladies-only hours", desc: "Daily 10 AM – 2 PM for extra comfort and privacy." },
];

export function Community() {
  return (
    <section id="community" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-7"
          >
            <div className="grid grid-cols-6 gap-3 sm:gap-4">
              <div className="col-span-4 overflow-hidden rounded-3xl border border-neon/30 shadow-neon">
                <img
                  src={floor.url}
                  alt="BFG strength floor with cable machines"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={treadmills.url}
                    alt="BFG treadmill line-up"
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={bench.url}
                    alt="BFG Olympic bench area"
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
              Inside BFG
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              More than a gym. <br />
              <span className="text-neon text-glow">A movement.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hardwood floors, premium machines, and a culture that keeps every
              member accountable. You don't just join BFG — you join a family
              that shows up.
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-surface/60 p-4 transition hover:border-neon/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-neon/10 text-neon ring-1 ring-neon/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="text-xs text-muted-foreground">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition hover:brightness-110"
            >
              Join the BFG Family
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
