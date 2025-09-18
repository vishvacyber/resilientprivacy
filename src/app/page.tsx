import Link from 'next/link'
import { Suspense } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import AnimatedCounter from '@/components/AnimatedCounter'
import LoadingSpinner from '@/components/LoadingSpinner'
import AnimatedText from '@/components/AnimatedText'

export const metadata: Metadata = {
  title:
    'Resilient Privacy - #1 Cybersecurity Company | Enterprise Security Solutions',
  description:
    'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, threat intelligence, and managed security services. Trusted by businesses worldwide.',
  keywords: [
    'cybersecurity company',
    'cyber security company',
    'top cybersecurity company',
    'best cybersecurity company',
    'cybersecurity services',
    'cyber security services',
    'enterprise cybersecurity',
    'cybersecurity consulting',
    'cybersecurity solutions',
    'cyber security solutions',
    'cybersecurity firm',
    'cyber security firm',
    'cybersecurity experts',
    'cyber security experts',
    'cybersecurity professionals',
    'cyber security professionals',
    'identity management',
    'zero trust',
    'threat intelligence',
    'managed security services',
    'SOC',
    'compliance',
    'GDPR',
    'HIPAA',
    'ISO 27001',
    'SOC 2',
  ],
  openGraph: {
    title:
      'Resilient Privacy - #1 Cybersecurity Company | Enterprise Security Solutions',
    description:
      'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, threat intelligence, and managed security services. Trusted by businesses worldwide.',
    type: 'website',
    url: 'https://resilientprivacy.com',
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
    title:
      'Resilient Privacy - #1 Cybersecurity Company | Enterprise Security Solutions',
    description:
      'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, threat intelligence, and managed security services. Trusted by businesses worldwide.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://resilientprivacy.com',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Loading fallback for better UX */}
      <Suspense
        fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
      >
        {/* Add skip-to-content link for accessibility at the top of the page */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 bg-accent-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
        >
          Skip to main content
        </a>

        {/* Wrap main content for skip link */}
        <div id="main-content">
          {/* Hero Section - Mobile Optimized */}
          <section
            className="hero-gradient py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 px-4 sm:px-6 relative overflow-hidden"
            role="region"
            aria-labelledby="hero-heading"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5"></div>
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <h1
                id="hero-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2"
              >
                A Secure <span className="inline-block min-w-[120px]"><AnimatedText /></span> Release Engine Company
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4">
                <Link
                  href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 glow"
                  aria-label="Request Consultation"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </section>

          {/* Enhanced Metrics Counter - Mobile Optimized */}
          <section
            className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 bg-background"
            role="region"
            aria-labelledby="impact-heading"
          >
            <div className="max-w-7xl mx-auto">
              <h2
                id="impact-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
              >
                Our Impact in Numbers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-center px-4">
                <div className="group">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={5000000} suffix="+" />
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    Threats Blocked
                  </div>
                </div>
                <div className="group">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={99} suffix=".9%" />
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    Detection Rate
                  </div>
                </div>
                <div className="group">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    Global Clients
                  </div>
                </div>
                <div className="group">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={24} suffix="/7" />
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    IR Hotline
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services - Streamlined */}
          <section
            className="py-12 md:py-16 px-4 sm:px-6 bg-background-alt"
            role="region"
            aria-labelledby="services-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl font-bold text-center mb-12 px-4"
              >
                Our Core Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link
                  href="/products"
                  className="group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center shadow-purple group-hover:shadow-purple-lg transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                      Products
                    </h3>
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                    Identity & Access Suite, Zero Trust Network Edge, EDR/XDR,
                    Cloud Security Posture, and Threat Intelligence Platform.
                  </p>
                  <span className="text-[#8B5CF6] text-sm font-medium group-hover:underline">
                    Learn More →
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-blue rounded-lg flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                      Managed Services
                    </h3>
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                    24/7 SOC operations, incident response, threat hunting, and
                    managed detection and response services.
                  </p>
                  <span className="text-[#8B5CF6] text-sm font-medium group-hover:underline">
                    Learn More →
                  </span>
                </Link>

                <Link
                  href="/products/threat-intelligence-platform"
                  className="group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-green rounded-lg flex items-center justify-center shadow-green group-hover:shadow-green-lg transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                      Threat Intel
                    </h3>
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                    Real-time threat intelligence, adversary tracking, and
                    proactive threat hunting capabilities.
                  </p>
                  <span className="text-[#8B5CF6] text-sm font-medium group-hover:underline">
                    Learn More →
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center shadow-orange group-hover:shadow-orange-lg transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        <path d="M12 6l1.09 2.26L15.5 8.27l-2.5 2.43.59 3.44L12 13.77l-1.59.84.59-3.44L8.5 8.27l2.41-.01L12 6z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                      Strategic Consulting
                    </h3>
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                    Zero trust architecture, compliance frameworks, red teaming,
                    and cybersecurity strategy development.
                  </p>
                  <span className="text-[#8B5CF6] text-sm font-medium group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              </div>
            </div>
          </section>

          {/* Additional Metrics - Mobile Optimized */}
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-center px-4">
                <div className="group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={2} />
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    Global SOCs
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={99} suffix=".99%" />
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    SLA
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={15} suffix="-min" />
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    Avg MTTD
                  </div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={1000} suffix="+" />
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    Incidents Resolved
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Insights Teasers - Mobile Optimized */}
          <section
            className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 bg-background-alt"
            role="region"
            aria-labelledby="insights-heading"
          >
            <div className="max-w-7xl mx-auto">
              <h2
                id="insights-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
              >
                Latest Insights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
                <div className="card group">
                  <div className="text-accent-400 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 font-semibold uppercase tracking-wide">
                    Threat Intelligence
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-3 sm:mb-4 md:mb-6">
                    Ransomware Trends Q4 2024
                  </h3>
                  <p className="text-text-secondary mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base">
                    Analysis of emerging ransomware tactics and defense
                    strategies for enterprise organizations.
                  </p>
                  <Link
                    href="/resources/blog"
                    className="text-gradient hover:underline font-semibold text-xs sm:text-sm md:text-base"
                  >
                    Read More →
                  </Link>
                </div>
                <div className="card group">
                  <div className="text-accent-400 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 font-semibold uppercase tracking-wide">
                    Zero Trust
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-3 sm:mb-4 md:mb-6">
                    Implementing Zero Trust Architecture
                  </h3>
                  <p className="text-text-secondary mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base">
                    Step-by-step guide to implementing zero trust principles in
                    enterprise environments.
                  </p>
                  <Link
                    href="/resources/blog"
                    className="text-gradient hover:underline font-semibold text-xs sm:text-sm md:text-base"
                  >
                    Read More →
                  </Link>
                </div>
                <div className="card group">
                  <div className="text-accent-400 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 font-semibold uppercase tracking-wide">
                    Compliance
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-3 sm:mb-4 md:mb-6">
                    SOC 2 Type II Compliance Guide
                  </h3>
                  <p className="text-text-secondary mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base">
                    Comprehensive guide to achieving and maintaining SOC 2 Type
                    II compliance.
                  </p>
                  <Link
                    href="/resources/blog"
                    className="text-gradient hover:underline font-semibold text-xs sm:text-sm md:text-base"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials - Mobile Optimized */}
          <section
            className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 bg-background"
            role="region"
            aria-labelledby="testimonials-heading"
          >
            <div className="max-w-7xl mx-auto">
              <h2
                id="testimonials-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
              >
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
                <div className="card group">
                  <div className="text-accent-400 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6">
                    &ldquo;
                  </div>
                  <p className="text-text-secondary mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                    Resilient Privacy transformed our security posture. Their
                    zero trust implementation reduced our attack surface by 80%.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-purple rounded-full mr-2 sm:mr-3 md:mr-4"></div>
                    <div>
                      <div className="text-text-primary font-semibold text-xs sm:text-sm md:text-base">
                        Meet Chauhan
                      </div>
                      <div className="text-text-tertiary text-xs sm:text-sm">
                        CISO, Enterprise Tech
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card group">
                  <div className="text-accent-400 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6">
                    &ldquo;
                  </div>
                  <p className="text-text-secondary mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                    Their threat intelligence platform provides real-time
                    insights that have prevented multiple attacks.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-purple rounded-full mr-2 sm:mr-3 md:mr-4"></div>
                    <div>
                      <div className="text-text-primary font-semibold text-xs sm:text-sm md:text-base">
                        Ashley Patel
                      </div>
                      <div className="text-text-tertiary text-xs sm:text-sm">
                        Security Director, Healthcare
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card group">
                  <div className="text-accent-400 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6">
                    &ldquo;
                  </div>
                  <p className="text-text-secondary mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                    The managed security services team is exceptional. 24/7
                    monitoring with 15-minute response times.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-purple rounded-full mr-2 sm:mr-3 md:mr-4"></div>
                    <div>
                      <div className="text-text-primary font-semibold text-xs sm:text-sm md:text-base">
                        Mihir Mehta
                      </div>
                      <div className="text-text-tertiary text-xs sm:text-sm">
                        CTO, Diamond Manufacturing Industry
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - Mobile Optimized */}
          <section
            className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 hero-gradient"
            role="region"
            aria-labelledby="cta-heading"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 px-4"
              >
                Ready to elevate your security posture?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-4">
                Join hundreds of organizations that trust Resilient Privacy with
                their cybersecurity needs.
              </p>
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 glow"
                aria-label="Request a Consultation"
              >
                Request a Consultation
              </Link>
            </div>
          </section>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Resilient Privacy',
              url: 'https://resilientprivacy.com',
              description:
                'Resilient Privacy is the #1 cybersecurity company providing enterprise-grade security solutions. Top-rated identity management, zero trust architecture, threat intelligence, and managed security services. Trusted by businesses worldwide.',
              foundingDate: '2025',
              founder: {
                '@type': 'Person',
                name: 'Vishva Patel',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-469-666-0131',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
              sameAs: [
                'https://www.linkedin.com/company/resilientprivacy/',
                'https://www.instagram.com/resilientprivacy',
              ],
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 39.7447,
                  longitude: -75.5484,
                },
                geoRadius: '10000',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Cybersecurity Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Cybersecurity Consulting',
                      description:
                        'Strategic cybersecurity consulting and risk assessment services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Managed Security Services',
                      description:
                        '24/7 security monitoring and threat response by certified experts',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Identity & Access Management',
                      description:
                        'Comprehensive identity security and access control solutions',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Zero Trust Architecture',
                      description:
                        'Advanced zero trust network security solutions',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '150',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />

        {/* FAQ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the best cybersecurity company?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Resilient Privacy is recognized as the #1 cybersecurity company, providing enterprise-grade security solutions including identity management, zero trust architecture, threat intelligence, and managed security services. We are trusted by businesses worldwide.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What cybersecurity services do you offer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We offer comprehensive cybersecurity services including cybersecurity consulting, managed security services, penetration testing, incident response, identity & access management, zero trust architecture, threat intelligence, and compliance consulting.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you work with large organizations?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Resilient Privacy is trusted by businesses across various industries including healthcare, finance, technology, and manufacturing. We provide enterprise-grade security solutions tailored to organizations of all sizes.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What makes your cybersecurity company different?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Resilient Privacy stands out as the #1 cybersecurity company due to our 99.9% detection rate, 24/7 monitoring, strategic North American presence, and proven track record of protecting over 5 million threats. Our team of 200+ cybersecurity experts provides unmatched expertise.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How quickly can you respond to security incidents?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our managed security services provide 24/7 monitoring with an average response time of 15 minutes. We offer immediate incident response and digital forensics services to minimize damage and recovery time.',
                  },
                },
              ],
            }),
          }}
        />
      </Suspense>
    </div>
  )
}
