import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Noel Janzen.",
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="min-h-screen max-w-3xl mx-auto px-6 py-16 text-slate-200"
    >
      <h1 className="font-display text-3xl text-white mb-6">Impressum</h1>

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
