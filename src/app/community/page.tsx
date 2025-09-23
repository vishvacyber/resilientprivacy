import Link from 'next/link'

const communityFeatures = [
  {
    title: 'Customer Portal',
    description: 'Access your account management and security resources',
    
    link: '/community/portal',
    features: [
      'Account Management',
      'Incident Reports',
      'Compliance Status',
      'Account Settings',
    ],
  },
  {
    title: 'Feature Requests',
    description: 'Submit and vote on new features and improvements',
    
    link: '/community/features',
    features: [
      'Submit Ideas',
      'Vote on Features',
      'Track Progress',
      'Release Notes',
    ],
  },
  {
    title: 'Community Forums',
    description:
      'Connect with other security professionals and share knowledge',
    
    link: '/community/forums',
    features: [
      'Security Discussions',
      'Best Practices',
      'Technical Support',
      'Networking',
    ],
  },
  {
    title: 'Help Center',
    description: 'Comprehensive documentation and troubleshooting guides',
    
    link: '/community/help',
    features: ['Documentation', 'Tutorials', 'FAQ', 'Video Guides'],
  },
]

const upcomingEvents = [
  {
    title: 'Security Summit 2024',
    date: 'March 15-17, 2024',
    location: 'San Francisco, CA',
    description:
      'Annual conference featuring the latest in cybersecurity trends and innovations',
    type: 'Conference',
  },
  {
    title: 'Zero Trust Workshop',
    date: 'April 5, 2024',
    location: 'Virtual',
    description: 'Hands-on workshop on implementing zero trust architecture',
    type: 'Workshop',
  },
  {
    title: 'Threat Intelligence Briefing',
    date: 'April 20, 2024',
    location: 'Virtual Event',
    description: 'Quarterly briefing on emerging threats and security trends',
    type: 'Briefing',
  },
]

const communityStats = [
  {
    metric: 'Active Users',
    value: '10,000+',
    description: 'Security professionals in our community',
  },
  {
    metric: 'Feature Requests',
    value: '500+',
    description: 'Submitted and implemented features',
  },
  {
    metric: 'Forum Posts',
    value: '25,000+',
    description: 'Knowledge sharing and discussions',
  },
  {
    metric: 'Events Hosted',
    value: '50+',
    description: 'Conferences, workshops, and meetups',
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Security <span className="fxology-text-gradient">Community</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Join our global community of cybersecurity professionals. Access
            resources, share knowledge, and help shape the future of security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#portal" className="btn text-lg px-8 py-4">
              Access Portal
            </Link>
            <Link
              href="#forums"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Join Forums
            </Link>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Building a Global Security Community
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  At Resilient Privacy, we believe that cybersecurity is a
                  collaborative effort that requires the collective knowledge
                  and experience of the entire security community. Our community
                  platform brings together security professionals, researchers,
                  and organizations from around the world to share insights,
                  best practices, and innovative solutions.
                </p>
                <p>
                  Whether you&apos;re a seasoned security professional or just
                  starting your cybersecurity journey, our community provides
                  the resources, connections, and support you need to succeed.
                  From technical discussions and troubleshooting to strategic
                  insights and career development, our community covers all
                  aspects of cybersecurity.
                </p>
                <p>
                  We believe in the power of open collaboration and knowledge
                  sharing. Our community members contribute to the development
                  of new features, share real-world experiences, and help each
                  other solve complex security challenges. Together, we&apos;re
                  building a stronger, more resilient cybersecurity ecosystem.
                </p>
                <p>
                  Our community is built on the principles of mutual respect,
                  continuous learning, and professional growth. We welcome
                  diverse perspectives and encourage constructive dialogue that
                  advances the field of cybersecurity for everyone.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Community Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Access to exclusive resources
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Direct product influence
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Professional networking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Early access to features
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Expert support and guidance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section id="portal" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Community Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
              >
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary mb-6">{feature.description}</p>
                <div className="mb-6">
                  <h4 className="text-accent-500 font-semibold mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {feature.features.map((item) => (
                      <li
                        key={item}
                        className="text-text-secondary text-sm flex items-center"
                      >
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={feature.link}
                  className="text-accent-500 hover:text-white transition-colors"
                >
                  Access {feature.title} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Community by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat) => (
              <div
                key={stat.metric}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222] text-center"
              >
                <h3 className="text-4xl font-bold text-accent-500 mb-4">
                  {stat.value}
                </h3>
                <h4 className="text-xl font-bold text-white mb-2">
                  {stat.metric}
                </h4>
                <p className="text-text-secondary">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded text-sm">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {event.title}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-500">📅</span>
                    <span className="text-text-secondary">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-500">📍</span>
                    <span className="text-text-secondary">{event.location}</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-6">{event.description}</p>
                <button className="w-full bg-accent-500 text-white py-3 px-6 rounded font-semibold hover:bg-[#a78bfa] transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Request Form */}
      <section id="forums" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Submit a Feature Request
          </h2>
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <p className="text-text-secondary mb-8 text-center">
              Help us improve our platform by submitting feature requests and
              voting on ideas from other community members.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#0D0D0F] border border-[#222] rounded text-white placeholder-[#A1A1AA] focus:border-accent-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#0D0D0F] border border-[#222] rounded text-white placeholder-[#A1A1AA] focus:border-accent-500 focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Feature Category
                </label>
                <select className="w-full px-4 py-3 bg-[#0D0D0F] border border-[#222] rounded text-white focus:border-accent-500 focus:outline-none">
                  <option>Select category</option>
                  <option>Platform Features</option>
                  <option>Security Tools</option>
                  <option>Reporting & Analytics</option>
                  <option>Integration</option>
                  <option>User Experience</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Priority
                </label>
                <select className="w-full px-4 py-3 bg-[#0D0D0F] border border-[#222] rounded text-white focus:border-accent-500 focus:outline-none">
                  <option>Select priority</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-white font-semibold mb-2">
                Feature Description
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-[#0D0D0F] border border-[#222] rounded text-white placeholder-[#A1A1AA] focus:border-accent-500 focus:outline-none resize-vertical"
                placeholder="Describe the feature you'd like to see, including use cases and benefits..."
              />
            </div>
            <div className="text-center mt-8">
              <button className="btn text-lg px-8 py-4">Submit Request</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Connect with security professionals, share knowledge, and help shape
            the future of cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Get Started
            </Link>
            <Link
              href="/about/careers"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
