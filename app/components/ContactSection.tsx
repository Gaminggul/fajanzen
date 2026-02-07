"use client";

import { CopyToClipboard } from "react-copy-to-clipboard";
import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

type ContactCopy = {
  title: string;
  subtitle: string;
  ctaCopy: string;
  ctaOpen: string;
};

const contacts: Array<{
  icon: IconType;
  label: string;
  value: string;
  type: "copy" | "link";
}> = [
  { icon: FaEnvelope, label: "Email", value: "noel@fajanzen.de", type: "copy" },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "https://github.com/Gaminggul",
    type: "link",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "https://www.instagram.com/drivenby.noel/",
    type: "link",
  },
];

export default function ContactSection({ copy }: { copy: ContactCopy }) {
  return (
    <section id="contact" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-3xl border border-emerald-200/20 bg-[#0b1311]/80 p-8 md:p-10"
          data-animate
          data-delay="0"
        >
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(94,242,214,0.25),rgba(94,242,214,0))] blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl text-white md:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-3 text-slate-300">{copy.subtitle}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                if (contact.type === "copy") {
                  return (
                    <div
                      key={contact.value}
                      className="card-lift rounded-2xl border border-white/10 bg-black/40 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-emerald-200">
                            <Icon className="text-lg" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                              {contact.label}
                            </p>
                            <p className="mt-2 text-sm text-slate-200">
                              {contact.value}
                            </p>
                          </div>
                        </div>
                        <CopyToClipboard text={contact.value}>
                          <button
                            type="button"
                            className="rounded-full border border-emerald-200/50 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-200/10"
                            aria-label={`Copy ${contact.label}`}
                          >
                            {copy.ctaCopy}
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={contact.value}
                    href={contact.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-lift rounded-2xl border border-white/10 bg-black/40 p-4"
                    aria-label={`Open ${contact.label}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-emerald-200">
                          <Icon className="text-lg" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                            {contact.label}
                          </p>
                          <p className="mt-2 text-sm text-slate-200">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-slate-200 transition hover:border-emerald-200/60 hover:text-emerald-100">
                        {copy.ctaOpen}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
