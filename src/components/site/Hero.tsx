import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, MapPin, Star } from "lucide-react";
import building from "@/assets/bfg-building.asset.json";
import logo from "@/assets/bfg-logo.asset.json";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20"
    >
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
            <Dumbbell className="h-3.5 w-3.5" /> Islamabad's Body Fit Gym
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            BUILD YOUR
            <br />
            <span className="text-neon text-glow">BODY. BUILD</span>
            <br />
            YOUR LIFE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            BFG is a premium training floor in G-11 Markaz, Islamabad — strength,
            cardio, and conditioning under one roof with dedicated ladies-only
            hours daily.
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
              href="#community"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-neon hover:text-neon"
            >
              Tour the Floor
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
                <span className="text-muted-foreground"> · {site.reviews} Google reviews</span>
              </span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{site.followers}</span> Instagram
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-neon/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-neon/30 shadow-neon">
              <motion.img
                src={building.url}
                alt="Body Fit Gym building in G-11 Markaz, Islamabad"
                className="aspect-[4/5] w-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2 rounded-xl border border-neon/30 bg-background/60 px-3 py-2 backdrop-blur">
                  <MapPin className="h-4 w-4 text-neon" />
                  <span className="text-xs text-foreground/90">
                    G-11 Markaz · Islamabad
                  </span>
                  <span className="ml-auto rounded-full bg-neon px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    Open Today
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 top-6 hidden items-center gap-3 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-xl backdrop-blur sm:flex"
            >
              <img src={logo.url} alt="" className="h-9 w-9 rounded-md bg-black object-contain p-1" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Since</p>
                <p className="font-display text-base text-neon leading-none">2018</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
