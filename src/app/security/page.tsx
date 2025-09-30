'use client'
import Link from 'next/link'

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-4xl mx-auto bg-background-alt rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-accent-500 mb-6 text-center">
          Security at Resilient{' '}
          <span
            style={{
              color: 'accent-500',
              fontWeight: 700,
            }}
          >
            Privacy
          </span>
        </h1>
        <p className="text-lg text-text-secondary mb-8 text-center">
          Your trust is our top priority. We are committed to maintaining the
          highest standards of security, privacy, and compliance for all our
          clients and partners.
        </p>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Our Security Principles
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2">
            <li>
              Zero Trust Architecture: Every user, device, and connection is
              continuously verified.
            </li>
            <li>
              End-to-End Encryption: All data in transit and at rest is
              encrypted using industry best practices.
            </li>
            <li>
              Continuous Monitoring: 24/7 SOC operations and real-time threat
              detection.
            </li>
            <li>Regular Penetration Testing and Vulnerability Assessments.</li>
            <li>
              Strict Access Controls and Multi-Factor Authentication (MFA) for
              all systems.
            </li>
            <li>
              Comprehensive Incident Response and Disaster Recovery Plans.
            </li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Certifications & Compliance
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2">
            <li>SOC 2 Type II</li>
            <li>ISO/IEC 27001</li>
            <li>GDPR & CCPA Compliance</li>
            <li>CSA STAR</li>
            <li>PCI DSS (where applicable)</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Security Resources
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2">
            <li>
              <Link
                href="https://forms.gle/r4eosBbq6nTf7a8X7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-500 hover:underline"
              >
                Contact Security Team
              </Link>
            </li>
            <li>
              <Link
                href="/resources/blog"
                className="text-accent-500 hover:underline"
              >
                White Papers & Threat Reports
              </Link>
            </li>
            <li>
              <Link
                href="/legal/privacy-policy"
                className="text-accent-500 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms-of-service"
                className="text-accent-500 hover:underline"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Report a Security Issue
          </h2>
          <p className="text-text-secondary mb-2">
            If you believe you have discovered a vulnerability or security
            issue, please contact our security team immediately:
          </p>
          <p className="font-semibold text-accent-500">
            security@resilientprivacy.com
          </p>
        </section>
        <div className="text-center mt-8">
          <Link
            href="https://forms.gle/r4eosBbq6nTf7a8X7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-lg px-8 py-4"
          >
            Contact Security Team
          </Link>
        </div>
      </div>
    </div>
  )
}
