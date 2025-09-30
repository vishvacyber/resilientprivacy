import Link from 'next/link'

const zeroTrustFeatures = [
  {
    category: 'Network Segmentation',
    features: [
      'Micro-segmentation',
      'Software-defined perimeters',
      'Dynamic policy enforcement',
      'Network access control',
      'Traffic isolation',
    ],
  },
  {
    category: 'Secure Connectivity',
    features: [
      'Zero-trust network access',
      'VPN-less connectivity',
      'Secure application access',
      'Device trust verification',
      'Encrypted communications',
    ],
  },
  {
    category: 'Policy Management',
    features: [
      'Identity-based policies',
      'Context-aware access',
      'Risk-based enforcement',
      'Automated policy updates',
      'Compliance monitoring',
    ],
  },
]

const benefits = [
  {
    title: 'Zero Trust Pioneer',
    description:
      'First to market with true zero trust architecture. Deployed by 300+ global enterprises including 8 of top 10 banks.',
    
  },
  {
    title: 'Breach Prevention Guarantee',
    description:
      'Stop 99.8% of lateral movement attacks. Customers report 96% reduction in network-based security incidents.',
    
  },
  {
    title: 'Performance Excellence',
    description:
      'Sub-5ms latency with global edge network. 40% faster than traditional VPN solutions with superior security.',
    
  },
  {
    title: 'Seamless Migration',
    description:
      'Deploy without network downtime. 95% of customers complete migration in under 30 days with dedicated architects.',
    
  },
]

export default function ZeroTrustNetworkEdgePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zero Trust <span className="text-accent-500">Network Edge</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Next-generation network security that eliminates implicit trust and
            provides secure access to applications and resources.
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
              href="#features"
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Features
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
                Advanced Network Security
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Resilient Privacy&apos;s Zero Trust Network Edge solution
                  redefines network security by implementing the principle of
                  &quot;never trust, always verify&quot; across your entire
                  network infrastructure. Our platform provides secure access to
                  applications and resources without the complexity and security
                  risks of traditional VPN solutions.
                </p>
                <p>
                  The solution creates secure, encrypted tunnels between users
                  and applications, ensuring that network traffic is protected
                  regardless of the user&apos;s location or the network
                  they&apos;re connecting from. This approach eliminates the
                  need for VPNs while providing superior security and user
                  experience.
                </p>
                <p>
                  Our zero trust implementation includes comprehensive network
                  segmentation capabilities that isolate critical resources and
                  applications. This micro-segmentation approach ensures that
                  even if an attacker gains access to one segment, they cannot
                  move laterally to other parts of the network.
                </p>
                <p>
                  The platform integrates with your existing identity and
                  security infrastructure to provide context-aware access
                  decisions. Every access request is evaluated based on user
                  identity, device health, location, time, and other risk
                  factors to ensure appropriate access controls are applied.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Platform Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Network Segments</span>
                  <span className="text-accent-500 font-semibold">
                    Unlimited
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Supported Protocols</span>
                  <span className="text-accent-500 font-semibold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Global PoPs</span>
                  <span className="text-accent-500 font-semibold">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Deployment Time</span>
                  <span className="text-accent-500 font-semibold">
                    2-4 Weeks
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Uptime SLA</span>
                  <span className="text-accent-500 font-semibold">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Comprehensive Features
          </h2>
          <div className="space-y-12">
            {zeroTrustFeatures.map((category) => (
              <div
                key={category.category}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                      <p className="text-text-secondary">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Industry Leaders Choose Our Zero Trust Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#1A1A1A] p-6 rounded-lg border border-[#222] text-center"
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
            Ready to Implement Zero Trust?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Transform your network security with zero trust principles and
            eliminate the risks of traditional network architectures.
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
              href="/products/edr-xdr"
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore EDR/XDR
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
