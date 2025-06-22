import type { Media } from '@/payload-types'

export const enrichmentActivitiesImage: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Enrichment Activities - Fostering creativity and social skills',
  filename: 'highlights-activities.png',
}
