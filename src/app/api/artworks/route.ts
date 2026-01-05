import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { artworkFiltersSchema } from '@/lib/validations'
import { ApiResponse, PaginatedResponse, Artwork } from '@/types'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse and validate query parameters
    const queryParams = {
      category: searchParams.get('category') || undefined,
      medium: searchParams.get('medium') || undefined,
      minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
      maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
      artist: searchParams.get('artist') || undefined,
      year: searchParams.get('year') ? Number(searchParams.get('year')) : undefined,
      available: searchParams.get('available') ? searchParams.get('available') === 'true' : undefined,
      featured: searchParams.get('featured') ? searchParams.get('featured') === 'true' : undefined,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') || 'created',
      sortOrder: searchParams.get('sortOrder') || 'desc',
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : 12,
    }

    const validatedParams = artworkFiltersSchema.parse(queryParams)

    // Build where clause
    const where: any = {}

    if (validatedParams.category) {
      where.category = validatedParams.category
    }

    if (validatedParams.medium) {
      where.medium = {
        contains: validatedParams.medium,
        mode: 'insensitive'
      }
    }

    if (validatedParams.minPrice || validatedParams.maxPrice) {
      where.price = {}
      if (validatedParams.minPrice) {
        where.price.gte = validatedParams.minPrice
      }
      if (validatedParams.maxPrice) {
        where.price.lte = validatedParams.maxPrice
      }
    }

    if (validatedParams.artist) {
      where.artist = {
        name: {
          contains: validatedParams.artist,
          mode: 'insensitive'
        }
      }
    }

    if (validatedParams.year) {
      where.year = validatedParams.year
    }

    if (validatedParams.available !== undefined) {
      where.available = validatedParams.available
    }

    if (validatedParams.featured !== undefined) {
      where.featured = validatedParams.featured
    }

    if (validatedParams.search) {
      where.OR = [
        {
          title: {
            contains: validatedParams.search,
            mode: 'insensitive'
          }
        },
        {
          description: {
            contains: validatedParams.search,
            mode: 'insensitive'
          }
        },
        {
          artist: {
            name: {
              contains: validatedParams.search,
              mode: 'insensitive'
            }
          }
        }
      ]
    }

    // Build orderBy clause
    let orderBy: any = {}
    switch (validatedParams.sortBy) {
      case 'price':
        orderBy = { price: validatedParams.sortOrder }
        break
      case 'title':
        orderBy = { title: validatedParams.sortOrder }
        break
      case 'artist':
        orderBy = { artist: { name: validatedParams.sortOrder } }
        break
      case 'year':
        orderBy = { year: validatedParams.sortOrder }
        break
      default:
        orderBy = { createdAt: validatedParams.sortOrder }
    }

    // Calculate pagination
    const skip = (validatedParams.page - 1) * validatedParams.limit

    // Get total count
    const total = await prisma.artwork.count({ where })

    // Get artworks
    const artworks = await prisma.artwork.findMany({
      where,
      orderBy,
      skip,
      take: validatedParams.limit,
      include: {
        artist: {
          select: {
            id: true,
            name: true,
            slug: true,
            country: true
          }
        }
      }
    })

    // Calculate pagination info
    const totalPages = Math.ceil(total / validatedParams.limit)
    const hasNext = validatedParams.page < totalPages
    const hasPrev = validatedParams.page > 1

    const response: ApiResponse<PaginatedResponse<Artwork>> = {
      success: true,
      data: {
        data: artworks as Artwork[],
        pagination: {
          page: validatedParams.page,
          limit: validatedParams.limit,
          total,
          totalPages,
          hasNext,
          hasPrev
        }
      }
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Error fetching artworks:', error)
    
    const response: ApiResponse = {
      success: false,
      error: 'Failed to fetch artworks'
    }

    return NextResponse.json(response, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}