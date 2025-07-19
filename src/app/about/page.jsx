export const metadata = { title: 'About – Cameron Brighton' }

const skills = [
  'JavaScript','React / Next.js','Node / Express','MongoDB',
  'Tailwind CSS','REST APIs','Git / GitHub','Problem Solving',
  'Responsive UI','Accessibility','Performance Tuning','Clean Architecture'
]

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h1>
      <div className="gradient-bar mb-12"></div>

      <div className="space-y-8 leading-relaxed text-lg text-gray-200">
        <p>
          I&apos;m <span className="font-semibold text-accent">Cameron Brighton</span>, a software developer
          focused on crafting maintainable, performant, and user‑friendly web applications. I value
          clean code, thoughtful component design, and accessible interfaces.
        </p>
        <p>
          I enjoy working across the stack, building intuitive front‑end experiences with React / Next.js
          and wiring up efficient APIs using Node, Express, and MongoDB.
        </p>
        <p>
          When I build, I focus on clarity, reusability, and performance: avoiding unnecessary complexity,
          measuring before optimizing, and iterating toward polished results.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-16 mb-6">Core Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map(s => (
          <li
            key={s}
            className="bg-[#1e252b] border border-accent-soft text-sm px-3 py-2 rounded
                       text-center hover:border-accent hover:shadow-neon transition"
          >
            {s}
          </li>
        ))}
      </ul>

      <div className="text-center mt-16">
        <a
          href="/files/CameronBrightonCV.pdf"
          download
          className="inline-block px-6 py-3 rounded-md bg-black text-white font-semibold
             shadow-sm hover:shadow-neon hover:-translate-y-0.5 active:translate-y-0
             transition duration-200"
        >
          Download My CV
        </a>
        <p className="text-xs text-gray-500 mt-2">Direct file download (PDF)</p>
      </div>
    </main>
  )
}
