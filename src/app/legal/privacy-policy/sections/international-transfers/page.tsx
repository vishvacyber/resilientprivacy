import Link from 'next/link'

export default function InternationalTransfersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            International <span className="text-[#8B5CF6]">Data Transfers</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-4 max-w-4xl mx-auto">
            Cross-Border Data Protection and Transfer Safeguards
          </p>
          <p className="text-lg text-[#A1A1AA] mb-8 max-w-4xl mx-auto">
            Section 7 of our Privacy Policy
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
                  7. International Data Transfers
                </h2>

                <div className="space-y-6">
                  <p>
                    As a global cybersecurity company, Resilient Privacy
                    operates across multiple jurisdictions and may transfer
                    Personal Data across international borders. We are committed
                    to ensuring that all international transfers comply with
                    applicable data protection laws and provide adequate
                    protection for your Personal Data.
                  </p>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-blue-300 font-bold mb-4">
                      🌍 Global Operations
                    </h3>
                    <p className="text-blue-300 text-sm">
                      Our services are provided globally, and your Personal Data
                      may be processed in or transferred to countries outside
                      your residence, including the United States and other
                      jurisdictions where we operate.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Transfer Mechanisms and Safeguards
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Adequacy Decisions
                        </h4>
                        <p>
                          We rely on adequacy decisions by relevant data
                          protection authorities where available, ensuring that
                          recipient countries provide an adequate level of data
                          protection.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Standard Contractual Clauses (SCCs)
                        </h4>
                        <p>
                          For transfers from the European Economic Area (EEA) to
                          countries without adequacy decisions, we implement
                          Standard Contractual Clauses approved by the European
                          Commission to ensure appropriate safeguards.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Binding Corporate Rules (BCRs)
                        </h4>
                        <p>
                          We maintain Binding Corporate Rules for intra-group
                          transfers, ensuring consistent data protection
                          standards across all Resilient Privacy entities
                          worldwide.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Certification Schemes
                        </h4>
                        <p>
                          We participate in recognized certification schemes and
                          codes of conduct that provide appropriate safeguards
                          for international data transfers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Jurisdiction-Specific Transfer Requirements
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇪🇺 European Union (GDPR)
                        </h4>
                        <p>
                          For transfers from the EU/EEA, we ensure compliance
                          with Chapter V of the GDPR, implementing appropriate
                          safeguards such as SCCs, BCRs, or adequacy decisions.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇺🇸 United States
                        </h4>
                        <p>
                          For transfers to the United States, we ensure
                          compliance with applicable state privacy laws and
                          implement additional safeguards where required.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Technical and Organizational Safeguards
                    </h3>

                    <div className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>Encryption:</strong> All Personal Data is
                          encrypted in transit and at rest using
                          industry-standard encryption protocols
                        </li>
                        <li>
                          <strong>Access Controls:</strong> Strict access
                          controls and authentication mechanisms are implemented
                          across all systems
                        </li>
                        <li>
                          <strong>Data Minimization:</strong> We transfer only
                          the minimum Personal Data necessary for the specified
                          purpose
                        </li>
                        <li>
                          <strong>Regular Audits:</strong> We conduct regular
                          security audits and assessments of our international
                          transfer practices
                        </li>
                        <li>
                          <strong>Incident Response:</strong> Comprehensive
                          incident response procedures are in place for all
                          jurisdictions
                        </li>
                        <li>
                          <strong>Training:</strong> All personnel handling
                          international transfers receive regular privacy and
                          security training
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Your Rights Regarding International Transfers
                    </h3>

                    <div className="space-y-4">
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Request information about the countries where your
                          Personal Data is transferred
                        </li>
                        <li>
                          Obtain details about the safeguards implemented for
                          international transfers
                        </li>
                        <li>
                          Request a copy of the transfer agreements where
                          applicable
                        </li>
                        <li>
                          Object to specific international transfers where
                          permitted by law
                        </li>
                        <li>
                          Request the return or deletion of your Personal Data
                          from specific jurisdictions
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                    <h4 className="text-yellow-300 font-bold mb-3">
                      ⚠️ Important Notice
                    </h4>
                    <p className="text-yellow-300 text-sm">
                      By using our services, you acknowledge that your Personal
                      Data may be transferred internationally. We will always
                      ensure that such transfers are conducted in compliance
                      with applicable laws and with appropriate safeguards in
                      place to protect your privacy rights.
                    </p>
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
