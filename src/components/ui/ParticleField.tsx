import { useEffect, useRef } from 'react'

type Props = { className?: string; density?: number }

/**
 * Lightweight canvas particle network — floating nodes connected by
 * proximity lines, with a subtle cursor pull. Caps particle count by
 * viewport area and degrades for reduced-motion users.
 */
export default function ParticleField({ className = '', density = 1 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    const mouse = { x: -9999, y: -9999 }

    type P = { x: number; y: number; vx: number; vy: number; r: number }
    let parts: P[] = []
    const LINK = 124

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const base = Math.min(96, Math.floor((w * h) / 13000))
      const count = Math.max(14, Math.floor(base * density * (reduce ? 0.45 : 1)))
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.6,
      }))
    }

    build()
    const ro = new ResizeObserver(build)
    ro.observe(canvas)

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)

    const frame = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of parts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dm = Math.hypot(dx, dy)
        if (dm < 150) {
          const f = ((150 - dm) / 150) * 0.015
          p.x += dx * f
          p.y += dy * f
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(180,160,255,0.85)'
        ctx.fill()
      }

      for (let i = 0; i < parts.length; i++) {
        const a = parts[i]
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(124,92,255,${(1 - d / LINK) * 0.16})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
        const dmx = mouse.x - a.x
        const dmy = mouse.y - a.y
        const dmm = Math.hypot(dmx, dmy)
        if (dmm < 170) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(217,70,239,${(1 - dmm / 170) * 0.32})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(frame)
    }

    if (reduce) {
      frame() // single static frame
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [density])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
