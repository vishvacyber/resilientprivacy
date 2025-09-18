import Link from 'next/link'

export default function LimitationsDisclaimersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Limitations & <span className="text-[#8B5CF6]">Disclaimers</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-4 max-w-4xl mx-auto">
            Important Legal Limitations and Disclaimers
          </p>
          <p className="text-lg text-[#A1A1AA] mb-8 max-w-4xl mx-auto">
            Section 17 of our Privacy Policy
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
                  17. Limitations of Liability and Disclaimers
                </h2>

                <div className="space-y-6">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-red-300 font-bold mb-3">
                      ⚠️ IMPORTANT LEGAL NOTICE
                    </h3>
                    <p className="text-red-300 text-sm">
                      This section contains important limitations on our
                      liability and disclaimers. Please read this section
                      carefully as it affects your legal rights and remedies.
                    </p>
                  </div>

                  <p>
                    While Resilient Privacy is committed to protecting your
                    privacy and implementing robust security measures, this
                    Privacy Policy contains certain limitations and disclaimers
                    that are important for you to understand.
                  </p>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      No Warranties
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-yellow-300 font-bold mb-3">
                          🔒 Security Disclaimer
                        </h4>
                        <p className="text-yellow-300 text-sm">
                          While we implement industry-standard security
                          measures, we cannot guarantee absolute security of
                          Personal Data. No method of transmission over the
                          internet or electronic storage is 100% secure.
                        </p>
                      </div>

                      <p>
                        <strong>AS-IS BASIS:</strong> Our services and this
                        Privacy Policy are provided on an "as-is" and
                        "as-available" basis. We make no warranties, express or
                        implied, regarding the security, accuracy, completeness,
                        or reliability of our privacy practices or data
                        protection measures.
                      </p>

                      <p>
                        <strong>THIRD-PARTY RISKS:</strong> We are not
                        responsible for the privacy practices of third-party
                        services, websites, or applications that you may access
                        through our services. Your use of such third-party
                        services is at your own risk.
                      </p>

                      <p>
                        <strong>TECHNICAL LIMITATIONS:</strong> Our ability to
                        protect your Personal Data may be limited by technical
                        constraints, legal requirements, or circumstances beyond
                        our reasonable control.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Limitation of Liability
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                        <h4 className="text-red-300 font-bold mb-3">
                          💰 DAMAGE LIMITATIONS
                        </h4>
                        <p className="text-red-300 text-sm">
                          To the maximum extent permitted by applicable law,
                          Resilient Privacy shall not be liable for any
                          indirect, incidental, special, consequential, or
                          punitive damages arising from or relating to this
                          Privacy Policy or our data processing activities.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Excluded Damages
                        </h4>
                        <p>
                          We shall not be liable for any of the following types
                          of damages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            Lost profits, revenue, or business opportunities
                          </li>
                          <li>Data loss or corruption</li>
                          <li>Reputational damage</li>
                          <li>Emotional distress or mental anguish</li>
                          <li>Consequential or indirect damages</li>
                          <li>Punitive or exemplary damages</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Liability Cap
                        </h4>
                        <p>
                          In the event that we are found liable for damages, our
                          total liability shall not exceed the amount you have
                          paid us for our services in the 12 months preceding
                          the claim, or $1,000, whichever is greater.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Essential Purpose
                        </h4>
                        <p>
                          The limitations of liability in this section are
                          fundamental to our ability to provide services at
                          reasonable costs. These limitations apply even if we
                          have been advised of the possibility of such damages.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Force Majeure
                    </h3>

                    <div className="space-y-4">
                      <p>
                        We shall not be liable for any failure to comply with
                        this Privacy Policy due to circumstances beyond our
                        reasonable control, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Natural disasters (earthquakes, floods, hurricanes,
                          etc.)
                        </li>
                        <li>
                          Cyberattacks or security breaches by third parties
                        </li>
                        <li>Government actions or regulatory changes</li>
                        <li>War, terrorism, or civil unrest</li>
                        <li>Power outages or infrastructure failures</li>
                        <li>Pandemics or public health emergencies</li>
                        <li>Acts of God or other unforeseeable events</li>
                      </ul>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                        <h4 className="text-blue-300 font-bold mb-3">
                          🔄 Reasonable Efforts
                        </h4>
                        <p className="text-blue-300 text-sm">
                          In the event of force majeure circumstances, we will
                          use reasonable efforts to minimize the impact on your
                          privacy and data protection, and will resume
                          compliance as soon as practicable.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Third-Party Actions
                    </h3>

                    <div className="space-y-4">
                      <p>
                        We are not responsible for the actions of third parties,
                        including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Hackers or cybercriminals who gain unauthorized access
                        </li>
                        <li>
                          Third-party service providers who fail to protect data
                        </li>
                        <li>Legal authorities that request or seize data</li>
                        <li>Other users who misuse our services</li>
                        <li>
                          Vendors or contractors who breach their obligations
                        </li>
                      </ul>

                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-yellow-300 font-bold mb-3">
                          ⚠️ Third-Party Disclaimer
                        </h4>
                        <p className="text-yellow-300 text-sm">
                          While we carefully select and monitor our third-party
                          providers, we cannot control their actions or
                          guarantee their compliance with our privacy standards.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Jurisdictional Limitations
                    </h3>

                    <div className="space-y-4">
                      <p>
                        The limitations and disclaimers in this section may be
                        subject to different legal standards depending on your
                        jurisdiction:
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇺🇸 United States
                        </h4>
                        <p>
                          Some states do not allow the exclusion or limitation
                          of certain damages. If you are in such a state, the
                          limitations may not apply to you to the extent
                          prohibited by law.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇪🇺 European Union
                        </h4>
                        <p>
                          EU consumer protection laws may provide additional
                          rights that cannot be limited by contract. These
                          limitations do not affect your statutory rights under
                          EU law.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Severability
                    </h3>

                    <div className="space-y-4">
                      <p>
                        If any provision of this Privacy Policy is found to be
                        unenforceable or invalid, the remaining provisions will
                        continue to be valid and enforceable to the fullest
                        extent permitted by law.
                      </p>

                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-green-300 font-bold mb-3">
                          🔧 Policy Continuity
                        </h4>
                        <p className="text-green-300 text-sm">
                          The invalidity of any provision does not affect the
                          validity of the rest of this Privacy Policy. We will
                          work to replace any invalid provision with a valid one
                          that achieves the same purpose.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Legal Advice
                    </h3>

                    <div className="space-y-4">
                      <p>
                        This Privacy Policy is not intended to provide legal
                        advice. If you have questions about your legal rights or
                        obligations, please consult with a qualified attorney in
                        your jurisdiction.
                      </p>

                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                        <h4 className="text-purple-300 font-bold mb-3">
                          ⚖️ Legal Consultation
                        </h4>
                        <p className="text-purple-300 text-sm">
                          The information in this Privacy Policy is for general
                          informational purposes only and should not be
                          construed as legal advice. Your specific legal rights
                          may vary based on your location and circumstances.
                        </p>
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
