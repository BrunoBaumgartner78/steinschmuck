// app/components/layout/footer.tsx
import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-[#F9F5F0] text-xs text-neutral-700 dark:border-slate-800 dark:bg-[#020617] dark:text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Obere Footer-Navigation */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Kurztext */}
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-slate-50">
              Steinschmuck Baumgartner Schweiz
            </p>
            <p className="text-[11px] leading-relaxed text-neutral-600 dark:text-slate-400">
              Handgefertigter Steinschmuck aus Pakistan, importiert in die Schweiz –
              ruhig, zeitlos und nah an der Natur.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-slate-400">
              Shop
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Alle Produkte
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Ketten
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Anhänger
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Ringe
                </Link>
              </li>
            </ul>
          </div>

          {/* Informationen */}
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-slate-400">
              Informationen
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about-jewelry"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Über unseren Schmuck
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-slate-400">
              Rechtliches
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/agb"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  AGB
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/widerruf"
                  className="hover:text-[#8B4F22] dark:hover:text-amber-300"
                >
                  Widerrufsrecht
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Untere Zeile */}
        <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-4 text-[11px] text-neutral-500 dark:border-slate-800 dark:text-slate-500 sm:flex-row sm.items-center sm:justify-between">
          <p>
            © {currentYear} Steinschmuck Baumgartner Schweiz. Alle Rechte vorbehalten.
          </p>
          <p className="text-[11px]">
            Handgefertigt in Pakistan · Versand aus der Schweiz
          </p>
        </div>
      </div>
    </footer>
  );
}
