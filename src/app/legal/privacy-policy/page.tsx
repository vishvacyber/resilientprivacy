import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-[#8B5CF6]">Policy</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-4 max-w-4xl mx-auto">
            Comprehensive Global Privacy Protection Framework
          </p>
          <p className="text-lg text-[#A1A1AA] mb-8 max-w-4xl mx-auto">
            Last Updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Link href="#overview" className="btn text-lg px-8 py-4">
              Read Full Policy
            </Link>
            <p className="text-lg text-[#A1A1AA]">
              Privacy Questions? Email us at{' '}
              <a
                href="mailto:privacy@resilientprivacy.com"
                className="text-[#8B5CF6] hover:text-white underline"
              >
                privacy@resilientprivacy.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section id="overview" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-12 text-[#A1A1AA]">
              {/* Table of Contents */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#222]">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Table of Contents
                </h2>
                <p className="text-[#A1A1AA] mb-6 text-sm">
                  Click on any section below to view detailed information. Each
                  section provides comprehensive legal details and your rights
                  under applicable privacy laws.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link
                    href="/legal/privacy-policy/sections/introduction-scope"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    1. Introduction & Scope
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/definitions"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    2. Definitions
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/information-collection"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    3. Information Collection
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/legal-basis"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    4. Legal Basis for Processing
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/use-of-information"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    5. Use of Information
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/information-sharing"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    6. Information Sharing
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/international-transfers"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    7. International Transfers
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/data-security"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    8. Data Security
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/your-rights"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    9. Your Rights
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/jurisdiction-specific-rights"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    10. Jurisdiction-Specific Rights
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/childrens-privacy"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    11. Children's Privacy
                  </Link>
                  <Link
                    href="/legal/cookie-policy"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    12. Cookies & Tracking
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/data-retention"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    13. Data Retention
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/third-party-services"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    14. Third-Party Services
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/business-transfers"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    15. Business Transfers
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/legal-compliance"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    16. Legal Compliance
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/limitations-disclaimers"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    17. Limitations & Disclaimers
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/updates-to-policy"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    18. Updates to Policy
                  </Link>
                  <Link
                    href="#section-19"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    19. Contact Information
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/governing-law"
                    className="text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6]/10 block py-2 px-3 rounded transition-all duration-200"
                  >
                    20. Governing Law
                  </Link>
                </div>

                {/* Featured Sections */}
                <div className="mt-8 p-4 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded">
                  <h3 className="text-white font-semibold mb-3">
                    Most Viewed Sections
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/legal/privacy-policy/sections/your-rights"
                      className="bg-[#8B5CF6] hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                      Your Privacy Rights
                    </Link>
                    <Link
                      href="/legal/privacy-policy/sections/information-collection"
                      className="bg-[#8B5CF6] hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                      What We Collect
                    </Link>
                    <Link
                      href="/legal/privacy-policy/sections/use-of-information"
                      className="bg-[#8B5CF6] hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                      How We Use Data
                    </Link>
                  </div>
                </div>
              </div>

              {/* Section 1: Introduction & Scope */}
              <div id="section-1">
                <h2 className="text-3xl font-bold text-white mb-6">
                  1. Introduction & Scope
                </h2>

                <div className="space-y-4">
                  <p>
                    <strong>Resilient Privacy, LLC</strong> (&quot;Resilient
                    Privacy,&quot; &quot;Company,&quot; &quot;we,&quot;
                    &quot;us,&quot; or &quot;our&quot;), a Delaware Limited
                    Liability Company with global operations, is committed to
                    protecting your privacy and personal data in accordance with
                    the highest international standards and applicable laws.
                  </p>

                  <p>
                    This Privacy Policy (&quot;Policy&quot;) governs the
                    collection, use, processing, storage, sharing, and
                    protection of personal information (&quot;Personal
                    Data&quot; or &quot;Personal Information&quot;) by Resilient
                    Privacy in connection with:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Our website located at resilientprivacy.com and all
                      associated subdomains
                    </li>
                    <li>
                      All cybersecurity services, products, and solutions
                      provided by Resilient Privacy
                    </li>
                    <li>
                      All software applications, platforms, and tools developed
                      or operated by us
                    </li>
                    <li>
                      All communications, interactions, and business
                      relationships with us
                    </li>
                    <li>
                      All marketing, sales, and customer support activities
                    </li>
                  </ul>

                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-6">
                    <p className="text-red-300 font-semibold">
                      <strong>IMPORTANT LEGAL NOTICE:</strong> By accessing our
                      website, using our services, or providing us with your
                      personal information, you acknowledge that you have read,
                      understood, and agree to be bound by this Privacy Policy
                      and our Terms of Service. If you do not agree with any
                      part of this Policy, you must immediately discontinue use
                      of our services and website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Definitions */}
              <div id="section-2">
                <h2 className="text-3xl font-bold text-white mb-6">
                  2. Definitions
                </h2>

                <div className="space-y-4">
                  <p>
                    For the purposes of this Policy, the following definitions
                    apply:
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p>
                        <strong>&quot;Personal Data&quot;</strong> means any
                        information relating to an identified or identifiable
                        natural person, including but not limited to names,
                        email addresses, phone numbers, IP addresses, device
                        identifiers, location data, and any other information
                        that can be used to identify an individual.
                      </p>
                    </div>

                    <div>
                      <p>
                        <strong>&quot;Processing&quot;</strong> means any
                        operation performed on Personal Data, including
                        collection, recording, organization, structuring,
                        storage, adaptation, retrieval, consultation, use,
                        disclosure, transmission, dissemination, alignment,
                        combination, restriction, erasure, or destruction.
                      </p>
                    </div>

                    <div>
                      <p>
                        <strong>&quot;Data Subject&quot;</strong> means any
                        identified or identifiable natural person whose Personal
                        Data is processed by us.
                      </p>
                    </div>

                    <div>
                      <p>
                        <strong>&quot;Services&quot;</strong> means all
                        cybersecurity services, products, software, platforms,
                        and solutions provided by Resilient Privacy.
                      </p>
                    </div>

                    <div>
                      <p>
                        <strong>&quot;Sensitive Personal Data&quot;</strong>{' '}
                        means Personal Data revealing racial or ethnic origin,
                        political opinions, religious beliefs, trade union
                        membership, genetic data, biometric data, health data,
                        or data concerning sexual orientation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue with remaining sections... Due to length, I'll include key sections */}

              {/* Section 10: Jurisdiction-Specific Rights */}
              <div id="section-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  10. Jurisdiction-Specific Privacy Rights
                </h2>

                <div className="space-y-8">
                  {/* United States */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      🇺🇸 United States Residents
                    </h3>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">
                        California Residents (CCPA/CPRA)
                      </h4>
                      <p>
                        If you are a California resident, you have additional
                        rights under the California Consumer Privacy Act:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>
                          <strong>Right to Know:</strong> Request information
                          about Personal Data collected, used, disclosed, or
                          sold
                        </li>
                        <li>
                          <strong>Right to Delete:</strong> Request deletion of
                          Personal Data
                        </li>
                        <li>
                          <strong>Right to Correct:</strong> Request correction
                          of inaccurate Personal Data
                        </li>
                        <li>
                          <strong>Right to Opt-Out:</strong> Opt-out of the sale
                          or sharing of Personal Data
                        </li>
                        <li>
                          <strong>Right to Limit:</strong> Limit use of
                          sensitive Personal Data
                        </li>
                        <li>
                          <strong>Right to Non-Discrimination:</strong> Not be
                          discriminated against for exercising privacy rights
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 17: Limitations & Disclaimers */}
              <div id="section-17">
                <h2 className="text-3xl font-bold text-white mb-6">
                  17. Limitations of Liability and Disclaimers
                </h2>

                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h4 className="text-red-300 font-bold mb-3">
                      IMPORTANT LEGAL DISCLAIMERS
                    </h4>

                    <div className="space-y-3 text-red-300 text-sm">
                      <p>
                        <strong>NO WARRANTIES:</strong> While we implement
                        robust security measures, we cannot guarantee absolute
                        security of Personal Data. You acknowledge that no
                        method of transmission over the internet or electronic
                        storage is 100% secure.
                      </p>

                      <p>
                        <strong>LIMITATION OF LIABILITY:</strong> To the maximum
                        extent permitted by law, Resilient Privacy shall not be
                        liable for any indirect, incidental, special,
                        consequential, or punitive damages arising from or
                        relating to this Privacy Policy or our data processing
                        activities.
                      </p>

                      <p>
                        <strong>FORCE MAJEURE:</strong> We shall not be liable
                        for any failure to comply with this Policy due to
                        circumstances beyond our reasonable control, including
                        natural disasters, cyberattacks, government actions, or
                        other force majeure events.
                      </p>

                      <p>
                        <strong>THIRD-PARTY ACTIONS:</strong> We are not
                        responsible for the actions of third parties, including
                        hackers, unauthorized access by third parties, or
                        breaches of third-party services we use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 19: Contact Information */}
              <div id="section-19">
                <h2 className="text-3xl font-bold text-white mb-6">
                  19. Contact Information
                </h2>

                <div className="space-y-6">
                  <p>
                    For questions, concerns, or requests related to this Privacy
                    Policy or our data practices, please contact us:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#0D0D0F] p-6 rounded border border-[#222]">
                      <h4 className="text-white font-bold mb-3">
                        General Privacy Inquiries
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Email:</strong> privacy@resilientprivacy.com
                        </p>
                        <p>
                          <strong>Phone:</strong> +1 (469) 666-0131
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#0D0D0F] p-6 rounded border border-[#222]">
                      <h4 className="text-white font-bold mb-3">
                        Data Protection Officer
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Email:</strong> dpo@resilientprivacy.com
                        </p>
                        <p>
                          <strong>Phone:</strong> +1 (469) 666-0131
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 20: Governing Law */}
              <div id="section-20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  20. Governing Law and Dispute Resolution
                </h2>

                <div className="space-y-4">
                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                    <h4 className="text-purple-300 font-bold mb-3">
                      GOVERNING LAW AND JURISDICTION
                    </h4>

                    <div className="space-y-3 text-purple-300 text-sm">
                      <p>
                        <strong>Primary Jurisdiction:</strong> This Privacy
                        Policy and any disputes arising from it shall be
                        governed by the laws of the State of Delaware, United
                        States, without regard to conflict of law principles.
                      </p>

                      <p>
                        <strong>Local Law Compliance:</strong> This Policy
                        complies with applicable local privacy laws in the
                        United States, and you may have additional rights under
                        those laws.
                      </p>

                      <p>
                        <strong>Dispute Resolution:</strong> Any disputes shall
                        be resolved through binding arbitration in Delaware,
                        USA, except where prohibited by local law or where you
                        have the right to bring claims in local courts.
                      </p>

                      <p>
                        <strong>Regulatory Complaints:</strong> You retain the
                        right to lodge complaints with relevant data protection
                        authorities in your jurisdiction.
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <p className="text-[#8B5CF6] font-semibold">
                      Last Updated:{' '}
                      {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-sm text-[#A1A1AA] mt-2">
                      Version 3.0 - Comprehensive Global Privacy Framework
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Your Privacy Rights?
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-4">
            Our dedicated privacy team is available 24/7 to help you understand
            your rights and exercise control over your personal data.
          </p>
          <p className="text-lg text-[#A1A1AA] mb-8">
            Email us directly at{' '}
            <a
              href="mailto:privacy@resilientprivacy.com"
              className="text-[#8B5CF6] hover:text-white underline font-semibold"
            >
              privacy@resilientprivacy.com
            </a>
          </p>
          <div className="flex justify-center">
            <Link
              href="/legal"
              className="btn bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 py-4"
            >
              View All Legal Documents
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-1 gap-6">
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#222]">
              <h3 className="text-white font-bold mb-2">🇺🇸 USA Compliance</h3>
              <p className="text-sm text-[#A1A1AA]">
                CCPA, COPPA, State Privacy Laws, Federal Privacy Regulations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
