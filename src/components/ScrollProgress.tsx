import { motion, useScroll, useSpring } from 'framer-motion'

/** Lime scroll-progress bar pinned to the top of the page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}
