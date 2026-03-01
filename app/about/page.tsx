'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  Users, 
  Shield, 
  Award, 
  TrendingUp, 
  Globe,
  Zap,
  CheckCircle,
} from 'lucide-react'

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    { icon: Users, value: '500+', label: 'Students Trained' },
    { icon: TrendingUp, value: '4+', label: 'Years Experience' },
    { icon: Globe, value: 'Kanchipuram', label: 'Education Center' },
    { icon: Zap, value: '1:1', label: 'Mentorship' }
  ]

  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-black to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              ClubLiquidez – <span className="gradient-text">Market Education Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Education center in Kanchipuram, Tamil Nadu. We provide structured trading education — not investment advice, not signal selling, not get-rich marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  ClubLiquidez is a market education center based in Kanchipuram, Tamil Nadu. 
                  We focus on structured trading education: Forex, Gold (XAUUSD), price action, 
                  risk management, and trading psychology.
                </p>
                <p>
                  We believe in discipline and education over hype. We do not sell signals, 
                  we do not promise returns, and we do not manage client funds. We teach — 
                  so you can make informed decisions in your own trading.
                </p>
                <p>
                  Our programs include beginner to advanced courses, weekend and online live batches, 
                  and offline classroom sessions. Limited seats per batch so every student gets real attention.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-8 h-8 text-neon-gold" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  To provide structured, professional trading education so every student can build discipline, 
                  understand risk, and trade with clarity. We focus on education — not signals, not fund management, not get-rich promises.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-dark-700 rounded-lg">
                    <div className="text-2xl font-bold text-neon-gold">2022</div>
                    <div className="text-sm text-gray-400">Founded</div>
                  </div>
                  <div className="text-center p-4 bg-dark-700 rounded-lg">
                    <div className="text-2xl font-bold text-neon-gold-champagne">2023</div>
                    <div className="text-sm text-gray-400">Launched</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Why Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-dark-800 rounded-2xl border border-gray-700 mb-6 group-hover:border-neon-gold/50 transition-colors"
                  >
                    <achievement.icon className="w-8 h-8 text-neon-gold" />
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-gray-400">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Our Approach</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We are educators first. Our focus is on structured curriculum, small batches, live and offline sessions, 
              and 1:1 mentorship. We do not sell signals, we do not manage client funds, and we do not promise returns. 
              We teach discipline, psychology, and risk — so you can trade with clarity on your own.
            </p>
            <p className="text-gray-400">
              Education center in Kanchipuram, Tamil Nadu. Online and offline batches available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Shield className="w-8 h-8 text-neon-gold-champagne" />
              <h2 className="text-4xl font-bold text-white">What We Stand For</h2>
            </div>
            <p className="text-gray-300 mb-8">
              We provide educational services only. We do not provide investment advice or manage funds. 
              Trading involves risk; past educational outcomes do not guarantee future results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Structured curriculum', 'No signal selling', 'No get-rich marketing', 'Discipline & psychology focus', 'Small batch sizes', 'Mentorship-led'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-neon-gold-champagne" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Education First',
                  description: 'We teach. We do not sell signals, manage funds, or promise returns. Structured learning only.'
                },
                {
                  icon: TrendingUp,
                  title: 'Discipline & Psychology',
                  description: 'Focus on risk management, mindset, and consistency — not hype or shortcuts.'
                },
                {
                  icon: Users,
                  title: 'Mentorship-Led',
                  description: 'Small batches and 1:1 support so every student gets real attention.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-dark-800 rounded-2xl border border-gray-700 mb-6 group-hover:border-neon-gold/50 transition-colors"
                  >
                    <value.icon className="w-8 h-8 text-neon-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage 