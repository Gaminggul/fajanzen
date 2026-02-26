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
  if (countryLocale) return countryLocale;

  const acceptLocale = getLocaleFromAcceptLanguage(
    request.headers.get("accept-language"),
  );
  if (acceptLocale) return acceptLocale;

  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;
  const pathLocale = pathname.split("/")[1];
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  let locale: Locale;
  let shouldSetCookie = false;

  if (isLocale(pathLocale)) {
    locale = pathLocale;
    shouldSetCookie = cookieLocale !== locale;
  } else if (isLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    locale = detectLocale(request);
    shouldSetCookie = true;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  if (host.startsWith("test.")) {
    const res = NextResponse.next({ request: { headers: requestHeaders } });
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    if (shouldSetCookie) {
      res.cookies.set(LOCALE_COOKIE, locale, {
        path: "/",
        maxAge: LOCALE_MAX_AGE,
        sameSite: "lax",
      });
    }
    return res;
  }

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  if (shouldSetCookie) {
    res.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: LOCALE_MAX_AGE,
      sameSite: "lax",
    });
  }
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|webmanifest)$).*)",
  ],
};
