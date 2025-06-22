import { BasePayload } from 'payload'
import { contactForm } from './config'

export const seedContactBlock = async (payload: BasePayload) => {
  try {
    await payload.create({
      collection: 'forms',
      depth: 0,
      data: contactForm,
    })
  } catch (error) {
    console.error('Error seeding contact block:', error)
  }
}