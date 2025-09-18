import Link from 'next/link'

export default function DefinitionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-accent-500">Definitions</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Privacy Policy Section 2: Legal Terms and Definitions
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
            <div className="space-y-6 text-text-secondary">
              <p className="mb-8">
                For the purposes of this Privacy Policy, the following
                definitions apply. These terms are defined in accordance with
                applicable data protection laws including GDPR, CCPA/CPRA, DPDP
                Act, and Privacy Act 1988 (Cth).
              </p>

              {/* Personal Data / Personal Information */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Personal Data / Personal Information
                </h3>
                <p className="mb-3">
                  Any information relating to an identified or identifiable
                  natural person. This includes but is not limited to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <strong className="text-white">Direct Identifiers:</strong>{' '}
                    Name, email address, phone number, postal address
                  </li>
                  <li>
                    <strong className="text-white">Online Identifiers:</strong>{' '}
                    IP addresses, device IDs, cookies, session tokens
                  </li>
                  <li>
                    <strong className="text-white">
                      Professional Information:
                    </strong>{' '}
                    Job title, company name, work contact details
                  </li>
                  <li>
                    <strong className="text-white">Technical Data:</strong>{' '}
                    Browser type, operating system, access times
                  </li>
                  <li>
                    <strong className="text-white">Usage Data:</strong> Pages
                    visited, services used, interaction patterns
                  </li>
                </ul>
              </div>

              {/* Sensitive Personal Information */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Sensitive Personal Information
                </h3>
                <p className="mb-3">
                  Under CCPA/CPRA and other applicable laws, sensitive personal
                  information includes:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Social Security numbers, driver's license numbers, or
                    passport numbers
                  </li>
                  <li>
                    Account log-in credentials in combination with passwords or
                    security questions
                  </li>
                  <li>Precise geolocation data (within 1,850 feet)</li>
                  <li>
                    Racial or ethnic origin, religious beliefs, or union
                    membership
                  </li>
                  <li>
                    Genetic data, biometric identifiers, or health information
                  </li>
                  <li>Sex life or sexual orientation information</li>
                </ul>
                <p className="mt-3 text-sm bg-red-900/20 border border-red-500/30 p-3 rounded">
                  <strong className="text-red-400">Note:</strong> We do not
                  intentionally collect sensitive personal information as
                  defined above.
                </p>
              </div>

              {/* Processing */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Processing
                </h3>
                <p>
                  Any operation performed on personal data, including
                  collection, recording, organization, structuring, storage,
                  adaptation, alteration, retrieval, consultation, use,
                  disclosure, dissemination, restriction, erasure, or
                  destruction.
                </p>
              </div>

              {/* Data Controller */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Data Controller
                </h3>
                <p>
                  The natural or legal person who determines the purposes and
                  means of processing personal data. Resilient Privacy LLC acts
                  as the data controller for personal data collected through our
                  services.
                </p>
              </div>

              {/* Data Processor */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Data Processor
                </h3>
                <p>
                  A natural or legal person who processes personal data on
                  behalf of the data controller. This includes our third-party
                  service providers who process data under our instructions.
                </p>
              </div>

              {/* Data Subject */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Data Subject
                </h3>
                <p>
                  An identified or identifiable natural person whose personal
                  data is processed. This includes our website visitors,
                  customers, prospects, and other individuals whose data we
                  process.
                </p>
              </div>

              {/* Consent */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">Consent</h3>
                <p className="mb-3">
                  Any freely given, specific, informed, and unambiguous
                  indication of the data subject's wishes by which they signify
                  agreement to the processing of their personal data. Valid
                  consent must be:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <strong className="text-white">Freely Given:</strong> Not
                    coerced or tied to service provision unless necessary
                  </li>
                  <li>
                    <strong className="text-white">Specific:</strong> Granular
                    and clear about the processing purposes
                  </li>
                  <li>
                    <strong className="text-white">Informed:</strong> Provided
                    with clear information about the processing
                  </li>
                  <li>
                    <strong className="text-white">Unambiguous:</strong> Clear
                    affirmative action (not pre-ticked boxes)
                  </li>
                </ul>
              </div>

              {/* Legitimate Interest */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Legitimate Interest
                </h3>
                <p>
                  A lawful basis for processing under GDPR Article 6(1)(f) where
                  processing is necessary for legitimate interests pursued by
                  the controller or third party, except where overridden by the
                  interests or fundamental rights of the data subject.
                </p>
              </div>

              {/* Business Purpose */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Business Purpose (CCPA/CPRA)
                </h3>
                <p className="mb-3">
                  Under California law, a business purpose includes:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Performing services reasonably expected by the consumer
                  </li>
                  <li>Providing customer service and support</li>
                  <li>Processing transactions and payments</li>
                  <li>Detecting and preventing fraud or security incidents</li>
                  <li>Debugging and repairing functionality</li>
                  <li>Internal research and development</li>
                  <li>Quality and safety maintenance and verification</li>
                </ul>
              </div>

              {/* Commercial Purpose */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Commercial Purpose (CCPA/CPRA)
                </h3>
                <p>
                  The use of personal information to advance commercial or
                  economic interests, including profiling, advertising, or
                  marketing activities.
                </p>
              </div>

              {/* Sale of Personal Information */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Sale of Personal Information
                </h3>
                <p className="mb-2">
                  Under CCPA/CPRA, "sale" includes selling, renting, releasing,
                  disclosing, disseminating, making available, transferring, or
                  otherwise communicating personal information to a third party
                  for monetary or other valuable consideration.
                </p>
                <p className="text-sm bg-green-900/20 border border-green-500/30 p-3 rounded">
                  <strong className="text-green-400">Our Policy:</strong> We do
                  not sell personal information as defined by applicable privacy
                  laws.
                </p>
              </div>

              {/* Sharing */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Sharing (CPRA)
                </h3>
                <p>
                  Under the California Privacy Rights Act, sharing means
                  disclosing personal information to a third party for
                  cross-context behavioral advertising, whether or not for
                  monetary consideration.
                </p>
              </div>

              {/* Third Party */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Third Party
                </h3>
                <p>
                  A natural or legal person, public authority, agency, or body
                  other than the data subject, controller, processor, and
                  persons who are authorized to process personal data under the
                  direct authority of the controller or processor.
                </p>
              </div>

              {/* Service Provider */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Service Provider
                </h3>
                <p>
                  Under CCPA/CPRA, a service provider is a person that processes
                  personal information on behalf of a business pursuant to a
                  written contract, provided the contract prohibits the service
                  provider from using the personal information for any purpose
                  other than performing the specified services.
                </p>
              </div>

              {/* Cross-border Transfer */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Cross-border Transfer
                </h3>
                <p>
                  The transfer of personal data from one jurisdiction to
                  another, which may be subject to additional safeguards and
                  legal requirements under applicable data protection laws.
                </p>
              </div>

              {/* Data Breach */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Data Breach
                </h3>
                <p>
                  A security incident that results in the accidental or unlawful
                  destruction, loss, alteration, unauthorized disclosure of, or
                  access to personal data transmitted, stored, or otherwise
                  processed.
                </p>
              </div>

              {/* Anonymization */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Anonymization
                </h3>
                <p>
                  The process of removing or modifying personal data so that
                  individuals cannot be identified directly or indirectly, by
                  the data controller or any other person, and the data cannot
                  be re-identified.
                </p>
              </div>

              {/* Pseudonymization */}
              <div className="bg-[#0D0D0F] p-6 rounded border border-[#333]">
                <h3 className="text-xl font-bold text-white mb-3">
                  Pseudonymization
                </h3>
                <p>
                  The processing of personal data so that it can no longer be
                  attributed to a specific data subject without the use of
                  additional information, provided such additional information
                  is kept separately and subject to technical and organizational
                  measures.
                </p>
              </div>

              {/* Navigation */}
              <div className="border-t border-[#333] pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <Link
                    href="/legal/privacy-policy/sections/introduction-scope"
                    className="text-accent-500 hover:text-white underline"
                  >
                    ← Previous: Introduction & Scope
                  </Link>
                  <Link
                    href="/legal/privacy-policy/sections/information-collection"
                    className="text-accent-500 hover:text-white underline"
                  >
                    Next: Information Collection →
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
