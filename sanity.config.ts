// sanity.config.ts
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) {
  throw new Error(
    'Invalid NEXT_PUBLIC_SANITY_PROJECT_ID. Check your Vercel env vars and .env.local.'
  );
}

export default defineConfig({
  name: "default",
  title: "Steinschmuck Shop",

  projectId,
  dataset,
  basePath: "/studio",

  // ❗ Nur visionTool, kein structureTool mehr
  plugins: [visionTool()],

  schema: {
    types: schemaTypes,
  },
});
