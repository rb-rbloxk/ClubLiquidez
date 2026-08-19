import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-black mb-3">Page not found</h1>
      <p className="text-neutral-700 mb-8 text-center max-w-md leading-relaxed text-base">
        The page you are looking for does not exist or has moved.
      </p>
      <Link href="/" className="text-[#b89428] font-bold hover:underline">
        Return home
      </Link>
    </main>
  )
}
