export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              HK<span className="text-purple-500">.</span>
            </span>
            <span className="text-xs text-neutral-500 font-medium">Creative Web</span>
          </div>
          <p className="text-[11px] text-neutral-700">Websites. Social. Digital. Done properly.</p>
        </div>

        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} HK Creative Web. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {['Instagram', 'TikTok', 'LinkedIn'].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors duration-200"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
