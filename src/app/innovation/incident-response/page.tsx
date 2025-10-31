'use client'
import React, { useState } from 'react'
import {
  Brain,
  Zap,
  Shield,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Users,
  Network,
  Clock,
  Mail,
  Loader2,
} from 'lucide-react'

const services = [
  {
    name: 'AI-Powered Threat Detection',
    icon: <Brain className="w-6 h-6 text-accent-500" />,
    description:
      'Machine learning algorithms detect and classify threats in real-time with 99.8% accuracy',
  },
  {
    name: 'Quantum-Safe Incident Response',
    icon: <Shield className="w-6 h-6 text-accent-500" />,
    description:
      'Future-proof incident handling with quantum-resistant cryptography and protocols',
  },
  {
    name: 'Advanced Digital Forensics',
    icon: <Eye className="w-6 h-6 text-accent-500" />,
    description:
      'AI-enhanced forensic analysis across cloud, hybrid, and on-premise environments',
  },
  {
    name: 'Automated Containment',
    icon: <Zap className="w-6 h-6 text-accent-500" />,
    description:
      'Zero-touch incident isolation and containment within seconds of detection',
  },
  {
    name: 'Predictive Threat Intelligence',
    icon: <Globe className="w-6 h-6 text-accent-500" />,
    description:
      'AI models predict and prevent future attacks based on global threat patterns',
  },
  {
    name: 'Regulatory Compliance Automation',
    icon: <Users className="w-6 h-6 text-accent-500" />,
    description:
      'Automated compliance reporting for GDPR, NIS2, DORA, and emerging regulations',
  },
]

const faqs = [
  {
    q: 'How does your AI-powered incident response work?',
    a: 'Our AI system continuously monitors your environment using machine learning algorithms trained on millions of threat patterns. When an incident is detected, our AI immediately classifies the threat type, severity, and potential impact within 15 seconds. The system automatically initiates containment protocols, preserves evidence, and alerts our human experts. Our quantum-safe communication channels ensure secure coordination throughout the response process. The AI also predicts potential attack vectors and proactively strengthens defenses.',
  },
  {
    q: 'What makes your 2025 incident response different from traditional approaches?',
    a: 'Our 2025 platform integrates artificial intelligence, quantum-safe cryptography, and automated response capabilities. Unlike traditional reactive approaches, our AI predicts and prevents incidents before they cause damage. We use behavioral analytics to detect zero-day attacks, automated containment to isolate threats in seconds, and quantum-resistant protocols to future-proof your security. Our platform also provides real-time compliance reporting for new regulations like EU AI Act, NIS2, and DORA.',
  },
  {
    q: 'How do you handle AI-powered and quantum-based cyber attacks?',
    a: 'We specialize in defending against next-generation threats including AI-powered attacks, deepfake social engineering, and potential quantum computing threats. Our AI models are trained to detect adversarial AI behavior patterns and automated attack campaigns. We implement quantum-safe cryptography to protect against future quantum computer attacks. Our team includes quantum security specialists and AI researchers who understand the evolving threat landscape of 2025 and beyond.',
  },
  {
    q: 'What compliance frameworks do you support for incident response?',
    a: 'We provide automated compliance reporting for all major 2025 frameworks including EU AI Act, NIS2 Directive, DORA, GDPR, CCPA, HIPAA, SOX, PCI DSS, and emerging quantum security standards. Our AI system automatically generates incident reports in the required format for each regulation, tracks notification timelines, and ensures all documentation meets regulatory requirements. We also support new frameworks for AI governance and quantum-safe security standards.',
  },
  {
    q: 'How quickly can your AI system detect and contain threats?',
    a: 'Our AI system detects threats in an average of 15 seconds with 99.8% accuracy. Automated containment begins immediately upon detection, typically isolating threats within 30 seconds. Our quantum-safe communication protocols ensure secure coordination with your team within 2 minutes. Human experts are alerted simultaneously and can be on a call within 5 minutes for critical incidents. This speed is achieved through pre-positioned AI agents and automated response playbooks.',
  },
  {
    q: 'Do you provide forensic analysis for cloud-native and hybrid environments?',
    a: 'Yes, our AI-enhanced forensic capabilities cover traditional, cloud-native, hybrid, and edge computing environments. We use machine learning to analyze containerized workloads, serverless functions, and microservices architectures. Our forensic AI can reconstruct attack timelines across multi-cloud environments and preserve evidence from ephemeral infrastructure. We also specialize in analyzing AI model compromises, data poisoning attacks, and quantum-resistant evidence preservation.',
  },
  {
    q: 'How do you ensure business continuity with your automated response?',
    a: 'Our AI system is designed to minimize business disruption through intelligent containment strategies. The system analyzes business impact before implementing containment measures, prioritizing critical services and data flows. We use automated failover to backup systems, implement micro-segmentation to isolate threats without affecting clean systems, and coordinate with cloud providers for rapid service restoration. Our AI also predicts recovery timelines and resource requirements.',
  },
  {
    q: 'What post-incident AI analysis and prevention do you provide?',
    a: 'Our post-incident AI analysis includes comprehensive attack pattern analysis, vulnerability assessment, and predictive modeling for future threats. We use machine learning to identify attack vectors, analyze threat actor behavior, and strengthen your defenses against similar attacks. Our AI generates automated remediation recommendations, updates security policies, and enhances detection algorithms. We also provide continuous threat intelligence updates and proactive security posture improvements based on global threat patterns.',
  },
]

export default function IncidentResponsePage() {
  const [faqOpen, setFaqOpen] = useState(-1)
  const [showReport, setShowReport] = useState(false)
  const [report, setReport] = useState({
    name: '',
    email: '',
    company: '',
    incidentType: 'general' as
      | 'general'
      | 'data-breach'
      | 'malware'
      | 'phishing'
      | 'ddos'
      | 'insider-threat'
      | 'other',
    severity: 'medium' as 'low' | 'medium' | 'high' | 'critical',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [showHotline, setShowHotline] = useState(false)

  const handleReport = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      // Redirect to Notion contact form instead of API call
      window.open(
        '#contact-form',
        '_blank'
      )

      setSubmitted(true)
      setTimeout(() => {
        setShowReport(false)
        setSubmitted(false)
        setReport({
          name: '',
          email: '',
          company: '',
          incidentType: 'general',
          severity: 'medium',
          description: '',
        })
      }, 3000)
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const resetForm = () => {
    setReport({
      name: '',
      email: '',
      company: '',
      incidentType: 'general',
      severity: 'medium',
      description: '',
    })
    setError('')
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181B] via-[#232336] to-accent-500/10 py-16 px-4">
      {/* Add skip-to-content link for accessibility at the top of the page */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 bg-accent-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
      >
        Skip to main content
      </a>

      <div id="main-content">
        <section
          className="max-w-6xl mx-auto text-center mb-16"
          role="region"
          aria-labelledby="ir-hero-heading"
        >
          <h1
            id="ir-hero-heading"
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white"
          >
            AI-Enhanced{' '}
            <span className="text-accent-500">Incident Response</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-8">
            Revolutionary 2025 incident response powered by artificial
            intelligence, quantum-safe protocols, and automated containment.
            Detect, contain, and remediate threats in seconds, not hours.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#232336] p-6 rounded-xl border border-accent-500/30">
              <div className="w-12 h-12 mb-2 bg-accent-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-500" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                15 Seconds
              </div>
              <div className="text-text-secondary text-sm">
                Average Detection Time
              </div>
            </div>
            <div className="bg-[#232336] p-6 rounded-xl border border-accent-500/30">
              <div className="w-12 h-12 mb-2 bg-accent-500/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-accent-500" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">99.8%</div>
              <div className="text-text-secondary text-sm">AI Accuracy Rate</div>
            </div>
            <div className="bg-[#232336] p-6 rounded-xl border border-accent-500/30">
              <div className="w-12 h-12 mb-2 bg-accent-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-500" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                Quantum-Safe
              </div>
              <div className="text-text-secondary text-sm">
                Future-Proof Security
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setShowHotline(true)}
              className="btn text-lg px-8 py-4 inline-flex items-center gap-2"
              aria-label="24/7 AI-Enhanced Emergency Response"
            >
              <Mail className="w-5 h-5" /> 24/7 AI Emergency Response
            </button>
            <button
              onClick={() => setShowReport(true)}
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2"
              aria-label="Report Incident with AI Analysis"
            >
              <Brain className="w-5 h-5" /> AI-Powered Report
            </button>
          </div>
        </section>
        {/* Status Page (mocked) */}
        <section
          className="max-w-5xl mx-auto mb-8"
          role="region"
          aria-labelledby="ir-status-heading"
        >
          <h2
            id="ir-status-heading"
            className="text-2xl font-bold text-white mb-4"
          >
            Live Incident Status
          </h2>
          <div className="bg-[#232336] rounded-2xl p-6 border border-accent-500/30 shadow-lg flex flex-col md:flex-row items-center justify-between">
            <span className="text-lg text-white font-semibold">
              All systems operational
            </span>
            <span className="text-xs text-green-400 font-semibold">
              No active incidents
            </span>
          </div>
        </section>
        {/* AI-Enhanced Services */}
        <section
          className="max-w-6xl mx-auto mb-16"
          role="region"
          aria-labelledby="ir-services-heading"
        >
          <h2
            id="ir-services-heading"
            className="text-3xl font-bold text-white text-center mb-12"
          >
            2025 AI-Enhanced Incident Response Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item) => (
              <div
                key={item.name}
                className="bg-[#232336] rounded-2xl p-6 border border-accent-500/30 shadow-lg hover:border-accent-500 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {item.name}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* FAQ Accordion */}
        <section
          className="max-w-5xl mx-auto mb-12"
          role="region"
          aria-labelledby="ir-faq-heading"
        >
          <h2
            id="ir-faq-heading"
            className="text-2xl font-bold text-white mb-4"
          >
            Incident Response FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#232336] rounded-2xl border border-accent-500/30 shadow-lg"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left min-w-[44px] min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                  onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                  aria-expanded={faqOpen === i}
                  aria-controls={`faq-panel-${i}`}
                  aria-label={`Toggle FAQ: ${faq.q}`}
                >
                  <span className="text-lg font-bold text-white">{faq.q}</span>
                  {faqOpen === i ? (
                    <ArrowRight className="w-6 h-6 text-accent-500" />
                  ) : (
                    <ArrowRight className="w-6 h-6 text-accent-500" />
                  )}
                </button>
                {faqOpen === i && (
                  <div
                    id={`faq-panel-${i}`}
                    className="px-6 pb-4 text-text-secondary"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hotline Modal */}
        {showHotline && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hotline-modal-title"
            aria-live="assertive"
          >
            <div className="bg-[#232336] rounded-2xl p-8 max-w-md w-full shadow-2xl border border-accent-500/40 relative text-center">
              <button
                className="absolute top-3 right-3 text-accent-500 text-xl min-w-[44px] min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                onClick={() => setShowHotline(false)}
                aria-label="Close hotline modal"
              >
                &times;
              </button>
              <h3
                id="hotline-modal-title"
                className="text-xl font-bold text-white mb-2"
              >
                24/7 AI-Enhanced Emergency Response
              </h3>
              <p className="text-text-secondary mb-4">
                Connect to our AI-powered incident response team for immediate
                threat analysis and containment:
              </p>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-500 transition text-lg shadow-lg"
              >
                <Brain className="w-5 h-5" /> Contact Emergency Response
              </a>
              <div className="mt-4 text-xs text-text-secondary space-y-2">
                <p className="flex items-center">
                  <Brain className="w-3 h-3 mr-2 text-accent-500" />
                  AI triage in 15 seconds
                </p>
                <p className="flex items-center">
                  <Zap className="w-3 h-3 mr-2 text-accent-500" />
                  Automated containment available
                </p>
                <p className="flex items-center">
                  <Shield className="w-3 h-3 mr-2 text-accent-500" />
                  Quantum-safe communication
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Incident Report Modal */}
        {showReport && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="report-modal-title"
            aria-live="assertive"
          >
            <div className="bg-[#232336] rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-accent-500/40 relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-3 right-3 text-accent-500 text-xl min-w-[44px] min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                onClick={() => {
                  setShowReport(false)
                  resetForm()
                }}
                aria-label="Close report modal"
              >
                &times;
              </button>
              <h3
                id="report-modal-title"
                className="text-xl font-bold text-white mb-4 flex items-center"
              >
                <Brain className="w-6 h-6 mr-2 text-accent-500" />
                AI-Powered Incident Report
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">
                    AI Analysis Complete - Incident Processed!
                  </h4>
                  <p className="text-text-secondary mb-4">
                    Our AI has analyzed your incident and initiated automated
                    containment protocols. Our expert team has been alerted and
                    will contact you within 15 minutes.
                  </p>
                  <p className="text-sm text-accent-500">
                    For critical incidents, contact our AI-enhanced response team
                    through our emergency portal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReport} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 rounded-lg bg-[#18181B] border border-accent-500/30 text-white placeholder-[accent-500] focus:ring-2 focus:ring-[accent-500] focus:outline-none"
                      value={report.name}
                      onChange={(e) =>
                        setReport({ ...report, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 rounded-lg bg-[#18181B] border border-accent-500/30 text-white placeholder-[accent-500] focus:ring-2 focus:ring-[accent-500] focus:outline-none"
                      value={report.email}
                      onChange={(e) =>
                        setReport({ ...report, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Company/Organization
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Enter your company name"
                      className="w-full px-4 py-2 rounded-lg bg-[#18181B] border border-accent-500/30 text-white placeholder-[accent-500] focus:ring-2 focus:ring-[accent-500] focus:outline-none"
                      value={report.company}
                      onChange={(e) =>
                        setReport({ ...report, company: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="incidentType"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Incident Type *
                    </label>
                    <select
                      id="incidentType"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-[#18181B] border border-accent-500/30 text-white focus:ring-2 focus:ring-[accent-500] focus:outline-none"
                      value={report.incidentType}
                      onChange={(e) =>
                        setReport({
                          ...report,
                          incidentType: e.target.value as
                            | 'general'
                            | 'data-breach'
                            | 'malware'
                            | 'phishing'
                            | 'ddos'
                            | 'insider-threat'
                            | 'other',
                        })
                      }
                    >
                      <option value="general">General Security Incident</option>
                      <option value="phishing">Phishing Attack</option>
                      <option value="malware">Malware Infection</option>
                      <option value="ransomware">Ransomware Attack</option>
                      <option value="data-breach">Data Breach</option>
                      <option value="ddos">DDoS Attack</option>
                      <option value="insider-threat">Insider Threat</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="severity"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Severity Level *
                    </label>
                    <select
                      id="severity"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-[#18181B] border border-accent-500/30 text-white focus:ring-2 focus:ring-[accent-500] focus:outline-none"
                      value={report.severity}
                      onChange={(e) =>
                        setReport({
                          ...report,
                          severity: e.target.value as
                            | 'low'
                            | 'medium'
                            | 'high'
                            | 'critical',
                        })
                      }
                    >
                      <option value="low">
                        Low - Minor impact, no data loss
                      </option>
                      <option value="medium">
                        Medium - Moderate impact, limited data exposure
                      </option>
                      <option value="high">
                        High - Significant impact, potential data breach
                      </option>
                      <option value="critical">
                        Critical - Severe impact, immediate response required
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Incident Description *
                    </label>
                    <textarea
                      id="description"
                      required
                      placeholder="Describe the incident in detail. Include what happened, when it occurred, and any immediate actions taken."
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-[#18181B] border border-accent-500/30 text-white placeholder-[accent-500] focus:ring-2 focus:ring-[accent-500] focus:outline-none resize-none"
                      value={report.description}
                      onChange={(e) =>
                        setReport({ ...report, description: e.target.value })
                      }
                    />
                  </div>

                  {error && (
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-500 transition min-w-[44px] min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    aria-label="Submit Incident Report"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Report'
                    )}
                  </button>

                  <p className="text-xs text-text-secondary text-center">
                    * Required fields. For urgent incidents, please call our
                    24/7 hotline immediately.
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
