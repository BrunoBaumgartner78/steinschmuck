// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { SiteHeader } from "./components/layout/site-header";
import { Footer } from "./components/layout/footer";

export const metadata: Metadata = {
  title: "Steinschmuck Baumgartner – Feiner Steinschmuck aus Silber",
  description:
    "Feiner Steinschmuck aus Silber mit echten Natursteinen – gefertigt in einer Manufaktur in Pakistan und in die Schweiz importiert.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      {/* head kann hier leer bleiben – Next.js setzt Meta-Tags
          basierend auf dem metadata-Objekt automatisch */}
      <head />
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
        </Providers>
      </body>
    </html>
  );
}
