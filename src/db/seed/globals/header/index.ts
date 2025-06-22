import { BasePayload } from 'payload'

export const seedHeader = async (payload: BasePayload) => {
    
  const contactPages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1,
    pagination: false,
    overrideAccess: false,
    where: {
      slug: {
        equals: 'contact',
      },
    },
  })

  if (!contactPages.docs.length || !contactPages.docs[0]) throw new Error('Contact page not found')

  payload.updateGlobal({
    slug: 'header',
    data: {
      navItems: [
        {
          link: {
            type: 'custom',
            label: 'Posts',
            url: '/posts',
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Contact',
            reference: {
              relationTo: 'pages',
              value: contactPages.docs[0].id,
            },
          },
        },
      ],
    },
  })
}
