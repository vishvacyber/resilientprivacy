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
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://resilientprivacy.com'),
  title: {
    default: 'Resilient Privacy - Advanced AI & API Security Company | Cutting-Edge Security Solutions',
    template: '%s | Resilient Privacy - Advanced AI & API Security Company',
  },
  description: 'Resilient Privacy is an advanced AI and API security company providing cutting-edge security solutions. Expert AI threat detection, API security, machine learning security, and AI-powered cybersecurity services.',
  keywords: [
    'AI security company',
    'API security solutions',
    'AI threat detection',
    'machine learning security',
    'AI-powered cybersecurity',
    'API security consulting',
    'AI security services',
    'API protection',
    'AI model security',
    'API gateway security',
    'AI security assessment',
    'API vulnerability management',
    'AI security monitoring',
    'API security testing',
    'AI security compliance',
    'API security architecture',
    'AI security training',
    'API security automation',
    'enterprise AI security',
    'AI security consulting',
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
    title: 'Resilient Privacy - Top AI & API Security Company | Enterprise AI Security Solutions',
    description: 'Resilient Privacy is an advanced AI and API security company providing cutting-edge security solutions. Expert AI threat detection, API security, machine learning security, and AI-powered cybersecurity services.',
    siteName: 'Resilient Privacy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resilient Privacy - Advanced AI & API Security Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resilient Privacy - Top AI & API Security Company',
    description: 'Resilient Privacy is an advanced AI and API security company providing cutting-edge security solutions.',
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
    google: 'G-2Q39VN982P',
  },
}

// Enhanced structured data for organization
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Resilient Privacy',
  alternateName: 'Resilient Privacy - Top AI & API Security Company',
  url: 'https://resilientprivacy.com',
  logo: 'https://resilientprivacy.com/favicon.svg',
  description: 'Resilient Privacy is an advanced AI and API security company providing cutting-edge security solutions. Expert AI threat detection, API security, machine learning security, and AI-powered cybersecurity services.',
  foundingDate: '2025',
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
      jobTitle: 'Board Member & CIO',
      url: 'https://resilientprivacy.com/about/leadership/aditya-desai',
    },
    {
      '@type': 'Person',
      name: 'Malay Bhavsar',
      jobTitle: 'CTO & CISO',
      url: 'https://resilientprivacy.com/about/leadership/malay-bhavsar',
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
      email: 'support@resilientprivacy.com',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#8B5CF6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
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
