import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { site } from "@/lib/site";

const reviews = [
  {
    name: "Ali Raza",
    role: "Member · 2 years",
    initials: "AR",
    stars: 5,
    text: "Best gym in Johar Town hands down. Equipment is premium, the floor is always clean and the coaches actually care about your progress.",
  },
  {
    name: "Sara Khan",
    role: "Personal Training",
    initials: "SK",
    stars: 5,
    text: "The personal training package transformed my routine. Custom diet, real coaching and a vibe that pushes you every single session.",
  },
  {
    name: "Bilal Ahmed",
    role: "Summer Booster",
    initials: "BA",
    stars: 5,
    text: "Sauna, steam, crossfit — full premium experience. Worth every rupee. Lost 8kg in 3 months without burning out.",
  },
  {
    name: "Hira Malik",
    role: "Member · 1 year",
    initials: "HM",
    stars: 5,
    text: "Women-friendly environment, professional staff and proper hygiene. Finally a gym in Lahore that feels world-class.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < n ? "fill-neon text-neon" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -left-32 top-40 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[140px]" />
      <div className="absolute -right-32 bottom-20 h-[360px] w-[360px] rounded-full bg-neon/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
              Member Reviews
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Loved by <span className="text-neon text-glow">{site.reviews}+</span> members.
            </h2>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-neon/30 bg-surface/60 px-5 py-4 backdrop-blur">
            <div className="text-right">
              <div className="font-display text-3xl text-neon">{site.rating}</div>
              <Stars n={5} />
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Google
              <br />
              Verified
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-neon/50 hover:shadow-neon"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-neon/15 transition group-hover:text-neon/30" />

              <Stars n={r.stars} />

              <blockquote className="mt-5 text-base leading-relaxed text-foreground/90">
                "{r.text}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-neon/15 font-display text-sm text-neon ring-1 ring-neon/30">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
