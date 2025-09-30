import Link from 'next/link'

const securityMetrics = [
  {
    metric: 'Uptime',
    value: '99.99%',
    description: 'Platform availability over the last 12 months',
    trend: 'up',
    
  },
  {
    metric: 'MTTR',
    value: '15 min',
    description: 'Mean Time to Resolution for security incidents',
    trend: 'down',
    
  },
  {
    metric: 'Threat Detection',
    value: '99.9%',
    description: 'Detection rate for known and unknown threats',
    trend: 'up',
    
  },
  {
    metric: 'False Positives',
    value: '< 0.1%',
    description: 'False positive rate in threat detection',
    trend: 'down',
    
  },
]

const securityArchitecture = [
  {
    layer: 'Network Security',
    components: [
      'DDoS Protection',
      'Web Application Firewall',
      'Network Segmentation',
      'VPN Access',
    ],
    status: 'Active',
  },
  {
    layer: 'Application Security',
    components: [
      'Code Security Scanning',
      'API Security',
      'Container Security',
      'DevSecOps',
    ],
    status: 'Active',
  },
  {
    layer: 'Data Security',
    components: [
      'Encryption at Rest',
      'Encryption in Transit',
      'Data Loss Prevention',
      'Backup Security',
    ],
    status: 'Active',
  },
  {
    layer: 'Identity & Access',
    components: [
      'Multi-Factor Authentication',
      'Single Sign-On',
      'Privileged Access Management',
      'Zero Trust',
    ],
    status: 'Active',
  },
]

const penetrationTests = [
  {
    type: 'External Penetration Test',
    lastConducted: 'December 2024',
    nextScheduled: 'June 2024',
    findings: '0 Critical, 0 High, 2 Medium, 5 Low',
    status: 'Passed',
  },
  {
    type: 'Internal Penetration Test',
    lastConducted: 'November 2024',
    nextScheduled: 'May 2024',
    findings: '0 Critical, 0 High, 1 Medium, 3 Low',
    status: 'Passed',
  },
  {
    type: 'Web Application Security',
    lastConducted: 'January 2024',
    nextScheduled: 'July 2024',
    findings: '0 Critical, 0 High, 0 Medium, 2 Low',
    status: 'Passed',
  },
  {
    type: 'API Security Assessment',
    lastConducted: 'January 2024',
    nextScheduled: 'July 2024',
    findings: '0 Critical, 0 High, 0 Medium, 1 Low',
    status: 'Passed',
  },
]

const bugBountyProgram = {
  totalResearchers: '150+',
  totalReports: '145+',
  resolvedReports: '140',
  averageResponse: '4 hours',
  wallOfFameMembers: '25',
  scope: 'All public-facing applications and APIs',
}

export default function TrustCenterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trust <span className="fxology-text-gradient">Center</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Transparency in our security practices, performance metrics, and
            commitment to protecting your data and systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#metrics" className="btn text-lg px-8 py-4">
              View Metrics
            </Link>
            <Link
              href="#architecture"
              className="btn-secondary text-lg px-8 py-4"
            >
              Security Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Overview */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Building Trust Through Transparency
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  At Resilient Privacy, we believe that trust is earned through
                  transparency, consistent performance, and demonstrated
                  security excellence. Our Trust Center provides you with
                  real-time insights into our security posture, performance
                  metrics, and operational practices.
                </p>
                <p>
                  We understand that when you entrust us with your
                  organization&apos;s security, you need confidence that we can
                  deliver on our promises. That&apos;s why we provide
                  comprehensive visibility into our security architecture,
                  incident response capabilities, and ongoing security
                  assessments.
                </p>
                <p>
                  Our security metrics are updated in real-time and reflect our
                  actual performance across all aspects of our security
                  operations. We don&apos;t just tell you we&apos;re secure—we
                  show you the data that proves it, including uptime statistics,
                  threat detection rates, and incident response times.
                </p>
                <p>
                  We also believe in the power of community-driven security. Our
                  bug bounty program encourages security researchers to help us
                  identify and fix vulnerabilities, while our responsible
                  disclosure program ensures that security issues are handled
                  appropriately.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Trust Indicators
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Real-time security metrics
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Independent security audits
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">Bug bounty program</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Transparent incident reporting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section id="metrics" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Security Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((metric) => (
              <div
                key={metric.metric}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222] text-center"
              >
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {metric.metric}
                </h3>
                <div className="text-4xl font-bold text-accent-500 mb-4">
                  {metric.value}
                </div>
                <p className="text-text-secondary text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section id="architecture" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Security Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityArchitecture.map((layer) => (
              <div
                key={layer.layer}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {layer.layer}
                  </h3>
                  <span className="bg-green-900 text-green-100 px-3 py-1 rounded text-sm">
                    {layer.status}
                  </span>
                </div>
                <ul className="space-y-2">
                  {layer.components.map((component) => (
                    <li
                      key={component}
                      className="text-text-secondary flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penetration Testing */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Penetration Testing Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {penetrationTests.map((test) => (
              <div
                key={test.type}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{test.type}</h3>
                  <span className="bg-green-900 text-green-100 px-3 py-1 rounded text-sm">
                    {test.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Last Conducted</span>
                    <span className="text-white">{test.lastConducted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Next Scheduled</span>
                    <span className="text-white">{test.nextScheduled}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Findings</span>
                    <span className="text-white">{test.findings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bug Bounty Program */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Bug Bounty Program
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Community-Driven Security
              </h3>
              <div className="space-y-6 text-text-secondary">
                <p>
                  We believe that security is a collaborative effort. Our bug
                  bounty program invites security researchers from around the
                  world to help us identify and fix vulnerabilities in our
                  systems.
                </p>
                <p>
                  We recognize security researchers through our Wall of Fame and
                  offer exclusive service discounts for valid security findings.
                  All submissions are reviewed by our security team within 4
                  hours.
                </p>
                <p>
                  Our program covers all public-facing applications and APIs,
                  and we maintain clear guidelines for responsible disclosure.
                  We appreciate the security research community&apos;s
                  contributions to making our platform more secure.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Program Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Total Researchers</span>
                  <span className="text-accent-500 font-semibold">
                    {bugBountyProgram.totalResearchers}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Total Reports</span>
                  <span className="text-accent-500 font-semibold">
                    {bugBountyProgram.totalReports}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Resolved Reports</span>
                  <span className="text-accent-500 font-semibold">
                    {bugBountyProgram.resolvedReports}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Average Response</span>
                  <span className="text-accent-500 font-semibold">
                    {bugBountyProgram.averageResponse}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Wall of Fame Members</span>
                  <span className="text-accent-500 font-semibold">
                    {bugBountyProgram.wallOfFameMembers}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame & Recognition */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Wall of Fame & Recognition
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Honoring Security Researchers
              </h3>
              <div className="space-y-6 text-text-secondary">
                <p>
                  We believe in recognizing the valuable contributions of
                  security researchers who help make our platform more secure.
                  Our Wall of Fame celebrates researchers who have made
                  significant contributions to our security program.
                </p>
                <p>
                  Researchers who identify valid security vulnerabilities are
                  featured on our Wall of Fame and receive exclusive service
                  discounts on our cybersecurity services. This recognition
                  program helps build a strong security community while
                  providing tangible benefits to our contributors.
                </p>
                <p>
                  Wall of Fame members receive up to 50% discounts on our
                  professional services, including penetration testing, security
                  consulting, and training programs. We also provide special
                  recognition at security conferences and events.
                </p>
              </div>
            </div>
            <div className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Recognition Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Featured on our Wall of Fame
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Up to 50% service discounts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">Conference recognition</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Priority support access
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Exclusive security updates
                  </span>
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
            Questions About Our Security?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Our security team is available to answer questions about our
            security practices, metrics, and architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Contact Security Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
