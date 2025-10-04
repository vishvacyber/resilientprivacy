import Link from 'next/link'
import { Suspense } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import AnimatedCounter from '@/components/AnimatedCounter'
import LoadingSpinner from '@/components/LoadingSpinner'
import AnimatedText from '@/components/AnimatedText'
import CompanyScroller from '@/components/CompanyScroller'
import TypewriterText from '@/components/TypewriterText'
import { Shield, Zap, Brain, Lock, ArrowRight, CheckCircle, Star, Users, Target, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Resilient Privacy - Advanced AI & API Security Company | Cutting-Edge Security Solutions',
  description:
    'Resilient Privacy is an advanced AI and API security company providing cutting-edge security solutions. Specialized in AI threat detection, API protection, machine learning security, and advanced cybersecurity services.',
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
      'Resilient Privacy - Advanced AI & API Security Company | Cutting-Edge Security Solutions',
    description:
      'Resilient Privacy is an advanced AI and API security company providing cutting-edge security solutions. Specialized in AI threat detection, API protection, machine learning security, and advanced cybersecurity services.',
    type: 'website',
    url: 'https://resilientprivacy.com',
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
    title:
      'Resilient Privacy - Advanced AI & API Security Company | Cutting-Edge Security Solutions',
    description:
      'Resilient Privacy is an advanced AI and API security company providing cutting-edge security solutions. Specialized in AI threat detection, API protection, machine learning security, and advanced cybersecurity services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://resilientprivacy.com',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500" role="status" aria-label="Loading">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }>
        {/* Hero Section - Wallarm-inspired design */}
        <main id="main-content" className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-alt to-background-card"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-blue-500/5"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="block">
                  <TypewriterText 
                    phrases={[
                      "API Protection",
                      "AI Security", 
                      "Threat Detection",
                      "Zero Trust"
                    ]}
                    className="text-primary-400"
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseTime={2500}
                  />
                </span>
                <span className="block text-primary-400">in Minutes</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-text-secondary mt-3 sm:mt-4">
                  with <span className="text-primary-400 font-semibold">Security Edge</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
                Real-time API threat protection at the edge. Security Edge discovers your API attack surface, stops API attacks in real-time, and automates security testing in development and production.
              </p>
            </div>

            {/* Separator */}
            <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16">
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
              <div className="mx-3 sm:mx-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary-500/30 rounded-full"></div>
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            </div>

            {/* Trusted by section */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <p className="text-center text-text-secondary mb-6 sm:mb-8 text-xs sm:text-sm uppercase tracking-wider font-semibold">
                Trusted by Leading Organizations
              </p>
              <CompanyScroller />
            </div>
          </div>
        </main>

        {/* AI Protection Focus */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                The only platform that protects <span className="text-primary-400">Agentic AI</span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed px-2 mb-8 sm:mb-12">
                AI deployments create complex attack surfaces. We secure them.
              </p>
              
              {/* AI Protection Counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={99} suffix=".9%" />
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary font-medium">
                    AI Threat Detection Accuracy
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={15} suffix="ms" />
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary font-medium">
                    Real-time Response Time
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={24} suffix="/7" />
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary font-medium">
                    AI Security Monitoring
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={50} suffix="K+" />
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary font-medium">
                    AI Models Protected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities - Web Redesigned */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs font-medium text-primary-400">Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Stop attacks, don't just detect them
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Our platform goes beyond traditional security monitoring to actively prevent, block, and neutralize threats in real-time.
              </p>
            </div>
            
            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {[
                { 
                  icon: <Target className="w-12 h-12 text-primary-400" />,
                  title: 'Discover', 
                  subtitle: 'Complete Attack Surface Visibility',
                  description: 'Automated discovery of shadow APIs, undocumented endpoints, and hidden vulnerabilities across your entire digital infrastructure.',
                  href: '/products/coreshield-api-mapping',
                  features: ['Shadow API Detection', 'Endpoint Mapping', 'Vulnerability Discovery'],
                  gradient: 'from-primary-500/20 to-primary-600/10',
                  borderColor: 'border-primary-500/30'
                },
                { 
                  icon: <Zap className="w-12 h-12 text-blue-400" />,
                  title: 'Test', 
                  subtitle: 'AI-Powered Security Testing',
                  description: 'Continuous security testing with AI-powered vulnerability assessment that identifies misconfigurations and security flaws.',
                  href: '/products/coreshield-risk-testing',
                  features: ['Automated Testing', 'AI-Powered Analysis', 'Risk Assessment'],
                  gradient: 'from-blue-500/20 to-blue-600/10',
                  borderColor: 'border-blue-500/30'
                },
                { 
                  icon: <Shield className="w-12 h-12 text-green-400" />,
                  title: 'Protect', 
                  subtitle: 'Real-Time Threat Blocking',
                  description: 'Machine learning models that detect and prevent attacks before they can cause damage to your systems.',
                  href: '/products/coreshield-api-protection-suite',
                  features: ['Real-time Blocking', 'ML Threat Detection', 'Zero-day Protection'],
                  gradient: 'from-green-500/20 to-green-600/10',
                  borderColor: 'border-green-500/30'
                },
                { 
                  icon: <Brain className="w-12 h-12 text-purple-400" />,
                  title: 'Respond', 
                  subtitle: 'Intelligent Incident Response',
                  description: 'Automated threat containment, forensic analysis, and recovery procedures to minimize impact.',
                  href: '/products/ai-security-operations',
                  features: ['Automated Response', 'Threat Containment', 'Forensic Analysis'],
                  gradient: 'from-purple-500/20 to-purple-600/10',
                  borderColor: 'border-purple-500/30'
                },
              ].map((service, index) => (
                <Link key={index} href={service.href} className="group relative bg-background-card border border-border-light/20 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-purple transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-text-tertiary">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics - Streamlined */}
        <section className="py-12 sm:py-16 md:py-20 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Trusted by security leaders worldwide
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="group">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={15} suffix="M+" />
                </div>
                <div className="text-text-secondary text-sm sm:text-base lg:text-lg font-medium">
                  API requests protected daily
                </div>
              </div>
              <div className="group">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={160} suffix="K+" />
                </div>
                <div className="text-text-secondary text-sm sm:text-base lg:text-lg font-medium">
                  APIs secured
                </div>
              </div>
              <div className="group">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={99} suffix=".9%" />
                </div>
                <div className="text-text-secondary text-sm sm:text-base lg:text-lg font-medium">
                  Threat detection accuracy
                </div>
              </div>
              <div className="group">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={15} suffix="-min" />
                </div>
                <div className="text-text-secondary text-sm sm:text-base lg:text-lg font-medium">
                  Average response time
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof - Streamlined */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Trusted by security leaders
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { 
                  quote: "Resilient Privacy really protects our service and provides good visibility and user-friendly control.", 
                  author: "Anton Bulavin", 
                  title: "Head of Application Security" 
                },
                { 
                  quote: "I would absolutely recommend Resilient Privacy, in a heartbeat. They do what they say they can do.", 
                  author: "Rob Davies", 
                  title: "VP of Engineering" 
                },
                { 
                  quote: "The installation is easy and straightforward. We didn't need to change anything in our infrastructure.", 
                  author: "Konstantin Golubitsky", 
                  title: "CTO" 
                },
              ].map((testimonial, index) => (
                <div key={index} className="darkfire-card p-6 sm:p-8 hover:darkfire-shadow transition-all duration-300">
                  <div className="text-primary-400 text-3xl sm:text-4xl mb-3 sm:mb-4">"</div>
                  <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 rounded-full mr-3 sm:mr-4 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-white text-sm sm:text-base">{testimonial.author}</div>
                      <div className="text-text-tertiary text-xs sm:text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Final CTA - Streamlined */}
        <section className="py-12 sm:py-16 md:py-20 bg-background-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to secure your APIs and AI?
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-6 sm:mb-8 px-2">
              Join thousands of security teams protecting their most critical assets.
            </p>
            <div className="flex justify-center px-2">
              <Link
                href="/products"
                className="btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                View Products
              </Link>
            </div>
          </div>
        </section>

      </Suspense>
    </div>
  )
}