import type { Media } from '@/payload-types'

export const caseSkillImage: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: "Life Skills Case Study - James's Journey to Independence",
  filename: 'case-skill.png',
}
