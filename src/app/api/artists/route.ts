import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { artistFiltersSchema } from '@/lib/validations'
import { ApiResponse, PaginatedResponse, Artist } from '@/types'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse and validate query parameters
    const queryParams = {
      country: searchParams.get('country') || undefined,
      featured: searchParams.get('featured') ? searchParams.get('featured') === 'true' : undefined,
      verified: searchParams.get('verified') ? searchParams.get('verified') === 'true' : undefined,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') || 'name',
      sortOrder: searchParams.get('sortOrder') || 'asc',
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : 12,
    }

    const validatedParams = artistFiltersSchema.parse(queryParams)

    // Build where clause
    const where: any = {}

    if (validatedParams.country) {
      where.country = {
        contains: validatedParams.country,
        mode: 'insensitive'
      }
    }

    if (validatedParams.featured !== undefined) {
      where.featured = validatedParams.featured
    }

    if (validatedParams.verified !== undefined) {
      where.verified = validatedParams.verified
    }

    if (validatedParams.search) {
      where.OR = [
        {
          name: {
            contains: validatedParams.search,
            mode: 'insensitive'
          }
        },
        {
          bio: {
            contains: validatedParams.search,
            mode: 'insensitive'
          }
        }
      ]
    }

    // Build orderBy clause
    let orderBy: any = {}
    switch (validatedParams.sortBy) {
      case 'country':
        orderBy = { country: validatedParams.sortOrder }
        break
      case 'artworkCount':
        orderBy = { artworks: { _count: validatedParams.sortOrder } }
        break
      case 'created':
        orderBy = { createdAt: validatedParams.sortOrder }
        break
      default:
        orderBy = { name: validatedParams.sortOrder }
    }

    // Calculate pagination
    const skip = (validatedParams.page - 1) * validatedParams.limit

    // Get total count
    const total = await prisma.artist.count({ where })

    // Get artists with artwork count
    const artists = await prisma.artist.findMany({
      where,
      orderBy,
      skip,
      take: validatedParams.limit,
      include: {
        _count: {
          select: {
            artworks: {
              where: {
                available: true
              }
            }
          }
        }
      }
    })

    // Transform data to include artwork count
    const transformedArtists = artists.map((artist: any) => ({
      ...artist,
      artworkCount: artist._count.artworks
    }))

    // Calculate pagination info
    const totalPages = Math.ceil(total / validatedParams.limit)
    const hasNext = validatedParams.page < totalPages
    const hasPrev = validatedParams.page > 1

    const response: ApiResponse<PaginatedResponse<Artist>> = {
      success: true,
      data: {
        data: transformedArtists as Artist[],
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
    console.error('Error fetching artists:', error)
    
    const response: ApiResponse = {
      success: false,
      error: 'Failed to fetch artists'
    }

    return NextResponse.json(response, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}