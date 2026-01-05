'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Mock data - in a real app, this would come from an API/database
const mockArtwork = {
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
  images: [
    '/placeholder-artwork-1.jpg',
    '/placeholder-artwork-1-detail.jpg',
    '/placeholder-artwork-1-side.jpg'
  ],
  available: true,
  featured: true,
  description: 'A vibrant interpretation of the Kenyan coastline at sunset, capturing the ethereal beauty of Diani Beach. This piece explores the intersection of traditional coastal life with contemporary artistic expression.',
  longDescription: `This stunning oil painting represents a masterful blend of traditional techniques with contemporary vision. Amara Okafor has captured the essence of Kenya's coastal beauty in this evocative piece, using a rich palette that mirrors the warm hues of a Diani Beach sunset.

The composition draws the viewer into a meditative state, inviting contemplation of the natural world's inherent harmony. The brushwork demonstrates both technical skill and emotional depth, creating a piece that speaks to both seasoned collectors and newcomers to contemporary African art.

Created during the artist's residency at Diani Art Gallery, this work represents a significant milestone in Okafor's ongoing exploration of coastal themes and environmental consciousness.`,
  specifications: {
    medium: 'Oil on Canvas',
    dimensions: '120 x 90 cm (47.2 x 35.4 inches)',
    year: '2024',
    signature: 'Signed and dated by the artist',
    frame: 'Unframed (framing available upon request)',
    condition: 'Excellent',
    provenance: 'Direct from the artist\'s studio'
  },
  shipping: {
    domestic: 'Free shipping within Kenya',
    international: 'International shipping available (costs calculated at checkout)',
    packaging: 'Professional art shipping with full insurance',
    timeframe: '5-10 business days for delivery'
  },
  certificate: true,
  tags: ['coastal', 'sunset', 'kenyan art', 'contemporary', 'oil painting', 'landscape']
}

const relatedArtworks = [
  {
    id: '2',
    title: 'Ocean Memories',
    artist: 'Amara Okafor',
    artistSlug: 'amara-okafor',
    slug: 'ocean-memories',
    price: 950,
    image: '/placeholder-artwork-2.jpg',
    available: true
  },
  {
    id: '3',
    title: 'Tidal Rhythms',
    artist: 'Amara Okafor',
    artistSlug: 'amara-okafor',
    slug: 'tidal-rhythms',
    price: 1100,
    image: '/placeholder-artwork-3.jpg',
    available: true
  },
  {
    id: '4',
    title: 'Baobab Stories',
    artist: 'James Mwangi',
    artistSlug: 'james-mwangi',
    slug: 'baobab-stories',
    price: 1100,
    image: '/placeholder-artwork-4.jpg',
    available: true
  }
]

export default function ArtworkDetailPage() {
  const params = useParams()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showReservationModal, setShowReservationModal] = useState(false)

  const artwork = mockArtwork // In real app, fetch by params.slug

  const handleAddToCart = () => {
    // Handle add to cart functionality
    console.log('Added to cart:', { artworkId: artwork.id, quantity })
    alert('Added to cart! (This would integrate with your cart system)')
  }

  const handleReserveNow = () => {
    setShowReservationModal(true)
  }

  const handleBuyNow = () => {
    // Handle immediate purchase
    console.log('Buy now:', { artworkId: artwork.id })
    alert('Redirecting to checkout... (This would integrate with your payment system)')
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/artworks" className="hover:text-primary-600">Artworks</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{artwork.title}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {artwork.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 bg-gray-200 rounded-md overflow-hidden ${
                    selectedImageIndex === index ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Artwork Details */}
          <div className="mt-8 lg:mt-0">
            <div className="space-y-6">
              {/* Title and Artist */}
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                  {artwork.title}
                </h1>
                <p className="text-xl text-gray-600">
                  by <Link href={`/artists/${artwork.artistSlug}`} className="hover:text-primary-600 transition-colors font-medium">
                    {artwork.artist}
                  </Link>
                </p>
              </div>

              {/* Price and Availability */}
              <div className="border-t border-b border-gray-200 py-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ${artwork.price.toLocaleString()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    artwork.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {artwork.available ? 'Available' : 'Sold'}
                  </span>
                </div>
                
                {artwork.available && (
                  <div className="space-y-3">
                    <div className="flex space-x-3">
                      <button
                        onClick={handleBuyNow}
                        className="flex-1 btn-primary py-3 text-center font-semibold"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={handleReserveNow}
                        className="flex-1 btn-outline py-3 text-center font-semibold"
                      >
                        Reserve (10% deposit)
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {artwork.description}
                </p>
                <details className="group">
                  <summary className="cursor-pointer text-primary-600 hover:text-primary-700 font-medium">
                    Read more
                  </summary>
                  <div className="mt-3 text-gray-700 leading-relaxed space-y-4">
                    {artwork.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-lg font-semibold mb-3">Specifications</h2>
                <dl className="space-y-2">
                  {Object.entries(artwork.specifications).map(([key, value]) => (
                    <div key={key} className="flex">
                      <dt className="w-1/3 text-sm font-medium text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </dt>
                      <dd className="w-2/3 text-sm text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Shipping Info */}
              <div>
                <h2 className="text-lg font-semibold mb-3">Shipping & Delivery</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {artwork.shipping.domestic}</li>
                  <li>• {artwork.shipping.international}</li>
                  <li>• {artwork.shipping.packaging}</li>
                  <li>• {artwork.shipping.timeframe}</li>
                </ul>
              </div>

              {/* Certificate */}
              {artwork.certificate && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-blue-600 text-xl">🏆</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">
                        Certificate of Authenticity
                      </h3>
                      <p className="text-sm text-blue-600">
                        This artwork comes with a certificate of authenticity from Diani Art Gallery
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h2 className="text-lg font-semibold mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Artworks */}
        <section className="mt-16">
          <h2 className="text-2xl font-serif font-bold mb-8">Related Artworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArtworks.map((relatedArtwork) => (
              <div key={relatedArtwork.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <Link href={`/artworks/${relatedArtwork.slug}`}>
                  <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300"></div>
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    <Link href={`/artworks/${relatedArtwork.slug}`}>
                      {relatedArtwork.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-2">
                    by <Link href={`/artists/${relatedArtwork.artistSlug}`} className="hover:text-primary-600 transition-colors">
                      {relatedArtwork.artist}
                    </Link>
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      ${relatedArtwork.price.toLocaleString()}
                    </span>
                    <Link 
                      href={`/artworks/${relatedArtwork.slug}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Reserve This Artwork</h3>
            <p className="text-gray-600 mb-6">
              Reserve "{artwork.title}" with a 10% deposit (${(artwork.price * 0.1).toLocaleString()}). 
              You'll have 7 days to complete the purchase.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowReservationModal(false)}
                className="flex-1 btn-outline py-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowReservationModal(false)
                  alert('Redirecting to reservation payment...')
                }}
                className="flex-1 btn-primary py-2"
              >
                Pay Deposit
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}