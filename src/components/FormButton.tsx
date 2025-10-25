'use client'

import { useState } from 'react'

interface FormButtonProps {
  children: React.ReactNode
  className?: string
}

export default function FormButton({ children, className }: FormButtonProps) {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className={className}
      >
        {children}
      </button>

      {/* Microsoft Forms Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Product & Service Inquiry</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-text-secondary hover:text-white transition-colors duration-200 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Container */}
            <div className="p-6">
              <iframe
                width="100%"
                height="480"
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=X5B4nXtJyUe8_Q47cbEk1vTkiwwqi3NAhP4Sm3GUiQpUM1g3UTdZQkc5SERWSFdNUjdLMjEwOU9SVS4u&embed=true"
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
                allowFullScreen
                webkitAllowFullScreen
                mozAllowFullScreen
                msAllowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
