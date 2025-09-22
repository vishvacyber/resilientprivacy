import Link from 'next/link'

export default function UpdatesToPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Updates to <span className="text-accent-500">Policy</span>
          </h1>
          <p className="text-xl text-text-secondary mb-4 max-w-4xl mx-auto">
            How We Update and Communicate Policy Changes
          </p>
          <p className="text-lg text-text-secondary mb-8 max-w-4xl mx-auto">
            Section 18 of our Privacy Policy
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
                  18. Updates to This Privacy Policy
                </h2>

                <div className="space-y-6">
                  <p>
                    Resilient Privacy may update this Privacy Policy from time
                    to time to reflect changes in our practices, technology,
                    legal requirements, or other factors. This section explains
                    how we handle policy updates and how we notify you of
                    changes.
                  </p>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-blue-300 font-bold mb-3">
                      🔄 Continuous Improvement
                    </h3>
                    <p className="text-blue-300 text-sm">
                      We are committed to continuously improving our privacy
                      practices and keeping this policy current with evolving
                      legal requirements and industry best practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      When We Update the Policy
                    </h3>

                    <div className="space-y-4">
                      <p>
                        We may update this Privacy Policy in the following
                        circumstances:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>Legal Changes:</strong> When new privacy laws
                          or regulations are enacted
                        </li>
                        <li>
                          <strong>Service Changes:</strong> When we add new
                          services or modify existing ones
                        </li>
                        <li>
                          <strong>Technology Updates:</strong> When we implement
                          new technologies or security measures
                        </li>
                        <li>
                          <strong>Business Changes:</strong> When we change our
                          business practices or structure
                        </li>
                        <li>
                          <strong>Feedback Integration:</strong> When we receive
                          feedback that improves our policy
                        </li>
                        <li>
                          <strong>Compliance Requirements:</strong> When
                          regulatory requirements change
                        </li>
                        <li>
                          <strong>Security Enhancements:</strong> When we
                          implement new security measures
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Types of Updates
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor Updates
                        </h4>
                        <p>
                          Minor updates include typographical corrections,
                          formatting changes, or clarifications that do not
                          materially affect your privacy rights or our data
                          practices.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Material Changes
                        </h4>
                        <p>
                          Material changes include significant modifications to
                          how we collect, use, or share your Personal Data, or
                          changes that affect your privacy rights.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Legal Compliance Updates
                        </h4>
                        <p>
                          Updates required to comply with new laws or
                          regulations, or to address regulatory guidance or
                          enforcement actions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Notification Methods
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Website Updates
                        </h4>
                        <p>
                          We will update the Privacy Policy on our website and
                          update the "Last Updated" date at the top of the
                          policy to reflect the date of the most recent changes.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Email Notifications
                        </h4>
                        <p>
                          For material changes, we will send email notifications
                          to all registered users and customers at least 30 days
                          before the changes take effect.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          In-App Notifications
                        </h4>
                        <p>
                          We may display in-app notifications or banners to
                          inform users of significant policy changes when they
                          access our services.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Social Media Announcements
                        </h4>
                        <p>
                          For major changes, we may announce updates through our
                          social media channels and blog posts.
                        </p>
                      </div>

                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-green-300 font-bold mb-3">
                          📢 Transparent Communication
                        </h4>
                        <p className="text-green-300 text-sm">
                          We are committed to transparent communication about
                          policy changes and will provide clear explanations of
                          what has changed and why.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Your Rights Regarding Updates
                    </h3>

                    <div className="space-y-4">
                      <p>
                        When we make material changes to this Privacy Policy,
                        you have the following rights:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>Right to Review:</strong> You have the right
                          to review the updated policy before it takes effect
                        </li>
                        <li>
                          <strong>Right to Object:</strong> You may object to
                          certain changes where permitted by law
                        </li>
                        <li>
                          <strong>Right to Withdraw Consent:</strong> You may
                          withdraw consent for new data processing activities
                        </li>
                        <li>
                          <strong>Right to Terminate:</strong> You may terminate
                          your relationship with us if you disagree with changes
                        </li>
                        <li>
                          <strong>Right to Contact Us:</strong> You may contact
                          us with questions or concerns about updates
                        </li>
                      </ul>

                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-yellow-300 font-bold mb-3">
                          ⚠️ Continued Use
                        </h4>
                        <p className="text-yellow-300 text-sm">
                          Your continued use of our services after policy
                          updates constitutes acceptance of the new terms. If
                          you do not agree with the changes, you should
                          discontinue use of our services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Version Control
                    </h3>

                    <div className="space-y-4">
                      <p>
                        We maintain version control for our Privacy Policy to
                        ensure transparency and accountability:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>Version Numbers:</strong> Each policy update
                          is assigned a version number
                        </li>
                        <li>
                          <strong>Change Log:</strong> We maintain a detailed
                          log of all changes made
                        </li>
                        <li>
                          <strong>Archive:</strong> Previous versions are
                          archived and accessible upon request
                        </li>
                        <li>
                          <strong>Effective Dates:</strong> Clear effective
                          dates for all policy versions
                        </li>
                        <li>
                          <strong>Summary of Changes:</strong> Brief summaries
                          of what changed in each update
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Regulatory Compliance
                    </h3>

                    <div className="space-y-4">
                      <p>
                        Our policy update process complies with regulatory
                        requirements:
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇺🇸 United States
                        </h4>
                        <p>
                          We comply with state-specific notice requirements,
                          such as California's requirement for advance notice of
                          material changes.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          🇪🇺 European Union (GDPR)
                        </h4>
                        <p>
                          We provide advance notice of material changes and
                          obtain consent for new processing activities where
                          required by the GDPR.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Contact Us About Updates
                    </h3>

                    <div className="space-y-4">
                      <p>
                        If you have questions about policy updates or want to
                        request a copy of a previous version, please contact us:
                      </p>

                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                        <h4 className="text-purple-300 font-bold mb-3">
                          📧 Policy Update Inquiries
                        </h4>
                        <div className="space-y-2 text-purple-300 text-sm">
                          <p>
                            <strong>Email:</strong> privacy@resilientprivacy.com
                          </p>
                          <p>
                            <strong>Subject Line:</strong> "Privacy Policy
                            Update Inquiry"
                          </p>
                          <p>
                            <strong>Phone:</strong> +1 (469) 504-4135
                          </p>
                          <p>
                            <strong>Response Time:</strong> Within 5 business
                            days
                          </p>
                        </div>
                      </div>

                      <p>
                        We welcome your feedback on our Privacy Policy and are
                        committed to making it clear, comprehensive, and
                        user-friendly.
                      </p>
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
