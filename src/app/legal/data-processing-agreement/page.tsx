import Link from 'next/link'

export default function DataProcessingAgreement() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F3F4F6]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data Processing Agreement
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            This Data Processing Agreement (DPA) forms part of our commitment to
            GDPR compliance and outlines how Resilient Privacy processes
            personal data on behalf of our customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#333]">
              <span className="text-accent-500 font-semibold">GDPR</span>
              <span className="text-text-secondary ml-2">Compliant</span>
            </div>
            <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#333]">
              <span className="text-accent-500 font-semibold">
                Effective Date
              </span>
              <span className="text-text-secondary ml-2">January 1, 2025</span>
            </div>
            <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#333]">
              <span className="text-accent-500 font-semibold">Version</span>
              <span className="text-text-secondary ml-2">2.1</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Agreement Overview */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Agreement Overview
            </h2>
            <p className="text-text-secondary mb-6">
              This Data Processing Agreement (DPA) is entered into between
              Resilient Privacy (the &quot;Data Processor&quot;) and our
              customers (the &quot;Data Controller&quot;) to ensure compliance
              with the General Data Protection Regulation (GDPR) and other
              applicable data protection laws.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-2xl font-bold text-accent-500 mb-2">
                  100%
                </div>
                <div className="text-sm text-text-secondary">GDPR Compliant</div>
              </div>
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-2xl font-bold text-accent-500 mb-2">
                  24/7
                </div>
                <div className="text-sm text-text-secondary">Data Protection</div>
              </div>
              <div className="text-center p-4 bg-[#0D0D0F] rounded-lg">
                <div className="text-2xl font-bold text-accent-500 mb-2">
                  72h
                </div>
                <div className="text-sm text-text-secondary">
                  Breach Notification
                </div>
              </div>
            </div>
          </div>

          {/* Definitions */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">Definitions</h2>
            <div className="space-y-4">
              <div className="bg-[#0D0D0F] p-4 rounded-lg border border-[#333]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Personal Data
                </h3>
                <p className="text-text-secondary text-sm">
                  Any information relating to an identified or identifiable
                  natural person, including but not limited to names, email
                  addresses, IP addresses, and technical identifiers.
                </p>
              </div>
              <div className="bg-[#0D0D0F] p-4 rounded-lg border border-[#333]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Processing
                </h3>
                <p className="text-text-secondary text-sm">
                  Any operation or set of operations performed on personal data,
                  including collection, recording, organization, structuring,
                  storage, adaptation, alteration, retrieval, consultation, use,
                  disclosure, alignment, combination, restriction, erasure, or
                  destruction.
                </p>
              </div>
              <div className="bg-[#0D0D0F] p-4 rounded-lg border border-[#333]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Data Subject
                </h3>
                <p className="text-text-secondary text-sm">
                  The identified or identifiable natural person to whom the
                  personal data relates.
                </p>
              </div>
              <div className="bg-[#0D0D0F] p-4 rounded-lg border border-[#333]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Data Breach
                </h3>
                <p className="text-text-secondary text-sm">
                  A breach of security leading to the accidental or unlawful
                  destruction, loss, alteration, unauthorized disclosure of, or
                  access to, personal data.
                </p>
              </div>
            </div>
          </div>

          {/* Processing Details */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Processing Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Nature and Purpose
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Providing cybersecurity services</li>
                  <li>• User authentication and authorization</li>
                  <li>• Security monitoring and incident response</li>
                  <li>• Compliance and audit support</li>
                  <li>• Customer support and communication</li>
                  <li>• Service improvement and analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Data Categories
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Contact information (name, email, phone)</li>
                  <li>• Account credentials and authentication data</li>
                  <li>• Technical data (IP addresses, device info)</li>
                  <li>• Usage data and analytics</li>
                  <li>• Security logs and monitoring data</li>
                  <li>• Communication records</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection Obligations */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Data Protection Obligations
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Processor Obligations
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>
                    • Process personal data only on documented instructions from
                    the controller
                  </li>
                  <li>
                    • Ensure persons authorized to process data are bound by
                    confidentiality
                  </li>
                  <li>
                    • Implement appropriate technical and organizational
                    security measures
                  </li>
                  <li>
                    • Assist the controller in responding to data subject
                    requests
                  </li>
                  <li>
                    • Assist the controller in ensuring compliance with security
                    obligations
                  </li>
                  <li>• Delete or return personal data after services end</li>
                  <li>
                    • Make available all information necessary to demonstrate
                    compliance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Security Measures
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Encryption of personal data in transit and at rest</li>
                  <li>
                    • Regular security assessments and penetration testing
                  </li>
                  <li>• Access controls and authentication mechanisms</li>
                  <li>• Incident detection and response procedures</li>
                  <li>• Regular backup and disaster recovery testing</li>
                  <li>• Employee security training and awareness programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Subprocessors */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Subprocessors
            </h2>
            <p className="text-text-secondary mb-6">
              We may engage subprocessors to assist in providing our services.
              All subprocessors are bound by data protection obligations no less
              protective than those in this DPA.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Current Subprocessors
                </h3>
                <div className="space-y-3">
                  <div className="bg-[#0D0D0F] p-3 rounded-lg">
                    <div className="font-semibold text-white">
                      Amazon Web Services
                    </div>
                    <div className="text-sm text-text-secondary">
                      Cloud infrastructure and hosting
                    </div>
                  </div>
                  <div className="bg-[#0D0D0F] p-3 rounded-lg">
                    <div className="font-semibold text-white">
                      Microsoft Azure
                    </div>
                    <div className="text-sm text-text-secondary">
                      Cloud services and analytics
                    </div>
                  </div>
                  <div className="bg-[#0D0D0F] p-3 rounded-lg">
                    <div className="font-semibold text-white">
                      Google Cloud Platform
                    </div>
                    <div className="text-sm text-text-secondary">
                      Data analytics and machine learning
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Subprocessor Requirements
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Written data processing agreements</li>
                  <li>• Adequate security measures</li>
                  <li>• GDPR compliance certification</li>
                  <li>• Regular security audits</li>
                  <li>• Incident notification procedures</li>
                  <li>• Data deletion capabilities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Subject Rights */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Data Subject Rights
            </h2>
            <p className="text-text-secondary mb-6">
              We assist the controller in fulfilling data subject rights
              requests in accordance with applicable data protection laws.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Rights We Support
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Right of access to personal data</li>
                  <li>• Right to rectification of inaccurate data</li>
                  <li>
                    • Right to erasure (&quot;right to be forgotten&quot;)
                  </li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                  <li>• Right to object to processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Response Procedures
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Acknowledge requests within 24 hours</li>
                  <li>• Process requests within 30 days</li>
                  <li>• Provide data in structured format</li>
                  <li>• Verify identity before processing</li>
                  <li>• Maintain audit trail of requests</li>
                  <li>• Escalate complex requests to legal team</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Breach Procedures */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Data Breach Procedures
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Breach Detection and Response
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• 24/7 security monitoring and alerting</li>
                  <li>• Automated threat detection systems</li>
                  <li>• Incident response team on standby</li>
                  <li>• Immediate containment procedures</li>
                  <li>• Forensic analysis capabilities</li>
                  <li>• Legal and regulatory notification processes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Notification Timeline
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Immediate Response
                      </div>
                      <div className="text-sm text-text-secondary">
                        Contain and assess the breach
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Within 24 Hours
                      </div>
                      <div className="text-sm text-text-secondary">
                        Notify controller of potential breach
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Within 72 Hours
                      </div>
                      <div className="text-sm text-text-secondary">
                        Detailed breach notification to controller
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                      4
                    </div>
                    <div>
                      <div className="font-semibold text-white">Ongoing</div>
                      <div className="text-sm text-text-secondary">
                        Provide updates and remediation support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Audit Rights */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">Audit Rights</h2>
            <p className="text-text-secondary mb-6">
              The controller has the right to audit our compliance with this
              DPA, subject to reasonable notice and confidentiality obligations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Audit Scope
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Data processing activities</li>
                  <li>• Security measures and controls</li>
                  <li>• Compliance with this DPA</li>
                  <li>• Subprocessor arrangements</li>
                  <li>• Incident response procedures</li>
                  <li>• Data retention and deletion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Audit Process
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• 30 days advance written notice</li>
                  <li>• Conducted during business hours</li>
                  <li>• Confidentiality agreements required</li>
                  <li>• Reasonable frequency limitations</li>
                  <li>• Cost sharing for third-party audits</li>
                  <li>• Remediation of identified issues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Term and Termination */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Term and Termination
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Term</h3>
                <p className="text-text-secondary">
                  This DPA shall remain in effect for the duration of the
                  service agreement between the parties and shall automatically
                  terminate upon the termination of such agreement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Data Return and Deletion
                </h3>
                <p className="text-text-secondary mb-4">
                  Upon termination of this DPA, we shall:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Return all personal data to the controller</li>
                  <li>• Delete all personal data from our systems</li>
                  <li>• Provide written certification of deletion</li>
                  <li>• Ensure subprocessors also delete data</li>
                  <li>• Maintain records for legal compliance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#333]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h2>
            <p className="text-text-secondary mb-6">
              For questions about this DPA or data protection matters, please
              contact our Data Protection Officer:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Data Protection Officer
                </h3>
                <div className="space-y-2 text-text-secondary">
                  <p>Email: dpo@resilientprivacy.com</p>
                  <p>Phone: +1 (469) 504-4135</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Legal Department
                </h3>
                <div className="space-y-2 text-text-secondary">
                  <p>Email: legal@resilientprivacy.com</p>
                  <p>For contract modifications and legal matters</p>
                  <p>Response time: 2-3 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent-500 to-[#7C3AED] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Data Processing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our data protection team is here to help with any questions about
            our DPA or GDPR compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:dpo@resilientprivacy.com"
              className="btn bg-white text-accent-500 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Contact DPO
            </Link>
            <Link
              href="/legal/privacy-policy"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-500 text-lg px-8 py-4"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
