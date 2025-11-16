// app/impressum/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Impressum | Steinschmuck Baumgartner Schweiz",
  description:
    "Impressum von Steinschmuck Baumgartner Schweiz. Gesetzlich erforderliche Angaben gemäss Schweizer Recht.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Impressum
        </h1>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-prose">
          Angaben gemäss schweizerischem Recht (DSG, UWG).
        </p>
      </header>

      {/* Firma */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Verantwortliche Stelle
        </h2>

        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          <strong>Steinschmuck Baumgartner Schweiz</strong>
          <br />
          Sonvilier, Schweiz  
          <br />
          E-Mail: bruno@brainbloom.ch
          <br />
          Telefon: +41 (0) 78 243 72 27
        </p>
      </section>

      {/* Zweck */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Zweck dieser Website
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Diese Website dient dem Verkauf von handgefertigtem Steinschmuck, der
          aus einer Partner-Manufaktur in Pakistan stammt und über Italien in
          die Schweiz importiert wird.
        </p>
      </section>

      {/* Haftung */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Haftungsausschluss
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Trotz sorgfältiger Prüfung übernehmen wir keine Haftung für
          Aktualität, Richtigkeit und Vollständigkeit der Inhalte.  
          Änderungen und Irrtümer vorbehalten.
        </p>
      </section>

      {/* Externe Links */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Haftung für externe Links
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Für Inhalte externer Websites, auf die wir verlinken, übernehmen wir
          keine Verantwortung. Es gelten die Bedingungen der jeweiligen
          Drittanbieter.
        </p>
      </section>

      {/* Urheberrecht */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Urheberrecht
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Alle Inhalte (Bilder, Texte, Designs) sind urheberrechtlich geschützt.
          Eine Nutzung ausserhalb des privaten Bereichs ist ohne schriftliche
          Zustimmung nicht erlaubt.
        </p>
      </section>

      {/* Kontakt */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Kontakt
        </h2>
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Für Fragen oder Anliegen stehen wir jederzeit zur Verfügung.
        </p>

        <Link
          href="/kontakt"
          className="inline-block rounded-full bg-[#C57A3B] px-5 py-2 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] dark:hover:bg-amber-400 dark:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C57A3B]"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </main>
  );
}
