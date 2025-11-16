// sanity.config.ts (Projektroot)
import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {schemaTypes} from "./sanity/schemaTypes";

// ⬇️ hier trägst du DEIN echtes projectId ein (steht im Sanity Manage)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "DEIN_PROJECT_ID";

// ⬇️ dein Dataset heißt laut Setup "steinschmuck"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "steinschmuck";

if (!/^[a-z0-9-]+$/.test(projectId)) {
  throw new Error(
    `Invalid Sanity projectId "${projectId}". ` +
      'Use the real project ID from manage.sanity.io (only a-z, 0-9 and "-").'
  );
}

export default defineConfig({
  name: "default",
  title: "Steinschmuck Shop",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
