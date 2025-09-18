import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://resilientprivacy.com'

  const pages = [
    // High Priority - Main Pages
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.9', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/products', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'weekly' },

    // About Pages
    { url: '/about/leadership', priority: '0.7', changefreq: 'monthly' },
    {
      url: '/about/leadership/vishva-patel',
      priority: '0.6',
      changefreq: 'monthly',
    },
    {
      url: '/about/leadership/aditya-desai',
      priority: '0.6',
      changefreq: 'monthly',
    },
    {
      url: '/about/leadership/keral-patel',
      priority: '0.6',
      changefreq: 'monthly',
    },

    { url: '/about/careers', priority: '0.6', changefreq: 'weekly' },

    // Product Pages - High SEO Value
    {
      url: '/products/identity-access-suite',
      priority: '0.8',
      changefreq: 'weekly',
    },
    {
      url: '/products/zero-trust-network-edge',
      priority: '0.8',
      changefreq: 'weekly',
    },
    { url: '/products/edr-xdr', priority: '0.8', changefreq: 'weekly' },
    {
      url: '/products/cloud-security-posture',
      priority: '0.8',
      changefreq: 'weekly',
    },
    {
      url: '/products/threat-intelligence-platform',
      priority: '0.8',
      changefreq: 'weekly',
    },
    {
      url: '/products/dlp-data-governance',
      priority: '0.8',
      changefreq: 'weekly',
    },
    {
      url: '/products/secure-api-gateway',
      priority: '0.8',
      changefreq: 'weekly',
    },

    // Service Pages - High SEO Value
    {
      url: '/services/cybersecurity-consulting',
      priority: '0.8',
      changefreq: 'weekly',
    },
    {
      url: '/services/managed-security',
      priority: '0.8',
      changefreq: 'weekly',
    },
    {
      url: '/services/incident-response',
      priority: '0.8',
      changefreq: 'weekly',
    },
    { url: '/services/red-teaming', priority: '0.8', changefreq: 'weekly' },
    { url: '/services/training', priority: '0.7', changefreq: 'monthly' },
    {
      url: '/services/governance-compliance',
      priority: '0.8',
      changefreq: 'weekly',
    },
    {
      url: '/services/it-infrastructure',
      priority: '0.7',
      changefreq: 'monthly',
    },
    { url: '/services/data-center', priority: '0.7', changefreq: 'monthly' },
    { url: '/services/it-consulting', priority: '0.8', changefreq: 'weekly' },

    // Resource Pages
    { url: '/resources', priority: '0.7', changefreq: 'weekly' },
    { url: '/resources/blog', priority: '0.7', changefreq: 'daily' },
    { url: '/resources/documentation', priority: '0.6', changefreq: 'monthly' },
    {
      url: '/resources/threat-reports',
      priority: '0.6',
      changefreq: 'monthly',
    },
    { url: '/resources/training', priority: '0.6', changefreq: 'monthly' },

    // Other Important Pages

    { url: '/trust', priority: '0.6', changefreq: 'monthly' },
    { url: '/security', priority: '0.6', changefreq: 'monthly' },
    { url: '/community', priority: '0.5', changefreq: 'monthly' },

    { url: '/innovation/events', priority: '0.5', changefreq: 'weekly' },
    {
      url: '/innovation/incident-response',
      priority: '0.6',
      changefreq: 'monthly',
    },

    // Legal Pages
    { url: '/legal', priority: '0.6', changefreq: 'monthly' },
    { url: '/legal/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { url: '/legal/terms-of-service', priority: '0.5', changefreq: 'monthly' },
    { url: '/legal/cookie-policy', priority: '0.5', changefreq: 'monthly' },
    { url: '/legal/consent-policy', priority: '0.5', changefreq: 'monthly' },
    {
      url: '/legal/data-processing-agreement',
      priority: '0.5',
      changefreq: 'monthly',
    },
    {
      url: '/legal/accessibility-statement',
      priority: '0.5',
      changefreq: 'monthly',
    },

    // Privacy Policy Sections
    {
      url: '/legal/privacy-policy/sections/introduction-scope',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/definitions',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/information-collection',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/use-of-information',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/information-sharing',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/legal-basis',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/data-retention',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/data-security',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/international-transfers',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/your-rights',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/jurisdiction-specific-rights',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/childrens-privacy',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/third-party-services',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/business-transfers',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/legal-compliance',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/limitations-disclaimers',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/governing-law',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/updates-to-policy',
      priority: '0.4',
      changefreq: 'monthly',
    },
    {
      url: '/legal/privacy-policy/sections/contact-information',
      priority: '0.4',
      changefreq: 'monthly',
    },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  })
}
