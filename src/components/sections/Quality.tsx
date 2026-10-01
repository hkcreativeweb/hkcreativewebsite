const points = [
  { title: 'Responsive', desc: 'Designed for phones, tablets and desktops.' },
  { title: 'Accessible', desc: 'Semantic structure, keyboard navigation and readable interfaces.' },
  { title: 'Performance-focused', desc: 'Optimised images, lazy loading and a lightweight implementation.' },
  { title: 'SEO-ready', desc: 'Proper heading structure, metadata and sitemaps.' },
  { title: 'Maintainable', desc: 'Reusable components, central content and organised code.' },
]

export function Quality() {
  return (
    <section aria-labelledby="quality-heading" className="bg-navy text-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="quality-heading" className="text-2xl md:text-3xl font-bold tracking-tight max-w-md mb-12">
          Built for the real world.
        </h2>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8 border-t border-white/15 pt-8">
          {points.map((p) => (
            <div key={p.title}>
              <dt className="text-sm font-bold">{p.title}</dt>
              <dd className="mt-2 text-sm text-white/65 leading-relaxed">{p.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
