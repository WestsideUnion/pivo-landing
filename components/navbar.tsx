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
          <a href="mailto:hello@westside-union.com?subject=Book%20a%20Pivo%20Demo&body=Hi%20Westside%20Union%2C%0A%0AI%27d%20like%20to%20book%20a%20Pivo%20demo.%0A%0ABusiness%20name%3A%0AService%20area%3A%0AMain%20issue%20%28missed%20calls%2C%20quotes%2C%20dispatch%2C%20follow-up%29%3A%0A" className="text-sm text-zinc-400 hover:text-white">Book a demo</a>
          <a href="#contact" className="shimmer-btn rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200">Request snapshot</a>
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
            <a href="#contact" className="shimmer-btn mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-950">Request snapshot</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
