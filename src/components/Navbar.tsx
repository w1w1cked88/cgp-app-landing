import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IconClose, IconMenu, LogoMark } from './icons'

const LINKS = [
  { label: 'О нас', href: '#about' },
  { label: 'Проекты', href: '#cases' },
  { label: 'Команда', href: '#team' },
  { label: 'Процесс', href: '#process' },
  { label: 'Технологии', href: '#tech' },
]

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight">
      <LogoMark className="h-9 w-9" />
      <span className="text-heading">
        CGP<span className="text-gradient">.APP</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'glass border-b' : 'border-b border-transparent'
        }`}
      >
        <nav className="container-x flex h-[68px] items-center justify-between">
          <Brand />

          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-body transition-colors hover:text-heading"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary !px-6 !py-2.5 text-sm">
              Связаться с нами
            </a>
          </div>

          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen(true)}
            className="glass flex h-11 w-11 items-center justify-center rounded-xl text-heading lg:hidden"
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-[68px] items-center justify-between">
              <Brand />
              <button
                type="button"
                aria-label="Закрыть"
                onClick={() => setOpen(false)}
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-heading"
              >
                <IconClose className="h-6 w-6" />
              </button>
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
              className="container-x mt-6 flex flex-col gap-2"
            >
              {LINKS.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                  className="border-b border-line/60 py-4 font-display text-2xl font-semibold text-heading"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-6 w-full"
              >
                Связаться с нами
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
