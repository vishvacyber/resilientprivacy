import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'AI & API Security Products - Top AI Security Company | Advanced Cybersecurity Solutions',
  description:
    'Resilient Privacy offers cutting-edge AI-powered security products and comprehensive API protection solutions. Leading AI security company with advanced machine learning threat detection and API security expertise.',
  keywords: [
    'AI security products',
    'API security products',
    'AI cybersecurity solutions',
    'machine learning security',
    'AI threat detection',
    'API security gateway',
    'AI security operations',
    'API protection',
    'AI-powered cybersecurity',
    'API authentication',
    'AI threat hunting',
    'API security intelligence',
    'AI identity management',
    'secure AI models',
    'AI security analytics',
    'API threat detection',
    'AI security platform',
    'API security tools',
    'AI security technology',
    'API security compliance',
    'AI security automation',
    'API security monitoring',
    'AI security intelligence',
    'API security testing',
    'AI security response',
    'API security governance',
    'AI security architecture',
    'API security framework',
  ],
  openGraph: {
    title:
      'AI & API Security Products - Top AI Security Company | Advanced Cybersecurity Solutions',
    description:
      'Resilient Privacy offers cutting-edge AI-powered security products and comprehensive API protection solutions. Leading AI security company with advanced machine learning threat detection and API security expertise.',
    type: 'website',
    url: 'https://resilientprivacy.com/products',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products',
  },
}

const productCategories = [
  {
    name: 'AI-Powered Threat Detection',
    description: 'Machine learning-driven security analytics and threat hunting',
    features: [
      'Behavioral analysis & anomaly detection',
      'Predictive threat intelligence',
      'Automated incident response',
      'Real-time threat correlation',
    ],
    link: '/products/ai-threat-detection',
  },
  {
    name: 'Secure API Gateway',
    description: 'Comprehensive API security and management platform',
    features: [
      'API authentication & authorization',
      'Rate limiting & throttling',
      'API threat protection',
      'OAuth 2.0 & JWT security',
    ],
    link: '/products/secure-api-gateway',
  },
  {
    name: 'AI Security Operations Center',
    description: 'Autonomous security operations with AI-driven analytics',
    features: [
      '24/7 AI monitoring',
      'Automated threat hunting',
      'Intelligent incident response',
      'Predictive security analytics',
    ],
    link: '/products/ai-security-operations',
  },
  {
    name: 'API Security Intelligence',
    description: 'Advanced API threat detection and protection',
    features: [
      'API vulnerability scanning',
      'Real-time API monitoring',
      'Automated API security testing',
      'API compliance reporting',
    ],
    link: '/products/api-security-intelligence',
  },
  {
    name: 'AI-Enhanced Identity Management',
    description: 'Intelligent identity and access management with AI',
    features: [
      'AI-powered risk scoring',
      'Behavioral authentication',
      'Adaptive access controls',
      'Anomaly-based access monitoring',
    ],
    link: '/products/ai-identity-management',
  },
  {
    name: 'Secure AI Model Protection',
    description: 'Protect AI models and data from adversarial attacks',
    features: [
      'Model integrity monitoring',
      'Adversarial attack detection',
      'AI model encryption',
      'Secure AI deployment',
    ],
    link: '/products/secure-ai-models',
  },
]

const productHighlights = [
  {
    title: 'AI-First Security',
    description: 'Machine learning-powered threat detection and response',
  },
  {
    title: 'API Protection',
    description: 'Comprehensive API security and threat prevention',
  },
  {
    title: 'Autonomous Operations',
    description: 'Self-learning security systems with minimal human intervention',
  },
  {
    title: 'Zero Trust Architecture',
    description: 'AI-driven zero trust implementation and enforcement',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI & API <span className="fxology-text-gradient">Security Products</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Cutting-edge AI security solutions built by leading researchers and engineers. 
            Our advanced technologies defend against sophisticated LLM attacks, 
            adversarial threats, and zero-day exploits with breakthrough accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products" className="btn text-lg px-8 py-4">
              Explore Products
            </Link>
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Advanced AI & API Security Technology
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Resilient Privacy develops breakthrough AI security solutions using 
                  cutting-edge research and advanced machine learning techniques. Our innovative 
                  technologies address the most sophisticated threats including LLM attacks, 
                  adversarial training bypasses, and prompt injection vulnerabilities.
                </p>
                <p>
                  Our AI security products leverage state-of-the-art techniques including 
                  adversarial training, differential privacy, and federated learning to defend 
                  against model poisoning, data extraction attacks, and zero-day threats. 
                  We achieve 99.7% accuracy in detecting advanced AI attacks.
                </p>
                <p>
                  Our API security solutions provide comprehensive protection with real-time 
                  threat detection that identifies sophisticated business logic attacks, OWASP 
                  API Top 10 vulnerabilities, and advanced injection techniques that bypass 
                  traditional security tools.
                </p>
                <p>
                  Built by leading AI security researchers and validated against the most 
                  sophisticated attack vectors, our solutions represent the next generation 
                  of cybersecurity technology. We&apos;re pioneering real-time AI model 
                  extraction attack detection and prevention.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Product Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">AI Models Deployed</span>
                  <span className="text-accent-500 font-semibold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Threat Detection Accuracy</span>
                  <span className="text-accent-500 font-semibold">99.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="text-accent-500 font-semibold">&lt;5 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Zero-Day Protection</span>
                  <span className="text-accent-500 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Research-Backed</span>
                  <span className="text-accent-500 font-semibold">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <Link key={product.name} href={product.link} className="group">
                <div className="fxology-card p-8 hover:fxology-shadow transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-accent-500 text-sm flex items-center"
                      >
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="fxology-text-gradient group-hover:text-white transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#222] text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Seamless Integration
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Supported Platforms
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-background-card rounded-lg border border-border-light/20 hover:border-primary-500/30 transition-all duration-300 hover:shadow-purple/10">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-white/5 rounded-lg p-2">
                    <img src="/logos/microsoft.svg" alt="Microsoft" className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <span className="text-white text-sm font-medium">Microsoft</span>
                </div>
                <div className="text-center p-6 bg-background-card rounded-lg border border-border-light/20 hover:border-primary-500/30 transition-all duration-300 hover:shadow-purple/10">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-white/5 rounded-lg p-2">
                    <img src="/logos/amazon.svg" alt="AWS" className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <span className="text-white text-sm font-medium">AWS</span>
                </div>
                <div className="text-center p-6 bg-background-card rounded-lg border border-border-light/20 hover:border-primary-500/30 transition-all duration-300 hover:shadow-purple/10">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-white/5 rounded-lg p-2">
                    <img src="/logos/google.svg" alt="Google Cloud" className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <span className="text-white text-sm font-medium">Google Cloud</span>
                </div>
                <div className="text-center p-6 bg-background-card rounded-lg border border-border-light/20 hover:border-primary-500/30 transition-all duration-300 hover:shadow-purple/10">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-white/5 rounded-lg p-2">
                    <img src="/logos/salesforce.svg" alt="Salesforce" className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <span className="text-white text-sm font-medium">Salesforce</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Deployment Options
              </h3>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Our products support multiple deployment models to meet your
                  infrastructure and security requirements.
                </p>
                <p>
                  Cloud-native deployment provides maximum scalability and
                  minimal maintenance overhead.
                </p>
                <p>
                  On-premises deployment offers complete control and compliance
                  with strict data residency requirements.
                </p>
                <p>
                  Hybrid deployment combines the best of both worlds for
                  organizations with complex infrastructure needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Explore our comprehensive security portfolio and discover how our
            solutions can protect your organization.
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
              href="/services"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
