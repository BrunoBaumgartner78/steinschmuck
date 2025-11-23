// sanity/schemaTypes/product.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Produkt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Preis (CHF)",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "images",
      title: "Bilder",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "stone",
      title: "Stein",
      type: "string",
    }),
    defineField({
      name: "metal",
      title: "Metall (Text)",
      type: "string",
      description: "z.B. '925 Silber', 'Vergoldet' – frei eintragbar.",
    }),
    defineField({
      name: "metalType",
      title: "Metall-Typ",
      type: "string",
      options: {
        list: [
          { title: "Silber", value: "silver" },
          { title: "Gold", value: "gold" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "goldKarat",
      title: "Gold Karat",
      type: "string",
      hidden: ({ parent }) => parent?.metalType !== "gold",
    }),
    defineField({
      name: "silverFineness",
      title: "Silber-Feingehalt",
      type: "string",
      hidden: ({ parent }) => parent?.metalType !== "silver",
    }),

    // 🔸 Farbwelt jetzt als Radio-Buttons mit festen Werten
    defineField({
      name: "colorTheme",
      title: "Farbwelt",
      type: "string",
      description: "Wird für die Farb-Filter im Shop verwendet.",
      options: {
        list: [
          { title: "Bernstein / Warm", value: "amber" },
          { title: "Blau", value: "blue" },
          { title: "Grün", value: "green" },
          { title: "Perlmutt / Hell", value: "pearl" },
          { title: "Rot", value: "red" },
          { title: "Türkis", value: "turquoise" },
          { title: "Diamant / Klar", value: "diamond" },
          { title: "Schwarz", value: "black" },
          { title: "Violett", value: "violet" },
        ],
        layout: "radio", // ⬅ hier kommen die Radio-Buttons her
      },
    }),

    // Kategorien
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Kette", value: "kette" },
          { title: "Anhänger", value: "anhänger" },
          { title: "Ring", value: "ring" },
          { title: "Ohrring", value: "ohrring" },
          { title: "Bracelet", value: "bracelet" },
          { title: "Kombination", value: "kombination" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("Bitte eine Kategorie wählen."),
    }),

    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
      rows: 4,
    }),
  ],
});
