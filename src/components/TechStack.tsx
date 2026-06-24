import Reveal from './ui/Reveal'
import Marquee from './ui/Marquee'
import { TECH } from './icons'

function Tile({ name, Logo }: { name: string; Logo: (typeof TECH)[number]['Logo'] }) {
  return (
    <div className="glass flex shrink-0 items-center gap-3 rounded-2xl px-5 py-3.5 transition-colors duration-300 hover:border-violet/40">
      <Logo className="h-8 w-8" />
      <span className="whitespace-nowrap font-semibold text-heading">{name}</span>
    </div>
  )
}

export default function TechStack() {
  const firstRow = TECH.slice(0, 5)
  const secondRow = TECH.slice(5)

  return (
    <section id="tech" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Технологии</span>
          <h2 className="text-3xl sm:text-5xl">
            Технологии, которым <span className="text-gradient">мы доверяем</span>
          </h2>
          <p className="mt-5 text-lg text-body">
            Подбираем стек под задачу — нативный, кроссплатформенный или гибридный.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <Marquee duration={34}>
          {firstRow.map((t) => (
            <Tile key={t.name} name={t.name} Logo={t.Logo} />
          ))}
        </Marquee>
        <Marquee duration={30} reverse>
          {secondRow.map((t) => (
            <Tile key={t.name} name={t.name} Logo={t.Logo} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
