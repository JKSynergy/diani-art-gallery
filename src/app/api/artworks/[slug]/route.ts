import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { ApiResponse, Artwork } from '@/types'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    const artwork = await prisma.artwork.findUnique({
      where: { slug },
      include: {
        artist: {
          select: {
            id: true,
            name: true,
            slug: true,
            bio: true,
            country: true,
            city: true,
            website: true,
            instagram: true,
            image: true
          }
        }
      }
    })

    if (!artwork) {
      const response: ApiResponse = {
        success: false,
        error: 'Artwork not found'
      }
      return NextResponse.json(response, { status: 404 })
    }

    // Increment view count
    await prisma.artwork.update({
      where: { id: artwork.id },
      data: { views: { increment: 1 } }
    })

    // Convert Decimal fields to numbers for API response
    const artworkData = {
      ...artwork,
      price: Number(artwork.price),
      weight: artwork.weight ? Number(artwork.weight) : undefined
    }

    const response: ApiResponse<Artwork> = {
      success: true,
      data: artworkData as Artwork
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Error fetching artwork:', error)
    
    const response: ApiResponse = {
      success: false,
      error: 'Failed to fetch artwork'
    }

    return NextResponse.json(response, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}