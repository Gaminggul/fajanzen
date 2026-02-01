import { SEO } from "@/lib/site";
import { isLocale } from "@/lib/locale";
import { generateOGImage, size } from "@/lib/og";

export const runtime = "edge";

export { size };

export const contentType = "image/png";

export default function Image({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "en";
  return generateOGImage(SEO[locale].tagline);
}
