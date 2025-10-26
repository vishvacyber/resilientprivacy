'use client'

import Link from 'next/link'
import ContactModal from '@/components/ContactModal'

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
            Effective Date: January 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#policy" className="btn text-lg px-8 py-4">
              Read Policy
            </Link>
            <ContactModal className="btn-secondary text-lg px-8 py-4">
              Contact Us
            </ContactModal>
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
                  Introduction
                </h2>
                <p>
                  At Resilient Privacy, Inc., we value your trust and are committed to being transparent about how we use cookies and similar technologies. This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  What Are Cookies?
                </h2>
                <p className="mb-4">
                  Cookies are small text files stored on your device (computer, tablet, smartphone) when you visit a website. They are commonly used to make websites function, enhance user experience, and provide insights to site owners.
                </p>
                <p>
                  Cookies can help remember your preferences, support secure login, and enable us to understand how visitors interact with our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  How We Use Cookies
                </h2>
                <p className="mb-4">We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Improve the functionality and performance of our website.</li>
                  <li>Customize your browsing experience.</li>
                  <li>Analyze visitor behavior to enhance our services.</li>
                  <li>Deliver relevant content and advertising.</li>
                </ul>
                <p>
                  By using our website, you agree to the placement of cookies on your device as described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Managing Cookies
                </h2>
                <p className="mb-4">
                  You are in control of your cookie preferences. Most browsers allow you to view, block, or delete cookies. Please note that if you disable cookies, some features of our site may not work as intended, and your browsing experience may be affected.
                </p>
                <p className="mb-4">For guidance on managing cookies in popular browsers:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
                  <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a></li>
                  <li><strong>Safari (macOS):</strong> <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
                  <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/help/4027947/microsoft-edge-delete-cookies" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/help/4027947/microsoft-edge-delete-cookies</a></li>
                </ul>
                <p>
                  For other browsers and devices, visit <a href="http://www.aboutcookies.org/" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">http://www.aboutcookies.org/</a> or <a href="http://www.cookiecentral.com/faq/" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">http://www.cookiecentral.com/faq/</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Types of Cookies We Use
                </h2>
                
                <h3 className="text-xl font-bold text-white mb-3">Session Cookies</h3>
                <p className="mb-4">Temporary cookies that are erased when you close your browser.</p>

                <h3 className="text-xl font-bold text-white mb-3">Persistent Cookies</h3>
                <p className="mb-4">Remain on your device until they expire or are deleted, helping us remember your preferences across visits.</p>

                <h3 className="text-xl font-bold text-white mb-3">First-Party Cookies</h3>
                <p className="mb-4">Placed by Resilient Privacy, Inc. directly on our website.</p>

                <h3 className="text-xl font-bold text-white mb-3">Third-Party Cookies</h3>
                <p className="mb-4">Placed by service providers, such as analytics or advertising partners, when interacting with our site.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Categories of Cookies
                </h2>

                <h3 className="text-xl font-bold text-white mb-3">Strictly Necessary Cookies</h3>
                <p className="mb-4">Essential for the website to operate, such as enabling security, form submissions, or preference settings. These cannot be disabled through our cookie tools.</p>

                <h3 className="text-xl font-bold text-white mb-3">Performance Cookies</h3>
                <p className="mb-4">Help us understand how visitors interact with our site by collecting anonymous data on visits and traffic patterns. This information is used to measure and improve performance.</p>

                <h3 className="text-xl font-bold text-white mb-3">Customization Cookies</h3>
                <p className="mb-4">Enable us to remember your preferences and provide a more personalized experience.</p>

                <h3 className="text-xl font-bold text-white mb-3">Advertising and Targeting Cookies</h3>
                <p className="mb-4">Used to show you relevant Resilient Privacy promotions across other platforms and measure the effectiveness of our campaigns. These cookies ensure that ads are more meaningful and reduce repetition.</p>
                
                <p className="mb-4">We may use the following advertising partners:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong>Twitter</strong> – Tailors advertising based on browsing behavior. Manage settings at <a href="https://help.twitter.com/en/personalization-data-settings" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://help.twitter.com/en/personalization-data-settings</a></li>
                  <li><strong>Facebook Custom Audience</strong> – Helps deliver targeted ads across Facebook platforms. Learn more at <a href="https://www.facebook.com/policies/cookies/" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policies/cookies/</a></li>
                  <li><strong>LinkedIn Ads</strong> – Tracks interactions to personalize ads and measure engagement. Read policy at <a href="https://www.linkedin.com/legal/cookie-policy" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/cookie-policy</a></li>
                  <li><strong>Instagram (Meta Platforms)</strong> – Uses engagement data to provide relevant ads and track performance. See data policy at <a href="https://help.instagram.com/519522125107875" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://help.instagram.com/519522125107875</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Analytics Cookies
                </h2>
                <p className="mb-4">We use third-party analytics tools to understand visitor behavior and improve our services.</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li><strong>Google Analytics</strong> – Provides insights into how visitors use our website.</li>
                </ul>
                <p className="mb-4">
                  Learn more at <a href="https://www.google.com/policies/privacy/" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/</a>
                </p>
                <p className="mb-4">
                  Opt out at <a href="http://tools.google.com/dlpage/gaoptout" className="text-accent-500 hover:text-white underline" target="_blank" rel="noopener noreferrer">http://tools.google.com/dlpage/gaoptout</a>
                </p>
                <p>Analytics data is aggregated and does not personally identify individual users.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Your Choices
                </h2>
                <p>
                  You can accept, block, or delete cookies through your browser settings at any time. Keep in mind that opting out of certain cookies may impact your overall experience with our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Updates to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy periodically to reflect changes in law, technology, or our practices. Updates will be posted on this page with a revised effective date.
                </p>
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
            <ContactModal className="btn text-lg px-8 py-4">
              Contact Privacy Team
            </ContactModal>
          </div>
        </div>
      </section>

    </div>
  )
}
