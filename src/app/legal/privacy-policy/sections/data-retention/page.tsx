import Link from 'next/link'

export default function DataRetentionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Data <span className="text-accent-500">Retention</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Privacy Policy Section 13: How Long We Keep Your Personal Data
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
              <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  ⏰ Retention Principle
                </h3>
                <p>
                  We retain personal data only as long as necessary to fulfill
                  the purposes for which it was collected, comply with legal
                  obligations, resolve disputes, and enforce our agreements.
                </p>
              </div>

              {/* Retention Criteria */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  13.1 Retention Criteria
                </h2>
                <p className="mb-6">
                  Our data retention periods are determined based on the
                  following criteria:
                </p>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Legal Requirements
                    </h3>
                    <p className="mb-3">
                      We retain data to comply with applicable laws and
                      regulations:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">Tax Records:</strong> 7
                        years (US federal requirement)
                      </li>
                      <li>
                        <strong className="text-white">
                          Employment Records:
                        </strong>{' '}
                        7 years after termination
                      </li>
                      <li>
                        <strong className="text-white">
                          Financial Transactions:
                        </strong>{' '}
                        7 years for audit purposes
                      </li>
                      <li>
                        <strong className="text-white">Security Logs:</strong> 2
                        years for incident investigation
                      </li>
                      <li>
                        <strong className="text-white">
                          Compliance Documentation:
                        </strong>{' '}
                        As required by specific regulations
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Business Purposes
                    </h3>
                    <p className="mb-3">
                      We retain data for legitimate business needs:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Service Delivery:
                        </strong>{' '}
                        Duration of service relationship plus 3 years
                      </li>
                      <li>
                        <strong className="text-white">
                          Customer Support:
                        </strong>{' '}
                        5 years after last interaction
                      </li>
                      <li>
                        <strong className="text-white">
                          Contract Management:
                        </strong>{' '}
                        Duration of contract plus 7 years
                      </li>
                      <li>
                        <strong className="text-white">
                          Quality Assurance:
                        </strong>{' '}
                        3 years for service improvement
                      </li>
                      <li>
                        <strong className="text-white">
                          Business Development:
                        </strong>{' '}
                        Until consent is withdrawn
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      User Control
                    </h3>
                    <p className="mb-3">
                      We respect user preferences for data retention:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Account Deletion:
                        </strong>{' '}
                        Immediate removal upon request (with legal exceptions)
                      </li>
                      <li>
                        <strong className="text-white">
                          Consent Withdrawal:
                        </strong>{' '}
                        Marketing data deleted within 30 days
                      </li>
                      <li>
                        <strong className="text-white">
                          Inactive Accounts:
                        </strong>{' '}
                        Automatic deletion after 5 years of inactivity
                      </li>
                      <li>
                        <strong className="text-white">
                          Data Portability:
                        </strong>{' '}
                        Export available before deletion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Retention Schedule */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  13.2 Retention Schedule
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border border-[#333] rounded">
                    <thead>
                      <tr className="bg-[#0D0D0F]">
                        <th className="border border-[#333] p-3 text-left text-white">
                          Data Category
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          Retention Period
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          Legal Basis
                        </th>
                        <th className="border border-[#333] p-3 text-left text-white">
                          Deletion Trigger
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-[#333] p-3">
                          Customer Account Data
                        </td>
                        <td className="border border-[#333] p-3">
                          Active + 3 years
                        </td>
                        <td className="border border-[#333] p-3">
                          Contract Performance
                        </td>
                        <td className="border border-[#333] p-3">
                          Account closure + 3 years
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Financial Records
                        </td>
                        <td className="border border-[#333] p-3">7 years</td>
                        <td className="border border-[#333] p-3">
                          Legal Obligation
                        </td>
                        <td className="border border-[#333] p-3">
                          Fixed 7-year period
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Marketing Communications
                        </td>
                        <td className="border border-[#333] p-3">
                          Until withdrawal
                        </td>
                        <td className="border border-[#333] p-3">Consent</td>
                        <td className="border border-[#333] p-3">
                          Consent withdrawal
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Website Analytics
                        </td>
                        <td className="border border-[#333] p-3">26 months</td>
                        <td className="border border-[#333] p-3">
                          Legitimate Interest
                        </td>
                        <td className="border border-[#333] p-3">
                          Automatic deletion
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Security Logs
                        </td>
                        <td className="border border-[#333] p-3">2 years</td>
                        <td className="border border-[#333] p-3">
                          Legitimate Interest
                        </td>
                        <td className="border border-[#333] p-3">
                          Automatic deletion
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Support Tickets
                        </td>
                        <td className="border border-[#333] p-3">5 years</td>
                        <td className="border border-[#333] p-3">
                          Contract Performance
                        </td>
                        <td className="border border-[#333] p-3">
                          Automatic deletion
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Job Applications
                        </td>
                        <td className="border border-[#333] p-3">2 years</td>
                        <td className="border border-[#333] p-3">
                          Legal Obligation
                        </td>
                        <td className="border border-[#333] p-3">
                          Automatic deletion
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#333] p-3">
                          Backup Data
                        </td>
                        <td className="border border-[#333] p-3">
                          Same as primary
                        </td>
                        <td className="border border-[#333] p-3">Various</td>
                        <td className="border border-[#333] p-3">
                          Synchronized deletion
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Automated Deletion */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  13.3 Automated Deletion Processes
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Systematic Deletion
                    </h3>
                    <p className="mb-3">
                      We have implemented automated systems to ensure timely
                      data deletion:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">Daily Scans:</strong>{' '}
                        Automated identification of data due for deletion
                      </li>
                      <li>
                        <strong className="text-white">Grace Periods:</strong>{' '}
                        30-day grace period before permanent deletion
                      </li>
                      <li>
                        <strong className="text-white">Secure Deletion:</strong>{' '}
                        Cryptographic erasure and overwriting
                      </li>
                      <li>
                        <strong className="text-white">Backup Purging:</strong>{' '}
                        Synchronized deletion from all backup systems
                      </li>
                      <li>
                        <strong className="text-white">Audit Trails:</strong>{' '}
                        Logging of all deletion activities
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Deletion Verification
                    </h3>
                    <p className="mb-3">
                      We verify successful deletion through:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Multi-System Checks:
                        </strong>{' '}
                        Verification across all storage systems
                      </li>
                      <li>
                        <strong className="text-white">
                          Cryptographic Verification:
                        </strong>{' '}
                        Confirmation of secure erasure
                      </li>
                      <li>
                        <strong className="text-white">Regular Audits:</strong>{' '}
                        Quarterly reviews of deletion processes
                      </li>
                      <li>
                        <strong className="text-white">
                          Exception Handling:
                        </strong>{' '}
                        Manual review of deletion failures
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Legal Hold and Exceptions */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  13.4 Legal Hold and Exceptions
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Legal Hold Situations
                    </h3>
                    <p className="mb-3">
                      We may suspend normal deletion processes when:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">Litigation:</strong>{' '}
                        Pending or anticipated legal proceedings
                      </li>
                      <li>
                        <strong className="text-white">
                          Regulatory Investigation:
                        </strong>{' '}
                        Government or regulatory inquiries
                      </li>
                      <li>
                        <strong className="text-white">
                          Dispute Resolution:
                        </strong>{' '}
                        Customer or business disputes
                      </li>
                      <li>
                        <strong className="text-white">
                          Security Incidents:
                        </strong>{' '}
                        Active incident investigation
                      </li>
                      <li>
                        <strong className="text-white">
                          Audit Requirements:
                        </strong>{' '}
                        Compliance audit preservation
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Extended Retention
                    </h3>
                    <p className="mb-3">
                      Some data may be retained longer for specific purposes:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Aggregated Analytics:
                        </strong>{' '}
                        Anonymized data for research (indefinite)
                      </li>
                      <li>
                        <strong className="text-white">
                          Security Intelligence:
                        </strong>{' '}
                        Threat indicators (5 years)
                      </li>
                      <li>
                        <strong className="text-white">
                          Compliance Records:
                        </strong>{' '}
                        As required by specific regulations
                      </li>
                      <li>
                        <strong className="text-white">
                          Archived Communications:
                        </strong>{' '}
                        Business-critical correspondence (10 years)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* User Rights and Deletion */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  13.5 User Rights and Deletion
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Erasure
                    </h3>
                    <p className="mb-3">
                      You can request deletion of your personal data when:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        The data is no longer necessary for the original purpose
                      </li>
                      <li>
                        You withdraw consent and there's no other legal ground
                      </li>
                      <li>
                        You object to processing and there are no overriding
                        legitimate grounds
                      </li>
                      <li>The data has been unlawfully processed</li>
                      <li>Deletion is required for legal compliance</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Deletion Process
                    </h3>
                    <p className="mb-3">When you request data deletion:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Immediate Response:
                        </strong>{' '}
                        Acknowledgment within 24 hours
                      </li>
                      <li>
                        <strong className="text-white">Legal Review:</strong>{' '}
                        Assessment of deletion obligations and exceptions
                      </li>
                      <li>
                        <strong className="text-white">Secure Deletion:</strong>{' '}
                        Complete removal from all systems within 30 days
                      </li>
                      <li>
                        <strong className="text-white">Confirmation:</strong>{' '}
                        Written confirmation of successful deletion
                      </li>
                      <li>
                        <strong className="text-white">
                          Exception Notice:
                        </strong>{' '}
                        Explanation if any data must be retained
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Minimization */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  13.6 Data Minimization
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    We actively minimize data retention through:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong className="text-white">Regular Reviews:</strong>{' '}
                      Quarterly assessment of data necessity
                    </li>
                    <li>
                      <strong className="text-white">
                        Purpose Limitation:
                      </strong>{' '}
                      Deletion when original purpose is fulfilled
                    </li>
                    <li>
                      <strong className="text-white">Anonymization:</strong>{' '}
                      Converting personal data to anonymous data when possible
                    </li>
                    <li>
                      <strong className="text-white">Aggregation:</strong> Using
                      statistical summaries instead of individual records
                    </li>
                    <li>
                      <strong className="text-white">
                        Progressive Deletion:
                      </strong>{' '}
                      Removing detailed data while retaining necessary summaries
                    </li>
                  </ul>
                </div>
              </div>

              {/* Retention Policy Updates */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  13.7 Retention Policy Updates
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    We regularly review and update our retention policies to
                    ensure:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong className="text-white">Legal Compliance:</strong>{' '}
                      Alignment with evolving privacy laws
                    </li>
                    <li>
                      <strong className="text-white">Business Needs:</strong>{' '}
                      Adaptation to changing business requirements
                    </li>
                    <li>
                      <strong className="text-white">
                        Technology Changes:
                      </strong>{' '}
                      Updates for new systems and capabilities
                    </li>
                    <li>
                      <strong className="text-white">Best Practices:</strong>{' '}
                      Incorporation of industry standards and guidelines
                    </li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Material changes to retention periods will be communicated
                    to affected individuals in accordance with applicable law.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/cookie-policy"
                    className="text-accent-500 hover:text-white underline"
                  >
                    ← Previous: Cookies & Tracking
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/third-party-services"
                    className="text-accent-500 hover:text-white underline"
                  >
                    Next: Third-Party Services →
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
