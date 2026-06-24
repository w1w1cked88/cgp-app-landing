import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import { useRef } from 'react'
import AuroraBackground from './ui/AuroraBackground'
import ParticleField from './ui/ParticleField'
import MagneticButton from './ui/MagneticButton'
import { IconArrow, IconCode, IconStar, LogoFigma } from './icons'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  // pointer parallax
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const spring = { stiffness: 90, damping: 18, mass: 0.5 }
  const sx = useSpring(px, spring)
  const sy = useSpring(py, spring)
  const imgX = useTransform(sx, (v) => v * 12)
  const imgY = useTransform(sy, (v) => v * 12)
  const cardAX = useTransform(sx, (v) => v * 34)
  const cardAY = useTransform(sy, (v) => v * 30)
  const cardBX = useTransform(sx, (v) => v * -28)
  const cardBY = useTransform(sy, (v) => v * -22)
  const cardCX = useTransform(sx, (v) => v * 24)
  const cardCY = useTransform(sy, (v) => v * -32)

  // scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40])

  const onMove = (e: React.PointerEvent) => {
    if (reduce) return
    const el = sectionRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    py.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={onMove}
      className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 lg:min-h-screen lg:pb-10 lg:pt-0"
    >
      {/* backdrop */}
      <AuroraBackground />
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.5]" aria-hidden="true" />
      <ParticleField className="absolute inset-0 -z-10 h-full w-full" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-bg to-transparent"
        aria-hidden="true"
      />

      <div className="container-x grid items-center gap-10 lg:min-h-screen lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        {/* ---------- copy ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY }}
          className="relative z-10 text-center lg:pt-24 lg:text-left"
        >
          <motion.span variants={item} className="chip">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-bright opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-bright" />
            </span>
            Продуктовая команда
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.4rem]"
          >
            Создаём мобильные
            <br className="hidden sm:block" /> приложения, которыми
            <br className="hidden sm:block" /> пользуются{' '}
            <span className="text-gradient animate-gradient">миллионы</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg text-body lg:mx-0"
          >
            CGP.APP — команда, которая превращает идеи в удобные и полезные iOS
            и&nbsp;Android продукты. Дизайн, разработка, бэкенд, аналитика
            и&nbsp;рост — под ключ.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start"
          >
            <MagneticButton href="#contact" className="btn-primary w-full sm:w-auto">
              Обсудить проект
              <IconArrow className="h-[18px] w-[18px]" />
            </MagneticButton>
            <a href="#cases" className="btn-ghost w-full sm:w-auto">
              Смотреть кейсы
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex items-center justify-center gap-4 lg:justify-start"
          >
            <div className="flex -space-x-3">
              {[
                'from-iris to-fuchsia',
                'from-indigo to-iris',
                'from-fuchsia to-amber',
                'from-cyan to-indigo',
              ].map((g, i) => (
                <div
                  key={i}
                  className={`h-9 w-9 rounded-full bg-linear-to-br ${g} ring-2 ring-bg`}
                />
              ))}
            </div>
            <div className="text-left text-sm">
              <div className="flex items-center gap-1 text-heading">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconStar key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                ))}
                <span className="ml-1 font-semibold">4.9</span>
              </div>
              <span className="text-muted">1.2M+ установок в App Store и Google Play</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- visual ---------- */}
        <motion.div
          style={{ y: visualY }}
          className="relative z-0 mx-auto w-full max-w-[640px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ x: imgX, y: imgY }}
            className="relative"
          >
            {/* glow halo behind */}
            <div
              className="absolute left-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/30 blur-[90px]"
              aria-hidden="true"
            />
            <img
              src={`${import.meta.env.BASE_URL}img/hero.webp`}
              alt="3D-иллюстрация продуктовой команды CGP.APP за работой"
              width={1376}
              height={768}
              fetchPriority="high"
              className="mask-hero w-full select-none"
              draggable={false}
            />
          </motion.div>

          {/* floating glass cards */}
          <motion.div
            style={{ x: cardAX, y: cardAY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -left-2 top-10 sm:left-2"
          >
            <div className="glass-card animate-float flex items-center gap-3 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-iris to-fuchsia text-white">
                <IconCode className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-heading">CI/CD</div>
                <div className="text-xs text-muted">build passed ✓</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ x: cardBX, y: cardBY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="absolute -right-1 top-24 sm:right-0"
          >
            <div
              className="glass-card animate-float-slow flex items-center gap-3 px-4 py-3"
              style={{ animationDelay: '-3s' }}
            >
              <LogoFigma className="h-9 w-9" />
              <div className="leading-tight">
                <div className="text-sm font-semibold text-heading">UI-kit</div>
                <div className="text-xs text-muted">design system</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ x: cardCX, y: cardCY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-6 left-6 sm:left-12"
          >
            <div
              className="glass-card animate-float flex items-center gap-3 px-4 py-3"
              style={{ animationDelay: '-1.5s' }}
            >
              <div className="text-2xl font-bold text-gradient font-display">4.9★</div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-heading">App Store</div>
                <div className="text-xs text-muted">рейтинг</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-line p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-violet-bright"
          />
        </div>
      </motion.div>
    </section>
  )
}
