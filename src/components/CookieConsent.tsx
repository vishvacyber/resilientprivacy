'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Settings, Check, AlertTriangle } from 'lucide-react'
import { sanitizeInput, validateInputLength, MAX_LENGTHS } from '@/lib/utils'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    if (typeof window !== 'undefined') {
      try {
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
          setShowBanner(true)
        } else {
          // Validate stored consent data
          const savedPreferences = JSON.parse(consent)
          if (savedPreferences && typeof savedPreferences === 'object') {
            // Ensure all required properties exist and are boolean
            const validPreferences: CookiePreferences = {
              essential: Boolean(savedPreferences.essential),
              analytics: Boolean(savedPreferences.analytics),
              marketing: Boolean(savedPreferences.marketing),
            }
            setPreferences(validPreferences)
          } else {
            // Invalid stored data, show banner
            setShowBanner(true)
          }
        }
      } catch (error) {
        // If there's any error parsing stored data, show banner
        console.error('Error parsing saved consent:', error)
        setShowBanner(true)
      }
    }
  }, [])

  const saveToStorage = (data: CookiePreferences) => {
    if (typeof window !== 'undefined') {
      try {
        // Sanitize and validate data before storing
        const sanitizedData = {
          essential: Boolean(data.essential),
          analytics: Boolean(data.analytics),
          marketing: Boolean(data.marketing),
        }

        localStorage.setItem('cookieConsent', JSON.stringify(sanitizedData))
        localStorage.setItem('consentTimestamp', new Date().toISOString())
      } catch (error) {
        console.error('Error saving cookie consent:', error)
      }
    }
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    saveToStorage(allAccepted)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    const allRejected = {
      essential: true, // Essential cookies cannot be rejected
      analytics: false,
      marketing: false,
    }
    setPreferences(allRejected)
    saveToStorage(allRejected)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    saveToStorage(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (
    category: keyof CookiePreferences,
    value: boolean
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: value,
    }))
  }

  if (!showBanner && !showSettings) {
    return null
  }

  return (
    <>
      {/* Main Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-primary-500 z-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  🍪 We use cookies to enhance your experience
                </h3>
                <p className="text-text-secondary mb-4">
                  We use cookies and similar technologies to provide, protect,
                  and improve our services. By clicking &quot;Accept All&quot;,
                  you consent to our use of cookies for analytics and marketing
                  purposes. You can customize your preferences or learn more in
                  our{' '}
                  <Link
                    href="/legal/consent-policy"
                    className="text-primary-500 hover:underline"
                  >
                    Consent Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="btn flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Accept All
                </button>
                <button
                  onClick={handleRejectAll}
                  className="btn-secondary"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D0D0F] border border-[accent-500] rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Cookie Preferences
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">
                    Essential Cookies
                  </h4>
                  <p className="text-sm text-gray-400">
                    Required for the website to function properly
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.essential}
                    disabled
                    className="w-4 h-4 text-[accent-500] bg-gray-700 border-gray-600 rounded focus:ring-[accent-500] focus:ring-2"
                  />
                  <span className="ml-2 text-xs text-gray-500">
                    Always Active
                  </span>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm text-gray-400">
                    Help us understand how visitors interact with our website
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    handlePreferenceChange('analytics', e.target.checked)
                  }
                  className="w-4 h-4 text-[accent-500] bg-gray-700 border-gray-600 rounded focus:ring-[accent-500] focus:ring-2"
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">
                    Marketing Cookies
                  </h4>
                  <p className="text-sm text-gray-400">
                    Used to deliver personalized content and advertisements
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    handlePreferenceChange('marketing', e.target.checked)
                  }
                  className="w-4 h-4 text-[accent-500] bg-gray-700 border-gray-600 rounded focus:ring-[accent-500] focus:ring-2"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 btn"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
            </div>

            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-yellow-400">
                  Your preferences will be stored locally and can be changed at
                  any time. Essential cookies are required for the website to
                  function properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
