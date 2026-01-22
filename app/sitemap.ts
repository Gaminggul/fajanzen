import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fajanzen.de";
const lastModified = new Date("2026-01-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/de`,          lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/en`,          lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/ru`,          lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/impressum`,   lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
  return routes;
}
