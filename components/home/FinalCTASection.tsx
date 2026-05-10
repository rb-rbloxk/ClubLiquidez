'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const FinalCTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  })

  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="font-spectral text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight">
              Ready to treat the market like a <span className="gradient-text">craft</span>—not a gamble?
            </h2>
            <p className="text-xl text-slate-600">
              Tell us where you are on the learning curve—we&apos;ll map the right cohort, schedule, and mentor fit.
            </p>
          </div>

          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Share goals, risk tolerance, and availability. Our team replies with straight answers—no enrollment pressure
            tactics.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group shadow-lg shadow-brand-gold/15">
                Talk to admissions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="secondary" size="lg" className="group">
                Compare programs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection
