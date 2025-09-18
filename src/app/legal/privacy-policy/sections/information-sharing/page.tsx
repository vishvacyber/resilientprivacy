import Link from 'next/link'

export default function InformationSharingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Information <span className="text-accent-500">Sharing</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Privacy Policy Section 6: How We Share Your Personal Data
          </p>
          <Link
            href="/legal/privacy-policy"
            className="text-accent-500 hover:text-white underline"
          >
            ← Back to Privacy Policy
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-8 text-text-secondary">
              <div className="bg-green-900/20 border border-green-500/30 p-6 rounded">
                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  🔒 Our Commitment
                </h3>
                <p>
                  <strong>We do not sell personal information.</strong> We only
                  share personal data in limited circumstances as described
                  below, and always in accordance with applicable privacy laws
                  and contractual obligations.
                </p>
              </div>

              {/* When We Share Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  6.1 When We Share Information
                </h2>
                <p className="mb-6">
                  We may share your personal information only in the following
                  limited circumstances:
                </p>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      With Your Consent
                    </h3>
                    <p className="mb-3">
                      We share personal information when you have given us
                      explicit consent to do so, including:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Sharing contact information with event partners for
                        networking
                      </li>
                      <li>
                        Including your information in customer testimonials or
                        success stories
                      </li>
                      <li>
                        Sharing information with third-party integrations you
                        authorize
                      </li>
                      <li>
                        Participating in joint marketing campaigns with partners
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Service Providers and Processors
                    </h3>
                    <p className="mb-3">
                      We share information with trusted service providers who
                      process data on our behalf:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Cloud hosting and infrastructure providers (AWS, Google
                        Cloud)
                      </li>
                      <li>Customer relationship management (CRM) platforms</li>
                      <li>Email marketing and communication services</li>
                      <li>Payment processing and billing services</li>
                      <li>Analytics and business intelligence platforms</li>
                      <li>Customer support and help desk solutions</li>
                      <li>
                        Identity verification and fraud prevention services
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">
                      All service providers are bound by data processing
                      agreements and are prohibited from using your data for
                      their own purposes.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Business Partners
                    </h3>
                    <p className="mb-3">
                      We may share limited information with business partners in
                      specific situations:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Channel partners and resellers for customer referrals
                      </li>
                      <li>
                        Technology integration partners for joint solutions
                      </li>
                      <li>
                        Professional service providers for customer
                        implementations
                      </li>
                      <li>
                        Industry associations for certification and compliance
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">
                      Partner sharing is limited to business contact information
                      and is governed by strict contractual obligations.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Legal Requirements
                    </h3>
                    <p className="mb-3">
                      We may disclose personal information when required by law
                      or to protect our rights:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        In response to valid legal process (subpoenas, court
                        orders)
                      </li>
                      <li>
                        To comply with regulatory investigations and audits
                      </li>
                      <li>
                        To protect against fraud, security threats, or illegal
                        activities
                      </li>
                      <li>To defend our legal rights and interests</li>
                      <li>
                        To protect the safety of our employees, customers, or
                        the public
                      </li>
                      <li>In connection with law enforcement cooperation</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Business Transactions
                    </h3>
                    <p className="mb-3">
                      Personal information may be shared in connection with
                      corporate transactions:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Mergers, acquisitions, or asset sales</li>
                      <li>Bankruptcy or insolvency proceedings</li>
                      <li>
                        Due diligence processes (under strict confidentiality)
                      </li>
                      <li>Corporate restructuring or reorganization</li>
                    </ul>
                    <p className="mt-3 text-sm">
                      In such cases, we will notify you and ensure continued
                      protection of your personal information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Categories of Recipients */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  6.2 Categories of Recipients
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border border-[#333] rounded">
                    <thead>
                      <tr className="bg-[#0D0D0F]">
                        <th className="border border-[#333] p-3 text-left text-white">
                          Category
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          Purpose
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          Data Types
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          Safeguards
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-[#333] p-3">
                          Cloud Providers
                        </td>
                        <td className="border border-[#333] p-3">
                          Hosting & Infrastructure
                        </td>
                        <td className="border border-[#333] p-3">
                          All categories
                        </td>
                        <td className="border border-[#333] p-3">
                          DPA, Encryption, Access Controls
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Payment Processors
                        </td>
                        <td className="border border-[#333] p-3">
                          Transaction Processing
                        </td>
                        <td className="border border-[#333] p-3">
                          Billing Information
                        </td>
                        <td className="border border-[#333] p-3">
                          PCI DSS, Tokenization
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Analytics Providers
                        </td>
                        <td className="border border-[#333] p-3">
                          Service Improvement
                        </td>
                        <td className="border border-[#333] p-3">
                          Usage Data (Anonymized)
                        </td>
                        <td className="border border-[#333] p-3">
                          Data Minimization, Anonymization
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Security Vendors
                        </td>
                        <td className="border border-[#333] p-3">
                          Fraud Prevention
                        </td>
                        <td className="border border-[#333] p-3">
                          Account & Transaction Data
                        </td>
                        <td className="border border-[#333] p-3">
                          Limited Access, Audit Logs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* International Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  6.3 International Sharing
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    Some of our service providers and partners are located
                    outside your country of residence. When we share data
                    internationally, we ensure appropriate safeguards:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong className="text-white">EU-US:</strong> Standard
                      Contractual Clauses (SCCs) and adequacy decisions
                    </li>

                    <li>
                      <strong className="text-white">Global:</strong> Data
                      Processing Agreements with all processors
                    </li>
                    <li>
                      <strong className="text-white">Compliance:</strong>{' '}
                      Regular assessments of international transfer mechanisms
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Sharing Controls */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  6.4 Data Sharing Controls
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Technical Safeguards
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>End-to-end encryption for data in transit</li>
                      <li>Access controls and authentication</li>
                      <li>Data minimization and purpose limitation</li>
                      <li>Audit logging and monitoring</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Contractual Safeguards
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Data Processing Agreements (DPAs)</li>
                      <li>Standard Contractual Clauses</li>
                      <li>Confidentiality and non-disclosure agreements</li>
                      <li>
                        Data security and breach notification requirements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Your Control Over Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  6.5 Your Control Over Sharing
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    You have control over how your information is shared:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong className="text-white">
                        Consent Management:
                      </strong>{' '}
                      Withdraw consent for voluntary sharing at any time
                    </li>
                    <li>
                      <strong className="text-white">
                        Marketing Preferences:
                      </strong>{' '}
                      Opt out of partner marketing communications
                    </li>
                    <li>
                      <strong className="text-white">Data Requests:</strong>{' '}
                      Request information about who we've shared your data with
                    </li>
                    <li>
                      <strong className="text-white">Account Settings:</strong>{' '}
                      Control integration and third-party access permissions
                    </li>
                  </ul>
                </div>
              </div>

              {/* No Sale Policy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  6.6 No Sale Policy
                </h2>
                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">
                    Explicit Commitment
                  </h3>
                  <p className="mb-4">
                    <strong>
                      Resilient Privacy LLC does not sell personal information
                    </strong>{' '}
                    as defined by applicable privacy laws including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>California Consumer Privacy Act (CCPA/CPRA)</li>
                    <li>Virginia Consumer Data Protection Act (VCDPA)</li>
                    <li>Colorado Privacy Act (CPA)</li>
                    <li>Connecticut Data Privacy Act (CTDPA)</li>
                    <li>Utah Consumer Privacy Act (UCPA)</li>
                  </ul>
                  <p className="mt-4">
                    We have never sold personal information and have no plans to
                    do so in the future.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/privacy-policy/sections/use-of-information"
                    className="text-accent-500 hover:text-white underline"
                  >
                    ← Previous: Use of Information
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/international-transfers"
                    className="text-accent-500 hover:text-white underline"
                  >
                    Next: International Transfers →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
