import { Instagram, Facebook, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/bfg-logo.png";
import { site } from "@/lib/site";

// TikTok icon (lucide doesn't ship one)
function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.4v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.83 20.1a6.34 6.34 0 0 0 10.86-4.43V9.06a8.16 8.16 0 0 0 4.77 1.52V7.18a4.85 4.85 0 0 1-1.87-.49Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="BFG" className="h-12 w-12 rounded-lg bg-black object-contain p-1 ring-1 ring-neon/30" />
              <div className="leading-tight">
                <span className="font-display text-2xl tracking-wide">
                  B<span className="text-neon">F</span>G
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Body Fit Gym
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Islamabad's premium training floor in G-11 Markaz. Built for
              serious results.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-neon hover:text-neon"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-neon hover:text-neon"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-neon hover:text-neon"
              >
                <TikTok className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-neon">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                <a
                  href={site.social.instagramDM}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-neon"
                >
                  DM on Instagram · {site.social.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-neon">
              Explore
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {[
                { label: "About", href: "#about" },
                { label: "How It Works", href: "#how" },
                { label: "Floor", href: "#community" },
                { label: "Plans", href: "#plans" },
                { label: "Reviews", href: "#reviews" },
                { label: "Visit", href: "#visit" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-neon">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Body Fit Gym. All rights reserved.</p>
          <p>G-11 Markaz, Islamabad · Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
