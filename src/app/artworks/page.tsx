'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

// Mock data for demonstration
const mockArtworks = [
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
    title: 'Urban Dreams',
    artist: 'David Kiprotich',
    artistSlug: 'david-kiprotich',
    slug: 'urban-dreams',
    medium: 'Bronze Sculpture',
    dimensions: '45 x 30 x 25 cm',
    year: 2023,
    price: 850,
    currency: 'USD',
    image: '/placeholder-artwork-2.jpg',
    available: true,
    featured: false,
    description: 'A contemporary sculpture exploring modern African urban life'
  },
  {
    id: '3',
    title: 'Heritage Tapestry',
    artist: 'Fatima Al-Zahra',
    artistSlug: 'fatima-al-zahra',
    slug: 'heritage-tapestry',
    medium: 'Mixed Media',
    dimensions: '100 x 80 cm',
    year: 2024,
    price: 950,
    currency: 'USD',
    image: '/placeholder-artwork-3.jpg',
    available: false,
    featured: true,
    description: 'An exploration of North African cultural motifs in contemporary context'
  },
  {
    id: '4',
    title: 'Monsoon Reflections',
    artist: 'Priya Sharma',
    artistSlug: 'priya-sharma',
    slug: 'monsoon-reflections',
    medium: 'Acrylic on Canvas',
    dimensions: '90 x 70 cm',
    year: 2024,
    price: 750,
    currency: 'USD',
    image: '/placeholder-artwork-4.jpg',
    available: true,
    featured: false,
    description: 'A colorful representation of the Indian Ocean monsoon seasons'
  },
  {
    id: '5',
    title: 'Digital Souls',
    artist: 'Marcus Thompson',
    artistSlug: 'marcus-thompson',
    slug: 'digital-souls',
    medium: 'Digital Print',
    dimensions: '60 x 40 cm',
    year: 2024,
    price: 300,
    currency: 'USD',
    image: '/placeholder-artwork-5.jpg',
    available: true,
    featured: false,
    description: 'Contemporary digital art exploring human connection in the digital age'
  },
  {
    id: '6',
    title: 'Baobab Stories',
    artist: 'James Mwangi',
    artistSlug: 'james-mwangi',
    slug: 'baobab-stories',
    medium: 'Wood Carving',
    dimensions: '80 x 15 x 15 cm',
    year: 2023,
    price: 1100,
    currency: 'USD',
    image: '/placeholder-artwork-6.jpg',
    available: true,
    featured: true,
    description: 'Traditional Kenyan wood carving with contemporary artistic interpretation'
  }
]

export default function ArtworksPage() {
  const [selectedMedium, setSelectedMedium] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [selectedAvailability, setSelectedAvailability] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('newest')

  const mediums = ['all', 'Oil on Canvas', 'Acrylic on Canvas', 'Bronze Sculpture', 'Wood Carving', 'Mixed Media', 'Digital Print']
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2000', label: '$1,000 - $2,000' },
    { value: 'over-2000', label: 'Over $2,000' }
  ]

  const filteredArtworks = mockArtworks.filter(artwork => {
    const matchesMedium = selectedMedium === 'all' || artwork.medium === selectedMedium
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAvailability = selectedAvailability === 'all' || 
                               (selectedAvailability === 'available' && artwork.available) ||
                               (selectedAvailability === 'sold' && !artwork.available)
    
    let matchesPrice = true
    if (selectedPriceRange !== 'all') {
      const price = artwork.price
      switch (selectedPriceRange) {
        case 'under-500':
          matchesPrice = price < 500
          break
        case '500-1000':
          matchesPrice = price >= 500 && price <= 1000
          break
        case '1000-2000':
          matchesPrice = price > 1000 && price <= 2000
          break
        case 'over-2000':
          matchesPrice = price > 2000
          break
      }
    }

    return matchesMedium && matchesSearch && matchesAvailability && matchesPrice
  })

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'title':
        return a.title.localeCompare(b.title)
      case 'artist':
        return a.artist.localeCompare(b.artist)
      case 'newest':
      default:
        return b.year - a.year
    }
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Artworks</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore our curated collection of contemporary art from East African and international artists
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <h2 className="text-lg font-semibold mb-4">Filter & Search</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by title or artist..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Medium Filter */}
              <div className="mb-6">
                <label htmlFor="medium" className="block text-sm font-medium text-gray-700 mb-2">
                  Medium
                </label>
                <select
                  id="medium"
                  value={selectedMedium}
                  onChange={(e) => setSelectedMedium(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {mediums.map(medium => (
                    <option key={medium} value={medium}>
                      {medium === 'all' ? 'All Mediums' : medium}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  id="price"
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div className="mb-6">
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Artworks</option>
                  <option value="available">Available</option>
                  <option value="sold">Sold</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedMedium('all')
                  setSelectedPriceRange('all')
                  setSelectedAvailability('all')
                  setSearchTerm('')
                  setSortBy('newest')
                }}
                className="w-full text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <p className="text-gray-600">
                Showing {sortedArtworks.length} of {mockArtworks.length} artworks
              </p>
              <div className="mt-4 sm:mt-0">
                <label htmlFor="sort" className="sr-only">Sort by</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="title">Title: A to Z</option>
                  <option value="artist">Artist: A to Z</option>
                </select>
              </div>
            </div>

            {/* Artworks Grid */}
            {sortedArtworks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedArtworks.map((artwork) => (
                  <div key={artwork.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                    <Link href={`/artworks/${artwork.slug}`}>
                      <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                        {/* Placeholder for artwork image */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300"></div>
                      </div>
                    </Link>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          <Link href={`/artworks/${artwork.slug}`}>
                            {artwork.title}
                          </Link>
                        </h3>
                        {!artwork.available && (
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                            Sold
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
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🎨</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No artworks found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}