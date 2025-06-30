import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PropFirms from './components/PropFirms'
import CashbackModal from './components/CashbackModal'
import FAQ from './components/FAQ'
import AdminPanel from './components/AdminPanel'
import AuthModal from './components/AuthModal'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { supabase, type PropFirm } from './lib/supabase'
import { onAuthStateChange, signOut } from './lib/auth'

function AppContent() {
  const [propFirms, setPropFirms] = useState<PropFirm[]>([])
  const [selectedPropFirm, setSelectedPropFirm] = useState<PropFirm | null>(null)
  const [isCashbackModalOpen, setIsCashbackModalOpen] = useState(false)
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchPropFirms()
    
    // Set up auth state listener
    const { data: { subscription } } = onAuthStateChange((user) => {
      setUser(user)
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  const fetchPropFirms = async () => {
    try {
      const { data, error } = await supabase
        .from('prop_firms')
        .select('*')
        .eq('is_active', true)
        .order('name')

      if (error) throw error
      setPropFirms(data || [])
    } catch (err) {
      console.error('Error fetching prop firms:', err)
    }
  }

  const handleClaimCashback = (propFirm: PropFirm) => {
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }
    setSelectedPropFirm(propFirm)
    setIsCashbackModalOpen(true)
  }

  const handleCloseCashbackModal = () => {
    setIsCashbackModalOpen(false)
    setSelectedPropFirm(null)
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setUser(null)
    } catch (err) {
      console.error('Error signing out:', err)
    }
  }

  return (
    <div className="relative">
      {/* Global background moved from Hero.tsx */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, 
            ${theme.background} 0%, 
            rgba(139, 90, 159, 0.1) 25%, 
            ${theme.background} 50%, 
            rgba(215, 196, 242, 0.05) 75%, 
            ${theme.background} 100%
          )`,
        }}
      />
      {/* Global pattern overlay moved from Hero.tsx */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.accent} 2px, transparent 2px), 
                          radial-gradient(circle at 75% 75%, ${theme.accent} 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 40px 40px',
        }}
      />

      {/* All content sits on top of the global background */}
      <div className="relative z-10">
        <Header 
          onAdminClick={() => setIsAdminPanelOpen(true)}
          user={user}
          onAuthClick={() => setIsAuthModalOpen(true)}
          onSignOut={handleSignOut}
        />
        <Hero />
        {/* The main tag is now transparent, letting the global background show through */}
        <main style={{ backgroundColor: theme.background }}>
          <PropFirms propFirms={propFirms} onClaimCashback={handleClaimCashback} />
          <FAQ />
        </main>
      </div>
      
      <CashbackModal
        isOpen={isCashbackModalOpen}
        onClose={handleCloseCashbackModal}
        propFirm={selectedPropFirm}
        user={user}
      />
      
      <AdminPanel
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        user={user}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
