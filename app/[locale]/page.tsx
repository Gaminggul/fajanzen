import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../components/HomePage";
import {
  BASE_URL,
  LANGUAGE_ALTERNATES,
  LANGUAGE_TAG,
  OG_LOCALE,
  SEO,
  TRANSLATIONS,
} from "@/lib/site";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = SEO[locale];
  const languageTag = LANGUAGE_TAG[locale];
  const alternateLocales = Object.values(OG_LOCALE).filter(
    (entry) => entry !== OG_LOCALE[locale],
  );
  const ogImage = `${BASE_URL}/${locale}/opengraph-image`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: LANGUAGE_ALTERNATES,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${BASE_URL}/${locale}`,
      siteName: "fajanzen",
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: alternateLocales,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    other: {
      "content-language": languageTag,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const copy = TRANSLATIONS[locale];
  const seo = SEO[locale];
  const ogImage = `${BASE_URL}/${locale}/opengraph-image`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Noel Janzen",
        url: BASE_URL,
        email: "mailto:noel@fajanzen.de",
        jobTitle: seo.jobTitle,
        sameAs: [
          "https://github.com/Gaminggul",
          "https://www.instagram.com/drivenby.noel/",
        ],
        image: ogImage,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Darmstadt",
          addressRegion: "Hesse",
          addressCountry: "DE",
        },
      },
      {
        "@type": "WebSite",
        name: "fajanzen",
        url: BASE_URL,
        inLanguage: LANGUAGE_TAG[locale],
        publisher: {
          "@type": "Person",
          name: "Noel Janzen",
        },
      },
      {
        "@type": "WebPage",
        name: seo.title,
        url: `${BASE_URL}/${locale}`,
        inLanguage: LANGUAGE_TAG[locale],
        description: seo.description,
        image: ogImage,
        isPartOf: {
          "@type": "WebSite",
          url: BASE_URL,
        },
      },
    ],
  };

  return (
    <>
      <HomePage copy={copy} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
