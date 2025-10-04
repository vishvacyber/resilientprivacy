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
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export default function LeadershipPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-background">
      {/* Modern Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <div className="inline-flex items-center gap-3 bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Executive Leadership</span>
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Meet Our </span>
              <span className="darkfire-text-gradient">Leadership Team</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-16 max-w-5xl mx-auto leading-relaxed">
              Visionary leaders driving the future of cybersecurity through innovation, expertise, and unwavering commitment to digital trust.
            </p>

            {/* Separator */}
            <div className="flex items-center justify-center mt-16">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-primary-500/30 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Executive Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-primary-500 text-sm font-medium">Executive Team</span>
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="darkfire-text-gradient">Leadership</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Meet the visionary leaders who are shaping the future of cybersecurity and driving innovation in digital trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership
              .filter((leader) => !leader.hidden)
              .map((leader) => (
                <div
                  key={leader.name}
                  className="group relative bg-gradient-to-br from-background-card to-background-alt rounded-3xl p-8 border border-border-light/20 hover:border-primary-500/40 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-2"
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
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Profile Image with Enhanced Styling */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        {leader.photo ? (
                          <img
                            src={leader.photo}
                            alt={`${leader.name} profile`}
                            className="w-24 h-24 rounded-full object-cover object-center border-3 border-primary-500/30 shadow-xl group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-300"
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
                          className={`w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-300 ${leader.photo ? 'hidden' : ''}`}
                        >
                          <span className="text-white text-xl font-bold">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        {/* Status Indicator */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full border-2 border-background-card shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-primary-500 font-semibold text-base mb-6 leading-relaxed">
                      {leader.title}
                    </p>
                    
                    {/* Enhanced Button */}
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-xl group-hover:from-primary-500/20 group-hover:to-primary-600/20 group-hover:border-primary-500/50 transition-all duration-300 backdrop-blur-sm">
                      <span className="text-primary-500 text-sm font-medium mr-2 group-hover:text-white transition-colors duration-300">View Profile</span>
                      <ArrowRight className="w-4 h-4 text-primary-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Modern Advisory Board Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary-500" />
              <span className="text-primary-500 text-sm font-medium">Strategic Advisors</span>
              <Star className="w-4 h-4 text-primary-500" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Advisory <span className="darkfire-text-gradient">Board</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Industry leaders and cybersecurity experts guiding our mission to redefine digital trust and security through strategic insights and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                name: 'Tejas Shroff',
                title: 'Sr. Director - Managed Security Services',
                expertise: 'NTT DATA Services, Board Member NTX Infraguard',
                description:
                  'Leading managed security services at NTT DATA with deep expertise in enterprise security operations and board governance at NTX Infraguard.',
                image: '/images/advisors/tejas-shroff.jpg',
              },
              {
                id: 2,
                name: 'Falguni Patel',
                title: 'Cyber Security Consultant',
                expertise: 'Toyota Motors North America',
                description:
                  'Cybersecurity consultant specializing in automotive industry security at Toyota Motors North America, focusing on connected vehicle security and manufacturing systems protection.',
                image: '/images/advisors/falguni-patel.jpg',
              },
            ].map((advisor) => (
              <div
                key={advisor.id}
                className="group relative bg-gradient-to-br from-background-card to-background-alt rounded-3xl p-8 border border-border-light/20 hover:border-primary-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-2"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {advisor.image ? (
                          <img
                            src={advisor.image}
                            alt={`${advisor.name} profile`}
                            className="w-20 h-20 rounded-2xl object-cover object-center border-3 border-primary-500/30 shadow-xl group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-300"
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
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-300 ${advisor.image ? 'hidden' : ''}`}
                        >
                          <span className="text-white text-lg font-bold">
                            {advisor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        {/* Advisor Badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full border-2 border-background-card shadow-lg flex items-center justify-center">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                        {advisor.name}
                      </h3>
                      <p className="text-primary-500 font-semibold text-sm mb-4 leading-relaxed">
                        {advisor.title}
                      </p>
                      
                      {/* Expertise Badge */}
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-xl backdrop-blur-sm">
                        <span className="text-primary-500 text-xs font-medium">
                          {advisor.expertise}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {advisor.description}
                  </p>
                  
                  {/* Advisor Status */}
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-xl backdrop-blur-sm">
                      <Star className="w-4 h-4 text-primary-500 mr-2" />
                      <span className="text-primary-500 text-sm font-medium">Strategic Advisor</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
            backgroundSize: '600px 600px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Join Our Mission</span>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Lead the <span className="darkfire-text-gradient">Future</span>?
          </h2>
          <p className="text-xl text-text-secondary mb-16 max-w-4xl mx-auto leading-relaxed">
            We're always looking for exceptional leaders to join our mission. Explore opportunities to make a difference in cybersecurity and help shape the future of digital trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/about/careers"
              className="group relative inline-flex items-center px-10 py-5 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 hover:-translate-y-1 backdrop-blur-sm"
            >
              <Target className="w-5 h-5 mr-3" />
              <span>View Career Opportunities</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-10 py-5 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 hover:-translate-y-1 backdrop-blur-sm"
            >
              <Zap className="w-5 h-5 mr-3" />
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center mt-16">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-primary-500/30 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
