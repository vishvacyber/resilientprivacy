import Link from 'next/link'

export default function InformationCollectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Information <span className="text-[#8B5CF6]">Collection</span>
          </h1>
          <p className="text-lg text-[#A1A1AA] mb-6">
            Privacy Policy Section 3: Data Types and Collection Methods
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
              <p className="mb-8">
                We collect personal information through various methods and
                sources as described below. Our data collection practices comply
                with applicable privacy laws and are limited to what is
                necessary for our legitimate business purposes.
              </p>

              {/* Information You Provide Directly */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3.1 Information You Provide Directly
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Account Registration and Service Requests
                    </h3>
                    <p className="mb-3">
                      When you create an account or request our services, we may
                      collect:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Full name and professional title</li>
                      <li>Business email address and phone number</li>
                      <li>Company name and industry information</li>
                      <li>Billing and shipping addresses</li>
                      <li>
                        Payment information (processed by third-party payment
                        processors)
                      </li>
                      <li>Security preferences and access requirements</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Contact Forms and Communications
                    </h3>
                    <p className="mb-3">
                      When you contact us through various channels, we collect:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Contact information (name, email, phone number)</li>
                      <li>Message content and inquiry details</li>
                      <li>Preferred communication methods</li>
                      <li>File attachments (when provided)</li>
                      <li>Response preferences and follow-up requirements</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Job Applications and Recruitment
                    </h3>
                    <p className="mb-3">
                      During our recruitment process, we may collect:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Resume/CV and cover letter</li>
                      <li>Contact information and availability</li>
                      <li>Work authorization status</li>
                      <li>Educational background and certifications</li>
                      <li>Professional references (with consent)</li>
                      <li>Interview notes and assessments</li>
                      <li>
                        Background check information (where legally permitted)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Event Registration and Webinars
                    </h3>
                    <p className="mb-3">
                      When you register for our events, we collect:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Registration details and attendance preferences</li>
                      <li>Dietary restrictions or accessibility needs</li>
                      <li>Professional interests and topics of focus</li>
                      <li>
                        Networking preferences and contact sharing consent
                      </li>
                      <li>Session attendance and participation data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Collected Automatically */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3.2 Information Collected Automatically
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Website Usage Data
                    </h3>
                    <p className="mb-3">
                      When you visit our website, we automatically collect:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>IP address and approximate geographic location</li>
                      <li>Browser type, version, and language settings</li>
                      <li>Operating system and device information</li>
                      <li>
                        Pages visited, time spent, and navigation patterns
                      </li>
                      <li>Referring website and search terms used</li>
                      <li>Date and time of access</li>
                      <li>Files downloaded or forms submitted</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Cookies and Tracking Technologies
                    </h3>
                    <p className="mb-3">
                      We use various tracking technologies including:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Essential Cookies:
                        </strong>{' '}
                        Required for website functionality
                      </li>
                      <li>
                        <strong className="text-white">
                          Analytics Cookies:
                        </strong>{' '}
                        Google Analytics for usage statistics
                      </li>
                      <li>
                        <strong className="text-white">
                          Functional Cookies:
                        </strong>{' '}
                        Remember preferences and settings
                      </li>
                      <li>
                        <strong className="text-white">Session Tokens:</strong>{' '}
                        Maintain login state and security
                      </li>
                      <li>
                        <strong className="text-white">Local Storage:</strong>{' '}
                        Store user preferences locally
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">
                      See our{' '}
                      <Link
                        href="/legal/cookie-policy"
                        className="text-[#8B5CF6] hover:text-white underline"
                      >
                        Cookie Policy
                      </Link>{' '}
                      for detailed information about our use of cookies.
                    </p>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Service Usage and Performance Data
                    </h3>
                    <p className="mb-3">
                      For customers using our services, we collect:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Service utilization metrics and performance data</li>
                      <li>System logs and error reports</li>
                      <li>Security event logs and incident data</li>
                      <li>Configuration settings and customizations</li>
                      <li>API usage patterns and integration data</li>
                      <li>Support ticket history and resolution data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information from Third Parties */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3.3 Information from Third Parties
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Business Partners and Referrals
                    </h3>
                    <p className="mb-3">We may receive information from:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Channel partners and resellers</li>
                      <li>Professional referrals and recommendations</li>
                      <li>Industry associations and certification bodies</li>
                      <li>Conference organizers and event platforms</li>
                      <li>Marketing and lead generation partners</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Public Sources and Data Enrichment
                    </h3>
                    <p className="mb-3">
                      We may supplement our data with publicly available
                      information:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Professional networking platforms (LinkedIn)</li>
                      <li>Company websites and public directories</li>
                      <li>Industry publications and press releases</li>
                      <li>Government databases and regulatory filings</li>
                      <li>Social media profiles (public information only)</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Service Providers and Integrations
                    </h3>
                    <p className="mb-3">Information may be received from:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Payment processors and financial institutions</li>
                      <li>
                        Identity verification and fraud prevention services
                      </li>
                      <li>Customer relationship management (CRM) platforms</li>
                      <li>Email marketing and communication platforms</li>
                      <li>Analytics and business intelligence providers</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Special Categories of Data */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3.4 Special Categories of Data
                </h2>
                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded">
                  <h3 className="text-lg font-semibold text-red-400 mb-3">
                    Sensitive Personal Information
                  </h3>
                  <p className="mb-3">
                    We do not intentionally collect sensitive personal
                    information as defined by applicable privacy laws,
                    including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      Racial or ethnic origin, political opinions, or religious
                      beliefs
                    </li>
                    <li>Health information or genetic data</li>
                    <li>Biometric identifiers or precise geolocation data</li>
                    <li>
                      Financial account information beyond payment processing
                    </li>
                    <li>
                      Social Security numbers or government-issued ID numbers
                    </li>
                  </ul>
                  <p className="mt-3">
                    If we inadvertently collect such information, we will delete
                    it promptly upon discovery unless retention is required by
                    law.
                  </p>
                </div>
              </div>

              {/* Data Minimization */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3.5 Data Minimization Principles
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    We adhere to data minimization principles by:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong className="text-white">
                        Collecting only necessary data:
                      </strong>{' '}
                      We limit collection to information directly relevant to
                      our business purposes
                    </li>
                    <li>
                      <strong className="text-white">
                        Using progressive profiling:
                      </strong>{' '}
                      We collect additional information over time as needed,
                      rather than all at once
                    </li>
                    <li>
                      <strong className="text-white">
                        Regular data audits:
                      </strong>{' '}
                      We periodically review collected data to ensure continued
                      relevance
                    </li>
                    <li>
                      <strong className="text-white">
                        Purpose limitation:
                      </strong>{' '}
                      Data is collected for specific, explicit, and legitimate
                      purposes
                    </li>
                    <li>
                      <strong className="text-white">
                        Storage limitation:
                      </strong>{' '}
                      Data is retained only as long as necessary for the stated
                      purposes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Collection Methods Summary */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3.6 Collection Methods Summary
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#0D0D0F] p-4 rounded border border-[#333] text-center">
                    <h4 className="text-white font-semibold mb-2">
                      Direct Collection
                    </h4>
                    <p className="text-sm">
                      Information you provide voluntarily through forms,
                      communications, and service interactions
                    </p>
                  </div>
                  <div className="bg-[#0D0D0F] p-4 rounded border border-[#333] text-center">
                    <h4 className="text-white font-semibold mb-2">
                      Automatic Collection
                    </h4>
                    <p className="text-sm">
                      Technical data collected through website visits and
                      service usage
                    </p>
                  </div>
                  <div className="bg-[#0D0D0F] p-4 rounded border border-[#333] text-center">
                    <h4 className="text-white font-semibold mb-2">
                      Third-Party Sources
                    </h4>
                    <p className="text-sm">
                      Information received from partners, public sources, and
                      service providers
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/privacy-policy/sections/definitions"
                    className="text-[#8B5CF6] hover:text-white underline"
                  >
                    ← Previous: Definitions
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/legal-basis"
                    className="text-[#8B5CF6] hover:text-white underline"
                  >
                    Next: Legal Basis for Processing →
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
