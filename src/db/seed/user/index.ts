// src/db/seed/users/admin.ts
import { Payload } from 'payload';

export const seedAdminUser = async (payload: Payload): Promise<void> => {
    // Check if admin user already exists
    const existingAdmin = await payload.find({
      collection: 'users',
      where: {
        email: { equals: 'admin@example.com' },
      },
    });

    if (existingAdmin.docs.length === 0) {
      // Create admin user if it doesn't exist
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@example.com',
          name: 'Admin',
          role: 'admin',
          password: 'password', // Change this to a secure password
        },
      });
      payload.logger.info('Admin user created successfully');
    } else {
      payload.logger.error('Admin user already exists');
    }
};