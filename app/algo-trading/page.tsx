'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Code, BarChart3, BookOpen, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AlgoTradingPage() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold/20 mb-8">
              <div className="w-2 h-2 bg-neon-gold rounded-full animate-pulse" />
              <span className="text-sm text-neon-gold">Advanced Strategy & Automation Training</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Advanced Strategy & <span className="gradient-text">Automation Training</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn how algorithms and automated trading systems work. We teach concepts, EA development basics, and MT4/MT5 strategy training — education only. We do not offer execution services or build EAs for you.
            </p>
          </div>
        </div>
      </section>

      {/* What We Teach Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              What We <span className="gradient-text">Teach</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Curriculum focused on understanding how automated systems work — not on providing execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Code, title: 'Trading Automation Concepts', desc: 'How automated systems are designed; logic, risk, and execution flow' },
              { icon: BookOpen, title: 'Expert Advisor (EA) Development Basics', desc: 'Introduction to EA structure, MQL4/MQL5 concepts, and strategy-to-code thinking' },
              { icon: Cpu, title: 'MT4/MT5 Algorithmic Strategy Training', desc: 'Platform-specific strategy design, backtesting, and optimization principles' },
              { icon: BarChart3, title: 'Basics of Automated Trading Systems', desc: 'Risk parameters, position sizing, and testing methodologies' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-800 rounded-2xl p-8 border border-gray-700"
              >
                <div className="w-12 h-12 bg-neon-gold/20 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-neon-gold" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education-Only Notice */}
      <section className="py-16 bg-dark-950 border-y border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Education Only — No Execution Services
          </h2>
          <p className="text-gray-300 leading-relaxed">
            ClubLiquidez provides training in algorithmic and automation concepts. We do not build, deploy, or operate trading systems on your behalf. You learn how algorithms work so you can develop your own approach and execute in your own account.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Learn</span> How Automation Works?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Enroll in our Advanced Program or view the full curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Enroll Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/academy">
              <Button variant="secondary" size="lg">
                View Curriculum
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
