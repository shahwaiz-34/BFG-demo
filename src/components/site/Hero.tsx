import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, MapPin, Star } from "lucide-react";
import heroBg from "@/assets/bfg-hero-bg.asset.json";
import logo from "@/assets/bfg-logo.asset.json";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg.url}
          alt="Body Fit Gym storefront in G-11 Markaz, Islamabad"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Layered overlays for legibility on all screen sizes */}
        <div className="absolute inset-0 bg-background/75 sm:bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-neon/15 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-neon backdrop-blur"
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
            className="mt-6 max-w-xl text-base text-foreground/80 sm:text-lg"
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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:border-neon hover:text-neon"
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
                <span className="text-foreground/70"> · {site.reviews} Google reviews</span>
              </span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">{site.followers}</span> Instagram
            </div>
          </motion.div>
        </div>

        {/* Floating info card — visible on lg+ to complement the bg photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden lg:col-span-5 lg:block"
        >
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-neon/20 blur-3xl" />
            <div className="relative rounded-2xl border border-neon/30 bg-background/60 p-6 backdrop-blur-xl shadow-neon">
              <div className="flex items-center gap-3">
                <img src={logo.url} alt="" className="h-12 w-12 rounded-lg bg-black object-contain p-1.5" />
                <div>
                  <p className="font-display text-xl leading-none text-neon">BODY FIT GYM</p>
                  <p className="mt-1 text-xs text-foreground/70">Est. 2018 · G-11 Markaz</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-neon/30 bg-neon/5 px-3 py-2">
                <MapPin className="h-4 w-4 text-neon" />
                <span className="text-xs text-foreground/90">
                  Rehman Plaza · G-11, Islamabad
                </span>
                <span className="ml-auto rounded-full bg-neon px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Open
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border bg-surface/60 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-foreground/60">Daily</p>
                  <p className="font-display text-base text-foreground">6AM – 12AM</p>
                </div>
                <div className="rounded-lg border border-border bg-surface/60 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-foreground/60">Ladies</p>
                  <p className="font-display text-base text-neon">10AM – 2PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
