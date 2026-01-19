export const LOCALE_COOKIE = "site_locale";
export const LOCALE_HEADER = "x-site-locale";
export const SUPPORTED_LOCALES = ["de", "en", "ru"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  AT: "de",
  CH: "de",
  DE: "de",
  LI: "de",
  BY: "ru",
  KZ: "ru",
  KG: "ru",
  RU: "ru",
};

export function isLocale(value?: string | null): value is Locale {
  return value === "de" || value === "en" || value === "ru";
}

export function getLocaleFromCountry(country?: string | null): Locale | null {
  if (!country) {
    return null;
  }

  const key = country.toUpperCase();
  return COUNTRY_TO_LOCALE[key] ?? null;
}

export function getLocaleFromAcceptLanguage(
  header: string | null,
): Locale | null {
  if (!header) {
    return null;
  }

  const candidates = header
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean) as string[];

  for (const candidate of candidates) {
    if (candidate.startsWith("de")) {
      return "de";
    }
    if (candidate.startsWith("ru")) {
      return "ru";
    }
    if (candidate.startsWith("en")) {
      return "en";
    }
  }

  return null;
}
