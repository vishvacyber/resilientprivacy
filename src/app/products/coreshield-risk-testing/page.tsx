import Link from 'next/link'
import FormButton from '@/components/FormButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Continuous API Risk Testing - CoreShield™ API Protection Suite | Resilient Privacy',
  description: 'Assess APIs for misconfigurations, flaws, and weak authentication flows with continuous risk testing. Automated vulnerability scanning and OWASP API Top 10 compliance.',
  keywords: [
    'API risk testing',
    'API vulnerability scanning',
    'API security testing',
    'OWASP API Top 10',
    'API authentication testing',
    'API configuration testing',
    'API security assessment',
    'API penetration testing',
    'API security validation',
    'API compliance testing',
  ],
  openGraph: {
    title: 'Continuous API Risk Testing - CoreShield™ API Protection Suite | Resilient Privacy',
    description: 'Assess APIs for misconfigurations, flaws, and weak authentication flows with continuous risk testing.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/coreshield-risk-testing',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/coreshield-risk-testing',
  },
}

const features = [
  {
    title: 'Automated Vulnerability Scanning',
    description: 'Continuously scan APIs for known vulnerabilities, misconfigurations, and security flaws.',
  },
  {
    title: 'Authentication Flow Testing',
    description: 'Test authentication mechanisms, authorization controls, and session management.',
  },
  {
    title: 'Configuration Drift Detection',
    description: 'Monitor for changes in API configurations that could introduce security risks.',
  },
  {
    title: 'OWASP API Top 10 Compliance',
    description: 'Ensure compliance with OWASP API Top 10 security standards and best practices.',
  },
  {
    title: 'Business Logic Testing',
    description: 'Test for business logic flaws and application-specific vulnerabilities.',
  },
  {
    title: 'Zero-day Vulnerability Detection',
    description: 'Identify previously unknown vulnerabilities using advanced detection techniques.',
  },
]

const testingCapabilities = [
  {
    category: 'Authentication & Authorization',
    tests: [
      'JWT token validation',
      'OAuth flow testing',
      'Session management',
      'Role-based access control',
      'API key security',
    ],
  },
  {
    category: 'Input Validation',
    tests: [
      'SQL injection testing',
      'XSS vulnerability scanning',
      'Parameter pollution',
      'Data type validation',
      'Schema validation',
    ],
  },
  {
    category: 'Configuration Security',
    tests: [
      'CORS misconfigurations',
      'Rate limiting bypass',
      'Error handling exposure',
      'Logging vulnerabilities',
      'Debug mode detection',
    ],
  },
  {
    category: 'Business Logic',
    tests: [
      'Privilege escalation',
      'Data access controls',
      'Workflow bypass',
      'Resource exhaustion',
      'Logic flaws',
    ],
  },
]

export default function APIRiskTestingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Continuous API <span className="fxology-text-gradient">Risk Testing</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Assess APIs for misconfigurations, flaws, and weak authentication flows. 
            Continuous automated testing ensures your APIs remain secure and compliant.
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
            Comprehensive Risk Assessment
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

      {/* Testing Capabilities */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Testing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingCapabilities.map((category, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.tests.map((test, testIndex) => (
                    <li
                      key={testIndex}
                      className="text-text-secondary flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {test}
                    </li>
                  ))}
                </ul>
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
                Advanced Testing Technology
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Our continuous API risk testing platform uses advanced scanning techniques 
                  to identify vulnerabilities that traditional security tools miss. We combine 
                  static analysis, dynamic testing, and behavioral analysis to provide 
                  comprehensive coverage.
                </p>
                <p>
                  The system automatically adapts to new API patterns and emerging threats, 
                  ensuring that your APIs are tested against the latest attack vectors and 
                  security best practices.
                </p>
                <p>
                  Real-time testing provides immediate feedback on security issues, allowing 
                  development teams to address vulnerabilities before they can be exploited.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Testing Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Vulnerability Detection Rate</span>
                  <span className="text-accent-500 font-semibold">99.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">False Positive Rate</span>
                  <span className="text-accent-500 font-semibold">&lt;0.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Testing Frequency</span>
                  <span className="text-accent-500 font-semibold">Continuous</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">OWASP Coverage</span>
                  <span className="text-accent-500 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Zero-day Detection</span>
                  <span className="text-accent-500 font-semibold">Advanced</span>
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
            Start Continuous API Testing
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Protect your APIs with continuous risk testing and automated vulnerability 
            scanning. Ensure compliance and security with CoreShield™.
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
