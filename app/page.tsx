import { SmoothScroll } from '@/components/smooth-scroll'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { LogoMarquee } from '@/components/logo-marquee'
import { BentoGrid } from '@/components/bento-grid'
import { Pricing } from '@/components/pricing'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <Hero />
        <LogoMarquee />
        <section id="system" className="px-4 py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-orange-300">The Pivo system</p>
              <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">A focused operating layer for the office moments that create revenue.</h2>
              <p className="text-lg text-zinc-400">Pivo is not a generic CRM. It is a practical workflow for owner-operators, office managers, and dispatch coordinators who need the next action to stay visible.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-2xl shadow-black/30">
              <div className="mb-5 flex items-center gap-2 text-sm text-zinc-500"><i className="h-3 w-3 rounded-full bg-orange-400" /><i className="h-3 w-3 rounded-full bg-amber-300" /><i className="h-3 w-3 rounded-full bg-emerald-400" /><strong className="ml-auto text-zinc-400">Today</strong></div>
              <div className="mb-4 grid grid-cols-3 gap-3">
                {[['4','Missed calls'],['3','Overdue'],['$4.9k','Visible leak']].map(([v,l])=><div key={l} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4"><strong className="block text-2xl text-white">{v}</strong><span className="text-xs text-zinc-500">{l}</span></div>)}
              </div>
              {[['Emergency','Basement drain backup','Unassigned · callback now','border-orange-400'],['Quote sent','Backwater valve estimate','Sent Monday · not booked','border-amber-300'],['Recovered','Sump pump replacement','Booked from follow-up queue','border-emerald-400']].map(([k,t,m,c])=><div key={t} className={`mb-3 rounded-2xl border-l-2 ${c} bg-zinc-950/70 p-4`}><small className="text-xs uppercase tracking-[0.2em] text-zinc-500">{k}</small><b className="mt-1 block text-white">{t}</b><em className="not-italic text-zinc-500">{m}</em></div>)}
            </div>
          </div>
        </section>
        <BentoGrid />
        <section id="audit" className="px-4 py-24">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-orange-300">First offer</p>
              <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Revenue Leak Snapshot</h2>
              <p className="mb-8 text-zinc-400">A quick first look for plumbing owners who suspect good jobs are slipping between calls, callbacks, quotes, and dispatch handoffs.</p>
              <div className="mb-8 rounded-2xl bg-white p-5 text-zinc-950"><strong className="block text-4xl tracking-tight">Free / $99</strong><span className="text-sm text-zinc-600">quick diagnostic before any software pitch</span></div>
              <a href="#contact" className="shimmer-btn inline-flex rounded-full bg-white px-6 py-3 font-semibold text-zinc-950 hover:bg-zinc-200">Request the snapshot</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Missed-call handling', 'Quote follow-up rhythm', 'Dispatch handoff ownership', 'Fix list ranked by leakage'].map((item, i)=><div key={item} className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6"><span className="mb-8 grid h-9 w-9 place-items-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-300">0{i+1}</span><h3 className="mb-2 text-lg font-semibold text-white">{item}</h3><p className="text-sm text-zinc-400">Clear, practical review focused on real office moments that lose booked work.</p></div>)}
            </div>
          </div>
        </section>
        <Pricing />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
