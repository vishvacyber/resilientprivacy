'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { logActivity } from '@/lib/activity-logger'
import { ArrowLeft, Save, Eye } from 'lucide-react'
import Link from 'next/link'

export default function NewJobPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'full-time',
    salary_range: '',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    visa_sponsorship_available: false,
    status: 'draft'
  })

  const handleSubmit = async (e: React.FormEvent, publish = false) => {
    e.preventDefault()
    setLoading(true)

    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('jobs')
        .insert({
          ...formData,
          status: publish ? 'published' : 'draft',
          published_at: publish ? new Date().toISOString() : null
        })
        .select()
        .single()

      if (error) {
        console.error('Error creating job:', error)
        alert('Error creating job. Please try again.')
        return
      }

      // Log activity
      await logActivity({
        adminId: 'current-user-id', // This should come from auth context
        adminEmail: 'admin@resilientprivacy.com',
        adminName: 'Admin',
        action: 'create',
        resourceType: 'job',
        resourceId: data.id,
        section: 'Jobs',
        newValue: data,
      })

      router.push('/admin/jobs')
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/jobs"
          className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">Create New Job</h1>
          <p className="text-text-secondary mt-1">
            Fill in the details to create a new job posting
          </p>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Job Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., Senior Software Engineer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Department *
              </label>
              <input
                type="text"
                required
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., Engineering"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Location *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., San Francisco, CA (Remote)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Job Type *
              </label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Salary Range
              </label>
              <input
                type="text"
                value={formData.salary_range}
                onChange={(e) => setFormData({ ...formData, salary_range: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., $120,000 - $180,000"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="visa_sponsorship"
                checked={formData.visa_sponsorship_available}
                onChange={(e) => setFormData({ ...formData, visa_sponsorship_available: e.target.checked })}
                className="w-5 h-5 text-primary-500 bg-background border-border-light/20 rounded focus:ring-primary-500"
              />
              <label htmlFor="visa_sponsorship" className="text-sm font-medium text-white">
                Visa Sponsorship Available
              </label>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Job Description</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Description *
              </label>
              <textarea
                required
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="Describe the role, company culture, and what makes this position exciting..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Requirements *
              </label>
              <textarea
                required
                rows={6}
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="List the required skills, experience, and qualifications..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Responsibilities *
              </label>
              <textarea
                required
                rows={6}
                value={formData.responsibilities}
                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="Outline the key responsibilities and day-to-day tasks..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Benefits & Perks
              </label>
              <textarea
                rows={4}
                value={formData.benefits}
                onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="List benefits, perks, and what makes working here great..."
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Link
            href="/admin/jobs"
            className="px-6 py-3 text-text-secondary hover:text-white transition-colors"
          >
            Cancel
          </Link>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => handleSubmit(e, true)}
              disabled={loading}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Eye className="w-5 h-5" />
              {loading ? 'Publishing...' : 'Publish Job'}
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-5 h-5" />
              {loading ? 'Saving...' : 'Save as Draft'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
