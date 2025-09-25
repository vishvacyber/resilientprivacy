'use client'

import { useEffect, useRef } from 'react'

export default function CompanyScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let animationId: number
    let scrollPosition = 0
    let scrollSpeed = 0.5 // Default speed
    let isPaused = false

    // Adjust speed based on screen size and performance
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        scrollSpeed = 0.25 // Slower on mobile for better performance
      } else if (window.innerWidth < 1024) {
        scrollSpeed = 0.35 // Medium speed on tablet
      } else {
        scrollSpeed = 0.5 // Normal speed on desktop
      }
    }

    updateSpeed()

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed
        scroller.style.transform = `translateX(-${scrollPosition}px)`
        
        // Reset position when scrolled past the content width
        if (scrollPosition >= scroller.scrollWidth / 2) {
          scrollPosition = 0
        }
      }
      
      animationId = requestAnimationFrame(animate)
    }

    // Pause on hover for better UX
    const handleMouseEnter = () => {
      isPaused = true
    }
    
    const handleMouseLeave = () => {
      isPaused = false
    }

    // Handle resize
    const handleResize = () => {
      updateSpeed()
    }

    scroller.addEventListener('mouseenter', handleMouseEnter)
    scroller.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      scroller.removeEventListener('mouseenter', handleMouseEnter)
      scroller.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const companies = [
    'CyberShield AI',
    'SecureFlow',
    'ThreatGuard Pro',
    'DataVault Security',
    'CyberDefense Labs',
    'SecureMind AI',
    'ThreatIntel Solutions',
    'CyberArmor',
    'SecureNet AI',
    'DefenseTech',
    'AI Security Hub',
    'CyberVault',
    'ThreatBlock AI',
    'SecureCore',
    'CyberGuardian',
    'AI Defense Co',
    'SecureAI Labs',
    'ThreatShield',
    'CyberFortress',
    'AI Security Pro',
    'SecureFlow',
    'ThreatGuard Pro',
    'DataVault Security',
    'CyberDefense Labs',
    'SecureMind AI',
    'ThreatIntel Solutions',
    'CyberArmor',
    'SecureNet AI',
    'DefenseTech',
    'AI Security Hub',
    'CyberVault',
    'ThreatBlock AI',
    'SecureCore',
    'CyberGuardian',
    'AI Defense Co',
    'SecureAI Labs',
    'ThreatShield',
    'CyberFortress',
    'AI Security Pro'
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-background-alt to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-background-alt to-transparent z-10"></div>
      
      {/* Scrolling container */}
      <div 
        ref={scrollerRef}
        className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 py-3 sm:py-4"
        style={{ width: 'max-content' }}
      >
        {companies.map((company, index) => (
          <div
            key={`${company}-${index}`}
            className="flex-shrink-0 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 bg-background-card rounded-lg border border-border-light/30 hover:border-primary-500/50 transition-all duration-300 hover:shadow-purple group cursor-pointer"
          >
            <span className="text-text-secondary group-hover:text-white font-medium text-xs sm:text-sm whitespace-nowrap transition-colors duration-300">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
