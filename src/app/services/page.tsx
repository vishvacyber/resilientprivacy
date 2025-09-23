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
    name: 'AI Security Solutions',
    description:
      'Advanced AI security services including model protection, adversarial defense, and AI-powered threat detection',
    features: [
      'AI model security assessment',
      'Adversarial attack protection',
      'AI-powered threat detection',
      'Secure AI model development',
      'AI security consulting',
    ],
    link: '/services/ai-security',
    pricing: 'Contact us for pricing',
    popular: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'API Security Services',
    description:
      'Comprehensive API security including authentication, authorization, and threat protection',
    features: [
      'API security assessment',
      'OWASP API Top 10 protection',
      'API authentication & authorization',
      'API threat monitoring',
      'API security consulting',
    ],
    link: '/services/api-security',
    pricing: 'Contact us for pricing',
    popular: true,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Managed Security Services',
    description:
      '24/7 security monitoring and threat response by certified experts',
    features: [
      'SOC-as-a-Service',
      'Threat hunting & detection',
      'Incident response',
      'Vulnerability management',
      'Security monitoring',
    ],
    link: '/services/managed-security',
    pricing: 'Contact us for pricing',
    popular: true,
    gradient: 'from-green-500 to-emerald-500',
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
      'Policy development',
    ],
    link: '/services/cybersecurity-consulting',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Penetration Testing',
    description:
      'Advanced security testing and vulnerability assessment services',
    features: [
      'External penetration testing',
      'Internal network testing',
      'Web application security',
      'Red team exercises',
      'Security assessments',
    ],
    link: '/services/red-teaming',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-red-500 to-rose-500',
  },
  {
    name: 'Incident Response',
    description:
      'Rapid incident response and digital forensics investigation services',
    features: [
      '24/7 emergency response',
      'Digital forensics analysis',
      'Malware analysis',
      'Recovery & remediation',
      'Legal support',
    ],
    link: '/services/incident-response',
    pricing: 'Contact us for pricing',
    popular: false,
    gradient: 'from-yellow-500 to-orange-500',
  },
]


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0F]">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Advanced <span className="text-accent-500">AI & API Security</span>{' '}
            Services
          </h1>
          <p className="text-2xl text-text-secondary mb-12 max-w-5xl mx-auto leading-relaxed">
            Cutting-edge AI security and API protection services. We provide
            comprehensive cybersecurity solutions that protect your AI systems
            and secure your APIs.
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
                  },
                  { label: 'Service Availability', value: '99.9%' },
                  {
                    label: 'Security Incident Response',
                    value: '< 1 hour',
                  },
                  {
                    label: 'Monthly Security Reports',
                    value: 'Included',
                    
                  },
                  { label: 'Compliance Support', value: '24/7', icon: '' },
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

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
