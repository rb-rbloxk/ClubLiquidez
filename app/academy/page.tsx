'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Shield,
  Brain,
  BarChart3,
  Users,
  Award,
  PlayCircle,
  FileText,
  Zap,
  Sparkles,
  Infinity,
} from 'lucide-react'

export default function AcademyPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const modules = [
    {
      id: 1,
      title: 'Basics of Forex',
      icon: BookOpen,
      description: 'Foundations of the forex market: pairs, sessions, structure, and key terminology.',
      topics: [
        'Forex market structure',
        'Major and minor pairs',
        'Trading sessions and liquidity',
        'Pips, lots, and position sizing basics',
        'Introduction to technical analysis'
      ],
      duration: '2–3 weeks',
      color: 'neon-gold'
    },
    {
      id: 2,
      title: 'Gold (XAUUSD) Strategy',
      icon: TrendingUp,
      description: 'Specialized focus on Gold: price action, key levels, and strategy tailored to XAUUSD.',
      topics: [
        'Gold market drivers',
        'Key support and resistance',
        'Gold-specific patterns',
        'Session-based Gold behavior',
        'Risk parameters for Gold'
      ],
      duration: '3 weeks',
      color: 'neon-gold-champagne'
    },
    {
      id: 3,
      title: 'Price Action',
      icon: BarChart3,
      description: 'Read price without clutter. Candlestick patterns, structure, and confluence.',
      topics: [
        'Candlestick patterns',
        'Market structure (HH, HL, LH, LL)',
        'Confluence and key levels',
        'Entry and exit techniques',
        'False breakouts and confirmation'
      ],
      duration: '3–4 weeks',
      color: 'neon-gold-dark'
    },
    {
      id: 4,
      title: 'Risk Management',
      icon: Shield,
      description: 'Protect your capital. Position sizing, risk-reward, and drawdown control.',
      topics: [
        'Position sizing formulas',
        'Risk-reward ratios',
        'Stop-loss placement',
        'Drawdown control',
        'Journaling and review'
      ],
      duration: '2–3 weeks',
      color: 'neon-amber'
    },
    {
      id: 5,
      title: 'Trading Psychology',
      icon: Brain,
      description: 'Build discipline and consistency. Overcome emotional barriers and follow your plan.',
      topics: [
        'Trading psychology fundamentals',
        'Emotional control',
        'Dealing with losses',
        'Discipline and execution',
        'Maintaining consistency'
      ],
      duration: '2–3 weeks',
      color: 'neon-gold'
    }
  ]

  const learningOutcomes = [
    { icon: CheckCircle2, text: 'Understand Forex and Gold (XAUUSD) from basics to strategy' },
    { icon: CheckCircle2, text: 'Apply price action and key level analysis' },
    { icon: CheckCircle2, text: 'Implement professional risk management systems' },
    { icon: CheckCircle2, text: 'Build discipline and trading psychology' },
    { icon: CheckCircle2, text: 'Execute with structure and consistency' },
    { icon: CheckCircle2, text: 'Develop a clear, rule-based approach' }
  ]

  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold-deep/30 mb-8"
            >
              <Award className="w-4 h-4 text-neon-gold" />
              <span className="text-sm text-neon-gold font-medium">Professional Forex & Gold Trading Academy</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6"
            >
              Master <span className="gradient-text">Trading Course</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              We have two learning options at Club Liquidez based on how deeply you want to be involved in your trading
              journey—structured education or full club membership. Training covers price action, risk management, and
              psychology with online and offline batches. Limited seats. Classroom and sessions in{' '}
              <span className="text-neon-gold">Kanchipuram</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 text-slate-500"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-neon-gold" />
                <span>30 + 30 days Duration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-neon-gold" />
                <span>30 Days course + 30 days Live Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-neon-gold" />
                <span>Certificate of Completion</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Two learning paths */}
      <section className="py-20 bg-dark-900 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Two ways to <span className="gradient-text">learn &amp; grow</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Choose the path that matches how much you want to stay involved—complete the program and trade on your own,
              or stay inside the club for long-term access, live work, and advanced support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800 rounded-2xl border border-slate-800 p-8 sm:p-10 flex flex-col h-full shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-neon-gold/15 border border-neon-gold/30">
                  <BookOpen className="w-7 h-7 text-neon-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-neon-gold">Student Program</p>
                  <p className="text-3xl sm:text-4xl font-bold text-slate-900">
                    ₹21,000
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Structured trading education where you&apos;ll learn market basics, risk management, psychology,
                execution, and practical market understanding step by step.
              </p>
              <ul className="space-y-3 text-slate-600 text-sm sm:text-base flex-1">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-neon-gold shrink-0 mt-0.5" />
                  <span>Clear progression through core skills—not random tips.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-neon-gold shrink-0 mt-0.5" />
                  <span>Built for traders who want to learn and trade independently after completing the program.</span>
                </li>
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-2xl border border-slate-800 bg-dark-950 p-8 sm:p-10 flex flex-col h-full shadow-lg shadow-brand-midnight/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-neon-gold/25 border border-neon-gold/40">
                  <Sparkles className="w-7 h-7 text-neon-gold-dark" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-neon-gold-dark">Club Membership</p>
                  <p className="text-3xl sm:text-4xl font-bold text-slate-900">
                    ₹56,000
                  </p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our complete long-term ecosystem. Along with the full learning program, club members get continued access
                to live trading sessions, advanced concepts, automated trading guidance, strategy building, premium algo
                access, copy trading support, and guidance for building their own trading systems and algos.
              </p>
              <div className="flex items-start gap-2 mb-6 p-4 rounded-xl bg-dark-800/80 border border-neon-gold/20">
                <Infinity className="w-5 h-5 text-neon-gold shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The club isn&apos;t &quot;study and leave.&quot; It&apos;s for traders who want to stay connected, grow
                  continuously, and evolve with the market over time.
                </p>
              </div>
              <ul className="space-y-2.5 text-slate-600 text-sm sm:text-base mt-auto">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-neon-gold shrink-0 mt-0.5" />
                  <span>Full program + ongoing live sessions and advanced topics</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-neon-gold shrink-0 mt-0.5" />
                  <span>Algo, automation, copy trading, and system-building support</span>
                </li>
              </ul>
            </motion.article>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-slate-600 mt-12 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            You can choose whichever model fits your goals and commitment level better.
          </motion.p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-dark-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Duration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800 rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-neon-gold/20 rounded-xl border border-neon-gold/30">
                  <Clock className="w-8 h-8 text-neon-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Duration</h3>
                  <p className="text-slate-500 text-sm">Total Course Length</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Total Duration</span>
                  <span className="text-slate-900 font-semibold text-lg">30 + 30 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Course Sessions</span>
                  <span className="text-slate-900 font-semibold">30 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Live Market Sessions</span>
                  <span className="text-slate-900 font-semibold">30 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Format</span>
                  <span className="text-slate-900 font-semibold">Online</span>
                </div>
              </div>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-800 rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-neon-blue/20 rounded-xl border border-neon-blue/30">
                  <BookOpen className="w-8 h-8 text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">What You&apos;ll Learn</h3>
                  <p className="text-slate-500 text-sm">Key Outcomes</p>
                </div>
              </div>
              <div className="space-y-3">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <outcome.icon className="w-5 h-5 text-neon-gold mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{outcome.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold/30 mb-6"
            >
              <FileText className="w-4 h-4 text-neon-gold" />
              <span className="text-sm text-neon-gold font-medium">Complete Curriculum</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Course <span className="gradient-text">Syllabus</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive 5-module program designed to transform you into a master trader
            </p>
          </motion.div>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-dark-800 rounded-2xl border border-slate-200 p-8 hover:border-neon-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-neon-gold/10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Module Header */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`p-4 rounded-xl border ${
                          module.color === 'neon-gold' ? 'bg-neon-gold/20 border-neon-gold/30' :
                          module.color === 'neon-gold-champagne' ? 'bg-neon-gold-champagne/20 border-neon-gold-champagne/30' :
                          module.color === 'neon-gold-dark' ? 'bg-neon-gold-dark/20 border-neon-gold-dark/30' :
                          'bg-neon-amber/20 border-neon-amber/30'
                        }`}>
                          <module.icon className={`w-8 h-8 ${
                            module.color === 'neon-gold' ? 'text-neon-gold' :
                            module.color === 'neon-gold-champagne' ? 'text-neon-gold-champagne' :
                            module.color === 'neon-gold-dark' ? 'text-neon-gold-dark' :
                            'text-neon-amber'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium text-slate-500">Module {module.id}</span>
                            <span className="text-sm text-slate-500">•</span>
                            <span className="text-sm text-slate-500">{module.duration}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{module.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{module.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Topics List */}
                    <div className="lg:w-2/3">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                        <PlayCircle className="w-5 h-5 text-neon-gold" />
                        <span>Topics Covered</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start space-x-2">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              module.color === 'neon-gold' ? 'text-neon-gold' :
                              module.color === 'neon-gold-champagne' ? 'text-neon-gold-champagne' :
                              module.color === 'neon-gold-dark' ? 'text-neon-gold-dark' :
                              'text-neon-amber'
                            }`} />
                            <span className="text-slate-600 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Learning <span className="gradient-text">Formats</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to learn and engage with the material
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: PlayCircle,
                title: 'Video Modules',
                description: 'Pre-recorded comprehensive video lessons',
                color: 'neon-gold'
              },
              {
                icon: Users,
                title: 'Live Sessions',
                description: 'Interactive live training. Limited seats per batch.',
                color: 'neon-gold-champagne'
              },
              {
                icon: FileText,
                title: 'Offline Classroom',
                description: 'In-person batches in Kanchipuram, Tamil Nadu',
                color: 'neon-gold-dark'
              },
              {
                icon: Award,
                title: 'Mentorship',
                description: '1:1 and group mentorship support',
                color: 'neon-amber'
              }
            ].map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-800 rounded-2xl p-6 border border-slate-200 text-center hover:border-neon-gold/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  format.color === 'neon-gold' ? 'bg-neon-gold/20 border border-neon-gold/30' :
                  format.color === 'neon-gold-champagne' ? 'bg-neon-gold-champagne/20 border border-neon-gold-champagne/30' :
                  format.color === 'neon-gold-dark' ? 'bg-neon-gold-dark/20 border border-neon-gold-dark/30' :
                  'bg-neon-amber/20 border border-neon-amber/30'
                }`}>
                  <format.icon className={`w-8 h-8 ${
                    format.color === 'neon-gold' ? 'text-neon-gold' :
                    format.color === 'neon-gold-champagne' ? 'text-neon-gold-champagne' :
                    format.color === 'neon-gold-dark' ? 'text-neon-gold-dark' :
                    'text-neon-amber'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{format.title}</h3>
                <p className="text-slate-500 text-sm">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,165,92,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_60%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold-deep/30 mb-8"
            >
              <Zap className="w-4 h-4 text-neon-gold" />
              <span className="text-sm text-neon-gold font-medium">Limited Spots Available</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Ready to Join the <span className="gradient-text">Course</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed"
            >
              Gain clarity, structure, and confidence. Enroll in the next batch or book a free session to learn more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Join the Next Batch
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Book a Free Session
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-neon-gold" />
                <span>Limited seats per batch</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-neon-gold" />
                <span>Lifetime access to materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-neon-gold" />
                <span>Certificate of completion</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
