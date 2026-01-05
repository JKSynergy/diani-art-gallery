import Link from 'next/link'

interface ArtworkCardProps {
  artwork: {
    id: string
    title: string
    artist: string
    artistSlug: string
    slug: string
    medium: string
    dimensions: string
    year: number
    price: number
    currency: string
    image: string
    available: boolean
    featured?: boolean
    description?: string
  }
  className?: string
}

export default function ArtworkCard({ artwork, className = '' }: ArtworkCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group ${className}`}>
      <Link href={`/artworks/${artwork.slug}`}>
        <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
          {/* Placeholder for artwork image - replace with actual Image component */}
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <span className="text-gray-600 text-sm">Image: {artwork.title}</span>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            <Link href={`/artworks/${artwork.slug}`}>
              {artwork.title}
            </Link>
          </h3>
          {!artwork.available && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full ml-2 flex-shrink-0">
              Sold
            </span>
          )}
          {artwork.featured && artwork.available && (
            <span className="bg-accent-100 text-accent-800 text-xs font-medium px-2 py-1 rounded-full ml-2 flex-shrink-0">
              Featured
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-2">
          by <Link href={`/artists/${artwork.artistSlug}`} className="hover:text-primary-600 transition-colors">
            {artwork.artist}
          </Link>
        </p>
        <p className="text-sm text-gray-500 mb-3">
          {artwork.medium} • {artwork.dimensions} • {artwork.year}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${artwork.price.toLocaleString()}
          </span>
          {artwork.available && (
            <Link 
              href={`/artworks/${artwork.slug}`}
              className="btn-primary text-sm px-4 py-2"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}