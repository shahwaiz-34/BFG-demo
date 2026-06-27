import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.asset.json";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute h-[420px] w-[420px] rounded-full bg-neon/20 blur-[140px]" />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="relative"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-neon/30 blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              <img
                src={logo.url}
                alt="Physiques"
                className="relative h-24 w-24 rounded-full ring-1 ring-neon/40 object-cover"
              />
            </motion.div>

            <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-border">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3 bg-neon shadow-neon"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-sm uppercase tracking-[0.4em] text-muted-foreground"
            >
              Loading Physiques
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
