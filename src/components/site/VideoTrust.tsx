import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import review1 from "@/assets/bfg-review-1.asset.json";
import review2 from "@/assets/bfg-review-2.asset.json";
import { VideoReel, type Reel } from "./VideoReel";

const trust = [
  { icon: ShieldCheck, label: "Certified Coaches" },
  { icon: Users, label: "14K+ BFG Followers" },
  { icon: Sparkles, label: "Premium Equipment" },
];

const reels: Reel[] = [
  { src: review1.url, label: "Member Review" },
  { src: review2.url, label: "Inside Floor" },
];

export function VideoTrust() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[140px]" />
      <div className="absolute -left-40 bottom-20 h-[380px] w-[380px] rounded-full bg-neon/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            Inside BFG
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Real floor. <span className="text-neon">Real energy.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tap any reel to play with sound — straight from our Instagram.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {reels.map((r, i) => (
            <motion.div
              key={r.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <VideoReel reel={r} />
            </motion.div>
          ))}
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3"
        >
          {trust.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-4 transition hover:border-neon/40"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-neon/10 text-neon ring-1 ring-neon/30">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
