'use client'
import { useState } from 'react'
import { Share2, Copy, Check } from 'lucide-react'
import { sanitizeInput, validateInputLength, MAX_LENGTHS } from '@/lib/utils'

export default function BlogPostClient() {
  const [copied, setCopied] = useState(false)
  const [sharing, setSharing] = useState(false)

  const handleShare = async () => {
    setSharing(true)

    try {
      // Validate URL before sharing
      const currentUrl = window.location.href
      if (!currentUrl || currentUrl.length > MAX_LENGTHS.URL) {
        throw new Error('Invalid URL')
      }

      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: currentUrl,
        })
      } else {
        // Fallback to copying URL
        await handleCopyUrl()
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error sharing:', error)
      }
      // Fallback to copying URL on error
      await handleCopyUrl()
    } finally {
      setSharing(false)
    }
  }

  const handleCopyUrl = async () => {
    try {
      const currentUrl = window.location.href

      // Validate URL before copying
      if (!currentUrl || currentUrl.length > MAX_LENGTHS.URL) {
        throw new Error('Invalid URL')
      }

      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)

      if (process.env.NODE_ENV === 'development') {
        console.log('URL copied to clipboard')
      }

      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error copying URL:', error)
      }
      setCopied(false)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleShare}
        disabled={sharing}
        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white font-semibold rounded-lg transition-colors duration-200"
      >
        <Share2 className="w-4 h-4" />
        {sharing ? 'Sharing...' : 'Share'}
      </button>

      <button
        onClick={handleCopyUrl}
        disabled={copied}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy URL
          </>
        )}
      </button>
    </div>
  )
}
