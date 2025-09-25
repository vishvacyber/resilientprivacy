import Link from 'next/link'

const documentationCategories = [
  {
    category: 'API Security',
    description:
      'Comprehensive guides for securing APIs and implementing OWASP API Security Top 10 controls',
    guides: [
      {
        title: 'OWASP API Security Top 10 Implementation',
        description:
          'Complete implementation guide for OWASP API Security Top 10 controls including authentication, authorization, and rate limiting',
        difficulty: 'Advanced',
        time: '4 hours',
        slug: 'owasp-api-security-top10',
      },
      {
        title: 'API Authentication & Authorization',
        description:
          'Implement secure API authentication using OAuth 2.0, JWT, and API key management',
        difficulty: 'Intermediate',
        time: '3 hours',
        slug: 'api-authentication-authorization',
      },
      {
        title: 'API Rate Limiting & Throttling',
        description:
          'Design and implement comprehensive API rate limiting strategies to prevent abuse and DoS attacks',
        difficulty: 'Intermediate',
        time: '2.5 hours',
        slug: 'api-rate-limiting-throttling',
      },
      {
        title: 'API Gateway Security Configuration',
        description:
          'Secure API gateways with advanced threat protection, monitoring, and policy enforcement',
        difficulty: 'Advanced',
        time: '3.5 hours',
        slug: 'api-gateway-security',
      },
    ],
  },
  {
    category: 'AI Security',
    description: 'Implementation guides for securing AI systems and machine learning models',
    guides: [
      {
        title: 'AI Model Security & Adversarial Defense',
        description:
          'Protect AI models from adversarial attacks, model extraction, and data poisoning',
        difficulty: 'Advanced',
        time: '4 hours',
        slug: 'ai-model-security-adversarial',
      },
      {
        title: 'AI Threat Detection Implementation',
        description:
          'Deploy AI-powered threat detection systems with machine learning and behavioral analytics',
        difficulty: 'Advanced',
        time: '3.5 hours',
        slug: 'ai-threat-detection-implementation',
      },
      {
        title: 'Secure AI Development Lifecycle',
        description:
          'Implement security throughout the AI development process from data collection to deployment',
        difficulty: 'Intermediate',
        time: '3 hours',
        slug: 'secure-ai-development-lifecycle',
      },
      {
        title: 'AI Security Operations Center',
        description:
          'Build AI-powered SOC with automated threat detection, response, and security orchestration',
        difficulty: 'Advanced',
        time: '4.5 hours',
        slug: 'ai-security-operations-center',
      },
    ],
  },
  {
    category: 'Cybersecurity Fundamentals',
    description:
      'Core cybersecurity practices and modern security architecture implementation',
    guides: [
      {
        title: 'Zero Trust Architecture Implementation',
        description:
          'Complete guide to implementing Zero Trust security model with identity-centric controls',
        difficulty: 'Advanced',
        time: '5 hours',
        slug: 'zero-trust-architecture-implementation',
      },
      {
        title: 'Security Operations Center (SOC) Setup',
        description:
          'Build and operate a modern SOC with SIEM, threat hunting, and incident response',
        difficulty: 'Advanced',
        time: '4 hours',
        slug: 'security-operations-center-setup',
      },
      {
        title: 'Threat Intelligence Integration',
        description:
          'Integrate threat intelligence feeds and build automated threat detection capabilities',
        difficulty: 'Intermediate',
        time: '3 hours',
        slug: 'threat-intelligence-integration',
      },
      {
        title: 'Incident Response & Digital Forensics',
        description:
          'Develop comprehensive incident response procedures and digital forensics capabilities',
        difficulty: 'Advanced',
        time: '4 hours',
        slug: 'incident-response-digital-forensics',
      },
    ],
  },
  {
    category: 'Cloud & Infrastructure Security',
    description: 'Cloud security, container security, and infrastructure protection',
    guides: [
      {
        title: 'Multi-Cloud Security Framework',
        description:
          'Implement consistent security controls across AWS, Azure, and Google Cloud Platform',
        difficulty: 'Advanced',
        time: '5 hours',
        slug: 'multi-cloud-security-framework',
      },
      {
        title: 'Container & Kubernetes Security',
        description:
          'Secure containerized applications and Kubernetes clusters with runtime protection',
        difficulty: 'Intermediate',
        time: '3 hours',
        slug: 'container-kubernetes-security',
      },
      {
        title: 'Cloud-Native Security Controls',
        description:
          'Deploy cloud-native security services and implement infrastructure as code security',
        difficulty: 'Intermediate',
        time: '3.5 hours',
        slug: 'cloud-native-security-controls',
      },
    ],
  },
]

const popularGuides = [
  {
    title: 'OWASP API Security Top 10 Implementation',
    views: '32K+',
    rating: '4.9/5',
    category: 'API Security',
    slug: 'owasp-api-security-top10',
  },
  {
    title: 'AI Model Security & Adversarial Defense',
    views: '28K+',
    rating: '4.8/5',
    category: 'AI Security',
    slug: 'ai-model-security-adversarial',
  },
  {
    title: 'Zero Trust Architecture Implementation',
    views: '25K+',
    rating: '4.9/5',
    category: 'Cybersecurity',
    slug: 'zero-trust-architecture-implementation',
  },
  {
    title: 'AI Threat Detection Implementation',
    views: '22K+',
    rating: '4.7/5',
    category: 'AI Security',
    slug: 'ai-threat-detection-implementation',
  },
]

const searchCategories = [
  'All',
  'API Security',
  'AI Security',
  'Cybersecurity',
  'Cloud Security',
  'Threat Detection',
]

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-accent-500">Documentation</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Comprehensive technical documentation, API references, and
            implementation guides to help you get the most out of Resilient
            Privacy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#search" className="btn text-lg px-8 py-4">
              Search Documentation
            </Link>
            <Link
              href="#categories"
              className="btn-secondary text-lg px-8 py-4"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Search Documentation
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search for guides, APIs, or topics..."
                className="flex-1 px-4 py-3 bg-[#0D0D0F] border border-[#222] rounded-lg text-white placeholder-[#A1A1AA] focus:border-accent-500 focus:outline-none"
              />
              <button className="btn px-8 py-3">Search</button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {searchCategories.map((category) => (
                <button
                  key={category}
                  className="px-3 py-1 bg-[#0D0D0F] border border-[#222] text-text-secondary rounded text-sm hover:border-accent-500 hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Popular Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularGuides.map((guide) => (
              <div
                key={guide.title}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-accent-500 bg-opacity-20 text-accent-500 rounded text-xs">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {guide.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{guide.views} views</span>
                  <span className="text-accent-500">{guide.rating}</span>
                </div>
                <Link
                  href={`/resources/documentation/${guide.slug}`}
                  className="w-full btn py-2 mt-4 text-sm block text-center"
                >
                  Read Guide
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section id="categories" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Documentation Categories
          </h2>
          <div className="space-y-12">
            {documentationCategories.map((category) => (
              <div
                key={category.category}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.category}
                  </h3>
                  <p className="text-text-secondary">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.guides.map((guide) => (
                    <div
                      key={guide.title}
                      className="bg-[#0D0D0F] p-6 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            guide.difficulty === 'Beginner'
                              ? 'bg-green-500 bg-opacity-20 text-green-400'
                              : guide.difficulty === 'Intermediate'
                                ? 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                                : 'bg-red-500 bg-opacity-20 text-red-400'
                          }`}
                        >
                          {guide.difficulty}
                        </span>
                        <span className="text-text-secondary text-xs">
                          {guide.time}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">
                        {guide.title}
                      </h4>
                      <p className="text-text-secondary text-sm mb-4">
                        {guide.description}
                      </p>
                      <Link
                        href={`/resources/documentation/${guide.slug}`}
                        className="text-accent-500 hover:text-white transition-colors text-sm"
                      >
                        Read Guide →
                      </Link>
                    </div>
                  ))}
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
            Need Help with Implementation?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Our technical support team is available to help you with
            implementation, troubleshooting, and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Contact Support
            </Link>
            <Link
              href="/resources/training"
              className="btn-secondary text-lg px-8 py-4"
            >
              View Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
