import Link from 'next/link'
import { Suspense } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import AnimatedCounter from '@/components/AnimatedCounter'
import LoadingSpinner from '@/components/LoadingSpinner'
import AnimatedText from '@/components/AnimatedText'
import CompanyScroller from '@/components/CompanyScroller'

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
    <div className="min-h-screen bg-background">
      <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen" />}>
        {/* Hero Section - DarkFire Style with Cybersecurity Content */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-blue-500/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              A Secure <span className="inline-block min-w-[100px] xs:min-w-[120px]"><AnimatedText /></span> Release Engine Company
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
              Next-generation cybersecurity company redefining digital trust. We design intelligent, adaptive security ecosystems that protect the world's most critical organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn text-lg px-8 py-4 rounded-xl shadow-purple-lg hover:shadow-purple-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="btn-secondary text-lg px-8 py-4 rounded-xl"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted by AI & Security Startups Section */}
        <section className="py-20 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16">
              Trusted by AI & Security Startups
            </h2>
            
            {/* Perfect Scroller Component */}
            <CompanyScroller />
          </div>
        </section>

        {/* Core Services Section - DarkFire Style */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core Cybersecurity Services
              </h2>
              <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Comprehensive security solutions designed to protect your organization from evolving threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Identity & Access Management', 
                  description: 'Advanced identity security and access control solutions with zero trust principles.',
                  icon: '🔐',
                  href: '/products/identity-access-suite'
                },
                { 
                  title: 'Zero Trust Architecture', 
                  description: 'Comprehensive zero trust network security solutions for modern enterprises.',
                  icon: '🛡️',
                  href: '/products/zero-trust-network-edge'
                },
                { 
                  title: 'Threat Intelligence Platform', 
                  description: 'Real-time threat intelligence and proactive threat hunting capabilities.',
                  icon: '🎯',
                  href: '/products/threat-intelligence-platform'
                },
                { 
                  title: 'Cloud Security Posture', 
                  description: 'Advanced cloud security monitoring and compliance management.',
                  icon: '☁️',
                  href: '/products/cloud-security-posture'
                },
                { 
                  title: 'EDR/XDR Solutions', 
                  description: 'Endpoint detection and response with extended detection capabilities.',
                  icon: '🖥️',
                  href: '/products/edr-xdr'
                },
                { 
                  title: 'Managed Security Services', 
                  description: '24/7 SOC operations, incident response, and threat monitoring.',
                  icon: '🔍',
                  href: '/services/managed-security'
                },
              ].map((service, index) => (
                <Link key={index} href={service.href} className="darkfire-card p-8 hover:darkfire-shadow transition-all duration-300 group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:darkfire-text-gradient transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="py-20 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold darkfire-text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={5000000} suffix="+" />
                </div>
                <div className="text-text-secondary text-lg font-medium">
                  Threats Blocked
                </div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold darkfire-text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={99} suffix=".9%" />
                </div>
                <div className="text-text-secondary text-lg font-medium">
                  Detection Rate
                </div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold darkfire-text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-text-secondary text-lg font-medium">
                  IR Hotline
                </div>
              </div>
              <div className="group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold darkfire-text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={15} suffix="-min" />
                </div>
                <div className="text-text-secondary text-lg font-medium">
                  Avg MTTD
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - DarkFire Style */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Advanced Threat Protection With Our AI Platform
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-primary-500 rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Real-Time Threat Detection</h3>
                      <p className="text-text-secondary">Advanced AI-powered threat detection that identifies and neutralizes attacks in real-time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Zero Trust Architecture</h3>
                      <p className="text-text-secondary">Comprehensive zero trust implementation that verifies every access request.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-success-500 rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">24/7 SOC Monitoring</h3>
                      <p className="text-text-secondary">Round-the-clock security operations center with expert analysts monitoring your infrastructure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Incident Response</h3>
                      <p className="text-text-secondary">Rapid incident response with 15-minute average response time and digital forensics.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-background-card rounded-2xl border border-border-light/50 overflow-hidden">
                  <Image
                    src="/dashboard-preview.svg"
                    alt="Security Dashboard Preview"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Cybersecurity Clients */}
        <section className="py-20 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-lg text-text-secondary">Trusted by organizations worldwide for enterprise-grade security.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  quote: "Resilient Privacy transformed our security posture. Their zero trust implementation reduced our attack surface by 80%.", 
                  author: "Meet Chauhan", 
                  title: "CISO, Enterprise Tech" 
                },
                { 
                  quote: "Their threat intelligence platform provides real-time insights that have prevented multiple attacks.", 
                  author: "Ashley Patel", 
                  title: "Security Director, Healthcare" 
                },
                { 
                  quote: "The managed security services team is exceptional. 24/7 monitoring with 15-minute response times.", 
                  author: "Mihir Mehta", 
                  title: "CTO, Diamond Manufacturing Industry" 
                },
                { 
                  quote: "Outstanding incident response capabilities. They helped us recover from a major breach in record time.", 
                  author: "Sarah Johnson", 
                  title: "CISO, Financial Services" 
                },
                { 
                  quote: "Their compliance expertise helped us achieve SOC 2 Type II certification seamlessly.", 
                  author: "David Chen", 
                  title: "VP Security, Tech Startup" 
                },
                { 
                  quote: "The red team exercises revealed vulnerabilities we never knew existed. Highly recommended.", 
                  author: "Lisa Rodriguez", 
                  title: "Security Manager, Healthcare" 
                },
              ].map((testimonial, index) => (
                <div key={index} className="darkfire-card p-8 hover:darkfire-shadow transition-all duration-300">
                  <div className="text-primary-400 text-4xl mb-4">"</div>
                  <p className="text-text-secondary mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-500 rounded-full mr-4"></div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-text-tertiary text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Section - Cybersecurity Content */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Latest Cybersecurity Insights
              </h2>
              <p className="text-lg text-text-secondary">Stay ahead of emerging threats with our expert analysis.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  category: "Threat Intelligence", 
                  title: "Ransomware Trends Q4 2024", 
                  description: "Analysis of emerging ransomware tactics and defense strategies for enterprise organizations." 
                },
                { 
                  category: "Zero Trust", 
                  title: "Implementing Zero Trust Architecture", 
                  description: "Step-by-step guide to implementing zero trust principles in enterprise environments." 
                },
                { 
                  category: "Compliance", 
                  title: "SOC 2 Type II Compliance Guide", 
                  description: "Comprehensive guide to achieving and maintaining SOC 2 Type II compliance." 
                },
              ].map((blog, index) => (
                <div key={index} className="darkfire-card p-8 hover:darkfire-shadow transition-all duration-300 group">
                  <div className="text-primary-400 text-sm font-semibold uppercase tracking-wide mb-4">{blog.category}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:darkfire-text-gradient transition-colors">{blog.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{blog.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Cybersecurity Questions */}
        <section className="py-20 bg-background-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-text-secondary">Everything you need to know about our cybersecurity services.</p>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  question: "What makes Resilient Privacy the #1 cybersecurity company?", 
                  answer: "Resilient Privacy stands out as the #1 cybersecurity company due to our 99.9% detection rate, 24/7 monitoring, strategic North American presence, and proven track record of protecting over 5 million threats. Our team of 200+ cybersecurity experts provides unmatched expertise." 
                },
                { 
                  question: "What cybersecurity services do you offer?", 
                  answer: "We offer comprehensive cybersecurity services including cybersecurity consulting, managed security services, penetration testing, incident response, identity & access management, zero trust architecture, threat intelligence, and compliance consulting." 
                },
                { 
                  question: "How quickly can you respond to security incidents?", 
                  answer: "Our managed security services provide 24/7 monitoring with an average response time of 15 minutes. We offer immediate incident response and digital forensics services to minimize damage and recovery time." 
                },
                { 
                  question: "Do you work with large organizations?", 
                  answer: "Yes, Resilient Privacy is trusted by businesses across various industries including healthcare, finance, technology, and manufacturing. We provide enterprise-grade security solutions tailored to organizations of all sizes." 
                },
                { 
                  question: "What compliance frameworks do you support?", 
                  answer: "We support all major compliance frameworks including SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and industry-specific regulations. Our compliance experts help you achieve and maintain certification." 
                },
              ].map((faq, index) => (
                <div key={index} className="darkfire-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-text-secondary mb-8">Our cybersecurity experts are here to help.</p>
              <Link
                href="/contact"
                className="btn text-lg px-8 py-4 rounded-xl shadow-purple-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </Suspense>
    </div>
  )
}