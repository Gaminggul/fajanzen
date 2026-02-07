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
};

export default function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Projektanfrage von ${name}` : "Projektanfrage",
    );
    const body = encodeURIComponent(
      [name && `Name: ${name}`, email && `Email: ${email}`, "", message]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:noel@fajanzen.de?subject=${subject}&body=${body}`;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-emerald-200/50"
            />
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-emerald-200/50"
            />
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
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={copy.messagePlaceholder}
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-emerald-200/50"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-200/10 px-6 py-2.5 text-xs uppercase tracking-[0.3em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-200/20"
          >
            {copy.submitLabel}
            <span className="text-base transition group-hover:translate-x-1">
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
          <FaGithub className="text-lg" />
        </a>
        <a
          href="https://www.instagram.com/drivenby.noel/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 transition hover:border-emerald-200/50 hover:text-emerald-200"
          aria-label="Instagram"
        >
          <FaInstagram className="text-lg" />
        </a>
      </div>
    </div>
  );
}
