import type { Media } from '@/payload-types'

export const caseWellnessImage: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Health & Wellness Case Study',
  filename: `case-wellness.png`,
}
