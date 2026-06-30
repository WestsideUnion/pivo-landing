'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const lineVariants = {
  hidden: { y: '100%' },
  visible: (i: number) => ({ y: 0, transition: { duration: 0.8, delay: i * 0.1 } }),
}

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900" />
      <div className="absolute left-1/2 top-1/4 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="noise-overlay" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2">
          <span className="pulse-glow h-2 w-2 rounded-full bg-orange-400" />
          <span className="text-sm text-zinc-400">Revenue operations for plumbing companies</span>
        </motion.div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="block overflow-hidden"><motion.span className="block" variants={lineVariants} initial="hidden" animate="visible" custom={0}>Stop losing jobs</motion.span></span>
          <span className="block overflow-hidden"><motion.span className="block text-zinc-500" variants={lineVariants} initial="hidden" animate="visible" custom={1}>after the phone rings.</motion.span></span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Pivo gives plumbing owners a calm command room for missed calls, quote follow-up, and dispatch handoffs — the revenue moments that usually disappear in the noise.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="shimmer-btn inline-flex h-12 items-center rounded-full bg-white px-8 text-base font-semibold text-zinc-950 shadow-lg shadow-white/10 hover:bg-zinc-200">
            Request a Revenue Leak Audit <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="https://westsideunion.github.io/Pivo/" className="inline-flex h-12 items-center rounded-full border border-zinc-800 bg-transparent px-8 text-base font-medium text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white">
            View command room demo
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[['4', 'missed calls visible'], ['3', 'overdue follow-ups'], ['$4.9k', 'sample leak surfaced']].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur">
              <strong className="block text-3xl font-bold text-white">{value}</strong>
              <span className="text-sm text-zinc-500">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
