// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { SiteHeader } from "./components/layout/site-header";
import { Footer } from "./components/layout/footer";

export const metadata: Metadata = {
  title: "Steinschmuck",
  description: "Feiner Steinschmuck aus Silber",
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
        </Providers>
      </body>
    </html>
  );
}
