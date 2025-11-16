// app/products/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../../../sanity/lib/client";
import { allProductsQuery } from "../../../sanity/lib/queries";
import { AddToCartButton } from "@/app/components/cart/add-to-cart-button";

type MetalType = "gold" | "silver" | undefined;

type Product = {
  _id: string;
  title: string;
  slug: string;
  price: number;
  description?: string;
  images?: string[];
  stone?: string;
  metalType?: MetalType;
  goldKarat?: string;
  silverFineness?: string;
  colorTheme?: string | null;
};

export default function ProductPage() {
  const params = useParams();
  const slugParam = (params?.slug as string | undefined) ?? "";

  const [product, setProduct] = useState<Product | null>(null);
  const [allSlugs, setAllSlugs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Bei Slug-Wechsel wieder erstes Bild wählen
  useEffect(() => {
    setActiveImageIndex(0);
  }, [slugParam]);

  useEffect(() => {
    const load = async () => {
      try {
        const products = await sanityClient.fetch<Product[]>(allProductsQuery);

        setAllSlugs(products.map((p) => p.slug ?? "(kein slug)"));

        const normalize = (value: string | undefined | null) =>
          (value ?? "")
            .toString()
            .normalize("NFKC")
            .toLowerCase()
            .trim();

        const found = products.find(
          (p) => normalize(p.slug) === normalize(slugParam)
        );

        setProduct(found ?? null);
      } catch (e) {
        console.error("Fehler beim Laden des Produkts:", e);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slugParam]);

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-sm text-neutral-500 dark:text-slate-300">
          Produkt wird geladen …
        </p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10 space-y-4">
        <p className="text-sm text-neutral-700 dark:text-slate-200">
          Produkt mit dem Slug{" "}
          <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-800">
            {slugParam || "(leer)"}
          </code>{" "}
          wurde nicht gefunden.
        </p>

        <p className="text-xs text-neutral-500 dark:text-slate-400">
          Verfügbare Slugs laut Sanity:
        </p>
        <p className="break-words text-xs text-neutral-600 dark:text-slate-300">
          {allSlugs.join(", ") || "Keine Produkte gefunden."}
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
  const mainImage = images[activeImageIndex] ?? images[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
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
                className="object-cover"
              />
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, idx) => {
                const isActive = idx === activeImageIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-20 w-20 flex-none overflow-hidden rounded-xl border bg-neutral-200 dark:bg-neutral-900 ${
                      isActive
                        ? "border-[#C57A3B] shadow-lg shadow-black/40"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Bild ${idx + 1} auswählen`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} Detail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
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

          <div className="flex items-baseline gap-3">
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
                gefertigt in einer Manufaktur in Italien, importiert in die
                Schweiz.
              </dd>
            </div>
          </dl>

          <AddToCartButton
            product={{
              id: product._id,
              title: product.title,
              price: product.price,
              image: mainImage,
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
