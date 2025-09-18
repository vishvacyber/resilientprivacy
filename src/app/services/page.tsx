import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Cybersecurity Services - #1 Cybersecurity Company | Enterprise Security Solutions',
  description:
    'Resilient Privacy offers comprehensive cybersecurity services including managed security, consulting, penetration testing, incident response, and compliance. #1 cybersecurity company trusted by businesses worldwide.',
  keywords: [
    'cybersecurity services',
    'cyber security services',
    'cybersecurity consulting',
    'cyber security consulting',
    'managed security services',
    'cybersecurity company services',
    'cyber security company services',
    'enterprise cybersecurity services',
    'cybersecurity solutions',
    'cyber security solutions',
    'penetration testing',
    'incident response',
    'cybersecurity consulting services',
    'cyber security consulting services',
    'cybersecurity firm services',
    'cyber security firm services',
    'cybersecurity experts services',
    'cyber security experts services',
    'cybersecurity professionals services',
    'cyber security professionals services',
    'SOC services',
    'threat intelligence',
    'vulnerability management',
    'security assessment',
    'compliance consulting',
    'red team services',
    'digital forensics',
  ],
  openGraph: {
    title:
      'Cybersecurity Services - #1 Cybersecurity Company | Enterprise Security Solutions',
    description:
      'Resilient Privacy offers comprehensive cybersecurity services including managed security, consulting, penetration testing, incident response, and compliance. #1 cybersecurity company trusted by businesses worldwide.',
    type: 'website',
    url: 'https://resilientprivacy.com/services',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/services',
  },
}

const serviceCategories = [
  {
    name: 'IT Infrastructure & Support',
    description:
      'Complete IT infrastructure management and 24/7 technical support services',
    features: [
      'Help desk & technical support',
      'Infrastructure monitoring',
      'Cloud migration & management',
      'Network administration',
      'System maintenance & updates',
    ],
    icon: '💻',
    link: '/services/it-infrastructure',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Data Center Services',
    description:
      'Enterprise-grade data center solutions with high availability and security',
    features: [
      'Colocation services',
      'Private cloud hosting',
      'Disaster recovery',
      'Backup & storage solutions',
      '99.99% uptime SLA',
    ],
    icon: '🏢',
    link: '/services/data-center',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Managed Security Services',
    description:
      '24/7 security monitoring and threat response by certified experts',
    features: [
      'SOC-as-a-Service',
      'SIEM management',
      'Threat hunting & detection',
      'Incident response',
      'Vulnerability management',
    ],
    icon: '🛡️',
    link: '/services/managed-security',
    pricing: 'Contact us for pricing',
    popular: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Cybersecurity Consulting',
    description:
      'Strategic cybersecurity consulting and risk assessment services',
    features: [
      'Security strategy development',
      'Risk assessments & audits',
      'Compliance consulting',
      'Security architecture design',
      'Policy & procedure development',
    ],
    icon: '🔍',
    link: '/services/cybersecurity-consulting',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Penetration Testing & Red Team',
    description:
      'Advanced security testing and adversarial simulation services',
    features: [
      'External penetration testing',
      'Internal network testing',
      'Web application security',
      'Red team exercises',
      'Social engineering assessments',
    ],
    icon: '⚔️',
    link: '/services/red-teaming',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-red-500 to-rose-500',
  },
  {
    name: 'Incident Response & Forensics',
    description:
      'Rapid incident response and digital forensics investigation services',
    features: [
      '24/7 emergency response',
      'Digital forensics analysis',
      'Malware analysis',
      'Recovery & remediation',
      'Legal support & reporting',
    ],
    icon: '🚨',
    link: '/services/incident-response',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Compliance & Governance',
    description:
      'Comprehensive compliance management and governance frameworks',
    features: [
      'GDPR, HIPAA, PCI DSS compliance',
      'SOC 2 audit preparation',
      'ISO 27001 implementation',
      'Policy management',
      'Audit & assessment services',
    ],
    icon: '📋',
    link: '/services/governance-compliance',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Security Training & Awareness',
    description: 'Comprehensive cybersecurity education and awareness programs',
    features: [
      'Security awareness training',
      'Phishing simulation',
      'Technical skills training',
      'Executive briefings',
      'Certification preparation',
    ],
    icon: '🎓',
    link: '/services/training',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-teal-500 to-green-500',
  },
  {
    name: 'Cloud Security Services',
    description: 'Specialized cloud security and DevSecOps implementation',
    features: [
      'Cloud security assessment',
      'DevSecOps integration',
      'Container security',
      'Multi-cloud governance',
      'Cloud compliance automation',
    ],
    icon: '☁️',
    link: '/services/cloud-security',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-sky-500 to-blue-500',
  },
]

const industryExpertise = [
  {
    industry: 'Financial Services',
    description: 'Banking, insurance, and fintech security solutions',
    icon: '🏦',
    regulations: ['PCI DSS', 'SOX', 'GLBA', 'NYDFS'],
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    industry: 'Healthcare',
    description: 'HIPAA-compliant security for healthcare organizations',
    icon: '🏥',
    regulations: ['HIPAA', 'HITECH', 'FDA', 'GDPR'],
    gradient: 'from-blue-400 to-indigo-400',
  },
  {
    industry: 'Enterprise',
    description: 'Enterprise security requirements and compliance',
    icon: '🏛️',
    regulations: ['FedRAMP', 'FISMA', 'NIST', 'CJIS'],
    gradient: 'from-red-400 to-pink-400',
  },
  {
    industry: 'Manufacturing',
    description: 'OT/IT security for industrial environments',
    icon: '🏭',
    regulations: ['IEC 62443', 'NERC CIP', 'ISO 27001'],
    gradient: 'from-orange-400 to-yellow-400',
  },
  {
    industry: 'Technology',
    description: 'SaaS, cloud, and software company security',
    icon: '💻',
    regulations: ['SOC 2', 'ISO 27001', 'GDPR', 'CCPA'],
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    industry: 'Retail & E-commerce',
    description: 'Customer data protection and payment security',
    icon: '🛍️',
    regulations: ['PCI DSS', 'GDPR', 'CCPA', 'SOX'],
    gradient: 'from-green-400 to-teal-400',
  },
]

const serviceStats = [
  {
    metric: '500+',
    label: 'Clients Served',
    description: 'Organizations trust our services',
    icon: '👥',
    color: 'from-blue-400 to-blue-600',
  },
  {
    metric: '99.9%',
    label: 'Uptime SLA',
    description: 'Guaranteed service availability',
    icon: '⚡',
    color: 'from-green-400 to-green-600',
  },
  {
    metric: '<15min',
    label: 'Response Time',
    description: 'Average incident response',
    icon: '⏱️',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    metric: '24/7',
    label: 'Monitoring',
    description: 'Round-the-clock security',
    icon: '🔍',
    color: 'from-purple-400 to-purple-600',
  },
  {
    metric: '200+',
    label: 'Certified Experts',
    description: 'Security professionals on staff',
    icon: '🎓',
    color: 'from-pink-400 to-pink-600',
  },
  {
    metric: '98%',
    label: 'Client Satisfaction',
    description: 'Customer retention rate',
    icon: '❤️',
    color: 'from-red-400 to-red-600',
  },
]

const certifications = [
  'CISSP',
  'CISM',
  'CISSP',
  'GCIH',
  'GPEN',
  'OSCP',
  'CEH',
  'CISA',
  'CRISC',
  'CGEIT',
  'PMP',
  'ITIL',
  'AWS Certified',
  'Azure Certified',
  'GCP Certified',
  'SANS Certified',
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0F]">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Complete <span className="text-accent-500">IT & Security</span>{' '}
            Services
          </h1>
          <p className="text-2xl text-text-secondary mb-12 max-w-5xl mx-auto leading-relaxed">
            From IT support and data center services to advanced cybersecurity
            solutions. We provide comprehensive technology services that scale
            with your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#services" className="btn text-lg px-8 py-4">
              Explore Services
            </Link>
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {serviceStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A]/50 backdrop-blur-sm p-4 rounded-lg border border-[#333]"
              >
                <div className="text-2xl font-bold text-accent-500 mb-1">
                  {stat.metric}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-text-secondary">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive technology and security services designed to support
              your business at every stage of growth. From basic IT support to
              enterprise-grade security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => (
              <Link key={service.name} href={service.link} className="group">
                <div
                  className={`bg-[#1A1A1A] p-8 rounded-lg border transition-all duration-300 group-hover:transform group-hover:scale-105 relative overflow-hidden ${
                    service.popular
                      ? 'border-accent-500 ring-2 ring-[accent-500]/20'
                      : 'border-[#333] hover:border-accent-500'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-accent-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                      POPULAR
                    </div>
                  )}

                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-accent-500 text-sm flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-text-secondary">Contact us for</span>
                      <div className="font-semibold text-white">
                        {service.pricing}
                      </div>
                    </div>
                    <div className="text-accent-500 group-hover:text-white transition-colors font-medium">
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-background-alt/50 to-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Industry{' '}
              <span className="fxology-text-gradient">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Deep industry knowledge and compliance expertise across regulated
              and high-risk sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((industry, index) => (
              <div
                key={industry.industry}
                className="group relative fxology-card p-8 rounded-3xl hover:fxology-shadow transition-all duration-500 hover:scale-105 transform hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 filter group-hover:drop-shadow-lg">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-500 transition-colors duration-300">
                    {industry.industry}
                  </h3>
                  <p className="text-text-secondary text-base mb-6 group-hover:text-white transition-colors duration-300">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {industry.regulations.map((reg, regIndex) => (
                      <span
                        key={reg}
                        className="px-3 py-2 bg-gradient-to-r from-accent-500/10 to-success-500/10 text-accent-500 text-sm rounded-xl border border-accent-500/20 hover:border-accent-500/50 hover:bg-gradient-to-r hover:from-accent-500/20 hover:to-success-500/20 transition-all duration-300 hover:scale-105"
                        style={{ transitionDelay: `${regIndex * 100}ms` }}
                      >
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
                Our Service{' '}
                <span className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent">
                  Delivery
                </span>{' '}
                Approach
              </h2>
              <div className="space-y-8 text-text-secondary">
                {[
                  {
                    step: '1',
                    title: 'Assessment & Planning',
                    description:
                      'Comprehensive evaluation of your current environment and strategic planning for optimal outcomes.',
                    gradient: 'from-blue-500 to-cyan-500',
                  },
                  {
                    step: '2',
                    title: 'Implementation',
                    description:
                      'Expert implementation with minimal business disruption and comprehensive testing protocols.',
                    gradient: 'from-green-500 to-emerald-500',
                  },
                  {
                    step: '3',
                    title: 'Monitoring & Support',
                    description:
                      '24/7 monitoring, proactive maintenance, and ongoing optimization to ensure peak performance.',
                    gradient: 'from-purple-500 to-pink-500',
                  },
                  {
                    step: '4',
                    title: 'Continuous Improvement',
                    description:
                      'Regular reviews, updates, and enhancements to adapt to evolving threats and business needs.',
                    gradient: 'from-orange-500 to-red-500',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-6 hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                    >
                      <span className="text-white text-lg font-bold">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-3 group-hover:text-accent-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-base group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A1A]/90 to-[#2D2D2D]/90 backdrop-blur-xl p-10 rounded-3xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[accent-500]/10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Service Level{' '}
                <span className="bg-gradient-to-r from-accent-500 to-[#EC4899] bg-clip-text text-transparent">
                  Agreements
                </span>
              </h3>
              <div className="space-y-6">
                {[
                  {
                    label: 'Critical Issue Response',
                    value: '< 15 minutes',
                    icon: '⚡',
                  },
                  { label: 'Service Availability', value: '99.9%', icon: '🛡️' },
                  {
                    label: 'Security Incident Response',
                    value: '< 1 hour',
                    icon: '🚨',
                  },
                  {
                    label: 'Monthly Security Reports',
                    value: 'Included',
                    icon: '📊',
                  },
                  { label: 'Compliance Support', value: '24/7', icon: '✅' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex justify-between items-center border-b border-[#333]/50 pb-4 hover:border-accent-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="text-text-secondary group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-accent-500 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gradient-to-br from-[#0D0D0F]/90 to-[#1A1A1A]/90 rounded-2xl">
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Team Certifications
                </h4>
                <div className="flex flex-wrap gap-3">
                  {certifications.slice(0, 8).map((cert, index) => (
                    <span
                      key={cert}
                      className="px-3 py-2 bg-gradient-to-r from-accent-500/10 to-[#EC4899]/10 text-accent-500 text-sm rounded-xl border border-accent-500/20 hover:border-accent-500/50 hover:bg-gradient-to-r hover:from-accent-500/20 hover:to-[#EC4899]/20 transition-all duration-300 hover:scale-105"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {cert}
                    </span>
                  ))}
                  <span className="px-3 py-2 text-text-secondary text-sm bg-[#333]/20 rounded-xl">
                    +{certifications.length - 8} more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#0D0D0F]/80 via-[#1A1A1A]/60 to-[#0D0D0F]/80 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 via-transparent to-[#EC4899]/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="text-6xl animate-bounce">🎯</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-accent-500 via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent">
              IT & Security?
            </span>
          </h2>
          <p className="text-2xl text-text-secondary mb-12 leading-relaxed">
            Get a free consultation with our experts and discover how our
            comprehensive services can accelerate your business growth while
            keeping you secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-accent-500 to-[#EC4899] text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[accent-500]/25 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>Get Free Consultation</span>
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                  💬
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/services/managed-security"
              className="group relative overflow-hidden border-3 border-accent-500 text-accent-500 px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-accent-500 hover:to-[#EC4899] hover:text-white hover:shadow-2xl hover:shadow-[accent-500]/25 hover:border-transparent transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>View Popular Service</span>
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                  ⭐
                </span>
              </span>
            </Link>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#1A1A1A]/80 to-[#2D2D2D]/80 backdrop-blur-xl rounded-3xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[accent-500]/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {[
                {
                  value: 'Free',
                  label: 'Security Assessment',
                  icon: '🔍',
                  gradient: 'from-green-400 to-emerald-400',
                },
                {
                  value: '24/7',
                  label: 'Emergency Support',
                  icon: '🚨',
                  gradient: 'from-red-400 to-pink-400',
                },
                {
                  value: 'No Lock-in',
                  label: 'Flexible Contracts',
                  icon: '🔓',
                  gradient: 'from-blue-400 to-cyan-400',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group text-center hover:scale-110 transition-all duration-300"
                >
                  <div className="text-4xl mb-3 group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {item.value}
                  </div>
                  <div className="text-base text-text-secondary group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
