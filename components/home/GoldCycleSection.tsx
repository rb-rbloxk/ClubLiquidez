'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, TrendingUp, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const GoldCycleSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cycleMonths = [
    { month: 'Jan', value: 45, color: 'bg-neon-gold/35' },
    { month: 'Feb', value: 95, color: 'bg-neon-gold', highlight: true },
    { month: 'Mar', value: 65, color: 'bg-neon-gold-champagne/45' },
    { month: 'Apr', value: 50, color: 'bg-neon-gold/35' },
    { month: 'May', value: 40, color: 'bg-neon-gold-dark/35' },
    { month: 'Jun', value: 35, color: 'bg-neon-gold-dark/22' },
    { month: 'Jul', value: 30, color: 'bg-neon-gold-dark/22' },
    { month: 'Aug', value: 35, color: 'bg-neon-gold-dark/35' },
    { month: 'Sep', value: 40, color: 'bg-neon-gold/35' },
    { month: 'Oct', value: 50, color: 'bg-neon-gold-champagne/45' },
    { month: 'Nov', value: 60, color: 'bg-neon-gold-champagne/50' },
    { month: 'Dec', value: 70, color: 'bg-neon-gold/45' },
  ]

  return (
    <section className="py-24 md:py-28 bg-dark-950 relative overflow-hidden border-y border-slate-200/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(212,175,55,0.08),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-slate-700">Curriculum lens · seasonality</span>
          </div>

          <h2 className="font-spectral text-4xl sm:text-5xl font-semibold text-slate-900 mb-4">
            Gold rewards students who <span className="gradient-text">respect calendars</span>
          </h2>

          <p className="text-lg text-slate-600 mb-3">
            Seasonality isn&apos;t a crystal ball—it&apos;s context. We teach how to layer macro catalysts, liquidity
            windows, and volatility regimes so you&apos;re not guessing when headlines hit.
          </p>
          <p className="text-sm text-slate-500">
            Illustrative exercise below—bars show how we discuss relative emphasis by month in class, not a promise of
            returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="font-spectral text-xl font-semibold text-slate-900 mb-1">Teaching calendar heatmap</h3>
              <p className="text-slate-500 text-sm">Relative weight we assign to seasonal study blocks</p>
            </div>

            <div className="space-y-3">
              {cycleMonths.map((item, index) => (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.04 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-11 text-sm font-medium text-slate-500">{item.month}</div>
                  <div className="flex-1 relative h-8 bg-dark-700 rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.value}%` } : {}}
                      transition={{ duration: 0.85, delay: 0.05 * index }}
                      className={`h-full ${item.color} ${
                        item.highlight ? 'ring-2 ring-neon-gold ring-offset-2 ring-offset-white' : ''
                      } rounded-lg flex items-center justify-end pr-2`}
                    >
                      {item.highlight && <span className="text-xs font-bold text-brand-midnight">{item.value}%</span>}
                    </motion.div>
                  </div>
                  {!item.highlight && <div className="w-14 text-right text-sm text-slate-500">{item.value}%</div>}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-brand-mist/80 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-2 text-brand-gold-dark mb-3">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold text-sm">February spotlight</span>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Historically volatile month—we unpack why in lecture, then rehearse risk responses in lab.
              </p>
              <Link href="/programs">
                <Button variant="primary" size="md" className="w-full group">
                  View gold programs
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-neon-gold/15 rounded-xl border border-neon-gold/25">
                  <BookOpen className="w-6 h-6 text-neon-gold" />
                </div>
                <h3 className="font-spectral text-lg font-semibold text-slate-900">Macro context class</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rates, real yields, USD strength—we map how each channel historically interacts with bullion so you can
                ask better questions when headlines drop.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-neon-gold-champagne/15 rounded-xl border border-neon-gold-champagne/25">
                  <TrendingUp className="w-6 h-6 text-neon-gold-champagne" />
                </div>
                <h3 className="font-spectral text-lg font-semibold text-slate-900">Live rehearsal</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Students run scenarios: widening spreads, gap opens, overlap volatility—before capital is on the line.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 to-brand-gold-deep/5 p-6">
              <h4 className="font-spectral font-semibold text-slate-900 mb-3">Program snapshot</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• 6 guided modules + bonus macro labs</li>
                <li>• Weekly mentor hours</li>
                <li>• Trading journal rubric we actually review</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GoldCycleSection
