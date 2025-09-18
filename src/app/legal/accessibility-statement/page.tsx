import Link from 'next/link'

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F3F4F6]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Resilient Privacy is committed to ensuring digital accessibility for
            people with disabilities. We are continually improving the user
            experience for everyone and applying the relevant accessibility
            standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#333]">
              <span className="text-accent-500 font-semibold">WCAG 2.1 AA</span>
              <span className="text-text-secondary ml-2">Compliant</span>
            </div>
            <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#333]">
              <span className="text-accent-500 font-semibold">Last Updated</span>
              <span className="text-text-secondary ml-2">January 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Conformance Status */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Conformance Status
            </h2>
            <p className="text-text-secondary mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines
              requirements for designers and developers to improve accessibility
              for people with disabilities. It defines three levels of
              conformance: Level A, Level AA, and Level AAA.
            </p>
            <p className="text-text-secondary mb-6">
              Resilient Privacy is fully conformant with WCAG 2.1 level AA.
              Fully conformant means that the content fully conforms to the
              accessibility standard without any exceptions.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-2xl font-bold text-accent-500 mb-2">
                  100%
                </div>
                <div className="text-sm text-text-secondary">WCAG 2.1 AA</div>
              </div>
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-2xl font-bold text-accent-500 mb-2">
                  50+
                </div>
                <div className="text-sm text-text-secondary">
                  Accessibility Tests
                </div>
              </div>
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-2xl font-bold text-accent-500 mb-2">
                  24/7
                </div>
                <div className="text-sm text-text-secondary">Support Available</div>
              </div>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Accessibility Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Visual Accessibility
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• High contrast color schemes</li>
                  <li>• Scalable text and images</li>
                  <li>• Clear typography and spacing</li>
                  <li>• Consistent navigation structure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Keyboard Navigation
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Full keyboard accessibility</li>
                  <li>• Visible focus indicators</li>
                  <li>• Logical tab order</li>
                  <li>• Skip navigation links</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Screen Reader Support
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Semantic HTML structure</li>
                  <li>• Alt text for images</li>
                  <li>• ARIA labels and landmarks</li>
                  <li>• Descriptive link text</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Content Accessibility
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Plain language content</li>
                  <li>• Clear headings and structure</li>
                  <li>• Captions for multimedia</li>
                  <li>• Multiple content formats</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing and Evaluation */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Testing and Evaluation
            </h2>
            <p className="text-text-secondary mb-6">
              We use a combination of automated testing tools and manual testing
              to ensure our website meets accessibility standards. Our testing
              process includes:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Automated Testing
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• axe-core accessibility testing</li>
                  <li>• Lighthouse accessibility audits</li>
                  <li>• WAVE Web Accessibility Evaluator</li>
                  <li>• Continuous integration testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Manual Testing
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Screen reader testing (NVDA, JAWS)</li>
                  <li>• Keyboard-only navigation</li>
                  <li>• Color contrast verification</li>
                  <li>• User experience testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Known Issues */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Known Issues and Limitations
            </h2>
            <p className="text-text-secondary mb-4">
              While we strive to maintain the highest level of accessibility,
              some third-party content or features may not be fully accessible.
              We are actively working to address any identified issues.
            </p>
            <div className="bg-[#0D0D0F] p-4 rounded-lg border border-[#333]">
              <h3 className="text-lg font-semibold text-white mb-2">
                Current Limitations
              </h3>
              <ul className="space-y-1 text-text-secondary text-sm">
                <li>
                  • Some third-party integrations may have limited accessibility
                </li>
                <li>
                  • Complex data visualizations may require alternative formats
                </li>
                <li>
                  • Live chat features may not be fully accessible to all users
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-text-secondary mb-6">
              We welcome your feedback on the accessibility of our website. If
              you experience accessibility barriers or have suggestions for
              improvement, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Accessibility Support
                </h3>
                <div className="space-y-2 text-text-secondary">
                  <p>Email: accessibility@resilientprivacy.com</p>
                  <p>Phone: +1 (469) 666-0131</p>
                  <p>Response Time: Within 24 hours</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Alternative Formats
                </h3>
                <div className="space-y-2 text-text-secondary">
                  <p>• Large print materials</p>
                  <p>• Audio descriptions</p>
                  <p>• Braille documents</p>
                  <p>• Sign language interpretation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Improvement */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Continuous Improvement
            </h2>
            <p className="text-text-secondary mb-4">
              We are committed to continuously improving the accessibility of
              our website. Our accessibility program includes:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-accent-500 text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-white mb-2">
                  Regular Audits
                </h3>
                <p className="text-sm text-text-secondary">
                  Quarterly accessibility reviews
                </p>
              </div>
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-accent-500 text-2xl mb-2">👥</div>
                <h3 className="font-semibold text-white mb-2">User Feedback</h3>
                <p className="text-sm text-text-secondary">
                  Incorporating user suggestions
                </p>
              </div>
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-accent-500 text-2xl mb-2">📚</div>
                <h3 className="font-semibold text-white mb-2">Training</h3>
                <p className="text-sm text-text-secondary">
                  Team accessibility education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent-500 to-[#7C3AED] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Accessibility Support?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help ensure everyone can access our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-accent-500 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Contact Support
            </Link>
            <Link
              href="mailto:accessibility@resilientprivacy.com"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-500 text-lg px-8 py-4"
            >
              Email Accessibility Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
