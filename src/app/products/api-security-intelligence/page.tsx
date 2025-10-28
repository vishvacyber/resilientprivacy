import Link from 'next/link'
import FormButton from '@/components/FormButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Security Intelligence - Advanced API Threat Detection & Protection | Resilient Privacy',
  description: 'Comprehensive API security intelligence platform with real-time monitoring, vulnerability scanning, automated testing, and compliance reporting. Protect your API ecosystem.',
  keywords: [
    'API security intelligence',
    'API threat detection',
    'API security monitoring',
    'API vulnerability scanning',
    'API security testing',
    'API compliance reporting',
    'API security analytics',
    'API threat protection',
    'API security platform',
    'API security tools',
  ],
  openGraph: {
    title: 'API Security Intelligence - Advanced API Threat Detection & Protection | Resilient Privacy',
    description: 'Comprehensive API security intelligence platform with real-time monitoring, vulnerability scanning, automated testing, and compliance reporting.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/api-security-intelligence',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/api-security-intelligence',
  },
}

const apiSecurityFeatures = [
  {
    title: 'API Vulnerability Scanning',
    description: 'Comprehensive scanning of API endpoints to identify security vulnerabilities, misconfigurations, and potential attack vectors.',
    features: [
      'Automated API discovery',
      'Vulnerability assessment',
      'Security misconfiguration detection',
      'OWASP API Top 10 compliance',
      'Custom security rules',
      'Continuous monitoring',
    ],
    
  },
  {
    title: 'Real-time API Monitoring',
    description: 'Continuous monitoring of API traffic, performance, and security events with intelligent threat detection and alerting.',
    features: [
      'API traffic analysis',
      'Anomaly detection',
      'Threat pattern recognition',
      'Performance monitoring',
      'Real-time alerting',
      'Traffic visualization',
    ],
    
  },
  {
    title: 'Automated API Security Testing',
    description: 'Intelligent automated testing of API security controls, authentication mechanisms, and authorization policies.',
    features: [
      'Automated penetration testing',
      'Authentication bypass testing',
      'Authorization testing',
      'Input validation testing',
      'Rate limiting verification',
      'Security control validation',
    ],
    
  },
  {
    title: 'API Compliance Reporting',
    description: 'Comprehensive compliance reporting for API security standards, regulations, and industry best practices.',
    features: [
      'GDPR compliance reporting',
      'PCI DSS API requirements',
      'HIPAA API compliance',
      'SOC 2 API controls',
      'Custom compliance frameworks',
      'Audit trail generation',
    ],
    
  },
]

const apiThreatTypes = [
  {
    threat: 'API Injection Attacks',
    description: 'SQL injection, NoSQL injection, and command injection through API parameters',
    protection: 'Input validation and sanitization',
    
  },
  {
    threat: 'Authentication Bypass',
    description: 'JWT manipulation, session hijacking, and credential stuffing attacks',
    protection: 'Multi-factor authentication and token validation',
    
  },
  {
    threat: 'Rate Limiting Bypass',
    description: 'DDoS attacks, brute force attempts, and API abuse',
    protection: 'Intelligent rate limiting and traffic shaping',
    
  },
  {
    threat: 'Data Exposure',
    description: 'Sensitive data leakage through API responses and logs',
    protection: 'Data classification and encryption',
    
  },
  {
    threat: 'Business Logic Flaws',
    description: 'Exploitation of application-specific vulnerabilities',
    protection: 'Behavioral analysis and anomaly detection',
    
  },
  {
    threat: 'API Misconfigurations',
    description: 'Insecure default settings and misconfigured security controls',
    protection: 'Configuration scanning and hardening',
    
  },
]

const apiSecurityMetrics = [
  {
    metric: '99.9%',
    label: 'API Uptime',
    description: 'Protected API availability',
  },
  {
    metric: '<100ms',
    label: 'Detection Latency',
    description: 'Threat detection response time',
  },
  {
    metric: '99.5%',
    label: 'False Positive Rate',
    description: 'Accurate threat detection',
  },
  {
    metric: '24/7',
    label: 'Monitoring',
    description: 'Continuous API protection',
  },
  {
    metric: '1000+',
    label: 'API Endpoints',
    description: 'Simultaneous protection capacity',
  },
  {
    metric: '50+',
    label: 'Security Rules',
    description: 'Custom security policies',
  },
]

const apiSecurityUseCases = [
  {
    scenario: 'Financial Services APIs',
    description: 'Secure banking and payment APIs with PCI DSS compliance',
    benefits: [
      'PCI DSS compliance automation',
      'Fraud detection and prevention',
      'Real-time transaction monitoring',
      'Regulatory reporting',
    ],
  },
  {
    scenario: 'Healthcare APIs',
    description: 'Protect patient data and medical records through secure APIs',
    benefits: [
      'HIPAA compliance monitoring',
      'Patient data protection',
      'Audit trail generation',
      'Privacy controls enforcement',
    ],
  },
  {
    scenario: 'E-commerce APIs',
    description: 'Secure online shopping and payment processing APIs',
    benefits: [
      'Payment security validation',
      'Customer data protection',
      'Fraud prevention',
      'Performance optimization',
    ],
  },
  {
    scenario: 'IoT Device APIs',
    description: 'Secure communication between IoT devices and cloud services',
    benefits: [
      'Device authentication',
      'Data encryption validation',
      'Threat detection',
      'Scalable monitoring',
    ],
  },
]

export default function APISecurityIntelligencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            API Security <span className="fxology-text-gradient">Intelligence</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Advanced API security intelligence platform developed by leading security researchers. 
            Our cutting-edge AI detects sophisticated business logic attacks, OWASP API Top 10 
            vulnerabilities, and zero-day exploits that bypass traditional WAFs and API gateways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FormButton className="btn text-lg px-8 py-4">
              Request Demo
            </FormButton>
            <Link
              href="#features"
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* API Security Metrics */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              API Security Performance
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our API Security Intelligence platform delivers exceptional performance 
              and protection for your API ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {apiSecurityMetrics.map((metric, index) => (
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
              API Security Intelligence Features
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive API security capabilities designed to protect your 
              API ecosystem from advanced threats and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apiSecurityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#333] hover:border-accent-500 transition-all duration-300"
              >
                
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

      {/* API Threat Types */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              API Threat Protection
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive protection against the most common and sophisticated 
              API security threats and attack vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiThreatTypes.map((threat, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-all duration-300"
              >
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

      {/* Use Cases */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              API Security Use Cases
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real-world scenarios where API Security Intelligence provides 
              critical protection and compliance capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiSecurityUseCases.map((useCase, index) => (
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
            Ready to Secure Your APIs?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Protect your API ecosystem with comprehensive security intelligence. 
            Get started with a free API security assessment and discover how 
            to strengthen your API security posture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FormButton className="btn text-lg px-8 py-4">
              Get Free Assessment
            </FormButton>
            <Link
              href="/products"
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
