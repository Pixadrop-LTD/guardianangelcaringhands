import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import type { Page } from '../../../payload-types'

const safeRevalidate = async (path: string, context: any) => {
  // Skip revalidation during seeding
  if (context?.isSeeding) {
    return
  }

  try {
    // Use fetch to trigger revalidation through the API route
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
    const revalidateUrl = `${baseUrl}/api/revalidate?path=${encodeURIComponent(path)}`

    await fetch(revalidateUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    // Only log in non-seeding contexts
    if (!context?.isSeeding) {
      console.warn(`Failed to revalidate path: ${path}`, error)
    }
  }
}

export const revalidatePage: CollectionAfterChangeHook<Page> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    // Always revalidate the current page if it has a slug
    if (doc.slug) {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
      payload.logger.info(`Revalidating page at path: ${path}`)
      await safeRevalidate(path, context)
    }

    // If the page was previously published and had a different slug, revalidate that too
    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`
      payload.logger.info(`Revalidating old page at path: ${oldPath}`)
      await safeRevalidate(oldPath, context)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = async ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
    await safeRevalidate(path, context)
  }
  return doc
}
