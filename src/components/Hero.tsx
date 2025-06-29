import React from 'react'
import { ArrowDown, DollarSign, TrendingUp, Users } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()

  const handleScrollToFirms = () => {
    const element = document.querySelector('#firms')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-32">
        {/* Main Headline */}
        <h1 className="typography-h1 mb-6 sm:mb-8 leading-tight" style={{ color: theme.textSecondary }}>
          Get Cashback on
          <br />
          <span className="font-extrabold" style={{ color: theme.textPrimary }}>Prop Firm Challenges</span>
        </h1>

        {/* Subtitle */}
        <p className="typography-body sm:typography-body-large mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed px-4" style={{ color: theme.textSecondary }}>
          Earn money back on your trading challenge purchases with our exclusive cashback program.
        </p>

        {/* CTA Button */}
        <div className="mb-16 sm:mb-20">
          <button 
            onClick={handleScrollToFirms}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-2xl typography-ui font-semibold transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              backgroundColor: theme.cta,
              color: theme.ctaText,
              boxShadow: `0 8px 32px ${theme.cta}40`
            }}
          >
            View Prop Firms
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          <div 
            className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: theme.cardBackground,
              backdropFilter: theme.backdropFilter,
              borderColor: theme.cardBorder,
              boxShadow: theme.cardShadow
            }}
          >
            <div 
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl mx-auto mb-3 sm:mb-4"
              style={{ backgroundColor: `${theme.accent}20` }}
            >
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: theme.accent }} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: theme.textPrimary }}>Up to 20%</div>
            <div className="typography-small sm:typography-ui font-semibold" style={{ color: theme.textSecondary }}>Cashback</div>
          </div>
          
          <div 
            className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: theme.cardBackground,
              backdropFilter: theme.backdropFilter,
              borderColor: theme.cardBorder,
              boxShadow: theme.cardShadow
            }}
          >
            <div 
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl mx-auto mb-3 sm:mb-4"
              style={{ backgroundColor: `${theme.accent}20` }}
            >
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: theme.accent }} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: theme.textPrimary }}>15%</div>
            <div className="typography-small sm:typography-ui font-semibold" style={{ color: theme.textSecondary }}>Avg Discount</div>
          </div>
          
          <div 
            className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 sm:col-span-1 col-span-1"
            style={{
              backgroundColor: theme.cardBackground,
              backdropFilter: theme.backdropFilter,
              borderColor: theme.cardBorder,
              boxShadow: theme.cardShadow
            }}
          >
            <div 
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl mx-auto mb-3 sm:mb-4"
              style={{ backgroundColor: `${theme.accent}20` }}
            >
              <Users className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: theme.accent }} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: theme.textPrimary }}>500+</div>
            <div className="typography-small sm:typography-ui font-semibold" style={{ color: theme.textSecondary }}>Traders</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: theme.accent }} />
        </div>
      </div>
    </section>
  )
}