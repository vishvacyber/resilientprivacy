import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fraud & Abuse Prevention - CoreShield™ API Protection Suite | Resilient Privacy',
  description: 'Stop credential stuffing, account takeover attempts, and automated exploitation with advanced fraud prevention. Real-time fraud scoring and behavioral analysis.',
  keywords: [
    'API fraud prevention',
    'credential stuffing protection',
    'account takeover prevention',
    'API abuse prevention',
    'bot detection',
    'API rate limiting',
    'fraud scoring',
    'behavioral analysis',
    'API security',
    'automated exploitation prevention',
  ],
  openGraph: {
    title: 'Fraud & Abuse Prevention - CoreShield™ API Protection Suite | Resilient Privacy',
    description: 'Stop credential stuffing, account takeover attempts, and automated exploitation with advanced fraud prevention.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/coreshield-fraud-prevention',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/coreshield-fraud-prevention',
  },
}

const features = [
  {
    title: 'Credential Stuffing Protection',
    description: 'Detect and block automated credential stuffing attacks using advanced pattern recognition.',
  },
  {
    title: 'Account Takeover Prevention',
    description: 'Identify and prevent account takeover attempts through behavioral analysis and risk scoring.',
  },
  {
    title: 'Bot Detection & Mitigation',
    description: 'Distinguish between legitimate users and malicious bots using machine learning algorithms.',
  },
  {
    title: 'Rate Limiting & Throttling',
    description: 'Implement intelligent rate limiting to prevent API abuse while maintaining user experience.',
  },
  {
    title: 'Behavioral Analysis',
    description: 'Analyze user behavior patterns to identify suspicious activities and potential threats.',
  },
  {
    title: 'Real-time Fraud Scoring',
    description: 'Generate real-time fraud scores for every API request to enable instant decision making.',
  },
]

const attackTypes = [
  {
    name: 'Credential Stuffing',
    description: 'Automated attacks using stolen credentials to gain unauthorized access.',
    protection: 'Advanced pattern detection and velocity-based blocking.',
  },
  {
    name: 'Account Takeover',
    description: 'Unauthorized access to user accounts through various attack vectors.',
    protection: 'Behavioral analysis and multi-factor authentication enforcement.',
  },
  {
    name: 'API Abuse',
    description: 'Excessive or malicious use of API endpoints to cause damage or extract data.',
    protection: 'Intelligent rate limiting and usage pattern analysis.',
  },
  {
    name: 'Bot Attacks',
    description: 'Automated scripts designed to exploit API vulnerabilities or overwhelm systems.',
    protection: 'Machine learning-based bot detection and CAPTCHA challenges.',
  },
  {
    name: 'Data Scraping',
    description: 'Unauthorized extraction of data through API endpoints.',
    protection: 'Content analysis and access pattern monitoring.',
  },
  {
    name: 'DDoS Attacks',
    description: 'Distributed denial-of-service attacks targeting API availability.',
    protection: 'Traffic analysis and intelligent filtering.',
  },
]

const preventionCapabilities = [
  {
    title: 'Real-time Detection',
    description: 'Identify threats in real-time with sub-second response times.',
    metric: '< 100ms',
  },
  {
    title: 'False Positive Rate',
    description: 'Minimize legitimate user impact with low false positive rates.',
    metric: '< 0.1%',
  },
  {
    title: 'Attack Coverage',
    description: 'Protect against all major API attack vectors.',
    metric: '100%',
  },
  {
    title: 'Global Scale',
    description: 'Handle high-volume traffic across global infrastructure.',
    metric: 'Millions/sec',
  },
]

export default function FraudPreventionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Fraud & Abuse <span className="fxology-text-gradient">Prevention</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Stop credential stuffing, account takeover attempts, and automated exploitation. 
            Advanced fraud prevention with real-time scoring and behavioral analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#features" className="btn text-lg px-8 py-4">
              Explore Features
            </Link>
            <Link
              href="https://forms.gle/xuGFneJ1ijjfMp9x7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Advanced Fraud Prevention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222] hover:border-accent-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attack Types */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Protected Attack Vectors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attackTypes.map((attack, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#222]"
              >
                <h3 className="text-xl font-bold text-white mb-3">{attack.name}</h3>
                <p className="text-text-secondary mb-4">{attack.description}</p>
                <div className="text-accent-500 text-sm font-medium">
                  Protection: {attack.protection}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Capabilities */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Prevention Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preventionCapabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent-500 mb-4">{capability.metric}</div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-text-secondary">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Machine Learning-Powered Protection
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Our fraud prevention system uses advanced machine learning algorithms 
                  to analyze billions of API requests and identify malicious patterns. 
                  The system continuously learns from new attack vectors and adapts 
                  its protection mechanisms accordingly.
                </p>
                <p>
                  Real-time behavioral analysis examines user patterns, device 
                  fingerprints, and request characteristics to generate accurate 
                  fraud scores that enable instant decision making.
                </p>
                <p>
                  The platform integrates with your existing security infrastructure 
                  and provides detailed analytics and reporting to help security 
                  teams understand and respond to threats effectively.
                </p>
              </div>
            </div>
            <div className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                System Performance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Detection Accuracy</span>
                  <span className="text-accent-500 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="text-accent-500 font-semibold">&lt;100ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">False Positive Rate</span>
                  <span className="text-accent-500 font-semibold">&lt;0.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Global Coverage</span>
                  <span className="text-accent-500 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Uptime</span>
                  <span className="text-accent-500 font-semibold">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Protect Against API Fraud
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Stop credential stuffing, account takeover, and automated exploitation 
            with CoreShield™ Fraud & Abuse Prevention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://forms.gle/xuGFneJ1ijjfMp9x7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Request Demo
            </Link>
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
