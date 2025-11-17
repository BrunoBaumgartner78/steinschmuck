// app/products/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/sanity/lib/client";
import { productBySlugQuery } from "@/sanity/lib/queries";
import { AddToCartButton } from "@/app/components/cart/add-to-cart-button";

type Product = {
  _id: string;
  title: string;
  slug: string; // wir projizieren slug.current → slug in der GROQ-Query
  price: number;
  description?: string;
  images?: string[]; // in der Query: "images": images[].asset->url
  stone?: string;
  metal?: string;
  metalType?: "gold" | "silver" | null;
  goldKarat?: string | null;
  silverFineness?: string | null;
  colorTheme?: string | null;
};

type PageParams = {
  params: { slug: string };
};

// Produkt aus Sanity holen
async function getProduct(slug: string): Promise<Product | null> {
  const product = await sanityClient.fetch<Product | null>(productBySlugQuery, {
    slug,
  });
  return product ?? null;
}

/**
 * SEO / OG / Twitter pro Produkt
 */
export async function generateMetadata(
  { params }: PageParams
): Promise<Metadata> {
  const product = await getProduct(params.slug);

  if (!product) {
    return {
      title: "Produkt nicht gefunden",
      description:
        "Dieses Schmuckstück existiert nicht oder ist nicht mehr verfügbar.",
      robots: { index: false, follow: false },
    };
  }

  const imageUrl = product.images?.[0] ?? "/og-default.jpg";
  const url = `https://beryll.ch/products/${product.slug}`;
  const price = product.price?.toFixed(2);

  return {
    title: product.title,
    description:
      product.description ||
      `Handgefertigtes Schmuckstück aus ${product.metal || "925 Silber"} mit ${
        product.stone || "Naturstein"
      }.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "product",
      url,
      title: product.title,
      description:
        product.description ||
        `Feiner Steinschmuck – ${
          product.stone || "Naturstein"
        } in ${product.metal || "Silber"}.`,
      siteName: "Steinschmuck Baumgartner Schweiz",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description:
        product.description ||
        `Handgefertigter Steinschmuck mit ${product.stone || "Naturstein"}.`,
      images: [imageUrl],
    },
  };
}

/**
 * Produktdetailseite (Server Component)
 */
export default async function ProductPage({ params }: PageParams) {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px  -4 py-10 space-y-4">
        <p className="text-sm text-neutral-700 dark:text-slate-200">
          Das gewünschte Schmuckstück wurde nicht gefunden oder ist nicht mehr
          verfügbar.
        </p>
        <Link
          href="/products"
          className="mt-4 inline-block text-sm text-[#C57A3B] hover:text-[#8B4F22] dark:text-amber-300"
        >
          ← Zurück zum Shop
        </Link>
      </main>
    );
  }

  const images = product.images ?? [];
  const mainImage = images[0] ?? null;

  // JSON-LD für Schema.org Product
  const imageUrl = mainImage ?? "https://beryll.ch/og-default.jpg";
  const url = `https://beryll.ch/products/${product.slug}`;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: [imageUrl],
    description:
      product.description ||
      `Handgefertigter Steinschmuck aus ${product.metal || "925 Silber"} mit ${
        product.stone || "Naturstein"
      }.`,
    brand: {
      "@type": "Brand",
      name: "Steinschmuck Baumgartner Schweiz",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "CHF",
      price: product.price,
      availability: "https://schema.org/InStock",
      url,
    },
    material: product.metal || "925 Silber",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Structured Data für Google */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Link
        href="/products"
        className="mb-6 inline-flex items-center text-xs text-neutral-500 hover:text-[#C57A3B] dark:text-slate-400 dark:hover:text-amber-300"
      >
        ← Zurück zur Übersicht
      </Link>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        {/* Galerie links */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-neutral-200 shadow-xl shadow-black/30 dark:bg-neutral-900">
            {mainImage && (
              <Image
                src={mainImage}
                alt={product.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-3" aria-label="Weitere Produktbilder">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-20 w-20 flex-none overflow-hidden rounded-xl border border-transparent bg-neutral-200 opacity-80 shadow-sm hover:opacity-100 hover:border-[#C57A3B] dark:bg-neutral-900 dark:hover:border-amber-300"
                >
                  <Image
                    src={img}
                    alt={`${product.title} Detailansicht ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Infos rechts – neutrale Karte */}
        <div className="space-y-6 rounded-3xl bg-[#F7F4EF] p-6 text-neutral-900 shadow-xl shadow-black/10 ring-1 ring-black/5 dark:bg-[#020617] dark:text-slate-50 dark:ring-slate-700 dark:shadow-black/50 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8B4F22] dark:text-amber-300">
            Handgefertigter Steinschmuck
          </p>

          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {product.title}
          </h1>

          <p className="text-sm leading-relaxed text-neutral-700 dark:text-slate-200">
            {product.description ??
              "Feiner Steinschmuck aus 925er Silber. Jedes Stück ist ein Unikat."}
          </p>

          <div className="flex items-baseline gap-3" aria-label="Preisangabe">
            <span className="text-2xl font-semibold">
              {product.price.toFixed(2)} CHF
            </span>
            <span className="text-xs text-neutral-500 dark:text-slate-400">
              inkl. MwSt. zzgl. Versand
            </span>
          </div>

          <dl className="space-y-1 text-xs leading-relaxed text-neutral-700 dark:text-slate-200">
            {product.metalType === "gold" && product.goldKarat && (
              <div>
                <dt className="inline font-semibold">Metall: </dt>
                <dd className="inline">Gold ({product.goldKarat})</dd>
              </div>
            )}

            {product.metalType === "silver" && product.silverFineness && (
              <div>
                <dt className="inline font-semibold">Metall: </dt>
                <dd className="inline">Silber {product.silverFineness}</dd>
              </div>
            )}

            {product.stone && (
              <div>
                <dt className="inline font-semibold">Stein: </dt>
                <dd className="inline">{product.stone}</dd>
              </div>
            )}

            <div>
              <dt className="inline font-semibold">Herkunft: </dt>
              <dd className="inline">
                gefertigt in einer Manufaktur in Pakistan, importiert über
                Italien in die Schweiz.
              </dd>
            </div>
          </dl>

          <AddToCartButton
            product={{
              id: product._id,
              title: product.title,
              price: product.price,
              image: mainImage ?? undefined,
            }}
          />

          <p className="text-[11px] text-neutral-500 dark:text-slate-400">
            Handgefertigt in kleinen Stückzahlen. Farben und Maserung der Steine
            können leicht variieren.
          </p>
        </div>
      </div>
    </main>
  );
}
