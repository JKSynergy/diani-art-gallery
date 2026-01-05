import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artists - Diani Art Gallery',
  description: 'Discover talented contemporary artists from East Africa and around the world showcased at Diani Art Gallery.',
}

// Mock data for demonstration
const featuredArtists = [
  {
    id: '1',
    name: 'Amara Okafor',
    slug: 'amara-okafor',
    country: 'Nigeria',
    bio: 'Contemporary painter known for vibrant coastal landscapes and abstract expressionism',
    image: '/placeholder-artist-1.jpg',
    featured: true,
    artworkCount: 12
  },
  {
    id: '2',
    name: 'David Kiprotich',
    slug: 'david-kiprotich',
    country: 'Kenya',
    bio: 'Sculptor working with recycled materials to create powerful statements about environmental conservation',
    image: '/placeholder-artist-2.jpg',
    featured: true,
    artworkCount: 8
  },
  {
    id: '3',
    name: 'Fatima Al-Zahra',
    slug: 'fatima-al-zahra',
    country: 'Morocco',
    bio: 'Mixed media artist exploring themes of identity and cultural heritage through contemporary techniques',
    image: '/placeholder-artist-3.jpg',
    featured: true,
    artworkCount: 15
  }
]

const allArtists = [
  ...featuredArtists,
  {
    id: '4',
    name: 'James Mwangi',
    slug: 'james-mwangi',
    country: 'Kenya',
    bio: 'Traditional meets contemporary in this artist\'s stunning ceramic works',
    image: '/placeholder-artist-4.jpg',
    featured: false,
    artworkCount: 6
  },
  {
    id: '5',
    name: 'Sarah Williams',
    slug: 'sarah-williams',
    country: 'South Africa',
    bio: 'Photography artist capturing the essence of African wildlife and landscapes',
    image: '/placeholder-artist-5.jpg',
    featured: false,
    artworkCount: 20
  },
  {
    id: '6',
    name: 'Omar Hassan',
    slug: 'omar-hassan',
    country: 'Tanzania',
    bio: 'Painter specializing in portraiture and social commentary through art',
    image: '/placeholder-artist-6.jpg',
    featured: false,
    artworkCount: 10
  }
]

export default function ArtistsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our Artists
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Meet the exceptional talent behind the artwork that graces our gallery walls
          </p>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-white">Featured Artists</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Spotlight on our most celebrated contemporary artists
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300">
                    {/* Placeholder for artist image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <span className="text-6xl">👤</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">{artist.name}</h3>
                  <p className="text-accent-200 mb-2">{artist.country}</p>
                  <p className="text-white/80 mb-4 line-clamp-2">{artist.bio}</p>
                  <p className="text-sm text-white/70 mb-4">{artist.artworkCount} artworks</p>
                  <Link 
                    href={`/artists/${artist.slug}`} 
                    className="bg-white text-primary-900 hover:bg-accent-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Artists Grid */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">All Artists</h2>
            <p className="text-xl text-gray-600">
              Browse our complete roster of talented artists
            </p>
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="btn-primary">All Artists</button>
            <button className="btn-outline">Painters</button>
            <button className="btn-outline">Sculptors</button>
            <button className="btn-outline">Photographers</button>
            <button className="btn-outline">Mixed Media</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allArtists.map((artist) => (
              <Link 
                key={artist.id} 
                href={`/artists/${artist.slug}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl">👤</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-primary-900">{artist.name}</h3>
                <p className="text-primary-600 text-sm mb-2 font-medium">{artist.country}</p>
                <p className="text-neutral-800 text-sm line-clamp-2 mb-2">{artist.bio}</p>
                <p className="text-xs text-neutral-600 font-medium">{artist.artworkCount} artworks</p>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-serif font-bold mb-4">Interested in Exhibiting?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional contemporary artists to showcase at Diani Art Gallery. 
              Submit your portfolio for consideration.
            </p>
            <Link href="/artists/apply" className="btn-primary text-lg px-8 py-3">
              Apply to Exhibit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}