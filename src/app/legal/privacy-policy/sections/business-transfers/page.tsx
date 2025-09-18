import Link from 'next/link'

export default function BusinessTransfersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Business <span className="text-[#8B5CF6]">Transfers</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-4 max-w-4xl mx-auto">
            Data Protection During Corporate Changes
          </p>
          <p className="text-lg text-[#A1A1AA] mb-8 max-w-4xl mx-auto">
            Section 15 of our Privacy Policy
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Link
              href="/legal/privacy-policy"
              className="btn text-lg px-8 py-4"
            >
              Back to Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-8 text-[#A1A1AA]">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  15. Business Transfers
                </h2>

                <div className="space-y-6">
                  <p>
                    In the event of a business transfer, such as a merger,
                    acquisition, sale of assets, or other corporate
                    restructuring, your Personal Data may be transferred to
                    another entity. This section explains how we protect your
                    privacy during such transactions.
                  </p>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-blue-300 font-bold mb-3">
                      🛡️ Our Commitment
                    </h3>
                    <p className="text-blue-300 text-sm">
                      We are committed to ensuring that your Personal Data
                      remains protected during any business transfer. All
                      transfers are conducted in compliance with applicable
                      privacy laws and with appropriate safeguards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Types of Business Transfers
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Mergers and Acquisitions
                        </h4>
                        <p>
                          In the event of a merger or acquisition, your Personal
                          Data may be transferred to the surviving or acquiring
                          entity. Such transfers are subject to strict privacy
                          and security requirements.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Asset Sales
                        </h4>
                        <p>
                          If we sell specific assets or business units, Personal
                          Data related to those assets may be transferred to the
                          purchaser, subject to your consent where required by
                          law.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Corporate Restructuring
                        </h4>
                        <p>
                          During corporate reorganizations, such as spin-offs or
                          divestitures, Personal Data may be transferred to new
                          entities formed as part of the restructuring.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Bankruptcy or Insolvency
                        </h4>
                        <p>
                          In the unlikely event of bankruptcy or insolvency,
                          Personal Data may be transferred as part of the
                          bankruptcy estate, subject to court approval and
                          applicable privacy laws.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Data Protection During Transfers
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Due Diligence Requirements
                        </h4>
                        <p>
                          Before any business transfer, we conduct thorough due
                          diligence to ensure that the receiving entity has
                          appropriate privacy and security practices in place.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Data Protection Agreements
                        </h4>
                        <p>
                          All business transfers involving Personal Data are
                          governed by comprehensive data protection agreements
                          that include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            Commitment to maintain the same level of data
                            protection
                          </li>
                          <li>Security and confidentiality obligations</li>
                          <li>Data breach notification requirements</li>
                          <li>Your rights regarding your Personal Data</li>
                          <li>Procedures for handling privacy complaints</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Security Standards
                        </h4>
                        <p>
                          The receiving entity must maintain security standards
                          that meet or exceed our own, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            Encryption of Personal Data in transit and at rest
                          </li>
                          <li>Access controls and authentication mechanisms</li>
                          <li>Regular security audits and assessments</li>
                          <li>Employee training on data protection</li>
                          <li>
                            Incident response and breach notification procedures
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Your Rights During Transfers
                    </h3>

                    <div className="space-y-4">
                      <p>
                        During any business transfer, you retain all your
                        privacy rights, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Right to be informed about the transfer</li>
                        <li>
                          Right to object to the transfer where permitted by law
                        </li>
                        <li>Right to request deletion of your Personal Data</li>
                        <li>Right to access and correct your Personal Data</li>
                        <li>
                          Right to file complaints with relevant authorities
                        </li>
                      </ul>

                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-green-300 font-bold mb-3">
                          📢 Notification Requirements
                        </h4>
                        <p className="text-green-300 text-sm">
                          We will notify you of any business transfer that
                          affects your Personal Data, including information
                          about the receiving entity and your rights regarding
                          the transfer.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Legal Compliance
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Jurisdiction-Specific Requirements
                        </h4>
                        <p>
                          Business transfers are subject to different legal
                          requirements depending on your location:
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇺🇸 United States
                        </h4>
                        <p>
                          Business transfers are generally permitted under US
                          privacy laws, but we will comply with any
                          state-specific requirements and provide appropriate
                          notice to affected individuals.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇪🇺 European Union (GDPR)
                        </h4>
                        <p>
                          Under the GDPR, business transfers may require
                          additional safeguards and specific consent mechanisms
                          depending on the nature of the transfer.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Continuity of Services
                    </h3>

                    <div className="space-y-4">
                      <p>During any business transfer, we are committed to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Maintaining the continuity of our cybersecurity
                          services
                        </li>
                        <li>Preserving your account and service settings</li>
                        <li>Ensuring uninterrupted access to your data</li>
                        <li>Maintaining the same level of customer support</li>
                        <li>Honoring all existing contracts and agreements</li>
                      </ul>

                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-yellow-300 font-bold mb-3">
                          ⚠️ Service Continuity
                        </h4>
                        <p className="text-yellow-300 text-sm">
                          While we strive to maintain service continuity during
                          business transfers, there may be temporary
                          disruptions. We will provide advance notice of any
                          planned service interruptions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      <p>
                        If you have questions about a business transfer or want
                        to exercise your rights, please contact us:
                      </p>

                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                        <h4 className="text-purple-300 font-bold mb-3">
                          📧 Business Transfer Inquiries
                        </h4>
                        <div className="space-y-2 text-purple-300 text-sm">
                          <p>
                            <strong>Email:</strong> privacy@resilientprivacy.com
                          </p>
                          <p>
                            <strong>Subject Line:</strong> "Business Transfer
                            Inquiry"
                          </p>
                          <p>
                            <strong>Phone:</strong> +1 (469) 666-0131
                          </p>
                          <p>
                            <strong>Response Time:</strong> Within 5 business
                            days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Link
                      href="/legal/privacy-policy"
                      className="btn bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 py-4"
                    >
                      Back to Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
