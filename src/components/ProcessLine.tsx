import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IconBulb, IconCode, IconDesign, IconRocket, IconShield } from './icons'
import type { ComponentType, SVGProps } from 'react'

type Step = { t: string; d: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }

const STEPS: Step[] = [
  { t: 'Идея и аналитика', d: 'Погружаемся в задачу, исследуем рынок и формируем продуктовую стратегию.', Icon: IconBulb },
  { t: 'Дизайн и прототип', d: 'Проектируем UX, рисуем интерфейсы и собираем кликабельный прототип.', Icon: IconDesign },
  { t: 'Разработка', d: 'Нативный код для iOS и Android, автотесты и настроенный CI/CD.', Icon: IconCode },
  { t: 'Тестирование', d: 'Проверяем на реальных устройствах и ловим баги до релиза.', Icon: IconShield },
  { t: 'Запуск и рост', d: 'Публикуем в сторах, подключаем аналитику и развиваем продукт.', Icon: IconRocket },
]

export default function ProcessLine() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 75%'],
  })
  const fillH = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">
            <span className="idx">04</span> Процесс
          </span>
          <h2>Как мы работаем</h2>
          <p>Прозрачный процесс из пяти этапов — от идеи до растущего в сторах продукта.</p>
        </div>

        <div className="proc">
          <div className="proc-line" style={{ background: 'var(--line)' }}>
            <motion.div
              style={{
                height: fillH,
                width: '100%',
                background: 'linear-gradient(var(--lime), var(--lime-solid))',
                transformOrigin: 'top',
              }}
            />
          </div>

          {STEPS.map((s, i) => (
            <motion.div
              className="proc-step"
              key={s.t}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="proc-dot">
                <s.Icon className="h-5 w-5" />
                <span className="proc-num">{i + 1}</span>
              </div>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
