import Link from 'next/link'

export default function ConsentPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-alt to-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Consent <span className="text-accent-500">Policy</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Understanding how we collect, process, and manage your consent for
            data processing activities.
          </p>
          <Link href="/legal" className="btn text-lg px-8 py-4">
            Back to Legal
          </Link>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-lg border border-[#222] p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Consent Management Policy
            </h2>
            <p className="text-text-secondary mb-6">
              <strong>Last Updated:</strong> January 20, 2025
            </p>
            <p className="text-text-secondary mb-6">
              This Consent Policy explains how Resilient Privacy
              (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects,
              processes, and manages your consent for various data processing
              activities when you visit our website and use our services.
            </p>
          </div>

          <div className="space-y-8">
            {/* What We Collect */}
            <div className="bg-[#1A1A1A] rounded-lg border border-[#222] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                What Information We Collect
              </h3>
              <div className="space-y-4 text-text-secondary">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Essential Cookies
                  </h4>
                  <p>
                    These cookies are necessary for the website to function
                    properly and cannot be disabled:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Session management and security</li>
                    <li>Authentication and login functionality</li>
                    <li>Basic website functionality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Analytics Cookies
                  </h4>
                  <p>
                    These cookies help us understand how visitors interact with
                    our website:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Page views and navigation patterns</li>
                    <li>Time spent on pages</li>
                    <li>Traffic sources and user behavior</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Marketing Cookies
                  </h4>
                  <p>
                    These cookies are used for marketing and advertising
                    purposes:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Personalized content and recommendations</li>
                    <li>Social media integration</li>
                    <li>Advertising campaign effectiveness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Process Consent */}
            <div className="bg-[#1A1A1A] rounded-lg border border-[#222] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                How We Process Your Consent
              </h3>
              <div className="space-y-4 text-text-secondary">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Consent Collection
                  </h4>
                  <p>
                    When you first visit our website, you will see a consent
                    banner that:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Clearly explains what data we collect and why</li>
                    <li>
                      Provides granular control over different types of cookies
                    </li>
                    <li>
                      Allows you to accept all, reject all, or customize your
                      preferences
                    </li>
                    <li>Links to this detailed consent policy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Consent Storage
                  </h4>
                  <p>
                    Your consent preferences are stored securely and include:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Timestamp of when consent was given</li>
                    <li>
                      Specific categories of cookies you&apos;ve consented to
                    </li>
                    <li>Version of the consent policy you agreed to</li>
                    <li>Your IP address for audit purposes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Consent Management
                  </h4>
                  <p>You can manage your consent preferences at any time by:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Clicking the &quot;Cookie Settings&quot; link in our
                      footer
                    </li>
                    <li>Using the consent management interface</li>
                    <li>Contacting us directly to update your preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="bg-[#1A1A1A] rounded-lg border border-[#222] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Legal Basis for Processing
              </h3>
              <div className="space-y-4 text-text-secondary">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Consent (Article 6(1)(a) GDPR)
                  </h4>
                  <p>
                    We process your personal data based on your explicit consent
                    for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Analytics and performance cookies</li>
                    <li>Marketing and advertising cookies</li>
                    <li>Social media integration</li>
                    <li>Personalized content delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Legitimate Interest (Article 6(1)(f) GDPR)
                  </h4>
                  <p>
                    We process certain data based on our legitimate interests
                    for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Essential website functionality</li>
                    <li>Security and fraud prevention</li>
                    <li>Service improvement and optimization</li>
                    <li>Legal compliance and record-keeping</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-[#1A1A1A] rounded-lg border border-[#222] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Your Rights Regarding Consent
              </h3>
              <div className="space-y-4 text-text-secondary">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Right to Withdraw Consent
                  </h4>
                  <p>
                    You have the right to withdraw your consent at any time.
                    When you withdraw consent:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      We will stop processing your data for the withdrawn
                      purpose
                    </li>
                    <li>
                      We will delete any data processed solely based on your
                      consent
                    </li>
                    <li>
                      We will update our records to reflect your withdrawal
                    </li>
                    <li>
                      We will notify any third parties who received your data
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Right to Access
                  </h4>
                  <p>You can request information about:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>What personal data we hold about you</li>
                    <li>How and why we process your data</li>
                    <li>Who we share your data with</li>
                    <li>How long we retain your data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Right to Rectification
                  </h4>
                  <p>
                    You can request that we correct inaccurate or incomplete
                    personal data.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Right to Erasure
                  </h4>
                  <p>
                    You can request that we delete your personal data in certain
                    circumstances.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-[#1A1A1A] rounded-lg border border-[#222] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Data Retention
              </h3>
              <div className="space-y-4 text-text-secondary">
                <p>
                  We retain your consent records and related data for the
                  following periods:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Consent Records:</strong> 5 years from the date of
                    consent or withdrawal
                  </li>
                  <li>
                    <strong>Analytics Data:</strong> 2 years from collection
                  </li>
                  <li>
                    <strong>Marketing Data:</strong> 3 years from last
                    interaction
                  </li>
                  <li>
                    <strong>Essential Cookies:</strong> Session duration or as
                    required for functionality
                  </li>
                </ul>
                <p className="mt-4">
                  After these periods, we will securely delete or anonymize your
                  data.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#1A1A1A] rounded-lg border border-[#222] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-4 text-text-secondary">
                <p>
                  If you have any questions about this Consent Policy or wish to
                  exercise your rights, please contact us:
                </p>
                <div className="bg-[#0D0D0F] p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> privacy@resilientprivacy.com
                  </p>
                  <p>
                  </p>
                </div>
                <p className="mt-4">
                  We will respond to your request within 30 days and may request
                  additional information to verify your identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
