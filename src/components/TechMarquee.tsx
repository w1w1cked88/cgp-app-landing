import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { TECH } from './icons'

/** Tech logos marquee that skews with scroll velocity (Linear-style). */
export default function TechMarquee() {
  const root = useRef<HTMLElement>(null)
  const row = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const loop = gsap.to(row.current, {
        xPercent: -50,
        duration: 26,
        ease: 'none',
        repeat: -1,
      })
      if (reduce) {
        loop.pause()
        return
      }
      const clamp = gsap.utils.clamp(-14, 14)
      const skewTo = gsap.quickTo(row.current, 'skewX', { duration: 0.5, ease: 'power3' })
      const st = ScrollTrigger.create({
        onUpdate: (self) => skewTo(clamp(self.getVelocity() / -260)),
      })
      return () => {
        loop.kill()
        st.kill()
      }
    },
    { scope: root },
  )

  const items = [...TECH, ...TECH]

  return (
    <section id="tech" ref={root}>
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">
            <span className="idx">05</span> Технологии
          </span>
          <h2>Технологии, которым мы доверяем</h2>
          <p>Подбираем стек под задачу — нативный, кроссплатформенный или гибридный.</p>
        </div>
      </div>
      <div className="marquee-mask" style={{ marginLeft: 24, marginRight: 24 }}>
        <div className="marquee-row" ref={row} style={{ willChange: 'transform', gap: 44 }}>
          {items.map((t, i) => (
            <span className="lg" key={i} style={{ fontSize: 18, gap: 11 }}>
              <t.Logo className="h-7 w-7" />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
