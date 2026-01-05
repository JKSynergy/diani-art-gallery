import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { newsletterSchema } from '@/lib/validations'
import { ApiResponse } from '@/types'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = newsletterSchema.parse(body)

    // Check if email already exists
    const existingSubscription = await prisma.newsletterSubscription.findUnique({
      where: { email: validatedData.email }
    })

    if (existingSubscription) {
      if (existingSubscription.status === 'ACTIVE') {
        const response: ApiResponse = {
          success: false,
          error: 'This email is already subscribed to our newsletter'
        }
        return NextResponse.json(response, { status: 400 })
      } else {
        // Reactivate subscription
        await prisma.newsletterSubscription.update({
          where: { email: validatedData.email },
          data: {
            status: 'ACTIVE',
            firstName: validatedData.firstName,
            lastName: validatedData.lastName,
            preferences: validatedData.preferences,
            subscribedAt: new Date(),
            unsubscribedAt: null
          }
        })
      }
    } else {
      // Create new subscription
      await prisma.newsletterSubscription.create({
        data: {
          email: validatedData.email,
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          preferences: validatedData.preferences,
        }
      })
    }

    // TODO: Send welcome email
    // TODO: Add to email marketing service (Mailchimp, ConvertKit, etc.)

    const response: ApiResponse = {
      success: true,
      message: 'Successfully subscribed to our newsletter!'
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    
    let errorMessage = 'Failed to subscribe to newsletter'
    let statusCode = 500

    if (error instanceof Error && error.name === 'ZodError') {
      errorMessage = 'Please enter a valid email address'
      statusCode = 400
    }

    const response: ApiResponse = {
      success: false,
      error: errorMessage
    }

    return NextResponse.json(response, { status: statusCode })
  } finally {
    await prisma.$disconnect()
  }
}