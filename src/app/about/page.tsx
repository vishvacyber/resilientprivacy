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
  title: 'About - Resilient Privacy – Global Cybersecurity Leader',
  description:
    'Resilient Privacy is a global cybersecurity firm founded in 2025 by Vishva Patel. We empower organizations and critical infrastructure with enterprise-grade security solutions and digital trust.',
  keywords: [
    'about cybersecurity company',
    'cybersecurity company history',
    'cybersecurity experts',
    'cyber security experts',
    'cybersecurity professionals',
    'cyber security professionals',
    'cybersecurity company leadership',
    'cybersecurity company founder',
    'Vishva Patel cybersecurity',
    'enterprise cybersecurity company',
    'cybersecurity consulting company',
    'cybersecurity services company',
    'cybersecurity solutions company',
    'cybersecurity firm about',
    'cyber security firm about',
    'top cybersecurity company about',
    'best cybersecurity company about',
    'cybersecurity company team',
    'cybersecurity company expertise',
    'cybersecurity company experience',
  ],
  openGraph: {
    title: 'About - Resilient Privacy – Global Cybersecurity Leader',
    description:
      'Resilient Privacy is a global cybersecurity firm founded in 2025 by Vishva Patel. We empower organizations and critical infrastructure with enterprise-grade security solutions and digital trust.',
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
            Resilient Privacy is a next-generation cybersecurity company
            redefining digital trust. We specialize in identity security, zero
            trust architecture, threat intelligence, and enterprise
            consulting—delivering strategies and solutions that empower
            organizations to stay secure, resilient, and ahead of threats in an
            ever-evolving landscape.
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
                  Vishva Patel, is shaping the future of cybersecurity. We
                  design intelligent, adaptive security ecosystems that protect
                  the world's most critical organizations—keeping them secure,
                  resilient, and always one step ahead of threats.
                </div>
                <div className="my-4 p-6 bg-gradient-to-r from-background-card to-background-alt border-l-4 border-primary-500 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-primary-500 mb-1 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary-500" /> Our Mission
                  </h3>
                  <p className="mb-2 text-base text-text-secondary">
                    Empower organizations to anticipate threats and strengthen
                    digital trust.
                  </p>
                  <blockquote className="italic text-primary-500 border-l-2 border-primary-500 pl-4 text-lg font-semibold mt-2">
                    We Don't Chase Threats. We Preempt Them.
                  </blockquote>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">What Sets Us Apart:</span>
                  <ul className="list-none mt-2 space-y-3">
                    <li className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-primary-500" />{' '}
                      Identity-first security & zero trust architecture
                    </li>
                    <li className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary-500" /> Advanced
                      threat intelligence & bespoke consulting
                    </li>

                    <li className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-primary-500" /> Serving
                      healthcare, finance, energy, and more
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-text-secondary text-base">
                    At Resilient Privacy, we don’t just protect digital
                    assets—we engineer trust, enable innovation, and build
                    cyber-resilient enterprises.
                  </p>
                  <p className="font-semibold text-primary-500 mt-4 text-lg">
                    Let's shape a safer digital future—together.
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

      {/* Global Presence */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-alt to-background">
          {/* Subtle animated elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-40 h-40 bg-primary-600 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '3s' }}
            ></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Modern Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 sm:gap-4 mb-6">
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-30"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold darkfire-text-gradient">
                Global Presence
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Our strategically positioned offices form a{' '}
              <span className="text-primary-500 font-semibold">
                connected security ecosystem
              </span>
              , delivering world-class cybersecurity services across continents
              with local expertise and 24/7 support.
            </p>
          </div>

          {/* Enhanced Stats Bar with World Map Visual */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="relative bg-gradient-to-r from-background-card/60 to-background-alt/60 backdrop-blur-sm rounded-3xl border border-border-light/30 p-8 sm:p-12 overflow-hidden">
              {/* Decorative World Map Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] sm:text-[300px] text-primary-500">
                  🌍
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Our Global Network
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base">
                    Connected security operations worldwide
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                  <div className="text-center group cursor-pointer">
                    <div className="relative mb-4">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-all duration-500">
                        3
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="text-sm sm:text-base text-text-secondary font-semibold group-hover:text-white transition-colors duration-300">
                      Strategic Locations
                    </div>
                    <div className="text-xs text-primary-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      North America & Asia
                    </div>
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="relative mb-4">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-all duration-500">
                        24/7
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="text-sm sm:text-base text-text-secondary font-semibold group-hover:text-white transition-colors duration-300">
                      Global Operations
                    </div>
                    <div className="text-xs text-primary-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Never Sleep Security
                    </div>
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="relative mb-4">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-all duration-500">
                        5+
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="text-sm sm:text-base text-text-secondary font-semibold group-hover:text-white transition-colors duration-300">
                      Security Domains
                    </div>
                    <div className="text-xs text-primary-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Consultation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sleek Office Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Delaware, USA */}
            <div className="group relative bg-gradient-to-br from-background-card to-background-alt backdrop-blur-sm rounded-2xl border border-border-light/30 p-8 hover:border-primary-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/25 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <Building className="w-7 h-7 text-white" />
                      </div>

                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background-card shadow-lg">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse m-0.5"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300 mb-2">
                        Delaware, USA
                      </h3>
                      <div className="inline-flex items-center bg-primary-500/15 text-primary-500 px-4 py-2 rounded-xl text-sm font-semibold border border-primary-500/25 shadow-sm">
                        Corporate Headquarters
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    🇺🇸
                  </div>
                </div>

                <p className="text-text-secondary group-hover:text-white transition-colors duration-300 mb-5 leading-relaxed text-base">
                  Strategic headquarters serving enterprise clients across North
                  America with comprehensive cybersecurity solutions and
                  executive leadership.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-primary-500 font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Eastern Time • Primary Office</span>
                  </div>
                  <div className="text-sm text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-emerald-500/10 px-3 py-1 rounded-lg">
                    Operational
                  </div>
                </div>
              </div>
            </div>

            {/* Dallas, Texas, USA */}
            <div className="group relative bg-gradient-to-br from-background-card to-background-alt backdrop-blur-sm rounded-2xl border border-border-light/30 p-8 hover:border-primary-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/25 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <Building className="w-7 h-7 text-white" />
                      </div>

                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background-card shadow-lg">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse m-0.5"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300 mb-2">
                        Dallas, Texas, USA
                      </h3>
                      <div className="inline-flex items-center bg-primary-500/15 text-primary-500 px-4 py-2 rounded-xl text-sm font-semibold border border-primary-500/25 shadow-sm">
                        Regional Operations
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    🇺🇸
                  </div>
                </div>

                <p className="text-text-secondary group-hover:text-white transition-colors duration-300 mb-5 leading-relaxed text-base">
                  Advanced operations center delivering enterprise cybersecurity
                  solutions and technical expertise across North America with
                  24/7 support capabilities.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-primary-500 font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Central Time • Operations Center</span>
                  </div>
                  <div className="text-sm text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-emerald-500/10 px-3 py-1 rounded-lg">
                    Operational
                  </div>
                </div>
              </div>
            </div>

            {/* Surat, India */}
            <div className="group relative bg-gradient-to-br from-background-card to-background-alt backdrop-blur-sm rounded-2xl border border-border-light/30 p-8 hover:border-primary-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/25 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <Building className="w-7 h-7 text-white" />
                      </div>

                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background-card shadow-lg">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse m-0.5"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300 mb-2">
                        Surat, India
                      </h3>
                      <div className="inline-flex items-center bg-primary-500/15 text-primary-500 px-4 py-2 rounded-xl text-sm font-semibold border border-primary-500/25 shadow-sm">
                        Asia Operations
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    🇮🇳
                  </div>
                </div>

                <p className="text-text-secondary group-hover:text-white transition-colors duration-300 mb-5 leading-relaxed text-base">
                  Strategic Asia operations center delivering regional
                  cybersecurity expertise and innovative solutions across the
                  Asian continent with local market knowledge.
                </p>
                <p className="text-primary-500 text-sm font-mono mb-3 bg-primary-500/5 px-4 py-2 rounded-lg border border-primary-500/10">
                  Surat, Gujarat, India
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-primary-500 font-medium">
                    <Clock className="w-4 h-4" />
                    <span>India Time • Asia Hub</span>
                  </div>
                  <div className="text-sm text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-emerald-500/10 px-3 py-1 rounded-lg">
                    Operational
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Coverage Statement */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl sm:rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-background-card/80 to-background-alt/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-border-light/30 p-8 sm:p-12 max-w-5xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold darkfire-text-gradient mb-6">
                  Comprehensive Global Coverage
                </h3>
                <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                  With offices strategically positioned across{' '}
                  <span className="text-primary-500 font-semibold">
                    North America and Asia
                  </span>
                  , Resilient Privacy delivers consistent, high-quality
                  cybersecurity services to organizations worldwide. Our focused
                  presence ensures local expertise, cultural understanding, and
                  comprehensive support for all our clients across multiple
                  continents.
                </p>
              </div>
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
