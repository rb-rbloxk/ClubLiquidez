'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Users, MessageSquare, Target, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const CopyTradingPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,165,92,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold-champagne/20 mb-8">
              <div className="w-2 h-2 bg-neon-gold-champagne rounded-full animate-pulse" />
              <span className="text-sm text-neon-gold-champagne">Mentorship Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Personal <span className="gradient-text">Trading Mentorship</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              1:1 and group mentorship. We guide you through structured feedback and disciplined thinking — we teach you how to trade, we do not copy trades for you.
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Professional Trading Mentorship. One-to-One trading Mentorship. Live Market Practical Sessions.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              How <span className="gradient-text">Mentorship</span> Works
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Structured guidance. No trade copying. You learn, you decide, you execute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, title: '1:1 Sessions', desc: 'Dedicated time with your mentor for strategy review and feedback' },
              { icon: MessageSquare, title: 'Structured Feedback', desc: 'Clear, actionable feedback on your trades and psychology' },
              { icon: Target, title: 'Goal-Oriented', desc: 'Personalized learning path aligned with your level and goals' },
              { icon: CheckCircle2, title: 'Discipline & Psychology', desc: 'Focus on mindset, risk discipline, and consistency' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-800 rounded-2xl p-6 border border-gray-700"
              >
                <item.icon className="w-10 h-10 text-neon-gold mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                For <span className="gradient-text">whom?</span>
              </h2>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>– Traders who want structured guidance, not signals</li>
                <li>– Working professionals who want to learn with accountability</li>
                <li>– Beginners who want a clear path and feedback</li>
                <li>– Anyone who prefers mentorship over self-study</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why <span className="gradient-text">mentorship?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We do not manage your account or copy trades for you. We teach you how to think, plan, and execute with discipline. Your capital stays in your control; our role is to guide your learning and hold you accountable to your own rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for <span className="gradient-text">Structured Guidance?</span>
          </h2>

          <p className="text-gray-300 text-lg">
            Limited mentorship slots. Book a free session to see if we're a fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Book a Free Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="secondary" size="lg">
                View Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default CopyTradingPage
