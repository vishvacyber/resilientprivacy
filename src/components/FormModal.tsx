'use client'

import { useState, ReactNode } from 'react'
import Modal from './Modal'

interface FormModalProps {
  title: string
  formUrl: string
  children: ReactNode
  className?: string
}

export default function FormModal({ title, formUrl, children, className }: FormModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
      >
        <iframe
          width="100%"
          height="480"
          src={formUrl}
          frameBorder={0}
          marginWidth={0}
          marginHeight={0}
          style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
          allowFullScreen
          className="rounded-lg"
        />
      </Modal>
    </>
  )
}
