'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronRight, Home, Users, Shield, Settings, BookOpen, Mail, ArrowRight, Star, Zap, Lock, Globe, FileText, GraduationCap } from 'lucide-react'

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
                <div className="absolute top-full left-0 mt-2 w-96 bg-background-card border border-border-light/20 rounded-xl shadow-2xl backdrop-blur-sm z-50">
                  <div className="p-4 space-y-3">
                    <Link
                      href="/products"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300 border border-accent-500/20 bg-accent-500/5"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">All Products</div>
                      <div className="text-sm text-text-secondary">Complete security platform portfolio</div>
                    </Link>
                    <div className="border-t border-border-light/20 my-3"></div>
                    <Link
                      href="/products/coreshield-api-protection-suite"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300 border border-accent-500/10 bg-accent-500/3"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">CoreShield™ API Protection Suite</div>
                      <div className="text-sm text-text-secondary">Flagship platform to uncover and mitigate API risks</div>
                    </Link>
                    <Link
                      href="/products/unified-waap-plus"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300 border border-accent-500/10 bg-accent-500/3"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Unified WAAP+™</div>
                      <div className="text-sm text-text-secondary">Cloud-native, all-in-one defense framework for web apps and APIs</div>
                    </Link>
                    <div className="border-t border-border-light/20 my-3"></div>
                    <Link
                      href="/products/coreshield-api-mapping"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">API Mapping & Visibility</div>
                      <div className="text-sm text-text-secondary">Discover every endpoint, shadow API, and undocumented interface</div>
                    </Link>
                    <Link
                      href="/products/coreshield-risk-testing"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Continuous API Risk Testing</div>
                      <div className="text-sm text-text-secondary">Assess APIs for misconfigurations, flaws, and weak authentication</div>
                    </Link>
                    <Link
                      href="/products/coreshield-fraud-prevention"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">Fraud & Abuse Prevention</div>
                      <div className="text-sm text-text-secondary">Stop credential stuffing, account takeover, and automated exploitation</div>
                    </Link>
                    <Link
                      href="/products/coreshield-ai-protection"
                      className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300"
                      onClick={closeDropdown}
                    >
                      <div className="font-semibold text-white mb-1">AI-Aware Protection</div>
                      <div className="text-sm text-text-secondary">Security tailored for Agentic AI-driven workloads and data pipelines</div>
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
            className="lg:hidden relative p-3 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 border-2 border-primary-500/60 hover:border-primary-500 hover:bg-primary-500/30 transition-all duration-300 ease-out group shadow-lg hover:shadow-xl"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu with Dropdowns */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-300 max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-6 space-y-1">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-lg font-bold">Resilient Privacy</h3>
                <p className="text-slate-400 text-xs mt-1">Enterprise Security Solutions</p>
              </div>

              <Link
                href="/"
                className="group flex items-center px-4 py-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-xl transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
                onClick={closeMobileMenu}
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
                  <Home className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-base">Home</div>
                  <div className="text-slate-400 text-xs">Welcome to our platform</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </Link>
              
              {/* About Section */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown('mobile-about')}
                  className="w-full group flex items-center px-4 py-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-xl transition-all duration-300 border border-slate-700 hover:border-purple-500/50"
                >
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-500/30 transition-colors">
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-semibold text-base">About</div>
                    <div className="text-slate-400 text-xs">Our company & team</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-all duration-300 ${activeDropdown === 'mobile-about' ? 'rotate-90' : ''}`} />
                </button>
                {activeDropdown === 'mobile-about' && (
                  <div className="ml-4 space-y-1 bg-slate-800/30 rounded-xl p-3 border border-slate-700">
                    <Link
                      href="/about"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center mr-2">
                        <Globe className="w-3 h-3 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">About Us</div>
                        <div className="text-slate-400 text-xs">Our mission & vision</div>
                      </div>
                    </Link>
                    <Link
                      href="/about/leadership"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-green-500/20 rounded-md flex items-center justify-center mr-2">
                        <Star className="w-3 h-3 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Leadership</div>
                        <div className="text-slate-400 text-xs">Meet our executives</div>
                      </div>
                    </Link>
                    <Link
                      href="/about/careers"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-orange-500/20 rounded-md flex items-center justify-center mr-2">
                        <Zap className="w-3 h-3 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Careers</div>
                        <div className="text-slate-400 text-xs">Join our team</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Section */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown('mobile-products')}
                  className="w-full group flex items-center px-4 py-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-xl transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
                >
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
                    <Shield className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-semibold text-base">Products</div>
                    <div className="text-slate-400 text-xs">Security solutions</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-all duration-300 ${activeDropdown === 'mobile-products' ? 'rotate-90' : ''}`} />
                </button>
                {activeDropdown === 'mobile-products' && (
                  <div className="ml-4 space-y-1 bg-slate-800/30 rounded-xl p-3 border border-slate-700">
                    <Link
                      href="/products"
                      className="group flex items-center px-3 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 rounded-lg transition-all duration-200 border border-blue-500/30"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-blue-500/30 rounded-md flex items-center justify-center mr-2">
                        <Star className="w-3 h-3 text-blue-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">All Products</div>
                        <div className="text-slate-300 text-xs">Complete security platform</div>
                      </div>
                    </Link>
                    <Link
                      href="/products/coreshield-api-protection-suite"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200 border-l-2 border-blue-400"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center mr-2">
                        <Lock className="w-3 h-3 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">CoreShield™ API Protection</div>
                        <div className="text-slate-400 text-xs">Flagship security platform</div>
                      </div>
                    </Link>
                    <Link
                      href="/products/unified-waap-plus"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200 border-l-2 border-blue-400"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center mr-2">
                        <Globe className="w-3 h-3 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Unified WAAP+™</div>
                        <div className="text-slate-400 text-xs">Cloud-native defense</div>
                      </div>
                    </Link>
                    <Link
                      href="/products/coreshield-api-mapping"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-green-500/20 rounded-md flex items-center justify-center mr-2">
                        <Settings className="w-3 h-3 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">API Mapping & Visibility</div>
                        <div className="text-slate-400 text-xs">Discover every endpoint</div>
                      </div>
                    </Link>
                    <Link
                      href="/products/coreshield-risk-testing"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-orange-500/20 rounded-md flex items-center justify-center mr-2">
                        <Zap className="w-3 h-3 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Continuous Risk Testing</div>
                        <div className="text-slate-400 text-xs">Assess API vulnerabilities</div>
                      </div>
                    </Link>
                    <Link
                      href="/products/coreshield-fraud-prevention"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-red-500/20 rounded-md flex items-center justify-center mr-2">
                        <Shield className="w-3 h-3 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Fraud & Abuse Prevention</div>
                        <div className="text-slate-400 text-xs">Stop automated attacks</div>
                      </div>
                    </Link>
                    <Link
                      href="/products/coreshield-ai-protection"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-purple-500/20 rounded-md flex items-center justify-center mr-2">
                        <Zap className="w-3 h-3 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">AI-Aware Protection</div>
                        <div className="text-slate-400 text-xs">Security for AI workloads</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Section */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="w-full group flex items-center px-4 py-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-xl transition-all duration-300 border border-slate-700 hover:border-green-500/50"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors">
                    <Settings className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-semibold text-base">Services</div>
                    <div className="text-slate-400 text-xs">Professional services</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 group-hover:text-green-400 transition-all duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`} />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="ml-4 space-y-1 bg-slate-800/30 rounded-xl p-3 border border-slate-700">
                    <Link
                      href="/services"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-green-500/20 rounded-md flex items-center justify-center mr-2">
                        <Star className="w-3 h-3 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">All Services</div>
                        <div className="text-slate-400 text-xs">Complete service portfolio</div>
                      </div>
                    </Link>
                    <Link
                      href="/services/cybersecurity-consulting"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center mr-2">
                        <Users className="w-3 h-3 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Cybersecurity Consulting</div>
                        <div className="text-slate-400 text-xs">Strategic security guidance</div>
                      </div>
                    </Link>
                    <Link
                      href="/services/managed-security"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-orange-500/20 rounded-md flex items-center justify-center mr-2">
                        <Shield className="w-3 h-3 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Managed Security</div>
                        <div className="text-slate-400 text-xs">24/7 security operations</div>
                      </div>
                    </Link>
                    <Link
                      href="/services/incident-response"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-red-500/20 rounded-md flex items-center justify-center mr-2">
                        <Zap className="w-3 h-3 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Incident Response</div>
                        <div className="text-slate-400 text-xs">Rapid threat response</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown('mobile-resources')}
                  className="w-full group flex items-center px-4 py-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-xl transition-all duration-300 border border-slate-700 hover:border-orange-500/50"
                >
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-500/30 transition-colors">
                    <BookOpen className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white font-semibold text-base">Resources</div>
                    <div className="text-slate-400 text-xs">Knowledge & learning</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 group-hover:text-orange-400 transition-all duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-90' : ''}`} />
                </button>
                {activeDropdown === 'mobile-resources' && (
                  <div className="ml-4 space-y-1 bg-slate-800/30 rounded-xl p-3 border border-slate-700">
                    <Link
                      href="/resources/blog"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center mr-2">
                        <FileText className="w-3 h-3 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Blog</div>
                        <div className="text-slate-400 text-xs">Latest security insights</div>
                      </div>
                    </Link>
                    <Link
                      href="/resources/documentation"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-green-500/20 rounded-md flex items-center justify-center mr-2">
                        <BookOpen className="w-3 h-3 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Documentation</div>
                        <div className="text-slate-400 text-xs">Technical guides & APIs</div>
                      </div>
                    </Link>
                    <Link
                      href="/resources/training"
                      className="group flex items-center px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-6 h-6 bg-purple-500/20 rounded-md flex items-center justify-center mr-2">
                        <GraduationCap className="w-3 h-3 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Training</div>
                        <div className="text-slate-400 text-xs">Security education</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="group flex items-center px-4 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50"
                onClick={closeMobileMenu}
              >
                <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-500/40 transition-colors">
                  <Mail className="w-4 h-4 text-blue-300" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-base">Contact Us</div>
                  <div className="text-slate-300 text-xs">Get in touch with our team</div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-300 group-hover:text-blue-200 transition-colors" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}