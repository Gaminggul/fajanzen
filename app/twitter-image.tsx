import { SEO } from "@/lib/site";
import { generateOGImage, size } from "@/lib/og";

export const runtime = "edge";

export { size };

export const contentType = "image/png";

export default function Image() {
  return generateOGImage(SEO.en.tagline);
}
