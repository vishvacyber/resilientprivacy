import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Mapping & Visibility - CoreShield™ API Protection Suite | Resilient Privacy',
  description: 'Automatically discover every endpoint, shadow API, and undocumented interface with CoreShield™ API Mapping & Visibility. Complete API inventory and topology visualization.',
  keywords: [
    'API mapping',
    'API discovery',
    'shadow API detection',
    'API inventory',
    'API topology',
    'undocumented API',
    'API visibility',
    'API governance',
    'API documentation',
    'API endpoint discovery',
  ],
  openGraph: {
    title: 'API Mapping & Visibility - CoreShield™ API Protection Suite | Resilient Privacy',
    description: 'Automatically discover every endpoint, shadow API, and undocumented interface with CoreShield™ API Mapping & Visibility.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/coreshield-api-mapping',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/coreshield-api-mapping',
  },
}

const features = [
  {
    title: 'Complete API Inventory Discovery',
    description: 'Automatically discover and catalog every API endpoint in your environment, including internal, external, and third-party APIs.',
  },
  {
    title: 'Shadow API Detection',
    description: 'Identify undocumented and forgotten APIs that pose security risks and compliance challenges.',
  },
  {
    title: 'Real-time API Topology Visualization',
    description: 'Visualize API relationships, dependencies, and data flows with interactive topology maps.',
  },
  {
    title: 'API Dependency Mapping',
    description: 'Map complex API dependencies and understand how changes impact your entire API ecosystem.',
  },
  {
    title: 'Legacy API Identification',
    description: 'Identify outdated and deprecated APIs that need modernization or retirement.',
  },
  {
    title: 'API Documentation Generation',
    description: 'Automatically generate comprehensive API documentation from discovered endpoints.',
  },
]

const benefits = [
  {
    title: 'Complete Visibility',
    description: 'Gain 100% visibility into your API landscape, including previously unknown endpoints.',
  },
  {
    title: 'Risk Reduction',
    description: 'Identify and secure shadow APIs that traditional security tools miss.',
  },
  {
    title: 'Compliance Ready',
    description: 'Maintain accurate API inventories for regulatory compliance and audits.',
  },
  {
    title: 'Operational Efficiency',
    description: 'Streamline API management with automated discovery and documentation.',
  },
]

export default function APIMappingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            API Mapping & <span className="fxology-text-gradient">Visibility</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Automatically discover every endpoint, shadow API, and undocumented interface. 
            Gain complete visibility into your API landscape with comprehensive mapping and topology visualization.
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
            Complete API Discovery & Mapping
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

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why API Mapping Matters
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
                Advanced Discovery Technology
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Our API mapping technology uses advanced discovery algorithms to identify 
                  every API endpoint in your environment, including those that are undocumented 
                  or forgotten. We analyze network traffic, application logs, and configuration 
                  files to build a complete picture of your API landscape.
                </p>
                <p>
                  The system automatically categorizes APIs by type, purpose, and risk level, 
                  making it easy to understand your API ecosystem and identify potential 
                  security gaps or compliance issues.
                </p>
                <p>
                  Real-time monitoring ensures that new APIs are discovered immediately as 
                  they are deployed, maintaining an up-to-date inventory of your entire API 
                  infrastructure.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Discovery Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">API Endpoints Discovered</span>
                  <span className="text-accent-500 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Shadow APIs Found</span>
                  <span className="text-accent-500 font-semibold">95%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Discovery Time</span>
                  <span className="text-accent-500 font-semibold">&lt;24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">API Types Supported</span>
                  <span className="text-accent-500 font-semibold">All</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Real-time Updates</span>
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
            Ready to Map Your APIs?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Discover every API in your environment and gain complete visibility with 
            CoreShield™ API Mapping & Visibility.
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
