import { motion } from "framer-motion";
import { PlayCircle, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useRef, useState } from "react";
import v1 from "@/assets/gym-vertical.asset.json";
import v2 from "@/assets/gym-vertical-2.asset.json";
import vWide from "@/assets/gym-video.asset.json";

const reels = [
  { src: v1.url, label: "Floor Energy" },
  { src: v2.url, label: "Coaching" },
  { src: vWide.url, label: "Walkthrough" },
];

const trust = [
  { icon: ShieldCheck, label: "Certified Coaches" },
  { icon: Users, label: "1,200+ Members" },
  { icon: Sparkles, label: "Premium Equipment" },
];

function Reel({ src, active }: { src: string; active: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`group relative aspect-[9/16] w-full overflow-hidden rounded-3xl border bg-black transition-all ${
        active ? "border-neon/60 shadow-neon scale-100" : "border-border scale-[0.94] opacity-70"
      }`}
    >
      <video
        ref={ref}
        src={src}
        className="h-full w-full object-cover"
        playsInline
        muted
        loop
        preload="metadata"
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/10 to-transparent">
          <div className="rounded-full bg-neon/95 p-4 shadow-neon transition group-hover:scale-110">
            <PlayCircle className="h-8 w-8 text-primary-foreground" strokeWidth={1.5} />
          </div>
        </div>
      )}
    </button>
  );
}

export function VideoTrust() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            Inside Physiques
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Real floor. <span className="text-neon">Real energy.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Watch a few seconds from inside the gym — the equipment, the people,
            the intensity. No staged shots.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12">
          {/* Phone reels carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="mx-auto grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
              {reels.map((r, i) => (
                <div
                  key={r.src}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="cursor-pointer"
                >
                  <Reel src={r.src} active={i === active} />
                  <p className={`mt-3 text-center text-xs uppercase tracking-[0.2em] transition ${
                    i === active ? "text-neon" : "text-muted-foreground"
                  }`}>
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trust copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="font-display text-3xl leading-tight sm:text-4xl">
              Built different from <span className="text-neon">day one.</span>
            </h3>
            <p className="mt-4 text-muted-foreground">
              From the equipment to the coaches, every detail is dialed in to
              get you results — and keep you coming back.
            </p>

            <ul className="mt-8 space-y-4">
              {trust.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4 transition hover:border-neon/40"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-neon/10 text-neon ring-1 ring-neon/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
