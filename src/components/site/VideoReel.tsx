import { Loader2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export type Reel = { src: string; label: string };

export function VideoReel({ reel }: { reel: Reel }) {
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
