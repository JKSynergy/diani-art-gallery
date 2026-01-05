import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { contactFormSchema } from '@/lib/validations'
import { ApiResponse } from '@/types'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body)

    // Save to database
    const contactForm = await prisma.contactForm.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
        artworkInquiry: validatedData.artworkInquiry,
      }
    })

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to user

    const response: ApiResponse = {
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.',
      data: { id: contactForm.id }
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Error submitting contact form:', error)
    
    let errorMessage = 'Failed to submit contact form'
    let statusCode = 500

    if (error instanceof Error && error.name === 'ZodError') {
      errorMessage = 'Please check your input and try again'
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