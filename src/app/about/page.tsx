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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-white">Resilient </span>
            <span className="darkfire-text-gradient">
              Privacy
            </span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Resilient Privacy is an advanced AI and API security company providing cutting-edge security solutions. We specialize in AI threat detection, API protection, machine learning security, and AI-powered cybersecurity services—delivering innovative protection that empowers organizations to stay secure, resilient, and ahead of evolving AI and API threats.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold darkfire-text-gradient mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary-500 drop-shadow" />{' '}
                Company Overview
              </h2>
              <div className="space-y-6 text-text-secondary">
                <div className="mb-4 text-lg">
                  <span className="font-semibold text-white">Resilient </span>
                  <span className="darkfire-text-gradient font-semibold">
                    Privacy
                  </span>{' '}
                  , founded in <span className="font-semibold">2025</span> by
                  Vishva Patel, is the top AI and API security company. We
                  design intelligent, AI-powered security ecosystems that protect
                  the world's most critical organizations—keeping them secure,
                  resilient, and always one step ahead of AI and API threats.
                </div>
                <div className="my-4 p-6 bg-gradient-to-r from-background-card to-background-alt border-l-4 border-primary-500 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-primary-500 mb-1 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary-500" /> Our Mission
                  </h3>
                  <p className="mb-2 text-base text-text-secondary">
                    Empower organizations to anticipate AI and API threats and strengthen
                    digital trust through cutting-edge AI security solutions.
                  </p>
                  <blockquote className="italic text-primary-500 border-l-2 border-primary-500 pl-4 text-lg font-semibold mt-2">
                    WE DON'T CHASE THREATS. WE PREEMPT THEM.
                  </blockquote>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">What Sets Us Apart:</span>
                  <ul className="list-none mt-2 space-y-3">
                    <li className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-primary-500" />{' '}
                      AI-powered threat detection & API security architecture
                    </li>
                    <li className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary-500" /> Advanced
                      AI threat intelligence & machine learning security
                    </li>

                    <li className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-primary-500" /> Serving
                      AI-first organizations, fintech, healthcare, and more
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-text-secondary text-base">
                    At Resilient Privacy, we don't just protect digital
                    assets—we engineer AI-powered trust, enable innovation, and build
                    AI-resilient enterprises with cutting-edge API security.
                  </p>
                  <p className="font-semibold text-primary-500 mt-4 text-lg">
                    Let's shape a safer AI-powered digital future—together.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Company Navigation */}
            <div className="lg:col-start-2">
              <div className="bg-gradient-to-br from-background-card to-background-alt rounded-2xl p-8 border border-border-light/20">
                <h3 className="text-2xl font-bold text-primary-500 mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary-500" />
                  Learn More About Us
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/about/leadership"
                    className="group flex items-center gap-4 p-4 bg-gradient-to-r from-background to-background-card rounded-xl border border-border-light/30 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-primary-500 transition-colors duration-300">
                        Leadership & Advisory Board
                      </h4>
                      <p className="text-text-secondary text-sm">
                        Meet our executive team and strategic advisors
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background-card p-8 rounded-lg border border-border-light/20 text-center group hover:border-primary-500/50 transition-all duration-300 hover:shadow-purple/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                Resilience
              </h3>
              <p className="text-text-secondary group-hover:text-white transition-colors duration-300">
                Adapting and evolving in the face of ever-changing cyber
                threats, ensuring our clients remain protected and confident in
                their security posture.
              </p>
            </div>
            <div className="bg-background-card p-8 rounded-lg border border-border-light/20 text-center group hover:border-primary-500/50 transition-all duration-300 hover:shadow-purple/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                Innovation
              </h3>
              <p className="text-text-secondary group-hover:text-white transition-colors duration-300">
                Pioneering cutting-edge security solutions and methodologies
                that anticipate threats before they materialize, staying ahead
                of the curve.
              </p>
            </div>
            <div className="bg-background-card p-8 rounded-lg border border-border-light/20 text-center group hover:border-primary-500/50 transition-all duration-300 hover:shadow-purple/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                Trust
              </h3>
              <p className="text-text-secondary group-hover:text-white transition-colors duration-300">
                Building lasting relationships through transparency, integrity,
                and unwavering commitment to protecting our clients' most
                valuable assets and data.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Connect with Us?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Discover how Resilient Privacy can transform your
            organization&apos;s security posture.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
