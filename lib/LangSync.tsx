"use client";

import { useEffect } from "react";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale } from "./locale";

function getCookie(name: string): string | undefined {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match?.split("=")[1];
}

export function LangSync() {
  useEffect(() => {
    const locale = getCookie(LOCALE_COOKIE);
    const lang = isLocale(locale) ? locale : DEFAULT_LOCALE;
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, []);

  return null;
}
