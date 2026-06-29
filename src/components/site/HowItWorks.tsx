import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, CalendarCheck, TrendingUp } from "lucide-react";
import ad from "@/assets/bfg-ad.mp4";
import { VideoReel } from "./VideoReel";

const steps = [
  {
    icon: PhoneCall,
    title: "Free Intake Call",
    desc: "We learn your goals, lifestyle, training history and any limitations.",
  },
  {
    icon: ClipboardList,
    title: "Custom Plan",
    desc: "Receive a personalized training & nutrition strategy built just for you.",
  },
  {
    icon: CalendarCheck,
    title: "Weekly Check-Ins",
    desc: "Stay on track with support, adjustments, and full accountability.",
  },
  {
    icon: TrendingUp,
    title: "Real Results",
    desc: "Strength, energy, confidence — measurable progress every month.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Your path to a <span className="text-neon">stronger you</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We make fitness fit your life. Four simple steps to start
            transforming your body and habits — for good.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <VideoReel reel={{ src: ad, label: "BFG Official" }} />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition hover:border-neon/50"
              >
                <div className="absolute -right-6 -top-6 font-display text-7xl text-neon/5 transition group-hover:text-neon/10">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-neon/10 text-neon ring-1 ring-neon/30">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
