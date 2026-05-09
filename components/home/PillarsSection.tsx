'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Users, Bot, GraduationCap, Crown, ArrowRight, Shield, Sparkles } from 'lucide-react'

const PillarsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const firstThreePillars = [
    {
      icon: GraduationCap,
      title: 'XAUUSD Core Curriculum',
      description:
        'From tick behaviour to higher-timeframe narrative—learn how gold prices absorb news, sessions, and flows.',
      features: [
        'Liquidity & volatility regimes',
        'Chart frameworks used in live labs',
        'Macro context without prediction hype',
        'Homework + structured reviews',
      ],
      href: '/academy',
      color: 'neon-gold',
      gradient: 'from-neon-gold/15 to-neon-gold-champagne/15',
    },
    {
      icon: Shield,
      title: 'Risk Architecture for Metals',
      description:
        'Position sizing, spread awareness, and drawdown planning tailored to gold—not generic FX templates.',
      features: ['Ticks, points & contract logic', 'Stops that respect volatility', 'Journal metrics we actually grade'],
      href: '/tools',
      color: 'neon-gold-champagne',
      gradient: 'from-neon-gold-champagne/15 to-neon-amber/15',
    },
    {
      icon: Users,
      title: 'Mentorship & Live Labs',
      description:
        'Small groups, camera-on drills, and educator feedback on your process—not copy-paste trade ideas.',
      features: ['Weekly live sessions', 'Playback-friendly recordings', 'Accountability checkpoints'],
      href: '/programs',
      color: 'neon-gold-dark',
      gradient: 'from-neon-gold-dark/15 to-neon-gold/15',
    },
  ]

  const lastTwoPillars = [
    {
      icon: Bot,
      title: 'Automation Literacy',
      description:
        'Understand how EAs and scripts behave on MT4/MT5 so you can audit logic—education only, no bot sales.',
      features: ['Indicator vs strategy separation', 'Backtest hygiene', 'When automation helps—and hurts'],
      href: '/algo-trading',
      color: 'neon-amber',
      gradient: 'from-neon-amber/15 to-neon-gold/15',
    },
    {
      icon: Crown,
      title: 'Programs & Cohorts',
      description:
        'Rolling intakes for beginners, intensive gold specialist weekends, and hybrid online + classroom tracks.',
      features: ['Seat caps per cohort', 'Kanchipuram classroom days', 'Partner-friendly schedules'],
      href: '/programs',
      color: 'neon-gold',
      gradient: 'from-neon-gold/15 to-neon-gold-champagne/15',
    },
  ]

  const renderPillar = (pillar: (typeof firstThreePillars)[0], index: number) => (
    <motion.div
      key={pillar.title}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.08 * index }}
      className="group relative"
    >
      <div
        className={`h-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:border-brand-gold/40 transition-all duration-300`}
      >
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`p-4 rounded-xl border group-hover:scale-[1.03] transition-transform ${
              pillar.color === 'neon-gold'
                ? 'bg-neon-gold/15 border-neon-gold/25'
                : pillar.color === 'neon-gold-champagne'
                  ? 'bg-neon-gold-champagne/15 border-neon-gold-champagne/25'
                  : pillar.color === 'neon-gold-dark'
                    ? 'bg-neon-gold-dark/15 border-neon-gold-dark/25'
                    : pillar.color === 'neon-amber'
                      ? 'bg-neon-amber/15 border-neon-amber/25'
                      : 'bg-neon-gold/15 border-neon-gold/25'
            }`}
          >
            <pillar.icon
              className={`w-8 h-8 ${
                pillar.color === 'neon-gold'
                  ? 'text-neon-gold'
                  : pillar.color === 'neon-gold-champagne'
                    ? 'text-neon-gold-champagne'
                    : pillar.color === 'neon-gold-dark'
                      ? 'text-neon-gold-dark'
                      : pillar.color === 'neon-amber'
                        ? 'text-neon-amber'
                        : 'text-neon-gold'
              }`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-spectral text-xl font-semibold text-slate-900 mb-2">{pillar.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{pillar.description}</p>
          </div>
        </div>

        <ul className="space-y-2.5 mb-8">
          {pillar.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-500 text-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link href={pillar.href}>
          <Button variant="secondary" size="md" className="w-full group justify-center">
            Explore {pillar.title.split(' ')[0]}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )

  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-brand-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-brand-navy rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <Shield className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-slate-700">What you get inside ClubLiquidez</span>
          </div>

          <h2 className="font-spectral text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4">
            Built for <span className="gradient-text">serious gold students</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Five pillars. One mandate: teach durable process for trading education—not adrenaline-driven clicks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {firstThreePillars.map((pillar, index) => renderPillar(pillar, index))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {lastTwoPillars.map((pillar, index) => renderPillar(pillar, index + 3))}
        </div>
      </div>
    </section>
  )
}

export default PillarsSection
