import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Secure AI Model Protection - AI Security & Adversarial Attack Defense | Resilient Privacy',
  description: 'Comprehensive AI model security with adversarial attack detection, model integrity monitoring, AI model encryption, and secure deployment. Protect your AI infrastructure.',
  keywords: [
    'AI model security',
    'adversarial attack defense',
    'AI model protection',
    'model integrity monitoring',
    'AI model encryption',
    'secure AI deployment',
    'AI security threats',
    'model poisoning protection',
    'AI model hardening',
    'AI security platform',
  ],
  openGraph: {
    title: 'Secure AI Model Protection - AI Security & Adversarial Attack Defense | Resilient Privacy',
    description: 'Comprehensive AI model security with adversarial attack detection, model integrity monitoring, AI model encryption, and secure deployment.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/secure-ai-models',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/secure-ai-models',
  },
}

const aiModelSecurityFeatures = [
  {
    title: 'Model Integrity Monitoring',
    description: 'Continuous monitoring of AI model integrity to detect tampering, corruption, or unauthorized modifications.',
    features: [
      'Model hash verification',
      'Weight integrity checking',
      'Architecture validation',
      'Version control monitoring',
      'Deployment integrity verification',
      'Real-time tamper detection',
    ],
    icon: '🔒',
  },
  {
    title: 'Adversarial Attack Detection',
    description: 'Advanced detection and prevention of adversarial attacks designed to fool AI models and compromise their accuracy.',
    features: [
      'Adversarial example detection',
      'Input perturbation analysis',
      'Model confidence monitoring',
      'Attack pattern recognition',
      'Defense mechanism activation',
      'Threat intelligence integration',
    ],
    icon: '🛡️',
  },
  {
    title: 'AI Model Encryption',
    description: 'End-to-end encryption for AI models, training data, and inference data to protect intellectual property and sensitive information.',
    features: [
      'Model encryption at rest',
      'Encrypted model inference',
      'Secure key management',
      'Homomorphic encryption support',
      'Differential privacy integration',
      'Secure multi-party computation',
    ],
    icon: '🔐',
  },
  {
    title: 'Secure AI Deployment',
    description: 'Secure deployment pipeline for AI models with comprehensive security controls and monitoring.',
    features: [
      'Secure model deployment',
      'Container security scanning',
      'Runtime protection',
      'Access control enforcement',
      'Audit trail generation',
      'Compliance monitoring',
    ],
    icon: '🚀',
  },
]

const aiSecurityThreats = [
  {
    threat: 'Adversarial Examples',
    description: 'Malicious inputs designed to fool AI models and cause misclassification',
    protection: 'Input validation and adversarial training',
    icon: '🎯',
  },
  {
    threat: 'Model Poisoning',
    description: 'Corruption of training data to manipulate model behavior',
    protection: 'Data integrity monitoring and validation',
    icon: '☠️',
  },
  {
    threat: 'Model Extraction',
    description: 'Theft of AI model architecture and parameters through API queries',
    protection: 'Query rate limiting and model obfuscation',
    icon: '📤',
  },
  {
    threat: 'Inference Attacks',
    description: 'Extraction of sensitive training data through model outputs',
    protection: 'Differential privacy and output filtering',
    icon: '🔍',
  },
  {
    threat: 'Backdoor Attacks',
    description: 'Hidden triggers in models that cause malicious behavior',
    protection: 'Model analysis and trigger detection',
    icon: '🚪',
  },
  {
    threat: 'Model Inversion',
    description: 'Reconstruction of training data from model outputs',
    protection: 'Output perturbation and privacy preservation',
    icon: '🔄',
  },
]

const aiSecurityMetrics = [
  {
    metric: '99.9%',
    label: 'Model Integrity',
    description: 'AI model protection accuracy',
  },
  {
    metric: '<100ms',
    label: 'Threat Detection',
    description: 'Adversarial attack detection speed',
  },
  {
    metric: '95%',
    label: 'Attack Prevention',
    description: 'Successful attack prevention rate',
  },
  {
    metric: '24/7',
    label: 'Monitoring',
    description: 'Continuous AI model protection',
  },
  {
    metric: '100+',
    label: 'Model Types',
    description: 'Supported AI model architectures',
  },
  {
    metric: '50+',
    label: 'Security Controls',
    description: 'Comprehensive security measures',
  },
]

const aiSecurityBenefits = [
  {
    title: 'Model Protection',
    description: 'Comprehensive protection against AI-specific security threats',
    improvement: '99%',
    icon: '🛡️',
  },
  {
    title: 'Threat Detection',
    description: 'Advanced detection of adversarial attacks and model tampering',
    improvement: '95%',
    icon: '🔍',
  },
  {
    title: 'Compliance',
    description: 'Automated compliance with AI security standards and regulations',
    improvement: '90%',
    icon: '📋',
  },
  {
    title: 'Performance',
    description: 'Minimal impact on AI model performance while maintaining security',
    improvement: '<5%',
    icon: '⚡',
  },
]

const aiSecurityUseCases = [
  {
    scenario: 'Financial AI Models',
    description: 'Secure AI models for fraud detection, risk assessment, and algorithmic trading',
    benefits: [
      'Fraud detection protection',
      'Model integrity assurance',
      'Regulatory compliance',
      'Intellectual property protection',
    ],
  },
  {
    scenario: 'Healthcare AI',
    description: 'Protect medical AI models and patient data in healthcare applications',
    benefits: [
      'Patient data privacy',
      'Model accuracy protection',
      'HIPAA compliance',
      'Medical device security',
    ],
  },
  {
    scenario: 'Autonomous Vehicles',
    description: 'Secure AI models in self-driving cars and autonomous systems',
    benefits: [
      'Safety-critical protection',
      'Real-time threat detection',
      'Model reliability assurance',
      'Regulatory compliance',
    ],
  },
  {
    scenario: 'Enterprise AI',
    description: 'Protect AI models in enterprise applications and business processes',
    benefits: [
      'Business logic protection',
      'Data privacy preservation',
      'Model performance optimization',
      'Compliance automation',
    ],
  },
]

const aiSecurityStandards = [
  {
    standard: 'ISO/IEC 23053',
    description: 'Framework for AI risk management and security',
    compliance: 'Full',
  },
  {
    standard: 'NIST AI Risk Management',
    description: 'AI risk management framework and guidelines',
    compliance: 'Full',
  },
  {
    standard: 'EU AI Act',
    description: 'European Union AI regulation compliance',
    compliance: 'Full',
  },
  {
    standard: 'IEEE 2859',
    description: 'Standard for AI security and privacy',
    compliance: 'Full',
  },
]

export default function SecureAIModelsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Secure AI <span className="fxology-text-gradient">Model Protection</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Advanced AI model security platform developed by leading AI security researchers. 
            Our cutting-edge technology defends against adversarial attacks, model extraction, 
            and prompt injection with 99.9% protection accuracy and real-time threat detection.
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

      {/* AI Security Metrics */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Model Security Performance
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our Secure AI Model Protection platform delivers exceptional 
              security and performance for AI model protection.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiSecurityMetrics.map((metric, index) => (
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
              AI Model Security Features
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive AI model security capabilities designed to protect 
              your artificial intelligence infrastructure from advanced threats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiModelSecurityFeatures.map((feature, index) => (
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

      {/* AI Security Threats */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Security Threat Protection
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive protection against the most sophisticated AI security 
              threats and attack vectors targeting artificial intelligence systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiSecurityThreats.map((threat, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{threat.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {threat.threat}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {threat.description}
                </p>
                <div className="text-accent-500 text-xs font-medium">
                  Protection: {threat.protection}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Model Security Benefits
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Transform your AI model security with comprehensive protection, 
              threat detection, and compliance automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiSecurityBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] text-center hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-accent-500">
                  {benefit.improvement}
                </div>
                <div className="text-xs text-text-secondary">Improvement</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Model Security Use Cases
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real-world applications where Secure AI Model Protection provides 
              critical security for AI infrastructure and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSecurityUseCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333]"
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

      {/* Compliance Standards */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              AI Security Compliance
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Full compliance with international AI security standards and 
              regulatory frameworks for AI model protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiSecurityStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] text-center hover:border-accent-500 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {standard.standard}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {standard.description}
                </p>
                <div className="text-accent-500 text-sm font-medium">
                  {standard.compliance} Compliance
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your AI Models?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Protect your AI infrastructure with comprehensive model security. 
            Get started with a free AI security assessment and discover how 
            to secure your artificial intelligence systems.
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
