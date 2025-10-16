/**
 * Data Migration Script
 * Migrates existing static data to Supabase database
 * 
 * Usage:
 * 1. Ensure Supabase is running and configured
 * 2. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local
 * 3. Run: npx tsx scripts/migrate-data-to-supabase.ts
 */

import { createClient } from '@supabase/supabase-js'
import { leadership } from '../src/lib/leadership-data'
import { blogPosts } from '../src/app/resources/blog/data'

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function migrateLeadership() {
  console.log('📊 Migrating leadership data...')

  try {
    const teamData = leadership.map((member, index) => ({
      name: member.name,
      title: member.title,
      photo_url: member.photo,
      bio: member.bio,
      expertise: member.expertise,
      linkedin: member.linkedin,
      quote: member.quote,
      role_type: 'leadership',
      display_order: index,
      hidden: member.hidden || false,
    }))

    const { data, error } = await supabase
      .from('team_members')
      .insert(teamData)
      .select()

    if (error) {
      console.error('❌ Error migrating leadership:', error)
      return false
    }

    console.log(`✅ Migrated ${data.length} leadership members`)
    return true
  } catch (error) {
    console.error('❌ Migration error:', error)
    return false
  }
}

async function migrateBlogPosts() {
  console.log('📝 Migrating blog posts...')

  try {
    const blogData = blogPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      author_name: post.author,
      date: post.date,
      read_time: post.readTime,
      featured: post.featured,
      published: true, // Existing posts are published
      tags: post.tags,
    }))

    const { data, error } = await supabase
      .from('blog_posts')
      .insert(blogData)
      .select()

    if (error) {
      console.error('❌ Error migrating blog posts:', error)
      return false
    }

    console.log(`✅ Migrated ${data.length} blog posts`)
    return true
  } catch (error) {
    console.error('❌ Migration error:', error)
    return false
  }
}

async function checkExistingData() {
  console.log('🔍 Checking for existing data...')

  const { count: teamCount } = await supabase
    .from('team_members')
    .select('*', { count: 'exact', head: true })

  const { count: blogCount } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact', head: true })

  return {
    team: teamCount || 0,
    blog: blogCount || 0,
  }
}

async function main() {
  console.log('🚀 Starting data migration to Supabase...\n')

  // Check existing data
  const existing = await checkExistingData()
  console.log(`Found ${existing.team} existing team members`)
  console.log(`Found ${existing.blog} existing blog posts\n`)

  if (existing.team > 0 || existing.blog > 0) {
    console.log('⚠️  Warning: Data already exists in database')
    console.log('This script will add duplicate data if run again.')
    console.log('To re-run, first delete existing data from Supabase Studio.\n')
    
    // Uncomment to force migration even if data exists
    // const readline = require('readline').createInterface({
    //   input: process.stdin,
    //   output: process.stdout,
    // })
    // const answer = await new Promise((resolve) => {
    //   readline.question('Continue anyway? (yes/no): ', resolve)
    // })
    // readline.close()
    // if (answer !== 'yes') {
    //   console.log('Migration cancelled')
    //   process.exit(0)
    // }
  }

  // Run migrations
  const results = {
    leadership: await migrateLeadership(),
    blog: await migrateBlogPosts(),
  }

  // Summary
  console.log('\n' + '='.repeat(50))
  console.log('📊 Migration Summary')
  console.log('='.repeat(50))
  console.log(`Leadership Data: ${results.leadership ? '✅ Success' : '❌ Failed'}`)
  console.log(`Blog Posts: ${results.blog ? '✅ Success' : '❌ Failed'}`)
  console.log('='.repeat(50))

  const allSuccess = Object.values(results).every((r) => r === true)
  
  if (allSuccess) {
    console.log('\n✨ Migration completed successfully!')
    console.log('\n💡 Next steps:')
    console.log('1. Verify data in Supabase Studio')
    console.log('2. Update public pages to fetch from Supabase')
    console.log('3. Test admin panel functionality')
  } else {
    console.log('\n❌ Some migrations failed. Check errors above.')
    process.exit(1)
  }
}

main().catch((error) => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})

