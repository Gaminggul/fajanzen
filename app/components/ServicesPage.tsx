"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Starfield from "./Starfield";
import { type Locale, LOCALE_OPTIONS, handleLocaleChange } from "@/lib/locale";
import { useScrollReveal } from "@/lib/useScrollReveal";

type ServicesCopy = {
  nav: {
    packages: string;
    process: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    highlights: ReadonlyArray<string>;
  };
  packages: {
    title: string;
    subtitle: string;
    items: ReadonlyArray<{
      name: string;
      summary: string;
      idealFor: string;
      details: ReadonlyArray<string>;
    }>;
  };
  addons: {
    title: string;
    items: ReadonlyArray<string>;
  };
  process: {
    title: string;
    steps: ReadonlyArray<{ title: string; description: string }>;
  };
  faq: {
    title: string;
    items: ReadonlyArray<{ question: string; answer: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

type FooterCopy = {
  copyright: string;
  imprint: string;
  privacy: string;
};

export default function ServicesPage({
  copy,
  footer,
  locale,
}: {
  copy: ServicesCopy;
  footer: FooterCopy;
  locale: Locale;
}) {
  const router = useRouter();
  const email = "noel@fajanzen.de";

  useScrollReveal(locale);

  return (
    <div className="relative min-h-screen overflow-clip bg-[#050806] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(94,242,214,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(94,242,214,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(94,242,214,0.35),rgba(94,242,214,0))] blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(243,181,98,0.26),rgba(243,181,98,0))] blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#050806]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <Link
              href={`/${locale}`}
              className="font-display hidden text-sm uppercase tracking-[0.35em] text-emerald-200/90 md:flex"
            >
              fajanzen
            </Link>
            <nav
              className="flex flex-wrap items-center justify-center gap-4 text-[0.65rem] uppercase tracking-[0.3em] text-slate-300"
              aria-label="Primary"
            >
              <ScrollLink
                to="packages"
                smooth={true}
                duration={500}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.packages}
              </ScrollLink>
              <ScrollLink
                to="process"
                smooth={true}
                duration={500}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.process}
              </ScrollLink>
              <ScrollLink
                to="faq"
                smooth={true}
                duration={500}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.faq}
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.contact}
              </ScrollLink>
            </nav>
            <div
              className="flex justify-center gap-2 md:justify-end"
              role="group"
              aria-label="Language"
            >
              {LOCALE_OPTIONS.map((option) => {
                const isActive = locale === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleLocaleChange(option.value, locale, "/services", router.push)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] transition ${
                      isActive
                        ? "border-emerald-200/70 bg-emerald-200/20 text-emerald-100"
                        : "border-white/20 text-slate-200 hover:border-emerald-200/50 hover:text-emerald-100"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <main id="content" tabIndex={-1}>
          <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pt-24">
            <div className="absolute inset-0 opacity-40">
              <Starfield count={100} seed={321} />
            </div>
            <div className="relative z-10 mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
                  {copy.hero.subtitle}
                </p>
                <h1 className="font-display mt-4 text-4xl leading-tight text-white md:text-6xl">
                  {copy.hero.title}
                </h1>
                <p className="mt-4 text-base text-slate-300 md:text-lg">
                  {copy.hero.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="group inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-200/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-200/20"
                  >
                    {copy.hero.ctaPrimary}
                    <span className="text-base transition group-hover:translate-x-1">→</span>
                  </ScrollLink>
                  <Link
                    href={`/${locale}#projects`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:border-emerald-200/60 hover:text-emerald-100"
                  >
                    {copy.hero.ctaSecondary}
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {copy.hero.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-4 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-emerald-100/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative" data-animate data-delay="120">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-400/30 via-transparent to-amber-300/30 blur-xl" />
                <div className="relative rounded-3xl border border-white/10 bg-[#0b1311]/80 p-6 shadow-2xl">
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-emerald-200/70">
                    {copy.packages.subtitle}
                  </p>
                  <div className="mt-6 space-y-4 text-sm text-slate-300">
                    {copy.packages.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                      >
                        <p className="font-display text-lg text-white">
                          {item.name}
                        </p>
                        <p className="mt-2 text-sm text-slate-300">
                          {item.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="packages" className="border-t border-white/5 px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <div data-animate data-delay="0">
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  {copy.packages.title}
                </h2>
                <p className="mt-3 text-slate-300">{copy.packages.subtitle}</p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {copy.packages.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="card-lift rounded-2xl border border-white/10 bg-[#0b1311]/80 p-6"
                    data-animate
                    data-delay={index * 120}
                  >
                    <h3 className="font-display text-2xl text-white">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300">
                      {item.summary}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-emerald-200/70">
                      {item.idealFor}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-200">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-200/70" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="addons" className="border-t border-white/5 px-6 py-20">
            <div className="mx-auto max-w-6xl" data-animate data-delay="0">
              <h2 className="font-display text-3xl text-white md:text-4xl">
                {copy.addons.title}
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {copy.addons.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="border-t border-white/5 px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <div data-animate data-delay="0">
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  {copy.process.title}
                </h2>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {copy.process.steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="card-lift rounded-2xl border border-white/10 bg-[#0b1311]/80 p-6"
                    data-animate
                    data-delay={index * 120}
                  >
                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-emerald-200/70">
                      0{index + 1}
                    </p>
                    <h3 className="font-display mt-3 text-xl text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="border-t border-white/5 px-6 py-20">
            <div className="mx-auto max-w-4xl" data-animate data-delay="0">
              <h2 className="font-display text-3xl text-white md:text-4xl">
                {copy.faq.title}
              </h2>
              <div className="mt-8 space-y-4">
                {copy.faq.items.map((item, index) => (
                  <details
                    key={item.question}
                    className="card-lift rounded-2xl border border-white/10 bg-[#0b1311]/80 p-5"
                    data-animate
                    data-delay={index * 120}
                  >
                    <summary className="cursor-pointer text-sm uppercase tracking-[0.2em] text-emerald-200">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm text-slate-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

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
                    {copy.contact.title}
                  </h2>
                  <p className="mt-3 text-slate-300">{copy.contact.subtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={`mailto:${email}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-200/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-200/20"
                    >
                      {copy.contact.ctaPrimary}
                      <span className="text-base transition group-hover:translate-x-1">→</span>
                    </a>
                    <Link
                      href={`/${locale}#projects`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:border-emerald-200/60 hover:text-emerald-100"
                    >
                      {copy.contact.ctaSecondary}
                    </Link>
                  </div>
                  <p className="mt-6 text-sm text-slate-400">{email}</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 px-6 py-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
            <p>{footer.copyright}</p>
            <div className="flex gap-4">
              <Link
                href="/impressum"
                className="transition hover:text-emerald-200"
              >
                {footer.imprint}
              </Link>
              <Link
                href="/datenschutz"
                className="transition hover:text-emerald-200"
              >
                {footer.privacy}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
