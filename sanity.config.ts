// sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// 🔍 Zusätzliche Checks, damit der Fehler klar ist
if (!projectId) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_PROJECT_ID ist nicht gesetzt. Bitte in .env.local und auf Vercel hinzufügen."
  );
}

if (!/^[a-z0-9-]+$/.test(projectId)) {
  throw new Error(
    `Invalid NEXT_PUBLIC_SANITY_PROJECT_ID="${projectId}". Erlaubt sind nur a-z, 0-9 und Bindestriche.`
  );
}

export default defineConfig({
  name: "default",
  title: "Steinschmuck Shop",

  projectId,
  dataset,
  basePath: "/studio",

  // 👉 Normales Studio: Desk + Vision
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
