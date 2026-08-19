'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { format } from 'date-fns'
import { getInsights, type Insight } from '@/lib/supabase/insights'
import {
  TrendingUp,
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Eye,
  Clock,
  Star,
  Loader2,
  AlertCircle
} from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: Insight['category']
  tags: string[]
  views: number
  featured: boolean
}

const InsightsPage = () => {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Insight['category'] | 'all'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const loadInsights = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error: fetchError } = await getInsights({
        category: selectedCategory === 'all' ? undefined : selectedCategory,
        published: true
      })

      if (fetchError) {
        setError('Failed to load insights')
        console.error('Error fetching insights:', fetchError)
        setArticles([])
      } else if (data) {
        const transformedArticles: Article[] = data.map((insight: Insight) => ({
          id: insight.id,
          title: insight.title,
          excerpt: insight.excerpt,
          content: insight.content,
          author: insight.author,
          date: insight.published_at || insight.created_at,
          readTime: insight.read_time ? `${insight.read_time} min read` : '5 min read',
          category: insight.category,
          tags: insight.tags || [],
          views: insight.views || 0,
          featured: insight.featured || false
        }))
        setArticles(transformedArticles)
      } else {
        setArticles([])
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error('Error loading insights:', err)
      setArticles([])
    } finally {
      setLoading(false)
    }
  }, [selectedCategory])

  useEffect(() => {
    setMounted(true)
    void loadInsights()
  }, [loadInsights])

  const handleArticleClick = (articleId: string) => {
    // Navigate to full blog post page
    window.location.href = `/insights/${articleId}`
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Use articles from database only
  const displayArticles = articles

  const categories = [
    { id: 'all', name: 'All Insights', count: displayArticles.length },
    { id: 'Forex Education', name: 'Forex Education', count: displayArticles.filter(a => a.category === 'Forex Education').length },
    {
      id: 'Market Strategy',
      name: 'Market Strategy',
      count: displayArticles.filter(
        (a) => a.category === 'Market Strategy' || a.category === 'Gold Strategy'
      ).length,
    },
    { id: 'Risk Management', name: 'Risk Management', count: displayArticles.filter(a => a.category === 'Risk Management').length },
    { id: 'Trading Psychology', name: 'Trading Psychology', count: displayArticles.filter(a => a.category === 'Trading Psychology').length },
    { id: 'Market Breakdown', name: 'Market Breakdown', count: displayArticles.filter(a => a.category === 'Market Breakdown').length },
    { id: 'Technical Analysis', name: 'Technical Analysis', count: displayArticles.filter(a => a.category === 'Technical Analysis').length }
  ]

  const filteredArticles = displayArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      article.category === selectedCategory ||
      (selectedCategory === 'Market Strategy' &&
        (article.category === 'Market Strategy' || article.category === 'Gold Strategy'))
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = displayArticles.filter(article => article.featured)

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
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Market <span className="text-[#b89428]">Insights</span>
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Educational blog for traders. Forex education, market strategy, risk management, trading psychology, and market breakdowns. No signal service — just learning.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-300 rounded-xl text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent shadow-sm"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() =>
                      setSelectedCategory(category.id as Insight['category'] | 'all')
                    }
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
        <section className="py-16 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-black mb-8">Featured Insights</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-neutral-200 p-6 hover:border-brand-gold transition-all duration-300 group cursor-pointer shadow-sm"
                    onClick={() => handleArticleClick(article.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-[#b89428] rounded-full text-xs font-semibold">
                        {article.category === 'Gold Strategy' ? 'Market Strategy' : article.category}
                      </span>
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#b89428] transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-neutral-600">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4 text-neutral-400" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-neutral-400" />
                          <span>{mounted ? format(new Date(article.date), 'MMM dd, yyyy') : '...'}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-neutral-400" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-neutral-500">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{article.views.toLocaleString()}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#b89428] group-hover:translate-x-1 transition-transform" />
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
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-black">Latest Insights</h2>
              <div className="text-neutral-600 text-sm font-medium">
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-gold" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  `${filteredArticles.length} articles found`
                )}
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 text-brand-gold animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-neutral-200 p-6 hover:border-brand-gold transition-all duration-300 group cursor-pointer shadow-sm"
                  onClick={() => handleArticleClick(article.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-[#b89428] rounded-full text-xs font-semibold">
                      {article.category === 'Gold Strategy' ? 'Market Strategy' : article.category}
                    </span>
                    {article.featured && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
                  </div>
                  
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#b89428] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md text-xs font-medium border border-neutral-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-600">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4 text-neutral-400" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-neutral-400" />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
                ))}
              </div>
            )}

            {!loading && filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                {error ? (
                  <>
                    <AlertCircle className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <div className="text-black text-lg font-semibold mb-2">Failed to load insights</div>
                    <div className="text-neutral-600 text-sm mb-4">{error}</div>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={loadInsights}
                    >
                      Retry
                    </Button>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <div className="text-black text-lg font-semibold mb-2">No insights found</div>
                    <div className="text-neutral-600 text-sm mb-4">
                      {searchTerm || selectedCategory !== 'all' 
                        ? 'Try adjusting your search or filters'
                        : 'No published insights available yet'}
                    </div>
                    {(searchTerm || selectedCategory !== 'all') && (
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => {
                          setSearchTerm('')
                          setSelectedCategory('all')
                        }}
                      >
                        Clear Filters
                      </Button>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trending Ticker */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-6 h-6 text-[#b89428]" />
              <h2 className="text-2xl font-bold text-black">Trending Insights</h2>
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
                  className="flex items-center space-x-2 text-neutral-700 hover:text-[#b89428] transition-colors cursor-pointer whitespace-nowrap font-medium"
                >
                  <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
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