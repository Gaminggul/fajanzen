import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Gabarito } from "next/font/google";
import type { Metadata } from "next";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`font-sans ${inter.variable} overflow-x-hidden`}>
        <main className="w-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
