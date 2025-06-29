import React, { useState, useEffect, useRef } from 'react'
import { TrendingUp, Menu, X, User, LogOut, Sun, Moon, Settings } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface HeaderProps {
  onAdminClick: () => void
  user: any
  onAuthClick: () => void
  onSignOut: () => void
}

export default function Header({ onAdminClick, user, onAuthClick, onSignOut }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGlassActive, setIsGlassActive] = useState(false)
  const { isDark, toggleTheme, theme } = useTheme()
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Check if current user is admin
  const isAdmin = user?.email === 'admin@propcashback.com'

  useEffect(() => {
    // Create the trigger element that will be observed
    const triggerElement = document.createElement('div')
    triggerElement.id = 'header-trigger'
    triggerElement.style.position = 'absolute'
    triggerElement.style.top = '0'
    triggerElement.style.left = '0'
    triggerElement.style.width = '100%'
    triggerElement.style.height = '1px'
    triggerElement.style.pointerEvents = 'none'
    triggerElement.style.visibility = 'hidden'

    // Find the main content area (Hero section) and insert the trigger at its top
    const heroSection = document.querySelector('section')
    if (heroSection) {
      heroSection.style.position = 'relative'
      heroSection.insertBefore(triggerElement, heroSection.firstChild)
    }

    // Set up Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the trigger element is NOT intersecting (i.e., it's scrolled past the top),
          // the header should have the glass effect
          setIsGlassActive(!entry.isIntersecting)
        })
      },
      {
        // Use a small negative top margin to trigger slightly before the element completely disappears
        rootMargin: '-1px 0px 0px 0px',
        threshold: 0
      }
    )

    // Start observing the trigger element
    if (observerRef.current && triggerElement) {
      observerRef.current.observe(triggerElement)
    }

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      // Remove the trigger element
      if (triggerElement && triggerElement.parentNode) {
        triggerElement.parentNode.removeChild(triggerElement)
      }
    }
  }, [])

  // Close mobile menu when clicking outside or on navigation links
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const getPillStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      // Enable hardware acceleration for smoother animations
      transform: 'translateZ(0)',
      willChange: 'background-color, backdrop-filter, border-color, box-shadow',
      // Responsive shape: pill on desktop, rectangular on mobile
      maxWidth: '950px',
      margin: '0 auto',
    }

    if (isGlassActive) {
      return {
        ...baseStyles,
        // 1-second ease-in transition when glass effect appears (scrolling down)
        transition: 'background-color 1s ease-in, backdrop-filter 1s ease-in, border-color 1s ease-in, box-shadow 1s ease-in, border-radius 1s ease-in',
        // Glass effect
        backgroundColor: isDark 
          ? 'rgba(40, 40, 40, 0.4)'
          : 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
        // Responsive border radius: pill on desktop, rounded rectangle on mobile
        borderRadius: 'clamp(16px, 4vw, 9999px)',
      }
    } else {
      return {
        ...baseStyles,
        // 0.3-second ease-out transition when glass effect disappears (scrolling up)
        transition: 'background-color 0.3s ease-out, backdrop-filter 0.3s ease-out, border-color 0.3s ease-out, box-shadow 0.3s ease-out, border-radius 0.3s ease-out',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        border: '1px solid transparent',
        boxShadow: 'none',
        // Responsive border radius: pill on desktop, rounded rectangle on mobile
        borderRadius: 'clamp(16px, 4vw, 9999px)',
      }
    }
  }

  const getOuterContainerStyles = (): React.CSSProperties => {
    return {
      // Invisible outer container that provides spacing and positioning
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      padding: '16px 0', // Creates the floating effect
    }
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`sticky top-0 z-50 ${isGlassActive ? 'header-glass-active' : ''}`}
      style={getOuterContainerStyles()}
    >
      <div 
        className="mx-4 sm:mx-6 lg:mx-8"
        style={getPillStyles()}
      >
        <div className="flex justify-between items-center py-3 px-4 sm:px-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div 
              className="p-2 sm:p-2.5 rounded-2xl shadow-lg"
              style={{ backgroundColor: theme.cta }}
            >
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: theme.ctaText }} />
            </div>
            <span className="typography-ui sm:typography-h4 font-semibold" style={{ color: theme.textPrimary }}>
              PropCashback
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => handleNavClick('#firms')} 
              className="typography-ui font-semibold transition-colors hover:opacity-80" 
              style={{ color: theme.textSecondary }}
            >
              Firms
            </button>
            <button 
              onClick={() => handleNavClick('#faq')} 
              className="typography-ui font-semibold transition-colors hover:opacity-80" 
              style={{ color: theme.textSecondary }}
            >
              FAQ
            </button>
            {/* Show different buttons based on admin status */}
            {user && (
              isAdmin ? (
                <button
                  onClick={onAdminClick}
                  className="flex items-center space-x-2 typography-ui font-semibold transition-colors hover:opacity-80"
                  style={{ color: theme.textSecondary }}
                >
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </button>
              ) : (
                <button
                  onClick={onAdminClick}
                  className="typography-ui font-semibold transition-colors hover:opacity-80"
                  style={{ color: theme.textSecondary }}
                >
                  My Requests
                </button>
              )
            )}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-2xl transition-colors hover:bg-opacity-80"
              style={{ backgroundColor: `${theme.accent}20` }}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: theme.accent }} />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: theme.accent }} />
              )}
            </button>
            
            {user ? (
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div 
                  className="flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-2xl border"
                  style={{
                    backgroundColor: `${theme.cardBackground}80`,
                    backdropFilter: theme.backdropFilter,
                    borderColor: theme.cardBorder,
                    boxShadow: theme.cardShadow
                  }}
                >
                  <User className="h-3 w-3 lg:h-4 lg:w-4" style={{ color: theme.textSecondary }} />
                  <span className="typography-small font-semibold hidden lg:inline" style={{ color: theme.textSecondary }}>
                    {isAdmin ? 'Admin' : user.email?.split('@')[0]}
                  </span>
                </div>
                <button
                  onClick={onSignOut}
                  className="transition-colors hover:text-red-400 p-1"
                  style={{ color: theme.textSecondary }}
                  title="Sign Out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 lg:space-x-4">
                <button
                  onClick={onAuthClick}
                  className="typography-ui font-semibold transition-colors hover:opacity-80"
                  style={{ color: theme.textSecondary }}
                >
                  Sign In
                </button>
                <button
                  onClick={onAuthClick}
                  className="px-4 lg:px-6 py-2 lg:py-2.5 rounded-2xl typography-ui font-semibold transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: theme.cta,
                    color: theme.ctaText,
                    boxShadow: `0 4px 16px ${theme.cta}30`
                  }}
                >
                  Get Started
                </button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-2xl transition-colors hover:bg-opacity-80"
              style={{ backgroundColor: `${theme.accent}20` }}
            >
              {isDark ? (
                <Sun className="h-4 w-4" style={{ color: theme.accent }} />
              ) : (
                <Moon className="h-4 w-4" style={{ color: theme.accent }} />
              )}
            </button>
            
            {/* Improved Mobile Menu Button with larger touch target */}
            <button
              className="p-3 -m-1 rounded-2xl transition-colors hover:bg-opacity-20"
              style={{ backgroundColor: `${theme.textSecondary}10` }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" style={{ color: theme.textSecondary }} />
              ) : (
                <Menu className="h-5 w-5" style={{ color: theme.textSecondary }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t px-4 sm:px-6" style={{ borderColor: theme.cardBorder }}>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('#firms')} 
                className="typography-ui font-semibold transition-colors hover:opacity-80 text-left" 
                style={{ color: theme.textSecondary }}
              >
                Firms
              </button>
              <button 
                onClick={() => handleNavClick('#faq')} 
                className="typography-ui font-semibold transition-colors hover:opacity-80 text-left" 
                style={{ color: theme.textSecondary }}
              >
                FAQ
              </button>
              {/* Show different buttons based on admin status in mobile menu */}
              {user && (
                isAdmin ? (
                  <button
                    onClick={() => {
                      onAdminClick()
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center space-x-2 typography-ui font-semibold transition-colors hover:opacity-80 text-left"
                    style={{ color: theme.textSecondary }}
                  >
                    <Settings className="h-4 w-4" />
                    <span>Admin</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onAdminClick()
                      setIsMenuOpen(false)
                    }}
                    className="typography-ui font-semibold transition-colors hover:opacity-80 text-left"
                    style={{ color: theme.textSecondary }}
                  >
                    My Requests
                  </button>
                )
              )}
              
              {user ? (
                <div className="space-y-3 pt-4 border-t" style={{ borderColor: theme.cardBorder }}>
                  <div 
                    className="flex items-center space-x-2 px-3 py-2 rounded-2xl border"
                    style={{
                      backgroundColor: `${theme.cardBackground}80`,
                      backdropFilter: theme.backdropFilter,
                      borderColor: theme.cardBorder
                    }}
                  >
                    <User className="h-4 w-4" style={{ color: theme.textSecondary }} />
                    <span className="typography-small font-semibold" style={{ color: theme.textSecondary }}>
                      {isAdmin ? 'Admin' : user.email?.split('@')[0]}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onSignOut()
                      setIsMenuOpen(false)
                    }}
                    className="typography-ui transition-colors hover:text-red-400 text-left"
                    style={{ color: theme.textSecondary }}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-3 pt-4 border-t" style={{ borderColor: theme.cardBorder }}>
                  <button
                    onClick={() => {
                      onAuthClick()
                      setIsMenuOpen(false)
                    }}
                    className="typography-ui font-semibold transition-colors hover:opacity-80 text-left"
                    style={{ color: theme.textSecondary }}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      onAuthClick()
                      setIsMenuOpen(false)
                    }}
                    className="px-4 py-2.5 rounded-2xl text-center typography-ui font-semibold transition-all duration-200 w-full"
                    style={{
                      backgroundColor: theme.cta,
                      color: theme.ctaText,
                      boxShadow: `0 4px 16px ${theme.cta}30`
                    }}
                  >
                    Get Started
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}