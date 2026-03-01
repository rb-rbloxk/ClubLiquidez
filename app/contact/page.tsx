'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const WHATSAPP_NUMBER = '917338833887'
const WHATSAPP_MESSAGE = 'Hi, I would like to know more about your courses and batch availability.'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Course and batch inquiries',
      contact: 'support@clubliquidez.com',
      response: 'Within 2 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Speak with our course advisors',
      contact: '+91 733 88 33887',
      response: '24/7 Available'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Quick questions and batch inquiries',
      contact: '+91 733 88 33887',
      response: 'Real-time'
    }
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Course and batch inquiries, or want to book a free session? 
              We're here to help. Visit us in Kanchipuram or reach out online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">How Can We Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-gold/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-dark-700 rounded-lg group-hover:bg-neon-gold/20 transition-colors">
                      <method.icon className="w-6 h-6 text-neon-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{method.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{method.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Contact:</span>
                      <span className="text-white font-semibold">{method.contact}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Response:</span>
                      <span className="text-neon-gold-champagne text-sm">{method.response}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Form */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Send className="w-6 h-6 text-neon-gold" />
                <h2 className="text-2xl font-bold text-white">Batch inquiry form</h2>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-neon-gold-champagne/20 border border-neon-gold-champagne/30 rounded-lg mb-6"
                >
                  <CheckCircle className="w-5 h-5 text-neon-gold-champagne" />
                  <span className="text-neon-gold-champagne">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-neon-amber/20 border border-neon-amber/30 rounded-lg mb-6"
                >
                  <AlertCircle className="w-5 h-5 text-neon-amber" />
                  <span className="text-neon-amber">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="Batch / Course inquiry">Batch / Course inquiry</option>
                    <option value="Book a Free Session">Book a Free Session</option>
                    <option value="Trading Support">Trading Support</option>
                    <option value="Technical Issues">Technical Issues</option>
                    <option value="Account Questions">Account Questions</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-gold focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  loading={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-neon-gold" />
                    <span className="text-gray-300">support@clubliquidez.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-neon-gold" />
                    <span className="text-gray-300">+91 733 88 33887</span>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-neon-gold hover:text-neon-gold-champagne transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp – Course & batch inquiry</span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-neon-gold" />
                    <span className="text-gray-300">24/7 Support Available</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Location – Kanchipuram</h3>
                <p className="text-gray-400 mb-4">Education center in Kanchipuram, Tamil Nadu.</p>
                <div className="aspect-video rounded-xl overflow-hidden border border-gray-700">
                  <iframe
                    title="Kanchipuram location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.360761278!2d79.6996!3d12.8392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f2b37b2e7b3d%3A0x0!2sKanchipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[240px]"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  <a href="https://www.google.com/maps/search/education+center+Kanchipuram+Tamil+Nadu" target="_blank" rel="noopener noreferrer" className="text-neon-gold hover:underline">Open in Google Maps</a>
                </p>
              </div>

              {/* <div>
                <h3 className="text-2xl font-bold text-white mb-6">Office Locations</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <motion.div
                      key={office.city}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-dark-800 rounded-xl border border-gray-700 p-4"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <MapPin className="w-5 h-5 text-neon-gold" />
                        <h4 className="text-white font-semibold">{office.city}, {office.country}</h4>
                      </div>
                      <div className="space-y-2 text-sm text-gray-400">
                        <p>{office.address}</p>
                        <p>{office.phone}</p>
                        <p>{office.email}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How do I join a batch?',
                  answer: 'Contact us via the form, WhatsApp, or phone. We will share batch schedules and enrollment details. Limited seats per batch.'
                },
                {
                  question: 'Do you have offline classes?',
                  answer: 'Yes. We run offline classroom batches in Kanchipuram, Tamil Nadu. Inquire for the next batch schedule.'
                },
                {
                  question: 'What is included in the course?',
                  answer: 'Structured curriculum (Forex, Gold, Price Action, Risk Management, Psychology), live sessions, study materials, and mentorship. We do not provide investment advice or manage funds.'
                },
                {
                  question: 'Do you offer customer support?',
                  answer: 'Yes. We provide support via email, phone, and WhatsApp for course and batch inquiries.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
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

export default ContactPage 