import { motion } from "framer-motion";
import { Flame, ShieldCheck, Users, Sparkles } from "lucide-react";
import building from "@/assets/building.asset.json";
import lobby from "@/assets/lobby.asset.json";

const stats = [
  { icon: Users, label: "Active Members", value: "1.2K+" },
  { icon: Flame, label: "Years Training", value: "7+" },
  { icon: ShieldCheck, label: "Certified Coaches", value: "12" },
  { icon: Sparkles, label: "Avg. Rating", value: "4.5★" },
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
                src={building.url}
                alt="Physiques Gym Building"
                className="aspect-[3/4] w-full rounded-2xl object-cover ring-1 ring-border"
              />
              <img
                src={lobby.url}
                alt="Physiques Gym Interior"
                className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover ring-1 ring-border"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-neon/30 bg-surface px-6 py-4 shadow-neon sm:block">
              <div className="font-display text-3xl text-neon">7+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Years strong
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
              About Physiques
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Fitness isn't a hobby. <br />
              <span className="text-neon">It's a lifestyle.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Physiques is Johar Town's destination for serious training. From
              free weights and CrossFit to sauna and steam recovery, every inch
              of the floor is built around your transformation. Our certified
              coaches design programs around your body, lifestyle, and goals —
              no cookie-cutter plans, ever.
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
