'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Users, MessageSquare, Target, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const CopyTradingPage = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-white border-b border-neutral-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200 mb-8">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-sm text-neutral-800 font-medium">Mentorship Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Personal <span className="text-[#b89428]">Trading Mentorship</span>
            </h1>

            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-4 leading-relaxed">
              1:1 and group mentorship. We guide you through structured feedback and disciplined thinking — we teach you how to trade, we do not copy trades for you.
            </p>

            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Professional Trading Mentorship. One-to-One trading Mentorship. Live Market Practical Sessions.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              How <span className="text-[#b89428]">Mentorship</span> Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
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
                className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
              >
                <item.icon className="w-10 h-10 text-[#b89428] mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                For <span className="text-[#b89428]">whom?</span>
              </h2>
              <ul className="space-y-3 text-neutral-700 text-lg">
                <li>– Traders who want structured guidance, not signals</li>
                <li>– Working professionals who want to learn with accountability</li>
                <li>– Beginners who want a clear path and feedback</li>
                <li>– Anyone who prefers mentorship over self-study</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Why <span className="text-[#b89428]">mentorship?</span>
              </h2>
              <p className="text-neutral-700 text-lg leading-relaxed">
                We do not manage your account or copy trades for you. We teach you how to think, plan, and execute with discipline. Your capital stays in your control; our role is to guide your learning and hold you accountable to your own rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Ready for <span className="text-[#b89428]">Structured Guidance?</span>
          </h2>

          <p className="text-neutral-700 text-lg">
            Limited mentorship slots. Book a free session to see if we&apos;re a fit.
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
