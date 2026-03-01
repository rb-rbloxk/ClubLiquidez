/**
 * Supabase session middleware.
 * Disabled when using `output: 'export'` (static export) because middleware
 * is not supported in static export. Auth is enforced client-side on protected
 * routes (e.g. AuthContext redirect in admin, profile).
 * To use this middleware, remove `output: 'export'` from next.config.js and
 * deploy to a Node server (e.g. Vercel).
 */
import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
