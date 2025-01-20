import { defineType, defineField } from "sanity";

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "href",
      title: "URL",
      type: "url",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
  ],
});