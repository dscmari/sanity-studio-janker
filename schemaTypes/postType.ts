import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-') // Leerzeichen zu Bindestrichen
            .replace(/[^a-z0-9\-\/]/g, '') // Erlaubt Buchstaben, Zahlen, '-' und '/'
            .replace(/\/+/g, '/'), // Doppelte Slashes (//) verhindern
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image_2',
      type: 'image',
    }),
    defineField({
      name: 'body_2',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image_3',
      type: 'image',
    }),
    defineField({
      name: 'body_3',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image_4',
      type: 'image',
    }),
    defineField({
      name: 'body_4',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image_5',
      type: 'image',
    }),
    defineField({
      name: 'body_5',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title Tag',
      type: 'string',
      description: 'Dieser Titel erscheint im Browser-Tab und bei Google. (Ideal: 50-60 Zeichen)',
      validation: (Rule) => Rule.max(70).warning('Der Titel ist etwas zu lang für Google.'),
    }),
  ],
})
