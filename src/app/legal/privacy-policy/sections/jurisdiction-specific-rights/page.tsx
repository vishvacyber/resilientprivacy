import Link from 'next/link'

export default function JurisdictionSpecificRightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Jurisdiction-Specific{' '}
            <span className="text-accent-500">Privacy Rights</span>
          </h1>
          <p className="text-xl text-text-secondary mb-4 max-w-4xl mx-auto">
            Your Privacy Rights by Geographic Location
          </p>
          <p className="text-lg text-text-secondary mb-8 max-w-4xl mx-auto">
            Section 10 of our Privacy Policy
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Link
              href="/legal/privacy-policy"
              className="btn text-lg px-8 py-4"
            >
              Back to Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]">
            <div className="space-y-8 text-text-secondary">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  10. Jurisdiction-Specific Privacy Rights
                </h2>

                <div className="space-y-8">
                  <p>
                    Depending on your location, you may have additional privacy
                    rights under local laws. This section outlines the specific
                    rights available to you based on your jurisdiction.
                  </p>

                  {/* United States */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      🇺🇸 United States Residents
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          California Residents (CCPA/CPRA)
                        </h4>
                        <p className="mb-3">
                          If you are a California resident, you have additional
                          rights under the California Consumer Privacy Act
                          (CCPA) and California Privacy Rights Act (CPRA):
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            <strong>Right to Know:</strong> Request information
                            about Personal Data collected, used, disclosed, or
                            sold
                          </li>
                          <li>
                            <strong>Right to Delete:</strong> Request deletion
                            of Personal Data
                          </li>
                          <li>
                            <strong>Right to Correct:</strong> Request
                            correction of inaccurate Personal Data
                          </li>
                          <li>
                            <strong>Right to Opt-Out:</strong> Opt-out of the
                            sale or sharing of Personal Data
                          </li>
                          <li>
                            <strong>Right to Limit:</strong> Limit use of
                            sensitive Personal Data
                          </li>
                          <li>
                            <strong>Right to Non-Discrimination:</strong> Not be
                            discriminated against for exercising privacy rights
                          </li>
                          <li>
                            <strong>Right to Portability:</strong> Receive your
                            Personal Data in a portable format
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Virginia Residents (VCDPA)
                        </h4>
                        <p className="mb-3">
                          Virginia residents have rights under the Virginia
                          Consumer Data Protection Act:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            <strong>Right to Access:</strong> Confirm whether we
                            process your Personal Data
                          </li>
                          <li>
                            <strong>Right to Correction:</strong> Correct
                            inaccurate Personal Data
                          </li>
                          <li>
                            <strong>Right to Deletion:</strong> Delete Personal
                            Data
                          </li>
                          <li>
                            <strong>Right to Portability:</strong> Obtain a copy
                            of your Personal Data
                          </li>
                          <li>
                            <strong>Right to Opt-Out:</strong> Opt-out of
                            targeted advertising and profiling
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Colorado Residents (CPA)
                        </h4>
                        <p className="mb-3">
                          Colorado residents have rights under the Colorado
                          Privacy Act:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                          <li>
                            <strong>Right to Access:</strong> Access your
                            Personal Data
                          </li>
                          <li>
                            <strong>Right to Correction:</strong> Correct
                            inaccurate Personal Data
                          </li>
                          <li>
                            <strong>Right to Deletion:</strong> Delete your
                            Personal Data
                          </li>
                          <li>
                            <strong>Right to Portability:</strong> Receive your
                            Personal Data in a portable format
                          </li>
                          <li>
                            <strong>Right to Opt-Out:</strong> Opt-out of
                            targeted advertising and profiling
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* European Union */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      🇪🇺 European Union Residents
                    </h3>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">
                        General Data Protection Regulation (GDPR)
                      </h4>
                      <p className="mb-3">
                        If you are in the European Union, you have the following
                        rights under the GDPR:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                        <li>
                          <strong>Right to Information:</strong> Be informed
                          about data processing
                        </li>
                        <li>
                          <strong>Right of Access:</strong> Access your Personal
                          Data
                        </li>
                        <li>
                          <strong>Right to Rectification:</strong> Correct
                          inaccurate Personal Data
                        </li>
                        <li>
                          <strong>Right to Erasure:</strong> Request deletion of
                          Personal Data ("right to be forgotten")
                        </li>
                        <li>
                          <strong>Right to Restriction:</strong> Restrict
                          processing of Personal Data
                        </li>
                        <li>
                          <strong>Right to Portability:</strong> Receive your
                          Personal Data in a portable format
                        </li>
                        <li>
                          <strong>Right to Object:</strong> Object to processing
                          of Personal Data
                        </li>
                        <li>
                          <strong>Rights in Automated Decision Making:</strong>{' '}
                          Rights regarding automated decision making and
                          profiling
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* United Kingdom */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      🇬🇧 United Kingdom Residents
                    </h3>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">
                        UK GDPR and Data Protection Act 2018
                      </h4>
                      <p className="mb-3">
                        UK residents have rights under the UK GDPR and Data
                        Protection Act 2018:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                        <li>
                          <strong>Right to Information:</strong> Be informed
                          about data processing
                        </li>
                        <li>
                          <strong>Right of Access:</strong> Access your Personal
                          Data
                        </li>
                        <li>
                          <strong>Right to Rectification:</strong> Correct
                          inaccurate Personal Data
                        </li>
                        <li>
                          <strong>Right to Erasure:</strong> Request deletion of
                          Personal Data
                        </li>
                        <li>
                          <strong>Right to Restrict Processing:</strong>{' '}
                          Restrict processing of Personal Data
                        </li>
                        <li>
                          <strong>Right to Data Portability:</strong> Receive
                          your Personal Data in a portable format
                        </li>
                        <li>
                          <strong>Right to Object:</strong> Object to processing
                          of Personal Data
                        </li>
                        <li>
                          <strong>Rights in Automated Decision Making:</strong>{' '}
                          Rights regarding automated decision making
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      How to Exercise Your Rights
                    </h3>

                    <div className="space-y-4">
                      <p>
                        To exercise any of these rights, please contact us using
                        the information provided in Section 19 (Contact
                        Information) of this Privacy Policy.
                      </p>

                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-green-300 font-bold mb-3">
                          📧 Contact Methods
                        </h4>
                        <div className="space-y-2 text-green-300 text-sm">
                          <p>
                            <strong>Email:</strong> privacy@resilientprivacy.com
                          </p>
                          <p>
                          </p>
                          <p>
                            <strong>Online Form:</strong> Available on our
                            website
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                        <h4 className="text-blue-300 font-bold mb-3">
                          ⏱ Response Timeline
                        </h4>
                        <p className="text-blue-300 text-sm">
                          We will respond to your request within 30 days of
                          receipt, unless additional time is required due to the
                          complexity of the request or the number of requests.
                          We will notify you if an extension is necessary.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Link
                      href="/legal/privacy-policy"
                      className="btn-secondary text-lg px-8 py-4"
                    >
                      Back to Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
