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
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto border-4 border-accent-500/20 shadow-2xl group-hover:shadow-3xl group-hover:shadow-accent-500/40 transition-all duration-500 group-hover:scale-105">
        <span className="text-white font-bold text-3xl tracking-wide">{initials}</span>
      </div>
    )
  }

  // Show actual image if it exists
  return (
    <div className="w-32 h-32 rounded-full border-4 border-accent-500/20 shadow-2xl group-hover:shadow-3xl group-hover:shadow-accent-500/40 transition-all duration-500 overflow-hidden group-hover:scale-105">
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
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background-alt to-background-card">
      {/* Add skip-to-content link for accessibility at the top of the page */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 bg-accent-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
      >
        Skip to main content
      </a>

      <div id="main-content">
        {/* Hero Section with Professional Design */}
        <section
          className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
          role="region"
          aria-labelledby="leadership-hero-heading"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background-alt/30 to-accent-500/10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2322C55E%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-8">
              <span className="text-accent-500 text-sm font-semibold uppercase tracking-wider">Leadership Excellence</span>
            </div>
            
            <h1
              id="leadership-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight"
            >
              <span className="text-white block mb-2">Meet Our</span>
              <span className="fxology-text-gradient block">Leadership Team</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-8 font-light max-w-4xl mx-auto leading-relaxed">
              Visionary leaders driving the future of cybersecurity through innovation, expertise, and unwavering commitment to digital trust.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold fxology-text-gradient mb-2">15+</div>
                <div className="text-text-secondary text-sm font-medium">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold fxology-text-gradient mb-2">100%</div>
                <div className="text-text-secondary text-sm font-medium">Industry Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold fxology-text-gradient mb-2">24/7</div>
                <div className="text-text-secondary text-sm font-medium">Strategic Leadership</div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Grid - Professional Design */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background-alt/50 to-background/80"
          role="region"
          aria-labelledby="leadership-grid-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="leadership-grid-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Executive <span className="fxology-text-gradient">Leadership</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Meet the visionary leaders who are shaping the future of cybersecurity through strategic innovation and unwavering commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {leadership
                .filter((leader) => !leader.hidden)
                .map((leader) => (
                  <div
                    key={leader.name}
                    className="group fxology-card p-8 lg:p-10 hover:fxology-shadow transition-all duration-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 min-w-[44px] min-h-[44px] transform hover:scale-[1.02] hover:-translate-y-2"
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
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                      <div className="flex-shrink-0">
                        <Avatar
                          src={leader.photo}
                          alt={leader.name}
                          initials={leader.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        />
                      </div>
                      
                      <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:fxology-text-gradient transition-all duration-300">
                          {leader.name}
                        </h3>
                        <p className="text-accent-500 font-semibold text-lg mb-4">
                          {leader.title}
                        </p>
                        
                        <div className="mb-6">
                          <div className="inline-flex items-center px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full">
                            <span className="text-accent-500 text-sm font-medium">View Profile</span>
                            <svg className="w-4 h-4 ml-2 text-accent-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section - Professional Design */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background-alt"
          role="region"
          aria-labelledby="advisor-board-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6">
                <span className="text-accent-500 text-sm font-semibold uppercase tracking-wider">Strategic Advisors</span>
              </div>
              <h2
                id="advisor-board-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Advisory <span className="fxology-text-gradient">Board</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Our distinguished Advisory Board brings together industry leaders, cybersecurity experts, and strategic visionaries who guide our mission to redefine digital trust and security.
              </p>
            </div>

            {/* Advisor Cards Grid - Professional Design */}
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
                  className="group fxology-card p-6 lg:p-8 hover:fxology-shadow transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Professional Profile Photo */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      {advisor.image ? (
                        <img
                          src={advisor.image}
                          alt={`${advisor.name} profile`}
                          className="w-20 h-20 rounded-full object-cover object-center border-2 border-accent-500/30 shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-accent-500/20 transition-all duration-300"
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
                        className={`w-20 h-20 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-accent-500/20 transition-all duration-300 ${advisor.image ? 'hidden' : ''}`}
                      >
                        <span className="text-white text-xl font-bold">
                          {advisor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Advisor Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:fxology-text-gradient transition-colors duration-300">
                      {advisor.name}
                    </h3>
                    <p className="text-accent-500 font-semibold text-sm mb-3">
                      {advisor.title}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                      {advisor.description}
                    </p>

                    {/* Professional Expertise Badge */}
                    <div className="inline-block px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full">
                      <span className="text-accent-500 text-xs font-medium">
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
            <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-8">
              <span className="text-accent-500 text-sm font-semibold uppercase tracking-wider">Join Our Mission</span>
            </div>
            
            <h2
              id="leadership-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Lead the <span className="fxology-text-gradient">Future</span>?
            </h2>
            
            <p className="text-lg sm:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              We're always looking for exceptional leaders to join our mission. Explore opportunities to make a difference in cybersecurity and help shape the future of digital trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/about/careers"
                className="group inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/25 hover:-translate-y-1"
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
                className="group inline-flex items-center px-8 py-4 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/25 hover:-translate-y-1"
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
    </div>
  )
}
