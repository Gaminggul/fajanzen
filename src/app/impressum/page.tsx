export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="space-y-4">
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p>
          Noel Janzen<br />
          Haardtring 15<br />
          64295 Darmstadt<br />
          Deutschland
        </p>

        <p>
          <strong>Kontakt:</strong><br />
          E-Mail: <a href="mailto:noel@fajanzen.de" className="text-blue-600 hover:underline">
            noel@fajanzen.de
          </a>
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
          Noel Janzen, Haardtring 15, 64295 Darmstadt
        </p>

        <h2 className="text-2xl font-semibold mt-8">Haftungsausschluss (Disclaimer)</h2>

        <h3 className="text-xl font-semibold mt-4">Haftung für Inhalte</h3>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte übernehme ich jedoch keine Gewähr.
        </p>

        <h3 className="text-xl font-semibold mt-4">Haftung für Links</h3>
        <p>
          Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </p>

        <h3 className="text-xl font-semibold mt-4">Urheberrecht</h3>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
          Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung
          des jeweiligen Autors.
        </p>
      </section>
    </main>
  );
}
