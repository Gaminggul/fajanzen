import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  isLocale,
  type Locale,
} from "../lib/locale";

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
  redirect(`/${locale}`);
}
