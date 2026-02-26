import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { SEO } from "@/lib/site";
import { LangSync } from "@/lib/LangSync";
import { isLocale, DEFAULT_LOCALE, LOCALE_HEADER } from "@/lib/locale";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
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
  authors: [{ name: "Noel Janzen", url: "https://fajanzen.de" }],
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
  const headerStore = await headers();
  const localeHeader = headerStore.get(LOCALE_HEADER);
  const lang = isLocale(localeHeader) ? localeHeader : DEFAULT_LOCALE;

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} overflow-x-hidden bg-[#050806] text-slate-100`}
      >
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="w-full">{children}</div>
        <Analytics />
        <SpeedInsights />
        <LangSync />
      </body>
    </html>
  );
}
