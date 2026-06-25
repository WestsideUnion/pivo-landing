'use client'

import { useEffect, useRef, useState } from 'react'

const imageCards = [
  ['pivo-intake.svg', 'Intake', 'Capture every request'],
  ['pivo-van.svg', 'Service', 'Mobilize technicians faster'],
  ['pivo-tools.svg', 'Tools', 'Keep job details organized'],
  ['pivo-dispatch.svg', 'Dispatch', 'Move jobs cleanly'],
]

export default function Home() {
  const heroCopyRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)
  const lastTouchY = useRef(0)

  useEffect(() => {
    const paint = (next: number) => {
      progressRef.current = Math.max(0, Math.min(1, next))
      setProgress(progressRef.current)
      const el = heroCopyRef.current
      if (!el) return
      el.style.transform = `translateY(${progressRef.current * 190}px) rotateX(${progressRef.current * 42}deg) scale(${1 - progressRef.current * 0.28})`
      el.style.opacity = String(1 - progressRef.current * 0.2)
    }

    const step = (delta: number) => paint(progressRef.current + delta / 720)

    const onWheel = (event: WheelEvent) => {
      const atTop = window.scrollY <= 0
      const locked = progressRef.current < 1
      const rewinding = atTop && progressRef.current > 0 && event.deltaY < 0
      if ((atTop && locked && event.deltaY > 0) || rewinding) {
        event.preventDefault()
        step(event.deltaY)
      }
    }

    const onTouchStart = (event: TouchEvent) => {
      lastTouchY.current = event.touches[0]?.clientY || 0
    }

    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY || lastTouchY.current
      const delta = lastTouchY.current - y
      lastTouchY.current = y
      const atTop = window.scrollY <= 0
      const locked = progressRef.current < 1
      const rewinding = atTop && progressRef.current > 0 && delta < 0
      if ((atTop && locked && delta > 0) || rewinding) {
        event.preventDefault()
        step(delta * 2.4)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    paint(0)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="Pivo home"><span className="brand-mark">Pivo</span></a>
        <nav aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#system">System</a>
          <a href="#audit">Audit</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="nav-cta" href="#contact">Book audit</a>
      </header>

      <main>
        <section id="hero" className={`hero ${progress >= 1 ? 'hero-unlocked' : ''}`}>
          <img className="hero-bg" src="/assets/images/hously-background.png" alt="Modern architectural hero background" />
          <div className="hero-shade" />
          <div ref={heroCopyRef} className="hero-copy">
            <p className="eyebrow">Plumbing revenue operations</p>
            <h1>Stop losing jobs after the phone rings.</h1>
            <p>Pivo gives plumbing owners one calm command room for missed calls, quote follow-up, and dispatch handoffs — the revenue moments that usually disappear in the noise.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Book a Revenue Leak Audit</a>
              <a className="button ghost" href="#system">See the system</a>
            </div>
          </div>
          <img className="hero-fg" src="/assets/images/pivo-hero-fg.svg" alt="Plumber and dispatch foreground" />
        </section>

        <section id="problem" className="section intro-grid">
          <div><p className="eyebrow dark">The hidden leak</p><h2>You do not only need more leads. You need fewer dropped jobs.</h2></div>
          <p className="section-lede">Most plumbing companies already have demand. The problem is what happens after the first call: missed voicemail, slow callback, quote sent but not chased, job handed off without ownership.</p>
        </section>

        <section className="cards section-tight">
          <article><span>01</span><h3>Missed calls wait too long.</h3><p>Every delayed callback gives the customer time to call the next plumber.</p></article>
          <article><span>02</span><h3>Quotes quietly go cold.</h3><p>Sent estimates need a visible follow-up rhythm before urgency fades.</p></article>
          <article><span>03</span><h3>Dispatch handoffs slip.</h3><p>Urgent jobs need clear ownership from intake to technician status.</p></article>
        </section>

        <section id="system" className="showcase section">
          <div className="showcase-copy"><p className="eyebrow dark">The Pivo system</p><h2>A focused operating layer for the office moments that create revenue.</h2><p>Pivo is not a generic CRM. It is a practical workflow for owner-operators, office managers, and dispatch coordinators who need the next action to stay visible.</p></div>
          <div className="product-frame">
            <div className="frame-top"><i /><i /><i /><strong>Today</strong></div>
            <div className="metric-row"><div><strong>4</strong><small>Missed calls</small></div><div><strong>3</strong><small>Overdue</small></div><div><strong>$4.9k</strong><small>Visible leak</small></div></div>
            <div className="queue-card hot"><small>Emergency</small><b>Basement drain backup</b><em>Unassigned · callback now</em></div>
            <div className="queue-card warm"><small>Quote sent</small><b>Backwater valve estimate</b><em>Sent Monday · not booked</em></div>
            <div className="queue-card cool"><small>Recovered</small><b>Sump pump replacement</b><em>Booked from follow-up queue</em></div>
          </div>
        </section>

        <section className="image-band section-tight">
          {imageCards.map(([image, label, title]) => <article key={image}><img src={`/assets/images/${image}`} alt="Plumbing business workflow illustration" /><div><small>{label}</small><strong>{title}</strong></div></article>)}
        </section>

        <section id="audit" className="audit section">
          <div className="audit-panel"><p className="eyebrow">First offer</p><h2>Revenue Leak Audit</h2><p>Before selling software, show the owner where jobs are currently leaking: calls, quotes, scheduling, and follow-up ownership.</p></div>
          <div className="audit-list"><p>✓ Review missed-call handling</p><p>✓ Review quote follow-up</p><p>✓ Review dispatch handoffs</p><p>✓ Estimate visible revenue leakage</p></div>
        </section>

        <section id="pricing" className="pricing section-tight">
          <article><small>Audit</small><h3>Revenue Leak Audit</h3><strong>$500–$1,500</strong><p>One-time review and sales-entry offer.</p></article>
          <article><small>Core</small><h3>Pivo Starter</h3><strong>$199/mo</strong><p>Intake, follow-up, dispatch, and basic reporting.</p></article>
          <article><small>Growth</small><h3>Pivo Pro</h3><strong>$399+/mo</strong><p>Multi-user workflow and implementation support.</p></article>
        </section>

        <section id="contact" className="contact section">
          <p className="eyebrow dark">Next step</p><h2>You are not just busy. Your system is dropping jobs.</h2><p>Book a Revenue Leak Audit and see where missed calls, slow follow-up, and unclear dispatch ownership are costing real work.</p><a className="button primary" href="mailto:hello@westside-union.com?subject=Pivo%20Revenue%20Leak%20Audit">Book audit</a>
        </section>
      </main>
    </>
  )
}
