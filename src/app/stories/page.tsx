'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const featuredStory = {
  id: '1',
  title: 'The Renaissance of East African Contemporary Art',
  slug: 'renaissance-east-african-contemporary-art',
  excerpt: 'Exploring how contemporary East African artists are reshaping the global art narrative through innovative techniques and cultural storytelling.',
  content: '',
  author: 'Dr. Amina Hassan',
  authorRole: 'Gallery Curator',
  publishedAt: '2024-11-01',
  category: 'Exhibition Insights',
  readTime: '8 min read',
  featured: true,
  tags: ['Contemporary Art', 'East Africa', 'Cultural Heritage']
}

const stories = [
  {
    id: '2',
    title: 'Artist Spotlight: Wanjiku Kamuyu\'s Journey Through Abstract Expression',
    slug: 'artist-spotlight-wanjiku-kamuyu',
    excerpt: 'Meet Wanjiku Kamuyu, whose vibrant abstract paintings capture the essence of Kenyan landscapes and urban life.',
    author: 'Sarah Mwangi',
    authorRole: 'Art Journalist',
    publishedAt: '2024-10-28',
    category: 'Artist Spotlight',
    readTime: '5 min read',
    featured: false,
    tags: ['Artist Profile', 'Abstract Art', 'Kenya']
  },
  {
    id: '3',
    title: 'Behind the Scenes: Curating "Coastal Rhythms"',
    slug: 'behind-scenes-coastal-rhythms',
    excerpt: 'An inside look at the curatorial process behind our current exhibition celebrating ocean-inspired contemporary art.',
    author: 'Dr. Amina Hassan',
    authorRole: 'Gallery Curator',
    publishedAt: '2024-10-25',
    category: 'Behind the Scenes',
    readTime: '6 min read',
    featured: false,
    tags: ['Curation', 'Exhibition', 'Process']
  },
  {
    id: '4',
    title: 'The Art of Collecting: Building Your First Contemporary Art Collection',
    slug: 'art-of-collecting-contemporary',
    excerpt: 'Expert advice on starting your contemporary art collection, from understanding value to caring for your pieces.',
    author: 'James Ochieng',
    authorRole: 'Gallery Director',
    publishedAt: '2024-10-22',
    category: 'Collecting Guide',
    readTime: '10 min read',
    featured: false,
    tags: ['Collecting', 'Investment', 'Guide']
  },
  {
    id: '5',
    title: 'Community Connections: Art Education in Coastal Schools',
    slug: 'community-connections-art-education',
    excerpt: 'How Diani Art Gallery is partnering with local schools to bring contemporary art education to young minds.',
    author: 'Grace Kamau',
    authorRole: 'Education Coordinator',
    publishedAt: '2024-10-18',
    category: 'Community',
    readTime: '7 min read',
    featured: false,
    tags: ['Education', 'Community', 'Youth']
  },
  {
    id: '6',
    title: 'Sustainable Practices in Contemporary Art',
    slug: 'sustainable-practices-contemporary-art',
    excerpt: 'Exploring how artists and galleries are embracing eco-friendly practices and sustainable materials.',
    author: 'Dr. Amina Hassan',
    authorRole: 'Gallery Curator',
    publishedAt: '2024-10-15',
    category: 'Sustainability',
    readTime: '9 min read',
    featured: false,
    tags: ['Sustainability', 'Environment', 'Innovation']
  }
]

const categories = [
  'All Stories',
  'Exhibition Insights',
  'Artist Spotlight',
  'Behind the Scenes',
  'Collecting Guide',
  'Community',
  'Sustainability'
]

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('All Stories')

  const filteredStories = activeCategory === 'All Stories' 
    ? stories 
    : stories.filter(story => story.category === activeCategory)

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
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, interviews, and behind-the-scenes stories from the world of contemporary East African art.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-primary-100 to-secondary-100">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-600">Featured Story Image</span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-sm font-medium text-primary-600 mb-3">Featured Story</span>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                {featuredStory.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredStory.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="w-4 h-4 mr-2" />
                <span className="mr-4">{featuredStory.author}</span>
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{formatDate(featuredStory.publishedAt)}</span>
                <span>{featuredStory.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredStory.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href={`/stories/${featuredStory.slug}`}
                className="btn-primary inline-flex items-center w-fit"
              >
                Read Full Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <article key={story.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/stories/${story.slug}`}>
                <div className="aspect-[4/3] bg-gray-200 rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Story: {story.title.substring(0, 30)}...</span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span className="text-xs text-gray-500">{story.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/stories/${story.slug}`}>
                    {story.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <User className="w-3 h-3 mr-1" />
                  <span className="mr-3">{story.author}</span>
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{formatDate(story.publishedAt)}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {story.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {story.tags.length > 2 && (
                    <span className="text-xs text-gray-400">
                      +{story.tags.length - 2} more
                    </span>
                  )}
                </div>
                <Link 
                  href={`/stories/${story.slug}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest stories, exhibition announcements, 
              and exclusive insights from the gallery.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button type="submit" className="btn-primary px-6">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}