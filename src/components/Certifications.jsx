import { motion } from 'motion/react'
import { certifications } from '../data/certifications'
import ListHeader from './ListHeader'
import Section from './Section'

export default function Certifications() {
  return (
    <Section id="certifications" className="!py-4 md:!py-6">
      <ListHeader title="Certifications" count={certifications.length} />
      <ul className="mx-auto max-w-4xl border-t border-zinc-200">
        {certifications.map((cert) => (
          <motion.li
            key={cert.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-baseline justify-between gap-4 border-b border-zinc-200 py-6"
          >
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">{cert.name}</h3>
              <p className="mt-1 font-mono text-[11px] tracking-wider text-zinc-400 uppercase">{cert.issuer}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:text-sm">{cert.description}</p>
            </div>
            <span className="shrink-0 font-mono text-sm text-zinc-400">{cert.year}</span>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
