import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { Mail, Phone, Building, Calendar, MessageSquare, CheckCircle, Clock, AlertCircle } from 'lucide-react'

async function getContactSubmissions() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching contact submissions:', error)
    return []
  }

  return data || []
}

export default async function ContactsPage() {
  await requireAuth()
  const submissions = await getContactSubmissions()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'read':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'responded':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <AlertCircle className="w-4 h-4" />
      case 'read':
        return <Clock className="w-4 h-4" />
      case 'responded':
        return <CheckCircle className="w-4 h-4" />
      default:
        return <MessageSquare className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Contact Submissions</h1>
          <p className="text-text-secondary mt-2">
            Manage and respond to contact form submissions
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{submissions.length}</div>
          <div className="text-sm text-text-muted">Total Submissions</div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {submissions.filter(sub => sub.status === 'new').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">New Messages</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {submissions.filter(sub => sub.status === 'read').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Read</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {submissions.filter(sub => sub.status === 'responded').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Responded</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{submissions.length}</span>
          </div>
          <p className="text-text-muted text-sm">Total</p>
        </div>
      </div>

      {/* Contact Submissions List */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl overflow-hidden">
        {submissions.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-background-alt rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-text-muted" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No contact submissions yet</h3>
            <p className="text-text-muted">Contact form submissions will appear here</p>
          </div>
        ) : (
          <div className="divide-y divide-border-light/10">
            {submissions.map((submission) => (
              <div key={submission.id} className="p-6 hover:bg-background-alt/50 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">{submission.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(submission.status)} flex items-center gap-2`}>
                        {getStatusIcon(submission.status)}
                        {submission.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{submission.email}</span>
                      </div>
                      {submission.company && (
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span>{submission.company}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(submission.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {submission.subject && (
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-white mb-1">Subject:</h4>
                        <p className="text-text-secondary">{submission.subject}</p>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Message:</h4>
                      <p className="text-text-secondary line-clamp-3">
                        {submission.message}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span>Submitted: {new Date(submission.created_at).toLocaleString()}</span>
                      {submission.responded_at && (
                        <span>Responded: {new Date(submission.responded_at).toLocaleString()}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-6">
                    <button
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="Mark as read"
                    >
                      <Clock className="w-4 h-4" />
                    </button>
                    
                    <button
                      className="p-2 text-text-muted hover:text-green-500 hover:bg-green-500/10 rounded-lg transition-all"
                      title="Mark as responded"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>

                    <button
                      className="p-2 text-text-muted hover:text-primary-500 hover:bg-primary-500/10 rounded-lg transition-all"
                      title="Reply"
                    >
                      <Mail className="w-4 h-4" />
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
