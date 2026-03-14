import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="red-accent-top bg-neutral-50 dark:bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-[var(--taikisha-red)] flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <div>
                <p className="font-bold leading-none">TBD-Taikisha</p>
                <p className="text-[10px] text-neutral-500 tracking-widest uppercase">
                  Indonesia
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              Engineering excellence for Indonesia&apos;s future. A proud member
              of the Taikisha Group — over 110 years of global engineering
              heritage.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-600">
              Member of{' '}
              <a
                href="https://www.taikisha-group.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--taikisha-red)] transition-colors underline"
              >
                Taikisha Ltd. (TSE: 1979)
              </a>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-900 dark:text-neutral-100">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/sustainability', label: 'Sustainability' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[var(--taikisha-red)] dark:hover:text-[var(--taikisha-red-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business Divisions */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-900 dark:text-neutral-100">
              Business Divisions
            </h4>
            <ul className="space-y-2.5">
              {[
                'Green Technology System',
                'Paint Finishing System',
                'Building HVAC',
                'Industrial HVAC',
                'Clean Room Engineering',
                'Automotive Paint Lines',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[var(--taikisha-red)] dark:hover:text-[var(--taikisha-red-light)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-900 dark:text-neutral-100">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-200 mb-1">
                  Office
                </p>
                <p>Jakarta, Indonesia</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-200 mb-1">
                  General Inquiries
                </p>
                <p>info@tbd-taikisha.com</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-200 mb-1">
                  Business Development
                </p>
                <p>business@tbd-taikisha.com</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-200 mb-1">
                  Phone
                </p>
                <p>+62 21 XXXX XXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-6 justify-center mb-8">
            {['ISO 9001:2015', 'ISO 14001:2015', 'SBTi Certified', 'OHSAS 18001'].map(
              (cert) => (
                <span
                  key={cert}
                  className="text-xs font-medium text-neutral-500 dark:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded-full px-4 py-1.5"
                >
                  {cert}
                </span>
              )
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} PT TBD-Taikisha Indonesia. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <a href="#" className="hover:text-[var(--taikisha-red)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[var(--taikisha-red)] transition-colors">
              Terms of Use
            </a>
            <a
              href="https://www.taikisha-group.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--taikisha-red)] transition-colors"
            >
              Taikisha Group
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
