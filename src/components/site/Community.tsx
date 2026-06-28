import { motion } from "framer-motion";
import { ArrowRight, Sunrise, Users, Wind } from "lucide-react";
import rooftop from "@/assets/rooftop.asset.json";

const perks = [
  { icon: Sunrise, title: "Open-air sessions", desc: "Rooftop classes under the Lahore sky." },
  { icon: Users, title: "Community first", desc: "Train alongside 1,200+ committed members." },
  { icon: Wind, title: "Functional space", desc: "Mobility, HIIT, and crossfit on a dedicated turf." },
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
            <div className="relative overflow-hidden rounded-3xl border border-neon/30 shadow-neon">
              <img
                src={rooftop.url}
                alt="Physiques members in a rooftop training session at sunset in Johar Town, Lahore"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neon">
                    Rooftop Session
                  </div>
                  <div className="font-display text-2xl text-white sm:text-3xl">
                    Train as a tribe.
                  </div>
                </div>
                <span className="rounded-full bg-neon px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-neon">
                  Live
                </span>
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
              The Community
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              More than a gym. <br />
              <span className="text-neon text-glow">A movement.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Weekly rooftop sessions, group conditioning, and a culture that
              keeps every member accountable. You don't just join Physiques —
              you join a family that shows up.
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
              Join the Tribe
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
