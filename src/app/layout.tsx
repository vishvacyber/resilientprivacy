import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import { ToastProvider } from '@/components/ui/toast'
import CookieConsent from '@/components/CookieConsent'
import AnalyticsWrapper from '@/components/AnalyticsWrapper'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://resilientprivacy.com'),
  title: {
    default:
      'Resilient Privacy - #1 Cybersecurity Company | Enterprise Security Solutions',
    template: '%s | Resilient Privacy - #1 Cybersecurity Company',
  },
  description:
    'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, threat intelligence, and 24/7 managed security services. Trusted by organizations worldwide.',
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
    'security training',
    'cybersecurity firm',
    'security experts',
    'cyber defense',
    'security operations center',
    'penetration testing',
    'security audit',
    'risk management',
    'security architecture',
    'cyber resilience',
    'information security',
    'network security',
    'application security',
    'cybersecurity company USA',
    'cybersecurity services Delaware',
    'cybersecurity consulting Wilmington',
    'managed security services US',
    'cybersecurity experts America',
    'enterprise security solutions',
    'cybersecurity firm Delaware',
    'security consulting services',
    'cybersecurity company near me',
    'best cybersecurity company',
    'top cybersecurity firm',
    'cybersecurity services global',
    'cybersecurity company worldwide',
    'enterprise cybersecurity solutions',
    'cybersecurity consulting global',
    'managed security services worldwide',
    'cybersecurity experts international',
    'cybersecurity firm global',
    'security consulting international',
    'cybersecurity company international',
    'enterprise security global',
  ],
  authors: [
    {
      name: 'Vishva Patel',
      url: 'https://resilientprivacy.com/about/leadership/vishva-patel',
    },
    {
      name: 'Aditya Desai',
      url: 'https://resilientprivacy.com/about/leadership/aditya-desai',
    },
    {
      name: 'Keral Patel',
      url: 'https://resilientprivacy.com/about/leadership/keral-patel',
    },
  ],
  creator: 'Resilient Privacy',
  publisher: 'Resilient Privacy',
  applicationName: 'Resilient Privacy',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resilientprivacy.com',
    siteName: 'Resilient Privacy',
    title:
      'Resilient Privacy - #1 Cybersecurity Company | Enterprise Security Solutions',
    description:
      'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, threat intelligence, and 24/7 managed security services. Trusted by organizations worldwide.',
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
    site: '@resilientprivacy',
    creator: '@resilientprivacy',
    title:
      'Resilient Privacy - #1 Cybersecurity Company | Enterprise Security Solutions',
    description:
      'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, and 24/7 managed security services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: 'https://resilientprivacy.com',
    languages: {
      'en-US': 'https://resilientprivacy.com',
    },
  },
  category: 'Technology',
  classification: 'Cybersecurity Services',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Resilient Privacy',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': 'accent-500',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': 'accent-500',
  },
}

// Enhanced structured data for organization with AEO and GEO optimization
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Resilient Privacy',
  alternateName: 'Resilient Privacy - #1 Cybersecurity Company',
  url: 'https://resilientprivacy.com',
  logo: 'https://resilientprivacy.com/favicon.svg',
  description:
    'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, threat intelligence, and 24/7 managed security services. Trusted by organizations worldwide.',
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
      telephone: '+1-469-666-0131',
      contactType: 'customer service',
      email: 'info@resilientprivacy.com',
      availableLanguage: 'English',
      areaServed: ['US', 'CA', 'UK', 'AU', 'DE', 'FR', 'IN'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'sales@resilientprivacy.com',
      availableLanguage: 'English',
      areaServed: ['US', 'CA', 'UK', 'AU', 'DE', 'FR', 'IN'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'technical support',
      email: 'support@resilientprivacy.com',
      availableLanguage: 'English',
      areaServed: ['US', 'CA', 'UK', 'AU', 'DE', 'FR', 'IN'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'Delaware',
    addressLocality: 'Wilmington',
  },
  serviceArea: [
    {
      '@type': 'Country',
      name: 'United States',
    },
    {
      '@type': 'Country',
      name: 'Canada',
    },
    {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    {
      '@type': 'Country',
      name: 'Australia',
    },
    {
      '@type': 'Country',
      name: 'Germany',
    },
    {
      '@type': 'Country',
      name: 'France',
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cybersecurity Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Identity & Access Management',
          description:
            'Comprehensive identity governance and access management solutions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Zero Trust Network Architecture',
          description:
            'Zero trust security architecture implementation and management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Threat Intelligence Platform',
          description: 'Advanced threat intelligence and monitoring services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Managed Security Services',
          description:
            '24/7 security operations center and managed security services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Incident Response',
          description: 'Rapid incident response and cybersecurity consulting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Red Teaming',
          description: 'Advanced red team exercises and penetration testing',
        },
      },
    ],
  },
  knowsAbout: [
    'Cybersecurity',
    'Identity Management',
    'Zero Trust Architecture',
    'Threat Intelligence',
    'Incident Response',
    'Security Consulting',
    'Risk Management',
    'Compliance',
    'Digital Trust',
    'Cloud Security',
    'Network Security',
    'Application Security',
    'Data Protection',
    'Privacy Compliance',
    'Security Assessment',
    'Vulnerability Management',
    'Penetration Testing',
    'Security Training',
    'SOC Services',
    'Managed Detection and Response',
  ],
}

// FAQ structured data for AEO optimization
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What cybersecurity services does Resilient Privacy offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resilient Privacy offers comprehensive cybersecurity services including identity governance, zero trust architecture implementation, threat intelligence platforms, managed security services, incident response, red teaming, security assessments, and cybersecurity consulting. We provide 24/7 SOC services and help organizations build resilient security ecosystems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does zero trust architecture improve cybersecurity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero trust architecture improves cybersecurity by implementing "never trust, always verify" principles. It eliminates implicit trust, continuously validates user and device identities, and provides granular access controls. This approach reduces attack surfaces, prevents lateral movement, and enhances overall security posture by treating every access request as potentially malicious.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is identity governance and why is it important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Identity governance is a framework for managing user identities, access rights, and permissions across an organization. It ensures proper access controls, compliance with regulations, and reduces security risks by implementing automated provisioning, deprovisioning, and access reviews. It's crucial for preventing unauthorized access and maintaining regulatory compliance.",
      },
    },
    {
      '@type': 'Question',
      name: 'How can threat intelligence help protect my organization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Threat intelligence provides actionable insights about current and emerging cyber threats, attack patterns, and threat actors. It helps organizations proactively identify vulnerabilities, understand attack methods, and implement appropriate defenses. This intelligence enables faster incident response and helps prevent successful cyber attacks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are managed security services and their benefits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Managed security services (MSS) provide 24/7 monitoring, threat detection, and incident response through a Security Operations Center (SOC). Benefits include continuous protection, expert security professionals, advanced threat detection tools, faster incident response, cost-effectiveness, and access to the latest security technologies without the need for in-house expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does incident response help during a cyber attack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Incident response provides a structured approach to managing and mitigating cyber attacks. It includes preparation, detection, containment, eradication, recovery, and lessons learned phases. Effective incident response minimizes damage, reduces recovery time, preserves evidence, and helps prevent future attacks by learning from the incident.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is red teaming and how does it improve security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Red teaming simulates real-world cyber attacks to test an organization's security defenses. It identifies vulnerabilities, tests incident response procedures, and provides realistic security assessments. Red teaming helps organizations understand their security posture, improve defenses, and prepare for actual attacks.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries does Resilient Privacy serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resilient Privacy serves organizations across various industries including healthcare, finance, technology, manufacturing, government, education, retail, and professional services. We provide tailored cybersecurity solutions that meet industry-specific compliance requirements and security challenges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Resilient Privacy ensure compliance with regulations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resilient Privacy helps organizations achieve compliance with regulations like GDPR, HIPAA, SOX, PCI DSS, and industry-specific standards. We provide compliance assessments, implement security controls, conduct audits, and offer ongoing monitoring to ensure continuous compliance with evolving regulatory requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Resilient Privacy different from other cybersecurity companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resilient Privacy combines strategic cybersecurity expertise with cutting-edge technology solutions. Our leadership team brings decades of experience, we offer comprehensive services from consulting to managed services, and we focus on building long-term partnerships. We provide personalized solutions, 24/7 support, and help organizations build resilient, future-ready security ecosystems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Resilient Privacy provide cybersecurity services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resilient Privacy provides cybersecurity services globally, with primary focus on the United States, Canada, United Kingdom, Australia, Germany, France, and India. We offer remote and on-site services, with our headquarters in Delaware, USA. Our global presence allows us to serve clients across multiple time zones with 24/7 support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can Resilient Privacy respond to a cybersecurity incident?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resilient Privacy provides rapid incident response with 24/7 availability. Our incident response team can be activated within 1 hour of notification for critical incidents. We offer immediate containment, forensic analysis, and recovery services to minimize business impact and restore normal operations as quickly as possible.',
      },
    },
  ],
}

// Local Business structured data for GEO optimization
const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Resilient Privacy',
  alternateName: 'Resilient Privacy - #1 Cybersecurity Company',
  description:
    'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, and threat intelligence services.',
  url: 'https://resilientprivacy.com',
  logo: 'https://resilientprivacy.com/favicon.svg',
  image: 'https://resilientprivacy.com/og-image.jpg',
  telephone: '+1-469-666-0131',
  email: 'info@resilientprivacy.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1209 Orange Street',
    addressLocality: 'Wilmington',
    addressRegion: 'Delaware',
    postalCode: '19801',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.7392,
    longitude: -75.5398,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  serviceArea: [
    {
      '@type': 'Country',
      name: 'United States',
    },
    {
      '@type': 'Country',
      name: 'Canada',
    },
    {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    {
      '@type': 'Country',
      name: 'Australia',
    },
    {
      '@type': 'Country',
      name: 'Germany',
    },
    {
      '@type': 'Country',
      name: 'France',
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cybersecurity Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Identity & Access Management',
          description:
            'Comprehensive identity governance and access management solutions',
          provider: {
            '@type': 'Organization',
            name: 'Resilient Privacy',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Zero Trust Network Architecture',
          description:
            'Zero trust security architecture implementation and management',
          provider: {
            '@type': 'Organization',
            name: 'Resilient Privacy',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Threat Intelligence Platform',
          description: 'Advanced threat intelligence and monitoring services',
          provider: {
            '@type': 'Organization',
            name: 'Resilient Privacy',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Managed Security Services',
          description:
            '24/7 security operations center and managed security services',
          provider: {
            '@type': 'Organization',
            name: 'Resilient Privacy',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Incident Response',
          description: 'Rapid incident response and cybersecurity consulting',
          provider: {
            '@type': 'Organization',
            name: 'Resilient Privacy',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Red Teaming',
          description: 'Advanced red team exercises and penetration testing',
          provider: {
            '@type': 'Organization',
            name: 'Resilient Privacy',
          },
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '$$$',
  currenciesAccepted: 'USD, CAD, EUR, GBP, AUD, INR',
  paymentAccepted: 'Credit Card, Bank Transfer, PayPal',
  foundingDate: '2024',
  numberOfEmployees: '10-50',
  knowsAbout: [
    'Cybersecurity',
    'Identity Management',
    'Zero Trust Architecture',
    'Threat Intelligence',
    'Incident Response',
    'Security Consulting',
    'Risk Management',
    'Compliance',
    'Digital Trust',
    'Cloud Security',
    'Network Security',
    'Application Security',
    'Data Protection',
    'Privacy Compliance',
    'Security Assessment',
    'Vulnerability Management',
    'Penetration Testing',
    'Security Training',
    'SOC Services',
    'Managed Detection and Response',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icon-512.png"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme and App Configuration */}
        <meta name="theme-color" content="accent-500" />
        <meta name="msapplication-TileColor" content="accent-500" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Apple Web App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Resilient Privacy" />

        {/* Mobile Web App Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* FAQ Structured Data for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />

        {/* Local Business Structured Data for GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />

        {/* Handle browser extension hydration issues */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove Grammarly and other browser extension attributes that cause hydration issues
              (function() {
                // List of attributes that browser extensions commonly add
                const problematicAttributes = [
                  'data-new-gr-c-s-check-loaded',
                  'data-gr-ext-installed',
                  'data-gramm',
                  'data-gramm_editor',
                  'data-gramm_id',
                  'data-lp-browser-extension',
                  'data-grammarly-shadow-root'
                ];

                function removeProblematicAttributes() {
                  const body = document.body;
                  if (body) {
                    problematicAttributes.forEach(attr => {
                      if (body.hasAttribute(attr)) {
                        body.removeAttribute(attr);
                      }
                    });
                  }
                }

                // Remove attributes immediately if body exists
                if (document.body) {
                  removeProblematicAttributes();
                } else {
                  // Wait for body to be available
                  document.addEventListener('DOMContentLoaded', removeProblematicAttributes);
                }

                // Set up observer to catch attributes added after initial load
                if (typeof window !== 'undefined') {
                  const observer = new MutationObserver((mutations) => {
                    let shouldRemove = false;
                    mutations.forEach((mutation) => {
                      if (mutation.type === 'attributes' && mutation.target === document.body) {
                        if (problematicAttributes.includes(mutation.attributeName)) {
                          shouldRemove = true;
                        }
                      }
                    });
                    if (shouldRemove) {
                      removeProblematicAttributes();
                    }
                  });
                  
                  // Start observing once body is available
                  if (document.body) {
                    observer.observe(document.body, {
                      attributes: true,
                      attributeFilter: problematicAttributes
                    });
                  } else {
                    document.addEventListener('DOMContentLoaded', () => {
                      observer.observe(document.body, {
                        attributes: true,
                        attributeFilter: problematicAttributes
                      });
                    });
                  }
                }

                // Also handle any existing attributes on page load
                window.addEventListener('load', removeProblematicAttributes);
              })();
            `,
          }}
        />

        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/vishva-patel-headshot.jpg"
          as="image"
          type="image/jpeg"
        />
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <main
            id="main-content"
            tabIndex={-1}
            className="min-h-screen w-full flex flex-col"
          >
            {children}
          </main>
          <Footer />
          <ToastProvider />
          <CookieConsent />
          <SpeedInsights />
          <AnalyticsWrapper />
        </Providers>
      </body>
    </html>
  )
}
