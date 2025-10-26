'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ShieldCheck,
  Globe,
  Users,
  Zap,
  Target,
  Settings,
  Clock,
  Building,
  Award,
  TrendingUp,
  Rocket,
  Star,
  Brain,
  Lock,
  Eye,
  Shield,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Cpu,
  Database,
  Network,
  AlertTriangle,
  Lightbulb,
  Heart,
  Handshake,
  Target as TargetIcon,
  Sparkles,
} from 'lucide-react'


export default function AboutPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Unique Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-br from-background to-background-alt py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-2 mb-4 sm:mb-6">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
              <span className="text-primary-300 text-xs sm:text-sm font-medium">The Security Revolution Starts Here</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              We're Not Just Another <span className="darkfire-text-gradient">Security Company</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
              While others chase yesterday's threats, we're <strong>architecting tomorrow's security</strong>. 
              We don't just protect your APIs and AI systems—we make them <strong>unbreakable</strong>.
            </p>
          </div>
          
          {/* The Problem We Solve - Mobile Optimized */}
          <div className="bg-background/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">The Reality Every CISO Faces</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Shadow APIs Everywhere</h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">200+ undocumented endpoints in your infrastructure that attackers know about but you don't.</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">AI Models Under Attack</h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">Adversarial attacks, model poisoning, and data exfiltration targeting your AI systems.</p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Reactive Security</h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">Playing catch-up with threats instead of staying ahead of them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Unique Approach - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Here's What Makes Us Different
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
              We don't just build security products. We <strong>reimagine what security can be</strong> when AI and human expertise work together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">The Traditional Approach (What Everyone Else Does)</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-red-400 text-xs sm:text-sm">✗</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed"><strong>Signature-based detection</strong> that only catches known threats</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-red-400 text-xs sm:text-sm">✗</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed"><strong>Manual API discovery</strong> that misses 60% of your endpoints</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-red-400 text-xs sm:text-sm">✗</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed"><strong>Reactive security</strong> that responds after breaches happen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-red-400 text-xs sm:text-sm">✗</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed"><strong>Generic solutions</strong> that don't understand your specific AI models</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Our Revolutionary Approach</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-green-400 text-xs sm:text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed"><strong>AI that thinks like attackers</strong> to predict threats before they exist</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-green-400 text-xs sm:text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed"><strong>Autonomous API discovery</strong> that finds every endpoint, even the ones you forgot about</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-green-400 text-xs sm:text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed"><strong>Proactive protection</strong> that stops attacks before they start</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-green-400 text-xs sm:text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed"><strong>AI-native security</strong> designed specifically for your machine learning models</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* The Founder's Vision - Mobile Optimized */}
          <div className="bg-background/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">The Vision Behind Resilient Privacy</h3>
              <p className="text-text-secondary text-sm sm:text-base lg:text-lg italic mb-4 sm:mb-6 leading-relaxed">
                "I founded Resilient Privacy because I saw a fundamental problem: security companies were building tools for yesterday's threats, 
                while the future was already here. AI and APIs are the new attack surface, but traditional security approaches can't keep up."
              </p>
              <p className="text-text-secondary text-sm sm:text-base">
                <strong>— Vishva Patel, Founder & CEO</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Spacer */}
      <div className="h-16 bg-background-alt"></div>

      {/* Technology Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Our Technology
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              We leverage the latest in AI, machine learning, and advanced analytics to create security solutions that are always one step ahead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">AI-Powered Detection</h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Advanced machine learning algorithms that continuously learn and adapt to new threat patterns, providing proactive protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Network className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">API Intelligence</h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Deep API analysis and monitoring that discovers, maps, and protects every endpoint across your entire infrastructure.
              </p>
            </div>
            
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Real-Time Protection</h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Instant threat detection and response capabilities that protect your systems 24/7 with zero latency.
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-background rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Specifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">AI Security Engine</h4>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Neural Network Architecture:</strong> Transformer-based models with 175B parameters</li>
                  <li>• <strong>Training Data:</strong> 10M+ attack patterns from global threat intelligence</li>
                  <li>• <strong>Detection Accuracy:</strong> 99.7% threat detection rate</li>
                  <li>• <strong>False Positive Rate:</strong> 0.1% industry-leading precision</li>
                  <li>• <strong>Response Time:</strong> &lt;2ms threat blocking latency</li>
                  <li>• <strong>Model Updates:</strong> Real-time learning from new attack vectors</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">API Security Platform</h4>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>API Discovery:</strong> Automated detection of shadow and undocumented APIs</li>
                  <li>• <strong>Protocol Support:</strong> REST, GraphQL, gRPC, WebSocket, and SOAP</li>
                  <li>• <strong>OWASP Protection:</strong> Complete Top 10 API security coverage</li>
                  <li>• <strong>Rate Limiting:</strong> Advanced DDoS protection with 1M+ requests/second</li>
                  <li>• <strong>Schema Validation:</strong> Real-time API request/response validation</li>
                  <li>• <strong>Behavioral Analysis:</strong> ML-powered anomaly detection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Security Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-primary-500" />
                    Adversarial AI Defense
                  </h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• GAN-based attack simulation and defense</li>
                    <li>• Robust model training against adversarial examples</li>
                    <li>• Model poisoning detection and prevention</li>
                    <li>• AI model integrity monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-background rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-primary-500" />
                    Predictive Threat Intelligence
                  </h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• 6-month threat prediction accuracy: 94%</li>
                    <li>• Zero-day attack detection: 87% success rate</li>
                    <li>• Threat actor behavior modeling</li>
                    <li>• Automated threat hunting workflows</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Network className="w-5 h-5 mr-2 text-primary-500" />
                    API Attack Surface Analysis
                  </h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Shadow API discovery: 200+ undocumented endpoints</li>
                    <li>• GraphQL vulnerability scanning</li>
                    <li>• Microservices security mapping</li>
                    <li>• API abuse pattern recognition</li>
                  </ul>
                </div>
                
                <div className="bg-background rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary-500" />
                    Automated Response
                  </h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Zero-touch incident remediation: 95%</li>
                    <li>• ML-powered forensic analysis</li>
                    <li>• Automated threat containment</li>
                    <li>• Real-time security policy updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What You Can Expect - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              What You Can Expect When You Work With Us
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
              We're not just selling you software. We're <strong>partnering with you</strong> to build an unbreakable security foundation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-background/50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Week 1: Discovery & Assessment</h3>
              <ul className="text-text-secondary text-xs sm:text-sm space-y-1 sm:space-y-2">
                <li>• Complete API inventory and shadow API discovery</li>
                <li>• AI model security assessment</li>
                <li>• Threat landscape analysis for your industry</li>
                <li>• Custom security roadmap creation</li>
              </ul>
            </div>
            
            <div className="bg-background/50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Week 2-4: Implementation</h3>
              <ul className="text-text-secondary text-xs sm:text-sm space-y-1 sm:space-y-2">
                <li>• AI-powered threat detection deployment</li>
                <li>• API security platform configuration</li>
                <li>• Custom model training on your data</li>
                <li>• Team training and knowledge transfer</li>
              </ul>
            </div>
            
            <div className="bg-background/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Ongoing: Continuous Protection</h3>
              <ul className="text-text-secondary text-xs sm:text-sm space-y-1 sm:space-y-2">
                <li>• 24/7 AI-powered monitoring</li>
                <li>• Real-time threat intelligence updates</li>
                <li>• Monthly security posture reports</li>
                <li>• Dedicated security success manager</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Build Unbreakable Security?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join the security revolution. Let's make your APIs and AI systems <strong>unbreakable</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Start Your Security Revolution
            </button>
            <Link
              href="/about/leadership"
              className="border-2 border-primary-500 text-primary-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-500/10 hover:border-primary-400 transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Contact Us</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-text-secondary hover:text-white transition-colors duration-200 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Container */}
            <div className="p-6">
              <iframe
                width="100%"
                height="480"
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=X5B4nXtJyUe8_Q47cbEk1vTkiwwqi3NAhP4Sm3GUiQpUQkJQMkpMQzJJMloyVFE0UjNXMjdRS1BRUi4u&embed=true"
                frameBorder={0}
                marginWidth={0}
                marginHeight={0}
                style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
