import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cybersecurity Training Programs | Resilient Privacy',
  description:
    'Professional cybersecurity training programs and certifications. Enhance your security skills with our comprehensive training courses.',
  keywords: [
    'cybersecurity training',
    'security certification',
    'professional development',
    'security education',
    'training programs',
  ],
}

const trainingPrograms = [
  {
    title: 'AI Security Fundamentals',
    slug: 'ai-security-fundamentals',
    description:
      'Essential AI security concepts covering model protection, adversarial attacks, and AI threat landscape',
    duration: '3-4 days',
    level: 'Beginner',
    category: 'AI Security',
    features: [
      'AI threat landscape overview',
      'Model vulnerability assessment',
      'Adversarial attack fundamentals',
      'AI security best practices',
      'Prompt injection defense',
    ],
  },
  {
    title: 'AI-Powered Threat Detection',
    slug: 'ai-powered-threat-detection',
    description:
      'Advanced AI techniques for detecting sophisticated cyber threats using machine learning and behavioral analysis',
    duration: '4-5 days',
    level: 'Intermediate',
    category: 'AI Security',
    features: [
      'Machine learning for threat hunting',
      'Behavioral anomaly detection',
      'AI-driven security analytics',
      'Automated threat classification',
      'Real-time threat intelligence',
    ],
  },
  {
    title: 'Secure AI Model Development',
    slug: 'secure-ai-model-development',
    description:
      'Comprehensive training on building secure AI models with privacy protection and adversarial robustness',
    duration: '5-6 days',
    level: 'Advanced',
    category: 'AI Security',
    features: [
      'Secure model architecture design',
      'Differential privacy implementation',
      'Adversarial training techniques',
      'Model extraction prevention',
      'AI model governance',
    ],
  },
  {
    title: 'API Security with AI Integration',
    slug: 'api-security-ai-integration',
    description:
      'Advanced API security training with AI-powered protection, authentication, and threat detection',
    duration: '4-5 days',
    level: 'Intermediate',
    category: 'API Security',
    features: [
      'AI-enhanced API authentication',
      'Behavioral API monitoring',
      'OWASP API Top 10 with AI solutions',
      'Automated API threat detection',
      'AI-driven rate limiting',
    ],
  },
  {
    title: 'AI Security Operations Center',
    slug: 'ai-security-operations-center',
    description:
      'Comprehensive AI-powered SOC training covering autonomous security operations and AI-driven incident response',
    duration: '5-6 days',
    level: 'Advanced',
    category: 'AI Security',
    features: [
      'AI-powered SOC automation',
      'Autonomous threat response',
      'AI-driven incident analysis',
      'Machine learning for security orchestration',
      'AI-enhanced forensics',
    ],
  },
  {
    title: 'AI Security Leadership & Strategy',
    slug: 'ai-security-leadership-strategy',
    description:
      'Executive-level training on AI security strategy, governance, and organizational transformation',
    duration: '3-4 days',
    level: 'Executive',
    category: 'AI Leadership',
    features: [
      'AI security strategy development',
      'AI governance frameworks',
      'AI risk management',
      'AI security transformation',
      'AI ethics and compliance',
    ],
  },
]

const certifications = [
  {
    name: 'Resilient Privacy AI Security Professional (RPAISP)',
    description:
      'Advanced certification in AI security, covering adversarial attacks, model protection, and AI threat detection',
    validity: '3 years',
    exam: '4-hour practical exam',
    benefits: [
      'AI security expertise validation',
      'Advanced threat detection skills',
      'Model protection techniques',
      'Industry-leading AI security knowledge'
    ],
    requirements: '2+ years cybersecurity experience, basic AI/ML knowledge',
    provider: 'Resilient Privacy'
  },
  {
    name: 'Resilient Privacy API Security Specialist (RPASS)',
    description:
      'Comprehensive API security certification covering OWASP API Top 10, authentication, and threat protection',
    validity: '3 years',
    exam: '3-hour hands-on exam',
    benefits: [
      'API security mastery',
      'OWASP API Top 10 expertise',
      'Advanced authentication skills',
      'Real-world API protection'
    ],
    requirements: '1+ years API development or security experience',
    provider: 'Resilient Privacy'
  },
  {
    name: 'Resilient Privacy Threat Hunter (RPTH)',
    description:
      'Specialized certification for AI-powered threat hunting, behavioral analysis, and incident response',
    validity: '2 years',
    exam: '5-hour practical assessment',
    benefits: [
      'AI-powered threat hunting skills',
      'Behavioral analysis expertise',
      'Advanced incident response',
      'Cutting-edge threat detection'
    ],
    requirements: '3+ years security operations experience',
    provider: 'Resilient Privacy'
  },
  {
    name: 'Resilient Privacy Cloud Security Architect (RPCSA)',
    description:
      'Advanced cloud security certification covering multi-cloud environments, zero-trust, and AI-enhanced security',
    validity: '3 years',
    exam: '4-hour architecture design exam',
    benefits: [
      'Multi-cloud security expertise',
      'Zero-trust architecture design',
      'AI-enhanced cloud protection',
      'Advanced security architecture'
    ],
    requirements: '3+ years cloud experience, 2+ years security',
    provider: 'Resilient Privacy'
  },
  {
    name: 'Resilient Privacy Security Operations Expert (RPSOE)',
    description:
      'Comprehensive SOC certification covering AI-powered operations, automation, and advanced analytics',
    validity: '2 years',
    exam: '6-hour practical simulation',
    benefits: [
      'AI-powered SOC operations',
      'Security automation expertise',
      'Advanced analytics skills',
      'Next-generation SOC leadership'
    ],
    requirements: '2+ years SOC experience, basic AI knowledge',
    provider: 'Resilient Privacy'
  },
  {
    name: 'Resilient Privacy Identity & Access Master (RPIAM)',
    description:
      'Advanced identity management certification covering AI-enhanced authentication, behavioral biometrics, and zero-trust identity',
    validity: '3 years',
    exam: '4-hour practical exam',
    benefits: [
      'AI-enhanced identity management',
      'Behavioral biometrics expertise',
      'Zero-trust identity architecture',
      'Advanced authentication methods'
    ],
    requirements: '2+ years identity management experience',
    provider: 'Resilient Privacy'
  },
  {
    name: 'Resilient Privacy Data Protection Specialist (RPDPS)',
    description:
      'Comprehensive data protection certification covering AI privacy, differential privacy, and advanced data governance',
    validity: '3 years',
    exam: '3-hour case study exam',
    benefits: [
      'AI privacy expertise',
      'Differential privacy implementation',
      'Advanced data governance',
      'Privacy-preserving AI techniques'
    ],
    requirements: '2+ years data protection or privacy experience',
    provider: 'Resilient Privacy'
  },
  {
    name: 'Resilient Privacy Security Leadership (RPSL)',
    description:
      'Executive-level certification for security leadership, strategy, and AI-driven security transformation',
    validity: '3 years',
    exam: '5-hour strategic assessment',
    benefits: [
      'Security leadership excellence',
      'AI-driven transformation strategy',
      'Executive decision-making',
      'Advanced security governance'
    ],
    requirements: '5+ years security management experience',
    provider: 'Resilient Privacy'
  },
  {
    name: 'Resilient Privacy Incident Response Commander (RPIRC)',
    description:
      'Advanced incident response certification covering AI-powered forensics, automated response, and crisis management',
    validity: '2 years',
    exam: '6-hour crisis simulation',
    benefits: [
      'AI-powered incident response',
      'Automated forensics expertise',
      'Crisis management leadership',
      'Advanced threat containment'
    ],
    requirements: '3+ years incident response experience',
    provider: 'Resilient Privacy'
  }
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-primary-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="darkfire-text-gradient">
                Professional Cybersecurity Training
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Master AI security and advanced cybersecurity with our cutting-edge training
              programs. Learn to protect AI systems, secure APIs, and implement AI-powered
              security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request Training Quote
              </Link>
              <Link
                href="#programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Training Programs
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Cutting-edge AI security and cybersecurity training programs designed to
              prepare you for the future of security. Master AI protection, API security,
              and next-generation threat defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="card group hover-lift">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-purple">
                      <span className="text-white font-bold text-lg">
                        {program.title.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full">
                        {program.level}
                      </span>
                    </div>
                  </div>
                  <span className="text-text-tertiary text-sm">
                    {program.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
                  {program.title}
                </h3>

                <p className="text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-sm font-semibold text-accent-400 mb-2">
                    Key Topics:
                  </h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-accent-400 mr-2 mt-1 text-xs">✓</span>
                        <span className="text-text-secondary text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/resources/training/${program.slug}`}
                  className="text-gradient hover:underline font-semibold text-sm sm:text-base"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Professional Certifications
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              Validate your cybersecurity expertise with Resilient Privacy's
              proprietary certifications. Our cutting-edge certifications focus on
              AI security, API protection, and next-generation cybersecurity
              technologies that set you apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card group hover-lift p-4 sm:p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg mb-4 flex items-center justify-center shadow-purple group-hover:shadow-purple-lg transition-all duration-300">
                  <span className="text-white font-bold text-xs">
                    RP
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3">
                  {cert.name}
                </h3>

                <p className="text-text-secondary mb-3 sm:mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>

                <div className="space-y-1 mb-3 sm:mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-tertiary">Validity:</span>
                    <span className="text-text-secondary font-semibold">
                      {cert.validity}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-tertiary">Exam:</span>
                    <span className="text-text-secondary font-semibold">
                      {cert.exam}
                    </span>
                  </div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs font-semibold text-accent-400 mb-1">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {cert.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-accent-400 mr-1 mt-0.5 text-xs">✓</span>
                        <span className="text-text-secondary text-xs">{benefit}</span>
                      </li>
                    ))}
                    {cert.benefits.length > 2 && (
                      <li className="text-text-tertiary text-xs">
                        +{cert.benefits.length - 2} more
                      </li>
                    )}
                  </ul>
                </div>

                <Link
                  href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient hover:underline font-semibold text-xs sm:text-sm"
                >
                  Get Certified →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Why Choose Our Training?
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Our AI security training programs are designed by leading researchers and
              industry experts to provide practical, hands-on experience with cutting-edge
              AI security technologies and next-generation cybersecurity methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-purple">
                
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
                AI Security Labs
              </h3>
              <p className="text-text-secondary">
                Hands-on AI security labs with real-world adversarial attacks,
                model protection exercises, and AI threat simulation scenarios.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-purple">
                <span className="text-white font-bold text-2xl"></span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
                AI Security Experts
              </h3>
              <p className="text-text-secondary">
                Learn from leading AI security researchers and practitioners with
                deep expertise in machine learning security and AI threat defense.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-purple">
                <span className="text-white font-bold text-2xl">📜</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
                AI Security Certifications
              </h3>
              <p className="text-text-secondary">
                Earn cutting-edge AI security certifications that validate your
                expertise in AI protection, model security, and advanced threat defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join leading security professionals who have mastered AI security
            and advanced cybersecurity with our cutting-edge training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
