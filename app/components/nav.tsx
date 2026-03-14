'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/sustainability', name: 'Sustainability' },
  { path: '/contact', name: 'Contact' },
]

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span
        className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
          open ? 'rotate-45 translate-y-[9px]' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
          open ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
          open ? '-rotate-45 -translate-y-[9px]' : ''
        }`}
      />
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-[#0a0a0a]/90 red-accent-bottom">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-[var(--taikisha-red)] flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-105">
            T
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight leading-none">
              TBD-Taikisha
            </span>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 tracking-widest uppercase leading-none mt-0.5">
              Indonesia
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-sm font-medium text-neutral-600 hover:text-[var(--taikisha-red)] dark:text-neutral-400 dark:hover:text-[var(--taikisha-red-light)] transition-colors px-4 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 text-sm font-semibold bg-[var(--taikisha-red)] text-white px-5 py-2 rounded-lg hover:bg-[var(--taikisha-red-dark)] transition-all hover:shadow-lg hover:shadow-red-500/20"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-neutral-700 dark:text-neutral-300"
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-1 border-t border-neutral-200 dark:border-neutral-800 pt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[var(--taikisha-red)] py-2.5 px-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold bg-[var(--taikisha-red)] text-white text-center py-2.5 px-3 rounded-lg mt-3 hover:bg-[var(--taikisha-red-dark)] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
