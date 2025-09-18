'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Set mounted flag to prevent hydration mismatch
    setMounted(true)
    setIsClient(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
        setIsMobileMenuOpen(false)
      }
    }

    // Close dropdowns when pressing Escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsMobileMenuOpen(false)
      }
    }

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }

  // Prevent hydration mismatch by not rendering interactive elements on server
  if (!mounted) {
    return (
      <header
        className="w-full z-50 sticky top-0 transition-all duration-700 ease-out fxology-glass border-b border-border-light/40 py-3"
        style={{
          transform: 'translateY(0)',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-background-card/40 via-transparent to-background-light/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10">
          <nav
            className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 py-4 lg:py-5"
            role="navigation"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className="group flex flex-col items-start justify-center space-y-1 relative overflow-hidden"
            >
              <div className="relative">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight relative z-10 transition-all duration-500 ease-out">
                  <span className="text-white transition-all duration-500">
                    Resilient{' '}
                  </span>
                <span className="fxology-text-gradient drop-shadow-lg transition-all duration-500">
                  Privacy
                </span>
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500 ease-out rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm text-text-tertiary font-medium tracking-wide transition-all duration-500 transform">
                We Don&apos;t Chase Threats. We Preempt Them.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-transparent opacity-0 transition-opacity duration-500 rounded-lg blur-sm"></div>
            </Link>
            <div className="hidden xl:flex items-center space-x-1">
              <Link
                href="/"
                className="relative px-4 py-2.5 text-text-secondary hover:text-text-primary font-medium transition-all duration-500 ease-out group overflow-hidden"
              >
                <span className="relative z-10 transition-all duration-500">
                  Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-background-card/60 to-background-light/60 rounded-xl opacity-0 transition-all duration-500 scale-95"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500 ease-out rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ease-out"></div>
              </Link>
              <Link
                href="/about"
                className="relative px-4 py-2.5 text-text-secondary hover:text-text-primary font-medium transition-all duration-500 ease-out group overflow-hidden"
              >
                <span className="relative z-10 transition-all duration-500">
                  About
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-background-card/60 to-background-light/60 rounded-xl opacity-0 transition-all duration-500 scale-95"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500 ease-out rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ease-out"></div>
              </Link>
              <Link
                href="/contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-500 ease-out shadow-lg hover:shadow-xl group overflow-hidden"
              >
                <span className="relative z-10 transition-all duration-500">
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl opacity-0 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ease-out"></div>
                <div className="absolute inset-0 rounded-xl bg-accent-500/20 blur-xl opacity-0 transition-opacity duration-500 -z-10"></div>
              </Link>
            </div>
            <button
              className="xl:hidden relative p-3 rounded-xl bg-gradient-to-r from-background-card to-background-light border border-border-light/50 hover:border-accent-500/70 transition-all duration-500 ease-out group shadow-lg hover:shadow-xl"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className="block w-5 h-0.5 bg-text-secondary transition-all duration-500 ease-out"></span>
                <span className="block w-5 h-0.5 bg-text-secondary transition-all duration-500 ease-out"></span>
                <span className="block w-5 h-0.5 bg-text-secondary transition-all duration-500 ease-out"></span>
              </div>
            </button>
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header
      ref={headerRef}
      className={`w-full z-50 sticky top-0 transition-all duration-700 ease-out ${
        isScrolled
          ? 'fxology-glass fxology-shadow border-b border-border-light/60 py-2'
          : 'fxology-glass border-b border-border-light/40 py-3'
      }`}
      style={{
        transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
        boxShadow: isScrolled
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(139, 92, 246, 0.1)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Clean Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-card/40 via-transparent to-background-light/30"></div>

        {/* Interactive mouse effects - Client-side only */}
        {isClient && (
          <>
            {/* Primary mouse-following orb */}
            <div
              className="absolute w-96 h-96 rounded-full opacity-25 blur-3xl transition-all duration-1000 ease-out"
              style={{
                background:
                  'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(22, 163, 74, 0.3) 50%, transparent 70%)',
                transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
                left: 0,
                top: 0,
              }}
            />
            {/* Secondary orb with different speed */}
            <div
              className="absolute w-64 h-64 rounded-full opacity-15 blur-2xl transition-all duration-1500 ease-out"
              style={{
                background:
                  'radial-gradient(circle, rgba(22, 163, 74, 0.3) 0%, rgba(34, 197, 94, 0.2) 50%, transparent 70%)',
                transform: `translate(${(mousePosition.x - 128) * 0.7}px, ${(mousePosition.y - 128) * 0.7}px)`,
                left: 0,
                top: 0,
              }}
            />
            {/* Subtle floating particles */}
            <div className="absolute top-0 left-0 w-full h-full">
              {[
                { pos: 'top-6 left-1/4', size: 'w-1 h-1', delay: 'delay-100' },
                {
                  pos: 'top-12 right-1/3',
                  size: 'w-1.5 h-1.5',
                  delay: 'delay-500',
                },
                {
                  pos: 'top-8 left-2/3',
                  size: 'w-0.5 h-0.5',
                  delay: 'delay-1000',
                },
                { pos: 'top-4 right-1/4', size: 'w-1 h-1', delay: 'delay-700' },
                {
                  pos: 'top-16 left-1/2',
                  size: 'w-0.5 h-0.5',
                  delay: 'delay-300',
                },
              ].map((particle, index) => (
                <div
                  key={index}
                  className={`absolute ${particle.pos} ${particle.size} bg-accent-500/60 rounded-full animate-ping ${particle.delay}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10">
        <nav
          className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 py-4 lg:py-5"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Clean Company Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start justify-center space-y-1 relative overflow-hidden"
          >
            <div className="relative">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight relative z-10 transition-all duration-500 ease-out group-hover:scale-105">
                <span className="text-white transition-all duration-500 group-hover:text-gray-100">
                  Resilient{' '}
                </span>
                <span className="fxology-text-gradient drop-shadow-lg transition-all duration-500 group-hover:scale-105">
                  Privacy
                </span>
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500 ease-out group-hover:w-full rounded-full"></div>
            </div>
            <span className="text-xs sm:text-sm text-text-tertiary font-medium tracking-wide group-hover:text-text-secondary transition-all duration-500 transform group-hover:translate-x-1">
              We Don&apos;t Chase Threats. We Preempt Them.
            </span>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {/* Clean Home Link */}
            <Link
              href="/"
              className="relative px-4 py-2.5 text-text-secondary hover:text-text-primary font-medium transition-all duration-500 ease-out group overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-500 group-hover:scale-105">
                Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-background-card/60 to-background-light/60 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 rounded-full"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>

            {/* Clean About Dropdown */}
            <div className="relative group">
              <button
                className="relative px-4 py-2.5 text-text-secondary hover:text-text-primary font-medium transition-all duration-500 ease-out flex items-center space-x-1 group overflow-hidden"
                onClick={() => handleDropdownToggle('about')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'about'}
                aria-controls="about-dropdown"
                aria-label="Toggle About dropdown"
              >
                <span className="relative z-10 transition-all duration-500 group-hover:scale-105">
                  About
                </span>
                <svg
                  className={`w-4 h-4 transition-all duration-500 ease-out ${activeDropdown === 'about' ? 'rotate-180' : 'group-hover:rotate-180'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-background-card/60 to-background-light/60 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 rounded-full"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </button>

              {activeDropdown === 'about' && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-background-card/95 to-background-alt/95 rounded-2xl shadow-2xl border border-border-light/50 backdrop-blur-2xl animate-in slide-in-from-top-2 fade-in duration-300"
                  id="about-dropdown"
                >
                  <div className="p-2">
                    <Link
                      href="/about"
                      className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/60 rounded-xl transition-all duration-500 ease-out transform hover:scale-[1.02] hover:translate-x-1"
                      onClick={closeAllDropdowns}
                    >
                      Company Overview
                    </Link>
                    <Link
                      href="/about/leadership"
                      className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/60 rounded-xl transition-all duration-500 ease-out transform hover:scale-[1.02] hover:translate-x-1"
                      onClick={closeAllDropdowns}
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/about/careers"
                      className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/60 rounded-xl transition-all duration-500 ease-out transform hover:scale-[1.02] hover:translate-x-1"
                      onClick={closeAllDropdowns}
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products & Services Combined */}
            <div className="relative group">
              <button
                className="relative px-4 py-2.5 text-text-secondary hover:text-text-primary font-medium transition-all duration-300 flex items-center space-x-1 group"
                onClick={() => handleDropdownToggle('products-services')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'products-services'}
                aria-controls="products-services-dropdown"
                aria-label="Toggle Products & Services dropdown"
              >
                <span className="relative z-10">Products & Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'products-services' ? 'rotate-180' : 'group-hover:rotate-180'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-background-card/50 to-background-light/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
              </button>

              {activeDropdown === 'products-services' && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-background-card to-background-alt rounded-2xl shadow-2xl border border-border-light/50 backdrop-blur-xl"
                  id="products-services-dropdown"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="px-3 py-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide">
                          Products
                        </div>
                        <div className="space-y-1">
                          <Link
                            href="/products/identity-access-suite"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Identity & Access
                          </Link>
                          <Link
                            href="/products/zero-trust-network-edge"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Zero Trust Edge
                          </Link>
                          <Link
                            href="/products/threat-intelligence-platform"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Threat Intelligence
                          </Link>
                          <Link
                            href="/products/cloud-security-posture"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Cloud Security
                          </Link>
                          <Link
                            href="/products/edr-xdr"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            EDR/XDR
                          </Link>
                          <Link
                            href="/products/secure-api-gateway"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Secure API Gateway
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="px-3 py-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide">
                          Services
                        </div>
                        <div className="space-y-1">
                          <Link
                            href="/services/cybersecurity-consulting"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Consulting
                          </Link>
                          <Link
                            href="/services/managed-security"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Managed Security
                          </Link>
                          <Link
                            href="/services/red-teaming"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Red Teaming
                          </Link>
                          <Link
                            href="/services/governance-compliance"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Governance
                          </Link>
                          <Link
                            href="/services/incident-response"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            Incident Response
                          </Link>
                          <Link
                            href="/services/it-consulting"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/50 rounded-lg transition-all duration-300"
                            onClick={closeAllDropdowns}
                          >
                            IT Consulting
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="relative group">
              <button
                className="px-3 py-2 text-text-secondary hover:text-text-primary font-medium transition-colors rounded-lg hover:bg-background-light/30 flex items-center space-x-1"
                onClick={() => handleDropdownToggle('resources')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'resources'}
                aria-controls="resources-dropdown"
              >
                <span>Resources</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : 'group-hover:rotate-180'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-background-card rounded-lg shadow-xl border border-border-light/50 backdrop-blur-xl">
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="px-3 py-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide">
                          Content
                        </div>
                        <div className="space-y-1">
                          <Link
                            href="/resources/blog"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            Blog
                          </Link>

                          <Link
                            href="/resources/documentation"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            Documentation
                          </Link>
                          <Link
                            href="/resources/training"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            Training
                          </Link>

                          <Link
                            href="/trust"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            Trust Center
                          </Link>
                          <Link
                            href="/security"
                            className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            Security
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-border-light/30 my-2"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Clean Contact Us Button */}
            <Link
              href="/contact"
              className="relative px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-500 ease-out shadow-lg hover:shadow-xl group overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-500 group-hover:scale-105">
                Contact Us
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-xl bg-accent-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </Link>
          </div>

          {/* Clean Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden relative p-3 rounded-xl bg-gradient-to-r from-background-card to-background-light border border-border-light/50 hover:border-accent-500/70 transition-all duration-500 ease-out group shadow-lg hover:shadow-xl"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span
                className={`block w-5 h-0.5 bg-text-secondary transition-all duration-500 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-text-secondary transition-all duration-500 ease-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-text-secondary transition-all duration-500 ease-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </div>
          </button>
        </nav>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 fxology-glass border-t border-border-light/50 fxology-shadow animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="px-4 py-6 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base"
                onClick={closeAllDropdowns}
              >
                Home
              </Link>

              {/* About */}
              <div>
                <button
                  className="w-full text-left px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors flex items-center justify-between text-base"
                  onClick={() => handleDropdownToggle('mobile-about')}
                >
                  <span>About</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-about' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === 'mobile-about' && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Company Overview
                    </Link>
                    <Link
                      href="/about/leadership"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/about/careers"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Products & Services */}
              <div>
                <button
                  className="w-full text-left px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors flex items-center justify-between text-base"
                  onClick={() =>
                    handleDropdownToggle('mobile-products-services')
                  }
                >
                  <span>Products & Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-products-services' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === 'mobile-products-services' && (
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wide px-3 py-1">
                      Products
                    </div>
                    <Link
                      href="/products/identity-access-suite"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Identity & Access
                    </Link>
                    <Link
                      href="/products/zero-trust-network-edge"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Zero Trust Edge
                    </Link>
                    <Link
                      href="/products/threat-intelligence-platform"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Threat Intelligence
                    </Link>
                    <Link
                      href="/products/secure-api-gateway"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Secure API Gateway
                    </Link>
                    <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wide px-3 py-1 mt-2">
                      Services
                    </div>
                    <Link
                      href="/services/cybersecurity-consulting"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Consulting
                    </Link>
                    <Link
                      href="/services/managed-security"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Managed Security
                    </Link>
                    <Link
                      href="/services/red-teaming"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Red Teaming
                    </Link>
                    <Link
                      href="/services/governance-compliance"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Governance
                    </Link>
                    <Link
                      href="/services/incident-response"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Incident Response
                    </Link>
                    <Link
                      href="/services/it-consulting"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      IT Consulting
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div>
                <button
                  className="w-full text-left px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors flex items-center justify-between text-base"
                  onClick={() => handleDropdownToggle('mobile-resources')}
                >
                  <span>Resources</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === 'mobile-resources' && (
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wide px-3 py-1">
                      Content
                    </div>
                    <Link
                      href="/resources/blog"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Blog
                    </Link>

                    <Link
                      href="/resources/documentation"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/resources/training"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Training
                    </Link>

                    <Link
                      href="/trust"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Trust Center
                    </Link>
                    <Link
                      href="/security"
                      className="block px-3 py-2 text-sm text-text-tertiary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Security
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base"
                onClick={closeAllDropdowns}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {(activeDropdown || isMobileMenuOpen) && (
        <div className="fixed inset-0 z-40" onClick={closeAllDropdowns} />
      )}
    </header>
  )
}
