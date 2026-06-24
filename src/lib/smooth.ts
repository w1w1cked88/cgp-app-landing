import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

/**
 * Initialise Lenis momentum scroll and drive it from GSAP's single ticker
 * (the canonical, jitter-free integration). Disabled for reduced-motion.
 * Returns a cleanup fn.
 */
export function initSmoothScroll(): () => void {
  if (typeof window === 'undefined') return () => {}
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return () => {}

  const lenis = new Lenis({
    autoRaf: false,
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const onTick = (time: number) => lenis.raf(time * 1000)
  gsap.ticker.add(onTick)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(onTick)
    lenis.destroy()
  }
}
