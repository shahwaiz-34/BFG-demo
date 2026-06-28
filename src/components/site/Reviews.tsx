import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
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
  {
    name: "Usman Tariq",
    role: "Member · 8 months",
    initials: "UT",
    stars: 5,
    text: "Rooftop sessions hit different. Coaches push you the right way and recovery rooms are top tier.",
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
  const swiperRef = useRef<SwiperType | null>(null);

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

        <div className="relative mt-14">
          {/* Desktop arrows */}
          <button
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-neon/40 bg-surface/80 text-neon backdrop-blur transition hover:bg-neon hover:text-primary-foreground lg:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-neon/40 bg-surface/80 text-neon backdrop-blur transition hover:bg-neon hover:text-primary-foreground lg:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            onSwiper={(s) => (swiperRef.current = s)}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.name} className="h-auto">
                <figure className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/60 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-neon/50 hover:shadow-neon">
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
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        #reviews .swiper-pagination-bullet { background: color-mix(in oklab, var(--neon) 25%, transparent); opacity: 1; }
        #reviews .swiper-pagination-bullet-active { background: var(--neon); }
      `}</style>
    </section>
  );
}
