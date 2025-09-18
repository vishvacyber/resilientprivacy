import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { blogPosts } from '../data'
import { sanitizeHtml } from '@/lib/utils'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Sanitize the content to prevent XSS attacks
  const sanitizedContent = sanitizeHtml(post.content)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/resources/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert max-w-none">
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </article>
        </div>
      </div>

      {/* Related Posts */}
      <div className="px-6 py-16 bg-gray-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(
                (p) => p.slug !== post.slug && p.category === post.category
              )
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/resources/blog/${relatedPost.slug}`}
                  className="block bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="mb-3">
                    <span className="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs font-semibold">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-purple-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <User className="w-3 h-3 mr-1" />
                    <span>{relatedPost.author}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
