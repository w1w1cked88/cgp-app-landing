import Reveal from './ui/Reveal'
import SpotlightCard from './ui/SpotlightCard'
import {
  IconAnalytics,
  IconBackend,
  IconDesign,
  IconMobile,
  IconRocket,
  IconShield,
} from './icons'
import type { ComponentType, SVGProps } from 'react'

type Feature = {
  title: string
  text: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  grad: string
}

const FEATURES: Feature[] = [
  {
    title: 'Мобильная разработка',
    text: 'Нативные iOS и Android приложения с идеальным пользовательским опытом и плавными анимациями 60 fps.',
    Icon: IconMobile,
    grad: 'from-iris to-fuchsia',
  },
  {
    title: 'UI/UX дизайн',
    text: 'Проектируем интерфейсы, которые не только красиво выглядят, но и решают задачи бизнеса и пользователя.',
    Icon: IconDesign,
    grad: 'from-fuchsia to-amber',
  },
  {
    title: 'Бэкенд и интеграции',
    text: 'Надёжные серверные решения, API и интеграции с любыми сервисами и платёжными системами.',
    Icon: IconBackend,
    grad: 'from-indigo to-iris',
  },
  {
    title: 'Аналитика и рост',
    text: 'Подключаем продуктовую аналитику, тестируем гипотезы и системно помогаем продукту расти.',
    Icon: IconAnalytics,
    grad: 'from-cyan to-indigo',
  },
  {
    title: 'QA и тестирование',
    text: 'Ручное и автоматическое тестирование, чтобы каждый релиз был стабильным на всех устройствах.',
    Icon: IconShield,
    grad: 'from-emerald to-cyan',
  },
  {
    title: 'Запуск и поддержка',
    text: 'Публикуем в App Store и Google Play, сопровождаем релизы и развиваем продукт после запуска.',
    Icon: IconRocket,
    grad: 'from-amber to-fuchsia',
  },
]

export default function Features() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">О нас</span>
          <h2 className="text-3xl sm:text-5xl">
            Полный цикл создания
            <br /> <span className="text-gradient">мобильных продуктов</span>
          </h2>
          <p className="mt-5 text-lg text-body">
            Мы — команда профессионалов, которая закрывает все этапы: от первой
            идеи и дизайна до запуска, аналитики и роста.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <SpotlightCard className="glass-card group h-full rounded-3xl p-7 transition-colors duration-300 hover:border-violet/40">
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${f.grad} text-white shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110`}
                >
                  <f.Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-heading">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
