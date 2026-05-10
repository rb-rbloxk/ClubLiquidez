'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Compass } from 'lucide-react'

const BrandIntroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  })

  return (
    <section className="relative py-24 md:py-28 bg-dark-950 overflow-hidden border-y border-slate-200/60">
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <Compass className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-slate-700">Why market education — why now</span>
          </motion.div>

          <h2 className="font-spectral text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
            Bullion rewards <span className="gradient-text">preparation</span>—not adrenaline.
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 mb-5 leading-relaxed">
            The market trades differently than indices or FX pairs: wider swings, session personalities, and macro headlines
            that move tape fast. Most retail curriculum glosses over that. We don&apos;t.
          </p>

          <p className="text-base sm:text-lg text-slate-500 mb-8 leading-relaxed max-w-3xl mx-auto">
            ClubLiquidez is built around <strong className="text-slate-800">market mechanics</strong>: how liquidity
            builds through London and New York, how to normalize risk when spreads widen, and how to journal trades so
            improvement compounds. Education only—we never execute trades for you or sell alerts.
          </p>

          <p className="text-lg font-spectral text-brand-gold-dark font-medium border-t border-slate-200 pt-8 max-w-2xl mx-auto">
            Structured drills. Honest feedback. No get-rich narrative.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandIntroSection
