import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import { ToastProvider } from '@/components/ui/toast'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://resilientprivacy.com'),
  title: {
    default: 'Resilient Privacy - Leading Cybersecurity Company | Enterprise Security Solutions',
    template: '%s | Resilient Privacy - Leading Cybersecurity Company',
  },
  description: 'Resilient Privacy is a leading cybersecurity company providing enterprise-grade security solutions. Expert identity management, zero trust architecture, threat intelligence, and 24/7 managed security services. Trusted by organizations worldwide.',
  keywords: [
    'cybersecurity solutions',
    'enterprise security',
    'identity governance',
    'zero trust architecture',
    'threat intelligence',
    'managed security services',
    'cybersecurity consulting',
    'digital trust',
    'security compliance',
    'SOC services',
    'incident response',
    'red teaming',
    'security assessment',
    'vulnerability management',
    'cloud security',
    'data protection',
    'privacy compliance',
  ],
  authors: [{ name: 'Resilient Privacy' }],
  creator: 'Resilient Privacy',
  publisher: 'Resilient Privacy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resilientprivacy.com',
    title: 'Resilient Privacy - Leading Cybersecurity Company | Enterprise Security Solutions',
    description: 'Resilient Privacy is a leading cybersecurity company providing enterprise-grade security solutions. Expert identity management, zero trust architecture, threat intelligence, and 24/7 managed security services. Trusted by organizations worldwide.',
    siteName: 'Resilient Privacy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resilient Privacy - #1 Cybersecurity Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resilient Privacy - Leading Cybersecurity Company',
    description: 'Resilient Privacy is a leading cybersecurity company providing enterprise-grade security solutions.',
    images: ['/og-image.jpg'],
    creator: '@resilientprivacy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// Enhanced structured data for organization
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Resilient Privacy',
  alternateName: 'Resilient Privacy - Leading Cybersecurity Company',
  url: 'https://resilientprivacy.com',
  logo: 'https://resilientprivacy.com/favicon.svg',
  description: 'Resilient Privacy is a leading cybersecurity company providing enterprise-grade security solutions. Expert identity management, zero trust architecture, threat intelligence, and 24/7 managed security services. Trusted by organizations worldwide.',
  foundingDate: '2024',
  industry: 'Cybersecurity',
  numberOfEmployees: '10-50',
  employee: [
    {
      '@type': 'Person',
      name: 'Vishva Patel',
      jobTitle: 'Founder, CEO & CISO',
      url: 'https://resilientprivacy.com/about/leadership/vishva-patel',
    },
    {
      '@type': 'Person',
      name: 'Aditya Desai',
      jobTitle: 'Board Member & CTO',
      url: 'https://resilientprivacy.com/about/leadership/aditya-desai',
    },
    {
      '@type': 'Person',
      name: 'Keral Patel',
      jobTitle: 'Chief Operations Officer',
      url: 'https://resilientprivacy.com/about/leadership/keral-patel',
    },
  ],
  sameAs: [
    'https://linkedin.com/company/resilientprivacy',
    'https://twitter.com/resilientprivacy',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Security Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastProvider />
          <CookieConsent />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}