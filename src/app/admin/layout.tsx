import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'
import AdminSidebar from './components/Sidebar'
import AdminHeader from './components/Header'

export default async function AdminLayout({
  children,
}: {
  children: React.Node
}) {
  const user = await getUser()

  // Redirect to login if not authenticated
  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <AdminHeader user={user} />

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}

