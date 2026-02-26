"use client";

import { useState, type FormEvent } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

type ContactFormCopy = {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  orDirect: string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  messageMinLength: string;
  submitted: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const next: typeof errors = {};
    if (!name.trim()) next.name = copy.nameRequired;
    if (!email.trim()) {
      next.email = copy.emailRequired;
    } else if (!isValidEmail(email)) {
      next.email = copy.emailInvalid;
    }
    if (!message.trim()) {
      next.message = copy.messageRequired;
    } else if (message.trim().length < 10) {
      next.message = copy.messageMinLength;
    }
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(
      name ? `Projektanfrage von ${name}` : "Projektanfrage",
    );
    const body = encodeURIComponent(
      [name && `Name: ${name}`, email && `Email: ${email}`, "", message]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:noel@fajanzen.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputBase =
    "w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-emerald-200/50";

  return (
    <div>
      {submitted && (
        <p
          role="status"
          className="mb-6 rounded-xl border border-emerald-200/30 bg-emerald-200/10 px-4 py-3 text-sm text-emerald-200"
        >
          {copy.submitted}
        </p>
      )}
      <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-[0.6rem] uppercase tracking-[0.3em] text-slate-400"
            >
              {copy.nameLabel}
            </label>
            <input
              type="text"
              id="contact-name"
              autoComplete="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
              }}
              aria-describedby={errors.name ? "error-name" : undefined}
              aria-invalid={!!errors.name}
              className={`${inputBase} ${errors.name ? "border-red-400/60" : "border-white/10"}`}
            />
            {errors.name && (
              <p id="error-name" role="alert" className="mt-1 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-[0.6rem] uppercase tracking-[0.3em] text-slate-400"
            >
              {copy.emailLabel}
            </label>
            <input
              type="email"
              id="contact-email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
              }}
              aria-describedby={errors.email ? "error-email" : undefined}
              aria-invalid={!!errors.email}
              className={`${inputBase} ${errors.email ? "border-red-400/60" : "border-white/10"}`}
            />
            {errors.email && (
              <p id="error-email" role="alert" className="mt-1 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-[0.6rem] uppercase tracking-[0.3em] text-slate-400"
          >
            {copy.messageLabel}
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
            }}
            placeholder={copy.messagePlaceholder}
            aria-describedby={errors.message ? "error-message" : undefined}
            aria-invalid={!!errors.message}
            className={`${inputBase} resize-none ${errors.message ? "border-red-400/60" : "border-white/10"}`}
          />
          {errors.message && (
            <p id="error-message" role="alert" className="mt-1 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-200/10 px-6 py-2.5 text-xs uppercase tracking-[0.3em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-200/20"
          >
            {copy.submitLabel}
            <span className="text-base transition group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </button>
          <span className="text-sm text-slate-400">
            {copy.orDirect}{" "}
            <a
              href="mailto:noel@fajanzen.de"
              className="text-emerald-200 transition hover:text-amber-200"
            >
              noel@fajanzen.de
            </a>
          </span>
        </div>
      </form>
      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/Gaminggul"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 transition hover:border-emerald-200/50 hover:text-emerald-200"
          aria-label="GitHub"
        >
          <FaGithub className="text-lg" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/drivenby.noel/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 transition hover:border-emerald-200/50 hover:text-emerald-200"
          aria-label="Instagram"
        >
          <FaInstagram className="text-lg" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
