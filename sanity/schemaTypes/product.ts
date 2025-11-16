// sanity/schemaTypes/product.ts
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Produkt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required().error("Bitte einen Produkttitel eingeben."),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error("Bitte einen Slug generieren (z.B. aus dem Titel)."),
    }),

    defineField({
      name: "price",
      title: "Preis (CHF)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .precision(2)
          .error("Bitte einen gültigen Preis angeben."),
    }),

    defineField({
      name: "images",
      title: "Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.min(1).error("Mindestens ein Bild hochladen."),
    }),

    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "stone",
      title: "Stein",
      type: "string",
    }),

    // 🌟 Metall: Gold / Silber
    defineField({
      name: "metalType",
      title: "Metall",
      type: "string",
      options: {
        list: [
          { title: "Silber", value: "silver" },
          { title: "Gold", value: "gold" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),

    defineField({
      name: "goldKarat",
      title: "Gold (Karat)",
      type: "string",
      description: "z. B. 18K, 14K …",
      hidden: ({ parent }) => parent?.metalType !== "gold",
    }),

    defineField({
      name: "silverFineness",
      title: "Silber-Feinheit",
      type: "string",
      description: "z. B. 925, 950 …",
      hidden: ({ parent }) => parent?.metalType !== "silver",
    }),

    // 🎨 Farbwelt
    defineField({
      name: "colorTheme",
      title: "Farbwelt",
      type: "string",
      options: {
        list: [
          { title: "Bernstein", value: "amber" },
          { title: "Blau", value: "blue" },
          { title: "Grün", value: "green" },
          { title: "Perlmutt", value: "pearl" },
          { title: "Rot", value: "red" },
          { title: "Türkis", value: "turquoise" },
          { title: "Diamant / Klar", value: "diamond" },
          { title: "Schwarz", value: "black" },
          { title: "Violett", value: "violet" },
        ],
        layout: "dropdown",
      },
    }),

    // 🧵 NEU: Kategorie – Kette / Anhänger / Ring
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Kette", value: "necklace" },
          { title: "Anhänger", value: "pendant" },
          { title: "Ring", value: "ring" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule) =>
        Rule.required().error("Bitte eine Kategorie (Kette, Anhänger, Ring) wählen."),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "stone",
      media: "images.0",
      metalType: "metalType",
      category: "category",
    },
    prepare({ title, subtitle, media, metalType, category }) {
      const metal =
        metalType === "gold"
          ? "Gold"
          : metalType === "silver"
          ? "Silber"
          : undefined;

      const cat =
        category === "necklace"
          ? "Kette"
          : category === "pendant"
          ? "Anhänger"
          : category === "ring"
          ? "Ring"
          : undefined;

      const parts = [subtitle, metal, cat].filter(Boolean);
      return {
        title: title || "Unbenanntes Produkt",
        subtitle: parts.join(" · "),
        media,
      };
    },
  },
});
