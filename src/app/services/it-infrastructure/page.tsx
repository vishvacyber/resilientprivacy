import Link from 'next/link'

const itServices = [
  {
    category: 'Help Desk & Technical Support',
    description: '24/7 technical support for all your IT needs',
    services: [
      'Multi-level help desk support',
      'Remote desktop assistance',
      'Hardware troubleshooting',
      'Software installation & configuration',
      'User account management',
      'Password resets & access issues',
    ],
    
  },
  {
    category: 'Infrastructure Monitoring',
    description:
      'Proactive monitoring and maintenance of your IT infrastructure',
    services: [
      'Network performance monitoring',
      'Server health monitoring',
      'Application performance tracking',
      'Automated alerting systems',
      'Capacity planning & optimization',
      'Performance reporting & analytics',
    ],
    
  },
  {
    category: 'Cloud Migration & Management',
    description: 'Complete cloud transformation and ongoing management',
    services: [
      'Cloud readiness assessment',
      'Migration planning & execution',
      'Multi-cloud management',
      'Cost optimization strategies',
      'Cloud security implementation',
      'Backup & disaster recovery',
    ],
    
  },
  {
    category: 'Network Administration',
    description: 'Professional network design, implementation, and management',
    services: [
      'Network design & architecture',
      'Router & switch configuration',
      'Firewall management',
      'VPN setup & management',
      'Wireless network deployment',
      'Network security hardening',
    ],
    
  },
  {
    category: 'System Maintenance',
    description: 'Regular maintenance to keep your systems running smoothly',
    services: [
      'Operating system updates',
      'Security patch management',
      'System optimization',
      'Hardware maintenance',
      'Software license management',
      'Documentation & asset tracking',
    ],
    
  },
  {
    category: 'Data Backup & Recovery',
    description: 'Comprehensive data protection and recovery solutions',
    services: [
      'Automated backup solutions',
      'Disaster recovery planning',
      'Data retention policies',
      'Recovery testing & validation',
      'Cloud backup integration',
      'Business continuity planning',
    ],
    
  },
]

const supportTiers = [
  {
    tier: 'Essential',
    price: 'Contact us',
    period: 'for pricing',
    description: 'Perfect for small businesses with basic IT needs',
    features: [
      'Business hours support (8AM-6PM)',
      'Email & phone support',
      'Basic system monitoring',
      'Monthly system reports',
      'Software updates',
      'Up to 10 users',
    ],
    popular: false,
  },
  {
    tier: 'Professional',
    price: 'Contact us',
    period: 'for pricing',
    description: 'Comprehensive IT support for growing businesses',
    features: [
      '24/7 support & monitoring',
      'Priority support response',
      'Advanced system monitoring',
      'Proactive maintenance',
      'Cloud backup included',
      'Up to 50 users',
      'Monthly strategy calls',
    ],
    popular: true,
  },
  {
    tier: 'Enterprise',
    price: 'Contact us',
    period: 'for pricing',
    description: 'Full-scale IT management for large organizations',
    features: [
      'Dedicated account manager',
      'Custom SLA agreements',
      'On-site support available',
      'Strategic IT planning',
      'Compliance assistance',
      'Unlimited users',
      'Quarterly business reviews',
    ],
    popular: false,
  },
]

const technologies = [
  {
    category: 'Operating Systems',
    items: [
      'Windows Server',
      'Linux (RHEL, Ubuntu)',
      'macOS',
      'VMware vSphere',
      'Hyper-V',
    ],
  },
  {
    category: 'Cloud Platforms',
    items: [
      'Microsoft Azure',
      'Amazon AWS',
      'Google Cloud',
      'Microsoft 365',
      'Salesforce',
    ],
  },
  {
    category: 'Networking',
    items: ['Cisco', 'Juniper', 'Fortinet', 'SonicWall', 'Ubiquiti', 'Meraki'],
  },
  {
    category: 'Monitoring Tools',
    items: ['PRTG', 'SolarWinds', 'Nagios', 'Zabbix', 'DataDog', 'New Relic'],
  },
]

const benefits = [
  {
    title: 'Reduced Downtime',
    description:
      'Proactive monitoring and maintenance reduce system downtime by up to 95%.',
    
  },
  {
    title: 'Cost Predictability',
    description:
      'Fixed monthly pricing helps you budget IT costs without surprise expenses.',
    
  },
  {
    title: 'Expert Knowledge',
    description:
      'Access to certified IT professionals without the cost of hiring full-time staff.',
    
  },
  {
    title: 'Scalable Solutions',
    description:
      'IT infrastructure that grows with your business needs and requirements.',
    
  },
]

export default function ITInfrastructurePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Infrastructure <span className="text-accent-500">& Support</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Complete IT infrastructure management and 24/7 technical support
            services to keep your business running smoothly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://forms.gle/xuGFneJ1ijjfMp9x7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Get Started
            </Link>
            <Link
              href="#pricing"
              className="btn-secondary text-lg px-8 py-4"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Comprehensive IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div
                key={service.category}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.category}
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.services.map((item) => (
                    <li
                      key={item}
                      className="text-accent-500 text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              IT Support Pricing Plans
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Choose the right level of IT support for your business. All plans
              include our core support services with varying levels of coverage
              and features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`bg-[#0D0D0F] p-8 rounded-lg border transition-all duration-300 relative ${
                  tier.popular
                    ? 'border-accent-500 ring-2 ring-[accent-500]/20 transform scale-105'
                    : 'border-[#333] hover:border-accent-500'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-500 text-white px-4 py-2 text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.tier}
                  </h3>
                  <div className="text-4xl font-bold text-accent-500 mb-2">
                    {tier.price}{' '}
                    <span className="text-lg text-text-secondary">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-text-secondary text-sm flex items-center"
                    >
                      <span className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://forms.gle/xuGFneJ1ijjfMp9x7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-accent-500 text-white hover:bg-[#7C3AED]'
                      : 'bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Technologies We Support
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our team has expertise across a wide range of technologies and
              platforms to support your diverse IT infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333]"
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-text-secondary text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose Our IT Support?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] text-center"
              >
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Get a free IT assessment and discover how our comprehensive support
            services can improve your business operations and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://forms.gle/xuGFneJ1ijjfMp9x7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Get Free Assessment
            </Link>
            <Link
              href="/services"
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
