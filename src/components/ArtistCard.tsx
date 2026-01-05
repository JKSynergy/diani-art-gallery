import Link from 'next/link'

interface ArtistCardProps {
  artist: {
    id: string
    name: string
    slug: string
    country: string
    bio: string
    image: string
    featured?: boolean
    artworkCount: number
  }
  className?: string
}

export default function ArtistCard({ artist, className = '' }: ArtistCardProps) {
  return (
    <div className={`text-center group ${className}`}>
      <Link href={`/artists/${artist.slug}`}>
        <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full overflow-hidden group-hover:shadow-lg transition-shadow">
          {/* Placeholder for artist image - replace with actual Image component */}
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-600 text-sm">Photo: {artist.name}</span>
          </div>
        </div>
      </Link>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold group-hover:text-primary-600 transition-colors">
          <Link href={`/artists/${artist.slug}`}>
            {artist.name}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm font-medium">{artist.country}</p>
        <p className="text-gray-600 text-sm line-clamp-3 max-w-xs mx-auto">
          {artist.bio}
        </p>
        <p className="text-xs text-gray-500">
          {artist.artworkCount} artwork{artist.artworkCount !== 1 ? 's' : ''} available
        </p>
        <div className="pt-2">
          <Link 
            href={`/artists/${artist.slug}`} 
            className="btn-outline group-hover:btn-primary transition-all text-sm px-4 py-2"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}