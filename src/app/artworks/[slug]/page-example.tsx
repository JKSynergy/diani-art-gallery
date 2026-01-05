/**
 * Example implementation for artwork detail pages with SEO optimizations
 * This demonstrates how to use the metadata and schema utilities
 */

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { generateArtworkMetadata, getArtworkSchemas } from './metadata'
import { generateJsonLdScript } from '@/lib/seo'
import { Artwork, Artist, ArtworkCategory } from '@/types'

// This would come from your database
async function getArtwork(slug: string): Promise<Artwork & { artist?: Artist }> {
  // TODO: Replace with actual database query
  // const artwork = await db.artwork.findUnique({ where: { slug }, include: { artist: true } })
  
  // Mock data for demonstration
  return {
    id: '1',
    title: 'Coastal Serenity',
    slug: 'coastal-serenity',
    description: 'A vibrant interpretation of the Kenyan coastline at sunset, capturing the ethereal beauty of Diani Beach.',
    medium: 'Oil on Canvas',
    dimensions: '120 x 90 cm',
    year: 2024,
    price: 1200,
    currency: 'USD',
    image: '/placeholder-artwork-1.jpg',
    available: true,
    featured: true,
    category: ArtworkCategory.PAINTING,
    condition: 'Excellent',
    artistId: '1',
    artist: {
      id: '1',
      name: 'Amara Okafor',
      slug: 'amara-okafor',
      email: 'amara@example.com',
      bio: 'Contemporary painter',
      country: 'Nigeria',
      image: '/placeholder-artist-1.jpg',
      featured: true,
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artwork = await getArtwork(params.slug)
  return generateArtworkMetadata(artwork)
}

export default async function ArtworkPage({ params }: { params: { slug: string } }) {
  const artwork = await getArtwork(params.slug)
  const { artworkSchema, breadcrumbSchema } = getArtworkSchemas(artwork)

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJsonLdScript(artworkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJsonLdScript(breadcrumbSchema) }}
      />
      
      <Navigation />
      
      {/* Artwork content goes here */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{artwork.title}</h1>
        <p className="text-xl text-gray-600 mb-2">by {artwork.artist?.name}</p>
        <p className="text-lg mb-4">{artwork.medium} - {artwork.dimensions}</p>
        <p className="text-gray-700">{artwork.description}</p>
        
        {/* Add more artwork details, images, purchase options, etc. */}
      </div>
      
      <Footer />
    </main>
  )
}
