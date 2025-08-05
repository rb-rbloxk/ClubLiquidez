'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { 
  Calculator, 
  BarChart3, 
  Bell, 
  TrendingUp, 
  DollarSign,
  Percent,
  Target,
  Zap,
  Settings,
  Play,
  Pause,
  Square
} from 'lucide-react'

const TradingToolsPage = () => {
  const [calculatorType, setCalculatorType] = useState<'position' | 'risk' | 'profit'>('position')
  const [positionSize, setPositionSize] = useState('10000')
  const [entryPrice, setEntryPrice] = useState('100')
  const [stopLoss, setStopLoss] = useState('95')
  const [takeProfit, setTakeProfit] = useState('110')
  const [riskPercentage, setRiskPercentage] = useState('2')
  const [accountSize, setAccountSize] = useState('50000')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Calculate position sizing
  const calculatePosition = () => {
    const entry = parseFloat(entryPrice)
    const stop = parseFloat(stopLoss)
    const risk = parseFloat(riskPercentage) / 100
    const account = parseFloat(accountSize)

    const riskAmount = account * risk
    const priceRisk = Math.abs(entry - stop)
    const positionSize = riskAmount / priceRisk
    const totalValue = positionSize * entry

    return {
      positionSize: positionSize.toFixed(2),
      totalValue: totalValue.toFixed(2),
      riskAmount: riskAmount.toFixed(2)
    }
  }

  const tools = [
    {
      icon: Calculator,
      title: 'Position Calculator',
      description: 'Calculate optimal position sizes based on risk management',
      color: 'text-neon-blue'
    },
    {
      icon: BarChart3,
      title: 'Advanced Charting',
      description: 'Professional-grade charts with 100+ technical indicators',
      color: 'text-neon-green'
    },
    {
      icon: Bell,
      title: 'Price Alerts',
      description: 'Set custom alerts for price movements and news',
      color: 'text-neon-purple'
    },
    {
      icon: Target,
      title: 'Risk Management',
      description: 'Advanced risk assessment and portfolio analysis',
      color: 'text-neon-pink'
    }
  ]

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
              Trading <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade tools to enhance your trading strategy. 
              From position calculators to advanced charting, everything you need to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 rounded-2xl border border-gray-700 p-6 hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 bg-dark-700 rounded-lg group-hover:bg-neon-blue/20 transition-colors`}>
                    <tool.icon className={`w-6 h-6 ${tool.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Position Calculator */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Calculator Form */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-6 h-6 text-neon-blue" />
                <h2 className="text-2xl font-bold text-white">Position Calculator</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Account Size ($)
                  </label>
                  <input
                    type="number"
                    value={accountSize}
                    onChange={(e) => setAccountSize(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Risk Percentage (%)
                  </label>
                  <input
                    type="number"
                    value={riskPercentage}
                    onChange={(e) => setRiskPercentage(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Entry Price ($)
                  </label>
                  <input
                    type="number"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Stop Loss ($)
                    </label>
                    <input
                      type="number"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(e.target.value)}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Take Profit ($)
                    </label>
                    <input
                      type="number"
                      value={takeProfit}
                      onChange={(e) => setTakeProfit(e.target.value)}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Calculation Results</h3>
              
              {parseFloat(accountSize) > 0 && parseFloat(riskPercentage) > 0 && (
                <div className="space-y-6">
                  {(() => {
                    const results = calculatePosition()
                    return (
                      <>
                        <div className="flex justify-between items-center p-4 bg-dark-700 rounded-lg">
                          <span className="text-gray-300">Position Size</span>
                          <span className="text-white font-semibold">{results.positionSize} units</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-dark-700 rounded-lg">
                          <span className="text-gray-300">Total Value</span>
                          <span className="text-white font-semibold">${results.totalValue}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-dark-700 rounded-lg">
                          <span className="text-gray-300">Risk Amount</span>
                          <span className="text-white font-semibold">${results.riskAmount}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-dark-700 rounded-lg">
                          <span className="text-gray-300">Risk/Reward Ratio</span>
                          <span className="text-white font-semibold">
                            {((parseFloat(takeProfit) - parseFloat(entryPrice)) / (parseFloat(entryPrice) - parseFloat(stopLoss))).toFixed(2)}:1
                          </span>
                        </div>
                      </>
                    )
                  })()}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charting Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-dark-800 rounded-2xl border border-gray-700 p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-6 h-6 text-neon-green" />
                <h2 className="text-2xl font-bold text-white">Advanced Charting</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="primary" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Live Trading
                </Button>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="h-96 bg-dark-700 rounded-lg border border-gray-600 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Interactive TradingView Chart</p>
                <p className="text-sm text-gray-500 mt-2">Professional-grade charting with 100+ indicators</p>
              </div>
            </div>

            {/* Chart Controls */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Timeframe:</span>
                <div className="flex space-x-2">
                  {['1m', '5m', '15m', '1h', '4h', '1d'].map((tf) => (
                    <Button key={tf} variant="ghost" size="sm">
                      {tf}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Indicators:</span>
                <div className="flex space-x-2">
                  {['MA', 'RSI', 'MACD', 'BB'].map((ind) => (
                    <Button key={ind} variant="outline" size="sm">
                      {ind}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price Alerts */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Alert Form */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Bell className="w-6 h-6 text-neon-purple" />
                <h2 className="text-2xl font-bold text-white">Price Alerts</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Symbol
                  </label>
                  <input
                    type="text"
                    placeholder="BTC/USD"
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Alert Price
                    </label>
                    <input
                      type="number"
                      placeholder="45000"
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Condition
                    </label>
                    <select className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                      <option>Above</option>
                      <option>Below</option>
                      <option>Crosses</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Notification Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-600 bg-dark-700 text-neon-blue focus:ring-neon-blue" />
                      <span className="text-gray-300">Email</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-600 bg-dark-700 text-neon-blue focus:ring-neon-blue" />
                      <span className="text-gray-300">Push Notification</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-600 bg-dark-700 text-neon-blue focus:ring-neon-blue" />
                      <span className="text-gray-300">SMS</span>
                    </label>
                  </div>
                </div>

                <Button variant="primary" className="w-full">
                  Create Alert
                </Button>
              </div>
            </div>

            {/* Active Alerts */}
            <div className="bg-dark-800 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Active Alerts</h3>
              
              <div className="space-y-4">
                {[
                  { symbol: 'BTC/USD', price: 45000, condition: 'Above', status: 'Active' },
                  { symbol: 'ETH/USD', price: 2800, condition: 'Below', status: 'Active' },
                  { symbol: 'AAPL', price: 180, condition: 'Crosses', status: 'Triggered' }
                ].map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold">{alert.symbol}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          alert.status === 'Active' ? 'bg-neon-green/20 text-neon-green' : 'bg-neon-pink/20 text-neon-pink'
                        }`}>
                          {alert.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">
                        {alert.condition} ${alert.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Pause className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Square className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TradingToolsPage 