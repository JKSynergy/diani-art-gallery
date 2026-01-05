'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, MapPin, Users, Clock, Star, ArrowLeft, Share2, Heart, ShoppingCart } from 'lucide-react'

// This would typically come from your database/CMS
const exhibitionData = {
  'coastal-rhythms': {
    id: '1',
    title: 'Coastal Rhythms',
    subtitle: 'A Celebration of Ocean-Inspired Contemporary Art',
    description: 'Coastal Rhythms explores the profound influence of the ocean on contemporary East African art. This exhibition brings together eight remarkable artists whose work captures the rhythm, movement, and spiritual essence of coastal life.',
    longDescription: `The ocean has always been a source of inspiration for artists along Kenya's coast. In "Coastal Rhythms," we present works that go beyond mere representation to capture the emotional and spiritual connection between the artist and the sea.

    This exhibition features paintings, sculptures, and mixed-media installations that explore themes of movement, tranquility, environmental consciousness, and cultural heritage. Each piece tells a story of the artist's relationship with the ocean, creating a dialogue between tradition and contemporary expression.

    The exhibition is divided into three thematic sections: "Tidal Movements" explores the dynamic energy of ocean waves through abstract expressionism; "Coastal Communities" focuses on the daily lives and traditions of fishing communities; and "Ocean's Memory" addresses environmental concerns and the changing relationship between humans and the sea.`,
    startDate: '2024-10-15',
    endDate: '2024-12-30',
    location: 'Main Gallery',
    status: 'CURRENT',
    featured: true,
    curatorName: 'Dr. Amina Hassan',
    curatorTitle: 'Chief Curator, Diani Art Gallery',
    artistCount: 8,
    artworkCount: 24,
    openingReception: '2024-10-15T18:00:00',
    admissionFee: 0,
    guidedTours: true,
    tourPrice: 500,
    virtualTour: true,
    tags: ['Contemporary Art', 'Ocean', 'East Africa', 'Environment', 'Culture'],
    artists: [
      {
        name: 'Wanjiku Kamuyu',
        artwork: 'Ocean Rhythms',
        medium: 'Acrylic on Canvas',
        year: 2024
      },
      {
        name: 'Peter Otieno',
        artwork: 'Coastal Dreams',
        medium: 'Watercolor',
        year: 2024
      },
      {
        name: 'Grace Njeri',
        artwork: 'Tidal Memory',
        medium: 'Mixed Media',
        year: 2024
      },
      {
        name: 'David Mwangi',
        artwork: 'Fisherman\'s Dawn',
        medium: 'Oil on Canvas',
        year: 2024
      }
    ],
    events: [
      {
        title: 'Opening Reception',
        date: '2024-10-15',
        time: '6:00 PM - 9:00 PM',
        type: 'Reception',
        price: 0
      },
      {
        title: 'Artist Talk: Ocean as Muse',
        date: '2024-11-08',
        time: '3:00 PM - 4:30 PM',
        type: 'Talk',
        price: 300
      },
      {
        title: 'Curator\'s Walk-through',
        date: '2024-11-22',
        time: '2:00 PM - 3:00 PM',
        type: 'Tour',
        price: 500
      },
      {
        title: 'Closing Ceremony',
        date: '2024-12-30',
        time: '5:00 PM - 7:00 PM',
        type: 'Event',
        price: 0
      }
    ],
    relatedExhibitions: [
      {
        title: 'Heritage & Innovation',
        slug: 'heritage-innovation',
        status: 'UPCOMING'
      },
      {
        title: 'Emerging Voices',
        slug: 'emerging-voices',
        status: 'PAST'
      }
    ]
  }
}

export default function ExhibitionPage() {
  const params = useParams()
  const slug = params.slug as string
  const exhibition = exhibitionData[slug as keyof typeof exhibitionData]
  
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showShareModal, setShowShareModal] = useState(false)

  if (!exhibition) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Exhibition Not Found</h1>
          <p className="text-gray-600 mb-8">The exhibition you're looking for doesn't exist or has been removed.</p>
          <Link href="/exhibitions" className="btn-primary">
            View All Exhibitions
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatEventDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <Link href="/exhibitions" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Exhibitions
            </Link>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              exhibition.status === 'CURRENT' 
                ? 'bg-green-100 text-green-800'
                : exhibition.status === 'UPCOMING'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {exhibition.status}
            </span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
                {exhibition.title}
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8 font-light">
                {exhibition.subtitle}
              </h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <div className="text-sm text-gray-500">Exhibition Dates</div>
                    <div className="font-medium">{formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">{exhibition.location}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <div className="text-sm text-gray-500">Featured Artists</div>
                    <div className="font-medium">{exhibition.artistCount} Artists</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <div className="text-sm text-gray-500">Artworks</div>
                    <div className="font-medium">{exhibition.artworkCount} Pieces</div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {exhibition.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {exhibition.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-sm bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary inline-flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Plan Your Visit
                </button>
                {exhibition.virtualTour && (
                  <button className="btn-outline inline-flex items-center">
                    Virtual Tour
                  </button>
                )}
                <button 
                  onClick={() => setShowShareModal(true)}
                  className="btn-outline inline-flex items-center"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <span className="text-gray-600">Exhibition: {exhibition.title}</span>
                </div>
              </div>
              {exhibition.featured && (
                <div className="absolute top-4 right-4 bg-accent-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  Featured Exhibition
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">About the Exhibition</h3>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                {exhibition.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Curator's Note</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-4">
                    "This exhibition represents a unique opportunity to witness how contemporary East African artists 
                    are interpreting and reimagining their relationship with the ocean. Each work tells a story that 
                    connects us to our coastal heritage while addressing contemporary concerns."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <div className="font-medium text-gray-900">{exhibition.curatorName}</div>
                      <div className="text-sm text-gray-600">{exhibition.curatorTitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Visit Information */}
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Visit Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Admission</span>
                    <span className="font-medium">
                      {exhibition.admissionFee === 0 ? 'FREE' : `KSh ${exhibition.admissionFee}`}
                    </span>
                  </div>
                  {exhibition.guidedTours && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guided Tours</span>
                      <span className="font-medium">KSh {exhibition.tourPrice}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium">{exhibition.location}</span>
                  </div>
                </div>
                <button className="btn-primary w-full mt-4">
                  Book Tour
                </button>
              </div>

              {/* Featured Artists */}
              <div className="bg-white rounded-lg border p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Featured Artists</h4>
                <div className="space-y-4">
                  {exhibition.artists.slice(0, 4).map((artist, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{artist.name}</div>
                        <div className="text-xs text-gray-600">"{artist.artwork}" - {artist.medium}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/artists" className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-4 block">
                  View All Artists →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">Related Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exhibition.events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-primary-600">{formatEventDate(event.date)}</div>
                  <div className="text-sm text-gray-600">{event.time}</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-center">{event.title}</h4>
                <div className="text-center">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                <div className="text-center mt-4">
                  <span className="font-medium text-gray-900">
                    {event.price === 0 ? 'Free' : `KSh ${event.price}`}
                  </span>
                </div>
                <button className="btn-outline w-full mt-4 text-sm">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Exhibitions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exhibition.relatedExhibitions.map((related, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    related.status === 'UPCOMING' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {related.status}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{related.title}</h4>
                <Link 
                  href={`/exhibitions/${related.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowLeft className="w-4 h-4 ml-1 transform rotate-180" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}