import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

// Define result types for each assessment type
interface QuizResults {
  maturity: string
  percentage: number
  categoryScores: Record<
    string,
    { percentage: number; score: number; maxScore: number }
  >
  totalScore: number
  maxScore: number
}

interface RiskResults {
  overallRisk: string
  riskScore: number
  estimatedLoss: string
  riskFactors: Array<{ factor: string; risk: string; score: number }>
}

interface ComplianceResults {
  overallScore: number
  status: string
  requirements: Array<{ title: string; status: string; description: string }>
}

interface ThreatResults {
  threatLevel: string
  vulnerabilityScore: number
  threats: Array<{
    name: string
    severity: string
    description: string
    impact: string
  }>
}

export interface AssessmentReport {
  type: 'quiz' | 'risk' | 'compliance' | 'threats'
  title: string
  date: string
  results: QuizResults | RiskResults | ComplianceResults | ThreatResults
  recommendations: string[]
  companyInfo?: {
    name: string
    industry: string
    size: string
    contactEmail?: string
  }
}

export class PDFGenerator {
  private doc: jsPDF

  constructor() {
    this.doc = new jsPDF('p', 'mm', 'a4')
  }

  async generateAssessmentReport(report: AssessmentReport): Promise<Blob> {
    const { doc } = this

    // Set up the document
    doc.setFont('helvetica')

    // Generate each section on separate pages
    this.addCoverPage(report)
    this.addTableOfContents()
    this.addExecutiveSummary(report)
    this.addDetailedResults(report)
    this.addKeyFindings(report)
    this.addServices()
    this.addContactInformation()
    this.addFooter()

    return doc.output('blob')
  }

  private addCoverPage(report: AssessmentReport): void {
    const { doc } = this

    // White background
    doc.setFillColor(255, 255, 255)
    doc.rect(0, 0, 210, 297, 'F')

    // Purple header line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 0, 210, 0)

    // Company name
    doc.setFontSize(24)
    doc.setTextColor(139, 92, 246)
    doc.setFont('helvetica', 'bold')
    doc.text('Resilient Privacy', 20, 30)

    // Tagline
    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text('Enterprise Cybersecurity Solutions', 20, 40)

    // Main title
    doc.setFontSize(36)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Security Assessment', 20, 80)
    doc.text('Report', 20, 100)

    // Assessment type
    doc.setFontSize(16)
    doc.setTextColor(139, 92, 246)
    doc.setFont('helvetica', 'bold')
    doc.text(report.title.toUpperCase(), 20, 130)

    // Date
    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(`Generated: ${report.date}`, 20, 150)

    // Company info
    if (report.companyInfo) {
      doc.setDrawColor(200, 200, 200)
      doc.setLineWidth(1)
      doc.line(20, 180, 190, 180)

      doc.setFontSize(16)
      doc.setTextColor(0, 0, 0)
      doc.setFont('helvetica', 'bold')
      doc.text('Assessment Details', 20, 200)

      doc.setFontSize(12)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(100, 100, 100)
      doc.text(`Company: ${report.companyInfo.name}`, 20, 215)
      doc.text(`Industry: ${report.companyInfo.industry}`, 20, 225)
      doc.text(`Size: ${report.companyInfo.size}`, 20, 235)
    }

    // Confidentiality notice
    doc.setFontSize(10)
    doc.setTextColor(150, 150, 150)
    doc.text(
      'This report contains confidential information and is intended for authorized personnel only.',
      20,
      270
    )

    // Purple footer line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 297, 210, 297)

    doc.addPage()
  }

  private addTableOfContents(): void {
    const { doc } = this

    // Purple header line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 0, 210, 0)

    // Title
    doc.setFontSize(28)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Table of Contents', 20, 40)

    // Purple line under title
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(2)
    doc.line(20, 50, 100, 50)

    // Sections
    const sections = [
      { title: 'Executive Summary', page: 3 },
      { title: 'Assessment Results', page: 4 },
      { title: 'Key Findings', page: 5 },
      { title: 'Services Overview', page: 6 },
      { title: 'Contact Information', page: 7 },
    ]

    let y = 80
    sections.forEach((section, index) => {
      doc.setFontSize(14)
      doc.setTextColor(139, 92, 246)
      doc.setFont('helvetica', 'bold')
      doc.text(`${index + 1}.`, 20, y)

      doc.setTextColor(0, 0, 0)
      doc.text(section.title, 35, y)

      doc.setTextColor(200, 200, 200)
      const dots = '.'.repeat(
        Math.floor((140 - doc.getTextWidth(section.title)) / 3)
      )
      doc.text(dots, 35 + doc.getTextWidth(section.title) + 5, y)

      doc.setTextColor(139, 92, 246)
      doc.text(section.page.toString(), 190, y, { align: 'right' })

      y += 20
    })

    // Purple footer line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 297, 210, 297)

    doc.addPage()
  }

  private addPageHeader(title: string): void {
    const { doc } = this

    // Purple header line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 0, 210, 0)

    // Logo
    doc.setFontSize(16)
    doc.setTextColor(139, 92, 246)
    doc.setFont('helvetica', 'bold')
    doc.text('Resilient Privacy', 20, 20)

    // Title and page number
    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(`${title} | ${doc.getCurrentPageInfo().pageNumber}`, 190, 20, {
      align: 'right',
    })

    // Gray line
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(1)
    doc.line(0, 30, 210, 30)
  }

  private addExecutiveSummary(report: AssessmentReport): void {
    const { doc } = this

    this.addPageHeader('Executive Summary')

    // Title
    doc.setFontSize(28)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Executive Summary', 20, 50)

    // Purple line under title
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(2)
    doc.line(20, 60, 100, 60)

    // Two-column layout
    const leftColumn = 20
    const rightColumn = 115
    const columnWidth = 85

    // Left column
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Assessment Overview', leftColumn, 80)

    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')

    const overviewText = `This comprehensive security assessment evaluates your organization's cybersecurity posture across multiple dimensions. The assessment provides actionable insights to strengthen your security program and protect against evolving cyber threats.`

    const overviewLines = doc.splitTextToSize(overviewText, columnWidth)
    doc.text(overviewLines, leftColumn, 90)

    // Right column
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Key Metrics', rightColumn, 80)

    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')

    const y = 90
    if (report.type === 'quiz') {
      const results = report.results as QuizResults
      doc.text(`Security Maturity: ${results.maturity}`, rightColumn, y)
      doc.text(`Overall Score: ${results.percentage}%`, rightColumn, y + 12)
    } else if (report.type === 'risk') {
      const results = report.results as RiskResults
      doc.text(`Risk Level: ${results.overallRisk}`, rightColumn, y)
      doc.text(`Risk Score: ${results.riskScore}/100`, rightColumn, y + 12)
    } else if (report.type === 'compliance') {
      const results = report.results as ComplianceResults
      doc.text(`Compliance Score: ${results.overallScore}%`, rightColumn, y)
      doc.text(`Status: ${results.status}`, rightColumn, y + 12)
    } else if (report.type === 'threats') {
      const results = report.results as ThreatResults
      doc.text(`Threat Level: ${results.threatLevel}`, rightColumn, y)
      doc.text(
        `Vulnerability Score: ${results.vulnerabilityScore}/100`,
        rightColumn,
        y + 12
      )
    }

    // Next steps
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Next Steps', leftColumn, 150)

    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')

    const nextStepsText = `To receive detailed strategic recommendations and implementation guidance, please contact our team with this report. We will provide customized solutions tailored to your organization's specific needs and objectives.`

    const nextStepsLines = doc.splitTextToSize(nextStepsText, 170)
    doc.text(nextStepsLines, leftColumn, 160)

    // Purple footer line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 297, 210, 297)

    doc.addPage()
  }

  private addDetailedResults(report: AssessmentReport): void {
    const { doc } = this

    this.addPageHeader('Assessment Results')

    // Title
    doc.setFontSize(28)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Assessment Results', 20, 50)

    // Purple line under title
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(2)
    doc.line(20, 60, 100, 60)

    let y = 80

    if (report.type === 'quiz') {
      y = this.addQuizResults(report.results as QuizResults, y)
    } else if (report.type === 'risk') {
      y = this.addRiskResults(report.results as RiskResults, y)
    } else if (report.type === 'compliance') {
      y = this.addComplianceResults(report.results as ComplianceResults, y)
    } else if (report.type === 'threats') {
      y = this.addThreatResults(report.results as ThreatResults, y)
    }

    // Purple footer line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 297, 210, 297)

    doc.addPage()
  }

  private addQuizResults(results: QuizResults, startY: number): number {
    const { doc } = this
    let y = startY

    // Overall score
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Overall Security Maturity', 20, y)

    doc.setFontSize(24)
    doc.setTextColor(139, 92, 246)
    doc.text(results.maturity, 20, y + 15)

    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(
      `Score: ${results.percentage}% (${results.totalScore}/${results.maxScore})`,
      20,
      y + 30
    )

    y += 50

    // Category breakdown
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Category Breakdown', 20, y)

    y += 20

    Object.entries(results.categoryScores).forEach(([category, score]) => {
      if (y > 240) {
        doc.addPage()
        this.addPageHeader('Assessment Results')
        y = 50
      }

      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.setFont('helvetica', 'bold')
      doc.text(category, 20, y)

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.setFont('helvetica', 'normal')
      doc.text(
        `${score.percentage}% (${score.score}/${score.maxScore})`,
        20,
        y + 8
      )

      // Status indicator
      const status = this.getCategoryStatus(score.percentage)
      if (status === 'Good') {
        doc.setTextColor(34, 197, 94)
      } else if (status === 'Fair') {
        doc.setTextColor(245, 158, 11)
      } else {
        doc.setTextColor(239, 68, 68)
      }
      doc.text(status, 150, y + 8)

      y += 20
    })

    return y
  }

  private addRiskResults(results: RiskResults, startY: number): number {
    const { doc } = this
    let y = startY

    // Overall risk
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Overall Risk Assessment', 20, y)

    doc.setFontSize(24)
    doc.setTextColor(139, 92, 246)
    doc.text(results.overallRisk, 20, y + 15)

    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(`Risk Score: ${results.riskScore}/100`, 20, y + 30)
    doc.text(`Estimated Loss: ${results.estimatedLoss}`, 20, y + 40)

    y += 60

    // Risk factors
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Risk Factors', 20, y)

    y += 20

    results.riskFactors.forEach((factor) => {
      if (y > 240) {
        doc.addPage()
        this.addPageHeader('Assessment Results')
        y = 50
      }

      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.setFont('helvetica', 'bold')
      doc.text(factor.factor, 20, y)

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.setFont('helvetica', 'normal')
      doc.text(factor.risk, 20, y + 8)
      doc.text(`Score: ${factor.score}/100`, 150, y + 8)

      y += 20
    })

    return y
  }

  private addComplianceResults(
    results: ComplianceResults,
    startY: number
  ): number {
    const { doc } = this
    let y = startY

    // Overall compliance
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Compliance Assessment', 20, y)

    doc.setFontSize(24)
    doc.setTextColor(139, 92, 246)
    doc.text(results.status, 20, y + 15)

    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(`Overall Score: ${results.overallScore}%`, 20, y + 30)

    y += 50

    // Requirements
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Compliance Requirements', 20, y)

    y += 20

    results.requirements.forEach((req) => {
      if (y > 240) {
        doc.addPage()
        this.addPageHeader('Assessment Results')
        y = 50
      }

      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.setFont('helvetica', 'bold')
      doc.text(req.title, 20, y)

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.setFont('helvetica', 'normal')
      doc.text(req.description, 20, y + 8)

      // Status indicator
      if (req.status === 'Compliant') {
        doc.setTextColor(34, 197, 94)
      } else {
        doc.setTextColor(239, 68, 68)
      }
      doc.text(req.status, 150, y + 8)

      y += 20
    })

    return y
  }

  private addThreatResults(results: ThreatResults, startY: number): number {
    const { doc } = this
    let y = startY

    // Overall threat level
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Threat Assessment', 20, y)

    doc.setFontSize(24)
    doc.setTextColor(139, 92, 246)
    doc.text(results.threatLevel, 20, y + 15)

    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(
      `Vulnerability Score: ${results.vulnerabilityScore}/100`,
      20,
      y + 30
    )

    y += 50

    // Threats
    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Identified Threats', 20, y)

    y += 20

    results.threats.forEach((threat) => {
      if (y > 240) {
        doc.addPage()
        this.addPageHeader('Assessment Results')
        y = 50
      }

      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.setFont('helvetica', 'bold')
      doc.text(threat.name, 20, y)

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.setFont('helvetica', 'normal')
      doc.text(threat.description, 20, y + 8)
      doc.text(`Impact: ${threat.impact}`, 20, y + 16)

      // Severity indicator
      if (threat.severity === 'High') {
        doc.setTextColor(239, 68, 68)
      } else if (threat.severity === 'Medium') {
        doc.setTextColor(245, 158, 11)
      } else {
        doc.setTextColor(34, 197, 94)
      }
      doc.text(threat.severity, 150, y + 8)

      y += 25
    })

    return y
  }

  private addKeyFindings(report: AssessmentReport): void {
    const { doc } = this

    this.addPageHeader('Key Findings')

    // Title
    doc.setFontSize(28)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Key Findings', 20, 50)

    // Purple line under title
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(2)
    doc.line(20, 60, 100, 60)

    // Overview
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Overview', 20, 80)

    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')

    let overviewText = ''
    if (report.type === 'quiz') {
      const results = report.results as QuizResults
      overviewText = `Your organization demonstrates a ${results.maturity.toLowerCase()} level of security maturity with an overall score of ${results.percentage}%. The assessment reveals areas of strength and opportunities for improvement across various security domains.`
    } else if (report.type === 'risk') {
      const results = report.results as RiskResults
      overviewText = `The risk assessment identifies a ${results.overallRisk.toLowerCase()} risk level with a score of ${results.riskScore}/100. Key risk factors have been identified and prioritized for mitigation.`
    } else if (report.type === 'compliance') {
      const results = report.results as ComplianceResults
      overviewText = `Compliance assessment shows a ${results.status.toLowerCase()} status with an overall score of ${results.overallScore}%. Critical requirements have been evaluated for adherence.`
    } else if (report.type === 'threats') {
      const results = report.results as ThreatResults
      overviewText = `Threat analysis reveals a ${results.threatLevel.toLowerCase()} threat level with a vulnerability score of ${results.vulnerabilityScore}/100. Specific threats have been identified and assessed for impact.`
    }

    const overviewLines = doc.splitTextToSize(overviewText, 170)
    doc.text(overviewLines, 20, 90)

    // Key findings
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Key Findings', 20, 130)

    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')

    let y = 140
    const findings = this.generateKeyFindings(report)

    findings.forEach((finding) => {
      if (y > 240) {
        doc.addPage()
        this.addPageHeader('Key Findings')
        y = 50
      }

      // Bullet point
      doc.setTextColor(139, 92, 246)
      doc.text('•', 20, y)

      // Finding text
      doc.setTextColor(100, 100, 100)
      const findingLines = doc.splitTextToSize(finding, 160)
      doc.text(findingLines, 25, y)

      y += findingLines.length * 5 + 5
    })

    // Purple footer line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 297, 210, 297)

    doc.addPage()
  }

  private generateKeyFindings(report: AssessmentReport): string[] {
    const findings: string[] = []

    if (report.type === 'quiz') {
      const results = report.results as QuizResults
      const lowestCategories = this.getLowestCategories(results.categoryScores)

      findings.push(
        `Security maturity assessment reveals an overall score of ${results.percentage}%, indicating ${results.maturity.toLowerCase()} security posture.`
      )
      findings.push(
        `Strongest areas demonstrate solid security practices and controls implementation.`
      )
      findings.push(`Areas for improvement identified in: ${lowestCategories}`)
      findings.push(
        `Recommendation: Focus on enhancing controls in lower-scoring categories to improve overall security maturity.`
      )
    } else if (report.type === 'risk') {
      const results = report.results as RiskResults

      findings.push(
        `Risk assessment identifies ${results.overallRisk.toLowerCase()} risk level with score of ${results.riskScore}/100.`
      )
      findings.push(`Estimated potential loss: ${results.estimatedLoss}`)
      findings.push(
        `Critical risk factors require immediate attention and mitigation planning.`
      )
      findings.push(
        `Recommendation: Implement risk mitigation strategies for high-priority risk factors.`
      )
    } else if (report.type === 'compliance') {
      const results = report.results as ComplianceResults

      findings.push(
        `Compliance assessment shows ${results.status.toLowerCase()} status with ${results.overallScore}% adherence.`
      )
      findings.push(
        `Compliant areas demonstrate strong regulatory adherence and control implementation.`
      )
      findings.push(
        `Non-compliant requirements need immediate remediation to meet standards.`
      )
      findings.push(
        `Recommendation: Address compliance gaps to achieve full regulatory adherence.`
      )
    } else if (report.type === 'threats') {
      const results = report.results as ThreatResults

      findings.push(
        `Threat analysis reveals ${results.threatLevel.toLowerCase()} threat level with vulnerability score of ${results.vulnerabilityScore}/100.`
      )
      findings.push(
        `Multiple threat vectors identified requiring defensive measures.`
      )
      findings.push(
        `High-severity threats pose significant risk to organizational assets.`
      )
      findings.push(
        `Recommendation: Implement threat mitigation controls and monitoring capabilities.`
      )
    }

    return findings
  }

  private addServices(): void {
    const { doc } = this

    this.addPageHeader('Services Overview')

    // Title
    doc.setFontSize(28)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Services Overview', 20, 50)

    // Purple line under title
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(2)
    doc.line(20, 60, 100, 60)

    // Introduction
    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(
      'Resilient Privacy offers comprehensive cybersecurity services to help organizations strengthen their security posture and achieve their security objectives.',
      20,
      80
    )

    // Services
    const services = [
      {
        name: 'Cybersecurity Consulting',
        description:
          'Strategic security assessments, architecture design, and implementation guidance.',
      },
      {
        name: 'Incident Response',
        description:
          '24/7 incident detection, response, and recovery services with expert security teams.',
      },
      {
        name: 'Compliance & Governance',
        description:
          'Regulatory compliance support, policy development, and governance frameworks.',
      },
      {
        name: 'Security Training',
        description:
          'Employee security awareness training and technical skill development programs.',
      },
    ]

    let y = 100
    services.forEach((service, index) => {
      if (y > 240) {
        doc.addPage()
        this.addPageHeader('Services Overview')
        y = 50
      }

      // Service number
      doc.setFontSize(12)
      doc.setTextColor(139, 92, 246)
      doc.setFont('helvetica', 'bold')
      doc.text(`${index + 1}.`, 20, y)

      // Service name
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.setFont('helvetica', 'bold')
      doc.text(service.name, 35, y)

      // Service description
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.setFont('helvetica', 'normal')
      const descLines = doc.splitTextToSize(service.description, 150)
      doc.text(descLines, 35, y + 10)

      y += 25 + descLines.length * 5
    })

    // Purple footer line
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(3)
    doc.line(0, 297, 210, 297)

    doc.addPage()
  }

  private addContactInformation(): void {
    const { doc } = this

    this.addPageHeader('Contact Information')

    // Title
    doc.setFontSize(28)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Contact Information', 20, 50)

    // Purple line under title
    doc.setDrawColor(139, 92, 246)
    doc.setLineWidth(2)
    doc.line(20, 60, 100, 60)

    // Introduction
    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(
      'For detailed strategic recommendations, implementation guidance, and customized solutions, please contact our team.',
      20,
      80
    )

    // Contact details
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Resilient Privacy', 20, 100)

    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text('Dallas, TX', 20, 115)
    doc.text('Email: info@resilientprivacy.com', 20, 125)
    doc.text('Phone: (555) 123-4567', 20, 135)
    doc.text('Website: www.resilientprivacy.com', 20, 145)

    // Call to action
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text('Ready to strengthen your security posture?', 20, 170)

    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.setFont('helvetica', 'normal')
    doc.text(
      'Contact us today to discuss how we can help you achieve your cybersecurity goals.',
      20,
      180
    )
  }

  private addFooter(): void {
    const { doc } = this
    const pageCount = doc.getNumberOfPages()

    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)

      // Purple footer line
      doc.setDrawColor(139, 92, 246)
      doc.setLineWidth(3)
      doc.line(0, 297, 210, 297)

      // Footer content
      doc.setFontSize(9)
      doc.setTextColor(100, 100, 100)
      doc.setFont('helvetica', 'normal')

      // Left: Company name
      doc.text('Resilient Privacy', 20, 290)

      // Center: Tagline
      doc.text('Enterprise Cybersecurity Solutions', 105, 290, {
        align: 'center',
      })

      // Right: Page number
      doc.text(`Page ${i} of ${pageCount}`, 190, 290, { align: 'right' })
    }
  }

  private getLowestCategories(
    categoryScores: Record<string, { percentage: number }>
  ): string {
    const sorted = Object.entries(categoryScores)
      .sort(([, a], [, b]) => a.percentage - b.percentage)
      .slice(0, 2)
      .map(([category]) => category)

    return sorted.join(', ')
  }

  private getCategoryStatus(percentage: number): string {
    if (percentage >= 80) return 'Good'
    if (percentage >= 60) return 'Fair'
    return 'Needs Improvement'
  }

  async generateHTMLReport(
    element: HTMLElement,
    filename: string
  ): Promise<void> {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const imgWidth = 210
    const pageHeight = 295
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight

    let position = 0

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    pdf.save(filename)
  }
}

export const pdfGenerator = new PDFGenerator()
