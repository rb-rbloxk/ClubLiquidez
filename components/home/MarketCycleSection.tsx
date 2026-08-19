'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, TrendingUp, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const MarketCycleSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cycleMonths = [
    { month: 'Jan', value: 45, color: 'bg-brand-gold/40' },
    { month: 'Feb', value: 95, color: 'bg-brand-gold', highlight: true },
    { month: 'Mar', value: 65, color: 'bg-brand-gold/60' },
    { month: 'Apr', value: 50, color: 'bg-brand-gold/40' },
    { month: 'May', value: 40, color: 'bg-brand-gold/30' },
    { month: 'Jun', value: 35, color: 'bg-brand-gold/20' },
    { month: 'Jul', value: 30, color: 'bg-brand-gold/20' },
    { month: 'Aug', value: 35, color: 'bg-brand-gold/30' },
    { month: 'Sep', value: 40, color: 'bg-brand-gold/40' },
    { month: 'Oct', value: 50, color: 'bg-brand-gold/50' },
    { month: 'Nov', value: 60, color: 'bg-brand-gold/60' },
    { month: 'Dec', value: 70, color: 'bg-brand-gold/70' },
  ]

  return (
    <section className="relative py-24 bg-white text-black overflow-hidden border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-5">
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-neutral-800">Curriculum lens · seasonality</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-4">
            The market rewards students who <span className="text-[#b89428]">respect calendars</span>
          </h2>

          <p className="text-lg text-neutral-600 mb-3 tracking-tight">
            Seasonality isn&apos;t a crystal ball—it&apos;s context. We teach how to layer macro catalysts, liquidity
            windows, and volatility regimes so you&apos;re not guessing when headlines hit.
          </p>
          <p className="text-sm text-neutral-600">
            Illustrative exercise below—bars show how we discuss relative emphasis by month in class, not a promise of
            returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold tracking-tight text-black mb-1">Teaching calendar heatmap</h3>
              <p className="text-neutral-600 text-sm">Relative weight we assign to seasonal study blocks</p>
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
                  <div className="w-11 text-sm font-medium text-neutral-600">{item.month}</div>
                  <div className="flex-1 relative h-8 bg-neutral-200 rounded-lg overflow-hidden border border-neutral-300">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.value}%` } : {}}
                      transition={{ duration: 0.85, delay: 0.05 * index }}
                      className={`h-full ${item.color} ${
                        item.highlight ? 'ring-2 ring-brand-gold ring-offset-2 ring-offset-white' : ''
                      } rounded-lg flex items-center justify-end pr-2`}
                    >
                      {item.highlight && <span className="text-xs font-bold text-black">{item.value}%</span>}
                    </motion.div>
                  </div>
                  {!item.highlight && <div className="w-14 text-right text-sm text-neutral-600">{item.value}%</div>}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-[#b89428] mb-3">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold text-sm">February spotlight</span>
              </div>
              <p className="text-sm text-neutral-700 mb-4">
                Historically volatile month—we unpack why in lecture, then rehearse risk responses in lab.
              </p>
              <Link href="/programs">
                <Button variant="primary" size="md" className="w-full group">
                  View market programs
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
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm">
                  <BookOpen className="w-6 h-6 text-[#b89428]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-black">Macro context class</h3>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Rates, real yields, USD strength—we map how each channel historically interacts with bullion so you can
                ask better questions when headlines drop.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm">
                  <TrendingUp className="w-6 h-6 text-[#b89428]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-black">Live rehearsal</h3>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Students run scenarios: widening spreads, gap opens, overlap volatility—before capital is on the line.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-gold bg-white p-6 shadow-sm">
              <h4 className="font-bold tracking-tight text-black mb-3">Program snapshot</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
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

export default MarketCycleSection
