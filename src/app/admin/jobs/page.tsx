import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { logActivity } from '@/lib/activity-logger'
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

async function getJobs() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching jobs:', error)
    return []
  }

  return data || []
}

async function deleteJob(jobId: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('jobs')
    .delete()
    .eq('id', jobId)

  if (error) {
    console.error('Error deleting job:', error)
    return false
  }

  return true
}

async function toggleJobStatus(jobId: string, currentStatus: string) {
  const supabase = await createClient()
  const newStatus = currentStatus === 'published' ? 'draft' : 'published'
  
  const { error } = await supabase
    .from('jobs')
    .update({ 
      status: newStatus,
      published_at: newStatus === 'published' ? new Date().toISOString() : null
    })
    .eq('id', jobId)

  if (error) {
    console.error('Error updating job status:', error)
    return false
  }

  return true
}

export default async function JobsPage() {
  await requireAuth()
  const jobs = await getJobs()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'draft':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'closed':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-blue-500/10 text-blue-500'
      case 'part-time':
        return 'bg-purple-500/10 text-purple-500'
      case 'contract':
        return 'bg-orange-500/10 text-orange-500'
      case 'internship':
        return 'bg-pink-500/10 text-pink-500'
      default:
        return 'bg-gray-500/10 text-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Job Postings</h1>
          <p className="text-text-secondary mt-2">
            Manage job postings and track applications
          </p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          <Plus className="w-5 h-5" />
          Post New Job
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {jobs.filter(job => job.status === 'published').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Published</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <EyeOff className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {jobs.filter(job => job.status === 'draft').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Drafts</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {jobs.filter(job => job.status === 'closed').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Closed</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{jobs.length}</span>
          </div>
          <p className="text-text-muted text-sm">Total Jobs</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-12 pr-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-background border border-border-light/20 rounded-xl text-text-secondary hover:text-white hover:bg-background-alt transition-all">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl overflow-hidden">
        {jobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-background-alt rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-text-muted" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No jobs posted yet</h3>
            <p className="text-text-muted mb-6">Create your first job posting to get started</p>
            <Link
              href="/admin/jobs/new"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              Post Your First Job
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-border-light/10">
            {jobs.map((job) => (
              <div key={job.id} className="p-6 hover:bg-background-alt/50 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
                        {job.type.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-text-muted mb-4">
                      <span>📍 {job.location}</span>
                      <span>🏢 {job.department}</span>
                      {job.salary_range && <span>💰 {job.salary_range}</span>}
                      {job.visa_sponsorship_available && (
                        <span className="text-green-500">🟢 Visa Sponsorship Available</span>
                      )}
                    </div>

                    <p className="text-text-secondary line-clamp-2 mb-4">
                      {job.description.substring(0, 200)}...
                    </p>

                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span>Created: {new Date(job.created_at).toLocaleDateString()}</span>
                      {job.published_at && (
                        <span>Published: {new Date(job.published_at).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-6">
                    <Link
                      href={`/admin/jobs/${job.id}`}
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    
                    <Link
                      href={`/admin/jobs/${job.id}/applications`}
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="View Applications"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>

                    <button
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="More options"
                    >
                      <MoreHorizontal className="w-4 h-4" />
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
