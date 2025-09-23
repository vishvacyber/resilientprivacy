import Link from 'next/link'

const modernRedTeamServices = [
  {
    category: 'AI-Adversarial Red Teaming',
    description:
      'Cutting-edge adversarial attacks against AI/ML systems and AI-powered defenses',
    services: [
      'AI model poisoning and evasion attacks',
      'Machine learning adversarial testing',
      'AI-powered social engineering campaigns',
      'Automated vulnerability discovery using AI',
      'Large Language Model (LLM) prompt injection',
      'AI-assisted lateral movement techniques',
    ],
    
    difficulty: 'ADVANCED',
    trend: 'NEW 2025',
  },
  {
    category: 'Cloud-Native Purple Teaming',
    description:
      'Collaborative red and blue team exercises in cloud environments',
    services: [
      'Multi-cloud attack simulation',
      'Container and Kubernetes exploitation',
      'Serverless function abuse testing',
      'Cloud identity and access management (IAM) attacks',
      'Infrastructure as Code (IaC) security testing',
      'Cloud workload protection bypass',
    ],
    
    difficulty: 'EXPERT',
    trend: 'HIGH DEMAND',
  },
  {
    category: 'Zero Trust Validation',
    description:
      'Comprehensive testing of zero trust architecture implementations',
    services: [
      'Identity verification bypass testing',
      'Micro-segmentation penetration',
      'Continuous authentication evasion',
      'Zero trust network access (ZTNA) testing',
      'Privileged access management (PAM) attacks',
      'Device trust and compliance bypasses',
    ],
    
    difficulty: 'EXPERT',
    trend: 'CRITICAL',
  },
  {
    category: 'Advanced Persistent Threat (APT) Simulation',
    description: 'Nation-state level attack simulation with advanced tactics',
    services: [
      'Living-off-the-land (LotL) techniques',
      'Supply chain attack simulation',
      'Advanced evasion and anti-forensics',
      'Custom malware and implant development',
      'Command and control (C2) infrastructure',
      'Long-term persistence mechanisms',
    ],
    
    difficulty: 'ELITE',
    trend: 'NATION-STATE',
  },
  {
    category: 'Physical & Social Engineering 2025',
    description: 'Modern physical security and social engineering assessments',
    services: [
      'IoT and smart building exploitation',
      'RFID/NFC badge cloning and attacks',
      'Deepfake and AI-generated social engineering',
      'Voice synthesis and vishing campaigns',
      'Physical access control bypass',
      'Human intelligence (HUMINT) operations',
    ],
    
    difficulty: 'ADVANCED',
    trend: 'EVOLVING',
  },
  {
    category: 'Quantum-Era Cryptographic Testing',
    description: 'Future-proof testing against quantum computing threats',
    services: [
      'Post-quantum cryptography assessment',
      'Quantum key distribution (QKD) testing',
      'Crypto-agility validation',
      'Quantum-resistant algorithm evaluation',
      'Hybrid classical-quantum attack simulation',
      'Quantum supremacy impact assessment',
    ],
    
    difficulty: 'CUTTING-EDGE',
    trend: 'FUTURE-READY',
  },
]

const redTeamTiers = [
  {
    tier: 'Tactical Assessment',
    duration: '2-3 weeks',
    description: 'Focused penetration testing with modern techniques',
    scope: 'Single domain/application',
    features: [
      'External network penetration testing',
      'Web application security assessment',
      'Basic social engineering testing',
      'OWASP Top 10 and beyond',
      'Cloud configuration review',
      'Detailed technical reporting',
    ],
    team: '3-4 specialists',
    price: 'Contact us',
    popular: false,
  },
  {
    tier: 'Strategic Red Team',
    duration: '4-6 weeks',
    description: 'Comprehensive multi-vector attack simulation',
    scope: 'Full enterprise environment',
    features: [
      'Multi-phase attack campaign',
      'Advanced persistent threat simulation',
      'Zero trust architecture testing',
      'Cloud-native security assessment',
      'Physical security evaluation',
      'Executive briefing and remediation roadmap',
    ],
    team: '6-8 specialists',
    price: 'Contact us',
    popular: true,
  },
  {
    tier: 'Elite Purple Team',
    duration: '6-12 weeks',
    description: 'Advanced collaborative red/blue team operations',
    scope: 'Enterprise + supply chain',
    features: [
      'Nation-state level APT simulation',
      'AI-adversarial attack testing',
      'Supply chain compromise simulation',
      'Custom exploit and tool development',
      'Real-time blue team collaboration',
      'Strategic security program enhancement',
    ],
    team: '10-15 specialists',
    price: 'Contact us',
    popular: false,
  },
  {
    tier: 'Continuous Red Team',
    duration: 'Ongoing (12 months)',
    description: 'Year-round adversarial simulation program',
    scope: 'Global enterprise operations',
    features: [
      'Quarterly attack campaigns',
      'Continuous threat landscape adaptation',
      'Real-time threat intelligence integration',
      'Security team training and development',
      'Incident response validation',
      'Board-level security reporting',
    ],
    team: 'Dedicated team of 8-12',
    price: 'Contact us',
    popular: false,
  },
]

const redTeamTechniques = [
  {
    category: 'Initial Access',
    techniques: [
      'Spear-phishing with deepfakes',
      'Supply chain infiltration',
      'Zero-day exploitation',
      'Cloud service abuse',
    ],
    mitre: 'TA0001',
  },
  {
    category: 'Execution',
    techniques: [
      'Living-off-the-land binaries',
      'Container escape techniques',
      'Serverless function abuse',
      'AI model manipulation',
    ],
    mitre: 'TA0002',
  },
  {
    category: 'Persistence',
    techniques: [
      'Cloud backdoors',
      'AI model backdoors',
      'Hardware implants',
      'Supply chain persistence',
    ],
    mitre: 'TA0003',
  },
  {
    category: 'Defense Evasion',
    techniques: [
      'AI-powered evasion',
      'Anti-forensics techniques',
      'Zero trust bypass',
      'Quantum-safe encryption bypass',
    ],
    mitre: 'TA0005',
  },
]

const redTeamStats = [
  {
    metric: '95%',
    label: 'Success Rate',
    description: 'Successful initial compromise',
  },
  {
    metric: '2.3 hours',
    label: 'Average Breach Time',
    description: 'From initial access to domain admin',
  },
  {
    metric: '47',
    label: 'Average Findings',
    description: 'Critical and high-risk vulnerabilities',
  },
  {
    metric: '100%',
    label: 'Undetected Rate',
    description: 'Advanced evasion techniques',
  },
  {
    metric: '30+',
    label: 'Expert Hackers',
    description: 'Certified red team specialists',
  },
  {
    metric: '24/7',
    label: 'Global Operations',
    description: 'Worldwide testing capabilities',
  },
]

const certifications = [
  { cert: 'OSCP', category: 'Penetration Testing', level: 'Advanced' },
  { cert: 'OSCE', category: 'Exploit Development', level: 'Expert' },
  { cert: 'GPEN', category: 'Penetration Testing', level: 'Professional' },
  { cert: 'GXPN', category: 'Exploit Research', level: 'Expert' },
  { cert: 'CRTO', category: 'Red Team Operations', level: 'Advanced' },
  { cert: 'GCFA', category: 'Forensics', level: 'Professional' },
  { cert: 'CISSP', category: 'Security Management', level: 'Professional' },
  { cert: 'CISM', category: 'Information Security', level: 'Management' },
]

const redTeamBenefits = [
  {
    title: 'Real-World Attack Simulation',
    description:
      'Experience actual threat actor techniques and tactics used in the wild',
    
    value: 'Realistic scenarios',
  },
  {
    title: 'Advanced Evasion Techniques',
    description:
      'Test your defenses against sophisticated evasion and anti-forensics methods',
    
    value: '100% stealth mode',
  },
  {
    title: 'AI-Enhanced Testing',
    description:
      'Leverage artificial intelligence for automated vulnerability discovery and exploitation',
    
    value: '10x faster discovery',
  },
  {
    title: 'Purple Team Collaboration',
    description:
      'Work alongside your blue team to improve detection and response capabilities',
    
    value: 'Collaborative improvement',
  },
]

export default function RedTeamingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0F]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] via-[#1A1A1A] to-[#0D0D0F] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-red-400 text-sm font-semibold">
                ADVANCED ADVERSARIAL SIMULATION
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Elite <span className="text-accent-500">Red Team</span> Operations
            </h1>
            <p className="text-xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Advanced penetration testing and adversarial simulation using
              cutting-edge techniques including AI-powered attacks, zero trust
              validation, and nation-state level APT simulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-lg px-10 py-4 bg-gradient-to-r from-accent-500 to-[#EC4899] hover:from-[#9333EA] hover:to-[#F472B6] transform hover:scale-105 transition-all duration-300"
              >
                Request Red Team Assessment
              </Link>
              <Link
                href="#services"
                className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
              >
                Explore Attack Vectors
              </Link>
            </div>
          </div>

          {/* Red Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {redTeamStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-6 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-2xl font-bold text-accent-500 mb-2">
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

      {/* Modern Red Team Services */}
      <section id="services" className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              2025 Advanced Red Team Services
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Cutting-edge adversarial simulation services incorporating the
              latest attack techniques, AI-powered testing, and nation-state
              level threat actor methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modernRedTeamServices.map((service, index) => (
              <div
                key={service.category}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]/50 p-8 rounded-2xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                        {service.category}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                            service.trend === 'NEW 2025'
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : service.trend === 'CRITICAL'
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : service.trend === 'HIGH DEMAND'
                                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                  : service.trend === 'NATION-STATE'
                                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                    : service.trend === 'FUTURE-READY'
                                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                      : 'bg-accent-500/20 text-accent-500 border border-accent-500/30'
                          }`}
                        >
                          {service.trend}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            service.difficulty === 'ADVANCED'
                              ? 'bg-orange-500/20 text-orange-400'
                              : service.difficulty === 'EXPERT'
                                ? 'bg-red-500/20 text-red-400'
                                : service.difficulty === 'ELITE'
                                  ? 'bg-purple-500/20 text-purple-400'
                                  : 'bg-cyan-500/20 text-cyan-400'
                          }`}
                        >
                          {service.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {service.services.map((item, itemIndex) => (
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

      {/* Red Team Tiers */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A]/30 to-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Red Team Service Tiers
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Choose the right level of adversarial testing for your
              organization, from tactical assessments to comprehensive purple
              team operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {redTeamTiers.map((tier, index) => (
              <div
                key={tier.tier}
                className={`bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 group ${
                  tier.popular
                    ? 'border-accent-500 ring-2 ring-[accent-500]/20'
                    : 'border-[#333]/50 hover:border-accent-500/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-accent-500 to-[#EC4899] text-white px-4 py-1 text-sm font-bold rounded-full">
                       MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                    {tier.tier}
                  </h3>
                  <p className="text-accent-500 font-semibold mb-2">
                    {tier.duration}
                  </p>
                  <p className="text-text-secondary text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="text-xs text-text-secondary mb-4">
                    <strong>Scope:</strong> {tier.scope}
                  </div>
                  <div className="text-lg font-bold text-white mb-6">
                    {tier.price}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-[#333]/50">
                  <div className="text-xs text-text-secondary mb-2">Team Size</div>
                  <div className="text-sm font-semibold text-accent-500">
                    {tier.team}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MITRE ATT&CK Techniques */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MITRE ATT&CK Framework Coverage
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our red team operations cover the full spectrum of adversary
              tactics and techniques mapped to the MITRE ATT&CK framework,
              updated with the latest 2025 techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {redTeamTechniques.map((category, index) => (
              <div
                key={category.category}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                    {category.category}
                  </h3>
                  <div className="text-xs text-accent-500 font-semibold bg-accent-500/10 px-2 py-1 rounded">
                    {category.mitre}
                  </div>
                </div>

                <div className="space-y-3">
                  {category.techniques.map((technique) => (
                    <div
                      key={technique}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0"></div>
                      <span className="text-text-secondary group-hover:text-white transition-colors duration-300">
                        {technique}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Certifications */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A]/30 to-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Elite Red Team Certifications
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our red team specialists hold the industry's most prestigious
              certifications and continuously update their skills with the
              latest attack techniques.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={`${cert.cert}-${index}`}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-6 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group text-center"
              >
                <h4 className="font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                  {cert.cert}
                </h4>
                <p className="text-xs text-text-secondary mb-2">{cert.category}</p>
                <span
                  className={`inline-block px-2 py-1 text-xs rounded ${
                    cert.level === 'Expert'
                      ? 'bg-red-500/20 text-red-400'
                      : cert.level === 'Advanced'
                        ? 'bg-orange-500/20 text-orange-400'
                        : cert.level === 'Professional'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-green-500/20 text-green-400'
                  }`}
                >
                  {cert.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Team Benefits */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Elite Red Team?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Experience the most advanced adversarial simulation available,
              incorporating cutting-edge techniques used by nation-state actors
              and advanced threat groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {redTeamBenefits.map((benefit, index) => (
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
            Ready to Test Your Defenses?
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Challenge your security posture with the most advanced red team
            operations available. Our elite hackers will test your defenses
            using nation-state level techniques and AI-powered attacks.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-10 py-4 bg-gradient-to-r from-accent-500 to-[#EC4899] hover:from-[#9333EA] hover:to-[#F472B6] transform hover:scale-105 transition-all duration-300"
            >
              Schedule Red Team Assessment
            </Link>
            <Link
              href="/services/incident-response"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
            >
              Explore Incident Response
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-2xl border border-[#333]/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">100%</div>
              <div className="text-sm text-text-secondary">
                Undetected Penetration
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">30+</div>
              <div className="text-sm text-text-secondary">
                Elite Red Team Specialists
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">
                AI-POWERED
              </div>
              <div className="text-sm text-text-secondary">
                Advanced Attack Simulation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
