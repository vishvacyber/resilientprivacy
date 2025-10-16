'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Bell, LogOut, User, ChevronDown } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface AdminHeaderProps {
  user: {
    email?: string
    user_metadata?: {
      full_name?: string
    }
  }
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Admin'

  return (
    <header className="bg-background-card border-b border-border-light/20 px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        {/* Page Title - Could be dynamic based on route */}
        <div>
          <h2 className="text-2xl font-bold text-white">Admin Dashboard</h2>
          <p className="text-sm text-text-muted mt-1">
            Manage your website content and applications
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button
            className="relative p-2 text-text-secondary hover:text-white hover:bg-background-alt rounded-xl transition-all"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 px-4 py-2 bg-background-alt hover:bg-background border border-border-light/20 rounded-xl transition-all"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-white">{displayName}</p>
                <p className="text-xs text-text-muted">{user.email}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-text-muted" />
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-background-card border border-border-light/20 rounded-xl shadow-xl z-20 py-2">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-text-secondary hover:text-white hover:bg-background-alt transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

