'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileText,
  BookOpen,
  GraduationCap,
  Calendar,
  Mail,
  Settings,
  Activity,
  UserCircle,
  Shield,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Jobs', href: '/admin/jobs', icon: Briefcase },
  { name: 'Applications', href: '/admin/applications', icon: UserCircle },
  { name: 'Blog', href: '/admin/blog', icon: FileText },
  { name: 'Team', href: '/admin/team', icon: Users },
  { name: 'Advisors', href: '/admin/advisors', icon: Shield },
  { name: 'Documentation', href: '/admin/documentation', icon: BookOpen },
  { name: 'Training', href: '/admin/training', icon: GraduationCap },
  { name: 'Events', href: '/admin/events', icon: Calendar },
  { name: 'Contacts', href: '/admin/contacts', icon: Mail },
  { name: 'Activity Logs', href: '/admin/activity', icon: Activity },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 bg-background-card border-r border-border-light/20">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-border-light/20">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Admin Portal</h1>
            <p className="text-xs text-text-muted">Resilient Privacy</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-primary-500/10 text-primary-500 border border-primary-500/20'
                    : 'text-text-secondary hover:text-white hover:bg-background-alt'
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

