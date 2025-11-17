// app/sitemap.ts
import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { allProductSlugsQuery } from "@/sanity/lib/queries";

type ProductSlug = { slug: { current: string } };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://beryll.ch";

  let productSlugs: ProductSlug[] = [];
  try {
    productSlugs = await sanityClient.fetch<ProductSlug[]>(allProductSlugsQuery);
  } catch {
    productSlugs = [];
  }

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/products",
    "/about-jewelry",
    "/about",
    "/kontakt",
    "/agb",
    "/datenschutz",
    "/impressum",
    "/widerruf",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));

  const productPages: MetadataRoute.Sitemap = productSlugs.map((p) => ({
    url: `${baseUrl}/products/${p.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
