import Link from 'next/link'

export default function GoverningLawPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Governing <span className="text-accent-500">Law</span>
          </h1>
          <p className="text-xl text-text-secondary mb-4 max-w-4xl mx-auto">
            Legal Jurisdiction and Dispute Resolution
          </p>
          <p className="text-lg text-text-secondary mb-8 max-w-4xl mx-auto">
            Section 20 of our Privacy Policy
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
            <div className="space-y-8 text-text-secondary">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  20. Governing Law and Dispute Resolution
                </h2>

                <div className="space-y-6">
                  <p>
                    This Privacy Policy and any disputes arising from it are
                    governed by specific legal frameworks. This section outlines
                    the applicable laws, jurisdiction, and dispute resolution
                    procedures.
                  </p>

                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-purple-300 font-bold mb-3">
                      ⚖ Legal Framework
                    </h3>
                    <p className="text-purple-300 text-sm">
                      This Privacy Policy is governed by the laws of Delaware,
                      United States, while also complying with applicable local
                      privacy laws in your jurisdiction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Primary Governing Law
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Delaware Law
                        </h4>
                        <p>
                          This Privacy Policy and any disputes arising from it
                          shall be governed by and construed in accordance with
                          the laws of the State of Delaware, United States,
                          without regard to conflict of law principles.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Federal Law
                        </h4>
                        <p>
                          Where applicable, federal laws of the United States,
                          including but not limited to federal privacy and
                          cybersecurity laws, shall also apply.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          International Law
                        </h4>
                        <p>
                          For international operations and cross-border data
                          transfers, applicable international treaties and
                          agreements may also govern certain aspects of this
                          Privacy Policy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Jurisdiction-Specific Considerations
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          🇺🇸 United States
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-white font-medium">
                              State Laws
                            </h5>
                            <p className="text-sm">
                              While Delaware law governs this policy,
                              state-specific privacy laws (such as CCPA, VCDPA,
                              CPA) may provide additional rights and remedies
                              for residents of those states.
                            </p>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">
                              Federal Courts
                            </h5>
                            <p className="text-sm">
                              Federal courts may have jurisdiction over certain
                              privacy-related disputes, particularly those
                              involving federal laws or interstate commerce.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          🇪🇺 European Union
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-white font-medium">
                              GDPR Supremacy
                            </h5>
                            <p className="text-sm">
                              For EU residents, the GDPR provides specific
                              rights and remedies that cannot be limited by
                              contractual choice of law provisions.
                            </p>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">
                              Local Authorities
                            </h5>
                            <p className="text-sm">
                              EU data protection authorities have jurisdiction
                              over GDPR compliance issues, regardless of the
                              governing law clause.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Dispute Resolution
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Arbitration
                        </h4>
                        <p>
                          Any disputes arising from this Privacy Policy shall be
                          resolved through binding arbitration in Delaware, USA,
                          in accordance with the rules of the American
                          Arbitration Association (AAA).
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Arbitration Exceptions
                        </h4>
                        <p>Arbitration may not be required for:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>Small claims court proceedings</li>
                          <li>
                            Regulatory complaints to data protection authorities
                          </li>
                          <li>Injunctive relief proceedings</li>
                          <li>
                            Claims that cannot be arbitrated under applicable
                            law
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Class Action Waiver
                        </h4>
                        <p>
                          You agree to resolve disputes individually and waive
                          any right to participate in class action lawsuits or
                          class-wide arbitration.
                        </p>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                        <h4 className="text-blue-300 font-bold mb-3">
                          🤝 Alternative Dispute Resolution
                        </h4>
                        <p className="text-blue-300 text-sm">
                          Before initiating formal proceedings, we encourage you
                          to contact us directly to resolve any privacy-related
                          concerns through informal dispute resolution.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Regulatory Complaints
                    </h3>

                    <div className="space-y-4">
                      <p>
                        You retain the right to lodge complaints with relevant
                        data protection authorities:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#0D0D0F] p-4 rounded border border-[#222]">
                          <h4 className="text-white font-semibold mb-2">
                            🇺🇸 United States
                          </h4>
                          <p className="text-sm">
                            Federal Trade Commission (FTC)
                            <br />
                            State Attorneys General
                            <br />
                            State Privacy Regulators
                          </p>
                        </div>
                        <div className="bg-[#0D0D0F] p-4 rounded border border-[#222]">
                          <h4 className="text-white font-semibold mb-2">
                            🇪🇺 European Union
                          </h4>
                          <p className="text-sm">
                            National Data Protection Authorities
                            <br />
                            European Data Protection Board
                            <br />
                            European Commission
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Enforcement
                    </h3>

                    <div className="space-y-4">
                      <p>
                        This Privacy Policy may be enforced through various
                        mechanisms:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>Contractual Enforcement:</strong> Through
                          breach of contract claims
                        </li>
                        <li>
                          <strong>Regulatory Enforcement:</strong> By data
                          protection authorities
                        </li>
                        <li>
                          <strong>Statutory Rights:</strong> Through privacy law
                          enforcement
                        </li>
                        <li>
                          <strong>Injunctive Relief:</strong> To prevent ongoing
                          violations
                        </li>
                        <li>
                          <strong>Administrative Proceedings:</strong> Before
                          regulatory bodies
                        </li>
                      </ul>

                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-yellow-300 font-bold mb-3">
                          ⚠ Severability
                        </h4>
                        <p className="text-yellow-300 text-sm">
                          If any provision of this governing law section is
                          found to be unenforceable, the remaining provisions
                          will continue to be valid and enforceable to the
                          fullest extent permitted by law.
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
                        For questions about governing law or dispute resolution,
                        please contact us:
                      </p>

                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-green-300 font-bold mb-3">
                          📧 Legal Inquiries
                        </h4>
                        <div className="space-y-2 text-green-300 text-sm">
                          <p>
                            <strong>Email:</strong> legal@resilientprivacy.com
                          </p>
                          <p>
                            <strong>Subject Line:</strong> "Governing Law
                            Inquiry"
                          </p>
                          <p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Link
                      href="/legal/privacy-policy"
                      className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
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
