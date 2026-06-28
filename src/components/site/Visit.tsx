import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Star, Instagram } from "lucide-react";
import { hours, site, amenities } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            Visit Us
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Come <span className="text-neon">train with us.</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Open 7 days · Ladies-only window {site.ladiesTime}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-background p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-neon/10 text-neon ring-1 ring-neon/30">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl">Opening Hours</h3>
            </div>
            <ul className="mt-5 divide-y divide-border">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-foreground">{h.day}</span>
                  <span className="font-medium text-neon">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-neon/30 bg-neon/5 px-3 py-2 text-xs text-foreground/90">
              <span className="font-semibold text-neon">Ladies only:</span>{" "}
              {site.ladiesTime} daily
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col rounded-2xl border border-border bg-background p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-neon/10 text-neon ring-1 ring-neon/30">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl">Find Us</h3>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{site.address}</p>

            <div className="mt-6 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5">
              <Star className="h-4 w-4 fill-neon text-neon" />
              <span className="text-sm font-semibold">{site.rating}</span>
              <span className="text-sm text-muted-foreground">
                · {site.reviews} Google Reviews
              </span>
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              {amenities.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
              <a
                href={site.social.instagramDM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neon px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" /> DM Us
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:border-neon hover:text-neon"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-border bg-background"
          >
            <iframe
              src={site.mapEmbed}
              title="Map of Body Fit Gym, G-11 Markaz, Islamabad"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
