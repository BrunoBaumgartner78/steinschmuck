"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "cookie-consent-v1";

type ConsentValue = "accepted" | "necessary" | null;

export function Analytics() {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const pathname = usePathname();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Consent aus localStorage lesen + auf Änderungen reagieren
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    setConsent(saved);

    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setConsent((event.newValue as ConsentValue | null) ?? null);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Wenn keine GA-ID gesetzt ist → nichts laden
  if (!gaId) return null;

  // Solange kein Consent oder nur „notwendig“ → kein Analytics
  if (consent !== "accepted") return null;

  return (
    <>
      {/* GA4 Script nur bei Consent laden */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname
            });
          `,
        }}
      />

      {/* SPA-Routenwechsel als page_view tracken */}
      <RouteChangeTracker gaId={gaId} consent={consent} pathname={pathname} />
    </>
  );
}

type RouteChangeTrackerProps = {
  gaId: string;
  consent: ConsentValue;
  pathname: string | null;
};

function RouteChangeTracker({ gaId, consent, pathname }: RouteChangeTrackerProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (consent !== "accepted") return;
    if (!gaId) return;
    if (!pathname) return;

    // gtag existiert erst nachdem das Script geladen wurde
    // also vorsichtig prüfen
    // @ts-ignore
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      gtag("event", "page_view", {
        page_path: pathname,
      });
    }
  }, [gaId, consent, pathname]);

  return null;
}
