export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#111]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">TBD-Taikisha</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Engineering excellence for a sustainable future.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <a href="/about" className="hover:text-black dark:hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-black dark:hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>info@tbd-taikisha.com</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} TBD-Taikisha. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
