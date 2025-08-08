'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  TrendingUp, 
  BookOpen, 
  BarChart3, 
  Calendar,
  User,
  Tag,
  ArrowRight,
  Eye,
  Clock,
  Star
} from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: 'Technical Analysis' | 'News' | 'Strategy' | 'Education'
  tags: string[]
  views: number
  featured: boolean
}


export default function AcademyPage() { 
  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-full border border-neon-purple/20 mb-8">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
              <span className="text-sm text-neon-purple">Trader Academy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Trader Academy</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our goal: Help traders gain clarity, structure & confidence.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              What You'll <span className="gradient-text">Learn</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6 text-neon-purple">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.44 2.5 2.5 0 0 1-.54-2.5 2.5 2.5 0 0 1 1.5-3.5"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.44 2.5 2.5 0 0 0 .54-2.5 2.5 2.5 0 0 0-1.5-3.5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Trading Psychology</h3>
              <p className="text-gray-400 text-sm">Master your mindset and emotional control</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-neon-purple">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Risk Management</h3>
              <p className="text-gray-400 text-sm">Position sizing and risk control strategies</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-6 h-6 text-neon-purple">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2 .5 3"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategy Building</h3>
              <p className="text-gray-400 text-sm">Build your personal trading strategy</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot w-6 h-6 text-neon-purple">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Automated Trading</h3>
              <p className="text-gray-400 text-sm">Introduction to algorithmic trading</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-neon-purple">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Copy Trading</h3>
              <p className="text-gray-400 text-sm">Copy trading setups & rules</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6 text-neon-purple">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Consistency</h3>
              <p className="text-gray-400 text-sm">Develop rules that lead to consistency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Formats Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Learning <span className="gradient-text">Formats</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video w-6 h-6 text-neon-purple">
                  <path d="m22 8-6 4 6 4V8Z"></path>
                  <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Zoom Sessions</h3>
              <p className="text-gray-400 text-sm">Interactive live training sessions</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle w-6 h-6 text-neon-purple">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10,8 16,12 10,16"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Video Modules</h3>
              <p className="text-gray-400 text-sm">Pre-recorded comprehensive modules</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6 text-neon-purple">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Weekly Q&A</h3>
              <p className="text-gray-400 text-sm">Get your questions answered weekly</p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check w-6 h-6 text-neon-purple">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <polyline points="16,11 18,13 22,9"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mentorship</h3>
              <p className="text-gray-400 text-sm">One-on-one mentorship support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Academy <span className="gradient-text">Curriculum</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Foundation Module</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">Trading psychology fundamentals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">Risk management principles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">Market structure basics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">Position sizing strategies</span>
                </div>
              </div>
            </div>

            <div className="bg-dark-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Advanced Module</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">Strategy development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">Automated trading intro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">Copy trading mastery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">Performance optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join Our <span className="gradient-text">Next Batch</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Gain clarity, structure & confidence in your trading journey
          </p>
          <button className="inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed button-primary text-white font-semibold px-8 py-4 text-lg">
            Apply Now
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}