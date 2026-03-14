import Link from 'next/link'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 relative">
        <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
          Engineering Excellence
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-3xl">
          Building the Future of Industrial Engineering
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 leading-relaxed">
          TBD-Taikisha delivers world-class solutions in environmental systems,
          paint finishing technology, and industrial infrastructure across
          Southeast Asia.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: '25+', label: 'Years of Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100+', label: 'Industry Partners' },
    { value: '10+', label: 'Countries Served' },
  ]

  return (
    <section className="bg-neutral-50 dark:bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              {stat.value}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServicesPreview() {
  const services = [
    {
      title: 'Environmental Systems',
      description:
        'HVAC, clean room, and environmental control solutions for factories and commercial buildings.',
      icon: '🏗️',
    },
    {
      title: 'Paint Finishing Systems',
      description:
        'Automotive and industrial paint finishing lines with cutting-edge technology and efficiency.',
      icon: '🎨',
    },
    {
      title: 'Industrial Infrastructure',
      description:
        'Comprehensive engineering and construction for industrial facilities and manufacturing plants.',
      icon: '⚙️',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
          What We Do
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          We provide integrated engineering solutions that combine Japanese
          precision with local expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-blue-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-blue-200 max-w-xl mx-auto mb-8">
          Partner with TBD-Taikisha for reliable, high-quality engineering
          solutions tailored to your needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
    </>
  )
}
