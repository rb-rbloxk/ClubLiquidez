'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Clock,
  Wifi,
  Server,
  Database
} from 'lucide-react'

const StatusPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      name: 'Trading Platform',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'None',
      icon: Activity
    },
    {
      name: 'Market Data',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: 'None',
      icon: Wifi
    },
    {
      name: 'Order Execution',
      status: 'operational',
      uptime: '99.98%',
      lastIncident: 'None',
      icon: Server
    },
    {
      name: 'User Accounts',
      status: 'operational',
      uptime: '99.97%',
      lastIncident: 'None',
      icon: Database
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600'
      case 'degraded': return 'text-amber-600'
      case 'outage': return 'text-red-600'
      default: return 'text-neutral-500'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle
      case 'degraded': return AlertTriangle
      case 'outage': return XCircle
      default: return Clock
    }
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Activity className="w-8 h-8 text-[#b89428]" />
              <h1 className="text-5xl lg:text-6xl font-bold text-black">
                System <span className="text-[#b89428]">Status</span>
              </h1>
            </div>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Real-time status of our trading platform and services. 
              We&apos;re committed to providing 99.9% uptime.
            </p>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              <span className="text-green-700 font-semibold text-sm">All Systems Operational</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-black text-center mb-12">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const StatusIcon = getStatusIcon(service.status)
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-6 h-6 text-[#b89428]" />
                        <h3 className="text-lg font-bold text-black">{service.name}</h3>
                      </div>
                      <StatusIcon className={`w-6 h-6 ${getStatusColor(service.status)}`} />
                    </div>
                    <div className="space-y-2 text-sm font-medium">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Status:</span>
                        <span className={`font-semibold capitalize ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Uptime:</span>
                        <span className="text-black font-semibold">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Last Incident:</span>
                        <span className="text-neutral-600">{service.lastIncident}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Uptime Statistics */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-black text-center mb-12">Uptime Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { period: 'Last 24 Hours', uptime: '99.99%', incidents: 0 },
                { period: 'Last 7 Days', uptime: '99.98%', incidents: 0 },
                { period: 'Last 30 Days', uptime: '99.97%', incidents: 1 },
                { period: 'Last 90 Days', uptime: '99.95%', incidents: 2 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.period}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-neutral-50 rounded-2xl border border-neutral-200 p-6 shadow-sm"
                >
                  <div className="text-3xl font-bold text-black mb-2">{stat.uptime}</div>
                  <div className="text-neutral-700 font-semibold mb-1">{stat.period}</div>
                  <div className="text-sm text-neutral-500">{stat.incidents} incidents</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-black text-center mb-12">Recent Incidents</h2>
            <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
              <div className="text-center text-neutral-600">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">No Recent Incidents</h3>
                <p className="leading-relaxed text-sm">All systems are operating normally. We&apos;ll post updates here if any issues arise.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Stay Updated</h2>
            <p className="text-xl text-neutral-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get notified about system status updates and incidents via email or SMS.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-white border border-neutral-300 rounded-full text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm font-medium"
                />
                <button className="px-6 py-3 bg-brand-gold text-black font-semibold rounded-full hover:bg-[#c5a028] active:scale-[0.98] transition-all shadow-sm cursor-pointer text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default StatusPage 