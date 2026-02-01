import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/lib/locale";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fajanzen.de";
const lastModified = new Date("2026-01-30");

const LANG_TAG: Record<string, string> = {
  de: "de-DE",
  en: "en-US",
  ru: "ru-RU",
};

function localeAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    languages[LANG_TAG[loc]] = `${baseUrl}/${loc}${path}`;
  }
  languages["x-default"] = `${baseUrl}/en${path}`;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...SUPPORTED_LOCALES.map((loc) => ({
      url: `${baseUrl}/${loc}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: localeAlternates(""),
    })),
    ...SUPPORTED_LOCALES.map((loc) => ({
      url: `${baseUrl}/${loc}/services`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: localeAlternates("/services"),
    })),
    { url: `${baseUrl}/impressum`,   lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
  ];
}
