import { NextResponse } from 'next/server'

export async function GET() {
  const robotsText = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://resilientprivacy.com/sitemap.xml

# Security
Disallow: /api/
Disallow: /_next/
Disallow: /protected/
Disallow: /admin/
Disallow: /private/

# Allow important pages for SEO
Allow: /about/
Allow: /services/
Allow: /products/
Allow: /solutions/
Allow: /resources/
Allow: /contact

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Additional SEO directives
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block AI training bots
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: Omgilibot
Disallow: /`

  return new NextResponse(robotsText, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  })
}
