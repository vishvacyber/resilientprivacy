import Link from 'next/link'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cookie <span className="text-accent-500">Policy</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Last updated: January 15, 2024
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#policy" className="btn text-lg px-8 py-4">
              Read Policy
            </Link>
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-8 py-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section id="policy" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-8 text-text-secondary">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files that are placed on your device
                  when you visit our website. They help us provide you with a
                  better experience by remembering your preferences, analyzing
                  how you use our site, and personalizing content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Types of Cookies We Use
                </h2>

                <h3 className="text-xl font-bold text-white mb-3">
                  Essential Cookies
                </h3>
                <p className="mb-4">
                  These cookies are necessary for the website to function
                  properly. They enable basic functions like page navigation,
                  access to secure areas, and form submissions.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">
                  Analytics Cookies
                </h3>
                <p className="mb-4">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">
                  Functional Cookies
                </h3>
                <p className="mb-4">
                  These cookies enable enhanced functionality and
                  personalization, such as remembering your preferences and
                  settings.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">
                  Marketing Cookies
                </h3>
                <p className="mb-4">
                  These cookies are used to track visitors across websites to
                  display relevant advertisements and measure the effectiveness
                  of marketing campaigns.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <p className="mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Browser settings: Most browsers allow you to block or delete
                    cookies
                  </li>
                  <li>
                    Cookie consent: Use our cookie consent banner to manage
                    preferences
                  </li>
                  <li>
                    Third-party opt-outs: Visit third-party websites to opt out
                    of their cookies
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions about our use of cookies, please contact
                  us:
                </p>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#222]">
                  <p>
                    <strong>Email:</strong> privacy@resilientprivacy.com
                  </p>
                  <p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Our privacy team is available to answer questions about our cookie
            practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Contact Privacy Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
