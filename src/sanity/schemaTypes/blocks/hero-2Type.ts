import { defineType, defineField } from 'sanity';

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100).error('Title is required and must be less than 100 characters.'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.max(150).warning('Subtitle should be under 150 characters.'),
    }),
    defineField({
      name: "text",
      type: "blockContent",
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot for better image cropping in Sanity studio
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility.'),
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call To Action',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Button Label',
          type: 'string',
          validation: (Rule) => Rule.required().error('Button label is required.'),
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'url',
          validation: (Rule) => Rule.required().error('Button URL is required.'),
        },
      ],
    }),
  ],
});
