// app/checkout/success/page.tsx

import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col justify-center px-4 py-12">
      <div className="rounded-3xl bg-[#F7F4EF] p-8 text-sm text-neutral-800 shadow-md ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-800">
        {/* Icon / Badge */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#C57A3B] to-[#FBBF77] text-white shadow-md shadow-black/40">
            <span className="text-lg" aria-hidden="true">
              ✓
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-slate-400">
            Bestellung eingegangen
          </p>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Vielen Dank für deine Bestellung.
        </h1>

        <p className="mt-3 leading-relaxed text-neutral-700 dark:text-slate-200">
          Deine Bestellung wurde erfolgreich übermittelt. Sobald die Zahlung
          abgeschlossen und der Checkout vollständig angebunden ist, erhältst du
          eine Bestätigung per E-Mail mit allen Details zur Lieferung.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-slate-300">
          Der Schmuck wird aus unserer Partner-Manufaktur in Pakistan über
          Italien in die Schweiz importiert und von hier aus sorgfältig
          verpackt und versendet.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-[#C57A3B] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#C57A3B]/40 transition hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FBBF77] focus-visible:ring-offset-[#F7F4EF] dark:focus-visible:ring-offset-[#020617]"
          >
            Weiter im Shop stöbern
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-transparent px-6 py-2 text-xs font-medium text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B] focus-visible:ring-offset-[#F7F4EF] dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-900/70 dark:focus-visible:ring-offset-[#020617]"
          >
            Zur Startseite
          </Link>
        </div>

        <p className="mt-6 text-[11px] text-neutral-500 dark:text-slate-400">
          Hinweis: Aktuell läuft der Checkout noch im Testmodus. Die endgültige
          Zahlungsabwicklung über Stripe wird in einem nächsten Schritt
          ergänzt.
        </p>
      </div>
    </main>
  );
}
