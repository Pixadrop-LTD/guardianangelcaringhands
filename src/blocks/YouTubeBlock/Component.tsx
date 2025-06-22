import React from 'react'

import type { YouTubeBlock } from '@/payload-types'

export const YouTubeBlockComponent: React.FC<YouTubeBlock> = ({ youTubeURL }) => {
  // Function to extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url: string): string | null => {
    if (!url) return null

    // Regular expression to extract the video ID from different YouTube URL formats
    const regExp =
      /^.*(?:(?:youtu\.be\/)|(?:v\/)|(?:.+[?&]v=)|(?:.+[?&]feature=bearembed))([^"&?\/]{11})/
    const match = url.match(regExp)

    return match && match[1] ? match[1] : null
  }

  const videoId = getYouTubeVideoId(youTubeURL)

  if (!videoId) {
    return <p className="text-red-500">Invalid YouTube URL provided.</p> // Or some other error handling/placeholder
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
      <iframe
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  )
}
