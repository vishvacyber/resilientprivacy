import Link from 'next/link'

export default function YourRightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your <span className="text-accent-500">Rights</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Privacy Policy Section 9: Individual Privacy Rights and Controls
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
                You have important rights regarding your personal data. This
                section outlines your privacy rights under various applicable
                laws and how to exercise them.
              </p>

              {/* GDPR Rights (EU Residents) */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  9.1 GDPR Rights (EU Residents)
                </h2>
                <p className="mb-4">
                  Under the General Data Protection Regulation, you have the
                  following rights:
                </p>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right of Access (Article 15)
                    </h3>
                    <p className="mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Obtain confirmation whether we process your personal
                        data
                      </li>
                      <li>Access your personal data and receive a copy</li>
                      <li>
                        Receive information about processing purposes and legal
                        basis
                      </li>
                      <li>Know the recipients or categories of recipients</li>
                      <li>Understand retention periods or criteria</li>
                      <li>Learn about your other rights under GDPR</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Rectification (Article 16)
                    </h3>
                    <p className="mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Correct inaccurate personal data</li>
                      <li>Complete incomplete personal data</li>
                      <li>
                        Have corrections communicated to recipients where
                        feasible
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Erasure/Right to be Forgotten (Article 17)
                    </h3>
                    <p className="mb-3">
                      You have the right to have your personal data erased when:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Personal data is no longer necessary for the original
                        purposes
                      </li>
                      <li>
                        You withdraw consent and there's no other legal ground
                      </li>
                      <li>
                        You object to processing and there are no overriding
                        legitimate grounds
                      </li>
                      <li>Personal data has been unlawfully processed</li>
                      <li>
                        Erasure is required for compliance with legal
                        obligations
                      </li>
                    </ul>
                    <p className="mt-3 text-sm bg-yellow-900/20 border border-yellow-500/30 p-3 rounded">
                      <strong className="text-yellow-400">Note:</strong> This
                      right may be limited where processing is necessary for
                      legal compliance, public interest, or legitimate interests
                      that override your interests.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Restrict Processing (Article 18)
                    </h3>
                    <p className="mb-3">
                      You can request restriction of processing when:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>You contest the accuracy of personal data</li>
                      <li>
                        Processing is unlawful but you prefer restriction over
                        erasure
                      </li>
                      <li>
                        We no longer need the data but you need it for legal
                        claims
                      </li>
                      <li>
                        You've objected to processing pending verification of
                        legitimate grounds
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Data Portability (Article 20)
                    </h3>
                    <p className="mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Receive your personal data in a structured, commonly
                        used format
                      </li>
                      <li>
                        Transmit data to another controller where technically
                        feasible
                      </li>
                      <li>
                        Have data transmitted directly between controllers where
                        possible
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">
                      This right applies when processing is based on consent or
                      contract and is carried out by automated means.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Object (Article 21)
                    </h3>
                    <p className="mb-3">
                      You have the right to object to processing:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Based on legitimate interests or public interest</li>
                      <li>For direct marketing purposes (absolute right)</li>
                      <li>
                        For scientific, historical, or statistical purposes
                        (with exceptions)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Rights Related to Automated Decision-Making (Article 22)
                    </h3>
                    <p className="mb-3">
                      You have the right not to be subject to decisions based
                      solely on automated processing, including profiling, that
                      produce legal effects or significantly affect you.
                    </p>
                  </div>
                </div>
              </div>

              {/* CCPA/CPRA Rights (California Residents) */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  9.2 CCPA/CPRA Rights (California Residents)
                </h2>
                <p className="mb-4">
                  Under California privacy laws, you have the following rights:
                </p>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Know
                    </h3>
                    <p className="mb-3">
                      You have the right to request information about:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Categories of personal information collected</li>
                      <li>
                        Categories of sources from which information is
                        collected
                      </li>
                      <li>Business or commercial purposes for collection</li>
                      <li>
                        Categories of third parties with whom information is
                        shared
                      </li>
                      <li>
                        Specific pieces of personal information collected about
                        you
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Delete
                    </h3>
                    <p className="mb-3">
                      You have the right to request deletion of personal
                      information, subject to certain exceptions for:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Completing transactions or providing requested services
                      </li>
                      <li>Security purposes and fraud prevention</li>
                      <li>Legal compliance obligations</li>
                      <li>
                        Internal uses reasonably aligned with your expectations
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Correct (CPRA)
                    </h3>
                    <p>
                      You have the right to request correction of inaccurate
                      personal information.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Opt-Out
                    </h3>
                    <p className="mb-3">You have the right to opt out of:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Sale of personal information</li>
                      <li>
                        Sharing for cross-context behavioral advertising (CPRA)
                      </li>
                      <li>
                        Processing of sensitive personal information beyond
                        necessary purposes
                      </li>
                    </ul>
                    <p className="mt-3 text-sm bg-green-900/20 border border-green-500/30 p-3 rounded">
                      <strong className="text-green-400">Our Practice:</strong>{' '}
                      We do not sell or share personal information as defined by
                      California law.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Limit Use of Sensitive Personal Information
                    </h3>
                    <p>
                      Under CPRA, you can limit the use and disclosure of
                      sensitive personal information to what is necessary to
                      perform services or provide goods reasonably expected by
                      you.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Right to Non-Discrimination
                    </h3>
                    <p>
                      We will not discriminate against you for exercising your
                      privacy rights by:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Denying goods or services</li>
                      <li>Charging different prices or rates</li>
                      <li>Providing different levels of quality</li>
                      <li>
                        Suggesting you'll receive different pricing or service
                        levels
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Other State Rights */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  9.3 Other US State Rights
                </h2>
                <p className="mb-4">
                  Residents of Virginia, Colorado, Connecticut, and Utah have
                  similar rights under their respective state privacy laws:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Virginia (VCDPA)
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Right to access, correct, delete, and portability</li>
                      <li>
                        Right to opt out of targeted advertising and sales
                      </li>
                      <li>
                        Right to opt out of profiling for legal/significant
                        effects
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Colorado (CPA)
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Right to access, correct, delete, and portability</li>
                      <li>
                        Right to opt out of targeted advertising and sales
                      </li>
                      <li>Right to opt out of profiling</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Connecticut (CTDPA)
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Right to access, correct, delete, and portability</li>
                      <li>
                        Right to opt out of targeted advertising and sales
                      </li>
                      <li>Right to opt out of profiling</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Utah (UCPA)
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Right to access, delete, and portability</li>
                      <li>
                        Right to opt out of targeted advertising and sales
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How to Exercise Rights */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  9.4 How to Exercise Your Rights
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Submitting Requests
                    </h3>
                    <p className="mb-3">
                      You can exercise your privacy rights by:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Emailing us at:{' '}
                        <span className="text-accent-500">
                          privacy@resilientprivacy.com
                        </span>
                      </li>
                      <li>Using our online privacy request form</li>
                      <li>Calling our privacy hotline: +1 (469) 666-0131</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Identity Verification
                    </h3>
                    <p className="mb-3">
                      To protect your privacy, we will verify your identity
                      before processing requests. We may ask for:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Email address associated with your account</li>
                      <li>Account information or recent transaction details</li>
                      <li>Government-issued ID for sensitive requests</li>
                      <li>Additional verification for high-risk requests</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Response Timeframes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          GDPR (EU)
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• Standard: 1 month</li>
                          <li>• Complex requests: Up to 3 months</li>
                          <li>• Acknowledgment: Within 72 hours</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          CCPA/CPRA (California)
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• Standard: 45 days</li>
                          <li>• Extension: Additional 45 days if needed</li>
                          <li>• Acknowledgment: Within 10 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Authorized Agents
                    </h3>
                    <p className="mb-3">
                      You may designate an authorized agent to submit requests
                      on your behalf. The agent must:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Provide written authorization from you</li>
                      <li>Verify their own identity</li>
                      <li>
                        Provide proof of authorization (power of attorney or
                        signed permission)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Appeals and Complaints */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  9.5 Appeals and Complaints
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Internal Appeals Process
                    </h3>
                    <p className="mb-3">
                      If you're not satisfied with our response to your privacy
                      request, you can:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Submit an appeal to: appeals@resilientprivacy.com</li>
                      <li>Include your original request reference number</li>
                      <li>Explain the reason for your appeal</li>
                      <li>We will respond to appeals within 30 days</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Regulatory Complaints
                    </h3>
                    <p className="mb-3">
                      You also have the right to lodge complaints with relevant
                      supervisory authorities:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">EU/EEA:</strong> Your
                        local Data Protection Authority
                      </li>
                      <li>
                        <strong className="text-white">California:</strong>{' '}
                        California Attorney General's Office
                      </li>
                      <li>
                        <strong className="text-white">Other States:</strong>{' '}
                        Respective state attorney general offices
                      </li>
                    </ul>
                  </div>
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
                    href="/legal/privacy-policy/sections/data-security"
                    className="text-accent-500 hover:text-white underline"
                  >
                    Next: Data Security →
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
