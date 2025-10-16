# Admin Panel Setup Guide

Complete guide for setting up the Resilient Privacy Admin Panel with self-hosted Supabase.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Supabase Self-Hosted Setup](#supabase-self-hosted-setup)
3. [Database Configuration](#database-configuration)
4. [Application Configuration](#application-configuration)
5. [First Admin User Setup](#first-admin-user-setup)
6. [Testing the Setup](#testing-the-setup)
7. [Production Deployment](#production-deployment)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software
- **Docker** (version 20.10+)
- **Docker Compose** (version 2.0+)
- **Git**
- **Node.js** (18.17.0+)
- **npm** (8.0.0+)

### Server Requirements
- **Minimum**: 4GB RAM, 2 CPU cores, 20GB storage
- **Recommended**: 8GB RAM, 4 CPU cores, 50GB storage
- **Operating System**: Ubuntu 20.04/22.04 LTS or similar

---

## Supabase Self-Hosted Setup

### Step 1: Clone Supabase

```bash
# SSH into your git.resilientprivacy.com server
ssh user@git.resilientprivacy.com

# Create a directory for Supabase
mkdir -p /opt/supabase
cd /opt/supabase

# Clone Supabase repository
git clone --depth 1 https://github.com/supabase/supabase
cd supabase/docker
```

### Step 2: Generate Secrets

Generate secure secrets for your Supabase instance:

```bash
# Generate JWT secret (keep this secret!)
openssl rand -base64 32

# Generate anon key and service role key
# You'll use these in the next step
```

### Step 3: Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file
nano .env
```

**Critical environment variables to set:**

```bash
############
# Secrets
############
POSTGRES_PASSWORD=your-super-secret-postgres-password
JWT_SECRET=your-generated-jwt-secret-from-step-2
ANON_KEY=your-generated-anon-key
SERVICE_ROLE_KEY=your-generated-service-role-key

############
# Database
############
POSTGRES_HOST=db
POSTGRES_DB=postgres
POSTGRES_PORT=5432

############
# API
############
API_EXTERNAL_URL=https://supabase.resilientprivacy.com
SUPABASE_PUBLIC_URL=https://supabase.resilientprivacy.com

############
# Auth
############
SITE_URL=https://resilientprivacy.com
ADDITIONAL_REDIRECT_URLS=https://resilientprivacy.com/admin
DISABLE_SIGNUP=true  # Disable public signups
ENABLE_EMAIL_SIGNUP=true
ENABLE_EMAIL_AUTOCONFIRM=false

############
# Email (SMTP)
############
SMTP_ADMIN_EMAIL=admin@resilientprivacy.com
SMTP_HOST=smtp.resilientprivacy.com
SMTP_PORT=587
SMTP_USER=noreply@resilientprivacy.com
SMTP_PASS=your-smtp-password
SMTP_SENDER_NAME=Resilient Privacy

############
# Dashboard
############
DASHBOARD_USERNAME=admin
DASHBOARD_PASSWORD=your-secure-dashboard-password

############
# Storage
############
FILE_SIZE_LIMIT=52428800  # 50MB
STORAGE_BACKEND=file  # or 's3' for production
```

### Step 4: Start Supabase

```bash
# Start all Supabase services
docker-compose up -d

# Check if all services are running
docker-compose ps

# View logs
docker-compose logs -f
```

### Step 5: Configure Reverse Proxy (Nginx)

Create an Nginx configuration for your Supabase instance:

```bash
sudo nano /etc/nginx/sites-available/supabase.resilientprivacy.com
```

```nginx
server {
    listen 80;
    server_name supabase.resilientprivacy.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name supabase.resilientprivacy.com;

    # SSL certificates (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/supabase.resilientprivacy.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/supabase.resilientprivacy.com/privkey.pem;

    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Proxy settings
    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Increase timeouts for long-running requests
    proxy_connect_timeout 600;
    proxy_send_timeout 600;
    proxy_read_timeout 600;
    send_timeout 600;
}
```

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/supabase.resilientprivacy.com /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### Step 6: Set up SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d supabase.resilientprivacy.com

# Test automatic renewal
sudo certbot renew --dry-run
```

---

## Database Configuration

### Step 1: Access Supabase Studio

1. Open your browser and navigate to `https://supabase.resilientprivacy.com`
2. Login with the `DASHBOARD_USERNAME` and `DASHBOARD_PASSWORD` you set

### Step 2: Run Database Migrations

You have two options:

**Option A: Using Supabase Studio (GUI)**

1. Navigate to SQL Editor in Supabase Studio
2. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
3. Click "Run"
4. Repeat for `supabase/migrations/002_row_level_security.sql`

**Option B: Using psql (Command Line)**

```bash
# Connect to the database
docker exec -it supabase-db psql -U postgres -d postgres

# Or from your local machine
psql "postgresql://postgres:your-postgres-password@supabase.resilientprivacy.com:5432/postgres"

# Run migrations
\i /path/to/supabase/migrations/001_initial_schema.sql
\i /path/to/supabase/migrations/002_row_level_security.sql

# Verify tables were created
\dt

# Exit
\q
```

### Step 3: Verify Database Setup

```sql
-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';

-- Should return:
-- jobs
-- job_applications
-- blog_posts
-- team_members
-- contact_submissions
-- newsletter_subscribers
-- activity_logs
```

---

## Application Configuration

### Step 1: Set Up Environment Variables

On your development machine or deployment server:

```bash
cd /path/to/myproject-main

# Copy the example environment file
cp .env.local.example .env.local

# Edit the file
nano .env.local
```

**Configure with your Supabase instance:**

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://supabase.resilientprivacy.com
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-from-supabase-env
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-from-supabase-env

# Admin Configuration
ADMIN_EMAIL=admin@resilientprivacy.com
ADMIN_PASSWORD=your-secure-admin-password

# Email Configuration
SMTP_HOST=smtp.resilientprivacy.com
SMTP_PORT=587
SMTP_USER=noreply@resilientprivacy.com
SMTP_PASSWORD=your-smtp-password
SMTP_FROM=careers@resilientprivacy.com

# Application Settings
NEXT_PUBLIC_APP_URL=https://resilientprivacy.com
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Build and Test Locally

```bash
# Run development server
npm run dev

# Open browser to http://localhost:3000/admin/login
```

---

## First Admin User Setup

### Method 1: Using Supabase Studio (Recommended)

1. Navigate to `https://supabase.resilientprivacy.com`
2. Go to **Authentication** → **Users**
3. Click **Add User**
4. Fill in:
   - Email: `admin@resilientprivacy.com`
   - Password: Your secure password
   - Auto Confirm User: ✓ (checked)
5. Click **Create User**

### Method 2: Using SQL

```sql
-- Insert admin user directly (password will be hashed)
INSERT INTO auth.users (
    id,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at,
    role
) VALUES (
    gen_random_uuid(),
    'admin@resilientprivacy.com',
    crypt('your-secure-password', gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    'authenticated'
);
```

### Method 3: Using API

```bash
curl -X POST 'https://supabase.resilientprivacy.com/auth/v1/admin/users' \
  -H "apikey: YOUR_SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer YOUR_SERVICE_ROLE_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@resilientprivacy.com",
    "password": "your-secure-password",
    "email_confirm": true
  }'
```

---

## Testing the Setup

### 1. Test Admin Login

```bash
# Navigate to admin login page
open https://resilientprivacy.com/admin/login

# Or locally
open http://localhost:3000/admin/login
```

**Expected Behavior:**
- Login form appears
- Enter admin credentials
- Redirects to `/admin` dashboard
- Dashboard shows stats (likely all zeros initially)

### 2. Test Database Connection

```bash
# Check if tables are accessible
curl -X GET 'https://supabase.resilientprivacy.com/rest/v1/jobs' \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

### 3. Create Test Data

1. Login to admin panel
2. Navigate to **Jobs** → **New Job**
3. Create a test job posting
4. Verify it appears in the jobs list

### 4. Test Activity Logging

1. Make any change in admin panel
2. Navigate to **Activity Logs**
3. Verify your action was logged

---

## Production Deployment

### Vercel Deployment

```bash
# Set environment variables in Vercel
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
# ... add all other env variables

# Deploy
git add .
git commit -m "feat: add admin panel with Supabase"
git push origin main

# Vercel will auto-deploy
```

### Environment Variables Checklist

✅ `NEXT_PUBLIC_SUPABASE_URL`
✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
✅ `SUPABASE_SERVICE_ROLE_KEY`
✅ `SMTP_HOST`
✅ `SMTP_PORT`
✅ `SMTP_USER`
✅ `SMTP_PASSWORD`
✅ `SMTP_FROM`
✅ `NEXT_PUBLIC_APP_URL`

---

## Troubleshooting

### Issue: Cannot connect to Supabase

**Solution:**
```bash
# Check if Supabase services are running
docker-compose ps

# Check logs
docker-compose logs -f

# Restart services
docker-compose restart
```

### Issue: Database migration failed

**Solution:**
```bash
# Connect to database
docker exec -it supabase-db psql -U postgres

# Drop all tables and start over
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

# Re-run migrations
\i /path/to/001_initial_schema.sql
```

### Issue: Cannot login to admin panel

**Solution:**
1. Verify user exists in Supabase Studio → Authentication → Users
2. Check JWT secret matches between Supabase and application
3. Clear browser cookies and try again
4. Check browser console for errors

### Issue: Activity logs not recording

**Solution:**
```sql
-- Check if activity_logs table exists
SELECT * FROM activity_logs LIMIT 1;

-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename = 'activity_logs';
```

### Issue: File uploads not working

**Solution:**
1. Check Supabase Storage is configured
2. Verify `FILE_SIZE_LIMIT` in Supabase .env
3. Check browser console for upload errors
4. Verify storage bucket permissions in Supabase Studio

---

## Security Checklist

Before going to production:

- [ ] Change all default passwords
- [ ] Enable HTTPS with valid SSL certificates
- [ ] Set `DISABLE_SIGNUP=true` in Supabase
- [ ] Configure firewall rules
- [ ] Set up database backups
- [ ] Enable rate limiting
- [ ] Review RLS policies
- [ ] Set up monitoring and alerts
- [ ] Configure CORS properly
- [ ] Enable 2FA for admin users (future enhancement)

---

## Maintenance

### Database Backups

```bash
# Create backup
docker exec supabase-db pg_dump -U postgres postgres > backup_$(date +%Y%m%d).sql

# Restore backup
docker exec -i supabase-db psql -U postgres postgres < backup_20250116.sql
```

### Update Supabase

```bash
cd /opt/supabase/supabase/docker
git pull
docker-compose pull
docker-compose up -d
```

### Monitor Disk Usage

```bash
# Check Docker disk usage
docker system df

# Clean up old images
docker system prune -a
```

---

## Support

For issues or questions:
- **Email**: admin@resilientprivacy.com
- **Documentation**: https://supabase.com/docs
- **Community**: https://github.com/supabase/supabase/discussions

---

## Next Steps

After successful setup:

1. **Migrate existing data** from static files to Supabase
2. **Update public pages** to fetch from Supabase
3. **Test job application** flow end-to-end
4. **Configure email** notifications
5. **Set up monitoring** and alerts
6. **Train admin users** on the panel

---

**Last Updated**: January 2025
**Version**: 1.0.0

