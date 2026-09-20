const stack = [
  { name: 'Next.js', desc: 'React framework for building the websites and web applications.' },
  { name: 'React', desc: 'Component-based front-end development.' },
  { name: 'Tailwind CSS', desc: 'Responsive styling and interface design.' },
  { name: 'TypeScript', desc: 'Interactive functionality and application logic.' },
  { name: 'Git & GitHub', desc: 'Version control and project management.' },
  { name: 'Vercel', desc: 'Website deployment and hosting.' },
]

export function TechStack() {
  return (
    <section className="bg-[#F5F6F4] py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight text-center mb-10">
          What I Used
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((item) => (
            <div key={item.name} className="rounded-2xl bg-white border border-hairline p-5">
              <h3 className="font-semibold text-navy text-sm mb-1.5">{item.name}</h3>
              <p className="text-slate text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
