import { requireAuth } from '@/lib/auth'
import { Settings, User, Shield, Bell, Database, Mail, Globe, Key } from 'lucide-react'

export default async function SettingsPage() {
  await requireAuth()

  const settingsSections = [
    {
      title: 'User Management',
      description: 'Manage admin users and permissions',
      icon: User,
      href: '/admin/settings/users',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Profile Settings',
      description: 'Update your personal information',
      icon: User,
      href: '/admin/settings/profile',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Security',
      description: 'Configure security settings and access controls',
      icon: Shield,
      href: '/admin/settings/security',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Notifications',
      description: 'Configure email and system notifications',
      icon: Bell,
      href: '/admin/settings/notifications',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Database',
      description: 'Database settings and maintenance',
      icon: Database,
      href: '/admin/settings/database',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Email Configuration',
      description: 'SMTP settings and email templates',
      icon: Mail,
      href: '/admin/settings/email',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'General Settings',
      description: 'Website and application settings',
      icon: Globe,
      href: '/admin/settings/general',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'API Keys',
      description: 'Manage API keys and integrations',
      icon: Key,
      href: '/admin/settings/api',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-text-secondary mt-2">
            Configure your admin panel and application settings
          </p>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className="group bg-background-card border border-border-light/20 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {section.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">System Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Security Status</h3>
            <p className="text-green-500 text-sm font-medium">All systems secure</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Database Status</h3>
            <p className="text-green-500 text-sm font-medium">Connected & healthy</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Notifications</h3>
            <p className="text-green-500 text-sm font-medium">Email configured</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Recent System Activity</h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-background-alt rounded-xl">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Security scan completed</p>
              <p className="text-text-muted text-sm">All systems passed security checks</p>
            </div>
            <span className="text-text-muted text-sm">2 hours ago</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-background-alt rounded-xl">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Database backup completed</p>
              <p className="text-text-muted text-sm">Daily backup successfully created</p>
            </div>
            <span className="text-text-muted text-sm">6 hours ago</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-background-alt rounded-xl">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Email configuration updated</p>
              <p className="text-text-muted text-sm">SMTP settings have been updated</p>
            </div>
            <span className="text-text-muted text-sm">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}
