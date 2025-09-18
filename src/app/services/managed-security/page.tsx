import Link from 'next/link'

const managedSecurityServices = [
  {
    category: 'Security Operations Center (SOC)',
    description:
      '24/7/365 security monitoring and threat detection by certified analysts',
    services: [
      '24/7 security event monitoring',
      'Real-time threat detection & analysis',
      'Security incident triage & escalation',
      'Threat intelligence integration',
      'Custom security use cases',
      'Monthly security reporting',
    ],
    icon: '🛡️',
    pricing: 'Contact us for pricing',
  },
  {
    category: 'SIEM Management',
    description: 'Complete SIEM platform management and optimization',
    services: [
      'SIEM deployment & configuration',
      'Log source integration',
      'Custom correlation rules',
      'Dashboard & reporting setup',
      'Performance tuning',
      'User training & knowledge transfer',
    ],
    icon: '📊',
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Threat Hunting',
    description:
      'Proactive threat hunting to identify advanced persistent threats',
    services: [
      'Behavioral analysis & anomaly detection',
      'Advanced persistent threat (APT) hunting',
      'Threat intelligence research',
      'IOC & TTPs identification',
      'Threat landscape analysis',
      'Hunt campaign reporting',
    ],
    icon: '🔍',
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Incident Response',
    description: 'Rapid incident response and forensic investigation services',
    services: [
      'Incident containment & eradication',
      'Digital forensics & evidence collection',
      'Malware analysis & reverse engineering',
      'Recovery & remediation support',
      'Lessons learned documentation',
      'Legal & regulatory support',
    ],
    icon: '🚨',
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Vulnerability Management',
    description: 'Continuous vulnerability assessment and remediation',
    services: [
      'Automated vulnerability scanning',
      'Risk-based vulnerability prioritization',
      'Patch management coordination',
      'Remediation guidance & support',
      'Compliance vulnerability reporting',
      'Trend analysis & metrics',
    ],
    icon: '🔧',
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Cloud Security Monitoring',
    description:
      'Specialized monitoring for cloud infrastructure and applications',
    services: [
      'Multi-cloud security monitoring',
      'Container & Kubernetes security',
      'Cloud configuration management',
      'Identity & access monitoring',
      'Cloud compliance monitoring',
      'DevSecOps integration',
    ],
    icon: '☁️',
    pricing: 'Contact us for pricing',
  },
]

const socTiers = [
  {
    tier: 'Essential SOC',
    price: 'Contact us',
    period: 'for pricing',
    description: 'Core security monitoring for small to medium businesses',
    features: [
      '24/7 security monitoring',
      'Basic threat detection rules',
      'Email & phone alerting',
      'Monthly security reports',
      'Business hours analyst support',
      'Up to 10 log sources',
    ],
    popular: false,
  },
  {
    tier: 'Professional SOC',
    price: 'Contact us',
    period: 'for pricing',
    description: 'Advanced security operations for growing organizations',
    features: [
      '24/7 security monitoring & response',
      'Advanced threat detection & hunting',
      'Custom correlation rules',
      'Real-time incident response',
      'Threat intelligence integration',
      'Up to 50 log sources',
      'Dedicated security analyst',
    ],
    popular: true,
  },
  {
    tier: 'Enterprise SOC',
    price: 'Contact us',
    period: 'for pricing',
    description: 'Full-scale security operations for large enterprises',
    features: [
      'Dedicated SOC team',
      'Custom security use cases',
      'Advanced threat hunting',
      'Incident response retainer',
      'Compliance reporting',
      'Unlimited log sources',
      'On-site security reviews',
    ],
    popular: false,
  },
]

const securityTechnologies = [
  {
    category: 'SIEM Platforms',
    items: [
      'Splunk Enterprise Security',
      'IBM QRadar',
      'Microsoft Sentinel',
      'Elastic Security',
      'LogRhythm',
    ],
  },
  {
    category: 'Endpoint Detection',
    items: [
      'CrowdStrike Falcon',
      'SentinelOne',
      'Microsoft Defender',
      'Carbon Black',
      'Cylance',
    ],
  },
  {
    category: 'Network Security',
    items: [
      'Palo Alto Networks',
      'Fortinet',
      'Cisco ASA',
      'Check Point',
      'SonicWall',
    ],
  },
  {
    category: 'Cloud Security',
    items: [
      'AWS Security Hub',
      'Azure Security Center',
      'Google Cloud Security',
      'Prisma Cloud',
      'CloudTrail',
    ],
  },
  {
    category: 'Threat Intelligence',
    items: [
      'Recorded Future',
      'ThreatConnect',
      'Anomali',
      'FireEye',
      'Mandiant',
    ],
  },
  {
    category: 'Vulnerability Management',
    items: [
      'Qualys VMDR',
      'Rapid7 InsightVM',
      'Tenable.io',
      'Nessus Professional',
      'OpenVAS',
    ],
  },
]

const industryCompliance = [
  {
    industry: 'Financial Services',
    regulations: ['PCI DSS', 'SOX', 'GLBA', 'NYDFS', 'FFIEC'],
    description: 'Specialized monitoring for financial institutions',
  },
  {
    industry: 'Healthcare',
    regulations: ['HIPAA', 'HITECH', 'FDA 21 CFR Part 11'],
    description: 'HIPAA-compliant security monitoring and reporting',
  },
  {
    industry: 'Government',
    regulations: ['FISMA', 'NIST 800-53', 'FedRAMP', 'CJIS'],
    description: 'Government-grade security operations and compliance',
  },
  {
    industry: 'Manufacturing',
    regulations: ['IEC 62443', 'NERC CIP', 'ISO 27001'],
    description: 'OT/IT security monitoring for industrial environments',
  },
]

const socMetrics = [
  {
    metric: '<5 min',
    label: 'Mean Time to Detection',
    description: 'Average time to identify security incidents',
  },
  {
    metric: '<15 min',
    label: 'Mean Time to Response',
    description: 'Average response time for critical alerts',
  },
  {
    metric: '99.9%',
    label: 'SOC Availability',
    description: 'Guaranteed security monitoring uptime',
  },
  {
    metric: '24/7/365',
    label: 'Monitoring Coverage',
    description: 'Continuous security operations',
  },
  {
    metric: '50+',
    label: 'Security Analysts',
    description: 'Certified security professionals',
  },
  {
    metric: '1M+',
    label: 'Events Per Day',
    description: 'Security events processed daily',
  },
]

const benefits = [
  {
    title: 'Reduced Security Costs',
    description:
      'Save up to 70% compared to building an in-house SOC team and infrastructure.',
    icon: '💰',
  },
  {
    title: 'Expert Security Team',
    description:
      'Access to certified security analysts with advanced threat detection expertise.',
    icon: '👥',
  },
  {
    title: 'Advanced Threat Detection',
    description:
      '99.5% threat detection accuracy with machine learning and behavioral analysis.',
    icon: '🎯',
  },
  {
    title: 'Compliance Ready',
    description:
      'Built-in compliance reporting for major regulatory frameworks and standards.',
    icon: '📋',
  },
]

export default function ManagedSecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Managed Security <span className="text-accent-500">Services</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            24/7 security monitoring and threat response by certified experts.
            Get enterprise-grade security operations without the overhead of
            building your own SOC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Get Started
            </Link>
            <Link
              href="#pricing"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              View Pricing
            </Link>
          </div>

          {/* SOC Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {socMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A]/50 backdrop-blur-sm p-4 rounded-lg border border-[#333]"
              >
                <div className="text-2xl font-bold text-accent-500 mb-1">
                  {metric.metric}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-text-secondary">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Managed Security Service Portfolio
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive security services designed to protect your
              organization from advanced threats with 24/7 monitoring and expert
              analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managedSecurityServices.map((service) => (
              <div
                key={service.category}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.category}
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.services.map((item) => (
                    <li
                      key={item}
                      className="text-accent-500 text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#333] pt-4">
                  <div className="text-sm text-text-secondary">Contact us for</div>
                  <div className="text-lg font-semibold text-white">
                    {service.pricing}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Pricing Tiers */}
      <section id="pricing" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              SOC Service Tiers
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Choose the right level of security operations for your
              organization. All tiers include our core SOC services with varying
              levels of coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`bg-[#0D0D0F] p-8 rounded-lg border transition-all duration-300 relative ${
                  tier.popular
                    ? 'border-accent-500 ring-2 ring-[accent-500]/20 transform scale-105'
                    : 'border-[#333] hover:border-accent-500'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-500 text-white px-4 py-2 text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.tier}
                  </h3>
                  <div className="text-4xl font-bold text-accent-500 mb-2">
                    {tier.price}{' '}
                    <span className="text-lg text-text-secondary">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-text-secondary text-sm flex items-center"
                    >
                      <span className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-accent-500 text-white hover:bg-[#7C3AED]'
                      : 'bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Technologies */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Security Technologies We Support
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our SOC team has expertise across leading security platforms and
              technologies to provide comprehensive monitoring and response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityTechnologies.map((tech) => (
              <div
                key={tech.category}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333]"
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-secondary text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Compliance */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Compliance
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Specialized security monitoring and compliance reporting for
              regulated industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryCompliance.map((industry) => (
              <div
                key={industry.industry}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333]"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {industry.industry}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.regulations.map((reg) => (
                    <span
                      key={reg}
                      className="px-3 py-1 bg-accent-500/10 text-accent-500 text-xs rounded-md border border-accent-500/20"
                    >
                      {reg}
                    </span>
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
            Why Choose Our Managed Security Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
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
            Ready to Enhance Your Security Operations?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Get 24/7 security monitoring and expert threat response. Start with
            a free security assessment to understand your current risk posture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Get Free Security Assessment
            </Link>
            <Link
              href="/services"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
