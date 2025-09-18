'use client'

import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'

export default function AnalyticsWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Only render Analytics on client side and in production
  if (!isClient || process.env.NODE_ENV !== 'production') {
    return null
  }

  try {
    return <Analytics />
  } catch (error) {
    console.warn('Analytics component failed to load:', error)
    return null
  }
}
