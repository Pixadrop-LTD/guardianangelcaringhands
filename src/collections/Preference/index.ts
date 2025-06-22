import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

export const Preference: CollectionConfig<'preferences'> = {
  slug: 'preferences',
  admin: {
    useAsTitle: 'key',
    defaultColumns: ['key', 'value', 'description'],
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}
