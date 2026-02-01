import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesPage from "@/app/components/ServicesPage";
import {
  BASE_URL,
  LANGUAGE_ALTERNATES,
  LANGUAGE_TAG,
  OG_LOCALE,
  SERVICES,
  SERVICES_SEO,
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

const SERVICE_ALTERNATES = Object.fromEntries(
  Object.entries(LANGUAGE_ALTERNATES).map(([key, value]) => [
    key,
    `${value}/services`,
  ]),
) as Record<string, string>;

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

  const seo = SERVICES_SEO[locale];
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
      canonical: `/${locale}/services`,
      languages: SERVICE_ALTERNATES,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${BASE_URL}/${locale}/services`,
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

  const copy = SERVICES[locale];
  const footer = TRANSLATIONS[locale].footer;
  const seo = SERVICES_SEO[locale];
  const ogImage = `${BASE_URL}/${locale}/opengraph-image`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/${locale}/services/#webpage`,
        name: seo.title,
        url: `${BASE_URL}/${locale}/services`,
        inLanguage: LANGUAGE_TAG[locale],
        description: seo.description,
        image: ogImage,
        isPartOf: { "@id": `${BASE_URL}/#website` },
      },
      {
        "@type": "Service",
        "@id": `${BASE_URL}/${locale}/services/#service`,
        name: seo.title,
        description: seo.description,
        provider: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          name: "Noel Janzen",
        },
        areaServed: "DE",
        serviceType: "Web Development",
      },
    ],
  };

  return (
    <>
      <ServicesPage copy={copy} footer={footer} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
