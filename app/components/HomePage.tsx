"use client";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-scroll";
import Links from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/navigation";
import {
  FaReact,
  FaHtml5,
  FaPython,
  FaJava,
  FaRust,
  FaEnvelope,
  FaGithub,
  FaInstagram,
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
import { LOCALE_COOKIE, type Locale } from "@/lib/locale";

type HomeCopy = {
  nav: {
    about: string;
    certificates: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    intro: string;
    name: string;
  };
  about: {
    title: string;
    intro: string;
    birthdayLabel: string;
    birthdayValue: string;
    locationLabel: string;
    locationValue: string;
    hobbiesLabel: string;
    hobbies: string[];
  };
  certificates: {
    title: string;
    items: string[];
    notePrefix: string;
    noteLink: string;
    noteSuffix: string;
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      links: Array<{
        label: string;
        url: string;
      }>;
    }>;
  };
  contact: {
    title: string;
  };
  footer: {
    copyright: string;
    imprint: string;
    privacy: string;
  };
};

const skills = [
  { icon: FaReact, name: "React" },
  { icon: SiDart, name: "Dart" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaPython, name: "Python" },
  { icon: FaHtml5, name: "HTML/CSS" },
  { icon: FaJava, name: "Java" },
  { icon: FaRust, name: "Rust" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiGnubash, name: "Bash" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGitlab, name: "GitLab CI/CD" },
];

const LOCALE_OPTIONS: Array<{ value: Locale; label: string }> = [
  { value: "de", label: "DE" },
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
];

const hobbyIcons = ["🎮", "🤿", "🧗‍♂️", "🎣", "💻"];

export default function HomePage({
  copy,
  locale,
}: {
  copy: HomeCopy;
  locale: Locale;
}) {
  const router = useRouter();

  const contacts = [
    { icon: FaEnvelope, value: "noel@fajanzen.de", type: "copy" as const },
    {
      icon: FaGithub,
      value: "https://github.com/Gaminggul",
      type: "link" as const,
    },
    {
      icon: FaInstagram,
      value: "https://www.instagram.com/drivenby.noel/",
      type: "link" as const,
    },
  ];

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }
    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-blue-600 py-4 shadow-md">
        <div className="md:px-8 md:flex md:justify-between items-center mx-0 w-full">
          <SpeedInsights />
          <Links href="/" className="text-2xl font-bold text-white hidden md:flex">
            fajanzen.de
          </Links>
          <nav className="flex justify-evenly gap-0 md:gap-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              {copy.nav.about}
            </Link>
            <Link
              to="certificates"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              {copy.nav.certificates}
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              {copy.nav.skills}
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              {copy.nav.projects}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              {copy.nav.contact}
            </Link>
          </nav>
          <div
            className="flex justify-center md:justify-end mt-3 md:mt-0 gap-2"
            role="group"
            aria-label="Language"
          >
            {LOCALE_OPTIONS.map((option) => {
              const isActive = locale === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleLocaleChange(option.value)}
                  aria-pressed={isActive}
                  className={`px-2 py-1 text-xs font-semibold border rounded transition ${
                    isActive
                      ? "bg-white text-blue-700 border-white"
                      : "text-white border-white/60 hover:border-white hover:bg-white/10"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Hero-Section */}
      <main className="relative overflow-hidden h-[50vh] flex items-center justify-center text-center">
        <Starfield count={300} seed={123} />
        <div className="relative z-10 fade-in">
          <h1 className="text-green-500 text-7xl mb-4 animate-pulse">
            {copy.hero.greeting}
          </h1>
          <p className="text-5xl">{copy.hero.intro}</p>
          <h2 className="text-6xl font-bold">{copy.hero.name}</h2>
        </div>
      </main>

      {/* About */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {copy.about.title}
          </h2>
          <p className="text-center max-w-2xl mx-auto">{copy.about.intro}</p>
          <div className="text-center max-w-2xl mx-auto mt-4">
            <p>
              <strong>{copy.about.birthdayLabel}</strong>{" "}
              {copy.about.birthdayValue}
            </p>
            <p>
              <strong>{copy.about.locationLabel}</strong>{" "}
              {copy.about.locationValue}
            </p>
            <div className="flex justify-center mt-4">
              <strong className="mr-4">{copy.about.hobbiesLabel}</strong>
              <ul className="list-none text-left">
                {copy.about.hobbies.map((hobby, index) => {
                  const icon = hobbyIcons[index];
                  return (
                    <li key={`${hobby}-${index}`}>
                      {icon ? `${icon} ` : ""}
                      {hobby}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-20 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {copy.certificates.title}
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <ul className="list-disc list-inside text-left">
              {copy.certificates.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-center">
              {copy.certificates.notePrefix}{" "}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-blue-400 hover:underline cursor-pointer"
              >
                {copy.certificates.noteLink}
              </Link>
              {copy.certificates.noteSuffix}
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {copy.skills.title}
          </h2>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center m-4"
                >
                  <Icon className="text-6xl text-white" />
                  <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 flex flex-col items-center mb-6">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                      {skill.name}
                    </span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {copy.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {copy.projects.items.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 text-white p-4 rounded shadow-lg flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                </div>
                <div className="mt-auto flex justify-between items-center">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="text-blue-400 hover:text-red-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-4">
            {copy.contact.title}
          </h2>
          <div className="flex flex-wrap justify-center">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return contact.type === "copy" ? (
                <CopyToClipboard text={contact.value} key={index}>
                  <div className="group relative flex flex-col items-center m-4 cursor-pointer bg-gray-700 p-4 rounded">
                    <Icon className="text-6xl text-white" />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 flex flex-col items-center mb-6">
                      <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                        {contact.value}
                      </span>
                      <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                    </div>
                  </div>
                </CopyToClipboard>
              ) : (
                <a
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="group relative flex flex-col items-center m-4 cursor-pointer bg-gray-700 p-4 rounded"
                >
                  <Icon className="text-6xl text-white" />
                  <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 flex flex-col items-center mb-6">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                      {contact.value}
                    </span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">{copy.footer.copyright}</p>
          <a href="/impressum" className="text-white hover:underline mx-2">
            {copy.footer.imprint}
          </a>
          <a href="/datenschutz" className="text-white hover:underline mx-2">
            {copy.footer.privacy}
          </a>
        </div>
      </footer>
    </div>
  );
}
