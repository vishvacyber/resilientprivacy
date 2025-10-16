# Resilient Privacy Admin Panel

**Complete Content Management System (CMS) with Application Tracking System (ATS)**

## 🎯 Overview

This admin panel provides a comprehensive solution for managing all aspects of the Resilient Privacy website, including:

- **Job Postings** with detailed application tracking
- **Blog Management** with rich content editing
- **Team & Leadership** member management
- **Documentation & Training** content management
- **Contact Submissions** tracking
- **Activity Logging** for all admin actions
- **Visa Sponsorship** tracking for job applications

## ✨ Features

### Authentication & Security
- ✅ Email/password authentication via Supabase Auth
- ✅ Protected admin routes
- ✅ Row Level Security (RLS) on all database tables
- ✅ Activity logging for audit trails
- ✅ IP address and user agent tracking

### Job Management
- ✅ Create, edit, delete job postings
- ✅ Draft/Published/Closed status workflow
- ✅ Visa sponsorship availability flag
- ✅ Rich text editor for descriptions
- ✅ Department, location, salary range fields

### Application Tracking System (ATS)
- ✅ Complete application pipeline
- ✅ Visa sponsorship tracking
  - Sponsorship required (Yes/No)
  - Current visa type (H1B, L1, F1-OPT, Green Card, etc.)
  - Visa expiry date
- ✅ Location & relocation willingness
- ✅ Experience & background details
- ✅ Resume/CV file upload
- ✅ Application stages (pending → hired/rejected)
- ✅ Internal notes and comments
- ✅ Status tracking

### Content Management
- ✅ Blog posts with categories and tags
- ✅ Team member profiles
- ✅ Documentation and training courses
- ✅ Events management
- ✅ Contact form submissions
- ✅ Newsletter subscribers

### Activity Logging
- ✅ Comprehensive activity tracking
- ✅ Tracks: who, what, when, where
- ✅ Old value vs new value comparison
- ✅ Searchable and filterable logs
- ✅ Section and subsection tracking

## 📁 File Structure

```
myproject-main/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── login/page.tsx              # Admin login
│   │   │   ├── page.tsx                    # Dashboard
│   │   │   ├── layout.tsx                  # Protected layout
│   │   │   └── components/
│   │   │       ├── Sidebar.tsx             # Navigation
│   │   │       └── Header.tsx              # Top bar
│   │   └── api/                            # API routes (to be added)
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts                   # Browser client
│   │   │   ├── server.ts                   # Server client
│   │   │   └── middleware.ts               # Auth middleware
│   │   ├── auth.ts                         # Auth utilities
│   │   └── activity-logger.ts              # Activity logging
│   ├── types/
│   │   └── database.ts                     # TypeScript types
│   └── middleware.ts                       # Next.js middleware
├── supabase/
│   └── migrations/
│       ├── 001_initial_schema.sql          # Database schema
│       └── 002_row_level_security.sql      # RLS policies
├── scripts/
│   └── migrate-data-to-supabase.ts         # Data migration
├── docker-compose.supabase.yml             # Docker setup
├── ADMIN_SETUP.md                          # Detailed setup guide
├── ADMIN_QUICKSTART.md                     # Quick start guide
└── ADMIN_README.md                         # This file
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase
Choose one option:

**Option A: Supabase Cloud (Fastest)**
- Visit https://supabase.com
- Create project
- Get credentials from Settings → API

**Option B: Self-Hosted (Recommended for production)**
- See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for detailed instructions
- Use provided `docker-compose.supabase.yml`

### 3. Configure Environment
```bash
cp .env.local.example .env.local
# Edit with your Supabase credentials
```

### 4. Run Migrations
```bash
# Run SQL migrations in Supabase Studio
# See ADMIN_QUICKSTART.md for instructions
```

### 5. Create Admin User
```bash
# In Supabase Studio:
# Authentication → Users → Add User
```

### 6. Start Development
```bash
npm run dev
```

### 7. Access Admin Panel
```
http://localhost:3000/admin/login
```

## 📖 Documentation

- **[ADMIN_SETUP.md](./ADMIN_SETUP.md)** - Detailed setup instructions for self-hosted Supabase
- **[ADMIN_QUICKSTART.md](./ADMIN_QUICKSTART.md)** - Quick start guide for development
- **[Database Schema](#database-schema)** - Complete database structure

## 🗄️ Database Schema

### Jobs Table
```sql
- id (UUID)
- title, department, location
- type (full-time, part-time, contract, internship)
- salary_range
- description, requirements, responsibilities
- benefits
- status (draft, published, closed)
- visa_sponsorship_available (boolean)
- created_at, updated_at, published_at
```

### Job Applications Table
```sql
- id (UUID)
- job_id (foreign key)
- candidate_name, email, phone
- resume_url, cover_letter
- linkedin, portfolio, website
- current_location, willing_to_relocate
- visa_sponsorship_required (boolean)
- current_visa_type (enum: H1B, L1, F1_OPT, etc.)
- visa_expiry_date
- years_of_experience
- current_company, current_role
- expected_salary, notice_period
- how_did_you_hear
- status (new, reviewing, rejected, accepted)
- stage (pending, screening, interview, offer, hired, rejected)
- notes
- applied_at, updated_at
```

### Activity Logs Table
```sql
- id (UUID)
- admin_id, admin_email, admin_name
- action (create, update, delete, publish, etc.)
- resource_type (job, application, blog_post, etc.)
- resource_id
- section, subsection
- old_value, new_value (JSON)
- changes_json (JSON)
- ip_address, user_agent
- timestamp, created_at
```

### Other Tables
- `blog_posts` - Blog content management
- `team_members` - Team and leadership profiles
- `contact_submissions` - Contact form entries
- `newsletter_subscribers` - Email subscribers

Full schema: `supabase/migrations/001_initial_schema.sql`

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **UI**: TailwindCSS + Radix UI
- **Forms**: React Hook Form + Zod
- **File Uploads**: Supabase Storage
- **Rich Text**: TipTap Editor
- **Drag & Drop**: dnd-kit

## 🔐 Security Features

- ✅ Row Level Security (RLS) on all tables
- ✅ Protected admin routes with middleware
- ✅ Activity logging for all actions
- ✅ IP address and user agent tracking
- ✅ Environment variable security
- ✅ Secure file uploads
- ✅ Input validation with Zod
- ✅ CORS configuration

## 📊 Admin Dashboard Features

### Dashboard
- Overview statistics
- Recent applications
- Quick actions
- Activity feed

### Jobs Module
- List all jobs
- Create new job posting
- Edit existing jobs
- Publish/unpublish
- View applications per job

### Applications Module (ATS)
- Kanban board view
- Application pipeline
- Candidate profiles
- Resume viewer
- Status updates
- Visa information tracking
- Internal notes

### Blog Module
- List all posts
- Create/edit posts
- Rich text editor
- Categories and tags
- Featured posts
- Draft/publish workflow

### Team Module
- List team members
- Add/edit profiles
- Photo management
- Expertise tags
- Hide/show members
- Drag-and-drop ordering

### Activity Logs
- View all admin actions
- Filter by user, action, section
- See what changed (old → new)
- Export for auditing
- IP and user agent tracking

## 🔄 Data Migration

Migrate existing static data to Supabase:

```bash
# Install tsx if not already installed
npm install -D tsx

# Run migration script
npx tsx scripts/migrate-data-to-supabase.ts
```

This will migrate:
- ✅ Leadership team members
- ✅ Blog posts
- ✅ (Add more as needed)

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Set environment variables in Vercel dashboard
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production

# Deploy
git push origin main
```

### Self-Hosted Supabase

Follow [ADMIN_SETUP.md](./ADMIN_SETUP.md) for complete instructions on:
- Docker setup
- Nginx configuration
- SSL certificates
- Database setup
- Backups

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build
npm run build

# Test login
open http://localhost:3000/admin/login
```

## 🐛 Troubleshooting

### Cannot Login
- Check Supabase URL and keys in `.env.local`
- Verify user exists in Supabase Auth
- Clear browser cookies
- Check browser console for errors

### Data Not Loading
- Verify Supabase is running
- Check RLS policies
- Ensure tables exist
- Check network tab for API errors

### Activity Logs Not Working
- Verify `activity_logs` table exists
- Check RLS policies
- Ensure user is authenticated
- Check server logs

See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for more troubleshooting tips.

## 📝 Development Workflow

1. **Create feature branch**
```bash
git checkout -b feature/your-feature
```

2. **Make changes**
- Follow existing patterns
- Use TypeScript
- Add activity logging
- Test locally

3. **Commit changes**
```bash
git add .
git commit -m "feat: your feature description"
```

4. **Push and create PR**
```bash
git push origin feature/your-feature
```

## 🤝 Contributing

When adding new features:

1. Follow existing file structure
2. Add TypeScript types
3. Implement activity logging
4. Update RLS policies if needed
5. Test thoroughly
6. Update documentation

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## ✅ Checklist

Before going to production:

- [ ] Change all default passwords
- [ ] Set up SSL certificates
- [ ] Configure SMTP for emails
- [ ] Enable database backups
- [ ] Test all workflows end-to-end
- [ ] Review RLS policies
- [ ] Set up monitoring
- [ ] Configure rate limiting
- [ ] Review activity logs
- [ ] Test on mobile devices

## 🆘 Support

For issues or questions:
- **Email**: admin@resilientprivacy.com
- **Documentation**: See `ADMIN_SETUP.md` and `ADMIN_QUICKSTART.md`
- **Supabase Community**: https://github.com/supabase/supabase/discussions

## 📄 License

Proprietary - Resilient Privacy © 2025

---

**Version**: 1.0.0  
**Last Updated**: January 2025  
**Status**: Foundation Complete - Ready for Feature Development

