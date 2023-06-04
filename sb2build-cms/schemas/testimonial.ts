import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Testimonial',
  name: 'testimonial',
  type: 'document',
  fields: [
    defineField({
      title: 'Full Name',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Position',
      name: 'position',
      type: 'string'
    }),
    defineField({
      title: 'Client Testimonial',
      name: 'clientTestimonial',
      type: 'text',
      rows: 5,
    }),
  ],

  preview: {
    select: {
      title: 'title'
    }
  },

});