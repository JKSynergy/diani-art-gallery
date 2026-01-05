import { Metadata } from 'next'
import { generatePageMetadata, generateArtistSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Artist } from '@/types'

export function generateArtistMetadata(artist: Artist): Metadata {
  return generatePageMetadata({
    title: `${artist.name} - Contemporary ${artist.country} Artist | Diani Art Gallery`,
    description: `Discover original artworks by ${artist.name}, a talented contemporary artist from ${artist.country}. ${artist.bio.substring(0, 120)}... View paintings, sculptures and more.`,
    keywords: [
      `${artist.name} artist`,
      `${artist.country} contemporary art`,
      `${artist.name} paintings`,
      `African artist ${artist.name}`,
      `buy ${artist.name} art`,
      'contemporary African artist',
      `${artist.country} art gallery`,
      'East African contemporary art'
    ],
    path: `/artists/${artist.slug}`,
    images: [
      {
        url: artist.image,
        width: 1200,
        height: 630,
        alt: `${artist.name} - Contemporary Artist at Diani Art Gallery`
      }
    ],
    type: 'article'
  })
}

export function getArtistSchemas(artist: Artist) {
  const artistSchema = generateArtistSchema(artist)
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Artists', url: '/artists' },
    { name: artist.name, url: `/artists/${artist.slug}` }
  ])

  return { artistSchema, breadcrumbSchema }
}
