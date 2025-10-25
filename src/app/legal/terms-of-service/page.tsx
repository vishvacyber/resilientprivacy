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
            Last updated: January 15, 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#terms" className="btn text-lg px-8 py-4">
              Read Terms
            </Link>
            <Link
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
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
                <p className="mb-4">
                  These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and Resilient Privacy, Inc. (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a Delaware C Corporation. By accessing, using, or engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, you must immediately cease all use of our services. These Terms supplement and are incorporated into any separate written agreement between the parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Description of Services
                </h2>
                <p className="mb-4">
                  Resilient Privacy provides advanced AI and API security solutions, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI-powered threat detection and response services</li>
                  <li>API security intelligence and monitoring</li>
                  <li>Machine learning security solutions</li>
                  <li>Cybersecurity consulting and advisory services</li>
                  <li>Managed security operations center (SOC) services</li>
                  <li>Incident response and digital forensics</li>
                  <li>Security assessments and penetration testing</li>
                  <li>Compliance consulting and audit support</li>
                  <li>Security training and awareness programs</li>
                  <li>Zero trust architecture implementation</li>
                </ul>
                <p className="mt-4">
                  <strong>Important Disclaimer:</strong> Our services are provided for security enhancement purposes only. We do not guarantee absolute security or prevention of all security incidents. Cybersecurity involves inherent risks that cannot be completely eliminated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. User Accounts and Registration
                </h2>
                <p className="mb-4">
                  To access our services, you may be required to create an account. You represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All information provided during registration is accurate, current, and complete</li>
                  <li>You will maintain and update account information to ensure accuracy</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You accept full responsibility for all activities occurring under your account</li>
                  <li>You will immediately notify us of any unauthorized access or security breaches</li>
                  <li>You have the legal authority to enter into this agreement on behalf of your organization</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Acceptable Use Policy
                </h2>
                <p className="mb-4">You agree not to use our services to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any applicable federal, state, local, or international laws or regulations</li>
                  <li>Infringe upon intellectual property rights of others</li>
                  <li>Transmit, distribute, or store malicious code, malware, or harmful software</li>
                  <li>Attempt to gain unauthorized access to our systems, networks, or other clients&apos; data</li>
                  <li>Conduct security attacks, penetration testing, or vulnerability assessments without explicit authorization</li>
                  <li>Interfere with or disrupt our services or infrastructure</li>
                  <li>Use our services for illegal, unauthorized, or prohibited purposes</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code from our proprietary technology</li>
                  <li>Resell, redistribute, or sublicense our services without written permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Payment Terms and Billing
                </h2>
                <p className="mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Subscription services are billed in advance on a monthly or annual basis</li>
                  <li>Professional services are billed according to the terms specified in individual service agreements</li>
                  <li>All fees are non-refundable unless otherwise specified in writing</li>
                  <li>Late payments may incur additional charges and may result in service suspension</li>
                  <li>We reserve the right to change pricing with 30 days&apos; written notice</li>
                  <li>You are responsible for all applicable taxes, duties, and fees</li>
                  <li>Disputed charges must be reported within 30 days of the billing date</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Intellectual Property Rights
                </h2>
                <p className="mb-4">
                  All intellectual property rights in our services, including but not limited to software, algorithms, methodologies, and documentation, remain our exclusive property. You acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We retain all rights, title, and interest in our proprietary technology and content</li>
                  <li>You may not copy, modify, distribute, or create derivative works of our intellectual property</li>
                  <li>Any improvements, modifications, or enhancements to our services belong to us</li>
                  <li>You retain ownership of your data and content, subject to our right to use it for service provision</li>
                  <li>We may use anonymized, aggregated data for research and service improvement purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. Privacy and Data Protection
                </h2>
                <p className="mb-4">
                  Your privacy and data security are paramount. Our data practices are governed by our comprehensive
                  <Link
                    href="/legal/privacy-policy"
                    className="text-accent-500 hover:text-white mx-1"
                  >
                    Privacy Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
                </p>
                <p>
                  We implement industry-standard security measures to protect your data, but you acknowledge that no system is completely secure and that data transmission over the internet involves inherent risks.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Service Level Agreements and Warranties
                </h2>
                <p className="mb-4">
                  <strong>No Warranties:</strong> Our services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without any warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p className="mb-4">
                  <strong>Service Level Commitments:</strong> Specific service level agreements (SLAs) may be provided in separate agreements and include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Uptime and availability commitments (where applicable)</li>
                  <li>Response times for support and incident response</li>
                  <li>Performance metrics and quality standards</li>
                  <li>Remedies for SLA violations</li>
                </ul>
                <p className="mt-4">
                  <strong>Security Disclaimer:</strong> We do not warrant that our services will prevent all security incidents, data breaches, or cyber attacks. Cybersecurity involves inherent risks that cannot be completely eliminated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="mb-4">
                  <strong>Maximum Liability:</strong> To the fullest extent permitted by law, our total liability for any claims arising from or related to these Terms or our services shall not exceed the total amount paid by you for our services in the twelve (12) months preceding the claim.
                </p>
                <p className="mb-4">
                  <strong>Excluded Damages:</strong> In no event shall we be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Damages resulting from security incidents, data breaches, or cyber attacks</li>
                  <li>Third-party claims or actions</li>
                  <li>Business interruption or loss of goodwill</li>
                  <li>Any damages exceeding the liability cap set forth above</li>
                </ul>
                <p className="mt-4">
                  <strong>Force Majeure:</strong> We shall not be liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, cyber attacks, or other unforeseeable events.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  10. Indemnification
                </h2>
                <p className="mb-4">
                  You agree to defend, indemnify, and hold harmless Resilient Privacy, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising from or related to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use of our services in violation of these Terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Your infringement of any third-party rights</li>
                  <li>Your negligent or wrongful acts or omissions</li>
                  <li>Any content or data you provide to us</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  11. Termination
                </h2>
                <p className="mb-4">
                  <strong>Termination Rights:</strong> Either party may terminate this agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For convenience with 30 days&apos; written notice</li>
                  <li>Immediately for material breach of these Terms</li>
                  <li>Upon non-payment of fees after 15 days&apos; notice</li>
                  <li>For violation of acceptable use policies</li>
                </ul>
                <p className="mt-4">
                  <strong>Effect of Termination:</strong> Upon termination, your access to our services will cease immediately, and we will delete your data in accordance with our data retention policies. Provisions that by their nature should survive termination shall remain in effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  12. Dispute Resolution and Governing Law
                </h2>
                <p className="mb-4">
                  <strong>Governing Law:</strong> These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.
                </p>
                <p className="mb-4">
                  <strong>Dispute Resolution:</strong> Any disputes arising from or related to these Terms shall be resolved through the following process:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Good faith negotiations between the parties (30 days)</li>
                  <li>Mediation through a mutually agreed mediator (if negotiations fail)</li>
                  <li>Binding arbitration in Delaware under the rules of the American Arbitration Association</li>
                </ul>
                <p className="mt-4">
                  <strong>Class Action Waiver:</strong> You agree that any arbitration or legal proceeding shall be conducted on an individual basis and not as a class action, collective action, or other representative proceeding.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  13. Confidentiality and Non-Disclosure
                </h2>
                <p className="mb-4">
                  Both parties acknowledge that they may receive confidential and proprietary information from the other party. Each party agrees to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintain the confidentiality of all confidential information</li>
                  <li>Use confidential information solely for the purpose of providing or receiving services</li>
                  <li>Not disclose confidential information to third parties without written consent</li>
                  <li>Return or destroy confidential information upon termination</li>
                  <li>Implement reasonable security measures to protect confidential information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  14. Compliance and Regulatory Requirements
                </h2>
                <p className="mb-4">
                  You are responsible for ensuring compliance with all applicable laws, regulations, and industry standards in your use of our services. This includes but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Data protection and privacy laws (GDPR, CCPA, etc.)</li>
                  <li>Industry-specific regulations (HIPAA, SOX, PCI-DSS, etc.)</li>
                  <li>Export control and sanctions regulations</li>
                  <li>Cybersecurity and incident reporting requirements</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate services if we reasonably believe you are in violation of applicable laws or regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  15. Changes to Terms
                </h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the updated Terms on our website</li>
                  <li>Sending email notification to your registered email address</li>
                  <li>Providing notice through our service platform</li>
                </ul>
                <p className="mt-4">
                  Your continued use of our services after the effective date of any changes constitutes acceptance of the modified Terms. If you do not agree to the changes, you must terminate your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  16. Severability and Entire Agreement
                </h2>
                <p className="mb-4">
                  If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall remain in full force and effect. These Terms, together with any separate service agreements, constitute the entire agreement between the parties and supersede all prior agreements and understandings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  17. Contact Information
                </h2>
                <p className="mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#222]">
                  <p><strong>Legal Department:</strong> legal@resilientprivacy.com</p>
                  <p><strong>General Inquiries:</strong> info@resilientprivacy.com</p>
                  <p><strong>Address:</strong> Resilient Privacy, Inc., Delaware, United States</p>
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
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
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
