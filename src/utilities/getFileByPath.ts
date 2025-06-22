import fs from 'fs/promises'
import path from 'path'
import type { File } from 'payload'

export async function getFileByPath(filePath: string, callback?: (err: any) => void): Promise<File> {
  try {
    const absolutePath = path.resolve(process.cwd(), filePath)
    const data = await fs.readFile(absolutePath)
    const extension = filePath.split('.').pop() || 'webp'
    return {
      data: Buffer.from(data),
      mimetype: `image/${extension}`,
      size: data.byteLength,
      name: path.basename(filePath) || `file-${Date.now()}`,
    }
  } catch (error) {
    if(callback) callback(error)
    throw new Error(`Failed to fetch file from ${filePath}, status: ${error}`)
  }
}
