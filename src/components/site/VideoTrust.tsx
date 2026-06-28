import { motion } from "framer-motion";
import { Loader2, Pause, Play, ShieldCheck, Sparkles, Users, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import ad from "@/assets/bfg-ad.asset.json";

const trust = [
  { icon: ShieldCheck, label: "Certified Coaches" },
  { icon: Users, label: "14K+ BFG Followers" },
  { icon: Sparkles, label: "Premium Equipment" },
];

export function VideoTrust() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.muted = false;
      setMuted(false);
      if (!ready) setLoading(true);
      el.play().catch(() => setLoading(false));
    } else {
      el.pause();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

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
            Inside BFG
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Real floor. <span className="text-neon">Real energy.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tap to play the official BFG walkthrough — sound included.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-black shadow-xl transition hover:border-neon/60 hover:shadow-neon">
              <video
                ref={ref}
                src={ad.url}
                className="h-full w-full object-cover"
                playsInline
                loop
                preload="metadata"
                controls={false}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onWaiting={() => setLoading(true)}
                onLoadStart={() => setLoading(true)}
                onCanPlay={() => { setLoading(false); setReady(true); }}
                onPlaying={() => setLoading(false)}
                onClick={togglePlay}
              />

              <div className="pointer-events-none absolute left-4 top-4">
                <span className="rounded-full bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-neon backdrop-blur ring-1 ring-neon/30">
                  BFG Official
                </span>
              </div>

              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/70 text-neon backdrop-blur ring-1 ring-neon/30 transition hover:bg-neon hover:text-primary-foreground"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>

              {loading && (
                <div className="pointer-events-none absolute inset-0 z-[5] grid place-items-center bg-black/40 backdrop-blur-sm">
                  <Loader2 className="h-12 w-12 animate-spin text-neon" />
                </div>
              )}

              <button
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Play"}
                className={`absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent transition ${
                  playing && !loading ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-neon shadow-neon transition group-hover:scale-110">
                  {playing ? (
                    <Pause className="h-8 w-8 text-primary-foreground" />
                  ) : (
                    <Play className="h-8 w-8 translate-x-0.5 text-primary-foreground" />
                  )}
                </span>
              </button>
            </div>
          </motion.div>

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
              From the equipment to the coaches, every detail at BFG is dialed
              in to get you results — and keep you coming back.
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
