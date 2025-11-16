// sanity/lib/client.ts
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "steinschmuck";

// Minimaler Safe-Check, damit du im Fehlerfall eine klare Meldung bekommst
if (!projectId) {
  throw new Error(
    'NEXT_PUBLIC_SANITY_PROJECT_ID ist nicht gesetzt. Bitte in .env.local eintragen.'
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});
