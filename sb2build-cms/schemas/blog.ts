import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
      // readOnly: true,
      // hidden: true
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    {
      name: 'seoTitle',
      title: 'SEO Title',
      group: 'seo',
      options: {
        source: 'title',
      },
      type: 'string',
      // validation: Rule => [
      //   Rule.required().min(40).max(50).error('SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates'),
      // ],
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      group: 'seo',
      // validation: Rule => [
      //   Rule.required().min(50).max(156).error('Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long.'),
      // ],
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
