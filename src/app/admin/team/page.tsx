import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { Plus, Search, Filter, Edit, Trash2, Eye, EyeOff, Users, UserCheck, UserX } from 'lucide-react'
import Link from 'next/link'

async function getTeamMembers() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching team members:', error)
    return []
  }

  return data || []
}

export default async function TeamPage() {
  await requireAuth()
  const teamMembers = await getTeamMembers()

  const getRoleColor = (roleType: string) => {
    switch (roleType) {
      case 'leadership':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20'
      case 'team':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'advisor':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  const getVisibilityColor = (hidden: boolean) => {
    return hidden 
      ? 'bg-red-500/10 text-red-500 border-red-500/20'
      : 'bg-green-500/10 text-green-500 border-green-500/20'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Team Management</h1>
          <p className="text-text-secondary mt-2">
            Manage team members and leadership profiles
          </p>
        </div>
        <Link
          href="/admin/team/new"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          <Plus className="w-5 h-5" />
          Add Team Member
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {teamMembers.filter(member => member.role_type === 'leadership').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Leadership</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {teamMembers.filter(member => member.role_type === 'team').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Team Members</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {teamMembers.filter(member => member.role_type === 'advisor').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Advisors</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{teamMembers.length}</span>
          </div>
          <p className="text-text-muted text-sm">Total Members</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search team members..."
              className="w-full pl-12 pr-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-background border border-border-light/20 rounded-xl text-text-secondary hover:text-white hover:bg-background-alt transition-all">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Team Members List */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl overflow-hidden">
        {teamMembers.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-background-alt rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-text-muted" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No team members yet</h3>
            <p className="text-text-muted mb-6">Add your first team member to get started</p>
            <Link
              href="/admin/team/new"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              Add Your First Member
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-border-light/10">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-6 hover:bg-background-alt/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getRoleColor(member.role_type)}`}>
                        {member.role_type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getVisibilityColor(member.hidden)}`}>
                        {member.hidden ? 'Hidden' : 'Visible'}
                      </span>
                    </div>
                    
                    <p className="text-lg text-primary-500 mb-3">{member.title}</p>
                    
                    <p className="text-text-secondary line-clamp-2 mb-4">
                      {member.bio.substring(0, 200)}...
                    </p>

                    <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                      <span>Order: {member.display_order}</span>
                      <span>Created: {new Date(member.created_at).toLocaleDateString()}</span>
                      {member.updated_at !== member.created_at && (
                        <span>Updated: {new Date(member.updated_at).toLocaleDateString()}</span>
                      )}
                    </div>

                    {member.expertise && member.expertise.length > 0 && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm text-text-muted">Expertise:</span>
                        <div className="flex gap-2 flex-wrap">
                          {member.expertise.slice(0, 3).map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-background-alt text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                          {member.expertise.length > 3 && (
                            <span className="px-2 py-1 bg-background-alt text-xs rounded-full">
                              +{member.expertise.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {member.linkedin && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-text-muted">LinkedIn:</span>
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:text-primary-400 transition-colors"
                        >
                          View Profile
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 ml-6">
                    <Link
                      href={`/admin/team/${member.id}`}
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    
                    <Link
                      href={`/about/leadership/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>

                    <button
                      className="p-2 text-text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
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
