import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about TBD-Taikisha Indonesia — our heritage, vision, values, and commitment to engineering excellence across Southeast Asia.',
}

function PageHero() {
  return (
    <section className="relative overflow-hidden hero-gradient text-white py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-300 mb-4 animate-fade-in">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Engineering a Better
            <br />
            Tomorrow for Indonesia
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Combining Taikisha&apos;s 110+ years of global engineering heritage with
            deep local expertise to deliver world-class industrial solutions
            across Indonesia.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent" />
    </section>
  )
}

function CompanyStory() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
              Our Story
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              From Global Heritage to Local Excellence
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                TBD-Taikisha Indonesia is part of the Taikisha Group, a
                global engineering company founded in 1913 in Japan. With
                over a century of expertise in environmental systems and
                paint finishing technology, Taikisha has grown into a
                trusted partner for leading manufacturers in 50+ countries.
              </p>
              <p>
                Our Indonesian presence combines this deep global heritage
                with intimate knowledge of local industry, regulations, and
                market dynamics. We serve Indonesia&apos;s automotive,
                manufacturing, pharmaceutical, and commercial sectors with
                the same world-class standards that have earned Taikisha
                top-level global market share in paint finishing systems.
              </p>
              <p>
                Today, we continue to innovate — advancing our core
                technologies in energy, air, and water control to help
                Indonesian industries achieve operational excellence while
                building a sustainable future.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
              Milestones
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Our Journey
            </h2>
            <div className="space-y-6">
              {[
                {
                  year: '1913',
                  title: 'Taikisha Founded',
                  desc: 'Established in Japan as a pioneer in environmental engineering.',
                },
                {
                  year: '1971',
                  title: 'First Overseas Expansion',
                  desc: 'Taikisha establishes its first overseas subsidiary in Thailand.',
                },
                {
                  year: '1973',
                  title: 'Renamed to Taikisha',
                  desc: '"Taiki" (atmosphere) — reflecting commitment to clean air and environmental control.',
                },
                {
                  year: '1990s',
                  title: 'Indonesia Operations',
                  desc: 'Taikisha establishes presence in Indonesia, serving the growing automotive and manufacturing sectors.',
                },
                {
                  year: 'Today',
                  title: 'TBD-Taikisha Indonesia',
                  desc: 'Full-service engineering partner for Indonesian industries, backed by 50+ country global network.',
                },
              ].map((milestone, i) => (
                <div key={milestone.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--taikisha-red)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {milestone.year.slice(-2)}
                    </div>
                    {i < 4 && (
                      <div className="w-px h-full bg-neutral-200 dark:bg-neutral-800 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-xs font-semibold text-[var(--taikisha-red)] mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-semibold mb-1">{milestone.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VisionMission() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
            Our Purpose
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-10 red-accent-top">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-2xl font-semibold gradient-text mb-4">
              &ldquo;Be Engineering&rdquo;
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Becoming a Global Engineering Company Supporting Sustainable
              Industrial Innovation — using technologies refined over a
              century to control energy, air, and water for the ultimate
              manufacturing and living environments.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-10 red-accent-top">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-2xl font-semibold gradient-text mb-4">
              &ldquo;Customers First&rdquo;
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Establish a company which can continuously grow and contribute
              to society. Establish an attractive company where innovation,
              integrity, and partnership drive every project we undertake.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold">Our Core Values</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Quality First',
              desc: 'Every project meets the highest Japanese engineering standards — no compromises.',
              icon: '🎯',
            },
            {
              title: 'Innovation',
              desc: 'Continuously adopting new technologies to improve efficiency and sustainability.',
              icon: '💡',
            },
            {
              title: 'Safety',
              desc: 'Zero-compromise approach to workplace and environmental safety on every site.',
              icon: '🛡️',
            },
            {
              title: 'Partnership',
              desc: 'Building lasting relationships with clients, delivering value beyond the contract.',
              icon: '🤝',
            },
          ].map((value) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 card-hover"
            >
              <span className="text-3xl mb-4 block">{value.icon}</span>
              <h4 className="font-semibold mb-2">{value.title}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GlobalNetwork() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--taikisha-red)] mb-3">
          Global Reach
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Part of a Worldwide Network
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
          Taikisha holds the highest ratio of overseas sales in the Japanese
          construction industry, with offices in 24 countries and operations
          spanning 50+ nations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { region: 'Japan', role: 'Global Headquarters' },
            { region: 'Southeast Asia', role: 'Key Growth Market' },
            { region: 'North America', role: 'Major Operations' },
            { region: 'Europe', role: 'Engineering Hub' },
          ].map((item) => (
            <div
              key={item.region}
              className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800"
            >
              <h4 className="font-semibold mb-1">{item.region}</h4>
              <p className="text-xs text-neutral-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <CompanyStory />
      <VisionMission />
      <GlobalNetwork />
    </>
  )
}
