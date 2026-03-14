import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sustainability',
  description:
    'TBD-Taikisha sustainability commitment — SBTi certified, carbon neutrality targets, and green engineering technologies for a sustainable future.',
}

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white py-24 md:py-32">
      <div className="absolute inset-0 dot-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300 mb-4 animate-fade-in">
            Sustainability
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Be Engineering for a
            <br />
            Sustainable Society
          </h1>
          <p className="text-lg text-emerald-100/70 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            We are committed to realizing a low-carbon society by reducing
            greenhouse gas emissions through innovative engineering and
            responsible operations.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent" />
    </section>
  )
}

function ESGPillars() {
  const pillars = [
    {
      title: 'Environment',
      description:
        'Climate change mitigation is a top management priority. We actively work to reduce GHG emissions across our operations and help clients achieve their environmental targets.',
      commitments: [
        'SBTi-certified greenhouse gas reduction targets',
        'Carbon-neutral operations roadmap',
        'ISO 14001:2015 certified environmental management',
        'TCFD-aligned climate disclosure',
        'Member of UN Global Compact',
      ],
      color: 'emerald',
      icon: '🌍',
    },
    {
      title: 'Society',
      description:
        'Building an attractive company where people thrive — investing in our workforce, ensuring safety, and contributing to the communities where we operate.',
      commitments: [
        'Zero-compromise workplace safety (OHSAS 18001)',
        'Employee development and training programs',
        'Diversity and inclusion initiatives',
        'Community engagement in project locations',
        'Fair labor practices across supply chain',
      ],
      color: 'blue',
      icon: '👥',
    },
    {
      title: 'Governance',
      description:
        'Transparent and accountable corporate governance structures that uphold the highest standards of integrity and ethical business conduct.',
      commitments: [
        'Transparent corporate governance framework',
        'Anti-corruption and compliance programs',
        'Board diversity and independence',
        'Risk management and internal controls',
        'Regular stakeholder reporting',
      ],
      color: 'violet',
      icon: '⚖️',
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-green)] mb-3">
            ESG Framework
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Three Pillars
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Guided by the Taikisha Group&apos;s sustainability framework, we integrate
            environmental stewardship, social responsibility, and strong
            governance into every aspect of our business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 card-hover"
            >
              <span className="text-4xl mb-4 block">{pillar.icon}</span>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                {pillar.description}
              </p>
              <ul className="space-y-2.5">
                {pillar.commitments.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--taikisha-green)] flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GreenTechnologies() {
  const technologies = [
    {
      title: 'Heat Pump Technology',
      description:
        'High-efficiency heat pump systems that dramatically reduce energy consumption and carbon emissions for heating and cooling.',
      impact: 'Up to 60% energy reduction',
    },
    {
      title: 'Dry-Type Paint Booths',
      description:
        'Innovative dry-type paint booth technology that eliminates water usage in paint overspray collection, reducing waste and operational costs.',
      impact: 'Zero water consumption',
    },
    {
      title: 'i-LAVB (Low Air Volume Booth)',
      description:
        'Proprietary low air volume booth technology that significantly reduces energy consumption while maintaining superior paint quality.',
      impact: '40% air volume reduction',
    },
    {
      title: 'i-VACH Technology',
      description:
        'Indirect furnace with VOC treatment function — simultaneously curing paint and treating volatile organic compounds.',
      impact: '90%+ VOC destruction',
    },
    {
      title: 'Smart Energy Management',
      description:
        'AI-powered building and factory energy management systems that optimize consumption in real-time.',
      impact: '25% operational savings',
    },
    {
      title: 'Water Recycling Systems',
      description:
        'Advanced water treatment and recycling systems for industrial processes, minimizing freshwater consumption.',
      impact: '80% water recovery rate',
    },
  ]

  return (
    <section className="py-24 bg-neutral-50 dark:bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-green)] mb-3">
            Green Innovation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technologies for a Carbon-Neutral Future
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Proprietary and advanced technologies developed through decades of
            R&D, designed to minimize environmental impact across all our
            engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 card-hover"
            >
              <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {tech.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {tech.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  const certs = [
    {
      title: 'ISO 9001:2015',
      body: 'Quality Management System',
      description: 'International standard for quality management — ensuring consistent delivery of high-quality products and services.',
    },
    {
      title: 'ISO 14001:2015',
      body: 'Environmental Management System',
      description: 'Framework for environmental responsibility — 100% certified across all business offices.',
    },
    {
      title: 'SBTi Certified',
      body: 'Science Based Targets initiative',
      description: 'Greenhouse gas emission reduction targets validated by the Science Based Targets initiative.',
    },
    {
      title: 'OHSAS 18001',
      body: 'Occupational Health & Safety',
      description: 'Comprehensive occupational health and safety management system certification.',
    },
    {
      title: 'TCFD Supporter',
      body: 'Climate Financial Disclosure',
      description: 'Supporting the Task Force on Climate-related Financial Disclosures since 2021.',
    },
    {
      title: 'UN Global Compact',
      body: 'Corporate Sustainability',
      description: 'Participant in the United Nations Global Compact for corporate sustainability and responsible business.',
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-green)] mb-3">
            Certifications & Standards
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Recognized Commitments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--taikisha-green)]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[var(--taikisha-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-0.5">{cert.title}</h4>
                <p className="text-xs text-[var(--taikisha-green)] font-medium mb-2">
                  {cert.body}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            Learn More About Our Commitments
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function SustainabilityPage() {
  return (
    <>
      <PageHero />
      <ESGPillars />
      <GreenTechnologies />
      <Certifications />
    </>
  )
}
