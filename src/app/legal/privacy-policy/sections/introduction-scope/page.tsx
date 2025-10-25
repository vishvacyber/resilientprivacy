import Link from 'next/link'

export default function IntroductionScopePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Introduction & <span className="text-accent-500">Scope</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Privacy Policy Section 1: Legal Framework and Applicability
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
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1.1 Introduction
                </h2>
                <p className="mb-4">
                  Resilient Privacy, Inc. ("Company," "we," "us," or "our") is
                  committed to protecting and respecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website, use our
                  services, or interact with us in any capacity.
                </p>
                <p className="mb-4">
                  This policy is designed to comply with applicable data
                  protection laws and regulations in jurisdictions where we operate, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    General Data Protection Regulation (GDPR) - EU Regulation
                    2016/679
                  </li>
                  <li>
                    California Consumer Privacy Act (CCPA) - California Civil
                    Code Section 1798.100 et seq.
                  </li>
                  <li>
                    California Privacy Rights Act (CPRA) - Amendment to CCPA
                    effective January 1, 2023
                  </li>
                  <li>Virginia Consumer Data Protection Act (VCDPA)</li>
                  <li>Colorado Privacy Act (CPA)</li>
                  <li>Connecticut Data Privacy Act (CTDPA)</li>
                  <li>Utah Consumer Privacy Act (UCPA)</li>
                  <li>Children's Online Privacy Protection Act (COPPA)</li>
                  <li>
                    Other applicable federal, state, and local privacy laws
                  </li>
                </ul>
              </div>

              {/* Scope of Application */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1.2 Scope of Application
                </h2>
                <p className="mb-4">This Privacy Policy applies to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                  <li>
                    All users of our website (resilientprivacy.com) and
                    associated subdomains
                  </li>
                  <li>
                    Customers who purchase or use our cybersecurity services
                  </li>
                  <li>Prospects who request information about our services</li>
                  <li>Job applicants who submit applications or resumes</li>
                  <li>
                    Business partners and vendors who interact with our systems
                  </li>

                  <li>
                    Participants in our webinars, events, or training programs
                  </li>
                </ul>
                <p className="mb-4">
                  This policy applies regardless of how you access or use our
                  services, whether via computer, mobile device, or any other
                  technology.
                </p>
              </div>

              {/* Geographic Scope */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1.3 Geographic Scope
                </h2>
                <p className="mb-4">
                  Our services are provided globally, and this Privacy Policy
                  applies to personal data processing activities conducted by
                  Resilient Privacy, Inc. in the following jurisdictions:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      United States
                    </h3>
                    <p className="mb-2">
                      For US residents, we comply with federal privacy laws and
                      applicable state privacy laws including CCPA/CPRA
                      (California), VCDPA (Virginia), CPA (Colorado), CTDPA
                      (Connecticut), and UCPA (Utah).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      European Union
                    </h3>
                    <p className="mb-2">
                      For EU residents, we act as a data controller under GDPR
                      and maintain lawful bases for processing personal data as
                      outlined in Article 6 of GDPR.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Controller Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1.4 Data Controller Information
                </h2>
                <p className="mb-4">
                  Resilient Privacy, Inc. acts as the data controller for personal
                  data collected through our services. Our contact information
                  is:
                </p>
                <div className="bg-[#0D0D0F] p-4 rounded border border-[#333] mb-4">
                  <p>
                    <strong className="text-white">Company:</strong> Resilient
                    Privacy, Inc.
                  </p>
                  <p>
                    <strong className="text-white">Privacy Officer:</strong>{' '}
                    privacy@resilientprivacy.com
                  </p>
                  <p>
                    <strong className="text-white">
                      Data Protection Officer (EU):
                    </strong>{' '}
                    dpo@resilientprivacy.com
                  </p>
                </div>
              </div>

              {/* Updates and Modifications */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1.5 Updates and Modifications
                </h2>
                <p className="mb-4">
                  We reserve the right to modify this Privacy Policy at any
                  time. When we make changes, we will:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                  <li>
                    Update the "Last Modified" date at the top of this policy
                  </li>
                  <li>
                    Provide notice of material changes via email to registered
                    users
                  </li>
                  <li>Post prominent notice on our website for 30 days</li>
                  <li>Obtain consent where required by applicable law</li>
                </ul>
                <p className="mb-4">
                  Your continued use of our services after any modifications
                  constitutes acceptance of the updated Privacy Policy, except
                  where additional consent is required by law.
                </p>
              </div>

              {/* Legal Compliance Framework */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1.6 Legal Compliance Framework
                </h2>
                <p className="mb-4">
                  Our privacy practices are designed to follow industry best practices and applicable legal requirements, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#0D0D0F] p-4 rounded border border-[#333]">
                    <h4 className="text-white font-semibold mb-2">
                      Industry Standards
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• NIST Privacy Framework</li>
                      <li>• NIST Cybersecurity Framework</li>
                      <li>• Industry best practices for data protection</li>
                    </ul>
                  </div>
                  <div className="bg-[#0D0D0F] p-4 rounded border border-[#333]">
                    <h4 className="text-white font-semibold mb-2">
                      Legal Compliance
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Applicable privacy laws and regulations</li>
                      <li>• Industry-specific requirements where applicable</li>
                      <li>• Reasonable security measures</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/privacy-policy"
                    className="text-accent-500 hover:text-white underline"
                  >
                    ← Back to Privacy Policy
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/definitions"
                    className="text-accent-500 hover:text-white underline"
                  >
                    Next: Definitions →
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
