'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Users, Heart, Globe, Award, MapPin, Calendar } from 'lucide-react'

const teamMembers = [
  {
    name: 'James Ochieng',
    role: 'Gallery Director & Founder',
    bio: 'With over 15 years in the art world, James founded Diani Art Gallery to showcase the incredible talent of East African contemporary artists.',
    image: '/team/james.jpg'
  },
  {
    name: 'Dr. Amina Hassan',
    role: 'Chief Curator',
    bio: 'Art historian and curator specializing in contemporary African art. PhD in Art History from University of Nairobi.',
    image: '/team/amina.jpg'
  },
  {
    name: 'Grace Kamau',
    role: 'Education Coordinator',
    bio: 'Passionate about art education and community outreach. Develops programs that connect art with local communities.',
    image: '/team/grace.jpg'
  },
  {
    name: 'David Mwangi',
    role: 'Collections Manager',
    bio: 'Oversees the gallery\'s growing collection and ensures proper conservation of artworks.',
    image: '/team/david.jpg'
  }
]

const milestones = [
  {
    year: '2018',
    title: 'Gallery Founded',
    description: 'Diani Art Gallery opens its doors with inaugural exhibition "Coastal Visions"'
  },
  {
    year: '2019',
    title: 'First International Artist',
    description: 'Welcomed our first international artist residency program'
  },
  {
    year: '2020',
    title: 'Digital Expansion',
    description: 'Launched online platform and virtual exhibitions during global challenges'
  },
  {
    year: '2021',
    title: 'Community Programs',
    description: 'Started art education programs in local schools'
  },
  {
    year: '2022',
    title: 'Conservation Lab',
    description: 'Opened in-house conservation laboratory for artwork preservation'
  },
  {
    year: '2023',
    title: 'Artist Residency',
    description: 'Launched fully-funded artist residency program for emerging talents'
  },
  {
    year: '2024',
    title: 'Regional Recognition',
    description: 'Named "Best Contemporary Gallery" by East African Art Awards'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">About Diani Art Gallery</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since 2018, we have been at the forefront of showcasing contemporary East African art, 
              fostering cultural dialogue, and supporting emerging and established artists from across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-primary-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To celebrate and promote contemporary East African art by providing a platform for artists 
              to showcase their work, connect with collectors, and engage with the global art community.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe art has the power to transcend boundaries, tell stories, and create meaningful 
              connections between diverse cultures and communities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-secondary-600 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To become the leading destination for contemporary East African art, recognized globally 
              for our exceptional exhibitions, artist development programs, and commitment to cultural preservation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where East African artists are celebrated on the world stage, 
              and their voices contribute meaningfully to global contemporary art discourse.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six years of dedication to East African contemporary art
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Artists Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">85</div>
              <div className="text-gray-600">Exhibitions Curated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">2,500+</div>
              <div className="text-gray-600">Artworks Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25</div>
              <div className="text-gray-600">Artist Residencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Diani Art Gallery was born from a simple yet powerful vision: to create a space where 
                contemporary East African art could flourish and reach audiences both locally and internationally.
              </p>
              <p>
                Founded in 2018 by James Ochieng, a passionate art collector and advocate, the gallery 
                began in a modest space along Diani Beach Road. What started as a small exhibition space 
                has grown into a premier destination for contemporary art on Kenya's coast.
              </p>
              <p>
                Our location in Diani Beach is no accident. The coastal setting provides inspiration and 
                tranquility that influences both the artists we represent and the visitors who come to 
                experience their work. The interplay between ocean, culture, and creativity defines our identity.
              </p>
              <p>
                Today, we proudly represent over 150 artists from across East Africa, from emerging talents 
                to internationally recognized masters, each contributing their unique voice to the contemporary art landscape.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
            <span className="text-gray-600">Gallery Exterior Image</span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our commitment to East African contemporary art
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to promoting East African contemporary art
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-r from-secondary-50 to-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Authenticity</h3>
              <p className="text-gray-600 text-sm">
                We celebrate genuine artistic expression and cultural narratives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600 text-sm">
                Art should be accessible to all, regardless of background or experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards in curation and presentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white border-t py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're an artist, collector, or art enthusiast, we'd love to connect with you 
            and explore how we can collaborate to celebrate East African contemporary art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get in Touch
            </button>
            <button className="btn-outline">
              Visit Our Gallery
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}