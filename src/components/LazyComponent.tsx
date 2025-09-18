'use client'

import React, { Suspense, lazy, ComponentType } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  [key: string]: any
}

export default function LazyComponent({ 
  component, 
  fallback = <LoadingSpinner />,
  ...props 
}: LazyComponentProps) {
  const LazyComponent = lazy(component)

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

// Pre-configured lazy components for common use cases
export const LazyAnalytics = () => (
  <LazyComponent 
    component={() => import('./AnalyticsWrapper')}
    fallback={null}
  />
)

export const LazyCookieConsent = () => (
  <LazyComponent 
    component={() => import('./CookieConsent')}
    fallback={null}
  />
)

export const LazySpeedInsights = () => (
  <LazyComponent 
    component={() => import('@vercel/speed-insights/next').then(mod => ({ default: mod.SpeedInsights }))}
    fallback={null}
  />
)
