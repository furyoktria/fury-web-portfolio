import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'TBD-Taikisha engineering services — Green Technology Systems (HVAC, Clean Room) and Paint Finishing Systems (Automotive, Industrial) with Design, Build & Care methodology.',
}

function PageHero() {
  return (
    <section className="relative overflow-hidden hero-gradient text-white py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-300 mb-4 animate-fade-in">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Integrated Engineering
            <br />
            Solutions
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Two pillars of engineering excellence — from concept and design
            through construction, commissioning, and ongoing maintenance.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent" />
    </section>
  )
}

function GreenTechnologySection() {
  const services = [
    {
      title: 'Building HVAC',
      description:
        'Design and construction of central air conditioning systems for office buildings, commercial facilities, and large-scale developments.',
      features: [
        'Central chiller plants',
        'Air handling unit design',
        'Building automation systems',
        'Energy recovery ventilation',
      ],
    },
    {
      title: 'Industrial HVAC',
      description:
        'Specialized HVAC systems for factories and R&D facilities requiring precise environmental control for sensitive manufacturing processes.',
      features: [
        'Process cooling systems',
        'Temperature & humidity control',
        'Industrial ventilation',
        'Heat recovery systems',
      ],
    },
    {
      title: 'Clean Room Engineering',
      description:
        'Controlled environments for semiconductor, pharmaceutical, and precision manufacturing — meeting the strictest international cleanliness standards.',
      features: [
        'ISO class 1-8 clean rooms',
        'Laminar flow systems',
        'Contamination control',
        'Pharmaceutical-grade facilities',
      ],
    },
    {
      title: 'Energy-Efficient Solutions',
      description:
        'Advanced heat pump technology and high-efficiency equipment to minimize energy consumption while maximizing system performance.',
      features: [
        'Heat pump technology',
        'Variable flow systems',
        'Smart energy management',
        'Carbon footprint reduction',
      ],
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Business Pillar 1
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Green Technology System
              </h2>
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Creating the optimal environment for people&apos;s lifestyles and for
            manufacturing — designing and constructing HVAC systems for
            people-friendly, comfortable, and productive spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 card-hover"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    {feature}
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

function PaintFinishingSection() {
  const services = [
    {
      title: 'Automotive Paint Lines',
      description:
        'Complete painting systems for automotive manufacturers — from body-in-white preparation to final topcoat application, with top-level global market share.',
      features: [
        'E-coat & primer application',
        'Basecoat / clearcoat systems',
        'Color-matching technology',
        'Automated conveyance systems',
      ],
    },
    {
      title: 'Pre-Treatment Systems',
      description:
        'Chemical and mechanical surface preparation systems ensuring optimal paint adhesion and corrosion protection.',
      features: [
        'Alkaline cleaning',
        'Phosphate coating',
        'Zirconium conversion',
        'Wastewater treatment',
      ],
    },
    {
      title: 'Coating & Drying Ovens',
      description:
        'Precision-engineered ovens and curing systems optimized for uniform heat distribution and energy efficiency.',
      features: [
        'Convection drying ovens',
        'IR/UV curing systems',
        'Temperature uniformity control',
        'VOC abatement systems',
      ],
    },
    {
      title: 'Robotic Spray Systems',
      description:
        'Advanced robotic paint application systems delivering consistent quality, reduced waste, and enhanced operator safety.',
      features: [
        'Multi-axis robot programming',
        'Electrostatic spray technology',
        'Bell cup applicators',
        'Paint circulation systems',
      ],
    },
  ]

  return (
    <section className="py-24 bg-neutral-50 dark:bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-[var(--taikisha-red)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--taikisha-red)]">
                Business Pillar 2
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Paint Finishing System
              </h2>
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            State-of-the-art paint finishing plants with top-level global market
            share — harmonizing high paint quality with environmental impact
            reduction technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 card-hover"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--taikisha-red)] flex-shrink-0" />
                    {feature}
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

function DesignBuildCare() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
            Our Methodology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Design, Build & Care
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Integrated services from initial concept through construction,
            commissioning, and long-term maintenance and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Design',
              description:
                'Expert engineering design leveraging advanced simulation, BIM technology, and decades of domain expertise to create optimal system configurations.',
              items: [
                'Feasibility studies',
                'Engineering design',
                'BIM modeling',
                'Performance simulation',
              ],
            },
            {
              step: '02',
              title: 'Build',
              description:
                'Precision construction and installation with rigorous quality control, safety management, and project coordination.',
              items: [
                'Procurement',
                'Construction management',
                'System installation',
                'Commissioning & testing',
              ],
            },
            {
              step: '03',
              title: 'Care',
              description:
                'Ongoing maintenance, optimization, and technical support to ensure your systems deliver peak performance throughout their lifecycle.',
              items: [
                'Preventive maintenance',
                'System optimization',
                '24/7 technical support',
                'Spare parts supply',
              ],
            },
          ].map((phase) => (
            <div
              key={phase.step}
              className="relative bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 card-hover"
            >
              <span className="text-5xl font-black text-neutral-100 dark:text-neutral-800 absolute top-4 right-6">
                {phase.step}
              </span>
              <h3 className="text-xl font-bold mb-3 relative">{phase.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5 relative">
                {phase.description}
              </p>
              <ul className="space-y-2 relative">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--taikisha-red)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <GreenTechnologySection />
      <PaintFinishingSection />
      <DesignBuildCare />
    </>
  )
}
