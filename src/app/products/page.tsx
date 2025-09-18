import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Cybersecurity Products - #1 Cybersecurity Company | Enterprise Security Solutions',
  description:
    'Resilient Privacy offers leading cybersecurity products including identity management, zero trust, threat intelligence, EDR/XDR, and cloud security. #1 cybersecurity company products trusted by businesses worldwide.',
  keywords: [
    'cybersecurity products',
    'cyber security products',
    'cybersecurity solutions',
    'cyber security solutions',
    'identity management',
    'zero trust',
    'threat intelligence',
    'EDR XDR',
    'cloud security',
    'cybersecurity company products',
    'cyber security company products',
    'enterprise cybersecurity products',
    'cybersecurity software',
    'cyber security software',
    'cybersecurity tools',
    'cyber security tools',
    'cybersecurity platform',
    'cyber security platform',
    'cybersecurity technology',
    'cyber security technology',
    'identity access management',
    'IAM',
    'zero trust architecture',
    'threat intelligence platform',
    'endpoint detection response',
    'extended detection response',
    'cloud security posture',
    'data loss prevention',
  ],
  openGraph: {
    title:
      'Cybersecurity Products - #1 Cybersecurity Company | Enterprise Security Solutions',
    description:
      'Resilient Privacy offers leading cybersecurity products including identity management, zero trust, threat intelligence, EDR/XDR, and cloud security. #1 cybersecurity company products trusted by businesses worldwide.',
    type: 'website',
    url: 'https://resilientprivacy.com/products',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products',
  },
}

const productCategories = [
  {
    name: 'Identity & Access Suite',
    description: 'Comprehensive identity and access management solutions',
    features: [
      'Multi-factor authentication',
      'Privileged access management',
      'Identity governance',
      'Single sign-on',
    ],
    link: '/products/identity-access-suite',
  },
  {
    name: 'Zero Trust Network Edge',
    description: 'Next-generation network security and access control',
    features: [
      'Network segmentation',
      'Micro-perimeters',
      'Secure connectivity',
      'Policy enforcement',
    ],
    link: '/products/zero-trust-network-edge',
  },
  {
    name: 'Endpoint Detection & Response',
    description: 'Advanced endpoint protection and threat detection',
    features: [
      'Real-time monitoring',
      'Behavioral analysis',
      'Threat hunting',
      'Automated response',
    ],
    link: '/products/edr-xdr',
  },
  {
    name: 'Cloud Security Posture',
    description: 'Comprehensive cloud security and compliance management',
    features: [
      'CSPM/CNAPP',
      'Cloud workload protection',
      'Compliance monitoring',
      'Risk assessment',
    ],
    link: '/products/cloud-security-posture',
  },
  {
    name: 'Data Loss Prevention & Governance',
    description: 'Protect sensitive data and ensure compliance',
    features: [
      'Data classification',
      'DLP policies',
      'Compliance reporting',
      'Data governance',
    ],
    link: '/products/dlp-data-governance',
  },
  {
    name: 'Threat Intelligence Platform',
    description: 'Advanced threat detection and intelligence gathering',
    features: [
      'Threat feeds',
      'Intelligence correlation',
      'Predictive analytics',
      'Automated response',
    ],
    link: '/products/threat-intelligence-platform',
  },
]

const productHighlights = [
  {
    title: 'Unified Platform',
    description: 'Single platform for all your cybersecurity needs',
    icon: '🔗',
  },
  {
    title: 'AI-Powered',
    description: 'Advanced machine learning for threat detection',
    icon: '🤖',
  },
  {
    title: 'Cloud-Native',
    description: 'Built for modern cloud environments',
    icon: '☁️',
  },
  {
    title: 'Enterprise-Ready',
    description: 'Scalable solutions for large organizations',
    icon: '🏢',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Security <span className="fxology-text-gradient">Products</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your
            organization from evolving threats and ensure compliance with
            industry standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products" className="btn text-lg px-8 py-4">
              Explore Products
            </Link>
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Comprehensive Security Portfolio
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Resilient Privacy&apos;s product portfolio represents the most
                  advanced cybersecurity solutions available today. Our products
                  are designed to work together seamlessly, providing
                  comprehensive protection across all aspects of your digital
                  environment.
                </p>
                <p>
                  Each product in our portfolio is built on years of research
                  and real-world experience defending against the most
                  sophisticated cyber threats. Our solutions combine
                  cutting-edge technology with proven security methodologies to
                  deliver maximum protection with minimal complexity.
                </p>
                <p>
                  Our products are designed with enterprise scalability in mind,
                  supporting organizations of all sizes from startups to Fortune
                  500 companies. Whether you&apos;re looking to implement a
                  single solution or build a comprehensive security
                  architecture, our products provide the flexibility and power
                  you need.
                </p>
                <p>
                  We understand that every organization has unique security
                  requirements and constraints. That&apos;s why our products are
                  highly configurable and can be tailored to meet your specific
                  needs. Our team of security experts works closely with you to
                  ensure optimal deployment and configuration for your
                  environment.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Product Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Product Categories</span>
                  <span className="text-accent-500 font-semibold">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Integration APIs</span>
                  <span className="text-accent-500 font-semibold">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Deployment Options</span>
                  <span className="text-accent-500 font-semibold">
                    Cloud/On-Prem
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Compliance Frameworks</span>
                  <span className="text-accent-500 font-semibold">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Uptime SLA</span>
                  <span className="text-accent-500 font-semibold">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <Link key={product.name} href={product.link} className="group">
                <div className="fxology-card p-8 hover:fxology-shadow transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-accent-500 text-sm flex items-center"
                      >
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="fxology-text-gradient group-hover:text-white transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#222] text-center"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Seamless Integration
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Supported Platforms
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#1A1A1A] rounded">
                  <div className="text-2xl mb-2">🔵</div>
                  <span className="text-text-secondary text-sm">Microsoft</span>
                </div>
                <div className="text-center p-4 bg-[#1A1A1A] rounded">
                  <div className="text-2xl mb-2">🟠</div>
                  <span className="text-text-secondary text-sm">AWS</span>
                </div>
                <div className="text-center p-4 bg-[#1A1A1A] rounded">
                  <div className="text-2xl mb-2">🔴</div>
                  <span className="text-text-secondary text-sm">Google Cloud</span>
                </div>
                <div className="text-center p-4 bg-[#1A1A1A] rounded">
                  <div className="text-2xl mb-2">🟢</div>
                  <span className="text-text-secondary text-sm">Salesforce</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Deployment Options
              </h3>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Our products support multiple deployment models to meet your
                  infrastructure and security requirements.
                </p>
                <p>
                  Cloud-native deployment provides maximum scalability and
                  minimal maintenance overhead.
                </p>
                <p>
                  On-premises deployment offers complete control and compliance
                  with strict data residency requirements.
                </p>
                <p>
                  Hybrid deployment combines the best of both worlds for
                  organizations with complex infrastructure needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Explore our comprehensive security portfolio and discover how our
            solutions can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Request Demo
            </Link>
            <Link
              href="/services"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
