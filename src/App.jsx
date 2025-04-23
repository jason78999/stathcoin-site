import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-0">
      <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="relative z-10 p-6 flex flex-col items-center">
          <img src="/logo.png" alt="StathCoin Logo" className="w-12 h-12 mb-4" />
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            “I called the spine, you know I called.”
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            — Jason Statham
          </motion.p>
          <Button className="text-lg px-6 py-3 rounded-2xl shadow-xl">
            Learn More
          </Button>
        </div>

        <div className="absolute bottom-6 flex gap-6 z-10">
          <a href="/" className="hover:opacity-80">
            <img src="/icons/home.svg" alt="Home" className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/stathcoin" target="_blank" rel="noreferrer" className="hover:opacity-80">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
          </a>
          <a href="https://t.me/stathchat" target="_blank" rel="noreferrer" className="hover:opacity-80">
            <img src="/icons/telegram.svg" alt="Telegram" className="w-5 h-5" />
          </a>
          <a href="https://discord.gg/stathhub" target="_blank" rel="noreferrer" className="hover:opacity-80">
            <img src="/icons/discord.svg" alt="Discord" className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="bg-zinc-800 border-zinc-700">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold">Join the mission</h2>
            <p>Become part of the unstoppable $STATH movement.</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border-zinc-700">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold">Token Stats</h2>
            <ul>
              <li>Price: $0.0001</li>
              <li>Market Cap: $8,888,888</li>
              <li>Supply: 88,888,888,888</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border-zinc-700">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold">Roadmap</h2>
            <ul>
              <li>✔️ Token Launch</li>
              <li>⬜ Listing on Dex</li>
              <li>⬜ NFT Drop</li>
              <li>⬜ Major Partnerships</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <div className="flex justify-center my-10">
        <WalletMultiButton />
      </div>
    </main>
  );
}
