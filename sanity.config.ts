// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) {
  throw new Error(
    `Invalid NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.`
  );
}

export default defineConfig({
  name: "default",
  title: "Steinschmuck Shop",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool(),  // <-- funktioniert in Sanity v3
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
