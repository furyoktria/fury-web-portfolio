import Link from 'next/link'

const navItems = {
  '/': { name: 'Home' },
  '/about': { name: 'About' },
  '/services': { name: 'Services' },
  '/contact': { name: 'Contact' },
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0a0a0a]/80 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          TBD-Taikisha
        </Link>
        <div className="flex items-center space-x-6">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
