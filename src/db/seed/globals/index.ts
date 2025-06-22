import { BasePayload } from 'payload'
import { seedFooter } from './footer'
import { seedHeader } from './header'

export const seedGlobals = async (payload: BasePayload) => {
  payload.logger.info('Seeding globals...')
  await seedHeader(payload)
  await seedFooter(payload)
}
