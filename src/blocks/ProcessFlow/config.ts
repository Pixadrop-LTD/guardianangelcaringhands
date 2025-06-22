import type { Block } from 'payload'

export const ProcessFlow: Block = {
  slug: 'processFlow',
  interfaceName: 'ProcessFlowBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Program Execution Process',
    },
  ],
}
