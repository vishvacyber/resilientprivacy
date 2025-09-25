import Link from 'next/link'

const threatIntelFeatures = [
  {
    category: 'Threat Detection',
    features: [
      'Real-time threat monitoring',
      'Advanced persistent threat detection',
      'Malware analysis and classification',
      'Phishing and social engineering detection',
      'Zero-day threat identification',
    ],
  },
  {
    category: 'Intelligence Gathering',
    features: [
      'Dark web monitoring',
      'Threat actor profiling',
      'Vulnerability intelligence',
      'Geopolitical threat analysis',
      'Industry-specific threat feeds',
    ],
  },
  {
    category: 'Analytics & Reporting',
    features: [
      'AI-powered threat correlation',
      'Predictive threat modeling',
      'Custom threat dashboards',
      'Automated threat reports',
      'Risk scoring and prioritization',
    ],
  },
]

const benefits = [
  {
    title: 'Threat Intelligence Authority',
    description:
      'Access to 100+ premium threat feeds. Cited by CISA and FBI in multiple threat advisories. Trusted by national security agencies.',
    
  },
  {
    title: 'Predictive Advantage',
    description:
      'Predict attacks 14 days earlier than industry average. 89% accuracy in threat forecasting with AI-powered analytics.',
    
  },
  {
    title: 'Mission-Critical Reliability',
    description:
      'Protecting critical infrastructure in 45 countries. 99.99% uptime with real-time global threat monitoring network.',
    
  },
  {
    title: 'Actionable Intelligence',
    description:
      'Customers reduce incident response time by 85%. Automated threat hunting identifies 3x more threats than manual analysis.',
    
  },
]

export default function ThreatIntelligencePlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Threat Intelligence <span className="text-accent-500">Platform</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Advanced threat detection and intelligence gathering platform that
            provides real-time insights into emerging threats and adversary
            tactics.
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
              className="btn-secondary text-lg px-8 py-4"
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
                Comprehensive Threat Intelligence
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Resilient Privacy&apos;s Threat Intelligence Platform provides
                  organizations with unparalleled visibility into the global
                  threat landscape, enabling proactive defense against emerging
                  cyber threats. Our platform combines multiple intelligence
                  sources with advanced analytics to deliver actionable insights
                  that help organizations stay ahead of adversaries.
                </p>
                <p>
                  Our threat intelligence capabilities span the entire threat
                  lifecycle, from initial reconnaissance and weaponization to
                  delivery, exploitation, and persistence. This comprehensive
                  coverage ensures that organizations can identify and respond
                  to threats at every stage of the attack chain, significantly
                  reducing the likelihood of successful breaches.
                </p>
                <p>
                  The platform leverages machine learning and artificial
                  intelligence to correlate threat data from multiple sources,
                  identify patterns, and predict potential attacks before they
                  occur. This predictive capability enables organizations to
                  implement proactive security measures and allocate resources
                  more effectively.
                </p>
                <p>
                  We maintain relationships with leading threat intelligence
                  providers, security researchers, and law enforcement agencies
                  worldwide, ensuring access to the most current and
                  comprehensive threat data available. Our global threat
                  monitoring network operates 24/7, providing real-time updates
                  on emerging threats and attack campaigns.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Platform Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Threat Feeds</span>
                  <span className="text-accent-500 font-semibold">
                    100+ Sources
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Update Frequency</span>
                  <span className="text-accent-500 font-semibold">
                    Real-time
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Threat Actors Tracked</span>
                  <span className="text-accent-500 font-semibold">Multiple</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Malware Families</span>
                  <span className="text-accent-500 font-semibold">10,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Global Coverage</span>
                  <span className="text-accent-500 font-semibold">
                    150+ Countries
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
            {threatIntelFeatures.map((category) => (
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
            Why Enterprise Organizations Trust Our Intelligence
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
            Ready to Stay Ahead of Threats?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Gain the intelligence advantage with comprehensive threat detection
            and analysis that keeps your organization protected from emerging
            cyber threats.
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
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
