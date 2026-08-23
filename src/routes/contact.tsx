import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Instagram, Mail } from "lucide-react";

import { brand, contact } from "@/content/voltrage";
import { Reveal } from "@/components/site/Reveal";
import { contactSchema, submitContactMessage } from "@/lib/contact.functions";

const title = "Contact Voltrage — Product, Order & Wholesale Support";
const description =
  "Questions about Voltrage products, your order, or wholesale opportunities? Call, email, or send us a message.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full border-b border-input bg-transparent py-4 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none";

type Errors = Partial<Record<"name" | "email" | "subject" | "message" | "form", string>>;

function ContactPage() {
  const send = useServerFn(submitContactMessage);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("idle");
      setErrors({ form: "We couldn't send your message. Please try again." });
    }
  }

  return (
    <>
      <section className="mx-auto max-w-[110rem] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:px-12">
        <Reveal>
          <p className="eyebrow">Contact Us</p>
          <h1 className="text-display mt-6 font-display font-extrabold uppercase">
            {contact.header}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {contact.intro}
          </p>
        </Reveal>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto grid max-w-[110rem] gap-16 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12">
          <Reveal>
            <h2 className="eyebrow">Direct Channels</h2>
            <ul className="mt-8 space-y-6">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="group inline-flex min-h-11 items-center gap-4 font-display text-xl font-bold break-all transition-colors hover:text-accent sm:text-2xl"
                >
                  <Mail className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="sr-only">Email: </span>
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex min-h-11 items-center gap-4 font-display text-xl font-bold transition-colors hover:text-accent sm:text-2xl"
                >
                  <Instagram className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="sr-only">Instagram: </span>
                  {brand.instagram}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="eyebrow">Send a message</h2>
            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow block">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="eyebrow block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="eyebrow block">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  defaultValue={contact.subjects[0]}
                  required
                  aria-invalid={Boolean(errors.subject)}
                  className={`${fieldClass} appearance-none`}
                >
                  {contact.subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-surface">
                      {subject}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="mt-2 text-sm text-destructive">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="eyebrow block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={2000}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${fieldClass} resize-y`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-12 items-center bg-accent px-8 text-sm font-bold tracking-wide text-accent-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? "Sending…" : "Submit"}
                </button>

                <p aria-live="polite" className="text-sm">
                  {status === "sent" && (
                    <span className="text-accent">Thanks — your message is on its way.</span>
                  )}
                  {errors.form && <span className="text-destructive">{errors.form}</span>}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
