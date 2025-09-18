/**
 * 🔐 SECURITY MIDDLEWARE
 * Comprehensive security middleware to protect against common attacks
 */

import { NextRequest, NextResponse } from 'next/server'
import securityConfig from '../../security.config.js'

// Security event logging
const logSecurityEvent = (event: string, details: any) => {
  if (securityConfig.monitoring.logSecurityEvents) {
    console.log(`[SECURITY] ${event}:`, details)
  }
}

// Input sanitization
const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return ''
  
  return input
    .replace(securityConfig.validation.sanitize.dangerousChars, '')
    .replace(securityConfig.validation.sanitize.scriptTags, '')
    .replace(securityConfig.validation.sanitize.eventHandlers, '')
    .replace(securityConfig.validation.sanitize.javascriptProtocol, '')
    .trim()
}

// Validate email
const isValidEmail = (email: string): boolean => {
  return securityConfig.validation.email.test(email)
}

// Validate phone
const isValidPhone = (phone: string): boolean => {
  return securityConfig.validation.phone.test(phone)
}

// Validate name
const isValidName = (name: string): boolean => {
  return securityConfig.validation.name.test(name)
}

// Check for suspicious patterns
const isSuspiciousPattern = (input: string): boolean => {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /eval\s*\(/i,
    /expression\s*\(/i,
    /vbscript:/i,
    /data:text\/html/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<link/i,
    /<meta/i,
    /<style/i,
    /<form/i,
    /<input/i,
    /<textarea/i,
    /<select/i,
    /<option/i,
    /<button/i,
    /<a\s+href/i,
    /<img/i,
    /<svg/i,
    /<math/i,
    /<video/i,
    /<audio/i,
    /<source/i,
    /<track/i,
    /<canvas/i,
    /<map/i,
    /<area/i,
    /<base/i,
    /<col/i,
    /<colgroup/i,
    /<fieldset/i,
    /<legend/i,
    /<optgroup/i,
    /<output/i,
    /<progress/i,
    /<meter/i,
    /<details/i,
    /<summary/i,
    /<dialog/i,
    /<menu/i,
    /<menuitem/i,
    /<command/i,
    /<keygen/i,
    /<param/i,
    /<applet/i,
    /<frameset/i,
    /<frame/i,
    /<noframes/i,
    /<noscript/i,
    /<template/i,
    /<slot/i,
    /<shadow/i,
    /<content/i,
    /<element/i,
    /<decorator/i,
    /<import/i,
    /<include/i,
    /<require/i,
    /<extend/i,
    /<mixin/i,
    /<use/i,
    /<defs/i,
    /<g/i,
    /<path/i,
    /<circle/i,
    /<ellipse/i,
    /<line/i,
    /<polyline/i,
    /<polygon/i,
    /<rect/i,
    /<text/i,
    /<tspan/i,
    /<textPath/i,
    /<tref/i,
    /<tbreak/i,
    /<altGlyph/i,
    /<altGlyphDef/i,
    /<altGlyphItem/i,
    /<glyph/i,
    /<glyphRef/i,
    /<marker/i,
    /<pattern/i,
    /<clipPath/i,
    /<mask/i,
    /<linearGradient/i,
    /<radialGradient/i,
    /<stop/i,
    /<switch/i,
    /<symbol/i,
    /<view/i,
    /<use/i,
    /<image/i,
    /<foreignObject/i,
    /<desc/i,
    /<title/i,
    /<metadata/i,
    /<defs/i,
    /<g/i,
    /<path/i,
    /<circle/i,
    /<ellipse/i,
    /<line/i,
    /<polyline/i,
    /<polygon/i,
    /<rect/i,
    /<text/i,
    /<tspan/i,
    /<textPath/i,
    /<tref/i,
    /<tbreak/i,
    /<altGlyph/i,
    /<altGlyphDef/i,
    /<altGlyphItem/i,
    /<glyph/i,
    /<glyphRef/i,
    /<marker/i,
    /<pattern/i,
    /<clipPath/i,
    /<mask/i,
    /<linearGradient/i,
    /<radialGradient/i,
    /<stop/i,
    /<switch/i,
    /<symbol/i,
    /<view/i,
    /<use/i,
    /<image/i,
    /<foreignObject/i,
    /<desc/i,
    /<title/i,
    /<metadata/i
  ]
  
  return suspiciousPatterns.some(pattern => pattern.test(input))
}

// Rate limiting (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now()
  const windowMs = securityConfig.rateLimit.windowMs
  const max = securityConfig.rateLimit.max
  
  const current = rateLimitMap.get(ip)
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (current.count >= max) {
    return false
  }
  
  current.count++
  return true
}

// Main security middleware
export function securityMiddleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  const userAgent = request.headers.get('user-agent') || ''
  const url = request.url
  
  // Log security event
  logSecurityEvent('Request', { ip, userAgent, url })
  
  // Check rate limit
  if (!checkRateLimit(ip)) {
    logSecurityEvent('RateLimitExceeded', { ip, userAgent, url })
    return new NextResponse('Too Many Requests', { status: 429 })
  }
  
  // Check for suspicious patterns in URL
  if (isSuspiciousPattern(url)) {
    logSecurityEvent('SuspiciousURL', { ip, userAgent, url })
    return new NextResponse('Forbidden', { status: 403 })
  }
  
  // Check for suspicious patterns in User-Agent
  if (isSuspiciousPattern(userAgent)) {
    logSecurityEvent('SuspiciousUserAgent', { ip, userAgent, url })
    return new NextResponse('Forbidden', { status: 403 })
  }
  
  // Check for common attack patterns
  const attackPatterns = [
    /\.\.\//, // Directory traversal
    /<script/i, // XSS
    /javascript:/i, // XSS
    /on\w+\s*=/i, // Event handlers
    /eval\s*\(/i, // Code injection
    /expression\s*\(/i, // CSS injection
    /vbscript:/i, // VBScript injection
    /data:text\/html/i, // Data URI injection
    /<iframe/i, // Iframe injection
    /<object/i, // Object injection
    /<embed/i, // Embed injection
    /<link/i, // Link injection
    /<meta/i, // Meta injection
    /<style/i, // Style injection
    /<form/i, // Form injection
    /<input/i, // Input injection
    /<textarea/i, // Textarea injection
    /<select/i, // Select injection
    /<option/i, // Option injection
    /<button/i, // Button injection
    /<a\s+href/i, // Link injection
    /<img/i, // Image injection
    /<svg/i, // SVG injection
    /<math/i, // MathML injection
    /<video/i, // Video injection
    /<audio/i, // Audio injection
    /<source/i, // Source injection
    /<track/i, // Track injection
    /<canvas/i, // Canvas injection
    /<map/i, // Map injection
    /<area/i, // Area injection
    /<base/i, // Base injection
    /<col/i, // Col injection
    /<colgroup/i, // Colgroup injection
    /<fieldset/i, // Fieldset injection
    /<legend/i, // Legend injection
    /<optgroup/i, // Optgroup injection
    /<output/i, // Output injection
    /<progress/i, // Progress injection
    /<meter/i, // Meter injection
    /<details/i, // Details injection
    /<summary/i, // Summary injection
    /<dialog/i, // Dialog injection
    /<menu/i, // Menu injection
    /<menuitem/i, // Menuitem injection
    /<command/i, // Command injection
    /<keygen/i, // Keygen injection
    /<param/i, // Param injection
    /<applet/i, // Applet injection
    /<frameset/i, // Frameset injection
    /<frame/i, // Frame injection
    /<noframes/i, // Noframes injection
    /<noscript/i, // Noscript injection
    /<template/i, // Template injection
    /<slot/i, // Slot injection
    /<shadow/i, // Shadow injection
    /<content/i, // Content injection
    /<element/i, // Element injection
    /<decorator/i, // Decorator injection
    /<import/i, // Import injection
    /<include/i, // Include injection
    /<require/i, // Require injection
    /<extend/i, // Extend injection
    /<mixin/i, // Mixin injection
    /<use/i, // Use injection
    /<defs/i, // Defs injection
    /<g/i, // G injection
    /<path/i, // Path injection
    /<circle/i, // Circle injection
    /<ellipse/i, // Ellipse injection
    /<line/i, // Line injection
    /<polyline/i, // Polyline injection
    /<polygon/i, // Polygon injection
    /<rect/i, // Rect injection
    /<text/i, // Text injection
    /<tspan/i, // Tspan injection
    /<textPath/i, // TextPath injection
    /<tref/i, // Tref injection
    /<tbreak/i, // Tbreak injection
    /<altGlyph/i, // AltGlyph injection
    /<altGlyphDef/i, // AltGlyphDef injection
    /<altGlyphItem/i, // AltGlyphItem injection
    /<glyph/i, // Glyph injection
    /<glyphRef/i, // GlyphRef injection
    /<marker/i, // Marker injection
    /<pattern/i, // Pattern injection
    /<clipPath/i, // ClipPath injection
    /<mask/i, // Mask injection
    /<linearGradient/i, // LinearGradient injection
    /<radialGradient/i, // RadialGradient injection
    /<stop/i, // Stop injection
    /<switch/i, // Switch injection
    /<symbol/i, // Symbol injection
    /<view/i, // View injection
    /<use/i, // Use injection
    /<image/i, // Image injection
    /<foreignObject/i, // ForeignObject injection
    /<desc/i, // Desc injection
    /<title/i, // Title injection
    /<metadata/i // Metadata injection
  ]
  
  for (const pattern of attackPatterns) {
    if (pattern.test(url) || pattern.test(userAgent)) {
      logSecurityEvent('AttackPatternDetected', { ip, userAgent, url, pattern: pattern.toString() })
      return new NextResponse('Forbidden', { status: 403 })
    }
  }
  
  // Continue with the request
  return NextResponse.next()
}

// Export security utilities
export {
  sanitizeInput,
  isValidEmail,
  isValidPhone,
  isValidName,
  isSuspiciousPattern,
  logSecurityEvent
}
