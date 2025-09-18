'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as any
          if (fidEntry.processingStart) {
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
          }
        })
      }).observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const clsEntry = entry as any
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value || 0
          }
        })
        console.log('CLS:', clsValue)
      }).observe({ entryTypes: ['layout-shift'] })

      // First Contentful Paint (FCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log('FCP:', entry.startTime)
        })
      }).observe({ entryTypes: ['paint'] })

      // Time to Interactive (TTI)
      const tti = performance.getEntriesByType('navigation')[0] as any
      if (tti && tti.loadEventEnd && tti.fetchStart) {
        console.log('TTI:', tti.loadEventEnd - tti.fetchStart)
      }
    }

    // Monitor resource loading times
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource')
      const slowResources = resources.filter(resource => resource.duration > 1000)
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map(r => ({
          name: r.name,
          duration: r.duration,
          size: (r as any).transferSize || 0
        })))
      }
    }

    // Monitor JavaScript bundle sizes
    const monitorBundleSizes = () => {
      const scripts = Array.from(document.querySelectorAll('script[src]'))
      const totalSize = scripts.reduce((total, script) => {
        const scriptElement = script as HTMLScriptElement
        const resource = performance.getEntriesByName(scriptElement.src)[0] as any
        return total + (resource?.transferSize || 0)
      }, 0)
      
      console.log('Total JavaScript size:', (totalSize / 1024).toFixed(2), 'KB')
      
      // Identify large bundles
      const largeBundles = scripts.filter(script => {
        const scriptElement = script as HTMLScriptElement
        const resource = performance.getEntriesByName(scriptElement.src)[0] as any
        return resource && resource.transferSize > 100000 // > 100KB
      })
      
      if (largeBundles.length > 0) {
        console.warn('Large JavaScript bundles detected:', largeBundles.map(s => (s as HTMLScriptElement).src))
      }
    }

    // Run monitoring
    measurePerformance()
    
    // Monitor after page load
    window.addEventListener('load', () => {
      monitorResources()
      monitorBundleSizes()
    })

    // Monitor after a delay to catch lazy-loaded resources
    setTimeout(() => {
      monitorResources()
      monitorBundleSizes()
    }, 3000)

  }, [])

  return null
}
