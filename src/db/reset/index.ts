import config from '@payload-config'
import { CollectionSlug, getPayload, GlobalSlug } from 'payload'

const collections: CollectionSlug[] = ['media', 'pages', 'form-submissions', 'search', 'forms', 'users', 'preferences']
const globals: GlobalSlug[] = ['header', 'footer']

export const runAllSeeders = async () => {

  const payload = await getPayload({ config })

  try {   
     
    payload.logger.info('Resetting database...')

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

    payload.logger.info('Database reset successfully.')
  } catch (error) {
    payload.logger.error('Error resetting database:', error)
  }
}

runAllSeeders()
