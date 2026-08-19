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
    <section className="py-24 relative overflow-hidden bg-white text-black border-t border-neutral-200">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
              Ready to treat the market like a <span className="text-[#b89428]">craft</span>—not a gamble?
            </h2>
            <p className="text-xl text-neutral-600 tracking-tight">
              Tell us where you are on the learning curve—we&apos;ll map the right cohort, schedule, and mentor fit.
            </p>
          </div>

          <p className="text-base text-neutral-600 max-w-xl mx-auto">
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
              <Button variant="primary" size="lg" className="group">
                Talk to admissions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline" size="lg" className="group">
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
