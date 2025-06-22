import type { Media } from '@/payload-types'

export const caseEducationImage: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: "Educational Support Case Study - Sarah's Journey",
  filename: 'case-education.png',
}
