import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/profile'

// Types each word, pauses, deletes it, then moves to the next (loops)
function useTypewriter(words, speed = 85, pause = 1600) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      t = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => i + 1)
      }, speed * 4)
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? speed / 2 : speed,
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, index, words, speed, pause])

  return text
}

// Small four-point sparkle for the background
function Sparkle({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`absolute text-zinc-300 ${className}`}>
      <path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  const greeting = useTypewriter(profile.greetings)

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-white px-4 py-16 sm:px-6"
    >
      {/* Faint dot grid fading out from the center */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-60" />
      {/* Soft blue glow behind the name */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/40 blur-3xl" />

      <Sparkle className="top-[22%] left-[14%] size-3" />
      <Sparkle className="top-[30%] right-[18%] size-4" />
      <Sparkle className="bottom-[28%] left-[22%] size-2.5" />
      <Sparkle className="right-[12%] bottom-[22%] size-3" />
      <Sparkle className="top-[16%] left-[52%] size-2" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Status pill */}
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 font-mono text-xs text-blue-700"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {profile.status}
        </motion.span>

        {/* Multilingual typed greeting */}
        <motion.p
          {...fadeUp(0.1)}
          className="mt-8 h-6 font-mono text-sm tracking-[0.25em] text-zinc-500 uppercase"
          aria-label={profile.greetings[0]}
        >
          <span aria-hidden="true">
            {greeting}
            <span className="animate-blink text-blue-500">_</span>
          </span>
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="mt-3 text-5xl font-bold tracking-tight text-balance text-zinc-900 sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        {/* Role */}
        <motion.p {...fadeUp(0.3)} className="mt-5 font-mono text-base text-zinc-600 sm:text-lg">
          {profile.role}
        </motion.p>

        {/* Short bio */}
        <motion.p {...fadeUp(0.4)} className="mx-auto mt-6 max-w-sm text-xs leading-relaxed text-zinc-500 sm:text-sm">
          {profile.bio}
        </motion.p>

        {/* Call to action */}
        <motion.div {...fadeUp(0.5)} className="mt-8">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600"
          >
            View My Projects
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
