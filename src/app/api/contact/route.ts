import { NextRequest, NextResponse } from 'next/server'
import {
  sanitizeInput,
  validateInputLength,
  MAX_LENGTHS,
  isValidEmail,
  RateLimiter,
} from '@/lib/utils'

// Rate limiter: 5 requests per 15 minutes per IP
const rateLimiter = new RateLimiter(5, 15 * 60 * 1000)

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const remoteAddr = request.headers.get('remote-addr')

  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (remoteAddr) {
    return remoteAddr
  }
  return 'unknown'
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request)
    if (!rateLimiter.isAllowed(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

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

    // Enhanced email validation
    if (!isValidEmail(sanitizedEmail)) {
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
        timestamp: new Date().toISOString(),
      })
    }

    // TODO: Add email sending logic here

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