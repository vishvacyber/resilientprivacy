import { NextRequest, NextResponse } from 'next/server'
import { sanitizeInput, validateInputLength, MAX_LENGTHS } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Sanitize and validate inputs
    const sanitizedName = sanitizeInput(String(body.name))
    const sanitizedEmail = sanitizeInput(String(body.email))
    const sanitizedMessage = sanitizeInput(String(body.message))

    // Validate input lengths
    if (!validateInputLength(sanitizedName, MAX_LENGTHS.NAME)) {
      return NextResponse.json(
        { error: 'Name is too long' },
        { status: 400 }
      )
    }

    if (!validateInputLength(sanitizedEmail, MAX_LENGTHS.EMAIL)) {
      return NextResponse.json(
        { error: 'Email is too long' },
        { status: 400 }
      )
    }

    if (!validateInputLength(sanitizedMessage, MAX_LENGTHS.DESCRIPTION)) {
      return NextResponse.json(
        { error: 'Message is too long' },
        { status: 400 }
      )
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the contact form submission (server-side only, development)
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', {
        name: sanitizedName,
        email: sanitizedEmail,
        messageLength: sanitizedMessage.length,
        timestamp: new Date().toISOString()
      })
    }

    // TODO: Add email sending logic here
    // TODO: Add rate limiting here
    
    // Return success response
    return NextResponse.json(
      { message: 'Thank you for your message! We will get back to you soon.' },
      { status: 200 }
    )

  } catch (error) {
    // Secure error logging - only in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact form error:', error)
    }
    // Production: Send to external logging service (not console)
    // TODO: Implement external logging service
    // const errorId = `contact-${Date.now()}`
    // logToExternalService(errorId, 'Contact form error')
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}