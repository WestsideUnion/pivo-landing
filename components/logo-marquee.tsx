const items = ['Missed calls', 'Quote follow-up', 'Dispatch handoffs', 'Revenue leak audit', 'Owner dashboard', 'Office workflow']

export function LogoMarquee() {
  return (
    <section className="border-y border-zinc-900 bg-zinc-950 py-8 overflow-hidden">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-700">{item}</span>
        ))}
      </div>
    </section>
  )
}
