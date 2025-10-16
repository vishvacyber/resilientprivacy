# Admin Panel Quick Start Guide

**Fast track setup for the Resilient Privacy Admin Panel**

## 🚀 Quick Setup (5 Minutes)

### 1. Install Dependencies
```bash
cd /Users/vishvapatel/Desktop/myproject-main
npm install
```

###  2. Set Up Supabase

**Option A: Use Supabase Cloud (Fastest - for testing)**
1. Go to https://supabase.com
2. Create account and new project
3. Get your project URL and keys from Settings → API

**Option B: Self-hosted (See ADMIN_SETUP.md for details)**

### 3. Configure Environment
```bash
# Create .env.local file
cp .env.local.example .env.local

# Edit with your Supabase credentials
nano .env.local
```

### 4. Run Database Migrations
```bash
# Access Supabase Studio at https://your-project.supabase.co
# Go to SQL Editor → New Query
# Copy/paste contents of supabase/migrations/001_initial_schema.sql → Run
# Copy/paste contents of supabase/migrations/002_row_level_security.sql → Run
```

### 5. Create Admin User
```bash
# In Supabase Studio:
# Authentication → Users → Add User
# Email: admin@resilientprivacy.com
# Auto-confirm: ✓
```

### 6. Start Development
```bash
npm run dev
```

### 7. Access Admin Panel
```
http://localhost:3000/admin/login
```

## 📁 Project Structure

```
myproject-main/
├── src/
│   ├── app/
│   │   └── admin/
│   │       ├── login/page.tsx          # Login page
│   │       ├── page.tsx                # Dashboard
│   │       ├── layout.tsx              # Admin layout
│   │       ├── components/             # Shared components
│   │       ├── jobs/                   # Job management
│   │       ├── applications/           # ATS system
│   │       ├── blog/                   # Blog CMS
│   │       ├── team/                   # Team management
│   │       ├── contacts/               # Contact submissions
│   │       ├── activity/               # Activity logs
│   │       └── settings/               # Settings
│   ├── lib/
│   │   ├── supabase/                   # Supabase clients
│   │   ├── auth.ts                     # Auth utilities
│   │   └── activity-logger.ts          # Activity logging
│   └── types/
│       └── database.ts                 # TypeScript types
├── supabase/
│   └── migrations/                     # SQL migrations
├── .env.local                          # Environment variables
├── ADMIN_SETUP.md                      # Detailed setup guide
└── ADMIN_QUICKSTART.md                 # This file
```

## 🎯 Admin Panel Features

### ✅ Implemented (Foundation)
- ✅ Authentication system
- ✅ Admin dashboard with stats
- ✅ Database schema (all tables)
- ✅ Row Level Security (RLS)
- ✅ Activity logging system
- ✅ Sidebar navigation
- ✅ User management

### 🚧 To Be Implemented (Follow patterns)
Each module follows the same pattern. Use the dashboard as reference:

**Jobs Module** (`/admin/jobs`)
- List jobs (with filters)
- Create new job
- Edit job
- Delete job
- Publish/unpublish

**Applications Module** (`/admin/applications`)
- Kanban pipeline (drag-and-drop)
- Application details
- Candidate profile
- Resume viewer
- Status updates
- Notes and comments

**Blog Module** (`/admin/blog`)
- List posts
- Create/edit post
- Rich text editor
- Categories and tags
- Featured image upload
- Publish/draft

**Team Module** (`/admin/team`)
- List team members
- Add/edit member
- Photo upload
- Drag-and-drop ordering
- Hide/show members

**Other Modules**
- Contacts: View submissions
- Activity: View logs
- Settings: Admin users

## 🔧 Development Workflow

### Creating a New Admin Page

1. **Create the page file**
```tsx
// src/app/admin/your-module/page.tsx
import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'

export default async function YourModulePage() {
  await requireAuth()
  const supabase = await createClient()
  
  // Fetch data
  const { data } = await supabase.from('your_table').select('*')
  
  return (
    <div>
      {/* Your UI */}
    </div>
  )
}
```

2. **Add to navigation**
```tsx
// src/app/admin/components/Sidebar.tsx
const navigation = [
  // ... existing items
  { name: 'Your Module', href: '/admin/your-module', icon: YourIcon },
]
```

3. **Add activity logging**
```tsx
import { logActivity } from '@/lib/activity-logger'

await logActivity({
  adminId: user.id,
  adminEmail: user.email!,
  adminName: user.email!,
  action: 'create',
  resourceType: 'your_resource',
  resourceId: newItem.id,
  section: 'Your Module',
  newValue: newItem,
})
```

## 🗄️ Database Queries (Examples)

### Fetch Data
```tsx
const { data, error } = await supabase
  .from('jobs')
  .select('*')
  .order('created_at', { ascending: false })
```

### Insert Data
```tsx
const { data, error } = await supabase
  .from('jobs')
  .insert({
    title: 'Software Engineer',
    department: 'Engineering',
    // ... other fields
  })
  .select()
  .single()
```

### Update Data
```tsx
const { error } = await supabase
  .from('jobs')
  .update({ status: 'published' })
  .eq('id', jobId)
```

### Delete Data
```tsx
const { error } = await supabase
  .from('jobs')
  .delete()
  .eq('id', jobId)
```

## 🎨 UI Components

Reuse existing components from `src/components/ui/`:
- `button.tsx` - Buttons
- `card.tsx` - Cards
- `input.tsx` - Form inputs
- `textarea.tsx` - Text areas

Example usage:
```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

<Card className="p-6">
  <Button variant="primary">Save</Button>
</Card>
```

## 📝 Form Handling

Use React Hook Form + Zod for validation:

```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
})

export default function YourForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} />
      {errors.title && <span>{errors.title.message}</span>}
      <button type="submit">Submit</button>
    </form>
  )
}
```

## 🔐 Security Best Practices

1. **Always require auth**
```tsx
await requireAuth() // At the top of every admin page
```

2. **Use service role key carefully**
```tsx
// Only for admin operations, never expose to client
import { createAdminClient } from '@/lib/supabase/server'
```

3. **Validate inputs**
```tsx
// Use Zod schemas for all form inputs
```

4. **Log all actions**
```tsx
// Use logActivity() for every create/update/delete
```

## 📊 Testing

### Test Login
```bash
# Open admin login
open http://localhost:3000/admin/login

# Use your admin credentials
```

### Test Database Connection
```tsx
// In any admin page, check browser console
console.log('Data:', data)
```

### Test Activity Logs
1. Perform any action (create, update, delete)
2. Navigate to `/admin/activity`
3. Verify log entry exists

## 🚀 Deployment

### Vercel
```bash
# Set environment variables in Vercel dashboard
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production

# Deploy
git push origin main
```

### Important: Update .gitignore
```gitignore
.env.local
.env*.local
```

## 💡 Tips

1. **Use Server Components** by default for better performance
2. **Add 'use client'** only when you need interactivity
3. **Follow existing patterns** in the codebase
4. **Test locally** before pushing to production
5. **Check activity logs** to debug issues
6. **Use TypeScript** for type safety

## 🆘 Common Issues

**Issue**: Cannot login
- Check Supabase URL and keys in `.env.local`
- Verify user exists in Supabase Auth
- Clear browser cookies

**Issue**: Data not loading
- Check Supabase RLS policies
- Verify table exists
- Check browser console for errors

**Issue**: Activity logs not working
- Verify activity_logs table exists
- Check RLS policies
- Ensure admin user is authenticated

## 📚 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Next.js 15 Docs](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## ✅ Next Steps

1. Complete setup following this guide
2. Test admin login and dashboard
3. Implement job posting management
4. Build application tracking system (ATS)
5. Create blog management interface
6. Add team member management
7. Test end-to-end workflows
8. Deploy to production

---

**Need help?** Check ADMIN_SETUP.md for detailed instructions.

