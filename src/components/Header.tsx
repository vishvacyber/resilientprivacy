'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      ref={headerRef}
      className={`w-full z-50 sticky top-0 transition-all duration-700 ease-out ${
        isScrolled
          ? 'darkfire-glass darkfire-shadow border-b border-border-light/60 py-2'
          : 'darkfire-glass border-b border-border-light/40 py-3'
      }`}
    >
      <div className="relative z-10">
        <nav
          className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 py-4 lg:py-5"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group transition-all duration-500 ease-out"
            aria-label="Resilient Privacy - Home"
          >
            <div className="relative">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-normal transition-all duration-300 ease-out group-hover:scale-102 select-none leading-tight">
                <span className="logo-gradient font-bold">
                  RESILIENT
                </span>
                <span className="ml-1.5 sm:ml-2 logo-gradient-purple font-bold">
                  PRIVACY
                </span>
              </h1>
              {/* Mobile-optimized glow effect */}
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-purple-500/15 to-blue-500/10 blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500 ease-out -z-10"></div>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-white font-medium transition-colors duration-300"
            >
              Home
            </Link>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center space-x-1 text-text-secondary hover:text-white font-medium transition-colors duration-300"
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background-card border border-border-light/20 rounded-xl shadow-2xl backdrop-blur-sm z-50">
                  <div className="p-4 space-y-3">
                    <Link
                      href="/about"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">About Us</div>
                      <div className="text-sm text-text-secondary">Our mission and vision</div>
                    </Link>
                    <Link
                      href="/about/leadership"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Leadership</div>
                      <div className="text-sm text-text-secondary">Meet our executive team</div>
                    </Link>
                    <Link
                      href="/about/careers"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Careers</div>
                      <div className="text-sm text-text-secondary">Join our team</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center space-x-1 text-text-secondary hover:text-white font-medium transition-colors duration-300"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-background-card border border-border-light/20 rounded-xl shadow-2xl backdrop-blur-sm z-50">
                  <div className="p-4 space-y-3">
                    <Link
                      href="/products"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">All Products</div>
                      <div className="text-sm text-text-secondary">Complete security suite including Identity & Access, Zero Trust, Threat Intelligence & more</div>
                    </Link>
                    <Link
                      href="/products/ai-threat-detection"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">AI Threat Detection</div>
                      <div className="text-sm text-text-secondary">AI-powered threat detection & behavioral analysis</div>
                    </Link>
                    <Link
                      href="/products/ai-security-operations"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">AI Security Operations</div>
                      <div className="text-sm text-text-secondary">AI-powered SOC & autonomous security</div>
                    </Link>
                    <Link
                      href="/products/secure-ai-models"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Secure AI Models</div>
                      <div className="text-sm text-text-secondary">AI model protection & adversarial defense</div>
                    </Link>
                    <Link
                      href="/products/api-security-intelligence"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">API Security Intelligence</div>
                      <div className="text-sm text-text-secondary">Advanced API threat detection & protection</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-text-secondary hover:text-white font-medium transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-background-card border border-border-light/20 rounded-xl shadow-2xl backdrop-blur-sm z-50">
                  <div className="p-4 space-y-3">
                    <Link
                      href="/services"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">All Services</div>
                      <div className="text-sm text-text-secondary">Complete service portfolio</div>
                    </Link>
                    <Link
                      href="/services/cybersecurity-consulting"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Cybersecurity Consulting</div>
                      <div className="text-sm text-text-secondary">Strategic security guidance</div>
                    </Link>
                    <Link
                      href="/services/managed-security"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Managed Security</div>
                      <div className="text-sm text-text-secondary">24/7 security operations</div>
                    </Link>
                    <Link
                      href="/services/incident-response"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Incident Response</div>
                      <div className="text-sm text-text-secondary">Rapid threat response</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center space-x-1 text-text-secondary hover:text-white font-medium transition-colors duration-300"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background-card border border-border-light/20 rounded-xl shadow-2xl backdrop-blur-sm z-50">
                  <div className="p-4 space-y-3">
                    <Link
                      href="/resources/blog"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Blog</div>
                      <div className="text-sm text-text-secondary">Latest security insights</div>
                    </Link>
                    <Link
                      href="/resources/documentation"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Documentation</div>
                      <div className="text-sm text-text-secondary">Technical guides & APIs</div>
                    </Link>
                    <Link
                      href="/resources/training"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Training</div>
                      <div className="text-sm text-text-secondary">Security education</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="btn text-sm px-6 py-2.5 rounded-xl shadow-purple-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative p-3 rounded-xl bg-gradient-to-r from-background-card to-background-light border border-border-light/50 hover:border-primary-500/70 transition-all duration-500 ease-out group shadow-lg hover:shadow-xl"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu with Dropdowns */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 darkfire-glass border-t border-border-light/50 darkfire-shadow animate-in slide-in-from-top-2 fade-in duration-300 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              {/* About Section */}
              <div className="space-y-1">
                <div className="flex items-center justify-between px-4 py-2.5 text-text-secondary font-medium">
                  <span>About</span>
                  <button
                    onClick={() => toggleDropdown('mobile-about')}
                    className="p-2 rounded-lg hover:bg-background-light/30 transition-colors"
                  >
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-about' ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                {activeDropdown === 'mobile-about' && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/about"
                      className="block px-4 py-2.5 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-lg transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/about/leadership"
                      className="block px-4 py-2.5 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-lg transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/about/careers"
                      className="block px-4 py-2.5 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-lg transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-4 py-3 text-text-secondary font-medium">
                  <span>Products</span>
                  <button
                    onClick={() => toggleDropdown('mobile-products')}
                    className="p-1"
                  >
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-products' ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                {activeDropdown === 'mobile-products' && (
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      All Products
                    </Link>
                    <Link
                      href="/products/ai-threat-detection"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      AI Threat Detection
                    </Link>
                    <Link
                      href="/products/ai-security-operations"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      AI Security Operations
                    </Link>
                    <Link
                      href="/products/secure-ai-models"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Secure AI Models
                    </Link>
                    <Link
                      href="/products/api-security-intelligence"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      API Security Intelligence
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-4 py-3 text-text-secondary font-medium">
                  <span>Services</span>
                  <button
                    onClick={() => toggleDropdown('mobile-services')}
                    className="p-1"
                  >
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                {activeDropdown === 'mobile-services' && (
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      All Services
                    </Link>
                    <Link
                      href="/services/cybersecurity-consulting"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Cybersecurity Consulting
                    </Link>
                    <Link
                      href="/services/managed-security"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Managed Security
                    </Link>
                    <Link
                      href="/services/incident-response"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Incident Response
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-4 py-3 text-text-secondary font-medium">
                  <span>Resources</span>
                  <button
                    onClick={() => toggleDropdown('mobile-resources')}
                    className="p-1"
                  >
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                {activeDropdown === 'mobile-resources' && (
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/resources/blog"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/resources/documentation"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/resources/training"
                      className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      Training
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base font-medium"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}