'use client'
import React, { useState } from 'react'
import { Calendar } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    type: 'Upcoming',
    date: '2025-07-30T16:00:00Z',
    title: 'Zero Trust in 2025: Strategies for the Modern Enterprise',
    desc: 'A live panel with industry leaders on implementing zero trust architectures at scale. Q&A included.',
    action: 'Register',
    link: '#',
    speakers: [
      { name: 'Jane Doe', title: 'CISO, Acme Corp', photo: '/logos/cisco.svg' },
      {
        name: 'John Smith',
        title: 'CTO, Resilient Privacy',
        photo: '/logos/crowdstrike.svg',
      },
    ],
  },
  {
    type: 'Upcoming',
    date: '2025-08-15T18:00:00Z',
    title: 'Cloud Security Posture Management Deep Dive',
    desc: 'Hands-on workshop on securing multi-cloud environments and automating compliance.',
    action: 'Register',
    link: '#',
    speakers: [
      {
        name: 'Priya Patel',
        title: 'Cloud Security Lead, Resilient Privacy',
        photo: '/logos/google.svg',
      },
    ],
  },
  {
    type: 'Past',
    date: '2025-06-12T15:00:00Z',
    title: "AI & Threat Intelligence: What's Next?",
    desc: 'Explore the latest advances in AI-driven threat detection and response. Recording available on demand.',
    action: 'View',
    link: '#',
    video: false,
    speakers: [
      {
        name: 'Dr. Alice Quantum',
        title: 'Head of AI Research, Resilient Privacy',
        photo: '/logos/ibm.svg',
      },
    ],
  },
  {
    type: 'Past',
    date: '2025-05-05T14:00:00Z',
    title: 'Ransomware Readiness: Lessons from the Field',
    desc: 'Best practices and real-world insights for preparing and responding to ransomware attacks.',
    action: 'View',
    link: '#',
    video: false,
    speakers: [
      {
        name: 'Bob AI',
        title: 'Incident Response Lead, Resilient Privacy',
        photo: '/logos/splunk.svg',
      },
    ],
  },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function getCountdown(dateStr: string) {
  const eventDate = new Date(dateStr).getTime()
  const now = Date.now()
  const diff = eventDate - now
  if (diff <= 0) return null
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  return `${days}d ${hours}h ${minutes}m`
}

// Define EventType for event objects
interface EventType {
  title: string
  // ...add other properties as needed
}

export default function EventsPage() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalEvent, setModalEvent] = useState<EventType | null>(null)
  const [email, setEmail] = useState('')
  const [registered, setRegistered] = useState(false)

  const filtered = events.filter(
    (e) =>
      (filter === 'All' || e.type === filter) &&
      (e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.desc.toLowerCase().includes(search.toLowerCase()))
  )

  const handleRegister = (event: EventType) => {
    setModalEvent(event)
    setShowModal(true)
    setEmail('')
    setRegistered(false)
  }

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setRegistered(true)
    setTimeout(() => setShowModal(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181B] via-[#232336] to-[#8B5CF6]/10 py-16 px-4">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Events & Webinars
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Join our upcoming events and webinars, or watch recordings of past
          sessions to stay ahead in cybersecurity innovation and best practices.
        </p>
      </section>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex gap-2">
          {['All', 'Upcoming', 'Past'].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 border ${filter === tab ? 'bg-accent-500 text-white border-accent-500' : 'bg-[#232336] text-text-secondary border-[#232336] hover:bg-accent-500/20 hover:text-white'}`}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search events..."
          className="px-4 py-2 rounded-lg bg-[#232336] border border-accent-500/30 text-white placeholder-[#A1A1AA] focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((event, i) => (
          <div
            key={i}
            className="bg-[#232336] rounded-2xl p-6 border border-accent-500/30 shadow-lg flex flex-col justify-between transition-transform duration-200 hover:scale-105 hover:border-accent-500 group"
          >
            <div>
              <span
                className={`inline-block ${event.type === 'Upcoming' ? 'bg-accent-500/20 text-accent-500' : 'bg-accent-500/10 text-accent-500'} font-semibold px-3 py-1 rounded-full text-xs mb-2`}
              >
                {event.type}
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                {event.title}
              </h2>
              <p className="text-text-secondary mb-4">{event.desc}</p>
              <div className="flex flex-wrap gap-3 mb-2">
                {event.speakers &&
                  event.speakers.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-[#18181B] px-3 py-1 rounded-full"
                    >
                      <Image
                        src={s.photo.replace('/public', '')}
                        alt={s.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-white font-semibold">
                        {s.name}
                      </span>
                      <span className="text-xs text-accent-500">{s.title}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="flex items-center gap-2 text-accent-500 font-semibold">
                <Calendar className="w-4 h-4" /> {formatDate(event.date)}
              </span>
              {event.type === 'Upcoming' ? (
                <>
                  {getCountdown(event.date) && (
                    <span className="text-xs text-accent-500 ml-2">
                      Starts in {getCountdown(event.date)}
                    </span>
                  )}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handleRegister(event)
                    }}
                    className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#a78bfa] text-white hover:from-[#a78bfa] hover:to-[#8B5CF6] transition"
                  >
                    {event.action}
                  </a>
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date.replace(/[-:]/g, '').replace('T', 'T').slice(0, 15)}/${event.date.replace(/[-:]/g, '').replace('T', 'T').slice(0, 15)}&details=${encodeURIComponent(event.desc)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-xs text-accent-500 underline"
                  >
                    Add to Calendar
                  </a>
                </>
              ) : event.video ? (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl font-semibold bg-[#232336] border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white transition"
                >
                  {event.action}
                </a>
              ) : null}
            </div>
            {event.video && (
              <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-accent-500/20">
                <iframe
                  src={event.link}
                  title={event.title}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </section>
      <div className="max-w-5xl mx-auto text-center mt-16">
        <h2 className="text-2xl font-bold text-white mb-2">
          Want to see a specific topic or host an event?
        </h2>
        <p className="text-text-secondary mb-4">
          Submit your request or propose a webinar and our team will get in
          touch.
        </p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#a78bfa] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#a78bfa] hover:to-[#8B5CF6] transition shadow-lg"
        >
          Submit Event/Webinar Idea
        </a>
      </div>
      {/* Registration Modal */}
      {showModal && modalEvent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#232336] rounded-2xl p-8 max-w-md w-full shadow-2xl border border-accent-500/40 relative">
            <button
              className="absolute top-3 right-3 text-accent-500 text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-white mb-2">
              Register for {modalEvent.title}
            </h3>
            <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-[#18181B] border border-accent-500/30 text-white placeholder-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#8B5CF6] to-[#a78bfa] text-white px-6 py-2 rounded-xl font-semibold hover:from-[#a78bfa] hover:to-[#8B5CF6] transition"
              >
                Confirm Registration
              </button>
              {registered && (
                <span className="text-green-400 font-semibold">
                  Registration confirmed! Check your email.
                </span>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
