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
    { name: 'Gold-first syllabus', icon: BookOpen },
    { name: 'Educational charter', icon: Shield },
    { name: 'Small cohort promise', icon: Users },
  ]

  return (
    <footer className="bg-brand-midnight text-slate-300 border-t border-white/10">
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
                <div className="relative h-7 md:h-8 w-auto brightness-0 invert opacity-90">
                  <Image src="/LCP.png" alt="ClubLiquidez" width={200} height={36} className="object-contain h-full w-auto" priority />
                </div>
              </Link>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed">
                Specialist gold trading education for serious learners—session craft, metals risk, psychology, and mentor-led
                labs. Based in Kanchipuram with hybrid delivery worldwide.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {trustBadges.map((badge) => (
                  <motion.div
                    key={badge.name}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 text-slate-500 hover:text-brand-gold-bright transition-colors text-xs"
                  >
                    <badge.icon className="w-4 h-4" />
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
              <h3 className="text-slate-100 font-semibold text-sm tracking-wide uppercase">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-brand-gold-bright transition-colors text-sm">
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
          className="mt-12 pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-spectral font-semibold text-slate-100 mb-2">Gold market briefing list</h3>
              <p className="text-slate-500 text-sm">
                Session notes, enrollment windows, and educator essays—no spam, unsubscribe anytime.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
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
          className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm text-slate-500 text-center md:text-left">
            <span>© {currentYear} ClubLiquidez. All rights reserved.</span>
            <span className="text-xs max-w-xl">
              Educational services only—not investment advice, brokerage, or fund management.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-brand-gold-bright transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-brand-gold-bright transition-colors">
              Terms
            </Link>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.08, y: -2 }}
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-brand-gold-bright hover:bg-white/10 transition-all"
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
