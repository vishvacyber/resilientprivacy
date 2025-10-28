import Link from 'next/link'
import {
  Brain,
  Shield,
  Globe,
  Zap,
  Lock,
  Target,
  Award,
  Database,
  Cloud,
  Server,
  Users,
  FileCheck,
} from 'lucide-react'

export default function GovernanceCompliance() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F3F4F6]">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0F] via-[#1A1A1A] to-[#0D0D0F]"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="text-accent-500">Governance</span> &
              Compliance
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Navigate the complex 2025 regulatory landscape with AI-enhanced
              compliance frameworks. From EU's AI Act to quantum-ready
              cryptography standards, we ensure your organization stays ahead of
              evolving regulations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-[#1A1A1A] px-6 py-3 rounded-xl border border-[#333] hover:border-accent-500 transition-colors">
                <span className="text-accent-500 font-bold text-2xl">25+</span>
                <span className="text-text-secondary ml-2">2025 Frameworks</span>
              </div>
              <div className="bg-[#1A1A1A] px-6 py-3 rounded-xl border border-[#333] hover:border-accent-500 transition-colors">
                <span className="text-accent-500 font-bold text-2xl">99.8%</span>
                <span className="text-text-secondary ml-2">AI Accuracy</span>
              </div>
              <div className="bg-[#1A1A1A] px-6 py-3 rounded-xl border border-[#333] hover:border-accent-500 transition-colors">
                <span className="text-accent-500 font-bold text-2xl">24/7</span>
                <span className="text-text-secondary ml-2">AI Monitoring</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-[#1A1A1A] rounded-xl border border-[#333] hover:border-accent-500 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-500/20 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                AI-Enhanced Compliance
              </h3>
              <p className="text-text-secondary text-sm">
                Automated compliance monitoring with machine learning-driven
                risk assessment
              </p>
            </div>
            <div className="text-center p-6 bg-[#1A1A1A] rounded-xl border border-[#333] hover:border-accent-500 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-500/20 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Quantum-Ready Standards
              </h3>
              <p className="text-text-secondary text-sm">
                Future-proof cryptographic compliance for post-quantum security
              </p>
            </div>
            <div className="text-center p-6 bg-[#1A1A1A] rounded-xl border border-[#333] hover:border-accent-500 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-500/20 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Global Regulatory Intelligence
              </h3>
              <p className="text-text-secondary text-sm">
                Real-time updates on emerging regulations worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Service Overview */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-3xl font-bold text-white mb-6">
              Comprehensive Governance Solutions
            </h2>
            <p className="text-text-secondary mb-8 text-lg">
              Our governance and compliance services provide end-to-end support
              for organizations seeking to establish, maintain, and enhance
              their security and privacy programs. We work with you to build
              sustainable compliance frameworks that adapt to evolving
              regulatory requirements and business needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[#0D0D0F] rounded-lg">
                <div className="text-accent-500 text-3xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Framework Implementation
                </h3>
                <p className="text-text-secondary text-sm">
                  Design and implement compliance frameworks tailored to your
                  industry and requirements
                </p>
              </div>
              <div className="text-center p-6 bg-[#0D0D0F] rounded-lg">
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  Audit & Assessment
                </h3>
                <p className="text-text-secondary text-sm">
                  Comprehensive audits and gap assessments to identify
                  compliance requirements
                </p>
              </div>
              <div className="text-center p-6 bg-[#0D0D0F] rounded-lg">
                <div className="text-accent-500 text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ongoing Management
                </h3>
                <p className="text-text-secondary text-sm">
                  Continuous monitoring and maintenance of compliance programs
                  and controls
                </p>
              </div>
            </div>
          </div>

          {/* 2025 Compliance Frameworks */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-3xl font-bold text-white mb-8">
              2025 Regulatory Frameworks & Emerging Standards
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-accent-500" /> AI & ML
                  Regulations
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• EU AI Act (2024-2025)</li>
                  <li>• NIST AI Risk Management</li>
                  <li>• ISO/IEC 23053 (AI Governance)</li>
                  <li>• Algorithmic Accountability Act</li>
                  <li>• AI Ethics Frameworks</li>
                  <li>• ML Model Governance</li>
                </ul>
              </div>
              <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-accent-500" /> Quantum-Ready
                  Standards
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• NIST Post-Quantum Cryptography</li>
                  <li>• Quantum-Safe Migration</li>
                  <li>• ISO/IEC 23837 (Quantum Security)</li>
                  <li>• Crypto-Agility Frameworks</li>
                  <li>• Quantum Risk Assessment</li>
                  <li>• Hybrid Classical-Quantum</li>
                </ul>
              </div>
              <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-accent-500" /> Enhanced
                  Privacy Laws
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• NIS2 Directive (EU)</li>
                  <li>• DORA (Digital Operational Resilience)</li>
                  <li>• Data Act (EU 2025)</li>
                  <li>• APPI (Japan Enhanced)</li>
                  <li>• PIPEDA+ (Canada)</li>
                  <li>• State Privacy Laws (US)</li>
                </ul>
              </div>
              <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Cloud className="w-6 h-6 mr-2 text-accent-500" /> Cloud-Native
                  Security
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• CNAPP Compliance Standards</li>
                  <li>• Container Security Frameworks</li>
                  <li>• Kubernetes Security Benchmarks</li>
                  <li>• Multi-Cloud Governance</li>
                  <li>• Serverless Security Standards</li>
                  <li>• Edge Computing Compliance</li>
                </ul>
              </div>
              <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-accent-500" /> Zero Trust
                  Frameworks
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• NIST Zero Trust Architecture</li>
                  <li>• CISA Zero Trust Maturity</li>
                  <li>• Identity-Centric Security</li>
                  <li>• Continuous Verification</li>
                  <li>• Micro-Segmentation Standards</li>
                  <li>• Privileged Access Management</li>
                </ul>
              </div>
              <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Server className="w-6 h-6 mr-2 text-accent-500" /> Industry
                  4.0 & IoT
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• IEC 62443 (Industrial Security)</li>
                  <li>• IoT Cybersecurity Improvement Act</li>
                  <li>• Smart Grid Security Standards</li>
                  <li>• Medical Device Regulations</li>
                  <li>• Automotive Cybersecurity (ISO 21434)</li>
                  <li>• Supply Chain Security</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI-Powered Service Offerings */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-3xl font-bold text-white mb-8">
              AI-Enhanced Compliance Services
            </h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-3 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-accent-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      AI-Driven Compliance Assessment
                    </h3>
                  </div>
                  <p className="text-text-secondary mb-4">
                    Machine learning-powered assessment of your compliance
                    posture across 25+ frameworks. Our AI analyzes millions of
                    data points to identify gaps, predict risks, and prioritize
                    remediation efforts.
                  </p>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Automated control mapping and testing</li>
                    <li>• Predictive risk modeling and scoring</li>
                    <li>• Real-time gap identification</li>
                    <li>• AI-generated remediation roadmaps</li>
                    <li>• Continuous compliance monitoring</li>
                    <li>• Behavioral analytics and anomaly detection</li>
                  </ul>
                </div>
                <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-3 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <Lock className="w-6 h-6 text-accent-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Quantum-Ready Implementation
                    </h3>
                  </div>
                  <p className="text-text-secondary mb-4">
                    Future-proof your organization with quantum-resistant
                    security frameworks. We implement NIST post-quantum
                    cryptography standards and crypto-agility frameworks for
                    long-term security.
                  </p>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Quantum risk assessment and planning</li>
                    <li>• Crypto-agility framework implementation</li>
                    <li>• Post-quantum cryptography migration</li>
                    <li>• Hybrid classical-quantum security</li>
                    <li>• Quantum-safe key management</li>
                    <li>• Long-term cryptographic roadmaps</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-3 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-accent-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Global Regulatory Intelligence
                    </h3>
                  </div>
                  <p className="text-text-secondary mb-4">
                    Stay ahead of evolving regulations with our AI-powered
                    regulatory intelligence platform. Real-time updates on EU AI
                    Act, NIS2, DORA, and emerging global compliance
                    requirements.
                  </p>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Real-time regulatory change monitoring</li>
                    <li>• Impact assessment and gap analysis</li>
                    <li>• Automated compliance mapping updates</li>
                    <li>• Multi-jurisdiction requirement tracking</li>
                    <li>• Regulatory deadline management</li>
                    <li>• Expert interpretation and guidance</li>
                  </ul>
                </div>
                <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-3 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-accent-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Automated Compliance Operations
                    </h3>
                  </div>
                  <p className="text-text-secondary mb-4">
                    Transform compliance from reactive to proactive with
                    intelligent automation. Continuous monitoring, automated
                    evidence collection, and AI-driven incident response for
                    compliance violations.
                  </p>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• 24/7 automated compliance monitoring</li>
                    <li>• Intelligent evidence collection and archival</li>
                    <li>• Real-time violation detection and alerting</li>
                    <li>• Automated remediation workflows</li>
                    <li>• Compliance dashboard and reporting</li>
                    <li>• Predictive compliance analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 2025 Success Story */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-3xl font-bold text-white mb-6">
              Success Story: AI-First Fintech Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-accent-500" /> Challenge
                </h3>
                <p className="text-text-secondary mb-4">
                  A leading AI-powered fintech company needed to achieve EU AI
                  Act compliance, DORA readiness, and quantum-safe cryptography
                  implementation while maintaining their rapid innovation cycle
                  and global expansion plans.
                </p>
                <div className="bg-[#0D0D0F] p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">
                    Key Requirements:
                  </h4>
                  <ul className="space-y-1 text-text-secondary text-sm">
                    <li>• EU AI Act compliance (High-Risk AI Systems)</li>
                    <li>• DORA operational resilience framework</li>
                    <li>• Quantum-safe cryptography migration</li>
                    <li>• NIS2 Directive implementation</li>
                    <li>• Multi-cloud governance across 15 regions</li>
                    <li>• Real-time compliance monitoring</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-accent-500" /> AI-Powered
                  Solution & Results
                </h3>
                <p className="text-text-secondary mb-4">
                  Our AI-enhanced compliance platform automated 85% of their
                  compliance operations, enabling continuous monitoring and
                  proactive risk management across all regulatory frameworks.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#0D0D0F] rounded-lg">
                    <span className="text-text-secondary">EU AI Act Compliance</span>
                    <span className="text-accent-500 font-bold">
                      Achieved in 6 months
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0D0D0F] rounded-lg">
                    <span className="text-text-secondary">Automation Rate</span>
                    <span className="text-accent-500 font-bold">
                      85% automated
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0D0D0F] rounded-lg">
                    <span className="text-text-secondary">
                      Compliance Cost Reduction
                    </span>
                    <span className="text-accent-500 font-bold">
                      60% cost savings
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0D0D0F] rounded-lg">
                    <span className="text-text-secondary">Time to Market</span>
                    <span className="text-accent-500 font-bold">
                      3x faster launches
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Methodologies */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-3xl font-bold text-white mb-6">
              Tools & Methodologies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Assessment Tools
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Automated compliance scanning and assessment</li>
                  <li>• Risk assessment and management platforms</li>
                  <li>• Policy management and workflow automation</li>
                  <li>• Evidence collection and documentation systems</li>
                  <li>• Compliance monitoring and reporting dashboards</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Methodologies
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Risk-based approach to compliance</li>
                  <li>• Continuous improvement methodologies</li>
                  <li>• Agile compliance implementation</li>
                  <li>• Evidence-based assessment frameworks</li>
                  <li>• Integrated governance models</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2025 AI-Enhanced Pricing */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-3xl font-bold text-white mb-8">
              AI-Enhanced Compliance Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-2 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    AI Assessment
                  </h3>
                </div>
                <div className="text-3xl font-bold text-accent-500 mb-4">
                  Contact us
                </div>
                <ul className="space-y-2 text-text-secondary text-sm mb-6">
                  <li>• AI-powered gap analysis across 25+ frameworks</li>
                  <li>• Quantum readiness assessment</li>
                  <li>• EU AI Act compliance evaluation</li>
                  <li>• Predictive risk modeling</li>
                  <li>• Automated remediation roadmap</li>
                  <li>• Real-time compliance dashboard</li>
                </ul>
                <Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full text-center"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-[#0D0D0F] p-6 rounded-lg border-2 border-accent-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-2 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Quantum-Ready Implementation
                  </h3>
                </div>
                <div className="text-3xl font-bold text-accent-500 mb-4">
                  Contact us
                </div>
                <ul className="space-y-2 text-text-secondary text-sm mb-6">
                  <li>• Full AI-enhanced framework implementation</li>
                  <li>• Quantum-safe cryptography migration</li>
                  <li>• EU AI Act & DORA compliance</li>
                  <li>• Automated policy generation</li>
                  <li>• Continuous monitoring setup</li>
                  <li>• 6-month support included</li>
                </ul>
                <Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full text-center"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-2 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Autonomous Compliance
                  </h3>
                </div>
                <div className="text-3xl font-bold text-accent-500 mb-4">
                  Contact us
                </div>
                <ul className="space-y-2 text-text-secondary text-sm mb-6">
                  <li>• 24/7 AI-powered compliance monitoring</li>
                  <li>• Real-time regulatory intelligence</li>
                  <li>• Automated evidence collection</li>
                  <li>• Predictive compliance analytics</li>
                  <li>• Quantum-safe updates included</li>
                  <li>• Dedicated compliance AI agent</li>
                </ul>
                <Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#0D0D0F] rounded-lg border border-[#333]">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Award className="w-6 h-6 mr-2 text-accent-500" />
                Enterprise Custom Solutions
              </h4>
              <p className="text-text-secondary mb-4">
                Need compliance for specific regulations like EU AI Act, NIS2,
                or DORA? Our AI platform can be customized for your unique
                requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-accent-500/20 text-accent-500 rounded-full text-sm">
                  Custom Pricing
                </span>
                <span className="px-3 py-1 bg-accent-500/20 text-accent-500 rounded-full text-sm">
                  White-label Available
                </span>
                <span className="px-3 py-1 bg-accent-500/20 text-accent-500 rounded-full text-sm">
                  API Integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-[#7C3AED]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready for 2025 Compliance Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ organizations already using our AI-powered compliance
            platform. Stay ahead of EU AI Act, DORA, NIS2, and quantum-ready
            standards with automated governance that scales with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4 font-semibold shadow-lg"
            >
              Start AI Assessment
            </Link>
            <Link
              href="/compliance"
              className="btn-secondary text-lg px-8 py-4 font-semibold"
            >
              View Compliance Dashboard
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-white/80" />
              6-month implementation
            </span>
            <span className="flex items-center">
              <Brain className="w-4 h-4 mr-2 text-white/80" />
              85% automation rate
            </span>
            <span className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-white/80" />
              99.8% accuracy
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
