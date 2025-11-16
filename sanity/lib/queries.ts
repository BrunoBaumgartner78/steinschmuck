// sanity/lib/queries.ts
import { groq } from "next-sanity";

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
