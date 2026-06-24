import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import Reveal from './ui/Reveal'
import {
  IconBulb,
  IconCode,
  IconDesign,
  IconRocket,
  IconShield,
} from './icons'
import type { ComponentType, SVGProps } from 'react'

type Step = {
  title: string
  text: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const STEPS: Step[] = [
  { title: 'Идея и аналитика', text: 'Погружаемся в задачу, исследуем рынок и формируем продуктовую стратегию.', Icon: IconBulb },
  { title: 'Дизайн и прототип', text: 'Проектируем UX, рисуем интерфейсы и собираем кликабельный прототип.', Icon: IconDesign },
  { title: 'Разработка', text: 'Нативный код для iOS и Android, автотесты и настроенный CI/CD.', Icon: IconCode },
  { title: 'Тестирование', text: 'Проверяем на реальных устройствах и ловим баги до релиза.', Icon: IconShield },
  { title: 'Запуск и рост', text: 'Публикуем в сторах, подключаем аналитику и развиваем продукт.', Icon: IconRocket },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineX = useRef<HTMLDivElement>(null)
  const lineY = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set([lineX.current, lineY.current], { scaleX: 1, scaleY: 1 })
        return
      }
      const st = {
        trigger: sectionRef.current,
        start: 'top 62%',
        end: 'bottom 78%',
        scrub: 0.4,
      }
      if (lineX.current)
        gsap.fromTo(lineX.current, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: st })
      if (lineY.current)
        gsap.fromTo(lineY.current, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: st })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Процесс</span>
          <h2 className="text-3xl sm:text-5xl">
            Как мы <span className="text-gradient">работаем</span>
          </h2>
          <p className="mt-5 text-lg text-body">
            Прозрачный процесс из пяти этапов — от идеи до растущего в сторах
            продукта.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* desktop horizontal track */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block">
            <div
              ref={lineX}
              className="h-px origin-left bg-linear-to-r from-iris to-fuchsia"
            />
          </div>
          {/* mobile vertical track */}
          <div className="absolute bottom-0 left-[27px] top-7 w-px bg-line lg:hidden">
            <div
              ref={lineY}
              className="h-full w-px origin-top bg-linear-to-b from-iris to-fuchsia"
            />
          </div>

          <div className="grid gap-9 lg:grid-cols-5 lg:gap-5">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.08}
                className="relative flex gap-5 lg:flex-col lg:gap-0"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-bg text-violet-bright shadow-lg shadow-black/40">
                  <s.Icon className="h-6 w-6" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-iris to-fuchsia text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <div className="lg:mt-6">
                  <h3 className="text-lg font-bold text-heading">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted lg:pr-3">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
