import Link from 'next/link'

const threatReports = [
  {
    title: 'Q4 2024 Threat Intelligence Report: AI-Powered Attacks',
    description:
      'Comprehensive analysis of AI-powered cyber threats, attack patterns, and emerging risks in Q4 2024, including machine learning-based attacks and automated threat campaigns.',
    author: 'Dr. Emily Watson',
    date: 'January 2025',
    pages: '95',
    fileSize: '5.2 MB',
    downloadCount: '4,500+',
    category: 'Quarterly Report',
    tags: ['AI Threats', 'Q4 2024', 'Machine Learning', 'Automated Attacks'],
    featured: true,
    highlights: [
      'AI-powered phishing attacks increased by 300%',
      'Machine learning-based malware evasion techniques',
      'Automated social engineering campaigns',
      'AI-enhanced supply chain attacks',
    ],
  },
  {
    title: 'Quantum Computing Threats: Preparing for the Future',
    description:
      'Analysis of emerging quantum computing threats and their potential impact on current cryptographic systems and security infrastructure.',
    author: 'Dr. Emily Watson',
    date: 'December 2024',
    pages: '78',
    fileSize: '4.8 MB',
    downloadCount: '3,800+',
    category: 'Special Report',
    tags: [
      'Quantum Computing',
      'Cryptography',
      'Future Threats',
      'Preparation',
    ],
    featured: true,
    highlights: [
      'Quantum-resistant cryptography requirements',
      'Post-quantum security planning',
      'Cryptographic migration strategies',
      'Quantum threat timeline analysis',
    ],
  },
  {
    title: 'Supply Chain Attacks: The New Normal in 2025',
    description:
      'Comprehensive analysis of supply chain attack patterns, third-party vulnerabilities, and strategies for protecting digital ecosystems.',
    author: 'Dr. Emily Watson',
    date: 'November 2024',
    pages: '65',
    fileSize: '3.9 MB',
    downloadCount: '3,200+',
    category: 'Special Report',
    tags: ['Supply Chain', 'Third Party', 'Risk Management', 'Protection'],
    featured: true,
    highlights: [
      'Software supply chain attacks increased 400%',
      'Hardware supply chain vulnerabilities',
      'Vendor risk assessment frameworks',
      'Detection and response strategies',
    ],
  },
  {
    title: 'Q3 2024 Threat Intelligence Report: Cloud Security Landscape',
    description:
      'Quarterly analysis of cloud security threats, vulnerabilities, and emerging attack vectors in cloud-native environments.',
    author: 'Dr. Emily Watson',
    date: 'October 2024',
    pages: '88',
    fileSize: '4.5 MB',
    downloadCount: '3,600+',
    category: 'Quarterly Report',
    tags: ['Cloud Security', 'Q3 2024', 'Cloud Native', 'Vulnerabilities'],
    featured: false,
    highlights: [
      'Container security vulnerabilities on the rise',
      'Multi-cloud attack vectors',
      'Serverless security challenges',
      'Cloud misconfiguration exploits',
    ],
  },
  {
    title: 'AI and Machine Learning in Cyber Attacks: 2025 Analysis',
    description:
      'Deep dive into how AI and ML are being weaponized in cyber attacks and the corresponding defense strategies and countermeasures.',
    author: 'Dr. Emily Watson',
    date: 'September 2024',
    pages: '72',
    fileSize: '4.2 MB',
    downloadCount: '2,900+',
    category: 'Special Report',
    tags: ['AI', 'Machine Learning', 'Cyber Attacks', 'Defense'],
    featured: false,
    highlights: [
      'AI-powered malware detection evasion',
      'Automated social engineering attacks',
      'ML-based threat detection',
      'Defense strategies and countermeasures',
    ],
  },
  {
    title: 'Q2 2024 Threat Intelligence Report: Zero-Day Exploits',
    description:
      'Second quarter analysis of zero-day vulnerabilities, exploit techniques, and emerging threat actor capabilities.',
    author: 'Dr. Emily Watson',
    date: 'July 2024',
    pages: '82',
    fileSize: '4.1 MB',
    downloadCount: '3,100+',
    category: 'Quarterly Report',
    tags: ['Zero-Day', 'Q2 2024', 'Exploits', 'Vulnerabilities'],
    featured: false,
    highlights: [
      'Zero-day exploit proliferation',
      'Advanced persistent threats',
      'Critical infrastructure targeting',
      'Defense technology advancements',
    ],
  },
]

const categories = [
  'All',
  'Quarterly Report',
  'Special Report',
  'AI Threats',
  'Quantum Computing',
  'Supply Chain',
  'Cloud Security',
  'Zero-Day',
]

const threatMetrics = [
  {
    metric: 'Threats Analyzed',
    value: '50K+',
    description: 'Threats analyzed in 2024',
  },
  {
    metric: 'Attack Patterns',
    value: '200+',
    description: 'Unique attack patterns identified',
  },
  {
    metric: 'Zero-Day Exploits',
    value: '25',
    description: 'Zero-day vulnerabilities discovered',
  },
  {
    metric: 'Threat Actors',
    value: '150+',
    description: 'Threat actor groups tracked',
  },
]

export default function ThreatReportsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Threat <span className="text-[#8B5CF6]">Reports</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-8 max-w-4xl mx-auto">
            Comprehensive threat intelligence reports providing deep insights
            into emerging cyber threats, attack patterns, and defense
            strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#featured" className="btn text-lg px-8 py-4">
              View Latest Reports
            </Link>
            <Link
              href="#subscribe"
              className="btn bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 py-4"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section id="featured" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Latest Threat Reports
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {threatReports
              .filter((report) => report.featured)
              .map((report) => (
                <div
                  key={report.title}
                  className="bg-[#1A1A1A] rounded-lg border border-[#222] overflow-hidden hover:border-[#8B5CF6] transition-colors"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#8B5CF6] bg-opacity-20 text-[#8B5CF6] rounded-full text-sm">
                        {report.category}
                      </span>
                      <span className="text-[#A1A1AA] text-sm">
                        {report.pages} pages
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {report.title}
                    </h3>
                    <p className="text-[#A1A1AA] mb-6">{report.description}</p>

                    <div className="mb-6">
                      <h4 className="text-[#8B5CF6] font-semibold mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {report.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-[#A1A1AA] text-sm flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[#A1A1AA] text-sm">
                        <span className="font-semibold">
                          {report.downloadCount}
                        </span>{' '}
                        downloads
                      </div>
                      <div className="text-[#A1A1AA] text-sm">
                        {report.fileSize}
                      </div>
                    </div>
                    <button className="w-full btn py-3">Download Report</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Threat Metrics */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Threat Intelligence Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatMetrics.map((metric) => (
              <div
                key={metric.metric}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#222] text-center"
              >
                <div className="text-4xl font-bold text-[#8B5CF6] mb-4">
                  {metric.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {metric.metric}
                </h3>
                <p className="text-[#A1A1AA] text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reports */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories */}
            <div className="lg:w-1/4">
              <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#1A1A1A] transition-colors"
                  >
                    <span className="text-[#A1A1AA] hover:text-white">
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* All Reports */}
            <div className="lg:w-3/4">
              <h3 className="text-2xl font-bold text-white mb-6">
                All Threat Reports
              </h3>
              <div className="space-y-6">
                {threatReports.map((report) => (
                  <div
                    key={report.title}
                    className="bg-[#1A1A1A] p-6 rounded-lg border border-[#222] hover:border-[#8B5CF6] transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-2/3">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-[#8B5CF6] bg-opacity-20 text-[#8B5CF6] rounded-full text-sm">
                            {report.category}
                          </span>
                          <span className="text-[#A1A1AA] text-sm">
                            {report.pages} pages
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">
                          {report.title}
                        </h4>
                        <p className="text-[#A1A1AA] mb-4">
                          {report.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {report.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-[#222] text-[#A1A1AA] rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {report.author
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">
                              {report.author}
                            </div>
                            <div className="text-[#A1A1AA] text-xs">
                              {report.date}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="text-[#A1A1AA] text-sm">
                            <span className="font-semibold">
                              {report.downloadCount}
                            </span>{' '}
                            downloads
                          </div>
                          <div className="text-[#A1A1AA] text-sm">
                            {report.fileSize}
                          </div>
                        </div>
                        <button className="w-full btn py-2 text-sm">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section
        id="subscribe"
        className="py-20 px-6 bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Ahead of Threats
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-8">
            Get the latest threat intelligence reports and security insights
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#1A1A1A] border border-[#222] rounded-lg text-white placeholder-[#A1A1AA] focus:border-[#8B5CF6] focus:outline-none"
            />
            <button className="btn px-8 py-3">Subscribe</button>
          </div>
          <p className="text-[#A1A1AA] text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  )
}
