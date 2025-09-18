'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Generate optimized image sources
  const getOptimizedSrc = (baseSrc: string, format: string, suffix: string) => {
    const baseName = baseSrc.replace(/\.[^/.]+$/, '')
    return `${baseName}${suffix}.${format}`
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <picture className={`relative overflow-hidden ${className}`}>
      {/* AVIF format (best compression) */}
      <source
        srcSet={getOptimizedSrc(src, 'avif', '-avif')}
        type="image/avif"
        media="(min-width: 1200px)"
      />
      
      {/* WebP format (good compression, wide support) */}
      <source
        srcSet={getOptimizedSrc(src, 'webp', '-webp')}
        type="image/webp"
        media="(min-width: 768px)"
      />
      
      {/* Mobile WebP */}
      <source
        srcSet={getOptimizedSrc(src, 'webp', '-mobile')}
        type="image/webp"
        media="(max-width: 767px)"
      />
      
      {/* Fallback to original */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        priority={priority}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
    </picture>
  )
}
