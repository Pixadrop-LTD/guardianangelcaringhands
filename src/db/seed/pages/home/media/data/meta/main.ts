import type { Media } from '@/payload-types'

export const homeMetaImage: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Straight metallic shapes with a blue gradient',
  filename: 'home-meta-image.webp',
}
