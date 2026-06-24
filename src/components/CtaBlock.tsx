import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import { IconCheck } from './icons'

export default function CtaBlock() {
  return (
    <section id="contact">
      <div className="wrap">
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 30, clipPath: 'inset(8% 0% 8% 0% round 16px)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 16px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-grid" />
          <div className="cta-inner">
            <span className="badge">
              <span className="pulse" /> Свяжитесь с нами
            </span>
            <h2>Готовы обсудить ваш проект?</h2>
            <p>
              Расскажите об идее — вернёмся с оценкой, сроками и планом запуска в
              течение одного рабочего дня.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 18,
                flexWrap: 'wrap',
                margin: '22px 0 4px',
                color: 'var(--muted)',
                fontSize: 14,
              }}
            >
              {['Бесплатная оценка', 'Прозрачные сроки', 'Поддержка после запуска'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 99,
                      background: 'var(--lime)',
                      color: '#0a0b0c',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {t}
                </span>
              ))}
            </div>

            <div className="hero-cta">
              <MagneticButton href="mailto:hello@cgp.app" className="btn btn-primary btn-lg">
                Написать на почту →
              </MagneticButton>
              <a href="https://t.me/cgp_app" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
                Telegram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
