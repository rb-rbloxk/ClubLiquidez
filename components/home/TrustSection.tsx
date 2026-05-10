'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, CheckCircle2, TrendingUp, Ban, MessageCircle } from 'lucide-react'

const TrustSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const trustFactors = [
    {
      icon: Ban,
      title: 'No signal vending',
      description: 'We teach you to classify setups—not spoon-feed entries timed for screenshots.',
      color: 'neon-gold',
    },
    {
      icon: Shield,
      title: 'No leverage theatrics',
      description: 'Risk lectures come before platform demos. Always.',
      color: 'neon-gold-champagne',
    },
    {
      icon: CheckCircle2,
      title: 'No portfolio management',
      description: 'Educators coach process; they do not trade your capital.',
      color: 'neon-gold-dark',
    },
    {
      icon: TrendingUp,
      title: 'No guaranteed returns',
      description: 'Markets owe nobody profits—we prepare you for variance.',
      color: 'neon-amber',
    },
    {
      icon: Ban,
      title: 'No influencer hype',
      description: 'Calendar invites beat TikTok motivation.',
      color: 'neon-gold',
    },
    {
      icon: CheckCircle2,
      title: 'No opaque fee traps',
      description: 'Program pricing discussed upfront during intake.',
      color: 'neon-gold-champagne',
    },
  ]

  const whatWeOffer = [
    { title: 'Session IQ', icon: TrendingUp },
    { title: 'Risk grammar', icon: Shield },
    { title: 'Psychological drills', icon: CheckCircle2 },
    { title: 'Community critique', icon: MessageCircle },
  ]

  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-0 right-0 w-[22rem] h-[22rem] bg-brand-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-brand-navy rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <Shield className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-slate-700">Transparency charter</span>
          </div>

          <h2 className="font-spectral text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5">
            Why learners pick <span className="gradient-text">ClubLiquidez</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Market education needs friction—in the right places.
          </p>
        </motion.div>

        <div className="mb-12">
          <p className="text-center text-slate-500 mb-6 uppercase tracking-wide text-xs font-semibold">
            What stays consistent inside every cohort
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {whatWeOffer.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.06 * index }}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm"
              >
                <item.icon className="w-4 h-4 text-brand-gold" />
                <span className="text-slate-800 font-medium text-sm">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * index }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200 p-7 hover:border-brand-gold/35 hover:shadow-lg transition-all duration-300">
                <div
                  className={`p-3 rounded-xl border w-fit mb-5 ${
                    factor.color === 'neon-gold'
                      ? 'bg-neon-gold/12 border-neon-gold/25'
                      : factor.color === 'neon-gold-champagne'
                        ? 'bg-neon-gold-champagne/12 border-neon-gold-champagne/25'
                        : factor.color === 'neon-gold-dark'
                          ? 'bg-neon-gold-dark/12 border-neon-gold-dark/25'
                          : 'bg-neon-amber/12 border-neon-amber/25'
                  }`}
                >
                  <factor.icon
                    className={`w-7 h-7 ${
                      factor.color === 'neon-gold'
                        ? 'text-neon-gold'
                        : factor.color === 'neon-gold-champagne'
                          ? 'text-neon-gold-champagne'
                          : factor.color === 'neon-gold-dark'
                            ? 'text-neon-gold-dark'
                            : 'text-neon-amber'
                    }`}
                  />
                </div>

                <h3 className="font-spectral text-lg font-semibold text-slate-900 mb-2">{factor.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{factor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-600 mt-12 font-medium max-w-2xl mx-auto"
        >
          If you want entertainment trading content, there are faster feeds. If you want syllabus-grade rigor for the market,
          stay here.
        </motion.p>
      </div>
    </section>
  )
}

export default TrustSection
