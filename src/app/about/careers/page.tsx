'use client'

import React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  Users,
  Zap,
  Globe,
  Heart,
  ExternalLink,
  Briefcase,
  ChevronRight,
  Building2,
  Clock,
  MapPin,
} from 'lucide-react'
import { CAREERS_CONFIG, getNotionEmbedUrl } from './config'

export default function CareersPage() {
  // Get Notion URL from config
  const NOTION_CAREERS_URL = getNotionEmbedUrl()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-alt to-background-card">
      {/* Hero Section - Professional Design */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-accent-500 text-sm font-medium">
              Join Our Mission
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Build the Future of</span>
            <br />
            <span className="fxology-text-gradient">
              Cybersecurity
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
            Join a team of world-class experts protecting organizations from
            evolving threats. Your skills will shape the future of digital
            security.
          </p>
        </div>
      </section>

      {/* Executive Career Opportunities */}
      <section
        id="positions"
        className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6"
      >
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-alt via-background to-background-card"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Executive Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-accent-500/10 backdrop-blur-sm border border-accent-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span className="text-text-secondary text-sm font-medium tracking-wide">
                EXECUTIVE OPPORTUNITIES
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              Join Our
              <span className="block font-bold fxology-text-gradient">
                Leadership Team
              </span>
            </h2>

            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light">
              We seek exceptional professionals to drive cybersecurity
              innovation and protect the digital infrastructure of tomorrow's
              enterprises.
            </p>
          </div>

          {/* Professional Career Portal */}
          <div className="max-w-5xl mx-auto">
            <div className="fxology-card rounded-3xl overflow-hidden fxology-shadow">
              {/* Executive Header */}
              <div className="border-b border-border-light/20 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Career Opportunities
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Resilient Privacy Executive Positions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary">Updated Daily</div>
                    <div className="text-xs text-accent-500">
                      • Live Positions
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 sm:p-12">
                {/* Value Proposition */}
                <div className="text-center mb-12">
                  <h4 className="text-2xl font-semibold text-white mb-4">
                    Shape the Future of Cybersecurity
                  </h4>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                    Join a distinguished team of cybersecurity leaders
                    protecting organizations enterprises and critical
                    infrastructure worldwide.
                  </p>
                </div>

                {/* Executive Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-background-card border border-border-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/10 group-hover:border-accent-500/30 transition-all duration-300">
                      <Users className="w-8 h-8 text-accent-500" />
                    </div>
                    <h5 className="text-lg font-semibold text-white mb-2">
                      Elite Leadership
                    </h5>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Lead world-class cybersecurity professionals and drive
                      strategic initiatives
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-background-card border border-border-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/10 group-hover:border-accent-500/30 transition-all duration-300">
                      <Globe className="w-8 h-8 text-accent-500" />
                    </div>
                    <h5 className="text-lg font-semibold text-white mb-2">
                      Global Impact
                    </h5>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Influence cybersecurity standards and protect critical
                      infrastructure globally
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-background-card border border-border-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/10 group-hover:border-accent-500/30 transition-all duration-300">
                      <Zap className="w-8 h-8 text-accent-500" />
                    </div>
                    <h5 className="text-lg font-semibold text-white mb-2">
                      Innovation
                    </h5>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Pioneer next-generation security technologies and
                      AI-driven solutions
                    </p>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="text-center mb-8">
                  <Link
                    href={NOTION_CAREERS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    <Briefcase className="w-5 h-5" />
                    Explore Opportunities
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                <div className="text-center">
                  <p className="text-text-muted text-sm mb-2">
                    Competitive positions • Attractive compensation packages •
                    Flexible work arrangements
                  </p>
                  <p className="text-lg text-text-secondary">
                    Questions? Email us at{' '}
                    <a
                      href="mailto:careers@resilientprivacy.com"
                      className="text-accent-500 hover:text-white underline font-semibold"
                    >
                      careers@resilientprivacy.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
