import type { CaseStudies } from '@/payload-types'
import * as React from 'react'
import {
  FaBookOpen,
  FaBrain,
  FaFutbol,
  FaGraduationCap,
  FaHeartbeat,
  FaLaptopCode,
  FaLeaf,
  FaPalette,
  FaUsers,
} from 'react-icons/fa' // Example icons, will refine

// Define the type for a single case study item based on the block configuration
type CaseStudyItem = {
  image?: any // Use a more specific type if possible, like Media | number
  youTubeVideoId?: string | null
  title: string
  description: any // Use a more specific type for rich text if available
  id?: string // Payload array items often have an ID
}

// Update the prop type to use the defined item type
type CaseStudiesBlockProps = Omit<CaseStudies, 'caseStudies'> & {
  caseStudies?: CaseStudyItem[]
}

const programIcons: { [key: string]: React.JSX.Element } = {
  'Educational Support': <FaBookOpen className="text-4xl text-color-brand-primary-dark mb-4" />,
  'Health & Wellness': <FaHeartbeat className="text-4xl text-color-brand-primary-dark mb-4" />,
  'Enrichment & Cultural': <FaPalette className="text-4xl text-color-brand-primary-dark mb-4" />,
  'Life Skills & Personal Development': (
    <FaBrain className="text-4xl text-color-brand-primary-dark mb-4" />
  ),
  'Social Integration & Community Engagement': (
    <FaUsers className="text-4xl text-color-brand-primary-dark mb-4" />
  ),
  'Recreational & Therapeutic Activities': (
    <FaFutbol className="text-4xl text-color-brand-primary-dark mb-4" />
  ),
  'Educational & Career Advancement': (
    <FaGraduationCap className="text-4xl text-color-brand-primary-dark mb-4" />
  ),
  'Digital Literacy & Technology': (
    <FaLaptopCode className="text-4xl text-color-brand-primary-dark mb-4" />
  ),
  'Environmental Awareness & Sustainability': (
    <FaLeaf className="text-4xl text-color-brand-primary-dark mb-4" />
  ),
  // Add more specific icons if needed, or a default
}

const CaseStudiesBlock: React.FC<CaseStudiesBlockProps> = (props) => {
  const { sectionTitle, sectionSubtitle, caseStudies } = props

  if (!caseStudies || caseStudies.length === 0) {
    return null // Don't render if no case studies
  }

  return (
    <div className="container mx-auto my-16 px-4">
      {sectionTitle && (
        <h2 className="text-3xl md:text-4xl font-semibold text-color-text-dark-gray text-center mb-4">
          {sectionTitle}
        </h2>
      )}
      {sectionSubtitle && (
        <p className="text-xl md:text-2xl text-color-text-medium-gray text-center mb-8">
          {sectionSubtitle}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy: CaseStudyItem, index: number) => (
          <div
            key={index}
            className="bg-color-neutral-white p-6 rounded-8px shadow-subtle flex flex-col items-center text-center"
          >
            {/* Add an icon based on the case study title or program if possible */}
            {/* For now, a generic icon or no icon */}
            {programIcons[caseStudy.title] && programIcons[caseStudy.title]}

            {/* Render video if YouTube ID is present, otherwise render image */}
            {caseStudy.youTubeVideoId ? (
              <div className="aspect-w-16 aspect-h-9 w-full mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${caseStudy.youTubeVideoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            ) : caseStudy.image && typeof caseStudy.image !== 'number' ? (
              <img
                src={caseStudy.image.url}
                alt={caseStudy.image.alt}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            ) : null}
            {caseStudy.title && (
              <h3 className="text-xl font-semibold text-color-text-dark-gray mb-2">
                {caseStudy.title}
              </h3>
            )}
            {/* Rich text rendering might require a dedicated component or library */}
            {caseStudy.description && (
              <div className="text-color-text-medium-gray text-sm leading-relaxed">
                {/* Placeholder for rich text rendering */}
                {JSON.stringify(caseStudy.description, null, 2)}
              </div>
            )}
            {/* Add an icon based on the case study title or program if possible */}
            {/* For now, a generic icon or no icon */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudiesBlock
