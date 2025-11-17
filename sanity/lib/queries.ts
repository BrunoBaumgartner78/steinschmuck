// sanity/lib/queries.ts
import { groq } from "next-sanity";

/**
 * Alle Produkte (für Produktübersicht, Filter, Debug etc.)
 */
export const allProductsQuery = groq`
*[_type == "product"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  price,
  description,
  "images": images[].asset->url,
  stone,
  metal,
  metalType,
  goldKarat,
  silverFineness,
  colorTheme,
  category,
}
`;

/**
 * Die 6 neuesten Produkte (Startseite / Carousel)
 */
export const latestProductsQuery = groq`
*[_type == "product"] | order(_createdAt desc)[0...6] {
  _id,
  title,
  "slug": slug.current,
  price,
  description,
  "images": images[].asset->url,
  stone,
  metal,
  metalType,
  goldKarat,
  silverFineness,
  colorTheme,
  category,
}
`;

/**
 * Einzelnes Produkt nach Slug (für Detailseite + Metadata)
 */
export const productBySlugQuery = groq`
*[_type == "product" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  price,
  description,
  "images": images[].asset->url,
  stone,
  metal,
  metalType,
  goldKarat,
  silverFineness,
  colorTheme,
  category,
}
`;

/**
 * Nur Slugs aller Produkte (für sitemap.xml)
 */
export const allProductSlugsQuery = groq`
*[_type == "product" && defined(slug.current)]{
  "slug": slug.current
}
`;
