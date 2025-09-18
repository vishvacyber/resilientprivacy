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
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center mx-auto border-2 border-[#8B5CF6] shadow-lg group-hover:shadow-xl group-hover:shadow-[#8B5CF6]/30 transition-all duration-300">
        <span className="text-white font-bold text-2xl">{initials}</span>
      </div>
    )
  }

  // Show actual image if it exists
  return (
    <div className="w-24 h-24 rounded-full border-2 border-[#8B5CF6] shadow-lg group-hover:shadow-xl group-hover:shadow-[#8B5CF6]/30 transition-all duration-300 overflow-hidden">
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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181B] via-[#232336] to-[#8B5CF6] pb-20 px-2">
      {/* Add skip-to-content link for accessibility at the top of the page */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 bg-accent-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
      >
        Skip to main content
      </a>

      <div id="main-content">
        {/* Leadership Philosophy at Top */}
        <section
          className="py-16 px-2 border-b border-[#232336]"
          role="region"
          aria-labelledby="leadership-hero-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="leadership-hero-heading"
              className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            >
              <span className="text-white">Resilient </span>
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#a78bfa] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-lg">
                Privacy
              </span>
              <span className="text-white"> Leadership</span>
            </h1>
            <p className="text-2xl text-[#A1A1AA] mb-6 font-medium">
              Exceptional leadership is the cornerstone of building a
              world-class cybersecurity organization.
            </p>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
              Our leadership team doesn't just lead, we revolutionize. We are
              the architects of digital trust, the guardians of innovation, and
              the catalysts of transformation. With unshakeable integrity and
              relentless pursuit of excellence, we don't follow industry
              standards, we set them. Every decision we make, every strategy we
              craft, and every innovation we pioneer is driven by one unwavering
              mission: to protect what matters most in an increasingly complex
              digital world. Our collective expertise spans decades of
              cybersecurity mastery, technological breakthroughs, and business
              transformation, united by a shared vision to deliver solutions
              that don't just meet expectations, but redefine them entirely.
            </p>
          </div>
        </section>

        {/* Leadership Grid - Themed, Clickable */}
        <section
          className="py-16 px-2"
          role="region"
          aria-labelledby="leadership-grid-heading"
        >
          <h2 id="leadership-grid-heading" className="sr-only">
            Leadership Team
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadership
              .filter((leader) => !leader.hidden)
              .map((leader) => (
                <div
                  key={leader.name}
                  className="bg-gradient-to-br from-[#232336] to-[#18181B] rounded-2xl border border-[#232336] shadow-sm hover:shadow-xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 flex flex-col items-center px-8 py-10 w-full group cursor-pointer hover:border-[#8B5CF6] hover:bg-[#18181B]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 min-w-[44px] min-h-[44px] transform hover:scale-105"
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
                  <Avatar
                    src={leader.photo}
                    alt={leader.name}
                    initials={leader.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  />
                  <h3 className="text-2xl font-semibold text-white mt-6 mb-1 text-center tracking-tight group-hover:text-[#8B5CF6] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-[#8B5CF6] font-medium text-base mb-4 text-center">
                    {leader.title}
                  </p>

                  <div className="text-[#8B5CF6] text-sm font-medium group-hover:text-white transition-colors">
                    Click to read full profile →
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Advisor Board Section */}
        <section
          className="py-16 px-2 border-t border-[#232336] mt-8"
          role="region"
          aria-labelledby="advisor-board-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="advisor-board-heading"
                className="text-4xl font-bold text-[#8B5CF6] mb-6"
              >
                Advisory Board
              </h2>
              <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto mb-8">
                Our distinguished Advisory Board brings together industry
                leaders, cybersecurity experts, and strategic visionaries who
                guide our mission to redefine digital trust and security.
              </p>
            </div>

            {/* Advisor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                {
                  id: 3,
                  name: 'Dr. Emily Watson',
                  title: 'AI & Security Research Director',
                  expertise: 'AI Security & Research',
                  description:
                    'Expert in AI Security & Research with extensive experience in enterprise cybersecurity and strategic leadership.',
                  image: '/images/advisors/emily-watson.jpg',
                },
                {
                  id: 4,
                  name: 'James Thompson',
                  title: 'Global Security Operations Expert',
                  expertise: 'Critical Infrastructure & Incident Response',
                  description:
                    'Expert in Critical Infrastructure & Incident Response with extensive experience in enterprise cybersecurity and strategic leadership.',
                  image: '/images/advisors/james-thompson.jpg',
                },
                {
                  id: 5,
                  name: 'Michael Rodriguez',
                  title: 'Digital Transformation Advisor',
                  expertise: 'Cloud Security & Digital Strategy',
                  description:
                    'Technology executive with deep experience in cloud security and digital transformation. Advises Fortune 100 companies on security-first digital strategies.',
                  image: '/images/advisors/michael-rodriguez.jpg',
                },
                {
                  id: 6,
                  name: 'Dr. Sarah Chen',
                  title: 'Chief Cybersecurity Strategist',
                  expertise: 'Zero Trust & Threat Intelligence',
                  description:
                    'Former CISO at Fortune 500 companies with 20+ years in enterprise security. Expert in zero-trust architecture and threat intelligence frameworks.',
                  image: '/images/advisors/sarah-chen.jpg',
                },
              ].map((advisor) => (
                <div
                  key={advisor.id}
                  className="group bg-gradient-to-br from-[#232336] to-[#18181B] rounded-2xl p-8 border border-[#2A2A3A] hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 hover:-translate-y-2"
                >
                  {/* Enhanced Profile Photo */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      {advisor.image ? (
                        <img
                          src={advisor.image}
                          alt={`${advisor.name} profile`}
                          className="w-24 h-24 rounded-full object-cover object-center border-4 border-[#8B5CF6] shadow-xl group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#8B5CF6]/30 transition-all duration-300 filter group-hover:brightness-110"
                          loading="lazy"
                          width="96"
                          height="96"
                          onError={(e) => {
                            // Fallback to placeholder if image doesn't exist
                            const target = e.currentTarget as HTMLImageElement
                            const fallback =
                              target.nextElementSibling as HTMLElement
                            target.style.display = 'none'
                            if (fallback) fallback.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div
                        className={`w-24 h-24 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-4 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#8B5CF6]/30 transition-all duration-300 ${advisor.image ? 'hidden' : ''}`}
                      >
                        <span className="text-white text-2xl font-bold drop-shadow-lg">
                          {advisor.id}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full p-2 shadow-lg">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Advisor Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors duration-300">
                      {advisor.name}
                    </h3>
                    <p className="text-[#A78BFA] mb-3 font-semibold">
                      {advisor.title}
                    </p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                      {advisor.description}
                    </p>

                    {/* Enhanced Expertise Badge */}
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#232336] to-[#2A2A3A] border border-[#3A3A4A] rounded-full">
                      <span className="text-[#8B5CF6] text-xs font-medium">
                        {advisor.expertise}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 px-2 border-t border-[#232336] mt-8"
          role="region"
          aria-labelledby="leadership-cta-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="leadership-cta-heading"
              className="text-3xl font-bold text-white mb-4"
            >
              Join Our Leadership Team
            </h2>
            <p className="text-lg text-[#A1A1AA] mb-6">
              We're always looking for exceptional leaders to join our mission.
              Explore opportunities to make a difference in cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/about/careers"
                className="inline-block text-base font-medium text-white bg-[#8B5CF6] hover:bg-[#7c3aed] px-6 py-2 rounded-lg transition-colors"
              >
                View Careers
              </Link>
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-base font-medium text-white border border-[#8B5CF6] hover:bg-[#232336] px-6 py-2 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
