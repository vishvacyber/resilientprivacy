import Link from 'next/link'

const legalDocuments = [
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information',
    lastUpdated: 'January 15, 2024',
    link: '/legal/privacy-policy',
    category: 'Data Protection',
  },
  {
    title: 'Consent Policy',
    description:
      'How we collect, process, and manage your consent for data processing',
    lastUpdated: 'January 20, 2025',
    link: '/legal/consent-policy',
    category: 'Data Protection',
  },
  {
    title: 'Terms of Service',
    description: 'Terms and conditions for using our products and services',
    lastUpdated: 'January 15, 2024',
    link: '/legal/terms-of-service',
    category: 'Legal',
  },
  {
    title: 'Cookie Policy',
    description:
      'Information about how we use cookies and similar technologies',
    lastUpdated: 'January 15, 2024',
    link: '/legal/cookie-policy',
    category: 'Data Protection',
  },
  {
    title: 'Accessibility Statement',
    description: 'Our commitment to digital accessibility and compliance',
    lastUpdated: 'January 15, 2024',
    link: '/legal/accessibility-statement',
    category: 'Compliance',
  },

  {
    title: 'Data Processing Agreement',
    description: 'Standard contractual clauses for data processing',
    lastUpdated: 'January 15, 2024',
    link: '/legal/data-processing-agreement',
    category: 'Data Protection',
  },
]

const complianceFrameworks = [
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance',
    status: 'Compliant',
    icon: '🇪🇺',
  },
  {
    name: 'CCPA',
    description: 'California Consumer Privacy Act compliance',
    status: 'Compliant',
    icon: '🇺🇸',
  },
  {
    name: 'SOC 2',
    description: 'Service Organization Control 2 certification',
    status: 'Type II Certified',
    icon: '🏆',
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management System',
    status: 'Certified',
    icon: '🔒',
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act',
    status: 'Compliant',
    icon: '🏥',
  },
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard',
    status: 'Level 1 Compliant',
    icon: '💳',
  },
]

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Legal & <span className="text-accent-500">Compliance</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Transparency and compliance are fundamental to our business. Access
            our legal documents and learn about our commitment to data
            protection and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#documents" className="btn text-lg px-8 py-4">
              Legal Documents
            </Link>
            <Link
              href="/compliance"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Compliance Center
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Overview */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Our Legal Commitment
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  At Resilient Privacy, we believe that transparency and legal
                  compliance are essential foundations for building trust with
                  our customers and partners. We are committed to maintaining
                  the highest standards of legal and regulatory compliance
                  across all aspects of our business operations.
                </p>
                <p>
                  Our legal framework is designed to protect both our customers
                  and our organization while ensuring that we operate within the
                  bounds of applicable laws and regulations. We regularly review
                  and update our legal documents to reflect changes in laws,
                  regulations, and industry best practices.
                </p>
                <p>
                  We understand that legal compliance is not just about meeting
                  minimum requirements—it&apos;s about demonstrating our
                  commitment to ethical business practices, data protection, and
                  customer privacy. Our legal team works closely with our
                  security and compliance teams to ensure that our policies and
                  procedures are aligned with our security practices.
                </p>
                <p>
                  We encourage our customers, partners, and stakeholders to
                  review our legal documents and reach out to us with any
                  questions or concerns. We are committed to being transparent
                  about our practices and responsive to inquiries about our
                  legal and compliance posture.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">Legal Team</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">In-house legal counsel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    External legal advisors
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">Compliance specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Data protection officers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">Regular legal audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section id="documents" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Legal Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalDocuments.map((document) => (
              <div
                key={document.title}
                className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent-500 text-sm font-semibold">
                    {document.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {document.title}
                </h3>
                <p className="text-text-secondary mb-6">{document.description}</p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-text-secondary text-sm">
                    Last updated: {document.lastUpdated}
                  </span>
                </div>
                <Link
                  href={document.link}
                  className="text-accent-500 hover:text-white transition-colors"
                >
                  Read Document →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Compliance Frameworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework) => (
              <div
                key={framework.name}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222] text-center"
              >
                <div className="text-4xl mb-4">{framework.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {framework.name}
                </h3>
                <p className="text-text-secondary mb-4">{framework.description}</p>
                <div className="bg-[#0D0D0F] p-3 rounded">
                  <span className="text-accent-500 font-semibold">
                    {framework.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Legal Team */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Our Legal Documents?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Our legal team is available to answer questions about our policies,
            compliance status, or any legal matters related to our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Contact Legal Team
            </Link>
            <Link
              href="/compliance"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Compliance Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
