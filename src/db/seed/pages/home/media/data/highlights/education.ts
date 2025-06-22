import type { Media } from '@/payload-types'

export const educationalSupportImage: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Educational Support Program - Providing quality education and support',
  filename: 'highlights-education.png',
}
