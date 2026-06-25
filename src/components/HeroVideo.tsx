import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import CountUp from './ui/CountUp'
import { IconBolt, IconRocket, IconStar, IconUsers } from './icons'
import type { ComponentType, SVGProps } from 'react'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

type Stat = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  count?: number
  plus?: boolean
  fixed?: string
  l: string
}
const STATS: Stat[] = [
  { Icon: IconRocket, count: 50, plus: true, l: 'проектов запущено' },
  { Icon: IconUsers, count: 15, plus: true, l: 'специалистов в команде' },
  { Icon: IconBolt, count: 4, plus: true, l: 'лет создаём приложения' },
  { Icon: IconStar, fixed: '5.0', l: 'средний рейтинг клиентов' },
]

export default function HeroVideo() {
  const section = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  // subtle scroll parallax of the video block
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ['start start', 'end start'],
  })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -56])

  // pointer tilt on the video card
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 120, damping: 14, mass: 0.4 })
  const sry = useSpring(ry, { stiffness: 120, damping: 14, mass: 0.4 })
  const onTilt = (e: React.PointerEvent) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * 8)
    rx.set(-py * 8)
  }
  const resetTilt = () => {
    rx.set(0)
    ry.set(0)
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="vhero" id="top" ref={section}>
      <div className="vhero-bg" />

      <div className="wrap vhero-grid2">
        {/* ---------- copy ---------- */}
        <motion.div
          className="vhero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="eyebrow-chip">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--lime)',
                animation: 'pulse 2.2s infinite',
              }}
            />
            CGP.APP
          </motion.span>

          <motion.h1 variants={item}>
            Разрабатываем <span className="accent">мобильные приложения</span>, которые
            любят пользователи
          </motion.h1>

          <motion.p variants={item} className="sub">
            CGP.APP — команда опытных разработчиков, создающих быстрые, надёжные и
            красивые мобильные приложения под iOS и Android.
          </motion.p>

          <motion.div variants={item} className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg">
              Обсудить проект →
            </a>
            <a href="#cases" className="btn btn-ghost btn-lg">
              Смотреть работы
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-stats">
            {STATS.map((s) => (
              <div className="hstat" key={s.l}>
                <div className="hico">
                  <s.Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="hn">
                  {s.fixed ? s.fixed : <CountUp to={s.count!} />}
                  {s.plus && <span className="plus">+</span>}
                </div>
                <div className="hl">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------- framed video ---------- */}
        <motion.div
          className="vhero-visual"
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <div className="video-glow" />
          <motion.div
            className="video-card"
            onPointerMove={onTilt}
            onPointerLeave={resetTilt}
            style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`${import.meta.env.BASE_URL}video/team-poster.webp`}
            >
              <source src={`${import.meta.env.BASE_URL}video/team.mp4`} type="video/mp4" />
            </video>
            <button
              type="button"
              className="vpause"
              onClick={togglePlay}
              aria-label={playing ? 'Пауза видео' : 'Воспроизвести видео'}
            >
              {playing ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <rect x="2" y="1.5" width="3" height="9" rx="1" />
                  <rect x="7" y="1.5" width="3" height="9" rx="1" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M3 1.8v8.4L10 6 3 1.8Z" />
                </svg>
              )}
            </button>
          </motion.div>

          <span className="vchip c1" style={{ animation: 'floaty 6s ease-in-out infinite' }}>
            <span className="d" /> iOS · Android
          </span>
          <span
            className="vchip c2"
            style={{ animation: 'floaty 7.5s ease-in-out infinite', animationDelay: '-2s' }}
          >
            ✓ build passed
          </span>
          <span
            className="vchip c3"
            style={{ animation: 'floaty 6.8s ease-in-out infinite', animationDelay: '-1s' }}
          >
            <span className="d" /> 1.2M+ установок
          </span>
        </motion.div>
      </div>
    </section>
  )
}
