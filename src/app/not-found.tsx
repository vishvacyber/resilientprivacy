import Link from 'next/link'
import { Home, Search, ArrowRight, FileText, Shield, Zap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Resilient Privacy',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

const popularLinks = [
  {
    title: 'Home',
    href: '/',
    description: 'Return to homepage',
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: 'Products',
    href: '/products',
    description: 'View our security products',
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: 'Services',
    href: '/services',
    description: 'Explore our services',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with us',
    icon: <FileText className="w-5 h-5" />,
  },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-alt to-background flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-gradient-to-br from-background-card to-background-alt border border-border-light/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
          {/* 404 Visual */}
          <div className="mb-6 sm:mb-8">
            <div className="relative inline-block">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary-500/20">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500/10 rounded-full flex items-center justify-center border-2 border-red-500/30">
                  <Search className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-6 sm:mb-8 leading-relaxed px-2">
            The page you're looking for doesn't exist or has been moved. Let's
            help you find what you need.
          </p>

          {/* Popular Links */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-sm sm:text-base font-semibold text-text-secondary mb-4 sm:mb-6">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {popularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-background/50 hover:bg-background-card border border-border-light/20 hover:border-primary-500/40 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10 text-left min-h-[44px] flex items-center"
                >
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 text-primary-500 group-hover:bg-primary-500/20 transition-colors flex-shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary truncate">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-text-tertiary group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Link
              href="/"
              className="btn text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px] flex items-center justify-center"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Go Home
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 min-h-[44px] flex items-center justify-center"
            >
              Contact Support
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </div>

          {/* Additional Help */}
          <div className="pt-4 sm:pt-6 border-t border-border-light/30">
            <p className="text-xs sm:text-sm text-text-tertiary mb-3">
              Need help finding something?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center text-xs sm:text-sm">
              <Link
                href="/products"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Browse Products
              </Link>
              <span className="text-text-tertiary hidden sm:inline">•</span>
              <Link
                href="/services"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                View Services
              </Link>
              <span className="text-text-tertiary hidden sm:inline">•</span>
              <Link
                href="/resources"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

