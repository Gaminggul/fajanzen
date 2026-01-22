import type { Locale } from "./locale";

export const BASE_URL = "https://fajanzen.de";

export const LANGUAGE_TAG: Record<Locale, string> = {
  de: "de-DE",
  en: "en-US",
  ru: "ru-RU",
};

export const OG_LOCALE: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
  ru: "ru_RU",
};

export const LANGUAGE_ALTERNATES = {
  "de-DE": "/de",
  "en-US": "/en",
  "ru-RU": "/ru",
  "x-default": "/en",
};

export const SEO: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
    jobTitle: string;
    tagline: string;
  }
> = {
  de: {
    title: "Noel Janzen — Web-Apps & Automatisierung",
    description:
      "Portfolio von Noel Janzen, dualer Informatikstudent in Darmstadt. Web-Apps, Automatisierung, Tools und Projekte.",
    keywords: [
      "Noel Janzen",
      "Portfolio",
      "Web-Apps",
      "Automatisierung",
      "TypeScript",
      "React",
      "Darmstadt",
    ],
    jobTitle: "Dualer Informatikstudent",
    tagline: "Web-Apps & Automatisierung",
  },
  en: {
    title: "Noel Janzen — Web Apps & Automation",
    description:
      "Portfolio of Noel Janzen, dual study CS student in Darmstadt. Web apps, automation, tools, and projects.",
    keywords: [
      "Noel Janzen",
      "portfolio",
      "web apps",
      "automation",
      "TypeScript",
      "React",
      "Darmstadt",
    ],
    jobTitle: "Dual study computer science student",
    tagline: "Web Apps & Automation",
  },
  ru: {
    title: "Noel Janzen — Веб-приложения и автоматизация",
    description:
      "Портфолио Noel Janzen, студент дуальной программы по информатике в Дармштадте. Веб-приложения, автоматизация, инструменты и проекты.",
    keywords: [
      "Noel Janzen",
      "портфолио",
      "веб-приложения",
      "автоматизация",
      "TypeScript",
      "React",
      "Дармштадт",
    ],
    jobTitle: "Студент дуальной программы по информатике",
    tagline: "Веб-приложения и автоматизация",
  },
} as const;

export const TRANSLATIONS = {
  de: {
    nav: {
      about: "Über",
      certificates: "Zertifikate",
      skills: "Skills",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hi!",
      intro: "Ich bin",
      name: "Noel Janzen",
      role: "Dualer Informatikstudent · Web-Apps · Automatisierung",
      summary:
        "Ich baue klare, schnelle Web-Erlebnisse und kleine Tools, die Arbeit vereinfachen.",
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Kontakt",
      highlights: [
        "Web-Apps & Interfaces",
        "Automation & Tooling",
        "Clean Code & Performance",
      ],
      panelTitle: "Fokus",
      meta: [
        {
          label: "Aktuell in",
          value: "Darmstadt, Hessen",
        },
        { label: "Stack", value: "TypeScript · React · Docker" },
      ],
    },
    about: {
      kicker: "Kurzprofil",
      title: "Über mich",
      intro:
        "Hey, ich bin Noel. Ich studiere Informatik im dualen Studium und liebe Projekte, die komplexe Dinge einfach machen.",
      birthdayLabel: "Geburtstag",
      birthdayValue: "19.04.2006",
      locationLabel: "Standort",
      locationValue: "Darmstadt, Hessen · Deutschland",
      hobbiesLabel: "Hobbys",
      hobbies: [
        "Gaming",
        "Tauchen",
        "Bouldern",
        "Angeln",
        "Programmieren",
        "Golf",
      ],
    },
    certificates: {
      title: "Zertifikate",
      items: [
        {
          title: "Grundlagen der Betriebswirtschaftslehre",
          detail: "Institut für berufliche Hochschulbildung",
        },
        {
          title: "Cambridge Assessment",
          detail: "Englisch-Zertifikat",
        },
        {
          title: "Schülerakademie: Klimaschutz schafft Zukunft",
          detail: "Natur- und Umweltschutz-Akademie des Landes NRW",
        },
      ],
      notePrefix: "Wenn du die Zertifikate als PDF sehen möchtest,",
      noteLink: "schreib mir",
      noteSuffix: ".",
    },
    skills: {
      title: "Skills",
      subtitle: "Was ich gerne baue",
      groups: [
        {
          title: "Frontend & UI",
          items: ["React", "TypeScript", "HTML/CSS", "JavaScript"],
        },
        {
          title: "Automation & Tooling",
          items: ["Python", "Bash", "Docker", "GitLab CI/CD"],
        },
        {
          title: "Sprachen & Systeme",
          items: ["Java", "Rust", "C++", "Dart"],
        },
      ],
    },
    projects: {
      title: "Projekte",
      featuredTitle: "Ausgewählte Arbeiten",
      featured: [
        {
          title: "Server Management Scripts",
          summary:
            "Automatisierte Verwaltung von Minecraft-Servern für Routineaufgaben, Starts und Pflege.",
          focus: "Automation & Ops",
          tags: ["Scripting", "Server", "Maintenance"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/minecraft-server-management-scripts",
            },
          ],
        },
        {
          title: "Angsthase",
          summary:
            "Party-Webapp mit den Fragen aus dem Kartenspiel „Angsthase“ – schnell, simpel, spaßig.",
          focus: "Web App",
          tags: ["Party Game", "UI", "Frontend"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          summary:
            "Webbasiertes Pokerspiel mit klarer Oberfläche und Spiellogik.",
          focus: "Web Game",
          tags: ["Game Logic", "UI", "Web"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/PokerOnline" },
          ],
        },
      ],
      moreTitle: "Weitere Builds",
      more: [
        {
          title: "Portfolio Website",
          description:
            "Meine persönliche Portfolio-Website für Skills, Projekte und Kontakt.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/njwebsite" },
            { label: "Website öffnen", url: "https://fajanzen.de" },
          ],
        },
        {
          title: "KnowUnity-PDF-Downloader",
          description:
            "Chrome-Erweiterung zum Herunterladen von PDFs von KnowUnity.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/KnowUnity-PDF-Downloader",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      subtitle: "Lass uns über Projekte, Praktika oder Ideen sprechen.",
      ctaCopy: "E-Mail kopieren",
      ctaOpen: "Öffnen",
    },
    footer: {
      copyright: "© 2026 Noel Janzen",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
  },
  en: {
    nav: {
      about: "About",
      certificates: "Certificates",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi!",
      intro: "I'm",
      name: "Noel Janzen",
      role: "Dual study CS · Web apps · Automation",
      summary:
        "I build crisp, fast web experiences and small tools that remove friction.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
      highlights: [
        "Web apps & interfaces",
        "Automation & tooling",
        "Clean code & performance",
      ],
      panelTitle: "Focus",
      meta: [
        {
          label: "Currently in",
          value: "Darmstadt, Hesse",
        },
        { label: "Stack", value: "TypeScript · React · Docker" },
      ],
    },
    about: {
      kicker: "Snapshot",
      title: "About",
      intro:
        "Hi, I'm Noel. I'm currently doing a dual study program in computer science and enjoy projects that make complex things feel simple.",
      birthdayLabel: "Birthday",
      birthdayValue: "19.04.2006",
      locationLabel: "Location",
      locationValue: "Darmstadt, Hesse · Germany",
      hobbiesLabel: "Hobbies",
      hobbies: [
        "Gaming",
        "Diving",
        "Bouldering",
        "Fishing",
        "Programming",
        "Golf",
      ],
    },
    certificates: {
      title: "Certificates",
      items: [
        {
          title: "Fundamentals of Business Administration",
          detail: "Institute for Vocational Higher Education",
        },
        {
          title: "Cambridge Assessment",
          detail: "English certificate",
        },
        {
          title: "Student Academy: Climate protection creates a future",
          detail: "Nature and Environmental Protection Academy of NRW",
        },
      ],
      notePrefix: "If you'd like to see the certificates as PDFs,",
      noteLink: "reach out",
      noteSuffix: ".",
    },
    skills: {
      title: "Skills",
      subtitle: "What I like building",
      groups: [
        {
          title: "Frontend & UI",
          items: ["React", "TypeScript", "HTML/CSS", "JavaScript"],
        },
        {
          title: "Automation & Tooling",
          items: ["Python", "Bash", "Docker", "GitLab CI/CD"],
        },
        {
          title: "Languages & Systems",
          items: ["Java", "Rust", "C++", "Dart"],
        },
      ],
    },
    projects: {
      title: "Projects",
      featuredTitle: "Selected work",
      featured: [
        {
          title: "Server Management Scripts",
          summary:
            "Automated Minecraft server management for routine tasks, starts, and maintenance.",
          focus: "Automation & Ops",
          tags: ["Scripting", "Servers", "Maintenance"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/minecraft-server-management-scripts",
            },
          ],
        },
        {
          title: "Angsthase",
          summary:
            "Party web app with questions from the card game “Angsthase” — quick, simple, fun.",
          focus: "Web App",
          tags: ["Party Game", "UI", "Frontend"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          summary: "Web-based poker game with a clean interface and game logic.",
          focus: "Web Game",
          tags: ["Game Logic", "UI", "Web"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/PokerOnline" },
          ],
        },
      ],
      moreTitle: "More builds",
      more: [
        {
          title: "Portfolio Website",
          description:
            "My personal portfolio website for skills, projects, and contact.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/njwebsite" },
            { label: "Open website", url: "https://fajanzen.de" },
          ],
        },
        {
          title: "KnowUnity-PDF-Downloader",
          description: "Chrome extension for downloading PDFs from KnowUnity.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/KnowUnity-PDF-Downloader",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Let’s talk about projects, internships, or ideas.",
      ctaCopy: "Copy email",
      ctaOpen: "Open",
    },
    footer: {
      copyright: "© 2026 Noel Janzen",
      imprint: "Imprint",
      privacy: "Privacy",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      certificates: "Сертификаты",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет!",
      intro: "Я",
      name: "Noel Janzen",
      role: "Дуальная программа · Веб-приложения · Автоматизация",
      summary:
        "Делаю быстрые и аккуратные веб-интерфейсы и инструменты, которые упрощают работу.",
      ctaPrimary: "Смотреть проекты",
      ctaSecondary: "Связаться",
      highlights: [
        "Веб-приложения и интерфейсы",
        "Автоматизация и инструменты",
        "Чистый код и производительность",
      ],
      panelTitle: "Фокус",
      meta: [
        {
          label: "Сейчас",
          value: "Дармштадт, Гессен",
        },
        { label: "Стек", value: "TypeScript · React · Docker" },
      ],
    },
    about: {
      kicker: "Коротко",
      title: "Обо мне",
      intro:
        "Привет, я Noel. Сейчас учусь по дуальной программе в области информатики и люблю проекты, которые делают сложное простым.",
      birthdayLabel: "Дата рождения",
      birthdayValue: "19.04.2006",
      locationLabel: "Локация",
      locationValue: "Дармштадт, Гессен · Германия",
      hobbiesLabel: "Хобби",
      hobbies: [
        "Игры",
        "Дайвинг",
        "Боулдеринг",
        "Рыбалка",
        "Программирование",
        "Гольф",
      ],
    },
    certificates: {
      title: "Сертификаты",
      items: [
        {
          title: "Основы управления бизнесом",
          detail: "Институт профессионального высшего образования",
        },
        {
          title: "Cambridge Assessment",
          detail: "Сертификат по английскому",
        },
        {
          title: "Студенческая академия: климатическая защита",
          detail: "Академия охраны природы и окружающей среды земли NRW",
        },
      ],
      notePrefix: "Если хотите посмотреть сертификаты в PDF,",
      noteLink: "напишите мне",
      noteSuffix: ".",
    },
    skills: {
      title: "Навыки",
      subtitle: "Что мне нравится делать",
      groups: [
        {
          title: "Фронтенд и UI",
          items: ["React", "TypeScript", "HTML/CSS", "JavaScript"],
        },
        {
          title: "Автоматизация и инструменты",
          items: ["Python", "Bash", "Docker", "GitLab CI/CD"],
        },
        {
          title: "Языки и системы",
          items: ["Java", "Rust", "C++", "Dart"],
        },
      ],
    },
    projects: {
      title: "Проекты",
      featuredTitle: "Избранные работы",
      featured: [
        {
          title: "Server Management Scripts",
          summary:
            "Автоматизация управления Minecraft-серверами для рутинных задач и обслуживания.",
          focus: "Automation & Ops",
          tags: ["Scripting", "Servers", "Maintenance"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/minecraft-server-management-scripts",
            },
          ],
        },
        {
          title: "Angsthase",
          summary:
            "Веб-приложение для вечеринок с вопросами из карточной игры “Angsthase”.",
          focus: "Web App",
          tags: ["Party Game", "UI", "Frontend"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          summary: "Веб-покер с аккуратным интерфейсом и логикой игры.",
          focus: "Web Game",
          tags: ["Game Logic", "UI", "Web"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/PokerOnline" },
          ],
        },
      ],
      moreTitle: "Другие проекты",
      more: [
        {
          title: "Portfolio Website",
          description: "Мой личный сайт-портфолио с проектами и контактами.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/njwebsite" },
            { label: "Открыть сайт", url: "https://fajanzen.de" },
          ],
        },
        {
          title: "KnowUnity-PDF-Downloader",
          description: "Расширение Chrome для скачивания PDF с KnowUnity.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/KnowUnity-PDF-Downloader",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Контакты",
      subtitle: "Давайте обсудим проекты, стажировки или идеи.",
      ctaCopy: "Скопировать email",
      ctaOpen: "Открыть",
    },
    footer: {
      copyright: "© 2026 Noel Janzen",
      imprint: "Импрессум",
      privacy: "Политика конфиденциальности",
    },
  },
} as const;
