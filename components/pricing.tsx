'use client'

import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { useRef } from 'react'

const offers = [
  { name: 'Snapshot', price: 'Free / $99', description: 'A low-friction snapshot before any software commitment.', features: ['Quick missed-call check', 'Quote follow-up check', 'Dispatch handoff check', 'Obvious leakage summary'], cta: 'Request snapshot', href: '#contact', highlighted: true },
  { name: 'Deeper Audit', price: '$249–$499', description: 'A fuller workflow review once the snapshot shows real leakage.', features: ['Workflow map', 'Prioritized fix list', 'Revenue-risk notes', 'Build recommendation'], cta: 'Book a demo', href: 'https://westsideunion.github.io/Pivo/', highlighted: false },
  { name: 'Pro', price: '$399+/mo', description: 'For teams that need multi-user workflow and implementation support.', features: ['Command-room setup', 'Follow-up workflow', 'Dispatch visibility', 'Monthly support from $99'], cta: 'Discuss fit', href: '#contact', highlighted: false },
]

function BorderBeam() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"><div className="border-beam absolute h-24 w-24 bg-white/20 blur-xl" style={{ offsetPath: 'rect(0 100% 100% 0 round 16px)' }} /></div>
}

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section id="pricing" className="px-4 py-24"><div className="mx-auto max-w-6xl"><motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-orange-300">Offer path</p><h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Start small, prove the leak, then build the system.</h2><p className="mx-auto max-w-2xl text-zinc-400">The snapshot is the trust-building entry point. Pivo becomes the operating layer only if the workflow problem is real enough to fix.</p></motion.div><motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-1 gap-6 md:grid-cols-3">{offers.map((offer, index) => <motion.article key={offer.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }} className={`relative rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] ${offer.highlighted ? 'border-zinc-700 bg-zinc-900' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-600'}`}>{offer.highlighted && <BorderBeam />}{offer.highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-950">First step</div>}<div className="mb-6"><h3 className="mb-2 text-xl font-semibold text-white">{offer.name}</h3><p className="text-sm text-zinc-400">{offer.description}</p></div><div className="mb-6 text-4xl font-bold text-white">{offer.price}</div><ul className="mb-8 space-y-3">{offer.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300"><Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={1.5} />{feature}</li>)}</ul><a href={offer.href} className={`block w-full rounded-full px-4 py-3 text-center text-sm font-semibold ${offer.highlighted ? 'shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200' : 'border border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700'}`}>{offer.cta}</a></motion.article>)}</motion.div></div></section>
  )
}
