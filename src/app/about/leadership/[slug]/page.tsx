import { User } from 'lucide-react'
import Link from 'next/link'
import { leadership, slugify } from '@/lib/leadership-data'

function Avatar({
  src,
  alt,
  initials,
}: {
  src: string
  alt: string
  initials: string
}) {
  // Show actual image if it exists, otherwise show initials
  if (src) {
    return (
      <div className="w-32 h-32 rounded-full border-2 border-accent-500 mx-auto overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    )
  }

  // Show initials as fallback
  return (
    <div className="w-32 h-32 rounded-full border-2 border-accent-500 mx-auto bg-gradient-to-br from-accent-500 to-[#7C3AED] flex items-center justify-center text-white text-2xl font-bold">
      {initials}
    </div>
  )
}

// Generate static params for all visible leadership profiles
export async function generateStaticParams() {
  return leadership
    .filter((leader) => !leader.hidden)
    .map((leader) => ({
      slug: slugify(leader.name),
    }))
}

export default async function LeaderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const leader = leadership.find((l) => slugify(l.name) === slug)

  if (!leader || leader.hidden) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#18181B] via-[#232336] to-accent-500 px-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          404 - Leader Not Found
        </h1>
        <p className="text-lg text-text-secondary mb-8">
          Sorry, we couldn't find the profile you're looking for.
        </p>
        <Link
          href="/about/leadership"
          className="text-base font-medium text-white bg-accent-500 hover:bg-[#7c3aed] px-6 py-2 rounded-lg transition-colors"
        >
          Back to Leadership
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181B] via-[#232336] to-accent-500 pb-20 px-2">
      <div className="max-w-3xl mx-auto pt-20 pb-10 px-4">
        <Link
          href="/about/leadership"
          className="text-accent-500 hover:underline mb-8 text-base font-medium"
        >
          &larr; Back to Leadership
        </Link>
        <div className="flex flex-col items-center text-center">
          <Avatar
            src={leader.photo}
            alt={leader.name}
            initials={leader.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          />
          <h1 className="text-4xl font-extrabold mt-6 mb-2 tracking-tight">
            <span className="text-white">Resilient </span>
            <span className="bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500 bg-clip-text text-transparent drop-shadow-lg">
              Privacy
            </span>
            <span className="text-white"> Leadership</span>
          </h1>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-2 tracking-tight">
            {leader.name}
          </h2>
          <p className="text-accent-500 font-medium text-xl mb-4">
            {leader.title}
          </p>
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-500 hover:text-white transition-colors text-lg mb-6 font-medium"
              aria-label={`LinkedIn profile of ${leader.name}`}
            >
              <User className="w-5 h-5" /> LinkedIn
            </a>
          )}
        </div>
        <div className="bg-[#232336] rounded-2xl p-8 mt-4 text-left text-text-secondary shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            About {leader.name.split(' ')[0]}
          </h2>
          <p className="text-lg mb-8 leading-relaxed">{leader.bio}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-accent-500 mb-4">
                Areas of Expertise
              </h3>
              <ul className="flex flex-wrap gap-3">
                {leader.expertise.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-2 bg-accent-500 bg-opacity-20 text-accent-500 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent-500 mb-4">
                Professional Highlights
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>
                    Led transformative initiatives in enterprise security
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Managed multi-million dollar security portfolios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Pioneered innovative cybersecurity solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Built high-performing global teams</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#3F3F46] pt-6">
            <h3 className="text-xl font-semibold text-accent-500 mb-4">
              Leadership Philosophy
            </h3>
            <blockquote className="border-l-4 border-accent-500 pl-6 italic text-lg text-accent-500 bg-accent-500 bg-opacity-10 p-4 rounded-r-lg">
              "{leader.quote}"
            </blockquote>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-[#232336] rounded-2xl p-8 mt-6 text-left text-text-secondary shadow-lg">
          <h3 className="text-xl font-semibold text-accent-500 mb-4">
            Connect with {leader.name.split(' ')[0]}
          </h3>
          <div className="flex flex-wrap gap-4">
            {leader.linkedin && (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-500 hover:text-white transition-colors text-base font-medium bg-accent-500 bg-opacity-20 px-4 py-2 rounded-lg"
                aria-label={`LinkedIn profile of ${leader.name}`}
              >
                <User className="w-4 h-4" /> LinkedIn Profile
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
