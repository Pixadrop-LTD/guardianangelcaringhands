import type { Block } from 'payload'

export const CaseStudies: Block = {
  slug: 'caseStudies',
  labels: {
    singular: 'Case Studies',
    plural: 'Case Studies',
  },
  fields: [
    {
      name: 'sectionTitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionSubtitle',
      label: 'Section Subtitle',
      type: 'text',
    },
    {
      name: 'caseStudies',
      label: 'Case Studies',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'richText',
          required: true,
        },
        {
          name: 'program',
          label: 'Related Program',
          type: 'text',
          required: true,
        },
        {
          name: 'youTubeVideoId',
          label: 'YouTube Video ID',
          type: 'text',
        },
        {
          name: 'media',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
