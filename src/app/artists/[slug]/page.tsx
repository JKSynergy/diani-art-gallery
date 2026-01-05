'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArtworkCard from '@/components/ArtworkCard'
import Link from 'next/link'

// Mock data - in a real app, this would come from an API/database
const mockArtist = {
  id: '1',
  name: 'Amara Okafor',
  slug: 'amara-okafor',
  country: 'Nigeria',
  bio: 'Contemporary painter known for vibrant coastal landscapes and abstract expressionism',
  longBio: `Amara Okafor is a contemporary Nigerian artist whose work explores the intersection of traditional African aesthetics with modern artistic expression. Born in Lagos in 1985, she developed her distinctive style during her time studying Fine Arts at the University of Lagos, later refining her technique through residencies across East Africa.

Her work is characterized by bold use of color, dynamic compositions, and a deep connection to coastal environments. Having spent significant time in Kenya's coastal region, particularly around Diani Beach, her paintings capture the essence of the Indian Ocean's ever-changing moods and the vibrant life along its shores.

Okafor's paintings have been exhibited in galleries across Africa, including the National Museum of Kenya, Lagos National Theatre, and numerous private collections. Her work speaks to themes of environmental consciousness, cultural identity, and the universal human connection to natural spaces.

Currently based between Lagos and Diani Beach, she continues to create works that bridge her Nigerian heritage with her adopted Kenyan coastal home, resulting in a unique artistic voice that resonates across continental boundaries.`,
  image: '/placeholder-artist-1.jpg',
  featured: true,
  artworkCount: 12,
  exhibitions: [
    {
      title: 'Coastal Rhythms',
      venue: 'Diani Art Gallery',
      year: 2024,
      type: 'Solo'
    },
    {
      title: 'Contemporary Visions',
      venue: 'National Museum of Kenya',
      year: 2023,
      type: 'Group'
    },
    {
      title: 'Ocean Stories',
      venue: 'Lagos National Theatre',
      year: 2023,
      type: 'Solo'
    }
  ],
  awards: [
    'Best Contemporary Artist - East Africa Art Awards 2024',
    'Emerging Artist Prize - Lagos Art Fair 2023',
    'Cultural Heritage Award - Nigerian Arts Council 2022'
  ],
  education: [
    'MFA in Fine Arts, University of Lagos, 2010',
    'Artist Residency, Diani Art Gallery, 2022-2023',
    'Workshop in Contemporary Techniques, Cape Town Art Institute, 2019'
  ],
  statement: `My work is a dialogue between the landscapes that have shaped me - the bustling energy of Lagos and the serene beauty of Kenya's coast. Through paint, I explore how we, as humans, relate to our environment and how our surroundings become part of our identity.

Each piece begins with observation - the way light hits water, how colors shift with the time of day, the patterns created by wind on sand. But it's more than just representation; it's about capturing the emotion and memory embedded in these moments.

I believe art should be a bridge - connecting cultures, generations, and experiences. My hope is that viewers, regardless of their background, can find something familiar in these coastal scenes, perhaps remembering their own moments of peace by the water.`,
  contact: {
    email: 'hello@amaraokafor.art',
    website: 'www.amaraokafor.art',
    instagram: '@amaraokafor_art',
    phone: '+254 700 123 456'
  }
}

const mockArtistArtworks = [
  {
    id: '1',
    title: 'Coastal Serenity',
    artist: 'Amara Okafor',
    artistSlug: 'amara-okafor',
    slug: 'coastal-serenity',
    medium: 'Oil on Canvas',
    dimensions: '120 x 90 cm',
    year: 2024,
    price: 1200,
    currency: 'USD',
    image: '/placeholder-artwork-1.jpg',
    available: true,
    featured: true,
    description: 'A vibrant interpretation of the Kenyan coastline at sunset'
  },
  {
    id: '2',
    title: 'Ocean Memories',
    artist: 'Amara Okafor',
    artistSlug: 'amara-okafor',
    slug: 'ocean-memories',
    medium: 'Acrylic on Canvas',
    dimensions: '100 x 80 cm',
    year: 2024,
    price: 950,
    currency: 'USD',
    image: '/placeholder-artwork-2.jpg',
    available: true,
    featured: false,
    description: 'Exploring the interplay of memory and landscape'
  },
  {
    id: '3',
    title: 'Tidal Rhythms',
    artist: 'Amara Okafor',
    artistSlug: 'amara-okafor',
    slug: 'tidal-rhythms',
    medium: 'Mixed Media',
    dimensions: '90 x 70 cm',
    year: 2023,
    price: 1100,
    currency: 'USD',
    image: '/placeholder-artwork-3.jpg',
    available: false,
    featured: true,
    description: 'Abstract representation of ocean currents'
  },
  {
    id: '4',
    title: 'Sunset Reflections',
    artist: 'Amara Okafor',
    artistSlug: 'amara-okafor',
    slug: 'sunset-reflections',
    medium: 'Oil on Canvas',
    dimensions: '80 x 60 cm',
    year: 2023,
    price: 850,
    currency: 'USD',
    image: '/placeholder-artwork-4.jpg',
    available: true,
    featured: false,
    description: 'Capturing the golden hour at Diani Beach'
  }
]

export default function ArtistDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState('artworks')

  const artist = mockArtist // In real app, fetch by params.slug
  const artworks = mockArtistArtworks // In real app, fetch artworks by artist

  const availableArtworks = artworks.filter(artwork => artwork.available)
  const soldArtworks = artworks.filter(artwork => !artwork.available)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/artists" className="hover:text-primary-600">Artists</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{artist.name}</span>
        </nav>
      </div>

      {/* Artist Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Artist Image */}
          <div className="lg:col-span-1">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-600">Photo: {artist.name}</span>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Email:</span>
                  <br />
                  <a href={`mailto:${artist.contact.email}`} className="text-primary-600 hover:text-primary-700">
                    {artist.contact.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Website:</span>
                  <br />
                  <a href={`https://${artist.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    {artist.contact.website}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Instagram:</span>
                  <br />
                  <a href={`https://instagram.com/${artist.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    {artist.contact.instagram}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span>
                  <br />
                  <a href={`tel:${artist.contact.phone}`} className="text-primary-600 hover:text-primary-700">
                    {artist.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Artist Information */}
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                  {artist.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{artist.country}</p>
                <p className="text-lg text-gray-700">{artist.bio}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{availableArtworks.length}</div>
                  <div className="text-sm text-gray-600">Available Works</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{artist.exhibitions.length}</div>
                  <div className="text-sm text-gray-600">Exhibitions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{artist.awards.length}</div>
                  <div className="text-sm text-gray-600">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'artworks', label: 'Artworks', count: artworks.length },
              { id: 'biography', label: 'Biography' },
              { id: 'exhibitions', label: 'Exhibitions', count: artist.exhibitions.length },
              { id: 'statement', label: 'Artist Statement' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'artworks' && (
          <div>
            {availableArtworks.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold mb-6">Available Artworks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableArtworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                  ))}
                </div>
              </div>
            )}

            {soldArtworks.length > 0 && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Sold Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {soldArtworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                  ))}
                </div>
              </div>
            )}

            {artworks.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🎨</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No artworks available</h3>
                <p className="text-gray-600">Check back soon for new works from this artist</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'biography' && (
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {artist.longBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <ul className="space-y-2">
                  {artist.education.map((item, index) => (
                    <li key={index} className="text-gray-700">• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Awards & Recognition</h3>
                <ul className="space-y-2">
                  {artist.awards.map((award, index) => (
                    <li key={index} className="text-gray-700">• {award}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'exhibitions' && (
          <div className="max-w-4xl">
            <div className="space-y-6">
              {artist.exhibitions.map((exhibition, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-6 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{exhibition.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      exhibition.type === 'Solo' 
                        ? 'bg-primary-100 text-primary-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {exhibition.type} Exhibition
                    </span>
                  </div>
                  <p className="text-gray-600">{exhibition.venue}</p>
                  <p className="text-sm text-gray-500">{exhibition.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'statement' && (
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {artist.statement.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed italic">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                — {artist.name}, {new Date().getFullYear()}
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}