'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'
import { Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

function ResetPasswordForm() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isValidLink, setIsValidLink] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if we have the required tokens in the URL
    const code = searchParams.get('code')
    if (!code) {
      toast.error('Invalid reset link. Please request a new password reset.')
      setTimeout(() => router.push('/auth'), 2000)
    } else {
      setIsValidLink(true)
    }
  }, [searchParams, router])

  const validatePassword = (pwd: string): string | null => {
    if (pwd.length < 8) {
      return 'Password must be at least 8 characters long'
    }
    if (!/[A-Z]/.test(pwd)) {
      return 'Password must contain at least one uppercase letter'
    }
    if (!/[a-z]/.test(pwd)) {
      return 'Password must contain at least one lowercase letter'
    }
    if (!/[0-9]/.test(pwd)) {
      return 'Password must contain at least one number'
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      return 'Password must contain at least one special character'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate passwords
      const passwordError = validatePassword(password)
      if (passwordError) {
        toast.error(passwordError)
        setIsSubmitting(false)
        return
      }

      if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        setIsSubmitting(false)
        return
      }

      // Get the code from URL
      const code = searchParams.get('code')
      if (!code) {
        toast.error('Invalid reset link')
        setIsSubmitting(false)
        return
      }

      // Update password using Supabase
      const supabase = createClient()
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) {
        toast.error(error.message || 'Failed to reset password')
        setIsSubmitting(false)
        return
      }

      setIsSuccess(true)
      toast.success('Password reset successfully! Redirecting to sign in...')

      // Redirect to auth page after 2 seconds
      setTimeout(() => {
        router.push('/auth')
      }, 2000)
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : 'An unexpected error occurred')
      setIsSubmitting(false)
    }
  }

  if (!isValidLink) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <section className="pt-32 pb-16 bg-white border-b border-neutral-200">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 text-center shadow-sm"
            >
              <h2 className="text-2xl font-bold text-black mb-2">Invalid Reset Link</h2>
              <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                This password reset link is invalid or has expired. Please request a new one.
              </p>
              <Button
                onClick={() => router.push('/auth')}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Back to Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <section className="pt-32 pb-16 bg-white border-b border-neutral-200">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 text-center shadow-sm"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Password Reset Successful!</h2>
              <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                Your password has been updated. You can now sign in with your new password.
              </p>
              <Button
                onClick={() => router.push('/auth')}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Go to Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Lock className="w-8 h-8 text-[#b89428]" />
              <h1 className="text-5xl lg:text-6xl font-bold text-black">
                Reset Your <span className="text-[#b89428]">Password</span>
              </h1>
            </div>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Enter your new password below. Make sure it&apos;s strong and secure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reset Form */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-white border border-neutral-300 rounded-xl text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-sm font-medium"
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-black"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="mt-2 text-xs text-neutral-500 font-medium">
                  Must be at least 8 characters with uppercase, lowercase, number, and special character
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-white border border-neutral-300 rounded-xl text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-sm font-medium"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-black"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isSubmitting}
              >
                {isSubmitting ? 'Resetting...' : 'Reset Password'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <button
                type="button"
                onClick={() => router.push('/auth')}
                className="w-full text-center text-[#b89428] hover:underline font-bold text-sm"
              >
                Back to Sign In
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </main>
    }>
      <ResetPasswordForm />
    </Suspense>
  )
}

