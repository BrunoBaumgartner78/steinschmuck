// app/components/layout/cookie-banner.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent-v1";

type ConsentValue = "accepted" | "necessary";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Nur im Browser prüfen
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setIsVisible(true);
    }
  }, []);

  function saveConsent(value: ConsentValue) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      className="
        fixed inset-x-0 bottom-0 z-50
        flex justify-center px-4 pb-4 pt-2
      "
      aria-label="Cookie-Hinweis"
    >
      <div
        className="
          max-w-4xl w-full
          rounded-3xl
          bg-[#F7F4EF]/95
          backdrop-blur-md
          px-5 py-4
          shadow-[0_18px_40px_rgba(0,0,0,0.25)]
          ring-1 ring-black/5
          dark:bg-[#020617]/95
          dark:ring-slate-800
          text-sm text-neutral-800
          dark:text-slate-100
        "
        role="dialog"
        aria-modal="false"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-left">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Wir verwenden Cookies
            </p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-700 dark:text-slate-300">
              Wir nutzen Cookies, die für den Betrieb des Shops technisch
              notwendig sind. Weitere Informationen findest du in unserer{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 hover:text-[#8B4F22] dark:hover:text-amber-300"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-end">
            <button
              type="button"
              onClick={() => saveConsent("necessary")}
              className="
                inline-flex items-center justify-center
                rounded-full border border-neutral-300
                px-4 py-1.5 text-xs font-medium
                text-neutral-700
                hover:border-neutral-500 hover:text-neutral-900
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]
                focus-visible:ring-offset-[#F7F4EF]
                dark:border-slate-600 dark:text-slate-100
                dark:hover:border-slate-300 dark:hover:text-white
                dark:focus-visible:ring-offset-[#020617]
              "
            >
              Nur notwendige Cookies
            </button>

            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="
                inline-flex items-center justify-center
                rounded-full bg-[#C57A3B]
                px-4 py-1.5 text-xs font-medium text-white
                shadow-md shadow-[#C57A3B]/40
                hover:bg-[#8B4F22]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]
                focus-visible:ring-offset-[#F7F4EF]
                dark:focus-visible:ring-offset-[#020617]
              "
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
