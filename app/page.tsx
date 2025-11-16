// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../sanity/lib/client";
import { latestProductsQuery } from "../sanity/lib/queries";
import { ProductCarousel } from "@/app/components/home/product-carousel";

type ColorTheme =
  | "amber"
  | "blue"
  | "green"
  | "pearl"
  | "red"
  | "turquoise"
  | "diamond"
  | "black"
  | "violet";

type Product = {
  _id: string;
  title: string;
  slug: string;
  price: number;
  images?: string[];
  stone?: string;
  metal?: string;
  metalType?: "gold" | "silver" | null;
  colorTheme?: string | null; // Rohwert aus Sanity
};

export const revalidate = 60;

async function getLatestProducts(): Promise<Product[]> {
  const result = await sanityClient.fetch(latestProductsQuery);
  if (!Array.isArray(result)) return [];
  return result;
}

// Sanity-Value → internes ColorTheme
function normalizeTheme(raw?: string | null): ColorTheme | undefined {
  if (!raw) return undefined;
  const t = raw.toString().toLowerCase().trim();

  if (t === "amber" || t === "bernstein") return "amber";
  if (t === "blue" || t === "blau") return "blue";
  if (t === "green" || t === "grün" || t === "gruen") return "green";
  if (t === "pearl" || t === "perlmutt") return "pearl";
  if (t === "red" || t === "rot") return "red";
  if (t === "turquoise" || t === "türkis" || t === "tuerkis") return "turquoise";
  if (t === "diamond" || t === "diamant") return "diamond";
  if (t === "black" || t === "schwarz") return "black";
  if (t === "violet" || t === "violett") return "violet";
  return undefined;
}

// Farbakzent für Hero
function getHeroTheme(theme?: ColorTheme) {
  switch (theme) {
    case "blue":
      return {
        accentText: "text-[#123976] dark:text-sky-300",
        chipBg: "bg-[#D4E3FF] dark:bg-slate-900",
      };
    case "green":
      return {
        accentText: "text-[#145C32] dark:text-emerald-300",
        chipBg: "bg-[#CBEAD4] dark:bg-emerald-950",
      };
    case "pearl":
      return {
        accentText: "text-[#5B5546] dark:text-neutral-200",
        chipBg: "bg-[#E9E5DC] dark:bg-slate-900",
      };
    case "red":
      return {
        accentText: "text-[#991B1B] dark:text-rose-300",
        chipBg: "bg-[#FECACA] dark:bg-rose-950",
      };
    case "turquoise":
      return {
        accentText: "text-[#0F766E] dark:text-teal-300",
        chipBg: "bg-[#A5F3FC] dark:bg-teal-950",
      };
    case "diamond":
      return {
        accentText: "text-[#4F46E5] dark:text-indigo-300",
        chipBg: "bg-[#E0E7FF] dark:bg-slate-900",
      };
    case "black":
      return {
        accentText: "text-neutral-900 dark:text-neutral-100",
        chipBg: "bg-neutral-200 dark:bg-black",
      };
    case "violet":
      return {
        accentText: "text-[#6D28D9] dark:text-violet-300",
        chipBg: "bg-[#EDE9FE] dark:bg-violet-950",
      };
    case "amber":
    default:
      return {
        accentText: "text-[#8B4F22] dark:text-amber-300",
        chipBg: "bg-[#F0E6D9] dark:bg-slate-900",
      };
  }
}

export default async function Home() {
  const products = await getLatestProducts();

  if (!products || products.length === 0) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-4 py-10">
        <h1 className="mb-4 text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
          Steinschmuck – Startseite (Fallback)
        </h1>
        <p className="max-w-xl text-sm text-neutral-700 dark:text-neutral-200">
          Lege zuerst Produkte im Sanity Studio unter <b>Produkt</b> an, dann
          zeigt die Startseite automatisch das letzte Produkt und weitere Stücke.
        </p>
        <Link
          href="/products"
          className="mt-6 rounded-full bg-[#C57A3B] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
        >
          Zum Shop
        </Link>
      </main>
    );
  }

  const heroProduct = products[0];
  const carouselProducts = products.slice(1, 7);
  const heroImage = heroProduct.images?.[0];
  const heroTheme = getHeroTheme(normalizeTheme(heroProduct.colorTheme));

  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 py-10">
      {/* 1) Hero: Bild + Text */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        {/* Bild links */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#F0E6D9] shadow-lg shadow-[#C57A3B]/15 dark:bg-neutral-900 dark:shadow-black/40">
          {heroImage && (
            <Image
              src={heroImage}
              alt={heroProduct.title}
              fill
              loading="eager" // LCP-Bild
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
          <div className="absolute left-4 top-4 rounded-full bg-[#F7F4EF]/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#8B4F22] dark:bg-neutral-900/90 dark:text-amber-200">
            Neu im Shop
          </div>
        </div>

        {/* Text rechts */}
        <div className="space-y-6">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${heroTheme.accentText}`}
          >
            Silber · Natursteine · Handarbeit
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Feiner Steinschmuck aus Pakistan,
            <br />
            über Italien in die Schweiz.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            Handverlesene Steine aus einer Manufaktur in Pakistan, in sorgfältiger
            Handarbeit zu feinem Schmuck verarbeitet und über Italien in die Schweiz
            importiert. Jedes Stück ist ein Unikat – ruhig, zeitlos und nah an der Natur.
          </p>

          <div
            className={`rounded-2xl p-3 text-xs ring-1 ring-black/5 dark:ring-white/5 ${heroTheme.chipBg}`}
          >
            <p className="font-semibold text-neutral-900 dark:text-neutral-50">
              Zuletzt hinzugefügt: {heroProduct.title}
            </p>
            <p className="mt-1 text-neutral-800 dark:text-neutral-200">
              {heroProduct.stone && <>Stein: {heroProduct.stone} · </>}
              {heroProduct.price.toFixed(2)} CHF
            </p>
            <Link
              href={`/products/${heroProduct.slug}`}
              className={`mt-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${heroTheme.accentText} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]`}
            >
              Details ansehen →
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="rounded-full bg-[#C57A3B] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-[#C57A3B]/40 hover:bg-[#8B4F22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
            >
              Zum Shop
            </Link>
            <span className="text-xs text-neutral-700 dark:text-neutral-300">
              Versand aus der Schweiz · kleine, kuratierte Auswahl
            </span>
          </div>
        </div>
      </section>

      {/* 2) USP-Leiste */}
      <section className="grid gap-4 rounded-3xl bg-[#F7F4EF] p-4 text-sm text-neutral-900 shadow-sm ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-800 sm:grid-cols-4">
        <div className="flex items-start gap-2">
          <span aria-hidden="true" className="text-lg">
            🇵🇰
          </span>
          <div>
            <p className="font-semibold">Handgefertigt in Pakistan</p>
            <p className="text-xs text-neutral-700 dark:text-slate-300">
              Manufakturarbeit, keine Massenproduktion.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span aria-hidden="true" className="text-lg">
            💎
          </span>
          <div>
            <p className="font-semibold">Echte Natursteine</p>
            <p className="text-xs text-neutral-700 dark:text-slate-300">
              Sorgfältig ausgewählt nach Farbe & Struktur.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span aria-hidden="true" className="text-lg">
            🚚
          </span>
          <div>
            <p className="font-semibold">Versand aus der Schweiz</p>
            <p className="text-xs text-neutral-700 dark:text-slate-300">
              Schnelle Lieferung, keine Überraschungen.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span aria-hidden="true" className="text-lg">
            🔒
          </span>
          <div>
            <p className="font-semibold">Sichere Zahlung</p>
            <p className="text-xs text-neutral-700 dark:text-slate-300">
              Stripe-Integration (bald verfügbar).
            </p>
          </div>
        </div>
      </section>

      {/* 3) Kollektionen – Ketten / Anhänger / Ringe */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Kollektionen
          </h2>
          <Link
            href="/products"
            className="text-xs font-medium text-neutral-700 hover:text-[#8B4F22] dark:text-slate-300 dark:hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
          >
            Alle Produkte ansehen →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Ketten */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F7F4EF] to-[#E7D9C4] p-4 ring-1 ring-black/5 dark:from-[#020617] dark:to-[#111827] dark:ring-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
          >
            <div className="relative mb-4 h-28 overflow-hidden rounded-2xl">
              <Image
                src="/kette.webp"
                alt="Kette – Kollektion"
                fill
                loading="lazy"
                sizes="(min-width: 640px) 33vw, 80vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 dark:text-slate-300">
              Kollektion
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Ketten
            </p>
            <p className="mt-1 text-xs text-neutral-700 dark:text-slate-300">
              Zeitlose Ketten mit feinen Natursteinen.
            </p>
          </Link>

          {/* Anhänger */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ECF3FF] to-[#D6E4FF] p-4 ring-1 ring-black/5 dark:from-[#020617] dark:to-[#020617] dark:ring-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
          >
            <div className="relative mb-4 h-28 overflow-hidden rounded-2xl">
              <Image
                src="/anhaenger.webp"
                alt="Anhänger – Kollektion"
                fill
                loading="lazy"
                sizes="(min-width: 640px) 33vw, 80vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 dark:text-slate-300">
              Kollektion
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Anhänger
            </p>
            <p className="mt-1 text-xs text-neutral-700 dark:text-slate-300">
              Feine Anhänger als dezenter Blickfang.
            </p>
          </Link>

          {/* Ringe */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E6F4EC] to-[#CBEAD4] p-4 ring-1 ring-black/5 dark:from-[#022C22] dark:to-[#022C22] dark:ring-emerald-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
          >
            <div className="relative mb-4 h-28 overflow-hidden rounded-2xl">
              <Image
                src="/ring.webp"
                alt="Ring – Kollektion"
                fill
                loading="lazy"
                sizes="(min-width: 640px) 33vw, 80vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 dark:text-slate-200">
              Kollektion
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Ringe
            </p>
            <p className="mt-1 text-xs text-neutral-700 dark:text-emerald-100/80">
              Schlichte Ringe mit feinen Details.
            </p>
          </Link>
        </div>
      </section>

      {/* 4) Farbwelten */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Farbwelten
        </h2>
        <div className="grid gap-3 text-xs sm:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-2xl bg-[#F5E9DC] p-3 text-neutral-900 ring-1 ring-[#E2C9A5]/60 dark:bg-[#451A03] dark:text-amber-50 dark:ring-amber-700/70">
            <p className="font-semibold">Bernstein</p>
            <p className="mt-1">
              Warm, erdig & beruhigend.
            </p>
          </div>
          <div className="rounded-2xl bg-[#E0ECFF] p-3 text-neutral-900 ring-1 ring-[#93C5FD]/60 dark:bg-[#020617] dark:text-sky-100 dark:ring-sky-700/70">
            <p className="font-semibold">Blau</p>
            <p className="mt-1">
              Klar, ruhig & elegant.
            </p>
          </div>
          <div className="rounded-2xl bg-[#E6F4EC] p-3 text-neutral-900 ring-1 ring-[#6EE7B7]/60 dark:bg-[#022C22] dark:text-emerald-100 dark:ring-emerald-700/70">
            <p className="font-semibold">Grün</p>
            <p className="mt-1">
              Natürlich & harmonisch.
            </p>
          </div>
          <div className="rounded-2xl bg-[#F4F4F0] p-3 text-neutral-900 ring-1 ring-[#E0DED6]/60 dark:bg-[#111827] dark:text-slate-100 dark:ring-slate-600/70">
            <p className="font-semibold">Perlmutt</p>
            <p className="mt-1">
              Hell & zurückhaltend.
            </p>
          </div>
          <div className="rounded-2xl bg-[#FEE2E2] p-3 text-neutral-900 ring-1 ring-[#FCA5A5]/60 dark:bg-[#450A0A] dark:text-rose-100 dark:ring-rose-700/70">
            <p className="font-semibold">Rot</p>
            <p className="mt-1">
              Kraftvoll & intensiv.
            </p>
          </div>
          <div className="rounded-2xl bg-[#E0F7F7] p-3 text-neutral-900 ring-1 ring-[#67E8F9]/60 dark:bg-[#022C22] dark:text-cyan-100 dark:ring-cyan-700/70">
            <p className="font-semibold">Türkis</p>
            <p className="mt-1">
              Lebendig & frisch.
            </p>
          </div>
        </div>
      </section>

      {/* 5) Neu im Shop – Carousel */}
      {carouselProducts.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Neu im Shop
            </h2>
            <Link
              href="/products"
              className="text-xs font-medium text-neutral-700 hover:text-[#8B4F22] dark:text-slate-300 dark:hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C57A3B]"
            >
              Alle ansehen →
            </Link>
          </div>
          
          <ProductCarousel products={carouselProducts} />
        </section>
      )}

      {/* 6) Über unseren Schmuck */}
      <section className="grid gap-8 rounded-3xl bg-[#F7F4EF] p-6 text-sm text-neutral-900 ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-100 dark:ring-slate-800 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Über unseren Schmuck
          </h2>
          <p className="leading-relaxed">
            Unsere Stücke entstehen in einer kleinen Manufaktur in Pakistan, in
            der jedes Detail zählt. Wir kombinieren edle Metalle wie
            925er-Silber oder Gold mit handverlesenen Steinen, deren Farbspiel
            und Struktur bewusst ausgewählt werden.
          </p>
          <p className="leading-relaxed text-neutral-800 dark:text-slate-300">
            Ziel ist Schmuck, der sich nicht aufdrängt, sondern begleitet –
            im Alltag, bei besonderen Anlässen und als persönliches Ritual.
          </p>
        </div>
        <div className="relative h-40 overflow-hidden rounded-2xl">
          <Image
            src="/goldschmied.webp"
            alt="Goldschmied bei der Arbeit"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 7) Über uns */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Über uns
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
          Hinter diesem Shop steht die Idee, hochwertigen, ruhigen Steinschmuck
          für Menschen zugänglich zu machen, die klare Formen, natürliche
          Materialien und ehrliches Handwerk schätzen. Kein lautes Branding,
          sondern Stücke, die dir gehören und deine Geschichte begleiten.
        </p>
      </section>
    </main>
  );
}
