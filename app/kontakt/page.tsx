// app/contact/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Kontakt | Steinschmuck Baumgartner Schweiz",
  description:
    "Kontakt zu Steinschmuck Baumgartner in der Schweiz. Adresse, Telefon und E-Mail für Fragen zu Schmuck, Bestellung und Herkunft.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 py-10">
      {/* Hero / Einleitung */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B4F22] dark:text-amber-300">
            Kontakt
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Kontakt zu
            <br />
            Steinschmuck Baumgartner.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            Wenn du Fragen zu einem Schmuckstück, zu Materialien, zur Herkunft
            oder zu einer Bestellung hast, kannst du dich jederzeit melden.
            Rückfragen sind ausdrücklich willkommen – sie gehören zu einer
            transparenten Arbeitsweise dazu.
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            Am besten erreichst du uns per E-Mail. Telefonisch sind wir nicht
            immer sofort erreichbar, rufen aber gerne zurück.
          </p>
        </div>

        {/* Bild: Goldschmied */}
        <div className="relative h-52 overflow-hidden rounded-[2rem] bg-neutral-200 dark:bg-neutral-900">
          <Image
            src="/goldschmied.webp"
            alt="Goldschmied bei der Arbeit an einem Schmuckstück"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Kontaktdaten-Block */}
      <section className="grid gap-8 rounded-3xl bg-[#F7F4EF] p-6 text-sm text-neutral-900 ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-800 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        {/* Adresse & Kontakt */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Anschrift & Erreichbarkeit
          </h2>

          <address className="not-italic space-y-2 text-sm text-neutral-800 dark:text-slate-200">
            <p className="font-semibold">Steinschmuck Baumgartner</p>
            <p>Le pré-aux-Boufes 222</p>
            <p>2615 Sonvilier</p>
            <p>Schweiz</p>
          </address>

          <div className="space-y-2 text-sm text-neutral-800 dark:text-slate-200">
            <p>
              <span className="font-semibold">Telefon:</span>{" "}
              <a
                href="tel:+410782437227"
                className="underline underline-offset-2 hover:text-[#8B4F22] dark:hover:text-amber-300"
              >
                +41 (0)78 243 72 27
              </a>
            </p>
            <p>
              <span className="font-semibold">E-Mail:</span>{" "}
              <a
                href="mailto:bruno@brainbloom.ch"
                className="underline underline-offset-2 hover:text-[#8B4F22] dark:hover:text-amber-300"
              >
                bruno@brainbloom.ch
              </a>
            </p>
          </div>

          <p className="text-xs text-neutral-600 dark:text-slate-400">
            Du kannst uns gerne eine E-Mail mit deinem Anliegen schreiben.
            Wenn du eine Bestellnummer hast, erwähne sie bitte in der Nachricht.
          </p>
        </div>

        {/* Kleine Info-Karten */}
        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-4 text-neutral-900 shadow-sm ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-700">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Themen
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-slate-200">
              • Fragen zu Steinen, Materialien & Pflege
              <br />
              • Rückfragen zu Bestellungen
              <br />
              • Hinweise zu Passform oder Tragegefühl
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 text-neutral-900 shadow-sm ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-700">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Antwortzeiten
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-slate-200">
              In der Regel erfolgt eine Antwort innerhalb weniger Werktage. Wenn
              es einmal länger dauert, liegt es nicht daran, dass deine Anfrage
              unwichtig ist.
            </p>
          </div>
        </div>
      </section>

      {/* Abschluss / Rückweg in den Shop */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Zurück zum Shop
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Wenn du lieber direkt durch die Kollektion stöbern möchtest, kannst
          du jederzeit in den Shop zurückkehren. Vielleicht entsteht deine
          Frage auch erst beim Anschauen eines bestimmten Stücks.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-full bg-[#C57A3B] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
          >
            Zum Shop
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-neutral-700 underline-offset-4 hover:text-[#8B4F22] hover:underline dark:text-slate-200 dark:hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
          >
            Zur Startseite
          </Link>
        </div>
      </section>
    </main>
  );
}
