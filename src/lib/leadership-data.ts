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
      'Founder, Chief Executive Officer (CEO) and Board Member',
    photo: '/images/vishva-patel-headshot.png',
    bio: "Vishva Patel is a serial entrepreneur and cybersecurity visionary who has built successful technology ventures. As the driving force behind successful ventures in India under Grey Enterprise Corp, he has consistently outperformed industry benchmarks and established himself as one of the region's most successful technology entrepreneurs.\n\nHis revolutionary approach to cybersecurity has transformed how organizations approach digital security and trust. He has pioneered cutting-edge advancements in identity governance, AI-powered threat intelligence, and next-generation digital risk management that have set new industry standards worldwide.\n\nAt Resilient Privacy, Vishva leads with the conviction that cybersecurity should be a proactive enabler of growth, not a reactive barrier to progress. His vision is to create a global ecosystem where digital identities are inviolable, privacy is non-negotiable, and every organization can innovate without fear.\n\nAs Founder and CEO, he commands respect through his unwavering commitment to pushing technological boundaries. His ultimate ambition is to establish a universal standard of digital trust that empowers businesses, governments, and individuals to connect, collaborate, and innovate securely on a truly global scale.",
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
      "As CEO, I've learned that true cybersecurity leadership means making the impossible possible. We don't just solve today's threats—we architect tomorrow's security landscape, enabling organizations to innovate fearlessly in an increasingly connected world.",
  },
  {
    name: 'Aditya Desai',
    title: 'Board Member and Chief Technology Officer (CTO)',
    photo: '/images/aditya-desai-headshot.png',
    bio: "Aditya Desai serves as Board Member and Chief Technology Officer (CTO) of Resilient Privacy, bringing over 20 years of executive leadership experience in the technology and cybersecurity sectors. A visionary leader with a proven track record of scaling high-growth organizations, Aditya has successfully led multiple companies through transformative growth phases, from startup to enterprise scale.\n\nPrior to joining Resilient Privacy, Aditya held senior executive positions at several technology companies, where he demonstrated exceptional ability to build high-performing teams, establish strategic partnerships, and drive market expansion. His deep understanding of the cybersecurity landscape, combined with his strategic business acumen, has enabled him to position companies for sustainable growth while maintaining operational excellence.\n\nAt Resilient Privacy, Aditya works closely with Founder and CEO Vishva Patel to lead the company's technology strategy and innovation excellence, overseeing all aspects of technology development, product innovation, and technical operations. He collaborates with the board of directors and executive team to develop and execute technology strategies that drive innovation, expand market presence, and deliver exceptional value to clients and shareholders. Aditya's leadership philosophy centers on building a culture of excellence, fostering innovation, and ensuring that every decision aligns with the company's mission of redefining digital trust.\n\nUnder Aditya's technology leadership and with Vishva's security expertise, Resilient Privacy is positioned to become the global leader in next-generation cybersecurity solutions, with a focus on AI-driven security frameworks, zero-trust architectures, and comprehensive digital risk management.",
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
    name: 'Keral Patel',
    title: 'Chief Operations Officer (COO)',
    photo: '/images/keral-patel-headshot.png',
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
  {
    name: 'Rachna Patel',
    title: 'Chief of Staff (CoS)',
    photo: '/images/rachna-patel-headshot.png',
    bio: "Rachna Patel serves as the Chief of Staff at Resilient Privacy, reporting directly to CEO and CISO Vishva Patel. With extensive experience in executive support and strategic coordination, she plays a pivotal role in ensuring seamless execution of the CEO's vision across the organization.\n\nAs Chief of Staff, Rachna coordinates high-priority strategic initiatives, manages executive communications, and ensures alignment between the CEO's vision and operational execution. She serves as a trusted advisor and strategic partner, facilitating effective decision-making processes that support the company's mission of redefining digital trust and cybersecurity standards.\n\nRachna's expertise in executive support, strategic planning, and organizational coordination enables her to translate strategic vision into actionable plans while maintaining operational efficiency. Her ability to coordinate resources across teams and bridge communication gaps makes her an invaluable asset to Resilient Privacy's continued growth and success.",
    expertise: [
      'Executive Support & Advisory',
      'Strategic Initiative Coordination',
      'CEO Office Management',
      'Executive Communications',
      'Strategic Planning & Execution',
      'Organizational Alignment',
    ],
    linkedin: 'https://www.linkedin.com/in/rac1904',
    quote:
      "Vision without execution is just a dream. As Chief of Staff, I turn the CEO's vision into reality through strategic coordination and flawless execution. We're not just building a company—we're architecting the future of cybersecurity.",
  },
  {
    name: 'Siddhi Patel',
    title: 'Chief Financial Officer (CFO)',
    photo: '/images/siddhi-patel-headshot.png',
    bio: "Siddhi Patel serves as the Chief Financial Officer (CFO) of Resilient Privacy, bringing strategic financial leadership and extensive experience in financial management, planning, and analysis. With a proven track record in scaling financial operations for high-growth technology companies, Siddhi plays a critical role in ensuring the company's financial health and sustainable growth.\n\nAs CFO, Siddhi oversees all financial aspects of the organization, including financial planning and analysis, budgeting, forecasting, and strategic financial decision-making. She works closely with Founder and CEO Vishva Patel to develop and implement financial strategies that support the company's mission of redefining digital trust and cybersecurity standards while maintaining fiscal responsibility and operational efficiency.\n\nSiddhi's expertise in financial management, strategic planning, and risk assessment enables her to provide critical financial insights that support informed decision-making across all levels of the organization. Her ability to balance financial prudence with strategic growth initiatives makes her an invaluable asset to Resilient Privacy's continued success and expansion.\n\nUnder Siddhi's financial leadership and in partnership with Vishva's strategic vision, Resilient Privacy continues to strengthen its financial foundation while pursuing ambitious growth objectives in the cybersecurity market.",
    expertise: [
      'Financial Strategy & Planning',
      'Budget Management & Forecasting',
      'Financial Analysis & Reporting',
      'Risk Management & Compliance',
      'Strategic Financial Decision Making',
      'Investor Relations & Fundraising',
    ],
    linkedin: '',
    quote:
      "Financial excellence is the foundation of sustainable growth. As CFO, I ensure that every financial decision aligns with our mission while building the financial strength needed to revolutionize cybersecurity and protect organizations worldwide.",
  },
]

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
