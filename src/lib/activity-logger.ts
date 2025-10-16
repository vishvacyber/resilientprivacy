import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

interface LogActivityParams {
  adminId: string
  adminEmail: string
  adminName: string
  action: 'create' | 'update' | 'delete' | 'publish' | 'unpublish' | 'archive' | 'restore' | 'login' | 'logout'
  resourceType: 'job' | 'application' | 'blog_post' | 'team_member' | 'advisor' | 'documentation' | 'training' | 'event' | 'contact' | 'newsletter' | 'settings'
  resourceId?: string
  section: string
  subsection?: string
  oldValue?: any
  newValue?: any
  changesJson?: any
}

export async function logActivity(params: LogActivityParams) {
  try {
    const supabase = await createClient()
    const headersList = await headers()
    
    const ipAddress = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || null
    const userAgent = headersList.get('user-agent') || null

    const { error } = await supabase.from('activity_logs').insert({
      admin_id: params.adminId,
      admin_email: params.adminEmail,
      admin_name: params.adminName,
      action: params.action,
      resource_type: params.resourceType,
      resource_id: params.resourceId || null,
      section: params.section,
      subsection: params.subsection || null,
      old_value: params.oldValue || null,
      new_value: params.newValue || null,
      changes_json: params.changesJson || null,
      ip_address: ipAddress,
      user_agent: userAgent,
      timestamp: new Date().toISOString(),
    })

    if (error) {
      console.error('Error logging activity:', error)
    }
  } catch (error) {
    console.error('Error in logActivity:', error)
  }
}

export function getChanges(oldData: any, newData: any): any {
  const changes: any = {}
  
  for (const key in newData) {
    if (JSON.stringify(oldData[key]) !== JSON.stringify(newData[key])) {
      changes[key] = {
        from: oldData[key],
        to: newData[key],
      }
    }
  }
  
  return Object.keys(changes).length > 0 ? changes : null
}

