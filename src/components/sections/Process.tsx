const steps = [
  { title: 'Discover', desc: 'Understand the business, audience and goals.' },
  { title: 'Plan', desc: 'Define structure, content and functionality.' },
  { title: 'Design', desc: 'Create the visual direction and user experience.' },
  { title: 'Build', desc: 'Develop the website and functionality.' },
  { title: 'Test', desc: 'Check responsiveness, accessibility, performance and usability.' },
  { title: 'Launch', desc: 'Deploy, connect the domain and hand everything over.' },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-cream py-20 lg:py-24 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-3">How I build</p>
          <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
            From idea to launch.
          </h2>
        </div>
        <ol className="lg:col-span-8 border-t border-hairline">
          {steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_10rem_1fr] gap-x-4 gap-y-1 py-5 border-b border-hairline">
              <span className="text-sm font-semibold text-slate tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-base font-bold text-navy uppercase tracking-wide">{s.title}</h3>
              <p className="col-start-2 sm:col-start-3 text-sm text-slate leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
