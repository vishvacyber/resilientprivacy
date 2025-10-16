import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { UserCircle, FileText, Phone, Mail, MapPin, Calendar, Briefcase } from 'lucide-react'
import Link from 'next/link'

async function getApplications() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('job_applications')
    .select(`
      *,
      jobs (
        title,
        department,
        location
      )
    `)
    .order('applied_at', { ascending: false })

  if (error) {
    console.error('Error fetching applications:', error)
    return []
  }

  return data || []
}

const stages = [
  { key: 'pending', label: 'New Applications', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
  { key: 'reviewing', label: 'Under Review', color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' },
  { key: 'screening', label: 'Phone Screening', color: 'bg-orange-500/10 text-orange-500 border-orange-500/20' },
  { key: 'interview_scheduled', label: 'Interview Scheduled', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
  { key: 'interview_completed', label: 'Interview Completed', color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' },
  { key: 'offer', label: 'Offer Made', color: 'bg-green-500/10 text-green-500 border-green-500/20' },
  { key: 'hired', label: 'Hired', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
  { key: 'rejected', label: 'Rejected', color: 'bg-red-500/10 text-red-500 border-red-500/20' }
]

export default async function ApplicationsPage() {
  await requireAuth()
  const applications = await getApplications()

  const getStageColor = (stage: string) => {
    const stageConfig = stages.find(s => s.key === stage)
    return stageConfig?.color || 'bg-gray-500/10 text-gray-500 border-gray-500/20'
  }

  const getVisaTypeColor = (visaType: string | null) => {
    if (!visaType) return 'bg-gray-500/10 text-gray-500'
    
    switch (visaType) {
      case 'H1B':
        return 'bg-blue-500/10 text-blue-500'
      case 'L1':
        return 'bg-green-500/10 text-green-500'
      case 'F1_OPT':
        return 'bg-purple-500/10 text-purple-500'
      case 'Green_Card':
        return 'bg-emerald-500/10 text-emerald-500'
      case 'US_Citizen':
        return 'bg-indigo-500/10 text-indigo-500'
      default:
        return 'bg-gray-500/10 text-gray-500'
    }
  }

  const applicationsByStage = stages.map(stage => ({
    ...stage,
    applications: applications.filter(app => app.stage === stage.key)
  }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Application Tracking System</h1>
          <p className="text-text-secondary mt-2">
            Manage job applications through the hiring pipeline
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{applications.length}</div>
          <div className="text-sm text-text-muted">Total Applications</div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <UserCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {applications.filter(app => app.stage === 'pending').length}
            </span>
          </div>
          <p className="text-text-muted text-sm">New Applications</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {applications.filter(app => ['reviewing', 'screening'].includes(app.stage)).length}
            </span>
          </div>
          <p className="text-text-muted text-sm">In Review</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {applications.filter(app => ['interview_scheduled', 'interview_completed'].includes(app.stage)).length}
            </span>
          </div>
          <p className="text-text-muted text-sm">In Interview</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {applications.filter(app => ['offer', 'hired'].includes(app.stage)).length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Offers & Hired</p>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Application Pipeline</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-8 gap-6 overflow-x-auto">
          {applicationsByStage.map((stage) => (
            <div key={stage.key} className="min-w-[280px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">{stage.label}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${stage.color}`}>
                  {stage.applications.length}
                </span>
              </div>
              
              <div className="space-y-3 min-h-[400px]">
                {stage.applications.map((application) => (
                  <Link
                    key={application.id}
                    href={`/admin/applications/${application.id}`}
                    className="block p-4 bg-background hover:bg-background-alt border border-border-light/20 rounded-xl transition-all hover:border-primary-500/30 group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <UserCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white truncate group-hover:text-primary-500 transition-colors">
                          {application.candidate_name}
                        </h4>
                        <p className="text-sm text-text-muted truncate">
                          {application.jobs?.title}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-text-muted">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{application.email}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-text-muted">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{application.current_location}</span>
                      </div>

                      {application.current_company && (
                        <div className="flex items-center gap-2 text-text-muted">
                          <Briefcase className="w-4 h-4" />
                          <span className="truncate">{application.current_company}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-text-muted">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(application.applied_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      {application.visa_sponsorship_required && (
                        <span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full border border-orange-500/20">
                          Visa Required
                        </span>
                      )}
                      
                      {application.current_visa_type && (
                        <span className={`px-2 py-1 text-xs rounded-full border ${getVisaTypeColor(application.current_visa_type)}`}>
                          {application.current_visa_type.replace('_', ' ')}
                        </span>
                      )}

                      {application.willing_to_relocate && (
                        <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full border border-green-500/20">
                          Relocatable
                        </span>
                      )}
                    </div>

                    {application.years_of_experience > 0 && (
                      <div className="mt-2 text-xs text-text-muted">
                        {application.years_of_experience} years experience
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
