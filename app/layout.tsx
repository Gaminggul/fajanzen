import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import { SEO } from "@/lib/site";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  isLocale,
} from "../lib/locale";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const DEFAULT_SEO = SEO.en;

export const metadata: Metadata = {
  metadataBase: new URL("https://fajanzen.de"),
  title: {
    default: DEFAULT_SEO.title,
    template: "%s - Noel Janzen",
  },
  description: DEFAULT_SEO.description,
  applicationName: "fajanzen",
  creator: "Noel Janzen",
  publisher: "Noel Janzen",
  category: "Technology",
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "fajanzen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#050806",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const headerLocale = headerStore.get(LOCALE_HEADER);
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : isLocale(headerLocale)
    ? headerLocale
    : DEFAULT_LOCALE;

  return (
    <html lang={locale}>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} overflow-x-hidden bg-[#050806] text-slate-100`}
      >
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="w-full">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
