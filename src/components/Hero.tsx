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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Extended Premium Background with Gradient - covers header area */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, 
            ${theme.background} 0%, 
            rgba(139, 90, 159, 0.1) 25%, 
            ${theme.background} 50%, 
            rgba(215, 196, 242, 0.05) 75%, 
            ${theme.background} 100%
          )`,
          // Extend background upward to cover header
          top: '-120px',
          height: 'calc(100vh + 120px)'
        }}
      />

      {/* Subtle Pattern Overlay - also extended */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.accent} 2px, transparent 2px), 
                           radial-gradient(circle at 75% 75%, ${theme.accent} 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 40px 40px',
          top: '-120px',
          height: 'calc(100vh + 120px)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-32">
        
        {/* Main Hero Content */}
        <div className="mb-16 sm:mb-20">
          {/* Punchline */}
          <div className="mb-8 sm:mb-12">
            <h1 className="mb-4 sm:mb-6 leading-none">
              <span 
                className="block text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight"
                style={{ 
                  color: theme.accent,
                  textShadow: `0 4px 20px ${theme.accent}40`,
                  background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.cta} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                50% BACK.
              </span>
              <span 
                className="block text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mt-2 sm:mt-4"
                style={{ 
                  color: theme.textPrimary,
                  textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`
                }}
              >
                NO CATCH.
              </span>
            </h1>
          </div>

          {/* Floating Dollar Bill Visual */}
          <div className="relative mb-8 sm:mb-12 flex justify-center">
            <div className="relative">
              {/* Main Dollar Bill Container */}
              <div 
                className="relative transform hover:scale-105 transition-all duration-500 animate-float"
                style={{
                  transform: 'perspective(1000px) rotateX(15deg) rotateY(-30deg)',
                  filter: `drop-shadow(0 20px 40px ${theme.accent}30)`
                }}
              >
                {/* Dollar Bill SVG */}
                <svg 
                  width="320" 
                  height="140" 
                  viewBox="0 0 320 140" 
                  className="w-64 h-28 sm:w-80 sm:h-35"
                  style={{
                    filter: `drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))`
                  }}
                >
                  {/* Bill Background */}
                  <defs>
                    <linearGradient id="billGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#2A4A3A', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#1E3A2E', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#2A4A3A', stopOpacity: 1 }} />
                    </linearGradient>
                    <pattern id="billPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="rgba(255, 255, 255, 0.1)" />
                    </pattern>
                  </defs>
                  
                  {/* Main Bill Rectangle */}
                  <rect 
                    x="5" 
                    y="5" 
                    width="310" 
                    height="130" 
                    rx="8" 
                    ry="8" 
                    fill="url(#billGradient)"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="1"
                  />
                  
                  {/* Pattern Overlay */}
                  <rect 
                    x="5" 
                    y="5" 
                    width="310" 
                    height="130" 
                    rx="8" 
                    ry="8" 
                    fill="url(#billPattern)"
                  />
                  
                  {/* Corner Decorations */}
                  <circle cx="40" cy="35" r="15" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
                  <circle cx="280" cy="35" r="15" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
                  <circle cx="40" cy="105" r="15" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
                  <circle cx="280" cy="105" r="15" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
                  
                  {/* Central Dollar Symbol */}
                  <circle cx="160" cy="70" r="35" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
                  <text 
                    x="160" 
                    y="80" 
                    textAnchor="middle" 
                    fontSize="32" 
                    fontWeight="bold" 
                    fill="rgba(255, 255, 255, 0.9)"
                    fontFamily="serif"
                  >
                    $
                  </text>
                  
                  {/* Corner Numbers */}
                  <text x="25" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="rgba(255, 255, 255, 0.8)">50</text>
                  <text x="295" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="rgba(255, 255, 255, 0.8)">50</text>
                  <text x="25" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="rgba(255, 255, 255, 0.8)">50</text>
                  <text x="295" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="rgba(255, 255, 255, 0.8)">50</text>
                  
                  {/* Decorative Lines */}
                  <line x1="70" y1="35" x2="250" y2="35" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
                  <line x1="70" y1="105" x2="250" y2="105" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
                  
                  {/* Text Elements */}
                  <text x="160" y="50" textAnchor="middle" fontSize="10" fill="rgba(255, 255, 255, 0.7)" fontFamily="serif">CASHBACK NOTE</text>
                  <text x="160" y="95" textAnchor="middle" fontSize="8" fill="rgba(255, 255, 255, 0.6)" fontFamily="serif">FIFTY PERCENT</text>
                </svg>
              </div>

              {/* Floating Money Symbols Around Bill */}
              <div className="absolute -top-6 -left-8 w-8 h-8 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: `${theme.accent}20`, animationDelay: '0s' }}>
                <DollarSign className="w-4 h-4" style={{ color: theme.accent }} />
              </div>
              <div className="absolute -top-4 -right-10 w-6 h-6 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: `${theme.accent}20`, animationDelay: '0.7s' }}>
                <span className="text-sm font-bold" style={{ color: theme.accent }}>$</span>
              </div>
              <div className="absolute -bottom-6 -right-8 w-8 h-8 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: `${theme.accent}20`, animationDelay: '1.4s' }}>
                <TrendingUp className="w-4 h-4" style={{ color: theme.accent }} />
              </div>
              <div className="absolute -bottom-4 -left-10 w-6 h-6 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: `${theme.accent}20`, animationDelay: '2.1s' }}>
                <span className="text-sm font-bold" style={{ color: theme.accent }}>%</span>
              </div>

              {/* Glow Effect Behind Bill */}
              <div 
                className="absolute inset-0 rounded-2xl blur-xl opacity-30 animate-pulse"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.cta} 100%)`,
                  transform: 'scale(1.2)',
                  zIndex: -1
                }}
              />
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

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: perspective(1000px) rotateX(15deg) rotateY(-30deg) translateY(0px);
          }
          50% { 
            transform: perspective(1000px) rotateX(15deg) rotateY(-30deg) translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px ${theme.accent}40; 
          }
          50% { 
            box-shadow: 0 0 40px ${theme.accent}60; 
          }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { 
            background-position: -200% 0; 
          }
          100% { 
            background-position: 200% 0; 
          }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}