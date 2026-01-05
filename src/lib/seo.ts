/**
 * SEO utilities for Diani Art Gallery
 * Generates optimized metadata and structured data
 */

import { Metadata } from 'next'
import { Artist, Artwork, Exhibition } from '@/types'

export const SITE_CONFIG = {
  name: 'Diani Art Gallery',
  url: 'https://dianiartsalley.com',
  description: 'Discover original contemporary African art by Kenya\'s leading artists. Shop paintings, sculptures & photography from our coastal gallery in Diani Beach.',
  locale: 'en_US',
  location: {
    name: 'Diani Beach, Kenya',
    address: 'Diani Beach Road, Kwale County',
    phone: '+254 XXX XXX XXX',
    email: 'info@dianiartsalley.com'
  }
}

/**
 * Generate optimized metadata for pages
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  images,
  keywords,
  type = 'website'
}: {
  title: string
  description: string
  path?: string
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>
  keywords?: string[]
  type?: 'website' | 'article'
}): Metadata {
  const url = `${SITE_CONFIG.url}${path}`
  const defaultImage = {
    url: `${SITE_CONFIG.url}/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: SITE_CONFIG.name
  }

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: images || [defaultImage],
      locale: SITE_CONFIG.locale,
      type
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images?.[0]?.url || defaultImage.url
    }
  }
}

/**
 * Generate JSON-LD structured data for local business
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ArtGallery',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.location.phone,
    email: SITE_CONFIG.location.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.location.address,
      addressLocality: 'Diani Beach',
      addressRegion: 'Kwale County',
      addressCountry: 'KE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-4.2928',
      longitude: '39.5742'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/dianiartsalley',
      'https://www.instagram.com/dianiartsalley',
      'https://twitter.com/dianiartsalley'
    ],
    priceRange: '$$-$$$'
  }
}

/**
 * Generate JSON-LD structured data for artwork
 */
export function generateArtworkSchema(artwork: Artwork & { artist?: Artist }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: artwork.title,
    description: artwork.description,
    image: artwork.image,
    creator: artwork.artist ? {
      '@type': 'Person',
      name: artwork.artist.name,
      url: `${SITE_CONFIG.url}/artists/${artwork.artist.slug}`
    } : artwork.artistId,
    artMedium: artwork.medium,
    artform: artwork.category,
    width: artwork.dimensions.split('x')[0]?.trim(),
    height: artwork.dimensions.split('x')[1]?.trim(),
    dateCreated: artwork.year.toString(),
    offers: {
      '@type': 'Offer',
      price: artwork.price,
      priceCurrency: artwork.currency || 'USD',
      availability: artwork.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: `${SITE_CONFIG.url}/artworks/${artwork.slug}`
    },
    url: `${SITE_CONFIG.url}/artworks/${artwork.slug}`
  }
}

/**
 * Generate JSON-LD structured data for artist
 */
export function generateArtistSchema(artist: Artist) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.name,
    description: artist.bio,
    image: artist.image,
    url: `${SITE_CONFIG.url}/artists/${artist.slug}`,
    email: artist.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: artist.city,
      addressCountry: artist.country
    },
    sameAs: artist.instagram ? [`https://www.instagram.com/${artist.instagram}`] : [],
    jobTitle: 'Artist',
    worksFor: {
      '@type': 'Organization',
      name: SITE_CONFIG.name
    }
  }
}

/**
 * Generate JSON-LD structured data for exhibition
 */
export function generateExhibitionSchema(exhibition: Exhibition) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ExhibitionEvent',
    name: exhibition.title,
    description: exhibition.description,
    image: exhibition.image,
    startDate: exhibition.startDate.toISOString(),
    endDate: exhibition.endDate.toISOString(),
    location: {
      '@type': 'Place',
      name: exhibition.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Diani Beach',
        addressRegion: 'Kwale County',
        addressCountry: 'KE'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    offers: exhibition.registrationFee ? {
      '@type': 'Offer',
      price: exhibition.registrationFee,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_CONFIG.url}/exhibitions/${exhibition.slug}`
    } : undefined,
    url: `${SITE_CONFIG.url}/exhibitions/${exhibition.slug}`,
    eventStatus: exhibition.status === 'CURRENT' || exhibition.status === 'UPCOMING' 
      ? 'https://schema.org/EventScheduled' 
      : 'https://schema.org/EventCancelled'
  }
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`
    }))
  }
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * Generate script tag content for JSON-LD
 * Use this in your page components like:
 * <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLdScript(data) }} />
 */
export function generateJsonLdScript(data: any): string {
  return JSON.stringify(data)
}
