'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

type Testimonial = {
  name: string
  role?: string
  location?: string
  image: string
  rating: number
  text: string
  highlight?: string
  isGoogle?: boolean
  relativeTime?: string
}

const FALLBACK_TESTIMONIALS: Testimonial[] = [
    {
      name: 'Michael Chen',
      role: 'Former Student',
      location: 'Singapore',
      image: 'MC',
      rating: 5,
      text: 'ClubLiquidez gave me structure I was missing. The mentorship and live sessions improved my discipline and risk management. No hype — just solid education.',
      highlight: 'Structure and discipline'
    },
    {
      name: 'Sarah Johnson',
      role: 'Academy Graduate',
      location: 'London, UK',
      image: 'SJ',
      rating: 5,
      text: 'I learned how to build and backtest strategies properly. The Advanced Strategy & Automation training was exactly what I needed to understand how algorithms work.',
      highlight: 'Strategy and automation education'
    },
    {
      name: 'David Rodriguez',
      role: 'Trading Educator',
      location: 'New York, USA',
      image: 'DR',
      rating: 5,
      text: 'The Master Course is comprehensive and practical. My students have seen remarkable improvements in their approach after completing the program. Highly recommended.',
      highlight: 'Comprehensive education'
    },
    {
      name: 'Emma Thompson',
      role: 'Gold Program Student',
      location: 'Sydney, Australia',
      image: 'ET',
      rating: 5,
      text: 'The Gold (XAUUSD) and price action modules changed how I look at markets. Small batch size meant real attention from the educators. Best learning investment I made.',
      highlight: 'Gold and price action'
    },
    {
      name: 'James Wilson',
      role: 'Weekend Batch Student',
      location: 'Dubai, UAE',
      image: 'JW',
      rating: 5,
      text: 'As a working professional, the weekend batch and study materials fit my schedule. The community and mentorship made the difference.',
      highlight: 'Weekend batch and community'
    },
    {
      name: 'Lisa Anderson',
      role: 'Offline Batch, Kanchipuram',
      location: 'Tamil Nadu, India',
      image: 'LA',
      rating: 5,
      text: 'Attending the offline classroom in Kanchipuram was invaluable. Face-to-face sessions and 1:1 feedback accelerated my learning. No signal selling — pure education.',
      highlight: 'Offline classroom experience'
    }
  ]

  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((res) => res.json())
      .then((data: { reviews?: Array<{ name: string; rating: number; text: string; relativeTime?: string }> }) => {
        if (data.reviews?.length) {
          setTestimonials(
            data.reviews.map((r) => ({
              name: r.name,
              image: r.name.slice(0, 2).toUpperCase(),
              rating: r.rating,
              text: r.text,
              relativeTime: r.relativeTime,
              isGoogle: true,
            }))
          )
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 via-black to-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-gold-champagne rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-gold/30 mb-6"
          >
            <Star className="w-4 h-4 text-neon-gold" />
            <span className="text-sm text-neon-gold font-medium">Member Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Social <span className="gradient-text">Proof</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto space-y-2 mb-8"
          >
            <p><span className="text-neon-gold font-semibold">500+</span> students trained</p>
            <p>Small batch sizes for real attention</p>
            <p>Live and offline sessions</p>
            <p>A serious, growing learning community</p>
            <p className="text-gray-400 text-lg mt-4">Education-focused. No get-rich promises.</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading ? FALLBACK_TESTIMONIALS : testimonials).map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-neon-gold/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-gold rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      {testimonial.role && (
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      )}
                      {testimonial.location && (
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      )}
                      {testimonial.isGoogle && testimonial.relativeTime && (
                        <p className="text-xs text-gray-500">{testimonial.relativeTime}</p>
                      )}
                    </div>
                  </div>
                  {testimonial.isGoogle && (
                    <a
                      href="https://www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="Google review"
                    >
                      <svg className="w-8 h-8" viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(Math.min(5, Math.max(1, testimonial.rating)))].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-gold text-neon-gold" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-neon-gold/30 absolute -top-2 -left-1" />
                  <p className="text-gray-300 leading-relaxed relative z-10 pl-6">
                    {testimonial.text}
                  </p>
                </div>

                {testimonial.highlight && (
                  <div className="pt-4 border-t border-gray-700">
                    <span className="text-sm font-semibold text-neon-gold">
                      {testimonial.highlight}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection


