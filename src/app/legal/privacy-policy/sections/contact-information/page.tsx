import Link from 'next/link'

export default function ContactInformationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-[#8B5CF6]">Information</span>
          </h1>
          <p className="text-lg text-[#A1A1AA] mb-6">
            Privacy Policy Section 19: How to Contact Us About Privacy
          </p>
          <Link
            href="/legal/privacy-policy"
            className="text-[#8B5CF6] hover:text-white underline"
          >
            ← Back to Privacy Policy
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-8 text-[#A1A1AA]">
              <p className="text-lg mb-8">
                We are committed to addressing your privacy questions and
                concerns promptly. Please use the appropriate contact method
                below based on your inquiry type.
              </p>

              {/* Privacy Team Contacts */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  19.1 Privacy Team Contacts
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      🔒 General Privacy Inquiries
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <strong className="text-white">Email:</strong>
                        <a
                          href="mailto:privacy@resilientprivacy.com"
                          className="block text-[#8B5CF6] hover:text-white underline mt-1"
                        >
                          privacy@resilientprivacy.com
                        </a>
                      </div>
                      <div>
                        <strong className="text-white">Response Time:</strong>
                        <span className="block text-[#A1A1AA] mt-1">
                          Within 48 hours
                        </span>
                      </div>
                      <div>
                        <strong className="text-white">Languages:</strong>
                        <span className="block text-[#A1A1AA] mt-1">
                          English, Hindi, Spanish
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      🇪🇺 Data Protection Officer (EU)
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <strong className="text-white">Email:</strong>
                        <a
                          href="mailto:dpo@resilientprivacy.com"
                          className="block text-[#8B5CF6] hover:text-white underline mt-1"
                        >
                          dpo@resilientprivacy.com
                        </a>
                      </div>
                      <div>
                        <strong className="text-white">Jurisdiction:</strong>
                        <span className="block text-[#A1A1AA] mt-1">
                          EU/EEA residents
                        </span>
                      </div>
                      <div>
                        <strong className="text-white">Response Time:</strong>
                        <span className="block text-[#A1A1AA] mt-1">
                          Within 72 hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rights Requests */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  19.2 Privacy Rights Requests
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      📝 Submit a Rights Request
                    </h3>
                    <p className="mb-4">
                      To exercise your privacy rights (access, deletion,
                      correction, etc.):
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          Online Form
                        </h4>
                        <p className="text-sm text-[#A1A1AA] mb-2">
                          Fastest and most secure method
                        </p>
                        <Link
                          href="/privacy-request"
                          className="bg-[#8B5CF6] hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200 inline-block"
                        >
                          Submit Privacy Request
                        </Link>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-2">Email</h4>
                        <p className="text-sm text-[#A1A1AA] mb-2">
                          Include full name and request details
                        </p>
                        <a
                          href="mailto:rights@resilientprivacy.com"
                          className="text-[#8B5CF6] hover:text-white underline text-sm"
                        >
                          rights@resilientprivacy.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      📞 Privacy Hotline
                    </h3>
                    <p className="mb-3">
                      For urgent privacy matters or if you prefer to speak with
                      someone:
                    </p>
                    <div className="space-y-2">
                      <div>
                        <strong className="text-white">Phone:</strong>
                        <a
                          href="tel:+14696660131"
                          className="text-[#8B5CF6] hover:text-white underline ml-2"
                        >
                          +1 (469) 666-0131
                        </a>
                      </div>
                      <div>
                        <strong className="text-white">Hours:</strong>
                        <span className="text-[#A1A1AA] ml-2">
                          Monday-Friday, 9:00 AM - 6:00 PM EST
                        </span>
                      </div>
                      <div>
                        <strong className="text-white">Emergency:</strong>
                        <span className="text-[#A1A1AA] ml-2">
                          24/7 for data breach concerns
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Contacts */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  19.3 Regional Privacy Contacts
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      🇺🇸 United States
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-white">Email:</strong>{' '}
                        privacy-us@resilientprivacy.com
                      </div>
                      <div>
                        <strong className="text-white">Phone:</strong> +1 (469)
                        666-0131
                      </div>
                      <div>
                        <strong className="text-white">Covers:</strong> CCPA,
                        VCDPA, CPA, CTDPA, UCPA
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      🇪🇺 European Union
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-white">Email:</strong>{' '}
                        privacy-eu@resilientprivacy.com
                      </div>
                      <div>
                        <strong className="text-white">DPO:</strong>{' '}
                        dpo@resilientprivacy.com
                      </div>
                      <div>
                        <strong className="text-white">Representative:</strong>{' '}
                        EU Privacy Solutions Ltd.
                      </div>
                      <div>
                        <strong className="text-white">Covers:</strong> GDPR,
                        national privacy laws
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complaints and Appeals */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  19.4 Complaints and Appeals
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Internal Appeals
                    </h3>
                    <p className="mb-3">
                      If you're not satisfied with our response to your privacy
                      request:
                    </p>
                    <div className="space-y-2">
                      <div>
                        <strong className="text-white">Email:</strong>
                        <a
                          href="mailto:appeals@resilientprivacy.com"
                          className="text-[#8B5CF6] hover:text-white underline ml-2"
                        >
                          appeals@resilientprivacy.com
                        </a>
                      </div>
                      <div>
                        <strong className="text-white">Include:</strong>
                        <span className="text-[#A1A1AA] ml-2">
                          Original request reference number and reason for
                          appeal
                        </span>
                      </div>
                      <div>
                        <strong className="text-white">Response Time:</strong>
                        <span className="text-[#A1A1AA] ml-2">
                          Within 30 days
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Regulatory Complaints
                    </h3>
                    <p className="mb-3">
                      You also have the right to lodge complaints with
                      supervisory authorities:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          United States
                        </h4>
                        <ul className="space-y-1 text-[#A1A1AA]">
                          <li>• California Attorney General</li>
                          <li>• Virginia Attorney General</li>
                          <li>• Colorado Attorney General</li>
                          <li>• Connecticut Attorney General</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          International
                        </h4>
                        <ul className="space-y-1 text-[#A1A1AA]">
                          <li>• EU: Local Data Protection Authority</li>
                          <li>• US: State Attorney General Offices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Inquiries */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  19.5 Business and Legal Inquiries
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Legal Department
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-white">Email:</strong>{' '}
                        legal@resilientprivacy.com
                      </div>
                      <div>
                        <strong className="text-white">Purpose:</strong> Legal
                        process, subpoenas, court orders
                      </div>
                      <div>
                        <strong className="text-white">Response:</strong> Within
                        5 business days
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Security Team
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-white">Email:</strong>{' '}
                        security@resilientprivacy.com
                      </div>
                      <div>
                        <strong className="text-white">Purpose:</strong>{' '}
                        Security incidents, vulnerabilities
                      </div>
                      <div>
                        <strong className="text-white">Emergency:</strong> +1
                        (469) 666-0131 (24/7)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Commitments */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  19.6 Our Response Commitments
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Response Timeframes
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <strong className="text-white">
                            Acknowledgment:
                          </strong>{' '}
                          Within 24 hours
                        </li>
                        <li>
                          <strong className="text-white">
                            Simple Inquiries:
                          </strong>{' '}
                          Within 48 hours
                        </li>
                        <li>
                          <strong className="text-white">
                            Rights Requests:
                          </strong>{' '}
                          Within 30 days (GDPR: 1 month)
                        </li>
                        <li>
                          <strong className="text-white">
                            Complex Matters:
                          </strong>{' '}
                          Within 45 days
                        </li>
                        <li>
                          <strong className="text-white">Appeals:</strong>{' '}
                          Within 30 days
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Quality Standards
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <strong className="text-white">Professional:</strong>{' '}
                          Courteous and respectful communication
                        </li>
                        <li>
                          <strong className="text-white">Clear:</strong> Plain
                          language explanations
                        </li>
                        <li>
                          <strong className="text-white">Comprehensive:</strong>{' '}
                          Complete responses to all questions
                        </li>
                        <li>
                          <strong className="text-white">Secure:</strong>{' '}
                          Encrypted communication when required
                        </li>
                        <li>
                          <strong className="text-white">Follow-up:</strong>{' '}
                          Proactive updates on complex requests
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mailing Address */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  19.7 Mailing Address
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <div className="text-center">
                    <h4 className="text-white font-semibold mb-4">
                      Resilient Privacy LLC
                    </h4>
                    <div className="space-y-1 text-[#A1A1AA]">
                      <p>Privacy Officer</p>
                    </div>
                    <p className="mt-4 text-sm text-[#A1A1AA]">
                      For privacy-related correspondence only. Please include
                      "PRIVACY REQUEST" in the subject line or envelope marking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/privacy-policy/sections/updates-to-policy"
                    className="text-[#8B5CF6] hover:text-white underline"
                  >
                    ← Previous: Updates to Policy
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/governing-law"
                    className="text-[#8B5CF6] hover:text-white underline"
                  >
                    Next: Governing Law →
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
