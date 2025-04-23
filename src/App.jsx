import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundImage: 'url(/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      }}></div>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <img src="/logo.png" alt="StathCoin Logo" style={{ width: 64, height: 64, marginBottom: 16 }} />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}
        >
          “I called the spine, you know I called.”
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}
        >
          — Jason Statham
        </motion.p>
        <button style={{
          backgroundColor: '#ea580c',
          padding: '0.75rem 2rem',
          borderRadius: '1rem',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          border: 'none'
        }}>
          Learn More
        </button>
      </div>
    </main>
  )
}