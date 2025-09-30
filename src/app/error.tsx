'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw, Mail } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Only log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Application error:', error)
    }
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-alt to-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-gradient-to-br from-background-card to-background-alt border border-border-light/50 rounded-2xl p-8 shadow-2xl">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>

          <h1 className="text-2xl font-bold text-text-primary mb-4">
            Something went wrong
          </h1>

          <p className="text-text-secondary mb-6 leading-relaxed">
            We apologize for the inconvenience. An unexpected error has
            occurred. Our team has been notified and is working to resolve this
            issue.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details className="mb-6 text-left">
              <summary className="cursor-pointer text-sm text-text-tertiary hover:text-text-secondary mb-2">
                Error Details (Development)
              </summary>
              <div className="bg-background-light/50 rounded-lg p-4 text-xs font-mono text-text-secondary overflow-auto">
                <div className="mb-2">
                  <strong>Message:</strong> {error.message}
                </div>
                {error.digest && (
                  <div className="mb-2">
                    <strong>Digest:</strong> {error.digest}
                  </div>
                )}
                <div>
                  <strong>Stack:</strong>
                  <pre className="mt-1 whitespace-pre-wrap">{error.stack}</pre>
                </div>
              </div>
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-background-light/50 text-text-primary font-semibold rounded-xl hover:bg-background-light transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-border-light/50">
            <p className="text-sm text-text-tertiary mb-4">
              If this problem persists, please contact our support team.
            </p>
            <Link
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
