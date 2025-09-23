import Link from 'next/link'

const identityFeatures = [
  {
    category: 'Multi-Factor Authentication',
    features: [
      'Biometric authentication',
      'Hardware security keys',
      'SMS/Email verification',
      'Time-based one-time passwords',
      'Adaptive authentication',
    ],
  },
  {
    category: 'Privileged Access Management',
    features: [
      'Just-in-time access',
      'Session recording',
      'Password vaulting',
      'Access request workflows',
      'Privilege escalation controls',
    ],
  },
  {
    category: 'Identity Lifecycle Management',
    features: [
      'Automated provisioning',
      'Role-based access control',
      'Identity governance',
      'Access certification',
      'Separation of duties',
    ],
  },
]

const benefits = [
  {
    title: 'Identity Breach Prevention',
    description:
      'Block 99.7% of identity attacks with adaptive MFA. Customers report 94% reduction in credential-based breaches.',
    
  },
  {
    title: 'Global Compliance Leader',
    description:
      'Pre-certified for SOX, PCI-DSS, HIPAA, and 22 other frameworks. Trusted by regulated industries worldwide.',
    
  },
  {
    title: 'Frictionless Access',
    description:
      'Single sign-on to 1,000+ applications. 98% user satisfaction rate with seamless authentication experience.',
    
  },
  {
    title: 'Proven ROI',
    description:
      'Customers save average $1.8M annually on identity management costs. Deploy 75% faster than competitors.',
    
  },
]

export default function IdentityAccessSuitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Identity & Access <span className="fxology-text-gradient">Suite</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Comprehensive identity and access management solution that secures
            user identities and controls access across your entire organization.
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
              href="#features"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
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
                Complete Identity Management
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Resilient Privacy&apos;s Identity & Access Suite provides
                  organizations with a comprehensive solution for managing user
                  identities and controlling access to critical resources. Our
                  platform combines advanced authentication methods, privileged
                  access management, and identity lifecycle automation to create
                  a secure and efficient identity ecosystem.
                </p>
                <p>
                  The suite addresses the fundamental challenge of ensuring that
                  the right people have access to the right resources at the
                  right time, while maintaining the highest levels of security
                  and compliance. Our solution supports both cloud and
                  on-premises environments, providing flexibility for
                  organizations with diverse infrastructure requirements.
                </p>
                <p>
                  Our identity management platform integrates seamlessly with
                  existing enterprise systems and applications, minimizing
                  disruption to business operations while significantly
                  improving security posture. The platform provides detailed
                  audit trails and compliance reporting capabilities to help
                  organizations meet regulatory requirements and demonstrate
                  security controls.
                </p>
                <p>
                  The suite leverages artificial intelligence and machine
                  learning to detect anomalous access patterns and automatically
                  adjust security policies based on risk assessments. This
                  adaptive approach ensures that security measures are
                  proportional to the actual threat level while maintaining user
                  productivity.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Platform Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Authentication Methods</span>
                  <span className="text-accent-500 font-semibold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Supported Applications</span>
                  <span className="text-accent-500 font-semibold">1,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Compliance Frameworks</span>
                  <span className="text-accent-500 font-semibold">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Deployment Time</span>
                  <span className="text-accent-500 font-semibold">
                    4-6 Weeks
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
            {identityFeatures.map((category) => (
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
            Why CISOs Trust Our Identity & Access Suite
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
            Ready to Secure Your Identities?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Transform your identity and access management with a comprehensive
            solution that protects your organization from identity-based
            threats.
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
              href="/products/zero-trust-network-edge"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Explore Zero Trust
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
