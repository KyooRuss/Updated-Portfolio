import { motion } from 'motion/react'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/projects'
import ListHeader from './ListHeader'
import Section from './Section'

function ProjectRow({ project, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="border-b border-zinc-200"
    >
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="group grid grid-cols-[2.5rem_1fr_auto] gap-x-4 py-8 sm:grid-cols-[4rem_1fr_auto] sm:gap-x-6"
      >
        <span className="pt-1 font-mono text-sm text-zinc-400">{number}</span>

        <div className="min-w-0">
          <h3 className="text-base font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 sm:text-lg">
            {project.name}
          </h3>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-zinc-500 sm:text-sm">{project.description}</p>
          <p className="mt-3 font-mono text-xs text-zinc-400">{project.tech.join(' · ')}</p>
        </div>

        <FiArrowUpRight
          aria-label="View on GitHub"
          className="mt-1 size-5 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 sm:size-6"
        />
      </a>
    </motion.li>
  )
}

export default function Projects() {
  return (
    <Section id="projects" className="!pb-4 md:!pb-6">
      <ListHeader title="Projects" count={projects.length} />
      <ul className="mx-auto max-w-4xl border-t border-zinc-200">
        {projects.map((p, i) => (
          <ProjectRow key={p.name} project={p} index={i} />
        ))}
      </ul>
    </Section>
  )
}
