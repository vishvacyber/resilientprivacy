'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { leadership, slugify } from '@/lib/leadership-data'
import { 
  Users, 
  Award, 
  Shield, 
  Zap, 
  Globe, 
  Building2, 
  TrendingUp,
  Target,
  Star,
  ArrowRight,
  Linkedin,
  Quote
} from 'lucide-react'

function Avatar({
  src,
  alt,
  initials,
}: {
  src: string
  alt: string
  initials: string
}) {
  const [imgError, setImgError] = useState(false)

  // If image fails to load or doesn't exist, show initials
  if (imgError || !src) {
    return (
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto border-2 border-primary-500/30 shadow-lg group-hover:shadow-xl group-hover:shadow-primary-500/30 transition-all duration-300 group-hover:scale-105">
        <span className="text-white font-bold text-sm tracking-wide">{initials}</span>
      </div>
    )
  }

  // Show actual image if it exists
  return (
    <div className="w-16 h-16 rounded-full border-2 border-primary-500/30 shadow-lg group-hover:shadow-xl group-hover:shadow-primary-500/30 transition-all duration-300 overflow-hidden group-hover:scale-105">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center"
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export default function LeadershipPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-Optimized Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-alt to-background">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
              backgroundSize: '400px 400px'
            }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-primary-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Executive Leadership</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-white">Meet Our </span>
              <span className="darkfire-text-gradient">Leadership Team</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed px-2">
              Visionary leaders driving the future of cybersecurity through innovation, expertise, and unwavering commitment to digital trust.
            </p>

            {/* Mobile-Optimized Separator */}
            <div className="flex items-center justify-center mt-8 sm:mt-12 lg:mt-16">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
              <div className="mx-3 sm:mx-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary-500/30 rounded-full"></div>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Executive Leadership Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full"></div>
              <span className="text-primary-500 text-xs sm:text-sm font-medium">Executive Team</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="darkfire-text-gradient">Leadership</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-3xl mx-auto px-2">
              Meet the visionary leaders who are shaping the future of cybersecurity and driving innovation in digital trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadership
              .filter((leader) => !leader.hidden)
              .map((leader) => (
                <div
                  key={leader.name}
                  className="group relative bg-gradient-to-br from-background-card to-background-alt rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-border-light/20 hover:border-primary-500/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
                  onClick={() =>
                    router.push(`/about/leadership/${slugify(leader.name)}`)
                  }
                  tabIndex={0}
                  role="button"
                  aria-label={`View profile for ${leader.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      router.push(`/about/leadership/${slugify(leader.name)}`)
                  }}
                >
                  <div className="relative z-10 text-center">
                    {/* Mobile-Optimized Profile Image */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className="relative">
                        {leader.photo ? (
                          <img
                            src={leader.photo}
                            alt={`${leader.name} profile`}
                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover object-center border-2 border-primary-500/30 shadow-lg group-hover:scale-105 transition-all duration-300"
                            loading="lazy"
                            width="96"
                            height="96"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              const fallback = target.nextElementSibling as HTMLElement
                              target.style.display = 'none'
                              if (fallback) fallback.style.display = 'flex'
                            }}
                          />
                        ) : null}
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 ${leader.photo ? 'hidden' : ''}`}
                        >
                          <span className="text-white text-sm sm:text-base lg:text-xl font-bold">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        {/* Mobile-Optimized Status Indicator */}
                        <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full border-2 border-background-card shadow-md flex items-center justify-center">
                          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-emerald-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-primary-500 font-semibold text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 leading-relaxed">
                      {leader.title}
                    </p>
                    
                    {/* Mobile-Optimized Button */}
                    <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-lg sm:rounded-xl group-hover:from-primary-500/20 group-hover:to-primary-600/20 group-hover:border-primary-500/50 transition-all duration-300 backdrop-blur-sm">
                      <span className="text-primary-500 text-xs sm:text-sm font-medium mr-2 group-hover:text-white transition-colors duration-300">View Profile</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Advisory Board Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
              <span className="text-primary-500 text-xs sm:text-sm font-medium">Strategic Advisors</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Advisory <span className="darkfire-text-gradient">Board</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed px-2">
              Industry leaders and cybersecurity experts guiding our mission to redefine digital trust and security through strategic insights and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                id: 1,
                name: 'Tejas Shroff',
                title: 'Sr. Director - Managed Security Services',
                expertise: 'NTT DATA Services, Board Member NTX Infraguard',
                description:
                  'Leading managed security services with deep expertise in enterprise security operations and board governance.',
                image: '/images/advisors/tejas-shroff.png',
              },
              {
                id: 2,
                name: 'Bhagirath Patel',
                title: 'Legal Advisor',
                expertise: 'Corporate & Civil Criminal Advocate',
                description:
                  'Well-known corporate and civil criminal advocate, bringing extensive legal expertise in corporate law, civil litigation, and criminal defense with deep understanding of legal frameworks and regulatory compliance.',
                image: '/images/advisors/bhagirath-patel.png',
              },
            ].map((advisor) => (
              <div
                key={advisor.id}
                className="group relative bg-gradient-to-br from-background-card to-background-alt rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-border-light/20 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {advisor.image ? (
                          <img
                            src={advisor.image}
                            alt={`${advisor.name} profile`}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl object-cover object-center border-2 border-primary-500/30 shadow-lg group-hover:scale-105 transition-all duration-300"
                            loading="lazy"
                            width="80"
                            height="80"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              const fallback = target.nextElementSibling as HTMLElement
                              target.style.display = 'none'
                              if (fallback) fallback.style.display = 'flex'
                            }}
                          />
                        ) : null}
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 ${advisor.image ? 'hidden' : ''}`}
                        >
                          <span className="text-white text-sm sm:text-base lg:text-lg font-bold">
                            {advisor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        {/* Mobile-Optimized Advisor Badge */}
                        <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full border-2 border-background-card shadow-md flex items-center justify-center">
                          <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-primary-500 transition-colors duration-300">
                        {advisor.name}
                      </h3>
                      <p className="text-primary-500 font-semibold text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                        {advisor.title}
                      </p>
                      
                      {/* Mobile-Optimized Expertise Badge */}
                      <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
                        <span className="text-primary-500 text-xs font-medium">
                          {advisor.expertise}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {advisor.description}
                  </p>
                  
                  {/* Mobile-Optimized Advisor Status */}
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 mr-2" />
                      <span className="text-primary-500 text-xs sm:text-sm font-medium">Strategic Advisor</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
            backgroundSize: '600px 600px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Join Our Mission</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
            Ready to Lead the <span className="darkfire-text-gradient">Future</span>?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-text-secondary mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed px-2">
            We're always looking for exceptional leaders to join our mission. Explore opportunities to make a difference in cybersecurity and help shape the future of digital trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 lg:mb-16">
            <Link
              href="/about/careers"
              className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1 backdrop-blur-sm text-sm sm:text-base"
            >
              <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span>View Career Opportunities</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1 backdrop-blur-sm text-sm sm:text-base"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile-Optimized Separator */}
          <div className="flex items-center justify-center mt-8 sm:mt-12 lg:mt-16">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            <div className="mx-3 sm:mx-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary-500/30 rounded-full"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
