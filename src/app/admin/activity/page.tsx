import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { Activity, User, Calendar, Search, Filter, Download, Eye } from 'lucide-react'

async function getActivityLogs() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('activity_logs')
    .select('*')
    .order('timestamp', { ascending: false })
    .limit(100)

  if (error) {
    console.error('Error fetching activity logs:', error)
    return []
  }

  return data || []
}

export default async function ActivityPage() {
  await requireAuth()
  const logs = await getActivityLogs()

  const getActionColor = (action: string) => {
    switch (action) {
      case 'create':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'update':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'delete':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'publish':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20'
      case 'unpublish':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20'
      case 'login':
        return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
      case 'logout':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  const getResourceColor = (resourceType: string) => {
    switch (resourceType) {
      case 'job':
        return 'bg-blue-500/10 text-blue-500'
      case 'application':
        return 'bg-green-500/10 text-green-500'
      case 'blog_post':
        return 'bg-purple-500/10 text-purple-500'
      case 'team_member':
        return 'bg-orange-500/10 text-orange-500'
      case 'contact':
        return 'bg-pink-500/10 text-pink-500'
      default:
        return 'bg-gray-500/10 text-gray-500'
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) {
      return 'Just now'
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Activity Logs</h1>
          <p className="text-text-secondary mt-2">
            Track all admin actions and changes
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-3 bg-background border border-border-light/20 rounded-xl text-text-secondary hover:text-white hover:bg-background-alt transition-all">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{logs.length}</span>
          </div>
          <p className="text-text-muted text-sm">Total Actions</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {new Set(logs.map(log => log.admin_email)).size}
            </span>
          </div>
          <p className="text-text-muted text-sm">Active Users</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {logs.filter(log => {
                const logDate = new Date(log.timestamp)
                const today = new Date()
                return logDate.toDateString() === today.toDateString()
              }).length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Today</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {new Set(logs.map(log => log.resource_type)).size}
            </span>
          </div>
          <p className="text-text-muted text-sm">Resource Types</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search activity logs..."
              className="w-full pl-12 pr-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-background border border-border-light/20 rounded-xl text-text-secondary hover:text-white hover:bg-background-alt transition-all">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Activity Logs List */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl overflow-hidden">
        {logs.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-background-alt rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-text-muted" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No activity logs yet</h3>
            <p className="text-text-muted">Admin actions will be logged here</p>
          </div>
        ) : (
          <div className="divide-y divide-border-light/10">
            {logs.map((log) => (
              <div key={log.id} className="p-6 hover:bg-background-alt/50 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getActionColor(log.action)}`}>
                        {log.action}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getResourceColor(log.resource_type)}`}>
                        {log.resource_type.replace('_', ' ')}
                      </span>
                      <span className="text-sm text-text-muted">
                        {log.section}
                        {log.subsection && ` • ${log.subsection}`}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-text-muted mb-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{log.admin_name}</span>
                        <span className="text-text-muted">({log.admin_email})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatTimestamp(log.timestamp)}</span>
                      </div>
                      {log.ip_address && (
                        <span>IP: {log.ip_address}</span>
                      )}
                    </div>

                    {log.changes_json && (
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-white mb-2">Changes:</h4>
                        <div className="bg-background-alt rounded-lg p-3 text-sm">
                          <pre className="text-text-secondary whitespace-pre-wrap">
                            {JSON.stringify(log.changes_json, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}

                    {log.old_value && (
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-white mb-2">Previous Value:</h4>
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm">
                          <pre className="text-red-400 whitespace-pre-wrap">
                            {JSON.stringify(log.old_value, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}

                    {log.new_value && (
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-white mb-2">New Value:</h4>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-sm">
                          <pre className="text-green-400 whitespace-pre-wrap">
                            {JSON.stringify(log.new_value, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 ml-6">
                    <button
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="View details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
