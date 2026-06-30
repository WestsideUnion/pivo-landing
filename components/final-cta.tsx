'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

const mailto = 'mailto:hello@westside-union.com?subject=Pivo%20Revenue%20Leak%20Snapshot&body=Hi%20Westside%20Union%2C%0A%0AI%27d%20like%20to%20request%20a%20Pivo%20Revenue%20Leak%20Snapshot.%0A%0ABusiness%20name%3A%0AService%20area%3A%0AMain%20issue%20%28missed%20calls%2C%20quotes%2C%20dispatch%2C%20follow-up%29%3A%0A'

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return <section id="contact" className="px-4 py-24"><motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mx-auto max-w-4xl text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-orange-300">Next step</p><h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">You are not just busy. Your system is dropping jobs.</h2><p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 sm:text-xl">Request a Revenue Leak Snapshot and see where missed calls, slow quote follow-up, and unclear dispatch ownership are costing real work.</p><div className="flex flex-col items-center justify-center gap-4 sm:flex-row"><a href={mailto} className="shimmer-btn inline-flex h-14 items-center rounded-full bg-white px-8 text-base font-semibold text-zinc-950 shadow-lg shadow-white/20 hover:bg-zinc-200">Request snapshot <ArrowRight className="ml-2 h-5 w-5" /></a><a href="https://westsideunion.github.io/Pivo/" className="inline-flex h-14 items-center rounded-full border border-zinc-800 bg-transparent px-8 text-base font-medium text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white">Open demo</a></div><p className="mt-8 text-sm text-zinc-500">No platform commitment first — just a quick look at where revenue may be leaking.</p></motion.div></section>
}
