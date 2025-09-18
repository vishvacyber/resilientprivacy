'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const contactMethods = [
  {
    title: 'Sales & Partnerships',
    description:
      'Enterprise cybersecurity solutions and strategic partnerships',
    phone: '+1 (469) 666-0131',
    email: 'sales@resilientprivacy.com',
    hours: 'Mon-Fri, 9AM-6PM CST',
    department: 'Business Development',
  },
  {
    title: 'Technical Support',
    description: 'Expert assistance for implementation and optimization',
    phone: '+1 (469) 666-0131',
    email: 'support@resilientprivacy.com',
    hours: '24/7 Support Available',
    department: 'Customer Success',
  },
  {
    title: 'Incident Response',
    description: 'Emergency response for security breaches and cyber incidents',
    phone: '+1 (469) 666-0131',
    email: 'ir@resilientprivacy.com',
    hours: '24/7 Emergency Response',
    department: 'Security Operations',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-[#8B5CF6]">Touch</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-8 max-w-4xl mx-auto">
            Ready to strengthen your organization&apos;s cybersecurity posture?
            Our team of experts is here to help you navigate the complex world
            of digital security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section id="contact-info" className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact Our Team
            </h2>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
              Connect with the right department for your cybersecurity needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                {/* Department Badge */}
                <div className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full px-3 py-1 mb-6">
                  <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                  <span className="text-[#8B5CF6] text-sm font-medium">
                    {method.department}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {method.title}
                </h3>
                <p className="text-[#A1A1AA] mb-8 leading-relaxed">
                  {method.description}
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 border border-[#8B5CF6] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                      </div>
                      <span className="text-[#8B5CF6] font-medium text-sm">
                        Phone
                      </span>
                    </div>
                    <a
                      href={`tel:${method.phone.replace(/[^\d+]/g, '')}`}
                      className="text-white text-lg font-mono hover:text-[#8B5CF6] transition-colors duration-200"
                    >
                      {method.phone}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 border border-[#8B5CF6] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                      </div>
                      <span className="text-[#8B5CF6] font-medium text-sm">
                        Email
                      </span>
                    </div>
                    <a
                      href={`mailto:${method.email}`}
                      className="text-white text-base font-medium hover:text-[#8B5CF6] transition-colors duration-200 break-all"
                    >
                      {method.email}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 border border-[#8B5CF6] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                      </div>
                      <span className="text-[#8B5CF6] font-medium text-sm">
                        Availability
                      </span>
                    </div>
                    <p className="text-[#A1A1AA]">{method.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-[#A1A1AA] mb-6">
              Need immediate assistance? Our incident response team is available
              24/7.
            </p>
            <a
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-8 max-w-3xl mx-auto">
            Don&apos;t wait until it&apos;s too late. Contact us today to
            discuss your cybersecurity needs and start protecting your
            organization. Our team is ready to help you build a robust security
            foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
