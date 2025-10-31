import Link from 'next/link'
import FormButton from '@/components/FormButton'
import { Metadata } from 'next'
import {
  Shield,
  Lock,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight,
  Key,
  Network,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Security Services - Comprehensive API Protection & Authentication',
  description:
    'Expert API security services including authentication, authorization, OWASP API Top 10 protection, threat monitoring, and API security consulting. Secure your APIs from attacks.',
  keywords: [
    'API security services',
    'API authentication',
    'API authorization',
    'OWASP API Top 10',
    'API threat monitoring',
    'API security consulting',
    'API protection',
  ],
  openGraph: {
    title: 'API Security Services - Comprehensive API Protection & Authentication',
    description:
      'Expert API security services including authentication, authorization, and OWASP API Top 10 protection.',
    type: 'website',
    url: 'https://resilientprivacy.com/services/api-security',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/services/api-security',
  },
}

const apiSecurityServices = [
  {
    category: 'API Security Assessment',
    description:
      'Comprehensive evaluation of your API infrastructure for vulnerabilities and security risks',
    services: [
      'API endpoint discovery and mapping',
      'OWASP API Top 10 vulnerability testing',
      'Authentication and authorization review',
      'API rate limiting assessment',
      'Data exposure analysis',
      'Security configuration audit',
    ],
    icon: <Shield className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'OWASP API Top 10 Protection',
    description:
      'Defense against the most critical API security vulnerabilities as identified by OWASP',
    services: [
      'Broken object level authorization protection',
      'Broken authentication prevention',
      'Excessive data exposure mitigation',
      'Lack of resources and rate limiting',
      'Broken function level authorization',
      'Mass assignment protection',
    ],
    icon: <Lock className="w-6 h-6" />,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    category: 'API Authentication & Authorization',
    description:
      'Secure authentication and authorization mechanisms for your API endpoints',
    services: [
      'OAuth 2.0 and OpenID Connect implementation',
      'JWT token management and validation',
      'API key security and rotation',
      'Multi-factor authentication (MFA)',
      'Role-based access control (RBAC)',
      'Attribute-based access control (ABAC)',
    ],
    icon: <Key className="w-6 h-6" />,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    category: 'API Threat Monitoring',
    description:
      'Real-time threat detection and security monitoring for your API infrastructure',
    services: [
      'API traffic analysis and monitoring',
      'Anomaly detection and alerting',
      'DDoS and bot attack prevention',
      'Rate limiting and throttling',
      'API abuse detection',
      'Security event correlation',
    ],
    icon: <Eye className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    category: 'API Security Consulting',
    description:
      'Strategic API security consulting to develop comprehensive security strategies',
    services: [
      'API security strategy development',
      'Security architecture design',
      'Secure API development practices',
      'API governance and compliance',
      'Security training and awareness',
      'Incident response planning',
    ],
    icon: <Network className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-500',
  },
]

const apiSecurityBenefits = [
  {
    title: 'Complete API Protection',
    description:
      'End-to-end security coverage for all your API endpoints and integrations',
    value: '100% Coverage',
  },
  {
    title: 'OWASP Compliance',
    description:
      'Protection against all OWASP API Top 10 vulnerabilities and best practices',
    value: 'Top 10 Protected',
  },
  {
    title: 'Real-Time Threat Detection',
    description:
      'Advanced monitoring that detects and responds to API threats instantly',
    value: '< 1 min Response',
  },
  {
    title: 'Reduced API Attacks',
    description:
      'Significantly reduce successful API attacks and unauthorized access',
    value: '95% Reduction',
  },
]

export default function APISecurityServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-Optimized Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <Network className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
              <span className="text-primary-500 text-xs sm:text-sm font-medium">
                API Security Services
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Comprehensive{' '}
              <span className="darkfire-text-gradient">API Security</span>{' '}
              Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
              Secure your APIs with comprehensive security services. From
              authentication to threat monitoring, we protect your API
              infrastructure from attacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <FormButton className="btn text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px]">
                Get Started
              </FormButton>
              <Link
                href="/contact"
                className="btn-secondary text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px] flex items-center justify-center gap-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Security Services */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Complete API Security Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto px-2">
              End-to-end API security services designed to protect your APIs
              from the most common and advanced threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {apiSecurityServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-background-card to-background-alt rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border-light/20 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4 text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {service.category}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.services.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-xs sm:text-sm text-text-secondary flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Why Choose Our API Security Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {apiSecurityBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border-light/20 text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400 mb-2 sm:mb-3">
                  {benefit.value}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Secure Your APIs?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Get started with our API security services and protect your API
            endpoints from attacks and vulnerabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <FormButton className="btn text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px]">
              Request Consultation
            </FormButton>
            <Link
              href="/contact"
              className="btn-secondary text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px] flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

