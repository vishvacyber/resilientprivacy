import Link from 'next/link'

export default function DataSecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Data <span className="text-accent-500">Security</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Privacy Policy Section 8: How We Protect Your Personal Data
          </p>
          <Link
            href="/legal/privacy-policy"
            className="text-accent-500 hover:text-white underline"
          >
            ← Back to Privacy Policy
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-8 text-text-secondary">
              <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  🔐 Security-First Approach
                </h3>
                <p>
                  As a cybersecurity company, we implement enterprise-grade
                  security measures that exceed industry standards. Your data
                  security is fundamental to our business and reputation.
                </p>
              </div>

              {/* Security Framework */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  8.1 Security Framework
                </h2>
                <p className="mb-6">
                  Our comprehensive security program is built on
                  industry-leading frameworks and standards:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Compliance Standards
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">ISO 27001:2013</strong> -
                        Information Security Management
                      </li>
                      <li>
                        <strong className="text-white">ISO 27701:2019</strong> -
                        Privacy Information Management
                      </li>
                      <li>
                        <strong className="text-white">SOC 2 Type II</strong> -
                        Security, Availability, Privacy
                      </li>
                      <li>
                        <strong className="text-white">
                          NIST Cybersecurity Framework
                        </strong>{' '}
                        - Risk Management
                      </li>
                      <li>
                        <strong className="text-white">
                          NIST Privacy Framework
                        </strong>{' '}
                        - Privacy Risk Management
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Industry Certifications
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">CSA STAR</strong> - Cloud
                        Security Alliance
                      </li>
                      <li>
                        <strong className="text-white">FedRAMP</strong> -
                        Federal Risk Authorization
                      </li>
                      <li>
                        <strong className="text-white">HITRUST CSF</strong> -
                        Healthcare Security
                      </li>
                      <li>
                        <strong className="text-white">PCI DSS Level 1</strong>{' '}
                        - Payment Card Security
                      </li>
                      <li>
                        <strong className="text-white">FISMA</strong> - Federal
                        Information Security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Safeguards */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  8.2 Technical Safeguards
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Encryption
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">Data at Rest:</strong>{' '}
                        AES-256 encryption for all stored data
                      </li>
                      <li>
                        <strong className="text-white">Data in Transit:</strong>{' '}
                        TLS 1.3 for all communications
                      </li>
                      <li>
                        <strong className="text-white">
                          Database Encryption:
                        </strong>{' '}
                        Transparent data encryption (TDE)
                      </li>
                      <li>
                        <strong className="text-white">
                          Backup Encryption:
                        </strong>{' '}
                        Encrypted backup storage with key rotation
                      </li>
                      <li>
                        <strong className="text-white">Key Management:</strong>{' '}
                        Hardware Security Modules (HSMs)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Access Controls
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Multi-Factor Authentication:
                        </strong>{' '}
                        Required for all system access
                      </li>
                      <li>
                        <strong className="text-white">
                          Role-Based Access:
                        </strong>{' '}
                        Principle of least privilege
                      </li>
                      <li>
                        <strong className="text-white">
                          Zero Trust Architecture:
                        </strong>{' '}
                        Continuous verification
                      </li>
                      <li>
                        <strong className="text-white">
                          Privileged Access Management:
                        </strong>{' '}
                        Just-in-time access
                      </li>
                      <li>
                        <strong className="text-white">
                          Session Management:
                        </strong>{' '}
                        Automatic timeout and monitoring
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Network Security
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">Firewalls:</strong>{' '}
                        Next-generation firewalls with deep packet inspection
                      </li>
                      <li>
                        <strong className="text-white">
                          Intrusion Detection:
                        </strong>{' '}
                        AI-powered threat detection systems
                      </li>
                      <li>
                        <strong className="text-white">
                          Network Segmentation:
                        </strong>{' '}
                        Micro-segmentation for data isolation
                      </li>
                      <li>
                        <strong className="text-white">VPN Access:</strong>{' '}
                        Secure remote access with certificate-based
                        authentication
                      </li>
                      <li>
                        <strong className="text-white">DDoS Protection:</strong>{' '}
                        Multi-layered DDoS mitigation
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Application Security
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Secure Development:
                        </strong>{' '}
                        Security by design principles
                      </li>
                      <li>
                        <strong className="text-white">Code Reviews:</strong>{' '}
                        Automated and manual security testing
                      </li>
                      <li>
                        <strong className="text-white">
                          Vulnerability Scanning:
                        </strong>{' '}
                        Continuous security assessments
                      </li>
                      <li>
                        <strong className="text-white">
                          Penetration Testing:
                        </strong>{' '}
                        Quarterly third-party security testing
                      </li>
                      <li>
                        <strong className="text-white">
                          Web Application Firewall:
                        </strong>{' '}
                        Real-time attack protection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Physical and Environmental Security */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  8.3 Physical and Environmental Security
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Data Center Security
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">
                          Tier III+ Facilities:
                        </strong>{' '}
                        Geographically distributed data centers
                      </li>
                      <li>
                        <strong className="text-white">
                          Biometric Access:
                        </strong>{' '}
                        Multi-factor physical authentication
                      </li>
                      <li>
                        <strong className="text-white">24/7 Monitoring:</strong>{' '}
                        Security personnel and surveillance systems
                      </li>
                      <li>
                        <strong className="text-white">
                          Environmental Controls:
                        </strong>{' '}
                        Climate, power, and fire suppression
                      </li>
                      <li>
                        <strong className="text-white">Compliance:</strong> SSAE
                        18 SOC 2 audited facilities
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Office Security
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong className="text-white">Access Control:</strong>{' '}
                        Badge-based entry systems
                      </li>
                      <li>
                        <strong className="text-white">
                          Clean Desk Policy:
                        </strong>{' '}
                        Secure storage of sensitive materials
                      </li>
                      <li>
                        <strong className="text-white">Device Security:</strong>{' '}
                        Encrypted laptops and mobile devices
                      </li>
                      <li>
                        <strong className="text-white">
                          Visitor Management:
                        </strong>{' '}
                        Escorted access and NDA requirements
                      </li>
                      <li>
                        <strong className="text-white">
                          Security Training:
                        </strong>{' '}
                        Regular employee security awareness
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Operational Security */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  8.4 Operational Security
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Monitoring & Detection
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>24/7 Security Operations Center (SOC)</li>
                      <li>Real-time threat intelligence feeds</li>
                      <li>Automated incident response workflows</li>
                      <li>Behavioral analytics and anomaly detection</li>
                      <li>Comprehensive audit logging</li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Backup & Recovery
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Automated daily encrypted backups</li>
                      <li>Geographically distributed backup storage</li>
                      <li>Regular restore testing procedures</li>
                      <li>Business continuity planning</li>
                      <li>
                        Disaster recovery capabilities (RTO: 4 hours, RPO: 1
                        hour)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Breach Response */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  8.5 Data Breach Response
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    We maintain a comprehensive incident response plan that
                    includes:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Immediate Response (0-24 hours)
                      </h4>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                        <li>Incident detection and containment</li>
                        <li>Forensic investigation initiation</li>
                        <li>Risk assessment and impact analysis</li>
                        <li>Internal stakeholder notification</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Regulatory Compliance (24-72 hours)
                      </h4>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                        <li>
                          Regulatory authority notification (GDPR: 72 hours)
                        </li>
                        <li>
                          Affected individual notification (GDPR: without undue
                          delay)
                        </li>
                        <li>Customer and partner communication</li>
                        <li>Remediation and recovery actions</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-4 text-sm">
                    In the unlikely event of a data breach affecting your
                    personal information, we will notify you promptly and
                    provide clear information about what happened, what
                    information was involved, and what steps we're taking to
                    address the situation.
                  </p>
                </div>
              </div>

              {/* Third-Party Security */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  8.6 Third-Party Security
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    We carefully vet all third-party service providers and
                    require them to maintain appropriate security measures:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong className="text-white">Due Diligence:</strong>{' '}
                      Security assessments and compliance verification
                    </li>
                    <li>
                      <strong className="text-white">
                        Contractual Requirements:
                      </strong>{' '}
                      Data Processing Agreements with security obligations
                    </li>
                    <li>
                      <strong className="text-white">
                        Ongoing Monitoring:
                      </strong>{' '}
                      Regular security reviews and audits
                    </li>
                    <li>
                      <strong className="text-white">
                        Incident Coordination:
                      </strong>{' '}
                      Joint incident response procedures
                    </li>
                  </ul>
                </div>
              </div>

              {/* Security Training */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  8.7 Employee Security Training
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    All employees receive comprehensive security training
                    including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong className="text-white">
                        Security Awareness:
                      </strong>{' '}
                      Monthly training on current threats and best practices
                    </li>
                    <li>
                      <strong className="text-white">Privacy Training:</strong>{' '}
                      Data handling and privacy law compliance
                    </li>
                    <li>
                      <strong className="text-white">Incident Response:</strong>{' '}
                      Procedures for identifying and reporting security
                      incidents
                    </li>
                    <li>
                      <strong className="text-white">
                        Phishing Simulation:
                      </strong>{' '}
                      Regular testing and education programs
                    </li>
                    <li>
                      <strong className="text-white">
                        Compliance Training:
                      </strong>{' '}
                      Role-specific regulatory requirements
                    </li>
                  </ul>
                </div>
              </div>

              {/* Security Contact */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  8.8 Security Contact
                </h2>
                <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                  <p className="mb-4">
                    If you have security concerns or want to report a potential
                    security issue:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-white">Security Team:</strong>{' '}
                      security@resilientprivacy.com
                    </li>
                    <li>
                      <strong className="text-white">Incident Response:</strong>{' '}
                      incident@resilientprivacy.com
                    </li>
                    <li>
                      <strong className="text-white">
                        Vulnerability Reports:
                      </strong>{' '}
                      security@resilientprivacy.com
                    </li>
                    <li>
                      <strong className="text-white">Emergency Hotline:</strong>{' '}
                      +1 (469) 504-4135 (24/7)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/privacy-policy/sections/international-transfers"
                    className="text-accent-500 hover:text-white underline"
                  >
                    ← Previous: International Transfers
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/your-rights"
                    className="text-accent-500 hover:text-white underline"
                  >
                    Next: Your Rights →
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
