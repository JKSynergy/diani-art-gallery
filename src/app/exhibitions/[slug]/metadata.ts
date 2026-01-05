import { Metadata } from 'next'
import { generatePageMetadata, generateExhibitionSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Exhibition } from '@/types'

export function generateExhibitionMetadata(exhibition: Exhibition): Metadata {
  const dateRange = `${new Date(exhibition.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${new Date(exhibition.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
  
  return generatePageMetadata({
    title: `${exhibition.title} - Art Exhibition | Diani Art Gallery`,
    description: `${exhibition.title}: ${exhibition.description.substring(0, 140)}... Exhibition dates: ${dateRange}. Location: ${exhibition.location}. ${exhibition.registrationRequired ? 'Register now to attend.' : 'Free admission.'}`,
    keywords: [
      `${exhibition.title}`,
      'art exhibition Kenya',
      'Diani Beach art show',
      'contemporary art exhibition',
      'African art exhibition',
      'Kenya gallery events',
      'East African art show',
      'contemporary African artists',
      exhibition.curator ? `curator ${exhibition.curator}` : ''
    ].filter(Boolean),
    path: `/exhibitions/${exhibition.slug}`,
    images: [
      {
        url: exhibition.image,
        width: 1200,
        height: 630,
        alt: `${exhibition.title} - Art Exhibition at Diani Art Gallery`
      }
    ],
    type: 'article'
  })
}

export function getExhibitionSchemas(exhibition: Exhibition) {
  const exhibitionSchema = generateExhibitionSchema(exhibition)
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Exhibitions', url: '/exhibitions' },
    { name: exhibition.title, url: `/exhibitions/${exhibition.slug}` }
  ])

  return { exhibitionSchema, breadcrumbSchema }
}
