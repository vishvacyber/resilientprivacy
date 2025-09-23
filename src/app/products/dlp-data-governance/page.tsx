import Link from 'next/link'

const dlpFeatures = [
  {
    category: 'Data Classification',
    features: [
      'Automated data discovery',
      'Sensitive data identification',
      'Classification policies',
      'Data lineage tracking',
      'Metadata management',
    ],
  },
  {
    category: 'Data Loss Prevention',
    features: [
      'Real-time content inspection',
      'Policy-based blocking',
      'Encryption enforcement',
      'Data masking',
      'Access controls',
    ],
  },
  {
    category: 'Compliance Management',
    features: [
      'Regulatory reporting',
      'Audit trail management',
      'Policy compliance monitoring',
      'Data retention controls',
      'Privacy impact assessments',
    ],
  },
]

const benefits = [
  {
    title: 'Zero Data Loss Guarantee',
    description:
      'Protect 99.95% of sensitive data with our AI-powered classification. Backed by comprehensive cyber insurance.',
    
  },
  {
    title: 'Regulatory Excellence',
    description:
      'Pre-built compliance templates for 25+ frameworks. 100% audit success rate across customer assessments.',
    
  },
  {
    title: 'Proven Performance',
    description:
      'Customers report 92% reduction in data incidents and 60% faster compliance reporting with automated workflows.',
    
  },
  {
    title: 'Rapid Implementation',
    description:
      'Deploy in 2-4 weeks with dedicated migration specialists. 95% of customers see ROI within first quarter.',
    
  },
]

export default function DlpDataGovernancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Data Loss Prevention &{' '}
            <span className="text-accent-500">Governance</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Comprehensive data protection and governance platform that prevents
            data loss and ensures regulatory compliance across your
            organization.
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
              href="#features"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Explore Features
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
                Complete Data Protection
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Resilient Privacy&apos;s Data Loss Prevention & Governance
                  platform provides comprehensive protection for your
                  organization&apos;s sensitive data. Our solution combines
                  advanced data discovery, classification, and protection
                  capabilities to prevent data breaches and ensure regulatory
                  compliance.
                </p>
                <p>
                  The platform automatically discovers and classifies sensitive
                  data across your entire organization, including structured and
                  unstructured data sources. Our AI-powered classification
                  engine can identify personally identifiable information (PII),
                  financial data, intellectual property, and other sensitive
                  information with high accuracy.
                </p>
                <p>
                  Our DLP capabilities monitor data in motion, at rest, and in
                  use, providing real-time protection against data exfiltration
                  attempts. The platform can block unauthorized data transfers,
                  encrypt sensitive information, and provide detailed audit
                  trails for compliance reporting.
                </p>
                <p>
                  The governance features help organizations establish and
                  enforce data policies, manage data lifecycle, and ensure
                  compliance with regulations such as GDPR, CCPA, HIPAA, and
                  SOX. The platform provides automated reporting and monitoring
                  capabilities to demonstrate compliance and identify potential
                  risks.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Platform Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Data Types Supported</span>
                  <span className="text-accent-500 font-semibold">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Compliance Frameworks</span>
                  <span className="text-accent-500 font-semibold">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Detection Accuracy</span>
                  <span className="text-accent-500 font-semibold">99.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Scan Speed</span>
                  <span className="text-accent-500 font-semibold">1TB/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Deployment Time</span>
                  <span className="text-accent-500 font-semibold">
                    2-4 Weeks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Comprehensive Features
          </h2>
          <div className="space-y-12">
            {dlpFeatures.map((category) => (
              <div
                key={category.category}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                      <p className="text-text-secondary">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Leading Organizations Choose Our DLP Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#222] text-center"
              >
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Data?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Implement comprehensive data protection and governance to prevent
            data loss and ensure regulatory compliance.
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
              href="/products/threat-intelligence-platform"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Explore Threat Intelligence
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
