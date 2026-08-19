import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-tight'
    
    const variants = {
      primary: 'bg-brand-gold text-black hover:bg-[#c5a028] shadow-sm active:scale-[0.98]',
      secondary: 'bg-neutral-100 border border-neutral-300 text-black hover:bg-neutral-200 hover:border-neutral-400 active:scale-[0.98]',
      outline: 'border border-brand-gold text-[#b89428] hover:bg-brand-gold hover:text-black active:scale-[0.98] bg-transparent',
      ghost: 'text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-full'
    }
    
    const sizes = {
      sm: 'px-4 py-1.5 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3.5 text-base'
    }
    
    const { whileHover, whileTap, ...buttonProps } = props
    
    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={whileHover || { scale: 1.02 }}
        whileTap={whileTap || { scale: 0.98 }}
        disabled={loading}
        {...buttonProps}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button } 