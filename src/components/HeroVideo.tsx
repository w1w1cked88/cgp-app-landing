import { useRef, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroVideo() {
  const section = useRef<HTMLElement>(null)
  const media = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  useGSAP(
    () => {
      const q = gsap.utils.selector(section)
      const mm = gsap.matchMedia()
      // Desktop + motion-OK: pinned cinematic scrub scene
      mm.add('(min-width: 921px) and (prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: '+=120%',
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        })
        tl.to(media.current, { scale: 1.16, filter: 'blur(7px)', ease: 'none' }, 0)
          .to(inner.current, { yPercent: -22, autoAlpha: 0, ease: 'none' }, 0)
          .to(q('.vchip'), { yPercent: -70, autoAlpha: 0, ease: 'none' }, 0)
      })
    },
    { scope: section },
  )

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
      <div className="vhero-media" ref={media}>
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${import.meta.env.BASE_URL}video/team-poster.webp`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut', delay: 0.1 }}
        >
          <source src={`${import.meta.env.BASE_URL}video/team.mp4`} type="video/mp4" />
        </motion.video>
      </div>
      <div className="vhero-scrim" />
      <div className="vhero-grid" />

      <span className="vchip c1">
        <span className="d" /> iOS · Android
      </span>
      <span className="vchip c2">✓ build passed</span>
      <span className="vchip c3">
        <span className="d" /> 1.2M+ установок
      </span>

      <button
        type="button"
        className="vpause"
        onClick={togglePlay}
        aria-label={playing ? 'Пауза видео' : 'Воспроизвести видео'}
      >
        {playing ? (
          <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor">
            <rect x="2" y="1.5" width="3" height="9" rx="1" />
            <rect x="7" y="1.5" width="3" height="9" rx="1" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor">
            <path d="M3 1.8v8.4L10 6 3 1.8Z" />
          </svg>
        )}
      </button>

      <div className="wrap vhero-inner" ref={inner}>
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
            Продуктовая команда
          </motion.span>

          <motion.h1 variants={item}>
            Создаём мобильные приложения, которыми пользуются{' '}
            <span className="accent">миллионы</span>
          </motion.h1>

          <motion.p variants={item} className="sub">
            От идеи и дизайна до запуска, аналитики и роста — под ключ. iOS и Android.
          </motion.p>

          <motion.div variants={item} className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg">
              Обсудить проект →
            </a>
            <a href="#cases" className="btn btn-ghost btn-lg">
              Смотреть кейсы
            </a>
          </motion.div>

          <motion.div variants={item} className="trust">
            <span>
              <span className="star">★</span> 4.9 в App Store
            </span>
            <span className="sep" />
            <span>1.2M+ установок</span>
            <span className="sep" />
            <span>30+ проектов</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-hint">
        <div className="m" />
        scroll
      </div>
    </section>
  )
}
