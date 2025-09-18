'use client'
import { useState, useEffect } from 'react'

// Counter animation component
interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Fallback: if IntersectionObserver is not supported, start animation immediately
    if (!window.IntersectionObserver) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${end}`)
    if (element) {
      observer.observe(element)
    } else {
      // If element not found, start animation anyway
      setIsVisible(true)
    }

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [end])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Use easing function for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easedProgress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        // Ensure we reach the exact end value
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isVisible, end, duration])

  // Format the number with proper commas and handle large numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toLocaleString()
  }

  return (
    <div className="counter-container">
      <span id={`counter-${end}`} className="counter-number">
        {isVisible ? formatNumber(count) : '0'}
        {suffix}
      </span>
    </div>
  )
}
