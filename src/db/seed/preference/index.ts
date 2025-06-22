import { Payload } from 'payload';

export const seedPreference = async (payload: Payload) => {
    payload.logger.info('Finishing database seeding...')
    // Check if the seedingComplete entry already exists
    const existingConfig = await payload.find({
      collection: 'preferences', // Use the Config collection's slug
      where: {
        key: { equals: 'seedingComplete' },
      },
    });

    if (existingConfig.docs.length === 0) {
      // Create the entry if it doesn't exist
      await payload.create({
        collection: 'preferences', // Use the Config collection's slug
        data: {
          key: 'seeding-complete',
          value: '1',
          description: 'Indicates whether the database seeding process has completed.',
          updatedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        },
      });
      payload.logger.info('Preference seeder completed: seedingComplete set to 1');
    } else {
      payload.logger.error('Preference seeder skipped: seedingComplete already exists');
    }
};