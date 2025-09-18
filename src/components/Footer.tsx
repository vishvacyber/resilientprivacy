'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Careers', href: '/about/careers' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Documentation', href: '/resources/documentation' },
      { label: 'Training', href: '/resources/training' },
    ],
  },
  {
    heading: 'Legal & Trust',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Consent Policy', href: '/legal/consent-policy' },
      { label: 'Terms of Service', href: '/legal/terms-of-service' },
      { label: 'Cookie Policy', href: '/legal/cookie-policy' },
      {
        label: 'Accessibility Statement',
        href: '/legal/accessibility-statement',
      },
      {
        label: 'Data Processing Agreement',
        href: '/legal/data-processing-agreement',
      },
      { label: 'Security', href: '/security' },
      { label: 'Trust Center', href: '/trust' },
    ],
  },
]

export default function Footer() {
  const router = useRouter()

  const openCookieSettings = () => {
    router.push('/legal/cookie-policy')
  }

  return (
    <footer className="bg-gradient-to-br from-[#0A0A0F] via-[#1A1A1A] to-[#0D0D0F] text-white border-t border-[#333]/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section - Logo and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-white">Resilient </span>
                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent">
                  Privacy
                </span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full"></div>
            </div>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
              Next-generation cybersecurity company redefining digital trust. We
              design intelligent, adaptive security ecosystems that protect the
              world's most critical organizations.
            </p>
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#8B5CF6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-[#A1A1AA] text-sm">
                  <a
                    href="tel:+14696660131"
                    className="text-white hover:text-[#8B5CF6] transition-colors"
                  >
                    +1 (469) 666-0131
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#8B5CF6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-[#A1A1AA] text-sm">
                  <a
                    href="mailto:info@resilientprivacy.com"
                    className="text-white hover:text-[#8B5CF6] transition-colors"
                  >
                    info@resilientprivacy.com
                  </a>
                </span>
              </div>
            </div>

            {/* Social Links & Actions */}
            <div className="space-y-4">
              {/* Social Media */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.linkedin.com/company/resilientprivacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#1A1A1A] hover:bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center transition-all duration-300 group border border-[#333] hover:border-[#8B5CF6]/30"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#8B5CF6] transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/resilientprivacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#1A1A1A] hover:bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center transition-all duration-300 group border border-[#333] hover:border-[#8B5CF6]/30"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#8B5CF6] transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              {/* Quick Actions */}
              <div>
                <button
                  onClick={openCookieSettings}
                  className="text-[#A1A1AA] hover:text-white transition-colors duration-300 text-sm hover:underline text-left"
                  aria-label="Cookie Settings"
                >
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {columns.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-lg font-semibold text-white mb-6 relative">
                    {col.heading}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full"></div>
                  </h3>
                  <ul className="space-y-4">
                    {col.links.map((link, index) => (
                      <li key={`${link.href}-${index}`}>
                        <Link
                          href={link.href}
                          className="text-[#A1A1AA] hover:text-white transition-all duration-300 text-sm group flex items-center"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#8B5CF6] transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#333] to-transparent mb-12"></div>

        {/* Bottom Section */}
        <div className="flex justify-center">
          {/* Copyright */}
          <div className="text-[#A1A1AA] text-sm">
            © 2025 Resilient Privacy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
