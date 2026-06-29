import { motion } from "framer-motion";
import { Loader2, Pause, Play, ShieldCheck, Sparkles, Users, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import ad from "@/assets/bfg-ad.asset.json";
import review1 from "@/assets/bfg-review-1.asset.json";
import review2 from "@/assets/bfg-review-2.asset.json";

const trust = [
  { icon: ShieldCheck, label: "Certified Coaches" },
  { icon: Users, label: "14K+ BFG Followers" },
  { icon: Sparkles, label: "Premium Equipment" },
];

type Reel = { src: string; label: string; tag: string };

const reels: Reel[] = [
  { src: ad.url, label: "BFG Official", tag: "Ad" },
  { src: review1.url, label: "Member Review", tag: "Reel" },
  { src: review2.url, label: "Inside Floor", tag: "Reel" },
];

function VideoReel({ reel }: { reel: Reel }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
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
    <div className="group relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-3xl border border-border bg-black shadow-xl transition hover:border-neon/60 hover:shadow-neon">
      <video
        ref={ref}
        src={reel.src}
        className="h-full w-full object-cover"
        playsInline
        loop
        preload="metadata"
        controls={false}
        muted
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onWaiting={() => setLoading(true)}
        onLoadStart={() => setLoading(true)}
        onCanPlay={() => { setLoading(false); setReady(true); }}
        onPlaying={() => setLoading(false)}
        onClick={togglePlay}
      />

      <div className="pointer-events-none absolute left-3 top-3">
        <span className="rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neon backdrop-blur ring-1 ring-neon/30">
          {reel.label}
        </span>
      </div>

      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute" : "Mute"}
        className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/70 text-neon backdrop-blur ring-1 ring-neon/30 transition hover:bg-neon hover:text-primary-foreground"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>

      {loading && (
        <div className="pointer-events-none absolute inset-0 z-[5] grid place-items-center bg-black/40 backdrop-blur-sm">
          <Loader2 className="h-10 w-10 animate-spin text-neon" />
        </div>
      )}

      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause" : "Play"}
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent transition ${
          playing && !loading ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-neon shadow-neon transition group-hover:scale-110">
          {playing ? (
            <Pause className="h-7 w-7 text-primary-foreground" />
          ) : (
            <Play className="h-7 w-7 translate-x-0.5 text-primary-foreground" />
          )}
        </span>
      </button>
    </div>
  );
}

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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
