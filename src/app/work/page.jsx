import Reveal from '@/components/Reveal'
import { projects } from '@/data/projects'
import ProjectsGrid from '@/components/ProjectsGrid'

export const metadata = {
  title: 'My Work – Cameron Brighton',
  description: 'Project portfolio of Cameron Brighton'
}

export default function WorkPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year)

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-32">
      <Reveal>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My Work
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          A selection of projects ranging from focused front‑end interfaces to
          full‑stack MERN applications. Filter by technology to explore.
        </p>
      </Reveal>

      {/* Client component handles filtering & interactivity */}
      <ProjectsGrid projects={sorted} />
    </main>
  )
}

