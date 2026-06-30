'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity, BarChart3, PhoneCall, Route, ShieldCheck, Zap } from 'lucide-react'

const deliverables = [
  { icon: PhoneCall, title: 'Missed-call review', copy: 'Find where calls are dropped, delayed, or never clearly owned.' },
  { icon: Activity, title: 'Quote follow-up map', copy: 'Turn sent estimates into visible next actions before urgency fades.' },
  { icon: Route, title: 'Dispatch handoff check', copy: 'See where urgent jobs lose clarity between office and technician.' },
  { icon: BarChart3, title: 'Revenue leak summary', copy: 'Prioritize practical fixes by urgency, value, and operational effort.' },
]

const workflow = ['Call captured', 'Job triaged', 'Quote chased', 'Dispatch owned', 'Revenue recovered']

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problem" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-orange-300">The hidden leak</p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">You do not only need more leads. You need fewer dropped jobs.</h2>
          <p className="mx-auto max-w-2xl text-zinc-400">Most plumbing companies already have demand. The expensive problem is what happens after the first call.</p>
        </motion.div>

        <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={cardVariant} className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-600 md:col-span-2">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <div className="mb-4 w-fit rounded-lg bg-zinc-800 p-2"><Zap className="h-5 w-5 text-orange-300" strokeWidth={1.5} /></div>
                <h3 className="mb-2 text-xl font-semibold text-white">The Pivo workflow</h3>
                <p className="max-w-xl text-sm text-zinc-400">A focused operating layer for owner-operators, office managers, and dispatch coordinators who need the next action to stay visible.</p>
              </div>
              <div className="hidden items-center gap-2 sm:flex">{[true,true,false,true,true].map((active, i)=><span key={i} className={`h-2 w-2 rounded-full ${active ? 'bg-orange-400 pulse-glow' : 'bg-zinc-700'}`} />)}</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-5">
              {workflow.map((step, index) => (
                <div key={step} className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 text-center">
                  <div className="mx-auto mb-3 grid h-8 w-8 place-items-center rounded-full bg-white text-xs font-black text-zinc-950">{index + 1}</div>
                  <div className="text-sm font-medium text-zinc-300">{step}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={cardVariant} className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-600">
            <div className="mb-4 w-fit rounded-lg bg-zinc-800 p-2"><ShieldCheck className="h-5 w-5 text-zinc-400" strokeWidth={1.5} /></div>
            <h3 className="mb-2 text-lg font-semibold text-white">No platform commitment first</h3>
            <p className="mb-6 text-sm text-zinc-400">Start with a diagnostic, not a big software promise. Find the leakage before building the system.</p>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">Snapshot-first sales path</span>
          </motion.div>

          {deliverables.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} variants={cardVariant} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-600">
                <div className="mb-4 w-fit rounded-lg bg-zinc-800 p-2"><Icon className="h-5 w-5 text-zinc-400" strokeWidth={1.5} /></div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.copy}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
