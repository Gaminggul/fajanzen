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
    title: "Noel Janzen — Websites & Web-Apps für Startups",
    description:
      "Portfolio von Noel Janzen, dualer Informatikstudent und Freelance Webentwickler in Darmstadt. Websites, Web-Apps und Automatisierung.",
    keywords: [
      "Noel Janzen",
      "Portfolio",
      "Websites",
      "Web-Apps",
      "Freelance Webentwickler",
      "TypeScript",
      "React",
      "Darmstadt",
    ],
    jobTitle: "Freelance Webentwickler · Dualer Informatikstudent",
    tagline: "Websites & Web-Apps",
  },
  en: {
    title: "Noel Janzen — Websites & Web Apps for Startups",
    description:
      "Portfolio of Noel Janzen, dual CS student and freelance web developer in Darmstadt. Websites, web apps, and automation.",
    keywords: [
      "Noel Janzen",
      "portfolio",
      "websites",
      "web apps",
      "freelance web developer",
      "TypeScript",
      "React",
      "Darmstadt",
    ],
    jobTitle: "Freelance Web Developer · Dual CS Student",
    tagline: "Websites & Web Apps",
  },
  ru: {
    title: "Noel Janzen — Сайты и веб-приложения для стартапов",
    description:
      "Портфолио Noel Janzen, студент дуальной программы и фриланс-веб-разработчик из Дармштадта. Сайты, веб-приложения и автоматизация.",
    keywords: [
      "Noel Janzen",
      "портфолио",
      "сайты",
      "веб-приложения",
      "фриланс веб-разработчик",
      "TypeScript",
      "React",
      "Дармштадт",
    ],
    jobTitle: "Фриланс-веб-разработчик · Студент дуальной программы",
    tagline: "Сайты и веб-приложения",
  },
} as const;

export const SERVICES_SEO: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "Pakete & Leistungen",
    description: "Pakete für Websites, Relaunches und Automatisierung.",
  },
  en: {
    title: "Packages & Services",
    description: "Packages for websites, relaunches, and automation.",
  },
  ru: {
    title: "Пакеты и услуги",
    description: "Пакеты для сайтов, редизайна и автоматизации.",
  },
} as const;

export const TRANSLATIONS = {
  de: {
    nav: {
      about: "Über",
      services: "Pakete",
      certificates: "Zertifikate",
      skills: "Skills",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hi!",
      intro: "Ich bin",
      name: "Noel Janzen",
      role: "Freelance Webentwickler · Websites & Web-Apps",
      summary:
        "Ich unterstütze Startups und kleine Unternehmen mit klaren, schnellen Websites — von der Idee bis zum Launch.",
      ctaPrimary: "Pakete ansehen",
      ctaSecondary: "Projekt anfragen",
      highlights: [
        "Websites für Startups",
        "Relaunch & Performance",
        "Automation & Tooling",
      ],
      panelTitle: "Auf einen Blick",
      meta: [
        {
          label: "Standort",
          value: "Darmstadt, Hessen",
        },
        { label: "Fokus", value: "Websites · Web-Apps · Automationen" },
      ],
    },
    about: {
      kicker: "Persönlich",
      title: "Über mich",
      intro:
        "Ich bin Noel, dualer Informatikstudent und Freelancer. Ich mag klare Kommunikation, strukturierte Abläufe und Lösungen, die sich langfristig gut pflegen lassen.",
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
      subtitle: "Technik, mit der ich arbeite",
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
            "Automatisierte Start/Stop, Backups und Updates für Minecraft-Server — spart Zeit bei Routineaufgaben.",
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
            "Party-Webapp mit den Fragen aus dem Kartenspiel „Angsthase“ — mobil schnell startklar.",
          focus: "Web App",
          tags: ["Party Game", "UI", "Frontend"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          summary:
            "Webbasiertes Pokerspiel mit klarer Oberfläche, Spielrunden und Logik.",
          focus: "Web Game",
          tags: ["Game Logic", "UI", "Web"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/PokerOnline" },
          ],
        },
      ],
      moreTitle: "Weitere Projekte",
      more: [
        {
          title: "Portfolio Website",
          description:
            "Meine Portfolio-Website mit Infos, Projekten und Kontakt.",
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
      title: "Projekt anfragen",
      subtitle: "Erzähl mir kurz, worum es geht — ich melde mich schnell zurück.",
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
      services: "Packages",
      certificates: "Certificates",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi!",
      intro: "I'm",
      name: "Noel Janzen",
      role: "Freelance Web Developer · Websites & Web Apps",
      summary:
        "I help startups and small teams with clear, fast websites — from idea to launch.",
      ctaPrimary: "View packages",
      ctaSecondary: "Start a project",
      highlights: [
        "Websites for startups",
        "Relaunch & performance",
        "Automation & tooling",
      ],
      panelTitle: "At a glance",
      meta: [
        {
          label: "Location",
          value: "Darmstadt, Hesse",
        },
        { label: "Focus", value: "Websites · Web Apps · Automation" },
      ],
    },
    about: {
      kicker: "Personal",
      title: "About",
      intro:
        "I'm Noel, a dual CS student and freelance developer. I value clear communication, structured workflows, and solutions that stay easy to maintain.",
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
      subtitle: "Tech I work with",
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
            "Automated start/stop, backups, and updates for Minecraft servers — saves time on routine tasks.",
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
            "Party web app with questions from the card game “Angsthase” — quick to start on mobile.",
          focus: "Web App",
          tags: ["Party Game", "UI", "Frontend"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          summary:
            "Web-based poker game with a clean interface, rounds, and game logic.",
          focus: "Web Game",
          tags: ["Game Logic", "UI", "Web"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/PokerOnline" },
          ],
        },
      ],
      moreTitle: "More projects",
      more: [
        {
          title: "Portfolio Website",
          description:
            "My portfolio website with info, projects, and contact details.",
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
      title: "Start a project",
      subtitle: "Tell me what you need and I’ll get back quickly.",
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
      services: "Пакеты",
      certificates: "Сертификаты",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет!",
      intro: "Я",
      name: "Noel Janzen",
      role: "Фриланс-веб-разработчик · Сайты и веб-приложения",
      summary:
        "Помогаю стартапам и небольшим компаниям с понятными и быстрыми сайтами — от идеи до запуска.",
      ctaPrimary: "Смотреть пакеты",
      ctaSecondary: "Запросить проект",
      highlights: [
        "Сайты для стартапов",
        "Редизайн и производительность",
        "Автоматизация и инструменты",
      ],
      panelTitle: "Коротко",
      meta: [
        {
          label: "Локация",
          value: "Дармштадт, Гессен",
        },
        { label: "Фокус", value: "Сайты · Веб-приложения · Автоматизация" },
      ],
    },
    about: {
      kicker: "Личное",
      title: "Обо мне",
      intro:
        "Я Noel, студент дуальной программы и фриланс-разработчик. Люблю чёткие коммуникации, структурированный процесс и решения, которые легко поддерживать.",
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
      subtitle: "Технологии, с которыми я работаю",
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
            "Автоматизация запуска/остановки, бэкапов и обновлений Minecraft-серверов — экономит время на рутине.",
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
            "Веб-приложение для вечеринок с вопросами из карточной игры “Angsthase” — быстро запускается на телефоне.",
          focus: "Web App",
          tags: ["Party Game", "UI", "Frontend"],
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          summary:
            "Веб-покер с аккуратным интерфейсом, раундами и игровой логикой.",
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
          description: "Мой сайт-портфолио с проектами и контактами.",
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
      title: "Запросить проект",
      subtitle: "Коротко опишите задачу — отвечу быстро.",
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

export const SERVICES = {
  de: {
    nav: {
      packages: "Pakete",
      process: "Ablauf",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      title: "Pakete & Leistungen",
      subtitle: "Klare Websites für Startups und kleine Unternehmen.",
      intro:
        "Wähle ein Paket als Startpunkt — ich passe es bei Bedarf an dein Projekt an.",
      ctaPrimary: "Projekt anfragen",
      ctaSecondary: "Portfolio ansehen",
      highlights: [
        "Fester Rahmen",
        "Transparente Kommunikation",
        "Schneller Launch",
      ],
    },
    packages: {
      title: "Pakete",
      subtitle: "Grobe Orientierung – finaler Umfang nach kurzem Call.",
      items: [
        {
          name: "Starter Site",
          summary: "Eine klare Präsenz, die dein Angebot verständlich macht.",
          idealFor: "Ideal für neue Produkte, Landingpages, MVPs.",
          details: [
            "1–4 Seiten",
            "Design + Umsetzung",
            "Basis-SEO & Performance",
            "Kontaktformular",
          ],
        },
        {
          name: "Growth Site",
          summary: "Mehr Tiefe, Content und Struktur für wachsende Teams.",
          idealFor: "Ideal für Startups mit mehreren Angeboten.",
          details: [
            "5–10 Seiten",
            "CMS für Inhalte",
            "Blog/Insights",
            "Tracking-Setup",
          ],
        },
        {
          name: "Custom Build",
          summary: "Individuelle Web-App oder Automations-Setup.",
          idealFor: "Ideal für spezielle Anforderungen oder Workflows.",
          details: [
            "Individuelles Konzept",
            "Integrationen & APIs",
            "Automationen",
            "Langfristige Betreuung",
          ],
        },
      ],
    },
    addons: {
      title: "Add-ons",
      items: [
        "Wartung & Updates",
        "Hosting & Domain Setup",
        "Newsletter & CRM",
        "Analytics & Tracking",
        "Performance-Audit",
      ],
    },
    process: {
      title: "So läuft’s ab",
      steps: [
        {
          title: "Kennenlernen & Ziel",
          description: "Kurzer Call, Anforderungen und grobe Timeline.",
        },
        {
          title: "Konzept & Umsetzung",
          description: "Struktur, Design und Build in schnellen Iterationen.",
        },
        {
          title: "Launch & Pflege",
          description: "Go-live, Feinschliff und optional Betreuung.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Wie schnell kannst du starten?",
          answer:
            "Je nach Auslastung. Schreib mir kurz, dann sage ich dir ehrlich einen Starttermin.",
        },
        {
          question: "Hast du feste Preise?",
          answer:
            "Die Pakete geben Orientierung, der endgültige Preis hängt vom Umfang ab.",
        },
        {
          question: "Kannst du bestehende Websites übernehmen?",
          answer:
            "Ja — gern mit kurzem Audit und klaren Verbesserungsvorschlägen.",
        },
      ],
    },
    contact: {
      title: "Lass uns starten",
      subtitle:
        "Schick mir 2–3 Sätze zu deinem Projekt, dann melde ich mich.",
      ctaPrimary: "E-Mail schreiben",
      ctaSecondary: "Zurück zum Portfolio",
    },
  },
  en: {
    nav: {
      packages: "Packages",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      title: "Packages & Services",
      subtitle: "Clear, fast websites for startups and small teams.",
      intro:
        "Pick a package as a starting point — I’ll tailor it to your project.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See portfolio",
      highlights: [
        "Clear scope",
        "Transparent communication",
        "Fast launch",
      ],
    },
    packages: {
      title: "Packages",
      subtitle: "A starting point — final scope after a short call.",
      items: [
        {
          name: "Starter Site",
          summary: "A crisp presence that explains your offer.",
          idealFor: "Great for new products, landing pages, MVPs.",
          details: [
            "1–4 pages",
            "Design + build",
            "Basic SEO & performance",
            "Contact form",
          ],
        },
        {
          name: "Growth Site",
          summary: "More depth, content, and structure for growing teams.",
          idealFor: "Great for startups with multiple offerings.",
          details: [
            "5–10 pages",
            "CMS for content",
            "Blog/insights",
            "Tracking setup",
          ],
        },
        {
          name: "Custom Build",
          summary: "Custom web app or automation setup.",
          idealFor: "Best for unique requirements or workflows.",
          details: [
            "Custom concept",
            "Integrations & APIs",
            "Automation",
            "Ongoing support",
          ],
        },
      ],
    },
    addons: {
      title: "Add-ons",
      items: [
        "Maintenance & updates",
        "Hosting & domain setup",
        "Newsletter & CRM",
        "Analytics & tracking",
        "Performance audit",
      ],
    },
    process: {
      title: "How it works",
      steps: [
        {
          title: "Discovery & goals",
          description: "Short call, requirements, and a rough timeline.",
        },
        {
          title: "Concept & build",
          description: "Structure, design, and build in quick iterations.",
        },
        {
          title: "Launch & support",
          description: "Go live, polish, and optional support.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "How fast can you start?",
          answer:
            "Depends on capacity — message me and I’ll share the next available slot.",
        },
        {
          question: "Do you have fixed prices?",
          answer: "Packages are a guideline; final price depends on scope.",
        },
        {
          question: "Can you take over existing websites?",
          answer:
            "Yes — I can run a quick audit and suggest clear improvements.",
        },
      ],
    },
    contact: {
      title: "Let’s build",
      subtitle: "Send 2–3 lines about your project and I’ll get back to you.",
      ctaPrimary: "Send an email",
      ctaSecondary: "Back to portfolio",
    },
  },
  ru: {
    nav: {
      packages: "Пакеты",
      process: "Процесс",
      faq: "FAQ",
      contact: "Контакты",
    },
    hero: {
      title: "Пакеты и услуги",
      subtitle: "Понятные и быстрые сайты для стартапов и небольших команд.",
      intro:
        "Выберите пакет как старт — адаптирую под ваш проект.",
      ctaPrimary: "Запросить проект",
      ctaSecondary: "Смотреть портфолио",
      highlights: [
        "Чёткий объём",
        "Прозрачная коммуникация",
        "Быстрый запуск",
      ],
    },
    packages: {
      title: "Пакеты",
      subtitle: "Стартовая точка — финальный объём после короткого звонка.",
      items: [
        {
          name: "Starter Site",
          summary: "Аккуратный сайт, который понятно объясняет ваше предложение.",
          idealFor: "Подходит для новых продуктов, лендингов, MVP.",
          details: [
            "1–4 страницы",
            "Дизайн + разработка",
            "Базовое SEO и скорость",
            "Форма контакта",
          ],
        },
        {
          name: "Growth Site",
          summary: "Больше контента и структуры для растущих команд.",
          idealFor: "Подходит стартапам с несколькими направлениями.",
          details: [
            "5–10 страниц",
            "CMS для контента",
            "Блог/инсайты",
            "Настройка аналитики",
          ],
        },
        {
          name: "Custom Build",
          summary: "Индивидуальное веб-приложение или автоматизация.",
          idealFor: "Лучше всего для нестандартных требований.",
          details: [
            "Индивидуальная концепция",
            "Интеграции и API",
            "Автоматизация",
            "Поддержка",
          ],
        },
      ],
    },
    addons: {
      title: "Дополнительно",
      items: [
        "Поддержка и обновления",
        "Хостинг и домен",
        "Newsletter и CRM",
        "Аналитика и трекинг",
        "Аудит производительности",
      ],
    },
    process: {
      title: "Как проходит работа",
      steps: [
        {
          title: "Знакомство и цели",
          description: "Короткий созвон, цели и ориентир по срокам.",
        },
        {
          title: "Концепт и разработка",
          description: "Структура, дизайн и реализация.",
        },
        {
          title: "Запуск и поддержка",
          description: "Публикация, полировка и опциональная поддержка.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Когда можете начать?",
          answer:
            "Зависит от загрузки — напишите, и я скажу ближайшее окно.",
        },
        {
          question: "Есть фиксированные цены?",
          answer:
            "Пакеты дают ориентир; итоговая стоимость зависит от объёма.",
        },
        {
          question: "Можете взять уже существующий сайт?",
          answer:
            "Да — проведу аудит и предложу понятные улучшения.",
        },
      ],
    },
    contact: {
      title: "Давайте начнём",
      subtitle: "Опишите проект в 2–3 предложениях — отвечу быстро.",
      ctaPrimary: "Написать на почту",
      ctaSecondary: "Назад к портфолио",
    },
  },
} as const;
