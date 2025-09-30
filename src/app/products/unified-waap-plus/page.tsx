import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unified WAAP+™ - Web & API Application Protection | Resilient Privacy',
  description: 'Cloud-native, all-in-one defense framework for web apps and APIs. Seamlessly secure applications across multi-cloud, hybrid, and on-premises environments without adding complexity.',
  keywords: [
    'WAAP',
    'Web Application Protection',
    'API Application Protection',
    'cloud-native security',
    'multi-cloud security',
    'hybrid cloud security',
    'on-premises security',
    'web application firewall',
    'API security',
    'application security',
    'cloud security',
    'zero-complexity security',
    'unified security platform',
    'application defense',
    'web security',
  ],
  openGraph: {
    title: 'Unified WAAP+™ - Web & API Application Protection | Resilient Privacy',
    description: 'Cloud-native, all-in-one defense framework for web apps and APIs. Seamlessly secure applications across multi-cloud, hybrid, and on-premises environments.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/unified-waap-plus',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/unified-waap-plus',
  },
}

const features = [
  {
    title: 'Multi-Cloud Protection',
    description: 'Seamlessly secure applications across AWS, Azure, Google Cloud, and other cloud platforms.',
  },
  {
    title: 'Hybrid Environment Support',
    description: 'Unified security for applications spanning cloud and on-premises infrastructure.',
  },
  {
    title: 'On-Premises Deployment',
    description: 'Complete control and compliance with on-premises deployment options.',
  },
  {
    title: 'Zero-Complexity Security',
    description: 'Advanced protection without adding complexity to your existing infrastructure.',
  },
  {
    title: 'Unified Management',
    description: 'Single pane of glass for managing security across all environments and applications.',
  },
  {
    title: 'Automatic Scaling',
    description: 'Cloud-native architecture that automatically scales with your application traffic.',
  },
]

const protectionCapabilities = [
  {
    category: 'Web Application Protection',
    features: [
      'OWASP Top 10 protection',
      'SQL injection prevention',
      'XSS attack blocking',
      'CSRF protection',
      'DDoS mitigation',
      'Bot management',
    ],
  },
  {
    category: 'API Security',
    features: [
      'API authentication & authorization',
      'Rate limiting & throttling',
      'API abuse prevention',
      'OAuth 2.0 & JWT security',
      'API versioning protection',
      'GraphQL security',
    ],
  },
  {
    category: 'Cloud-Native Features',
    features: [
      'Kubernetes integration',
      'Container security',
      'Serverless protection',
      'Microservices security',
      'Service mesh integration',
      'Cloud workload protection',
    ],
  },
  {
    category: 'Advanced Security',
    features: [
      'Machine learning threat detection',
      'Behavioral analysis',
      'Real-time threat intelligence',
      'Automated incident response',
      'Zero-trust architecture',
      'AI-powered security',
    ],
  },
]

const deploymentOptions = [
  {
    name: 'Cloud-Native',
    description: 'Fully managed cloud service with automatic scaling and global distribution.',
    benefits: [
      'Zero infrastructure management',
      'Global edge deployment',
      'Automatic scaling',
      '99.99% uptime SLA',
    ],
  },
  {
    name: 'Hybrid',
    description: 'Combines cloud-native benefits with on-premises control and compliance.',
    benefits: [
      'Data residency compliance',
      'Hybrid cloud integration',
      'Unified management',
      'Flexible deployment',
    ],
  },
  {
    name: 'On-Premises',
    description: 'Complete on-premises deployment for maximum control and compliance.',
    benefits: [
      'Complete data control',
      'Air-gapped environments',
      'Custom compliance',
      'Full infrastructure control',
    ],
  },
]

const benefits = [
  {
    title: 'Unified Security',
    description: 'Single platform for all web and API security needs across all environments.',
  },
  {
    title: 'Zero Complexity',
    description: 'Advanced protection without adding complexity to your existing infrastructure.',
  },
  {
    title: 'Cloud-Native',
    description: 'Built for modern cloud environments with automatic scaling and global distribution.',
  },
  {
    title: 'Comprehensive Coverage',
    description: 'Protect against all major web and API attack vectors with unified management.',
  },
]

export default function UnifiedWAAPPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Unified <span className="fxology-text-gradient">WAAP+™</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Cloud-native, all-in-one defense framework. Seamlessly secure web apps and APIs 
            across multi-cloud, hybrid, and on-premises environments — without adding complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#features" className="btn text-lg px-8 py-4">
              Explore Features
            </Link>
            <Link
              href="https://forms.gle/xuGFneJ1ijjfMp9x7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Unified Protection Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222] hover:border-accent-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Capabilities */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Comprehensive Protection Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protectionCapabilities.map((category, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-text-secondary flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Flexible Deployment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222] hover:border-accent-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{option.name}</h3>
                <p className="text-text-secondary mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="text-accent-500 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose Unified WAAP+™?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Advanced Cloud-Native Architecture
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Unified WAAP+™ is built on a cloud-native architecture that provides 
                  seamless security across all environments. Our platform automatically 
                  adapts to your infrastructure without requiring complex configuration 
                  or management overhead.
                </p>
                <p>
                  The platform uses advanced machine learning and behavioral analysis 
                  to provide intelligent protection that evolves with your applications 
                  and threat landscape.
                </p>
                <p>
                  With support for all major cloud platforms, container orchestration 
                  systems, and on-premises infrastructure, Unified WAAP+™ provides 
                  consistent security regardless of where your applications are deployed.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Platform Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Cloud Platforms Supported</span>
                  <span className="text-accent-500 font-semibold">All Major</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Deployment Time</span>
                  <span className="text-accent-500 font-semibold">&lt;15 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Global Edge Locations</span>
                  <span className="text-accent-500 font-semibold">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Threat Detection</span>
                  <span className="text-accent-500 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Zero Downtime</span>
                  <span className="text-accent-500 font-semibold">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Secure All Your Applications
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Deploy unified security across web apps and APIs in any environment 
            with Unified WAAP+™. Zero complexity, maximum protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://forms.gle/xuGFneJ1ijjfMp9x7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Request Demo
            </Link>
            <Link
              href="/products"
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
