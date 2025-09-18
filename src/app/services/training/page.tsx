import Link from 'next/link'

const modernTrainingPrograms = [
  {
    category: 'AI-Powered Security Awareness',
    description:
      'Adaptive learning using AI to personalize security training based on individual risk profiles',
    programs: [
      'AI-driven phishing simulation with behavioral analysis',
      'Personalized learning paths based on risk assessment',
      'Real-time threat intelligence integration',
      'Adaptive content delivery based on learning patterns',
      'AI-powered social engineering detection training',
      'Machine learning-based security behavior analytics',
    ],
    icon: '🧠',
    difficulty: 'ADAPTIVE',
    trend: 'AI-ENHANCED',
  },
  {
    category: 'Zero Trust Security Culture',
    description:
      'Comprehensive training on zero trust principles and implementation',
    programs: [
      'Zero trust mindset and cultural transformation',
      'Identity-first security awareness',
      'Continuous verification training',
      'Micro-segmentation awareness',
      'Least privilege access principles',
      'Zero trust architecture understanding',
    ],
    icon: '🛡️',
    difficulty: 'INTERMEDIATE',
    trend: 'CRITICAL 2025',
  },
  {
    category: 'Cloud-Native Security Training',
    description: 'Modern cloud security practices and DevSecOps integration',
    programs: [
      'Multi-cloud security best practices',
      'Container and Kubernetes security',
      'DevSecOps culture and practices',
      'Cloud-native threat landscape',
      'Infrastructure as Code (IaC) security',
      'Serverless security considerations',
    ],
    icon: '☁️',
    difficulty: 'ADVANCED',
    trend: 'HIGH DEMAND',
  },
  {
    category: 'Quantum-Ready Security Awareness',
    description:
      'Preparing for the quantum computing era and post-quantum cryptography',
    programs: [
      'Quantum computing threat landscape',
      'Post-quantum cryptography basics',
      'Crypto-agility planning and implementation',
      'Quantum key distribution awareness',
      'Future-proofing security strategies',
      'Quantum-safe migration planning',
    ],
    icon: '⚛️',
    difficulty: 'EXPERT',
    trend: 'FUTURE-READY',
  },
  {
    category: 'Behavioral Security Analytics',
    description:
      'Data-driven approach to measuring and improving security behavior',
    programs: [
      'Security behavior measurement and analytics',
      'Psychological aspects of cybersecurity',
      'Nudge theory in security awareness',
      'Gamification and engagement strategies',
      'Cultural change management',
      'Security behavior modification techniques',
    ],
    icon: '📊',
    difficulty: 'ADVANCED',
    trend: 'BEHAVIORAL FOCUS',
  },
  {
    category: 'Emerging Threat Landscape 2025',
    description:
      'Latest threats including AI-powered attacks and deepfake technology',
    programs: [
      'AI-powered social engineering attacks',
      'Deepfake detection and awareness',
      'Supply chain attack prevention',
      'IoT and smart device security',
      'Ransomware-as-a-Service (RaaS) awareness',
      'Nation-state threat actor tactics',
    ],
    icon: '🚨',
    difficulty: 'INTERMEDIATE',
    trend: 'EMERGING THREATS',
  },
]

const trainingTiers = [
  {
    tier: 'Foundation',
    duration: 'Self-paced + Monthly reinforcement',
    description: 'Essential security awareness with AI-powered personalization',
    audience: 'All employees',
    features: [
      'AI-adaptive learning paths',
      'Personalized phishing simulations',
      'Micro-learning modules (5-10 min)',
      'Real-time threat updates',
      'Mobile-first learning platform',
      'Basic behavioral analytics',
    ],
    users: 'Up to 500 users',
    price: 'Contact us',
    popular: false,
  },
  {
    tier: 'Professional',
    duration: 'Blended learning + Bi-weekly updates',
    description: 'Advanced security training with behavioral analytics',
    audience: 'Security-conscious organizations',
    features: [
      'Advanced AI-driven simulations',
      'Zero trust awareness training',
      'Cloud security modules',
      'Behavioral risk scoring',
      'Executive security briefings',
      'Custom content creation',
    ],
    users: 'Up to 2,000 users',
    price: 'Contact us',
    popular: true,
  },
  {
    tier: 'Enterprise',
    duration: 'Continuous learning ecosystem',
    description: 'Comprehensive security culture transformation',
    audience: 'Large enterprises',
    features: [
      'Full AI-powered training ecosystem',
      'Custom threat landscape training',
      'Advanced behavioral analytics',
      'Security culture assessment',
      'C-suite security leadership training',
      'Dedicated training success manager',
    ],
    users: 'Unlimited users',
    price: 'Contact us',
    popular: false,
  },
  {
    tier: 'Quantum-Ready',
    duration: 'Future-focused continuous program',
    description: 'Cutting-edge training for quantum era preparation',
    audience: 'Forward-thinking organizations',
    features: [
      'Quantum-safe security training',
      'Post-quantum cryptography education',
      'AI adversarial attack simulation',
      'Future threat landscape preparation',
      'Research-backed content updates',
      'Strategic security consulting included',
    ],
    users: 'Custom deployment',
    price: 'Contact us',
    popular: false,
  },
]

const learningModalities = [
  {
    type: 'AI-Adaptive Microlearning',
    description: 'Bite-sized, personalized learning delivered at optimal times',
    features: [
      '2-5 minute modules',
      'AI-optimized delivery timing',
      'Spaced repetition algorithm',
      'Context-aware content',
    ],
    effectiveness: '95% completion rate',
  },
  {
    type: 'Immersive Simulation Training',
    description:
      'VR/AR-powered realistic security scenarios and threat simulations',
    features: [
      'Virtual reality environments',
      'Real-world attack scenarios',
      'Safe failure learning',
      'Immersive experiences',
    ],
    effectiveness: '87% behavior change',
  },
  {
    type: 'Gamified Learning Paths',
    description: 'Game mechanics and competitive elements to drive engagement',
    features: [
      'Achievement systems',
      'Leaderboards and competitions',
      'Progress tracking',
      'Social learning features',
    ],
    effectiveness: '92% engagement rate',
  },
  {
    type: 'Just-in-Time Training',
    description: 'Contextual security guidance delivered at the moment of need',
    features: [
      'Real-time alerts',
      'Contextual pop-ups',
      'Workflow integration',
      'Immediate reinforcement',
    ],
    effectiveness: '78% risk reduction',
  },
]

const trainingStats = [
  {
    metric: '94%',
    label: 'Behavior Change Rate',
    description: 'Sustained security behavior improvement',
  },
  {
    metric: '89%',
    label: 'Phishing Resilience',
    description: 'Reduction in successful phishing attacks',
  },
  {
    metric: '3.2x',
    label: 'Engagement Increase',
    description: 'Compared to traditional training methods',
  },
  {
    metric: '67%',
    label: 'Incident Reduction',
    description: 'Decrease in human-caused security incidents',
  },
  {
    metric: '15 min',
    label: 'Average Module Time',
    description: 'Optimized for busy professionals',
  },
  {
    metric: '24/7',
    label: 'Learning Access',
    description: 'Global, always-available platform',
  },
]

const certificationPrograms = [
  {
    program: 'Certified Security Awareness Professional (CSAP)',
    level: 'Professional',
    duration: '40 hours',
    description:
      'Comprehensive certification in security awareness program management',
  },
  {
    program: 'AI-Enhanced Security Training Specialist',
    level: 'Advanced',
    duration: '60 hours',
    description:
      'Cutting-edge certification in AI-powered security training methodologies',
  },
  {
    program: 'Zero Trust Culture Champion',
    level: 'Intermediate',
    duration: '30 hours',
    description:
      'Specialized certification in zero trust cultural transformation',
  },
  {
    program: 'Behavioral Security Analytics Expert',
    level: 'Expert',
    duration: '80 hours',
    description:
      'Advanced certification in security behavior measurement and improvement',
  },
]

const industrySpecializations = [
  {
    industry: 'Healthcare & Life Sciences',
    focus: 'HIPAA compliance, patient data protection, medical device security',
    regulations: ['HIPAA', 'FDA', 'HITECH'],
    threats: 'Ransomware, patient data theft, medical device attacks',
  },
  {
    industry: 'Financial Services',
    focus:
      'PCI DSS, fraud prevention, fintech security, cryptocurrency awareness',
    regulations: ['PCI DSS', 'SOX', 'GLBA', 'FFIEC'],
    threats: 'Financial fraud, payment card theft, insider threats',
  },
  {
    industry: 'Manufacturing & Industrial',
    focus: 'OT/ICS security, supply chain protection, industrial espionage',
    regulations: ['NERC CIP', 'IEC 62443', 'NIST'],
    threats: 'Industrial espionage, supply chain attacks, OT disruption',
  },
  {
    industry: 'Government & Defense',
    focus:
      'Classified data protection, nation-state threats, security clearance',
    regulations: ['FedRAMP', 'FISMA', 'NIST 800-53', 'CMMC'],
    threats: 'Nation-state actors, espionage, advanced persistent threats',
  },
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0F]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D0D0F] via-[#1A1A1A] to-[#0D0D0F] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-400 text-sm font-semibold">
                AI-POWERED LEARNING PLATFORM
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Next-Gen <span className="text-accent-500">Security Training</span>{' '}
              & Awareness
            </h1>
            <p className="text-xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your organization's security culture with AI-powered,
              adaptive learning that delivers measurable behavioral change and
              builds quantum-ready security awareness for 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-lg px-10 py-4 bg-gradient-to-r from-accent-500 to-[#EC4899] hover:from-[#9333EA] hover:to-[#F472B6] transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="#programs"
                className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
              >
                Explore Training Programs
              </Link>
            </div>
          </div>

          {/* Training Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trainingStats.map((stat, index) => (
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

      {/* Modern Training Programs */}
      <section id="programs" className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              2025 Advanced Training Programs
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Cutting-edge security training programs incorporating AI-powered
              learning, behavioral analytics, and preparation for emerging
              threats including quantum computing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modernTrainingPrograms.map((program, index) => (
              <div
                key={program.category}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]/50 p-8 rounded-2xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                        {program.category}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                            program.trend === 'AI-ENHANCED'
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              : program.trend === 'CRITICAL 2025'
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : program.trend === 'HIGH DEMAND'
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                  : program.trend === 'FUTURE-READY'
                                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                    : program.trend === 'BEHAVIORAL FOCUS'
                                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                          }`}
                        >
                          {program.trend}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            program.difficulty === 'ADAPTIVE'
                              ? 'bg-blue-500/20 text-blue-400'
                              : program.difficulty === 'INTERMEDIATE'
                                ? 'bg-green-500/20 text-green-400'
                                : program.difficulty === 'ADVANCED'
                                  ? 'bg-orange-500/20 text-orange-400'
                                  : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {program.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {program.description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {program.programs.map((item, itemIndex) => (
                    <div
                      key={`${program.category}-${itemIndex}`}
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

      {/* Learning Modalities */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A]/30 to-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Learning Modalities
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Innovative training delivery methods that maximize engagement,
              retention, and behavioral change through cutting-edge technology
              and learning science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningModalities.map((modality, index) => (
              <div
                key={modality.type}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-500 transition-colors duration-300">
                    {modality.type}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {modality.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent-500/20 to-[#EC4899]/20 border border-accent-500/30 rounded-full mb-4">
                    <span className="text-accent-500 font-semibold text-sm">
                      {modality.effectiveness}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {modality.features.map((feature, featureIndex) => (
                    <div
                      key={`${modality.type}-${featureIndex}`}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0"></div>
                      <span className="text-text-secondary group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Tiers */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Training Service Tiers
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Choose the right level of security training for your organization,
              from AI-adaptive awareness to comprehensive culture
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {trainingTiers.map((tier, index) => (
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
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                    {tier.tier}
                  </h3>
                  <p className="text-accent-500 font-semibold mb-2 text-sm">
                    {tier.duration}
                  </p>
                  <p className="text-text-secondary text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="text-xs text-text-secondary mb-4">
                    <strong>Target:</strong> {tier.audience}
                  </div>
                  <div className="text-lg font-bold text-white mb-6">
                    {tier.price}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <div
                      key={`${tier.tier}-${featureIndex}`}
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
                  <div className="text-xs text-text-secondary mb-2">Capacity</div>
                  <div className="text-sm font-semibold text-accent-500">
                    {tier.users}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A]/30 to-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Training
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Tailored security training programs designed for specific industry
              requirements, regulations, and threat landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySpecializations.map((industry, index) => (
              <div
                key={industry.industry}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-500 transition-colors duration-300">
                  {industry.industry}
                </h3>

                <p className="text-text-secondary mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {industry.focus}
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Key Regulations:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.regulations.map((reg, regIndex) => (
                        <span
                          key={`${industry.industry}-reg-${regIndex}`}
                          className="px-2 py-1 bg-accent-500/10 text-accent-500 text-xs rounded border border-accent-500/20"
                        >
                          {reg}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#333]/50">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Primary Threats:
                    </h4>
                    <p className="text-xs text-text-secondary">{industry.threats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Certification Programs
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Industry-leading certification programs that validate expertise in
              modern security awareness and training methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationPrograms.map((cert, index) => (
              <div
                key={cert.program}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-[#333]/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-500 transition-colors duration-300">
                    {cert.program}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        cert.level === 'Expert'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : cert.level === 'Advanced'
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : cert.level === 'Professional'
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              : 'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}
                    >
                      {cert.level}
                    </span>
                    <span className="text-accent-500 font-semibold text-sm bg-accent-500/10 px-2 py-1 rounded">
                      {cert.duration}
                    </span>
                  </div>
                  <p className="text-text-secondary leading-relaxed group-hover:text-white transition-colors duration-300">
                    {cert.description}
                  </p>
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
            <span className="text-5xl">🎓</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Security Culture?
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Join thousands of organizations that have revolutionized their
            security posture through AI-powered training and behavioral
            transformation. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-10 py-4 bg-gradient-to-r from-accent-500 to-[#EC4899] hover:from-[#9333EA] hover:to-[#F472B6] transform hover:scale-105 transition-all duration-300"
            >
              Start Free 30-Day Trial
            </Link>
            <Link
              href="/services/cybersecurity-consulting"
              className="btn bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
            >
              Explore Security Consulting
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-2xl border border-[#333]/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">
                AI-POWERED
              </div>
              <div className="text-sm text-text-secondary">Adaptive Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">94%</div>
              <div className="text-sm text-text-secondary">Behavior Change Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-500 mb-2">24/7</div>
              <div className="text-sm text-text-secondary">
                Global Learning Platform
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
