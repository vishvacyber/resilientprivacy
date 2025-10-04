import Link from 'next/link'
import { Metadata } from 'next'
import {
  ShieldCheck,
  Globe,
  Users,
  Zap,
  Target,
  Settings,
  Clock,
  Building,
  Award,
  TrendingUp,
  Rocket,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Resilient Privacy - Advanced AI & API Security Company | Cutting-Edge Security Solutions',
  description:
    'Resilient Privacy is an advanced AI and API security company founded in 2025 by Vishva Patel. We provide cutting-edge AI security solutions, API protection, machine learning security, and AI-powered threat detection services.',
  keywords: [
    'AI security company about',
    'API security company history',
    'AI security experts',
    'API security experts',
    'AI security professionals',
    'API security professionals',
    'AI security company leadership',
    'API security company founder',
    'Vishva Patel AI security',
    'enterprise AI security company',
    'AI security consulting company',
    'API security services company',
    'AI security solutions company',
    'AI security firm about',
    'API security firm about',
    'top AI security company about',
    'best API security company about',
    'AI security company team',
    'AI security company expertise',
    'API security company experience',
  ],
  openGraph: {
    title: 'About Resilient Privacy - Advanced AI & API Security Company | Cutting-Edge Security Solutions',
    description:
      'Resilient Privacy is an advanced AI and API security company founded in 2025 by Vishva Patel. We provide cutting-edge AI security solutions, API protection, machine learning security, and AI-powered threat detection services.',
    type: 'website',
    url: 'https://resilientprivacy.com/about',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Simple & Elegant Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="darkfire-text-gradient">Resilient Privacy</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            We're building the future of cybersecurity through advanced AI and API protection, 
            empowering organizations to stay secure in an evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Simple Company Story */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Founded in 2025 by Vishva Patel, Resilient Privacy emerged from a vision to 
              revolutionize cybersecurity through intelligent AI and API protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mission</h3>
              <p className="text-text-secondary text-sm">
                Empower organizations to anticipate and prevent AI and API threats through cutting-edge security solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-text-secondary text-sm">
                Pioneering AI-powered security that stays ahead of evolving threats and attack vectors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Trust</h3>
              <p className="text-text-secondary text-sm">
                Building lasting relationships through transparency and unwavering commitment to security.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Join organizations worldwide who trust Resilient Privacy to protect their most critical assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold"
            >
              Get Started
            </Link>
            <Link
              href="/about/leadership"
              className="border border-primary-500 text-primary-500 px-8 py-4 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}
