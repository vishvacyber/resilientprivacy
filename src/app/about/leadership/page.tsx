'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { leadership, slugify } from '@/lib/leadership-data'

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
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-white">Meet Our </span>
            <span className="darkfire-text-gradient">Leadership Team</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Visionary leaders driving the future of cybersecurity through innovation, expertise, and unwavering commitment to digital trust.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Executive <span className="darkfire-text-gradient">Leadership</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Meet the visionary leaders who are shaping the future of cybersecurity through strategic innovation and unwavering commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership
              .filter((leader) => !leader.hidden)
              .map((leader) => (
                <div
                  key={leader.name}
                  className="group bg-background-card rounded-xl p-8 border border-border-light/20 hover:border-primary-500/30 transition-all duration-300 cursor-pointer hover:shadow-purple/10 hover:-translate-y-1"
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
                  <div className="text-center">
                    {/* Professional Headshot */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        {leader.photo ? (
                          <img
                            src={leader.photo}
                            alt={`${leader.name} profile`}
                            className="w-24 h-24 rounded-full object-cover object-center border-2 border-primary-500/30 shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300"
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
                          className={`w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300 ${leader.photo ? 'hidden' : ''}`}
                        >
                          <span className="text-white text-lg font-bold">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:darkfire-text-gradient transition-all duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-primary-500 font-semibold text-sm mb-4">
                      {leader.title}
                    </p>
                    
                    <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full">
                      <span className="text-primary-500 text-sm font-medium">View Profile</span>
                      <svg className="w-4 h-4 ml-2 text-primary-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advisory <span className="darkfire-text-gradient">Board</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto">
              Our distinguished Advisory Board brings together industry leaders, cybersecurity experts, and strategic visionaries who guide our mission to redefine digital trust and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                className="group bg-background-card rounded-xl p-6 border border-border-light/20 hover:border-primary-500/30 transition-all duration-300 hover:shadow-purple/10 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      {advisor.image ? (
                        <img
                          src={advisor.image}
                          alt={`${advisor.name} profile`}
                          className="w-16 h-16 rounded-full object-cover object-center border-2 border-primary-500/30 shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300"
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
                        className={`w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary-500/20 transition-all duration-300 ${advisor.image ? 'hidden' : ''}`}
                      >
                        <span className="text-white text-sm font-bold">
                          {advisor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:darkfire-text-gradient transition-colors duration-300">
                    {advisor.name}
                  </h3>
                  <p className="text-primary-500 font-semibold text-sm mb-3">
                    {advisor.title}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {advisor.description}
                  </p>

                  <div className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full">
                    <span className="text-primary-500 text-xs font-medium">
                      {advisor.expertise}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* CTA Section - Professional Design */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background-card to-background-alt"
          role="region"
          aria-labelledby="leadership-cta-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8">
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Join Our Mission</span>
            </div>
            
            <h2
              id="leadership-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Lead the <span className="darkfire-text-gradient">Future</span>?
            </h2>
            
            <p className="text-lg sm:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              We're always looking for exceptional leaders to join our mission. Explore opportunities to make a difference in cybersecurity and help shape the future of digital trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/about/careers"
                className="group inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1"
              >
                <span>View Career Opportunities</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1"
              >
                <span>Contact Our Team</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}
