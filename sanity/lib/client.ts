// sanity/lib/client.ts
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Hauptclient für alle Sanity-Abfragen
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Alias "client" für Files wie live.ts
export const client = sanityClient;

export default sanityClient;
