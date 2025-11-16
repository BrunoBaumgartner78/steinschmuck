import { defineField, defineType } from "sanity";

export default defineType({
  name: "collection",
  title: "Kollektion",
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
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Bild",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
});
