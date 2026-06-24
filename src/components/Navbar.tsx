import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IconClose, IconMenu } from './icons'

const LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Команда', href: '#team' },
  { label: 'Процесс', href: '#process' },
  { label: 'Технологии', href: '#tech' },
]

function Logomark() {
  return (
    <svg className="logomark" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="#A3E635" />
      <path d="M21 12a6 6 0 1 0 0 8" stroke="#0a0b0c" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function Brand() {
  return (
    <a href="#top" className="brand">
      <Logomark />
      <span>
        <b>CGP</b>
        <span className="dot-app">.app</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <Brand />
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a href="#contact" className="btn btn-primary">
            Обсудить проект
          </a>
          <button
            type="button"
            className="burger"
            aria-label="Меню"
            onClick={() => setOpen(true)}
          >
            <IconMenu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="wrap nav" style={{ padding: 0 }}>
              <Brand />
              <button
                type="button"
                className="burger"
                style={{ display: 'flex' }}
                aria-label="Закрыть"
                onClick={() => setOpen(false)}
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
              style={{ marginTop: 12 }}
            >
              {LINKS.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="m-link"
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary btn-lg"
                style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}
                onClick={() => setOpen(false)}
              >
                Обсудить проект
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
