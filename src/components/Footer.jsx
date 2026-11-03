import { FaEnvelope } from 'react-icons/fa6'
import { profile } from '../data/profile'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 bg-zinc-900 px-4 text-center sm:px-6 md:mt-16">
      <div className="mx-auto max-w-4xl">
        {/* Contact block: equal space above and below (py-6) */}
        <div className="py-6">
          <p className="text-base font-semibold text-white">Get in Touch</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-1 inline-flex items-center gap-2 text-sm break-all text-zinc-400 transition-colors hover:text-blue-400"
        >
            <FaEnvelope className="size-4 shrink-0" />
            {profile.email}
          </a>
        </div>

        {/* Copyright row: equal space above and below (py-3) */}
        <p className="border-t border-zinc-800 py-3 text-xs text-zinc-500">
          © {YEAR} {profile.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
