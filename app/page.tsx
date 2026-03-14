import Link from 'next/link'

/* ============================================
   Hero Section
   ============================================ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient text-white min-h-[90vh] flex items-center">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--taikisha-red)] rounded-full opacity-10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--taikisha-blue)] rounded-full opacity-10 blur-3xl animate-pulse-slow delay-200" />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[var(--taikisha-red)] animate-pulse" />
            <span className="text-sm text-white/80">
              Part of Taikisha Group — 110+ Years of Engineering Heritage
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
            Engineering Excellence
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--taikisha-red-light)] to-[var(--taikisha-red)]">
              for Indonesia&apos;s Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
            We design, build, and maintain world-class environmental systems and
            paint finishing plants — combining Japanese precision with deep
            Indonesian expertise.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <Link href="/services" className="btn-primary">
              Explore Our Solutions
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent" />
    </section>
  )
}

/* ============================================
   Trust Bar — Certifications
   ============================================ */
function TrustBar() {
  const certifications = [
    { label: 'ISO 9001:2015', desc: 'Quality Management' },
    { label: 'ISO 14001:2015', desc: 'Environmental Management' },
    { label: 'SBTi Certified', desc: 'Science Based Targets' },
    { label: 'OHSAS 18001', desc: 'Health & Safety' },
    { label: 'TCFD Supporter', desc: 'Climate Disclosure' },
  ]

  return (
    <section className="py-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Certified by
          </span>
          {certifications.map((cert) => (
            <div key={cert.label} className="flex items-center gap-2 group">
              <div className="w-2 h-2 rounded-full bg-[var(--taikisha-green)] opacity-60 group-hover:opacity-100 transition-opacity" />
              <div>
                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  {cert.label}
                </p>
                <p className="text-[10px] text-neutral-400 hidden md:block">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Stats Section
   ============================================ */
function StatsSection() {
  const stats = [
    { value: '110+', label: 'Years of Heritage', suffix: '' },
    { value: '50+', label: 'Countries Globally', suffix: '' },
    { value: '5,200+', label: 'Employees Worldwide', suffix: '' },
    { value: '2', label: 'Core Business Pillars', suffix: '' },
  ]

  return (
    <section className="py-20 bg-neutral-50 dark:bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
            Our Global Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trusted Worldwide
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] card-hover"
            >
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Business Pillars
   ============================================ */
function BusinessPillars() {
  const pillars = [
    {
      title: 'Green Technology System',
      subtitle: 'Environmental Engineering',
      description:
        'Comprehensive HVAC, clean room, and environmental control solutions for factories, data centers, and commercial buildings — creating the optimal environment for people and manufacturing.',
      features: [
        'Building HVAC Systems',
        'Industrial HVAC & Ventilation',
        'Clean Room Engineering',
        'Energy-Efficient Solutions',
        'Vege-Factory Systems',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      color: 'var(--taikisha-green)',
    },
    {
      title: 'Paint Finishing System',
      subtitle: 'Industrial Paint Technology',
      description:
        'State-of-the-art automotive and industrial paint finishing lines with top-level global market share — harmonizing superior paint quality with environmental impact reduction.',
      features: [
        'Automotive Paint Lines',
        'Pre-Treatment Systems',
        'Coating & Drying Ovens',
        'Robotic Spray Systems',
        'Dry-Type Paint Booths',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      color: 'var(--taikisha-red)',
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Two Pillars of Engineering Excellence
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A unique combination of environmental engineering and paint
            finishing expertise — leveraging synergies to deliver unmatched
            industrial solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-10 card-hover"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                style={{ backgroundColor: pillar.color }}
              />

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: `color-mix(in srgb, ${pillar.color} 12%, transparent)`,
                  color: pillar.color,
                }}
              >
                {pillar.icon}
              </div>

              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: pillar.color }}
              >
                {pillar.subtitle}
              </p>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {pillar.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {pillar.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: pillar.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: pillar.color }}
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Why Choose Us
   ============================================ */
function WhyChooseUs() {
  const reasons = [
    {
      title: 'Japanese Engineering Heritage',
      description:
        'Backed by Taikisha Group — 110+ years of precision engineering, trusted by leading manufacturers worldwide.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
    },
    {
      title: 'Local Expertise & Presence',
      description:
        'Deep understanding of Indonesian industry, regulations, and market needs — with a dedicated local team.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: 'Sustainable Solutions',
      description:
        'SBTi-certified targets, carbon neutrality commitment, and green technologies that protect both business and planet.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864a4.5 4.5 0 010 6.836.75.75 0 01-.405.864v.568a.75.75 0 01-1.5 0v-.568a.75.75 0 01-.405-.864 4.5 4.5 0 010-6.836.75.75 0 01.405-.864V3.03zM18.364 5.636a.75.75 0 010 1.06 7.5 7.5 0 010 10.607.75.75 0 11-1.06-1.06 6 6 0 000-8.486.75.75 0 011.06-1.06v-.061zM5.636 5.636a.75.75 0 011.06 1.06 6 6 0 000 8.486.75.75 0 11-1.06 1.06 7.5 7.5 0 010-10.607z" />
        </svg>
      ),
    },
    {
      title: 'Design, Build & Care',
      description:
        'End-to-end service from concept and design through construction, commissioning, and ongoing maintenance.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.169a1.5 1.5 0 01-2.145-1.578l1.028-5.998-4.357-4.247a1.5 1.5 0 01.832-2.559l6.025-.876 2.693-5.46a1.5 1.5 0 012.696 0l2.693 5.46 6.025.876a1.5 1.5 0 01.832 2.559l-4.357 4.247 1.028 5.998a1.5 1.5 0 01-2.145 1.578L12 15.17l-.58.342z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-neutral-50 dark:bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
            Why TBD-Taikisha
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The Advantage of Choosing Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--taikisha-red-50)] dark:bg-[var(--taikisha-red)]/10 flex items-center justify-center text-[var(--taikisha-red)] flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Sustainability Highlight
   ============================================ */
function SustainabilityHighlight() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white">
      <div className="absolute inset-0 dot-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Sustainability
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Be Engineering for a
              <br />
              Sustainable Society
            </h2>
            <p className="text-emerald-100/80 leading-relaxed mb-6">
              We are committed to realizing a carbon-neutral future through
              innovative engineering. Our technologies in energy, air, and water
              control help industries reduce their environmental footprint while
              maintaining peak performance.
            </p>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 bg-white text-emerald-900 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Our Sustainability Commitment
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🌱', label: 'Carbon Neutrality', desc: 'Committed to net-zero operations' },
              { icon: '⚡', label: 'Energy Efficiency', desc: 'Heat pump & high-efficiency systems' },
              { icon: '💧', label: 'Water Conservation', desc: 'Advanced water recycling technology' },
              { icon: '♻️', label: 'Waste Reduction', desc: 'Dry-type paint booth innovation' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                <p className="text-xs text-emerald-200/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   News Section
   ============================================ */
function NewsSection() {
  const news = [
    {
      date: 'March 2026',
      title: 'TBD-Taikisha Expands Operations in West Java',
      category: 'Company News',
    },
    {
      date: 'February 2026',
      title: 'New Paint Finishing Technology Reduces VOC Emissions by 40%',
      category: 'Innovation',
    },
    {
      date: 'January 2026',
      title: 'Partnership with Leading Automotive Manufacturer Announced',
      category: 'Business',
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
              Latest Updates
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              News & Insights
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden card-hover"
            >
              {/* Placeholder image */}
              <div className="h-48 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                <span className="text-neutral-400 text-xs">[Image]</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[var(--taikisha-red)] bg-[var(--taikisha-red-50)] dark:bg-[var(--taikisha-red)]/10 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-neutral-500">{item.date}</span>
                </div>
                <h3 className="font-semibold leading-snug group-hover:text-[var(--taikisha-red)] transition-colors">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   CTA Section
   ============================================ */
function CTASection() {
  return (
    <section className="relative overflow-hidden hero-gradient-red text-white py-24">
      <div className="absolute inset-0 grid-pattern" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to Transform
          <br />
          Your Operations?
        </h2>
        <p className="text-red-100/80 max-w-xl mx-auto mb-10 text-lg">
          Partner with TBD-Taikisha for reliable, high-quality engineering
          solutions backed by 110+ years of global expertise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--taikisha-red-dark)] font-semibold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors"
          >
            Start a Conversation
          </Link>
          <Link
            href="/services"
            className="btn-secondary"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   Page
   ============================================ */
export default function Page() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <BusinessPillars />
      <WhyChooseUs />
      <SustainabilityHighlight />
      <NewsSection />
      <CTASection />
    </>
  )
}
