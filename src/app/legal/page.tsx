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
    
  },
  {
    name: 'CCPA',
    description: 'California Consumer Privacy Act compliance',
    status: 'Compliant',
    
  },
  {
    name: 'COPPA',
    description: 'Children\'s Online Privacy Protection Act',
    status: 'Compliant',
    
  },
  {
    name: 'State Privacy Laws',
    description: 'Virginia, Colorado, Connecticut, Utah privacy laws',
    status: 'Compliant',
    
  },
  {
    name: 'Industry Standards',
    description: 'NIST Privacy Framework and best practices',
    status: 'Following',
    
  },
  {
    name: 'Data Protection',
    description: 'Comprehensive data protection measures',
    status: 'Implemented',
    
  },
]

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      {/* Mobile-Optimized Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Legal & <span className="text-accent-500">Compliance</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Transparency and compliance are fundamental to our business. Access
            our legal documents and learn about our commitment to data
            protection and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="#documents" className="btn text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 min-h-[44px]">
              Legal Documents
            </Link>
            <Link
              href="/compliance"
              className="btn-secondary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 min-h-[44px]"
            >
              Compliance Center
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Legal Overview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
                Our Legal Commitment
              </h2>
              <div className="space-y-4 sm:space-y-6 text-text-secondary">
                <p className="text-sm sm:text-base">
                  At Resilient Privacy, Inc., we believe that transparency and legal
                  compliance are essential foundations for building trust with
                  our customers and partners. As a Delaware C Corporation, we are committed to maintaining
                  compliance with applicable laws and regulations
                  across all aspects of our business operations.
                </p>
                <p className="text-sm sm:text-base">
                  Our legal framework is designed to protect both our customers
                  and our organization while ensuring that we operate within the
                  bounds of applicable laws and regulations. We regularly review
                  and update our legal documents to reflect changes in laws,
                  regulations, and industry best practices.
                </p>
                <p className="text-sm sm:text-base">
                  We understand that legal compliance is not just about meeting
                  minimum requirements—it&apos;s about demonstrating our
                  commitment to ethical business practices, data protection, and
                  customer privacy. We follow industry best practices and applicable legal requirements
                  to ensure that our policies and procedures are aligned with our security practices.
                </p>
                <p className="text-sm sm:text-base">
                  We encourage our customers, partners, and stakeholders to
                  review our legal documents and reach out to us with any
                  questions or concerns. We are committed to being transparent
                  about our practices and responsive to inquiries about our
                  legal and compliance posture.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">Legal & Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">Legal compliance oversight</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Privacy policy management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">Data protection compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">
                    Regulatory compliance monitoring
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-text-secondary">Legal document maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Legal Documents */}
      <section id="documents" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16">
            Legal Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {legalDocuments.map((document) => (
              <div
                key={document.title}
                className="bg-[#0D0D0F] p-4 sm:p-6 lg:p-8 rounded-lg border border-[#222] hover:border-accent-500 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-accent-500 text-xs sm:text-sm font-semibold">
                    {document.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  {document.title}
                </h3>
                <p className="text-text-secondary mb-4 sm:mb-6 text-sm sm:text-base">{document.description}</p>
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="text-text-secondary text-xs sm:text-sm">
                    Last updated: {document.lastUpdated}
                  </span>
                </div>
                <Link
                  href={document.link}
                  className="text-accent-500 hover:text-white transition-colors text-sm sm:text-base"
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
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Contact Legal Team
            </Link>
            <Link
              href="/compliance"
              className="btn-secondary text-lg px-8 py-4"
            >
              Compliance Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
