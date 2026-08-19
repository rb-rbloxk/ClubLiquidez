'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { format } from 'date-fns'
import { getInsightById, incrementInsightViews, type Insight } from '@/lib/supabase/insights'
import { 
  Calendar,
  User,
  Clock,
  Eye,
  ArrowLeft,
  Tag,
  Share2,
  Loader2,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const BlogPostPage = () => {
  const params = useParams()
  const id = params.id as string
  
  const [insight, setInsight] = useState<Insight | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadInsight = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error: fetchError } = await getInsightById(id)

      if (fetchError) {
        setError('Failed to load blog post')
        console.error('Error fetching insight:', fetchError)
      } else if (data) {
        setInsight(data)
        await incrementInsightViews(id)
      } else {
        setError('Blog post not found')
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error('Error loading insight:', err)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    if (id) {
      void loadInsight()
    }
  }, [id, loadInsight])

  const handleShare = async () => {
    if (navigator.share && insight) {
      try {
        await navigator.share({
          title: insight.title,
          text: insight.excerpt,
          url: window.location.href,
        })
      } catch {
        console.log('Share cancelled')
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-brand-gold animate-spin mx-auto mb-4" />
            <p className="text-neutral-600 font-medium">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !insight) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-md mx-auto px-4">
            <AlertCircle className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-black mb-2">Blog Post Not Found</h1>
            <p className="text-neutral-600 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
            <Link href="/insights">
              <Button variant="primary" size="md">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/insights">
              <Button variant="ghost" size="sm" className="mb-8 group border border-neutral-200">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Insights
              </Button>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 border border-neutral-200 text-[#b89428]">
                {insight.category === 'Gold Strategy' ? 'Market Strategy' : insight.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              {insight.title}
            </h1>

            <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
              {insight.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-600 text-sm font-medium mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-neutral-400" />
                <span>{insight.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-neutral-400" />
                <span>{format(new Date(insight.published_at || insight.created_at), 'MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-neutral-400" />
                <span>{insight.read_time ? `${insight.read_time} min read` : '5 min read'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-neutral-400" />
                <span>{insight.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Cover Image */}
            {insight.cover_image_url && (
              <div className="mb-8 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                <Image
                  src={insight.cover_image_url}
                  alt={insight.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                  unoptimized
                />
              </div>
            )}

            {/* Tags */}
            {insight.tags && insight.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {insight.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-sm text-neutral-700 font-medium"
                  >
                    <Tag className="w-3 h-3 text-[#b89428]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Share Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-neutral-300 rounded-lg text-black hover:border-brand-gold transition-colors font-medium shadow-sm"
              >
                <Share2 className="w-4 h-4 text-[#b89428]" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none
              prose-headings:text-black
              prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-[#b89428] hover:prose-a:underline
              prose-strong:text-black
              prose-code:text-[#b89428]
              prose-pre:bg-neutral-100 prose-pre:border prose-pre:border-neutral-200
              prose-blockquote:border-l-4 prose-blockquote:border-[#b89428] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-neutral-700
              prose-ul:text-neutral-700
              prose-ol:text-neutral-700
              prose-li:text-neutral-700
              prose-img:rounded-xl
              prose-img:border prose-img:border-neutral-200"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">More Insights</h2>
            <p className="text-neutral-600">Explore more articles from Club Liquidez</p>
          </div>
          <div className="text-center">
            <Link href="/insights">
              <Button variant="primary" size="lg">
                View All Insights
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BlogPostPage
