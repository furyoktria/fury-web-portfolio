import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about TBD-Taikisha — our history, values, and commitment to engineering excellence.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Engineering a Better Tomorrow
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            TBD-Taikisha combines decades of Japanese engineering heritage with
            deep local expertise to deliver world-class industrial solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              Founded as a joint venture combining Taikisha&apos;s global engineering
              prowess with local industry knowledge, TBD-Taikisha has grown into
              a trusted partner for leading manufacturers across the region.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              From our early projects in automotive paint finishing to our
              current portfolio spanning environmental systems and industrial
              infrastructure, we have consistently delivered projects that
              exceed expectations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'Quality First',
                  desc: 'Every project meets the highest Japanese engineering standards.',
                },
                {
                  title: 'Innovation',
                  desc: 'We continuously adopt new technologies to improve efficiency and sustainability.',
                },
                {
                  title: 'Safety',
                  desc: 'Zero-compromise approach to workplace and environmental safety.',
                },
                {
                  title: 'Partnership',
                  desc: 'We build lasting relationships with clients, delivering value beyond the contract.',
                },
              ].map((item) => (
                <li key={item.title}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
