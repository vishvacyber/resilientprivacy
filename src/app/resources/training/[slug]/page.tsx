import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const trainingPrograms = [
  {
    title: 'AI Security Fundamentals',
    slug: 'ai-security-fundamentals',
    description:
      'Essential AI security concepts covering model protection, adversarial attacks, and AI threat landscape',
    duration: '3-4 days',
    level: 'Beginner',
    category: 'AI Security',
    features: [
      'AI threat landscape overview',
      'Model vulnerability assessment',
      'Adversarial attack fundamentals',
      'AI security best practices',
      'Prompt injection defense',
    ],
    curriculum: [
      {
        day: 'Day 1',
        title: 'AI Security Landscape',
        topics: [
          'Introduction to AI security challenges',
          'AI threat landscape overview',
          'Attack vectors and vulnerabilities',
          'Security vs. performance trade-offs'
        ]
      },
      {
        day: 'Day 2',
        title: 'Model Protection',
        topics: [
          'Model architecture security',
          'Training data protection',
          'Model versioning and integrity',
          'Secure model deployment'
        ]
      },
      {
        day: 'Day 3',
        title: 'Adversarial Attacks',
        topics: [
          'Adversarial example generation',
          'Evasion attack techniques',
          'Poisoning attack methods',
          'Defense strategies'
        ]
      },
      {
        day: 'Day 4',
        title: 'AI Security Best Practices',
        topics: [
          'Secure AI development lifecycle',
          'AI security testing',
          'Incident response for AI systems',
          'AI security governance'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of machine learning concepts',
      'Familiarity with cybersecurity fundamentals',
      'Programming experience (Python recommended)'
    ],
    outcomes: [
      'Understand AI security threats and vulnerabilities',
      'Implement basic AI model protection measures',
      'Recognize and defend against adversarial attacks',
      'Apply AI security best practices in development'
    ]
  },
  {
    title: 'AI-Powered Threat Detection',
    slug: 'ai-powered-threat-detection',
    description:
      'Advanced AI techniques for detecting sophisticated cyber threats using machine learning and behavioral analysis',
    duration: '4-5 days',
    level: 'Intermediate',
    category: 'AI Security',
    features: [
      'Machine learning for threat hunting',
      'Behavioral anomaly detection',
      'AI-driven security analytics',
      'Automated threat classification',
      'Real-time threat intelligence',
    ],
    curriculum: [
      {
        day: 'Day 1',
        title: 'AI Threat Detection Fundamentals',
        topics: [
          'Machine learning for security',
          'Threat detection methodologies',
          'Data preprocessing for security',
          'Feature engineering techniques'
        ]
      },
      {
        day: 'Day 2',
        title: 'Behavioral Analysis',
        topics: [
          'User behavior profiling',
          'Anomaly detection algorithms',
          'Network behavior analysis',
          'Device behavior monitoring'
        ]
      },
      {
        day: 'Day 3',
        title: 'Advanced ML Techniques',
        topics: [
          'Deep learning for threat detection',
          'Ensemble methods',
          'Unsupervised learning',
          'Real-time processing'
        ]
      },
      {
        day: 'Day 4',
        title: 'Threat Intelligence Integration',
        topics: [
          'Threat intelligence feeds',
          'IOC correlation',
          'Threat actor profiling',
          'Automated response systems'
        ]
      },
      {
        day: 'Day 5',
        title: 'Practical Implementation',
        topics: [
          'Building threat detection systems',
          'Performance optimization',
          'False positive reduction',
          'Deployment strategies'
        ]
      }
    ],
    prerequisites: [
      'Intermediate machine learning knowledge',
      'Experience with security operations',
      'Python programming skills',
      'Understanding of network protocols'
    ],
    outcomes: [
      'Design and implement AI-powered threat detection systems',
      'Apply machine learning to security analytics',
      'Build behavioral analysis capabilities',
      'Integrate threat intelligence with AI systems'
    ]
  },
  {
    title: 'Secure AI Model Development',
    slug: 'secure-ai-model-development',
    description:
      'Comprehensive training on building secure AI models with privacy protection and adversarial robustness',
    duration: '5-6 days',
    level: 'Advanced',
    category: 'AI Security',
    features: [
      'Secure model architecture design',
      'Differential privacy implementation',
      'Adversarial training techniques',
      'Model extraction prevention',
      'AI model governance',
    ],
    curriculum: [
      {
        day: 'Day 1',
        title: 'Secure AI Architecture',
        topics: [
          'Security-by-design principles',
          'Secure model architectures',
          'Privacy-preserving techniques',
          'Threat modeling for AI'
        ]
      },
      {
        day: 'Day 2',
        title: 'Differential Privacy',
        topics: [
          'Privacy theory and concepts',
          'Differential privacy implementation',
          'Privacy budget management',
          'Privacy-utility trade-offs'
        ]
      },
      {
        day: 'Day 3',
        title: 'Adversarial Training',
        topics: [
          'Adversarial training methods',
          'Robust optimization',
          'Certified defenses',
          'Adversarial robustness evaluation'
        ]
      },
      {
        day: 'Day 4',
        title: 'Model Protection',
        topics: [
          'Model extraction prevention',
          'Watermarking techniques',
          'Model obfuscation',
          'Intellectual property protection'
        ]
      },
      {
        day: 'Day 5',
        title: 'AI Governance',
        topics: [
          'AI governance frameworks',
          'Model validation and testing',
          'Compliance requirements',
          'Ethical AI considerations'
        ]
      },
      {
        day: 'Day 6',
        title: 'Advanced Security',
        topics: [
          'Homomorphic encryption',
          'Secure multi-party computation',
          'Federated learning security',
          'Edge AI security'
        ]
      }
    ],
    prerequisites: [
      'Advanced machine learning expertise',
      'Deep understanding of AI/ML concepts',
      'Experience with AI model development',
      'Strong programming skills'
    ],
    outcomes: [
      'Design secure AI model architectures',
      'Implement privacy-preserving AI techniques',
      'Build adversarial robust models',
      'Establish AI governance frameworks'
    ]
  },
  {
    title: 'API Security with AI Integration',
    slug: 'api-security-ai-integration',
    description:
      'Advanced API security training with AI-powered protection, authentication, and threat detection',
    duration: '4-5 days',
    level: 'Intermediate',
    category: 'API Security',
    features: [
      'AI-enhanced API authentication',
      'Behavioral API monitoring',
      'OWASP API Top 10 with AI solutions',
      'Automated API threat detection',
      'AI-driven rate limiting',
    ],
    curriculum: [
      {
        day: 'Day 1',
        title: 'API Security Fundamentals',
        topics: [
          'API security landscape',
          'OWASP API Top 10',
          'Authentication and authorization',
          'API gateway security'
        ]
      },
      {
        day: 'Day 2',
        title: 'AI-Enhanced Authentication',
        topics: [
          'AI-powered authentication',
          'Behavioral biometrics',
          'Risk-based authentication',
          'Adaptive security controls'
        ]
      },
      {
        day: 'Day 3',
        title: 'AI API Monitoring',
        topics: [
          'Behavioral API monitoring',
          'Anomaly detection for APIs',
          'Real-time threat detection',
          'API traffic analysis'
        ]
      },
      {
        day: 'Day 4',
        title: 'Advanced API Protection',
        topics: [
          'AI-driven rate limiting',
          'Automated threat response',
          'API security orchestration',
          'Machine learning for API security'
        ]
      },
      {
        day: 'Day 5',
        title: 'Implementation and Testing',
        topics: [
          'API security testing',
          'Penetration testing for APIs',
          'Security automation',
          'API security best practices'
        ]
      }
    ],
    prerequisites: [
      'API development experience',
      'Basic security knowledge',
      'Understanding of authentication protocols',
      'Programming experience'
    ],
    outcomes: [
      'Implement AI-enhanced API security',
      'Design behavioral monitoring systems',
      'Apply AI to API threat detection',
      'Build comprehensive API protection'
    ]
  },
  {
    title: 'AI Security Operations Center',
    slug: 'ai-security-operations-center',
    description:
      'Comprehensive AI-powered SOC training covering autonomous security operations and AI-driven incident response',
    duration: '5-6 days',
    level: 'Advanced',
    category: 'AI Security',
    features: [
      'AI-powered SOC automation',
      'Autonomous threat response',
      'AI-driven incident analysis',
      'Machine learning for security orchestration',
      'AI-enhanced forensics',
    ],
    curriculum: [
      {
        day: 'Day 1',
        title: 'AI-Powered SOC Architecture',
        topics: [
          'Next-generation SOC design',
          'AI integration strategies',
          'Automation frameworks',
          'SOC transformation planning'
        ]
      },
      {
        day: 'Day 2',
        title: 'AI Threat Detection',
        topics: [
          'Machine learning for threat hunting',
          'Behavioral analysis systems',
          'Anomaly detection',
          'Threat intelligence integration'
        ]
      },
      {
        day: 'Day 3',
        title: 'Autonomous Response',
        topics: [
          'Automated incident response',
          'AI-driven containment',
          'Autonomous threat hunting',
          'Response orchestration'
        ]
      },
      {
        day: 'Day 4',
        title: 'AI Forensics',
        topics: [
          'AI-enhanced forensics',
          'Digital evidence analysis',
          'Timeline reconstruction',
          'Attribution techniques'
        ]
      },
      {
        day: 'Day 5',
        title: 'SOC Analytics',
        topics: [
          'Security analytics platforms',
          'Machine learning pipelines',
          'Data visualization',
          'Performance metrics'
        ]
      },
      {
        day: 'Day 6',
        title: 'Advanced Operations',
        topics: [
          'AI security orchestration',
          'Threat intelligence automation',
          'SOC optimization',
          'Future SOC trends'
        ]
      }
    ],
    prerequisites: [
      'SOC operations experience',
      'Security incident response background',
      'Understanding of security tools',
      'Basic AI/ML knowledge'
    ],
    outcomes: [
      'Design AI-powered SOC operations',
      'Implement autonomous security systems',
      'Build AI-driven incident response',
      'Optimize SOC performance with AI'
    ]
  },
  {
    title: 'AI Security Leadership & Strategy',
    slug: 'ai-security-leadership-strategy',
    description:
      'Executive-level training on AI security strategy, governance, and organizational transformation',
    duration: '3-4 days',
    level: 'Executive',
    category: 'AI Leadership',
    features: [
      'AI security strategy development',
      'AI governance frameworks',
      'AI risk management',
      'AI security transformation',
      'AI ethics and compliance',
    ],
    curriculum: [
      {
        day: 'Day 1',
        title: 'AI Security Strategy',
        topics: [
          'AI security landscape analysis',
          'Strategic planning for AI security',
          'Risk assessment frameworks',
          'Investment prioritization'
        ]
      },
      {
        day: 'Day 2',
        title: 'AI Governance',
        topics: [
          'AI governance frameworks',
          'Policy development',
          'Compliance requirements',
          'Ethical AI considerations'
        ]
      },
      {
        day: 'Day 3',
        title: 'Organizational Transformation',
        topics: [
          'AI security transformation',
          'Change management',
          'Team development',
          'Culture building'
        ]
      },
      {
        day: 'Day 4',
        title: 'Executive Decision Making',
        topics: [
          'AI security investment decisions',
          'Vendor evaluation',
          'Partnership strategies',
          'Future planning'
        ]
      }
    ],
    prerequisites: [
      'Executive or senior management role',
      'Understanding of cybersecurity',
      'Strategic planning experience',
      'Leadership background'
    ],
    outcomes: [
      'Develop comprehensive AI security strategies',
      'Implement AI governance frameworks',
      'Lead AI security transformation',
      'Make informed AI security investments'
    ]
  }
]

export async function generateStaticParams() {
  return trainingPrograms.map((program) => ({
    slug: program.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const program = trainingPrograms.find((p) => p.slug === slug)
  
  if (!program) {
    return {
      title: 'Training Program Not Found',
    }
  }

  return {
    title: `${program.title} | Resilient Privacy Training`,
    description: program.description,
    keywords: [
      'AI security training',
      'cybersecurity training',
      'professional development',
      'security certification',
      program.category.toLowerCase(),
      program.level.toLowerCase(),
    ],
    openGraph: {
      title: `${program.title} | Resilient Privacy Training`,
      description: program.description,
      type: 'website',
      url: `https://resilientprivacy.com/resources/training/${program.slug}`,
    },
    alternates: {
      canonical: `https://resilientprivacy.com/resources/training/${program.slug}`,
    },
  }
}

export default async function TrainingProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = trainingPrograms.find((p) => p.slug === slug)

  if (!program) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-primary-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <Link
                href="/resources/training"
                className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors duration-300"
              >
                ← Back to Training Programs
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full">
                {program.category}
              </span>
              <span className="inline-block px-4 py-2 bg-accent-500/10 text-accent-400 text-sm font-semibold rounded-full">
                {program.level}
              </span>
              <span className="text-text-tertiary text-sm">
                {program.duration}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="darkfire-text-gradient">
                {program.title}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {program.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="https://forms.gle/r4eosBbq6nTf7a8X7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enroll Now
              </Link>
              <Link
                href="#curriculum"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                Program Overview
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                This comprehensive training program provides hands-on experience with cutting-edge AI security technologies and methodologies. You'll learn from industry experts and gain practical skills that you can immediately apply in your organization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-accent-400 mr-3">✓</span>
                  <span className="text-text-secondary">Hands-on labs and practical exercises</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent-400 mr-3">✓</span>
                  <span className="text-text-secondary">Industry expert instructors</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent-400 mr-3">✓</span>
                  <span className="text-text-secondary">Real-world case studies</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent-400 mr-3">✓</span>
                  <span className="text-text-secondary">Certificate of completion</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Key Learning Outcomes
              </h3>
              <ul className="space-y-3">
                {program.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-400 mr-3 mt-1">✓</span>
                    <span className="text-text-secondary">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Curriculum
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive curriculum designed to provide both theoretical knowledge and practical skills in AI security.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {program.curriculum.map((day, index) => (
              <div key={index} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                      {day.title}
                    </h3>
                    <span className="text-accent-400 font-semibold">{day.day}</span>
                  </div>
                </div>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {day.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-accent-400 mr-3 mt-1">•</span>
                      <span className="text-text-secondary">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                Prerequisites
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                To get the most out of this training program, participants should have the following background and experience.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Required Background
              </h3>
              <ul className="space-y-3">
                {program.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-400 mr-3 mt-1">•</span>
                    <span className="text-text-secondary">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Ready to Master {program.title}?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join leading security professionals who have advanced their careers with our cutting-edge AI security training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="https://forms.gle/r4eosBbq6nTf7a8X7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
