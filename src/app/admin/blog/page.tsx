import { requireAuth } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { Plus, Search, Filter, Edit, Trash2, Eye, EyeOff, Calendar, Tag, User } from 'lucide-react'
import Link from 'next/link'

async function getBlogPosts() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data || []
}

export default async function BlogPage() {
  await requireAuth()
  const blogPosts = await getBlogPosts()

  const getStatusColor = (published: boolean) => {
    return published 
      ? 'bg-green-500/10 text-green-500 border-green-500/20'
      : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Security': 'bg-purple-500/10 text-purple-500',
      'API Security': 'bg-blue-500/10 text-blue-500',
      'Threat Detection': 'bg-red-500/10 text-red-500',
      'Best Practices': 'bg-green-500/10 text-green-500',
      'Industry News': 'bg-orange-500/10 text-orange-500',
      'Research': 'bg-indigo-500/10 text-indigo-500'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-500'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Blog Management</h1>
          <p className="text-text-secondary mt-2">
            Create and manage blog posts for your website
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          <Plus className="w-5 h-5" />
          New Blog Post
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {blogPosts.filter(post => post.published).length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Published</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <EyeOff className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {blogPosts.filter(post => !post.published).length}
            </span>
          </div>
          <p className="text-text-muted text-sm">Drafts</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {new Set(blogPosts.map(post => post.category)).size}
            </span>
          </div>
          <p className="text-text-muted text-sm">Categories</p>
        </div>

        <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{blogPosts.length}</span>
          </div>
          <p className="text-text-muted text-sm">Total Posts</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full pl-12 pr-4 py-3 bg-background border border-border-light/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-background border border-border-light/20 rounded-xl text-text-secondary hover:text-white hover:bg-background-alt transition-all">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="bg-background-card border border-border-light/20 rounded-2xl overflow-hidden">
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-background-alt rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-text-muted" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No blog posts yet</h3>
            <p className="text-text-muted mb-6">Create your first blog post to get started</p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              Create Your First Post
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-border-light/10">
            {blogPosts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-background-alt/50 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(post.published)}`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                      {post.featured && (
                        <span className="px-3 py-1 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-full border border-primary-500/20">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author_name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.read_time}</span>
                    </div>

                    <p className="text-text-secondary line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span>Created: {new Date(post.created_at).toLocaleDateString()}</span>
                      {post.updated_at !== post.created_at && (
                        <span>Updated: {new Date(post.updated_at).toLocaleDateString()}</span>
                      )}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex items-center gap-2">
                          <span>Tags:</span>
                          <div className="flex gap-1">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-background-alt text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="px-2 py-1 bg-background-alt text-xs rounded-full">
                                +{post.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-6">
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    
                    <Link
                      href={`/resources/blog/${post.slug}`}
                      target="_blank"
                      className="p-2 text-text-muted hover:text-white hover:bg-background-alt rounded-lg transition-all"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>

                    <button
                      className="p-2 text-text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
