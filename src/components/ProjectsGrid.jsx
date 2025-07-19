'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function ProjectsGrid({ projects }) {
  const [tag, setTag] = useState('All')
  const [openVideo, setOpenVideo] = useState(null) // stores project object

  const tags = useMemo(() => {
    const s = new Set()
    projects.forEach(p => p.tech.forEach(t => s.add(t)))
    return ['All', ...Array.from(s).sort()]
  }, [projects])

  const visible = tag === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(tag))

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {tags.map(t => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`px-3 py-1.5 rounded-full text-sm border transition focus:outline-none focus:ring-2 focus:ring-accent
              ${
                tag === t
                  ? 'bg-accent text-black border-accent'
                  : 'border-accent-soft text-accent hover:bg-accent/10'
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06} y={34}>
            <ProjectCard
              project={p}
              onOpenVideo={() => setOpenVideo(p)}
            />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          No projects found for <span className="text-accent">{tag}</span>.
        </p>
      )}

      {/* Video Modal */}
      {openVideo && (
        <VideoModal
          project={openVideo}
          onClose={() => setOpenVideo(null)}
        />
      )}
    </div>
  )
}

/* ---------------- Project Card ---------------- */
function ProjectCard({ project, onOpenVideo }) {
  const { slug, title, short, tech, type } = project

  const screenshot = project.poster || `/projects/${slug}/screenshot.png`
  const isVideo = type === 'video'
  const isStatic = type === 'static'
  const isRoute = type === 'route'

  const href = isStatic
    ? `/projects/${slug}/index.html`
    : isRoute
      ? `/projects/${slug}`
      : undefined

  const TagWrapper = ({ children }) => {
    if (isVideo) {
      return (
        <button
          onClick={onOpenVideo}
          className="group text-left bg-[#1b2229] border border-accent-soft rounded-xl overflow-hidden
                     hover:border-accent/70 hover:shadow-neon transition flex flex-col w-full focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={`Play video tour: ${title}`}
        >
          {children}
        </button>
      )
    }
    return (
      <Link
        href={href}
        className="group bg-[#1b2229] border border-accent-soft rounded-xl overflow-hidden
                   hover:border-accent/70 hover:shadow-neon transition flex flex-col focus:outline-none focus:ring-2 focus:ring-accent"
      >
        {children}
      </Link>
    )
  }

  return (
    <TagWrapper>
      <div className="relative h-48 w-full bg-[#151a1f]">
        <Image
          src={screenshot}
          alt={title}
          fill
          className="object-cover object-top group-hover:scale-[1.03] transition"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1216] via-transparent" />
        <span
          className="absolute top-2 right-2 text-[10px] font-medium px-2 py-1 rounded
                     bg-black/55 border border-accent/30 backdrop-blur text-accent tracking-wide"
        >
          {isVideo ? 'VIDEO' : isStatic ? 'STATIC' : 'MERN'}
        </span>

        {isVideo && (
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="w-14 h-14 rounded-full bg-black/60 border border-accent
                             flex items-center justify-center text-accent text-xl font-semibold
                             group-hover:scale-110 transition shadow-neon">
              ►
            </span>
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-grow">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-400 leading-relaxed flex-grow">{short}</p>
        <ul className="flex flex-wrap gap-1.5 mt-2">
          {tech.slice(0, 5).map(t => (
            <li
              key={t}
              className="text-[11px] px-2 py-0.5 rounded bg-[#232c33] border border-accent-soft
                         text-accent/90 group-hover:border-accent/60"
            >
              {t}
            </li>
          ))}
          {tech.length > 5 && (
            <li className="text-[11px] px-2 py-0.5 rounded bg-[#232c33] border border-accent-soft text-accent/60">
              +{tech.length - 5}
            </li>
          )}
        </ul>
      </div>
    </TagWrapper>
  )
}

/* ---------------- Video Modal ---------------- */
function VideoModal({ project, onClose }) {
  useEsc(onClose)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onMouseDown={e => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} video modal`}
    >
      <div className="relative w-full max-w-4xl bg-[#10161b] border border-accent-soft rounded-2xl shadow-neon overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-accent-soft/40">
          <h3 className="text-xl font-semibold">{project.title} – Video Tour</h3>
          <button
            onClick={onClose}
            className="text-accent hover:text-white transition text-2xl leading-none focus:outline-none focus:ring-2 focus:ring-accent rounded"
            aria-label="Close video modal"
          >
            ×
          </button>
        </div>

        <div className="relative aspect-video bg-black">
          <video
            src={project.video}
            poster={project.poster || `/projects/${project.slug}/screenshot.png`}
            controls
            autoPlay
            className="w-full h-full object-contain"
            preload="metadata"
          />
        </div>

        <div className="px-6 py-5 flex flex-col gap-4">
          {project.description && (
            <p className="text-sm text-gray-300">{project.description}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tech?.map(t => (
              <span
                key={t}
                className="text-[11px] px-2 py-1 rounded bg-[#232c33] border border-accent-soft text-accent"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                className="px-4 py-2 rounded-md bg-accent text-black font-medium hover:shadow-neon"
              >
                View Repo
              </Link>
            )}
            {project.caseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                className="px-4 py-2 rounded-md border border-accent text-accent hover:bg-accent/10"
              >
                Case Study
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Escape Key Hook ---------------- */
function useEsc(callback) {
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') callback()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [callback])
}
