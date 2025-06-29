import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const faqs = [
  {
    question: "How does the cashback system work?",
    answer: "After purchasing a prop firm challenge through our affiliate links, submit your proof of purchase along with your wallet address. We'll verify your purchase and send the cashback to your crypto wallet within 5-7 business days."
  },
  {
    question: "Which cryptocurrencies do you support for payouts?",
    answer: "We support USDT and USDC on Ethereum, Binance Smart Chain (BSC), and Polygon networks. Make sure to specify which network you prefer when submitting your wallet address."
  },
  {
    question: "How long does it take to receive my cashback?",
    answer: "Once we verify your purchase, cashback payments are processed within 5-7 business days. You'll receive a confirmation email when the payment is sent."
  },
  {
    question: "Can I get cashback on any prop firm purchase?",
    answer: "Cashback is only available for purchases made through our affiliate links from the featured prop firms on this page. Make sure to click our 'Purchase' button before making your purchase."
  },
  {
    question: "What proof of purchase do I need to provide?",
    answer: "You can provide a screenshot of your purchase confirmation email, receipt, or account dashboard showing the transaction. Upload it to a file sharing service like Google Drive or Imgur and provide the link."
  },
  {
    question: "Is there a minimum purchase amount for cashback?",
    answer: "No, there's no minimum purchase amount. You'll receive the advertised cashback percentage on any qualifying purchase, regardless of size."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { theme } = useTheme()

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl border"
          style={{
            backgroundColor: theme.cardBackground,
            backdropFilter: theme.backdropFilter,
            borderColor: theme.cardBorder,
            boxShadow: theme.cardShadow
          }}
        >
          <h2 className="typography-h3 sm:typography-h2 mb-4 sm:mb-6" style={{ color: theme.textPrimary }}>
            Frequently Asked Questions
          </h2>
          <p className="typography-body sm:typography-body-large" style={{ color: theme.textSecondary }}>
            Everything you need to know about our cashback program
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border overflow-hidden"
              style={{
                backgroundColor: theme.cardBackground,
                backdropFilter: theme.backdropFilter,
                borderColor: theme.cardBorder,
                boxShadow: theme.cardShadow
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between transition-colors hover:bg-opacity-80"
                style={{ 
                  backgroundColor: openIndex === index ? `${theme.accent}05` : 'transparent'
                }}
              >
                <h4 className="typography-ui sm:typography-h4 pr-4 text-left" style={{ color: theme.textPrimary }}>
                  {faq.question}
                </h4>
                {openIndex === index ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: theme.accent }} />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: theme.accent }} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-8 pb-4 sm:pb-6">
                  <p className="typography-small sm:typography-body leading-relaxed" style={{ color: theme.textSecondary }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div 
          className="text-center mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl border"
          style={{
            backgroundColor: theme.cardBackground,
            backdropFilter: theme.backdropFilter,
            borderColor: theme.cardBorder,
            boxShadow: theme.cardShadow
          }}
        >
          <p className="typography-body mb-4 sm:mb-6" style={{ color: theme.textSecondary }}>Still have questions?</p>
          <a 
            href="https://discord.gg/proptrading" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl typography-ui font-semibold transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: theme.cta,
              color: theme.ctaText,
              boxShadow: `0 4px 16px ${theme.cta}40`
            }}
          >
            Ask in Discord
          </a>
        </div>
      </div>
    </section>
  )
}