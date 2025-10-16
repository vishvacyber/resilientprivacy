import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import {
  Briefcase,
  UserCircle,
  FileText,
  Mail,
  TrendingUp,
  Clock,
} from 'lucide-react'

async function getStats() {
  const supabase = await createClient()

  const [jobs, applications, blogPosts, contacts] = await Promise.all([
    supabase.from('jobs').select('*', { count: 'exact', head: true }),
    supabase.from('job_applications').select('*', { count: 'exact', head: true }),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
  ])

  return {
    totalJobs: jobs.count || 0,
    totalApplications: applications.count || 0,
    totalBlogPosts: blogPosts.count || 0,
    totalContacts: contacts.count || 0,
  }
}

async function getRecentApplications() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('job_applications')
    .select('*, jobs(title)')
    .order('applied_at', { ascending: false })
    .limit(5)

  return data || []
}

export default async function AdminDashboard() {
  await requireAuth()
  const stats = await getStats()
  const recentApplications = await getRecentApplications()

  const statCards = [
    {
      label: 'Total Jobs',
      value: stats.totalJobs,
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      href: '/admin/jobs',
    },
    {
      label: 'Applications',
      value: stats.totalApplications,
      icon: UserCircle,
      color: 'from-purple-500 to-purple-600',
      href: '/admin/applications',
    },
    {
      label: 'Blog Posts',
      value: stats.totalBlogPosts,
      icon: FileText,
      color: 'from-green-500 to-green-600',
      href: '/admin/blog',
    },
    {
      label: 'Contact Submissions',
      value: stats.totalContacts,
      icon: Mail,
      color: 'from-orange-500 to-orange-600',
      href: '/admin/contacts',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to Admin Dashboard
        </h1>
        <p className="text-text-secondary">
          Overview of your website content and applications
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            className="bg-background-card border border-border-light/20 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-text-muted text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </a>
        ))}
      </div>

      {/* Recent Applications */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Recent Applications</h2>
          <a
            href="/admin/applications"
            className="text-primary-500 hover:text-primary-400 text-sm font-medium"
          >
            View All →
          </a>
        </div>

        {recentApplications.length === 0 ? (
          <div className="text-center py-12">
            <UserCircle className="w-12 h-12 text-text-muted mx-auto mb-3" />
            <p className="text-text-muted">No applications yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentApplications.map((application: any) => (
              <a
                key={application.id}
                href={`/admin/applications/${application.id}`}
                className="flex items-center justify-between p-4 bg-background hover:bg-background-alt rounded-xl border border-border-light/10 hover:border-primary-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <UserCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      {application.candidate_name}
                    </p>
                    <p className="text-sm text-text-muted">
                      {application.jobs?.title || 'Unknown Position'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-500 text-xs font-medium rounded-full border border-primary-500/20">
                    {application.stage}
                  </span>
                  <div className="flex items-center gap-1 text-text-muted text-sm">
                    <Clock className="w-4 h-4" />
                    {new Date(application.applied_at).toLocaleDateString()}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/admin/jobs/new"
            className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary-500/10 to-primary-600/10 hover:from-primary-500/20 hover:to-primary-600/20 border border-primary-500/20 rounded-xl transition-all"
          >
            <Briefcase className="w-5 h-5 text-primary-500" />
            <span className="font-medium text-white">Post New Job</span>
          </a>
          <a
            href="/admin/blog/new"
            className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 border border-green-500/20 rounded-xl transition-all"
          >
            <FileText className="w-5 h-5 text-green-500" />
            <span className="font-medium text-white">Create Blog Post</span>
          </a>
          <a
            href="/admin/team/new"
            className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20 border border-purple-500/20 rounded-xl transition-all"
          >
            <UserCircle className="w-5 h-5 text-purple-500" />
            <span className="font-medium text-white">Add Team Member</span>
          </a>
        </div>
      </div>
    </div>
  )
}

