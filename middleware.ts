import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  getLocaleFromAcceptLanguage,
  getLocaleFromCountry,
  isLocale,
  type Locale,
} from "./lib/locale";

const LOCALE_MAX_AGE = 60 * 60 * 24 * 365;

function detectLocale(request: NextRequest): Locale {
  const geo = (request as NextRequest & { geo?: { country?: string | null } })
    .geo;
  const country = geo?.country ?? request.headers.get("x-vercel-ip-country");
  const countryLocale = getLocaleFromCountry(country);
  if (countryLocale) {
    return countryLocale;
  }

  const acceptLocale = getLocaleFromAcceptLanguage(
    request.headers.get("accept-language"),
  );
  if (acceptLocale) {
    return acceptLocale;
  }

  return DEFAULT_LOCALE;
}

function withLocaleHeader(
  request: NextRequest,
  locale: Locale,
): Headers {
  const headers = new Headers(request.headers);
  headers.set(LOCALE_HEADER, locale);
  return headers;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  let locale: Locale;
  let shouldSetCookie = false;
  if (isLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    locale = detectLocale(request);
    shouldSetCookie = true;
  }

  if (host.startsWith("test.")) {
    const res = NextResponse.next({
      request: { headers: withLocaleHeader(request, locale) },
    });
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    if (shouldSetCookie) {
      res.cookies.set(LOCALE_COOKIE, locale, {
        path: "/",
        maxAge: LOCALE_MAX_AGE,
      });
    }
    return res;
  }

  if (host === "www.fajanzen.de") {
    const url = request.nextUrl;
    url.host = "fajanzen.de";
    const res = NextResponse.redirect(url, 301);
    if (shouldSetCookie) {
      res.cookies.set(LOCALE_COOKIE, locale, {
        path: "/",
        maxAge: LOCALE_MAX_AGE,
      });
    }
    return res;
  }

  const res = NextResponse.next({
    request: { headers: withLocaleHeader(request, locale) },
  });
  if (shouldSetCookie) {
    res.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: LOCALE_MAX_AGE,
    });
  }
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
