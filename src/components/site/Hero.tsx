import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, MapPin, Star } from "lucide-react";
import building from "@/assets/building.asset.json";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-neon/20 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-neon"
          >
            <Dumbbell className="h-3.5 w-3.5" /> Lahore's Premium Gym
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            BUILD YOUR
            <br />
            <span className="text-neon text-glow">BEST PHYSIQUE</span>
            <br />
            FOR LIFE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Get stronger, leaner, and more energized with personalized training,
            nutrition, and a premium gym environment in Johar Town, Lahore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#plans"
              className="group inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-neon transition hover:brightness-110"
            >
              Start Training
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-neon hover:text-neon"
            >
              See Transformations
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-neon text-neon" />
                ))}
              </div>
              <span className="text-sm text-foreground">
                <span className="font-semibold">{site.rating}</span>
                <span className="text-muted-foreground"> · {site.reviews}+ reviews</span>
              </span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">1,200+</span> Members Trained
            </div>
          </motion.div>
        </div>

        {/* Logo medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 animate-pulse rounded-full bg-neon/20 blur-3xl" />
            <motion.img
              src={logo.url}
              alt="Physiques Gym"
              className="relative h-full w-full rounded-full object-cover ring-1 ring-neon/40 shadow-neon"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-full border border-neon/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
