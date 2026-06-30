'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Problem', href: '#problem' },
  { label: 'System', href: '#system' },
  { label: 'Audit', href: '#audit' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2"
    >
      <nav className="relative flex items-center justify-between rounded-full border border-zinc-800 bg-zinc-950/55 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-md">
        <a href="#hero" className="flex items-center gap-2" aria-label="Pivo home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-sm font-black text-zinc-950">P</span>
          <span className="hidden font-semibold text-white sm:block">Pivo</span>
        </a>

        <div className="relative hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="navbar-hover"
                  className="absolute inset-0 rounded-full bg-zinc-800"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://westsideunion.github.io/Pivo/" className="text-sm text-zinc-400 hover:text-white">View demo</a>
          <a href="#contact" className="shimmer-btn rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200">Request audit</a>
        </div>

        <button className="p-2 text-zinc-400 hover:text-white md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-4 backdrop-blur-md">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-4 py-3 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white">{item.label}</a>
            ))}
            <a href="#contact" className="shimmer-btn mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-950">Request audit</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
