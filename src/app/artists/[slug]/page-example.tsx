/**
 * Example implementation for artist detail pages with SEO optimizations
 * This demonstrates how to use the metadata and schema utilities
 */

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArtworkCard from '@/components/ArtworkCard'
import { generateArtistMetadata, getArtistSchemas } from './metadata'
import { generateJsonLdScript } from '@/lib/seo'
import { Artist } from '@/types'

// This would come from your database
async function getArtist(slug: string): Promise<Artist> {
  // TODO: Replace with actual database query
  // const artist = await db.artist.findUnique({ where: { slug }, include: { artworks: true } })
  
  // Mock data for demonstration
  return {
    id: '1',
    name: 'Amara Okafor',
    slug: 'amara-okafor',
    email: 'amara@example.com',
    bio: 'Contemporary painter known for vibrant coastal landscapes and abstract expressionism',
    country: 'Nigeria',
    city: 'Lagos',
    image: '/placeholder-artist-1.jpg',
    featured: true,
    verified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    artworkCount: 12
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artist = await getArtist(params.slug)
  return generateArtistMetadata(artist)
}

export default async function ArtistPage({ params }: { params: { slug: string } }) {
  const artist = await getArtist(params.slug)
  const { artistSchema, breadcrumbSchema } = getArtistSchemas(artist)

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJsonLdScript(artistSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJsonLdScript(breadcrumbSchema) }}
      />
      
      <Navigation />
      
      {/* Artist content goes here */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
        <p className="text-xl text-gray-600">{artist.bio}</p>
        
        {/* Add more artist content, artworks, etc. */}
      </div>
      
      <Footer />
    </main>
  )
}
