import { BasePayload } from 'payload'
import { seedContactPage } from './contact'
import { seedHomePage } from './home'

export const seedPages = async (payload: BasePayload) => {
  try {
    payload.logger.info('Seeding pages...')
    await seedHomePage(payload)
    await seedContactPage(payload)
  } catch (error) {
    payload.logger.error('Error seeding pages:', error)
    throw error
  }
}
