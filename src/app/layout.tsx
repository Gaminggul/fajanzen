import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Gabarito } from "next/font/google";
import type { Metadata } from "next";
import { NonEmptyArray } from "functional-utilities";

const inter = Gabarito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Noel Janzen",
  description: "fajanzen - Website / Portfolio von Noel Janzen",
  icons: [{ rel: "icon", url: "/favicon.ico" }] satisfies NonEmptyArray<{
    rel: string;
    url: string;
  }>,
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} overflow-x-hidden`}>
        <main className="w-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
