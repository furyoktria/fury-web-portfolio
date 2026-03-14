import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[var(--taikisha-red-50)] dark:bg-[var(--taikisha-red)]/10 flex items-center justify-center mb-6">
        <span className="text-3xl font-bold text-[var(--taikisha-red)]">!</span>
      </div>
      <h1 className="text-7xl font-bold text-neutral-200 dark:text-neutral-800 mb-4">
        404
      </h1>
      <p className="text-xl font-semibold mb-2">Page Not Found</p>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </section>
  )
}
