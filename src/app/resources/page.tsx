import Link from 'next/link'

const resourceCategories = [
  {
    title: 'Blog',
    description: 'Latest insights and analysis from our security experts',
    
    link: '/resources/blog',
    count: '75+ articles',
    featured: [
      'AI-Powered Cyber Threats 2025',
      'Quantum Computing Security Guide',
      'Supply Chain Attacks: The New Normal',
    ],
  },

  {
    title: 'Documentation',
    description: 'Technical documentation and implementation guides',
    
    link: '/resources/documentation',
    count: '150+ guides',
    featured: ['API Reference', 'Deployment Guide', 'Troubleshooting'],
  },
  {
    title: 'Training',
    description: 'Security awareness and technical training',
    
    link: '/resources/training',
    count: '30+ courses',
    featured: [
      'AI Security Fundamentals',
      'Quantum Security Awareness',
      'Cloud-Native Security Training',
    ],
  },
]

const latestInsights = [
  {
    title: 'AI-Powered Cyber Threats: The 2025 Landscape',
    category: 'AI & ML Security',
    date: 'January 20, 2025',
    readTime: '12 min read',
    excerpt:
      'Comprehensive analysis of how artificial intelligence is being weaponized by threat actors and the emerging defense strategies to counter these sophisticated attacks.',
  },
  {
    title: 'Quantum Computing Security: Preparing for the Post-Quantum Era',
    category: 'Quantum Security',
    date: 'January 15, 2025',
    readTime: '15 min read',
    excerpt:
      "Strategic guide for organizations to prepare for quantum computing threats and implement quantum-resistant cryptography before it's too late.",
  },
  {
    title: 'Supply Chain Attacks: The New Normal in 2025',
    category: 'Supply Chain Security',
    date: 'January 10, 2025',
    readTime: '10 min read',
    excerpt:
      'Analysis of the evolving supply chain attack landscape and comprehensive strategies for protecting third-party relationships and dependencies.',
  },
]

const featuredResources = [
  {
    title: 'Quantum-Resistant Security Framework: 2025 Edition',
    type: 'White Paper',
    description:
      'Comprehensive framework for implementing quantum-resistant cryptography and preparing organizations for the post-quantum computing era',
    readTime: '25 min read',
    author: 'Resilient Privacy Research Team',
  },
  {
    title: 'Q4 2024 Threat Intelligence Report: AI-Powered Attacks',
    type: 'Threat Report',
    description:
      'Comprehensive analysis of AI-powered cyber threats, attack patterns, and emerging risks in Q4 2024',
    readTime: '20 min read',
    author: 'Resilient Privacy Research Team',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Mobile-Optimized Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Cybersecurity <span className="text-accent-500">Resources</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Access our comprehensive library of cybersecurity insights,
            research, and educational content to stay ahead of evolving threats
            and industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="#resources" className="btn text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 min-h-[44px]">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Resources Overview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
                Knowledge is Power
              </h2>
              <div className="space-y-4 sm:space-y-6 text-text-secondary">
                <p className="text-sm sm:text-base">
                  At Resilient Privacy, we believe that knowledge sharing is
                  essential to building a more secure digital world. Our
                  comprehensive resource library provides cybersecurity
                  professionals, IT leaders, and business executives with the
                  insights, tools, and guidance they need to make informed
                  security decisions.
                </p>
                <p className="text-sm sm:text-base">
                  Our team of security experts, researchers, and analysts
                  continuously monitor the threat landscape, analyze emerging
                  trends, and develop practical guidance based on real-world
                  experience. We share this knowledge through various formats
                  including detailed white papers, technical documentation, case
                  studies, and educational content.
                </p>
                <p className="text-sm sm:text-base">
                  Whether you&apos;re looking for strategic guidance on
                  implementing zero trust architecture, tactical advice on
                  responding to ransomware attacks, or educational content to
                  improve your team&apos;s security awareness, our resources are
                  designed to provide actionable insights that you can apply
                  immediately to improve your organization&apos;s security
                  posture.
                </p>
                <p>
                  We&apos;re committed to keeping our content current and
                  relevant. Our resources are regularly updated to reflect the
                  latest threats, technologies, and best practices.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Resource Library Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Total Resources</span>
                  <span className="text-accent-500 font-semibold">250+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Monthly Downloads</span>
                  <span className="text-accent-500 font-semibold">15,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Expert Contributors</span>
                  <span className="text-accent-500 font-semibold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Languages</span>
                  <span className="text-accent-500 font-semibold">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Resource Categories */}
      <section id="resources" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16">
            Resource Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resourceCategories.map((category) => (
              <div
                key={category.title}
                className="bg-[#0D0D0F] p-4 sm:p-6 lg:p-8 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
              >
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary mb-3 sm:mb-4">{category.description}</p>
                <p className="text-accent-500 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
                  {category.count}
                </p>
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-accent-500 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    Featured Content
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {category.featured.map((item) => (
                      <li
                        key={item}
                        className="text-text-secondary text-xs sm:text-sm flex items-center"
                      >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={category.link}
                  className="text-accent-500 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Browse {category.title} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Latest Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestInsights.map((insight) => (
              <div
                key={insight.title}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent-500 text-sm font-semibold">
                    {insight.category}
                  </span>
                  <span className="text-text-secondary text-sm">•</span>
                  <span className="text-text-secondary text-sm">{insight.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {insight.title}
                </h3>
                <p className="text-text-secondary mb-4">{insight.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">
                    {insight.readTime}
                  </span>
                  <Link
                    href="/resources/blog"
                    className="text-accent-500 hover:text-white transition-colors text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div
                key={resource.title}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent-500 text-sm font-semibold">
                    {resource.type}
                  </span>
                  <span className="text-text-secondary text-sm">•</span>
                  <span className="text-text-secondary text-sm">
                    {resource.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {resource.title}
                </h3>
                <p className="text-text-secondary mb-6">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">
                    {resource.author}
                  </span>
                  <Link
                    href={
                      resource.type === 'White Paper'
                        ? '/resources/white-papers'
                        : '#'
                    }
                    className="text-accent-500 hover:text-white transition-colors text-sm"
                  >
                    Read More →
                  </Link>
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
            Need Custom Research or Analysis?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Our team can provide custom research, analysis, and guidance
            tailored to your specific security challenges and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Request Custom Research
            </Link>
            <Link
              href="/services/cybersecurity-consulting"
              className="btn-secondary text-lg px-8 py-4"
            >
              Consulting Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
