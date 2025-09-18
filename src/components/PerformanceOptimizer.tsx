'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Optimize JavaScript loading
    const optimizeJSLoading = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]')
      scripts.forEach((script) => {
        if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
          const src = script.getAttribute('src')
          if (src && !src.includes('critical') && !src.includes('vendor')) {
            script.setAttribute('defer', '')
          }
        }
      })
    }

    // Optimize image loading
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/_next/static/css/app/layout.css',
        '/_next/static/css/app/globals.css',
      ]

      criticalResources.forEach((resource) => {
        if (!document.querySelector(`link[href="${resource}"]`)) {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.href = resource
          link.as = 'style'
          link.onload = () => {
            link.rel = 'stylesheet'
          }
          document.head.appendChild(link)
        }
      })
    }

    // Optimize font loading
    const optimizeFontLoading = () => {
      // Add font-display: swap to all font faces
      const style = document.createElement('style')
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
      `
      document.head.appendChild(style)
    }

    // Run optimizations
    optimizeJSLoading()
    optimizeImageLoading()
    preloadCriticalResources()
    optimizeFontLoading()

    // Cleanup function
    return () => {
      // Cleanup any observers or timers if needed
    }
  }, [])

  return null
}
