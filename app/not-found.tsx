import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-6xl font-bold text-neutral-300 dark:text-neutral-700 mb-4">
        404
      </h1>
      <p className="text-xl font-semibold mb-2">Page Not Found</p>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </section>
  )
}
