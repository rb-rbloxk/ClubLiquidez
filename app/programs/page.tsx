'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import {
  GraduationCap,
  TrendingUp,
  BookOpen,
  Calendar,
  Video,
  MapPin,
  ArrowRight,
} from 'lucide-react'

const programs = [
  {
    id: 'beginner',
    title: 'Beginner Program',
    icon: GraduationCap,
    description: 'Start from the basics: Forex market structure, terminology, and introduction to price action. Ideal for anyone new to trading.',
    cta: 'Enroll',
    href: '/contact',
    color: 'neon-gold',
  },
  {
    id: 'advanced',
    title: 'Advanced Program',
    icon: TrendingUp,
    description: 'In-depth strategy, institutional concepts, ICT, Smart Money, and advanced risk management. For those who have completed the basics.',
    cta: 'Inquire',
    href: '/contact',
    color: 'neon-gold-champagne',
  },
  {
    id: 'market',
    title: 'Market Specialist Program',
    icon: BookOpen,
    description: 'Focused on the market: price action, key levels, session-based behavior, and market-specific risk parameters.',
    cta: 'Enroll',
    href: '/contact',
    color: 'neon-gold-dark',
  },
  {
    id: 'weekend',
    title: 'Weekend Batch',
    icon: Calendar,
    description: 'Designed for working professionals. Live sessions on weekends so you can learn without compromising your schedule.',
    cta: 'Join Next Batch',
    href: '/contact',
    color: 'neon-amber',
  },
  {
    id: 'online',
    title: 'Online Live Batch',
    icon: Video,
    description: 'Live online sessions with limited seats. Interactive training, Q&A, and mentorship. Join from anywhere.',
    cta: 'Enroll',
    href: '/contact',
    color: 'neon-gold',
  },
  {
    id: 'offline',
    title: 'Offline Classroom Batch',
    icon: MapPin,
    description: 'In-person classes in Kanchipuram, Tamil Nadu. Face-to-face learning, hands-on practice, and direct access to educators.',
    cta: 'Inquire',
    href: '/contact',
    color: 'neon-gold-champagne',
  },
]

export default function ProgramsPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 bg-white border-b border-neutral-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200 mb-8">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-sm text-neutral-800 font-medium">Programs &amp; Batches</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Our <span className="text-[#b89428]">Programs</span>
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Beginner to advanced. Weekend, online live, and offline classroom batches. Limited seats per batch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6 hover:border-brand-gold transition-all duration-300 flex flex-col shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-neutral-100 border border-neutral-200">
                  <program.icon className="w-6 h-6 text-[#b89428]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{program.title}</h3>
                <p className="text-neutral-600 flex-1 mb-6">{program.description}</p>
                <Link href={program.href}>
                  <Button variant="primary" size="md" className="w-full group">
                    {program.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-700 text-lg mb-6">
            Not sure which program fits? Book a free session and we&apos;ll help you choose.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="group">
              Book a Free Session
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
