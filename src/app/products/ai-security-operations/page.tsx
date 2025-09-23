import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Security Operations Center - Autonomous SOC with AI Analytics | Resilient Privacy',
  description: 'Revolutionary AI-powered Security Operations Center with 24/7 autonomous monitoring, automated threat hunting, and intelligent incident response. Next-generation SOC technology.',
  keywords: [
    'AI security operations center',
    'AI SOC',
    'autonomous security operations',
    'AI security monitoring',
    'automated threat hunting',
    'AI incident response',
    'intelligent security analytics',
    'AI security automation',
    'predictive security analytics',
    'AI security platform',
  ],
  openGraph: {
    title: 'AI Security Operations Center - Autonomous SOC with AI Analytics | Resilient Privacy',
    description: 'Revolutionary AI-powered Security Operations Center with 24/7 autonomous monitoring, automated threat hunting, and intelligent incident response.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/ai-security-operations',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/ai-security-operations',
  },
}

const aiSOCFeatures = [
  {
    title: '24/7 AI Monitoring',
    description: 'Continuous autonomous monitoring using advanced AI algorithms that never sleep, providing round-the-clock security coverage.',
    features: [
      'Autonomous threat detection',
      'Real-time security analytics',
      'Continuous learning algorithms',
      'Multi-vector threat analysis',
      'Predictive threat modeling',
      'Automated alert correlation',
    ],
    icon: '🔄',
  },
  {
    title: 'Automated Threat Hunting',
    description: 'AI-driven threat hunting that proactively searches for advanced threats and attack patterns across your entire infrastructure.',
    features: [
      'Proactive threat discovery',
      'Behavioral anomaly detection',
      'Attack pattern recognition',
      'Threat intelligence correlation',
      'Automated investigation workflows',
      'Contextual threat analysis',
    ],
    icon: '🔍',
  },
  {
    title: 'Intelligent Incident Response',
    description: 'AI-powered incident response that automatically contains threats, analyzes impact, and executes remediation procedures.',
    features: [
      'Automated threat containment',
      'Impact assessment and scoring',
      'Dynamic response orchestration',
      'Automated remediation actions',
      'Learning from response outcomes',
      'Escalation intelligence',
    ],
    icon: '⚡',
  },
  {
    title: 'Predictive Security Analytics',
    description: 'Advanced analytics that predict potential security incidents before they occur, enabling proactive defense strategies.',
    features: [
      'Threat prediction modeling',
      'Risk trend analysis',
      'Vulnerability forecasting',
      'Attack vector prediction',
      'Security posture scoring',
      'Proactive recommendations',
    ],
    icon: '📊',
  },
]

const aiSOCMetrics = [
  {
    metric: '99.9%',
    label: 'AI Uptime',
    description: 'Continuous AI monitoring availability',
  },
  {
    metric: '<30 seconds',
    label: 'Threat Detection',
    description: 'Average time to detect threats',
  },
  {
    metric: '<2 minutes',
    label: 'Response Time',
    description: 'Automated response to critical threats',
  },
  {
    metric: '95%',
    label: 'False Positive Reduction',
    description: 'AI-driven alert accuracy improvement',
  },
  {
    metric: '24/7/365',
    label: 'Autonomous Operation',
    description: 'Continuous AI-powered monitoring',
  },
  {
    metric: '50+',
    label: 'AI Models',
    description: 'Specialized security AI algorithms',
  },
]

const aiSOCBenefits = [
  {
    title: 'Reduced Security Costs',
    description: 'Eliminate the need for large SOC teams with AI automation handling routine security tasks.',
    savings: '70%',
    icon: '💰',
  },
  {
    title: 'Faster Threat Response',
    description: 'AI responds to threats in seconds, not hours, minimizing potential damage and exposure.',
    improvement: '90%',
    icon: '⚡',
  },
  {
    title: 'Enhanced Detection Accuracy',
    description: 'AI algorithms detect sophisticated threats that human analysts might miss.',
    accuracy: '99.7%',
    icon: '🎯',
  },
  {
    title: 'Continuous Learning',
    description: 'AI systems continuously improve their detection capabilities through machine learning.',
    improvement: '15%',
    icon: '🧠',
  },
]

const aiSOCUseCases = [
  {
    scenario: 'Enterprise Security Operations',
    description: 'Replace traditional SOC with AI-powered operations for large enterprises',
    benefits: [
      'Automated 24/7 monitoring',
      'Reduced analyst workload',
      'Enhanced threat detection',
      'Cost-effective security operations',
    ],
  },
  {
    scenario: 'Managed Security Services',
    description: 'Provide AI-enhanced managed security services to clients',
    benefits: [
      'Scalable security operations',
      'Consistent service delivery',
      'Advanced threat protection',
      'Reduced operational costs',
    ],
  },
  {
    scenario: 'Critical Infrastructure Protection',
    description: 'Protect critical infrastructure with AI-powered security operations',
    benefits: [
      'Continuous monitoring',
      'Rapid threat response',
      'Compliance automation',
      'Risk reduction',
    ],
  },
  {
    scenario: 'Cloud Security Operations',
    description: 'Secure cloud environments with AI-driven security operations',
    benefits: [
      'Multi-cloud monitoring',
      'Automated compliance',
      'Threat correlation',
      'Scalable protection',
    ],
  },
]

export default function AISecurityOperationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Security <span className="fxology-text-gradient">Operations Center</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Revolutionary AI-powered Security Operations Center built by leading cybersecurity 
            researchers. Our autonomous security operations achieve 99.9% uptime with sub-30-second 
            threat detection, protecting against sophisticated LLM attacks and zero-day exploits.
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

      {/* AI SOC Metrics */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI SOC Performance Metrics
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our AI Security Operations Center delivers exceptional performance 
              through advanced machine learning and autonomous operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiSOCMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] text-center hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-accent-500 mb-2">
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

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI SOC Core Features
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive AI-powered security operations capabilities that 
              transform traditional SOC operations into intelligent, autonomous systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiSOCFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#333] hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-accent-500 text-sm flex items-center"
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

      {/* Benefits */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI SOC Benefits
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Transform your security operations with AI-powered automation, 
              intelligence, and efficiency improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiSOCBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] text-center hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-accent-500">
                  {benefit.savings || benefit.improvement || benefit.accuracy}
                </div>
                <div className="text-xs text-text-secondary">
                  {benefit.savings ? 'Cost Reduction' : 
                   benefit.improvement ? 'Improvement' : 'Accuracy'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI SOC Use Cases
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real-world applications where AI Security Operations Center 
              provides transformative security capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSOCUseCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333]"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.scenario}
                </h3>
                <p className="text-text-secondary mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="text-accent-500 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your SOC with AI?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Experience the future of security operations with our AI-powered SOC. 
            Get started with a free security assessment and see how AI can 
            revolutionize your security operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Get Free Assessment
            </Link>
            <Link
              href="/products"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
