"use client";

import { useEffect } from "react";
import { DEFAULT_LOCALE, LOCALE_COOKIE, SUPPORTED_LOCALES, isLocale } from "./locale";

function getCookie(name: string): string | undefined {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match?.split("=")[1];
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`;
}

function detectLocale(): string {
  for (const lang of navigator.languages ?? [navigator.language]) {
    const prefix = lang.split("-")[0].toLowerCase();
    if ((SUPPORTED_LOCALES as readonly string[]).includes(prefix)) {
      return prefix;
    }
  }
  return DEFAULT_LOCALE;
}

export function LangSync() {
  useEffect(() => {
    let locale = getCookie(LOCALE_COOKIE);

    if (!isLocale(locale)) {
      locale = detectLocale();
      setCookie(LOCALE_COOKIE, locale);
    }

    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, []);

  return null;
}
