"use client";
import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaRust,
  FaEnvelope,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { SiDart, SiTypescript, SiJavascript, SiCsharp } from "react-icons/si";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-scroll";

const skills = [
  { icon: FaReact, name: "React" },
  { icon: SiDart, name: "Dart" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaPython, name: "Python" },
  { icon: FaHtml5, name: "HTML/CSS" },
  { icon: FaJava, name: "Java" },
  { icon: SiCsharp, name: "C#" },
  { icon: FaRust, name: "Rust" },
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Meine persönliche Portfolio-Website, die meine Fähigkeiten und Projekte zeigt.",
    githubLink: "https://github.com/Gaminggul/njwebsite",
    liveDemoLink: "#",
  },
  {
    title: "Angsthase",
    description: "Eine Partyapp mit den Fragen vom Kartenspiel Angsthase.",
    githubLink: "https://github.com/Gaminggul/angsthase",
    liveDemoLink: "#",
  },
  {
    title: "KnowUnity-PDF-Downloader",
    description:
      "Eine Chrome-Erweiterung zum Herunterladen von PDFs von KnowUnity.",
    githubLink: "https://github.com/Gaminggul/KnowUnity-PDF-Downloader",
    liveDemoLink: "#",
  },
  {
    title: "PokerCats",
    description: "Ein webbasiertes Pokerspiel namens PokerCats.",
    githubLink: "https://github.com/Gaminggul/PokerOnline",
    liveDemoLink: "#",
  },
];

const contacts = [
  { icon: FaEnvelope, name: "Email", value: "noel@fajanzen.de", type: "copy" },
  {
    icon: FaTwitter,
    name: "Twitter",
    value: "https://twitter.com/gaminggul1",
    type: "link",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    value: "https://github.com/Gaminggul",
    type: "link",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-blue-600 py-4 shadow-md">
        <div className="md:px-8 md:flex md:justify-between items-center mx-0 w-full">
          <a href="/" className="text-2xl font-bold text-white hidden md:flex">
            fajanzen.de
          </a>
          <nav className="flex justify-evenly gap-0 md:gap-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              Über Mich
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              Projekte
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:underline cursor-pointer"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative overflow-hidden h-[50vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 stars-background">
          {[...Array(300)].map((_, i) => {
            const speed = Math.random() * 2 + 2;
            return <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 120}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${speed}s`,
                width: `${4 / speed}px`,
                height: `${4 / speed}px`,
              }}
            ></div>;
          })}
        </div>
        <div className="relative z-10 fade-in">
          <h1 className="text-green-500 text-7xl mb-4 animate-pulse">Hi!</h1>
          <p className="text-5xl">Mein Name ist</p>
          <h2 className="text-6xl font-bold">Noel Janzen</h2>
        </div>
      </main>

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Über Mich</h2>
          <p className="text-center max-w-2xl mx-auto">
            Hey, mein Name ist Noel Janzen. Zurzeit mache ich mein Duales Studium im Bereich Informatik.
          </p>
          <div className="text-center max-w-2xl mx-auto mt-4">
            <p>
              <strong>Geburtstag:</strong> 19.04.2006
            </p>
            <p>
              <strong>Standort:</strong> Hamm, Nordrhein-Westfalen, Deutschland
            </p>
            <div className="flex justify-center mt-4">
              <strong className="mr-4">Hobbys:</strong>
              <ul className="list-none text-left">
                <li>🎮 Gaming</li>
                <li>🤿 Tauchen</li>
                <li>🧗‍♂️ Bouldern</li>
                <li>⛳ Golfen</li>
                <li>💻 Programmieren</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
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

      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 text-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-bold">Portfolio Website</h3>
              <p className="mb-4">
                Meine persönliche Portfolio-Website, die meine Fähigkeiten und
                Projekte zeigt.
              </p>
              <a
                href="https://github.com/Gaminggul/njwebsite"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-bold">Angsthase</h3>
              <p className="mb-4">
                Eine Partyapp mit den Fragen vom Kartenspiel Angsthase.
              </p>
              <a
                href="https://github.com/Gaminggul/angsthase"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-bold">PokerCats</h3>
              <p className="mb-4">
                Ein webbasiertes Pokerspiel namens PokerCats.
              </p>
              <a
                href="https://github.com/Gaminggul/PokerOnline"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded shadow-lg md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-3">
              <h3 className="text-xl font-bold">KnowUnity-PDF-Downloader</h3>
              <p className="mb-4">
                Eine Chrome-Erweiterung zum Herunterladen von PDFs von
                KnowUnity.
              </p>
              <a
                href="https://github.com/Gaminggul/KnowUnity-PDF-Downloader"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-4">Kontakt</h2>
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

      <footer className="bg-blue-600 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">© 2024 Noel Janzen</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
