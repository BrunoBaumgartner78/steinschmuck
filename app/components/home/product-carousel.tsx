// app/components/home/product-carousel.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Product = {
  _id: string;
  title: string;
  slug: string;
  price: number;
  images?: string[];
  stone?: string;
};

type CarouselProps = {
  products: Product[];
};

// Einheitliches Amber-Theme für alle Karten
const amberTheme = {
  cardBg: "bg-[#F5E9DC] dark:bg-[#F5E9DC]",
  title: "text-[#111827]",
  text: "text-[#4B5563]",
  priceBg: "bg-[#C57A3B]",
  priceText: "text-white",
};

export function ProductCarousel({ products }: CarouselProps) {
  if (!products || products.length === 0) return null;

  // Für flüssige Wiederholung: Produkte duplizieren
  const extended =
    products.length >= 3
      ? [...products, ...products]
      : [...products, ...products, ...products];

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let frameId: number;
    const speed = 0.5; // Pixel pro Frame (ca. 30px/s bei 60fps)

    const loop = () => {
      const node = viewportRef.current;
      if (!node) return;

      if (!pausedRef.current) {
        node.scrollLeft += speed;

        const half = node.scrollWidth / 2;
        if (node.scrollLeft >= half) {
          node.scrollLeft = 0;
        }
      }

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [extended.length]);

  const handlePointerDown = () => {
    pausedRef.current = true;
  };

  const handlePointerUp = () => {
    pausedRef.current = false;
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold tracking-[0.25em] text-[#6B7280] dark:text-slate-400">
          WEITERE NEUE STÜCKE
        </h2>

        <Link
          href="/products"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8B4F22] underline-offset-4 hover:underline dark:text-[#FBBF77]"
        >
          Alle Produkte ansehen →
        </Link>
      </div>

      {/* Fenster: abgerundet, darin „fließen“ die Karten vorbei */}
      <div className="relative overflow-hidden rounded-[2rem] bg-[#050816] bg-opacity-[0.98] px-2 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.7)] ring-1 ring-black/60">
        {/* Scroll-Viewport: auto-scroll + swipebar */}
        <div
          ref={viewportRef}
          className="no-scrollbar flex flex-nowrap gap-6 overflow-x-auto"
          onMouseDown={handlePointerDown}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchEnd={handlePointerUp}
        >
          {extended.map((product, idx) => {
            const image = product.images?.[0];

            return (
              <article
                key={product._id + "-" + idx}
                className={[
                  "group flex min-w-[260px] flex-col overflow-hidden rounded-3xl ring-1 ring-black/10",
                  "sm:min-w-[280px] lg:min-w-[320px]",
                  amberTheme.cardBg,
                  "transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30",
                ].join(" ")}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {image && (
                    <Image
                      src={image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between gap-4 px-4 pb-4 pt-3">
                  <div className="space-y-1">
                    <p
                      className={[
                        "text-xs font-medium uppercase tracking-[0.2em] opacity-70",
                        amberTheme.text,
                      ].join(" ")}
                    >
                      Silberschmuck
                    </p>
                    <h3
                      className={["text-sm font-semibold", amberTheme.title].join(
                        " "
                      )}
                    >
                      {product.title}
                    </h3>
                    {product.stone && (
                      <p className={["text-xs", amberTheme.text].join(" ")}>
                        Stein: {product.stone}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                        amberTheme.priceBg,
                        amberTheme.priceText,
                      ].join(" ")}
                    >
                      {product.price.toFixed(2)} CHF
                    </span>

                    <Link
                      href={`/products/${product.slug}`}
                      className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-800/80 underline-offset-4 hover:underline"
                    >
                      Details ansehen →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Scrollbar ausblenden (nur für das Karussell) */}
        <style jsx global>{`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
