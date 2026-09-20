const skillGroups = [
  {
    title: 'Web Development',
    skills: ['Responsive websites', 'Front-end development', 'React', 'Next.js', 'Tailwind CSS', 'Git & GitHub', 'Website deployment', 'Website maintenance'],
  },
  {
    title: 'Creative & Digital',
    skills: ['Website content', 'Social media packages', 'Branding', 'Digital projects', 'AI-assisted workflows', 'Digital automation'],
  },
]

export function SkillsSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight text-center mb-12">
          What I Do
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-teal-dark mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium text-navy bg-[#F5F6F4] border border-hairline rounded-full px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-mint border border-teal/15 p-8 lg:p-10 text-center">
          <h3 className="text-2xl font-bold text-navy tracking-tight mb-3">
            Have an idea? Let&apos;s build it.
          </h3>
          <p className="text-slate leading-relaxed mb-6 max-w-xl mx-auto">
            Whether you need a new website, improvements to an existing one or help getting your online presence organised, get in touch and we&apos;ll discuss what you need.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
