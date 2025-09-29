import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Aware Protection - CoreShield™ API Protection Suite | Resilient Privacy',
  description: 'Security tailored for Agentic AI-driven workloads and data pipelines. Protect AI models, LLM endpoints, and AI agent interactions with specialized AI security controls.',
  keywords: [
    'AI security',
    'LLM security',
    'AI workload protection',
    'AI agent security',
    'AI model protection',
    'AI data pipeline security',
    'AI inference security',
    'AI endpoint security',
    'AI workload monitoring',
    'AI security controls',
  ],
  openGraph: {
    title: 'AI-Aware Protection - CoreShield™ API Protection Suite | Resilient Privacy',
    description: 'Security tailored for Agentic AI-driven workloads and data pipelines with specialized AI security controls.',
    type: 'website',
    url: 'https://resilientprivacy.com/products/coreshield-ai-protection',
  },
  alternates: {
    canonical: 'https://resilientprivacy.com/products/coreshield-ai-protection',
  },
}

const features = [
  {
    title: 'AI Workload Protection',
    description: 'Secure AI training, inference, and deployment pipelines with specialized security controls.',
  },
  {
    title: 'Data Pipeline Security',
    description: 'Protect data flows between AI systems and ensure data integrity throughout the pipeline.',
  },
  {
    title: 'Model Inference Protection',
    description: 'Secure AI model endpoints and prevent model extraction, poisoning, and adversarial attacks.',
  },
  {
    title: 'AI Agent Monitoring',
    description: 'Monitor and secure autonomous AI agents and their interactions with external systems.',
  },
  {
    title: 'LLM Security Controls',
    description: 'Protect Large Language Models from prompt injection, data extraction, and misuse.',
  },
  {
    title: 'AI-Specific Threat Detection',
    description: 'Detect AI-specific attacks like model inversion, membership inference, and adversarial examples.',
  },
]

const aiThreats = [
  {
    name: 'Prompt Injection',
    description: 'Malicious inputs designed to manipulate AI model behavior or extract sensitive information.',
    protection: 'Input validation and prompt filtering with behavioral analysis.',
  },
  {
    name: 'Model Extraction',
    description: 'Attempts to steal or replicate AI models through API interactions.',
    protection: 'Rate limiting, access controls, and model fingerprinting.',
  },
  {
    name: 'Data Poisoning',
    description: 'Malicious data injection to corrupt AI model training or inference.',
    protection: 'Data validation, anomaly detection, and integrity checks.',
  },
  {
    name: 'Adversarial Attacks',
    description: 'Specially crafted inputs designed to fool AI models into making incorrect predictions.',
    protection: 'Adversarial detection and input sanitization.',
  },
  {
    name: 'Model Inversion',
    description: 'Attacks that attempt to reconstruct training data from model outputs.',
    protection: 'Differential privacy and output filtering.',
  },
  {
    name: 'AI Agent Hijacking',
    description: 'Unauthorized control or manipulation of autonomous AI agents.',
    protection: 'Agent behavior monitoring and access controls.',
  },
]

const aiCapabilities = [
  {
    title: 'AI Model Security',
    description: 'Comprehensive protection for AI models and their endpoints.',
    features: [
      'Model integrity monitoring',
      'Adversarial attack detection',
      'Model versioning security',
      'Inference access controls',
    ],
  },
  {
    title: 'LLM Protection',
    description: 'Specialized security for Large Language Models and conversational AI.',
    features: [
      'Prompt injection prevention',
      'Output filtering and sanitization',
      'Context-aware security',
      'Conversation monitoring',
    ],
  },
  {
    title: 'AI Agent Security',
    description: 'Protection for autonomous AI agents and their interactions.',
    features: [
      'Agent behavior monitoring',
      'Action validation and approval',
      'Resource access controls',
      'Interaction logging',
    ],
  },
  {
    title: 'Data Pipeline Protection',
    description: 'Secure data flows in AI training and inference pipelines.',
    features: [
      'Data integrity verification',
      'Pipeline monitoring',
      'Access pattern analysis',
      'Data lineage tracking',
    ],
  },
]

export default function AIProtectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-background-alt py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Aware <span className="fxology-text-gradient">Protection</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Security tailored for Agentic AI-driven workloads and data pipelines. 
            Protect AI models, LLM endpoints, and AI agent interactions with specialized security controls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#features" className="btn text-lg px-8 py-4">
              Explore Features
            </Link>
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            AI-Specific Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222] hover:border-accent-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Threats */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            AI-Specific Threat Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiThreats.map((threat, index) => (
              <div
                key={index}
                className="bg-[#0D0D0F] p-6 rounded-lg border border-[#222]"
              >
                <h3 className="text-xl font-bold text-white mb-3">{threat.name}</h3>
                <p className="text-text-secondary mb-4">{threat.description}</p>
                <div className="text-accent-500 text-sm font-medium">
                  Protection: {threat.protection}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-6 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            AI Security Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#222]"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-text-secondary mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-accent-500 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Advanced AI Security Technology
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Our AI-aware protection system understands the unique security 
                  challenges of AI workloads and provides specialized protection for 
                  models, data pipelines, and AI agents.
                </p>
                <p>
                  The platform uses advanced machine learning techniques to detect 
                  AI-specific attacks and anomalies, providing real-time protection 
                  for your AI infrastructure.
                </p>
                <p>
                  Integration with popular AI frameworks and cloud platforms ensures 
                  seamless deployment and comprehensive coverage of your AI security 
                  requirements.
                </p>
              </div>
            </div>
            <div className="bg-[#0D0D0F] p-8 rounded-lg border border-[#222]">
              <h3 className="text-2xl font-bold text-white mb-6">
                AI Security Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">AI Threat Detection</span>
                  <span className="text-accent-500 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Model Protection</span>
                  <span className="text-accent-500 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">LLM Security</span>
                  <span className="text-accent-500 font-semibold">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">AI Agent Monitoring</span>
                  <span className="text-accent-500 font-semibold">Real-time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Data Pipeline Security</span>
                  <span className="text-accent-500 font-semibold">End-to-end</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-background-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Secure Your AI Workloads
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Protect AI models, LLM endpoints, and AI agents with specialized 
            AI-aware security controls from CoreShield™.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://resilientprivacy.notion.site/24b57ead9668813e813ae3b92d1d0041?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg px-8 py-4"
            >
              Request Demo
            </Link>
            <Link
              href="/products"
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
