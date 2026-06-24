import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

type C = {
  cat: string
  name: string
  desc: string
  metric: string
  value: string
  bars: number[]
}

const CASES: C[] = [
  { cat: 'Финтех', name: 'Lumi', desc: 'Необанк нового поколения: переводы, аналитика трат и накопления в пару тапов.', metric: 'Пользователей', value: '1.2M', bars: [5, 8, 6, 10, 7, 12, 9] },
  { cat: 'Здоровье', name: 'Pulse', desc: 'Трекер активности и сна с персональными планами и умными напоминаниями.', metric: 'Загрузок', value: '800K', bars: [6, 7, 9, 8, 11, 10, 13] },
  { cat: 'Доставка', name: 'Nova', desc: 'Сервис доставки еды с живой картой курьеров и оплатой в один тап.', metric: 'Заказов / мес', value: '320K', bars: [4, 6, 8, 7, 9, 11, 12] },
  { cat: 'Соцсеть', name: 'Echo', desc: 'Медиа-платформа коротких видео с умной лентой и креатор-инструментами.', metric: 'DAU', value: '450K', bars: [7, 9, 8, 12, 10, 13, 15] },
]

function CaseCard({ c }: { c: C }) {
  return (
    <article className="case-card">
      <div className="case-vis" style={{ background: 'radial-gradient(120% 120% at 80% 0%, rgba(163,230,53,0.10), transparent 55%), var(--bg-2)' }}>
        <div style={{ width: '78%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted-2)' }}>{c.name}.app</span>
            <span style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,var(--lime),var(--lime-solid))' }} />
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em' }}>
            {c.value}
            <span style={{ color: 'var(--lime)' }}>+</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 46, marginTop: 14 }}>
            {c.bars.map((h, i) => (
              <span
                key={i}
                style={{
                  flex: 1,
                  height: `${h * 7}%`,
                  borderRadius: 3,
                  background: i === c.bars.length - 1 ? 'var(--lime)' : 'var(--line-2)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="case-body">
        <span className="case-cat">{c.cat}</span>
        <h3>{c.name}</h3>
        <p>{c.desc}</p>
        <div className="case-metric">
          <span className="ml">{c.metric}</span>
          <span>
            {c.value}
            <span style={{ color: 'var(--lime)' }}>+</span>
          </span>
        </div>
      </div>
    </article>
  )
}

export default function CasesH() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 921px) and (prefers-reduced-motion: no-preference)', () => {
        const t = track.current!
        const dist = () => t.scrollWidth - window.innerWidth + 48
        gsap.to(t, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => '+=' + dist(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="cases" ref={root} style={{ overflow: 'hidden' }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">
            <span className="idx">02</span> Кейсы
          </span>
          <h2>Продукты, которыми гордимся</h2>
          <p>Каждый кейс — это метрики, отзывы и реальные пользователи. Прокрути вбок →</p>
        </div>
      </div>
      <div className="cases-track" ref={track}>
        {CASES.map((c) => (
          <CaseCard c={c} key={c.name} />
        ))}
      </div>
    </section>
  )
}
