'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { FaArrowRightLong } from 'react-icons/fa6'

export const HomeHero: React.FC<Page['hero']> = ({
  links,
  media,
  title,
  description,
  youTubeVideoId,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  // Set header theme based on hero section, assuming dark content over light background
  useEffect(() => {
    setHeaderTheme('light')

    // Cleanup function to reset theme on unmount
    return () => {
      setHeaderTheme('light')
    }
  }, [setHeaderTheme])

  return (
    <section
      className="relative -mt-[10.4rem] flex items-center justify-center h-[80vh] overflow-hidden"
      data-theme="light"
    >
      {/* Background Layer: Full-bleed media with increased blur and reduced opacity */}
      <div className="absolute inset-0 w-full h-full">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="object-cover -z-10 blur-md opacity-30" resource={media} />
        )}
        {/* Semi-transparent Overlay for better text readability */}
        {/* Using a gradient from a primary color variant to transparent as per guidelines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(45,93,123,0.3) 0%, rgba(45,93,123,0.7) 100%)',
            opacity: 0.7, // Adjust opacity slightly if needed for better contrast
          }}
        ></div>
      </div>

      {/* Content Layer: Centered and responsive flex container with subtle background/blur for readability */}
      {/* Added padding, background color with opacity, backdrop blur, and rounded corners */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left text-white p-8 md:p-12 mx-auto">
        {/* Media/YouTube Section (Left on larger screens) */}
        {/* Adjusted right margin, rounded corners, and shadow */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 xl:mr-16 overflow-hidden rounded-xl shadow-2xl relative aspect-video transition duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-xl">
          {youTubeVideoId ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              // Parameters to hide controls, info, related videos, and enable autoplay/loop/mute
              src={`https://www.youtube.com/embed/${youTubeVideoId}?controls=0&showinfo=0&rel=0`}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Embedded YouTube Video"
              allowFullScreen // Re-enabled for potential browser support, controls hidden via URL params
            ></iframe>
          ) : (
            // Show static media if no YouTube video is provided for this section
            media &&
            typeof media === 'object' && (
              <Media imgClassName="object-cover w-full h-full" resource={media} />
            )
          )}
        </div>

        {/* Text Content Section (Right on larger screens) */}
        {/* Ensured max-width for better readability of longer text blocks */}
        <div className="w-full lg:w-1/2 max-w-2xl">
          {/* Render title as h1 with refined styling based on typography guidelines */}
          {/* Using Montserrat font implicitly via global styles, added font-extrabold and drop-shadow */}
          {title && (
            <h1 className="mb-4 text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
              {title}
            </h1>
          )}
          {/* Render description using RichText component with refined styling */}
          {/* Using Source Serif Pro implicitly, added text-lg, leading-relaxed, and drop-shadow */}
          {description && (
            <RichText
              data={description}
              className="mb-8 prose prose-invert max-w-none text-lg leading-relaxed drop-shadow-lg border-l-4 border-primary-200 pl-4"
            />
          )}
          {/* Links Container: Flex layout with gaps, adjusted top margin */}
          {Array.isArray(links) && links.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
              {links.map(({ link }, i) => {
                // Ensure the link object and its 'label' property exist and have appearance
                const buttonText = link && link.label ? link.label : 'Learn More' // Default text if label is missing
                const isPrimary = link && link.appearance === 'default'
                const isSecondary = link && link.appearance === 'secondary'

                return (
                  <CMSLink
                    key={i}
                    url={link.url}
                    reference={link.reference}
                    newTab={link.newTab}
                    type={link.type}
                    variant={isPrimary ? 'default' : isSecondary ? 'secondary' : undefined}
                    size="xl"
                    appearance="gradient"
                    className="transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                    icon={
                      <FaArrowRightLong className="text-primary-200" style={{ fontSize: '18px' }} />
                    }
                    iconPosition="end"
                  >
                    <span>{buttonText}</span>
                  </CMSLink>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
