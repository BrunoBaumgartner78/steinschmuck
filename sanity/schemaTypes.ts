// sanity/schemaTypes.ts

import { type SchemaTypeDefinition } from "sanity";

// Wichtig: Pfad muss absolut innerhalb des sanity-Ordners sein
// und exakt mit deiner Struktur übereinstimmen.
import product from "../sanity/schemaTypes/product";

// Falls du später weitere Schemas hast (settings, pages, categories),
// hier einfach ergänzen:
export const schemaTypes: SchemaTypeDefinition[] = [
  product,
];
