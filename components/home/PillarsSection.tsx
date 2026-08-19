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
      title: 'Market Core Curriculum',
      description:
        'From tick behaviour to higher-timeframe narrative—learn how market prices absorb news, sessions, and flows.',
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
        'Position sizing, spread awareness, and drawdown planning tailored to the market—not generic FX templates.',
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
        'Rolling intakes for beginners, intensive market specialist weekends, and hybrid online + classroom tracks.',
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
        className="h-full bg-neutral-50 rounded-2xl border border-neutral-200 p-8 hover:border-brand-gold transition-all duration-300 flex flex-col justify-between shadow-sm"
      >
        <div>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 rounded-xl border border-neutral-200 bg-white group-hover:border-brand-gold transition-colors shadow-sm">
              <pillar.icon className="w-8 h-8 text-[#b89428]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold tracking-tight text-black mb-2">{pillar.title}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{pillar.description}</p>
            </div>
          </div>

          <ul className="space-y-2.5 mb-8">
            {pillar.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-neutral-600 text-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#b89428] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

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
    <section className="py-24 relative overflow-hidden bg-white text-black border-y border-neutral-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-5">
            <Shield className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-neutral-800">What you get inside ClubLiquidez</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4">
            Built for <span className="text-[#b89428]">serious market students</span>
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
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
