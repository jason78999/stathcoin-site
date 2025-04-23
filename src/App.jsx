import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen text-white font-sans overflow-x-hidden">
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 z-50">
        <img src="/logo.png" alt="$STATH Logo" className="w-10 h-10" />
        <button onClick={() => setMenuOpen(true)} className="text-white text-xl font-bold">☰</button>
      </header>
      <aside className={\`fixed top-0 right-0 h-full w-64 bg-zinc-950 p-6 transform transition-transform duration-300 z-50 \${menuOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
        <button onClick={() => setMenuOpen(false)} className="text-white text-xl mb-6">✕</button>
        <nav className="flex flex-col gap-4 text-lg">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#how">How to Buy</a>
          <a href="#bridge">Bridge</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
      </aside>
      <section id="home" className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="relative z-10">
          <img src="/hero-bg.jpg" alt="3D Character" className="w-64 h-64 rounded-full object-cover mb-6 border-4 border-orange-600" />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            “I called the spine, you know I called.”
          </motion.h1>
          <button className="mt-4 bg-orange-600 hover:bg-orange-500 px-6 py-3 rounded-xl text-lg font-semibold">
            Learn More
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl mx-auto">
        <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
          <h2 className="text-xl font-bold mb-2">Join the mission</h2>
          <p>Become part of the unstoppable $STATH movement.</p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
          <h2 className="text-xl font-bold mb-2">Token Stats</h2>
          <ul className="space-y-1">
            <li>Price: $0.0001</li>
            <li>Market Cap: $8,888,888</li>
            <li>Supply: 88,888,888,888</li>
          </ul>
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
          <h2 className="text-xl font-bold mb-2">Roadmap</h2>
          <ul className="space-y-1">
            <li>✔️ Token Launch</li>
            <li>⬜ Listing on Dex</li>
            <li>⬜ NFT Drop</li>
            <li>⬜ Major Partnerships</li>
          </ul>
        </div>
      </section>
      <div className="flex justify-center my-10">
        <WalletMultiButton />
      </div>
      <footer className="flex flex-wrap gap-6 justify-center py-10 text-zinc-400 text-sm border-t border-zinc-800">
        <a href="https://twitter.com/stathcoin" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://t.me/stathchat" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://discord.gg/stathhub" target="_blank" rel="noreferrer">Discord</a>
        <a href="/">Home</a>
      </footer>
    </main>
  );
}
