/**
 * 🔐 SECURE CONTACT API ROUTE
 * Handles contact form submissions with comprehensive security measures
 */

import { NextRequest, NextResponse } from 'next/server'
import { securitySchemas, sanitizeInput, validateFormData, checkRateLimit, logSecurityEvent } from '../../../lib/security'

// Rate limiting configuration
const RATE_LIMIT_MAX = 10 // 10 requests per window
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW)) {
      logSecurityEvent('RateLimitExceeded', { ip, endpoint: '/api/contact' })
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
    
    // Parse and validate request body
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'message']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }
    
    // Sanitize and validate input
    const { sanitizedData, errors } = validateFormData(body)
    
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: 'Invalid input data', details: errors },
        { status: 400 }
      )
    }
    
    // Validate email format
    try {
      securitySchemas.email.parse(sanitizedData.email)
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Validate name format
    try {
      securitySchemas.name.parse(sanitizedData.name)
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid name format' },
        { status: 400 }
      )
    }
    
    // Validate company format
    try {
      securitySchemas.company.parse(sanitizedData.company)
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid company format' },
        { status: 400 }
      )
    }
    
    // Validate message format
    try {
      securitySchemas.message.parse(sanitizedData.message)
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      )
    }
    
    // Log successful submission
    logSecurityEvent('ContactFormSubmission', {
      ip,
      email: sanitizedData.email,
      company: sanitizedData.company,
      timestamp: new Date().toISOString()
    })
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user
    
    // For now, just return success
    return NextResponse.json(
      { 
        message: 'Thank you for your message. We will get back to you soon.',
        success: true 
      },
      { status: 200 }
    )
    
  } catch (error) {
    logSecurityEvent('ContactFormError', {
      error: error instanceof Error ? error.message : 'Unknown error',
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
