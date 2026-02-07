import { redirect } from "next/navigation";
import { isLocale, SUPPORTED_LOCALES } from "@/lib/locale";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function OfferPage({ params }: PageProps) {
  const { locale } = await params;
  const target = isLocale(locale) ? `/${locale}/services` : "/en/services";
  redirect(target);
}
