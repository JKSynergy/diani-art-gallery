'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, MapPin, Users, Star } from 'lucide-react'

const currentExhibitions = [
  {
    id: '1',
    title: 'Coastal Rhythms',
    slug: 'coastal-rhythms',
    description: 'A celebration of the ocean\'s influence on contemporary East African art',
    startDate: '2024-10-15',
    endDate: '2024-12-30',
    location: 'Main Gallery',
    status: 'CURRENT',
    featured: true,
    artistCount: 8,
    artworkCount: 24
  }
]

const upcomingExhibitions = [
  {
    id: '3',
    title: 'Heritage & Innovation',
    slug: 'heritage-innovation',
    description: 'Where traditional African art meets contemporary expression',
    startDate: '2025-01-15',
    endDate: '2025-03-30',
    location: 'Main Gallery',
    status: 'UPCOMING',
    featured: true,
    artistCount: 12,
    artworkCount: 35
  }
]

const pastExhibitions = [
  {
    id: '5',
    title: 'Emerging Voices',
    slug: 'emerging-voices',
    description: 'Showcasing the next generation of East African contemporary artists',
    startDate: '2024-07-01',
    endDate: '2024-09-30',
    location: 'Gallery 2',
    status: 'PAST',
    featured: false,
    artistCount: 10,
    artworkCount: 28
  }
]

export default function ExhibitionsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const allExhibitions = [...currentExhibitions, ...upcomingExhibitions, ...pastExhibitions]

  const filteredExhibitions = allExhibitions.filter(exhibition => {
    if (activeFilter === 'all') return true
    return exhibition.status.toLowerCase() === activeFilter.toLowerCase()
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Exhibitions</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover our curated exhibitions featuring contemporary art from East Africa and beyond.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'all', label: 'All Exhibitions', count: allExhibitions.length },
              { id: 'current', label: 'Current', count: currentExhibitions.length },
              { id: 'upcoming', label: 'Upcoming', count: upcomingExhibitions.length },
              { id: 'past', label: 'Past', count: pastExhibitions.length }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeFilter === filter.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {filter.label}
                <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                  {filter.count}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Exhibitions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExhibitions.map((exhibition) => (
            <div key={exhibition.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/exhibitions/${exhibition.slug}`}>
                <div className="aspect-[4/3] bg-gray-200 rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Exhibition: {exhibition.title}</span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    exhibition.status === 'CURRENT' 
                      ? 'bg-green-100 text-green-800'
                      : exhibition.status === 'UPCOMING'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {exhibition.status}
                  </span>
                  {exhibition.featured && (
                    <Star className="w-4 h-4 text-accent-500" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/exhibitions/${exhibition.slug}`}>
                    {exhibition.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  {exhibition.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exhibition.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{exhibition.artistCount} artists</span>
                  </div>
                </div>
                <Link 
                  href={`/exhibitions/${exhibition.slug}`}
                  className="btn-outline w-full text-center py-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}