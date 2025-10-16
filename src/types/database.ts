export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string
          title: string
          department: string
          location: string
          type: 'full-time' | 'part-time' | 'contract' | 'internship'
          salary_range: string | null
          description: string
          requirements: string
          responsibilities: string
          benefits: string | null
          status: 'draft' | 'published' | 'closed'
          visa_sponsorship_available: boolean
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: Omit<Database['public']['Tables']['jobs']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['jobs']['Insert']>
      }
      job_applications: {
        Row: {
          id: string
          job_id: string
          candidate_name: string
          email: string
          phone: string
          resume_url: string
          cover_letter: string | null
          linkedin: string | null
          portfolio: string | null
          website: string | null
          current_location: string
          willing_to_relocate: boolean
          visa_sponsorship_required: boolean
          current_visa_type: string | null
          visa_expiry_date: string | null
          years_of_experience: number
          current_company: string | null
          current_role: string | null
          expected_salary: string | null
          notice_period: string | null
          how_did_you_hear: string | null
          status: 'new' | 'reviewing' | 'rejected' | 'accepted'
          stage: string
          notes: string | null
          applied_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['job_applications']['Row'], 'id' | 'applied_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['job_applications']['Insert']>
      }
      blog_posts: {
        Row: {
          id: string
          slug: string
          title: string
          excerpt: string
          content: string
          category: string
          author_id: string | null
          author_name: string
          date: string
          read_time: string
          featured: boolean
          published: boolean
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['blog_posts']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['blog_posts']['Insert']>
      }
      team_members: {
        Row: {
          id: string
          name: string
          title: string
          photo_url: string
          bio: string
          expertise: string[]
          linkedin: string
          quote: string
          role_type: 'leadership' | 'team' | 'advisor'
          display_order: number
          hidden: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['team_members']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['team_members']['Insert']>
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          company: string | null
          message: string
          subject: string | null
          status: 'new' | 'read' | 'responded'
          created_at: string
          responded_at: string | null
        }
        Insert: Omit<Database['public']['Tables']['contact_submissions']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['contact_submissions']['Insert']>
      }
      activity_logs: {
        Row: {
          id: string
          admin_id: string
          admin_email: string
          admin_name: string
          action: string
          resource_type: string
          resource_id: string | null
          section: string
          subsection: string | null
          old_value: Json | null
          new_value: Json | null
          changes_json: Json | null
          ip_address: string | null
          user_agent: string | null
          timestamp: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['activity_logs']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['activity_logs']['Insert']>
      }
    }
  }
}

