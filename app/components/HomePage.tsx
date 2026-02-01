"use client";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/navigation";
import type { IconType } from "react-icons";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { type Locale, LOCALE_OPTIONS, handleLocaleChange } from "@/lib/locale";
import {
  FaReact,
  FaHtml5,
  FaPython,
  FaJava,
  FaRust,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaServer,
  FaGamepad,
  FaCode,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiDart,
  SiDocker,
  SiGnubash,
  SiGitlab,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import Starfield from "./Starfield";

type HomeCopy = {
  nav: {
    about: string;
    services: string;
    certificates: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    intro: string;
    name: string;
    role: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    highlights: ReadonlyArray<string>;
    panelTitle: string;
    meta: ReadonlyArray<{ label: string; value: string }>;
  };
  about: {
    kicker: string;
    title: string;
    intro: string;
    birthdayLabel: string;
    birthdayValue: string;
    locationLabel: string;
    locationValue: string;
    hobbiesLabel: string;
    hobbies: ReadonlyArray<string>;
  };
  certificates: {
    title: string;
    items: ReadonlyArray<{ title: string; detail: string }>;
    notePrefix: string;
    noteLink: string;
    noteSuffix: string;
  };
  skills: {
    title: string;
    subtitle: string;
    groups: ReadonlyArray<{
      title: string;
      items: ReadonlyArray<string>;
    }>;
  };
  projects: {
    title: string;
    featuredTitle: string;
    featured: ReadonlyArray<{
      title: string;
      summary: string;
      focus: string;
      tags: ReadonlyArray<string>;
      links: ReadonlyArray<{ label: string; url: string }>;
    }>;
    moreTitle: string;
    more: ReadonlyArray<{
      title: string;
      description: string;
      links: ReadonlyArray<{ label: string; url: string }>;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    ctaCopy: string;
    ctaOpen: string;
  };
  footer: {
    copyright: string;
    imprint: string;
    privacy: string;
  };
};

const SKILL_ICON_MAP: Record<string, IconType> = {
  React: FaReact,
  Dart: SiDart,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: FaPython,
  "HTML/CSS": FaHtml5,
  Java: FaJava,
  Rust: FaRust,
  "C++": SiCplusplus,
  Bash: SiGnubash,
  Docker: SiDocker,
  "GitLab CI/CD": SiGitlab,
};

const PROJECT_ICONS: IconType[] = [FaServer, FaGamepad, FaCode];
const hobbyIcons = ["🎮", "🤿", "🧗‍♂️", "🎣", "💻", "⛳"];

export default function HomePage({
  copy,
  locale,
}: {
  copy: HomeCopy;
  locale: Locale;
}) {
  const router = useRouter();

  const contacts = [
    { icon: FaEnvelope, label: "Email", value: "noel@fajanzen.de", type: "copy" as const },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "https://github.com/Gaminggul",
      type: "link" as const,
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "https://www.instagram.com/drivenby.noel/",
      type: "link" as const,
    },
  ];

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
            <SpeedInsights />
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
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.about}
              </ScrollLink>
              <Link
                href={`/${locale}/services`}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.services}
              </Link>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.projects}
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.skills}
              </ScrollLink>
              <ScrollLink
                to="certificates"
                smooth={true}
                duration={500}
                className="cursor-pointer transition hover:text-emerald-200"
              >
                {copy.nav.certificates}
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
                    onClick={() => handleLocaleChange(option.value, locale, "", router.push)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] transition ${isActive
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
          <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
            <div className="absolute inset-0 opacity-40">
              <Starfield count={220} seed={123} />
            </div>
            <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="rise-in text-xs uppercase tracking-[0.35em] text-emerald-200/70">
                  {copy.hero.greeting}
                </p>
                <h1 className="rise-in-delay font-display mt-4 text-4xl leading-tight text-white md:text-6xl">
                  {copy.hero.intro}{" "}
                  <span className="text-emerald-200">{copy.hero.name}</span>
                </h1>
                <p className="rise-in-delay-2 mt-4 text-lg text-slate-300">
                  {copy.hero.role}
                </p>
                <p className="rise-in-delay-3 mt-4 text-base text-slate-400 md:text-lg">
                  {copy.hero.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/services`}
                    className="group inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-200/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-200/20"
                  >
                    {copy.hero.ctaPrimary}
                    <span className="text-base transition group-hover:translate-x-1">→</span>
                  </Link>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:border-emerald-200/60 hover:text-emerald-100"
                  >
                    {copy.hero.ctaSecondary}
                  </ScrollLink>
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

              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-400/30 via-transparent to-amber-300/30 blur-xl" />
                <div className="relative rounded-3xl border border-white/10 bg-[#0b1311]/80 p-6 shadow-2xl">
                  <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/70">
                    {copy.hero.panelTitle}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {copy.hero.meta.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                      >
                        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm text-emerald-100">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="border-t border-white/5 px-6 py-20">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div className="" data-animate data-delay="0">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
                  {copy.about.kicker}
                </p>
                <h2 className="font-display mt-4 text-3xl text-white md:text-4xl">
                  {copy.about.title}
                </h2>
                <p className="mt-4 text-base text-slate-300 md:text-lg">
                  {copy.about.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {copy.about.hobbies.map((hobby, index) => {
                    const icon = hobbyIcons[index];
                    return (
                      <span
                        key={`${hobby}-${index}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-200"
                      >
                        <span>{icon}</span>
                        {hobby}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-4">
                <div
                  className="card-lift rounded-2xl border border-white/10 bg-[#0b1311]/80 p-4"
                  data-animate
                  data-delay="120"
                >
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                    {copy.about.birthdayLabel}
                  </p>
                  <p className="mt-2 text-lg text-emerald-100">
                    {copy.about.birthdayValue}
                  </p>
                </div>
                <div
                  className="card-lift rounded-2xl border border-white/10 bg-[#0b1311]/80 p-4"
                  data-animate
                  data-delay="220"
                >
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                    {copy.about.locationLabel}
                  </p>
                  <p className="mt-2 text-lg text-emerald-100">
                    {copy.about.locationValue}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="border-t border-white/5 px-6 py-20"
          >
            <div className="mx-auto max-w-6xl">
              <div
                className="flex flex-wrap items-end justify-between gap-6"
                data-animate
                data-delay="0"
              >
                <div>
                  <h2 className="font-display text-3xl text-white md:text-4xl">
                    {copy.projects.title}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-emerald-200/70">
                    {copy.projects.featuredTitle}
                  </p>
                </div>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {copy.projects.featured.map((project, index) => {
                  const Icon = PROJECT_ICONS[index] ?? FaCode;
                  return (
                    <div
                      key={project.title}
                      className="group card-lift relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1311]/80 p-6"
                      data-animate
                      data-delay={index * 120}
                    >
                      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 [background:radial-gradient(circle_at_top,rgba(94,242,214,0.2),transparent_65%)]" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-emerald-200/70">
                            {project.focus}
                          </span>
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-emerald-200">
                            <Icon className="text-lg" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="font-display mt-4 text-2xl text-white">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm text-slate-300">
                          {project.summary}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4 text-sm">
                          {project.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              className="text-emerald-200 transition hover:text-amber-200"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} ${link.label}`}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="mt-12 rounded-2xl border border-white/10 bg-[#0b1311]/60 p-6"
                data-animate
                data-delay="80"
              >
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-emerald-200/70">
                  {copy.projects.moreTitle}
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {copy.projects.more.map((project, index) => (
                    <div
                      key={project.title}
                      className="card-lift rounded-xl border border-white/10 bg-black/30 p-4"
                      data-animate
                      data-delay={index * 120}
                    >
                      <h3 className="font-display text-lg text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3 text-sm">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            className="text-emerald-200 transition hover:text-amber-200"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} ${link.label}`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="border-t border-white/5 px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <div
                className="flex flex-wrap items-end justify-between gap-6"
                data-animate
                data-delay="0"
              >
                <div>
                  <h2 className="font-display text-3xl text-white md:text-4xl">
                    {copy.skills.title}
                  </h2>
                  <p className="mt-2 text-slate-400">{copy.skills.subtitle}</p>
                </div>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {copy.skills.groups.map((group, index) => (
                  <div
                    key={group.title}
                    className="card-lift rounded-2xl border border-white/10 bg-[#0b1311]/80 p-6"
                    data-animate
                    data-delay={index * 140}
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-emerald-200/70">
                      {group.title}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {group.items.map((item) => {
                        const Icon = SKILL_ICON_MAP[item] ?? FaCode;
                        return (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-slate-200"
                          >
                            <Icon
                              className="text-lg text-emerald-200"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="certificates"
            className="border-t border-white/5 px-6 py-20"
          >
            <div className="mx-auto max-w-6xl">
              <div
                className="flex flex-wrap items-end justify-between gap-6"
                data-animate
                data-delay="0"
              >
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  {copy.certificates.title}
                </h2>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {copy.certificates.items.map((item, index) => (
                  <div
                    key={item.title}
                    className="card-lift rounded-2xl border border-white/10 bg-[#0b1311]/80 p-5"
                    data-animate
                    data-delay={index * 120}
                  >
                    <h3 className="font-display text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="mt-8 text-sm text-slate-300"
                data-animate
                data-delay="80"
              >
                {copy.certificates.notePrefix}{" "}
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-emerald-200 transition hover:text-amber-200"
                >
                  {copy.certificates.noteLink}
                </ScrollLink>
                {copy.certificates.noteSuffix}
              </p>
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
                                  {copy.contact.ctaCopy}
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
                              {copy.contact.ctaOpen}
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
        </main>

        <footer className="border-t border-white/10 px-6 py-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
            <p>{copy.footer.copyright}</p>
            <div className="flex gap-4">
              <Link
                href="/impressum"
                className="transition hover:text-emerald-200"
              >
                {copy.footer.imprint}
              </Link>
              <Link
                href="/datenschutz"
                className="transition hover:text-emerald-200"
              >
                {copy.footer.privacy}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
