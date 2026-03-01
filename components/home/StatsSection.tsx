'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })


  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="gradient-text">Our Academy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Structured education. Limited seats. Real mentorship.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { label: '500+', sub: 'Students Trained' },
              { label: '4+', sub: 'Years Experience' },
              { label: '1:1', sub: 'Mentorship' },
              { label: 'Small', sub: 'Batch Size' },
            ].map((item, index) => (
              <motion.div
                key={item.sub}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="text-center p-4 bg-dark-800 rounded-lg border border-gray-700"
              >
                <span className="text-neon-gold font-bold text-2xl block">{item.label}</span>
                <span className="text-white font-medium text-sm">{item.sub}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto text-center"
          >
            We focus on discipline, psychology, and structured learning — not hype or get-rich promises. No signal selling. Just education.
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}

export default StatsSection 