import Link from 'next/link'

const modernServices = [
  {
    category: 'AI-Powered Security Strategy',
    description:
      'Leverage artificial intelligence and machine learning for next-generation security planning',
    services: [
      'AI-driven threat landscape analysis',
      'Automated risk assessment and prioritization',
      'Machine learning security model development',
      'Predictive security analytics implementation',
      'AI governance and ethics frameworks',
      'Autonomous security orchestration design',
    ],
    icon: '🤖',
    trend: 'NEW IN 2025',
  },
  {
    category: 'Zero Trust Architecture',
    description:
      'Comprehensive zero trust implementation and optimization for modern enterprises',
    services: [
      'Zero trust maturity assessment',
      'Identity-centric security architecture',
      'Micro-segmentation strategy',
      'Continuous verification frameworks',
      'Zero trust network access (ZTNA) design',
      'Behavioral analytics integration',
    ],
    icon: '🛡️',
    trend: 'ESSENTIAL',
  },
  {
    category: 'Quantum-Ready Cryptography',
    description:
      'Prepare your organization for the quantum computing era with future-proof encryption',
    services: [
      'Post-quantum cryptography roadmap',
      'Quantum risk assessment',
      'Crypto-agility implementation',
      'Quantum key distribution (QKD) planning',
      'Legacy encryption migration strategy',
      'Quantum-safe certificate management',
    ],
    icon: '⚛️',
    trend: 'FUTURE-READY',
  },
  {
    category: 'Cloud-Native Security',
    description:
      'Advanced security strategies for cloud-first and hybrid environments',
    services: [
      'Multi-cloud security architecture',
      'Container and Kubernetes security',
      'DevSecOps pipeline integration',
      'Serverless security frameworks',
      'Cloud security posture management (CSPM)',
      'Infrastructure as Code (IaC) security',
    ],
    icon: '☁️',
    trend: 'HIGH DEMAND',
  },
  {
    category: 'Regulatory & Compliance 2025',
    description:
      'Navigate evolving regulations and emerging compliance requirements',
    services: [
      'AI Act compliance preparation',
      'Enhanced GDPR requirements',
      'SEC cybersecurity disclosure rules',
      'NIS2 Directive implementation',
      'DORA (Digital Operational Resilience Act)',
      'State privacy law harmonization',
    ],
    icon: '📋',
    trend: 'REGULATORY UPDATE',
  },
  {
    category: 'Cyber Resilience & Recovery',
    description:
      'Build adaptive security programs that evolve with emerging threats',
    services: [
      'Cyber resilience maturity modeling',
      'Adaptive security architecture',
      'Threat-informed defense strategies',
      'Business continuity integration',
      'Supply chain risk management',
      'Crisis communication planning',
    ],
    icon: '🔄',
    trend: 'BUSINESS CRITICAL',
  },
]

const modernFrameworks = [
  {
    name: 'NIST Cybersecurity Framework 2.0',
    category: 'Foundation',
    updated: true,
  },
  { name: 'MITRE ATT&CK v14', category: 'Threat Intelligence', updated: true },
  { name: 'ISO 27001:2022', category: 'Management', updated: false },
  {
    name: 'Zero Trust Architecture (NIST SP 800-207)',
    category: 'Architecture',
    updated: false,
  },
  {
    name: 'AI Risk Management Framework (NIST AI RMF)',
    category: 'AI Governance',
    updated: true,
  },
  {
    name: 'Quantum-Safe Cryptography Standards',
    category: 'Cryptography',
    updated: true,
  },
  {
    name: 'Cloud Security Alliance (CSA) v5.0',
    category: 'Cloud Security',
    updated: true,
  },
  {
    name: 'OWASP Top 10 2024',
    category: 'Application Security',
    updated: true,
  },
  { name: 'CIS Controls v8.1', category: 'Implementation', updated: false },
  {
    name: 'ENISA Cybersecurity Framework',
    category: 'EU Compliance',
    updated: true,
  },
  {
    name: 'CISA Cybersecurity Performance Goals',
    category: 'Government',
    updated: false,
  },
  {
    name: 'SOC 2 Type II (Updated Criteria)',
    category: 'Assurance',
    updated: true,
  },
]

const consultingBenefits = [
  {
    title: 'AI-Augmented Expertise',
    description:
      'Our consultants leverage AI tools and insights to deliver faster, more accurate security assessments and recommendations.',
    icon: '🧠',
    value: '3x faster analysis',
  },
  {
    title: 'Future-Proof Strategies',
    description:
      'Security roadmaps designed to adapt to emerging technologies like quantum computing and advanced AI threats.',
    icon: '🚀',
    value: '5-10 year outlook',
  },
  {
    title: 'Regulatory Readiness',
    description:
      'Stay ahead of evolving compliance requirements with proactive regulatory impact assessments.',
    icon: '⚖️',
    value: '100% compliance rate',
  },
  {
    title: 'Measurable ROI',
    description:
      'Data-driven security investments with clear metrics and business impact measurement.',
    icon: '📈',
    value: 'Average 340% ROI',
  },
]

const industrySpecializations = [
  {
    industry: 'Financial Services & Fintech',
    focus: 'Quantum-safe banking, AI fraud detection, regulatory technology',
    regulations: ['PCI DSS 4.0', 'DORA', 'Basel III', 'FIDO2'],
    icon: '🏦',
  },
  {
    industry: 'Healthcare & Life Sciences',
    focus:
      'Medical IoT security, AI diagnostics protection, patient data sovereignty',
    regulations: ['HIPAA', 'FDA Cybersecurity', 'GDPR', 'ISO 27799'],
    icon: '🏥',
  },
  {
    industry: 'Technology & SaaS',
    focus:
      'Secure-by-design development, AI model protection, supply chain security',
    regulations: ['SOC 2 Type II', 'ISO 27001', 'AI Act', 'CCPA'],
    icon: '💻',
  },
  {
    industry: 'Critical Infrastructure',
    focus:
      'OT/IT convergence, nation-state threat defense, resilience planning',
    regulations: ['NERC CIP', 'IEC 62443', 'NIS2', 'TSA Directives'],
    icon: '⚡',
  },
  {
    industry: 'Government & Defense',
    focus:
      'Zero trust implementation, classified data protection, supply chain vetting',
    regulations: ['FedRAMP', 'FISMA', 'NIST SP 800-171', 'CMMC 2.0'],
    icon: '🏛️',
  },
  {
    industry: 'Manufacturing & IoT',
    focus:
      'Industrial IoT security, smart factory protection, edge computing security',
    regulations: ['IEC 62443', 'ISO 27001', 'GDPR', 'CCPA'],
    icon: '🏭',
  },
]

const stats = [
  {
    metric: '500+',
    label: 'Organizations Secured',
    description: 'Across 20+ industries',
  },
  {
    metric: '99.2%',
    label: 'Threat Prevention Rate',
    description: 'For our consulting clients',
  },
  {
    metric: '45 days',
    label: 'Average Implementation',
    description: 'From strategy to deployment',
  },
  {
    metric: '24/7',
    label: 'Global Support',
    description: 'Continuous advisory access',
  },
  {
    metric: '15+',
    label: 'Years Experience',
    description: 'Average consultant expertise',
  },
  {
    metric: '100%',
    label: 'Compliance Success',
    description: 'Audit pass rate for clients',
  },
]

export default function CybersecurityConsultingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0F]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] via-[#1A1A1A] to-[#0D0D0F] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              <span className="text-accent-500 text-sm font-semibold">
                AI-POWERED SECURITY CONSULTING
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Next-Generation{' '}
              <span className="text-accent-500">Cybersecurity</span> Consulting
            </h1>
            <p className="text-xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Strategic cybersecurity guidance powered by AI insights,
              quantum-ready solutions, and future-proof security architectures.
              Navigate the evolving threat landscape with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-lg px-10 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:from-[#9333EA] hover:to-[#F472B6] transform hover:scale-105 transition-all duration-300"
              >
                Schedule Strategic Consultation
              </Link>
              <Link
                href="#services"
                className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
              >
                Explore AI-Enhanced Services
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-6 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-2xl font-bold text-accent-500 mb-2">
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

      {/* Modern Services Grid */}
      <section id="services" className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              2025 Cybersecurity Consulting Services
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Cutting-edge security consulting services designed for the modern
              threat landscape, incorporating AI, quantum-readiness, and zero
              trust principles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modernServices.map((service, index) => (
              <div
                key={service.category}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]/50 p-8 rounded-2xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                        {service.category}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          service.trend === 'NEW IN 2025'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : service.trend === 'ESSENTIAL'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : service.trend === 'FUTURE-READY'
                                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                : service.trend === 'HIGH DEMAND'
                                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                  : service.trend === 'REGULATORY UPDATE'
                                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                    : 'bg-accent-500/20 text-accent-500 border border-accent-500/30'
                        }`}
                      >
                        {service.trend}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {service.services.map((item, itemIndex) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ transitionDelay: `${itemIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-text-secondary group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A]/30 to-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Deep domain knowledge across critical industries with specialized
              security requirements and regulatory frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySpecializations.map((industry, index) => (
              <div
                key={industry.industry}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-500 transition-colors duration-300">
                  {industry.industry}
                </h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {industry.focus}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.regulations.map((reg) => (
                    <span
                      key={reg}
                      className="px-3 py-1 bg-accent-500/10 text-accent-500 text-xs rounded-md border border-accent-500/20 hover:bg-accent-500/20 transition-colors duration-300"
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

      {/* Modern Frameworks */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Security Frameworks
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Implementation expertise across the latest security frameworks,
              standards, and best practices for 2025 and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modernFrameworks.map((framework, index) => (
              <div
                key={framework.name}
                className="bg-[#1A1A1A]/60 backdrop-blur-sm p-6 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group relative"
              >
                {framework.updated && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                )}
                <div className="text-center">
                  <h4 className="font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                    {framework.name}
                  </h4>
                  <span className="inline-block px-2 py-1 bg-accent-500/10 text-accent-500 text-xs rounded-md">
                    {framework.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Benefits */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A]/30 to-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI-Enhanced Consulting?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Experience the next generation of cybersecurity consulting with
              AI-augmented insights and future-ready strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group text-center"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-500 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 border border-accent-500/30 rounded-full">
                  <span className="text-accent-500 font-semibold text-sm">
                    {benefit.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0D0D0F] via-[#1A1A1A] to-[#0D0D0F]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-5xl">🚀</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Future-Proof Your Security?
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Partner with our AI-enhanced cybersecurity consultants to build
            quantum-ready, zero trust security architectures that evolve with
            emerging threats and regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-10 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:from-[#9333EA] hover:to-[#F472B6] transform hover:scale-105 transition-all duration-300"
            >
              Schedule Free Strategic Assessment
            </Link>
            <Link
              href="/services/managed-security"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
            >
              Explore Managed Security
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-2xl border border-[#333]/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">FREE</div>
              <div className="text-sm text-text-secondary">
                Initial Security Assessment
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">24/7</div>
              <div className="text-sm text-text-secondary">
                Strategic Advisory Access
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">
                GUARANTEED
              </div>
              <div className="text-sm text-text-secondary">Compliance Success</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
