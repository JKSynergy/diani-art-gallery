import { Metadata } from 'next'
import { generatePageMetadata, generateArtworkSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Artwork, Artist } from '@/types'

export function generateArtworkMetadata(artwork: Artwork & { artist?: Artist }): Metadata {
  const artistName = artwork.artist?.name || 'Featured Artist'
  
  return generatePageMetadata({
    title: `${artwork.title} by ${artistName} - ${artwork.medium} | Diani Art Gallery`,
    description: `${artwork.title} - Original ${artwork.medium.toLowerCase()} by ${artistName}. ${artwork.description.substring(0, 140)}... Available for purchase. ${artwork.dimensions}, ${artwork.year}.`,
    keywords: [
      `${artwork.title}`,
      `${artistName} art`,
      `buy ${artwork.medium.toLowerCase()}`,
      `${artwork.category} art`,
      'contemporary African art for sale',
      'original African paintings',
      `Kenya art gallery`,
      `${artistName} artist`,
      'African art collectors',
      'contemporary art Kenya'
    ],
    path: `/artworks/${artwork.slug}`,
    images: [
      {
        url: artwork.image,
        width: 1200,
        height: 1500,
        alt: `${artwork.title} by ${artistName} - ${artwork.medium}, ${artwork.dimensions}`
      }
    ],
    type: 'article'
  })
}

export function getArtworkSchemas(artwork: Artwork & { artist?: Artist }) {
  const artworkSchema = generateArtworkSchema(artwork)
  
  const artistName = artwork.artist?.name || 'Artist'
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Artworks', url: '/artworks' },
    { name: artwork.title, url: `/artworks/${artwork.slug}` }
  ])

  return { artworkSchema, breadcrumbSchema }
}
