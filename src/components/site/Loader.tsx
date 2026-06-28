import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/bfg-logo.asset.json";

export function Loader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShow(false), 200);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pct = Math.round(progress * 100);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <motion.div
            className="absolute h-[520px] w-[520px] rounded-full bg-neon/20 blur-[160px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.div
              className="relative"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="absolute -inset-4 rounded-full border border-neon/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ borderTopColor: "transparent", borderRightColor: "transparent" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-neon/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ borderBottomColor: "transparent", borderLeftColor: "transparent" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-neon/40 blur-2xl"
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <img
                src={logo.url}
                alt="Body Fit Gym"
                className="relative h-24 w-24 rounded-full bg-black object-contain p-2 ring-1 ring-neon/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h2 className="font-display text-2xl tracking-[0.3em] sm:text-3xl">
                B<span className="text-neon text-glow">F</span>G
              </h2>
              <p className="mt-1 text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
                Body Fit Gym
              </p>
            </motion.div>

            <div className="flex w-64 flex-col items-center gap-2">
              <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-neon shadow-neon"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex w-full items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Loading</span>
                <span className="text-neon">{pct}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
