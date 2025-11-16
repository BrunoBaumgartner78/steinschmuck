import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "SEO Titel",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Social Share Bild",
      type: "image",
    }),
  ],
});
