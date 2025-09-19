'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
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
            className="flex items-center space-x-3 group transition-all duration-500 ease-out"
            aria-label="Resilient Privacy - Home"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary transition-all duration-500 ease-out group-hover:scale-105">
              Resilient Privacy
            </h1>
          </Link>

          {/* Desktop Navigation - Cybersecurity Focus */}
          <div className="hidden xl:flex items-center space-x-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-white font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-white font-medium transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-text-secondary hover:text-white font-medium transition-colors duration-300"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-text-secondary hover:text-white font-medium transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/resources/blog"
              className="text-text-secondary hover:text-white font-medium transition-colors duration-300"
            >
              Resources
            </Link>
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
            className="xl:hidden relative p-3 rounded-xl bg-gradient-to-r from-background-card to-background-light border border-border-light/50 hover:border-primary-500/70 transition-all duration-500 ease-out group shadow-lg hover:shadow-xl"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 darkfire-glass border-t border-border-light/50 darkfire-shadow animate-in slide-in-from-top-2 fade-in duration-300 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-6 space-y-3">
              <Link
                href="/"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/products"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base font-medium"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base font-medium"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                href="/resources/blog"
                className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background-light/30 rounded-md transition-colors text-base font-medium"
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
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