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
    name: 'Ananya R.',
    role: 'Cohort 12 · XAU focus',
    location: 'Chennai, IN',
    image: 'AR',
    rating: 5,
    text: 'The session map alone changed how I plan my week. I finally understand when gold is “breathing” vs. trending.',
    highlight: 'Session structure',
  },
  {
    name: 'James M.',
    role: 'Weekend intensive',
    location: 'Dubai, AE',
    image: 'JM',
    rating: 5,
    text: 'Risk module for metals is worth the price of admission. I stopped winging lot size on news spikes.',
    highlight: 'Risk architecture',
  },
  {
    name: 'Claire V.',
    role: 'Online + campus hybrid',
    location: 'London, UK',
    image: 'CV',
    rating: 5,
    text: 'Mentors poke holes in my thesis without arrogance. Feels like a desk review—not a Discord hype circle.',
    highlight: 'Mentor feedback',
  },
  {
    name: 'Wei L.',
    role: 'Macro add-on track',
    location: 'Singapore',
    image: 'WL',
    rating: 5,
    text: 'Gold fundamentals lectures tied cleanly into charts. No astrology—just frameworks I can reuse.',
    highlight: 'Macro literacy',
  },
  {
    name: 'Diego S.',
    role: 'Journal remediation',
    location: 'Madrid, ES',
    image: 'DS',
    rating: 5,
    text: 'They grade journals like coursework. Painful at first, then my discipline curve flattened losses.',
    highlight: 'Accountability',
  },
  {
    name: 'Priya N.',
    role: 'Classroom weeks · TN',
    location: 'Kanchipuram, IN',
    image: 'PN',
    rating: 5,
    text: 'Offline days meant I could whiteboard scenarios with peers. Still referencing those templates months later.',
    highlight: 'Immersive labs',
  },
]

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
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
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-24 left-10 w-80 h-80 bg-brand-gold rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-10 w-96 h-96 bg-brand-navy rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <Star className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-slate-700">Learner voices</span>
          </div>

          <h2 className="font-spectral text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6">
            Proof lives in <span className="gradient-text">process wins</span>
          </h2>

          <div className="text-lg text-slate-600 max-w-3xl mx-auto space-y-2">
            <p>Cohorts stay small so mentors actually know your playbook.</p>
            <p className="text-slate-500 text-base">
              Results vary individually—what we guarantee is curriculum depth and honest critique.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading ? FALLBACK_TESTIMONIALS : testimonials).map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-gold/35 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-deep flex items-center justify-center shrink-0">
                      <span className="text-brand-midnight font-bold text-sm">{testimonial.image}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-900 truncate">{testimonial.name}</h4>
                      {testimonial.role && <p className="text-sm text-slate-500 truncate">{testimonial.role}</p>}
                      {testimonial.location && <p className="text-xs text-slate-500 truncate">{testimonial.location}</p>}
                      {testimonial.isGoogle && testimonial.relativeTime && (
                        <p className="text-xs text-slate-500">{testimonial.relativeTime}</p>
                      )}
                    </div>
                  </div>
                  {testimonial.isGoogle && (
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="shrink-0" aria-label="Google review">
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

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(Math.min(5, Math.max(1, testimonial.rating)))].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-brand-gold/25 absolute -top-2 -left-1" />
                  <p className="text-slate-600 leading-relaxed relative z-10 pl-6 text-sm">{testimonial.text}</p>
                </div>

                {testimonial.highlight && (
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">{testimonial.highlight}</span>
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
