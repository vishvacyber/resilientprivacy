# Supabase Self-Hosted Setup with Docker

**Complete guide for setting up Supabase on `git.resilientprivacy.com`**

## 📋 Prerequisites

Before starting, ensure you have:
- Ubuntu 20.04+ server with root access
- Domain: `git.resilientprivacy.com` (or subdomain for Supabase)
- Docker & Docker Compose installed
- At least 4GB RAM, 2 CPU cores, 20GB storage

---

## 🐳 Step 1: Install Docker

```bash
# SSH into your server
ssh root@git.resilientprivacy.com

# Update system
apt-get update && apt-get upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt-get install docker-compose-plugin -y

# Verify installation
docker --version
docker compose version
```

---

## 📁 Step 2: Create Supabase Directory

```bash
# Create directory
mkdir -p /opt/resilientprivacy/supabase
cd /opt/resilientprivacy/supabase

# Upload docker-compose file
# Option A: Use SCP from your local machine
scp /Users/vishvapatel/Desktop/myproject-main/docker-compose.supabase.yml root@git.resilientprivacy.com:/opt/resilientprivacy/supabase/docker-compose.yml

# Option B: Create manually
nano docker-compose.yml
# Paste contents from docker-compose.supabase.yml
```

---

## 🔐 Step 3: Generate Secrets

```bash
# Generate secure passwords and keys
# PostgreSQL Password
openssl rand -base64 32

# JWT Secret
openssl rand -base64 32

# For Anon Key and Service Role Key, you'll need to generate JWT tokens
# We'll use a simple script

cat > generate-keys.sh << 'EOF'
#!/bin/bash

JWT_SECRET="$1"

if [ -z "$JWT_SECRET" ]; then
  echo "Usage: ./generate-keys.sh YOUR_JWT_SECRET"
  exit 1
fi

# Install jwt if not present
if ! command -v jwt &> /dev/null; then
  echo "Installing jwt-cli..."
  cargo install jwt-cli 2>/dev/null || {
    echo "Please install jwt-cli manually or use online JWT generator"
    exit 1
  }
fi

# Generate Anon Key
ANON_KEY=$(jwt encode --secret "$JWT_SECRET" '{"role":"anon","iss":"supabase"}' --exp=+10y)
echo "ANON_KEY=$ANON_KEY"

# Generate Service Role Key  
SERVICE_KEY=$(jwt encode --secret "$JWT_SECRET" '{"role":"service_role","iss":"supabase"}' --exp=+10y)
echo "SERVICE_ROLE_KEY=$SERVICE_KEY"
EOF

chmod +x generate-keys.sh

# Generate JWT Secret first
JWT_SECRET=$(openssl rand -base64 32)
echo "JWT_SECRET=$JWT_SECRET"

# Then generate keys
./generate-keys.sh "$JWT_SECRET"
```

**Alternative: Use Online JWT Generator**
1. Visit https://jwt.io/
2. Use algorithm HS256
3. For Anon Key payload:
```json
{
  "role": "anon",
  "iss": "supabase",
  "iat": 1684357823,
  "exp": 1999933823
}
```
4. For Service Role Key payload:
```json
{
  "role": "service_role",
  "iss": "supabase",
  "iat": 1684357823,
  "exp": 1999933823
}
```
5. Use your JWT_SECRET as the secret

---

## ⚙️ Step 4: Create Environment File

```bash
cd /opt/resilientprivacy/supabase

# Create .env file
nano .env
```

**Paste the following (replace with your generated values):**

```bash
############
# Secrets - CHANGE THESE!
############

POSTGRES_PASSWORD=YOUR_GENERATED_POSTGRES_PASSWORD
JWT_SECRET=YOUR_GENERATED_JWT_SECRET
ANON_KEY=YOUR_GENERATED_ANON_KEY
SERVICE_ROLE_KEY=YOUR_GENERATED_SERVICE_ROLE_KEY

############
# Database
############

POSTGRES_HOST=db
POSTGRES_DB=postgres
POSTGRES_PORT=5432

############
# API URLs
############

API_EXTERNAL_URL=https://supabase.resilientprivacy.com
SUPABASE_PUBLIC_URL=https://supabase.resilientprivacy.com

############
# Auth
############

SITE_URL=https://resilientprivacy.com
ADDITIONAL_REDIRECT_URLS=https://resilientprivacy.com/admin,http://localhost:3000/admin
DISABLE_SIGNUP=true
ENABLE_EMAIL_SIGNUP=true
ENABLE_EMAIL_AUTOCONFIRM=false

############
# Email (SMTP)
############

SMTP_ADMIN_EMAIL=admin@resilientprivacy.com
SMTP_HOST=smtp.resilientprivacy.com
SMTP_PORT=587
SMTP_USER=noreply@resilientprivacy.com
SMTP_PASS=YOUR_SMTP_PASSWORD
SMTP_SENDER_NAME=Resilient Privacy

############
# Dashboard Access
############

DASHBOARD_USERNAME=admin
DASHBOARD_PASSWORD=YOUR_SECURE_DASHBOARD_PASSWORD
```

**Save the file:** Press `Ctrl+X`, then `Y`, then `Enter`

---

## 🏗️ Step 5: Create Kong Configuration

Kong is the API gateway that routes requests to different Supabase services.

```bash
mkdir -p volumes/api
nano volumes/api/kong.yml
```

**Paste the following:**

```yaml
_format_version: "2.1"

consumers:
  - username: DASHBOARD
  - username: anon
    keyauth_credentials:
      - key: ${ANON_KEY}
  - username: service_role
    keyauth_credentials:
      - key: ${SERVICE_ROLE_KEY}

acls:
  - consumer: anon
    group: anon
  - consumer: service_role
    group: admin

services:
  - name: auth-v1-open
    url: http://auth:9999/verify
    routes:
      - name: auth-v1-open
        strip_path: true
        paths:
          - /auth/v1/verify
    plugins:
      - name: cors

  - name: auth-v1-open-callback
    url: http://auth:9999/callback
    routes:
      - name: auth-v1-open-callback
        strip_path: true
        paths:
          - /auth/v1/callback
    plugins:
      - name: cors

  - name: auth-v1-open-authorize
    url: http://auth:9999/authorize
    routes:
      - name: auth-v1-open-authorize
        strip_path: true
        paths:
          - /auth/v1/authorize
    plugins:
      - name: cors

  - name: auth-v1
    _comment: "GoTrue: /auth/v1/* -> http://auth:9999/*"
    url: http://auth:9999
    routes:
      - name: auth-v1-all
        strip_path: true
        paths:
          - /auth/v1/
    plugins:
      - name: cors
      - name: key-auth
        config:
          hide_credentials: false

  - name: rest-v1
    _comment: "PostgREST: /rest/v1/* -> http://rest:3000/*"
    url: http://rest:3000/
    routes:
      - name: rest-v1-all
        strip_path: true
        paths:
          - /rest/v1/
    plugins:
      - name: cors
      - name: key-auth
        config:
          hide_credentials: true

  - name: realtime-v1
    _comment: "Realtime: /realtime/v1/* -> ws://realtime:4000/socket/*"
    url: http://realtime:4000/socket
    routes:
      - name: realtime-v1-all
        strip_path: true
        paths:
          - /realtime/v1/
    plugins:
      - name: cors
      - name: key-auth
        config:
          hide_credentials: false

  - name: storage-v1
    _comment: "Storage: /storage/v1/* -> http://storage:5000/*"
    url: http://storage:5000
    routes:
      - name: storage-v1-all
        strip_path: true
        paths:
          - /storage/v1/
    plugins:
      - name: cors

  - name: meta
    _comment: "pg-meta: /pg/* -> http://meta:8080/*"
    url: http://meta:8080/
    routes:
      - name: meta-all
        strip_path: true
        paths:
          - /pg/
```

**Save the file:** Press `Ctrl+X`, then `Y`, then `Enter`

---

## 🚀 Step 6: Start Supabase

```bash
cd /opt/resilientprivacy/supabase

# Create volumes directory
mkdir -p volumes/db/data volumes/storage

# Start all services
docker compose up -d

# Wait for services to start (30-60 seconds)
sleep 60

# Check if all services are running
docker compose ps

# Check logs
docker compose logs -f
# Press Ctrl+C to exit logs
```

**Expected output:** All services should show "Up" status

---

## 🌐 Step 7: Configure Nginx Reverse Proxy

```bash
# Install Nginx if not already installed
apt-get install nginx -y

# Create Nginx configuration
nano /etc/nginx/sites-available/supabase.resilientprivacy.com
```

**Paste the following:**

```nginx
server {
    listen 80;
    server_name supabase.resilientprivacy.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name supabase.resilientprivacy.com;

    # SSL certificates (we'll set up Let's Encrypt next)
    ssl_certificate /etc/letsencrypt/live/supabase.resilientprivacy.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/supabase.resilientprivacy.com/privkey.pem;

    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

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

    # Buffer settings
    client_max_body_size 100M;
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
}
```

**Save the file**

---

## 🔒 Step 8: Set Up SSL with Let's Encrypt

```bash
# Install Certbot
apt-get install certbot python3-certbot-nginx -y

# Temporarily modify Nginx config for cert generation
nano /etc/nginx/sites-available/supabase.resilientprivacy.com

# Comment out SSL lines (add # at the start):
# ssl_certificate /etc/letsencrypt/live/...
# ssl_certificate_key /etc/letsencrypt/live/...

# Save and enable the site
ln -s /etc/nginx/sites-available/supabase.resilientprivacy.com /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# Obtain SSL certificate
certbot --nginx -d supabase.resilientprivacy.com --non-interactive --agree-tos -m admin@resilientprivacy.com

# Uncomment SSL lines in Nginx config
nano /etc/nginx/sites-available/supabase.resilientprivacy.com
# Remove # from SSL lines

# Reload Nginx
nginx -t
systemctl reload nginx

# Test automatic renewal
certbot renew --dry-run
```

---

## ✅ Step 9: Verify Setup

```bash
# Test Supabase API
curl https://supabase.resilientprivacy.com/

# Should return: {"msg":"Kong is ready"}

# Check Supabase Studio
# Open in browser: https://supabase.resilientprivacy.com
# Login with DASHBOARD_USERNAME and DASHBOARD_PASSWORD from .env
```

---

## 🗄️ Step 10: Run Database Migrations

1. **Access Supabase Studio**
   - Open: https://supabase.resilientprivacy.com
   - Login with your DASHBOARD_USERNAME and DASHBOARD_PASSWORD

2. **Navigate to SQL Editor**
   - Click "SQL Editor" in the left sidebar
   - Click "New query"

3. **Run First Migration**
   - Copy contents of `supabase/migrations/001_initial_schema.sql`
   - Paste into SQL Editor
   - Click "Run"
   - Wait for completion

4. **Run Second Migration**
   - Copy contents of `supabase/migrations/002_row_level_security.sql`
   - Paste into SQL Editor
   - Click "Run"
   - Wait for completion

5. **Verify Tables**
   - Go to "Table Editor"
   - You should see all tables: jobs, job_applications, blog_posts, etc.

---

## 👤 Step 11: Create First Admin User

### Method 1: Using Supabase Studio (Easiest)

1. In Supabase Studio, click **Authentication** → **Users**
2. Click **Add User**
3. Fill in:
   - Email: `admin@resilientprivacy.com`
   - Password: Create a strong password
   - Auto Confirm User: ✓ (checked)
4. Click **Create User**

### Method 2: Using SQL

```sql
-- In SQL Editor, run:
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at,
    confirmation_token,
    recovery_token
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'admin@resilientprivacy.com',
    crypt('YOUR_SECURE_PASSWORD', gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    '',
    ''
);
```

---

## 🔧 Step 12: Configure Your Application

On your development machine:

```bash
cd /Users/vishvapatel/Desktop/myproject-main

# Create .env.local
nano .env.local
```

**Add the following:**

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://supabase.resilientprivacy.com
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY_FROM_ENV_FILE
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY_FROM_ENV_FILE

# Admin Configuration
ADMIN_EMAIL=admin@resilientprivacy.com

# Email Configuration
SMTP_HOST=smtp.resilientprivacy.com
SMTP_PORT=587
SMTP_USER=noreply@resilientprivacy.com
SMTP_PASSWORD=YOUR_SMTP_PASSWORD
SMTP_FROM=careers@resilientprivacy.com

# Application Settings
NEXT_PUBLIC_APP_URL=https://resilientprivacy.com
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
```

---

## 🧪 Step 13: Test the Setup

```bash
# Start development server
cd /Users/vishvapatel/Desktop/myproject-main
npm run dev

# Open admin login
open http://localhost:3000/admin/login

# Login with admin credentials
# Should redirect to dashboard
```

---

## 🔄 Maintenance Commands

### View Logs
```bash
cd /opt/resilientprivacy/supabase
docker compose logs -f [service_name]
# Example: docker compose logs -f db
```

### Restart Services
```bash
docker compose restart [service_name]
# Or restart all:
docker compose restart
```

### Stop All Services
```bash
docker compose down
```

### Backup Database
```bash
docker exec supabase-db pg_dump -U postgres postgres > backup_$(date +%Y%m%d_%H%M%S).sql
```

### Restore Database
```bash
docker exec -i supabase-db psql -U postgres postgres < backup_file.sql
```

### Update Supabase
```bash
cd /opt/resilientprivacy/supabase
docker compose pull
docker compose up -d
```

---

## 🐛 Troubleshooting

### Services won't start
```bash
# Check logs
docker compose logs

# Check disk space
df -h

# Check memory
free -h
```

### Cannot access Supabase Studio
```bash
# Check if Kong is running
docker compose ps kong

# Check Nginx
systemctl status nginx
nginx -t

# Check SSL certificate
certbot certificates
```

### Database connection issues
```bash
# Connect to database directly
docker exec -it supabase-db psql -U postgres

# Check if database is accepting connections
docker compose logs db
```

---

## 📊 Monitoring

### Set up monitoring (optional)
```bash
# Install netdata for server monitoring
bash <(curl -Ss https://my-netdata.io/kickstart.sh)

# Access at http://git.resilientprivacy.com:19999
```

---

## ✅ Setup Complete!

Your Supabase instance is now running at:
- **Studio**: https://supabase.resilientprivacy.com
- **API**: https://supabase.resilientprivacy.com/rest/v1/
- **Auth**: https://supabase.resilientprivacy.com/auth/v1/

**Next Steps:**
1. Test admin login on your website
2. Create a test job posting
3. Test job application submission
4. Verify activity logs are working
5. Set up automated backups
6. Configure monitoring

---

## 📝 Important Notes

1. **Keep your secrets secure** - Never commit .env to git
2. **Regular backups** - Set up automated database backups
3. **Monitor resources** - Watch CPU, RAM, and disk usage
4. **Update regularly** - Keep Docker images updated
5. **Firewall** - Configure firewall to only allow necessary ports

---

## 🆘 Need Help?

If you encounter issues:
1. Check Docker logs: `docker compose logs -f`
2. Verify all services are running: `docker compose ps`
3. Check Nginx logs: `tail -f /var/log/nginx/error.log`
4. Ensure .env file has correct values
5. Verify DNS is pointing to your server

---

**Setup completed successfully! 🎉**

