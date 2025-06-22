import type { Media } from '@/payload-types'

export const healthWellnessImage: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Health & Wellness Program - Ensuring physical and mental well-being',
  filename: 'highlights-health.png',
}
