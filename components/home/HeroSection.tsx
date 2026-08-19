'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight, Clock, Shield, Sparkles } from 'lucide-react'

const HeroSection = () => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      tl.to(chartRef.current, { duration: 2, scale: 1.04, ease: 'power2.inOut' })
      gsap.to(chartRef.current, {
        y: -16,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      })
    }
  }, [])

  const features = [
    {
      icon: Clock,
      title: 'London · NY overlap',
      description: 'How we map liquidity windows for the market',
    },
    {
      icon: Shield,
      title: 'Risk built for metals',
      description: 'Ticks, spread & position sizing for the market',
    },
    {
      icon: Sparkles,
      title: 'Live lab + mentorship',
      description: 'Walkthroughs, reviews, no copy-trading',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-20 md:pb-0 bg-white text-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-neutral-100"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-sm text-neutral-800 font-medium tracking-wide">
                Market · Educational programs only
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-7xl font-bold tracking-tight leading-[1.08] text-black"
            >
              Master <span className="text-[#b89428]">Market</span>{' '}
              with structure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed tracking-tight"
            >
              ClubLiquidez teaches how institutional-grade traders <em className="text-black not-italic font-semibold">read</em>{' '}
              bullion: sessions, volatility regimes, risk for leveraged metals, and the psychology to stay consistent.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              className="text-base text-neutral-600 max-w-xl leading-relaxed border-l-2 border-brand-gold pl-4"
            >
              Small cohorts · Live drills · Optional classroom days in Kanchipuram · No signals · No managed accounts
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Book an intake call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/academy">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Market curriculum
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4"
            >
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 h-fit">
                    <feature.icon className="w-5 h-5 text-[#b89428]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm">{feature.title}</h3>
                    <p className="text-xs text-neutral-600 leading-snug mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div
              ref={chartRef}
              className="relative w-full h-[22rem] sm:h-96 rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden shadow-xl"
            >
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Spot market · teaching chart</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                    <span className="text-black font-semibold">XAUUSD</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-neutral-500 text-xs">Illustrative</p>
                  <p className="text-xl font-bold tracking-tight text-black">2,648.20</p>
                  <p className="text-sm text-[#b89428] font-semibold">+0.42%</p>
                </div>
              </div>

              <div className="absolute inset-0 top-20 px-5 pb-6">
                <div className="flex items-end justify-between h-full gap-1">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${22 + ((i * 17) % 65)}%` }}
                      transition={{ duration: 0.9, delay: i * 0.04, ease: 'easeOut' }}
                      className={`flex-1 max-w-[10px] rounded-sm ${
                        i % 4 === 0 ? 'bg-brand-gold' : 'bg-neutral-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 rounded-lg bg-white border border-neutral-200 px-4 py-3 shadow-sm">
                <p className="text-xs text-neutral-700">
                  <span className="text-[#b89428] font-semibold">Session lab:</span> mark liquidity, define invalidation,
                  size for volatility — before you touch a platform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
