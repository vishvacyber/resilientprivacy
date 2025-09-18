import Link from 'next/link'
import { Metadata } from 'next'
import {
  Users,
  Cpu,
  Database,
  Network,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  Award,
  Star,
  ArrowUpRight,
  Monitor,
  Settings,
  Briefcase,
  Target,
  Lightbulb,
  Globe,
  Building,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'IT Consulting Services - Strategic Technology Solutions | Resilient Privacy',
  description:
    'Expert IT consulting services for digital transformation, infrastructure optimization, and technology strategy. Transform your business with our strategic technology solutions.',
  keywords: [
    'IT consulting',
    'technology consulting',
    'digital transformation',
    'IT strategy',
    'infrastructure consulting',
    'technology solutions',
    'IT optimization',
    'business technology',
    'IT consulting services',
    'technology consulting firm',
  ],
  openGraph: {
    title:
      'IT Consulting Services - Strategic Technology Solutions | Resilient Privacy',
    description:
      'Expert IT consulting services for digital transformation, infrastructure optimization, and technology strategy.',
    type: 'website',
    url: 'https://resilientprivacy.com/services/it-consulting',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/services/it-consulting',
  },
}

const services = [
  {
    icon: Target,
    title: 'Technology Strategy',
    description:
      'Develop comprehensive technology roadmaps aligned with your business objectives and growth plans.',
    benefits: [
      'Digital transformation planning',
      'Technology assessment',
      'ROI analysis',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Infrastructure Optimization',
    description:
      'Optimize your IT infrastructure for performance, scalability, and cost-effectiveness.',
    benefits: [
      'Cloud migration strategy',
      'Performance optimization',
      'Cost reduction',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Data Management',
    description:
      'Design and implement robust data management strategies for security and compliance.',
    benefits: ['Data governance', 'Compliance frameworks', 'Data architecture'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Network,
    title: 'Network Architecture',
    description:
      'Design secure, scalable network architectures that support your business growth.',
    benefits: [
      'Network security',
      'Scalability planning',
      'Performance optimization',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Security Consulting',
    description:
      'Comprehensive security assessments and strategy development for your technology environment.',
    benefits: ['Security audits', 'Risk assessment', 'Compliance guidance'],
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description:
      'Guide your organization through digital transformation initiatives with proven methodologies.',
    benefits: [
      'Change management',
      'Process optimization',
      'Technology adoption',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
]

const capabilities = [
  'Technology Assessment & Audits',
  'Digital Transformation Strategy',
  'Cloud Migration Planning',
  'Infrastructure Architecture',
  'Data Strategy & Governance',
  'Network Design & Optimization',
  'Security Architecture',
  'Compliance & Risk Management',
  'Technology Vendor Selection',
  'Project Management & Implementation',
  'Change Management & Training',
  'Performance Optimization',
]

const industries = [
  {
    title: 'Financial Services',
    description:
      'Compliance-focused IT solutions for banks, insurance companies, and fintech organizations.',
    icon: '🏦',
    features: ['Regulatory Compliance', 'Risk Management', 'Digital Banking'],
  },
  {
    title: 'Healthcare',
    description:
      'HIPAA-compliant technology solutions for hospitals, clinics, and healthcare providers.',
    icon: '🏥',
    features: [
      'HIPAA Compliance',
      'Patient Data Security',
      'Telemedicine Solutions',
    ],
  },
  {
    title: 'Manufacturing',
    description:
      'Industry 4.0 solutions for smart manufacturing and supply chain optimization.',
    icon: '🏭',
    features: ['IoT Integration', 'Supply Chain Optimization', 'Automation'],
  },
  {
    title: 'Retail & E-commerce',
    description:
      'Digital commerce solutions for omnichannel retail and e-commerce platforms.',
    icon: '🛒',
    features: [
      'Omnichannel Strategy',
      'E-commerce Platforms',
      'Customer Experience',
    ],
  },
]

const stats = [
  { label: 'Projects Completed', value: '500+', icon: Briefcase },
  { label: 'Client Satisfaction', value: '98%', icon: Star },
  { label: 'Cost Savings Avg', value: '35%', icon: TrendingUp },
  { label: 'Implementation Time', value: '30% Faster', icon: Clock },
]

const testimonials = [
  {
    quote:
      "The IT consulting team transformed our technology infrastructure completely. We've seen a 40% reduction in operational costs while improving performance significantly.",
    author: 'Jennifer Martinez',
    role: 'CIO',
    company: 'Global Manufacturing Corp',
  },
  {
    quote:
      'Their strategic approach to digital transformation helped us modernize our systems while maintaining business continuity. The results exceeded our expectations.',
    author: 'Alex Johnson',
    role: 'CTO',
    company: 'Healthcare Systems Inc',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description:
      'Comprehensive analysis of your current technology landscape, business objectives, and challenges.',
    icon: Monitor,
  },
  {
    step: '02',
    title: 'Strategy Development',
    description:
      'Create a tailored technology roadmap aligned with your business goals and growth plans.',
    icon: Target,
  },
  {
    step: '03',
    title: 'Implementation Planning',
    description:
      'Detailed project planning with timelines, resources, and risk mitigation strategies.',
    icon: Settings,
  },
  {
    step: '04',
    title: 'Execution & Support',
    description:
      'Expert implementation with ongoing support and optimization for long-term success.',
    icon: Zap,
  },
]

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A1A] to-[#0D0D0F]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#A78BFA]/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%238B5CF6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-2xl flex items-center justify-center shadow-2xl">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider bg-[#8B5CF6]/10 px-4 py-2 rounded-full">
                Strategic Technology Solutions
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              IT Consulting Services
            </h1>
            <p className="text-2xl text-[#A1A1AA] mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with strategic technology solutions. Our
              expert consultants help you navigate digital transformation,
              optimize infrastructure, and achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/contact"
                className="btn text-lg px-10 py-5 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:from-[#7C3AED] hover:to-[#8B5CF6] shadow-2xl hover:shadow-[#8B5CF6]/25 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="btn bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-10 py-5 shadow-2xl hover:shadow-[#8B5CF6]/25 transition-all duration-300"
              >
                View Resources
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6]/20 to-[#A78BFA]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#A1A1AA]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#232336]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <Star className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Comprehensive IT Consulting
            </h2>
            <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
              From strategy to implementation, we provide end-to-end IT
              consulting services that drive business value and competitive
              advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#A78BFA]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#0D0D0F] p-8 rounded-2xl border border-[#333] hover:border-[#8B5CF6]/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#8B5CF6]/10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#A1A1AA] mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-[#A1A1AA]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">
                  Our Capabilities
                </span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8">
                Expert Technology Consulting
              </h2>
              <p className="text-xl text-[#A1A1AA] mb-12 leading-relaxed">
                Our team of certified consultants brings decades of experience
                across industries, helping organizations leverage technology for
                competitive advantage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#1A1A1A] transition-colors duration-200"
                  >
                    <CheckCircle className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className="text-[#A1A1AA]">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#A78BFA]/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#232336] p-10 rounded-3xl border border-[#333] shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-8 h-8 text-[#8B5CF6]" />
                  <h3 className="text-3xl font-bold text-white">
                    Why Choose Us
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="flex justify-between items-center p-4 bg-[#0D0D0F] rounded-xl">
                    <span className="text-[#A1A1AA] font-medium">
                      Industry Experience
                    </span>
                    <span className="text-[#8B5CF6] font-bold text-2xl">
                      15+ Years
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#0D0D0F] rounded-xl">
                    <span className="text-[#A1A1AA] font-medium">
                      Certified Consultants
                    </span>
                    <span className="text-[#8B5CF6] font-bold text-2xl">
                      50+
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#0D0D0F] rounded-xl">
                    <span className="text-[#A1A1AA] font-medium">
                      Success Rate
                    </span>
                    <span className="text-[#8B5CF6] font-bold text-2xl">
                      98%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#0D0D0F] rounded-xl">
                    <span className="text-[#A1A1AA] font-medium">
                      Average ROI
                    </span>
                    <span className="text-[#8B5CF6] font-bold text-2xl">
                      300%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#232336]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">
                Industry Expertise
              </span>
              <Globe className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
              Our consultants have deep expertise across multiple industries,
              delivering tailored solutions that address unique challenges and
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#A78BFA]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#0D0D0F] p-10 rounded-2xl border border-[#333] hover:border-[#8B5CF6]/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#8B5CF6]/10">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-5xl">{industry.icon}</span>
                    <h3 className="text-3xl font-bold text-white">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-[#A1A1AA] leading-relaxed mb-8 text-lg">
                    {industry.description}
                  </p>
                  <div className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                        <span className="text-[#A1A1AA]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">
                Our Process
              </span>
              <Settings className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Proven Consulting Methodology
            </h2>
            <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
              Our structured approach ensures successful project delivery and
              measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#A78BFA]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#232336] p-8 rounded-2xl border border-[#333] hover:border-[#8B5CF6]/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#8B5CF6]/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-[#8B5CF6] mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#232336]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">
                Client Success
              </span>
              <Star className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#A78BFA]/5 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] p-10 rounded-2xl border border-[#333] shadow-2xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-[#8B5CF6]">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-[#A1A1AA] text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#18181B] to-[#232336]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#A78BFA]/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-[#0D0D0F] to-[#1A1A1A] p-16 rounded-3xl border border-[#333] shadow-2xl">
              <div className="inline-flex items-center gap-2 mb-8">
                <Award className="w-6 h-6 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">
                  Get Started Today
                </span>
                <Award className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h2 className="text-5xl font-bold text-white mb-8">
                Ready to Transform Your Technology?
              </h2>
              <p className="text-xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto leading-relaxed">
                Let our expert consultants help you achieve your technology
                goals and drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="btn text-lg px-12 py-6 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:from-[#7C3AED] hover:to-[#8B5CF6] shadow-2xl hover:shadow-[#8B5CF6]/25 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="btn bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-12 py-6 shadow-2xl hover:shadow-[#8B5CF6]/25 transition-all duration-300"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
