import { Block } from "payload";

export const Statistics: Block = {
  slug: 'statistics',
  labels: {
    singular: 'Statistic Block',
    plural: 'Statistic Blocks',
  },
  fields: [
    {
      name: 'statisticsList',
      label: 'Statistics',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          label: 'Value',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}
