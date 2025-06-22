import { BasePayload } from 'payload'
import { contactPage } from './config'

export const seedContactPage = async (payload: BasePayload) => {
  const form = await payload.find({
    collection: 'forms',
    where: {
      title: {
        equals: 'Contact Form',
      },
    },
  })

  if (!form || form.docs.length === 0 || !form.docs[0]) {
    throw new Error('Contact form not found')
  }

  await payload.create({
    collection: 'pages',
    depth: 0,
    data: contactPage({
      contactFormBlock: form.docs[0],
    }),
    context: {
      isSeeding: false,
    },
  })
}
