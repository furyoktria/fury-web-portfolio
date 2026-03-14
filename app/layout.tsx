import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'TBD-Taikisha Indonesia | Engineering Excellence',
    template: '%s | TBD-Taikisha Indonesia',
  },
  description:
    'TBD-Taikisha Indonesia — World-class engineering solutions for environmental systems, paint finishing, and industrial infrastructure. Part of Taikisha Group with 110+ years of heritage.',
  openGraph: {
    title: 'TBD-Taikisha Indonesia',
    description:
      'World-class engineering solutions for environmental systems, paint finishing, and industrial infrastructure.',
    url: baseUrl,
    siteName: 'TBD-Taikisha Indonesia',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#0a0a0a]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
