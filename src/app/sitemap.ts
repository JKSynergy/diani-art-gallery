import { MetadataRoute } from 'next'
// import { db } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dianiartsalley.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/artists`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/artworks`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exhibitions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/visit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // TODO: When database is connected, fetch dynamic pages
  // Uncomment and implement when database is ready
  /*
  const artists = await db.artist.findMany({
    where: { featured: true },
    select: { slug: true, updatedAt: true }
  })
  
  const artistPages: MetadataRoute.Sitemap = artists.map((artist) => ({
    url: `${baseUrl}/artists/${artist.slug}`,
    lastModified: artist.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const artworks = await db.artwork.findMany({
    where: { available: true },
    select: { slug: true, updatedAt: true }
  })
  
  const artworkPages: MetadataRoute.Sitemap = artworks.map((artwork) => ({
    url: `${baseUrl}/artworks/${artwork.slug}`,
    lastModified: artwork.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const exhibitions = await db.exhibition.findMany({
    select: { slug: true, updatedAt: true }
  })
  
  const exhibitionPages: MetadataRoute.Sitemap = exhibitions.map((exhibition) => ({
    url: `${baseUrl}/exhibitions/${exhibition.slug}`,
    lastModified: exhibition.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticPages, ...artistPages, ...artworkPages, ...exhibitionPages]
  */

  return staticPages
}
