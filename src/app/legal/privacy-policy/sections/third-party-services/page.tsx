import Link from 'next/link'

export default function ThirdPartyServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Third-Party <span className="text-[#8B5CF6]">Services</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-4 max-w-4xl mx-auto">
            External Services and Data Sharing Practices
          </p>
          <p className="text-lg text-[#A1A1AA] mb-8 max-w-4xl mx-auto">
            Section 14 of our Privacy Policy
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
                  14. Third-Party Services
                </h2>

                <div className="space-y-6">
                  <p>
                    Resilient Privacy may use third-party services to enhance
                    our cybersecurity offerings, improve our website
                    functionality, and provide better customer support. This
                    section explains how we work with third-party providers and
                    how your Personal Data may be shared.
                  </p>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-blue-300 font-bold mb-3">
                      🔒 Our Commitment
                    </h3>
                    <p className="text-blue-300 text-sm">
                      We carefully select third-party providers who share our
                      commitment to data protection and security. All
                      third-party relationships are governed by strict data
                      protection agreements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Categories of Third-Party Services
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Cybersecurity and Threat Intelligence
                        </h4>
                        <p className="mb-3">
                          We partner with leading cybersecurity providers to
                          enhance our threat detection and response
                          capabilities:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>Threat intelligence platforms and feeds</li>
                          <li>
                            Security information and event management (SIEM)
                            systems
                          </li>
                          <li>
                            Vulnerability assessment and penetration testing
                            tools
                          </li>
                          <li>
                            Security orchestration and automated response (SOAR)
                            platforms
                          </li>
                          <li>Digital forensics and incident response tools</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Cloud Infrastructure and Hosting
                        </h4>
                        <p className="mb-3">
                          We use cloud service providers to host our services
                          and store data securely:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            Amazon Web Services (AWS) for cloud infrastructure
                          </li>
                          <li>Microsoft Azure for enterprise services</li>
                          <li>
                            Google Cloud Platform for analytics and AI services
                          </li>
                          <li>
                            Content delivery networks (CDNs) for global
                            performance
                          </li>
                          <li>Backup and disaster recovery services</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Communication and Support
                        </h4>
                        <p className="mb-3">
                          We use communication tools to provide customer support
                          and team collaboration:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            Customer relationship management (CRM) systems
                          </li>
                          <li>Help desk and ticketing systems</li>
                          <li>
                            Video conferencing and communication platforms
                          </li>
                          <li>Email marketing and newsletter services</li>
                          <li>Live chat and support tools</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Analytics and Performance
                        </h4>
                        <p className="mb-3">
                          We use analytics tools to improve our services and
                          website performance:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>Google Analytics for website usage analysis</li>
                          <li>Performance monitoring and error tracking</li>
                          <li>User experience and usability testing tools</li>
                          <li>Search engine optimization (SEO) tools</li>
                          <li>Conversion tracking and marketing analytics</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Data Protection Measures
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Due Diligence
                        </h4>
                        <p>
                          Before engaging any third-party service provider, we
                          conduct thorough due diligence to ensure they meet our
                          security and privacy standards.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Data Processing Agreements
                        </h4>
                        <p>
                          All third-party providers who process Personal Data on
                          our behalf are required to sign comprehensive data
                          processing agreements that include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            Clear data processing instructions and limitations
                          </li>
                          <li>Security and confidentiality obligations</li>
                          <li>Data breach notification requirements</li>
                          <li>Subcontractor restrictions and controls</li>
                          <li>Data deletion and return procedures</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Security Requirements
                        </h4>
                        <p>
                          Third-party providers must implement security measures
                          that meet or exceed our own standards:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>Encryption of data in transit and at rest</li>
                          <li>Access controls and authentication mechanisms</li>
                          <li>Regular security audits and assessments</li>
                          <li>
                            Incident response and breach notification procedures
                          </li>
                          <li>Employee training on data protection</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Your Rights and Choices
                    </h3>

                    <div className="space-y-4">
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Request information about third-party services we use
                        </li>
                        <li>
                          Opt-out of certain third-party data processing where
                          possible
                        </li>
                        <li>
                          Request deletion of your data from third-party systems
                        </li>
                        <li>File complaints about third-party data handling</li>
                        <li>Request details about data sharing arrangements</li>
                      </ul>

                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-green-300 font-bold mb-3">
                          🎛️ Control Your Data
                        </h4>
                        <p className="text-green-300 text-sm">
                          You can control how your data is shared with third
                          parties through your account settings and privacy
                          preferences. Contact us to exercise your rights
                          regarding third-party data sharing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Third-Party Privacy Policies
                    </h3>

                    <div className="space-y-4">
                      <p>
                        Each third-party service provider has their own privacy
                        policy that governs how they handle your data. We
                        encourage you to review these policies to understand how
                        your data is processed by these providers.
                      </p>

                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-yellow-300 font-bold mb-3">
                          ⚠️ Important Notice
                        </h4>
                        <p className="text-yellow-300 text-sm">
                          While we carefully select and monitor our third-party
                          providers, we cannot control their privacy practices.
                          We are not responsible for the privacy policies or
                          practices of third-party services that are not under
                          our direct control.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Updates to Third-Party Services
                    </h3>

                    <div className="space-y-4">
                      <p>
                        We may update our third-party service providers from
                        time to time to improve our services or enhance
                        security. When we make such changes:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          We will notify you of significant changes that affect
                          your privacy
                        </li>
                        <li>
                          We will update this section to reflect new third-party
                          relationships
                        </li>
                        <li>
                          We will ensure new providers meet our security and
                          privacy standards
                        </li>
                        <li>
                          We will provide you with options to control your data
                          sharing
                        </li>
                      </ul>
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
