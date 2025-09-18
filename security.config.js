/**
 * 🔐 SECURITY CONFIGURATION
 * Comprehensive security settings for the Resilient Privacy website
 * 
 * This file contains all security-related configurations to prevent:
 * - Code injection attacks
 * - XSS vulnerabilities
 * - CSRF attacks
 * - Data exposure
 * - Unauthorized access
 */

const securityConfig = {
  // Content Security Policy (CSP) Configuration
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'", // Required for Next.js
        "'unsafe-eval'", // Required for Next.js
        "https://vercel.live",
        "https://va.vercel-scripts.com",
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com"
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'", // Required for Tailwind CSS
        "https://fonts.googleapis.com"
      ],
      fontSrc: [
        "'self'",
        "https://fonts.gstatic.com"
      ],
      imgSrc: [
        "'self'",
        "data:",
        "https:",
        "blob:"
      ],
      connectSrc: [
        "'self'",
        "https://vercel.live",
        "https://va.vercel-scripts.com",
        "https://www.google-analytics.com",
        "https://analytics.google.com"
      ],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      upgradeInsecureRequests: true
    }
  },

  // Security Headers Configuration
  headers: {
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // XSS Protection
    'X-XSS-Protection': '1; mode=block',
    
    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Permissions Policy
    'Permissions-Policy': [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()',
      'ambient-light-sensor=()',
      'autoplay=()',
      'encrypted-media=()',
      'fullscreen=()',
      'picture-in-picture=()',
      'publickey-credentials-get=()',
      'screen-wake-lock=()',
      'sync-xhr=()',
      'web-share=()',
      'xr-spatial-tracking=()'
    ].join(', '),
    
    // HSTS
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    
    // DNS Prefetch Control
    'X-DNS-Prefetch-Control': 'off',
    
    // Download Options
    'X-Download-Options': 'noopen',
    
    // Cross-Domain Policies
    'X-Permitted-Cross-Domain-Policies': 'none'
  },

  // Input Validation Rules
  validation: {
    // Email validation
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    
    // Phone validation
    phone: /^[\+]?[1-9][\d]{0,15}$/,
    
    // Name validation
    name: /^[a-zA-Z\s]{2,50}$/,
    
    // Company validation
    company: /^[a-zA-Z0-9\s\-\&\.]{2,100}$/,
    
    // URL validation
    url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    
    // Sanitization patterns
    sanitize: {
      // Remove potentially dangerous characters
      dangerousChars: /[<>\"'%;()&+]/g,
      
      // Remove script tags
      scriptTags: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      
      // Remove event handlers
      eventHandlers: /\bon\w+\s*=\s*["'][^"']*["']/gi,
      
      // Remove javascript: protocols
      javascriptProtocol: /javascript:/gi
    }
  },

  // Rate Limiting Configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false
  },

  // File Upload Security
  fileUpload: {
    allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    maxSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 5,
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp', '.avif'],
    scanForMalware: true
  },

  // Session Security
  session: {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    rolling: true
  },

  // Password Security
  password: {
    minLength: 12,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
    maxAttempts: 5,
    lockoutDuration: 15 * 60 * 1000 // 15 minutes
  },

  // API Security
  api: {
    requireAuth: true,
    rateLimit: true,
    validateInput: true,
    sanitizeOutput: true,
    logRequests: true,
    logErrors: true
  },

  // Database Security
  database: {
    encryptAtRest: true,
    useSSL: true,
    connectionLimit: 10,
    timeout: 30000,
    retryAttempts: 3
  },

  // Monitoring and Logging
  monitoring: {
    logSecurityEvents: true,
    logFailedAttempts: true,
    logSuspiciousActivity: true,
    alertOnBreach: true,
    retentionDays: 90
  }
}

module.exports = securityConfig
