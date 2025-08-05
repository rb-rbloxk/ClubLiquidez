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

const InsightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Technical Analysis' | 'News' | 'Strategy' | 'Education'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const articles: Article[] = [
    {
      id: '1',
      title: 'Bitcoin\'s Bull Run: Technical Analysis and Price Predictions',
      excerpt: 'Deep dive into Bitcoin\'s current market structure and potential breakout scenarios.',
      content: 'Bitcoin has been showing strong bullish momentum...',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Technical Analysis',
      tags: ['Bitcoin', 'Technical Analysis', 'Bull Market'],
      views: 15420,
      featured: true
    },
    {
      id: '2',
      title: 'Risk Management Strategies for Crypto Traders',
      excerpt: 'Essential risk management techniques to protect your capital in volatile markets.',
      content: 'Successful trading is not just about picking winners...',
      author: 'Michael Rodriguez',
      date: '2024-01-14',
      readTime: '12 min read',
      category: 'Strategy',
      tags: ['Risk Management', 'Crypto', 'Trading'],
      views: 8920,
      featured: false
    },
    {
      id: '3',
      title: 'Ethereum 2.0: What Traders Need to Know',
      excerpt: 'Understanding the impact of Ethereum\'s transition on trading strategies.',
      content: 'Ethereum\'s transition to proof-of-stake...',
      author: 'Alex Thompson',
      date: '2024-01-13',
      readTime: '10 min read',
      category: 'News',
      tags: ['Ethereum', 'DeFi', 'Blockchain'],
      views: 12350,
      featured: true
    },
    {
      id: '4',
      title: 'Mastering Support and Resistance Levels',
      excerpt: 'A comprehensive guide to identifying and trading key market levels.',
      content: 'Support and resistance levels are fundamental...',
      author: 'Emma Wilson',
      date: '2024-01-12',
      readTime: '15 min read',
      category: 'Education',
      tags: ['Technical Analysis', 'Support', 'Resistance'],
      views: 6780,
      featured: false
    },
    {
      id: '5',
      title: 'The Psychology of Trading: Managing Emotions',
      excerpt: 'How to maintain discipline and control emotions during market volatility.',
      content: 'Trading psychology is often the difference...',
      author: 'David Park',
      date: '2024-01-11',
      readTime: '9 min read',
      category: 'Strategy',
      tags: ['Psychology', 'Emotions', 'Discipline'],
      views: 9450,
      featured: false
    },
    {
      id: '6',
      title: 'DeFi Yield Farming: Opportunities and Risks',
      excerpt: 'Exploring the latest DeFi protocols and yield farming strategies.',
      content: 'Decentralized Finance has revolutionized...',
      author: 'Lisa Zhang',
      date: '2024-01-10',
      readTime: '11 min read',
      category: 'Education',
      tags: ['DeFi', 'Yield Farming', 'Crypto'],
      views: 11230,
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Insights', count: articles.length },
    { id: 'Technical Analysis', name: 'Technical Analysis', count: articles.filter(a => a.category === 'Technical Analysis').length },
    { id: 'News', name: 'News', count: articles.filter(a => a.category === 'News').length },
    { id: 'Strategy', name: 'Strategy', count: articles.filter(a => a.category === 'Strategy').length },
    { id: 'Education', name: 'Education', count: articles.filter(a => a.category === 'Education').length }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Market <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with expert analysis, market trends, and educational content. 
              From technical analysis to trading strategies, everything you need to succeed.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id as any)}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Insights</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{article.views.toLocaleString()}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neon-blue group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Latest Insights</h2>
              <div className="text-gray-400">
                {filteredArticles.length} articles found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      article.category === 'Technical Analysis' ? 'bg-neon-blue/20 text-neon-blue' :
                      article.category === 'News' ? 'bg-neon-green/20 text-neon-green' :
                      article.category === 'Strategy' ? 'bg-neon-purple/20 text-neon-purple' :
                      'bg-neon-pink/20 text-neon-pink'
                    }`}>
                      {article.category}
                    </span>
                    {article.featured && <Star className="w-4 h-4 text-yellow-400" />}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-dark-700 text-gray-400 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 text-lg">No articles found matching your criteria</div>
                <Button
                  variant="primary"
                  size="md"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trending Ticker */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-dark-800 rounded-2xl border border-gray-700 p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-6 h-6 text-neon-green" />
              <h2 className="text-2xl font-bold text-white">Trending Insights</h2>
            </div>
            
            <div className="flex items-center space-x-8 overflow-x-auto pb-4">
              {[
                'Bitcoin breaks $45,000 resistance',
                'Ethereum DeFi protocols surge',
                'Technical analysis: Support levels',
                'Risk management strategies',
                'Market psychology insights',
                'DeFi yield farming opportunities'
              ].map((trend, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors cursor-pointer whitespace-nowrap"
                >
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-sm">{trend}</span>
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

export default InsightsPage 