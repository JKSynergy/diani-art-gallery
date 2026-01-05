import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { exhibitionFiltersSchema } from '@/lib/validations'
import { ApiResponse, PaginatedResponse, Exhibition } from '@/types'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse and validate query parameters
    const queryParams = {
      status: searchParams.get('status') || undefined,
      featured: searchParams.get('featured') ? searchParams.get('featured') === 'true' : undefined,
      registrationRequired: searchParams.get('registrationRequired') ? searchParams.get('registrationRequired') === 'true' : undefined,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') || 'startDate',
      sortOrder: searchParams.get('sortOrder') || 'desc',
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : 12,
    }

    const validatedParams = exhibitionFiltersSchema.parse(queryParams)

    // Build where clause
    const where: any = {}

    if (validatedParams.status) {
      where.status = validatedParams.status
    } else {
      // Default to showing current and upcoming exhibitions
      const now = new Date()
      where.endDate = {
        gte: now
      }
    }

    if (validatedParams.featured !== undefined) {
      where.featured = validatedParams.featured
    }

    if (validatedParams.registrationRequired !== undefined) {
      where.registrationRequired = validatedParams.registrationRequired
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
        }
      ]
    }

    // Build orderBy clause
    let orderBy: any = {}
    switch (validatedParams.sortBy) {
      case 'title':
        orderBy = { title: validatedParams.sortOrder }
        break
      case 'created':
        orderBy = { createdAt: validatedParams.sortOrder }
        break
      default:
        orderBy = { startDate: validatedParams.sortOrder }
    }

    // Calculate pagination
    const skip = (validatedParams.page - 1) * validatedParams.limit

    // Get total count
    const total = await prisma.exhibition.count({ where })

    // Get exhibitions
    const exhibitions = await prisma.exhibition.findMany({
      where,
      orderBy,
      skip,
      take: validatedParams.limit,
      include: {
        artists: {
          include: {
            artist: {
              select: {
                id: true,
                name: true,
                slug: true,
                image: true
              }
            }
          }
        },
        _count: {
          select: {
            artworks: true,
            registrations: true
          }
        }
      }
    })

    // Calculate pagination info
    const totalPages = Math.ceil(total / validatedParams.limit)
    const hasNext = validatedParams.page < totalPages
    const hasPrev = validatedParams.page > 1

    const response: ApiResponse<PaginatedResponse<Exhibition>> = {
      success: true,
      data: {
        data: exhibitions as Exhibition[],
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
    console.error('Error fetching exhibitions:', error)
    
    const response: ApiResponse = {
      success: false,
      error: 'Failed to fetch exhibitions'
    }

    return NextResponse.json(response, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}