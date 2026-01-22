import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Noel Janzen",
    short_name: "fajanzen",
    description:
      "Portfolio of Noel Janzen showcasing web apps, automation, and modern development.",
    start_url: "/",
    scope: "/",
    lang: "en",
    display: "browser",
    background_color: "#050806",
    theme_color: "#050806",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
