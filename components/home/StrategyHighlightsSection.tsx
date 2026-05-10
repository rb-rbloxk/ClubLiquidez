'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Layers, BookMarked, Headphones, LineChart, ClipboardList, GraduationCap } from 'lucide-react'

const StrategyHighlightsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: Layers,
      title: 'Stacked learning path',
      description:
        'Foundations → session craft → risk engineering → capstone review. No random playlist of videos.',
      stat: '6+',
      statLabel: 'Core modules',
    },
    {
      icon: BookMarked,
      title: 'Living playbook',
      description:
        'Templates for bias, invalidation, and review—updated as markets evolve, archived for alumni.',
      stat: '40+',
      statLabel: 'Drill assets',
    },
    {
      icon: Headphones,
      title: 'Office-hour cadence',
      description:
        'Scheduled mentor blocks each week—bring charts, journals, or psychology questions.',
      stat: 'Weekly',
      statLabel: 'Live access',
    },
    {
      icon: LineChart,
      title: 'Volatility gyms',
      description:
        'Labs simulate widening spreads and violent corrections so muscle memory forms offline.',
      stat: '12',
      statLabel: 'Scenario labs / yr',
    },
    {
      icon: ClipboardList,
      title: 'Journal scoring',
      description:
        'Rubrics focus on process KPIs—risk adherence, setup quality—not vanity P&L screenshots.',
      stat: '360°',
      statLabel: 'Feedback loop',
    },
    {
      icon: GraduationCap,
      title: 'Credential mindset',
      description:
        'Assignments mirror desk expectations: prep notes, scenario logs, post-trade audits.',
      stat: 'Cohort',
      statLabel: 'Capstone',
    },
  ]

  const summary = [
    { label: 'Educators', value: 'Senior mentors' },
    { label: 'Focus asset', value: 'XAUUSD' },
    { label: 'Seat policy', value: 'Capped' },
    { label: 'Support', value: 'Community + DM hours' },
  ]

  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <GraduationCap className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-slate-700">Curriculum architecture</span>
          </div>

          <h2 className="font-spectral text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5">
            Highlights of our <span className="gradient-text">market program</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Built like a professional desk onboarding—not a content funnel. Every artifact ties back to disciplined
            market trading education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200 p-8 hover:border-brand-gold/35 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-4 bg-neon-gold/12 rounded-xl border border-neon-gold/25 group-hover:scale-[1.03] transition-transform">
                    <highlight.icon className="w-8 h-8 text-neon-gold" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-spectral font-semibold text-brand-gold-dark">{highlight.stat}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{highlight.statLabel}</div>
                  </div>
                </div>

                <h3 className="font-spectral text-lg font-semibold text-slate-900 mb-2">{highlight.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {summary.map((item) => (
            <div
              key={item.label}
              className="text-center p-5 bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="text-lg font-spectral font-semibold text-slate-900 mb-1">{item.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StrategyHighlightsSection
