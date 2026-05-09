import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark-950 flex flex-col items-center justify-center px-4">
      <h1 className="font-spectral text-4xl font-semibold text-slate-900 mb-2">Page not found</h1>
      <p className="text-slate-600 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has moved.
      </p>
      <Link href="/" className="text-brand-gold-dark font-medium hover:underline">
        Return home
      </Link>
    </main>
  )
}
