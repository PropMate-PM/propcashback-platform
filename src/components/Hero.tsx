import React from 'react'
import { ArrowDown, DollarSign, TrendingUp, Users, Vault } from 'lucide-react'
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero content - the background is now handled by the fixed layers in Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-32">
        
        {/* Main Hero Content */}
        <div className="mb-16 sm:mb-20">
          {/* Punchline */}
          <div className="mb-8 sm:mb-12">
            <h1 className="mb-4 sm:mb-6 leading-none">
              <span 
                className="block text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight relative z-10"
                style={{ 
                  color: theme.accent,
                  textShadow: `0 4px 20px ${theme.accent}40`,
                  // Use solid color instead of gradient for better visibility in light mode
                  WebkitTextFillColor: theme.accent,
                  position: 'relative'
                }}
              >
                50% BACK
              </span>
              <span 
                className="block text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mt-2 sm:mt-4 relative z-10"
                style={{ 
                  color: theme.textPrimary,
                  textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
                  position: 'relative'
                }}
              >
                NO CATCH
              </span>
            </h1>
          </div>

          {/* Golden Vault Visual */}
          <div className="relative mb-8 sm:mb-12 flex justify-center">
            <div 
              className="relative p-8 sm:p-12 rounded-3xl border-2 transform hover:scale-105 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(215, 196, 242, 0.1) 0%, 
                  rgba(139, 90, 159, 0.2) 50%, 
                  rgba(215, 196, 242, 0.1) 100%
                )`,
                borderColor: `${theme.accent}40`,
                boxShadow: `0 20px 60px ${theme.accent}20, inset 0 1px 0 ${theme.accent}30`
              }}
            >
              {/* Vault Icon with Glow Effect */}
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-60"
                  style={{ backgroundColor: theme.accent }}
                />
                <div 
                  className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.cta} 100%)`,
                    boxShadow: `0 8px 32px ${theme.accent}40`
                  }}
                >
                  <Vault className="w-10 h-10 sm:w-14 sm:h-14" style={{ color: theme.ctaText }} />
                </div>
              </div>

              {/* Money Symbols Floating Around Vault */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: `${theme.accent}20`, animationDelay: '0s' }}>
                <DollarSign className="w-4 h-4" style={{ color: theme.accent }} />
              </div>
              <div className="absolute -top-2 -right-6 w-6 h-6 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: `${theme.accent}20`, animationDelay: '0.5s' }}>
                <span className="text-sm font-bold" style={{ color: theme.accent }}>$</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: `${theme.accent}20`, animationDelay: '1s' }}>
                <TrendingUp className="w-4 h-4" style={{ color: theme.accent }} />
              </div>
              <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: `${theme.accent}20`, animationDelay: '1.5s' }}>
                <span className="text-sm font-bold" style={{ color: theme.accent }}>%</span>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <p className="typography-body-large sm:text-xl lg:text-2xl mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4 font-medium" style={{ color: theme.textSecondary }}>
            We give you <span className="font-bold" style={{ color: theme.accent }}>50% of our affiliate revenue</span> as cashback.
            <br className="hidden sm:block" />
            <span className="font-semibold" style={{ color: theme.textPrimary }}>Real money. Straight to your wallet.</span>
          </p>

          {/* CTA Button */}
          <div className="mb-16 sm:mb-20">
            <button 
              onClick={handleScrollToFirms}
              className="group relative inline-flex items-center px-8 sm:px-12 py-4 sm:py-5 rounded-2xl typography-ui sm:text-lg font-bold transition-all duration-300 hover:scale-105 transform"
              style={{
                background: `linear-gradient(135deg, ${theme.cta} 0%, ${theme.accent} 100%)`,
                color: theme.ctaText,
                boxShadow: `0 12px 40px ${theme.cta}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
              }}
            >
              <span className="relative z-10">Get Your Cashback</span>
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.cta} 100%)`
                }}
              />
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div 
            className="group p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:border-opacity-60"
            style={{
              backgroundColor: theme.cardBackground,
              backdropFilter: theme.backdropFilter,
              borderColor: theme.cardBorder,
              boxShadow: theme.cardShadow
            }}
          >
            <div 
              className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${theme.accent}20 0%, ${theme.cta}20 100%)`,
                boxShadow: `0 4px 16px ${theme.accent}20`
              }}
            >
              <DollarSign className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: theme.accent }} />
            </div>
            <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-3" style={{ color: theme.textPrimary }}>Up to 50%</div>
            <div className="typography-ui sm:typography-body font-semibold" style={{ color: theme.textSecondary }}>Cashback Rate</div>
          </div>
          
          <div 
            className="group p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:border-opacity-60"
            style={{
              backgroundColor: theme.cardBackground,
              backdropFilter: theme.backdropFilter,
              borderColor: theme.cardBorder,
              boxShadow: theme.cardShadow
            }}
          >
            <div 
              className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${theme.accent}20 0%, ${theme.cta}20 100%)`,
                boxShadow: `0 4px 16px ${theme.accent}20`
              }}
            >
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: theme.accent }} />
            </div>
            <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-3" style={{ color: theme.textPrimary }}>$50K+</div>
            <div className="typography-ui sm:typography-body font-semibold" style={{ color: theme.textSecondary }}>Paid Out</div>
          </div>
          
          <div 
            className="group p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:border-opacity-60 sm:col-span-1 col-span-1"
            style={{
              backgroundColor: theme.cardBackground,
              backdropFilter: theme.backdropFilter,
              borderColor: theme.cardBorder,
              boxShadow: theme.cardShadow
            }}
          >
            <div 
              className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${theme.accent}20 0%, ${theme.cta}20 100%)`,
                boxShadow: `0 4px 16px ${theme.accent}20`
              }}
            >
              <Users className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: theme.accent }} />
            </div>
            <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-3" style={{ color: theme.textPrimary }}>1,000+</div>
            <div className="typography-ui sm:typography-body font-semibold" style={{ color: theme.textSecondary }}>Happy Traders</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${theme.accent}20` }}
          >
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: theme.accent }} />
          </div>
        </div>
      </div>

      {/* Additional CSS for enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px ${theme.accent}40; }
          50% { box-shadow: 0 0 40px ${theme.accent}60; }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}