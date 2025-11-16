// sanity/lib/live.ts
import { defineLive } from "next-sanity/live";
import { client } from "./client";

// Live-API für Vorschau / Revalidate etc.
// Du kannst `sanityFetch` später nutzen, wenn du Live Content brauchst.
export const { sanityFetch, SanityLive } = defineLive({
  client,
});
