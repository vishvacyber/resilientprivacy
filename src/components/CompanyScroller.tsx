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

  // Company names for the scroller
  const companies = [
    { name: 'AWS' },
    { name: 'Microsoft Azure' },
    { name: 'Google Cloud' },
    { name: 'IBM Cloud' },
    { name: 'Oracle Cloud' },
    { name: 'Alibaba Cloud' },
    { name: 'DigitalOcean' },
    { name: 'Vultr' },
    { name: 'Salesforce' },
    { name: 'Cisco' },
    { name: 'CrowdStrike' },
    { name: 'Splunk' },
    { name: 'VMware' },
    { name: 'Red Hat' },
    { name: 'Docker' },
    { name: 'Kubernetes' }
  ]

  // Duplicate the array for seamless scrolling
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-background-alt to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-background-alt to-transparent z-10"></div>
      
      {/* Scrolling container */}
      <div 
        ref={scrollerRef}
        className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 py-4 sm:py-6"
        style={{ width: 'max-content' }}
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 bg-background-card/50 backdrop-blur-sm rounded-xl border border-border-light/20 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <span className="text-white text-sm sm:text-base font-medium opacity-60 group-hover:opacity-100 transition-all duration-300">
                {company.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
