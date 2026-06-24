import { useRef } from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

/** Card with a soft radial glow that follows the cursor. */
export default function SpotlightCard({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`group/spot relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(360px circle at var(--mx) var(--my), rgba(139,92,246,0.18), transparent 60%)',
        }}
      />
      {children}
    </div>
  )
}
