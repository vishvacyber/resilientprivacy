'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const contactMethods = [
  {
    title: 'Sales & Partnerships',
    description:
      'Enterprise cybersecurity solutions and strategic partnerships',
    email: 'sales@resilientprivacy.com',
    hours: 'Mon-Fri, 9AM-6PM CST',
    department: 'Business Development',
  },
  {
    title: 'Technical Support',
    description: 'Expert assistance for implementation and optimization',
    email: 'support@resilientprivacy.com',
    hours: '24/7 Support Available',
    department: 'Customer Success',
  },
  {
    title: 'Incident Response',
    description: 'Emergency response for security breaches and cyber incidents',
    email: 'ir@resilientprivacy.com',
    hours: '24/7 Emergency Response',
    department: 'Security Operations',
  },
]

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false)
  const [showIncidentForm, setShowIncidentForm] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Mobile-Optimized Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Get in <span className="fxology-text-gradient">Touch</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Ready to strengthen your organization&apos;s cybersecurity posture?
            Our team of experts is here to help you navigate the complex world
            of digital security.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="btn text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 min-h-[44px]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Contact Methods */}
      <section id="contact-info" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#0D0D0F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Contact Our Team
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-2">
              Connect with the right department for your cybersecurity needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                {/* Department Badge */}
                <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-2 sm:px-3 py-1 mb-4 sm:mb-6">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-accent-500 text-xs sm:text-sm font-medium">
                    {method.department}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
                  {method.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary mb-6 sm:mb-8 leading-relaxed">
                  {method.description}
                </p>

                {/* Contact Details */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border border-accent-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full"></div>
                      </div>
                      <span className="text-accent-500 font-medium text-xs sm:text-sm">
                        Email
                      </span>
                    </div>
                    <a
                      href={`mailto:${method.email}`}
                      className="text-white text-sm sm:text-base font-medium hover:text-accent-500 transition-colors duration-200 break-all"
                    >
                      {method.email}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border border-accent-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full"></div>
                      </div>
                      <span className="text-accent-500 font-medium text-xs sm:text-sm">
                        Availability
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm sm:text-base">{method.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-text-secondary mb-6">
              Need immediate assistance? Our incident response team is available
              24/7.
            </p>
            <button
              onClick={() => setShowIncidentForm(true)}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
            >
              Emergency Incident Response
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Don&apos;t wait until it&apos;s too late. Contact us today to
            discuss your cybersecurity needs and start protecting your
            organization. Our team is ready to help you build a robust security
            foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="btn text-lg px-8 py-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Microsoft Forms Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Contact Us</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-text-secondary hover:text-white transition-colors duration-200 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Container */}
            <div className="p-6">
              <iframe
                width="100%"
                height="600"
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=X5B4nXtJyUe8_Q47cbEk1vTkiwwqi3NAhP4Sm3GUiQpUQkJQMkpMQzJJMloyVFE0UjNXMjdRS1BRUi4u&embed=true"
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                style={{ border: 'none', maxWidth: '100%', maxHeight: '100%' }}
                allowFullScreen
                webkitAllowFullScreen
                mozAllowFullScreen
                msAllowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Incident Response Modal */}
      {showIncidentForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Emergency Incident Response</h3>
              <button
                onClick={() => setShowIncidentForm(false)}
                className="text-text-secondary hover:text-white transition-colors duration-200 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Container */}
            <div className="p-6">
              <iframe
                width="100%"
                height="480"
                src="https://forms.cloud.microsoft/r/6Mh3Gvh6tr?embed=true"
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
                allowFullScreen
                webkitAllowFullScreen
                mozAllowFullScreen
                msAllowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
