import Link from 'next/link'

export default function ChildrensPrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Children's <span className="text-accent-500">Privacy</span>
          </h1>
          <p className="text-xl text-text-secondary mb-4 max-w-4xl mx-auto">
            Special Protections for Minors Under Age 13
          </p>
          <p className="text-lg text-text-secondary mb-8 max-w-4xl mx-auto">
            Section 11 of our Privacy Policy
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
                  11. Children's Privacy
                </h2>

                <div className="space-y-6">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-red-300 font-bold mb-3">
                      🚫 IMPORTANT: No Services for Children Under 13
                    </h3>
                    <p className="text-red-300 text-sm">
                      Resilient Privacy does not knowingly collect, use, or
                      disclose Personal Data from children under the age of 13.
                      Our services are designed for enterprise and business use
                      only.
                    </p>
                  </div>

                  <p>
                    Resilient Privacy is committed to protecting the privacy of
                    children and young people. This section outlines our
                    policies regarding the collection and use of Personal Data
                    from individuals under the age of 18.
                  </p>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Age Restrictions
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-yellow-300 font-bold mb-3">
                          🔞 Minimum Age Requirement
                        </h4>
                        <p className="text-yellow-300 text-sm">
                          You must be at least 18 years old to use our services.
                          If you are under 18, you may only use our services
                          with the involvement and consent of a parent or
                          guardian.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Children Under 13
                        </h4>
                        <p>
                          We do not knowingly collect Personal Data from
                          children under the age of 13. If we become aware that
                          we have collected Personal Data from a child under 13,
                          we will take immediate steps to delete such
                          information from our records.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Teenagers (13-17 years)
                        </h4>
                        <p>
                          Our services are not designed for or targeted at
                          teenagers. If you are between 13 and 17 years old, you
                          may only use our services with explicit parental
                          consent and supervision.
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
                          🇺🇸 United States (COPPA)
                        </h4>
                        <p>
                          We comply with the Children's Online Privacy
                          Protection Act (COPPA), which requires parental
                          consent for the collection of Personal Data from
                          children under 13. Since we do not collect such data,
                          COPPA compliance is maintained by default.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇪🇺 European Union (GDPR)
                        </h4>
                        <p>
                          Under the GDPR, the age of consent for data processing
                          varies by member state (typically 13-16 years). We do
                          not process Personal Data from individuals under the
                          age of 16 without parental consent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Parental Rights and Responsibilities
                    </h3>

                    <div className="space-y-4">
                      <p>
                        If you are a parent or guardian and believe that your
                        child has provided us with Personal Data, you have the
                        right to:
                      </p>

                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Request access to any Personal Data we may have
                          collected from your child
                        </li>
                        <li>Request deletion of your child's Personal Data</li>
                        <li>Request correction of inaccurate Personal Data</li>
                        <li>Withdraw consent for future data collection</li>
                        <li>File a complaint with relevant authorities</li>
                      </ul>

                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-green-300 font-bold mb-3">
                          📧 Contact Information for Parents
                        </h4>
                        <div className="space-y-2 text-green-300 text-sm">
                          <p>
                            <strong>Email:</strong> privacy@resilientprivacy.com
                          </p>
                          <p>
                            <strong>Subject Line:</strong> "Children's Privacy
                            Request"
                          </p>
                          <p>
                            <strong>Phone:</strong> +1 (469) 504-4135
                          </p>
                          <p>
                            <strong>Response Time:</strong> Within 30 days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Verification Procedures
                    </h3>

                    <div className="space-y-4">
                      <p>
                        If we receive a request that appears to be from a child,
                        we will:
                      </p>

                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Verify the age of the individual making the request
                        </li>
                        <li>
                          Require parental consent for individuals under 18
                        </li>
                        <li>
                          Implement additional verification steps for age
                          confirmation
                        </li>
                        <li>
                          Maintain records of parental consent where required
                        </li>
                        <li>
                          Provide clear information about our age restrictions
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Educational and Awareness
                    </h3>

                    <div className="space-y-4">
                      <p>
                        We are committed to promoting digital literacy and
                        privacy awareness:
                      </p>

                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          We provide educational resources about online privacy
                          and security
                        </li>
                        <li>
                          We support initiatives that promote safe internet use
                          for young people
                        </li>
                        <li>
                          We maintain clear age restrictions and warnings on our
                          website
                        </li>
                        <li>
                          We train our staff on children's privacy requirements
                        </li>
                        <li>
                          We regularly review and update our children's privacy
                          policies
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h4 className="text-blue-300 font-bold mb-3">
                      🛡️ Additional Safeguards
                    </h4>
                    <p className="text-blue-300 text-sm">
                      We implement technical and organizational measures to
                      prevent the accidental collection of children's Personal
                      Data, including age verification systems and content
                      filtering mechanisms.
                    </p>
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
