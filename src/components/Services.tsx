import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import {
  IconAnalytics,
  IconBackend,
  IconDesign,
  IconMobile,
  IconRocket,
  IconShield,
} from './icons'
import type { ComponentType, SVGProps } from 'react'

type S = { t: string; d: string; tag: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }

const SERVICES: S[] = [
  { t: 'Мобильная разработка', d: 'Нативные iOS и Android приложения с идеальным UX и плавными анимациями 60 fps. Swift, Kotlin, React Native.', tag: 'iOS · Android', Icon: IconMobile },
  { t: 'UI/UX дизайн', d: 'Проектируем интерфейсы, которые не только красиво выглядят, но и решают задачи бизнеса и пользователя.', tag: 'Figma · Design system', Icon: IconDesign },
  { t: 'Бэкенд и интеграции', d: 'Надёжные серверные решения, API, платежи и интеграции с любыми сервисами. Node, GraphQL, Firebase.', tag: 'API · Payments', Icon: IconBackend },
  { t: 'Аналитика и рост', d: 'Подключаем продуктовую аналитику, тестируем гипотезы и системно помогаем продукту расти.', tag: 'Метрики · A/B', Icon: IconAnalytics },
  { t: 'QA и тестирование', d: 'Ручное и автоматическое тестирование, чтобы каждый релиз был стабильным на всех устройствах.', tag: 'Auto · Manual', Icon: IconShield },
  { t: 'Запуск и поддержка', d: 'Публикуем в App Store и Google Play, сопровождаем релизы и развиваем продукт после запуска.', tag: 'Release · Support', Icon: IconRocket },
]

export default function Services() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const cards = q('.stack-card') as HTMLElement[]
      const mm = gsap.matchMedia()
      mm.add('(min-width: 921px) and (prefers-reduced-motion: no-preference)', () => {
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return
          gsap.to(card, {
            scale: 0.93,
            autoAlpha: 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top 150px',
              end: 'top 110px',
              scrub: true,
            },
          })
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="services" ref={root}>
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">
            <span className="idx">01</span> Услуги
          </span>
          <h2>Полный цикл создания мобильных продуктов</h2>
          <p>От идеи и дизайна до запуска, аналитики и роста — закрываем все этапы под ключ.</p>
        </div>

        <div className="stack">
          {SERVICES.map((s, i) => (
            <article
              className="stack-card"
              key={s.t}
              style={{ top: 96 + i * 14, zIndex: i + 1, minHeight: 196 }}
            >
              <div className="card-glow" />
              <div className="card-top">
                <div className="card-ico">
                  <s.Icon className="h-5 w-5" />
                </div>
                <span className="card-num">
                  {String(i + 1).padStart(2, '0')} / 06
                </span>
              </div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <span className="arrow">{s.tag} →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
