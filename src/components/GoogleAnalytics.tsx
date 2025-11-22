'use client'

import Script from 'next/script'
import { sanitizeInput } from '@/lib/utils'

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Sanitize measurementId to prevent XSS attacks
  // GA measurement IDs follow pattern: G-XXXXXXXXXX (alphanumeric with dashes)
  const sanitizedId = sanitizeInput(measurementId).replace(/[^A-Z0-9-]/gi, '')

  // Validate format (should start with G- and be alphanumeric)
  if (!sanitizedId || !/^G-[A-Z0-9]+$/i.test(sanitizedId)) {
    return null
  }

  // Escape the ID for safe use in template strings
  const escapedId = sanitizedId.replace(/'/g, "\\'").replace(/"/g, '\\"')

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${escapedId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${escapedId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}
