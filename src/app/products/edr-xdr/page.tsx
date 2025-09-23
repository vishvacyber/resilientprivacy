import Link from 'next/link'

const edrFeatures = [
  {
    category: 'Real-time Monitoring',
    features: [
      'Continuous endpoint monitoring',
      'Behavioral analysis',
      'Process tracking',
      'File system monitoring',
      'Network activity analysis',
    ],
  },
  {
    category: 'Threat Detection',
    features: [
      'Malware detection',
      'Ransomware protection',
      'Advanced persistent threats',
      'Fileless attacks',
      'Supply chain attacks',
    ],
  },
  {
    category: 'Automated Response',
    features: [
      'Instant threat containment',
      'Automated remediation',
      'Isolation capabilities',
      'Rollback functionality',
      'Incident orchestration',
    ],
  },
]

const benefits = [
  {
    title: 'Unmatched Speed',
    description:
      'Sub-10 second threat detection with automated containment. 99.9% of attacks stopped before data exfiltration.',
    
  },
  {
    title: 'Award-Winning Technology',
    description:
      'Gartner Magic Quadrant Leader 3 years running. Recognized by NSA for advanced threat hunting capabilities.',
    
  },
  {
    title: 'Enterprise Scale',
    description:
      'Protecting endpoints globally. Trusted by leading organizations for critical infrastructure.',
    
  },
  {
    title: 'Zero Alert Fatigue',
    description:
      'AI reduces false positives by 95%. Security teams report 70% improvement in incident response efficiency.',
    
  },
]

export default function EdrXdrPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Endpoint Detection &{' '}
            <span className="text-accent-500">Response</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Advanced endpoint protection that detects, responds to, and
            automatically remediates threats across your entire organization.
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
                Next-Generation Endpoint Protection
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Resilient Privacy&apos;s EDR/XDR solution provides
                  comprehensive endpoint protection that goes beyond traditional
                  antivirus solutions. Our platform combines real-time
                  monitoring, advanced threat detection, and automated response
                  capabilities to protect your endpoints from the most
                  sophisticated cyber threats.
                </p>
                <p>
                  The solution monitors every aspect of endpoint activity,
                  including processes, file system changes, network connections,
                  and user behavior. This comprehensive visibility enables the
                  platform to detect threats that traditional security solutions
                  might miss, including fileless attacks, living-off-the-land
                  techniques, and advanced persistent threats.
                </p>
                <p>
                  Our AI-powered threat detection engine analyzes endpoint data
                  in real-time to identify suspicious patterns and behaviors.
                  The platform correlates data from multiple sources to provide
                  context-aware threat intelligence and reduce false positives
                  while ensuring that genuine threats are detected and addressed
                  immediately.
                </p>
                <p>
                  When a threat is detected, the platform automatically responds
                  with appropriate containment and remediation actions. This
                  automated response capability significantly reduces the time
                  between threat detection and resolution, minimizing the
                  potential impact of security incidents on your organization.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Platform Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Supported Platforms</span>
                  <span className="text-accent-500 font-semibold">
                    Windows/Mac/Linux
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Detection Rate</span>
                  <span className="text-accent-500 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="text-accent-500 font-semibold">
                    &lt;30 seconds
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">False Positive Rate</span>
                  <span className="text-accent-500 font-semibold">&lt;0.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Deployment Time</span>
                  <span className="text-accent-500 font-semibold">
                    1-2 Weeks
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
            {edrFeatures.map((category) => (
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
            Why Security Leaders Choose Our EDR/XDR Platform
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
            Ready to Protect Your Endpoints?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Deploy advanced endpoint protection that detects and responds to
            threats automatically across your entire organization.
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
              href="/products/cloud-security-posture"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Explore Cloud Security
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
