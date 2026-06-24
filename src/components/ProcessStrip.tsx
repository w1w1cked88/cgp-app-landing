import { Fragment } from 'react'
import { motion } from 'framer-motion'
import {
  IconAnalytics,
  IconArrow,
  IconCode,
  IconDesign,
  IconRocket,
  IconShield,
} from './icons'
import type { ComponentType, SVGProps } from 'react'

type Step = { n: string; t: string; d: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }

const STEPS: Step[] = [
  { n: '1', t: 'Анализ', d: 'Изучаем вашу идею и целевую аудиторию', Icon: IconAnalytics },
  { n: '2', t: 'Дизайн', d: 'Создаём удобный и современный UI/UX', Icon: IconDesign },
  { n: '3', t: 'Разработка', d: 'Пишем чистый и быстрый код', Icon: IconCode },
  { n: '4', t: 'Тестирование', d: 'Проверяем качество на всех устройствах', Icon: IconShield },
  { n: '5', t: 'Запуск и поддержка', d: 'Публикуем и помогаем развивать продукт', Icon: IconRocket },
]

export default function ProcessStrip() {
  return (
    <section id="process" className="pstrip-sec">
      <div className="wrap">
        <motion.div
          className="pstrip"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {STEPS.map((s, i) => (
            <Fragment key={s.t}>
              <div className="pstep">
                <div className="pico">
                  <s.Icon className="h-5 w-5" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="ptitle">
                    {s.n}. {s.t}
                  </div>
                  <div className="pdesc">{s.d}</div>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="parrow">
                  <IconArrow className="h-4 w-4" />
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
