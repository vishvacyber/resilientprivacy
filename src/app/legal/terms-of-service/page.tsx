import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="text-accent-500">Service</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Last updated: January 15, 2024
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#terms" className="btn text-lg px-8 py-4">
              Read Terms
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

      {/* Terms of Service Content */}
      <section id="terms" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-8 text-text-secondary">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using the services provided by Resilient
                  Privacy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
                  you accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Description of Service
                </h2>
                <p className="mb-4">
                  Resilient Privacy provides cybersecurity consulting, managed
                  security services, threat intelligence, and related security
                  solutions. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Security assessments and audits</li>
                  <li>Incident response services</li>
                  <li>Managed security operations</li>
                  <li>Threat intelligence and monitoring</li>
                  <li>Security consulting and advisory</li>
                  <li>Training and awareness programs</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. User Accounts and Registration
                </h2>
                <p className="mb-4">
                  To access certain features of our services, you may be
                  required to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li>
                    Maintain and update your account information to keep it
                    accurate and current
                  </li>
                  <li>Maintain the security of your account credentials</li>
                  <li>
                    Accept responsibility for all activities that occur under
                    your account
                  </li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Acceptable Use Policy
                </h2>
                <p className="mb-4">You agree not to use our services to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit malicious code or conduct security attacks</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Use our services for illegal or unauthorized purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Payment Terms
                </h2>
                <p className="mb-4">
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fees are billed in advance for subscription services</li>
                  <li>
                    Consulting services are billed upon completion or as
                    specified in the engagement
                  </li>
                  <li>
                    All payments are non-refundable unless otherwise specified
                  </li>
                  <li>
                    Late payments may result in service suspension or
                    termination
                  </li>
                  <li>Prices are subject to change with 30 days notice</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Intellectual Property Rights
                </h2>
                <p className="mb-4">
                  Our services and content are protected by intellectual
                  property laws. You acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    We retain all rights to our proprietary technology and
                    content
                  </li>
                  <li>
                    You may not copy, modify, or distribute our intellectual
                    property
                  </li>
                  <li>
                    Any improvements or modifications to our services belong to
                    us
                  </li>
                  <li>You retain rights to your own data and content</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. Privacy and Data Protection
                </h2>
                <p>
                  Your privacy is important to us. Our collection and use of
                  personal information is governed by our
                  <Link
                    href="/legal/privacy-policy"
                    className="text-accent-500 hover:text-white"
                  >
                    {' '}
                    Privacy Policy
                  </Link>
                  , which is incorporated into these terms by reference.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Service Level Agreements
                </h2>
                <p className="mb-4">
                  Our services include specific service level agreements (SLAs)
                  that define:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Uptime guarantees and availability commitments</li>
                  <li>Response times for support and incident response</li>
                  <li>Performance metrics and quality standards</li>
                  <li>Remedies for SLA violations</li>
                </ul>
                <p className="mt-4">
                  Specific SLA terms are provided in your service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, Resilient Privacy
                  shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Indirect, incidental, special, or consequential damages
                  </li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>
                    Damages resulting from security incidents or data breaches
                  </li>
                  <li>
                    Any damages exceeding the amount paid for our services
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  10. Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless Resilient Privacy
                  from any claims, damages, or expenses arising from your use of
                  our services or violation of these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  11. Termination
                </h2>
                <p className="mb-4">
                  Either party may terminate this agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For convenience with 30 days written notice</li>
                  <li>Immediately for material breach of these terms</li>
                  <li>Upon non-payment of fees</li>
                </ul>
                <p className="mt-4">
                  Upon termination, your access to our services will cease, and
                  we will delete your data in accordance with our data retention
                  policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  12. Governing Law and Dispute Resolution
                </h2>
                <p className="mb-4">
                  These terms are governed by the laws of the State of Delaware.
                  Any disputes shall be resolved through:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Good faith negotiations between the parties</li>
                  <li>Mediation if negotiations fail</li>
                  <li>Binding arbitration in Delaware</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  13. Force Majeure
                </h2>
                <p>
                  Neither party shall be liable for any failure to perform due
                  to circumstances beyond their reasonable control, including
                  but not limited to natural disasters, government actions, or
                  other unforeseeable events.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  14. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time. We
                  will notify you of any material changes by posting the new
                  terms on our website. Your continued use of our services
                  constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  15. Contact Information
                </h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#222]">
                  <p>
                    <strong>Email:</strong> legal@resilientprivacy.com
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Our legal team is available to answer questions about our terms of
            service and help clarify any provisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Contact Legal Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
