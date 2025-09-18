export interface LeadershipMember {
  name: string
  title: string
  photo: string
  bio: string
  expertise: string[]
  linkedin: string
  quote: string
  hidden?: boolean
}

export const leadership: LeadershipMember[] = [
  {
    name: 'Vishva Patel',
    title:
      'Founder, Chief Executive Officer (CEO) and Chief Information Security Officer (CISO) and Board Member',
    photo: '/images/vishva-patel-headshot.jpg',
    bio: "Vishva Patel is a serial entrepreneur and cybersecurity visionary who has built successful technology ventures. As the driving force behind successful ventures in India under Grey Enterprise Corp, he has consistently outperformed industry benchmarks and established himself as one of the region's most successful technology entrepreneurs.\n\nHis revolutionary approach to cybersecurity has transformed how organizations approach digital security and trust. He has pioneered cutting-edge advancements in identity governance, AI-powered threat intelligence, and next-generation digital risk management that have set new industry standards worldwide.\n\nAt Resilient Privacy, Vishva leads with the conviction that cybersecurity should be a proactive enabler of growth, not a reactive barrier to progress. His vision is to create a global ecosystem where digital identities are inviolable, privacy is non-negotiable, and every organization can innovate without fear.\n\nAs Founder, CEO and CISO, he commands respect through his unwavering commitment to pushing technological boundaries. His ultimate ambition is to establish a universal standard of digital trust that empowers businesses, governments, and individuals to connect, collaborate, and innovate securely on a truly global scale.",
    expertise: [
      'Strategic Leadership & Vision',
      'Identity Governance & Administration',
      'Enterprise Security Architecture',
      'Zero Trust Security Models',
      'Digital Transformation',
      'Risk Management & Compliance',
    ],
    linkedin: 'https://www.linkedin.com/in/vishva-vp',
    quote:
      "In the digital age, trust is the most valuable currency. We don't just protect data, we protect dreams, innovations, and the future of human progress.",
  },
  {
    name: 'Aditya Desai',
    title: 'Board Member and Chief Technology Officer (CTO)',
    photo: '/images/aditya-desai-headshot.jpg',
    bio: "Aditya Desai serves as Board Member and Chief Technology Officer (CTO) of Resilient Privacy, bringing over 20 years of executive leadership experience in the technology and cybersecurity sectors. A visionary leader with a proven track record of scaling high-growth organizations, Aditya has successfully led multiple companies through transformative growth phases, from startup to enterprise scale.\n\nPrior to joining Resilient Privacy, Aditya held senior executive positions at several technology companies, where he demonstrated exceptional ability to build high-performing teams, establish strategic partnerships, and drive market expansion. His deep understanding of the cybersecurity landscape, combined with his strategic business acumen, has enabled him to position companies for sustainable growth while maintaining operational excellence.\n\nAt Resilient Privacy, Aditya works closely with Founder, CEO and CISO Vishva Patel to lead the company's technology strategy and innovation excellence, overseeing all aspects of technology development, product innovation, and technical operations. He collaborates with the board of directors and executive team to develop and execute technology strategies that drive innovation, expand market presence, and deliver exceptional value to clients and shareholders. Aditya's leadership philosophy centers on building a culture of excellence, fostering innovation, and ensuring that every decision aligns with the company's mission of redefining digital trust.\n\nUnder Aditya's technology leadership and with Vishva's security expertise, Resilient Privacy is positioned to become the global leader in next-generation cybersecurity solutions, with a focus on AI-driven security frameworks, zero-trust architectures, and comprehensive digital risk management.",
    expertise: [
      'Technology Strategy & Innovation',
      'Product Development & Engineering',
      'Technical Leadership & Architecture',
      'Technology Operations & Scaling',
      'Innovation & Transformation',
      'Strategic Technology Partnerships',
    ],
    linkedin: 'https://www.linkedin.com/in/aditya-desai-cto',
    quote:
      "Leadership is about creating a vision that inspires others to achieve what they never thought possible. At Resilient Privacy, we're not just building a company, we're building the future of cybersecurity.",
  },
  {
    name: 'Malay Bhavsar',
    title:
      'Chief Security Officer (CSO) & Deputy Chief Information Security Officer (Deputy CISO)',
    photo: '/images/malay-bhavsar-headshot.jpg',
    bio: "Malay Bhavsar is a cybersecurity powerhouse who serves as both Chief Security Officer and Deputy CISO at Resilient Privacy. With an unwavering commitment to security excellence, he has built a reputation as one of the industry's most formidable security leaders, consistently delivering bulletproof protection for enterprise clients worldwide.\n\nHis dual role as CSO and Deputy CISO positions him as the strategic architect of Resilient Privacy's security ecosystem. Working in close partnership with Founder and CISO Vishva Patel, Malay orchestrates comprehensive security strategies that integrate cutting-edge frameworks, real-time threat intelligence, and rapid incident response capabilities across every layer of the organization.\n\nMalay's leadership philosophy centers on proactive security enablement rather than reactive defense. He leverages advanced automation, AI-driven analytics, and zero-trust principles to anticipate and neutralize threats before they materialize. His approach has transformed cybersecurity from a cost center into a strategic competitive advantage for clients, establishing new industry benchmarks for security excellence.\n\nUnder Malay's strategic guidance, Resilient Privacy has achieved unprecedented levels of client protection, with security frameworks that consistently outperform industry standards. His vision extends beyond traditional security boundaries, creating an ecosystem where every digital interaction is secure, every data transaction is protected, and every client operates with absolute confidence in their security posture.",
    expertise: [
      'Security Strategy & Execution',
      'Security Operations Center (SOC)',
      'Incident Response & Management',
      'Security Architecture & Design',
      'Risk Management & Mitigation',
      'Client Security Enablement',
    ],
    linkedin: 'https://www.linkedin.com/in/leo-malay-bhavsar',
    quote:
      "Security excellence is not an option, it's a mandate. As CSO and Deputy CISO, I ensure that every security decision we make creates an impenetrable fortress around our clients' most valuable assets.",
    hidden: true,
  },
  {
    name: 'Riya Patel',
    title: 'Chief Marketing Officer (CMO)',
    photo: '/images/riya-patel-headshot.jpg',
    bio: "Riya Patel serves as the Chief Marketing Officer (CMO) of Resilient Privacy, bringing innovative marketing strategies and brand development expertise to drive the company's market presence and growth.\n\nIn her role as CMO, Riya leads comprehensive marketing initiatives and brand development that amplify Resilient Privacy's mission of redefining digital trust. She works closely with Founder and CISO Vishva Patel to develop marketing strategies that authentically communicate the company's security-first approach and innovative cybersecurity solutions. Riya collaborates with Vishva to ensure that all marketing messaging aligns with the company's commitment to digital trust and security excellence.\n\nRiya's strategic approach combines data-driven marketing insights with creative brand positioning to establish Resilient Privacy as a thought leader in the cybersecurity industry. She works closely with the executive team to develop and execute marketing strategies that support business objectives while building strong relationships with clients, partners, and stakeholders.\n\nUnder Riya's leadership and in partnership with Vishva's vision for digital trust, Resilient Privacy continues to strengthen its market position and brand recognition, with a focus on delivering compelling messaging that resonates with target audiences and drives business growth.",
    expertise: [
      'Strategic Marketing',
      'Brand Development & Positioning',
      'Digital Marketing & Communications',
      'Customer Engagement',
      'Strategic Planning',
      'Market Research & Analytics',
    ],
    linkedin: 'https://www.linkedin.com/in/riya28',
    quote:
      "Great marketing is about telling stories that connect with people on a deeper level. At Resilient Privacy, we don't just communicate our value, we inspire trust and confidence in everything we do.",
    hidden: true,
  },
  {
    name: 'Keral Patel',
    title: 'Chief Operations Officer (COO)',
    photo: '/images/keral-patel-headshot.jpg',
    bio: "Keral Patel serves as the Chief Operations Officer (COO) of Resilient Privacy, bringing strategic operational leadership and a proven track record of driving organizational excellence. With extensive experience in scaling operations and optimizing business processes, Keral plays a pivotal role in ensuring the company's continued growth and operational efficiency.\n\nIn her role as COO, Keral oversees all aspects of day-to-day operations, from process optimization and team management to strategic planning and execution. She works closely with Founder and CISO Vishva Patel to develop and implement operational strategies that align with the company's mission of redefining digital trust and cybersecurity standards. Keral collaborates with Vishva to ensure that all operational processes support and enhance the company's security-first approach while maintaining the highest standards of quality and customer satisfaction.\n\nKeral's leadership philosophy centers on operational excellence, continuous improvement, and fostering a culture of innovation and collaboration. She is committed to building scalable processes and systems that support Resilient Privacy's growth while maintaining the highest standards of quality and customer satisfaction.\n\nUnder Keral's operational leadership and in partnership with Vishva's security vision, Resilient Privacy continues to strengthen its position as a leading cybersecurity organization, with a focus on delivering exceptional value to clients and stakeholders while driving sustainable business growth.",
    expertise: [
      'Operational Excellence',
      'Strategic Planning & Execution',
      'Process Optimization',
      'Team Leadership & Management',
      'Business Scaling',
      'Performance Management',
    ],
    linkedin: '',
    quote:
      "Operational excellence is not just about efficiency, it's about creating the foundation for sustainable growth and innovation. At Resilient Privacy, we build systems that scale with our vision.",
  },
]

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
