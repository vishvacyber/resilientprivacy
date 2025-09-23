import Link from 'next/link'

export default function LegalCompliancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Legal <span className="text-accent-500">Compliance</span>
          </h1>
          <p className="text-xl text-text-secondary mb-4 max-w-4xl mx-auto">
            Regulatory Compliance and Legal Obligations
          </p>
          <p className="text-lg text-text-secondary mb-8 max-w-4xl mx-auto">
            Section 16 of our Privacy Policy
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
                  16. Legal Compliance
                </h2>

                <div className="space-y-6">
                  <p>
                    Resilient Privacy is committed to complying with all
                    applicable privacy and data protection laws in the
                    jurisdictions where we operate. This section outlines our
                    compliance framework and legal obligations.
                  </p>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-green-300 font-bold mb-3">
                      ✅ Compliance Commitment
                    </h3>
                    <p className="text-green-300 text-sm">
                      We maintain a comprehensive compliance program that
                      ensures adherence to all applicable privacy laws and
                      regulations across our global operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Primary Legal Frameworks
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          🇺🇸 United States
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-white font-medium">
                              California Consumer Privacy Act (CCPA/CPRA)
                            </h5>
                            <p className="text-sm">
                              We comply with the CCPA and CPRA, providing
                              California residents with specific rights
                              regarding their Personal Data, including rights to
                              know, delete, correct, and opt-out of data
                              sharing.
                            </p>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">
                              Virginia Consumer Data Protection Act (VCDPA)
                            </h5>
                            <p className="text-sm">
                              We comply with VCDPA requirements for Virginia
                              residents, including data subject rights and
                              privacy notice obligations.
                            </p>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">
                              Colorado Privacy Act (CPA)
                            </h5>
                            <p className="text-sm">
                              We comply with CPA requirements for Colorado
                              residents, including universal opt-out mechanisms
                              and data protection assessments.
                            </p>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">
                              Children's Online Privacy Protection Act (COPPA)
                            </h5>
                            <p className="text-sm">
                              We comply with COPPA by not knowingly collecting
                              Personal Data from children under 13 and
                              implementing appropriate safeguards.
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
                              General Data Protection Regulation (GDPR)
                            </h5>
                            <p className="text-sm">
                              We comply with GDPR requirements, including lawful
                              basis for processing, data subject rights, data
                              protection by design, and breach notification
                              obligations.
                            </p>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">
                              ePrivacy Directive
                            </h5>
                            <p className="text-sm">
                              We comply with ePrivacy requirements for
                              electronic communications, including cookie
                              consent and direct marketing regulations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Industry-Specific Compliance
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Cybersecurity Regulations
                        </h4>
                        <p>
                          As a cybersecurity company, we comply with
                          industry-specific regulations including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>NIST Cybersecurity Framework</li>
                          <li>ISO 27001 Information Security Management</li>
                          <li>SOC 2 Type II Compliance</li>
                          <li>PCI DSS for payment processing</li>
                          <li>HIPAA for healthcare data (where applicable)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Financial Services Compliance
                        </h4>
                        <p>
                          Where we provide services to financial institutions,
                          we comply with:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>GLBA (Gramm-Leach-Bliley Act)</li>
                          <li>SOX (Sarbanes-Oxley Act)</li>
                          <li>FFIEC Guidelines</li>
                          <li>State financial privacy laws</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Compliance Program
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Compliance Team
                        </h4>
                        <p>
                          We maintain a dedicated compliance team responsible
                          for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>Monitoring regulatory developments</li>
                          <li>Conducting compliance assessments</li>
                          <li>Implementing compliance controls</li>
                          <li>Training employees on privacy requirements</li>
                          <li>Responding to regulatory inquiries</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Regular Audits and Assessments
                        </h4>
                        <p>
                          We conduct regular compliance audits and assessments
                          to ensure ongoing adherence to applicable laws:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>Annual privacy compliance reviews</li>
                          <li>Third-party security assessments</li>
                          <li>Regulatory gap analyses</li>
                          <li>Data protection impact assessments (DPIAs)</li>
                          <li>Vendor compliance evaluations</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Employee Training
                        </h4>
                        <p>
                          All employees receive regular training on privacy and
                          data protection requirements:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>Annual privacy awareness training</li>
                          <li>Role-specific compliance training</li>
                          <li>Incident response procedures</li>
                          <li>Data handling best practices</li>
                          <li>Regulatory update briefings</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Regulatory Cooperation
                    </h3>

                    <div className="space-y-4">
                      <p>
                        We maintain cooperative relationships with regulatory
                        authorities and are committed to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Responding promptly to regulatory inquiries</li>
                        <li>Participating in regulatory consultations</li>
                        <li>Sharing best practices with industry peers</li>
                        <li>Supporting regulatory enforcement actions</li>
                        <li>Contributing to policy development</li>
                      </ul>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                        <h4 className="text-blue-300 font-bold mb-3">
                           Regulatory Transparency
                        </h4>
                        <p className="text-blue-300 text-sm">
                          We maintain transparency with regulatory authorities
                          and are committed to open communication about our
                          privacy practices and compliance efforts.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Compliance Monitoring
                    </h3>

                    <div className="space-y-4">
                      <p>
                        We continuously monitor our compliance status through:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Automated compliance monitoring tools</li>
                        <li>Regular policy and procedure reviews</li>
                        <li>Incident tracking and analysis</li>
                        <li>Customer feedback and complaints</li>
                        <li>Industry benchmarking and best practices</li>
                      </ul>

                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-yellow-300 font-bold mb-3">
                          ⚠ Continuous Improvement
                        </h4>
                        <p className="text-yellow-300 text-sm">
                          We continuously improve our compliance program based
                          on regulatory developments, industry best practices,
                          and lessons learned from incidents and audits.
                        </p>
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
