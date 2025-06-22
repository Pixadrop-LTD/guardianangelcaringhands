import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    
      const path = searchParams.get('path')

    if (!path) {
      return NextResponse.json({ message: 'Path parameter is required' }, { status: 400 })
    }

    revalidatePath(path)
    revalidateTag('pages-sitemap')

    return NextResponse.json(
      { revalidated: true, message: `Path ${path} revalidated` },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ message: 'Error revalidating', error }, { status: 500 })
  }
}
