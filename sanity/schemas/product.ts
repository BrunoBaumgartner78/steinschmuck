// sanity/schemas/product.ts
import {defineField, defineType} from "sanity";

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
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "images",
      title: "Bilder",
      type: "array",
      of: [{type: "image"}],
      options: {layout: "grid"},
    }),

    // Steinname (z.B. Amethyst, Mondstein)
    defineField({
      name: "stone",
      title: "Stein",
      type: "string",
    }),

    // Metall: Gold oder Silber
    defineField({
      name: "metalType",
      title: "Metall",
      type: "string",
      options: {
        layout: "radio",
        list: [
          {title: "Silber", value: "silver"},
          {title: "Gold", value: "gold"},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Nur sichtbar, wenn Silber gewählt
    defineField({
      name: "silverFineness",
      title: "Silber Feingehalt",
      type: "string",
      options: {
        list: [
          {title: "925 Silber", value: "925"},
          {title: "999 Silber", value: "999"},
        ],
      },
      hidden: ({parent}) => parent?.metalType !== "silver",
    }),

    // Nur sichtbar, wenn Gold gewählt
    defineField({
      name: "goldKarat",
      title: "Gold Karat",
      type: "string",
      options: {
        list: [
          {title: "14 Karat", value: "14k"},
          {title: "18 Karat", value: "18k"},
          {title: "24 Karat", value: "24k"},
        ],
      },
      hidden: ({parent}) => parent?.metalType !== "gold",
    }),

    // Farbwelt wie im Screenshot
    defineField({
      name: "colorTheme",
      title: "Farbwelt (Steinfarbe)",
      type: "string",
      options: {
        layout: "radio",
        list: [
          {title: "Bernstein", value: "amber"},
          {title: "Blau", value: "blue"},
          {title: "Grün", value: "green"},
          {title: "Perlmutt", value: "pearl"},
          {title: "Rot", value: "red"},
          {title: "Türkis", value: "turquoise"},
          {title: "Diamant", value: "diamond"},
          {title: "Violett", value: "violet"},
          {title: "Schwarz", value: "black"},
        ],
      },
    }),
  ],
});
