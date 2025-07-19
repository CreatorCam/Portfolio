'use client'
import { motion } from 'framer-motion'

export default function AnimatedGradient({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Soft blur background container */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-60 blur-xl"
        style={{
          background:
            'conic-gradient(from 0deg, #27C9FF, #27C9FF55, #27C9FF, #27C9FF88)'
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
      />
      {/* Overlay to soften intensity */}
      <div className="absolute inset-0 rounded-2xl bg-[#161a1f] mix-blend-overlay" />
    </div>
  )
}
