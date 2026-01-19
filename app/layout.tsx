import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Gabarito } from "next/font/google";
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  isLocale,
} from "../lib/locale";

const inter = Gabarito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Noel Janzen",
  description: "fajanzen - Website / Portfolio von Noel Janzen",
  metadataBase: new URL('https://fajanzen.de'),
  alternates: { canonical: 'https://fajanzen.de/' },
} satisfies Metadata;

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
      <body className={`font-sans ${inter.variable} overflow-x-hidden`}>
        <main className="w-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
