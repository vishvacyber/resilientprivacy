import Link from 'next/link'

const cloudSecurityFeatures = [
  {
    category: 'Cloud Security Posture Management',
    features: [
      'Continuous compliance monitoring',
      'Security configuration assessment',
      'Risk scoring and prioritization',
      'Automated remediation',
      'Policy enforcement',
    ],
  },
  {
    category: 'Cloud-Native Application Protection',
    features: [
      'Container security scanning',
      'Kubernetes security',
      'Serverless protection',
      'API security monitoring',
      'DevSecOps integration',
    ],
  },
  {
    category: 'Multi-Cloud Support',
    features: [
      'AWS security management',
      'Azure security controls',
      'Google Cloud protection',
      'Hybrid cloud security',
      'Unified security dashboard',
    ],
  },
]

const benefits = [
  {
    title: 'Industry-Leading Protection',
    description:
      'Trusted by enterprises with 99.8% threat detection accuracy and zero false positives guarantee.',
    
  },
  {
    title: 'Proven ROI',
    description:
      'Customers report 85% reduction in security incidents and $2.3M average annual savings on compliance costs.',
    
  },
  {
    title: 'Deployment Excellence',
    description:
      'Deploy in under 48 hours with our certified cloud architects. 100% success rate across 10,000+ implementations.',
    
  },
  {
    title: 'Enterprise Trust',
    description:
      'SOC 2 Type II certified with 99.99% uptime SLA. Backed by $50M cyber insurance coverage.',
    
  },
]

export default function CloudSecurityPosturePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Security <span className="text-accent-500">Posture</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Comprehensive cloud security and compliance management platform that
            protects your cloud environments and ensures regulatory compliance.
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
                Complete Cloud Security
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Resilient Privacy&apos;s Cloud Security Posture platform
                  provides comprehensive protection for your cloud environments,
                  combining Cloud Security Posture Management (CSPM) and
                  Cloud-Native Application Protection Platform (CNAPP)
                  capabilities in a unified solution.
                </p>
                <p>
                  The platform continuously monitors your cloud infrastructure
                  for security misconfigurations, compliance violations, and
                  potential threats. Our advanced analytics engine provides
                  real-time visibility into your cloud security posture and
                  automatically prioritizes remediation efforts based on risk
                  assessment.
                </p>
                <p>
                  Our solution supports all major cloud providers including AWS,
                  Azure, and Google Cloud, providing consistent security
                  controls across your multi-cloud environment. The platform
                  integrates seamlessly with your existing DevOps and security
                  tools to enable security-as-code practices and automated
                  compliance workflows.
                </p>
                <p>
                  The platform includes advanced container and Kubernetes
                  security capabilities, protecting your cloud-native
                  applications from vulnerabilities and threats. Our serverless
                  security features ensure that your serverless functions and
                  APIs are protected throughout their lifecycle.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Platform Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Supported Clouds</span>
                  <span className="text-accent-500 font-semibold">
                    AWS/Azure/GCP
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Security Controls</span>
                  <span className="text-accent-500 font-semibold">Multiple</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Compliance Frameworks</span>
                  <span className="text-accent-500 font-semibold">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Scan Frequency</span>
                  <span className="text-accent-500 font-semibold">
                    Real-time
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Deployment Time</span>
                  <span className="text-accent-500 font-semibold">1-3 Days</span>
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
            {cloudSecurityFeatures.map((category) => (
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
            Why Global Enterprises Trust Our Platform
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
            Ready to Secure Your Cloud?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Protect your cloud environments with comprehensive security controls
            and automated compliance management.
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
              href="/products/dlp-data-governance"
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Data Protection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
