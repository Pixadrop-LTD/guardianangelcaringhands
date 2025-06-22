import type { Block } from 'payload'

export const YouTubeBlock: Block = {
  slug: 'youTubeBlock',
  labels: {
    singular: 'YouTube Video',
    plural: 'YouTube Videos',
  },
  fields: [
    {
      name: 'youTubeURL',
      label: 'YouTube URL',
      type: 'text',
      required: true,
    },
  ],
}
