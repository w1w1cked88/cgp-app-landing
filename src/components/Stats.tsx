import Reveal from './ui/Reveal'
import CountUp from './ui/CountUp'
import { IconArrow, IconRocket, IconStar, IconTarget, IconUsers } from './icons'
import type { ComponentType, SVGProps } from 'react'

type Stat = {
  to: number
  suffix?: string
  label: string
  sub: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const STATS: Stat[] = [
  { to: 7, label: 'человек', sub: 'в команде', Icon: IconUsers },
  { to: 30, suffix: '+', label: 'проектов', sub: 'успешно запустили', Icon: IconStar },
  { to: 5, suffix: '+', label: 'лет', sub: 'создаём продукты', Icon: IconRocket },
  { to: 1, label: 'цель', sub: 'крутые продукты', Icon: IconTarget },
]

export default function Stats() {
  return (
    <section id="team" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-iris/10 blur-[120px]" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="section-eyebrow">Команда</span>
          <h2 className="text-3xl sm:text-5xl">
            Наша команда — <br />
            <span className="text-gradient">наша сила</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-body">
            Мы разные, но нас объединяет любовь к своему делу, внимание к деталям
            и стремление делать продукт лучше каждый день.
          </p>
          <a href="#contact" className="btn-ghost mt-8">
            Познакомиться ближе
            <IconArrow className="h-[18px] w-[18px]" />
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass-card h-full rounded-3xl p-6 transition-colors duration-300 hover:border-violet/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-line text-violet-bright">
                  <s.Icon className="h-5 w-5" />
                </div>
                <div className="font-display text-4xl font-extrabold text-heading sm:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-semibold text-heading">{s.label}</div>
                <div className="text-sm text-muted">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
