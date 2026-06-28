import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  goal: z.string().trim().min(1, "Pick a goal"),
  message: z.string().trim().max(500).optional(),
});

const goals = ["Weight Loss", "Muscle Gain", "Personal Training", "Summer Booster", "General Fitness"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      goal: String(form.get("goal") || ""),
      message: String(form.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(
      `Hi Physiques! I'm ${parsed.data.name}. Goal: ${parsed.data.goal}. Phone: ${parsed.data.phone}.${
        parsed.data.message ? " " + parsed.data.message : ""
      }`,
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[140px]" />
      <div className="absolute -left-40 bottom-10 h-[360px] w-[360px] rounded-full bg-neon/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Book your <span className="text-neon text-glow">free trial.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us your goal — a coach will reach out within hours to schedule
              your tour and trial session.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
                <Phone className="mt-0.5 h-5 w-5 text-neon" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                  <a href={`tel:${site.phone}`} className="text-sm font-medium hover:text-neon">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
                <MessageCircle className="mt-0.5 h-5 w-5 text-neon" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-neon"
                  >
                    Chat with us
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
                <MapPin className="mt-0.5 h-5 w-5 text-neon" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Visit</div>
                  <p className="text-sm font-medium">{site.address}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-neon/30 bg-gradient-to-br from-surface via-surface to-background p-7 sm:p-10 shadow-neon">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neon/15 blur-3xl" />

              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-neon/15 text-neon ring-1 ring-neon/40">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl">Message Sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    We've opened WhatsApp for you. A coach will get back within hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:border-neon hover:text-neon"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      name="name"
                      icon={User}
                      placeholder="Ahmed Khan"
                      error={errors.name}
                      maxLength={80}
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      icon={Phone}
                      placeholder="03XX XXXXXXX"
                      type="tel"
                      error={errors.phone}
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Your Goal
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {goals.map((g, i) => (
                        <label key={g} className="cursor-pointer">
                          <input
                            type="radio"
                            name="goal"
                            value={g}
                            defaultChecked={i === 0}
                            className="peer sr-only"
                          />
                          <span className="block rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-medium text-muted-foreground transition hover:border-neon/50 hover:text-foreground peer-checked:border-neon peer-checked:bg-neon peer-checked:text-primary-foreground">
                            {g}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.goal && (
                      <p className="mt-2 text-xs text-red-400">{errors.goal}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Message <span className="normal-case text-muted-foreground/70">(optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-neon" />
                      <textarea
                        name="message"
                        rows={4}
                        maxLength={500}
                        placeholder="Anything we should know?"
                        className="w-full resize-none rounded-xl border border-border bg-background/40 py-3.5 pl-11 pr-4 text-sm placeholder:text-muted-foreground/60 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/40"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-7 py-4 text-sm font-semibold text-primary-foreground shadow-neon transition hover:brightness-110"
                  >
                    Send via WhatsApp
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[11px] text-muted-foreground">
                    By submitting you agree to be contacted about your trial.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  icon: Icon,
  placeholder,
  type = "text",
  error,
  maxLength,
}: {
  label: string;
  name: string;
  icon: typeof User;
  placeholder: string;
  type?: string;
  error?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neon" />
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full rounded-xl border border-border bg-background/40 py-3.5 pl-11 pr-4 text-sm placeholder:text-muted-foreground/60 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/40"
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
