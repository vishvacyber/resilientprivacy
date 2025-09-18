import Link from 'next/link'

export default function UseOfInformationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Use of <span className="text-[#8B5CF6]">Information</span>
          </h1>
          <p className="text-lg text-[#A1A1AA] mb-6">
            Privacy Policy Section 5: How We Use Your Personal Data
          </p>
          <Link
            href="/legal/privacy-policy"
            className="text-[#8B5CF6] hover:text-white underline"
          >
            ← Back to Privacy Policy
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-8 text-[#A1A1AA]">
              <p className="mb-8">
                We use your personal information only for legitimate business
                purposes and in accordance with applicable privacy laws. This
                section details how we use different categories of information
                we collect.
              </p>

              {/* Service Delivery and Management */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  5.1 Service Delivery and Management
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Cybersecurity Service Provision
                    </h3>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Deliver contracted cybersecurity services and solutions
                      </li>
                      <li>
                        Configure and customize security tools and platforms
                      </li>
                      <li>
                        Monitor security events and provide threat intelligence
                      </li>
                      <li>
                        Generate security reports and compliance documentation
                      </li>
                      <li>Provide incident response and forensic analysis</li>
                      <li>
                        Maintain security baselines and vulnerability
                        assessments
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Account and Customer Management
                    </h3>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Create and maintain customer accounts and profiles
                      </li>
                      <li>Authenticate users and manage access permissions</li>
                      <li>
                        Process billing, payments, and financial transactions
                      </li>
                      <li>Manage service subscriptions and renewals</li>
                      <li>Track service usage and performance metrics</li>
                      <li>Provide customer onboarding and training</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Technical Support and Maintenance
                    </h3>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Provide technical support and troubleshooting</li>
                      <li>Resolve service issues and system problems</li>
                      <li>Perform system maintenance and updates</li>
                      <li>Optimize service performance and reliability</li>
                      <li>Conduct system health checks and monitoring</li>
                      <li>Provide user training and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Communication and Customer Relations */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  5.2 Communication and Customer Relations
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Customer Communications
                    </h3>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Respond to inquiries, requests, and support tickets
                      </li>
                      <li>Send service notifications and system alerts</li>
                      <li>Provide security updates and threat advisories</li>
                      <li>Communicate billing and account information</li>
                      <li>Send contractual and legal notices</li>
                      <li>Conduct customer satisfaction surveys</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Marketing and Business Development
                    </h3>
                    <p className="mb-3">
                      With appropriate consent or legitimate interest, we use
                      your information to:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Invite you to webinars, conferences, and industry events
                      </li>
                      <li>
                        Share information about new services and product updates
                      </li>
                      <li>Conduct market research and competitive analysis</li>
                      <li>Personalize marketing content and recommendations</li>
                      <li>Measure marketing campaign effectiveness</li>
                    </ul>
                    <p className="mt-3 text-sm bg-blue-900/20 border border-blue-500/30 p-3 rounded">
                      <strong className="text-blue-400">Opt-Out:</strong> You
                      can unsubscribe from marketing communications at any time
                      using the links in our emails or by contacting us
                      directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security and Fraud Prevention */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  5.3 Security and Fraud Prevention
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Information Security
                    </h3>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Protect our systems and networks from cyber threats
                      </li>
                      <li>
                        Monitor for unauthorized access and suspicious activity
                      </li>
                      <li>
                        Implement access controls and authentication mechanisms
                      </li>
                      <li>
                        Conduct security audits and vulnerability assessments
                      </li>
                      <li>Investigate security incidents and breaches</li>
                      <li>Maintain security logs and forensic evidence</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Fraud Detection and Prevention
                    </h3>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Detect and prevent fraudulent transactions and
                        activities
                      </li>
                      <li>Verify identity and authenticate legitimate users</li>
                      <li>
                        Monitor payment patterns and flag suspicious behavior
                      </li>
                      <li>Investigate potential fraud and financial crimes</li>
                      <li>
                        Comply with anti-money laundering (AML) requirements
                      </li>
                      <li>
                        Report suspicious activities to relevant authorities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics and Business Intelligence */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  5.4 Analytics and Business Intelligence
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Service Analytics and Improvement
                    </h3>
                    <p className="mb-3">
                      We use aggregated and anonymized data to:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Analyze service usage patterns and performance metrics
                      </li>
                      <li>
                        Identify areas for service improvement and optimization
                      </li>
                      <li>Develop new features and capabilities</li>
                      <li>Conduct research and development activities</li>
                      <li>Create industry benchmarks and best practices</li>
                      <li>Generate statistical reports and insights</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Website and Digital Analytics
                    </h3>
                    <p className="mb-3">We use website data to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Analyze website traffic and user behavior patterns
                      </li>
                      <li>Optimize website performance and user experience</li>
                      <li>Measure content effectiveness and engagement</li>
                      <li>Improve navigation and site functionality</li>
                      <li>A/B test new features and design elements</li>
                      <li>Generate reports on digital marketing performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Legal and Compliance */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  5.5 Legal and Compliance
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Regulatory Compliance
                    </h3>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Comply with applicable privacy and data protection laws
                      </li>
                      <li>
                        Meet regulatory reporting and disclosure requirements
                      </li>
                      <li>Conduct compliance audits and assessments</li>
                      <li>Maintain records for regulatory examinations</li>
                      <li>
                        Respond to regulatory inquiries and investigations
                      </li>
                      <li>Implement required security and privacy controls</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Legal Proceedings and Rights Protection
                    </h3>
                    <p className="mb-3">We may use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Respond to legal process, court orders, and subpoenas
                      </li>
                      <li>Defend our legal rights and interests</li>
                      <li>
                        Investigate potential violations of our terms of service
                      </li>
                      <li>Protect against legal liability and claims</li>
                      <li>Enforce contracts and agreements</li>
                      <li>Cooperate with law enforcement when required</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Human Resources and Employment */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  5.6 Human Resources and Employment
                </h2>

                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Recruitment and Employment
                  </h3>
                  <p className="mb-3">
                    For job applicants and employees, we use information to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Evaluate job applications and qualifications</li>
                    <li>
                      Conduct interviews and background checks (where legally
                      permitted)
                    </li>
                    <li>Make employment decisions and job offers</li>
                    <li>Onboard new employees and contractors</li>
                    <li>Manage payroll, benefits, and HR administration</li>
                    <li>Provide training and professional development</li>
                    <li>Conduct performance reviews and evaluations</li>
                    <li>Maintain employment records and compliance</li>
                  </ul>
                </div>
              </div>

              {/* Data Processing Principles */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  5.7 Data Processing Principles
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Purpose Limitation
                    </h3>
                    <p className="mb-3">We ensure that:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>
                        Data is used only for specified, explicit purposes
                      </li>
                      <li>
                        New uses require additional consent or legal basis
                      </li>
                      <li>Processing is compatible with original purposes</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Data Minimization
                    </h3>
                    <p className="mb-3">We ensure that:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Processing is limited to what is necessary</li>
                      <li>Excessive data collection is avoided</li>
                      <li>Regular reviews ensure continued relevance</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Accuracy and Quality
                    </h3>
                    <p className="mb-3">We ensure that:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Data is accurate and up-to-date</li>
                      <li>Inaccurate data is corrected or deleted</li>
                      <li>Quality controls are implemented</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Storage Limitation
                    </h3>
                    <p className="mb-3">We ensure that:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Data is retained only as long as necessary</li>
                      <li>Retention periods are clearly defined</li>
                      <li>Automatic deletion processes are implemented</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Automated Decision Making */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  5.8 Automated Decision Making and Profiling
                </h2>

                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Limited Automated Processing
                  </h3>
                  <p className="mb-3">
                    We use limited automated processing for:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Fraud detection and security monitoring</li>
                    <li>Service personalization and recommendations</li>
                    <li>Technical support ticket routing</li>
                    <li>Marketing content optimization</li>
                  </ul>
                  <p className="mt-4 text-sm bg-yellow-900/20 border border-yellow-500/30 p-3 rounded">
                    <strong className="text-yellow-400">Your Rights:</strong>{' '}
                    Under GDPR, you have the right not to be subject to
                    decisions based solely on automated processing that produce
                    legal effects or significantly affect you. Contact us to
                    exercise this right.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/privacy-policy/sections/legal-basis"
                    className="text-[#8B5CF6] hover:text-white underline"
                  >
                    ← Previous: Legal Basis for Processing
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/information-sharing"
                    className="text-[#8B5CF6] hover:text-white underline"
                  >
                    Next: Information Sharing →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
