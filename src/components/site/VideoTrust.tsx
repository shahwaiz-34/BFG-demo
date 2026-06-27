import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import video from "@/assets/gym-video.asset.json";

export function VideoTrust() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
              Inside Physiques
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Step <span className="text-neon">inside</span> the floor.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Premium equipment, dedicated zones, and an environment built to
              push you. See the energy for yourself.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 text-sm text-muted-foreground">
              <PlayCircle className="h-5 w-5 text-neon" />
              Walk-through video
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-neon">
              <video
                src={video.url}
                className="aspect-video w-full object-cover"
                controls
                playsInline
                muted
                loop
                preload="metadata"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
