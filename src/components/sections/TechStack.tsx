const stack = [
  { name: 'Front-End Development', desc: 'HTML5, CSS3 and JavaScript for building responsive and user-friendly websites.' },
  { name: 'Ruby & Rails', desc: 'Formal training and hands-on development experience with Ruby and Ruby on Rails.' },
  { name: 'Databases & SQL', desc: 'Experience working with databases and SQL through web development projects.' },
  { name: 'APIs', desc: 'Hands-on experience working with APIs as part of web development projects.' },
  { name: 'Git & GitHub', desc: 'Version control and project management using Git and GitHub.' },
  { name: 'UX & Responsive Design', desc: 'Building websites with usability, structure, accessibility and different screen sizes in mind.' },
  { name: 'Agile Development', desc: 'Experience working with agile approaches during practical development projects.' },
]

export function TechStack() {
  return (
    <section className="bg-[#F5F6F4] py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight text-center mb-3">
          What I Used to Build Them
        </h2>
        <p className="text-slate text-sm text-center max-w-lg mx-auto mb-10">
          The broader technologies, tools and areas I have experience with as a developer. Individual projects on the portfolio page list their own specific stack.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((item) => (
            <div key={item.name} className="rounded-2xl bg-white border border-hairline p-5">
              <h3 className="font-semibold text-navy text-sm mb-1.5">{item.name}</h3>
              <p className="text-slate text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center border-t border-hairline pt-8">
          <p className="text-navy font-semibold text-sm mb-1">Le Wagon Web Development Bootcamp</p>
          <p className="text-slate text-xs leading-relaxed max-w-md mx-auto">
            Intensive hands-on web development training covering web development, databases, APIs, UX and agile methodologies.
          </p>
        </div>
      </div>
    </section>
  )
}
