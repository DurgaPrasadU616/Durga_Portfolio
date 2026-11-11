"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Code2, Copy, FileText, Github, Linkedin, Mail, Phone } from "lucide-react";

import { Info } from "@/lib/data";
import { contactSchema, contactDefaults, type ContactValues } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/motion";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaults,
    mode: "onBlur",
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(Info.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const onSubmit = (values: ContactValues) => {
    const subject = encodeURIComponent(values.topic);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${Info.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Contact" title="Have an opportunity or project in mind? Let's connect and build something meaningful." />

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left — info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <h3 className="text-2xl font-bold tracking-tight">Prefer email?</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Whether it&apos;s an internship opportunity, a project, or an idea — I&apos;d like to
              hear from you.
            </p>

            <button
              onClick={copyEmail}
              className="card-hover group mt-7 flex w-full items-center justify-between gap-3 rounded-[1.25rem] px-5 py-4 text-left transition-all duration-250 ease-out hover:-translate-y-0.5 active:translate-y-0"
              title="Copy my email address"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-brand-soft text-brand transition-transform duration-250 group-hover:scale-105">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{Info.email}</span>
                  <span className="block text-xs text-ink-soft">Click to copy</span>
                </span>
              </span>
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500"
                  >
                    <Check className="size-4" /> Copied
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Copy className="size-4 text-ink-soft transition-transform duration-250 group-hover:scale-110" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href={`tel:${Info.phone.replace(/[^\d+]/g, "")}`}
              className="card-hover group mt-3 flex w-full items-center justify-between gap-3 rounded-[1.25rem] px-5 py-4 text-left transition-all duration-250 ease-out hover:-translate-y-0.5 active:translate-y-0"
              title="Call me"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-brand-soft text-brand transition-transform duration-250 group-hover:scale-105">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{Info.phone}</span>
                  <span className="block text-xs text-ink-soft">Tap to call</span>
                </span>
              </span>
              <ArrowUpRight className="size-4 text-ink-soft transition-transform duration-250 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </a>

            <div className="hairline-grid mt-3 grid sm:grid-cols-2">
              <ContactLink
                icon={<Github className="size-5 text-ink" />}
                label="GitHub"
                sub="Code & open builds"
                href={Info.socials.github}
              />
              <ContactLink
                icon={<Linkedin className="size-5 text-[#0a66c2]" />}
                label="LinkedIn"
                sub="Profile & history"
                href={Info.socials.linkedin}
              />
              <ContactLink
                icon={<Code2 className="size-5 text-emerald-600" />}
                label="HackerRank"
                sub="300+ problems solved"
                href={Info.socials.hackerrank}
              />
              <ContactLink
                icon={<FileText className="size-5 text-brand" />}
                label="Resume"
                sub="Print / save as PDF"
                href={Info.resumeUrl}
              />
            </div>
          </motion.div>

          {/* right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.08 }}
            className="rounded-[1.5rem] border border-line bg-card p-6 shadow-card sm:p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    error={errors.name?.message}
                    {...register("name")}
                    placeholder="Ada Lovelace"
                    autoComplete="name"
                  />
                  <Field
                    label="Email"
                    type="email"
                    error={errors.email?.message}
                    {...register("email")}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </div>
                <Field
                  label="Topic"
                  error={errors.topic?.message}
                  {...register("topic")}
                  placeholder="Internship, hackathon, or just saying hi"
                />
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the problem you want to solve…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(inputBase, errors.message && inputError)}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -6, height: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      role="status"
                      className="overflow-hidden"
                    >
                      <div className="flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-800">
                        <Check className="size-4 shrink-0 text-emerald-600" />
                        <span>Email client opened with your pre-filled draft. Talk soon!</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-xs text-ink-soft">
                  This opens your email app with the message pre-filled.
                </p>
                <Magnetic className="w-full">
                  <Button type="submit" size="lg" className="w-full">
                    Send message
                    <ArrowUpRight />
                  </Button>
                </Magnetic>
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputBase =
  "w-full rounded-2xl border border-line bg-bg px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/70 transition-all duration-300 outline-none focus:border-brand/60 focus:bg-white focus:ring-4 focus:ring-brand-soft";

const inputError = "border-red-300 focus:border-red-400 focus:ring-red-100";

function ContactLink({
  icon,
  label,
  sub,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 px-5 py-4 transition-colors duration-200 hover:bg-brand-soft/20"
      title={`${label} — ${sub}`}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-pale transition-transform duration-250 group-hover:scale-105">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block truncate text-xs text-ink-soft">{sub}</span>
      </span>
      <ArrowUpRight className="size-4 shrink-0 text-ink-soft/60 transition-transform duration-250 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
    </a>
  );
}

function Field({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  const id = props.id ?? props.name;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputBase, error && inputError)}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}