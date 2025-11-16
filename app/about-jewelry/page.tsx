// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Über unseren Schmuck | Steinschmuck",
  description:
    "Erfahre mehr über unsere Steinschmuck-Kollektion: Manufaktur in Pakistan, Import über Italien in die Schweiz, echte Natursteine und ruhige, zeitlose Designs.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 py-10">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B4F22] dark:text-amber-300">
            Über unseren Schmuck
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Ruhiger Steinschmuck
            <br />
            aus Pakistan, über Italien in die Schweiz.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            Unsere Stücke entstehen in einer kleinen Manufaktur in Pakistan.
            Dort werden Steine sorgfältig ausgewählt, geschliffen und in ruhige,
            klare Formen gebracht. Der Schmuck wird anschließend über Italien in
            die Schweiz importiert, geprüft und von hier aus versendet.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            Wir möchten Schmuck anbieten, der nicht laut schreit, sondern leise
            begleitet – im Alltag, bei besonderen Anlässen und als persönliches
            Ritual.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-[#C57A3B] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
            >
              Zur Kollektion
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-neutral-700 underline-offset-4 hover:text-[#8B4F22] hover:underline dark:text-slate-200 dark:hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
            >
              Zur Startseite
            </Link>
          </div>
        </div>

        <div className="relative h-52 overflow-hidden rounded-[2rem] bg-neutral-200 dark:bg-neutral-900">
          <Image
            src="/goldschmied.webp"
            alt="Goldschmied bei der Arbeit an einem Schmuckstück"
            fill
            priority={false}
            loading="lazy"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Herkunft & Weg */}
      <section className="grid gap-8 rounded-3xl bg-[#F7F4EF] p-6 text-sm text-neutral-900 ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-800 md:grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
            1 · Manufaktur in Pakistan 🇵🇰
          </h2>
          <p className="leading-relaxed text-neutral-800 dark:text-slate-200">
            In der Manufaktur in Pakistan werden Steine nach Farbe, Struktur und
            Qualität ausgewählt. Jedes Stück wird in Handarbeit gefasst, poliert
            und kontrolliert, bevor es weiterreisen darf.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
            2 · Logistik über Italien 🇮🇹
          </h2>
          <p className="leading-relaxed text-neutral-800 dark:text-slate-200">
            Über einen Partner in Italien gelangt der Schmuck in die EU. Dort
            werden die Sendungen gebündelt, zolltechnisch verarbeitet und für
            den Weitertransport vorbereitet.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
            3 · Versand aus der Schweiz 🇨🇭
          </h2>
          <p className="leading-relaxed text-neutral-800 dark:text-slate-200">
            In der Schweiz erfolgt die finale Prüfung, Lagerung und der Versand.
            So können wir kurze Wege zum Kunden und verlässliche Lieferzeiten
            sicherstellen.
          </p>
        </div>
      </section>

      {/* Materialien & Farbwelten */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Materialien & Farbwelten
          </h2>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            Wir kombinieren Metalle wie 925er-Silber oder Gold mit ausgewählten
            Steinen. Die Farbwelten reichen von warmem Bernstein über ruhige
            Blautöne und Grüntöne bis hin zu Perlmutt, Rot und Türkis.
          </p>
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            Jeder Stein bringt seine eigene Stimmung mit – mal erdig, mal klar,
            mal lebendig. Ziel ist ein ruhiger Gesamteindruck, der trotzdem
            Individualität zulässt.
          </p>

          <ul className="mt-2 space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
            <li>• Bernstein – warm, erdig, beruhigend</li>
            <li>• Blau – klar, ruhig, elegant</li>
            <li>• Grün – natürlich, harmonisch</li>
            <li>• Perlmutt – hell, zurückhaltend</li>
            <li>• Rot – kraftvoll, intensiv</li>
            <li>• Türkis – lebendig, frisch</li>
          </ul>
        </div>

        <div className="grid gap-3 text-xs sm:grid-cols-2">
          <div className="rounded-2xl bg-[#F5E9DC] p-3 text-neutral-900 ring-1 ring-[#E2C9A5]/60 dark:bg-[#451A03] dark:text-amber-50 dark:ring-amber-700/70">
            <p className="font-semibold">Silber</p>
            <p className="mt-1">
              Feines 925er-Sterlingsilber, poliert und für den Alltag geeignet.
            </p>
          </div>
          <div className="rounded-2xl bg-[#FFF7E6] p-3 text-neutral-900 ring-1 ring-[#FBBF77]/60 dark:bg-[#3B1F04] dark:text-amber-100 dark:ring-amber-700/70">
            <p className="font-semibold">Gold</p>
            <p className="mt-1">
              Je nach Stück in unterschiedlichen Karatstufen und Farbtönen.
            </p>
          </div>
          <div className="rounded-2xl bg-[#E6F4EC] p-3 text-neutral-900 ring-1 ring-[#6EE7B7]/60 dark:bg-[#022C22] dark:text-emerald-100 dark:ring-emerald-700/70">
            <p className="font-semibold">Natursteine</p>
            <p className="mt-1">
              Keine identischen Kopien – Maserung, Einschlüsse und Farbspiel
              machen jedes Stück einzigartig.
            </p>
          </div>
          <div className="rounded-2xl bg-[#F4F4F0] p-3 text-neutral-900 ring-1 ring-[#E0DED6]/60 dark:bg-[#111827] dark:text-slate-100 dark:ring-slate-600/70">
            <p className="font-semibold">Ruhige Designs</p>
            <p className="mt-1">
              Klare Formen ohne lautes Branding – der Fokus liegt auf Material
              und Träger:in.
            </p>
          </div>
        </div>
      </section>

      {/* Pflegehinweise */}
      <section className="space-y-4 rounded-3xl bg-[#F7F4EF] p-6 text-sm text-neutral-900 ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-800">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Pflege & Umgang
        </h2>
        <p className="leading-relaxed text-neutral-800 dark:text-slate-200">
          Damit dein Schmuck lange schön bleibt, empfehlen wir einen achtsamen
          Umgang. Auch robuste Materialien reagieren auf Zeit, Licht, Feuchtigkeit
          und Kosmetikprodukte.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-800 dark:text-slate-200">
          <li>Schmuck vor dem Duschen, Baden oder Sport ablegen.</li>
          <li>
            Kontakt mit Parfum, Haarspray und aggressiven Reinigern möglichst
            vermeiden.
          </li>
          <li>
            Stücke trocken und getrennt voneinander aufbewahren, z. B. im mitgelieferten
            Beutel oder einer Schmuckschachtel.
          </li>
          <li>
            Silber bei Bedarf mit einem weichen Poliertuch vorsichtig reinigen – nicht
            mit scharfen Haushaltsmitteln.
          </li>
        </ul>
      </section>

      {/* Abschlusssatz */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Schmuck als Begleiter
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Für uns ist Schmuck mehr als Dekoration. Er kann ein stiller Begleiter
          sein – etwas, das du morgens bewusst anlegst und abends wieder abnimmst.
          Ein kleiner Moment für dich, ein Stück Ruhe im Alltag.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full bg-[#C57A3B] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
        >
          Kollektion entdecken
        </Link>
      </section>
    </main>
  );
}
