import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, SUPPORTED_LOCALES } from "@/lib/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

const NOTE: Record<string, string> = {
  en: "This legal notice (Impressum) is required by German law and is provided in German.",
  ru: "Этот юридический раздел (Impressum) обязателен по немецкому законодательству и предоставлен на немецком языке.",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return { robots: { index: false, follow: false } };
  return {
    title: "Impressum",
    description: "Impressum von Noel Janzen.",
    alternates: { canonical: `/${locale}/impressum` },
    robots: { index: false, follow: true },
  };
}

export default async function ImpressumPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const note = NOTE[locale];

  return (
    <main
      id="content"
      tabIndex={-1}
      className="min-h-screen max-w-3xl mx-auto px-6 py-16 text-slate-200"
    >
      <h1 className="font-display text-3xl text-white mb-6">Impressum</h1>

      {note && (
        <p className="mb-8 rounded-xl border border-emerald-200/20 bg-emerald-200/5 px-4 py-3 text-sm text-slate-400">
          {note}
        </p>
      )}

      <section className="space-y-4 text-sm leading-relaxed text-slate-300">
        <p>
          <strong>Angaben gemäß § 5 TMG</strong>
        </p>
        <p>
          Noel Janzen
          <br />
          Haardtring 15
          <br />
          64295 Darmstadt
          <br />
          Deutschland
        </p>

        <p>
          <strong>Kontakt:</strong>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:noel@fajanzen.de"
            className="text-emerald-200 hover:text-amber-200"
          >
            noel@fajanzen.de
          </a>
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong>
          <br />
          Noel Janzen, Haardtring 15, 64295 Darmstadt
        </p>

        <h2 className="font-display text-2xl text-white mt-8">
          Haftungsausschluss (Disclaimer)
        </h2>

        <h3 className="text-xl font-semibold mt-4 text-white">
          Haftung für Inhalte
        </h3>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme
          ich jedoch keine Gewähr.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-white">
          Haftung für Links
        </h3>
        <p>
          Diese Website enthält ggf. Links zu externen Websites Dritter, auf
          deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-white">Urheberrecht</h3>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser
          Website unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung,
          Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts
          bedarf der schriftlichen Zustimmung des jeweiligen Autors.
        </p>
      </section>
    </main>
  );
}
