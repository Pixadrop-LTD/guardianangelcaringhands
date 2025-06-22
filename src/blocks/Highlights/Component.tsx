import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs' // Assuming Shadcn tabs are here
import { Media } from '@/payload-types'
import Image from 'next/image' // Assuming Next.js Image component
import React from 'react'

interface Program {
  title: string
  description: string
  image: Media
}

interface HighlightsBlockProps {
  blockType: 'highlights'
  title: string
  subtitle?: string
  programs: Program[]
}

const HighlightsBlock: React.FC<HighlightsBlockProps> = ({ title, subtitle, programs }) => {
  if (!programs || programs.length === 0) {
    return null // Don't render if there are no programs
  }

  // Default to the first program's title as the initial tab value
  const initialTabValue = programs[0]?.title?.replace(/\s+/g, '').toLowerCase() || ''

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{title}</h2>
        {subtitle && <p className="text-xl text-center text-gray-600 mb-8">{subtitle}</p>}

        <Tabs
          defaultValue={initialTabValue}
          orientation="vertical"
          className="flex flex-col md:flex-row"
        >
          <TabsList className="flex flex-col md:w-1/4 mr-4">
            {programs.map((program) => (
              <TabsTrigger
                key={program.title}
                value={program.title.replace(/\s+/g, '').toLowerCase()}
                className="text-left"
              >
                {program.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="md:w-3/4">
            {programs.map((program) => (
              <TabsContent
                key={program.title}
                value={program.title.replace(/\s+/g, '').toLowerCase()}
              >
                <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                  <div className="md:w-1/2">
                    {program.image && typeof program.image !== 'number' && program.image.url && (
                      <Image
                        src={program.image.url}
                        alt={program.image.alt || program.title}
                        width={program.image.width || 500}
                        height={program.image.height || 300}
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default HighlightsBlock
