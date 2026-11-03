import { motion } from 'motion/react'

// Shared section wrapper: consistent spacing, optional heading, fade-in on scroll.
export default function Section({ id, eyebrow, title, subtitle, className = '', children }) {
  return (
    <section id={id} className={`px-4 py-12 sm:px-6 md:py-16 ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {title && (
          <header className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-2 font-mono text-sm text-accent-600">{eyebrow}</p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {title}
            </h2>
            {subtitle && <p className="mt-3 text-lg text-zinc-600">{subtitle}</p>}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  )
}
