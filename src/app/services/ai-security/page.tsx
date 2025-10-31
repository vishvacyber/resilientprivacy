import Link from 'next/link'
import FormButton from '@/components/FormButton'
import { Metadata } from 'next'
import { Shield, Brain, Lock, Eye, Zap, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Security Services - Advanced AI Protection & Threat Detection',
  description:
    'Comprehensive AI security services including AI model protection, adversarial defense, AI-powered threat detection, and secure AI development. Protect your AI systems from emerging threats.',
  keywords: [
    'AI security services',
    'AI model protection',
    'adversarial defense',
    'AI threat detection',
    'secure AI development',
    'machine learning security',
    'AI security consulting',
  ],
  openGraph: {
    title: 'AI Security Services - Advanced AI Protection & Threat Detection',
    description:
      'Comprehensive AI security services including AI model protection, adversarial defense, and AI-powered threat detection.',
    type: 'website',
    url: 'https://resilientprivacy.com/services/ai-security',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/services/ai-security',
  },
}

const aiSecurityServices = [
  {
    category: 'AI Model Security Assessment',
    description:
      'Comprehensive evaluation of your AI models and machine learning systems for vulnerabilities and security risks',
    services: [
      'Model vulnerability scanning and testing',
      'Adversarial attack simulation',
      'Data poisoning detection',
      'Model extraction risk assessment',
      'Privacy leakage analysis',
      'Model integrity verification',
    ],
    icon: <Shield className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Adversarial Attack Protection',
    description:
      'Defense mechanisms against adversarial examples, model evasion, and sophisticated AI attacks',
    services: [
      'Adversarial training implementation',
      'Input validation and sanitization',
      'Robust model architecture design',
      'Attack detection and mitigation',
      'Defensive distillation techniques',
      'Certified adversarial robustness',
    ],
    icon: <Lock className="w-6 h-6" />,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    category: 'AI-Powered Threat Detection',
    description:
      'Advanced threat detection and security monitoring using artificial intelligence and machine learning',
    services: [
      'Behavioral anomaly detection',
      'AI-driven security analytics',
      'Predictive threat intelligence',
      'Automated incident response',
      'Real-time threat hunting',
      'Security orchestration with AI',
    ],
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Secure AI Model Development',
    description:
      'Security-first AI development practices and secure ML pipeline implementation',
    services: [
      'Secure ML pipeline design',
      'Model versioning and governance',
      'Secure training data management',
      'Model deployment security',
      'MLOps security best practices',
      'AI governance frameworks',
    ],
    icon: <Zap className="w-6 h-6" />,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    category: 'AI Security Consulting',
    description:
      'Strategic AI security consulting to develop comprehensive security strategies for AI implementations',
    services: [
      'AI security strategy development',
      'Risk assessment and mitigation',
      'Security architecture design',
      'Compliance and governance',
      'Security training and awareness',
      'Incident response planning',
    ],
    icon: <Eye className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-500',
  },
]

const aiSecurityBenefits = [
  {
    title: 'Comprehensive AI Protection',
    description:
      'End-to-end security coverage for your AI systems from development to deployment',
    value: '360° Protection',
  },
  {
    title: 'Advanced Threat Detection',
    description:
      'AI-powered detection that identifies threats traditional security tools miss',
    value: '99.9% Detection Rate',
  },
  {
    title: 'Regulatory Compliance',
    description:
      'Stay compliant with AI regulations including EU AI Act and emerging standards',
    value: '100% Compliant',
  },
  {
    title: 'Reduced Security Risk',
    description:
      'Significantly reduce AI-related security risks and vulnerabilities',
    value: '85% Risk Reduction',
  },
]

export default function AISecurityServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-Optimized Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
              <span className="text-primary-500 text-xs sm:text-sm font-medium">
                AI Security Services
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Advanced{' '}
              <span className="darkfire-text-gradient">AI Security</span>{' '}
              Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
              Protect your AI systems from emerging threats with comprehensive
              AI security services. From model protection to adversarial defense,
              we secure your AI infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <FormButton className="btn text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px]">
                Get Started
              </FormButton>
              <Link
                href="/contact"
                className="btn-secondary text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px] flex items-center justify-center gap-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Security Services */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Comprehensive AI Security Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto px-2">
              End-to-end AI security services designed to protect your machine
              learning models and AI systems from sophisticated threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {aiSecurityServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-background-card to-background-alt rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border-light/20 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4 text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {service.category}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.services.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-xs sm:text-sm text-text-secondary flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Why Choose Our AI Security Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {aiSecurityBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border-light/20 text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400 mb-2 sm:mb-3">
                  {benefit.value}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Secure Your AI Systems?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Get started with our AI security services and protect your machine
            learning models from emerging threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <FormButton className="btn text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px]">
              Request Consultation
            </FormButton>
            <Link
              href="/contact"
              className="btn-secondary text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px] flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

