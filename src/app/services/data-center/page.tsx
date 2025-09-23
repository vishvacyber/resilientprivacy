import Link from 'next/link'

const dataCenterServices = [
  {
    category: 'Colocation Services',
    description:
      'Secure, reliable colocation with enterprise-grade infrastructure',
    services: [
      'Rack space rental (1U to full racks)',
      'Power redundancy (N+1, 2N)',
      'Climate-controlled environment',
      '24/7 physical security',
      'Biometric access controls',
      'Remote hands support',
    ],
    
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Private Cloud Hosting',
    description: 'Dedicated cloud infrastructure tailored to your needs',
    services: [
      'Dedicated server hosting',
      'Virtual machine provisioning',
      'Storage area networks (SAN)',
      'Load balancing & clustering',
      'Custom network configurations',
      'Managed hypervisor platforms',
    ],
    
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Disaster Recovery',
    description: 'Comprehensive disaster recovery and business continuity',
    services: [
      'Hot site disaster recovery',
      'Data replication services',
      'Recovery time objectives (RTO)',
      'Recovery point objectives (RPO)',
      'Regular DR testing',
      'Failover orchestration',
    ],
    
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Backup & Storage',
    description: 'Enterprise backup solutions with multiple retention policies',
    services: [
      'Automated backup scheduling',
      'Incremental & differential backups',
      'Long-term archival storage',
      'Encryption at rest & in transit',
      'Compliance-ready retention',
      'Rapid data restoration',
    ],
    
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Network Services',
    description: 'High-performance networking and connectivity solutions',
    services: [
      'Dedicated internet access',
      'MPLS connectivity',
      'SD-WAN implementation',
      'Content delivery networks',
      'DDoS protection services',
      'Network monitoring & management',
    ],
    
    pricing: 'Contact us for pricing',
  },
  {
    category: 'Managed Services',
    description: '24/7 monitoring and management of your infrastructure',
    services: [
      'Server monitoring & maintenance',
      'Operating system management',
      'Security patch management',
      'Performance optimization',
      'Capacity planning',
      'Incident response & resolution',
    ],
    
    pricing: 'Contact us for pricing',
  },
]

const dataCenterSpecs = [
  {
    specification: 'Uptime SLA',
    value: '99.99%',
    description: 'Tier III+ data center reliability',
  },
  {
    specification: 'Power Redundancy',
    value: '2N',
    description: 'Fully redundant power systems',
  },
  {
    specification: 'Cooling Systems',
    value: 'N+1',
    description: 'Redundant HVAC with precision cooling',
  },
  {
    specification: 'Security',
    value: '24/7',
    description: 'Physical security with biometric access',
  },
  {
    specification: 'Network Uptime',
    value: '100%',
    description: 'Multiple carrier connections',
  },
  {
    specification: 'Fire Suppression',
    value: 'FM-200',
    description: 'Clean agent fire suppression system',
  },
]

const connectivityOptions = [
  {
    type: 'Internet Connectivity',
    options: [
      'Dedicated Internet Access (10Mbps - 100Gbps)',
      'Blended Internet with multiple carriers',
      'Burstable bandwidth options',
      'IPv4 and IPv6 support',
    ],
  },
  {
    type: 'Private Connectivity',
    options: [
      'MPLS networks',
      'Point-to-point circuits',
      'Ethernet over fiber',
      'SD-WAN connectivity',
    ],
  },
  {
    type: 'Cloud Connectivity',
    options: [
      'AWS Direct Connect',
      'Azure ExpressRoute',
      'Google Cloud Interconnect',
      'Multi-cloud connectivity',
    ],
  },
]

const complianceStandards = [
  {
    standard: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls',
    
  },
  {
    standard: 'HIPAA Compliant',
    description: 'Healthcare data protection requirements',
    
  },
  {
    standard: 'PCI DSS Level 1',
    description: 'Payment card industry data security',
    
  },
  {
    standard: 'FISMA Moderate',
    description: 'Federal information security standards',
    
  },
  {
    standard: 'ISO 27001',
    description: 'Information security management',
    
  },
  {
    standard: 'SSAE 18',
    description: 'Service organization control reports',
    
  },
]

const benefits = [
  {
    title: 'Enterprise Reliability',
    description:
      '99.99% uptime SLA with Tier III+ data center infrastructure and redundant systems.',
    
  },
  {
    title: 'Cost Optimization',
    description:
      'Reduce capital expenditure by 60% compared to building your own data center.',
    
  },
  {
    title: 'Scalable Infrastructure',
    description:
      'Scale resources up or down instantly based on your business requirements.',
    
  },
  {
    title: 'Enhanced Security',
    description:
      'Multi-layered physical and digital security with 24/7 monitoring and access controls.',
    
  },
]

export default function DataCenterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Data Center <span className="text-accent-500">Services</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Enterprise-grade data center solutions with high availability,
            security, and performance. From colocation to managed private cloud
            hosting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Request Quote
            </Link>
            <Link
              href="#services"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Data Center Specifications */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Tier III+ Data Center Specifications
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our state-of-the-art facilities meet the highest standards for
              reliability, security, and performance with enterprise-grade
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataCenterSpecs.map((spec) => (
              <div
                key={spec.specification}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] text-center"
              >
                <div className="text-3xl font-bold text-accent-500 mb-2">
                  {spec.value}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {spec.specification}
                </h3>
                <p className="text-text-secondary text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Data Center Service Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataCenterServices.map((service) => (
              <div
                key={service.category}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.category}
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
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
                <div className="border-t border-[#333] pt-4">
                  <div className="text-sm text-text-secondary">Contact us for</div>
                  <div className="text-lg font-semibold text-white">
                    {service.pricing}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Options */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Connectivity & Network Options
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Multiple connectivity options to ensure your data center services
              are always accessible and performant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {connectivityOptions.map((connectivity) => (
              <div
                key={connectivity.type}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333]"
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  {connectivity.type}
                </h3>
                <ul className="space-y-2">
                  {connectivity.options.map((option) => (
                    <li
                      key={option}
                      className="text-text-secondary text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our data centers meet stringent compliance requirements for
              regulated industries and government organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard) => (
              <div
                key={standard.standard}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#333] text-center"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {standard.standard}
                </h3>
                <p className="text-text-secondary text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose Our Data Centers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] text-center"
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

      {/* Migration Support */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Seamless Migration Support
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Our experienced migration team ensures a smooth transition to
                  our data center facilities with minimal downtime and zero data
                  loss.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Assessment & Planning
                      </h3>
                      <p className="text-sm">
                        Comprehensive evaluation of your current infrastructure
                        and migration strategy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Pre-Migration Setup
                      </h3>
                      <p className="text-sm">
                        Infrastructure preparation and testing to ensure
                        readiness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Data Migration
                      </h3>
                      <p className="text-sm">
                        Secure data transfer with validation and integrity
                        checks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Go-Live & Support
                      </h3>
                      <p className="text-sm">
                        Cutover execution and post-migration support and
                        optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0D0D0F] p-8 rounded-lg border border-[#333]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Migration Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#333] pb-2">
                  <span className="text-text-secondary">Typical Downtime</span>
                  <span className="text-accent-500 font-semibold">
                    &lt; 4 hours
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-[#333] pb-2">
                  <span className="text-text-secondary">Data Loss Risk</span>
                  <span className="text-accent-500 font-semibold">Zero</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#333] pb-2">
                  <span className="text-text-secondary">Migration Support</span>
                  <span className="text-accent-500 font-semibold">24/7</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#333] pb-2">
                  <span className="text-text-secondary">Project Management</span>
                  <span className="text-accent-500 font-semibold">
                    Dedicated PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Post-Migration Support</span>
                  <span className="text-accent-500 font-semibold">30 days</span>
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
            Ready to Move to Enterprise Data Centers?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Get a custom quote for your data center requirements and discover
            how our enterprise-grade facilities can support your business
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Get Custom Quote
            </Link>
            <Link
              href="/services"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
