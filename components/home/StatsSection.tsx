'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  })

  const stats = [
    { label: 'Learners coached', value: '500+' },
    { label: 'Market-first curriculum', value: 'Market' },
    { label: 'Mentor ratio', value: '1:12' },
    { label: 'Live hours / cohort', value: '30+' },
  ]

  return (
    <section className="py-20 bg-white text-black border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4">
            Numbers we can <span className="text-[#b89428]">stand behind</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10 tracking-tight">
            Transparent throughput beats vanity metrics. Ask us about seat caps and mentor loads during intake—we share
            them openly.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.05 * index }}
                className="text-center p-5 bg-neutral-50 rounded-xl border border-neutral-200 shadow-sm"
              >
                <span className="text-[#b89428] font-bold text-2xl tracking-tight block">{item.value}</span>
                <span className="text-neutral-600 font-medium text-xs uppercase tracking-wide">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-neutral-500 max-w-2xl mx-auto text-center text-sm leading-relaxed"
          >
            Educational services only. Past learner experiences do not guarantee future performance—markets involve risk of
            loss. We teach process; we never promise profitability.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
