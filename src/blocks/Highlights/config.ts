import type { Block } from 'payload'

export const Highlights: Block = {
  slug: 'highlights',
  labels: {
    singular: 'Highlights',
    plural: 'Highlights',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'textarea',
    },
    {
      name: 'programs',
      label: 'Programs',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Program Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Program Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'media',
          label: 'Program Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
