import Link from 'next/link'

const documentationCategories = [
  {
    category: 'Zero Trust Implementation',
    description:
      'Comprehensive guides for implementing Zero Trust architecture in 2025',
    guides: [
      {
        title: 'Zero Trust Network Architecture',
        description:
          'Design and implement Zero Trust network architecture with modern security controls',
        difficulty: 'Advanced',
        time: '4 hours',
        slug: 'zero-trust-network-architecture',
      },
      {
        title: 'Identity-Centric Security',
        description:
          'Implement identity-based access controls and continuous authentication',
        difficulty: 'Intermediate',
        time: '3 hours',
        slug: 'identity-centric-security',
      },
      {
        title: 'Micro-Segmentation Strategy',
        description:
          'Design and deploy network micro-segmentation for enhanced security',
        difficulty: 'Advanced',
        time: '2.5 hours',
        slug: 'micro-segmentation-strategy',
      },
    ],
  },
  {
    category: 'AI-Powered Security',
    description: 'Implementation guides for AI-driven cybersecurity solutions',
    guides: [
      {
        title: 'AI Threat Detection Setup',
        description:
          'Configure AI-powered threat detection and response systems',
        difficulty: 'Advanced',
        time: '3 hours',
        slug: 'ai-threat-detection-setup',
      },
      {
        title: 'Machine Learning Security Models',
        description:
          'Deploy and tune ML models for anomaly detection and threat hunting',
        difficulty: 'Advanced',
        time: '4 hours',
        slug: 'ml-security-models',
      },
      {
        title: 'Automated Incident Response',
        description:
          'Implement automated incident response workflows with AI integration',
        difficulty: 'Intermediate',
        time: '2 hours',
        slug: 'automated-incident-response',
      },
    ],
  },
  {
    category: 'Cloud Security Posture',
    description:
      'Cloud security configuration and management for multi-cloud environments',
    guides: [
      {
        title: 'Multi-Cloud Security Framework',
        description:
          'Implement consistent security controls across AWS, Azure, and GCP',
        difficulty: 'Advanced',
        time: '5 hours',
        slug: 'multi-cloud-security-framework',
      },
      {
        title: 'Cloud-Native Security Controls',
        description:
          'Deploy security controls using cloud-native services and APIs',
        difficulty: 'Intermediate',
        time: '3 hours',
        slug: 'cloud-native-security-controls',
      },
      {
        title: 'Container Security Hardening',
        description:
          'Secure containerized applications with runtime protection and scanning',
        difficulty: 'Intermediate',
        time: '2.5 hours',
        slug: 'container-security-hardening',
      },
    ],
  },
  {
    category: 'Compliance & Governance',
    description: 'Regulatory compliance and governance frameworks for 2025',
    guides: [
      {
        title: 'GDPR Compliance Implementation',
        description:
          'Implement comprehensive GDPR compliance with data protection controls',
        difficulty: 'Intermediate',
        time: '4 hours',
        slug: 'gdpr-compliance-implementation',
      },
      {
        title: 'SOC 2 Type II Preparation',
        description:
          'Prepare for SOC 2 Type II audit with automated compliance monitoring',
        difficulty: 'Advanced',
        time: '6 hours',
        slug: 'soc2-type2-preparation',
      },
      {
        title: 'Industry-Specific Compliance',
        description:
          'Implement compliance frameworks for healthcare, finance, and government',
        difficulty: 'Advanced',
        time: '5 hours',
        slug: 'industry-specific-compliance',
      },
    ],
  },
]

const popularGuides = [
  {
    title: 'Zero Trust Network Architecture 2025',
    views: '25K+',
    rating: '4.9/5',
    category: 'Zero Trust',
    slug: 'zero-trust-network-architecture',
  },
  {
    title: 'AI-Powered Threat Detection Setup',
    views: '18K+',
    rating: '4.8/5',
    category: 'AI Security',
    slug: 'ai-threat-detection-setup',
  },
  {
    title: 'Multi-Cloud Security Framework',
    views: '15K+',
    rating: '4.9/5',
    category: 'Cloud Security',
    slug: 'multi-cloud-security-framework',
  },
  {
    title: 'SOC 2 Type II Preparation Guide',
    views: '12K+',
    rating: '4.7/5',
    category: 'Compliance',
    slug: 'soc2-type2-preparation',
  },
]

const searchCategories = [
  'All',
  'Zero Trust',
  'AI Security',
  'Cloud Security',
  'Compliance',
  'Threat Detection',
]

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#8B5CF6]">Documentation</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-8 max-w-4xl mx-auto">
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
              className="btn bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 py-4"
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
                className="flex-1 px-4 py-3 bg-[#0D0D0F] border border-[#222] rounded-lg text-white placeholder-[#A1A1AA] focus:border-[#8B5CF6] focus:outline-none"
              />
              <button className="btn px-8 py-3">Search</button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {searchCategories.map((category) => (
                <button
                  key={category}
                  className="px-3 py-1 bg-[#0D0D0F] border border-[#222] text-[#A1A1AA] rounded text-sm hover:border-[#8B5CF6] hover:text-white transition-colors"
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
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#222] hover:border-[#8B5CF6] transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-[#8B5CF6] bg-opacity-20 text-[#8B5CF6] rounded text-xs">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {guide.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A1A1AA]">{guide.views} views</span>
                  <span className="text-[#8B5CF6]">{guide.rating}</span>
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
                  <p className="text-[#A1A1AA]">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.guides.map((guide) => (
                    <div
                      key={guide.title}
                      className="bg-[#0D0D0F] p-6 rounded-lg border border-[#222] hover:border-[#8B5CF6] transition-colors"
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
                        <span className="text-[#A1A1AA] text-xs">
                          {guide.time}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">
                        {guide.title}
                      </h4>
                      <p className="text-[#A1A1AA] text-sm mb-4">
                        {guide.description}
                      </p>
                      <Link
                        href={`/resources/documentation/${guide.slug}`}
                        className="text-[#8B5CF6] hover:text-white transition-colors text-sm"
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
      <section className="py-20 px-6 bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help with Implementation?
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-8">
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
              className="btn bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 py-4"
            >
              View Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
