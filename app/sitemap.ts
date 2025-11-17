// app/sitemap.ts
import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { allProductSlugsQuery } from "@/sanity/lib/queries";

const BASE_URL = "https://beryll.ch";

type ProductSlugResult = {
  slug: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let productEntries: MetadataRoute.Sitemap = [];

  try {
    const slugs = await sanityClient.fetch<ProductSlugResult[]>(
      allProductSlugsQuery
    );

    productEntries = slugs
      .filter((p) => p.slug)
      .map((p) => ({
        url: `${BASE_URL}/products/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Fehler beim Laden der Produkt-Slugs für die Sitemap:", error);
  }

  const staticPaths: string[] = [
    "",
    "/products",
    "/about",
    "/about-jewelry",
    "/kontakt",
    "/agb",
    "/datenschutz",
    "/impressum",
    "/widerruf",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.5,
  }));

  return [...staticEntries, ...productEntries];
}
