import { BasePayload } from 'payload'
import { seedContactBlock } from './contact'

export async function seedBlocks(payload: BasePayload) {
  payload.logger.info('Seeding blocks...')
  await seedContactBlock(payload)
}
