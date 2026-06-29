import { motion } from "framer-motion";
import { Flame, ShieldCheck, Users, Sparkles } from "lucide-react";
import building from "@/assets/bfg-building.png";
import floor from "@/assets/bfg-floor.png";
import { site } from "@/lib/site";

const stats = [
  { icon: Users, label: "Instagram Fam", value: site.followers },
  { icon: Flame, label: "Open Daily", value: "7 days" },
  { icon: ShieldCheck, label: "Ladies Only", value: "10–2" },
  { icon: Sparkles, label: "Google Rating", value: `${site.rating}★` },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src={building}
                alt="BFG building, Rehman Plaza G-11 Markaz Islamabad"
                className="aspect-[3/4] w-full rounded-2xl object-cover ring-1 ring-border"
                loading="lazy"
              />
              <img
                src={floor}
                alt="BFG cardio and strength floor"
                className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover ring-1 ring-border"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-neon/30 bg-surface px-6 py-4 shadow-neon sm:block">
              <div className="font-display text-3xl text-neon">{site.rating}★</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {site.reviews} Reviews
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
              About BFG
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Fitness isn't a hobby. <br />
              <span className="text-neon">It's a lifestyle.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Body Fit Gym is G-11's destination for serious training — full
              strength floor, premium cardio line-up, and dedicated ladies-only
              hours every day from 10 AM to 2 PM. Whether you train casually or
              chase competition, our coaches build plans around your body and
              your schedule.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-surface p-4"
                >
                  <s.icon className="h-5 w-5 text-neon" />
                  <div className="mt-3 font-display text-2xl">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
