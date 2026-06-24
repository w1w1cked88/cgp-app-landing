import Reveal from './ui/Reveal'
import { IconStar } from './icons'

type Case = {
  name: string
  category: string
  text: string
  metric: string
  rating: string
  screen: 'finance' | 'fitness' | 'food'
  accent: string // gradient classes
  glow: string // glow color class
}

const CASES: Case[] = [
  {
    name: 'Lumi',
    category: 'Финтех',
    text: 'Необанк нового поколения: переводы, аналитика трат и накопления в пару тапов.',
    metric: '1.2M пользователей',
    rating: '4.9',
    screen: 'finance',
    accent: 'from-iris to-fuchsia',
    glow: 'bg-iris/25',
  },
  {
    name: 'Pulse',
    category: 'Здоровье',
    text: 'Трекер активности и сна с персональными планами и умными напоминаниями.',
    metric: '800K загрузок',
    rating: '4.8',
    screen: 'fitness',
    accent: 'from-emerald to-cyan',
    glow: 'bg-emerald/25',
  },
  {
    name: 'Nova',
    category: 'Доставка',
    text: 'Сервис доставки еды с живой картой курьеров и оплатой в один тап.',
    metric: '320K заказов / мес',
    rating: '4.9',
    screen: 'food',
    accent: 'from-amber to-fuchsia',
    glow: 'bg-amber/25',
  },
]

function Screen({ screen, accent }: { screen: Case['screen']; accent: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-bg-soft p-3 text-left">
      {/* status bar */}
      <div className="flex items-center justify-between px-1 pb-3 pt-1 text-[9px] text-muted">
        <span>9:41</span>
        <span className="flex gap-1">
          <span className="h-2 w-3 rounded-sm bg-muted/50" />
          <span className="h-2 w-2 rounded-sm bg-muted/50" />
        </span>
      </div>

      {/* header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[9px] text-muted">Привет 👋</div>
          <div className="text-sm font-bold text-heading">
            {screen === 'finance' ? 'Баланс' : screen === 'fitness' ? 'Сегодня' : 'Что закажем?'}
          </div>
        </div>
        <div className={`h-7 w-7 rounded-full bg-linear-to-br ${accent}`} />
      </div>

      {/* hero card */}
      <div className={`relative mb-3 overflow-hidden rounded-2xl bg-linear-to-br ${accent} p-3`}>
        <div className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-white/20 blur-xl" />
        {screen === 'finance' && (
          <>
            <div className="text-[9px] text-white/70">Всего на счетах</div>
            <div className="text-lg font-extrabold text-white">₽ 248 560</div>
            <div className="mt-2 flex items-end gap-1">
              {[5, 8, 4, 9, 6, 11, 7].map((h, i) => (
                <span key={i} className="w-2 rounded-sm bg-white/60" style={{ height: h * 2 }} />
              ))}
            </div>
          </>
        )}
        {screen === 'fitness' && (
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full border-4 border-white/30">
              <div className="absolute inset-0 rounded-full border-4 border-white border-r-transparent border-b-transparent" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-white">8 240</div>
              <div className="text-[9px] text-white/70">шагов · 76% цели</div>
            </div>
          </div>
        )}
        {screen === 'food' && (
          <>
            <div className="text-[9px] text-white/70">Доставим за</div>
            <div className="text-lg font-extrabold text-white">25 мин</div>
            <div className="mt-1 inline-block rounded-full bg-white/20 px-2 py-0.5 text-[9px] text-white">
              Бесплатно от ₽ 990
            </div>
          </>
        )}
      </div>

      {/* list rows */}
      <div className="space-y-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl bg-panel/70 p-2">
            <div className={`h-7 w-7 shrink-0 rounded-lg bg-linear-to-br ${accent} opacity-80`} />
            <div className="flex-1">
              <div className="h-1.5 w-2/3 rounded-full bg-muted/40" />
              <div className="mt-1 h-1.5 w-1/3 rounded-full bg-muted/20" />
            </div>
          </div>
        ))}
      </div>

      {/* tab bar */}
      <div className="absolute inset-x-3 bottom-2 flex items-center justify-around rounded-2xl bg-panel/80 py-2 backdrop-blur">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i === 0 ? `bg-linear-to-br ${accent}` : 'bg-muted/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

function PhoneMock({ c }: { c: Case }) {
  return (
    <div className="relative mx-auto w-[200px]">
      <div className={`absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full ${c.glow} blur-[60px]`} />
      <div className="aspect-[10/20] rounded-[2.3rem] border border-line bg-linear-to-b from-panel-2 to-panel p-2 shadow-2xl shadow-black/50">
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] border border-line/60">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black/70" />
          <Screen screen={c.screen} accent={c.accent} />
        </div>
      </div>
    </div>
  )
}

export default function Cases() {
  return (
    <section id="cases" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Проекты</span>
            <h2 className="text-3xl sm:text-5xl">
              Продукты, которыми <span className="text-gradient">гордимся</span>
            </h2>
          </div>
          <p className="mt-4 max-w-sm text-body md:mt-0">
            Каждый кейс — это метрики, отзывы и реальные пользователи. Вот лишь
            часть наших запусков.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <div className="glass-card group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/40">
                <PhoneMock c={c} />
                <div className="mt-7">
                  <div className="flex items-center justify-between">
                    <span className="chip !px-3 !py-1 text-xs">{c.category}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-heading">
                      <IconStar className="h-4 w-4 fill-amber text-amber" />
                      {c.rating}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-heading">{c.name}</h3>
                  <p className="mt-2 text-[15px] text-muted">{c.text}</p>
                  <div className="mt-4 border-t border-line pt-4 text-sm font-semibold text-violet-bright">
                    {c.metric}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
