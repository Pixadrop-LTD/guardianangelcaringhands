import type { Media } from '@/payload-types'

export const homeHeroImage: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Straight metallic shapes with a blue gradient',
  filename: 'home-hero.png',
}
