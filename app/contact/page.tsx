import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with TBD-Taikisha for your engineering project needs.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Have a project in mind? Reach out to our team and we&apos;ll get
            back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1">Office Address</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Jakarta, Indonesia
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  info@tbd-taikisha.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  +62 21 XXXX XXXX
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Monday - Friday: 08:00 - 17:00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
