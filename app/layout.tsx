// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { SiteHeader } from "./components/layout/site-header";
import { Footer } from "./components/layout/footer";
import { CookieBanner } from "./components/layout/cookie-bannerr";
import { Analytics } from "./components/layout/analythics";

export const metadata: Metadata = {
  metadataBase: new URL("https://beryll.ch"),
  title: {
    default: "Steinschmuck Baumgartner Schweiz – Handgefertigter Silberschmuck",
    template: "%s | Steinschmuck Baumgartner Schweiz",
  },
  description:
    "Handgefertigter Steinschmuck aus 925 Silber und echten Natursteinen – gefertigt in Pakistan, importiert in die Schweiz. Ketten, Anhänger und Ringe in kleinen Stückzahlen.",
  keywords: [
    "Steinschmuck",
    "Silberschmuck",
    "925 Silber",
    "Natursteine",
    "Bernstein",
    "Ketten",
    "Anhänger",
    "Ringe",
    "Handgemachter Schmuck",
    "Schweiz",
  ],
  robots: {
    index: false,       // 👉 Ab jetzt darf Google indexieren
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://beryll.ch",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://beryll.ch",
    siteName: "Steinschmuck Baumgartner Schweiz",
    title: "Steinschmuck Baumgartner Schweiz – Handgefertigter Silberschmuck",
    description:
      "Zeitloser Steinschmuck aus 925 Silber mit Natursteinen – gefertigt in Pakistan, importiert in die Schweiz.",
    images: [
      {
        url: "/og-default.jpg", // Lege dieses Bild in /public ab
        width: 1200,
        height: 630,
        alt: "Eleganter Silberschmuck mit Natursteinen – Steinschmuck Baumgartner Schweiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steinschmuck Baumgartner Schweiz – Handgefertigter Silberschmuck",
    description:
      "Handgefertigter Steinschmuck aus Pakistan, importiert in die Schweiz. Ketten, Anhänger und Ringe mit Natursteinen.",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className="
          bg-[#F7F4EF] text-[#111827] antialiased
          dark:bg-[#050609] dark:text-neutral-100
        "
      >
        <Providers>
          <SiteHeader />
          {children}
          <Footer />
          <CookieBanner />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
