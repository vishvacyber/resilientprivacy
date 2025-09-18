import Link from 'next/link'
import { Metadata } from 'next'
import {
  Shield,
  Lock,
  Zap,
  Globe,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Eye,
  Cpu,
  Database,
  Network,
  Key,
  Activity,
  TrendingUp,
  Award,
  Star,
  ArrowUpRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Secure API Gateway - Enterprise API Security Platform | Resilient Privacy',
  description:
    'Enterprise-grade API security gateway with advanced threat protection, rate limiting, authentication, and real-time monitoring. Secure your APIs with zero-trust architecture.',
  keywords: [
    'API gateway security',
    'API protection',
    'API threat detection',
    'API rate limiting',
    'API authentication',
    'API monitoring',
    'API security platform',
    'enterprise API gateway',
    'API security solutions',
    'API threat prevention',
  ],
  openGraph: {
    title:
      'Secure API Gateway - Enterprise API Security Platform | Resilient Privacy',
    description:
      'Enterprise-grade API security gateway with advanced threat protection, rate limiting, authentication, and real-time monitoring.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/secure-api-gateway',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/secure-api-gateway',
  },
}

const features = [
  {
    icon: Shield,
    title: 'Advanced Threat Protection',
    description:
      'AI-powered detection of API attacks, injection attempts, and malicious payloads with real-time blocking.',
    benefits: [
      'OWASP Top 10 protection',
      'Zero-day threat detection',
      'Behavioral analysis',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Authentication',
    description:
      'Multi-factor authentication, OAuth 2.0, JWT validation, and role-based access control for all API endpoints.',
    benefits: [
      'OAuth 2.0 & OpenID Connect',
      'JWT token validation',
      'RBAC & ABAC support',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Intelligent Rate Limiting',
    description:
      'Dynamic rate limiting based on user behavior, geographic location, and threat intelligence to prevent abuse.',
    benefits: [
      'Adaptive rate limiting',
      'Geographic restrictions',
      'DDoS protection',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Global API Management',
    description:
      'Centralized management of APIs across multiple environments with consistent security policies.',
    benefits: [
      'Multi-environment support',
      'Policy orchestration',
      'Global deployment',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Developer Experience',
    description:
      'Self-service developer portal with API documentation, testing tools, and automated onboarding.',
    benefits: ['Developer portal', 'API documentation', 'Testing sandbox'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description:
      'Comprehensive API analytics with performance metrics, usage patterns, and security insights.',
    benefits: [
      'Performance monitoring',
      'Usage analytics',
      'Security dashboards',
    ],
    color: 'from-red-500 to-pink-500',
  },
]

const securityCapabilities = [
  'API Key Management & Rotation',
  'Request/Response Validation',
  'Data Encryption (TLS 1.3)',
  'IP Whitelisting/Blacklisting',
  'Bot Detection & Mitigation',
  'API Versioning & Deprecation',
  'Request/Response Transformation',
  'Caching & Performance Optimization',
  'Circuit Breaker Patterns',
  'API Health Monitoring',
  'Compliance Reporting (SOC 2, ISO 27001)',
  'Audit Logging & Forensics',
]

const useCases = [
  {
    title: 'Financial Services',
    description:
      'Secure payment APIs with PCI DSS compliance, fraud detection, and real-time transaction monitoring.',
    icon: '🏦',
    features: ['PCI DSS Compliance', 'Fraud Detection', 'Real-time Monitoring'],
  },
  {
    title: 'Healthcare',
    description:
      'HIPAA-compliant API gateway for patient data access, telemedicine platforms, and medical device integration.',
    icon: '🏥',
    features: [
      'HIPAA Compliance',
      'Patient Data Security',
      'Medical Device Integration',
    ],
  },
  {
    title: 'E-commerce',
    description:
      'High-performance API gateway for product catalogs, payment processing, and inventory management.',
    icon: '🛒',
    features: [
      'High Performance',
      'Payment Processing',
      'Inventory Management',
    ],
  },
  {
    title: 'IoT Platforms',
    description:
      'Scalable API gateway for IoT device management, data collection, and real-time analytics.',
    icon: '📱',
    features: ['Device Management', 'Data Collection', 'Real-time Analytics'],
  },
]

const stats = [
  { label: 'Threats Blocked', value: '2.5M+', icon: Shield },
  { label: 'APIs Protected', value: '50K+', icon: Database },
  { label: 'Response Time', value: '<10ms', icon: Zap },
  { label: 'Uptime SLA', value: '99.99%', icon: Activity },
]

const testimonials = [
  {
    quote:
      "The Secure API Gateway has transformed our security posture. We've seen a 95% reduction in API attacks while maintaining exceptional performance.",
    author: 'Alex Johnson',
    role: 'CTO',
    company: 'FinTech Solutions Inc.',
  },
  {
    quote:
      'Implementation was seamless and the developer experience is outstanding. Our team can now focus on building features instead of security concerns.',
    author: 'Resilient Privacy Research Team',
    role: 'VP of Engineering',
    company: 'HealthTech Systems',
  },
]

export default function SecureAPIGatewayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A1A] to-[#0D0D0F]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%238B5CF6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider bg-accent-500/10 px-4 py-2 rounded-full">
                Enterprise API Security
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Secure API Gateway
            </h1>
            <p className="text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade API security platform that protects your digital
              assets with advanced threat detection, zero-trust authentication,
              and intelligent rate limiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-lg px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-[#7C3AED] hover:to-accent-500 shadow-2xl hover:shadow-[accent-500]/25 transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-10 py-5 shadow-2xl hover:shadow-[accent-500]/25 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#232336]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-accent-500" />
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <Star className="w-5 h-5 text-accent-500" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Enterprise-Grade API Security
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Protect your APIs with cutting-edge security while maintaining
              exceptional performance and developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#0D0D0F] p-8 rounded-2xl border border-[#333] hover:border-accent-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[accent-500]/10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-text-secondary"
                      >
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Capabilities */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-accent-500" />
                <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                  Security Features
                </span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8">
                Comprehensive Security Capabilities
              </h2>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Our API Gateway provides enterprise-grade security features
                designed to protect your APIs from modern threats while ensuring
                compliance with industry standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityCapabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#1A1A1A] transition-colors duration-200"
                  >
                    <ShieldCheck className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-text-secondary">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-accent-600/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#232336] p-10 rounded-3xl border border-[#333] shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-8 h-8 text-accent-500" />
                  <h3 className="text-3xl font-bold text-white">
                    Security Metrics
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="flex justify-between items-center p-4 bg-[#0D0D0F] rounded-xl">
                    <span className="text-text-secondary font-medium">
                      Threat Detection Rate
                    </span>
                    <span className="text-accent-500 font-bold text-2xl">
                      99.9%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#0D0D0F] rounded-xl">
                    <span className="text-text-secondary font-medium">
                      False Positive Rate
                    </span>
                    <span className="text-accent-500 font-bold text-2xl">
                      &lt;0.1%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#0D0D0F] rounded-xl">
                    <span className="text-text-secondary font-medium">
                      Response Time
                    </span>
                    <span className="text-accent-500 font-bold text-2xl">
                      &lt;10ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#0D0D0F] rounded-xl">
                    <span className="text-text-secondary font-medium">
                      Uptime SLA
                    </span>
                    <span className="text-accent-500 font-bold text-2xl">
                      99.99%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#232336]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-accent-500" />
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                Industry Solutions
              </span>
              <Globe className="w-5 h-5 text-accent-500" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our Secure API Gateway is deployed across various industries,
              providing robust security and compliance for critical business
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#0D0D0F] p-10 rounded-2xl border border-[#333] hover:border-accent-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[accent-500]/10">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-5xl">{useCase.icon}</span>
                    <h3 className="text-3xl font-bold text-white">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                    {useCase.description}
                  </p>
                  <div className="space-y-3">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-accent-500" />
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                Customer Success
              </span>
              <Star className="w-5 h-5 text-accent-500" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-600/5 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#232336] p-10 rounded-2xl border border-[#333] shadow-2xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-accent-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-text-secondary text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#232336]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-accent-500" />
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                Architecture
              </span>
              <Cpu className="w-5 h-5 text-accent-500" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Zero-Trust API Architecture
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our API Gateway implements a zero-trust security model, ensuring
              every request is authenticated, authorized, and validated.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-accent-600/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-background to-background-alt p-12 rounded-3xl border border-[#333] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Authentication
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Every request is authenticated using multiple factors
                    including API keys, JWT tokens, and OAuth 2.0.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Authorization
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Role-based access control ensures users only access the APIs
                    and data they're authorized to use.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <AlertTriangle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Validation
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    All requests and responses are validated against schemas and
                    security policies before processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#18181B] to-[#232336]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-accent-600/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-background to-background-alt p-16 rounded-3xl border border-[#333] shadow-2xl">
              <div className="inline-flex items-center gap-2 mb-8">
                <Award className="w-6 h-6 text-accent-500" />
                <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                  Get Started Today
                </span>
                <Award className="w-6 h-6 text-accent-500" />
              </div>
              <h2 className="text-5xl font-bold text-white mb-8">
                Ready to Secure Your APIs?
              </h2>
              <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of organizations that trust our Secure API
                Gateway to protect their digital assets and maintain compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-lg px-12 py-6 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-[#7C3AED] hover:to-accent-500 shadow-2xl hover:shadow-[accent-500]/25 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-12 py-6 shadow-2xl hover:shadow-[accent-500]/25 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
