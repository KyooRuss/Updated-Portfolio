// Minimal section header: title on the left, item count on the right.
export default function ListHeader({ title, count }) {
  return (
    <header className="mx-auto flex max-w-4xl items-end justify-between gap-4 pb-6">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">{title}</h2>
      <span className="font-mono text-sm text-zinc-400">({String(count).padStart(2, '0')})</span>
    </header>
  )
}
