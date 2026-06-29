import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/bfg-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how" },
  { label: "Floor", href: "#community" },
  { label: "Plans", href: "#plans" },
  { label: "Visit", href: "#visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 bg-[linear-gradient(to_bottom,rgba(250,204,21,0.15)_0%,rgba(250,204,21,0.08)_20%,#000000_55%,rgba(250,204,21,0.12)_100%)]">
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Body Fit Gym"
            className="h-10 w-10 rounded-lg bg-black object-contain p-1 ring-1 ring-neon/30"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide">
              B<span className="text-neon">F</span>G
            </span>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:block">
              Body Fit Gym
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-bold text-muted-foreground transition-colors hover:text-neon"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="group hidden items-center gap-2 rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-neon transition hover:brightness-110 lg:inline-flex"
        >
          Book Now
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-surface hover:text-neon"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    setOpen(false);
                    scrollToContact(e);
                  }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-neon px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Book Now <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
