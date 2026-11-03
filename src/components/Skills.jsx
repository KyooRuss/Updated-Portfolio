import { motion } from 'motion/react'
import { skills } from '../data/skills'
import ListHeader from './ListHeader'
import Section from './Section'

const total = skills.flatMap((s) => s.items).length

export default function Skills() {
  return (
    <Section id="skills" className="!pt-4 md:!pt-6">
      <ListHeader title="Skills" count={total} />
      <ul className="mx-auto max-w-4xl border-t border-zinc-200">
        {skills.map((group) => (
          <motion.li
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid gap-1 border-b border-zinc-200 py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-[11px] tracking-wider text-zinc-400 uppercase">{group.category}</span>
            <span className="text-sm font-medium text-zinc-900 sm:text-base">{group.items.join(' · ')}</span>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
