import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with TBD-Taikisha Indonesia — general inquiries, business development, and career opportunities.',
}

function PageHero() {
  return (
    <section className="relative overflow-hidden hero-gradient text-white py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-300 mb-4 animate-fade-in">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Let&apos;s Build
            <br />
            Something Great
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Have a project in mind? Our team is ready to help. Reach out
            through the channel that best fits your needs.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent" />
    </section>
  )
}

function ContactChannels() {
  const channels = [
    {
      title: 'General Inquiries',
      description:
        'For general questions about TBD-Taikisha, our services, or partnership opportunities.',
      email: 'info@tbd-taikisha.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      title: 'Business Development',
      description:
        'For project proposals, RFQs, technical consultations, and new business opportunities.',
      email: 'business@tbd-taikisha.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      title: 'Careers',
      description:
        'Interested in joining our team? We are always looking for talented engineers and professionals.',
      email: 'careers@tbd-taikisha.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 card-hover text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--taikisha-red-50)] dark:bg-[var(--taikisha-red)]/10 flex items-center justify-center text-[var(--taikisha-red)] mx-auto mb-5">
                {channel.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {channel.description}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="text-sm font-semibold text-[var(--taikisha-red)] hover:underline"
              >
                {channel.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
              Fill out the form below and our team will respond within 24
              business hours.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--taikisha-red)] focus:border-transparent transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--taikisha-red)] focus:border-transparent transition-shadow"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--taikisha-red)] focus:border-transparent transition-shadow"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--taikisha-red)] focus:border-transparent transition-shadow"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--taikisha-red)] focus:border-transparent transition-shadow"
                >
                  <option value="">Select a subject</option>
                  <option value="green-tech">Green Technology System</option>
                  <option value="paint-finishing">Paint Finishing System</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="careers">Career Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--taikisha-red)] focus:border-transparent resize-none transition-shadow"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Office Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-2">Our Office</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
              Visit us or reach out directly.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-500 mb-2">
                  Address
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Jakarta, Indonesia
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-500 mb-2">
                  Phone
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  +62 21 XXXX XXXX
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-500 mb-2">
                  Business Hours
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Monday - Friday
                  <br />
                  08:00 - 17:00 WIB
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-64 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
              <span className="text-neutral-400 text-sm">[Map Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactChannels />
      <ContactForm />
    </>
  )
}
