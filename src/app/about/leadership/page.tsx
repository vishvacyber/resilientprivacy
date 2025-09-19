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
      {/* Enhanced Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-alt to-background">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-primary-500" />
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Executive Leadership</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Meet Our </span>
              <span className="darkfire-text-gradient">Leadership Team</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-5xl mx-auto leading-relaxed">
              Visionary leaders driving the future of cybersecurity through innovation, expertise, and unwavering commitment to digital trust.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-text-secondary">Years Combined Experience</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-text-secondary">Security Focus</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">Global</div>
                <div className="text-text-secondary">Leadership Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-primary-500" />
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Executive Team</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Executive <span className="darkfire-text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Meet the visionary leaders who are shaping the future of cybersecurity through strategic innovation and unwavering commitment to excellence.
            </p>
          </div>
          
          {/* Executive Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadership
              .filter((leader) => !leader.hidden)
              .map((leader, index) => (
                <div
                  key={leader.name}
                  className="group relative bg-gradient-to-br from-background-card to-background rounded-2xl p-8 border border-border-light/20 hover:border-primary-500/40 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2"
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
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          {leader.photo ? (
                            <img
                              src={leader.photo}
                              alt={`${leader.name} profile`}
                              className="w-20 h-20 rounded-2xl object-cover object-center border-2 border-primary-500/30 shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300"
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
                            className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300 ${leader.photo ? 'hidden' : ''}`}
                          >
                            <span className="text-white text-lg font-bold">
                              {leader.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          
                          {/* Status Indicator */}
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-background-card shadow-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:darkfire-text-gradient transition-all duration-300">
                          {leader.name}
                        </h3>
                        <p className="text-primary-500 font-semibold text-sm mb-4 leading-relaxed">
                          {leader.title}
                        </p>
                        
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {leader.expertise.slice(0, 3).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="inline-flex items-center px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs font-medium text-primary-500"
                            >
                              {skill}
                            </span>
                          ))}
                          {leader.expertise.length > 3 && (
                            <span className="inline-flex items-center px-3 py-1 bg-background-alt border border-border-light/30 rounded-full text-xs font-medium text-text-secondary">
                              +{leader.expertise.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Quote */}
                    {leader.quote && (
                      <div className="mb-6 p-4 bg-background-alt/50 rounded-xl border-l-4 border-primary-500/30">
                        <Quote className="w-5 h-5 text-primary-500 mb-2" />
                        <p className="text-text-secondary text-sm italic leading-relaxed">
                          "{leader.quote}"
                        </p>
                      </div>
                    )}
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-xl group-hover:bg-primary-500/20 transition-all duration-300">
                        <span className="text-primary-500 text-sm font-medium mr-2">View Full Profile</span>
                        <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-background-alt border border-border-light/30 rounded-xl flex items-center justify-center text-text-secondary hover:text-primary-500 hover:border-primary-500/30 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary-500" />
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Strategic Advisors</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Advisory <span className="darkfire-text-gradient">Board</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Our distinguished Advisory Board brings together industry leaders, cybersecurity experts, and strategic visionaries who guide our mission to redefine digital trust and security.
            </p>
          </div>

          {/* Advisory Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                className="group relative bg-gradient-to-br from-background-card to-background-alt rounded-2xl p-8 border border-border-light/20 hover:border-primary-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {advisor.image ? (
                          <img
                            src={advisor.image}
                            alt={`${advisor.name} profile`}
                            className="w-16 h-16 rounded-2xl object-cover object-center border-2 border-primary-500/30 shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300"
                            loading="lazy"
                            width="64"
                            height="64"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              const fallback = target.nextElementSibling as HTMLElement
                              target.style.display = 'none'
                              if (fallback) fallback.style.display = 'flex'
                            }}
                          />
                        ) : null}
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300 ${advisor.image ? 'hidden' : ''}`}
                        >
                          <span className="text-white text-sm font-bold">
                            {advisor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        {/* Advisor Badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full border-2 border-background-card shadow-lg flex items-center justify-center">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:darkfire-text-gradient transition-all duration-300">
                        {advisor.name}
                      </h3>
                      <p className="text-primary-500 font-semibold text-sm mb-4 leading-relaxed">
                        {advisor.title}
                      </p>
                      
                      {/* Expertise Badge */}
                      <div className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4">
                        <span className="text-primary-500 text-xs font-medium">
                          {advisor.expertise}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {advisor.description}
                  </p>
                  
                  {/* Advisor Badge */}
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-xl">
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

      {/* Enhanced CTA Section */}
      <section
        className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
        role="region"
        aria-labelledby="leadership-cta-heading"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-card via-background-alt to-background">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-3 mb-8">
              <TrendingUp className="w-5 h-5 text-primary-500" />
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Join Our Mission</span>
            </div>
            
            {/* Main Heading */}
            <h2
              id="leadership-cta-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              Ready to Lead the <span className="darkfire-text-gradient">Future</span>?
            </h2>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-16 max-w-4xl mx-auto leading-relaxed">
              We're always looking for exceptional leaders to join our mission. Explore opportunities to make a difference in cybersecurity and help shape the future of digital trust.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/about/careers"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 hover:-translate-y-1"
              >
                <Target className="w-5 h-5 mr-3" />
                <span>View Career Opportunities</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-10 py-5 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 hover:-translate-y-1"
              >
                <Zap className="w-5 h-5 mr-3" />
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Leadership Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">5+</div>
                <div className="text-text-secondary">Executive Leaders</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-text-secondary">Security Focused</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Global</div>
                <div className="text-text-secondary">Leadership Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
