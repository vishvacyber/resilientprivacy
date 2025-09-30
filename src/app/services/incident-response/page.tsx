import Link from 'next/link'

const responseCapabilities = [
  {
    category: 'AI-Powered Threat Detection',
    description:
      'Advanced AI and machine learning for rapid threat identification and analysis',
    capabilities: [
      'Autonomous threat hunting with AI algorithms',
      'Behavioral anomaly detection and analysis',
      'Predictive incident forecasting',
      'AI-assisted forensic evidence collection',
      'Machine learning-based attack pattern recognition',
      'Automated indicator of compromise (IoC) generation',
    ],
    
    responseTime: '< 5 minutes',
    trend: 'AI-ENHANCED',
  },
  {
    category: 'Advanced Digital Forensics',
    description:
      'Comprehensive digital investigation and evidence preservation',
    capabilities: [
      'Cloud-native forensics (AWS, Azure, GCP)',
      'Mobile and IoT device forensics',
      'Memory forensics and live analysis',
      'Blockchain and cryptocurrency tracing',
      'Malware reverse engineering',
      'Network traffic analysis and reconstruction',
    ],
    
    responseTime: '< 15 minutes',
    trend: 'COMPREHENSIVE',
  },
  {
    category: 'Rapid Containment & Isolation',
    description: 'Immediate threat containment to prevent lateral movement',
    capabilities: [
      'Automated network segmentation',
      'Zero trust micro-isolation',
      'Cloud workload isolation',
      'Endpoint detection and response (EDR)',
      'DNS sinkholing and traffic redirection',
      'Real-time threat intelligence integration',
    ],
    
    responseTime: '< 10 minutes',
    trend: 'CRITICAL',
  },
  {
    category: 'Business Continuity & Recovery',
    description: 'Minimize business impact and ensure rapid recovery',
    capabilities: [
      'Business impact assessment',
      'Critical system prioritization',
      'Data recovery and restoration',
      'Alternative workflow implementation',
      'Stakeholder communication management',
      'Recovery validation and testing',
    ],
    
    responseTime: '< 30 minutes',
    trend: 'BUSINESS-CRITICAL',
  },
  {
    category: 'Legal & Compliance Support',
    description: 'Navigate regulatory requirements and legal obligations',
    capabilities: [
      'Breach notification compliance',
      'Evidence preservation for litigation',
      'Regulatory reporting assistance',
      'Law enforcement coordination',
      'Insurance claim support',
      'Compliance documentation',
    ],
    
    responseTime: '< 60 minutes',
    trend: 'COMPLIANCE',
  },
  {
    category: 'Post-Incident Strengthening',
    description: 'Learn from incidents to improve future security posture',
    capabilities: [
      'Comprehensive incident analysis',
      'Security gap identification',
      'Remediation roadmap development',
      'Security control enhancement',
      'Team training and awareness',
      'Incident response plan updates',
    ],
    
    responseTime: '24-48 hours',
    trend: 'IMPROVEMENT',
  },
]

const incidentTypes = [
  {
    type: 'Ransomware & Extortion',
    description: 'Complete ransomware response including negotiation support',
    threats: [
      'File encryption attacks',
      'Double/triple extortion',
      'Supply chain ransomware',
      'RansomOps campaigns',
    ],
    specialization:
      'Advanced decryption techniques, threat actor negotiation, business continuity',
    
    severity: 'CRITICAL',
  },
  {
    type: 'Advanced Persistent Threats (APT)',
    description: 'Nation-state and sophisticated threat actor investigations',
    threats: [
      'State-sponsored attacks',
      'Long-term infiltration',
      'Espionage campaigns',
      'Zero-day exploits',
    ],
    specialization:
      'Attribution analysis, advanced forensics, geopolitical threat intelligence',
    
    severity: 'HIGH',
  },
  {
    type: 'Data Breaches & Exfiltration',
    description: 'Comprehensive data breach response and damage assessment',
    threats: [
      'Personal data theft',
      'Intellectual property theft',
      'Financial data compromise',
      'Healthcare records breach',
    ],
    specialization:
      'Data classification, breach scope analysis, regulatory compliance',
    
    severity: 'HIGH',
  },
  {
    type: 'Cloud Security Incidents',
    description: 'Cloud-specific incident response and forensics',
    threats: [
      'Cloud misconfigurations',
      'Container compromises',
      'Serverless attacks',
      'Multi-cloud breaches',
    ],
    specialization:
      'Cloud forensics, DevSecOps integration, infrastructure analysis',
    
    severity: 'MEDIUM',
  },
  {
    type: 'Supply Chain Compromises',
    description: 'Third-party and supply chain security incident management',
    threats: [
      'Software supply chain attacks',
      'Vendor compromises',
      'Hardware tampering',
      'Service provider breaches',
    ],
    specialization:
      'Supply chain mapping, vendor risk assessment, cascading impact analysis',
    
    severity: 'HIGH',
  },
  {
    type: 'IoT & OT Security Incidents',
    description: 'Industrial and IoT environment incident response',
    threats: [
      'Industrial control system attacks',
      'IoT botnet infections',
      'SCADA compromises',
      'Smart device breaches',
    ],
    specialization:
      'OT forensics, industrial network analysis, safety system protection',
    
    severity: 'CRITICAL',
  },
]

const responseTeam = [
  {
    role: 'Incident Commander',
    description: 'Senior security expert leading the response effort',
    certifications: ['CISSP', 'GCIH', 'GCFA', 'CISSP'],
    availability: '24/7/365',
  },
  {
    role: 'Digital Forensics Specialist',
    description: 'Advanced forensics and evidence collection expert',
    certifications: ['GCFA', 'GCFE', 'GNFA', 'EnCE'],
    availability: '24/7/365',
  },
  {
    role: 'Malware Analyst',
    description: 'Reverse engineering and malware analysis specialist',
    certifications: ['GREM', 'GCFA', 'OSCP', 'CISSP'],
    availability: '24/7/365',
  },
  {
    role: 'Threat Intelligence Analyst',
    description: 'Threat actor attribution and intelligence specialist',
    certifications: ['GCTI', 'CISSP', 'SANS', 'CISM'],
    availability: '24/7/365',
  },
  {
    role: 'Legal & Compliance Advisor',
    description: 'Regulatory compliance and legal coordination expert',
    certifications: ['JD', 'CIPP', 'CIPM', 'CISSP'],
    availability: 'On-demand',
  },
  {
    role: 'Communications Specialist',
    description: 'Crisis communication and stakeholder management',
    certifications: ['APR', 'CISSP', 'CISM', 'MBA'],
    availability: 'On-demand',
  },
]

const responseStats = [
  {
    metric: '< 15min',
    label: 'Average Response Time',
    description: 'From initial alert to team activation',
  },
  {
    metric: '99.8%',
    label: 'Successful Containment',
    description: 'Threats contained within first hour',
  },
  {
    metric: '24/7/365',
    label: 'Global Coverage',
    description: 'Round-the-clock expert availability',
  },
  {
    metric: '2.4 hours',
    label: 'Average Recovery Time',
    description: 'Business operations restoration',
  },
  {
    metric: '1000+',
    label: 'Incidents Handled',
    description: 'Across all threat categories',
  },
  {
    metric: '100%',
    label: 'Compliance Rate',
    description: 'Regulatory notification requirements',
  },
]

const retainerBenefits = [
  {
    title: 'Priority Response',
    description:
      'Guaranteed < 15 minute response time with dedicated team assignment',
    
    value: 'Immediate',
  },
  {
    title: 'Proactive Threat Hunting',
    description: 'Monthly threat hunting exercises to identify dormant threats',
    
    value: 'Monthly',
  },
  {
    title: 'Incident Response Planning',
    description: 'Customized playbooks and regular tabletop exercises',
    
    value: 'Quarterly',
  },
  {
    title: 'Forensic Readiness',
    description:
      'Pre-positioned forensic tools and evidence collection procedures',
    
    value: 'Always Ready',
  },
]

export default function IncidentResponsePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0F]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] via-[#1A1A1A] to-[#0D0D0F] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-red-400 text-sm font-semibold">
                24/7 EMERGENCY RESPONSE
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Advanced <span className="text-accent-500">Incident Response</span>{' '}
              & Digital Forensics
            </h1>
            <p className="text-xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Rapid, AI-enhanced incident response with world-class digital
              forensics capabilities. When every minute counts, our expert team
              delivers immediate containment and comprehensive investigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://forms.gle/r4eosBbq6nTf7a8X7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-lg px-10 py-4"
              >
                 Emergency Response
              </Link>
              <Link
                href="#capabilities"
                className="btn-secondary text-lg px-10 py-4"
              >
                Explore Response Capabilities
              </Link>
            </div>
          </div>

          {/* Response Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {responseStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-6 rounded-xl border border-[#333]/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-2xl font-bold text-red-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-text-secondary">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Capabilities */}
      <section id="capabilities" className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Incident Response Capabilities
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our incident response methodology combines cutting-edge technology
              with human expertise to deliver rapid, effective incident
              resolution across all threat vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {responseCapabilities.map((capability, index) => (
              <div
                key={capability.category}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]/50 p-8 rounded-2xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                        {capability.category}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                            capability.trend === 'AI-ENHANCED'
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              : capability.trend === 'CRITICAL'
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : capability.trend === 'COMPREHENSIVE'
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                  : capability.trend === 'BUSINESS-CRITICAL'
                                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                    : capability.trend === 'COMPLIANCE'
                                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                      : 'bg-accent-500/20 text-accent-500 border border-accent-500/30'
                          }`}
                        >
                          {capability.trend}
                        </span>
                        <span className="text-xs text-accent-500 font-semibold bg-accent-500/10 px-2 py-1 rounded">
                          Response: {capability.responseTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {capability.description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {capability.capabilities.map((item, itemIndex) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ transitionDelay: `${itemIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-text-secondary group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Types */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A]/30 to-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized Incident Response by Threat Type
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our expert teams specialize in handling specific types of security
              incidents with tailored methodologies and deep technical
              expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {incidentTypes.map((incident, index) => (
              <div
                key={incident.type}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      incident.severity === 'CRITICAL'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : incident.severity === 'HIGH'
                          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}
                  >
                    {incident.severity}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-500 transition-colors duration-300">
                  {incident.type}
                </h3>

                <p className="text-text-secondary mb-6 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {incident.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Common Threats:
                  </h4>
                  <div className="space-y-2">
                    {incident.threats.map((threat) => (
                      <div
                        key={threat}
                        className="flex items-center gap-2 text-xs text-text-secondary"
                      >
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                        {threat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#0D0D0F]/50 rounded-lg">
                  <h4 className="text-sm font-semibold text-accent-500 mb-2">
                    Our Specialization:
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {incident.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Team */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert Response Team
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our incident response team consists of world-class cybersecurity
              professionals with deep expertise across all aspects of incident
              management and digital forensics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responseTeam.map((member, index) => (
              <div
                key={member.role}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-500 transition-colors duration-300">
                  {member.role}
                </h3>

                <p className="text-text-secondary mb-6 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {member.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Certifications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 bg-accent-500/10 text-accent-500 text-xs rounded border border-accent-500/20"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-semibold">
                    {member.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Benefits */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A]/30 to-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Incident Response Retainer Benefits
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Proactive incident response readiness with dedicated team
              allocation and priority support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retainerBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group text-center"
              >
                <div className="mb-6">
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-500 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent-500/20 to-[#EC4899]/20 border border-accent-500/30 rounded-full">
                  <span className="text-accent-500 font-semibold text-sm">
                    {benefit.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0D0D0F] via-[#1A1A1A] to-[#0D0D0F]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Don't Wait for an Incident to Strike
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Secure your organization with proactive incident response planning
            and 24/7 emergency support. Our expert team is ready to respond
            within minutes when every second counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-10 py-4"
            >
               Get Emergency Hotline Access
            </Link>
            <Link
              href="/services/managed-security"
              className="btn-secondary text-lg px-10 py-4"
            >
              Explore Proactive Security
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-2xl border border-[#333]/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">
                24/7/365
              </div>
              <div className="text-sm text-text-secondary">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">
                &lt; 15 MIN
              </div>
              <div className="text-sm text-text-secondary">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-sm text-text-secondary">Incident Resolution</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
