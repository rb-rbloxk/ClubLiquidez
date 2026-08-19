'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Twitter, Linkedin, Github, ArrowRight, Shield, BookOpen, Users } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Learn',
      links: [
        { name: 'Programs', href: '/programs' },
        { name: 'Algo Trading', href: '/algo-trading' },
        { name: 'Copy Trading', href: '/copy-trading' },
        { name: 'Academy', href: '/academy' },
        { name: 'Insights', href: '/insights' },
        { name: 'Markets', href: '/markets' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Status', href: '/status' },
        { name: 'Security', href: '/security' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
      ],
    },
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
  ]

  const trustBadges = [
    { name: 'Market-first syllabus', icon: BookOpen },
    { name: 'Educational charter', icon: Shield },
    { name: 'Small cohort promise', icon: Users },
  ]

  return (
    <footer className="bg-white text-neutral-800 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="relative h-7 md:h-8 w-auto">
                  <Image src="/liquidez.png" alt="ClubLiquidez" width={200} height={36} className="object-contain h-full w-auto" priority />
                </div>
              </Link>
              <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
                Specialist market trading education for serious learners—session craft, metals risk, psychology, and mentor-led
                labs. Based in Kanchipuram with hybrid delivery worldwide.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {trustBadges.map((badge) => (
                  <motion.div
                    key={badge.name}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 text-neutral-600 hover:text-black transition-colors text-xs"
                  >
                    <badge.icon className="w-4 h-4 text-brand-gold" />
                    <span>{badge.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="space-y-4"
            >
              <h3 className="text-neutral-900 font-semibold text-sm tracking-wide uppercase">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-neutral-600 hover:text-black transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-10 border-t border-neutral-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-black mb-2">Market briefing list</h3>
              <p className="text-neutral-600 text-sm">
                Session notes, enrollment windows, and educator essays—no spam, unsubscribe anytime.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-brand-gold"
              />
              <Button variant="primary" size="md" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm text-neutral-500 text-center md:text-left">
            <span>© {currentYear} ClubLiquidez. All rights reserved.</span>
            <span className="text-xs max-w-xl">
              Educational services only—not investment advice, brokerage, or fund management.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-neutral-600 hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-600 hover:text-black transition-colors">
              Terms
            </Link>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.08, y: -2 }}
                className="p-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 hover:text-black hover:border-brand-gold transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
