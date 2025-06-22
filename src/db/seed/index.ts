import { BasePayload, CollectionSlug, GlobalSlug } from 'payload'
import { seedBlocks } from './blocks'
import { seedGlobals } from './globals'
import { seedPages } from './pages'
import { seedAdminUser } from './user'
import { seedPreference } from './preference'
import { getPayload } from 'payload'
import config from '@payload-config'

const collections: CollectionSlug[] = ['media', 'pages', 'form-submissions', 'search', 'forms', 'users', 'preferences']
const globals: GlobalSlug[] = ['header', 'footer']

export const runAllSeeders = async () => {

  const payload = await getPayload({ config })

  try {   
     
    payload.logger.info('Seeding database...')

    // we need to clear the media directory before seeding
    // as well as the collections and globals
    payload.logger.info(`— Clearing collections and globals...`)

    // clear the database
    await Promise.all(
      globals.map((global) =>
        payload.updateGlobal({
          slug: global,
          data: {
            navItems: [],
          },
          depth: 0,
          context: {
            disableRevalidate: true,
          },
        }),
      ),
    )

    await Promise.all(
      collections.map((collection) => payload.db.deleteMany({ collection, where: {} })),
    )

    await Promise.all(
      collections
        .filter((collection) => {
          const colConfig = payload.collections[collection]?.config
          return colConfig && 'versions' in colConfig && colConfig.versions
        })
        .map((collection) => payload.db.deleteVersions({ collection, where: {} })),
    )

    await seedAdminUser(payload)
    await seedBlocks(payload)
    await seedPages(payload)
    await seedGlobals(payload)
    await seedPreference(payload)
    payload.logger.info('All seeders executed successfully.')
  } catch (error) {
    payload.logger.error('Error running seeders:', error)
  }
}

runAllSeeders()
