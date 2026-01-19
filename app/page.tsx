import { cookies, headers } from "next/headers";
import HomePage from "./components/HomePage";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  isLocale,
  type Locale,
} from "../lib/locale";

const translations = {
  de: {
    nav: {
      about: "Über mich",
      certificates: "Zertifikate",
      skills: "Skills",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hi!",
      intro: "Mein Name ist",
      name: "Noel Janzen",
    },
    about: {
      title: "Über mich",
      intro:
        "Hey, mein Name ist Noel Janzen. Zurzeit mache ich mein Duales Studium im Bereich Informatik.",
      birthdayLabel: "Geburtstag:",
      birthdayValue: "19.04.2006",
      locationLabel: "Standort:",
      locationValue: "Hamm, Nordrhein-Westfalen, Deutschland",
      hobbiesLabel: "Hobbys:",
      hobbies: [
        "Gaming",
        "Tauchen",
        "Bouldern",
        "Angeln",
        "Programmieren",
      ],
    },
    certificates: {
      title: "Zertifikate",
      items: [
        "Grundlagen der Betriebswirtschaftslehre - Institut für berufliche Hochschulbildung",
        "Cambridge Assessment",
        "Schülerakademie: Klimaschutz schafft Zukunft - gestalte deine und unsere Zukunft jetzt! - Natur- und Umweltschutz-Akademie des Landes NRW",
      ],
      notePrefix: "Falls Sie die Zertifikate als PDF sehen möchten,",
      noteLink: "kontaktieren Sie mich",
      noteSuffix: ".",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projekte",
      items: [
        {
          title: "Portfolio Website",
          description:
            "Meine persönliche Portfolio-Website, die meine Fähigkeiten und Projekte zeigt.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/njwebsite" },
            { label: "Website öffnen", url: "https://fajanzen.de" },
          ],
        },
        {
          title: "Angsthase",
          description:
            "Eine Party-App mit den Fragen aus dem Kartenspiel \"Angsthase\".",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          description: "Ein webbasiertes Pokerspiel namens PokerCats.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/PokerOnline" },
          ],
        },
        {
          title: "KnowUnity-PDF-Downloader",
          description:
            "Eine Chrome-Erweiterung zum Herunterladen von PDFs von KnowUnity.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/KnowUnity-PDF-Downloader",
            },
          ],
        },
        {
          title: "Minecraft Server Management Scripts",
          description:
            "Skripte zur Verwaltung und Automatisierung von Minecraft-Servern.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/minecraft-server-management-scripts",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
    },
    footer: {
      copyright: "© 2025 Noel Janzen",
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
      intro: "My name is",
      name: "Noel Janzen",
    },
    about: {
      title: "About",
      intro:
        "Hi, my name is Noel Janzen. I'm currently doing a dual study program in computer science.",
      birthdayLabel: "Birthday:",
      birthdayValue: "19.04.2006",
      locationLabel: "Location:",
      locationValue: "Hamm, North Rhine-Westphalia, Germany",
      hobbiesLabel: "Hobbies:",
      hobbies: [
        "Gaming",
        "Diving",
        "Bouldering",
        "Fishing",
        "Programming",
      ],
    },
    certificates: {
      title: "Certificates",
      items: [
        "Fundamentals of Business Administration - Institute for Vocational Higher Education",
        "Cambridge Assessment",
        "Student Academy: Climate protection creates a future - shape your future and ours now! - Nature and Environmental Protection Academy of the State of NRW",
      ],
      notePrefix: "If you'd like to see the certificates as PDFs,",
      noteLink: "contact me",
      noteSuffix: ".",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Portfolio Website",
          description:
            "My personal portfolio website showcasing my skills and projects.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/njwebsite" },
            { label: "Open website", url: "https://fajanzen.de" },
          ],
        },
        {
          title: "Angsthase",
          description:
            "A party app with questions from the card game \"Angsthase\".",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          description: "A web-based poker game called PokerCats.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/PokerOnline" },
          ],
        },
        {
          title: "KnowUnity-PDF-Downloader",
          description:
            "A Chrome extension for downloading PDFs from KnowUnity.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/KnowUnity-PDF-Downloader",
            },
          ],
        },
        {
          title: "Minecraft Server Management Scripts",
          description: "Scripts to manage and automate Minecraft servers.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/minecraft-server-management-scripts",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
    },
    footer: {
      copyright: "© 2025 Noel Janzen",
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
      intro: "Меня зовут",
      name: "Noel Janzen",
    },
    about: {
      title: "Обо мне",
      intro:
        "Привет, меня зовут Noel Janzen. Сейчас я учусь по дуальной программе в области информатики.",
      birthdayLabel: "Дата рождения:",
      birthdayValue: "19.04.2006",
      locationLabel: "Местоположение:",
      locationValue: "Хамм, Северный Рейн-Вестфалия, Германия",
      hobbiesLabel: "Хобби:",
      hobbies: [
        "Игры",
        "Дайвинг",
        "Боулдеринг",
        "Рыбалка",
        "Программирование",
      ],
    },
    certificates: {
      title: "Сертификаты",
      items: [
        "Основы управления бизнесом - Институт профессионального высшего образования",
        "Cambridge Assessment",
        "Студенческая академия: защита климата создает будущее - создавай свое и наше будущее сейчас! - Академия охраны природы и окружающей среды земли Северный Рейн-Вестфалия",
      ],
      notePrefix: "Если хотите увидеть сертификаты в формате PDF,",
      noteLink: "свяжитесь со мной",
      noteSuffix: ".",
    },
    skills: {
      title: "Навыки",
    },
    projects: {
      title: "Проекты",
      items: [
        {
          title: "Портфолио",
          description:
            "Мой личный сайт-портфолио, где я показываю свои навыки и проекты.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/njwebsite" },
            { label: "Открыть сайт", url: "https://fajanzen.de" },
          ],
        },
        {
          title: "Angsthase",
          description:
            "Приложение для вечеринок с вопросами из карточной игры \"Angsthase\".",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/angsthase" },
          ],
        },
        {
          title: "PokerCats",
          description: "Веб-игра в покер под названием PokerCats.",
          links: [
            { label: "GitHub", url: "https://github.com/Gaminggul/PokerOnline" },
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
        {
          title: "Minecraft Server Management Scripts",
          description:
            "Скрипты для управления и автоматизации Minecraft-серверов.",
          links: [
            {
              label: "GitHub",
              url: "https://github.com/Gaminggul/minecraft-server-management-scripts",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Контакты",
    },
    footer: {
      copyright: "© 2025 Noel Janzen",
      imprint: "Импрессум",
      privacy: "Политика конфиденциальности",
    },
  },
} as const;

async function resolveLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const headerLocale = headerStore.get(LOCALE_HEADER);
  return isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
}

export default async function Page() {
  const locale = await resolveLocale();
  const copy = translations[locale];
  return <HomePage copy={copy} locale={locale} />;
}
