import Link from 'next/link'

export default function TrainingPage() {
  const trainingPrograms = [
    {
      title: 'Cybersecurity Fundamentals',
      description:
        'Essential cybersecurity concepts for beginners and non-technical professionals',
      duration: '2-3 days',
      level: 'Beginner',
      category: 'Foundation',
      features: [
        'Basic security principles',
        'Threat landscape overview',
        'Security best practices',
        'Incident response basics',
      ],
    },
    {
      title: 'Advanced Threat Detection',
      description:
        'Deep dive into threat hunting, analysis, and response techniques',
      duration: '5 days',
      level: 'Advanced',
      category: 'Technical',
      features: [
        'Threat intelligence analysis',
        'Malware reverse engineering',
        'Network forensics',
        'Advanced SIEM usage',
      ],
    },
    {
      title: 'Zero Trust Architecture',
      description:
        'Comprehensive training on implementing zero trust security models',
      duration: '3-4 days',
      level: 'Intermediate',
      category: 'Architecture',
      features: [
        'Zero trust principles',
        'Identity and access management',
        'Network segmentation',
        'Continuous monitoring',
      ],
    },
    {
      title: 'Cloud Security Specialist',
      description:
        'Security best practices for cloud environments and hybrid infrastructures',
      duration: '4 days',
      level: 'Intermediate',
      category: 'Cloud',
      features: [
        'Cloud security frameworks',
        'Identity and access management',
        'Data protection',
        'Compliance requirements',
      ],
    },
    {
      title: 'Incident Response & Forensics',
      description:
        'Professional training for security incident handling and digital forensics',
      duration: '5 days',
      level: 'Advanced',
      category: 'Response',
      features: [
        'Incident response methodology',
        'Digital forensics tools',
        'Evidence collection',
        'Legal considerations',
      ],
    },
    {
      title: 'Security Leadership & Strategy',
      description:
        'Executive-level training for security program management and strategy',
      duration: '2 days',
      level: 'Executive',
      category: 'Leadership',
      features: [
        'Security program development',
        'Risk management',
        'Budget planning',
        'Stakeholder communication',
      ],
    },
  ]

  const certifications = [
    {
      name: 'Resilient Privacy Security Professional (RPSP)',
      description:
        'Our flagship certification covering comprehensive cybersecurity knowledge',
      validity: '3 years',
      exam: 'Online proctored',
    },
    {
      name: 'Resilient Privacy Threat Hunter (RPTH)',
      description:
        'Specialized certification for threat hunting and intelligence analysis',
      validity: '2 years',
      exam: 'Practical assessment',
    },
    {
      name: 'Resilient Privacy Cloud Security (RPCS)',
      description: 'Cloud security specialization certification',
      validity: '2 years',
      exam: 'Online proctored',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Cybersecurity Training &
            <br />
            <span className="text-gradient">Professional Development</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            Comprehensive training programs designed to build cybersecurity
            expertise from fundamentals to advanced threat hunting. Develop the
            skills needed to protect your organization in today&apos;s evolving
            threat landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 glow"
            >
              Request Training Quote
            </Link>
            <Link
              href="#programs"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section
        id="programs"
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Training Programs
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Our comprehensive training programs are designed to build
              cybersecurity expertise at every level, from foundational concepts
              to advanced threat hunting techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="card group hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-semibold">
                    {program.category}
                  </span>
                  <span className="px-3 py-1 bg-background-light text-text-secondary rounded-full text-sm">
                    {program.level}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
                  {program.title}
                </h3>

                <p className="text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <span className="text-accent-400 font-semibold">
                    Duration: {program.duration}
                  </span>
                </div>

                <ul className="space-y-2 mb-6 sm:mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-accent-400 mr-2 mt-1">✓</span>
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient hover:underline font-semibold text-sm sm:text-base"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Professional Certifications
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Validate your cybersecurity expertise with our industry-recognized
              certifications designed to demonstrate practical skills and
              knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card group hover-lift">
                <div className="w-16 h-16 bg-gradient-purple rounded-xl mb-6 flex items-center justify-center shadow-purple group-hover:shadow-purple-lg transition-all duration-300">
                  <span className="text-white font-bold text-xl">R</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
                  {cert.name}
                </h3>

                <p className="text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-2 mb-6 sm:mb-8">
                  <div className="flex justify-between">
                    <span className="text-text-tertiary">Validity:</span>
                    <span className="text-text-secondary font-semibold">
                      {cert.validity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-tertiary">Exam Format:</span>
                    <span className="text-text-secondary font-semibold">
                      {cert.exam}
                    </span>
                  </div>
                </div>

                <Link
                  href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient hover:underline font-semibold text-sm sm:text-base"
                >
                  Get Certified →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Why Choose Our Training?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-xl mb-6 mx-auto flex items-center justify-center shadow-purple">
                <span className="text-white font-bold text-xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3 sm:mb-4">
                Expert Instructors
              </h3>
              <p className="text-text-secondary text-sm sm:text-base">
                Learn from certified cybersecurity professionals with real-world
                experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-xl mb-6 mx-auto flex items-center justify-center shadow-purple">
                <span className="text-white font-bold text-xl">🖥️</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3 sm:mb-4">
                Hands-on Labs
              </h3>
              <p className="text-text-secondary text-sm sm:text-base">
                Practice with real tools and scenarios in our virtual lab
                environment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-xl mb-6 mx-auto flex items-center justify-center shadow-purple">
                <span className="text-white font-bold text-xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3 sm:mb-4">
                Comprehensive Materials
              </h3>
              <p className="text-text-secondary text-sm sm:text-base">
                Access to course materials, tools, and resources for ongoing
                learning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-xl mb-6 mx-auto flex items-center justify-center shadow-purple">
                <span className="text-white font-bold text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3 sm:mb-4">
                Industry Recognition
              </h3>
              <p className="text-text-secondary text-sm sm:text-base">
                Certifications recognized by leading organizations and employers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Ready to Advance Your Cybersecurity Career?
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary mb-8 sm:mb-10 max-w-3xl mx-auto">
            Contact our training team to discuss your organization&apos;s
            cybersecurity training needs and get a customized training plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 glow"
            >
              Get Training Quote
            </Link>
            <Link
              href="/services/cybersecurity-consulting"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              View Consulting Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
