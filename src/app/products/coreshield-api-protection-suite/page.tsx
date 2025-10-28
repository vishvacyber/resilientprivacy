import Link from 'next/link'
import FormButton from '@/components/FormButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CoreShield™ API Protection Suite - Advanced API Security Platform | Resilient Privacy',
  description: 'Our flagship platform to uncover and mitigate API risks. Comprehensive API security with complete visibility, continuous risk testing, fraud prevention, and AI-aware protection.',
  keywords: [
    'API protection suite',
    'API security platform',
    'API mapping',
    'API risk testing',
    'API fraud prevention',
    'API abuse prevention',
    'shadow API detection',
    'API authentication',
    'API security testing',
    'API threat detection',
    'API security monitoring',
    'API compliance',
    'API governance',
    'API security intelligence',
    'API vulnerability scanning',
    'API security automation',
    'AI-aware API protection',
    'API security analytics',
    'API security framework',
    'API security tools',
    'API security technology',
    'API security platform',
    'API security solutions',
    'API security services',
    'API security consulting',
    'API security architecture',
    'API security implementation',
    'API security best practices',
  ],
  openGraph: {
    title: 'CoreShield™ API Protection Suite - Advanced API Security Platform | Resilient Privacy',
    description: 'Our flagship platform to uncover and mitigate API risks. Comprehensive API security with complete visibility, continuous risk testing, fraud prevention, and AI-aware protection.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/coreshield-api-protection-suite',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/coreshield-api-protection-suite',
  },
}

const features = [
  {
    name: 'API Mapping & Visibility',
    description: 'Automatically discover every endpoint, shadow API, and undocumented interface',
    features: [
      'Complete API inventory discovery',
      'Shadow API detection',
      'Undocumented endpoint mapping',
      'Real-time API topology visualization',
      'API dependency mapping',
      'Legacy API identification',
    ],
    link: '/products/coreshield-api-mapping',
  },
  {
    name: 'Continuous API Risk Testing',
    description: 'Assess APIs for misconfigurations, flaws, and weak authentication flows',
    features: [
      'Automated vulnerability scanning',
      'Authentication flow testing',
      'Configuration drift detection',
      'OWASP API Top 10 compliance',
      'Business logic testing',
      'Zero-day vulnerability detection',
    ],
    link: '/products/coreshield-risk-testing',
  },
  {
    name: 'Fraud & Abuse Prevention',
    description: 'Stop credential stuffing, account takeover attempts, and automated exploitation',
    features: [
      'Credential stuffing protection',
      'Account takeover prevention',
      'Bot detection and mitigation',
      'Rate limiting and throttling',
      'Behavioral analysis',
      'Real-time fraud scoring',
    ],
    link: '/products/coreshield-fraud-prevention',
  },
  {
    name: 'AI-Aware Protection',
    description: 'Security tailored for Agentic AI-driven workloads and data pipelines',
    features: [
      'AI workload protection',
      'Data pipeline security',
      'Model inference protection',
      'AI agent monitoring',
      'LLM security controls',
      'AI-specific threat detection',
    ],
    link: '/products/coreshield-ai-protection',
  },
]

const highlights = [
  {
    title: 'Complete API Visibility',
    description: 'Discover every API endpoint, including shadow and undocumented APIs',
  },
  {
    title: 'Continuous Risk Assessment',
    description: 'Automated testing for vulnerabilities and misconfigurations',
  },
  {
    title: 'Advanced Fraud Prevention',
    description: 'Protect against credential stuffing and account takeover attacks',
  },
  {
    title: 'AI-Native Security',
    description: 'Specialized protection for AI workloads and data pipelines',
  },
]

export default function CoreShieldAPISuitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            CoreShield™ <span className="fxology-text-gradient">API Protection Suite</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Our flagship platform to uncover and mitigate API risks. Comprehensive API security 
            with complete visibility, continuous risk testing, fraud prevention, and AI-aware 
            protection for modern applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#features" className="btn text-lg px-8 py-4">
              Explore Features
            </Link>
            <FormButton className="btn-secondary text-lg px-8 py-4">Request Demo
            </FormButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            CoreShield™ API Protection Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Link key={feature.name} href={feature.link} className="group">
                <div className="fxology-card p-8 hover:fxology-shadow transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.name}
                  </h3>
                  <p className="text-text-secondary mb-6">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item) => (
                      <li
                        key={item}
                        className="text-accent-500 text-sm flex items-center"
                      >
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                        {item}
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

      {/* Highlights Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose CoreShield™?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#222] text-center"
              >
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

      {/* Technical Details */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Comprehensive API Security Platform
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  CoreShield™ API Protection Suite is our flagship platform designed to address 
                  the complete spectrum of API security challenges. From discovery to protection, 
                  our comprehensive solution provides end-to-end API security coverage for modern 
                  applications and AI-driven workloads.
                </p>
                <p>
                  Our platform automatically discovers every API endpoint in your environment, 
                  including shadow APIs and undocumented interfaces that traditional security 
                  tools miss. With continuous risk testing and real-time threat detection, 
                  CoreShield™ provides 360-degree API protection.
                </p>
                <p>
                  Built specifically for the modern API landscape, CoreShield™ includes advanced 
                  fraud prevention capabilities to stop credential stuffing, account takeover 
                  attempts, and automated exploitation. Our AI-aware protection ensures your 
                  AI workloads and data pipelines remain secure.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                CoreShield™ Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">API Endpoints Discovered</span>
                  <span className="text-accent-500 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Vulnerability Detection</span>
                  <span className="text-accent-500 font-semibold">99.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="text-accent-500 font-semibold">&lt;2 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">False Positive Rate</span>
                  <span className="text-accent-500 font-semibold">&lt;0.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">AI Workload Support</span>
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
            Ready to Secure Your APIs?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Discover how CoreShield™ API Protection Suite can provide comprehensive 
            security for your APIs and AI workloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FormButton className="btn text-lg px-8 py-4">Request Demo
            </FormButton>
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

