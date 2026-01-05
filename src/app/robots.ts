import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/profile/',
          '/cart/',
          '/checkout/',
          '/auth/'
        ],
      },
    ],
    sitemap: 'https://dianiartsalley.com/sitemap.xml',
  }
}
