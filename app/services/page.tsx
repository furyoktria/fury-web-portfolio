import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore TBD-Taikisha engineering services — environmental systems, paint finishing, and industrial infrastructure.',
}

const services = [
  {
    title: 'Environmental Systems',
    description:
      'Comprehensive HVAC, clean room, and environmental control solutions designed for optimal performance in factories, data centers, and commercial buildings.',
    features: [
      'Central air conditioning systems',
      'Clean room engineering',
      'Industrial ventilation',
      'Energy-efficient solutions',
    ],
  },
  {
    title: 'Paint Finishing Systems',
    description:
      'State-of-the-art automotive and industrial paint finishing lines that deliver superior quality, reduce waste, and maximize throughput.',
    features: [
      'Automotive paint lines',
      'Pre-treatment systems',
      'Coating and drying ovens',
      'Robotic spray systems',
    ],
  },
  {
    title: 'Industrial Infrastructure',
    description:
      'End-to-end engineering and construction services for industrial facilities, from planning and design through construction and commissioning.',
    features: [
      'Plant construction',
      'Facility upgrades',
      'Mechanical & electrical works',
      'Project management',
    ],
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing maintenance, optimization, and technical support services to keep your systems running at peak performance.',
    features: [
      'Preventive maintenance programs',
      'System optimization',
      '24/7 technical support',
      'Spare parts supply',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Integrated Engineering Solutions
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            From concept to completion, we provide comprehensive engineering
            services backed by decades of global expertise.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? 'md:direction-rtl' : ''
              }`}
            >
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`bg-neutral-100 dark:bg-neutral-900 rounded-xl h-64 flex items-center justify-center ${
                  i % 2 !== 0 ? 'md:order-1' : ''
                }`}
              >
                <span className="text-neutral-400 text-sm">
                  [{service.title} Image]
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
