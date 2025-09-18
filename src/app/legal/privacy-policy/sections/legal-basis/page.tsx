import Link from 'next/link'

export default function LegalBasisPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Legal Basis for <span className="text-accent-500">Processing</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Privacy Policy Section 4: Lawful Grounds for Data Processing
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
              <p className="mb-8">
                We process personal data only when we have a valid legal basis
                under applicable privacy laws. This section outlines the lawful
                grounds we rely on for different types of data processing
                activities.
              </p>

              {/* GDPR Legal Bases */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  4.1 GDPR Legal Bases (EU Residents)
                </h2>
                <p className="mb-4">
                  Under the General Data Protection Regulation (GDPR), we
                  process personal data based on the following lawful bases
                  under Article 6:
                </p>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Article 6(1)(a) - Consent
                    </h3>
                    <p className="mb-3">We rely on consent for:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Non-essential cookies and tracking technologies</li>
                      <li>Optional data collection for service enhancement</li>
                      <li>
                        Sharing information with third-party partners (where
                        required)
                      </li>
                      <li>
                        Processing data for research and development purposes
                      </li>
                    </ul>
                    <p className="mt-3 text-sm bg-blue-900/20 border border-blue-500/30 p-3 rounded">
                      <strong className="text-blue-400">Your Rights:</strong>{' '}
                      You can withdraw consent at any time without affecting the
                      lawfulness of processing based on consent before
                      withdrawal.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Article 6(1)(b) - Contract Performance
                    </h3>
                    <p className="mb-3">We process data necessary for:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Providing cybersecurity services and support</li>
                      <li>Processing payments and billing</li>
                      <li>Account creation and management</li>
                      <li>Service delivery and customization</li>
                      <li>Fulfilling contractual obligations</li>
                      <li>Taking pre-contractual steps at your request</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Article 6(1)(c) - Legal Obligation
                    </h3>
                    <p className="mb-3">We process data to comply with:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Tax and accounting obligations</li>
                      <li>Anti-money laundering (AML) requirements</li>
                      <li>Data breach notification requirements</li>
                      <li>Regulatory reporting obligations</li>
                      <li>Court orders and legal proceedings</li>
                      <li>Export control and trade compliance laws</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Article 6(1)(f) - Legitimate Interest
                    </h3>
                    <p className="mb-3">We rely on legitimate interest for:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Website security and fraud prevention</li>
                      <li>Business development and lead generation</li>
                      <li>Internal analytics and service improvement</li>
                      <li>Direct marketing to existing customers</li>
                      <li>Network and information security</li>
                      <li>Protecting our legal rights and interests</li>
                    </ul>
                    <p className="mt-3 text-sm bg-yellow-900/20 border border-yellow-500/30 p-3 rounded">
                      <strong className="text-yellow-400">
                        Balancing Test:
                      </strong>{' '}
                      We conduct legitimate interest assessments to ensure our
                      interests don't override your fundamental rights and
                      freedoms.
                    </p>
                  </div>
                </div>
              </div>

              {/* CCPA/CPRA Legal Framework */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  4.2 CCPA/CPRA Framework (California Residents)
                </h2>
                <p className="mb-4">
                  Under California privacy laws, we process personal information
                  for the following business and commercial purposes:
                </p>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Business Purposes
                    </h3>
                    <p className="mb-3">
                      We process personal information for legitimate business
                      purposes including:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Performing services reasonably expected by consumers
                      </li>
                      <li>Providing customer service and technical support</li>
                      <li>Processing transactions and managing accounts</li>
                      <li>
                        Detecting and preventing fraud, security incidents, and
                        illegal activities
                      </li>
                      <li>Debugging and repairing system functionality</li>
                      <li>Internal research for technological development</li>
                      <li>Quality and safety maintenance and verification</li>
                      <li>Compliance with legal obligations</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Commercial Purposes
                    </h3>
                    <p className="mb-3">Limited commercial use includes:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Marketing our cybersecurity services to existing
                        customers
                      </li>
                      <li>Business development and lead qualification</li>
                      <li>Market research and competitive analysis</li>
                      <li>Service improvement and product development</li>
                    </ul>
                    <p className="mt-3 text-sm bg-green-900/20 border border-green-500/30 p-3 rounded">
                      <strong className="text-green-400">
                        No Sale Policy:
                      </strong>{' '}
                      We do not sell personal information as defined by
                      CCPA/CPRA.
                    </p>
                  </div>
                </div>
              </div>

              {/* Processing Activities Matrix */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  4.3 Processing Activities Matrix
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-[#333] rounded">
                    <thead>
                      <tr className="bg-[#0D0D0F]">
                        <th className="border border-[#333] p-3 text-left text-white">
                          Processing Activity
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          GDPR Basis
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          CCPA Purpose
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          Retention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-[#333] p-3">
                          Service Delivery
                        </td>
                        <td className="border border-[#333] p-3">
                          Contract Performance
                        </td>
                        <td className="border border-[#333] p-3">
                          Business Purpose
                        </td>
                        <td className="border border-[#333] p-3">
                          Contract + 7 years
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Marketing Communications
                        </td>
                        <td className="border border-[#333] p-3">Consent</td>
                        <td className="border border-[#333] p-3">
                          Commercial Purpose
                        </td>
                        <td className="border border-[#333] p-3">
                          Until withdrawal
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Security Monitoring
                        </td>
                        <td className="border border-[#333] p-3">
                          Legitimate Interest
                        </td>
                        <td className="border border-[#333] p-3">
                          Business Purpose
                        </td>
                        <td className="border border-[#333] p-3">2 years</td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Legal Compliance
                        </td>
                        <td className="border border-[#333] p-3">
                          Legal Obligation
                        </td>
                        <td className="border border-[#333] p-3">
                          Business Purpose
                        </td>
                        <td className="border border-[#333] p-3">
                          As required by law
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Website Analytics
                        </td>
                        <td className="border border-[#333] p-3">
                          Legitimate Interest
                        </td>
                        <td className="border border-[#333] p-3">
                          Business Purpose
                        </td>
                        <td className="border border-[#333] p-3">26 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Changes to Legal Basis */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4.6 Changes to Legal Basis
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    If we need to change the legal basis for processing your
                    personal data, we will:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Notify you in advance of the change</li>
                    <li>
                      Explain the new legal basis and reasons for the change
                    </li>
                    <li>Inform you of your rights under the new legal basis</li>
                    <li>Obtain new consent if required by law</li>
                    <li>Provide opt-out mechanisms where applicable</li>
                  </ul>
                </div>
              </div>

              {/* Contact for Legal Basis Questions */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4.7 Questions About Legal Basis
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    If you have questions about the legal basis for processing
                    your personal data, please contact:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-white">Privacy Team:</strong>{' '}
                      privacy@resilientprivacy.com
                    </li>
                    <li>
                      <strong className="text-white">
                        Data Protection Officer (EU):
                      </strong>{' '}
                      dpo@resilientprivacy.com
                    </li>
                    <li>
                      <strong className="text-white">Legal Department:</strong>{' '}
                      legal@resilientprivacy.com
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/privacy-policy/sections/information-collection"
                    className="text-accent-500 hover:text-white underline"
                  >
                    ← Previous: Information Collection
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/use-of-information"
                    className="text-accent-500 hover:text-white underline"
                  >
                    Next: Use of Information →
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
